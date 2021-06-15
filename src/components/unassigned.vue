<template>
  <v-container>
    <v-card v-for="lead in unprocessedArray" v-bind:key="lead.LeadID" color="card" style="font-family: Montserrat; padding: 1%; margin: 1%; color: white">
      <v-row no-gutters>
        <v-col cols="3">{{ lead.ContactBusinessName == null ? lead.FirstName + " " + lead.LastName : lead.ContactBusinessName}}</v-col>
        <v-col cols="2">{{lead.Retailer == 0 ? "Find a Dealer" : "Become a Dealer"}}</v-col>
        <v-col cols="2">{{lead.ProjectType}}</v-col>
        <v-col cols="2">{{lead.DistributionArea == 0 ? "Not in Area" : "Within Area"}}</v-col>
        <v-col cols="2">{{formatDate(lead.Created)}}</v-col>
        <v-col cols="1">
            <router-link class="text-decoration-none" :to="{name: 'LeadDetails', params: {id: lead.LeadID} }" >
          <v-btn color="button" >Assign</v-btn>
            </router-link>
        </v-col>
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
  }),

  computed: {
    unprocessedArray() {
      return store.getters.getUnprocessedLeads;
    },

  },
  methods: {
    formatDate(date: string) {
      return store.getters.getFormattedDate(date)
    }
      
  }
});
</script>
