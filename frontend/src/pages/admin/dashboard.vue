<template>
    <div>
        <sideBarComponent />
        <div class="adminMain">
            <div class="container">
                <div class="col-md-12">
                    <div class="row justify-content-center gy-3">
                        <div class="col-md-4">
                            <div class="cusCard">
                                <div class="row justify-content-center gx-3">
                                    <div class="col-4 largeLogo">
                                        <!-- <img src="@/assets/images/dashboard/order.png" style="width:100%" alt=""> -->
                                        <i class="bi bi-sort-down-alt"></i>
                                    </div>
                                    <div class="col-8 col-sm-8">
                                        <div class="float-end">
                                            <div class="" style="font-size: 2.6rem;">0</div>
                                            <span class="badge rounded-pill text-dark">ORDERS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="cusCard">
                                <div class="row justify-content-center gx-3">
                                    <div class="col-4 largeLogo">
                                        <!-- <img src="@/assets/images/dashboard/man.png" style="width:100%" alt=""> -->
                                        <i class="bi bi-people-fill"></i>
                                    </div>
                                    <div class="col-8 col-sm-8">
                                        <div class="float-end">
                                            <div style="font-size: 2.6rem;">7</div>
                                            <span class="badge rounded-pill text-dark">VISITORS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="cusCard">
                                <div class="row justify-content-center gx-3">
                                    <div class="col-4 largeLogo">
                                        <!-- <img src="@/assets/images/dashboard/bedroom.png" style="width:100%" alt=""> -->
                                        <i class="bi bi-person-workspace"></i>
                                    </div>
                                    <div class="col-8 col-sm-8">
                                        <div class="float-end">
                                            <div style="font-size: 2.6rem;">1</div>
                                            <span class="badge rounded-pill text-dark">ROOMS</span>
                                        </div>
                                    </div>
                                </div>
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
    import sideBarComponent from '@/components/admin/sideBarComponent.vue'

    import { storeToRefs } from 'pinia'
    import { useColorStore } from '@/stores/colorStore.js'
    const { color1, color2, colorSideBar } = storeToRefs(useColorStore())





    onMounted(() => {

    })
</script>

<style scoped>
    .cusCard {
       
        padding: 20px;
        border-radius: 20px;
        border: 1px solid #eee;
        box-shadow: 0 .125rem .25rem rgba(197, 195, 195, 0.75);
    }

    .cusCard:hover{
        transform: scale(1.02);
    }

    .largeLogo {
        color: v-bind(color1);
        /* color: #777; */
        font-size: 4rem;
    }

    .rounded-pill {
        /* background-color: v-bind(color2); */
        background-color: #eee;
    }
</style>