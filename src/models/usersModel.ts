import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Usuario, Login } from '../interfaces';
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
  async getByUsernameAndPassword(login: Login): Promise<Login> {
    const { username, password } = login;
    const sql = 'SELECT username FROM Trybesmith.Users WHERE username = ? AND password = ?';
    const [[result]] = await connection.query<RowDataPacket[]>(sql, [username, password]);
    return result as Login;
  },
};

export default usersModel;