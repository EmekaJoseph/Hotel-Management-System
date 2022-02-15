<template>
    <div>
        <nav class="navbar navbar-light fixed-top p-3 shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand small">HMS - Admin</a>
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

</script>

<style scoped>
    .navbar {
        margin-left: 250px;
    }

    @media screen and (max-width: 767px) {
        .navbar {
            margin-left: 0px;
        }
    }
</style>