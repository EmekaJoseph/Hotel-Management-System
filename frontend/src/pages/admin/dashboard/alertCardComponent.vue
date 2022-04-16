<template>
    <div v-if="loading" class="alert alert-light">
        Checking Backend.......
    </div>
    <div v-else :class="'alert-' + (isConnected ? 'info' : 'warning')"
        class="alert alert-dismissible fade show mb-4 py-2" role="alert">
        <div class="d-flex align-items-center">
            <i :class="isConnected ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'" class="bi fs-5 me-3"></i>
            <span v-if="isConnected">Backend is Connected successfully!</span>
            <span v-else>Cannot connect to Backend</span>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script setup>
import apiCall from '@/stores/apiStore.js'
import { onMounted, ref } from 'vue'


const isConnected = ref(false)
const loading = ref(true)

onMounted(() => {
    checkApi()
})

async function checkApi() {
    try {
        await apiCall.testApi("test");
        isConnected.value = true
        loading.value = false
    } catch (error) {
        loading.value = false
        console.log(error)
    }
}
</script>

<style lang="scss" scoped>
</style>