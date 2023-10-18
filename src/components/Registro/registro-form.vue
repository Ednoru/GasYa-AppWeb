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
        <Password
            v-model="contrasena"
            placeholder="Ingrese su contraseña"
            toggleMask>
          <template #footer>
            <Divider />
            <div class="card mt-4 custom-card">
              <div class="card-body">
                <h5 class="card-title custom-card-title">Sugerencias:</h5>
                <ul class="custom-list-unstyled">
                  <li>Debe tener al menos 8 caracteres</li>
                  <li>Debe contener al menos un número</li>
                  <li>Debe contener al menos una letra mayúscula</li>
                </ul>
              </div>
            </div>
          </template>
        </Password>
      </div>

      <button type="submit" :disabled="!isValidForm">Registrar</button>
    </form>

    <div v-if="showErrorMessage" class="error-messaje">
      Contraseña inválida o ya está en uso.
    </div>
  </section>
</template>

<script setup>
  import Password from "primevue/password";
  import Divider from "primevue/divider";
  import UserService from "@/services/User.service";
  import { ref, computed } from "vue";
  import {useRouter} from "vue-router";

  const nombre = ref("");
  const apellido = ref("");
  const correo = ref("");
  const contrasena = ref("");
  const showErrorMessage = ref(false);

  const router = useRouter();

  const isValidForm = computed(() => {
    return nombre.value && apellido.value && correo.value && contrasena.value;
  });

  const onSubmit = async () => {
    const user = {
      nombre: nombre.value,
      apellido: apellido.value,
      correo: correo.value,
      contrasena: contrasena.value,
    };

    const passInUse = await UserService.passUsed(contrasena.value);

    if (passInUse) {
      showErrorMessage.value = true;
      return;
    }

    const response = await UserService.addUser(user);

    if (response.status === 201) {
      showErrorMessage.value = false;
      alert("Usuario registrado correctamente");
      await router.push("/login");
    } else if (nombre.value === "" || apellido.value === "" || correo.value === "" || contrasena.value === "") {
      alert("Debe llenar todos los campos");
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


  form div {
    margin-bottom: 10px;
  }

  .input-group {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .input-group label {
    display: block;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .input-group input {
    height: 35px;
    font-size: medium;
    width: 250px;
  }

  input[type="text"], input[type="email"], input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

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

  button:hover {
    color: white;
    background-color: red;
    font-weight: bold;
  }

  .custom-card {
    background-color: #f8f9fa;
    border: 1px solid #d1d1d1;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 15px;
  }

  .custom-card-title {
    color: #24A476;
    font-weight: bold;
  }

  .custom-list-unstyled {
    list-style: none;
    margin-left: 10px;
    padding-left: 1.5rem;
  }

  .custom-list-unstyled li {
    margin-bottom: 0.5rem;
  }

</style>