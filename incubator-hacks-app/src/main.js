import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Login from './components/Login';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login },
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
