import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { checkPassword, createAccessToken } from '../utils/utlis';
import { createVendor, findIDByEmail } from '../model/vendor';
import fetch from 'node-fetch';
import { checkExistEmail, createLocalCustomer, findOrCreateCustomer } from '../model/customer';

type err = {
  message: string;
  code: number;
};

export const addVendor = async (req: Request, res: Response, next: NextFunction) => {
  const vendorInfo = req.body;
  const { email, firstName, lastName, shopName, shopUrl, phoneNumber, password } = vendorInfo;

  if (!(email && firstName && lastName && shopName && shopUrl && phoneNumber && password)) {
    return res.status(200).json({
      message: 'data incorrect',
      status: '401',
    });
  }

  try {
    const accessToken = await createVendor(vendorInfo);
    return res.status(200).json({ message: 'signup success', status: 201, accessToken });
  } catch (error: any) {
    if (error.message === 'email exist' && error.code === 409)
      return res.status(200).json({ message: 'email has already exists', status: '409' });
    return next(error);
  }
};

export const addCustomer = async (req: Request, res: Response, next: NextFunction) => {
  const customerInfo = req.body;

  const { email, password } = customerInfo;

  if (!(email && password)) {
    return res.status(200).json({
      message: 'data incorrect',
      status: '401',
    });
  }

  try {
    const accessToken = await createLocalCustomer(customerInfo);
    return res.status(200).json({ message: 'signup success', status: 201, accessToken });
  } catch (error: any) {
    if (error.message === 'email exist' && error.code === 409)
      return res.status(200).json({ message: 'email has already exists', status: '409' });
    return next(error);
  }
};
export const logIn = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const isValidPassword = await checkPassword(email, password);
    if (!isValidPassword) {
      return res.status(200).json({ message: 'password incorrect', status: '401' });
    }
    const id = await findIDByEmail(email);
    const accessToken = createAccessToken(id);
    return res.status(200).json({
      status: '200',
      message: 'Log in success',
      id,
      accessToken,
    });
  } catch (error) {
    return next(error);
  }
};

export const authFacebook = async (req: Request, res: Response, next: NextFunction) => {
  const { userID, accessToken } = req.body;
  const urlGraphFacebook = `https://graph.facebook.com/${userID}?fields=name,email,first_name,last_name&access_token=${accessToken}`;
  try {
    const responeFacebook = await fetch(urlGraphFacebook, {
      method: 'GET',
    });
    const data = await responeFacebook.json();
    const idAndToken = await findOrCreateCustomer(data.email);
    return res.json({ message: 'log in success', status: '200', ...idAndToken });
  } catch (error) {
    next(error);
  }
};
