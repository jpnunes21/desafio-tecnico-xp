import connection from './connection';

const createOrder = async (
  codAtivo: number,
  codCliente: number,
  QtdeOrdem: number,
  ValorTotal: number,
) => {
  await connection.execute(
    'INSERT INTO Ordens (codAtivo, codCliente, QtdeOrdem, ValorTotal) VALUES (?, ?, ?, ?)',
    [codAtivo, codCliente, QtdeOrdem, ValorTotal],
  );
};

const updateOrder = async (
  QtdeOrdem: number,
  ValorTotal: number,
  codAtivo: number,
  codCliente: number,
) => {
  await connection.execute(
    'UPDATE Ordens SET QtdeOrdem = ?, ValorTotal = ? WHERE codAtivo = ? AND codCliente = ?',
    [QtdeOrdem, ValorTotal, codAtivo, codCliente]
  )
}

const sellAll = async (
  codAtivo: number,
  codCliente: number
) => {
  await connection.execute(
    'DELETE FROM Ordens WHERE codAtivo = ? AND codCliente = ?',
    [codAtivo, codCliente]
  )
}

export default {
  createOrder,
  updateOrder,
  sellAll
};