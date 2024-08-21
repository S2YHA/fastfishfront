<template>
  <v-card class="rounded-lg" :title="props.lesson.name" :text="props.lesson.desc">
    <v-card-actions class>
      <v-btn :to="`/lesson/${props.lesson.id}`">START</v-btn>
      <v-spacer />
      <BaseIconButton icon="mdi-pencil" @click="showDialogLessonEdit"></BaseIconButton>
      <BaseIconButton icon="mdi-delete" @click="showDialogLessonDelete"></BaseIconButton>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import DialogLessonEdit from '@/components/dialogs/DialogLessonEdit.vue'
import DialogLessonDelete from '@/components/dialogs/DialogLessonDelete.vue'
import { useDialogStore } from '@/stores/dialogs'
import BaseIconButton from '@/components/base/buttons/BaseIconButton.vue'

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
