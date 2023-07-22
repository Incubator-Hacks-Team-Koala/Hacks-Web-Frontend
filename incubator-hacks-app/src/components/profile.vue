<template>
    <header>
        <router-link to="/"><button class="header-btns home">Home</button></router-link>
        <router-link to="/"><button @:click.once="logout" class="header-btns profile">Logout</button></router-link>
    </header>

    <div>
        AUGH
        ok make pretty later
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
    .header-btns {
        font-size: 1rem;
        position: absolute;
        top: 1.5rem;
        padding: 0.5rem;
    }
    .home {
        left: 2rem;
    }
    .profile {
        right: 2rem;
    }
</style>