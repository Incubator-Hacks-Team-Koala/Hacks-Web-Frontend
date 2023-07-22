<template>
  <p>Choose what part of this page you want to see:</p>
  <router-link to="/TestPage">Test Page</router-link><br>
  <router-link to="/Test2">Test 2</router-link><br>
  <div>
    <router-view></router-view>
  </div>
</template>

<!-- <script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
