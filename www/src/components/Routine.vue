<template>
  <div class="routine">
    <h4>Select your dance:</h4>
    <div class="row">
      <div class="col s6 m3">
        <h5>Waltz</h5>
      </div>
      <div class="col s6 m3">
        <h5>Tango</h5>
      </div>
      <div class="col s6 m3">
        <h5>Foxtrot</h5>
      </div>
      <div class="col s6 m3">
        <h5>Quickstep</h5>
      </div>
    </div>
    <h4>Select your level:</h4>
    <div class="row">
      <div class="col s12 m4">
        <h5>Bronze</h5>
      </div>
      <div class="col s12 m4">
        <h5>Silver</h5>
      </div>
      <div class="col s12 m4">
        <h5>Gold</h5>
      </div>
    </div>
    <div class="col-md-4" v-for="step in steps">
      <router-link:to="'/steps/'+step._id">
        <p>{{step.name}}</p>
      </router-link>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'routine',
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }

</script>


<style scoped>

</style>