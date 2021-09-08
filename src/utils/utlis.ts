import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findPasswordByEmail } from '../model/vendor';
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

export const checkPassword = async (email: string, password: string) => {
  let hashedPassword = null;
  let isValidPassword = false;

  // get hashed password
  try {
    hashedPassword = await findPasswordByEmail(email);
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

export const createAccessToken = (id: string, time: number = 120 * 60) => {
  if (!id) return '';
  const accessToken = jwt.sign({ id }, process.env.JWT_KEY!, {
    expiresIn: time,
  });
  return accessToken;
};

export const convertName = (name: string) => {
  switch (name) {
    case 'camerasPhotos':
      return 'CAMERAS & PHOTOS';
    case 'mobilesTablets':
      return 'MOBILES & TABLETS';
    case 'tvAudio':
      return "TV'S & AUDIO";
    case 'consoleGame':
      return 'CONSOLES & GAMES';
    case 'toolsStorage':
      return 'TOOLS & STORAGE';
    default:
      return name.toUpperCase();
  }
};
