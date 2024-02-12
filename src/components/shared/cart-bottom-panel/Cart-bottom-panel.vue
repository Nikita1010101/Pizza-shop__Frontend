<script lang="ts" setup>
import { defineProps } from 'vue'

import { ICartBottomPanel } from './Cart-bottom-panel.interface'

const { count, totalPrice } = defineProps<ICartBottomPanel>()
</script>

<template>
  <div class="cart_bottom_panel">
    <h3 class="title">
      Total: <span class="count">{{ count }}</span>
    </h3>
    <h3 class="title">
      Price: <span class="count">{{ totalPrice }}</span>
    </h3>
    <button class="button_buy" title="Log in">To buy</button>
  </div>
</template>

<style lang="scss" scoped>
.cart_bottom_panel {
  @apply fixed left-0 right-0 bottom-0 w-full h-[10%] px-[10%] flex justify-between items-center bg-orange-900;
  .title {
    @apply text-xl font-medium;
    .count {
      @apply text-2xl font-semibold;
    }
  }
  .button_buy {
    @apply px-16 py-2 rounded-full font-semibold animate-pulse transition duration-500 bg-tertiary hover:bg-orange-500 active:bg-orange-700;
  }
}
</style>
