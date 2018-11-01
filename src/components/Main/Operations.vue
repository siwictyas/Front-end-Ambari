<template>
<div>
    <b-row class="mt-3">
        <b-col lg="7">
            <b-row>
                <h3> BACKGROUND OPERATIONS </h3>
            </b-row>
            <b-row>
                <p style="color:#2b78e4"> 1 Background Operations Running </p>
            </b-row>
        </b-col>
        <b-col lg="3" offset-md="2">
            <b-form-select v-model="selected" :options="options" class="mb-3"/>
        </b-col>
    </b-row>
    <b-row>
        <!-- <div v-if="selected==='pending'">
            <p> Hai </p>
        </div> -->
        <b-table hover :items="items" :fields="fields" :status="status" class="mt-4 ml-2" style="text-align:justify">
            <template slot="operations" slot-scope="data">
                <div v-if="data.item.status==='Success'">
                    <v-icon name="check" color="green"/>
                    {{data.item.operations}}
                </div>
                <div v-else-if="data.item.status==='In Progress'">
                    <v-icon name="spinner" color="blue"/>
                    {{data.item.operations}}
                </div>
                <div v-else-if="data.item.status==='Failed'">
                    <v-icon name="times-circle" color="red"/>
                    {{data.item.operations}}
                </div>              
                <div v-else-if="data.item.status==='Pending'">
                    <v-icon name="clock-o" color="orange"/>
                    {{data.item.operations}}
                </div>    
                <div v-else-if="data.item.status==='Timed Out'">
                    <v-icon name="exclamation-triangle" color="black"/>
                    {{data.item.operations}}
                </div>  
                <div v-else-if="data.item.status==='Aborted'">
                    <v-icon name="minus-circle" color="gray"/>
                    {{data.item.operations}}
                </div> 
            </template>
            <template slot="status" slot-scope="data">
                <div v-if="data.item.status==='Success'">
                    <b-progress style="width:150px" :max="100" variant="success" height="20px">
                        <b-progress-bar :value="100"> Success </b-progress-bar>
                    </b-progress>
                </div>
                <div v-else-if="data.item.status==='In Progress'">
                    <b-progress style="width:150px" variant="primer" height="20px">
                        <b-progress-bar :value="50" :striped="true" :animated="true"> In Progress </b-progress-bar>
                    </b-progress>
                </div>
                <div v-else-if="data.item.status==='Failed'">
                    <b-progress style="width:150px" variant="danger" height="20px">
                        <b-progress-bar :value="100"> Failed </b-progress-bar>
                    </b-progress>
                </div>
                <div v-else-if="data.item.status==='Pending'">
                    <b-progress style="width:150px" variant="warning" height="20px">
                        <b-progress-bar :value="100"> Pending </b-progress-bar>
                    </b-progress>
                </div>    
                <div v-else-if="data.item.status==='Aborted'">
                    <b-progress style="width:150px" variant="secondary" height="20px">
                        <b-progress-bar :value="100"> Aborted </b-progress-bar>
                    </b-progress>
                </div>  
                <div v-else-if="data.item.status==='Timed Out'">
                    <b-progress style="width:150px" variant="dark" height="20px">
                        <b-progress-bar :value="100"> Timed Out </b-progress-bar>
                    </b-progress>
                </div>                            
            </template>
        </b-table>
    </b-row>
</div>
</template>

<script>

export default {
    data () {
    return {
      fields: [ 'operations', 'status', 'user', 'start_time', 'durations' ],
      items: [
        { operations: 'Start All Service',  user: 'admin', start_time : 'Fri, Sep 07 2018, 15:11', durations: '1h 5m 20s', status:'Success'},
        { operations: 'Stop All Service', user: 'admin', start_time : 'Fri, Sep 07 2018, 19:00', durations: '20m 5s',status:'Timed Out'},
        { operations: 'Stop Ifra Solr', user: 'admin', start_time : 'Wed, Sep 19 2018, 16:30', durations: '15m 22s', status:'Aborted'},
        { operations: 'Start Ambari Metrics', user: 'admin', start_time : 'Mon, Sep 25 2018, 13:11', durations: '2m 40s', status:'In Progress'},
        { operations: 'Start Infra Solr', user: 'admin', start_time : 'Wed, Sep 19 2018, 12:30', durations: '3m',status:'Failed'},
        { operations: 'Stop Ambari Metrics', user: 'admin', start_time : 'Mon, Sep 25 2018, 18:00', durations: '12s',status:'Success'},        
      ],
     selected: 'all', //ini buat mana yg teratas. liat value di option
      options: [
        { value: 'all', text: 'All' },
        { value: 'pending', text: 'Pending' },
        { value: 'progress', text: 'Progress' },
        { value: 'failed', text: 'Failed' },
        { value: 'success', text: 'Success' },
        { value: 'aborted', text: 'Aborted' },
        { value: 'to', text: 'Timed Out' },    
      ],
      max:100,
    }
  }
}
</script>

<style scoped>
h3, p{
    margin-left: 30px;
}
</style>
