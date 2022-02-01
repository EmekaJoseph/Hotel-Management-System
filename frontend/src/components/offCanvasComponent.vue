<template>
    <div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel text-muted"><i class="bi bi-list"></i> MENU</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
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
        </div>
    </div>
</template>

<script setup>
    import { useRouter, useRoute } from 'vue-router'
    import { inject } from 'vue'
    const router = useRouter()
    const route = useRoute()

    const store = inject("codeStore");
    const themeColor = store.values.theme;

    function goTo(des) {
        router.push({
            name: des,
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
        font-weight: bold;
        margin-bottom: 15px;
    }

    .list-group-item.active {
        background-color: #e9dde6;
        /* color: #3b032f; */
        color: v-bind(themeColor)
    }
</style>