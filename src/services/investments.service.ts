import investmentsModel from '../models/investments.model';
import assetsService from './assets.service';
import accountService from './account.service';
import clientsService from './clients.service';

import IInvestment from '../interfaces/investments.interface';


const createOrder = async (investmentInfo: IInvestment) => {
  const { codAtivo, codCliente, QtdeOrdem } = investmentInfo;

  const [asset] = await assetsService.getAssetsById(codAtivo);

  const total = asset.ValorAtivo * QtdeOrdem;

  const isCreated = await clientsService.getClients(codCliente);

  const filteredOrder = isCreated.filter((order) => order.codAtivo === codAtivo);

  if (filteredOrder.length !== 0) {
    const qtde = filteredOrder[0].QtdeAtivo + QtdeOrdem;

    const valorTotal = filteredOrder[0].Valor + total;

    await investmentsModel.updateOrder(qtde, valorTotal, codAtivo, codCliente);

    await assetsService.soldAsset(codAtivo, QtdeOrdem);

    await accountService.subtractMoney(codCliente, total);

    return { codCliente, codAtivo, qtdeAtivo: QtdeOrdem };
  }

  await investmentsModel.createOrder(codAtivo, codCliente, QtdeOrdem, total);

  await assetsService.soldAsset(codAtivo, QtdeOrdem);

  await accountService.subtractMoney(codCliente, total);

  return { codCliente, codAtivo, qtdeAtivo: QtdeOrdem };
}

const sell = async (investmentInfo: IInvestment) => {
  const { codAtivo, codCliente, QtdeOrdem } = investmentInfo;

  const [asset] = await assetsService.getAssetsById(codAtivo);

  const isCreated = await clientsService.getClients(codCliente);

  const [filteredOrder] = isCreated.filter((order) => order.codAtivo === codAtivo);

  const total = filteredOrder.Valor - QtdeOrdem * asset.ValorAtivo;

  const newAmount = QtdeOrdem * asset.ValorAtivo;

  const qtde = filteredOrder.QtdeAtivo - QtdeOrdem;

  if (qtde === 0) {
    await investmentsModel.sellAll(codAtivo, codCliente);

    await assetsService.increaseAssets(codAtivo, QtdeOrdem);

    await accountService.addMoney(codCliente, newAmount);

    return { codCliente, codAtivo, qtdeAtivo: QtdeOrdem };
  }

  await investmentsModel.updateOrder(qtde, total, codAtivo, codCliente);

  await assetsService.increaseAssets(codAtivo, QtdeOrdem);

  await accountService.addMoney(codCliente, newAmount);

  return { codCliente, codAtivo, qtdeAtivo: QtdeOrdem };
}

export default {
  createOrder,
  sell
};
