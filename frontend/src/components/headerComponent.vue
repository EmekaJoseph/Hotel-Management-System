<template>
    <div>
        <header id="header" class="fixed-top d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">
                <div class="logo">
                    <h4 class="fw-bold">
                        <router-link class="text-decoration-none text-white" to="/">
                            HMS
                        </router-link>
                    </h4>
                </div>
                <div v-for="i in 10"></div>
                <div>
                    <nav id="navbar" class="navbar d-none d-md-block">
                        <ul>
                            <li>
                                <router-link class="nav-link scrollto" to="/">
                                    Home
                                </router-link>
                            </li>
                            <li>
                                <router-link class="nav-link scrollto" to="/gallery">
                                    Gallery
                                </router-link>
                            </li>
                            <li>
                                <router-link class="nav-link scrollto" to="/about">
                                    About Us
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <span v-if="!user.signedIn" class="d-none d-md-block">
                    <a class=" nav-link text-white" data-bs-toggle="modal" data-bs-target="#signInModal" href="#">
                        Sign In</a>
                </span>
                <span v-else class="dropdown d-none d-md-block">
                    <a class="nav-link dropdown-toggle" href="#" id="userDrop" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="bi bi-circle-fill small" style="color: #d8f070;"></i>&nbsp; {{user.data.name}} <i
                            class="bi bi-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu dropOptionsPanel" aria-labelledby="userDrop">
                        <li><a class="dropdown-item dropOptionsItem" @click.prevent href="#"><i
                                    class="bi bi-gear"></i>&nbsp;Settings</a></li>
                        <li><a class="dropdown-item dropOptionsItem" @click.prevent="signOut" href="#"><i
                                    class="bi bi-x-circle"></i>&nbsp;Sign out</a></li>
                    </ul>
                </span>
                <nav class="d-md-none navbar">
                    <h3 class="fw-bold" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"><i class="bi bi-list"></i></h3>
                </nav>

            </div>
        </header>


        <signInModalComponent />
        <offCanvasComponentVue />
    </div>

</template>

<script setup>
    import signInModalComponent from './signInModalComponent.vue';
    import offCanvasComponentVue from './offCanvasComponent.vue';

    import { useRouter, useRoute } from 'vue-router'
    import { inject, onMounted, ref } from 'vue'

    const store = inject("codeStore");
    const color1 = ref(store.color.c1)
    const color2 = ref(store.color.c2)
    const user = ref(store.user);

    const route = useRoute()


    function signOut() {
        user.value.signedIn = false
    }


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

    #userDrop {
        color: #fff;
        font-size: 14px;
        /* font-weight: bold; */
    }

    .dropdown-toggle::after {
        display: none;
    }

    .dropOptionsPanel {
        /* border-radius: 20px; */
        border: none;
        font-size: 14px;
        padding: 10px 0px;
    }


    .dropdown-menu {
        width: 100% !important;
    }

    .dropOptionsItem:hover {
        color: v-bind(color1);
        background: none;
        font-weight: bold;
    }

    /* .dropdown:hover>.dropdown-menu {
        display: block;
        top: 100%;
    }

    .dropdown>.dropdown-toggle:active {
        pointer-events: none;
    } */
</style>