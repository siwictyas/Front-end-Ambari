<template>
<div>
  <b-nav id="navmetrics">
    <b-nav-item active=:active href="/#/">METRICS</b-nav-item>
    <b-nav-item href="/#/Heatmaps_Host">HEATMAPS</b-nav-item> 
    <b-nav-item href="/#/ConfigHist">CONFIG HISTORY</b-nav-item> 
    </b-nav>
</div>
</template>

<script>
import Notification from './Notification';

export default {
    
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


#navmetrics a{
  background: lightgrey;
  color: black;
  margin-left:-20px;
  border-radius: 8px 8px 0px 0px;
}

#navmetrics a.active{
  background: white;
  color: black;
}

#navmetrics a:hover{
  background: rgba(253, 253, 253, 0.3);
  color: black;
}
</style>

