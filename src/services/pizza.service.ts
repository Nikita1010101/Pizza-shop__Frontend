import { AxiosResponse } from 'axios'

import { IPizza } from '@/interfaces/pizza.interface'
import { $axios } from '../api/axios'

export const PizzaService = {
  async getMenu() {
    return await $axios.get<IPizza[]>('/pizza')
  },

  async getPizza(id: number) {
    return await $axios.get<IPizza>(`/pizza/${id}`)
  },
}
