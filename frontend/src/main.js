import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
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
import notify from "@/components/general/toastNotify.vue";

// components imports
import loadingComponent from '@/components/general/loadingComponent.vue'
import headerComponent from '@/components/general/headerComponent.vue'
import footerComponent from "@/components/general/footerComponent.vue";
import sideBarComponent from '@/components/admin/sideBarComponent.vue'
import adminHeadBar from '@/components/admin/headComponent.vue'
import menuList from '@/components/admin/menuListComponent.vue'
import DatepickerVue from 'vue3-date-time-picker';


// creating app
const mainApp = createApp(App)

// components registration
mainApp.component('notify', notify);
mainApp.component('loadingComponent', loadingComponent);
mainApp.component('headerComponent', headerComponent);
mainApp.component('footerComponent', footerComponent);
mainApp.component('sideBarComponent', sideBarComponent);
mainApp.component('adminHeadBar', adminHeadBar);
mainApp.component('menuList', menuList);
mainApp.component('DatepickerVue', DatepickerVue);

mainApp.use(createPinia());
mainApp.use(router)
mainApp.mount('#app')
