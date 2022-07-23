import connection from './connection';

import IAccount from '../interfaces/account.interface';

const getAccountById = async (id: number): Promise<IAccount[]> => {
  const [row] = await connection.execute(
    'SELECT * FROM Clientes WHERE codCliente = ?',
    [id]
  );

  return row as IAccount[];
};

const getAccountByEmail = async (Email: string, Senha: string): Promise<IAccount[]> => {
  const [row] = await connection.execute(
    'SELECT * FROM Clientes WHERE Email = ? AND Senha = ?',
    [Email, Senha]
  );

  return row as IAccount[];
}

const updateAmount = async (codCliente: number, amount: number) => {
  await connection.execute(
    'UPDATE Clientes SET Saldo = ? WHERE codCliente = ?',
    [amount, codCliente]
  );
}

export default {
  getAccountById,
  getAccountByEmail,
  updateAmount,
};