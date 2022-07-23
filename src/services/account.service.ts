import accountModel from '../models/account.model';

import IAccount from '../interfaces/account.interface';

const getAccountById = async (codCliente: number): Promise<IAccount> => {
  const [account] = await accountModel.getAccountById(codCliente);

  return account;
};

const addMoney = async (codCliente: number, amount: number) => {
  const [clientAccount] = await accountModel.getAccountById(codCliente); 
  
  const newAmount = clientAccount.Saldo + amount;

  await accountModel.updateAmount(codCliente, newAmount);

  return { codCliente, Valor: amount };
}

const subtractMoney = async (codCliente: number, amount: number) => {
  const [clientAccount] = await accountModel.getAccountById(codCliente); 
  
  const newAmount = clientAccount.Saldo - amount;

  await accountModel.updateAmount(codCliente, newAmount);

  return { codCliente, Valor: amount };
}

export default {
  getAccountById,
  addMoney,
  subtractMoney
};
