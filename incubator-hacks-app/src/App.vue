<template>
  <!-- TODO: figure out how to hide if user not logged in -->
  <button class="header-btns" v-if="$route.path != '/profile'"><router-link to="/profile">Profile</router-link></button>
  <div>
    <router-view />
  </div>
</template>

<script>
export default ({
})
</script>

<style>
@import './base.css';
</style>
