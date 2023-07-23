<template>
    <div id="container">
        <div id="team-create-container">
            <div id="team-create" class="team-create-section">
                <form @submit.prevent="submitForm" method="post">
                    <div id="team-name" class="team-create-field">
                        <label for="team-name-field" class="form-label">Team Name</label>
                        <input 
                            type="text"
                            name="team-name"
                            id="team-name-field"
                            class="form-input"
                            v-model="formData.team_name_pretty"
                            maxlength="30"
                            required
                        >
                    </div>
                    <div id="team-desc" class="team-create-field">
                        <label for="team-desc-field" class="form-label">Team Description</label>
                        <textarea type="text" name="team-desc" rows="6" cols="50" maxlength="312" id="team-desc-field" class="form-input" v-model="formData.description" required></textarea>
                    </div>
                    <div id="team-code" class="team-create-field">
                        <label for="team-code-field" class="form-label">Team Passcode</label>
                        <input type="text" name="team-pass" minlength="4" maxlength="4" id="team-pass-field" class="form-input" v-model="formData.passcode" required>
                    </div>
                    <div id="team-create-submit">
                        <button id="team-create-button" class="team-create-button">Create Team</button>
                    </div>
                </form>
                <div v-if="error">
                    <p>{{ error }}</p>
                </div>
            </div>
            <div id="join-section">
                <p>Want to join an existing team?</p>
                <router-link to="/team/join">Join here</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import router from '../main.js';
import { BASE_URL } from '../const.js'

export default {
    name: 'TeamCreate',
    data() {
        return {
            formData: {
                team_name_pretty: '',
                description: '',
                passcode: '',
            },
            error: null,
        };
    },
    methods: {
        async submitForm() {
            try {
                const auth_header = {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                };
                await axios.post(`${BASE_URL}/api/teams/team`, this.formData, { headers: auth_header });
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

#team-create-container {
    border: 3px solid black;
    border-radius: 12px;
    width: fit-content;
    padding: 4rem 8rem;
}

.team-create-field {
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

.team-create-button {
    padding: .5rem 1.4rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

#team-create-button {
    background: grey;
    color: white;
    transition: background .3s;
}

#team-create-button:hover {
    background: darkgrey;
}

.team-create-section {
    margin-bottom: 3em;
}

#team-name-field {
    width: 60%;
}

#team-desc-field {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    resize: none;
}

#team-pass-field {
    width: 4rem;
}
</style>
