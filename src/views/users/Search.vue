<template>
<v-dialog persistent v-model="dialog" width="40%">
  <v-card>
    <v-toolbar dark color="secondary">
          <v-toolbar-title dark>ရှာဖွေရန်</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn @click.stop="ClearData()" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
  
  
          <v-form
            @submit.prevent="Filter"
            autocomplete="off"
            ref="form"
            v-model="valid">
            <v-container class="pl-10 pr-10">
                <v-row>
                    <v-col cols="12">
                        <v-card flat>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" md="12" class="mt-0 pt-0 mb-0 pb-0">
                                        <label class="lab">အမည်</label>
                                        <v-text-field v-model="model.name" class="" outlined dense></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="mt-0 pt-0 mb-0 pb-0">
                                        <label class="lab">Role</label>
                                        <v-autocomplete clearable v-model="model.role" class="" item-text="name" item-value="name" outlined dense :items="rolelist"></v-autocomplete>
                                    </v-col>

                                    <v-col cols="12" md="12" class="mt-0 pt-0 mb-0 pb-0">
                                            <label class="lab">User Name</label>
                                            <v-text-field v-model="model.username" class="" outlined dense></v-text-field>
                                        </v-col>
                                    
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
  
              <v-card-actions class="text-right">
                <v-spacer></v-spacer>
                <v-btn type="submit" variant="flat" color="primary">Filter</v-btn>
                <v-btn dark variant="flat" color="warning" @click.stop="ClearData()">Cancel</v-btn>
              </v-card-actions>
            </v-container>
          </v-form>
        </v-card>
  </v-dialog>
</template>
  
<script>

import Model from "@/models/user.js";

export default {
  props: {
    value: Boolean,
  },



  data () {
    return {
      dialog: false,
      model: new Model(),
      rolelist:["ADMINISTRATOR", "Administrator","Checker","Approver"],
      ranklist:[],
      departmentlist:[],
    }
  },

  methods: {

    Show(model) {
      this.model = model;
      this.dialog = true;
    },

    Filter() {
        this.dialog = false;
        this.$emit('filtered', this.model);
        
    },
    
    ClearData() {
        this.model = new Model();
        if(this.$refs.form) {
          this.$refs.form.reset();
        }
        this.dialog = false;
        this.$emit('closed');
    },
  }
}
</script>