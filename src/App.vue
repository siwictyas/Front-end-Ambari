<template>
  <div id="app">
    <b-container class="cont-main">
    <router-view/>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #0c343d;
}

.cont-main{
  min-width: 1360px;
  min-height:695px;
}
</style>
