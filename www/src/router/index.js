import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from 'components/LandingPage'
import Signin from 'components/Signin'
import Signup from 'components/Signup'
import Dashboard from 'components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },{
      path: '/signin',
      name: 'Signin',
      component: Signin
    },{
      path: '/signup',
      name: 'Signup',
      component: Signup
    },{
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
