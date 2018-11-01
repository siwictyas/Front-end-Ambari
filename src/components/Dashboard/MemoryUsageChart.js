import {Line} from 'vue-chartjs'

export default {
  extends: Line,
  height: 300,
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {

    this.renderChart({
      labels: ['10.45', '11.00', '11.15', '11.30', '11.45', '12.00'],
      datasets: [
        {
          label: 'Use',
          borderColor: '#62a3f7',
          pointBackgroundColor: '#62a3f7',
          pointBorderColor: '#62a3f7',
          borderWidth: 1,
          data: [5, 5, 4.5, 4.5, 5, 5]
        },{
          label: 'Total',
          borderColor: '#f76511',
          pointBackgroundColor: '#f76511',
          pointBorderColor: '#f76511',
          borderWidth: 1,
          data: [8, 8, 8, 8, 8, 8]
        },{
          label: 'Swap',
          borderColor: '#2355ea',
          pointBackgroundColor: '#2355ea',
          pointBorderColor: '#2355ea',
          borderWidth: 1,
          data: [2.5, 2.5, 3, 3, 2.5, 2.5]
        },{
          label: 'Others',
          borderColor: '#1da003',
          pointBackgroundColor: '#1da003',
          pointBorderColor: '#1da003',
          borderWidth: 1,
          data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
        }
      ]
    }, {responsive: true, maintainAspectRatio: true})

  }
}