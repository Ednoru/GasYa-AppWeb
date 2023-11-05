<template>
  <div class="container">
    <div class="search-container">
      <input name="searchQuery" v-model="searchQuery" placeholder="Ingresa la dirección">
      <button @click="searchNearbyGasStation">Buscar</button>
    </div>
    <div id="map" class="map"></div>
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
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
}

.search-container {
  flex: 1;
  padding: 20px;
  max-width: 300px; /* Ajusta el ancho máximo según tus preferencias */
  text-align: center;
}

#map {
  flex: 1;
  width: 400px;
  height: 500px;
  border: 1px solid #DC3545;
  margin: 50px 50px 0 auto;
}
</style>
