<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
   <navbar /> 
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./components/navbar.vue";

export default Vue.extend({
  name: "App",

  components: {
      Navbar
  },

  data: () => ({
    //
  }),
});
</script>
