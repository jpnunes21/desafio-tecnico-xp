import connection from './connection';

import IAsset from '../interfaces/asset.interface';

const getAllAssets = async (): Promise<IAsset[]> => {
  const [row] = await connection.execute(
    'SELECT * FROM Ativos'
  );

  return row as IAsset[];
};

const getAssetsById = async (id: number): Promise<IAsset[]> => {
  const [row] = await connection.execute(
    'SELECT * FROM Ativos WHERE codAtivo = ?',
    [id]
  );

  return row as IAsset[];
};

const updateAssets = async (codAtivo: number, QtdeAtivo: number) => {
  await connection.execute(
    'UPDATE Ativos SET QtdeAtivo = ? WHERE codAtivo = ?',
    [QtdeAtivo, codAtivo]
  );
}

export default {
  getAssetsById,
  getAllAssets,
  updateAssets
};