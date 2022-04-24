<template>
    <div class="wholePage">
        <div class="container">
            <div class="row justify-content-center">
                <!-- <div class="text-center" style="font-size: 100px; color: #fff;">
                <i class="bi bi-exclamation-triangle-fill"></i>
                </div>-->
                <span class="text-center fw-bold">
                    <img src="@/assets/house34_logo2.png" width="130" />
                </span>
                <div class="text-center text-white fw-bold" style="font-size: 100px;">404</div>
                <div class="text-center text-white">The page you requested does not exist in this application.</div>
                <div class="text-center mt-3">
                    <router-link class="btn btn-warning text-decoration-none" to="/">
                        Home Page
                        <i class="bi bi-arrow-right"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue'
const cols = inject("customColors");
const { color1 } = cols
</script>

<style scoped>
.wholePage {
    min-height: 100vh;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: v-bind(color1);
}
</style>