import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Gallery from '../pages/gallery.vue'
import About from '../pages/about.vue'
import Booking from '../pages/booking.vue'
import AdminLogin from '../pages/admin/login.vue'
import { useUserStore } from '@/stores/userStore.js'


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
    { path: '/admin/login', name: 'Admin', component: AdminLogin },
    { path: '/admin', redirect: { name: 'Admin' } },
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

router.beforeEach(async (to, from, next) => {
    const user = useUserStore()
    let isLoggedIn = user.adminCanAccess
    if (to.name == 'Home' || to.name == 'About' || to.name == 'Gallery' || to.name == 'Booking') {
        next()
    }
    else if (to.name !== 'Admin' && !isLoggedIn) {
        next({ name: 'Admin' })
    }
    else if (to.name == 'Admin' && isLoggedIn) {
        next({ name: 'Admin-Dashboard' })
    }
    else {
        next()
    }

})

export default router
