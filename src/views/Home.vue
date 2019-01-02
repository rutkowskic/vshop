<template>

  <section>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../../public/vue-slider.png" alt="First slide">
        </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-7">
          <products></products>
        </div>   
        <div class="col-md-5">
          <basket></basket>
        </div>
      </div>
    </div>
    
  </section>
    
</template>

<script>

  import Products from "@/components/Products";
  import Basket from "@/components/Basket";

  export default {
    components: {
      Products,
      Basket
    }
  }

</script>