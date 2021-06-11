<template>
  <div>
  <h1 color="titleText" style="text-align:center; padding: 2%"> Unassigned Requests </h1>
  <unassigned />
  </div>

</template>

<script lang="ts">
  import Vue from 'vue'
  import Unassigned from '../components/unassigned.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      Unassigned
    }
  })
</script>
