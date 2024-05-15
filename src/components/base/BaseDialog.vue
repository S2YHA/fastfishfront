<script setup lang="ts">
import { useDialogStore } from '@/stores/dialogs'

const store = useDialogStore()
// const { component, visible, props } = store.dialogState // TODO destructure refs
</script>

<template>
  <v-dialog v-model="store.dialogState.visible" width="auto">
    <component :is="store.dialogState.component" v-bind="store.dialogState.props" />
  </v-dialog>
</template>
