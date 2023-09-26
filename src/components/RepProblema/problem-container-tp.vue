<template>
    <div class="problema-container">
      <h2>Detalles del problema:</h2>
      <textarea v-model="detallesProblema" rows="4"></textarea>
      <button class="boton-not"  @click="notificarProblema">Notificar</button>
    </div>
</template>

<style>
  .problema-container {
    margin-left: 80px;
    margin-right: 80px;
  }

  textarea {
    background-color: #d1cccc;
    width: 100%;
    height: 150px;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: text;
  }

  .boton-not {
    background-color: #24A476;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
  }
</style>

<script>
export default {
    data() {
      return {
      };
    },
    methods: {
        notificarProblema() {
            console.log("Detalles del problema:", this.detallesProblema);
            alert('Problema notificado con éxito.');
            this.detallesProblema = "";
        },
    },
};
</script>

