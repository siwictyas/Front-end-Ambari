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
          <b-card header="YARN">
            <p> Host Disk Space Used (%) </p>
            <b-container id="borderProgress" class="p-3">
              <p> Default Track </p>
              <div v-if="value[0] >= 0 && value[0] <= 20">
                <b-progress style="background-color:#00ffff"> </b-progress>
              </div>
              <div v-else-if="value[0]>20 && value[0] <=40">
                <b-progress style="background-color:#009e0f"> </b-progress>
              </div>
              <div v-else-if="value[0]>40 && value[0] <=60">
                <b-progress style="background-color:yellow"> </b-progress>
              </div>
              <div v-else-if="value[0]>60 && value[0] <=80">
                <b-progress style="background-color:orange"> </b-progress>
              </div>
              <div v-else-if="value[0]>80 && value[0] <=100">
                <b-progress style="background-color:#e06666"> </b-progress>
              </div>
              <div v-else-if="value[0]==='Invalid Data'">
                <b-progress style="background-image=url('http://www.silhcdn.com/3/i/shapes/lg/3/9/d139793.jpg'); background-size:cover"> </b-progress>
              </div>
              <div v-else-if="value[0]==='Not Available'">
                <b-progress style="background-color:black"> </b-progress>
              </div>
              <div v-else-if="value[0]==='Not Applicable'">
                <b-progress style="background-color:lightgrey"> </b-progress>
              </div>
            </b-container>

            <p class="mt-3"> Host CPU WAIT IO (%) </p>
            <b-container id="borderProgress" class="p-3">
              <p> Default Track </p>
              <div v-if="value[1] >= 0 && value[1] <= 20">
                <b-progress style="background-color:#00ffff"> </b-progress>
              </div>
              <div v-else-if="value[1]>20 && value[1] <=40">
                <b-progress style="background-color:#009e0f"> </b-progress>
              </div>
              <div v-else-if="value[1]>40 && value[1] <=60">
                <b-progress style="background-color:yellow"> </b-progress>
              </div>
              <div v-else-if="value[1]>60 && value[1] <=80">
                <b-progress style="background-color:orange"> </b-progress>
              </div>
              <div v-else-if="value[1]>80 && value[1] <=100">
                <b-progress style="background-color:#e06666"> </b-progress>
              </div>
              <div v-else-if="value[1]==='Invalid Data'">
                <b-progress style="background-image=url('http://www.silhcdn.com/3/i/shapes/lg/3/9/d139793.jpg'); background-size:cover"></b-progress>
              </div>
              <div v-else-if="value[1]==='Not Available'">
                <b-progress style="background-color:black"> </b-progress>
              </div>
              <div v-else-if="value[1]==='Not Applicable'">
                <b-progress style="background-color:lightgrey"> </b-progress>
              </div>
            </b-container>

            <p class="mt-3"> Host CPU WAIT IO (%) </p>
            <b-container id="borderProgress" class="p-3">
              <p> Default Track </p>
              <div v-if="value[2] >= 0 && value[2] <= 20">
                <b-progress style="background-color:#00ffff"> </b-progress>
              </div>
              <div v-else-if="value[2]>20 && value[2] <=40">
                <b-progress style="background-color:#009e0f"> </b-progress>
              </div>
              <div v-else-if="value[2]>40 && value[2] <=60">
                <b-progress style="background-color:yellow"> </b-progress>
              </div>
              <div v-else-if="value[2]>60 && value[2] <=80">
                <b-progress style="background-color:orange"> </b-progress>
              </div>
              <div v-else-if="value[2]>80 && value[2] <=100">
                <b-progress style="background-color:#e06666"> </b-progress>
              </div>
              <div v-else-if="value[2]==='Invalid Data'">
                <b-progress style="background-image: url('https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0567/6689/rshark_19_shop_preview.jpg'); background-repeat:repeat"> </b-progress>
              </div>
              <div v-else-if="value[2]==='Not Available'">
                <b-progress style="background-color:black"> </b-progress>
              </div>
              <div v-else-if="value[2]==='Not Applicable'">
                <b-progress style="background-color:lightgrey"> </b-progress>
              </div>
            </b-container>
          </b-card>

          <Progress/>
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
      value:[75, 32.5,'Invalid Data'],
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
