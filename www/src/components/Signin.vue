<template>
  <div class="signin">
    <h1>Sign In</h1>
    <div class="row">
      <div class="col m4"></div>
      <div class="col m4">
        <div class="card-panel">
          <form @submit.prevent="signin">
            <div class="row">
              <div class="col s12">
                <i class="fa fa-envelope"></i>
                <input type="email" class="form-control" v-model="user.email" required placeholder="email">
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                <i class="fa fa-key"></i>
                <input type="password" class="form-control" v-model="user.password" required placeholder="password">
              </div>
            </div>
            <div class="form group row">
              <button class="btn" type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
        <h6>Don't have an account? <router-link to='/signup'>Sign up</router-link></h6>
        <div class="col m4"></div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'signin',
    data() {
      return {
        user: {}
      }
    },
    computed: {},
    methods: {
      signin() {
        this.$store.dispatch('signin', this.user)
      }
    },
    components: {}
  }

</script>


<style scoped>

</style>