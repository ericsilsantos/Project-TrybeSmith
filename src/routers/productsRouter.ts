import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.get('/');
productsRouter.post('/', productsController.create);

export default productsRouter;