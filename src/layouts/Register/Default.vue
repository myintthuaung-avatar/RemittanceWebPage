<template>
    <v-app>
      <default-bar />
      <v-col cols="12" md="4"><Menubar /></v-col>
      
      <default-view />
    </v-app>
  </template>
  
  <script setup>
    import DefaultBar from '../default/AppBar.vue'
    import DefaultView from '../settings/View.vue'
    import Menubar from './RegisterMenuBar.vue';
  </script>
  