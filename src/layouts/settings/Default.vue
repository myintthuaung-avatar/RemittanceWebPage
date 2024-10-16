<template>
  <v-app>
    <default-bar />
    <SettingDrawer />
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from '../default/AppBar.vue'
  import DefaultView from './View.vue'
  import SettingDrawer from './SettingDrawer.vue'
</script>
