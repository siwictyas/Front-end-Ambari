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
    // this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    // this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    // this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    // this.gradient4 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    // this.gradient.addColorStop(0, 'rgba(247, 101, 17, 0.9)')
    // this.gradient.addColorStop(0.5, 'rgba(247, 101, 17, 0.25)');
    // this.gradient.addColorStop(1, 'rgba(247, 101, 17, 0)');
    
    // this.gradient2.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    // this.gradient2.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
    // this.gradient2.addColorStop(1, 'rgba(255, 0, 0, 0)');

    // this.gradient3.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    // this.gradient3.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
    // this.gradient3.addColorStop(1, 'rgba(255, 0, 0, 0)');

    // this.gradient4.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    // this.gradient4.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
    // this.gradient4.addColorStop(1, 'rgba(255, 0, 0, 0)');

    this.renderChart({
      labels: ['10.45', '11.00', '11.15', '11.30', '11.45', '12.00'],
      datasets: [
        {
          label: 'User',
          borderColor: '#f76511',
          pointBackgroundColor: '#f76511',
          pointBorderColor: '#f76511',
          borderWidth: 1,
          //backgroundColor: this.gradient,
          data: [20, 10, 15, 18, 15, 20]
        },{
            label: 'System',
            borderColor: '#2355ea',
            pointBackgroundColor: '#2355ea',
            pointBorderColor: '#2355ea',
            borderWidth: 1,
            //backgroundColor: this.gradient2,
            data: [5, 3, 4, 2, 3, 4]
        },{
            label: 'Nice',
            borderColor: '#018727',
            pointBackgroundColor: '#018727',
            pointBorderColor: '#018727',
            borderWidth: 1,
            //backgroundColor: this.gradient3,
            data: [5, 3, 4, 2, 3, 4]
        },{
            label: 'Idle',
            borderColor: '#62a3f7',
            pointBackgroundColor: '#62a3f7',
            pointBorderColor: '#62a3f7',
            borderWidth: 1,
            //backgroundColor: this.gradient4,
            data: [100, 98, 98, 100, 97, 100]
        }
      ]
    }, {responsive: true, maintainAspectRatio: true})

  }
}