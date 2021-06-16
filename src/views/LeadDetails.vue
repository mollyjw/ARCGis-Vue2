<template>
  <v-container style="margin-bottom: 2%">
    <v-row class="justify-center">
      <h1 style="text-align: center; padding: 2%">Lead Details</h1>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card
          color="card"
          height="100%"
          style="
            margin-left: 4%;
            margin-right: 2%;
            color: white;
            padding-left: 2%;
          "
        >
          <v-container style="font-size: 1.5rem">
            <v-row
              class="justify-center align-center"
              style="font-size: 2rem; padding-top: 12px"
            >
              {{ lead.FirstName + " " + lead.LastName }}</v-row
            >
            <v-row
              class="justify-center align-center"
              v-if="lead.ContactBusinessName != null"
            >
              from
              {{ lead.ContactBusinessName }}</v-row
            >
            <v-row class="justify-center align-center">
              wants to
              {{ lead.Retailer == 0 ? "Find a Dealer" : "Become a Dealer" }}
            </v-row>

            <v-row class="justify-center align-center">
              <v-col> Distribution Area:</v-col>
              <v-col>
                {{ lead.DistributionArea == 0 ? "Not in Area" : "Within Area" }}
              </v-col>
            </v-row>

            <v-row>
              <v-col> Address:</v-col>
              <v-col style="margin-left: 3%">
                <v-row> {{ lead.StreetAddress }}</v-row>
                <v-row> {{ lead.City }}, {{ lead.State }} </v-row>
                <v-row> {{ lead.Zip }} </v-row>
                <v-row> {{ lead.Country }}</v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col> Email:</v-col>
              <v-col> {{ lead.Email }}</v-col>
            </v-row>
            <v-row>
              <v-col>Phone:</v-col>
              <v-col>
                <v-row>
                  <v-col>
                    {{ lead.ContactPhone }}
                  </v-col>
                  <v-col>
                    Ext:
                    {{
                      lead.ContactPhoneExt == null || " "
                        ? "N/A"
                        : lead.ContactPhoneExt
                    }}
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col>Project Type:</v-col>
              <v-col>{{ lead.ProjectType }}</v-col>
            </v-row>
            <v-row>
              <v-col> Description:</v-col>
              <v-col v-if="lead.Describe != null"> {{ lead.Describe }} </v-col>
            </v-row>
            <v-row>
              <v-col>Additional Comments:</v-col>
              <v-col v-if="lead.Comments != null"> {{ lead.Comments }}</v-col>
            </v-row>
            <v-row>
              <v-col>Form Submitted on: </v-col>
              <v-col>{{ formatDate(lead.Created) }}</v-col>
            </v-row>
            <v-row>
              <v-col> Processed: </v-col>
              <v-col>
                {{
                  lead.Processed == null ? "No" : formatDate(lead.Processed)
                }}</v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="6">
        <edit-assignment v-if="lead.Processed == null" />
        <current-assignment v-if="lead.Processed != null" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import EditAssignment from "@/components/edit-assignment.vue";
import CurrentAssignment from "@/components/current-assignment.vue"
import store from "@/store";
import Vue from "vue";

export default Vue.extend({
  name: "LeadDetails",
  data: function () {
    return {
      id: this.$route.params.id,
      processDialog: false,
      unprocessDialog: false,
    };
  },
  computed: {
    lead() {
      return store.getters.getOneLead(this.id);
      //yes it does exist
    },
    dealers() {
      return store.state.dealers;
    },
  },

  methods: {
    formatDate(date: string) {
      return store.getters.getFormattedDate(date);
    },

    processLead() {
      const d: Date = new Date();
      const clickTime: string = d.toISOString();
      // console.log(clickTime, this.lead);
      store.dispatch("markLeadProcessed", {id: this.lead.LeadID, clickTime: clickTime});
    },
    unprocessLead() {
      store.dispatch("markLeadUnprocessed", this.lead);
    },
  },

  components: {
    EditAssignment,
    CurrentAssignment
  },

  mounted() {
    this.id = this.$route.params.id;
  },
});
</script>
