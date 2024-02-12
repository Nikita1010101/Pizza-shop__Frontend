import { IOrder } from './order.interface'

export interface IPizza {
  id: string
  imagePath: string
  title: string
  ingredients: string
  price: number
  orders: Pick<IOrder, 'id' | 'count'>[]
}
