import { CookieOptions, NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import httpError from '../utils/httpError';

interface IDecodedToken {
  id: string;
  role: string;
}

export interface AuthRequest extends Request {
  userData?: {
    id: string;
  };
}

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const accessToken =
    req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization?.split(' ')[1];
  if (!accessToken) {
    return next(new httpError('Invalid Token', 401));
  }
  // Decoded Token
  let decodedToken = null;
  try {
    decodedToken = jwt.verify(accessToken, process.env.JWT_KEY!);
    (<AuthRequest>req).userData = {
      id: (<IDecodedToken>decodedToken).id,
    };

    return next();
  } catch (err) {
    return next(new httpError('Invalid Token', 401));
  }
};
