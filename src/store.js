import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_PRODUCT, INCREMENT_PRODUCT, DECREMENT_PRODUCT, REMOVE_PRODUCT } from './types'
import _ from 'underscore'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    products:[
      {id: 1, name: 'T-shirt', price: 20, sizes: {'S': 0, 'M': 10, 'L': 10}},
      {id: 2, name: 'Bluza', price: 40, sizes: {'S': 10, 'M': 10, 'L': 10}},
      {id: 3, name: 'Jeans', price: 100, sizes: {'S': 10, 'M': 10, 'L': 10}}
    ],
    basket:[],
    payments:[
      {id: 1, name: 'Paypal'},
      {id: 2, name: 'Karta płatnicza'},
      {id: 3, name: 'Przy odniorze'}
    ],
    deliverers:[
      {id: 1, name: 'Poczta Polska', price: 10},
      {id: 2, name: 'Pocztex', price: 20},
      {id: 3, name: 'Odbiór osobisty', price: 0}
    ]
  },

  mutations: {

    [ADD_PRODUCT](state, product) {
      state.basket = [...state.basket, {...product, qty: 1}]
    },

    [INCREMENT_PRODUCT](state, product) {
      const existingProduct = state.basket.find(item => item.id === product.id && item.size === product.size)
      existingProduct.qty++
    },

    [DECREMENT_PRODUCT](state, product) {
      const existingProduct = state.basket.find(item => item.id === product.id && item.size === product.size)
      existingProduct.qty--
    },

    [REMOVE_PRODUCT](state, product) {
      let items = state.basket;
      for( var i = 0; i < items.length; i++){ 
        if ( items[i].id === product.id && items[i].size === product.size) {
          items.splice(i, 1); 
        }
     }
      state.basket = items;
    },

  },

  getters: {
    total: state => {
      return state.basket.reduce((total, next)=>{
        return total + (next.qty * next.price);
      }, 0);
    }
  },
  actions: {

    add({commit, state}, product){
      const existingProduct = state.basket.find(item => item.id === product.id && item.size === product.size)
      const fullProduct = state.products.find(item => item.id === product.id)
      if (!existingProduct) {
        commit('ADD_PRODUCT', {name: fullProduct.name, price: fullProduct.price, ...product})
      } else {
        commit('INCREMENT_PRODUCT', existingProduct)
      }    
    },

    decrement({commit, state}, product){
      const existingProduct = state.basket.find(item => item.id === product.id && item.size === product.size)
      
      if(existingProduct.qty > 1){
        commit('DECREMENT_PRODUCT', product)
      } else {
        commit('REMOVE_PRODUCT', product)
      }
    }

  }

})



































// mutations: {

//   ADD_PRODUCT: (state, product) => {
//     state.basket.push(product)
//   },

//   INCREMENT_PRODUCT: (state, product) => {
//     const cartItem = state.items.find(item => item.id === id)
//     cartItem.quantity++
//   }

// },

// actions: {

//   add({commit, state}, product){
//     console.log(product)
//     const existingProduct = state.basket.find(item => item.id === product.id)
//     if (!existingProduct) {
//       commit('ADD_PRODUCT', product)
//     } else {
//       commit('INCREMENT_PRODUCT', existingProduct)
//     }    
//   }

// }

// })

// getters: {
//   add: state => state.basket
// },