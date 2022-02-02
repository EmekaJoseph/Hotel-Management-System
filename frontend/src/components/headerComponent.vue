<template>
    <div>
        <header id="header" class="fixed-top d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">
                <div class="logo">
                    <h4 class="fw-bold">
                        <router-link @click="activeC()" class="text-decoration-none text-white" to="/">
                            HMS
                        </router-link>
                    </h4>
                </div>
                <nav id="navbar" class="navbar d-none d-md-block">
                    <ul>
                        <li>
                            <router-link class="nav-link scrollto" :class="{'active': activeC('Home')}" to="/">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link class="nav-link scrollto" :class="{'active': activeC('Gallery')}"
                                to="/gallery">
                                Gallery
                            </router-link>
                        </li>
                        <li>
                            <router-link class="nav-link scrollto" :class="{'active': activeC('About')}" to="/about">
                                About Us
                            </router-link>
                        </li>
                        <li>
                            <a class="nav-link scrollTo" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                href="#">Sign In</a>
                        </li>
                    </ul>
                </nav>
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
    import { inject, onMounted } from 'vue'

    const store = inject("codeStore");
    const themeColor = store.values.theme;
    const user = store.user;

    const route = useRoute()
    const activeC = (str) => {
        return route.name == str ? true : false
    }


    onMounted(() => {
        console.log(user.data, 'ddddddd')
    })
</script>

<style scoped>
    #header {
        z-index: 997;
        transition: all 0.5s;
        padding: 12px 0;
        /* background: none; */
        background-color: v-bind(themeColor);
        color: #fff;
        border-bottom: #d8f070 1px solid;
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
        color: #d0db34;
        background-color: #4d033b;
        border-radius: 20px;
    }

    .navbar a:hover {
        color: #d0db34;
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
</style>