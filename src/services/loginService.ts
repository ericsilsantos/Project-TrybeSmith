import Joi from 'joi';
import Jwt from 'jsonwebtoken';
import { Login } from '../interfaces';
import usersModel from '../models/usersModel';
import InvalidLoginError from '../error/error';

const loginService = {
  async validadeLogin(login: Login): Promise<Login> {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const result = await schema.validateAsync(login);
    return result;
  },
  async login(login: Login) {
    const result = await usersModel.getByUsernameAndPassword(login);
    if (!result) throw new InvalidLoginError('Username or password invalid');
    const secret = 'ehsegredo';
    const token = Jwt.sign({ data: result }, secret);
    return token;
  },
};

export default loginService;