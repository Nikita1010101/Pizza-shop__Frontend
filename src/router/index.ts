import { createRouter, createWebHistory } from 'vue-router'

import AuthView from '../views/Auth.view.vue'
import CartView from '../views/Cart.view.vue'
import HomeView from '../views/Home.view.vue'
import MenuView from '../views/Menu.view.vue'
import ProfileView from '../views/Profile.view.vue'

export const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/menu', name: 'Menu', component: MenuView },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/auth', name: 'Auth', component: AuthView },
  { path: '/profile', name: 'Profile', component: ProfileView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
