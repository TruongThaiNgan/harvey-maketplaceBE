import fetch from 'node-fetch';
import { NextFunction, Request, Response } from 'express';
import { createLocalCustomer, findIDByEmail, findOrCreateCustomer, updatePassword } from '../model/customer';
import { createVendor } from '../model/vendor';
import { checkPassword, createAccessToken, hashPassword } from '../utils/utils';
import { sendLinkResetPassword } from '../utils/sendMail';
import { AuthRequest } from '../middlewares/checkauth';

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

export const sendEmailWithAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const id = await findIDByEmail(email);
  const accessToken = createAccessToken(id);
  await sendLinkResetPassword(email, accessToken);
  console.log('🚀 ~ file: auth.ts ~ line 91 ~ sendEmailWithAccessToken ~ email', email);
  return res.status(200).json({
    message: 'create success',
    status: 200,
  });
};

export const putPassword = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password)
    return res.status(200).json({
      message: 'please provide password',
      status: 400,
    });
  const id = (req as AuthRequest)?.userData?.id;
  if (!id)
    return res.status(200).json({
      message: 'can not find id',
      status: 400,
    });
  try {
    const hashedPassword = await hashPassword(password);
    await updatePassword(id, hashedPassword);
    return res.status(200).json({
      message: 'update success',
      status: 200,
    });
  } catch (error: any) {
    return res.status(200).json({
      message: error?.message,
      status: 500,
    });
  }
};
