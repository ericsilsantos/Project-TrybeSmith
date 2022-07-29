import { Request, Response } from 'express';
// import { Produto } from '../interfaces';
import productsService from '../services/productsService';

const productsController = {
  async create(req: Request, res: Response) {
    const product = req.body;
    const result = await productsService.create(product);
    res.status(201).json(result);
  },
};

export default productsController;