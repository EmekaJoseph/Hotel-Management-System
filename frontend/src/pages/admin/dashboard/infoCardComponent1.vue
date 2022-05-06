<template>
    <div class="col-xl-3 col-sm-6 mb-xl-0">
        <div class="mb-4 card">
            <div class="p-4 card-body">
                <div class="d-flex flex-row-reverse justify-content-between">
                    <div>
                        <div class="text-center">
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <div>
                        <div class="numbers">
                            <p class="mb-0 text-sm text-capitalize font-weight-bold">{{ title }}
                            </p>
                            <h5 class="mb-0 font-weight-bolder">{{ amount }} <span class="text-sm font-weight-bolder"
                                    :class="'text-' + (percent < 1 ? 'danger' : 'success')">
                                    {{ percent }}%</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: "No title",
        required: false,
    },
    amount: {
        type: String,
        default: "N00,000",
        required: false,
    },
    percent: {
        type: String,
        default: "+55%",
        required: false,
    },

})

</script>

<style lang="scss" scoped>
</style>