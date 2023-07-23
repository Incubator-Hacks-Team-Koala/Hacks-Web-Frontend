import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';
import HackDeets from './components/HackDeets.vue';
import TeamCreate from './components/TeamCreate.vue';
import TeamJoin from './components/TeamJoin.vue';
import Team from './components/Team.vue';
import HackItem from './components/HackItem.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/profile', component: Profile },
        { path: '/hack', component: HackDeets },
        { path: '/team/create', component: TeamCreate },
        { path: '/team/join', component: TeamJoin },
        { path: '/teams/team/:name', component: Team },
        { path: '/profile', component: Profile},
        // { path: '/hack/:id', component: HackDeets, props: true}
    ]
});

const app = createApp(App);

app.use(router);
app.component("hack-item", HackItem)

app.mount('#app');

export default router;
