import { Request, Response, NextFunction } from 'express';
import data from './data';

const productList = data;
const latest = [2, 4, 15, 22, 49, 98, 86, 23, 92, 94, 91, 89];
const like = [110, 81, 58];
const related = [13, 35, 37, 83, 5];

const trendingList = [2, 4, 15, 22, 49, 98, 86, 23];
const lastChanceList = [49, 98, 86, 23];
const bestSellerList = [2, 4, 49, 15, 22, 98, 86];
const hotDealList = [22, 23, 92, 91, 89, 88];

const accessories = [1, 8, 22, 23, 24, 25, 26, 27, 28, 38, 47, 49, 53, 54, 55, 56];

const dataHome = Array.from(new Set([...trendingList, ...lastChanceList, ...bestSellerList, ...hotDealList]));
export const getHomePage = async (req: Request, res: Response, next: NextFunction) => {
  const list = dataHome.map((id) => productList[id - 1]);
  return res.json({
    message: 'get success',
    status: 200,
    productList: list,
    trendingList,
    lastChanceList,
    bestSellerList,
    hotDealList,
  });
};

export const getPageProduct = async (req: Request, res: Response, next: NextFunction) => {
  const numberProduct = productList.length;
  const { page, limit } = req.query;
  if (!page || !limit) return res.json({ message: 'please provide page and limit', status: 400 });
  const start = (+page - 1) * +limit;
  let end = +page * +limit;
  if (end > numberProduct) end = numberProduct;
  const list = productList.slice(start, end);
  return res.json({ message: 'get success', status: 200, productList: list, numberProduct });
};

export const getProductByName = async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: 'hello' });
};

export const getPageAccessories = async (req: Request, res: Response, next: NextFunction) => {
  const numberProduct = accessories.length;
  const { page, limit } = req.query;
  console.log(page, limit);
  if (!page || !limit) return res.json({ message: 'please provide page and limit', status: 400 });
  const start = (+page - 1) * +limit;
  let end = +page * +limit;
  if (end > numberProduct) end = accessories.length;
  const list = accessories.map((id) => productList[id]).slice(start, end);
  console.log(list);
  return res.json({ message: 'get success', status: 200, productList: list, numberProduct });
};
