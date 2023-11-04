<template>
  <div class="container">
    <h1 class="title">Grifos Cercanos:</h1>
    <div class="search-container">
      <input v-model="userAddress" class="address-input" placeholder="Ingresa una dirección">
      <button @click="searchGasStations" class="search-button">Buscar</button>
    </div>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
export default {
  name: 'AddMap',
  data() {
    return {
      userAddress: '',
      map: null,
      marker: null,
      circle: null,
      geocoder: null, // Agrega el objeto geocoder
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    async initMap() {
      const { Map, Marker } = await this.importLibrary('maps');
      const position = { lat: -12.046, lng: -77.0428 };

      this.map = new Map(document.getElementById('map'), {
        zoom: 12,
        center: position,
        mapId: 'DEMO_MAP_ID',
      });

      this.marker = new Marker({
        map: this.map,
        position: position,
        title: 'Uluru',
      });

      // Inicializa el objeto geocoder
      // eslint-disable-next-line no-undef
      this.geocoder = new google.maps.Geocoder();
    },

    importLibrary(library) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=${library}&v=beta`;
        script.onerror = reject;
        script.onload = () => {
          resolve(window.google.maps);
        };
        document.head.appendChild(script);
      });
    },
    
    async searchGasStations() {
      
      if (this.geocoder) {
        this.geocoder.geocode({ address: this.userAddress }, (results, status) => {
          if (status === 'OK' && results[0]) {
            const userCoordinates = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng(),
              zoom: 20,
            };

          
            if (this.circle) {
              this.circle.setMap(null);
            }

            
            // eslint-disable-next-line no-undef
            this.circle = new google.maps.Circle({
              map: this.map,
              center: userCoordinates,
              radius: 2000, 
              strokeColor: '#00FF00',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#00FF00',
              fillOpacity: 0.35,
              zoom: 20,
            });

    
            this.marker.setMap(null); 
            // eslint-disable-next-line no-undef
            this.marker = new google.maps.Marker({
              map: this.map,
              position: userCoordinates,
              title: 'Ubicación del usuario',
            });
          }
        });
      } else {
        console.error('La biblioteca de Google Maps no se ha cargado correctamente.');
      }
    },
  },
};
</script>

<style>
#map {
  height: 650px;
  width: 1500px;
  justify-content: center; /* Centra horizontalmente */

}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.address-input {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-button {
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #0056b3;
}

.map {
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
  
}
</style>
