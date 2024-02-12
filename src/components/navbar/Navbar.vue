<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ShoppingBag } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'

import NavbarItem from './Navbar-item/Navbar-item.vue'
import { useAuthStore } from '../../store/auth'
import { publicRoutes, privateRoutes } from './navbar.data'
import { links } from '../../constants/links.constant'
import { useGetOrdersCount } from '../../hooks/use-get-orders-count'

const router = useRouter()

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const { count, isError, refetch } = useGetOrdersCount()

const currentRoutes = ref<typeof publicRoutes>()

const handleAuth = () => {
  if (!user.value) router.push(links.AUTH)
  else {
    authStore.logout()
    window.location.href = '/'
  }
}

onMounted(() => {
  currentRoutes.value = user.value ? privateRoutes : publicRoutes
})

watch([user], newValue => {
  if (newValue[0]) {
    refetch()
    currentRoutes.value = privateRoutes
  }
})
</script>

<template>
  <div class="navbar">
    <div class="logo">
      <router-link :to="links.HOME">Pizzashop</router-link>
    </div>
    <div class="routes">
      <ul class="route_item">
        <NavbarItem v-for="link in currentRoutes" :key="link.id" v-bind="link" />
      </ul>
    </div>
    <div class="buttons">
      <a
        @click="handleAuth()"
        :class="['button_auth', !user && 'not_auth']"
        :title="user ? 'Log out' : 'Log in'"
      >
        {{ user ? 'Log out' : 'Log in' }}
      </a>
      <router-link :to="links.CART" class="button_cart">
        <ShoppingBag />
        <div v-if="!isError && count !== 0" class="button_cart_layer">
          {{ count }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  @apply w-4/5 h-24 mx-auto flex justify-between items-center;
  .logo {
    @apply text-secondary font-semibold text-3xl;
  }
  .routes {
    @apply w-2/5;
    .route_item {
      @apply flex justify-between;
    }
  }
  .buttons {
    @apply w-1/5 flex justify-between;
    .button_auth {
      @apply px-16 py-2 font-semibold rounded-full cursor-pointer transition duration-500 bg-tertiary hover:bg-orange-500 active:bg-orange-700;
      &.not_auth {
        @apply animate-pulse;
      }
    }
    .button_cart {
      @apply relative p-2 rounded-full transition duration-500 bg-tertiary hover:bg-orange-500 active:bg-orange-700;
      .button_cart_layer {
        @apply absolute -right-1 -bottom-0.5 w-5 h-5 flex justify-center items-center rounded-full font-medium bg-red-500;
      }
    }
  }
}
</style>
