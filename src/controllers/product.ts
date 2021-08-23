import { Request, Response, NextFunction } from 'express';

const productList = require('./data.json');

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  setTimeout(() => {
    return res.json({ message: 'get success', status: 200, productList });
  }, 5000);
};
