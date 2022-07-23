import { Request, Response } from 'express';
import loginService from '../services/login.service';

const authLogin = async (req: Request, res: Response) => {
  const token = await loginService.authentication(req.body);

  if (!token) return res.status(400).json({ message: 'Campos inválidos' });

  return res.status(200).json(token);
};

export default {
  authLogin,
};
