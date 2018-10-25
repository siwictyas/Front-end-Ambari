<template>
  <div>
    <pie-chart
      :chartData="datacollection"
      :height="280"
      :option="myoption"
      >
    </pie-chart>
    <b-dropdown right split text="Last 1 Hour" id="ddown-sm-split" size="sm" style="margin-top:10px; font-size:14px" variant="light">
            <b-dropdown-item> <v-icon name="plus"/> Add Service</b-dropdown-item>
            <b-dropdown-item> <v-icon name="edit"/> Edit</b-dropdown-item>
    </b-dropdown>
    <v-icon name="download" color="black" style="margin-left:10px"/>
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
              data: [54,66],
              hoverBackgroundColor: ['#5CD2B2', '#FA9A14'],
              hoverBorderColor:"black",
              borderwidth:2
            }
          ],
  
        },{
          options:{
            mode:'percentage',
            precision:1
          }
        }
      }
    }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
