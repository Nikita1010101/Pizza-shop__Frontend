import { $axios } from '../api/axios'
import { IAuthBody, IAuthData } from '@/interfaces/auth.interface'
import { IUser } from '@/interfaces/user.interface'
import { AxiosResponse } from 'axios'

export const AuthService = {
  async refresh() {
    return await $axios.get<IAuthData>('/auth/refresh')
  },

  async register(body: IAuthBody) {
    return await $axios.post<IAuthData, AxiosResponse<IAuthData>, IAuthBody>('/auth/register', body)
  },

  async login(body: IAuthBody) {
    return await $axios.post<IAuthData, AxiosResponse<IAuthData>, IAuthBody>('/auth/login', body)
  },

  async logout() {
    return await $axios.post<unknown>('/auth/logout')
  },

  async edit(body: IUser) {
    return await $axios.patch<IAuthData>('/auth/edit', body)
  },

  async delete(profileId: number) {
    return await $axios.delete<unknown>(`/auth/delete/${profileId}`)
  },
}
