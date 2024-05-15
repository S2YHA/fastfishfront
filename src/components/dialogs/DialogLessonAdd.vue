<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useDialogStore } from '@/stores/dialogs'

const props = defineProps({
  addNewLesson: Function
})

const store = useDialogStore()

const closeDialog = () => store.hideDialog()
</script>

<template>
  <v-card width="500">
    <v-card-item class="pb-3">
      <v-card-title>Add new lesson</v-card-title>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-text class="py-4">
      <BaseInput label="Name" />
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <BaseButton text="Close" @click="closeDialog"></BaseButton>
      <BaseButton text="Save" @click="props.addNewLesson"></BaseButton>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
