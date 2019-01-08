import { ADD_PRODUCT, INCREMENT_PRODUCT, DECREMENT_PRODUCT, REMOVE_PRODUCT } from './types'

export default {  

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
    }

}