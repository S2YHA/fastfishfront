<script setup lang="ts">
const emit = defineEmits(['click'])

defineProps({
  text: { type: String, required: true },
  variant: { type: String, default: 'flat' }
})

const click = () => {
  emit('click')
}
</script>

<template>
  <v-btn v-bind="$attrs" color="black" flat @click="click">{{ text }}</v-btn>
</template>
