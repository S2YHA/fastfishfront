<template>
  <BaseIconMenu :icon="icon" :items="items" />
</template>

<script setup lang="ts">
import BaseIconMenu from '@/components/base/menus/BaseIconMenu.vue'

const icon = 'mdi-account'
const items = [
  { title: 'item1', icon: 'mdi-dots-vertical', link: '/item1' },
  { title: 'item1', icon: 'mdi-dots-vertical', link: '/item1' }
]
</script>
