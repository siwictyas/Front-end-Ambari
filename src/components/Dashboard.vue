<template>
  <div>
    <Nav_Menu/>
    <b-row>
    <b-col sm="3">
      <Nav_Vertical/>
    </b-col>
    <b-col sm="9" style="background-color:lightgrey">
      <b-container class="con1">
        <b-container class="con-nav">
          <b-row align-h="between">
            <b-col lg="6">
              <Nav_Metrics/>
              <!-- <b-nav id="navmetrics">
                <b-nav-item active>METRICS</b-nav-item>
                <b-nav-item href="/#/Heatmaps_Host">HEATMAPS</b-nav-item> 
                <b-nav-item href="/#/ConfigHist">CONFIG HISTORY</b-nav-item> 
              </b-nav> -->
            </b-col>
            <b-col lg="5">
              <div class="ddown-metrics">
                <b-nav-item-dropdown right split text="Matriks Action" size="sm" class="ddown2">
                <b-dropdown-item> <v-icon name="plus"/> Add Service</b-dropdown-item>
                <b-dropdown-item> <v-icon name="edit"/> Edit</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown right split text="Last Hour" size="sm" class="ddown2">
                  <b-dropdown-item>Last 1 Hour</b-dropdown-item>
                  <b-dropdown-item>Last 2 Hour</b-dropdown-item>
                  <b-dropdown-item>Last 4 Hour</b-dropdown-item>
                  <b-dropdown-item>Last 12 Hour</b-dropdown-item>
                  <b-dropdown-item>Last 24 Hour</b-dropdown-item>
                  <b-dropdown-item>Last 1 Week</b-dropdown-item>
                  <b-dropdown-item>Last 1 Month</b-dropdown-item>
                  <b-dropdown-item>Last 1 Year</b-dropdown-item>
                  <b-dropdown-item>Custom</b-dropdown-item>
                </b-nav-item-dropdown>
              </div>
          </b-col>
        </b-row>
      </b-container>
      <!-- Metrics -->
      <b-container class="metrics">
        <Metrics/>
      </b-container>        
    </b-container>
  </b-col>
  </b-row>
  </div>
</template>

<script>
import Metrics from './Metrics';
import Nav_Menu from './Main/Nav_Menu';
import Nav_Vertical from './Main/Nav_Vertical';
import Nav_Metrics from './Main/Nav_Metrics';

export default {
  name: 'Dashboard',
  data () {
    return {
      Nav_Metrics,
    }
  },
  components: {
    Metrics,
    Nav_Menu,
    Nav_Vertical,
    Nav_Metrics,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.con1{
  margin-top:3%;
  min-height: 94%;
  width: 97%;
  background:white;
  margin-left:0%;
  padding: 0px;
}

.con-nav{
  background: lightgray;
  margin-right:0px;
  margin-left:-5px;
  width: 102%;
}

.dropdown2{
  height: 80%;
}

.matrics2{
  border: 1px solid black;
  height: 170px;
  margin: 5px -5px;
  width:230px;
}

.ddown2 a{
  color: black;
}

.ddown2 a:hover{
  background: #0c343d;
  color: white;
}

</style>
