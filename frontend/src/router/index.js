import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Gallery from '../pages/gallery.vue'
import About from '../pages/about.vue'
import Booking from '../pages/booking.vue'

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
    // {
    //     path: '/app',
    //     name: 'App',
    //     component: App,
    //     children: [
    //         { path: '', component: App, alias: ['/login', 'login'] },
    //     ],
    // },


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
