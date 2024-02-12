import { useAuthStore } from '../store/auth'
import axios from 'axios'

const API_URL = 'http://localhost:4200'

export const $axios = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
})

$axios.interceptors.request.use(response => {
  const authStore = useAuthStore()
  const accessToken = authStore.accessToken
  response.headers.Authorization = `Bearer ${accessToken}`
  return response
})

$axios.interceptors.response.use(
  response => response,
  async error => {
    const authStore = useAuthStore()

    const originalRequest = error.config

    if (error.response?.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
        await authStore.refresh()
        return $axios.request(originalRequest)
      } catch (error) {
        await authStore.logout()
        window.location.href = '/'
      }
    }

    return error
  }
)
