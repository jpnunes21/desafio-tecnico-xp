import { Response, Request, NextFunction } from 'express';
import clientsService from '../services/clients.service';

const validateOrderSell = async (req: Request, res: Response, next: NextFunction) => {
  const { codCliente, codAtivo, QtdeOrdem } = req.body;

  const clientAssets = await clientsService.getClients(codCliente);

  const asset = clientAssets
  .filter((clientAsset) => clientAsset.codAtivo === codAtivo);

  if (asset.length === 0 || asset[0].QtdeAtivo < QtdeOrdem) return res.status(400).json({ message: 'Quantidade de ativos inválida' });

  next();
}

export default validateOrderSell;