<template>
<div>
    <b-row>
        <b-col lg="7">
            <b-row>
                <h3> BACKGROUND OPERATIONS </h3>
            </b-row>
            <b-row>
                <p style="color:#2b78e4"> 1 Background Operations Running </p>
            </b-row>
        </b-col>
        <b-col lg="3" offset-md="2">
            <b-dropdown text="All" variant="light" class="dd">
                <b-dropdown-item> All </b-dropdown-item>
                <b-dropdown-item> Pending </b-dropdown-item>
                <b-dropdown-item> In Progress </b-dropdown-item>
                <b-dropdown-item> Failed </b-dropdown-item>
                <b-dropdown-item> Success </b-dropdown-item>
                <b-dropdown-item> Aborted </b-dropdown-item>
                <b-dropdown-item> Timed Out </b-dropdown-item>
            </b-dropdown>
        </b-col>
    </b-row>
    <b-row>
        <b-table :items="items" :fields="fields" caption-top>
            <template slot="status" slot-scope="row">
                <div v-if="status[0]=== 'Success'">
                    <b-progress style="background-color:#009e0f"> </b-progress>
                </div>
                <div v-if="status[1] === 'Pending'">
                   <vue-simple-progress size="small" :val="20" text="20%"></vue-simple-progress>
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
        { operations: 'Start All Service',  user: 'admin', start_time : 'Fri, Sep 07 2018, 15:11', durations: '1h 5m 20s'},
        { operations:'Stop All Service', user: 'admin', start_time : 'Fri, Sep 07 2018, 19:00', durations: '20m 5s'},
        { operations: 'Stop Ifra Solr', user: 'admin', start_time : 'Wed, Sep 19 2018, 16:30', durations: '15m 22s'},
        { operations: 'Start Ambari Metrics', user: 'admin', start_time : 'Mon, Sep 25 2018, 13:11', durations: '2m 40s'},
        { operations: 'Start Infra Solr', user: 'admin', start_time : 'Wed, Sep 19 2018, 12:30', durations: '3m'},
        { operations: 'Stop Ambari Metrics', user: 'admin', start_time : 'Mon, Sep 25 2018, 18:00', durations: '12s'},        
      ],
      status:['Success',]
    }
  }
}
</script>

<style scoped>
h3, p{
    margin-left: 10px;
}
</style>
