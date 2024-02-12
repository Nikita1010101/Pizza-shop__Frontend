<script lang="ts" setup>
import MenuItem from './menu-item/Menu-item.vue'
import { IMenu } from './menu.interface'

const { pizzas, title } = defineProps<IMenu>()
console.log(pizzas)
</script>

<template>
  <div class="container">
    <h1 class="title">
      {{ title }}
    </h1>
    <div class="menu">
      <MenuItem v-for="pizza in pizzas" :key="pizza.id" v-bind="pizza" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @apply w-4/5 mx-auto;

  .title {
    @apply my-20 flex justify-center text-4xl font-semibold;
  }

  .menu {
    @apply grid grid-cols-4 gap-10;
  }
}
</style>
