<template>
  <div id="app">
    
    <router-view @authenticated="setAuthenticated"/>
    
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      authenticated: false,
      loggedInClient: ""
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status
    },
    logout() {
      this.authenticated = false;
    }
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
