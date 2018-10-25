<template>
<div>   
  <b-row class="mt-5">
    <b-col lg="1"> <b-container style="backgroundColor:#00ffff; height:20px; width:40px"> </b-container> </b-col>
    <b-col lg="3"><p> 0% - 20%</p> </b-col>
  </b-row>
  <b-row>
    <b-col lg="1"> <b-container style="backgroundColor:#009e0f; height:20px; width:40px"> </b-container> </b-col>
    <b-col lg="3"><p> 20% - 40%</p> </b-col>
  </b-row>
  <b-row>
    <b-col lg="1"> <b-container style="backgroundColor:yellow; height:20px; width:40px"> </b-container> </b-col>
    <b-col lg="3"><p> 40% - 60%</p> </b-col>
  </b-row>
  <b-row>
    <b-col lg="1"> <b-container style="backgroundColor:orange; height:20px; width:40px"> </b-container> </b-col>
    <b-col lg="3"><p> 60% - 80%</p> </b-col>
  </b-row>
  <b-row>
    <b-col lg="1"> <b-container style="backgroundColor:#e06666; height:20px; width:40px"> </b-container> </b-col>
    <b-col lg="3"><p> 80% - 100%</p> </b-col>
  </b-row>
  <b-row>
    <b-col lg="1"> <b-container style= 
        "background-image: url('http://www.silhcdn.com/3/i/shapes/lg/3/9/d139793.jpg');
        background-size:cover;
        height:20px;
        width:40px"> </b-container> </b-col>
    <b-col lg="3"><p> Data Invalid </p> </b-col>
  </b-row>        
  <b-row>
    <b-col lg="1"> <b-container style="backgroundColor:black; height:20px; width:40px"> </b-container> </b-col>
    <b-col lg="3"><p> Data Not Available </p> </b-col>
  </b-row>
  <b-row>
    <b-col lg="1"> <b-container style="backgroundColor:lightgrey; height:20px; width:40px"> </b-container> </b-col>
    <b-col lg="3"><p> Not Applicable </p> </b-col>
  </b-row>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
#borderProgress{
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
}

p{
  text-align:left;
}
</style>


