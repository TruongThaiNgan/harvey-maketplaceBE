import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { checkPassword, createAccessToken } from '../utils/utlis';
import { createUser, findIDByUserName } from '../model/user';

export const addUser = async (req: Request, res: Response, next: NextFunction) => {
  const userInfo = req.body;
  const { email, firstName, lastName, shopName, shopUrl, phoneNumber, password } = userInfo;

  if (!(email && firstName && lastName && shopName && shopUrl && phoneNumber && password)) {
    return res.status(200).json({
      message: 'data incorrect',
      status: '401',
    });
  }

  try {
    const accessToken = await createUser(userInfo);
    return res.status(200).json({ message: 'signup success', status: 201, accessToken });
  } catch (error) {
    if (error.message === 'email exist' && error.code === 409)
      return res.status(200).json({ message: 'email has already exists', status: '409' });
    return next(error);
  }
};

export const logIn = async (req: Request, res: Response, next: NextFunction) => {
  const { userName, password } = req.body;
  try {
    const isValidPassword = await checkPassword(userName, password);
    if (!isValidPassword) {
      return res.status(200).json({ message: 'password incorrect', status: '401' });
    }
    const id = await findIDByUserName(userName);
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
