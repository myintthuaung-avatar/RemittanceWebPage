<template>
  <v-container fluid ma-0 pa-0 fill-height>
      <v-row dense>
        <v-col cols="12" md="12">
          <v-card
            title="This is a title"
            subtitle="This is a subtitle"
            text="This is content"
          ></v-card>

        </v-col>
      </v-row>
  </v-container>
</template>

<script setup>

import { useStore } from 'vuex'
const store = useStore()
  //
  var tmpVar = store.state.app.userInfo.id;
</script>

<script>

import DropDown from '../services/dropdown.service';

export default {
  components: {
  },

  data() {
    return {
     userid: 0,
  };
  },

  computed: {
   
    
  },

  


  created() {
    this.userid = this.$store.state.app.userInfo.id;
  },

  mounted() {
   
    DropDown.GetUserList().then(
          (response)=> {
          console.log('userlist', response.data);
      });
  },

  methods: {
   


    
   

  },

 
};
</script>

