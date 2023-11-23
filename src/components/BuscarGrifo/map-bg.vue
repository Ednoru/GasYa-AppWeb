<template>
  <div class="mt-[25px] mr-[25px]">
    <form action="" class="flex flex-row justify-start">
      <input type="text" placeholder="Search..." @keydown.enter="searchGasStations" class="bg-white p-[10px] border-[1px] border-solid border-red-600 rounded-[20px] w-[400px] h-[30px]">
      <button class="bg-red-600 p-[10px] h-[30px] flex items-center ml-[10px] rounded-[20px] text-white">Buscar</button>
    </form>
    <select class="mt-[20px] border-[1px] border-solid border-red-600 rounded-[20px] p-[5px] hover:cursor-pointer">
      <option value="" disabled selected>Filtrar</option>
      <option value="">Precio</option>
      <option value="">Calificación</option>
      <option value="">Combustible</option>
    </select>
  </div>

  <div>
    <h1>Grifos Cercanos:</h1>
    <div id="map"></div>
    <button @click="getUserLocation">Obtener Ubicación del Dispositivo</button>
    <p>{{ mensaje }}</p>
  </div>
</template>

<script>
import { parse } from "postcss";

export default {
  name: 'AddMap',
  data() {
    return {
      map: null,
      marker: null,
      markers: [],
      mensaje: '',
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    parse,
    async initMap() {
      const position = { lat: -12.19758965, lng: -77.0082777426229 };
      const { Map, Marker } = await this.importLibrary('maps');

      this.map = new Map(document.getElementById('map'), {
        zoom: 6,
        center: position,
        mapId: 'DEMO_MAP_ID',
      });
      this.marker = new Marker({
        map: this.map,
        position: position,
        title: 'Ubicación inicial',
      });
      console.log('Marcador creado:', this.marker);
      this.getUserLocation();
    },
    importLibrary(library) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDmVzKjNKXtezL0qdB8Os4tIFJnS0kOAUA&libraries=${library}&v=beta`;
        script.onerror = reject;
        script.onload = () => {
          resolve(window.google.maps);
        };
        document.head.appendChild(script);
      });
    },
    updateMarkerLocation(location) {
      this.marker.setPosition(location);
      this.map.setCenter(location);
    },
    getUserLocation() {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              this.map.setCenter(userLocation);
              this.marker.setPosition(userLocation);
              this.loadGasStations(userLocation);

              resolve(userLocation);
            },
            (error) => {
              console.error("Error getting user location:", error);
              this.mensaje = "Error al obtener la ubicación del usuario.";
              reject(error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
          this.mensaje = "Geolocalización no es compatible con este navegador.";
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    },
    async searchGasStations() {
      const userLocation = await this.getUserLocation();
      this.loadGasStations(userLocation);
    },
    async loadGasStations(userLocation) {
      try {
        // Aquí debes implementar la lógica para buscar estaciones de gas cerca de userLocation
        // Puedes utilizar una API externa o una base de datos para obtener la información
        // A modo de ejemplo, se simulará la carga de algunas estaciones de gas cercanas

        // Simulación de carga de estaciones de gas
        const gasStations = [
          { name: "GasStation1", lat: userLocation.lat + 0.01, lng: userLocation.lng + 0.01 },
          { name: "GasStation2", lat: userLocation.lat - 0.02, lng: userLocation.lng - 0.02 },
          { name: "GasStation3", lat: userLocation.lat + 0.03, lng: userLocation.lng + 0.03 },
        ];

        // Limpiar marcadores existentes
        this.clearMarkers();

        // Crear marcadores para las estaciones de gas
        gasStations.forEach((gasStation) => {
          const marker = new window.google.maps.Marker({
            position: { lat: gasStation.lat, lng: gasStation.lng },
            map: this.map,
            title: gasStation.name,
          });

          // Guardar el marcador para futuras referencias
          this.markers.push(marker);
        });
      } catch (error) {
        console.error("Error loading gas stations:", error);
        this.mensaje = "Error al cargar las estaciones de gas.";
      }
    },
    clearMarkers() {
      // Limpiar los marcadores del mapa
      this.markers.forEach((marker) => {
        marker.setMap(null);
      });
      this.markers = [];
    },
  },
};
</script>

<style>
#map {
  margin-top: 30px;
  height: 600px;
}