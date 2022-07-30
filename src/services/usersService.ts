import { Usuario } from '../interfaces';
import usersModel from '../models/usersModel';

const usersService = {
  async create(user: Usuario) {
    const result = await usersModel.create(user);
    return result;
  },
};

export default usersService;