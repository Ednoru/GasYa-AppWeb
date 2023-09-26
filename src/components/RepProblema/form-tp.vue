<template>
    <div class="tp">
      <h1>Reportar un problema<br></h1>
      <ul class="lista-horizontal">
        <li v-for="(opcion, index) in opciones" :key="index">
          <button class="boton" :class="{ seleccionado: opcionSeleccionada === opcion }" @click="seleccionarOpcion(opcion)">
            {{ opcion }}
          </button>
        </li>
      </ul>
    </div>
</template>

<style>
  .boton {
    background-color: #24A476;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
  }

  .seleccionado {
    background-color: #d1cccc;
    color: #24A476;
  }

  .lista-horizontal {
    list-style-type: none;
    padding: 0;
    display: flex;
  }

  .tp{
    margin-top: 20px;
    margin-left: 80px;
    margin-right: 80px;
  }
</style>

<script>
  export default {
    data() {
      return {
        opciones: ["Precio", "Calificación", "Combustible"],
        opcionSeleccionada: null,
      };
    },
    methods: {
      seleccionarOpcion(opcion) {
        this.opcionSeleccionada = opcion;
        this.$emit("opcionSeleccionada", opcion);
      },
    },
  };
</script>