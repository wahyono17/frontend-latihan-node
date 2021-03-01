import axios from 'axios'

axios.defaults.baseURL = 'http://34.101.246.176'
export default {
  state: () => ({
    product: [
    ]
  }),
  mutations: {
    retreiveProduct(state,product){
      state.product = product.data
    },
  },
  actions: {
    retreiveProduct(context){
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.token
      axios.get('/products')
        .then(response=>{
          context.commit('retreiveProduct',response.data)//bawaan axios semua ada di data
        })
        .catch(error => {console.log(error)})
    },
  },
  getters: {
    productAll(state){
      return state.product
    }
  }
}



