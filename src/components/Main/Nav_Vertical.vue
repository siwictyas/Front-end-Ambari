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
        <b-dropdown-item style="color:black"> <v-icon name="plus" color="black"/> Add Service </b-dropdown-item>
        <b-dropdown-item style="color:black"> <v-icon name="caret-right" color="black"/> Start All </b-dropdown-item>
        <b-dropdown-item style="color:black"> <v-icon name="stop" color="black"/> Stop All </b-dropdown-item>
        <b-dropdown-item style="color:black"> <v-icon name="refresh" color="black"/> Restart All Required </b-dropdown-item>
        <b-dropdown-item style="color:black"> <v-icon name="download" color="black"/> Download All Client Configs </b-dropdown-item>
      </b-nav-item-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12"><b-collapse id="collapseA"> <b-nav-item> <v-icon name="check-circle" color="#38761d"/> HDFS </b-nav-item> </b-collapse></b-col>
      <b-col lg="12"><b-collapse id="collapseA" class="mt-2"> <b-nav-item> <v-icon name="check-circle" color="#38761d"/> YARN </b-nav-item> </b-collapse></b-col>
      <b-col lg="12"><b-collapse id="collapseA" class="mt-2"> <b-nav-item> <v-icon name="check-circle" color="#38761d"/> MapReduce2 </b-nav-item> </b-collapse></b-col>
      <b-col lg="12"><b-collapse id="collapseA" class="mt-2"> <b-nav-item> <v-icon name="check-circle" color="#38761d"/> ZooKeeper </b-nav-item> </b-collapse></b-col>
      <b-col lg="12"><b-collapse id="collapseA" class="mt-2"> <b-nav-item> <v-icon name="check-circle" color="#38761d"/> Infra Solr </b-nav-item> </b-collapse></b-col>
      <b-col lg="12"><b-collapse id="collapseA" class="mt-2"> <b-nav-item> <v-icon name="check-circle" color="#38761d"/> Ambari Metrics </b-nav-item> </b-collapse></b-col>
    </b-row>
    
    <b-nav-item style="margin-top:-15px">Hosts</b-nav-item>
    <b-nav-item>Alerts</b-nav-item>
    <b-nav-item v-b-toggle.collapseB >Cluster Admin</b-nav-item>
    <b-collapse id="collapseB" class="mt-2"> <b-nav-item> - Stack and Versions </b-nav-item> </b-collapse>
    <b-collapse id="collapseB" class="mt-2"> <b-nav-item> - Service Accounts </b-nav-item> </b-collapse>
    <b-collapse id="collapseB" class="mt-2"> <b-nav-item> - Kerberos </b-nav-item> </b-collapse>
    <b-collapse id="collapseB" class="mt-2"> <b-nav-item> - Service Auto Start </b-nav-item> </b-collapse>
  </b-nav>
</template>

<script>
export default {
    
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

#icon a:hover{
  width: 100%;
}


</style>

