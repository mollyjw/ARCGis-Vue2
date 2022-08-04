<template>
  <v-app>
    <div class="mapdiv"></div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";

export default Vue.extend({
  name: "App",
   async mounted() {
       const map = new Map({
         basemap: "streets-vector"
       });

       const view = new MapView({
         map: map,
         container: "mapdiv",
         center: [-118.244, 34.052],
         zoom: 12
       });

     },
});
</script>

<style scoped>
  @import './main.css';
</style>
