<template>
    <div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasGeneral" aria-labelledby="offcanvasGeneralLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasGeneralLabel text-muted">HMS <i class="bi bi-list"></i></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body mt-5">
                <ul class="list-group list-group-flush">
                    <li @click="goTo('Home')" class="list-group-item" :class="{'active': isActive('Home')}"
                        data-bs-dismiss="offcanvas">
                        <i class="bi bi-house-fill"></i> Home
                    </li>
                    <li @click="goTo('Gallery')" class="list-group-item" :class="{'active': isActive('Gallery')}"
                        data-bs-dismiss="offcanvas">
                        <i class="bi bi-images"></i> Gallery
                    </li>
                    <li @click="goTo('About')" class="list-group-item" :class="{'active': isActive('About')}"
                        data-bs-dismiss="offcanvas">
                        <i class="bi bi-journals"></i> About
                    </li>
                </ul>
            </div>
            <div class="py-5">
                <a @click.prevent class="accountSection" href="#" data-bs-toggle="modal" data-bs-target="#signInModal">
                    <i class="bi bi-box-arrow-right"></i>&nbsp;Sign In
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter, useRoute } from 'vue-router'
    const router = useRouter()
    const route = useRoute()


    import { storeToRefs } from 'pinia'
    import { useColorStore } from '@/stores/colorStore.js'
    const { color1, color2 } = storeToRefs(useColorStore())



    function goTo(destination) {
        router.push({
            name: destination,
        })
        // console.log(themeColor);
    }

    const isActive = (str) => {
        return (route.name == str) ? true : false
    }


</script>

<style scoped>
    .offcanvas {
        width: 250px;
    }

    .offcanvas-header {
        background-color: #eee;
        /* color: #3b032f; */
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