<script setup lang="ts">
import LessonCard from '@/components/LessonCard.vue'
import EmptyCard from '@/components/EmptyCard.vue'
import { reactive } from 'vue'

const lessons = reactive([
  { id: '111', name: 'Lesson 1', desc: 'Description' },
  { id: '222', name: 'Lesson 2', desc: 'Description' },
  { id: '333', name: 'Lesson 3', desc: 'Description' }
])
</script>

<template>
  <v-row>
    <v-col sm="4">
      <EmptyCard />
    </v-col>
    <v-col v-for="lesson in lessons" :key="lesson.name" sm="4">
      <LessonCard :lesson="lesson" />
    </v-col>
  </v-row>
</template>
