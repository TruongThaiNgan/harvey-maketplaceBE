import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import vendorRoute from './routes/vendorRoute';
import authRoute from './routes/authRoute';
import customerRoute from './routes/customerRoute';
import publicRoute from './routes/publicRoute';
import { checkAuth } from './middlewares/checkauth';
dotenv.config();

const app = express();
// app.use(cors());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
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
