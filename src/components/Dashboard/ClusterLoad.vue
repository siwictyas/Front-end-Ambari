<template>
<div>
    <b-col cols="12" class="mt-2 mb-2" id="header-metrics"> Cluster Load
        <b-nav-item-dropdown class="ddown2" no-caret>
        <template slot="button-content"> &#x22EE; </template>
            <b-dropdown-item> <v-icon name="edit"/> Edit </b-dropdown-item>
            <b-dropdown-item> <v-icon name="trash"/> Delete </b-dropdown-item>
        </b-nav-item-dropdown> 
    </b-col>
    <line-example 
        :options="{responsive: false, maintainAspectRatio: false}"
        :height=300>
    </line-example>
</div>
</template>

<script>
import LineExample from './ClusterLoadChart.js'

export default {
  name: 'apps',
  components: {
    LineExample
  }
}
</script>

