<template>
    <div class="pa-4 text-center ">
      <v-dialog v-model="dialog" fullscreen="true">
      <v-toolbar dark color="grey">
        <v-toolbar-title style="color: black">Multiple Customer Information Entry</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click.stop="ClearDialog()" icon>
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-toolbar>
   <!-- <v-col cols="12" md="12"> -->
    <v-card >
    <v-col cols="12" md="12">
        <NewCustomEntry/>
        <v-btn size="small" variant="outlined" color="success" @click="showForm = true">Next Entry</v-btn>
    </v-col>
    </v-card>
<!-- </v-col> -->
      </v-dialog>
    </div>
  </template>
  <script>
import NewCustomEntry from './NewCustomEntry.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import PictureInput from 'vue-picture-input';
import SelfiePictureInput from 'vue-picture-input';
    export default {
        components: { VueDatePicker, PictureInput, SelfiePictureInput ,NewCustomEntry},
      data: () => ({
        dialog: false,
        showForm: false,
      }),
      methods:{
        Show() {
                    this.dialog = true;
                },
        ClearDialog(){
        this.dialog = false;
      }
      },
      
    }
  </script>