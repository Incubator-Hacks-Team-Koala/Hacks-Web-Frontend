<template>
    <div id="container">
        <div id="register-container">
            <div class="register-section">
                <form @submit.prevent="submitForm" method="post">
                    <div id="register-email" class="register-field">
                        <label for="register-email-field" class="form-label">Email</label>
                        <input type="text" name="email" id="register-email-field" class="form-input" v-model="formData.email">
                        <span v-if="error_obj['email']" class="error-message">{{ error_obj['email'][0] }}</span>
                    </div>
                    <div id="register-fname" class="register-field">
                        <label for="register-fname-field" class="form-label">First Name</label>
                        <input type="text" name="fname" id="register-fname-field" class="form-input" v-model="formData.first_name">
                        <span v-if="error_obj['first_name']" class="error-message">{{ error_obj['first_name'][0] }}</span>
                    </div>
                    <div id="register-sname" class="register-field">
                        <label for="register-sname-field" class="form-label">Surname</label>
                        <input type="text" name="sname" id="register-sname-field" class="form-input" v-model="formData.last_name">
                        <span v-if="error_obj['last_name']" class="error-message">{{ error_obj['last_name'][0] }}</span>
                    </div>
                    <div id="register-username" class="register-field">
                        <label for="register-username-field" class="form-label">Username</label>
                        <input type="text" name="username" id="register-username-field" class="form-input" v-model="formData.username">
                        <span v-if="error_obj['username']" class="error-message">{{ error_obj['username'][0] }}</span>
                    </div>
                    <div id="register-password" class="register-field">
                        <label for="register-password-field" class="form-label">Password</label>
                        <input type="password" name="password" id="register-password-field" class="form-input" required v-model="formData.password">
                        <span v-if="error_obj['password']" class="error-message">{{ error_obj['password'][0] }}</span>
                    </div>
                    <div id="register-password-confirm" class="register-field">
                        <label for="register-password-confirm-field" class="form-label">Confirm Password</label>
                        <input type="password" name="password-confirm" id="register-password-confirm-field" class="form-input" required v-model="formData.password2">
                        <span v-if="error_obj['password2']" class="error-message">{{ error_obj['password2'][0] }}</span>
                    </div>
                    <div id="register-submit">
                        <button id="register-button" class="register-button">Register</button>
                    </div>
                </form>
                <div v-if="error">
                    <p>{{ error }}</p>
                </div>
            </div>
            <div id="register">
                <p>Already have an account?</p>
                <router-link to="/login">Log in here</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import router from '../main.js';
import { BASE_URL } from '../const.js'

export default {
    name: 'Register',
    data() {
        return {
            formData: {
                username: '',
                password: '',
                password2: '',
                email: '',
                first_name: '',
                last_name: '',
            },
            error: null,
            error_obj: {
                username: '',
                password: '',
                password2: '',
                email: '',
                first_name: '',
                last_name: '',
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                await axios.post(`${BASE_URL}/api/auth/register`, this.formData);
                this.error = null;
                this.error_obj = {
                    username: '',
                    password: '',
                    password2: '',
                    email: '',
                    first_name: '',
                    last_name: '',
                };
                router.push('/');
            } catch (error) {
                console.error(error);
                this.error = error.message;
                this.error_obj = error.response.data;
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
    margin-bottom: 4rem;
    height: 100%;
    margin-top: 3rem;
}

#register-container {
    border: 3px solid black;
    border-radius: 12px;
    width: fit-content;
    padding: 4rem 8rem;
}

.register-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 20rem;
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

.register-button {
    padding: .5rem 1.4rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

#register-button {
    background: grey;
    color: white;
    transition: background .3s;
}

#register-button:hover {
    background: darkgrey;
}

.register-section {
    margin-bottom: 3em;
}

.error-message {
    color: red;
    font-size: .9rem;
    background-color: #ff000030;
    border-radius: 6px;
    padding-top: .8rem;
    padding-bottom: .2rem;
    transform: translateY(-10px);
    z-index: -5;
}

.hidden {
    display: none;
}
</style>