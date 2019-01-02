<template>

    <div>
      <h3 class="font-weight-bold">PRODUKTY</h3>
      <br>
      <div class="border border-success mb-3 " v-for="product in products">
        <div class="d-flex justify-content-between align-items-center p-3">
          <div class="row">
            <div class="col-sm-6">
              <img class="img-fluid" src="https://ih1.redbubble.net/image.410943990.7990/ra,classic_tee,x2000,fafafa:ca443f4786,front-c,325,112,750,1000-bg,f8f8f8.u1.jpg" alt="">
            </div>
            <div class="col-sm-6 d-flex justify-content-center align-items-center">
              <form @submit="addToBasket" >
                <h1 class="font-weight-bold">{{product.name}}</h1>
                <h2 >{{product.price}} zł</h2> 
                <input type="hidden" :value="product.id" name="id">
                <select class="form-control form-control-sm mb-3" name="size">
                  <option v-for="size, index in product.sizes" v-if="size ? 'disabled' : '' ">{{index}}</option>
                </select>
                <button type="submit" class="btn btn-success btn-lg">Dodaj</button> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>

  export default {
    name: 'Products',
    data: function(){
      return {
        products: []
      }
    },
    methods: {
      addToBasket(e){
        let id = +e.target.id.value;
        let size = e.target.size.value;
        this.$store.dispatch('add', {id, size});
        e.preventDefault();
        
      }
    },
    mounted: function(){
      this.products = this.$store.state.products;
    }
  }

</script>