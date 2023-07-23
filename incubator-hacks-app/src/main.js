import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';
import HackDeets from './components/HackDeets.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/profile', component: Profile},
        { path: '/hack', component: HackDeets}
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');

export default router;
