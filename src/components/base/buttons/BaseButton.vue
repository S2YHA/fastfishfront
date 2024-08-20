<script setup lang="ts">
defineProps({
  text: { type: String, default: '' },
  variant: { type: String, default: 'flat' }
})
</script>

<template>
  <v-btn v-bind="$attrs" flat elevation="0">{{ text }}</v-btn>
</template>
