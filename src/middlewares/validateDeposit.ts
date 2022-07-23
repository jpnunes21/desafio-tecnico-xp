import { Response, Request, NextFunction } from 'express';

const validateDeposit = async (req: Request, res: Response, next: NextFunction) => {
  const { Valor } = req.body;

  if (!Valor || Valor <= 0) return res.status(401).json({ message: 'Valor inválido, precisa ser maior que 0.' });

  next();
}

export default validateDeposit;