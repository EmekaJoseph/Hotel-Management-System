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
import offcanvas from '@/components/admin/offCanvasComponent.vue'
</script>