<script setup lang="ts">
import HeaderMain from '@/components/HeaderMain.vue'
import BaseDialog from '@/components/base/BaseDialog.vue'
</script>

<template>
  <HeaderMain />
  <v-main>
    <v-container class="h-100 pt-0">
      <div class="h-100 bg-grey-lighten-3 rounded-xl pa-4">
        <slot />
      </div>
    </v-container>
    <BaseDialog />
  </v-main>
</template>
