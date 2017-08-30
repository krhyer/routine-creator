<template>
  <div class="landingPage">
    <div class="navbar-fixed">
      <nav class="nav-wrapper">
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/signin">Sign In</router-link></li>
          <li><router-link to="/signup">Sign Up</router-link></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/signin">Sign In</router-link></li>
          <li><router-link to="/signup">Sign Up</router-link></li>
        </ul>
      </nav>
    </div>
    <h1>Routine Creator</h1>
    <p>When creating a syllabus dance routine, the single most challenging part is to make sure that it follows the rules. Nothing
      is worse than working hard to create an awesome routine, only to find that when you take it to competitions, your student
      gets called out by a Syllabus Invigilator, and disqualified for not following syllabus. To that end, the purpose of
      this app is to three fold:</p>
    <div class="row">
      <div class="col s12 m4">
        <i class="material-icons">view_compact</i>
        <p>Clear Structure</p>
      </div>
      <div class="col s12 m4">
        <i class="material-icons">watch_later</i>
        <p>Fast and Simple</p>
      </div>
      <div class="col s12 m4">
        <i class="material-icons">check_box</i>
        <p>Ensures Compliance</p>
      </div>
    </div>
    <p>If you want to save your routines sign in otherwise get started</p>
  </div>
</template>


<script>
  export default {
    name: 'landingPage',
    data() {
      return{}

      // $( landingPage ).ready(side-nav(){})
    },
    computed: {},
    methods: {},
    components: {}
  }

</script>


<style scoped>
  nav {
    background-color: black;
  }

  nav a {
    color: whitesmoke
  }
</style>