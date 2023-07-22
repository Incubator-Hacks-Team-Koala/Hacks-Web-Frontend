import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Login from './components/Login';
import Register from './components/Register';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/profile', component: Profile}
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
