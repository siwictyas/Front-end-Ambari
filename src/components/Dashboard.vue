<template>
  <div>
    <Nav_Menu/>
    <b-row>
      <b-col lg="3">
        <Nav_Vertical/>
      </b-col>
      <b-col style="background-color:lightgrey">
        <b-container class="con-main pb-3">
          <b-nav id="navmetrics" class="mt-4">
            <Nav_Metrics/>
            <b-nav-item active>METRICS</b-nav-item>
            <b-nav-item href="/#/Heatmaps_Host">HEATMAPS</b-nav-item> 
            <b-nav-item href="/#/ConfigHist">CONFIG HISTORY</b-nav-item> 
            <b-col lg="4" offset-md="3">
              <div class="ddown-metrics">
                <b-nav class="nav-dd">
                <b-nav-item-dropdown right split text="Matriks Action" size="sm" class="dd_action">
                  <b-dropdown-item style="background-color:white"> <v-icon name="plus"/> Add Service</b-dropdown-item>
                  <b-dropdown-item style="background-color:white"> <v-icon name="edit"/> Edit</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown right split text="Last Hour" size="sm" class="dd_lasthour">
                  <div v-for="hour in hours" class="mb-1">
                    <b-dropdown-item style="background-color:white">
                      {{hour.text}}
                    </b-dropdown-item>  
                  </div>
                </b-nav-item-dropdown>
                </b-nav>
              </div>
            </b-col>
          </b-nav>
        <!-- Metrics -->
          <b-container class="con1">
            <b-container class="metrics">
              <Metrics/>
            </b-container>        
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
      hours:[
        { text: "Last 1 Hour"},
        { text: "Last 2 Hour"},
        { text: "Last 4 Hour"},
        { text: "Last 12 Hour"},
        { text: "Last 24 Hour"},
        { text: "Last 1 Week"},
        { text: "Last 1 Month"},
        { text: "Last 1 Year"},        
      ]
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
  background:white;
}

.dropdown2{
  height: 80%;
}

dd_lasthour a{
  color: black;
  background: white;
}

</style>