export enum  CustomerType {
  // kalau di ts enum bisa jadi number atau string
  PLATIUM = 2,
  REGULER = 0,
  GOLD =1
}

export type Customer = {
  id:number,
  name: string,
  type: CustomerType
}