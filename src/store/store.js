import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import productModule from './productStore'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://34.101.246.176'

export const store = new Vuex.Store({
  modules: {
    productModule
  },
  state:{
    token: localStorage.getItem('access_token') || null,
    filter: 'all',

  },
  getters:{
    loggedIn(state){
      return state.token !== null
    },

  },
  mutations:{//harus dengan nama mutations
    retrieveToken(state,token){
      state.token = token
    },
  },

  actions:{
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/register', {
          name: data.name,
          email: data.email,
          password: data.password,
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    destroyToken(context){
      if(context.getters.loggedIn){
        localStorage.removeItem('access_token')
        context.commit('destroyToken')
      }
    },
    retrieveToken(context,credentials){
      return new Promise((resolve,reject) => {
        axios.post('/user/login',{
          email: credentials.email,
          password: credentials.password,
        })
          .then(response => {
            // console.log(response)
            const token = response.data.token;
            console.log(token)
            localStorage.setItem('access_token',token)// hasil token di simpan di local storage
            context.commit('retrieveToken',token)
            resolve(response)
          })
          .catch(error => {console.log(error)
            reject(error)
          })
      })
    },
  }
})

