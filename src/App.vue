<template>
  <v-app>
    <v-sheet color="background" height="100%" width="100%">
      <navbar />
      <v-main>
        <router-view />
      </v-main>
    </v-sheet>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./components/navbar.vue";

export default Vue.extend({
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
});
</script>
