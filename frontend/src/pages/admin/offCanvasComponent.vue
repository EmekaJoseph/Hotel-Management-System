<template>
    <div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasAdmin" aria-labelledby="offcanvasAdminLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasAdminLabel text-muted">HMS</h5>
                    <button type="button" class="btn btn-link text-white fs-1" data-bs-dismiss="offcanvas"><i class="bi bi-x"></i></button>
            </div>
            <div class="offcanvas-body mt-5">
                
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia'
    import { useColorStore } from '@/stores/colorStore.js'
    const { color1, color2, colorSideBar } = storeToRefs(useColorStore())


</script>

<style scoped>
    .offcanvas {
        background-color: v-bind(colorSideBar);
        /* color: #3b032f; */
         width: 250px;
         color: #fff;
    }

    .list-group-item {
        border: none;
        /* font-weight: bold; */
        margin-bottom: 15px;
    }

    .list-group-item.active {
        background-color: #e9dde6;
        /* color: #3b032f; */
        color: v-bind(color1)
    }

    .accountSection {
        margin: 45px;
        font-weight: bold;
        font-size: 16px;
        text-decoration: none;
        color: #000;
    }
</style>