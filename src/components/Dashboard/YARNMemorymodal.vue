<template>
  <div>
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
import PieChart from './PieChart.js';
import YARNMemory from './YARNMemory'

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
      }
    }
  }
</script>

<style scoped>
</style>