<template>
  <v-menu transition="scale-transition">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">{{ text }}</v-btn>
    </template>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'Menu'
  },
  items: {
    type: Array,
    required: true
  }
})
</script>
