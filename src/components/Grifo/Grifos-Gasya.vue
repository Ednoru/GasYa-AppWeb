<template>
  <div>
    <h1 class="titulogrifo">Grifos Asociados</h1>

    <div class="boton-container">
      <!-- Botones para seleccionar la gasolinera -->
      <button
          v-for="grifo in grifos"
          :key="grifo.id"
          :class="{ activo: botonActivo === grifo.nombre }"
          @click="mostrar(grifo.nombre)"
      >
        {{ grifo.nombre }}
      </button>
    </div>

    <!-- Contenedor para mostrar los datos de la gasolinera seleccionada -->
    <div v-for="grifo in grifos" :key="grifo.id" :id="grifo.nombre" style="display: none;">
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


<!--
  <h1 class="titulogrifo">Grifos Asociados</h1>

  <div class="boton-container">
    <button class="btnRepsol" :class="{ activo: botonActivo === 'divRepsol' }" @click="mostrar('divRepsol')">Repsol</button>
    <button class="btnPPeru" :class="{ activo: botonActivo === 'divPetroPeru' }" @click="mostrar('divPetroPeru')">PetroPeru</button>
    <button class="btnPrimax" :class="{ activo: botonActivo === 'divPrimax' }" @click="mostrar('divPrimax')">Primax</button>
    <button class="btnPecsa" :class="{ activo: botonActivo === 'divPecsa' }" @click="mostrar('divPecsa')">Pecsa</button>
  </div>

    <div class="infogrifo-container">
      <div id="divRepsol" style="display:none;">
        <div class="Regular">
          <img src="@/assets/Grifos/RegularRepsol.png" alt="Gasolina Regular">
          <div class="descripcionRegular">
            <p class="nombreCombustible">G Regular Neotech</p>
            <div class="contenido">
              <p class="descripcionCombustible">Descripcion: Si antes usabas gasolina de 84 o 90,
                Ahora deberás usar Repsol G Regular con Neotech.  </p>
              <p class="precioCombustible">Precio: S/.17.39 x Galon</p>
            </div>
          </div>
        </div>
        <div class="Premium">
          <img src="@/assets/Grifos/PremiumRepsol.png" alt="Gasolina Premium">
          <div class="descripcionPremium">
            <p class="nombreCombustible">G Premium Neotech</p>
            <div class="contenido">
              <p class="descripcionCombustible">Descripcion: Si antes usabas gasolina de 95 o 98,
                Ahora deberás usar Repsol G Premium con Neotech.</p>
              <p class="precioCombustible">Precio: S/.18.99 x Galon</p>
            </div>
          </div>
        </div>
      </div>

      <div id="divPetroPeru" style="display:none;">
        <div class="Regular">
          <img src="@/assets/Grifos/RegularPPeru.png" alt="Gasolina Regular">
          <div class="descripcionRegular">
            <p class="nombreCombustible">Superplus Regular</p>
            <div class="contenido">
              <p class="descripcionCombustible">Descripcion: Si antes usabas gasolina de 84 o 90,
                Ahora deberás usar G-Superplus Regular.</p>
              <p class="precioCombustible">Precio: S/.17.30 x Galon</p>
            </div>
          </div>
        </div>
        <div class="Premium">
          <img src="@/assets/Grifos/PremiumPPeru.png" alt="Gasolina Premium">
          <div class="descripcionPremium">
            <p class="nombreCombustible">Superplus Premium</p>
            <div class="contenido">
              <p class="descripcionCombustible">Descripcion: Si antes usabas gasolina de 95 o 97,
                Ahora deberás usar G-Superplus Premium.</p>
              <p class="precioCombustible">Precio: S/.18.70 x Galon</p>
            </div>
          </div>
        </div>
      </div>

      <div id="divPrimax" style="display:none;">
        <div class="Regular">
          <img src="@/assets/Grifos/RegularPrimax.png" alt="Gasolina Regular">
          <div class="descripcionRegular">
            <p class="nombreCombustible">G-Regular</p>
            <div class="contenido">
              <p class="descripcionCombustible">Descripcion: G-Regular:ADITIVOS ALEMANES, MÁS LIMPIEZA
                Y MEJOR CUIDADO DEL MOTOR</p>
              <p class="precioCombustible">Precio: S/.18.25 x Galon</p>
            </div>
          </div>
        </div>
        <div class="Premium">
          <img src="@/assets/Grifos/PremiumPrimax.png" alt="Gasolina Premium">
          <div class="descripcionPremium">
            <p class="nombreCombustible">G-Premium G-Prix</p>
            <div class="contenido">
              <p class="descripcionCombustible">Descripcion: MAYOR POTENCIA DEL MOTOR, MAYOR LIMPIEZA DEL MOTOR,
                MÁS RENDIMIENTO, EXTIENDE LA VIDA ÚTIL DEL MOTOR</p>
              <p class="precioCombustible">Precio: S/.20.69 x Galon</p>
            </div>
          </div>
        </div>
      </div>

      <div id="divPecsa" style="display:none;">
        <div class="Regular">
          <img src="@/assets/Grifos/RegularPecsa.png" alt="Gasolina Regular">
          <div class="descripcionRegular">
            <p class="nombreCombustible">G-Regular</p>
            <div class="contenido">
              <p class="descripcionCombustible">Descripcion: G-Regular: Para vehiculos que usan gasolina de 84 y 90</p>
              <p class="precioCombustible">Precio: S/.17.81 x Galon</p>
            </div>
          </div>
        </div>
        <div class="Premium">
          <img src="@/assets/Grifos/PremiumPecsa.png" alt="Gasolina Premium">
          <div class="descripcionPremium">
            <p class="nombreCombustible">G-Premium</p>
            <div class="contenido">
              <p class="descripcionCombustible">Descripcion: G-Premium: Para vehiculos que usan gasolina de 95 y 97</p>
              <p class="precioCombustible">Precio: S/.19.20 x Galon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  -->

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
        background-color: red; 
        color: white;
    }

    /*button {
        width: 100px;
        background-color: red;
        font-weight: 600;
        font-size: 20px;
        padding: 15px 40px;  
        border-color: red;
        border-width: 3px;
        border-style: solid;
        border-radius: 35px;
        margin-bottom: 20px;  
    }*/

    .btnRepsol, .btnPPeru, .btnPrimax, .btnPecsa{
        margin-right: 15px;
        border-radius: 35px;
        border-color: red;
        border-width: 3px;
        border-style: solid;
        padding: 5px 30px;
        margin-bottom: 20px;  
        font-weight: 600;
    }


    button:hover {
        background-color: red;
        color:white;
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