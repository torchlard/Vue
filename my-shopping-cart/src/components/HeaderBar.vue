<template>

<div class="menu-links">
  <router-link to="/">Home</router-link>
  <router-link to="/cart">Cart ({{ cartCount}})</router-link>
</div>

</template>

<script>
import {mapGetter} from 'vuex'

export default {
  computed: {
    ...mapGetter(['cartCount'])
  }
}

</script>









