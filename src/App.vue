<template>
  <div id="app">
    <ClientLogin/>
  </div>
</template>

<script>
import ClientLogin from './components/ClientLogin.vue'

export default {
  name: 'app',
  components: {
    ClientLogin
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F74902;
  margin-top: 60px; */
}
</style>
