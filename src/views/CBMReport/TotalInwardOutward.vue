<template>
  <div>
    <v-col cols="12" md="12">
      <h4>
        Total Inward / Outward Remittance of Remittance Business
      </h4>
      <v-col cols="12" md="12">
        <v-card>
          <v-col cols="12" md="12">
            <v-row dense>
              <v-col cols="12" md="3">
                <v-btn @click="Report()" variant="outlined" size="small">
                  <v-icon size="20" color="primary">mdi-note-text</v-icon>
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

import Service from "@/services/totalinwardoutward.service.js";
import Model from "@/models/cbm.js";
import DataTableHelper from "@/components/base/DataTableHelper";
import '@vuepic/vue-datepicker/dist/main.css';
export default {
  components: {
    DataTableHelper
  },

  // setup() {
  //   const fromMonthName = "";
  //   const toMonthName = "";
  //   const ordinalDay = 0; // Last day of the selected todate month



  //   const getLastDayOfMonth = (date) => {
  //     const year = date.getFullYear();
  //     const month = date.getMonth() + 1; // Month is 0-based in JavaScript, so add 1
  //     return new Date(year, month, 0).getDate(); // The 0th day of the next month is the last day of the current month
  //   };

  //   const updateFromDate = () => {
  //     if (this.model.from_date) {
  //       const fromDateObj = new Date(this.model.from_date);
  //       fromMonthName = fromDateObj.toLocaleString('default', { month: 'long' });
  //     }
  //     else {
  //       const fromDateobj = this.getDate();
  //       fromMonthName = fromDateobj.toLocaleString('default', { month: 'long' });
  //     }
  //   };

  //   const updateToDate = () => {
  //     if (this.model.to_date.value) {
  //       const toDateObj = new Date(this.model.to_date.value);
  //       toMonthName = toDateObj.toLocaleString('default', { month: 'long' });
  //       ordinalDay = getLastDayOfMonth(toDateObj); // Set ordinalDay to the last day of the month
  //     }
  //     else {
  //       const toDateObj = this.getDate();
  //       toMonthName = toDateObj.toLocaleString('default', { month: 'long' });
  //       ordinalDay = getLastDayOfMonth(toDateObj);
  //     }
  //   };

  //   return {
  //     fromMonthName,
  //     toMonthName,
  //     ordinalDay,
  //     updateFromDate,
  //     updateToDate,

  //   };
  // },

  data() {
    return {
      excelloading: false,
      loading: true,
      model: new Model(),
      companylist: [],
      selected: [],
      todate: '',
      from_daterule: false,
      to_daterule: false,
      headers: [
        { title: 'No', key:'count', width: 220 },
        { title: 'CompanyName', key: 'company_name', width: 220 },
        {
          title: 'TotalInwardAmount',
          align: 'center',
          children: [
            { title: "MMK", key: 'deposit_mmk', width: 220 },
            { title: 'THB', key: 'deposit_thb', width: 220 },
            { title: 'USD', key: 'deposit_usd', width: 220 },
          ],
        },
        {
          title: 'TotalOutwardAmount',
          align: 'center',
          children: [
            { title: "MMK", key: 'withdraw_mmk', width: 220 },
            { title: 'THB', key: 'withdraw_thb', width: 220 },
            { title: 'USD', key: 'withdraw_usd', width: 220 },
          ],
          
        },
       
        {
          title: 'Net Amount',
          align: 'center',
          children: [
            { title: "MMK", key: 'net_mmk', width: 220 },
            { title: 'THB', key: 'net_thb', width: 220 },
            { title: 'USD', key: 'net_usd', width: 220 },
          ],

        },
      ],
    };
  },

  computed: {

    getTableHeaders() {
      let hideColumns = [];
      if (this.showActionButtons === false) {
        hideColumns.push('actions');
      }
      return this.headers.filter((e) => {
        return !hideColumns.includes(e.value);
      });
    },
  },

  methods: {
    GetAllData(params) {
      //this.model.status = -1;
      return Service.GetAll(params, this.model);
    },

   
    Filter() {
      this.$refs.DataTable.Reload(true);
    },
   
    ClearData() {
      this.model.monthdate = "";
    },


  },
  // created() {
  //   this.GetAllData();
  // }

};
</script>
<style>
.custom-table-border-total {
  border: 1px solid black;
  /* Add border to the table */
}

.custom-table-border-total> .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper >
table > tfoot > tr > th {
  border: 1px solid black;
}

</style>