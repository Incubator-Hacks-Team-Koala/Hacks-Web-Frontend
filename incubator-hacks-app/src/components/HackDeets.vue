<!-- NOT included in main.js because not sure how to implement the dynamic URL generation -->
<!-- unless we don't want different URLS and just want to populate stuff based on what was clicked -->
<!-- which could be a different headache in itself tbh -->

<template>
    <div class="hack-deets-banner">
        <!-- TODO: the img styles are PLACEHOLDERS. delete them after proper imagery is got -->
        <img style="height: 10rem; width: 100%;" src="../assets/kbLogo.png" alt="placeholder image">
        <div class="hack-deets-btn-container">
            <button class="btns hack-deets-btn" v-show="!joinedTeam">Create Team</button><br>
            <button class="btns hack-deets-btn" v-show="!joinedTeam">Join Team</button>
        </div>
        <button class="btns hack-deets-btn hack-deets-solo-btn" v-show="joinedTeam">View Team</button>
    </div>
    <div class="hack-deets-body">
        <div class="hack-box">
            <p class="hack-box-text">Placeholder</p>
        </div>
        <div class="hack-box">
            <p class="hack-box-text">This Hackathon's schedule:</p>
        </div>
    </div>
</template>

<script>
export default ({
    computed: {
        joinedTeam() {
            let joinedTeam = false
            return joinedTeam
            // TODO: implement actual code to see if user has joined team for this specific hackathon
        }
    },
})
</script>


<style>
@import '../styles/base.css';
@import '../styles/hack-deets.css'
</style>