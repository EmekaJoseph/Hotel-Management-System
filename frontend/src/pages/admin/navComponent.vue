<template>
    <div>
        <nav class="navbar navbar-light fixed-top bg-light">
            <div class="container-fluid">
                <a class="navbar-brand small">{{route.name}}</a>
                <span class="d-none d-md-block">LOG OUT</span>
                <nav class="d-md-none navbar">
                    <h3 class="fw-bold" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAdmin"
                        aria-controls="offcanvasAdmin"><i class="bi bi-list"></i></h3>
                </nav>
            </div>
        </nav>
        <offcanvas />
    </div>
</template>

<script setup>
    import offcanvas from './offCanvasComponent.vue'
    import { useRoute } from 'vue-router'
    const route = useRoute()

</script>

<style scoped>
    .navbar {
        margin-left: 250px;
        padding: 15px;
    }

    @media screen and (max-width: 767px) {
        .navbar {
            margin-left: 0px;
            padding: 5px;
        }
    }
</style>