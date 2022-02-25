<template>
    <div>
        <header id="header" class="fixed-top d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">
                <div class="logo">
                    <h4 class="fw-bold">
                        <router-link class="text-decoration-none text-white" to="/">HMS</router-link>
                    </h4>
                </div>
                <div v-for="i in 10" :key="i"></div>
                <div>
                    <nav id="navbar" class="navbar d-none d-md-block">
                        <ul>
                            <li>
                                <router-link class="nav-link scrollto" to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link class="nav-link scrollto" to="/gallery">Gallery</router-link>
                            </li>
                            <li>
                                <router-link class="nav-link scrollto" to="/about">About Us</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <!-- <span class="d-none d-md-block">
                    <a class=" nav-link text-white" data-bs-toggle="modal" data-bs-target="#signInModal" href="#">
                        Sign In</a>
                </span>-->
                <span class="dropdown d-none d-md-block">
                    <a class="nav-link dropdown-toggle" href="#" id="accountDrop" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                        <i class="bi bi-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="accountDrop">
                        <li>
                            <router-link class="dropdown-item" to="/admin">
                                <i class="bi bi-person-fill"></i>&nbsp;Admin
                            </router-link>
                        </li>
                        <!-- <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li class="text-muted">
                            <a class="dropdown-item" @click.prevent href="#">
                                <i class="bi bi-x-circle"></i>&nbsp;Sign out
                            </a>
                        </li> -->
                    </ul>
                </span>
                <nav class="d-md-none navbar">
                    <h3 class="fw-bold" data-bs-toggle="offcanvas" data-bs-target="#offcanvasGeneral"
                        aria-controls="offcanvasGeneral">
                        <i class="bi bi-list"></i>
                    </h3>
                </nav>
            </div>
        </header>

        <signInModalComponent />
        <offCanvasComponentVue />
    </div>
</template>

<script setup>
    import offCanvasComponentVue from './offCanvasComponent.vue';
    import signInModalComponent from './signInPopUpComponent.vue';


    import { useRouter, useRoute } from 'vue-router'
    import { onMounted, ref } from 'vue'



    import { storeToRefs } from 'pinia'
    import { useColorStore } from '@/stores/colorStore.js'
    const { color1, color2 } = storeToRefs(useColorStore())

    import { useUserStore } from '@/stores/userStore.js'
    const user = useUserStore()


    onMounted(() => {
        // console.log(user.value.data, 'ddddddd')
    })
</script>

<style scoped>
    #header {
        z-index: 997;
        transition: all 0.5s;
        padding: 9px 0;
        /* background: none; */
        background-color: v-bind(color1);
        color: #fff;
        border-bottom: 1px solid v-bind(color2);
    }

    .navbar {
        padding: 0;
    }

    .navbar ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        align-items: center;
    }

    .navbar li {
        position: relative;
    }

    .navbar a,
    .navbar a:focus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px 10px 30px;
        font-size: 15px;
        font-weight: lighter;
        color: #fff;
        white-space: nowrap;
        transition: 0.3s;
    }

    .navbar a i,
    .navbar a:focus i {
        font-size: 12px;
        line-height: 0;
        margin-left: 5px;
    }

    .navbar .active,
    .navbar .active:focus {
        color: v-bind(color2);
        background-color: #4d033b;
        border-radius: 20px;
    }

    .navbar a:hover {
        color: v-bind(color2);
        font-weight: bold;
    }

    .navbar .getstarted {
        background: #3498db;
        padding: 8px 25px;
        margin-left: 5px;
        border-radius: 50px;
        color: #fff;
        text-decoration: none;
    }

    .navbar .getstarted:hover {
        color: #fff;
        background: #4aa3df;
    }

    #accountDrop {
        color: #fff;
        font-size: 14px;
    }

    .dropdown-toggle::after {
        display: none;
    }

    .dropdown-menu {
        border-bottom: 3px solid v-bind(color1);
        border-radius: 0px;
        font-size: 14px;
    }

    /* .dropdown-menu {
        width: 100% !important;
    } */

    .dropdown-item:hover {
        color: v-bind(color1);
        background: none;
        font-weight: bold;
    }

    .dropdown:hover>.dropdown-menu {
        display: block;
        top: 100%;
        transition: opacity 1s ease-in;
    }

    .dropdown>.dropdown-toggle:active {
        pointer-events: none;
    }
</style>