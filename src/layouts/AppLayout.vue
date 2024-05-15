<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'

const route = useRoute()

const layout = computed(() => {
  const layout = route?.meta?.layout

  if (layout) return `${layout}Layout`
  return 'div'
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
