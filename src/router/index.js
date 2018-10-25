import Vue from 'vue'
import Router from 'vue-router'
import Nav_Menu from '@/components/Main/Nav_Menu'
import Operations from '@/components/Main/Operations'
import Notification from '@/components/Main/Notification'
import Nav_Vertical from '@/components/Main/Nav_Vertical'
import Nav_Metrics from '@/components/Main/Nav_Metrics'
import Dashboard from '@/components/Dashboard'
import Heatmaps_Host from '@/components/Heatmaps_Host'
import Heatmaps_HDFS from '@/components/Heatmaps_HDFS'
import Heatmaps_Yarn from '@/components/Heatmaps_Yarn'
import ConfigHist from '@/components/ConfigHist'
import Metrics from '@/components/Metrics'
import Header_Metrics from '@/components/Dashboard/Header_Metrics'
import ClusterLoad from '@/components/Dashboard/ClusterLoad'
import CPUusg from '@/components/Dashboard/CPUusg'
import HDFS from '@/components/Dashboard/HDFS'
import heap from '@/components/Dashboard/heap'
import heapmodal from '@/components/Dashboard/heapmodal'
import Memoryusg from '@/components/Dashboard/Memoryusg'
import NameNodeCPU from '@/components/Dashboard/NameNodeCPU'
import NameNodeRPC from '@/components/Dashboard/NameNodeRPC'
import NameNodeUptime from '@/components/Dashboard/NameNodeUptime'
import networkusg from '@/components/Dashboard/networkusg'
import ResourceHeap from '@/components/Dashboard/ResourceHeap'
import ResourceUptime from '@/components/Dashboard/ResourceUptime'
import YARNMemory from '@/components/Dashboard/YARNMemory'
import PieChart from '@/components/Dashboard/PieChart'
import LineChart from '@/components/Dashboard/LineChart'
import coba from '@/components/coba'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Heatmaps_Host',
      name: 'Heatmaps_Host',
      component: Heatmaps_Host
    },
    {
      path: '/Heatmaps_HDFS',
      name: 'Heatmaps_HDFS',
      component: Heatmaps_HDFS
    },
    {
      path: '/Heatmaps_Yarn',
      name: 'Heatmaps_Yarn',
      component: Heatmaps_Yarn
    },
    {
      path: '/ConfigHist',
      name: 'ConfigHist',
      component: ConfigHist
    },
    {
      path: '/Nav_Menu',
      name: 'Nav_Menu',
      component: Nav_Menu
    },
    {
      path: '/Operations',
      name: 'Operations',
      component: Operations
    },
    {
      path: '/Notification',
      name: 'Notification',
      component: Notification
    },
    {
      path: '/Nav_Vertical',
      name: 'Nav_Vertical',
      component: Nav_Vertical
    },
    {
      path: '/Nav_Metrics',
      name: 'Nav_Metrics',
      component: Nav_Metrics
    },
    {
      path: '/Header_Metrics',
      name: 'Header_Metrics',
      component: Header_Metrics
    },
    {
      path: '/networkusg',
      name: 'networkusg',
      component: networkusg
    },
    {
      path: '/LineChart',
      name: 'LineChart',
      component: LineChart
    },
    {
      path: '/heap',
      name: 'heap',
      component: heap
    },
    {
      path: '/heapmodal',
      name: 'heapmodal',
      component: heapmodal
    },
    {
      path: '/ClusterLoad',
      name: 'ClusterLoad',
      component: ClusterLoad
    },
    {
      path: '/CPUusg',
      name: 'CPUusg',
      component: CPUusg
    },
    {
      path: '/HDFS',
      name: 'HDFS',
      component: HDFS
    },
    {
      path: '/Memoryusg',
      name: 'Memoryusg',
      component: Memoryusg
    },
    {
      path: '/NameNodeCPU',
      name: 'NameNodeCPU',
      component: NameNodeCPU
    },
    {
      path: '/NameNodeRPC',
      name: 'NameNodeRPC',
      component: NameNodeRPC
    },
    {
      path: '/NameNodeUptime',
      name: 'NameNodeUptime',
      component: NameNodeUptime
    },
    {
      path: '/networkusg',
      name: 'networkusg',
      component: networkusg
    },
    {
      path: '/ResourceHeap',
      name: 'ResourceHeap',
      component: ResourceHeap
    },
    {
      path: '/ResourceUptime',
      name: 'ResourceUptime',
      component: ResourceUptime
    },
    {
      path: '/YARNMemory',
      name: 'YARNMemory',
      component: YARNMemory
    },
    {
      path: '/PieChart',
      name: 'PieChart',
      component: PieChart
    },
    {
      path: '/coba',
      name: 'coba',
      component: coba
    },
    {
      path: '/Metrics',
      name: 'Metrics',
      component: Metrics
    }

  ]
})
