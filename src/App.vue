<template>
  <div id="app">
    
    <HomeProject />
  </div>
</template>

<script>
import HomeProject from '@/views/HomeProject.vue'

export default {
  components: {
    HomeProject
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600&display=swap');

#app {
  font-family: 'Inconsolata', monospace;
  margin-top: 0;
}
</style>
