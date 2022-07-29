import { ResultSetHeader } from 'mysql2';
import { Produto } from '../interfaces';
import connection from './connection';

const prodcutsModel = {
  async create(data: Produto): Promise<Produto> {
    const { name, amount } = data;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
    const { insertId } = result;
    return { id: insertId, ...data };
  },
};

export default prodcutsModel;