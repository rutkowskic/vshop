<template>

  <section>
    <div class="d-flex justify-content-center pt-45">
      <img class="d-block" src="logo.png" alt="First slide">
    </div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-6 offset-md-1">
          <products></products>
        </div>   
        <div class="col-md-4">
          <basket></basket>
        </div>
      </div>
    </div>
    
  </section>
    
</template>

<script>

  import Products from "@/components/Products";
  import Basket from "@/components/Basket";
  import { mount } from '@vue/test-utils'

  export default {
    components: {
      Products,
      Basket
    }
  }

</script>