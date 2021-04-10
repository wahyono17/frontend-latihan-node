<template>
    <div class="container-fluid">
    <div class="row">
        <div v-for="item in productAll" :key="item._id" class="col-md col-md-2 col-xs-6">
            <div class="card">
            <img v-bind:src="item.image[0].filename" />
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <p>
                  {{item.description}}<br>
                  <span class="font-weight-bold">{{item.fprice}} / {{item.unit}}<br></span>
                  stock : {{item.quantity}}<br>
                </p>
                <router-link class="btn btn-primary" :to="`/product/${item._id}`">Detail</router-link>
            </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
// import ProductById from './ProductById.vue';


export default {
    name:   'product-all',
    components:{
        // ProductById
    },
    data(){
      return {
        // productByIdData:false,productAllData:true,id:"0"
      }
    },
    created(){ //pertama kali component ini di click maka akan panggil untuk menerima list todo
      this.$store.dispatch('retreiveProduct').productModule // kalau dispatch di store harus di terima di actions
    },
    computed:{
        ...mapGetters({
            productAll:'productAll'
        }),
    },
    methods: {
      // clickProductById(id){
      //   this.productByIdData = true
      //   this.productAllData = false
      //   this.id = id
      //   // this.$store.dispatch('receiveId',id).productModule//diterima diaction karena ansyncronous
      // }
    },
}
</script>

<style lang="">

@media (min-width: 320px) {
    .col-xs-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

@media (min-width: 768px) {
    .col-md-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  /* reset pading default bootstarp */
  .col-xs-6,
  .col-md-2{
    padding-right: 0;
    padding-left: 0;
  }

</style>
