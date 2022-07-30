export interface Produto {
  id?: number,
  name: string,
  amount: string,
}
export interface Usuario {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password?: string,
}
export interface Pedido {
  id?: number,
  userId?: number,
  productsIds?: number[],
}