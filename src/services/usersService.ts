import Joi from 'joi';
import { Usuario } from '../interfaces';
import usersModel from '../models/usersModel';

const usersService = {
  async validateUser(user: Usuario) {
    const schema = Joi.object({
      username: Joi.string().min(3).required(),
      password: Joi.string().min(8).required(),
      level: Joi.number().min(1).required(),
      classe: Joi.string().min(3).required(),
    });
    const result = await schema.validateAsync(user);
    return result;
  },
  async create(user: Usuario) {
    const result = await usersModel.create(user);
    return result;
  },
};

export default usersService;