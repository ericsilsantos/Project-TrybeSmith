import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const ordersController = {
  async getAll(req: Request, res: Response) {
    const result = await ordersService.getAll();
    res.status(200).json(result);
  },
};

export default ordersController;