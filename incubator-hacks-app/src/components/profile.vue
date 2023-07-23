<template>

<div class="profile-options">
        <router-link to="/"><button class="header-btns side">My Teams</button></router-link><br>
        <router-link to="/"><button class="header-btns side">Change Email</button></router-link><br>
        <router-link to="/"><button class="header-btns side">Change Username</button></router-link><br>
        <router-link to="/"><button class="header-btns side">Change Password</button></router-link>
    </div>

    <!-- this is all hardcoded af right now, change that later -->
    <div class="profile-img-container">
        <img class="profile-img" :src="getAvatarURL(imageName)" alt="User Avatar">
    </div>

    <div class="profile-user-details">
        <p style="padding-bottom: 0rem">{{ name }}</p>
        <p>{{ bio }}</p>
        <p>
            Preferred Programming Languages:<br>
            {{ languages }}
        </p>
        <p>
            Preferred Developmental Areas:<br>
            {{ devAreas }}
        </p>
        <p>
            Fun Fact:<br>
            {{ funFact }}
        </p>
    </div>
</template>

<script>
// TODO: get information from database about logged-in user

let name = "Default Name"
let username = "Default Username"
let bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et."
let languages = "C#, Python, Java"
let devAreas = "Full Stack"
let funFact = "Love cheese."
let imageName = "kbLogo.png"

export default ({
    data() {
        return {
            name,
            username,
            bio,
            languages,
            devAreas,
            funFact,
            imageName
        }
    },
    methods: {
        getAvatarURL(imageName) {
            return require('../assets/' + imageName)
        }
    }
})

</script>

<style>
@import '../base.css';
</style>