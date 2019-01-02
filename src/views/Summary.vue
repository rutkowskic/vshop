<template>
  <div class="container">
    <nav class="navbar justify-content-center">
      <a class="navbar-brand" href="#">
        <img src="https://vuejs.org/images/logo.png" width="60" height="60" alt="">
      </a>
    </nav>
    <div class='row'>
      <div class='col-sm-7'>
        <form @submit="checkAndSendForm"> 

          <br>
          <h2 class="font-weight-bold">DANE DO DOSTAWY</h2>

          <small class="text-danger">{{ errors.first('name') }}</small>
          <div class="form-group">
            <label for="name">Imie</label>
            <input name="name" v-validate="'required'" type="text" class="form-control" id="name" placeholder="Podaj imię" v-model="summary.name">
          </div>

          <small class="text-danger">{{ errors.first('surname') }}</small>
          <div class="form-group">
            <label for="surname">Nazwisko</label>
            <input name="surname" v-validate="'required'" type="text" class="form-control" id="surname" placeholder="Podaj Nazwisko" v-model="summary.surname">
          </div>

          <small class="text-danger">{{ errors.first('address') }}</small>
          <div class="form-group">
            <label for="address">Adres</label>
            <input name="address" v-validate="'required'" type="text" class="form-control" id="address" placeholder="Podaj adres" v-model="summary.address">
          </div>

          <small class="text-danger">{{ errors.first('code') }}</small>
          <div class="form-group">
            <label for="code">Kod</label>
            <input name="code" v-validate="'required'" type="text" class="form-control" id="code" placeholder="Podaj Kod" v-model="summary.code">
          </div>

          <small class="text-danger">{{ errors.first('city') }}</small>
          <div class="form-group">
            <label for="city">Miasto</label>
            <input name="city" v-validate="'required'" type="text" class="form-control" id="city" placeholder="Podaj Miasto" v-model="summary.city">
          </div>

          <small class="text-danger">{{ errors.first('country') }}</small>
          <div class="form-group">
            <label for="country">Kraj</label>
            <input name="country" v-validate="'required'" type="text" class="form-control" id="country" placeholder="Podaj kraj" v-model="summary.country">
          </div>

          <br>
          <h2 class="font-weight-bold">PŁATNOŚĆ</h2>

          <small class="text-danger">{{ errors.first('payment') }}</small>
          <div class="form-group">
            <label for="payment">Wybierz płatność</label>
            <select v-validate="'required'" class="form-control" id="payment" name="payment" v-model="summary.payment">
              <option v-for="payment in payments" :value="payment.id">{{payment.name}}</option>
            </select>
          </div>

          <br>
          <h2 class="font-weight-bold">DOSTAWA</h2>

          <small v-show="errors.has('deliverer')" class="text-danger">{{ errors.first('deliverer') }}</small>
          <div class="form-group">
            <label for="deliverer">Wybierz dostawce</label>
            <select v-validate="'required'" class="form-control" id="deliverer" name="deliverer" v-model="summary.deliverer">
              <option v-for="deliverer in deliverers" :value="deliverer.id">{{deliverer.name}}: {{deliverer.price}}zł</option>
            </select>
          </div>

          <small v-show="errors.has('regulations')" class="text-danger">{{ errors.first('regulations') }}</small>
          <div class="form-check">
            <input name="regulations" v-validate="'required'" class="form-check-input" type="checkbox" value="" id="regulations" v-model="summary.regulations">
            <label class="form-check-label" for="regulations">
              Regulamin i polityka prywatności
            </label>
          </div>
          <br>
          <button type="submit" class="btn btn-success btn-lg btn-block">Zamawiam</button>

        </form>
      </div>
      <div class='col-sm-5'>
        <div class="p-5">
          <h4 class="text-center">PODSUMOWANIE</h4>
          <br>
          <div class="mb-3 d-flex justify-content-between" v-for="product in basket">
              <h5>{{product.qty}} x {{product.name}}</h5>
              <h5>{{product.price}}zł</h5>
          </div>
          <br>
          <h1 class="text-center">Suma: {{total}}zł</h1>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
export default {
    name: 'Summary',
    data: function(){
      return {
        summary: {
          name: null,
          surname: null,
          address: null,
          code: null,
          city: null,
          country: null,
          payment: 1,
          deliverer: 1,
          regulations: null
        }
      }
    },
    computed: {
      payments(){
        return this.$store.state.payments;
      },
      deliverers(){
        return this.$store.state.deliverers;
      },
      basket(){
        return this.$store.state.basket;
      },
      total(){
        return this.$store.getters.total;
      }
    },
    methods: {
      checkAndSendForm(e){
        this.$validator.validate().then(result => {
          if (!result) {
            console.log(result)
          }
        });

        e.preventDefault();
      }
    }
}

</script>