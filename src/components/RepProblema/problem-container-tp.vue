<template>
    <div class="problema-container">
      <h2>Detalles del problema:</h2>
      <textarea v-model="detallesProblema" rows="4"></textarea>
      <button class="boton-not"  @click="notificarProblema">Notificar</button>
    </div>
    <div class="alert-popup" v-if="showPopup">
      <p>Su reporte se registró exitosamente.</p>
      <button class="close-button" @click="closeAlert">X</button>
    </div>
</template>

<style scoped>
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

  .alert-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #d5d4d4;
  padding: 20px;
  border: 1px solid #24A476;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 20%;
  height: 20%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #24A476;
  color: #fff;
  border: none;
  padding: 5px 12px;
  cursor: pointer;
  border-radius: 30px;
}

.alert-popup p {
  margin-top: 35px;
  margin-bottom: 20px;
}
</style>

<script>
export default {
    data() {
      return {
        showPopup: false,
      };
    },
    methods: {
        notificarProblema() {
          this.showPopup = !this.showPopup;
        },
        closeAlert(){
          this.showPopup = false;
        },
    },
};
</script>

