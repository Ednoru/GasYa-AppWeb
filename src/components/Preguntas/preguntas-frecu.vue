<template>
    <div class="preguntas-frecuentes">
        <h1 class="titulogrifo">Preguntas frecuentes</h1>
      <div v-for="(pregunta, index) in preguntas" :key="index" class="pregunta">
        <h3 @click="toggleRespuesta(index)" class="pregunta-titulo">{{ pregunta.texto }}</h3>
        <div class="pregunta-contenido" v-show="pregunta.mostrarRespuesta">
          <p>{{ pregunta.respuesta }}</p>
        </div>
        <button @click="toggleRespuesta(index)" v-if="!pregunta.mostrarRespuesta">Ver más</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        preguntas: [
          {
            texto: "¿Los precios de los combustibles son los más confiables?",
            respuesta: "Sí, trabajamos constantemente para ofrecer precios competitivos y confiables.",
            mostrarRespuesta: false
          },
          {
            texto: "¿Las promociones tienen fecha de caducidad?",
            respuesta: "Sí, todas nuestras promociones tienen una fecha de caducidad. Consulta los detalles en cada oferta.",
            mostrarRespuesta: false
          },
          {
            texto: "¿Cómo solicito las promociones en el grifo?",
            respuesta: "Puedes solicitar nuestras promociones en el grifo presentando tu tarjeta de cliente frecuente o al hacer una compra.",
            mostrarRespuesta: false
          },
          {
            texto: "¿Cada cuánto tiempo actualizan los tarifarios de los combustibles?",
            respuesta: "Actualizamos nuestros tarifarios de combustibles de forma regular, generalmente cada semana. Consulta nuestras tarifas más recientes en línea.",
            mostrarRespuesta: false
          }
        ]
      };
    },
    methods: {
      toggleRespuesta(index) {
        this.preguntas[index].mostrarRespuesta = !this.preguntas[index].mostrarRespuesta;
      }
    }
  };
  </script>
  
  <style scoped>
  
  
  .pregunta {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #d6eed4;
    text-align: top; 
  }
  
  .pregunta-titulo {
    margin-top: 0;
    padding: 10px;
    background-color: #7ce9bf;
    cursor: pointer;
    border-bottom: 1px solid #082269;
    text-align: top; 
  }
  
  .pregunta-contenido p {
    margin: 0;
    text-align: top; 
  }
  
  .preguntas-frecuentes {
  padding: 20px;
  text-align: top; 
}


  </style>
  