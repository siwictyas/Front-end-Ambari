<template>
<div>
<b-row class="mt-4">
    <b-col md="4" offset-md="8">
        <b-nav-item-dropdown text="SELECT METRICS" class="dd-metrics">
            <b-dropdown-item href="/#/Heatmaps_Host"> HOST </b-dropdown-item>
            <b-dropdown-item href="/#/Heatmaps_HDFS"> HDFS </b-dropdown-item>
            <b-dropdown-item href="/#/Heatmaps_Yarn"> YARN </b-dropdown-item>
        </b-nav-item-dropdown>
    </b-col>
    <!-- <b-col>
        <b-dropdown text="HDFS" variant="light">
            <b-dropdown-item> HDFS Bytes Written </b-dropdown-item>
            <b-dropdown-item> DataNode Garbage Collection Time </b-dropdown-item>
            <b-dropdown-item> DataNode JVM Hep Memory </b-dropdown-item>
            <b-dropdown-item> DataNode JVM Hep Memory Commited</b-dropdown-item>
            <b-dropdown-item> DataNode Process Disk I/O Utilization </b-dropdown-item>
            <b-dropdown-item> DataNode Process Netwrok I/O Utilization </b-dropdown-item>
            <b-dropdown-item> HDFS Space Utilization </b-dropdown-item>
            <b-dropdown-item> HDFS Bytes Read </b-dropdown-item>                    
        </b-dropdown>
    </b-col>

    <b-col>
        <b-dropdown right text="YARN" variant="light">
            <b-dropdown-item> Total Allocatable RAM Utilized per NodeManager </b-dropdown-item>
            <b-dropdown-item> Total Allocatable CPU Utilized per NodeManager </b-dropdown-item>
            <b-dropdown-item> Container Failures </b-dropdown-item>
            <b-dropdown-item> NodeManager GC Time </b-dropdown-item>
            <b-dropdown-item> NodeManager JVM Heap Memory Used </b-dropdown-item>
            <b-dropdown-item> Allocated Containers </b-dropdown-item>
            <b-dropdown-item> NodeManager RAM Utilized </b-dropdown-item>
            <b-dropdown-item> NodeManager CPU Utilized </b-dropdown-item>
            <b-dropdown-item> YARN Local Disk Space Utilization per NodeManager </b-dropdown-item>                                          
        </b-dropdown>
    </b-col> -->
</b-row>
</div>
</template>

<style>
.dd-metrics{
    border-radius: 10px;
    border: 1px solid lightgray;
    width: 80%;
}

.dd-metrics a{
    color: black;
}

.dd-metrics a:hover{
    background: whitesmoke;
    border-radius: 10px;
    color: rgb(49, 48, 46);
    font-weight: bold;
}
</style>
