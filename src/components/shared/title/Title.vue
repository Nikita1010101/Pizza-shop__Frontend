<script lang="ts" setup>
import { defineProps } from 'vue'

import { ITitle } from './title.interface'

const { isShow, title } = defineProps<ITitle>()
</script>

<template>
  <div v-if="isShow" class="w-4/5 mx-auto">
    <h1 class="my-20 flex justify-center text-4xl font-semibold">{{ title }}</h1>
  </div>
</template>
