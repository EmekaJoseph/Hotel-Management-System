import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// general
import Home from '../pages/general/index.vue'
import Gallery from '../pages/general/gallery.vue'
import About from '../pages/general/about.vue'
import Booking from '../pages/general/booking.vue'
// admin
import AdminLogin from '../pages/admin/login/login.vue'
// store
import { useUserStore } from '@/stores/user'


const routes: Array<RouteRecordRaw> = [
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



  // Admin ######################################

  { path: '/admin/login', name: 'Admin', component: AdminLogin },
  { path: '/admin', redirect: { name: 'Admin' } },

  {
    path: '/admin',
    name: 'Admin-layout',
    component: () => import('../pages/admin/admin-layout.vue'),
    children: [
      { path: 'dashboard', name: 'Dashboard', component: () => import('../pages/admin/dashboard/dashboard.vue') },
      { path: 'bookings-list', name: 'Bookings', component: () => import('../pages/admin/orders/orders.vue') },
      { path: 'rooms', name: 'Rooms', component: () => import('../pages/admin/rooms/rooms.vue') },
      { path: 'messages', name: 'Messages', component: () => import('../pages/admin/messages/messages.vue') },
    ],
  },




  // Admin ############################### 
  // { path: '/admin/login', name: 'Admin', component: AdminLogin },
  // { path: '/admin', redirect: { name: 'Admin' } },
  // { path: '/admin/dashboard', name: 'Dashboard', component: () => import('../pages/admin/dashboard.vue') },
  // { path: '/admin/bookings-list', name: 'Bookings', component: () => import('../pages/admin/orders.vue') },
  // { path: '/admin/rooms', name: 'Rooms', component: () => import('../pages/admin/rooms.vue') },
  // { path: '/admin/messages', name: 'Messages', component: () => import('../pages/admin/messages.vue') },

  {
    path: '/:pathMatch(.*)*',
    name: 'Invalid',
    component: () => import('../pages/general/invalid.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})


router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  let isLoggedIn = user.adminCanAccess
  if (to.name == 'Home' || to.name == 'About' || to.name == 'Gallery' || to.name == 'Booking' || to.name == 'Invalid') {
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

router.afterEach((to, from) => {
  document.title = 'house34 | ' + to.name?.toString()
})

export default router
