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
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    this.gradient.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
    this.gradient.addColorStop(1, 'rgba(0, 231, 255, 0)');
    
    this.gradient2.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient2.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
    this.gradient2.addColorStop(1, 'rgba(255, 0, 0, 0)');

    this.renderChart({
      labels: ['10.45', '11.00', '11.15', '11.30', '11.45', '12.00'],
      datasets: [
        {
          label: 'Output_avg',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [90, 100, 85, 0, 0, 0]
        },{
          label: 'Input_avg',
          borderColor: '#FC2525',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: this.gradient2,
          data: [50, 30, 60, 75, 50, 20]
        }
      ]
    }, {responsive: true, maintainAspectRatio: true})

  }
}