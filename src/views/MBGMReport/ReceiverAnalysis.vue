<template>
    <div>
      <v-col cols="12" md="12">
        <h4>
        Denomination Balance
        </h4>
        <v-col cols="12" md="12">
          <v-card style="background-color:whitesmoke;">
            <v-col cols="12" md="12">
              <v-row dense>
  
                <v-col cols="12" md="3">
                <v-autocomplete clearable v-model="model.country_id" item-title='text'
                    item-value='value' label="Country" @click="onCountryChange()" variant="outlined"
                    density="compact" :items="countrylist"></v-autocomplete>
              </v-col>
              <v-col cols="12" md="3">
                <v-autocomplete v-model="model.payment_id" item-title='text'
                    item-value='value' label="Payment" @click="onPaymentChange()" variant="outlined"
                    density="compact" :items="paymentlist"></v-autocomplete>
              </v-col>
              <v-col cols="12" md="3" class="mt-2">
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }" >
                    <v-btn @click="Filter()" variant="outlined" class="mr-3" size="small" v-bind="props">
                      <v-icon size="20" color="success">mdi-magnify</v-icon>
                    </v-btn>
                  </template>
                  <span class="text-center">Search</span>
              </v-tooltip>
              <v-tooltip location="bottom">
                <template v-slot:activator="{ props }" >
                  <v-btn @click="ClearData()" variant="outlined" class="mr-3" size="small" v-bind="props">
                    <v-icon size="20" color="red">mdi-broom</v-icon>
                  </v-btn>
                </template>
                <span class="text-center">Clear</span>
            </v-tooltip>
            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }" >
                <v-btn @click="ExcelReport()" variant="outlined" size="small" v-bind="props">
                  <v-icon size="20" color="success">mdi-file-excel</v-icon>
                </v-btn>
              </template>
              <span class="text-center">Excel Report</span>
          </v-tooltip>
              </v-col>
              </v-row>
  
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" md="12" class="mt-n4">
          <DataTableHelper ref="DataTable" :headers="headers" :dataLoader="GetAllData" :show_select=false
            v-model="selected">
          </DataTableHelper>
          
        </v-col>
      </v-col>
    </div>
  </template>
  
  <script>
  
  import Service from "@/services/receiverAnalysis.service";
  import Model from "@/models/mbgm.js";
  import DataTableHelper from "@/components/base/DataTableHelper";
  import VueDatePicker from '@vuepic/vue-datepicker';
  import DropDownService from "@/services/dropdown.service.js";
  import '@vuepic/vue-datepicker/dist/main.css';
  
  export default {
    components: {
      DataTableHelper, VueDatePicker
    },
  
    data() {
      return {
        excelloading: false,
        loading: true,
        model: new Model(),
        countrylist: [],
        selected: [],
        paymentlist:[],
        from_daterule: false,
        to_daterule: false,
        headers: [
                 { title: 'Country', key: 'countryname', width: 220 },
                { title: "Payment", key: 'payment', width: 220 },
                { title: 'Receiver Identifier Type', key: 'msisdn', width: 220 },
                { title: 'Receiver Identifier', key: 'phone_no', width: 220 },
                { title: "Validation KYC (O)", key: 'identity_typename', width: 220 },
                { title: "Validation KYC value(O)", key: 'nrcpassport', width: 220 },
                { title: 'Amount', key: 'withdraw_amount', width: 220 },
                { title: 'Comment', key: 'receiver_name', width: 220 },
        ],
      };
    },
    watch: {
        'model.country_id'(val) {
            this.paymentlist = [];
            if (val != null) {
                DropDownService.GetPaymentListByCountry(val).then((result) => {
                    this.paymentlist = result.data;
                })
            }
        },
    },
    created(){
        DropDownService.GetCountryList().then((result) => {
            this.countrylist = result.data;
        })
    },
    methods: {
      GetAllData(params) {
        return Service.GetAll(params, this.model);
      },
  
      Filter() {
        this.$refs.DataTable.Reload(true);
      },
      ResetFilter() {
        this.model.status = -1;
        this.$refs.DataTable.Reload(true);
      },
      ExcelReport() {
        var vm = this;
        return new Promise(() => {
          Service.DownLoadReport(vm.model, { itemsPerPage: -1 }).then(response => {
            window.console.log(window.URL.createObjectURL(new Blob([response.data])));
            const url = window.URL.createObjectURL(new Blob([response.data]));
  
            var fileLink = document.createElement("a");
            fileLink.href = url;
            fileLink.setAttribute("download", "Receiver Analysis.xls");
            document.body.appendChild(fileLink);
            fileLink.click();
            vm.excelloading = false;
          });
        });
      },
      ClearData() {
        this.model.country_id = null;
        this.model.payment_id = null;
      },
  
    },
  };
  </script>
  <style>
  .v-table--density-default > .v-table__wrapper > table > tbody > tr > th, .v-table--density-default > .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > th {
    height: calc(var(--v-table-header-height) + 0px);
    border: 1px solid black;
  }
  </style>