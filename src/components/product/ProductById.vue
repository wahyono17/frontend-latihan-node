<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md col-md-8">
                <div class="row">
                    <div class="col-md col-md-8">
                        <img v-bind:src="fileName" alt="image" width="100%">
                            <div class="row">
                                <div v-for="item in singleProduct.image" :key="item._id" class="col-md-3 col-sm-3">
                                    <img v-bind:src="item.filename" alt="image" width="100%" @click="changePicture(item.filename)">
                                </div>
                            </div>
                    </div>
                    <div class="col-md col-md-4">
                        <p class="font-weight-bold">{{singleProduct.name}} <br>
                            {{singleProduct.fprice}} / {{singleProduct.unit}}
                        </p>

                        <p>{{singleProduct.description}} <br>
                            stock: {{singleProduct.quantity}} {{singleProduct.unit}}
                        </p>

                        <router-link type="button" class="btn btn-primary" to='/product/qty/test'>+ Keranjang</router-link>
                        <button type="button" class="btn btn-secondary">Beli langsung</button>
                    </div>
                </div>
            </div>
            <div class="col-md col-md-4">
                <p>nama supplier</p>
                <p>alamat detail supplier</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name:"product-byid",
    props:{
        id:{
            type:String
        },
    },
    data(){
        return {
            fileName:"",
        }
    },
    created() {
        this.$store.dispatch('retreiveSingleProduct',this.id).productModule
        this.fileName = this.singleProduct.image[0].filename
    },
    computed:{
        ...mapGetters({
            singleProduct:'getSingleProduct'
        }),
    },
    methods: {
        changePicture(filename){
            this.fileName = filename
        }
    },
}
</script>

<style lang="">
.row {
    display: flex;
    flex-wrap: wrap;
}
@media (min-width: 320px) {
    .col-sm-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }
  }

  /* reset pading default bootstarp */
  .col-md-3,
  .col-sm-3{
    padding-right: 5px;
    padding-left: 5px;
  }
</style>
