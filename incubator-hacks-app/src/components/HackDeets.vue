<!-- IGNORE -->

<template>
    <div class="hack-deets-banner">
        <!-- TODO: the img styles are PLACEHOLDERS. delete them after proper imagery is got -->
        <img style="height: 10rem; width: 100%;" src="../assets/kbLogo.png" alt="placeholder image">

        <!-- show create/join if user hasn't joined a team -->
        <div v-show="!joinedTeam" class="hack-deets-btn-container">
            <button class="btns hack-deets-btn">Create Team</button><br>
            <button class="btns hack-deets-btn">Join Team</button>
        </div>

        <!-- show view if user has joined a team -->
        <button class="btns hack-deets-btn hack-deets-view-team-btn" v-show="joinedTeam">View Team</button>
    </div>
    <div style="align-content: center">
        <div class="hack-box">
            <p class="hack-box-text">{{ hackName }}</p>
            <p class="hack-box-text">{{ hackTime }}</p>
            <p class="hack-box-text">{{ hackDesc }}</p>
            <p class="hack-box-text">Be there or be square (mandatory sentence)</p>
            <!-- only show button if user is on a team -->
            <button class="btns hack-deets-project-btn" v-show="joinedTeam">Submit Project</button>
        </div>
        <div class="hack-box">
            <p class="hack-box-text">This Hackathon's schedule:</p>
            <p class="hack-box-text">{{ hackSchedule }}</p>
        </div>
    </div>
</template>

<script>
// TOOD: get information from database based on what hack they clicked on

let hackName = "Placeholder Name"
let hackTime = "Placeholder Time"
let hackDesc = "Lorem Ipsum whatever"
let hackSchedule = "oh jeez this probably needs to be not string, huh"

export default ({
    data() {
        return {
            hackName,
            hackTime,
            hackDesc,
            hackSchedule
        }
    },
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