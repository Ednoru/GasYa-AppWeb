<template>
  <div class="container">
    <div class="seccion seccion-left">
      <grifosgasya></grifosgasya>
    </div>
    <div class="seccion seccion-right">
      <promocionesgasya></promocionesgasya>
    </div>
  </div>
  
</template>

<style>
  .container{
    display: flex;
    width: 100%;
  }
  .seccion{
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
  }
  .seccion-left{
    background-color: white;
    border-right: 2px solid rgb(88, 86, 86);
  }
  .seccion-right{
    background-color: white;
  }
</style>

<script>
import grifosgasya from '@/components/Grifo/Grifos-Gasya.vue';
import promocionesgasya from '@/components/Grifo/Promociones-Gasya.vue';

export default {
  data() {
      return {

      }
  },
  components: {
      grifosgasya,
      promocionesgasya
  }
}

</script>
