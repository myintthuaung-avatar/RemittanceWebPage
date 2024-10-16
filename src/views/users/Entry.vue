<template>
  <v-dialog persistent v-model="dialog" width="100%">
    <v-card>
      <v-toolbar color="rgb(0 208 250)" flat>
        <v-toolbar-title dark>{{ formname }}</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn @click.stop="ClearData()" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-form @submit.prevent="SaveOrUpdate" autocomplete="off" ref="form" v-model="valid">
        <v-col cols="12" md="12">
          <v-row>
            <!-- <v-card flat> -->
            <!-- <v-col cols="12" md="1"></v-col> -->
            <v-col cols="12" md="12" class="mt-3">
              <v-row dense  justify="center">
                <v-col cols="12" md="6">
                  <v-row dense justify="center">
                    <v-col cols="12" md="5"><label class="font-weight-regular">Employee code<span
                          class="text-red">*</span></label></v-col>
                    <v-col cols="12" md="7"><v-text-field v-model="model.employee_code" variant="outlined"
                        density="compact" :rules="employeecoderule"></v-text-field></v-col>
                  </v-row>
                  <v-row dense justify="center">
                    <v-col cols="12" md="5"><label class="font-weight-regular">User Name<span
                          class="text-red">*</span></label></v-col>
                    <v-col cols="12" md="7"> <v-text-field v-model="model.username" variant="outlined" density="compact"
                        :rules="usernamerule"></v-text-field></v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="12" md="5"><label class="font-weight-regular">Name<span
                          class="text-red">*</span></label></v-col>
                    <v-col cols="12" md="7"><v-text-field v-model="model.name" variant="outlined" density="compact"
                        :rules="namerule"></v-text-field></v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="12" md="5"><label class="font-weight-regular">Role<span
                          class="text-red">*</span></label></v-col>
                    <v-col cols="12" md="7"><v-autocomplete v-model="model.role" item-title='text'
                        item-value='text' variant="outlined" density="compact" :items="rolelist"
                        :rules="rolerule"></v-autocomplete></v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="6">
                  <v-row dense>
                    <v-col cols="12" md="5"><label class="lab">Password<span class="text-red">*</span></label></v-col>
                    <v-col cols="12" md="7">
                      <v-text-field v-model="model.password" required :disabled="disabled" :rules="passwordRules"
                        :type="showPassText ? 'text' : 'password'"
                        :append-icon="showPassText ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassText = !showPassText" autocomplete="off" variant="outlined"
                        density="compact" dense></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="12" md="5">
                      <label class="lab">Confirm_Password<span class="text-red">*</span></label>
                    </v-col>
                    <v-col cols="12" md="7" v-show="showPassInputBox">
                      <v-text-field v-model="model.confirm_password" required :disabled="disabled"
                        :rules="confirm_passwordRules" :type="showPassText ? 'text' : 'password'"
                        :append-icon="showPassText ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassText = !showPassText" autocomplete="off" variant="outlined"
                        density="compact" dense></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="12" md="5"><label class="font-weight-regular">Company<span
                          class="text-red">*</span></label></v-col>
                    <v-col cols="12" md="7">
                      <v-autocomplete v-model="model.company_id" item-title='text' item-value='value'
                        variant="outlined" density="compact" :items="companylist" :rules="companyrule"></v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="12" md="5"><label class="font-weight-regular">Department<span
                          class="text-red">*</span></label></v-col>
                    <v-col cols="12" md="7">
                      <v-autocomplete v-model="model.department_id" item-title='text' item-value='value'
                        variant="outlined" density="compact" :items="departmentlist"
                        :rules="departmentrule"></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="12">
                  <v-card-actions class="text-right">
                    <v-spacer></v-spacer>
                    <v-btn type="submit" size="small" variant="outlined" color="primary">Save</v-btn>
                    <v-btn dark size="small" variant="outlined" color="warning"
                      @click.stop="ClearCancel()">Clear</v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-col>
            <!-- </v-card> -->
            <!-- <v-col cols="12" md="1"></v-col> -->
          </v-row>
        </v-col>
      </v-form>
    </v-card>
  </v-dialog>
</template>
  
<script>

import Service from "@/services/user.service";
import Model from "@/models/user.js";
import DropDownService from "@/services/dropdown.service";
export default {

  data () {
    return {
      dialog: false,
      formname: '',
      model: new Model(),
      showPassText: false,
      showPassInputBox:true,
      rolelist:[],
      companylist:[],
      departmentlist:[],
      adminrolelist:["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR","USER"],
      inline: null,
      redisabled:true,
      namerule:[(v) => !!v || "Please Fill Name !"],
      usernamerule: [(v) => !!v || "Please Fill User Name !"],
      rolerule:[(v) => !!v || "Please select Role !"],
      employeecoderule: [(v) => !!v || "Please Fill Employee Code !"],
      departmentrule:[(v) => !!v || "Please Select Department !"],
      companyrule: [(v) => !!v || "Please Select Company !"],
      passwordRules: [
          (value) => !!value || "Please Fill Password !",
          (value) => (value && value.length >= 6) || "Password at least 6 characters !",
      ],
      confirm_passwordRules: [
          (value) => !!value || "Need to fill Confirm_Password !",
          (value) => (value && value ===this.model.password ) || "Password and Confirm_Password must be same !",
      ],
    }
  },

  methods: {

    Show(name) {
      this.dialog = true;
      if (name == "new") {
        this.formname = "User Entry";
      } else {
        this.formname="Edit User Entry"
      }
    },
    ValidateModel() {
            return this.$refs.form.validate();
        },
      
      SaveOrUpdate() {
        var vm = this;
        vm.ValidateModel();
        if(vm.valid == true) {
          Service.SaveOrUpdate(vm.model).then((result) => {
            if (result.data) {
              var message = result.data.messages[0];
              if (result.data.success) {
                  vm.$root.AlertDialog.Show({ message: message, color: 'success'});
                  vm.$emit("AfterSaved");
                  vm.ClearData();
              } else {
                  vm.$root.AlertDialog.Show({ message: message , color: 'error'});
              }
            }
          });
        }
      },
  
    ClearData() {
      this.model.employee_code = "";
      this.model.name = '';
      this.model.username = '';
      this.model.password = '';
      this.model.confirm_password = '';
      this.model.role = '';
      this.model.company_id = null;
      this.model.department_id = null;
      this.dialog = false;
    },
    ClearCancel() {
      //this.model = [];
      this.model.employee_code = "";
      this.model.name = '';
      this.model.username = '';
      this.model.password = '';
      this.model.confirm_password = '';
      this.model.role = '';
      this.model.company_id = null;
      this.model.department_id = null;
      this.transaction_daterule = false;
    },
  },
  watch:{
    "model.company_id"(val){
      if(val >0){
        DropDownService.GetDepartmentList(val).then((result) => {
          this.departmentlist = result.data;
        })
      }
    },
  },
  created(){
    DropDownService.GetRoleList().then((result) =>{
      this.rolelist = result.data;
    });
    DropDownService.GetCompanyList().then((result) =>{
      this.companylist = result.data;
    })
    
  
  },
  
  computed: {
    getUserInfo() {
      return JSON.parse(localStorage.getItem("user"));
    },
  }

}
</script>
<style scoped>
.v-text-field fieldset,
.v-text-field .v-input__control {
  height: 37px;
}

.v-row {
  text-align: right;
}

.v-messages__message {
  text-align: left;
}

.font-weight-regular {
  font-size: 14px;
}

.v-text-field.v-text-field--enclosed {
  font-weight: 500;
}
</style>
