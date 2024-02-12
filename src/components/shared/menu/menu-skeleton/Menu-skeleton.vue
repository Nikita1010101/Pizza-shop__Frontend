<script lang="ts" setup>
import Skeleton from 'primevue/skeleton'
</script>

<template>
  <div class="container">
    <h1 class="title">Loading...</h1>
    <div class="menu">
      <div v-for="item in [...new Array(8)]" :key="item" class="item">
        <Skeleton width="160px" height="160px" borderRadius="100px" class="item_total"></Skeleton>
        <Skeleton
          width="180px"
          height="20px"
          borderRadius="5px"
          class="item_total item_title"
        ></Skeleton>
        <Skeleton
          width="180px"
          height="40px"
          borderRadius="8px"
          class="item_total item_ingredients"
        ></Skeleton>
        <Skeleton width="170px" height="45px" borderRadius="50px" class="item_total"></Skeleton>
      </div>
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
    .item {
      @apply w-full py-8 text-center rounded-xl shadow-md bg-secondary transition duration-500 hover:scale-110 hover:rotate-3;
      .item_total {
        @apply mx-auto bg-gray-600;
        &.item_title {
          @apply mt-8;
        }
        &.item_ingredients {
          @apply mt-4 mb-7;
        }
      }
    }
  }
}
</style>
