<template>
    <div class="flex flex-row">
        <div class="flex flex-col">
            <formbg></formbg>
        </div>
        <mapbg></mapbg>
    </div>
</template>

<script>
import mapbg from '@/components/BuscarGrifo/map-bg.vue';
import formbg from '@/components/BuscarGrifo/form-bg-compose.vue'

export default {
    data() {
        return {

        }
    },
    components: {
        mapbg,
        formbg
    }
}

</script>
