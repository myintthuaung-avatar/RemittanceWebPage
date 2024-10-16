<template>
  <div id="app" style="background-color:green;">
    <component :is="$route.meta.layout || 'div'">
      <router-view></router-view>
    </component>
  </div>

</template>

<script setup>
  //
</script>
