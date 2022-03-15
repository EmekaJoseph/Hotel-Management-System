<template>
    <div>
        <nav class="navbar navbar-light fixed-top shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand small fw-bold">{{ route.name }}</a>
                <span class="d-none d-md-block shadow-sm logout-btn" @click="signOut">LOG OUT</span>
                <nav class="d-md-none navbar">
                    <h3
                        class="fw-bold"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasAdmin"
                        aria-controls="offcanvasAdmin"
                    >
                        <i class="bi bi-list"></i>
                    </h3>
                </nav>
            </div>
        </nav>
        <offcanvas />
    </div>
</template>

<script setup>

import { onMounted, inject } from 'vue'

import offcanvas from '@/components/admin/offCanvasComponent.vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
const router = useRouter()
const route = useRoute()

const cols = inject("customColors");
const { color1, color2, colorSideBar } = cols


const user = useUserStore()

function signOut() {
    user.signOut()
    router.replace({ name: 'Admin' })
}

</script>

<style scoped>
.navbar {
    margin-left: 250px;
    padding: 15px;
    background-color: #fff;
}

.logout-btn {
    margin: 0px;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
    font-size: small;
    font-weight: bold;
}

.logout-btn:hover {
    background-color: rgb(241, 239, 239);
    color: v-bind(color1);
}

@media screen and (max-width: 767px) {
    .navbar {
        margin-left: 0px;
        padding: 5px;
    }
}
</style>