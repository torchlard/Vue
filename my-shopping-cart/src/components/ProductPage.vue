<template>

<div class="product-item">
  <router-link to="/" class="black-link">BACK</router-link>
  <div class="product-title">{{product.title}}</div>
  <div class="product-details">
    <div class="inventory">In stock: {{product.inventory}}</div>
    <button class="add-button" :disabled="!product.inventory" 
      @click="addToCart(product)">
      {{ product.inventory > 0 ? "Add to cart" : "Out Of Stock" }}
    </button> 
  </div>
</div>

</template>

<script>
import {mapAction, mapGetter} from 'vuex'


</script>








