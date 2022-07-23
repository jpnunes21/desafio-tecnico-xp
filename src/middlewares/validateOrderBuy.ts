import { Response, Request, NextFunction } from 'express';
import accountService from '../services/account.service';
import assetsService from '../services/assets.service';

const validateOrder = async (req: Request, res: Response, next: NextFunction) => {
  const { codCliente, codAtivo, QtdeOrdem } = req.body;

  const [asset] = await assetsService.getAssetsById(codAtivo);

  const client = await accountService.getAccountById(codCliente);

  if (asset.QtdeAtivo < QtdeOrdem) return res.status(400).json({ message: 'Quantidade de ativos indisponível' });

  if (asset.ValorAtivo * QtdeOrdem > client.Saldo) {
    return res.status(400).json({ message: 'Saldo insuficiente.' });
  }

  next();
}

export default validateOrder;