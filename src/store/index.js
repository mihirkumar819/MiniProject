// import axios from 'axios'
import { createStore } from 'vuex'
import details from '../data.json'

export default createStore({
  state: {
    products: [],
    card: [],
    filproducts:[],
    qty:[]
  },
  mutations: {
    getProducts(state, products){
      state.products = products
    }
  },
  actions:{
    getProductsAction({commit}){
      commit('getProducts',details.products)
    }
  },
})
