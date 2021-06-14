<template>
  <v-app-bar app color="header" prominent>
    <router-link to="/">
    <img
    v-if="$vuetify.theme.dark === false"
      alt="WW Logo"
      src="../assets/ScoutLogo.png"
      style="max-height: 90%; max-width: 30%"
    />
    <img
    v-if="$vuetify.theme.dark"
      alt="WW Logo"
      src="../assets/scoutwhite.png"
      style="max-height: 90%; max-width: 30%"
    />
    </router-link>
    <v-spacer></v-spacer>
  
        <v-checkbox
          class="pt-10 pr-2"
          x-large
          v-model="$vuetify.theme.dark"
          color="white"
          off-icon="mdi-theme-light-dark"
          on-icon="mdi-theme-light-dark"
        ></v-checkbox>

  </v-app-bar>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  data: function() {
    return {
      darkMode: false,
    };
  },
  methods: {
  },
});
</script>
