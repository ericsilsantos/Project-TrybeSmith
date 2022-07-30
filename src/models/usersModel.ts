import { ResultSetHeader } from 'mysql2';
import { Usuario } from '../interfaces';
import connection from './connection';

const usersModel = {
  async create(user: Usuario): Promise<Usuario> {
    const { username, classe, level, password } = user;
    const sql = 'INSERT INTO Trybesmith.Users'
    + ' (username, classe, level, password)'
    + ' VALUES (?, ?, ?, ?);';
    const [result] = await connection
      .execute<ResultSetHeader>(sql, [username, classe, level, password]);
    const { insertId } = result;
    return { id: insertId, username, classe, level };
  },
};

export default usersModel;