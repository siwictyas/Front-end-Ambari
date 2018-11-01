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
          label: 'Procs',
          borderColor: '#f7d52e',
          pointBackgroundColor: '#f7d52e',
          borderWidth: 1,
          pointBorderColor: '#f7d52e',
          data: [90, 100, 85, 0, 0, 0]
        },{
          label: 'Nodes',
          borderColor: '#f76511',
          pointBackgroundColor: '#f76511',
          pointBorderColor: '#f76511',
          borderWidth: 1,
          data: [50, 30, 60, 75, 50, 20]
        },{
          label: 'CPUs',
          borderColor: '#2355ea',
          pointBackgroundColor: '#2355ea',
          pointBorderColor: '#2355ea',
          borderWidth: 1,
          data: [0, 40, 30, 80, 50, 10]
        },{
          label: '1-min',
          borderColor: '#1da003',
          pointBackgroundColor: '#1da003',
          pointBorderColor: '#1da003',
          borderWidth: 1,
          data: [40, 30, 70, 100, 50, 0]
        }
      ]
    }, {responsive: true, maintainAspectRatio: true})

  }
}