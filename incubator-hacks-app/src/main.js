import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';
import HackDeets from './components/HackDeets.vue';

import HackItem from './components/HackItem.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/profile', component: Profile},
        // { path: '/hack/:id', component: HackDeets, props: true}
    ]
});

const app = createApp(App);

app.use(router);
app.component("hack-item", HackItem)

app.mount('#app');

export default router;
