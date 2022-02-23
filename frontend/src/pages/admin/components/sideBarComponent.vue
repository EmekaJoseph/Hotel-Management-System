<template>
    <div>
        <div class="sidenav">
            <span class="brand">HMS</span>
            <menuList/>
        </div>
        <headComponent />
    </div>
</template>

<script setup>
    import headComponent from './headComponent.vue'
    import menuList from './menuListComponent.vue'

    import { storeToRefs } from 'pinia'
    import { useColorStore } from '@/stores/colorStore.js'
    const { color1, color2, colorSideBar } = storeToRefs(useColorStore())

</script>

<style scoped>
    /* The sidebar menu */
    .sidenav {
        height: 100%;
        /* Full-height: remove this if you want "auto" height */
        width: 250px;
        /* Set the width of the sidebar */
        position: fixed;
        /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1;
        /* Stay on top */
        top: 0;
        /* Stay at the top */
        left: 0;
        background-color: v-bind(colorSideBar);

        overflow-x: hidden;
        /* Disable horizontal scroll */
        padding: 10px;
    }


    .sidenav .brand {
        /* display: flex;
        justify-content: center; */
        margin: 20px;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
    }

    @media screen and (max-width: 767px) {
        .sidenav {
            display: none;
        }
    }
</style>