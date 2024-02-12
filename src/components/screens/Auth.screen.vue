<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '../../store/auth'
import { useAuthForm } from '../../hooks/use-auth-form'

const router = useRouter()

const authStore = useAuthStore()
const { register, login } = authStore

const { body, emailValue, emailProps, errors, passwordValue, passwordProps } = useAuthForm()

const showFormData = () => {
  if (errors.value.email || errors.value.password) return

  if (doingTitle.value === 'Register') {
    register(body)
    router.push('/')
  }

  if (doingTitle.value === 'Login') {
    login(body)
    router.push('/')
  }
}

const doingTitle = ref<'Register' | 'Login'>('Login')
const changeModeButton = ref<'Register' | 'Login'>('Register')

const changeTitle = () => {
  doingTitle.value = doingTitle.value === 'Login' ? 'Register' : 'Login'
  changeModeButton.value = changeModeButton.value === 'Register' ? 'Login' : 'Register'
}
</script>

<template>
  <div class="w-4/5 mx-auto">
    <h1 class="my-20 flex justify-center text-4xl font-semibold">Authorization</h1>
    <form
      class="w-2/5 mx-auto py-8 px-[68px] text-center bg-tertiary rounded-xl"
      @submit.prevent="showFormData()"
    >
      <h2 class="mb-6 text-2xl font-medium">{{ doingTitle }}</h2>
      <input
        v-model="emailValue"
        v-bind="emailProps"
        class="w-full mx-auto mb-5 px-5 py-2 rounded-md text-black font-medium block outline-none"
        type="email"
        placeholder="Enter email"
      />
      <input
        v-model="passwordValue"
        v-bind="passwordProps"
        class="w-full mx-auto mb-5 px-5 py-2 rounded-md text-black font-medium block outline-none"
        type="password"
        placeholder="Enter password"
      />
      <button
        class="w-4/5 mx-auto mt-5 mb-3 px-5 py-2 bg-blue-600 2 rounded-md font-semibold transition hover:bg-blue-700 active:bg-blue-800"
        :title="doingTitle"
      >
        {{ doingTitle }}
      </button>
      <span
        class="block text-sm text-gray-600 cursor-pointer transition hover:underline"
        @click="changeTitle()"
        >{{ changeModeButton }}</span
      >
    </form>
  </div>
</template>
