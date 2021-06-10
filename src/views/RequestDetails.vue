<template>
  <div>
  <h1 style="text-align:center; padding: 2%">  {{this.id}} </h1>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'RequestDetails',
    data: function() {
        return {
            id: 'null'
        }
    },
    mounted() {
       this.id = this.$route.params.id;
       console.log(this.id);
    }
  })
</script>
