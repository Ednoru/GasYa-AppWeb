<template>
    <div>
      <div>
        <h1>Selecciona una opción:</h1>
        <formTP @opcionSeleccionada="handleOpcionSeleccionada" />
      </div>
      <div>
        <btnNotificar/>
      </div>
    </div>
  </template>
    
  <script>
    import formTP from "@/components/RepProblema/form-tp.vue";
    import btnNotificar from "@/components/RepProblema/problem-container-tp.vue";
    
    export default {
      components: {
        formTP,
        btnNotificar,
      },
      data() {
        return {
          opcionSeleccionada: null,
          detallesProblema: "",
        };
      },
      methods: {
        handleOpcionSeleccionada(opcion) {
          this.opcionSeleccionada = opcion;
        },
      },
    };
  </script>
  