<template>
  <v-card color="card" height="100%" style="margin-left: 2%; margin-right: 4%">
    <v-container>
      <v-row style="font-size: 2rem; color: white; text-align: center">
        <v-col>Assign </v-col>
      </v-row>
      <v-form ref="form" v-model="valid">
        <v-container>
          <v-row
            style="font-size: 1.5rem; text-align: center"
            class="justify-center align-center"
          >
            <v-col>
              <v-select
                v-model="leadStatus.salesperson"
                :items="dealersArray"
                item-text="dealerName"
                item-value="dealerId"
                :rules="[(v) => !!v || 'Item is required']"
                label="Assign To"
                solo
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                v-model="leadStatus.notes"
                solo
                rows="4"
                label="Notes"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="text-align: center">
              <v-dialog v-model="processDialog" persistent max-width="400">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    :disabled="!valid"
                    v-bind="attrs"
                    v-on="on"
                    color="button"
                    >Assign
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5">
                    Assign this lead? </v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green" v-on:click="assignLead(), (processDialog = false)">
                      Yes
                    </v-btn>
                    <v-btn color="red" v-on:click="processDialog = false"> 
                        No 
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col style="text-align: center">
              <v-btn color="warning" v-on:click="reset">Reset</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";

export default Vue.extend({
  name: "EditAssignment",

  data: function() {
    return {
      id: this.$route.params.id,
      valid: false,
      processDialog: false,
    };
  },
  computed: {
    dealersArray() {
      return store.getters.getDealers;
    },
    leadStatus() {
      return store.getters.getOneLeadStatus(this.id);
    },
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },

    assignLead() {
      const d: Date = new Date();
      const clickTime: string = d.toISOString();
      store.dispatch("markLeadProcessed", {
        id: this.leadStatus.LeadID,
        clickTime: clickTime,
      });
      store.dispatch("assignLead", {
        id: this.leadStatus.LeadID,
        salesperson: this.leadStatus.salesperson,
        notes: this.leadStatus.notes,
        clickDate: clickTime,
      });
    },
  },

  mounted() {
    this.id = this.$route.params.id;
  },
});
</script>
