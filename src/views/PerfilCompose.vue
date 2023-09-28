<template>
    <div class="flex flex-col h-[80.8vh] w-screen">
        <borradorperfil></borradorperfil>
        <hr class="font-bold w-[80%] h-[10px] bg-black mx-auto mt-[8px]">
        <div class="w-screen h-[60px] bg-red-600 mt-auto text-white flex items-center justify-center" ><h1>Copyright © 
2023, inc All rights reserved.</h1></div>
    </div>

</template>

<script>
import borradorperfil from '@/components/MiPerfil/Borrador-mp.vue'
export default {
    data() {
        return {
        }
    },
    components: {
        borradorperfil
    }
}

</script>
