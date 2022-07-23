import { Request, Response } from 'express';
import assetsService from '../services/assets.service';

const getAssetsById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const asset = await assetsService.getAssetsById(Number(id));

  return res.status(200).json(asset);
};

const getAllAssets = async (req: Request, res: Response) => {
  const assets = await assetsService.getAllAssets();

  return res.status(200).json(assets);
};

export default {
  getAssetsById,
  getAllAssets
};
