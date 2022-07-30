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