<template>

<div class="product-container">
  <div v-for="p in products" v-bind:key="p.id" class="product">
    <router-link :to="{name:'product', params:{id: p.id}}" class="title">
      {{ p.title }}
    </router-link>
    <span class="price">$ {{p.price}}</span>
  </div>
</div>

</template>

<script>
import {mapGetter, mapActions} from 'vuex'

export default {
  mounted () {
    this.getAllProducts()
  },
  computed: {
    ...mapGetters(['allProducts'])
  },
  methods: {
    ...mapActions(['getAllProducts'])
  }
}
</script>






