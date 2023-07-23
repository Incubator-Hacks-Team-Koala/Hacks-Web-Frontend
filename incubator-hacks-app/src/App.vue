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
  <!-- all available hackathons -->

  <div v-if="$route.path == '/'">
    <div class="hack-banner">
        <!-- TODO: the img styles are PLACEHOLDERS. delete them after proper imagery is got -->
        <img style="height: 10rem; width: 100%;" src="./assets/kbLogo.png" alt="placeholder image">
    </div>
    <div style="align-content: center">
        <div v-for="hack in getHacks()" class="hack-box">
            <p class="hack-box-text">{{ hack.name }}</p>
            <p class="hack-box-text">{{ hack.start_date }}</p>
            <p class="hack-box-text">{{ hack.end_date }}</p>
            <p class="hack-box-text">{{ hack.description }}</p>
            <p class="hack-box-text">Be there or be square (mandatory sentence)</p>
            <button class="btns hack-deets-project-btn" v-show="joinedTeam">Submit Project</button>
        </div>
        <div v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from './const.js';

export default ({
  methods: {
    async getHacks() {
      try {
        let resp = await axios.get(`${BASE_URL}/api/hacks/hackathon`)
        console.log(resp)
        return resp
      } catch (error) {
        console.log(error);
        return error.message;
      }
    },
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
