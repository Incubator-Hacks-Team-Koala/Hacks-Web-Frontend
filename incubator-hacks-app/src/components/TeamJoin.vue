<template>
    <div id="container">
        <div id="team-join-container">
            <div id="team-join" class="team-join-section">
                <form @submit.prevent="submitForm" method="post">
                    <div id="team-name" class="team-join-field">
                        <label for="team-name-field" class="form-label">Team Name</label>
                        <input 
                            type="text"
                            name="team-name"
                            id="team-name-field"
                            class="form-input"
                            v-model="team_name"
                            maxlength="30"
                            required
                        >
                    </div>
                    <div id="team-code" class="team-join-field">
                        <label for="team-code-field" class="form-label">Team Passcode</label>
                        <input type="text" name="team-pass" minlength="4" maxlength="4" id="team-pass-field" class="form-input" v-model="formData.passcode" required>
                    </div>
                    <div id="team-join-submit">
                        <button id="team-join-button" class="team-join-button">Join Team</button>
                    </div>
                </form>
                <div v-if="error">
                    <p>{{ error }}</p>
                </div>
            </div>
            <div id="join-section">
                <p>Want to create your own team?</p>
                <router-link to="/team/join">Create one here</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import router from '../main.js';
import { BASE_URL } from '../const.js'

export default {
    name: 'TeamJoin',
    data() {
        return {
            formData: {
                passcode: '',
            },
            team_name: null,
            error: null,
        };
    },
    methods: {
        async submitForm() {
            try {
                const auth_header = {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                };
                await axios.post(`${BASE_URL}/api/teams/team/${this.team_name}/join`, this.formData, { headers: auth_header });
                this.error = null;
                router.push('/teams/team');
            } catch (error) {
                console.error(error);
                this.error = error.message;
            }
        }
    }
}
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    height: 100%;
}

#team-join-container {
    border: 3px solid black;
    border-radius: 12px;
    width: fit-content;
    padding: 4rem 8rem;
}

.team-join-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.form-label {
    text-align: left;
    margin-bottom: .4rem;
}

.form-input {
    border: 3px solid grey;
    border-radius: 6px;
    padding: .5rem;
}

.team-join-button {
    padding: .5rem 1.4rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

#team-join-button {
    background: grey;
    color: white;
    transition: background .3s;
}

#team-join-button:hover {
    background: darkgrey;
}

.team-join-section {
    margin-bottom: 3em;
}

#team-name-field {
    width: 60%;
}

#team-pass-field {
    width: 4rem;
}
</style>
