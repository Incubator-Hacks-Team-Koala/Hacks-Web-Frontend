<template>
  <!-- this bit will have to be removed in favor of an ACTUAL fucking navbar -->
  <p>Choose what part of this page you want to see:</p>
  <router-link to="/TestPage">Test Page</router-link><br>
  <router-link to="/Test2">Test 2</router-link><br>

  <!-- put inside a button once we have that -->
  <span v-show="showProfile"><router-link to="/profile">Profile</router-link></span><br>

  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    showProfile() {
      let isLoggedIn = true
      return isLoggedIn
      // TODO: change this to actually compute / figure out if the user is logged in
    }
  }
}
</script>

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
