<script setup lang="ts">
import DialogLessonEdit from '@/components/dialogs/DialogLessonEdit.vue'
import DialogLessonDelete from '@/components/dialogs/DialogLessonDelete.vue'
import { useDialogStore } from '@/stores/dialogs'

const store = useDialogStore()

const props = defineProps({
  lesson: {
    type: Object,
    required: true
  }
})

const showDialogLessonDelete = () => {
  store.showDialog({
    component: DialogLessonDelete,
    props: { deleteLesson }
  })
}

const deleteLesson = () => {
  store.hideDialog()
}

const showDialogLessonEdit = () => {
  store.showDialog({
    component: DialogLessonEdit,
    props: { editLesson }
  })
}

const editLesson = () => {
  store.hideDialog()
}
</script>

<template>
  <v-card class="rounded-lg" :title="props.lesson.name" :text="props.lesson.desc">
    <v-card-actions class>
      <v-btn :to="`/lesson/${props.lesson.id}`">START</v-btn>
      <v-spacer />
      <v-btn density="comfortable" icon="mdi-pencil" @click="showDialogLessonEdit"></v-btn>
      <v-btn density="comfortable" icon="mdi-delete" @click="showDialogLessonDelete"></v-btn>
    </v-card-actions>
  </v-card>
</template>
