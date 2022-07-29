import { Produto } from '../interfaces';
import prodcutsModel from '../models/productsModel';

const productsService = {
  async create(data: Produto) {
    const result = await prodcutsModel.create(data);
    return result;
  },
};

export default productsService;