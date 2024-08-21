<template>
  <BaseIconButton icon="mdi-account" />
  <BaseIconMenu :icon="icon" :items="items" />
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/buttons/BaseButton.vue'
import BaseIconButton from '@/components/base/buttons/BaseIconButton.vue'
import BaseIconMenu from '@/components/base/menus/BaseIconMenu.vue'

const icon = 'mdi-account'
const items = [
  { title: 'item1', icon: 'mdi-dots-vertical', link: '/item1' },
  { title: 'item1', icon: 'mdi-dots-vertical', link: '/item1' }
]
</script>
