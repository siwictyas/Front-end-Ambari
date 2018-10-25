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
              <b-nav id="navmatrics">
                <b-nav-item href="/#/">METRICS</b-nav-item>
                <b-nav-item active>HEATMAPS</b-nav-item> 
                <b-nav-item href="/#/ConfigHist">CONFIG HISTORY</b-nav-item> 
              </b-nav>
            </b-col>
          </b-row>
        </b-container>  
        <Dropdown/>
        <b-container id="cont_heatmaps" class="p-4">
          <b-card header="HOST">
            <p> Host Disk Space Used (%) </p>
            <b-container id="borderProgress" class="p-3">
              <p> Default Track </p>
                <b-progress :value="value[0]" variant="warning"  class="mb-2" show-value></b-progress>                            
            </b-container>

            <p class="mt-3"> Host CPU WAIT IO (%) </p>
            <b-container id="borderProgress" class="p-3">
              <p> Default Track </p>
                <b-progress :value="value[1]" variant="success"  class="mb-2" show-value></b-progress>              
            </b-container>

            <p class="mt-3"> Host CPU WAIT IO (%) </p>
            <b-container id="borderProgress" class="p-3">
              <p> Default Track </p>
                <b-progress :value="value[2]" variant="info"  class="mb-2" show-value></b-progress>
            </b-container>
          </b-card>
        </b-container>
      </b-container>
    </b-col>
    </b-row>
  </div>
</template>

<script>
import Nav_Menu from './Main/Nav_Menu';
import Nav_Vertical from './Main/Nav_Vertical';
import Progress from './Heatmaps/Progress';
import Dropdown from './Heatmaps/Dropdown';
import ProgressBar from 'vue-simple-progress'

export default {
  data () {
    return {
      Nav_Menu,
      Nav_Vertical,
      Progress,
      Dropdown,
      value:[75, 32.5,10],
    }
  },
  components: {
    Nav_Menu,
    Nav_Vertical,
    Progress,
    Dropdown,
    ProgressBar,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.button{
    min-width: 40%;
    background: rgba(247, 249, 249,0.7);
    border: 1px solid gray;
    color: black;
}

.button a.active{
    color:red;
}

.button:hover{
    background: lightgray;
}

p{
    text-align: left;
}

.con1{
  margin-top:3%;
  min-height: 94%;
  width: 97%;
  background:white;
  margin-left:0%;
  padding: 0px;
}

#navmatrics a{
  background: lightgrey;
  color: black;
  margin-left:-20px;
}

#navmatrics a.active{
  background: white;
  color: black;
}

#navmatrics a:hover{
  background: rgba(253, 253, 253, 0.3);
  color: black;
}

.con-nav{
  background: lightgray;
  margin-right:0px;
  margin-left:-5px;
  width: 102%;
}

/* #cont_heatmaps{
    border:1px solid gray;
    width: 96.5%;
} */

#borderProgress{
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
}

</style>
