<template>
  <v-container>
    <v-card v-for="lead in unassignedArray" v-bind:key="lead.LeadID" :style="{background: $vuetify.theme.themes.light.primary}" style="font-family: Montserrat; padding: 1%">
      <v-row no-gutters>
        <v-col cols="3">{{ lead.ContactBusinessName == null ? lead.FirstName + " " + lead.LastName : lead.ContactBusinessName}}</v-col>
        <v-col cols="2">{{lead.Retailer == 0 ? "Find a Dealer" : "Become a Dealer"}}</v-col>
        <v-col cols="2">{{lead.ProjectType}}</v-col>
        <v-col cols="2">{{lead.DistributionArea == 0 ? "Not in Area" : "Within Area"}}</v-col>
        <v-col cols="2">{{lead.Created}}</v-col>
        <v-col cols="1">
            <router-link class="text-decoration-none" :to="{name: 'RequestDetails', params: {id: lead.LeadID} }" >
          <v-btn :style="{background: $vuetify.theme.themes.light.accent}">Assign</v-btn>
            </router-link>
        </v-col>
        <v-expand-transition>
          <div v-show="show">
            <v-divider cols=12></v-divider>
            <v-card-text>{{lead.Email}}</v-card-text>
          </div>
        </v-expand-transition>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store/index";

export default Vue.extend({
  name: "Unassigned",
  data: () => ({
    show: false,
  }),
  computed: {
    unassignedArray() {
      return store.state.unassignedArray;
    },
  },
});
</script>
