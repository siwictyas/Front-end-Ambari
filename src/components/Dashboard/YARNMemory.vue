<template>
  <div>
  <div class="small">
    <b-col cols="12" class="mt-2 mb-2" id="header-metrics"> YARN Memory
        <b-nav-item-dropdown class="ddown2" no-caret>
        <template slot="button-content"> &#x22EE; </template>
            <b-dropdown-item> <v-icon name="edit"/> Edit </b-dropdown-item>
            <b-dropdown-item> <v-icon name="trash"/> Delete </b-dropdown-item>
        </b-nav-item-dropdown>       
    </b-col>    
    <pie-chart
      :chart-data="datacollection"
      :height="280">
    </pie-chart>

  </div>
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
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
        labels: ['Used', 'Free'],
          datasets: [
            {
              backgroundColor: ['#FE4E7A','#3CB7F8'],
              data: [99, 1]
            },
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
