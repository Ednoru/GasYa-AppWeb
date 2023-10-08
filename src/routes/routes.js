import { createRouter, createWebHistory } from "vue-router";
import PerfilComponent from "@/views/PerfilCompose.vue";
import BuscarGrifoComponent from "@/views/BuscarGrifo.vue";
import ReportarProblemaComponent from "@/views/ReportarProblema.vue";
import FaqComponent from "@/views/FAQ.vue";
import GrifosComponent from "@/views/GrifosInfoPromotions.vue";
import InicioSesionComponent from "@/views/IniciarSesion.vue";
import RegistroComponent from "@/views/RegistroForm.vue";


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
        {
            path: "/login",
            component: InicioSesionComponent
        },
        {
            path: "/signup",
            component: RegistroComponent
        },
        
       
    ]
});