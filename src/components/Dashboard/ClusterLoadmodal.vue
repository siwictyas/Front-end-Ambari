<template>
  <div id="apps">
    <div class="containers">
      <div class="Chart__list">
        <div class="Chart">
          <line-example 
            :options="{responsive: false, maintainAspectRatio: false}">
          </line-example>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineExample from './ClusterLoadChart.js';
import ClusterLoad from './ClusterLoad'

export default {
  name: 'apps',
  components: {
    LineExample
  }
}
</script>

<style>
#apps {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 300px;
}
.containers {
  max-width: 300px;
  max-height: 300px;
  margin:  0 auto;
}
</style>