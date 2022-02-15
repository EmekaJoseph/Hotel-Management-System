<template>
    <div>
        <sideBarComponent />
        <div class="adminMain">

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

</style>