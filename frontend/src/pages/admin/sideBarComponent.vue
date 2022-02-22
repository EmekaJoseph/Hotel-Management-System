<template>
    <div>
        <div class="sidenav">
            <span class="brand">HMS</span>
            <div class="menuSection">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <router-link to="/admin/dashboard">
                            <i class="bi bi-grid-fill"></i>&nbsp; Dashboard
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/admin/orders">
                            <i class="bi bi-sort-down-alt"></i>&nbsp; Orders
                        </router-link>
                    </li>
                    <li class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    <i class="bi bi-gear"></i>&nbsp; Settings
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the first item's
                                    accordion
                                    body.</div>
                            </div>
                        </div>
                    </li>

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

    .menuSection {
        margin-top: 70px;
    }

    .list-group-item {
        background-color: transparent;
        color: #fff;
        font-weight: lighter;
        /* margin-top: 10px; */
        border: none;
        font-size: 18px;
    }

    .list-group-item a {
        text-decoration: none;
        color: #fff;
        padding: 10px 40px 10px 10px;
    }

    a:hover {
        color: v-bind(color2);
    }

    .list-group-item .active {
        color: v-bind(color2);
        font-weight: bold;
        background-color: v-bind(color1);
        border-radius: 5px;
    }

    .accordion-item {
        background-color: transparent;
    }

    .accordion-button {
        background-color: transparent;
        color: #fff;
        font-weight: lighter;
        font-size: 18px;
        margin-left: 5px;
    }

    .accordion-button:hover {
        color: v-bind(color2);

    }


    .accordion-button.collapsed::after {
        /* background: url("@/assets/images/icons/arrow-down-circle.svg"); */
        /* color: #fff !important; */
        display: none;

    }

    .accordion-button:not(.collapsed)::after {
        display: none;
    }
</style>