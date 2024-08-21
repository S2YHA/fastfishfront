<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/base/buttons/BaseButton.vue'

const lessonResultPercentage = ref(50)

const retryLesson = () => {
  console.log('retry')
}

const backToLessonList = () => {
  console.log('back')
}
</script>

<template>
  <div class="h-100 d-flex flex-column align-center justify-center ga-5">
    <!-- <div class="text-h3">{{ words[currentWordIndex].text1 }}</div> -->
    <v-responsive class="mx-auto flex-grow-0 w-100" max-width="425">
      <v-progress-circular
        class="w-100 mb-5"
        :model-value="lessonResultPercentage"
        :rotate="360"
        :size="200"
        :width="30"
        color="black"
      >
        <template v-slot:default> {{ lessonResultPercentage }} % </template>
      </v-progress-circular>
      <v-row>
        <v-col sm="6">
          <BaseButton :to="'/lessons'" text="Retry" size="large" block @click="retryLesson" />
        </v-col>
        <v-col sm="6">
          <BaseButton
            :to="'/lessons'"
            text="Lesson list"
            size="large"
            block
            @click="backToLessonList"
          />
        </v-col>
      </v-row>
    </v-responsive>
  </div>
</template>

<!-- <template>
  <v-responsive class="mx-auto flex-grow-0 w-100" max-width="425">
    <v-progress-circular
      :model-value="lessonResultPercentage"
      :rotate="360"
      :size="100"
      :width="15"
      color="black"
    >
      <template v-slot:default> {{ lessonResultPercentage }} % </template>
    </v-progress-circular>
    <v-row>
      <v-col sm="6">
        <BaseButton text="Retry" size="large" block @click="retryLesson" />
      </v-col>
      <v-col sm="6">
        <BaseButton text="Lesson list" size="large" block @click="backToLessonList" />
      </v-col>
    </v-row>
  </v-responsive>
</template> -->
