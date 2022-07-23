import clientsModel from '../models/client.model';

interface IClientResponse {
  codCliente: number;
  codAtivo: number;
  QtdeAtivo: number;
  Valor: number;
}

const getClients = async (n: number): Promise<IClientResponse[]> => {
  const clients = await clientsModel.getClients(n);

  const clientAssets = clients.map((clientAssets) => {
    return {
      codCliente: clientAssets.codCliente,
      codAtivo: clientAssets.codAtivo,
      QtdeAtivo: clientAssets.QtdeOrdem,
      Valor: clientAssets.ValorTotal
    }
  });

  return clientAssets;
};

export default {
  getClients,
};
