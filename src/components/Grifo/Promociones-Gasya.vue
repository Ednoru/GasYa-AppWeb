<template>
  <div>
    <h1 class="titulopromociones">Promociones(*)</h1>

    <Card v-for="promocion in promociones" :key="promocion.id " class="custom-card">
      <template #header>
        <img
          :src="'/Grifos/' + promocion.img + '.png'"
          :alt="promocion.nombre"
        />
      </template>
      <template #title>
        <h3 class="title">{{ promocion.nombre }}</h3>
      </template>
      <template #content>
        <p class="description">{{ promocion.descripcion }}</p>
      </template>
    </Card>
  </div>
</template>

<script setup>
  import Card from 'primevue/card';
  import { ref, onMounted } from 'vue';
  import { getPromos } from "@/services/Grifos_Promos.service";

  const promociones = ref([]);

  const loadPromociones = async () => {
    try {
      promociones.value = await getPromos();
    } catch (error) {
      console.error(error);
    }
  };

  onMounted(() => {
    loadPromociones();
  });
</script>

<!--
<template>
    <h1 class="titulopromociones">Promociones(*)</h1>
    <div class="Promocion">
        <img class="promo1" src="@/assets/Grifos/Promocion1.png" alt="Promocion 1">
        <div class="descripcionPromocion">
            <p class="nombrePromocion">SuperPromo Regular</p>
            <p class="descripcionPromocion">Descripcion: 20% de descuento en consumos mayores a S/200 en gasolina regular</p>
        </div>
    </div>

    <div class="Promocion">
        <img class="promo2" src="@/assets/Grifos/Promocion2.png" alt="Promocion 2">
        <div class="descripcionPromocion">
            <p class="nombrePromocion">SuperPromo Aceite</p>
            <p class="descripcionPromocion">Descripcion: 10% de descuento en cambios de aceite en centros autorizados,
                 aplica terminos y condiciones</p>
        </div>
    </div>

    <div class="Promocion">
        <img class="promo3" src="@/assets/Grifos/Promocion3.png" alt="Promocion 3">
        <div class="descripcionPromocion">
            <p class="nombrePromocion">SuperPromo Papitas</p>
            <p class="descripcionPromocion">Descripcion: Por cada S/.120 en combustibles premium llevate un pack de papitas</p>
        </div>
    </div>
</template>
-->
<style scoped>
    .titulopromociones{
        font-size: 1.5em;
        font-weight: bold;
        padding-bottom: 15px;
    }

    .Promocion{
        display: flex;
        align-items: stretch;
    }

    .nombrePromocion{
        font-size: 1.2em;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3vh;
        font-weight: bold;
        margin-bottom: 15px;
    }


    .descripcionPromocion {
        flex-grow: 1; 
        background-color: rgba(169, 245, 248, 0.986);
        border-radius: 20px;
        border: 2px solid rgba(169, 245, 248, 0.986);
        padding: 8px;
        margin-bottom:20px;
        
    }

    .Promocion .promo1 {
        width: 250px;  
        height: auto; 
        border-radius: 10px; 
    }

    .Promocion .promo2 {
        width: 200px;  
        height: auto; 
        border-radius: 10px; 
        margin-right: 30px  ;
    }

    .Promocion .promo3   {
        width: 200px;  
        height: auto; 
        border-radius: 10px; 
        margin-right: 30px  ;
    }


</style>
<!--
<script>
    export default{
        name: 'promociones-gasya',
        data(){
            return{ 
            }
        }
    }
</script>
-->