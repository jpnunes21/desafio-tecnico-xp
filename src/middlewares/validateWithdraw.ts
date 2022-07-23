import { Response, Request, NextFunction } from 'express';
import accountService from '../services/account.service';

const validateWithdraw = async (req: Request, res: Response, next: NextFunction) => {
  const { codCliente, Valor } = req.body;

  const account = await accountService.getAccountById(codCliente);

  if (account.Saldo < Valor) {
    return res.status(401).json({ message: 'Saldo insuficiente.' });
  }

  if (!Valor || Valor <= 0) return res.status(401).json({ message: 'Valor inválido, precisa ser maior que 0.' });

  next();
}

export default validateWithdraw;