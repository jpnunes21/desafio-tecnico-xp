import { Request, Response } from 'express';
import accountService from '../services/account.service';

const getAccountById = async (req: Request, res: Response) => {
  const { n } = req.query;

  const account = await accountService.getAccountById(Number(n));

  return res.status(200).json(account);
};

const addMoney = async (req: Request, res: Response) => {
  const { codCliente, Valor } = req.body;

  const newAmount = await accountService.addMoney(codCliente, Valor);

  return res.status(200).json(newAmount);
}

const subtractMoney = async (req: Request, res: Response) => {
  const { codCliente, Valor } = req.body;

  const newAmount = await accountService.subtractMoney(codCliente, Valor);

  return res.status(200).json(newAmount);
}

export default {
  getAccountById,
  addMoney,
  subtractMoney
};
