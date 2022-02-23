import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/General/index.vue'
import Gallery from '../pages/General/gallery.vue'
import About from '../pages/General/about.vue'
import Booking from '../pages/General/booking.vue'
import AdminLogin from '../pages/admin/views/login.vue'
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
    { path: '/admin/dashboard', name: 'Dashboard', component: () => import('../pages/admin/views/dashboard.vue') },
    { path: '/admin/orders', name: 'Orders', component: () => import('../pages/admin/views/orders.vue') },
    { path: '/admin/rooms', name: 'Rooms', component: () => import('../pages/admin/views/rooms.vue') },
    { path: '/admin/messages', name: 'Messages', component: () => import('../pages/admin/views/messages.vue') },

    {
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/General/invalid.vue')
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
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
        next({ name: 'Dashboard' })
    }
    else {
        next()
    }

})

export default router
