<script setup lang="ts">
defineProps({
  icon: { type: String, required: true, default: 'mdi-dots-vertical' }
})
</script>

<template>
  <v-btn v-bind="$attrs" :icon="icon" flat elevation="0" />
</template>
