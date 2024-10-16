<template>
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
              <v-row dense>
                <v-col cols="12" md="6">
                  <v-row dense>
                    <v-col cols="12" md="4"><label class="font-weight-regular">From Currency<span class="text-red">*</span></label></v-col>
                    <v-col cols="12" md="8"><v-autocomplete v-model="model.from_currency_id" item-title='text' item-value='value' variant="outlined" density="compact" :items="currencylist"
                        :rules="currencyrule"></v-autocomplete></v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="12" md="4"><label class="font-weight-regular">Buy Rate<span class="text-red">*</span></label></v-col>
                    <v-col cols="12" md="8">
                      <v-text-field v-model="model.buy_rate" step="0.00001" type="decimal" variant="outlined" density="compact" :rules="buyrateerule"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="12" md="4"><label class="font-weight-regular">Sell Rate<span class="text-red">*</span></label></v-col>
                    <v-col cols="12" md="8"><v-text-field type="decimal" step="0.00001" v-model="model.sell_rate" item-title='text' item-value='value' variant="outlined" density="compact" :rules="sellraterule"></v-text-field></v-col>
                  </v-row>
                  
                </v-col>
                <v-col cols="12" md="6">
                  <v-row dense>
                    <v-col cols="12" md="4"><label class="font-weight-regular">To Currency<span class="text-red">*</span></label></v-col>
                    <v-col cols="12" md="8"><v-autocomplete v-model="model.to_currency_id" item-title='text' item-value='value' variant="outlined" density="compact" :items="currencylist" nofilled
                        :rules="currencyrule"></v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="12" md="12"><v-text-field v-model="model.base_buy_rate" step="0.00001" readonly variant="outlined" density="compact"></v-text-field></v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="12" md="12"><v-text-field v-model="model.base_sell_rate" step="0.00001" readonly variant="outlined" density="compact"></v-text-field></v-col>
                  </v-row>
                </v-col> 
                <v-col cols="12" md="12" class="mt-n4">
                  <v-card-actions class="text-right">
                    <v-spacer></v-spacer>
                    <v-btn type="submit" size="small" variant="outlined" color="primary">Save</v-btn>
                    <v-btn dark size="small" variant="outlined" color="warning"
                      @click.stop="ClearCancel()">Clear</v-btn>
                  </v-card-actions>
                </v-col>   
              </v-row>
        </v-col>

      </v-form>
    </v-card>
  </v-dialog>
</template>
      
    <script>
    
    import Service from "@/services/exchangerate.service";
    import Model from "@/models/exchangerate.js";
    import DropDownService from "@/services/dropdown.service.js";
    export default {
    
      data () {
        return {
          dialog: false,
          formname:'',
          model: new Model(),
          currencylist:[],
          currencyrule:[(v) => !!v || "Please Select Currency !"],
          buyrateerule:[(v) => !!v || "Please Fill Buy Rate !"],
          sellraterule:[(v) => !!v || "Please Fill Sell Rate !"],
        }
      },
    
      methods: {
    
        Show(name) {
          this.dialog = true;
          if (name == "edit") {
            this.formname = "Edit Exchange Rate Entry";
          } else {
            this.formname = "Exchange Rate Entry";
          }
        },
        ValidateModel() {
                return this.$refs.form.validate();
            },
          
          SaveOrUpdate() {
            var vm = this;
            vm.ValidateModel();
            if(vm.valid == true) {
              this.model.base_buy_rate.toString();
              this.model.base_sell_rate.toString();
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
          //this.model = [];
          this.model.buy_rate = null;
          this.model.sell_rate = null;
          this.model.created_date = null;
          this.model.created_by = null;
          this.dialog = false;
        },
        ClearCancel() {
          //this.model = [];
          this.model.buy_rate = null;
          this.model.sell_rate = null;
          this.model.created_date = null;
          this.model.created_by = null;
          this.transaction_daterule = false;
        },
      },
      watch:{
        'model.buy_rate'(val){
          if(val != null){
            this.model.base_buy_rate= 1/val*1;
            
          }
        },
        'model.sell_rate'(val){
          if(val != null){
            this.model.base_sell_rate= 1/val*1;
            
          }
        }
      },
      created(){
        DropDownService.GetCurrencyList().then((result) =>{
      this.currencylist = result.data;
      this.currencylist.forEach(element => {
        if(element.is_default == true){
          this.model.to_currency_id = element.value;
        }
        
      });
    })
      },
      
      
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