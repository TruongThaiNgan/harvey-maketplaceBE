import { Request, Response, NextFunction } from 'express';

const productList: [] = require('./data.json');
const bestSeller = [2, 4, 49, 15, 22, 98, 86];
const hotDeal = [22, 23, 92, 91, 89, 88];
const latest = [2, 4, 15, 22, 49, 98, 86, 23, 92, 94, 91, 89];
const like = [110, 81, 58];
const related = [13, 35, 37, 83, 5];
const trending = [2, 4, 15, 22, 49, 98, 86, 23];
const accessories = [1,8,22,23,24,25,26,27,28,38,47,49,53,54,55,56];
const productLength = productList.length;

export const getPageProduct = async (req: Request, res: Response, next: NextFunction) => {
  setTimeout(() => {
    const { page, limit } = req.query;
    if (!page || !limit) return res.json({ message: 'please provide page and limit', status: 400 });
    const start = (+page - 1) * +limit;
    let end = +page * +limit;
    if (end > productLength) end = productLength;
    const list = productList.slice(start, end);
    return res.json({ message: 'get success', status: 200, productList: list, numberProduct: productLength });
  }, 3000);
};

export const getProductByName = async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: 'hello' });
};
