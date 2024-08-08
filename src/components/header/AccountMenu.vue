<template>
  <BaseIconMenu :icon="icon" :items="items" />
</template>

<script setup lang="ts">
import BaseIconMenu from '@/components/base/BaseIconMenu.vue'

const icon = 'mdi-account'
const items = [{ title: 'Profile' }, { title: 'Settings' }, { title: 'Logout' }]
</script>
