import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'


import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createPopper } from '@popperjs/core';

// custom css
import './assets/css/root.css'

//npm install vue3-date-time-picker   
import 'vue3-date-time-picker/dist/main.css'

//b5 notification built by me
import notify from "@/components/toastNotify.vue";

// components imports
import loadingComponent from '@/components/loadingComponent.vue'
import headerComponent from '@/components/headerComponent.vue'
import footerComponent from "@/components/footerComponent.vue";

import DatepickerVue from 'vue3-date-time-picker';


// creating app
const mainApp = createApp(App)

// components registration
mainApp.component('notify', notify);
mainApp.component('loadingComponent', loadingComponent);
mainApp.component('headerComponent', headerComponent);
mainApp.component('footerComponent', footerComponent);
mainApp.component('DatepickerVue', DatepickerVue);

mainApp.use(createPinia());
mainApp.use(router)
mainApp.mount('#app')
