<template>
 <v-card color="card" height="100%" style="margin-left: 2%; margin-right: 4%; color: white; padding-left: 2%">
    <v-container style="font-size: 1.5rem">
      <v-row style="font-size: 2rem; color: white; text-align: center">
        <v-col>Current Assignment </v-col>
      </v-row>
      <v-row>
          <v-col>Assigned To:</v-col>
          <v-col>
              {{leadStatus.Salesperson}}
          </v-col>
      </v-row>
      <v-row>
          <v-col> Assigned On: </v-col>
          <v-col>
              {{ formatDate(leadStatus.DateAssigned) }}
          </v-col>
      </v-row>
      <v-row>
          <v-col> Claimed On: </v-col>
          <v-col>
              {{ leadStatus.DateClaimed == null ? "----" : formatDate(leadStatus.DateClaimed)}}
          </v-col>
      </v-row>
      <v-row>
          <v-col> Notes: </v-col>
          <v-col>
              {{leadStatus.Notes}}
          </v-col>
      </v-row>
      <v-row>
          <v-col style="text-align: center"> 
              <v-btn color="button">Edit Assignment</v-btn>
          </v-col>
      </v-row>
    </v-container>
 </v-card>
</template>

<script lang="ts">
  import store from '@/store';
  import Vue from 'vue'

  export default Vue.extend({
    name: 'CurrentAssignment',
    data: function () {
        return {
            id: this.$route.params.id,
        }
    },
    computed: {
        leadStatus() {
            return store.getters.getOneLeadStatus(this.id);
        },
    },

    methods: {
      formatDate(date: string) {
          return store.getters.getFormattedDate(date);
       },
    }
  })
</script>
