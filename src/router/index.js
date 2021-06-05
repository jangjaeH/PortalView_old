import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../view/home';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { unauthorized: true },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router