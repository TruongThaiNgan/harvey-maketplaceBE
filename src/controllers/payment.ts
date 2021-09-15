import Stripe from 'stripe';
import { NextFunction, Request, Response } from 'express';
import express from 'express';
import { sendMailPaymentSuccess } from '../utils/sendMail';
import { AuthRequest } from '../middlewares/checkauth';
import { addPaymentID, findInfo, findListPayment, getCustomerID, PaymentMethod, updateInfo } from '../model/customer';
import { createInvoice, findAllInvoice, findInvoice } from '../model/invoice';
export const stripe = new Stripe(
  'sk_test_51JUBi4BehStfnEoed7aq4TazuUSYGiBEEzCo0VxE4jO0kEEBAs5vY5D5PCeaehL616ppcWUeIo3qN9cOIp92uMYt00JCbB6Lcq',
  {
    apiVersion: '2020-08-27',
  },
);
const endpointSecret = 'whsec_cEhU1REg855Uj1jqyrTVvfJatMu1vXlF';

export const webhook = async (req: Request, res: Response, next: NextFunction) => {
  const sig = req.headers['stripe-signature'] as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const customerId = paymentIntent?.customer as string;
      if (!customerId) break;
      const customer = await stripe.customers.retrieve(customerId);
      const { email } = customer as Stripe.Customer;
      sendMailPaymentSuccess(email);
      console.log('PaymentIntent was successful!');
      break;

    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('PaymentMethod was attached to a Customer!');
      break;

    case 'payment_method.payment_failed':
      console.log('payment failed');
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.send();
};

export const cardPayment = async (req: Request, res: Response, next: NextFunction) => {
  const { id, amount, description } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'USD',
      description: description,
      payment_method: id,
      confirm: true,
      payment_method_types: ['card'],
    });

    if (paymentIntent.status === 'succeeded')
      return res.status(200).json({
        status: 200,
        message: 'payment successful',
        id: paymentIntent.id,
      });

    if (paymentIntent.status === 'requires_action') {
      return res.status(200).json({
        status: 200,
        message: '3D secure required',
        id: paymentIntent.id,
        actionRequired: true,
        clientSecret: paymentIntent.client_secret,
      });
    }
    return res.status(200).json({ status: 400, message: 'payment failed' });
  } catch (error: any) {
    return res.status(200).json({ status: 400, message: error?.message });
  }
};

export const ibanPayment = async (req: Request, res: Response, next: NextFunction) => {
  const { email, amount, description } = req.body;
  const customer = await stripe.customers.create({ email });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'EUR',
    customer: customer.id,
    description: description,
    payment_method_types: ['sepa_debit'],
    setup_future_usage: 'off_session',
  });

  res.status(200).json({
    status: 200,
    id: paymentIntent.id,
    clientSecret: paymentIntent.client_secret,
  });
};

export const check = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const paymentIntent = await stripe.paymentIntents.retrieve(id);
    if (paymentIntent?.status === 'succeeded') {
      return res.json({
        status: 200,
        message: 'Payment successful!',
        id,
      });
    }
    res.status(400).json({
      status: 200,
      message: 'Payment failed! Please try again later.',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
};

export const addPaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // get id user
    const id = (req as AuthRequest)?.userData?.id;
    if (!id)
      return res.status(200).json({
        message: 'can not find id',
        status: 400,
      });

    const { paymentID } = req.body;

    const customerID = await getCustomerID(id);
    if (!customerID)
      return res.status(200).json({
        message: 'can not find customer id',
        status: 400,
      });
    const info = await findInfo(id);
    if (info)
      await stripe.paymentMethods.update(paymentID, {
        billing_details: {
          address: {
            city: info.city,
            country: info.country,
            postal_code: info.postCode,
          },
          name: info.firstName + info.lastName,
          email: info.email,
          phone: info.phone,
        },
      });

    const paymentMethod = await stripe.paymentMethods.retrieve(paymentID);
    const paymentMethodParams: PaymentMethod = {
      paymentID,
      fingerprint: paymentMethod.card?.fingerprint ?? '',
    };
    const listPaymentID = await addPaymentID(id, paymentMethodParams);
    if (!listPaymentID)
      return res.status(200).json({
        message: 'card is exist',
        status: 400,
      });

    const attach = await stripe.paymentMethods.attach(paymentID, {
      customer: customerID,
    });

    return res.status(200).json({
      message: 'add payment method success',
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({ message: 'error from server' });
  }
};

export const getListPayment = async (req: Request, res: Response, next: NextFunction) => {
  const id = (req as AuthRequest)?.userData?.id;
  if (!id) return res.status(400);
  try {
    const listPaymentID = await findListPayment(id);
    return res.status(200).json({ message: 'get success', status: 200, listPaymentID });
  } catch (error) {
    return res.status(200).json({ message: 'get fail', status: 400 });
  }
};

export const getInfo = async (req: Request, res: Response, next: NextFunction) => {
  const id = (req as AuthRequest)?.userData?.id;
  if (!id) return res.status(400);
  try {
    const info = await findInfo(id);
    return res.status(200).json({ message: 'get success', status: 200, info: info ?? {} });
  } catch (error) {
    return res.status(200).json({ message: 'get fail', status: 400 });
  }
};

export const postInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const info = req.body;
    const id = (req as AuthRequest)?.userData?.id;
    if (!id) return res.status(400);
    const customer = await updateInfo(id, info);
    console.log(customer);
    if (!customer) return res.status(200).json({ message: 'update fail', status: 400 });
    return res.status(200).json({ message: 'post info', status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const postSetupIntent = async (req: Request, res: Response, next: NextFunction) => {
  const id = (req as AuthRequest)?.userData?.id;
  if (!id) return res.status(400);
  const customerID = await getCustomerID(id);
  const intent = await stripe.setupIntents.create({
    customer: customerID,
  });
  return res.status(200).json({
    message: 'create setup intent',
    status: 200,
    clientSecret: intent.client_secret,
  });
};

export const postInvoice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = (req as AuthRequest)?.userData?.id;
    if (!id) return res.status(400);
    const customerID = await getCustomerID(id);
    const { invoice } = req.body;
    console.log(invoice);
    createInvoice({
      customerID: customerID!,
      paymentMethodID: invoice.paymentMethodID,
      amount: +invoice.amount,
      description: invoice.description,
    });
    return res.status(200).json({
      message: 'create invoice',
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getInvoice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const invoice = await findAllInvoice();
    console.log(invoice);
    return res.status(200).json({
      message: 'get invoice success',
      status: 200,
      invoice,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postCharge = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.body;
    const invoice = await findInvoice(id);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: 'USD',
      customer: invoice?.customerID,
      payment_method: invoice?.paymentMethodID,
      description: invoice?.description,
      off_session: true,
      confirm: true,
    });

    return res.status(200).json({
      message: ' charge success',
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
};
