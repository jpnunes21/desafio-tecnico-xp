import { Request, Response } from 'express';
import clientesService from '../services/clients.service';

const getClients = async (req: Request, res: Response) => {
  const { n } = req.query;

  const clients = await clientesService.getClients(Number(n));

  return res.status(200).json(clients);
};

export default {
  getClients,
};
