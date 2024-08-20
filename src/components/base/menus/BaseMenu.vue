<template>
  <v-menu transition="scale-transition">
    <template v-slot:activator="{ props }">
      <BaseButton v-bind="{ ...$attrs, ...props }" :text="text" />
    </template>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { MenuItems } from '@/types/ui/BaseMenuButton'
import BaseButton from '../buttons/BaseButton.vue'

defineProps({
  text: {
    type: String,
    required: false
  },
  items: {
    type: Array as PropType<MenuItems[]>,
    required: true
  }
})
</script>
