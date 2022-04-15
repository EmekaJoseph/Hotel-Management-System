<template>
    <div class="container">
        <div class="alert alert-warning alert-dismissible fade show d-flex align-items-center mb-4 py-3" role="alert">
            <i class="bi bi-app-indicator fs-5 me-3"></i>A simple info alert—check it out!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="col-md-12">
            <div class="row">
                <infoCard1 title="Today's Money" amount="$53,000" percent="+55%" />
                <infoCard1 title="Today's Money" amount="$53,000" percent="+55%" />
                <infoCard1 title="Today's Money" amount="$53,000" percent="+55%" />
                <infoCard1 title="Today's Money" amount="$53,000" percent="+55%" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, inject } from 'vue'
import infoCard1 from './infoCardComponent1.vue'
const cols = inject("customColors");
const { color1, colorActive } = cols





onMounted(() => {

})
</script>

<style scoped>
.cusCard {
    padding: 20px;
    border-radius: 10px;
    /* border-right: 4px solid v-bind(color4); */
    box-shadow: 0 0.125rem 0.25rem rgba(197, 195, 195, 0.75);
    background-color: #fff;
}

/* .cusCard:hover {
        transform: scale(1.02);
    } */

.largeLogo {
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







<!-- <div class="row justify-content-center gy-3">
<div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
<div class="cusCard">
<div class="d-flex justify-content-between">
<div class="largeLogo">
<i class="bi bi-card-checklist"></i>
</div>
<div class>
<div class style="font-size: 2.6rem;">12</div>
<span class="badge rounded-pill text-dark">CHECK-IN</span>
</div>
</div>
</div>
</div>
</div> -->