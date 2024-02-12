<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import Menu from '../shared/menu/Menu.vue'
import MenuSkeleton from '../shared/menu/menu-skeleton/Menu-skeleton.vue'
import CartBottomPanel from '../shared/cart-bottom-panel/Cart-bottom-panel.vue'
import Title from '../shared/title/Title.vue'
import { menuTitles } from '../../constants/menu-titles.constant'
import { useGetCart } from '../../hooks/use-get-cart'
import { useGetOrdersCount } from '../../hooks/use-get-orders-count'
import { useGetOrdersTotalPrice } from '../../hooks/use-get-orders-total-price'
import { useAuthStore } from '../../store/auth'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const { pizzas, isError, isLoading } = useGetCart()
const { count } = useGetOrdersCount()
const { totalPrice } = useGetOrdersTotalPrice()
</script>

<template>
  <Menu v-if="user && pizzas && pizzas.length !== 0" :pizzas="pizzas" :title="menuTitles.CART" />
  <MenuSkeleton v-if="isLoading" />
  <Title :isShow="isError || !pizzas || pizzas?.length === 0" :title="'List is empty'" />
  <CartBottomPanel v-if="pizzas" :count="count" :total-price="totalPrice" />
</template>
