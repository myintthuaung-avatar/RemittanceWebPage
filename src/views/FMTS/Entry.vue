<template>
  <div>
    <v-dialog persistent v-model="dialog" width="80%">
      <v-card>
        <v-toolbar dark color="rgb(0 208 250)">
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
              <v-col cols="12" md="1"></v-col>
              <v-col cols="12" md="10" class="mt-6">
                <v-row dense>
                  <v-col cols="12" md="6">
                    <v-row dense>
                      <v-col cols="12" md="5"><label class="font-weight-regular">License No<span
                            class="text-red">*</span></label></v-col>
                      <v-col cols="12" md="7"><v-text-field v-model="model.license_no" item-title='text'
                          item-value='value' variant="outlined" density="compact"
                          :rules="licensenorule"></v-text-field></v-col>
                    </v-row>
                    <v-row dense class="mb-4">
                      <v-col cols="12" md="5"><label class="font-weight-regular">Transcation Date<span
                            class="text-red">*</span></label></v-col>
                      <v-col cols="12" md="7">
                        <VueDatePicker v-model="model.transaction_date" :enable-time-picker="false" teleport-center />
                        <span v-show="transaction_daterule"
                          style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                          class="text-red">Transction Date ထည့်ရန်လိုအပ်ပါသည်။</span>
                      </v-col>
                    </v-row>
                    <v-row density="compact">
                      <v-col cols="12" md="5"><label class="font-weight-regular">Identity Type<span
                            class="text-red">*</span></label></v-col>
                      <v-col cols="12" md="7"><v-autocomplete v-model="model.identity_typeid" item-title='text'
                          item-value='value' variant="outlined" density="compact" :items="identity_typelist"
                          :rules="identitytyperule"></v-autocomplete></v-col>
                    </v-row>
                    <v-row dense>
                      <v-col cols="12" md="5"><label class="font-weight-regular">AccountNo<span
                            class="text-red">*</span></label></v-col>
                      <v-col cols="12" md="7"><v-text-field v-model="model.account_no" item-title='text'
                          item-value='value' variant="outlined" density="compact"
                          :rules="account_norule"></v-text-field></v-col>
                    </v-row>
                    <v-row dense>
                      <v-col cols="12" md="5"><label class="font-weight-regular">Account Name<span
                            class="text-red">*</span></label></v-col>
                      <v-col cols="12" md="7"><v-text-field v-model="model.account_name" item-title='text'
                          item-value='value' variant="outlined" density="compact"
                          :rules="account_namerule"></v-text-field></v-col>
                    </v-row>

                  </v-col>
                  <v-col cols="12" md="6">
                    <v-row dense>
                      <v-col cols="12" md="5"><label class="font-weight-regular">AccountKeeperInstitutionCode<span
                            class="text-red">*</span></label></v-col>
                      <v-col cols="12" md="7"><v-text-field v-model="model.accountkeeperinstitutioncode"
                          item-title='text' item-value='value' variant="outlined" density="compact"
                          :rules="AccountKeeperInstitutionCoderule"></v-text-field></v-col>
                    </v-row>

                    <v-row dense>
                      <v-col cols="12" md="5"><label class="font-weight-regular">Currency<span
                            class="text-red">*</span></label></v-col>
                      <v-col cols="12" md="7">
                        <v-autocomplete v-model="model.currency_id" item-title='text' item-value='value'
                          variant="outlined" density="compact" :items="currencylist"
                          :rules="currencyrule"></v-autocomplete>
                      </v-col>
                    </v-row>
                    <v-row dense>
                      <v-col cols="12" md="5"><label class="font-weight-regular">Country<span
                            class="text-red">*</span></label></v-col>
                      <v-col cols="12" md="7">
                        <v-autocomplete v-model="model.country_id" item-title='text' item-value='value'
                          variant="outlined" density="compact" :items="countrylist"
                          :rules="countryrule"></v-autocomplete>
                      </v-col>
                    </v-row>

                    <v-row dense>
                      <v-col cols="12" md="5"><label class="font-weight-regular">Status<span
                            class="text-red">*</span></label></v-col>
                      <v-col cols="12" md="7"><v-text-field v-model="model.status" item-title='text' item-value='value'
                          variant="outlined" density="compact" :rules="statusrule"></v-text-field></v-col>
                    </v-row>
                    <v-row dense>
                      <v-col cols="12" md="5"><label class="font-weight-regular">Note</label></v-col>
                      <v-col cols="12" md="7"><v-text-field v-model="model.note" item-title='text' item-value='value'
                          variant="outlined" density="compact" :rules="sellraterule"></v-text-field></v-col>
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
              <v-col cols="12" md="1"></v-col>
            </v-row>
            <!-- </v-card> -->
          </v-col>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
      
    <script>
    import Service from "@/services/fmts.service.js";
    import Model from "@/models/fmts.js";
    import DropDownService from "@/services/dropdown.service.js";
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    export default {
        components:{VueDatePicker},
      data () {
        return {
          dialog: false,
          formname: '',
          model: new Model(),
          inline: null,
          transaction_daterule:true,
          currencylist:[],
          countrylist:[],
          identity_typelist:[{value:1,text:"Personal ID"},{value:1,text:"Passport"}],
          licensenorule:[(v) => !!v || "Please Fill License No !"],
          identitytyperule: [(v) => !!v || "Please Select Identity Type !"],
          currencyrule: [(v) => !!v || "Please Select Currency !"],
          countryrule: [(v) => !!v || "Please Select Country !"],
          AccountKeeperInstitutionCoderule: [(v) => !!v || "Please Fill Institution Code !"],
          account_norule: [(v) => !!v || "Please Fill Account No !"],
          account_namerule: [(v) => !!v || "Please Fill Account Name !"],
          statusrule: [(v) => !!v || "Please Fill Status !"],
          
          format : (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `Selected date is ${day}/${month}/${year}`;
            }
        }
      },
    
      methods: {
    
        Show(name) {
          this.dialog = true;
          if (name == "edit") {
            this.formname = "Edit FMTS Entry";
          } else {
            this.formname = "FMTS Entry";
          }
        },
        ValidateModel() {
          if(this.model.transaction_date == ""){
                  this.transaction_daterule = true;
                }
              else{
                this.transaction_daterule = false;
              }
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
          //this.model  =[];
          this.model.license_no = "";
          this.model.transaction_date = "";
          this.model.identity_typeid = null;
          this.model.accountkeeperinstitutioncode = "";
          this.model.account_no = "";
          this.model.account_name = "";
          this.model.currency_id = null;
          this.model.country_id = null;
          this.model.status = "";
          this.model.note = "";
            this.dialog = false;
        },
        ClearCancel() {
          //this.model  =[];
          this.model.license_no = "";
          this.model.transaction_date = "";
          this.model.identity_typeid = null;
          this.model.accountkeeperinstitutioncode = "";
          this.model.account_no = "";
          this.model.account_name = "";
          this.model.currency_id = null;
          this.model.country_id = null;
          this.model.status = "";
          this.model.note = "";
          this.transaction_daterule = false;
        },
      },
      watch:{
        "model.transaction_date"(val){
          if(val != null){
            this.transaction_daterule = false;
            }
            else{
              this.transaction_daterule = true;
            }
          }
        },
      created(){
        this.transaction_daterule = false;
        DropDownService.GetCurrencyList().then((result) =>{
          this.currencylist = result.data;
        })
        DropDownService.GetCountryList().then((result) =>{
            this.countrylist = result.data;
        })
      },
      
      computed: {
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