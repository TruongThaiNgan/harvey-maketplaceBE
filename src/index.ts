import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { createServer } from 'http';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import authRoute from './routes/authRoute';
dotenv.config();

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.use('/auth', authRoute);
app.use('/user', userRoute);

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
