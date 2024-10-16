<template>
  <div>
    <v-col cols="12" md="12">
      <h4>
        Customer Analysis
      </h4>
      <v-col cols="12" md="12">
        <v-card style="background-color:whitesmoke;">
          <v-col cols="12" md="12">
            <v-row dense>
              <v-col cols="12" md="3">
                <v-text-field :elevation="0" density="compact" v-model="model.customer_name" label="Customer Name" variant="outlined"></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field :elevation="0" density="compact" v-model="model.nrc_passport" label="Nrc/Passport" variant="outlined"></v-text-field>
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
        <DataTableHelper ref="DataTable" :headers="headers" :dataLoader="GetAllData" :show_select=false v-model="selected">
        </DataTableHelper>
        <!-- <v-data-table :custom-filter="filterOnlyCapsText" :headers="headers" :items="items" :search="search"
          item-value="name">
        </v-data-table> -->
      </v-col>
    </v-col>
  </div>
</template>

<script>

import Service from "@/services/customerAnalysis.service.js";
import Model from "@/models/mbgm.js";
import DataTableHelper from "@/components/base/DataTableHelper";
import VueDatePicker from '@vuepic/vue-datepicker';

export default {
  components: {
    DataTableHelper
  },

  data() {
    return {
      excelloading: false,
      loading: true,
      model: new Model(),
      selected: [],
      headers: [
        { title: 'Customer', key: 'customer_name', width: 220 },
        { title: 'Phone', key: 'phone_no', width: 220 },
        { title: "Email", key: 'email', width: 220 },
        { title: "Identity_Type", key: 'identity_type',width: 220},
        { title: "NRC/PP", key: 'nrc_passport', width: 220 },
        { title: 'Occupation', key: 'occupations', width: 220 },
        { title: 'Country', key: 'country', width: 220 },
        { title: 'Age', key: 'age', width: 220 },
        { title: 'Count of Remittance', key: 'countofremittance', width: 220 },
        { title: 'Amount', key: 'amount', width: 220 },
        { title: 'Currency', key: 'currency_code', width: 220 }
      ],
      // items: [
      //   {
      //     customerName:"Thandar",
      //     phone:"0987654321",
      //     email:"thandar@maharbawga.com",
      //     identity:"12/MaYaKa(N)446433",
      //     occupation:"Dev",
      //     country:"Myanmar",
      //     age:"27",
      //     noOfRemittance:"1",
      //     amount:"200000",
      //     currency:"MMK"
      //   },
      // ],

      roleList: ["ADMINISTRATOR", "Administrator", "Checker", "Approver"],
    };
  },

  methods: {
    GetAllData(params) {
      this.model.status = -1;
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
          fileLink.setAttribute("download", "Customer Analysis.xls");
          document.body.appendChild(fileLink);
          fileLink.click();
          vm.excelloading = false;
        });
      });
    },
    ClearData() {
        this.model.customer_name = "";
        this.model.nrc_passport = "";
        this.$refs.DataTable.Reload(true);
      },

  },
 
};
</script>