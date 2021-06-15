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
      <v-menu
            style="margin-top: 2%; margin-right: 1%"
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }"  >
              <v-btn
                style="margin-top: 2%; margin-right: 1%"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon >mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <router-link to="/assigned" style="text-decoration:none">
                <v-list-item-title>Previously Assigned</v-list-item-title>
                </router-link>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Stuff</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Stuff</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
      <v-checkbox
        style="margin-top: 2.5%; margin-right: 1%"
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
