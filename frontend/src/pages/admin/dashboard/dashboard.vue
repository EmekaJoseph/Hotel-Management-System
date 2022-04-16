<template>
    <div class="container">
        <alertCard />
        <div class="col-md-12">
            <div class="row">
                <infoCard1 title="Today's Money" amount="N53,000" percent="+46" />
                <infoCard1 title="Today's Money" amount="N43,000" percent="-55" />
                <infoCard1 title="Today's Money" amount="N20,000" percent="+55" />
                <infoCard1 title="Today's Money" amount="N89,000" percent="-35" />
            </div>
        </div>

        <div class="col-md-12">
            <div class="row gy-3">
                <table1 />
                <mychart />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, inject, ref, reactive } from 'vue'
import infoCard1 from './infoCardComponent1.vue'
import alertCard from './alertCardComponent.vue'
import table1 from './tableComponent1.vue'
import mychart from './chartComponent.vue'
const cols = inject("customColors");
const { color1, colorActive, color3 } = cols
</script>

<style>
.card-header {
    background-color: #e6dee4;
    color: v-bind(colorActive);
    padding-block: 15px;
}
</style>
