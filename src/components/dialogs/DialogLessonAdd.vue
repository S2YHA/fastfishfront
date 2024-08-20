<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/buttons/BaseTextButton.vue'
import BaseIconButton from '@/components/base/buttons/BaseIconButton.vue'
import { useDialogStore } from '@/stores/dialogs'
import type { FlashSet } from '@/types/words'
import { ref } from 'vue'

const props = defineProps({
  addNewLesson: Function
})

const store = useDialogStore()

const closeDialog = () => store.hideDialog()

const flashSet = ref<FlashSet[]>([{ word: '', translation: '' }])

const addNewFlashSet = () => {
  flashSet.value.push({ word: '', translation: '' })
}
</script>

<template>
  <v-card width="500">
    <v-card-item class="pb-3">
      <v-card-title>Add new lesson</v-card-title>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-text class="py-4 overflow-y-auto">
      <BaseInput class="mb-4" label="Name" />
      <BaseInput class="mb-4" label="Description" />
      <v-row>
        <template v-for="set in flashSet" :key="set.word">
          <v-col>
            <BaseInput v-model="set.word" />
          </v-col>
          <v-col>
            <BaseInput v-model="set.translation" />
          </v-col>
          <v-col cols="1">
            <BaseIconButton icon="mdi-delete" />
          </v-col>
        </template>
      </v-row>
      <BaseButton class="w-100" text="Add new flashcard" @click="addNewFlashSet" />
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <BaseButton text="Close" @click="closeDialog"></BaseButton>
      <BaseButton text="Save" @click=""></BaseButton>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
