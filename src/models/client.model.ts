import connection from './connection';

import IClient from '../interfaces/clients.interface';

const getClients = async (n: number): Promise<IClient[]> => {
  const [row] = await connection.execute(
    'SELECT * FROM Ordens WHERE codCliente = ?',
    [n]
  );

  return row as IClient[];
};

export default {
  getClients,
};