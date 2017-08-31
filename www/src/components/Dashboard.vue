<template>
  <div class="dashboard">
    <h4>My Routines</h4>
    <router-link to="/Routine"><a class="btn-floating waves-effect waves-light black"><i class="material-icons">add</i></a></router-link>
    <div class="col-md-4" v-for="routine in routines">
      <router-link :to="'/routines/'+routine._id">
        <h3>{{routine.difficulty}} {{routine.name}}</h3>
      </router-link>
      <a class="fa fa-trash" @click="removeRoutine(routine)"></a>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'dashboard',
    data() {
      return {}
    },
    created() {
      this.$store.dispatch('getRoutines')
    },
    computed: {      
      user() {
        return this.$store.state.routines
      }
    },
    methods: {
      removeRoutine(routine) {
        this.$store.dispatch('removeRoutine', routine)
      }
    },
    components: {}
  }

</script>


<style scoped>

</style>