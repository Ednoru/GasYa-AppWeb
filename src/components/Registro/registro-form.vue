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

    <div v-if="showErrorMessage" class="error-messaje">
      Por favor ingrese un correo válido, recuerde que la contraseña debe tener al menos 8 caracteres, una mayúscula y un número.
    </div>
  </section>
</template>

<script setup> 
  import UserService from "@/services/User.service";
  import { ref, computed } from "vue";

  const nombre = ref("");
  const apellido = ref("");
  const correo = ref("");
  const contrasena = ref("");
  const showErrorMessage = ref(false);

  const isValidForm = computed(() => {
    return nombre.value && apellido.value && correo.value && contrasena.value;
  });

  const onSubmit = async (router) => {
    const user = {
      nombre: nombre.value,
      apellido: apellido.value,
      correo: correo.value,
      contrasena: contrasena.value,
    };

    const response = await UserService.addUser(user);

    if (response.status === 201) {
      showErrorMessage.value = false;
      alert("Usuario registrado correctamente", response.data);
      router.push('/login');
    } else {
      showErrorMessage.value = true;
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
  input[type="text"], input[type="email"], input[type="password"] {
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