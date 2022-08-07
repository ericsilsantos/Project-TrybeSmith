import Joi from 'joi';
import { Produto } from '../interfaces';
import prodcutsModel from '../models/productsModel';

const productsService = {
  async validateProduct(product: Produto) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      amount: Joi.string().min(3).required(),
    });
    const result = schema.validateAsync(product);
    return result;
  },
  async create(data: Produto) {
    const result = await prodcutsModel.create(data);
    return result;
  },
  async getAll() {
    const result = await prodcutsModel.getAll();
    return result;
  },
};

export default productsService;