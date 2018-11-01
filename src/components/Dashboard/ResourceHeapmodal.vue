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
import ResourceHeap from './ResourceHeap'

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
        labels: ['Used', 'Not Used'],
          datasets: [
            {
              backgroundColor: ['#F9EA4E', '#3CB7F8'],
              data: [34,66]
            },
          ]
        }
      }
    }
  }
</script>

<style scoped>
</style>