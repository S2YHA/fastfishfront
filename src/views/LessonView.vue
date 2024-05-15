<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

// mock
const words = ref([
  { text1: 'car', text2: 'samochód' },
  { text1: 'button', text2: 'przycisk' },
  { text1: 'bike', text2: 'rower' }
])

const answer = ref<string>('')
const answers = ref<string[]>([])
const doneCounter = ref<number>(0)
const nextWord = () => {
  doneCounter.value++
  answers.value.push(answer.value)
  answer.value = ''
}

const todoId = ref(1)
const data = ref(null)

watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  data.value = await response.json()
})
</script>

<template>
  <div class="h-100 d-flex flex-column align-center justify-center ga-5">
    <div class="text-h3">{{ words[doneCounter].text1 }}</div>
    <v-responsive class="mx-auto flex-grow-0 w-100" max-width="425">
      <BaseInput v-model="answer" class="mb-5" block @keydown.enter="nextWord" />
      <BaseButton class="mb-5" text="Next" size="x-large" block @click="nextWord" />
      <v-progress-linear :model-value="doneCounter" :max="words.length"></v-progress-linear>
    </v-responsive>
    <v-responsive class="mx-auto flex-grow-0 w-100" max-width="425">
      <BaseInput v-model="todoId" class="mb-5" block />
      <div>{{ data }}</div>
    </v-responsive>
  </div>
</template>
