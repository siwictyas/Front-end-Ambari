<template>
  <div class="small">
    <b-col cols="12" class="mt-2 mb-2" id="header-metrics">NameNode Heap
      <b-nav-item-dropdown class="ddown2" no-caret>
        <template slot="button-content"> &#x22EE; </template>
          <b-dropdown-item> <v-icon name="edit"/> Edit </b-dropdown-item>
          <b-dropdown-item> <v-icon name="trash"/> Delete </b-dropdown-item>
      </b-nav-item-dropdown>  
    </b-col>        
    <pie-chart
      :chartData="datacollection"
      :height="280">
    </pie-chart>
    
  </div>
</template>

<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
import PieChart from './PieChart.js'

  export default {
    components: {
      PieChart
    },
    data () {
      return {
        datacollection: null,
      }
    },
    mounted () {
      this.datacollection = {
          labels:['Used', 'Not Used'],
          datasets: [
            {
              backgroundColor: ['#5CD2B2', '#FA9A14'],
              data: [54,66]
            }
          ]
        }
      }
    }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
