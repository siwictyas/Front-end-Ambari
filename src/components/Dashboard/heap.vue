<template>
  <div class="small">
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
          // labels:['Used', 'Not Used'],
          datasets: [
            {
              backgroundColor: ['#5CD2B2', '#FA9A14'],
              data: [54,66]
            }
          ]
        },{
          pieceLabel:{
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
