import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'


import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import { createPopper } from '@popperjs/core';

import './assets/css/root.css'


//npm install vue3-date-time-picker   
import 'vue3-date-time-picker/dist/main.css'


const mainApp = createApp(App)
mainApp.use(createPinia());
mainApp.use(router)
mainApp.mount('#app')
