<template>
  <div>
    <v-col cols="12" md="12">
      <h4>
        Inward / Outward / Exchange
      </h4>
      <v-col cols="12" md="12">
        <v-card>
          <v-col cols="12" md="12">
            <v-row dense>
              <v-col cols="12" md="2">
                <v-autocomplete clearable v-model="model.country_id" item-title='text' item-value='value' label="Country"
                @click="onCountryChange()" variant="outlined" density="compact" :items="countrylist"></v-autocomplete>
              </v-col>
              <v-col cols="12" md="2">
                <v-autocomplete clearable v-model="model.payment_id" item-title='text' item-value='value' label="Payment"
                @click="onPaymentChange()" variant="outlined" density="compact" :items="paymentlist"></v-autocomplete>
              </v-col>
              <v-col cols="12" md="2">
                <v-autocomplete clearable v-model="model.payment_branch_id" item-title='text' item-value='value' 
                label="Payment_Branch" variant="outlined" density="compact" :items="paymentBranchlist"></v-autocomplete>
              </v-col>
              <v-col cols="12" md="2">
                <VueDatePickerFrom v-model="model.from_date" :enable-time-picker="false" teleport-center
                  :format="format" placeholder="Pick a date" />
                <span v-show="from_daterule"
                  style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;" class="text-red">From
                  Date ထည့်ရန်လိုအပ်ပါသည်။</span>
              </v-col>
              <v-col cols="12" md="2">
                <VueDatePickerTo v-model="model.to_date" :enable-time-picker="false" teleport-center
                  :format="format" placeholder="Pick a date" />
                <span v-show="from_daterule"
                  style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;" class="text-red">From
                  Date ထည့်ရန်လိုအပ်ပါသည်။</span>
              </v-col>
              <v-col cols="12" md="2">
                <v-btn @click="Filter" variant="outlined" class="mr-3" size="small">
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
        <!-- <DataTableHelper ref="DataTable" :headers="headers" :items="GetAllData" :show_select=false
          v-model="selected">
        </DataTableHelper> -->
        <v-data-table :custom-filter="filterOnlyCapsText" :headers="headers" :items="items" :search="search"
          item-value="name">
        </v-data-table>
      </v-col>
    </v-col>
  </div>
</template>

<script>

import Service from "@/services/emtsreport.service.js";
import Model from "@/models/mbgm.js";
import DataTableHelper from "@/components/base/DataTableHelper";
import VueDatePickerFrom from '@vuepic/vue-datepicker';
import VueDatePickerTo from '@vuepic/vue-datepicker';
import DropDownService from "@/services/dropdown.service.js";
import '@vuepic/vue-datepicker/dist/main.css';
export default {
  components: {
    DataTableHelper, VueDatePickerFrom, VueDatePickerTo
  },

  data() {
    return {
      excelloading: false,
      loading: true,
      model: new Model(),
      countrylist:[],
      paymentlist: [],
      paymentBranchlist:[],
      selected: [],
      from_daterule: false,
      to_daterule: false,
      headers: [
        { title: 'Country', key: 'country', width: 220 },
        { title: 'Region', key: 'region', width: 220 },
        { title: "Township", key: 'township', width: 220 },
        { title: "Agent", key: 'agent', width: 220 },
        { title: 'Process No', key: 'process_no', width: 220 },
        { title: 'Transaction No', key: 'transaction_no', width: 220 },
        { title: 'Process Date', key: 'process_date', width: 220 },
        { title: 'Transaction Date', key: 'transaction_date', width: 220 },
        { title: 'Cancel Date', key: 'cancel_date', width: 220 },
        { title: 'Receiver Country', key: 'receiver_country', width: 220 },
        { title: 'Sender Country', key: 'sender_country', width: 220 },
        { title: 'Report Type', key: 'report_type', width: 220 },
        { title: 'Sender Name', key: 'sender_name', width: 220 },
        { title: 'Sender NRC', key: 'sender_nrc', width: 220 },
        { title: 'Sender Phone', key: 'sender_phone', width: 220 },
        { title: 'THB', key: 'originalTHB', width: 220 },
        { title: 'USD', key: 'originalUSD', width: 220 },
        { title: 'CNY', key: 'originalCNY', width: 220 },
        { title: 'MMK', key: 'originalMMK', width: 220 },
        { title: 'Service Charges (USD)', key: 'serviceChargesUSD', width: 220 },
        { title: 'Service Charges (MMK)', key: 'serviceChargesMMK', width: 220 },
        { title: 'Commission', key: 'commission', width: 220 },
        { title: 'Other Charges', key: 'otherCharges', width: 220 },
        { title: 'Exchange Rate (USD)', key: 'exchangeRateUSD', width: 220 },
        { title: 'Exchange Rate (MMK)', key: 'ExchangeRateMMK', width: 220 },
        { title: 'Deliver Amount', key: 'deliverAmount', width: 220 },
        { title: 'Product', key: 'Product', width: 220 },
        { title: 'Transaction Class', key: 'transactionClass', width: 220 },
        { title: 'Receiving Bank', key: 'receivingBank', width: 220 },
        { title: 'Deliver Bank', key: 'deliverBank', width: 220 },
        { title: 'Customer Type', key: 'customerType', width: 220 },
      ],
      items: [
        {
          country:"Myanmar",
          region:"Yangon",
          township:"KaBarAye",
          agent:"MyaMya",
          process_no:"1",
          transaction_no:"12343",
          process_date:"14/09/2024",
          transaction_date:"14/09/2024",
          cancel_date:"",
          receiver_country:"Thailand",
          sender_country:"Myanmar",
          report_type:"1",
          sender_name:"Thandar",
          sender_nrc:"12/MaYaka(N)12434",
          sender_phone:"0987654321",
          originalTHB:"5000",
          originalUSD:"0",
          originalCNY:"0",
          originalMMK:"600000",
          serviceChargesUSD:"10",
          serviceChargesMMK:"50000",
          commission:"12000",
          otherCharges:"0",
          exchangeRateUSD:"34.77",
          ExchangeRateMMK:"170.22",
          deliverAmount:"5000",
          Product:"Transfer",
          transactionClass:"Remittance",
          receivingBank:"Kasikorn Bank",
          deliverBank:"KBZ Bank",
          customerType:"Worker"
        }
      ],

      roleList: ["ADMINISTRATOR", "Administrator", "Checker", "Approver"],
      format: (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
      }
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
        'model.payment_id'(val) {
            this.paymentBranchlist = [];
            if (val != null) {
                DropDownService.GetPaymentBranchListByPayment(val).then((result) => {
                    this.paymentBranchlist = result.data;
                })
            }
        }
    },

  computed: {
    getUserInfo() {
      return JSON.parse(localStorage.getItem("user"));
    },
    getTableHeaders() {
      let hideColumns = [];
      if (this.showActionButtons === false) {
        hideColumns.push('actions');
      }
      return this.headers.filter((e) => {
        return !hideColumns.includes(e.value);
      });
    },

    getSel() {
      return this.selected.length;
    },


  },

  methods: {
    GetAllData(params) {
      this.model.status = -1;
      return Service.GetAll(params, this.model);
    },

    Filter() {
      this.$refs.DataTable.Reload(true);
    },
    ResetFilter() {
      this.model = new Model();
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
      this.model.country_id = null;
      this.model.payment_id = null;
      this.model.payment_branch_id=null;
      this.model.from_date="";
      this.model.to_date="";
    },
    onCountryChange() {
            this.model.payment_id = null;
            this.model.payment_branch_id = null;
    },
    onPaymentChange() {
            this.model.payment_branch_id = null;
    },
  },
  created() {
    this.GetAllData();
    DropDownService.GetCurrencyList().then((result) => {
      this.currencylist = result.data;
    });
    DropDownService.GetCountryList().then((result) => {
      this.countrylist = result.data;
    });

  },

};
</script>