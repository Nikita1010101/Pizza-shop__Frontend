import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'


import './style.css'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(VueQueryPlugin)
app.use(PrimeVue)

app.mount('#app')
