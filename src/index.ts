import * as dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import vendorRoute from './routes/vendorRoute';
import authRoute from './routes/authRoute';
import customerRoute from './routes/customerRoute';
import paymentRoute from './routes/paymentRoute';
import imageRoute from './routes/imageRoute';
import publicRoute from './routes/publicRoute';
import { checkAuth } from './middlewares/checkauth';
import path from 'path';
dotenv.config();

const app = express();
app.use(cors());
app.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
  if (req.originalUrl === '/payment/webhook') {
    express.raw({ type: 'application/json' })(req, res, next);
  } else {
    express.json()(req, res, next);
  }
});
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/images', imageRoute);

app.use('/payment', paymentRoute);
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
