import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from '@/pages/Home';
import Freelancer from '@/pages/Freelancers';
import Order from '@/pages/Order';
import About from '@/pages/About';

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/freelancers",
        component: Freelancer
    },
    {
        path: "/order",
        component: Order
    },
    {
        path: "/about",
        component: About
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;