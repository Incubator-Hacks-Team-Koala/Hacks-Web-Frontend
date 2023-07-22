<template>
  <!-- put inside a button once we have that -->
  <span v-show="showProfile"><router-link to="/profile">Profile</router-link></span><br>

  <div>
    <router-view />
    <!-- <router-link to="/profile">Profile</router-link><br> -->
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
