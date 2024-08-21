<template>
  <v-menu transition="scale-transition">
    <template v-slot:activator="{ props }">
      <BaseIconButton v-bind="{ ...$attrs, ...props }" :icon="icon" />
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
import BaseIconButton from '@/components/base/buttons/BaseIconButton.vue'

defineProps({
  icon: {
    type: String,
    default: 'mdi-dots-vertical'
  },
  items: {
    type: Array as PropType<MenuItems[]>,
    required: true
  }
})
</script>
