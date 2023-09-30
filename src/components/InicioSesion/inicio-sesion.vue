<template>
  <section class="LoginScreen">
    <form @submit.prevent="onSubmit">
      <h1 class="tituloIS">Iniciar Sesion</h1>
      <div>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" placeholder="Ingrese su correo">
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" placeholder="Ingrese su contraseña">
      </div>
      <button type="submit" :disabled="!isValidForm">Iniciar sesión</button>
      <router-link to="/registro">¿No tienes cuenta? Regístrate aquí</router-link>
    </form>
  </section>
</template>

  
<script>
import UserService from "@/services/UserService.js";

export default {


  methods: {
    checkCredentials() {
      UserService.getUsers().then(response => {
        const users = response.data;
        const user = users.find(u => u.correo === this.correo && u.contrasena === this.contrasena);
        if (user) {
          console.log('Inicio de sesión exitoso');
          this.$router.push('/ruta-deseada');
        } else {
          console.log('Credenciales inválidas');
        }
      });
    }
  }
};
</script>

  
  <style scoped>
        .LoginScreen{
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

    .tituloIS{
        text-align: center;
        margin-bottom: 20px;
        font-size: 2em;
        font-weight: bold;
    }

    /* Espacio entre los elementos del formulario */
    form div {
        margin-bottom: 10px;
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
