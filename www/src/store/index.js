import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})
let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE 
let state = {
  user: {},
  dashboard: [],
  routine: [],
  error: {}
}

let handleError = (err) => {
  state.error = err
}

export default new Vuex.Store({
  // ALL DATA LIVES IN THE STATE
  state,
  mutations:{
    setUser(state, user) {
      state.user = user
    },
    setDashboard(state, dashboard) {
      state.dashboard = dashboard
    },
    setRoutine(state, routine) {
      state.routine = routine
    }
  },
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    signin({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          console.log(user)
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit('setUser', res.data.data)
          router.push('/dashboard')
        })
        .catch(handleError)
    },
    signup({ commit, dispatch }, user) {
      auth.post('register', user)
        .then(res => {
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit("setUser", res.data.data)
          router.push('/dashboard')
        })
        .catch(handleError)
    },
    getAuth() {
      auth('authenticate')
        .then(res => {
          if (!res.data.data) {
            return router.push('/login')
          }
          state.user = res.data.data
          router.push('/dashboard')
        }).catch(err => {
          router.push('/login')
        })
    },
    logout({ commit, dispatch }, user) {
      auth.delete('logout', user)
        .then(res => {
          router.push('/')
        }).catch(handleError)
    },
    getDashboard() {
      api('dashboard')
        .then(res => {
          state.dashboard = res.data.data
        })
        .catch(handleError)
    },
    getRoutine(id) {
      api('dashboard/' + id)
        .then(res => {
          state.activeRoutine = res.data.data
        })
        .catch(handleError)
    },
    createRoutine(routine) {
      api.post('dashboard/',routine)
        .then(res => {
          this.getDashboard()
        })
        .catch(handleError)
    },
    removeRoutine(routine) {
      api.delete('dashboard/'+routine._id)
        .then(res => {
          this.getDashboard()
        })
        .catch(handleError)
    }
  }

})

