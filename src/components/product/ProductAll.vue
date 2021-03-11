<template>
    <div class="container-fluid">
    <div class="row">
        <div v-for="item in productAll" :key="item._id" class="col-md-2 col-xs-6">
            <div class="card card-margin-right card-buttom">
            <img v-bind:src="item.image[0].filename" />
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <p>
                  {{item.description}}<br>
                  <span class="font-weight-bold">{{item.fprice}} / {{item.unit}}<br></span>
                  stock : {{item.quantity}}<br>
                </p>
            </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name:   'product-all',
    components:{

    },
    created(){ //pertama kali component ini di click maka akan panggil untuk menerima list todo
    this.$store.dispatch('retreiveProduct').productModule // kalau dispatch di store harus di terima di actions
    },
    computed:{
        ...mapGetters({
            productAll:'productAll'
        }),
    },
}
</script>

<style lang="">

@media (min-width: 320px) {
    .col-xs-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .order-xs-6 {
      order: 6;
    }
    .offset-xs-6 {
      margin-left: 50%;
    }
  }

@media (min-width: 768px) {
    .col-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-md-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
    }
  }

  .card-buttom {
      margin-bottom: 15px;
  }

  .card-margin-right {
    margin-right: -10px;
  }

  p.small {
    line-height: 100%;
  }

</style>
