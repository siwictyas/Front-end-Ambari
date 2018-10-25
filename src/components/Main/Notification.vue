<template>
<div>
    <b-row>
        <b-col lg="7">
            <b-row>
                <h3> NOTIFICATIONS </h3>
            </b-row>
            <b-row>
                <p style="color:red"> 1 Critical or Warning Alerts </p>
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
            <b-row>
              <b-col lg="3" offset-md="2">
                <b-button variant="danger"> CRIT </b-button> </b-col>
              <b-col lg="6">
                <p> For 13 days </p>
              </b-col>
            </b-row>
            </template>
        </b-table>
    </b-row>
        <b-button class="alert" href=""> Go to Alerts Definition </b-button>
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
    }
  }
}
</script>

<style scoped>
h3, p{
    margin-left: 10px;
}

.alert{
    background: #0c343d;
}

.alert a:hover{
    background: white;
    border-block-end: #0c343d;
}
</style>
