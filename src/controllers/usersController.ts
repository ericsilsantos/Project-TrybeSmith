import { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import usersService from '../services/usersService';

const segredo: Secret = 'ehsegredo';

const usersController = {
  async create(req: Request, res: Response) {
    const user = req.body;
    const result = await usersService.create(user);
    const token = jwt.sign({ data: result }, segredo);
    res.status(201).json({ token });
  },
};

export default usersController;