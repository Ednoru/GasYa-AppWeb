<template>
  <div class="mt-[25px] mr-[25px]">
    <form action="" class="flex flex-row justify-start">
      <input type="text" placeholder="Search..." @keydown.enter="updateMarkerLocation(parse($event.target.value))" class="bg-white p-[10px] border-[1px] border-solid border-red-600 rounded-[20px] w-[400px] h-[30px]">
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
  </div>
</template>

<script>
import {parse} from "postcss";

export default {
  name: 'AddMap',
  props: {
    initialLocation: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      map: null,
      marker: null
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
  },
};
</script>

<style>
#map {
  height: 600px;
  width: 850px;
}
</style>
