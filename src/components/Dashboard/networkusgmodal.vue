<template>
  <div id="apps">
    <div class="containers">
      <div class="Chart__list">
        <div class="Chart">
          <line-example 
            :options="{responsive: false, maintainAspectRatio: false}"
            :height=300>
          </line-example>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineExample from './NetworkUsageChart.js';
import networkusg from './networkusg';

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
  /* margin-top: 60px; */
}
.containers {
  max-width: 300px;
  max-height: 300px;
  margin:  0 auto;
}

</style>