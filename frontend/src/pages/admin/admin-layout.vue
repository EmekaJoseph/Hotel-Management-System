<template>
    <div>
        <sideBarComponent />
        <div class="adminMain">
            <router-view></router-view>
        </div>
        <offcanvas />
    </div>
</template>
<script setup>
import offcanvas from './adminComponents/offCanvasComponent.vue'
import sideBarComponent from './adminComponents/sideBarComponent.vue'
</script>