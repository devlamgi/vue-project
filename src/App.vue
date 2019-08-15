<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Register/>
    <List/>
  </div>
</template>

<script>
import Register from './components/Register.vue'
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    Register,
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
