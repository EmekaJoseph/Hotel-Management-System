<script setup>
import { provide } from "vue";
import { storeToRefs } from 'pinia'
import { useColorStore } from '@/stores/colorStore.js'
const cols = useColorStore()
provide("customColors", storeToRefs(cols));
</script>

<template>
  <div class="bodySection">
    <router-view v-slot="{ Component }">
      <transition name="fad" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style>
.bodySection {
  padding-bottom: 0.001rem;
}

/* router transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.xSlide-enter-active {
  transition: all 0.3s ease;
}

.xSlide-enter-from,
.xSlide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>