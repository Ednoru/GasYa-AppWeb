<template>
  <div class="mt-[25px] mr-[35px]">
    <div>
      <div class="flex flex-row justify-start">
        <input name="searchQuery" v-model="searchQuery" placeholder="Ingresa la dirección" class="bg-white p-[10px] border-[1px] border-solid border-red-600 rounded-[20px] w-[400px] h-[30px]">
        <button @click="searchNearbyGasStation" class="bg-red-600 p-[10px] h-[30px] flex items-center ml-[10px] rounded-[20px] text-white">Buscar</button>
      </div>
      <select class="mt-[20px] border-[1px] border-solid border-red-600 rounded-[20px] p-[5px] hover:cursor-pointer">
        <option value="" disabled selected>Filtrar</option>
        <option value="">Precio</option>
        <option value="">Calificación</option>
        <option value="">Combustible</option>
      </select>
    </div>
  </div>

  <div class="container">
    <div id="map"></div>
  </div>
</template>

<script>

const google = window.google;
export default {
  data() {
    return {
      map: null,
      placesService: null,
      searchQuery: "",
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const position = { lat: -12.19758965, lng: -77.0082777426229 };

      this.loadGoogleMaps()
          .then((googleMaps) => {
            this.map = new googleMaps.Map(document.getElementById("map"), {
              zoom: 4,
              center: position,
              mapId: "DEMO_MAP_ID",
            });

            this.placesService = new googleMaps.places.PlacesService(this.map);
          })
          .catch((error) => {
            console.error(error);
          });
    },
    searchNearbyGasStation() {
      const request = {
        location: this.map.getCenter(),
        radius: 5000,
        type: ["gas_station"],
      };

      this.placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (const place of results) {
            new google.maps.Marker({
              map: this.map,
              position: place.geometry.location,
              title: place.name,
            });
          }
        }
      });
    },

    loadGoogleMaps() {
      return new Promise((resolve, reject) => {
        if (window.google) {
          resolve(window.google.maps);
        } else {
          window.initMap = () => {
            if (window.google) {
              resolve(window.google.maps);
            } else {
              reject(new Error("Google Maps SDK failed to load."));
            }
          };

          const script = document.createElement("script");
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNG&libraries=places&callback=initMap`;
          script.async = true;
          script.defer = true;
          script.onload = () => {
            if (window.google) {
              resolve(window.google.maps);
            } else {
              reject(new Error("Google Maps SDK failed to load."));
            }
          };
          document.head.appendChild(script);
        }
      });
    },
    nearbySearch() {
      const request = {
        location: this.map.getCenter(),
        radius: 5000,
        type: ["gas_station"],
      };

      this.placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (const place of results) {
            new google.maps.Marker({
              map: this.map,
              position: place.geometry.location,
              title: place.name,
            });
          }
        }
      });

    }
  },
};
</script>

<style>
  .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #map {
    border-width: 3px;
    border-color: #24A476;
    height: 600px;
    width: 850px;
    border-radius: 20px;
  }
</style>
