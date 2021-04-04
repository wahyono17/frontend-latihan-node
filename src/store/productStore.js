import axios from 'axios'

axios.defaults.baseURL = 'http://34.101.246.176'
export default {
  state: () => ({
    product: [
    ],
    // id:"604dba99dead94fee94d2824",
    singleProduct:{},
  }),

  mutations: {
    retreiveProduct(state,product){
      state.product = product.data
    },
    // receiveId(state,id){
    //   state.id = id
    // },
    retreiveSingleProduct(state,product){
      state.singleProduct = product.data[0]
    }
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
    // receiveId(context,id){
    //   context.commit('receiveId',id)
    // },
    retreiveSingleProduct(context,id){
      // console.log(id)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.token
      axios.get('/products/' + id)
        .then(response=>{
          // console.log(response.data)
          context.commit('retreiveSingleProduct',response.data)
        })
        .catch(error => {console.log(error)})
    }
  },

  getters: {
    productAll(state){
      return state.product
    },
    getSingleProduct(state){
      return state.singleProduct
    }
  }

}



