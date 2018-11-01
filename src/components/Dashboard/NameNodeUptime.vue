<template>
    <div>
        <b-col cols="12" class="mt-2 mb-2" id="header-metrics" style="font-size:13px"> NameNode Uptime
            <b-nav-item-dropdown class="ddown2" no-caret>
            <template slot="button-content"> &#x22EE; </template>
                <b-dropdown-item> <v-icon name="edit"/> Edit </b-dropdown-item>
                <b-dropdown-item> <v-icon name="trash"/> Delete </b-dropdown-item>
            </b-nav-item-dropdown> 
        </b-col>
        <b-row align-h="center">     
            <b-col align-self="center">   
                <h3> 4d 22h 20m </h3>
            </b-col>   
        </b-row> 
    </div>
</template>
