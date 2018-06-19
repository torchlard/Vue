<template>
  <div class="app">
    <div class="header">
      <header-bar></header-bar>
    </div>
    <div class="page">
      <router-view></router-view>
      <div class="help-text">
        <p>single page app with vuex</p>
      </div>
    </div>
  </div>
</template>

<script>
import HearerBar from "@/components/HeaderBar"
export default {
  components: {
    HeaderBar
  },
  name: 'app'
}
</script>


