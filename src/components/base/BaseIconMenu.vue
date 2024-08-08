<template>
  <v-menu transition="scale-transition">
    <template v-slot:activator="{ props }">
      <v-btn :icon="icon" v-bind="props" />
    </template>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: 'mdi-dots-vertical'
  },
  items: {
    type: Array,
    required: true
  }
})
</script>
