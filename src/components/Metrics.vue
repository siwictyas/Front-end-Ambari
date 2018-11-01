<template>
  <div>
      <b-container fluid class="metrics">
      <b-row class="mt-2">
        <b-col cols="3"> <b-container v-b-modal.modal-center fluid class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <heap/>
            </b-col>
          </b-row>
           <b-modal id="modal-center" centered title="NameNode Heap">
            <heapmodal/>
          </b-modal>
        </b-container> </b-col>
       
       <b-col cols="3"> <b-container v-b-modal.modal-center2 class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <networkusg/>
            </b-col>
          </b-row>
            <b-modal id="modal-center2" centered title="Network Usage" size="lg">
              <networkusgmodal/>
            </b-modal>
        </b-container> </b-col>

        <b-col cols="3"> <b-container v-b-modal.modal-center3 class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <HDFS/>
            </b-col>
          </b-row>
          <b-modal id="modal-center3" centered title="HDFS Disk Usage">
            <HDFSmodal/>
          </b-modal>
        </b-container> </b-col>

        <b-col cols="3"> <b-container v-b-modal.modal-center4 class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <ClusterLoad/>
            </b-col>
          </b-row>
          <b-modal id="modal-center4" centered title="Cluster Load"  size="lg">
            <ClusterLoadmodal/>
          </b-modal>            
        </b-container> </b-col>

        <b-col cols="3"> <b-container v-b-modal.modal-center5 class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <NameNodeCPU/>
            </b-col>
          </b-row>  
          <b-modal id="modal-center5" centered title="NameNode CPU WIO">
            <NameNodeCPUmodal/>
          </b-modal>          
        </b-container> </b-col>

        <b-col cols="3"> <b-container v-b-modal.modal-center6 class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <ResourceHeap/>
            </b-col>
          </b-row>  
          <b-modal id="modal-center6" centered title="ResourceManager Heap">
            <ResourceHeapmodal/>
          </b-modal> 
        </b-container> </b-col>

        <b-col cols="3"> <b-container v-b-modal.modal-center7 class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <CPUusg/>
            </b-col>
          </b-row>
          <b-modal id="modal-center7" centered title="CPU Usage" size="lg">
            <CPUusgmodal/>
          </b-modal>    
        </b-container> </b-col>

        <b-col cols="3"> <b-container v-b-modal.modal-center8 class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <Memoryusg/>
            </b-col>
          </b-row>
          <b-modal id="modal-center8" centered title="Memory Usage" size="lg">
            <Memoryusgmodal/>
          </b-modal>   
        </b-container> </b-col>

        <b-col cols="3"> <b-container v-b-modal.modal-center9 class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <NameNodeUptime/>
            </b-col>
          </b-row>
          <b-modal id="modal-center9" centered title="NameNode Uptime">
            <NameNodeUptimemodal/>
          </b-modal>  
        </b-container> </b-col>

        <b-col cols="3"> <b-container b-container v-b-modal.modal-center10 class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <ResourceUptime/>
            </b-col>
          </b-row>
          <b-modal id="modal-center10" centered title="ResourceManager Uptime">
            <ResourceUptimemodal/>
          </b-modal>  
        </b-container> </b-col>

        <b-col cols="3"> <b-container v-b-modal.modal-center11 class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <YARNMemory/>
            </b-col>
          </b-row> 
          <b-modal id="modal-center11" centered title="Memory Usage">
            <YARNMemorymodal/>
          </b-modal> 
        </b-container> </b-col>

        <b-col cols="3"> <b-container v-b-modal.modal-center12 class="metrics2"> 
          <b-row>
            <b-col cols="12">
              <NameNodeRPC/>
            </b-col>
          </b-row>
          <b-modal id="modal-center12" centered title="NameNode RPC">
            <NameNodeRPCmodal/>
          </b-modal>   
        </b-container> </b-col>
      </b-row>
      </b-container>
  </div>
</template>

<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
import networkusg from './Dashboard/networkusg';
import networkusgmodal from './Dashboard/networkusgmodal';
import heap from './Dashboard/heap';
import heapmodal from './Dashboard/heapmodal';
import HDFS from './Dashboard/HDFS';
import HDFSmodal from './Dashboard/HDFSmodal';
import ClusterLoad from './Dashboard/ClusterLoad'
import ClusterLoadmodal from './Dashboard/ClusterLoadmodal';
import CPUusg from './Dashboard/CPUusg'
import CPUusgmodal from './Dashboard/CPUusgmodal';
import Memoryusg from './Dashboard/Memoryusg'
import Memoryusgmodal from './Dashboard/Memoryusgmodal'
import NameNodeCPU from './Dashboard/NameNodeCPU'
import NameNodeCPUmodal from './Dashboard/NameNodeCPUmodal'
import NameNodeRPC from './Dashboard/NameNodeRPC'
import NameNodeRPCmodal from './Dashboard/NameNodeRPCmodal'
import NameNodeUptime from './Dashboard/NameNodeUptime'
import NameNodeUptimemodal from './Dashboard/NameNodeUptimemodal'
import ResourceHeap from './Dashboard/ResourceHeap'
import ResourceHeapmodal from './Dashboard/ResourceHeapmodal'
import ResourceUptime from './Dashboard/ResourceUptime'
import ResourceUptimemodal from './Dashboard/ResourceUptimemodal'
import YARNMemory from './Dashboard/YARNMemory'
import YARNMemorymodal from './Dashboard/YARNMemorymodal'
import Header_Metrics from './Dashboard/Header_Metrics'

export default {
  name: 'Metrics',
    data () {
    return {
      networkusg,
      networkusgmodal,
      heap,
      heapmodal,
      HDFS,
      HDFSmodal,
      ClusterLoad,
      ClusterLoadmodal,      
      CPUusg,
      CPUusgmodal,      
      Memoryusg,
      Memoryusgmodal,      
      NameNodeCPU,
      NameNodeCPUmodal,      
      NameNodeRPC,
      NameNodeRPCmodal,      
      NameNodeUptime,
      NameNodeUptimemodal,      
      ResourceHeap,
      ResourceHeapmodal,      
      ResourceUptime,
      ResourceUptimemodal,      
      YARNMemory,
      YARNMemorymodal,      
    }
  },
  components: {
    networkusg,
    networkusgmodal,
    heap,
    heapmodal,
    HDFS,
    HDFSmodal,
    ClusterLoad,
    ClusterLoadmodal,    
    CPUusg,
    CPUusgmodal,    
    Memoryusg,
    Memoryusgmodal,    
    NameNodeCPU,
    NameNodeCPUmodal,    
    NameNodeRPC,
    NameNodeRPCmodal,    
    NameNodeUptime,
    NameNodeUptimemodal,    
    ResourceHeap,
    ResourceHeapmodal,    
    ResourceUptime,
    ResourceUptimemodal,    
    YARNMemory,
    YARNMemorymodal,    
    Header_Metrics,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.metrics2{
  border: 1px solid lightgray;
  border-radius: 15px;
  padding-bottom: 10px;
  width: 220px;
  height: 190px;
  margin: 5px 0px;
  box-shadow: 2px -2px 2px 2px whitesmoke;
}
</style>
