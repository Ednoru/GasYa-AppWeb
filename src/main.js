import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/routes/routes.js";
import "@/assets/global.css";
import PrimeVue from "primevue/config";

createApp(App)
    .use(PrimeVue)
    .use(router)
    .mount('#app')