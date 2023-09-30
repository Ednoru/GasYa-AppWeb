<template>
  <section class="SignUpScreen">
    <form @submit.prevent="onSubmit">
      <h1 class="tituloSU">Registrate</h1>
      <div class="input-group">
        <label>Nombre:</label>
        <input type="text" v-model="nombre" placeholder="Ingrese su nombre">
      </div>

      <div class="input-group">
        <label>Apellido:</label>
        <input type="text" v-model="apellido" placeholder="Ingrese su apellido">
      </div>

      <div class="input-group">
        <label>Correo:</label>
        <input type="email" v-model="correo" placeholder="Ingrese su correo">
      </div>

      <div class="input-group">
        <label>Contraseña:</label>
        <input type="password" v-model="contrasena" placeholder="Ingrese su contraseña">
      </div>

      <button type="submit" :disabled="!isValidForm">Registrar</button>
    </form>
  </section>
</template>

<script>
  
  import UserService from "@/services/UserServices";
  export default {
    name: 'registro-form',
    data() {
      return {
        nombre: '',
        apellido: '',
        correo: '',
        contrasena: ''
      };
    },
    computed: {
      isValidForm() {
        return this.nombre && this.apellido && this.correo && this.contrasena; // Ejemplo simple
      }
    },
    methods: {
      onSubmit() {
        if (this.isValidForm) {
          const userData = {
            nombre: this.nombre,
            apellido: this.apellido,
            correo: this.correo,
            contrasena: this.contrasena
          };

          UserService.addUser(userData).then(response => {
            console.log('Usuario registrado', response);
            this.$router.push('/login');
          });
        } else {
          console.log('Datos inválidos');
        }
      }
    }
  };
</script>
  
<style scoped>
  .SignUpScreen{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh ;
  }
  form {
      border:3px solid red;
      background-color:  rgba(169, 245, 248, 0.986);
      border-radius: 15px;
      padding: 25px;
      width: 300px;
      margin: 0 auto;
      margin-bottom: 30px;
      margin-top: 30px;
  }

  .tituloSU{
      text-align: center;
      margin-bottom: 20px;
      font-size: 2em;
      font-weight: bold;
  }

  /* Espacio entre los elementos del formulario */
  form div {
      margin-bottom: 10px;
  }

  .input-group {
      justify-content: space-between; /* Distribuye el espacio entre los elementos */
      align-items: center; /* Centra los elementos verticalmente */
      margin-bottom: 10px; /* Añade un poco de espacio entre los grupos */
  }

  .input-group label {
      display: block;
      margin-right: 10px; /* Añade un poco de espacio entre la etiqueta y el input */
      margin-bottom: 10px;
  }

  .input-group input {
      height: 35px;  /* O el tamaño que desees */
      font-size: medium;
      width: 250px;
  }

  /* Estilo para los campos de entrada */
  input[type="email"], input[type="password"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
  }

  /* Estilo para el botón de enviar */
  button {
      display: block;
      background-color: white;
      color: black;
      padding: 10px 15px;
      border: none;
      border: 2px solid red;
      border-radius: 5px;
      cursor: pointer;
      margin-left: auto;
      margin-right: auto;
  }

  /* Cambio de estilo para el botón cuando se pasa el mouse por encima */
  button:hover {
      color: white;
      background-color: red;
      font-weight: bold;
  }
</style>