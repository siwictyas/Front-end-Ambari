<template>
  <div>
    <b-col cols="12" class="mt-2 mb-2" id="header-metrics"> HDFS Disk Usage
      <b-nav-item-dropdown class="ddown2" no-caret>
      <template slot="button-content"> &#x22EE; </template>
        <b-dropdown-item> <v-icon name="edit"/> Edit </b-dropdown-item>
        <b-dropdown-item> <v-icon name="trash"/> Delete </b-dropdown-item>
      </b-nav-item-dropdown>       
    </b-col>    
      <div class="small">
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
          labels: ['Non', 'Remaining', 'HDFS'],
          datasets: [
            {
              backgroundColor: ['#FE4E7A','#F9EA4E', '#3CB7F8'],
              data: [12,22,66]
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


<style scoped>
#header-metrics{
  text-align: center;
  font-size: 14px;
  box-shadow: 1px 1px 2px 2px rgb(206, 208, 209);
}


</style>
