<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'

import Menu from '../shared/menu/Menu.vue'
import Title from '../shared/title/Title.vue'
import { PizzaService } from '../../services/pizza.service'
import MenuSkeleton from '../shared/menu/menu-skeleton/Menu-skeleton.vue'

const {
  data: pizzas,
  isLoading,
  isError,
} = useQuery({
  queryKey: ['menu'],
  queryFn: PizzaService.getMenu,
  select: ({ data }) => data,
})
</script>

<template>
  <MenuSkeleton v-if="!pizzas" />
  <Menu v-if="pizzas" :pizzas="pizzas" :title="'Menu'" />
  <Title :isShow="isError" :title="'List is empty'" />
</template>
