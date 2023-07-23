<template>
  <div class="profile-options">
    <button class="btns profile-side">My Teams</button><br />
    <button class="btns profile-side">Change Email</button><br />
    <button class="btns profile-side">Change Username</button><br />
    <button class="btns profile-side">Change Password</button>
  </div>

  <div class="profile-user-details" :profileDetails="getProfile()">
    <div class="profile-img-container">
      <img
        class="profile-img"
        :src="profileDetails.pfp_url"
        alt="User Avatar"
      />
    </div>
    <p style="padding-bottom: 0rem">{{ this.$username }}</p>
    <p>{{ profileDetails.description }}</p>
    <p>
      Preferred Developmental Areas:<br />
      {{ profileDetails.dev_type }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "@/const";

export default {
  data() {
    return {
      profileDetails: [],
    };
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    async getProfile() {
      console.log(this.$username);
      try {
        let name = this.$username;
        let resp = await axios.get(`${BASE_URL}/api/user/${name}/profile`);
        console.log(resp.data);
        this.profileDetails = resp.data;
      } catch (error) {
        console.log(error);
        this.profileDetails = error.message;
      }
    },
  },
};
</script>

<style>
@import "../styles/base.css";
@import "../styles/profile.css";
</style>
