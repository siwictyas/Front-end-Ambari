<template>
  <div>
    <b-navbar id="menu">
    <b-row align-h="between">
      <b-col cols="2">
        <b-navbar-brand><img src="../../assets/putih.png" width="60%"> </b-navbar-brand>
      </b-col>
      <b-col cols="3">
        <b-row>
          <b-col lg="2">
            <b-nav-item v-b-modal.modalOperation><v-icon name="spinner" color="white"/></b-nav-item>
               <b-modal size="lg" id="modalOperation" centered="true" ok-only hide-header ok-variant="info">
                  <Operations/>
               </b-modal>
          </b-col>
          <b-col lg="2">
            <b-nav-item v-b-modal.modal-notif><v-icon name="bell" color="white"/></b-nav-item>
            <b-modal size="lg" id="modal-notif" centered="true" ok-only hide-header>
              <Notification/>
            <div slot="modal-footer" class="w-100">
              <b-btn class="float-left"> Go to Alerts Definitions </b-btn>
              <b-btn class="float-right" variant="info"> OK </b-btn>              
            </div>
            </b-modal>
          </b-col>
       <!-- <b-nav-item><v-icon name="th" color="white"/></b-nav-item> -->
          <b-col lg="2">
            <b-nav-item-dropdown no-caret class="ddown1">
            <template slot="button-content"> &#x2630;<span class="sr-only"> </span> </template>
              <b-dropdown-item style="color:black; height:100%"> <v-icon name="edit"/> Edit </b-dropdown-item>
              <b-dropdown-item style="color:black; height:100%"> <v-icon name="trash"/> Delete </b-dropdown-item>
            </b-nav-item-dropdown>
            
          </b-col>
          <b-col lg="2">
            <b-nav-item><v-icon name="user" color="white"/></b-nav-item>
          </b-col>
          <b-col lg="2">
            <b-nav-item-dropdown class="ddown1" text="Admin" right split>
              <b-dropdown-item style="color:black; height:100%"> <v-icon name="user"/> About </b-dropdown-item>
              <b-dropdown-item style="color:black; height:100%"> <v-icon name="wrench"/> Manage Yava </b-dropdown-item>
              <b-dropdown-item style="color:black; height:100%"> <v-icon name="cogs"/> Settings </b-dropdown-item>
              <b-dropdown-item style="color:black; height:100%"> <v-icon name="sign-out-alt"/> Logout </b-dropdown-item>    
            </b-nav-item-dropdown>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    </b-navbar>
  </div>
</template>

<script>
import Operations from './Operations';
import Notification from './Notification';

export default {
  name: '',
  data () {
    return {
      show:false,
    }
  },
  components: {
    Operations,
    Notification,
  },

}
</script>

<style>

#menu a:hover{
  background: rgba(36, 66, 73, 0.2);
  height: 45px;
  border-block-end: 1px solid #76a5af;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.ddown1 a{
  color: white;
  height: 100%;
}

.ddown1 a:hover{
  height: 100%;
}

</style>
    