<template>
  <b-nav vertical id="navvertical">
    <b-nav-item active>Dashboard</b-nav-item>
    <b-row>
      <b-col lg="9" style="text-align:left">
      <b-nav-item v-b-toggle.collapseA>
        Services </b-nav-item> </b-col>
      <!-- <v-icon name="angle-down" color="#76a5af" style="margin-left:180px"/> -->
      <b-col lg="2">
      <b-nav-item-dropdown size="sm" id="icon" no-caret>
      <template slot="button-content"> &#x22EE; <span class="sr-only"> </span> </template>
        <b-dropdown-item style="color:black">
          <b-row>
            <b-col lg="1">
              <v-icon name="plus" color="black"/>
            </b-col>
            <b-col lg="6">
              Service
            </b-col>
           </b-row>
          </b-dropdown-item>
        <b-dropdown-item style="color:black">
          <b-row>
            <b-col lg="1">          
              <v-icon name="caret-right" color="black"/>
            </b-col>
            <b-col lg="6">
              All
            </b-col>
          </b-row>
        </b-dropdown-item>
        <b-dropdown-item style="color:black">
          <b-row>
            <b-col lg="1">
              <v-icon name="stop" color="black"/>
            </b-col>
            <b-col lg="6">
              Stop All
            </b-col>
          </b-row>
        </b-dropdown-item>
        <b-dropdown-item style="color:black">
          <b-row>
            <b-col lg="1">
              <v-icon name="reply" color="black"/>
            </b-col>
            <b-col>
              All Required
            </b-col>
          </b-row>
        </b-dropdown-item>
        <b-dropdown-item style="color:black">
          <b-row>
            <b-col lg="1">
              <v-icon name="download" color="black"/>
            </b-col>
            <b-col lg="6">
              All Client Configs
            </b-col>
          </b-row>
        </b-dropdown-item>
      </b-nav-item-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <div v-for="collapseA in collapsesA">
        <b-col lg="12">
          <b-collapse id="collapseA">
            <b-nav-item>
              <v-icon name="check-circle" color="#38761d"/>
              {{collapseA.text}}
            </b-nav-item>
          </b-collapse>
        </b-col>
      </div>
    </b-row>
    <b-nav-item>Hosts</b-nav-item>
    <b-nav-item>Alerts</b-nav-item>
    <b-nav-item v-b-toggle.collapseB >Cluster Admin</b-nav-item>
    <div v-for="collapseB in collapsesB">
        <b-collapse id="collapseB">
          <b-nav-item>
            - {{collapseB.text}}
          </b-nav-item>
        </b-collapse>
      </b-col>
    </div>
  </b-nav>
</template>

<script>
export default {
    data(){
      return{
        collapsesA:[
          {text:'HDFS'},
          {text:'YARN'},
          {text:'MapReduce2'},
          {text:'ZooKeeper'},
          {text:'Infra Solr'},
          {text:'Ambari Metrics'},
        ],
        collapsesB:[
          {text:'Stack and Versions'},
          {text:'Service Accounts'},
          {text:'Kerberos'},
          {text:'Service Auto Start'}
        ]
      }
    }
}
</script>

<style>

#navvertical a {
  color: white;
  text-align: left;
   width: 300px;
}

#navvertical a:hover {
  background: rgba(36, 66, 73, 0.658);
  border-block-end: 1px solid #76a5af;
}

#navvertical a.active{
  background: #76a5af;
}

#navvertical{
  background-color:#0c343d;
  color: white;
}

#navvertical li{
  height: 45px;
}

#collapseA, #collapseB{
  text-align: left;
  margin-left:5%;
}


#collapseA a:hover, #collapseB a:hover{
  width:250px;
}

#icon a{
  width: 195px;
}

#icon a:hover{
  width: 100%;
  background: rgba(36, 66, 73, 0.2);
}


</style>

