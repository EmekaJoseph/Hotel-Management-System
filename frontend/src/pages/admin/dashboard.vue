<template>
    <div>
        <sideBarComponent />
        <div class="adminMain">
            <div class="container">
                <div class="col-md-12">

                    <!-- <div class="row">
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="mb-4 card">
                                <div class="p-3 card-body">
                                    <div class="d-flex flex-row-reverse justify-content-between">
                                        <div>
                                            <div
                                                class="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                                                <i class="text-lg opacity-10 ni ni-money-coins" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="numbers">
                                                <p class="mb-0 text-sm text-capitalize font-weight-bold">Today's Money
                                                </p>
                                                <h5 class="mb-0 font-weight-bolder">$53,000 <span
                                                        class="text-sm font-weight-bolder text-success">+55%</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="mb-4 card">
                                <div class="p-3 card-body">
                                    <div class="d-flex flex-row-reverse justify-content-between">
                                        <div>
                                            <div
                                                class="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                                                <i class="text-lg opacity-10 ni ni-world" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="numbers">
                                                <p class="mb-0 text-sm text-capitalize font-weight-bold">Today's Users
                                                </p>
                                                <h5 class="mb-0 font-weight-bolder">2,300 <span
                                                        class="text-sm font-weight-bolder text-success">+3%</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="mb-4 card">
                                <div class="p-3 card-body">
                                    <div class="d-flex flex-row-reverse justify-content-between">
                                        <div>
                                            <div
                                                class="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                                                <i class="text-lg opacity-10 ni ni-paper-diploma"
                                                    aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="numbers">
                                                <p class="mb-0 text-sm text-capitalize font-weight-bold">New Clients</p>
                                                <h5 class="mb-0 font-weight-bolder">+3,462 <span
                                                        class="text-sm font-weight-bolder text-danger">-2%</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-xl-0">
                            <div class="mb-4 card">
                                <div class="p-3 card-body">
                                    <div class="d-flex flex-row-reverse justify-content-between">
                                        <div>
                                            <div
                                                class="text-center shadow icon icon-shape border-radius-md bg-gradient-success">
                                                <i class="text-lg opacity-10 ni ni-cart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="numbers">
                                                <p class="mb-0 text-sm text-capitalize font-weight-bold">Sales</p>
                                                <h5 class="mb-0 font-weight-bolder">$103,430 <span
                                                        class="text-sm font-weight-bolder text-success">+5%</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->

                    <div class="row justify-content-center gy-3">
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="cusCard">
                                <div class="d-flex justify-content-between">
                                    <div class="largeLogo">
                                        <!-- <img src="@/assets/images/dashboard/order.png" style="width:100%" alt=""> -->
                                        <i class="bi bi-card-checklist"></i>
                                    </div>
                                    <div class="">
                                        <div class style="font-size: 2.6rem;">12</div>
                                        <span class="badge rounded-pill text-dark">CHECK-IN</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="cusCard">
                                <div class="d-flex justify-content-between">
                                    <div class="largeLogo">
                                        <!-- <img src="@/assets/images/dashboard/man.png" style="width:100%" alt=""> -->
                                        <i class="bi bi-window-x"></i>
                                    </div>
                                    <div class="">
                                        <div style="font-size: 2.6rem;">4</div>
                                        <span class="badge rounded-pill text-dark">CHECK-OUT</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="cusCard">
                                <div class="d-flex justify-content-between">
                                    <div class="largeLogo">
                                        <!-- <img src="@/assets/images/dashboard/bedroom.png" style="width:100%" alt=""> -->
                                        <i class="bi bi-door-closed"></i>
                                    </div>
                                    <div class="">
                                        <div class="" style="font-size: 2.6rem;">16</div>
                                        <span class="badge rounded-pill text-dark">ROOMS</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="cusCard">
                                <div class="d-flex justify-content-between">
                                    <div class="largeLogo">
                                        <!-- <img src="@/assets/images/dashboard/bedroom.png" style="width:100%" alt=""> -->
                                        <i class="bi bi-activity"></i>
                                    </div>
                                    <div class="">
                                        <div style="font-size: 2.6rem;">1</div>
                                        <span class="badge rounded-pill text-dark">OPTAVAL</span>
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
    import { onMounted, inject } from 'vue'
    const cols = inject("customColors");
    const { color1, color2, colorSideBar } = cols





    onMounted(() => {

    })
</script>

<style scoped>
    .cusCard {
        padding: 20px;
        border-radius: 10px;
        border-right: 4px solid v-bind(color2);
        box-shadow: 0 0.125rem 0.25rem rgba(197, 195, 195, 0.75);
    }

    /* .cusCard:hover {
        transform: scale(1.02);
    } */

    .largeLogo {
        /* color: v-bind(color1); */
        color: #777;
        font-size: 2rem;
        /* border-right: 1px solid #eee;
        padding-right: 20%; */
    }

    .rounded-pill {
        /* background-color: v-bind(color2); */
        background-color: #eee;
    }
</style>