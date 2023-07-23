<template>
  <p style="margin-top: 2rem; margin-bottom: 0rem">{{ joinedMsg }}</p>
  <div class="hack-clickable-box">
    <div v-for="hack in hacks" :key="hack.id" class="hack-box">
      <h2 class="hack-box-text">{{ hack.name }}</h2>
      <p class="hack-box-text">{{ hack.description }}</p>
      <p class="hack-box-text">
        From {{ hack.start_date }} to {{ hack.end_date }}
      </p>
      <p class="hack-box-text">Be there or be square!</p>
      <button @click="enrolAlone(hack.id)" class="btns hack-join-button">
        Join this Hack (Solo)
      </button>
      <button @click="enrolTeam(hack.id)" class="btns hack-join-button">
        Join this Hack (Team)
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '../const.js'

export default {
  name: "HackItem",
  props: {
    hacks: {
      type: Array,
    },
  },
  data() {
    return {
      joinedMsg: "",
    };
  },
  methods: {
    toTheHacks(id) {
      this.$router.push({ path: `/hacks/${id}` });
    },
    async enrolAlone(hack_id) {
      try {
        // await axios.post(`${BASE_URL}/api/hacks/hackathon/${hack_id}/user/enrol`, data={
        //   hack_id: hack_id,
        //   user_id: 1
        // })
        this.joinedMsg = "Joined Solo!"
        console.log("THIS IS HARD CODED.")
      } catch (error) {
        console.log(error)
      }
    },
    async enrolTeam(hack_id) {
      try {
        // await axios.post(`${BASE_URL}/api/hacks/hackathon/${hack_id}/team/${team_name}/enrol`, formData)
        this.joinedMsg = "Joined Team!"
        console.log("THIS IS HARD CODED.")
      } catch (error) {
        console.log(error)
      }
    },
  },
};
</script>

<style scoped>
@import "../styles/hack-deets.css";
</style>