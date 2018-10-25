<template>
<div>
    <b-row>
    <b-col cols="10" class="mt-2"> NameNode Heap </b-col>
       <b-col cols="2">
  <!-- <b-dropdown variant="link" v-icon name="ellipsis-v" color="black"> -->
          <b-nav-item-dropdown class="ddown2" style="margin-bottom:-20px" no-caret>
          <template slot="button-content"> &#x22EE; </template>
            <b-dropdown-item> <v-icon name="edit"/> Edit </b-dropdown-item>
            <b-dropdown-item> <v-icon name="trash"/> Delete </b-dropdown-item>
          </b-nav-item-dropdown>
       </b-col>
    </b-row>
</div>
</template>
