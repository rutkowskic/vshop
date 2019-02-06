import _ from 'underscore'
export default {
    
    add({commit, state}, payload){
        const existingProduct = _.find(state.basket, function(item){ return item.id === payload.id && item.size === payload.size })
        const product = _.find(state.products, function(item){ return item.id === payload.id })
        if (!existingProduct) {
            commit('ADD_PRODUCT', {name: product.name, price: product.price, ...payload})
        } else {
            commit('INCREMENT_PRODUCT', existingProduct)
        }    
    },

    decrement({commit, state}, payload){
        const existingProduct = state.basket.find(item => item.id === payload.id && item.size === payload.size)

        if(existingProduct.qty > 1){
            commit('DECREMENT_PRODUCT', payload)
        } else {
            commit('REMOVE_PRODUCT', payload)
        }
    }
    
}