import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
// import App from '../views/Application/index.vue'

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'Home',
        component: Home
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
})

export default router
