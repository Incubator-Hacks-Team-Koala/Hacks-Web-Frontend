<template>
  <div class="profile-options">
    <button class="btns profile-side">My Teams</button><br />
    <button class="btns profile-side">Change Email</button><br />
    <button class="btns profile-side">Change Username</button><br />
    <button class="btns profile-side">Change Password</button>
  </div>

  <div class="profile-img-container">
    <img class="profile-img" src="../assets/kbLogo.png" alt="User Avatar" />
  </div>

  <div class="profile-user-details" :profileDetails="profileDetails">
    <p style="padding-bottom: 0rem">{{ profileDetails["username"] }}</p>
    <p>{{ profileDetails["description"] }}</p>
    <p>Dev Type: {{ profileDetails["dev_type"] }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "@/const";

export default {
  data() {
    return {
      profileDetails: 
        {
          username: "Koala",
          description: "Loves eucalyptus leaves",
          dev_type: 1,
        },
      username: "",
    };
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    async getProfile() {
      // let username = sessionStorage.getItem("username")
      //let resp = await axios.get(`${BASE_URL}/api/user/${username}/profile`)
      // this.profileDetails = resp.data
      // this.username = username
    },
  },
};
</script>

<style>
@import "../styles/base.css";
@import "../styles/profile.css";
</style>
