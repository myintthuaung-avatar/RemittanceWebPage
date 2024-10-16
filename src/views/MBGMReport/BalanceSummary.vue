<template>
  <div>
    <v-col cols="12" md="12">
      <h4>
        Account Balance Summary
      </h4>
      <v-col cols="12" md="12">
        <v-card>
          <v-col cols="12" md="12">
            <v-row dense>
              <v-col cols="12" md="3">
                <VueDatePickerFrom v-model="model.from_date" :format="fromat" :enable-time-picker="false" placeholder="pick a date" teleport-center />
              </v-col>
              <v-col cols="12" md="3">
                <VueDatePickerTo v-model="model.to_date" :enable-time-picker="false" placeholder="pick a date" teleport-center />
              </v-col>
              <v-col cols="12" md="3">
                <v-btn @click="Filter" variant="outlined" class="mr-3" size="small">
                  <v-icon size="20" color="success">mdi-magnify</v-icon>
                  <v-tooltip activator="parent" location="bottom">Search</v-tooltip>
                </v-btn>
                <v-btn @click="clearData()" variant="outlined" class="mr-3" size="small">
                  <v-icon size="20" color="red">mdi-broom</v-icon>
                  <v-tooltip activator="parent" location="bottom">Clear</v-tooltip>
                </v-btn>
                <v-btn @click="" variant="outlined" class="mr-3" size="small">
                  <v-icon size="20" color="success">mdi-file-excel</v-icon>
                  <v-tooltip activator="parent" location="bottom">Excel Report</v-tooltip>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" md="12">
        <v-col cols="12">
          <v-data-table :headers="headers" :items="items" :search="search" item-value="name">
          </v-data-table>
        </v-col>        
      </v-col>
    </v-col>
  </div>
</template>
<script>

import VueDatePickerFrom from '@vuepic/vue-datepicker';
import VueDatePickerTo from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Model from "@/models/cbm.js";

export default {
  components: {
    VueDatePickerFrom, VueDatePickerTo
  },

  data() {
    return{
      model: new Model(),
      headers: [
        {title: 'No.', key: 'no' },
        {title: 'Date', key: 'date'},
        {title: 'Company', key: 'company'},
        {title: 'Bank Name', key: 'bankName'},
        {title: 'Account No', key: 'accNo'},
        {title: 'Country', key: 'country'},
        {title: 'Branch', key: 'branch'},
        {title: 'Opening (MMK)', key: 'openingMMK'},
        {title: 'Opening (THB)', key: 'openingTHB'},
        {title: 'Opening (USD)', key: 'openingUSD'},
        {title: 'In (MMK)', key: 'inMMK'},
        {title: 'In (THB)', key: 'inTHB'},
        {title: 'In (USD)', key: 'inUSD'},
        {title: 'Out (MMK)', key: 'outMMK'},
        {title: 'Out (THB)', key: 'outTHB'},
        {title: 'Out (USD)', key: 'outUSD'},
        {title: 'Closing (MMK)', key: 'closingMMK'},
        {title: 'Closing (THB)', key: 'closingTHB'},
        {title: 'Closing (USD)', key: 'closingUSD'},
      ],
      items: [
        {
          no: 1,
          date: '15/03/24',
          company: 'Mahar Global Trading',
          bankName: 'AYA Bank',
          accNo: 'MGT MMK AYA Bank',
          country: 'Myanmar',
          branch: 'Zay Gyi St Branch',
          openingMMK: 0.00,
          openingTHB: 0.00,
          openingUSD: 0.00,
          inMMK: 5154500.00,
          inTHB: 0.00,
          inUSD: 0.00,
          outMMK: 0.00,
          outTHB: 0.00,
          outUSD: 0.00,
          closingMMK: 0.00,
          closingTHB: 0.00,
          closingUSD: 0.00,
        },        
      ],
      format: (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
      },
    }
  },
  methods: {
   clearData(){
    this.model.from_date = "";
    this.model.to_date = "";
   }
  },
};

</script>


