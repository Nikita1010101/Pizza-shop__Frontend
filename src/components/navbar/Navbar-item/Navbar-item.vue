<script lang="ts" setup>
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'

import { INavbarLinksData } from '../navbar.interface'

const route = useRoute()
const currentPath = route.path

const { title, path } = defineProps<INavbarLinksData>()
</script>

<template>
  <li :class="['navbar_item', path === currentPath && 'is_selected']" :title="title">
    <router-link :to="path">{{ title }}</router-link>
  </li>
</template>

<style lang="scss" scoped>
.navbar_item {
  @apply font-medium cursor-pointer transition duration-300 hover:text-purple-400;
  &.is_selected {
    @apply text-secondary;
  }
}
</style>
