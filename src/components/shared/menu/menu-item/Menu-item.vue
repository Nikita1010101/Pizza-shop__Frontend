<script lang="ts" setup>
import { ReceiptRussianRuble } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

import { IPizza } from '../../../../interfaces/pizza.interface'
import { useAddPizzaToCart } from '../../../../hooks/use-add-pizza-to-cart'
import { useDeletePizzaFromCart } from '../../../../hooks/use-delete-pizza-from-cart'

const route = useRoute()
const currentPath = route.path

const { id, imagePath, ingredients, price, title, orders } = defineProps<IPizza>()

const isCart = currentPath === '/cart'
const currentTitle = !isCart ? price : 'Remove'

const { addPizzaToCart } = useAddPizzaToCart()
const { deletePizzaFromCart } = useDeletePizzaFromCart()

const clickHandler = () => {
  if (!isCart) {
    addPizzaToCart(id)
  } else {
    deletePizzaFromCart(id)
  }
}
</script>

<template>
  <div class="menu_item">
    <img class="image" :src="imagePath" :alt="title" />
    <h2 class="title">{{ title }}</h2>
    <p class="ingredients">{{ ingredients }}</p>
    <button @click="clickHandler()" class="button_add_to_cart" title="Add to cart">
      <h3>{{ currentTitle }}</h3>
      <ReceiptRussianRuble v-if="!isCart" :size="18" />
    </button>
    <div v-if="isCart" class="layer">
      {{ orders[0].count }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu_item {
  @apply relative w-full pb-8 text-center rounded-xl shadow-md bg-secondary transition duration-500 hover:scale-110 hover:rotate-3;
  .image {
    @apply mx-auto;
  }

  .title {
    @apply text-xl font-medium;
  }

  .ingredients {
    @apply mt-4 mb-7;
  }

  .button_add_to_cart {
    @apply mx-auto py-2 px-[72px] flex items-center justify-between rounded-full text-lg font-medium transition duration-500 bg-tertiary hover:bg-orange-500 active:bg-orange-700;
  }

  .layer {
    @apply absolute -right-2 -top-1 w-7 h-7 flex justify-center items-center rounded-full font-medium bg-orange-800;
  }
}
</style>
