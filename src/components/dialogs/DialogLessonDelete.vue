<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import { useDialogStore } from '@/stores/dialogs'

const props = defineProps({
  deleteLesson: Function
})

const store = useDialogStore()

const closeDialog = () => store.hideDialog()
</script>

<template>
  <v-card width="500">
    <v-card-item class="pb-3">
      <v-card-title>Delete lesson</v-card-title>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-text class="py-4"> Are you sure to delete the lesson? </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <BaseButton text="No" @click="closeDialog"></BaseButton>
      <BaseButton text="Yes" @click="props.deleteLesson"></BaseButton>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
