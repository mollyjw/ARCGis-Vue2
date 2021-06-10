<template>
    <v-app-bar app color="secondary" light prominent>
        <img
          alt="WW Logo"
          src="../assets/ScoutLogo.png"
          style="max-height: 90%; max-width: 40%" 
        />
     
    </v-app-bar>

</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",

  data: () => ({
    //
  }),
});
</script>