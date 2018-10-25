<template>
  <div>
      <b-container fluid class="metrics">
      <b-row class="mt-2">
        <b-col cols="3"> <b-container v-b-modal.modal-center fluid class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <heap/>
            </b-col>
          </b-row>
           <b-modal id="modal-center" centered title="NameNode Heap">
            <heapmodal/>
          </b-modal>
        </b-container> </b-col>
       
       <b-col cols="3"> <b-container class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <networkusg/>
            </b-col>
          </b-row>
        </b-container> </b-col>

        <b-col cols="3"> <b-container class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <HDFS/>
            </b-col>
          </b-row>
        </b-container> </b-col>

        <b-col cols="3"> <b-container class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <ClusterLoad/>
            </b-col>
          </b-row>          
        </b-container> </b-col>

        <b-col cols="3"> <b-container class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <NameNodeCPU/>
            </b-col>
          </b-row>          
        </b-container> </b-col>

        <b-col cols="3"> <b-container class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <ResourceHeap/>
            </b-col>
          </b-row>  
        </b-container> </b-col>

        <b-col cols="3"> <b-container class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <CPUusg/>
            </b-col>
          </b-row>  
        </b-container> </b-col>

        <b-col cols="3"> <b-container class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <Memoryusg/>
            </b-col>
          </b-row>  
        </b-container> </b-col>

        <b-col cols="3"> <b-container class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <NameNodeUptime/>
            </b-col>
          </b-row>  
        </b-container> </b-col>

        <b-col cols="3"> <b-container class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <ResourceUptime/>
            </b-col>
          </b-row>  
        </b-container> </b-col>

        <b-col cols="3"> <b-container class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <YARNMemory/>
            </b-col>
          </b-row>  
        </b-container> </b-col>

        <b-col cols="3"> <b-container class="metrics2"> 
          <b-row>
            <Header_Metrics/>
          </b-row>
          <b-row>
            <b-col cols="12">
              <NameNodeRPC/>
            </b-col>
          </b-row>  
        </b-container> </b-col>
      </b-row>
      </b-container>
  </div>
</template>

<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
import networkusg from './Dashboard/networkusg';
import heap from './Dashboard/heap';
import heapmodal from './Dashboard/heapmodal';
import HDFS from './Dashboard/HDFS';
import ClusterLoad from './Dashboard/ClusterLoad'
import CPUusg from './Dashboard/CPUusg'
import Memoryusg from './Dashboard/Memoryusg'
import NameNodeCPU from './Dashboard/NameNodeCPU'
import NameNodeRPC from './Dashboard/NameNodeRPC'
import NameNodeUptime from './Dashboard/NameNodeUptime'
import ResourceHeap from './Dashboard/ResourceHeap'
import ResourceUptime from './Dashboard/ResourceUptime'
import YARNMemory from './Dashboard/YARNMemory'
import Header_Metrics from './Dashboard/Header_Metrics'

export default {
  name: 'Metrics',
    data () {
    return {
      networkusg,
      heap,
      heapmodal,
      HDFS,
      ClusterLoad,
      CPUusg,
      Memoryusg,
      NameNodeCPU,
      NameNodeRPC,
      NameNodeUptime,
      ResourceHeap,
      ResourceUptime,
      YARNMemory,
    }
  },
  components: {
    networkusg,
    heap,
    heapmodal,
    HDFS,
    ClusterLoad,
    CPUusg,
    Memoryusg,
    NameNodeCPU,
    NameNodeRPC,
    NameNodeUptime,
    ResourceHeap,
    ResourceUptime,
    YARNMemory,
    Header_Metrics,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.metrics2{
  border: 1px solid black;
  height: 170px;
  margin: 5px -5px;
  width:230px;
  font-size: 85%;
}
</style>
