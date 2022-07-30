import ordersModel from '../models/ordersModel';

const ordersService = {
  async getAll() {
    const pedidos = await ordersModel.getAll();
    return pedidos;
  },
};

export default ordersService;