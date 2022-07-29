import { Request, Response } from 'express';
// import { Produto } from '../interfaces';
import productsService from '../services/productsService';

const productsController = {
  async create(req: Request, res: Response) {
    const product = req.body;
    const result = await productsService.create(product);
    res.status(201).json(result);
  },
  async getAll(_req: Request, res: Response) {
    const result = await productsService.getAll();
    res.status(200).json(result);
  },
};

export default productsController;