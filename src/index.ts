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
app.post('/payment', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: 1000,
      currency: 'USD',
      description: 'test backend',
      payment_method: id,
      confirm: true,
    });

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
        actionRequired: true,
        clientSecret: payment.client_secret,
      });
    }
    return res.status(200).json({ status: 400, message: 'payment failed' });
  } catch (error) {
    console.log(error);
    // throw error;
  }
});
app.use('/auth', authRoute);
app.use('/vendor', vendorRoute);
app.use('/customer', customerRoute);
app.use('/shop', publicRoute);
app.use(checkAuth);
app.use('/secret', (req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers);
  console.log(req.body);
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
