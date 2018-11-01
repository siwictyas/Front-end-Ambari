<template>
  <div>
  <div class="small">
    <b-col cols="12" class="mt-2 mb-2" id="header-metrics"> Network Usage
        <b-nav-item-dropdown class="ddown2" no-caret>
        <template slot="button-content"> &#x22EE; </template>
            <b-dropdown-item> <v-icon name="edit"/> Edit </b-dropdown-item>
            <b-dropdown-item> <v-icon name="trash"/> Delete </b-dropdown-item>
        </b-nav-item-dropdown>       
    </b-col>    
      <line-example 
        :options="{responsive: false, maintainAspectRatio: false}"
        :height=300>
      </line-example>
  </div>
  </div>
</template>

<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
import LineExample from './NetworkUsageChart.js'

  export default {
    components: {
      LineExample
    },
    data () {
      return {
        datacollection: null
      }
    },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
