<template>
  <div>
    <h1 class="titulogrifo">Grifos Asociados</h1>

    <div class="boton-container">
      <button class="btn-grifo"
          v-for="grifo in grifos"
          :key="grifo.id"
          :class="{ activo: botonActivo === grifo.nombre }"
          @click="mostrar(grifo.nombre)"
      >
        {{ grifo.nombre }}
      </button>
    </div>

    <div class="infogrifo-container" v-for="grifo in grifos" :key="grifo.id" :id="grifo.nombre" style="display: none;">
      <h2>{{ grifo.nombre }}</h2>
      <ul>
        <li v-for="combustible in grifo.combustible" :key="combustible.nombre">
          <img
              :src="'/Grifos/' + combustible.logo + '.png'"
              :alt="combustible.nombre"
          />
          <strong>{{ combustible.nombre }}</strong>
          <p>Precio: {{ combustible.precio }}</p>
          <p>{{ combustible.descripcion }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { getGrifos } from "@/services/Grifos_Promos.service";

  const botonActivo = ref(null);
  const grifos = ref([]);

  const loadGrifos = async () => {
    try {
      grifos.value = await getGrifos();
    } catch (error) {
      console.error(error);
    }
  };

  const mostrar = (nombreGrifo) => {
    botonActivo.value = nombreGrifo;
    const todosLosDivs = [
      'Repsol',
      'PetroPeru',
      'Primax',
      'Pecsa'
    ];
    todosLosDivs.forEach(nombre => {
      const div = document.getElementById(nombre);
      if (div) {
        div.style.display = nombre === nombreGrifo ? "block" : "none";
      }
    });
  };

  onMounted(() => {
    loadGrifos();
  });
</script>

<style scoped>

    .titulogrifo{
        font-size: 1.5em;
        font-weight: bold;
        padding-bottom: 15px;
    }

    .boton-container{
        margin-bottom: 20px;
    }

    .boton-container button.activo {
        background-color: #24A476;
        color: white;
    }

    .btn-grifo {
      margin-right: 15px;
      border-radius: 35px;
      border-color: #24A476;
      border-width: 3px;
      border-style: solid;
      padding: 5px 30px;
      margin-bottom: 20px;
      font-weight: 600;
    }


    button:hover {
        background-color: #d1cccc;
        color:#24A476;
    }

    .Regular, .Premium{
        display: flex;
        align-items: stretch;
    }

    .nombreCombustible{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3vh;
        font-weight: bold;
    }
    

    .descripcionCombustible{
        text-align: left;
    }


    .precioCombustible{
        text-align: left;
    }

    .descripcionRegular, .descripcionPremium {
        flex-grow: 1; 
        background-color: rgba(169, 245, 248, 0.986);
        border-radius: 20px;
        border: 2px solid rgba(169, 245, 248, 0.986);
        padding: 8px;
        margin-bottom:20px;
        
    }

    #divRepsol img {
        max-width: 225px; 
        height: auto; 
        border-radius: 5px; 
        margin-right: 15px; 
        margin-bottom: 40px;
    }

    #divPetroPeru img {
        max-width: 225px; 
        height: auto; 
        border-radius: 5px; 
        margin-right: 15px; 
        margin-bottom: 40px;
    }

    #divPrimax img {
        max-width: 225px; 
        height: auto; 
        border-radius: 5px; 
        margin-right: 15px; 
        margin-bottom: 40px;
    }

    #divPecsa img {
        max-width: 225px; 
        height: auto; 
        border-radius: 5px; 
        margin-right: 15px; 
        margin-bottom: 40px;
    }
</style>

<!--
<script>
  export default{
    name: 'grifos-gasya',
    data(){
      return{
        botonActivo:null,
      }
    },

    methods: {
      mostrar(idDiv) {
        this.botonActivo = idDiv;
        let todosLosDivs = [
          'divRepsol',
          'divPetroPeru',
          'divPrimax',
          'divPecsa'
        ];
        todosLosDivs.forEach(id => {
          let div = document.getElementById(id);
          if (div) {
            div.style.display = "none";
          }
        });
        let div = document.getElementById(idDiv);
        if (div) div.style.display = "block";
      }
    },
  }
</script>
-->