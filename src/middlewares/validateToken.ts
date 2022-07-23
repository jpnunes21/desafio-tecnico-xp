import { NextFunction, Request, Response } from 'express';
import jwtInfo from '../helpers/JWTToken';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const payload = await jwtInfo.authToken(token);

  if (!payload) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  res.locals.payload = payload;

  next();
};

export default validateToken;