import assetsModel from '../models/assets.model';

import IAsset from '../interfaces/asset.interface';

interface IAssetResponse {
  codAtivo: number;
  QtdeAtivo: number;
  Valor: number;
}

const getAssetsById = async (id: number): Promise<IAsset[]> => {
  const asset = await assetsModel.getAssetsById(id);

  return asset;
};

const getAllAssets = async (): Promise<IAssetResponse[]> => {
  const assets = await assetsModel.getAllAssets();

  const filteredAssets = assets.map((asset) => {
    return {
      codAtivo: asset.codAtivo,
      QtdeAtivo: asset.QtdeAtivo,
      Valor: asset.ValorAtivo
    }
  });

  return filteredAssets;
};

const soldAsset = async (codAtivo: number, QtdeAtivo: number) => {
  const [asset] = await getAssetsById(codAtivo);

  const newAssetAmount = asset.QtdeAtivo - QtdeAtivo;
  
  await assetsModel.updateAssets(codAtivo, newAssetAmount);
  
  return QtdeAtivo;
}

const increaseAssets = async (codAtivo: number, QtdeAtivo: number) => {
  const [asset] = await getAssetsById(codAtivo);

  const newAssetAmount = asset.QtdeAtivo + QtdeAtivo;
  
  await assetsModel.updateAssets(codAtivo, newAssetAmount);
  
  return QtdeAtivo;
}

export default {
  getAssetsById,
  getAllAssets,
  soldAsset,
  increaseAssets
};
