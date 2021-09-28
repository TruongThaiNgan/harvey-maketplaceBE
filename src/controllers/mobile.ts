import { NextFunction, Request, Response } from 'express';
import { sale, catalog } from './mobiledata';

export const getSaleProduct = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: 'get success',
    status: 200,
    sale,
  });
};
export const getCatalogProduct = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: 'get success',
    status: 200,
    catalog,
  });
};
