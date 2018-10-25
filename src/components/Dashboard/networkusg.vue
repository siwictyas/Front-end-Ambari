<template>
  <div>
  <div class="small">
    <line-chart
      :chart-data="datacollection"
      :height="300"
      :legends="false">
      </line-chart>

  </div>
  </div>
</template>

<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
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
          labels:['Data Satu', 'Data Dua'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: 'grey',
              data: [40,20]
            }, {
              label: 'Data One',
              backgroundColor: 'lightblue',
              data: [10,140]
            }
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
