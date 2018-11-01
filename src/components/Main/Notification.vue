<template>
<div>
    <b-row class="mt-3">
        <b-col lg="7">
            <b-row>
                <h3> NOTIFICATIONS </h3>
            </b-row>
            <b-row>
                <p style="color:red"> 1 Critical or Warning Alerts </p>
            </b-row>
        </b-col>
        <b-col lg="3" offset-md="2">
            <b-form-select v-model="selected" :options="options" class="mb-3"/>
        </b-col>
    </b-row>
    <b-row>
        <b-table :items="items" :fields="fields" caption-top>
            <template slot="status" slot-scope="row">
            <b-row>
              <b-col lg="3" offset-md="2">
                <b-button variant="danger"> CRIT </b-button> </b-col>
              <b-col lg="7" style="margin-left:-20px; margin-top:5px">
                <p> For 13 days </p>
              </b-col>
            </b-row>
            </template>
        </b-table>
    </b-row>
</div>
</template>

<script>

export default {
    data () {
    return {
      fields: [ 'services', 'alert_definitions', 'status'],
      items: [
        { services: 'HDFS',  alert_definitions: 'Percent DataNode Available affected:[2] total:[2]'},  
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
    }
  }
}
</script>

<style scoped>
h3, p{
    margin-left: 30px;
}

.alert{
    background: #0c343d;
}

.alert a:hover{
    background: white;
    border-block-end: #0c343d;
}
</style>
