<template>
    <div>
        <h1>{{singleProduct.name}}</h1>

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
        console.log(this.id)
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
