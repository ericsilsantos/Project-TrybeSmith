import { Request, Response } from 'express';
import loginService from '../services/loginService';

const loginController = {
  async login(req: Request, res: Response) {
    const login = await loginService.validadeLogin(req.body);
    const token = await loginService.login(login);
    res.status(200).json({ token });
  },
};

export default loginController;