<template>
  <div>
    <v-col cols="12" md="12">
      <h4>
       Monthly Service InWard Remittance 
      </h4>
      <v-col cols="12" md="12">
        <v-card style="background-color:whitesmoke;">
          <v-col cols="12" md="12">
            <v-row dense>
              <v-col cols="12" md="3">
                <VueDatePicker v-model="model.date" month-picker teleport-center/>
                <!-- <VueDatePicker v-model="model.date" :enable-time-picker="false" month-picker teleport-center
                  :format="format" placeholder="Pick a date" /> -->
                <span v-show="from_daterule"
                  style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;" class="text-red">From
                  Date ထည့်ရန်လိုအပ်ပါသည်။</span>
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
                <v-btn @click="ExcelReport()" variant="outlined" size="small">
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

import Service from "@/services/monthlysoiremittance.service.js";
import Model from "@/models/cbm.js";
import DataTableHelper from "@/components/base/DataTableHelper";
import VueDatePicker from '@vuepic/vue-datepicker';
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
      from_daterule: false,
      headers: [
        { title: 'No', key: 'no', width: 220 },
        { title: 'Company', key: 'company_name', width: 220 },
        { title: "Transaction Count", key: 'transaction_count', width: 350 },
        { title: "Monthly By Remittance Amount ", key: 'mmk', width: 350 , sortable:false,
        children: [
            { title: 'MMK', key: 'mmk', width: 220 },
            { title: 'THB', key: 'thb', width: 220 },
            { title: 'Other', key: 'other', width: 220 },
          ],
        },
        { title: "Total Remittance Amount ", key: 'mmk', width: 350 , sortable:false,
        children: [
            { title: 'Total(MMK)', key: 'mmk', width: 220 },
            { title: 'Total(THB)', key: 'thb', width: 220 },
            { title: 'Total(Other)', key: 'other', width: 220 },
          ],
        },
      ],
      format: (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
      }
    };
  },
  created(){
    const current = new Date();
    this.model.date = current;
  },
  methods: {
    GetAllData(params) {
      //this.model.status = -1;
      return Service.GetAll(params, this.model);
    },

    Filter() {
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
          fileLink.setAttribute("download", "Monthly SOI Remittance.xls");
          document.body.appendChild(fileLink);
          fileLink.click();
          vm.excelloading = false;
        });
      });
    },
    ClearData() {
      this.model.date = "";
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