<template>
  <!-- TODO: figure out how to hide if user not logged in -->
  <div class="navbar">
    <router-link to="/"><button class="btns" v-if="$route.path != '/'">Home</button></router-link>
    <router-link to="/profile"><button class="btns" v-if="$route.path != '/profile'">Profile</button></router-link>
    <router-link to="/login"><button class="btns" v-if="$route.path != '/login'">Login</button></router-link>
    <router-link to="/register"><button class="btns" v-if="$route.path != '/register'">Register</button></router-link>
    <router-link to="/"><button @:click.once="logout" v-if="showLogout" class="btns">Logout</button></router-link>
  </div>
  
  <div>
    <router-view />
  </div>
</template>

<script>
export default ({
  methods: {
    logout() {
        console.log("LOG OUT")
        // TODO: replace with actual logout logic
      },
  },
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
@import './styles/base.css';
</style>
