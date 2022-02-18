<template>
    <div>
        <div class="sidenav">
            <span class="brand">HMS</span>
            <div class="menuSection">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="bi bi-grid-fill"></i>&nbsp; Dashboard</li>
                    <li class="list-group-item"><i class="bi bi-calendar-week-fill"></i>&nbsp; Orders</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            </div>
        </div>
        <navComponent />
    </div>
</template>

<script setup>
    import navComponent from './navComponent.vue'

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
        padding-top: 20px;
    }


    .sidenav .brand {
        display: flex;
        justify-content: center;
        /* margin: 50px; */
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }

    @media screen and (max-width: 767px) {
        .sidenav {
            display: none;
        }
    }

    .menuSection{
        margin-top: 70px;
    }

    .list-group-flush .list-group-item{
        background-color: transparent;
        color: #fff;
        font-weight: lighter;
        margin-top: 10px;
        margin-left: 20px;
        border: none;
        font-size: 18px;
    }
</style>