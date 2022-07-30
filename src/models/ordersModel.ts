import { Pedido } from '../interfaces';
import connection from './connection';

const ordersModel = {
  async getAll(): Promise<Pedido[]> {
    // como usar o JSON_ARRAYAGG https://saveriomiroddi.github.io/Storage-and-indexed-access-of-denormalized-columns-arrays-on-mysql-8.0-via-multi-valued-indexes/#:~:text=MySQL%20doesn't%20have%20an,also)%20used%20for%20data%20warehousing.
    const sql = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId;`;
    const [result] = await connection.query(sql);
    return result as Pedido[];
  },
};

export default ordersModel;