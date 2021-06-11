<template>
  <div>
    <h1 style="text-align:center; padding: 2%">{{ this.id }}</h1>
    <v-row >
      <v-col cols="6">
        <v-card color="card" height="100%" style="margin-left: 4%; margin-right: 2%; color: white">
            {{ request.FirstName }}
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card color="card" height="100%" style="margin-left: 2%; margin-right: 4%">
          <v-row style="margin: 2%; color: white">
            <h3>Nearby Dealers</h3>
          </v-row>
          <v-row style="margin: 2%" v-for="dealer in dealers" v-bind:key="dealer.dealerId">
            <v-card color="button">{{ dealer.dealerName }} </v-card>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";

export default Vue.extend({
  name: "RequestDetails",
  data: function() {
    return {
      id: "null",
    };
  },
  computed: {
    request() {
      return store.getters.getOneRequest(this.id);
      //yes it does exist
    },
    dealers() {
      return store.state.dealers;
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    console.log(this.request);
  },
});
</script>
