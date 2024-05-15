<script setup lang="ts"></script>
<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-row align="center">
        <v-col class="d-flex justify-start" cols="5">
          <v-btn to="/lessons" text="lessons" variant="text"></v-btn>
          <v-btn to="/extension" text="extension" variant="text"></v-btn>
        </v-col>
        <v-col class="d-flex justify-center" cols="2">
          <v-avatar color="grey-darken-1" size="32"></v-avatar>
        </v-col>
        <v-col class="d-flex justify-end align-center" cols="5">
          <v-btn text="PL" variant="text"></v-btn>
          <v-btn icon="mdi-account"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<style lang=""></style>
