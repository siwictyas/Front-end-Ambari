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
        //   labels:[this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              backgroundColor: ['#FE4E7A', '#3CB7F8'],
              data: [9.3,0.7]
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
