<template>
    <div id="container">
        <div id="team-container">
            <section id="team-details" class="team-section">
                <h4 id="team-name-title">Team Name</h4>
                <h2 id="team-name">{{ dataItems.team_name }}</h2>
                <h4 id="team-desc-title">Team Description</h4>
                <p id="team-desc">{{ dataItems.description }}</p>
            </section>
            <section id="members-list" class="team-section">
                <h4 id="member-list-title">Team Members List</h4>
                <div class="owner-section">
                    <h5 class="owner-title">Owner</h5>
                    <p class="owner">{{ dataItems.owner }}</p>
                </div>
                <div class="member-section">
                    <h5 class="member-title"></h5>
                    <p class="member"></p>
                </div>
            </section>
            <section id="hackathons" class="team-section">
                <h4 id="hackathon-title">Participation</h4>
                <div class="hackathon-info">
                    <h2 class="hackathon-name">Demo Hackathon</h2>
                    <p class="date">06.03.23</p>
                </div>
                <div class="hackathon-info">
                    <h2 class="hackathon-name">Demo Hackathon 2</h2>
                    <p class="date">14.03.23</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import { BASE_URL } from '../const.js';

export default {
    name: "Team",
    data() {
        return {
            dataItems: {},
        }
    },
    computed: {
        team_name() {
            return this.$route.params.name;
        }
    },
    async mounted() {
        try {
            const auth_header = {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            };
            const res = await axios.get(`${BASE_URL}/api/teams/team/${this.team_name}`, { headers: auth_header });
            this.dataItems = res.data[0];
        } catch (error) {
            console.error(error);
            this.error = error.message;
        }
    }
}
</script>

<style scoped>
#container {
    display: flex;
    justify-content: center;
}

#team-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 2rem 2rem;
    column-gap: 1rem;
    row-gap: 4rem;
    width: 80%;
    justify-content: space-evenly;
    justify-items: center;
    align-items: stretch;
}

.team-section {
    background: lightgrey;
    background: linear-gradient(180deg, rgba(238,238,238,1) 0%, rgba(194,194,194,1) 20%, rgba(122,122,122,1) 100%);
    text-align: left;
    padding: 2rem;
    width: 80%;
    border-radius: 12px;
}

h4, h5 {
    margin-bottom: .4rem;
}

#team-name {
    margin-top: 0;
}

p {
    margin-top: 0;
}

.hackathon-info {
    background: lightskyblue;
    background: linear-gradient(40deg, rgba(143,199,238,1) 0%, rgba(255,255,255,1) 92%, rgba(255,248,0,1) 100%);
    border-radius: 12px;
    padding: .2rem 2rem;
    margin-bottom: .6rem;
}
</style>
