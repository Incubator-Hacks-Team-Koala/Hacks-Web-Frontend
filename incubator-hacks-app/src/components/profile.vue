<template>
    <div class="body">
        <!-- this is all hardcoded af right now, change that later -->
        <div class="profile-img-container">

            <!-- TODO: change to v-binds to dynamically update stuff -->
            <img class="profile-img" src="../assets/kbLogo.png" alt="koalaBotLogo">
        </div>

        <div class="profile-user-details">
            <p style="padding-bottom: 0rem">Name</p>
            <p>Short Bio</p>
            <p>
                Preferred Programming Languages:<br>
                WAHOOGA
            </p>
            <p>
                Preferred Developmental Areas:<br>
                ???????
            </p>
            <p>
                Fun Fact:<br>
                Programmers don't sleep.
            </p>
        </div>
    </div>
</template>

<script>
export default ({
    methods: {
        logout() {
        console.log("LOG OUT")
        // TODO: replace with actual logout logic
    }}
})
</script>

<style>
@import '../base.css';
</style>