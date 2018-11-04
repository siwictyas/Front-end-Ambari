<template>
  <div>
    <Nav_Menu/>
    <b-row>
      <b-col sm="3">
        <Nav_Vertical/>
      </b-col>
      <b-col sm="9" style="background-color:lightgrey">
        <b-container class="con-main">
          <b-nav id="navmetrics" class="mt-4">
            <b-nav-item href="/#/">METRICS</b-nav-item>
            <b-nav-item active href="/#/Heatmaps_Host">HEATMAPS</b-nav-item> 
            <b-nav-item href="/#/ConfigHist">CONFIG HISTORY</b-nav-item> 
          </b-nav>
          <Nav_Metrics/>
          <Dropdown/>
          <b-container id="cont_heatmaps" class="p-4">
            <b-card header="HDFS" header-class="header">
              <div v-for="bar in bars" class="mb-1">
                <p> <b> {{bar.text}} </b> </p>
                <b-container id="borderProgress" class="p-3 mb-3">
                  <p> Default Track </p>
                  <b-progress height=30px style="border:1px solid #CBCBCB">
                  <b-progress-bar show-progress v-if="bar.data==='Invalid Data'"
                      :value="bar.value"
                      :label="' '+bar.data+bar.size"
                      :size="bar.size"
                      :striped="false"
                      :animated="false"
                      :data="bar.data"
                      variant="secondary"
                      style="color:black; font-weight:bold;"
                    ></b-progress-bar>
                      <b-progress-bar show-progress v-else-if="bar.data==='Data Not Available'"
                      :value="bar.value"
                      :label="' '+bar.data+bar.size"
                      :size="bar.size"
                      :striped="true"
                      :animated="false"
                      :data="bar.data"
                      variant="dark"
                      style="color:white; font-weight:bold;"
                    ></b-progress-bar>
                      <b-progress-bar show-progress v-else-if="bar.value>0 && bar.value <=20"
                      :value="bar.value"
                      :label="' '+bar.data+bar.size"
                      :size="bar.size"
                      :striped="true"
                      :animated="true"
                      :data="bar.data"
                      variant="info"
                      style="color:white; font-weight:bold;"
                    ></b-progress-bar>
                      <b-progress-bar show-progress v-else-if="bar.value>20 && bar.value <=40"
                      :value="bar.value"
                      :label="' '+bar.data+bar.size"
                      :size="bar.size"
                      :striped="true"
                      :animated="true"
                      :data="bar.data"
                      variant="success"
                      style="color:white; font-weight:bold;"
                    ></b-progress-bar>
                      <b-progress-bar show-progress v-else-if="bar.value>40 && bar.value <=60"
                      :value="bar.value"
                      :label="' '+bar.data+bar.size"
                      :size="bar.size"
                      :striped="true"
                      :animated="true"
                      :data="bar.data"
                      variant="warning"
                      style="color:white; font-weight:bold;"
                    ></b-progress-bar>
                      <b-progress-bar show-progress v-else-if="bar.value>60 && bar.value <=80"
                      :value="bar.value"
                      :label="' '+bar.data+bar.size"
                      :size="bar.size"
                      :striped="false"
                      :animated="false"
                      :data="bar.data"
                      variant="warning"
                      style="color:white; font-weight:bold;"
                    ></b-progress-bar>
                      <b-progress-bar show-progress v-else-if="bar.value>80 && bar.value <=100"
                      :value="bar.value"
                      :label="' '+bar.data+bar.size"
                      :size="bar.size"
                      :striped="true"
                      :animated="true"
                      :data="bar.data"
                      variant="danger"
                      style="color:white; font-weight:bold;"
                    ></b-progress-bar>
                  </b-progress>
                </b-container>
              </div>
                <b-btn disabled>&lsaquo;</b-btn>
                <b-btn href="/#/Heatmaps_HDFS2">&rsaquo;</b-btn>
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
import Nav_Metrics from './Main/Nav_Metrics';
import Progress from './Heatmaps/Progress';
import Dropdown from './Heatmaps/Dropdown';
import ProgressBar from 'vue-simple-progress'

export default {
  data () {
    return {
      Nav_Menu,
      Nav_Vertical,
      Nav_Metrics,
      Progress,
      Dropdown,
      // value:[75, 32.5,10],
      bars: [
        {variant: 'success', value: (405/1024)*100, data:405, text:"HDFS Bytes Written (MB)", size:" MB used of 1024 MB", striped:true, animated:true},
        {variant: 'secondary', value:100, data:"Data Not Available", text:"DataNode Garbage Collection Time (second)", size:" "},
        {variant: 'success', value: (200/512)*100, data:200, text:"DataNode JVM Heap Memory Used (MB)",size:" MB used of 512 MB", striped:true, animated:true},
        {variant: 'success', value: (450/512)*100, data:450, text:"DataNode JVM Heap Memory Committed (MB)", size:" MB used of 512 MB", striped:true, animated:true},
        
      ],
      timer: null
    }
  },
  components: {
    Nav_Menu,
    Nav_Vertical,
    Nav_Metrics,
    Progress,
    Dropdown,
    ProgressBar,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

#borderProgress{
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
}

.header{
  font-weight: bold;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
