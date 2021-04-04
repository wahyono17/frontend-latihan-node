<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-8">
                        <div style="border-style: solid;border-width: medium;">
                            <img v-bind:src="fileName" alt="image" width="100%">
                            <div class="row">
                                <div v-for="item in singleProduct.image" :key="item._id" class="col-md-3 col-sm-3">
                                    <img v-bind:src="item.filename" alt="image" width="100%" @click="changePicture(item.filename)">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <p class="font-weight-bold">{{singleProduct.name}}</p>
                        <p class="font-weight-bold">{{singleProduct.fprice}} / {{singleProduct.unit}}</p>
                        <p>{{singleProduct.description}}</p>

                        <p>stock: {{singleProduct.quantity}} {{singleProduct.unit}}</p>

                        <button type="button" class="btn btn-primary">+ Keranjang</button>
                        <button type="button" class="btn btn-secondary">Beli langsung</button>
                    </div>
                </div>
            </div>
            <div class="col col-md-4">
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
/* .col-md-8{
    margin: 0%;
}
.col-md-3{
    margin: 0%;
}
.col-md-4{
    margin: 0%;
} */
/* @media (max-width:360px) {
    .font-size-sm{

    }
} */

/* @media (min-width: 360px) {

    .col-sm-8 {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%;
    }
    .col-md-4 {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%;
    }
    .col-sm-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-sm-2 {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%;
    }
  }

@media (min-width: 768px) {
    .col-md-8 {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%;
    }
    .col-md-4 {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%;
    }
    .col-sm-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }
  } */

</style>
