import { Request, Response } from 'express';
import investmentService from '../services/investments.service';

const buy = async (req: Request, res: Response) => {
  const newAsset = await investmentService.createOrder(req.body);
  return res.status(201).json(newAsset);
};

const sell = async (req: Request, res: Response) => {
  const soldAsset = await investmentService.sell(req.body);

  return res.status(201).json(soldAsset);
}

export default {
  buy,
  sell,
};
