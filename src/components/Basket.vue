<template>
    <div class="p-5">
        <h4 class="text-center">KOSZYK</h4>
        <br>
        <div class="mb-3" v-for="product in basket">
            <h5>{{product.qty}} x {{product.name}}</h5>
            <div class="d-flex justify-content-between">
                <div>
                    <button class="btn btn-primary btn-sm mr-1" @click="increment(product)" >+</button>
                    <button class="btn btn-primary btn-sm" @click="decrement(product)" >-</button>
                </div>
                <button class="btn btn-danger btn-sm" @click="removeProductFromBasket(product)" >Usuń</button>
            </div>
        </div>
        <br>
        <h1 class="text-center">Suma: {{total}}zł</h1>
        <br>
        <router-link class="btn btn-success btn-lg btn-block" to="/summary">Zapłać</router-link>
    </div> 
</template>

<script>

export default {
    name: 'Basket',
    computed: {
        basket(){
            return this.$store.state.basket;
        },
        total(){
            return this.$store.getters.total;
        },
    },
    methods: {
        removeProductFromBasket(product){
          this.$store.commit('REMOVE_PRODUCT', product)
        },
        increment(product){
            this.$store.commit('INCREMENT_PRODUCT', product)
        },
        decrement(product){
            this.$store.dispatch('decrement', product)
        }
    }
}

</script>  