<template>
  <BaseButtonMenu :text="text" :items="items" />
</template>

<script setup lang="ts">
import BaseButtonMenu from '@/components/base/BaseButtonMenu.vue'

const text = 'EN'
const items = [{ title: 'PL' }, { title: 'EN' }]
</script>
