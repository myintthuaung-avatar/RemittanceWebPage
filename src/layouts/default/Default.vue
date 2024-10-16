<template>
  <v-app style="background-color: whitesmoke">
    <default-bar />
    <MainDrawer />
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import MainDrawer from './MainDrawer.vue'
</script>
