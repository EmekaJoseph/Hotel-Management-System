<template>
    <div>
        <sideBarComponent />
        <div class="adminMain">
            <div class="container">
                <div class="col md-12">
                    <div class="row justify-content-center gy-3">
                        <div class="col-md-3">
                            <div class="cusCard">
                                ... <br>
                                ......
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="cusCard">
                                ... <br>
                                ......
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="cusCard">
                                ... <br>
                                ......
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="cusCard">
                                ... <br>
                                ......
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import sideBarComponent from './sideBarComponent.vue'

    import { storeToRefs } from 'pinia'
    import { useColorStore } from '@/stores/colorStore.js'
    const { color1, color2, colorSideBar } = storeToRefs(useColorStore())





    onMounted(() => {

    })
</script>

<style scoped>
    .cusCard {
        box-shadow: 0 .125rem .25rem rgba(197, 195, 195, 0.75);
        padding: 50px;
        /* border: 1px solid #eee; */
        border-radius: 20px;
    }
</style>