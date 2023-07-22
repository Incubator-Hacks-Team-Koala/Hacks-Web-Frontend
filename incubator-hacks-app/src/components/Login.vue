<template>
    <div id="container">
        <div id="login-container">
            <div id="normal-login" class="login-section">
                <form action="/login" method="post">
                    <div id="login-email" class="login-field">
                        <label for="login-email-field" class="form-label">Username or Email</label>
                        <input type="text" name="email" id="login-email-field" class="form-input">
                    </div>
                    <div id="login-password" class="login-field">
                        <label for="login-password-field" class="form-label">Password</label>
                        <input type="password" name="password" id="login-password-field" class="form-input" required>
                    </div>
                    <div id="login-submit">
                        <button id="login-button" class="login-button">Log In</button>
                    </div>
                </form>
            </div>
            <div id="external-login" class="login-section">
                <form action="" method="post">
                    <button id="login-with-google" class="login-button external-login-button" type="submit">
                        Log In with Google
                    </button>
                </form>
                <form action="" method="post">
                    <button id="login-with-github" class="login-button external-login-button" type="submit">
                        Log In with GitHub
                    </button>
                </form>
            </div>
            <div id="register">
                <p>Don't have an account?</p>
                <a href="/register">Register here</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
}

#login-container {
    border: 3px solid black;
    border-radius: 12px;
    width: fit-content;
    padding: 4rem 8rem;
}

.login-field {
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

.login-button {
    padding: .5rem 1.4rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

#login-button {
    background: grey;
    color: white;
    transition: background .3s;
}

#login-button:hover {
    background: darkgrey;
}

.external-login-button {
    margin-bottom: .4rem;
    background: darkslategrey;
    color: white;
    transition: background .3s;
}

.external-login-button:hover {
    background: slategrey;
}

.login-section {
    margin-bottom: 3em;
}
</style>
