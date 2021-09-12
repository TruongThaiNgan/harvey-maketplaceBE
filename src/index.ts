import * as dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import vendorRoute from './routes/vendorRoute';
import authRoute from './routes/authRoute';
import customerRoute from './routes/customerRoute';
import publicRoute from './routes/publicRoute';
import { checkAuth } from './middlewares/checkauth';
import Stripe from 'stripe';
const stripe = new Stripe(
  'sk_test_51JUBi4BehStfnEoed7aq4TazuUSYGiBEEzCo0VxE4jO0kEEBAs5vY5D5PCeaehL616ppcWUeIo3qN9cOIp92uMYt00JCbB6Lcq',
  {
    apiVersion: '2020-08-27',
  },
);
dotenv.config();

const app = express();
app.use(cors({ origin: process.env.URL_CLIENT }));
app.use(express.json()); // for parsing application/json
const endpointSecret = 'whsec_cEhU1REg855Uj1jqyrTVvfJatMu1vXlF';

app.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
  const sig = request.headers['stripe-signature'] as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err: any) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  console.log(event.data);
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful!');
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('PaymentMethod was attached to a Customer!');
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Handle the event
  console.log(`Unhandled event type ${event.type}`);

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});
app.post('/payment', async (req: Request, res: Response, next: NextFunction) => {
  const { id, amount, description } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'USD',
      description: description,
      payment_method: id,
      confirm: true,
    });
    console.log(payment.charges.data);

    if (payment.status === 'succeeded')
      return res.status(200).json({
        status: 200,
        message: 'Payment successful',
        id: payment.id,
      });

    if (payment.status === 'requires_action') {
      return res.status(200).json({
        status: 200,
        message: '3D secure required',
        id: payment.id,
        actionRequired: true,
        clientSecret: payment.client_secret,
      });
    }
    return res.status(200).json({ status: 400, message: 'payment failed' });
  } catch (error: any) {
    return res.status(200).json({ status: 400, message: error?.message });
  }
});
app.get('/check/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const paymentIntent = await stripe.paymentIntents.retrieve(id);
    const charges = paymentIntent.charges.data;
    console.log('🚀 ~ file: index.ts ~ line 91 ~ app.get ~ charges', charges);
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
});
app.use('/auth', authRoute);
app.use('/vendor', vendorRoute);
app.use('/customer', customerRoute);
app.use('/shop', publicRoute);
app.use(checkAuth);
app.use('/secret', (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: 'secret' });
});

// Add error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500);
  return res.json({ message: error.message || 'An unknown error occurred' });
});
const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.DB_CON!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running at ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
