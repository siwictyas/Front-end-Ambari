<template>
  <div>
    <Nav_Menu/>
    <b-row>
      <b-col sm="3">
        <Nav_Vertical/>
      </b-col>
      <b-col sm="9" style="background-color:lightgrey" class="pb-3">
        <b-container class="con-main">
          <b-nav id="navmetrics" class="mt-4">
            <b-nav-item href="/#/">METRICS</b-nav-item>
            <b-nav-item href="/#/Heatmaps_Host">HEATMAPS</b-nav-item> 
            <b-nav-item active href="/#/ConfigHist">CONFIG HISTORY</b-nav-item> 
          </b-nav>
          <Nav_Metrics/>
          <b-container class="metrics">
            <b-input-group>
              <b-form-input v-model="filter" id="search" :state="true" class="m-3" placeholder="Type to Search" />
            </b-input-group>
              <b-table show-empty responsive :items="items" :fields="fields" :filter="filter" hover style="text-align:left">   </b-table>                
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

const items = [
  { service: 'YARN', config: 'Default', created:'Fri, Sep 07 2018, 15:11', author:'Admin', notes: 'Initial' },
  { service: 'HDFS', config: 'Default', created:'Fri, Sep 07 2018, 15:11', author:'Admin', notes: 'Initial FOR' },
  { service: 'MapReduce2', config : 'Default', created: 'Fri, Sep 07 2018, 15:11', author:'Admin', notes:'Initial Configuration for '},
  { service: 'Zookeeper', config : 'Default', created: 'Fri, Sep 07 2018, 15:11', author:'Admin', notes:'Initial Configuration for '},  
  { service: 'InfraSolr', config : 'Default', created: 'Fri, Sep 07 2018, 15:39', author:'Admin', notes:'Initial Configuration for Solr'},  
  { service: 'HDFS', config : 'Default', created: 'Fri, Sep 07 2018, 15:45', author:'Admin', notes:'-'},
  { service: 'MapReduce2', config : 'Default', created: 'Fri, Sep 07 2018, 15:45', author:'Admin', notes:'-'},      
  { service: 'YARN', config : 'Default', created: 'Fri, Sep 07 2018, 15:45', author:'Admin', notes:'-'},  
  { service: 'Ambari Metrics', config : 'Default', created: 'Fri, Sep 07 2018, 15:45', author:'Admin', notes:'-'},  
  { service: 'HDFS', config : 'Default', created: 'Fri, Sep 07 2018, 15:45', author:'Admin', notes:'-'},  
    
]

export default {
  data () {
    return {
      items: items,
      fields: [
        { key: 'service', label: 'Service', sortable: true, sortDirection: 'desc' },
        { key: 'config', label: 'Config Group', sortable: true, 'class': 'text-center' },
        { key: 'created', label: 'Created', sortable:true},
        { key: 'author', label: 'Author', sortable:true },
        { key: 'notes', label: 'Notes', sortable:true }        
      ],
      totalRows: items.length,
      filter: null,
    }
  },
  components: {
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
  min-height: 585px;
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
  margin-right: -70px;
}

p{
  color: black;
}

#search{
  border: 1px solid grey;
}
</style>
