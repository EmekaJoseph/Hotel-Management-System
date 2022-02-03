<script setup>
  import { provide } from "vue";
  import codeStore from "./codeStore";
  import footerComponent from "./components/footerComponent.vue";
  import headerComponent from './components/headerComponent.vue'
  provide("codeStore", codeStore);
</script>

<template>
  <div class="mainBody">
    <div class="bodySection">
      <headerComponent />
      <div style="margin-top: 50px;">
        <router-view v-slot="{Component}">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>

    </div>
    <footerComponent class="footerSection" />
  </div>
</template>

<style>
  .mainBody {
    position: relative;
    min-height: 100vh;
  }

  .bodySection {
    padding-bottom: 8.5rem;
  }

  .footerSection {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
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
</style>