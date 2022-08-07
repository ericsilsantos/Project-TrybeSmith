import { NextFunction, Response, Request } from 'express';

const error: {
  [errorName: string] : number
} = {
  ValidationError: 400,
  InvalidLoginError: 401,
};

const errorHandleMiddlewares = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const status: number = error[err.name];
  if (!status) return res.status(500).json({ message: 'Error não tratado' });
  res.status(status).json({ message: err.message });
};

export default errorHandleMiddlewares;