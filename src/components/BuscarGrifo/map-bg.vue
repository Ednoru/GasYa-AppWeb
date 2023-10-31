<template>
  <div>
    <h1>Grifos Cercanos:</h1>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: 'AddMap',
  mounted() {
    this.initMap();
  },
  methods: {
    async initMap() {
      let map;

      const position = { lat: -12.19758965, lng: -77.0082777426229 };

      const { Map, Marker } = await this.importLibrary('maps');

      map = new Map(document.getElementById('map'), {
        zoom: 6,
        center: position,
        mapId: 'DEMO_MAP_ID',
      });

      const marker = new Marker({
        map: map,
        position: position,
        title: 'Uluru',
      });
      console.log('Marcador creado:', marker);
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
  },
};
</script>

<style>
#map {
  height: 600px;
  width: 850px;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
