<template>
    <ul>
        <li v-for="item in productAll" :key="item._id">
            <div class="card" style="width: 18rem;">
            <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </li>
    </ul>
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
