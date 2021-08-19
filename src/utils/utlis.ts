import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findPasswordByUserName } from '../model/user';
import httpError from './httpError';

export const hashPassword = async (password: string) => {
  let hashedPassword = null;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
    return hashedPassword;
  } catch (error) {
    throw new Error("Can't hash password");
  }
};

export const checkPassword = async (userName: string, password: string) => {
  let hashedPassword = null;
  let isValidPassword = false;

  // get hashed password
  try {
    hashedPassword = await findPasswordByUserName(userName);
  } catch (error) {
    throw error;
  }

  // Compare password

  if (hashedPassword) {
    try {
      isValidPassword = await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      throw new httpError("Can't compare password", 500);
    }
  } else throw new httpError("Your bankID don't exist", 404);

  return isValidPassword;
};

export const createAccessToken = (id: string) => {
  if (!id) return '';
  const accessToken = jwt.sign({ id }, process.env.JWT_KEY!, {
    expiresIn: 120 * 60, // 120 minutes
  });
  return accessToken;
};
