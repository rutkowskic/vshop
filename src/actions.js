export default {

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