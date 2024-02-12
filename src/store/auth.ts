import { defineStore } from 'pinia'

import { AuthService } from '../services/auth.service'
import { IUser } from '@/interfaces/user.interface'
import { IAuthBody } from '@/interfaces/auth.interface'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as IUser | null,
    accessToken: '',
  }),
  actions: {
    async register(body: IAuthBody) {
      try {
        const { data } = await AuthService.register(body)

        this.accessToken = data.accessToken
        this.user = data.user
      } catch (error) {
        console.log(error)
      }
    },

    async refresh() {
      try {
        const { data } = await AuthService.refresh()

        this.accessToken = data.accessToken
        this.user = data.user
      } catch (error) {
        console.log(error)
      }
    },

    async login(body: IAuthBody) {
      try {
        const { data } = await AuthService.login(body)

        this.accessToken = data.accessToken
        this.user = data.user
      } catch (error) {
        console.log(error)
      }
    },

    async logout() {
      try {
        await AuthService.logout()
      } catch (error) {
        console.log(error)
      }
    },
  },
})
