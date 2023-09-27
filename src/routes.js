import { createRouter, createWebHistory } from "vue-router";
import PerfilComponent from "@/views/PerfilCompose.vue";
import BuscarGrifoComponent from "@/views/BuscarGrifo.vue";
import ReportarProblemaComponent from "@/views/ReportarProblema.vue";
import FaqComponent from "@/views/FAQ.vue";
import GrifosComponent from "@/views/GrifosInfoPromotions.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", component: BuscarGrifoComponent
        },
        {
            path: "/perfil",
            component: PerfilComponent
        },
        {
            path: "/problem",
            component: ReportarProblemaComponent
        },
        {
            path: "/faq",
            component: FaqComponent
        },
        {
            path: "/grifos",
            component: GrifosComponent
        },
        
       
    ]
});