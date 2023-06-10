import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";

import './assets/style.css'

import Home from './pages/Home.vue';
import What from './pages/What.vue';

// VUE ROUTER
const routes = [
    { path: "/", component: Home },
    { path: "/what", component: What },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
},
);

createApp(App).use(router).mount('#app')
