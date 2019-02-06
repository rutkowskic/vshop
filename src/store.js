import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import _ from 'underscore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {id: 1, name: 'T-shirt', price: 20, sizes: {'S': 0, 'M': 10, 'L': 10}, src: 'tshirt.jpg'},
      {id: 2, name: 'Bluza', price: 40, sizes: {'S': 10, 'M': 10, 'L': 10}, src: 'bluza.jpg'}
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
  mutations,
  getters,
  actions
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