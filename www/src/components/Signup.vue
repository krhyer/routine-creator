<template>
  <div class="signup">
    <h1>Create Your Account</h1>
    <div class="row">
      <div class="col m4"></div>
      <div class="col m4">
        <div class="card-panel">
          <form @submit.prevent="signup">
            <div class="row">
              <div class="col s12">                
                      <i class="fa fa-user-circle"></i>                   
                  <input type="text" class="form-control" v-model="user.name" required placeholder="first name">
              </div>
            </div>
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
        <h6>Already have an account? <router-link to='/signin'>Sign In</router-link></h6>
        <div class="col m4"></div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'signup',
    data() {
      return{
        user:{}
      }
    },
    computed: {},
    methods: {      
      signup() {
        this.$store.dispatch('signup', this.user)
      }
    },
    components: {}
  }

</script>


<style scoped>

</style>