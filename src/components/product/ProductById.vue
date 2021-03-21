<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col col-md-8 col-lg-8 col-sm-8">
                <h1>ini card1 1</h1>
            </div>
            <div class="col col-md-4 col-lg-4 col-sm-4">
                <h1>ini card 2</h1>
            </div>
        </div>
        <!-- <h1>{{singleProduct.name}}</h1> -->
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name:"product-byid",
    props:{
        id:{
            type:String
        }
    },
    created() {
        // console.log(this.id)
        this.$store.dispatch('retreiveSingleProduct',this.id).productModule
    },
    computed:{
        ...mapGetters({
            singleProduct:'getSingleProduct'
        }),
    },
}
</script>

<style lang="">

</style>
