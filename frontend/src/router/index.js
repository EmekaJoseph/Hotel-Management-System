import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Gallery from '../pages/gallery.vue'
import About from '../pages/about.vue'
import Booking from '../pages/booking.vue'
import AdminLogin from '../pages/admin/login.vue'

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/gallery',
        alias: '/photos',
        name: 'Gallery',
        component: Gallery
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/booking',
        name: 'Booking',
        component: Booking,
        props: route => ({ query: route.query.bk })
    },


    // Admin ############################### 
    { path: '/admin', name: 'Admin', component: AdminLogin },
    { path: '/admin/dashboard', name: 'Admin-Dashboard', component: () => import('../pages/admin/dashboard.vue') },

    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "about" */ '../pages/invalid.vue')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})

export default router
