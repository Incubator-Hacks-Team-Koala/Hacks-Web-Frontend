<template>
  <!-- TODO: figure out how to hide if user not logged in -->
  <div class="navbar">
    <router-link to="/"><button class="header-btns" v-if="$route.path != '/'">Home</button></router-link>
    <router-link to="/profile"><button class="header-btns" v-if="$route.path != '/profile'">Profile</button></router-link>
    <router-link to="/login"><button class="header-btns" v-if="$route.path != '/login'">Login</button></router-link>
    <router-link to="/register"><button class="header-btns" v-if="$route.path != '/register'">Register</button></router-link>
    <router-link to="/"><button @:click.once="logout" v-if="showLogout" class="header-btns">Logout</button></router-link>
  </div>
  
  <div>
    <router-view />
  </div>
</template>

<script>
export default ({
  computed: {
    showLogout() {
      let isLoggedIn = false
      if (isLoggedIn) return true
      return isLoggedIn
    }
  }
})
</script>

<style>
@import './base.css';
</style>
