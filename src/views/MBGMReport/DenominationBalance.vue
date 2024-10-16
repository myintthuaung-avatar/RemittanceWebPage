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
                <VueDatePicker v-model="model.date" :format="fromat" :enable-time-picker="false" placeholder="pick a date" teleport-center />
                <span v-show="from_daterule"
                  style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;" class="text-red">From
                  Date ထည့်ရန်လိုအပ်ပါသည်။</span>
              </v-col>
              <v-col cols="12" md="3">
                <v-autocomplete v-model="model.currency_id" item-title='text' item-value='value' 
                label="Currency" variant="outlined" density="compact" :items="currencylist"></v-autocomplete>
              </v-col>
              <v-col cols="12" md="3" class="mt-1">
                <v-btn @click="Filter()" variant="outlined" class="mr-3" size="small">
                  <v-icon size="20" color="success">mdi-magnify</v-icon>
                  <v-tooltip activator="parent" location="bottom">Search</v-tooltip>
                </v-btn>
                <v-btn @click="ClearData()" variant="outlined" class="mr-3" size="small">
                  <v-icon size="20" color="red">mdi-broom</v-icon>
                  <v-tooltip activator="parent" location="bottom">Clear</v-tooltip>
                </v-btn>
                <v-btn @click="Report()" variant="outlined" size="small">
                  <v-icon size="20" color="success">mdi-file-excel</v-icon>
                  <v-tooltip activator="parent" location="bottom">Excel Report</v-tooltip>
                </v-btn>
              </v-col>
            </v-row>

          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" md="12">
        <DataTableHelper ref="DataTable" :headers="headers" :dataLoader="GetAllData" :show_select=false
          v-model="selected">
        </DataTableHelper>
        
      </v-col>
    </v-col>
  </div>
</template>

<script>

import Service from "@/services/dailydenominationbalance.service.js";
import Model from "@/models/cbm.js";
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
      companylist: [],
      selected: [],
      currencylist:[],
      from_daterule: false,
      to_daterule: false,
      headers: [
        { title: 'Denomination Date', key: 'remittance_date', width: 220 },
        { title: 'Account No', key: 'account_no', width: 220 },
        { title: "InCome Amount By Quantity", key: 'mmk', width: 350 , sortable:false,
        children: [
          { title: "Currency", key: 'deposit_currency_name', width: 350 },
            { title: '1(Qty)', key: 'deposit_qty_1', width: 220 },
            { title: '2(Qty)', key: 'deposit_qty_2', width: 220 },
            { title: '5(Qty)', key: 'deposit_qty_5', width: 220 },
            { title: '10(Qty)', key: 'deposit_qty_10', width: 220 },
            { title: '20(Qty)', key: 'deposit_qty_20', width: 220 },
            { title: '50(Qty)', key: 'deposit_qty_50', width: 220 },
            { title: '100(Qty)', key: 'deposit_qty_100', width: 220 },
            { title: '200(Qty)', key: 'deposit_qty_200', width: 220 },
            { title: '500(Qty)', key: 'deposit_qty_500', width: 220 },
            { title: '1000(Qty)', key: 'deposit_qty_1000', width: 220 },
            { title: '5000(Qty)', key: 'deposit_qty_5000', width: 220 },
            { title: '10000(Qty)', key: 'deposit_qty_10000', width: 220 },
          ],
        },
        { title: "OutCome Amount By Quantity", key: 'mmk', width: 350 , sortable:false,
        children: [
          { title: "Currency", key: 'withdraw_currency_name', width: 350 },
            { title: '1(Qty)', key: 'withdraw_qty_1', width: 220 },
            { title: '2(Qty)', key: 'withdraw_qty_2', width: 220 },
            { title: '5(Qty)', key: 'withdraw_qty_5', width: 220 },
            { title: '10(Qty)', key: 'withdraw_qty_10', width: 220 },
            { title: '20(Qty)', key: 'withdraw_qty_20', width: 220 },
            { title: '50(Qty)', key: 'withdraw_qty_50', width: 220 },
            { title: '100(Qty)', key: 'withdraw_qty_100', width: 220 },
            { title: '200(Qty)', key: 'withdraw_qty_200', width: 220 },
            { title: '500(Qty)', key: 'withdraw_qty_500', width: 220 },
            { title: '1000(Qty)', key: 'withdraw_qty_1000', width: 220 },
            { title: '5000(Qty)', key: 'withdraw_qty_5000', width: 220 },
            { title: '10000(Qty)', key: 'withdraw_qty_10000', width: 220 },
          ],
        },
      ],
    };
  },
  created(){
    const current = new Date();
    this.model.date = current;
    DropDownService.GetCurrencyList().then((result) => {
            this.currencylist = result.data;
        });

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
    Report() {
      var vm = this;
      return new Promise(() => {
        Service.DownLoadReport(vm.model, { itemsPerPage: -1 }).then(response => {
          window.console.log(window.URL.createObjectURL(new Blob([response.data])));
          const url = window.URL.createObjectURL(new Blob([response.data]));

          var fileLink = document.createElement("a");
          fileLink.href = url;
          fileLink.setAttribute("download", "EMTS.txt");
          document.body.appendChild(fileLink);
          fileLink.click();
          vm.excelloading = false;
        });
      });
    },
    ClearData() {
      this.model.from_date = "";
      this.model.to_date = "";
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