<template>
  <div>
    <Nav_Menu/>
    <b-row>
    <b-col sm="3">
      <Nav_Vertical/>
    </b-col>
    <b-col sm="9" style="background-color:lightgrey" class="pb-3">
      <b-container class="con1">
        <b-container class="con-nav">
          <b-row align-h="between">
            <b-col lg="6">
              <Nav_Metrics/>
            </b-col>
          </b-row>
        </b-container>
        <b-container class="metrics">

          <b-input-group>
            <b-form-input v-model="filter" id="search" class="m-3" placeholder="Type to Search" />
          </b-input-group>

          <b-table show-empty responsive :items="items" :fields="fields" :filter="filter">   
          <template slot="HEAD_Service" slot-scope="row">
          <b-row>
            <b-col>
              <p style="text-align:left" class="mb-2"> Service </p>
                <b-form-select v-model="select">
                <template slot="first">
                  <option :value="S_All"> All </option>
                </template>
                  <option value="HDFS"> HDFS </option>
                  <option value="YARN"> YARN </option>
                  <option value="MapReduce2"> MapReduce2 </option>
                  <option value="AmbariMetrics"> Ambari Metrics </option>
                  <option value="ZooKeeper"> ZooKeeper </option>
                  <option value="InfraSolr"> Infra Solr </option>
                  <option value="Kerberos"> Kerberos </option>  
                </b-form-select>  
            </b-col>
          </b-row>
          </template> 
          <template slot="HEAD_Config Group" slot-scope="row">
          <b-row>       
            <b-col>
              <p style="text-align:left" class="mb-2"> Config Group </p>
                <b-form-select v-model="select">
                <template slot="first">
                  <option :value="CG_All"> All </option>
                </template>
                  <option value="Default"> Default </option>            
                </b-form-select>
            </b-col>
          </b-row>
          </template>
          <template slot="HEAD_Created" slot-scope="row">
          <b-row>          
            <b-col>
              <p style="text-align : left" class="mb-2"> Created </p>
              <b-form-select v-model="select">
              <template slot="first">
                <option :value="C_All"> All </option>
              </template>
                <option value="1h"> Past 1 Hour </option>
                <option value="1d"> Past 1 Day </option>
                <option value="2d"> Past 2 Days </option>
                <option value="7d"> Past 7 Days </option>
                <option value="14d"> Past 14 Days </option>
                <option value="30d"> Past 30 Days </option>            
              </b-form-select>
            </b-col>
          </b-row>
          </template>
          <template slot="HEAD_Author" slot-scope="row">
          <b-row>  
            <b-col>
              <p style="text-align : left" class="mb-2"> Author </p>
              <b-form-select v-model="select">
                <option :value="A_All"> All </option>
                <option value="admin"> Admin </option>         
              </b-form-select>
            </b-col>
          </b-row>
          </template>
          <template slot="HEAD_Notes" slot-scope="row">
          <b-row>  
            <b-col>
              <p style="text-align : left" class="mb-2 mt-3"> Notes </p>
              <b-form-select v-model="select">
                <option :value="N_All"> All </option>
                <option value="initial_ambari"> Initial Configration for Ambari Metrics </option>
                <option value="initial_yarn"> Initial Configration for YARN </option>
                <option value="initial_hdfs"> Initial Configration for HDFS </option>
                <option value="initial_map"> Initial Configration for MapReduce2 </option>
                <option value="initial_zookeeper"> Initial Configration for ZooKeeper </option>
                <option value="initial_infra"> Initial Configration for Infra Solr </option>            
              </b-form-select>
            </b-col>
          </b-row>
          </template>
          </b-table>                
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
  margin-right: -70px;
}

p{
  color: black;
}

#search{
  border: 1px solid grey;
}
</style>
