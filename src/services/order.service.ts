import { AxiosResponse } from 'axios'

import { $axios } from '../api/axios'
import { IPizza } from '@/interfaces/pizza.interface'

export const OrderService = {
  async getAll() {
    return await $axios.get<IPizza[]>('/order')
  },

  async create(pizzaId: string) {
    return await $axios.post<IPizza, AxiosResponse<IPizza>, { pizzaId: string }>('/order/create', {
      pizzaId,
    })
  },

  async delete(pizzaId: string) {
    return await $axios.delete<IPizza>(`/order/delete/${pizzaId}`)
  },

  async increment(orderId: string) {
    return await $axios.patch<unknown, AxiosResponse<unknown>, { orderId: string }>(
      '/order/increment',
      { orderId }
    )
  },

  async decrement(orderId: string) {
    return await $axios.patch<unknown, AxiosResponse<unknown>, { orderId: string }>(
      '/order/decrement',
      { orderId }
    )
  },

  async getCount() {
    return await $axios.get<{ count: number }>('/order/count')
  },

  async getTotalPrice() {
    return await $axios.get<{ price: number }>('/order/total-price')
  },
}
