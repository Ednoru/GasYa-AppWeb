<template>
    <div class="flex flex-col h-[80.8vh]">
        <imgper></imgper>
        <hr class="font-bold w-[80%] h-[10px] bg-black mx-auto mt-[8px]">
        <bttnper v-for="(btn, index) in button" :key="index" :text="btn.text" :clase="btn.clase"></bttnper>
    </div>
    <div class="md:w-[100%] h-[75px] bg-red-600 mt-auto" ></div>
</template>

<script>
import imgper from '@/components/MiPerfil/ImgPer-mp.vue'
import bttnper from '@/components/MiPerfil/BttnPer-mp.vue'
export default {
    data() {
        return {
            button:[
                {text: 'Editar Perfil', clase:'pi pi-user-edit'},
                {text: 'Acceso y Seguridad', clase:'pi pi-lock'},
                {text: 'Configuración', clase:'pi pi-cog'},
                {text: 'Facturación y Planes', clase:'pi pi-credit-card'},
                {text: 'Ayuda', clase:'pi pi-question-circle'},

            ]

        }
    },
    components: {
        imgper,
        bttnper,
    }
}

</script>
