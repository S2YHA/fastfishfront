<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/buttons/BaseTextButton.vue'

// mock
const words = ref([
  { text1: 'car', text2: 'samochód' },
  { text1: 'button', text2: 'przycisk' },
  { text1: 'bike', text2: 'rower' }
])

const answer = ref('')
const answers = ref<string[]>([])
const currentCounter = ref(1)
const currentWordIndex = computed(() => currentCounter.value - 1)
const doneCounter = ref(1)

const isBackButtonDisabled = computed(() => currentCounter.value === 0)
const wordsCount = computed(() => words.value.length)
const isFinishLesson = computed(() => doneCounter.value === wordsCount.value)

const previousWord = () => {
  if (currentCounter.value === 0) return
  currentCounter.value--
  answer.value = answers.value[currentCounter.value]
}
const nextWord = () => {
  // if (currentCounter.value === wordsCount.value) return
  if (currentCounter.value === doneCounter.value) {
    doneCounter.value++
    currentCounter.value++
    answers.value.push(answer.value)
    answer.value = ''
    return
  }
  answers.value[currentCounter.value] = answer.value
  currentCounter.value++
  answer.value = answers.value[currentCounter.value] ?? ''
}

const finishLesson = () => {
  console.log('finish')
}
</script>

<template>
  <div class="h-100 d-flex flex-column align-center justify-center ga-5">
    <div class="text-h3">{{ words[currentWordIndex].text1 }}</div>
    <v-responsive class="mx-auto flex-grow-0 w-100" max-width="425">
      <BaseInput v-model="answer" class="mb-5" block @keydown.enter="nextWord" />
      <v-row>
        <v-col sm="6">
          <BaseButton
            class="mb-5"
            text="Back"
            size="large"
            block
            :disabled="isBackButtonDisabled"
            @click="previousWord"
          />
        </v-col>
        <v-col sm="6">
          <BaseButton
            v-if="isFinishLesson"
            :to="'/lesson-finish'"
            class="mb-5"
            text="Finish"
            size="large"
            block
            @click="finishLesson"
          />
          <BaseButton v-else class="mb-5" text="Next" size="large" block @click="nextWord" />
        </v-col>
      </v-row>
      <v-progress-linear :model-value="doneCounter" :max="words.length"></v-progress-linear>
    </v-responsive>
  </div>
</template>
