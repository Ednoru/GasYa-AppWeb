<template>
  <div class="profile-section">
    <div class="profile-info">
      <img :src="profileImage" alt="Imagen de perfil" class="profile-image">
      <div class="user-details">
        <h2><strong>{{ nombreUsuario }}</strong></h2>
        <p>{{ correoElectronico }}</p>
      </div>

    </div>  
    <div class="profile-links" >
      <div class="profile-link">
        <i class="fas fa-user"></i>
        <button @click="showProfilePopup"><strong>Mi cuenta</strong></button>
      </div>
      <div class="profile-link">
        <i class="fas fa-lock"></i>
        <span><strong>Acceso y seguridad</strong></span>
      </div>
      <div class="profile-link">
        <i class="fas fa-cog"></i>
        <span><strong>Configuración</strong></span>
      </div>
      <div class="profile-link">
        <i class="fas fa-credit-card"></i>
        <span><strong>Facturación y planes</strong></span>
      </div>
      <div class="profile-link">
        <i class="fas fa-question-circle"></i>
        <span><strong>Ayuda</strong></span>
      </div>
    </div>
    <div class="profile-popup" v-if="showPopup">
      <div class="profile-popup-content">
        <div class="popup-profile-info">
       
          <h2><strong>Foto de Perfil</strong></h2>
          <img :src="profileImage" alt="Imagen de perfil" class="popup-profile-image">
          <p><button @click="quitarFoto">Quitar Foto</button></p>
          <a><button @click="cambiarFoto">Cambiar Foto</button></a>
          <div class="popup-user-details">

            <h2><strong>Nombre</strong></h2>
            <p v-if="!editandoNombre">{{ nombreUsuario }}</p>
            <input v-else v-model="nombreEditado" type="text">
            <button v-if="!editandoNombre" @click="editarNombre">Editar</button>
            <button v-else @click="guardarNombre" class="guardar">Guardar</button>
            
            <h2><strong>Correo Electrónico</strong></h2>
            <p v-if="!editandoCorreo">{{ correoElectronico }}</p>
            <input v-else v-model="correoEditado" type="text">
            <button v-if="!editandoCorreo" @click="editarCorreo">Editar</button>
            <button v-else @click="guardarCorreo" class="save">Guardar</button>

            <h2><strong>Idioma</strong></h2>
            <p v-if="!editandoIdioma">{{ idioma }}</p>
            <button v-if="!editandoIdioma" @click="toggleEditIdioma">Editar</button>
            <select v-else v-model="idioma" class="select-field">
              <option v-for="opcion in opcionesIdioma" :value="opcion.codigo" :key="opcion.codigo">{{ opcion.nombre }}</option>
            </select>
            <button v-if="editandoIdioma" @click="guardarIdioma" class="sa">Guardar</button>
            <button @click="guardarCambiosYCerrar" class="cerrar-button">Guardar y Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'borrador-perfil',
  data() {
    return {
      nombreUsuario: 'SEBASTIAN CÓRDOVA VALDIVIA',
      correoElectronico: 'sebascordoba123@gmail.com',
      nombreEditado: '',
      correoEditado: '',
      idioma: 'ES', // Código de idioma por defecto
      editandoNombre: false,
      editandoCorreo: false,
      editandoIdioma: false,
      showPopup: false,
      opcionesIdioma: [
        { nombre: 'ESPAÑOL', codigo: 'ES' },
        { nombre: 'INGLÉS', codigo: 'EN' },
        { nombre: 'PORTUGUÉS', codigo: 'PT' }
      ]
    };
  },
  computed: {
    profileImage() {
      // Aquí debes proporcionar la lógica para obtener la imagen de perfil
      return 'https://frases.top/wp-content/uploads/2021/08/la-mejor-foto-de-perfil-para-whatsapp.jpg';
    }
  },
  methods: {
    showProfilePopup() {
      this.showPopup = !this.showPopup;
    },
    toggleEditIdioma() {
      this.editandoIdioma = !this.editandoIdioma;
    },
    guardarIdioma() {
      this.editandoIdioma = false;
    },
    guardarNombre() {
      this.nombreUsuario = this.nombreEditado;
      this.editandoNombre = false;
    },
    guardarCorreo() {
      this.correoElectronico = this.correoEditado;
      this.editandoCorreo = false;
    },
    editarNombre() {
      this.nombreEditado = this.nombreUsuario;
      this.editandoNombre = true;
    },
    editarCorreo() {
      this.correoEditado = this.correoElectronico;
      this.editandoCorreo = true;
    },
    quitarFoto() {
      // Lógica para quitar la foto de perfil
    },
    cambiarFoto() {
      // Lógica para cambiar la foto de perfil
    },
    guardarCambiosYCerrar(){

      this.guardarNombre();
      this.guardarCorreo();
      this.guardarIdioma();
      this.showPopup=false;
    }
  }
};
</script>

<style scoped>
/* Estilos para la sección de perfil */
.profile-section {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

/* Estilos para la información del perfil */
.profile-info {
  display: flex;
  align-items: center;
  border-bottom: solid black 8px;
  padding: 30px;
  margin-bottom: 30px;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.user-details h2 {
  margin: 0;
  font-size: 24px;
}

.user-details p {
  margin: 0;
  font-size: 16px;
}


/* Estilos para los enlaces del perfil */
.profile-links {
  display: flex;
  flex-direction: column;
}

.profile-link {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.profile-link i {
  margin-right: 10px;
  font-size: 20px;
}

.profile-link button, .profile-link span {
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

/* Estilos para el popup del perfil */
.profile-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.profile-popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.popup-profile-info {
  text-align: center;
}

.popup-profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.popup-user-details h2 {
  font-size: 20px;
  margin-top: 20px;
}

.popup-user-details input[type="text"] {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  margin-bottom: 10px;
}

.popup-user-details select.select-field {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  margin-bottom: 10px;
}

.popup-user-details button {
  font-size: 18px;
  background: #007BFF;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  margin-right: 10px;
}

.popup-user-details button.guardar {
  background: #28A745;
}

.popup-user-details button.sa {
  background: #DC3545;
}

</style>
