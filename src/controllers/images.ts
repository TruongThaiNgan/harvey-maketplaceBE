import { NextFunction, Request, Response } from 'express';

export const getImage = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
  return res.status(200).sendFile('../assets/boy.png');
};
