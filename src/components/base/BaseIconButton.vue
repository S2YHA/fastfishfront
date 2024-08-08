<script setup lang="ts">
const emit = defineEmits(['click'])

defineProps({
  icon: { type: String, default: 'mdi-vertical-dots' }
})

const click = () => {
  emit('click')
}
</script>

<template>
  <v-btn v-bind="$attrs" :icon="icon" density="comfortable" elevation="0" @click="click" />
</template>
