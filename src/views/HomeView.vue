<template>
  <BaseButton color="black" text="test" @click="test" />
  <BaseMenu color="error" :items="items" />
  <BaseIconMenu :items="items" />
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/buttons/BaseButton.vue'
import BaseMenu from '@/components/base/menus/BaseMenu.vue'
import BaseIconMenu from '@/components/base/menus/BaseIconMenu.vue'

const items = [
  { title: 'item1', icon: 'mdi-dots-vertical', link: '/item1' },
  { title: 'item1', icon: 'mdi-dots-vertical', link: '/item1' }
]

const test = () => {
  console.log('test')
}
</script>
