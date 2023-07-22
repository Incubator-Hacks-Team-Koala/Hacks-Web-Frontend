import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import TestPage from './components/TestPage.vue'
import Test2 from './components/Test2.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/TestPage', component: TestPage },
        { path: '/Test2', component: Test2 },
        { path: '/profile', component: Profile}
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')

