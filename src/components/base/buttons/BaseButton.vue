<script setup lang="ts">
defineProps({
  text: { type: String, required: false }
})
</script>

<template>
  <v-btn v-bind="$attrs" flat elevation="0">{{ text }}</v-btn>
</template>
