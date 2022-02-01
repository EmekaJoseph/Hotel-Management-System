<script setup>
  import { provide } from "vue";
  import codeStore from "./codeStore";
  import headerComponent from './components/headerComponent.vue'
  provide("codeStore", codeStore);
</script>

<template>
  <div>
    <headerComponent />
    <div style="margin-top: 50px;">
      <router-view v-slot="{Component}">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>

  </div>
</template>

<style>
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
</style>