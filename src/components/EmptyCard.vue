<script setup lang="ts">
import DialogLessonAdd from '@/components/dialogs/DialogLessonAdd.vue'
import { useDialogStore } from '@/stores/dialogs'

const store = useDialogStore()

const showDialogLessonAdd = () => {
  store.showDialog({
    component: DialogLessonAdd,
    props: { addNewLesson }
  })
}

const addNewLesson = () => {
  store.hideDialog()
}
</script>

<template>
  <v-card
    class="h-100 rounded-lg d-flex align-center justify-center"
    style="cursor: pointer"
    @click="showDialogLessonAdd"
  >
    <v-icon>mdi-plus</v-icon>
  </v-card>
</template>
