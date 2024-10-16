
<template>
    <v-data-table-server
        v-model="selected"
        v-model:items-per-page="datatable.options.itemsPerPage"
        :headers="headers"
        :footer-props="datatable.footerProps"
        :items-length="datatable.total"
        :items="datatable.items"
        :loading="loading" loading-text="Loading... Please wait" 
        @update:options="loadItems" :show-select="show_select" return-object
      >
    
      <template v-slot:[`item.id`]="{ item }">
             <slot
            name="item.id"
            :item="item" />
          </template>
          </v-data-table-server>
      </template>
      
      <script>
      import DataTable from '../../utilities/datatable.js'
      
      export default {
      
        props: {
            headers: [
        { title: 'No', key: 'no', width: 220 },
        { title: 'Name of Company', key: 'company', width: 220 },
        { title: "USD", key: 'USD', width: 350 },
        { title: 'EUR', key: 'EUR', width: 220 },
        { title: 'JPY', key: 'JPY', width: 220 },
        { title: "KRW", key: 'KRW', width: 220 },
        { title: "MYR", key: 'MYR', width: 220 },
        { title: "SGD", key: 'SGD', width: 220 },
        { title: "THB", key: 'THB', width: 220 },
        { title: "AED", key: 'AED', width: 220 },
        { title: "QAR", key: 'QAR', width: 220 },
        { title: "Other Country (USD)", key: 'OtherUSD', width: 220 },
        { title: "Total No of Transactions", key: 'TransactionCount', width: 220 },
        {
          title: 'Total Remittance Amount from the date of 1st to ordinalDay toMonthName',
          align: 'center',
          children: [
            { title: 'USD', key: 'MonthlyUSD', width: 220 },
            { title: 'MMK (in Million)', key: 'MonthlyMMK', width: 220 },
          ],
          width: 400
        },
        {
          title: 'Total Remittance Amount from the date of 1st @ViewBag.MonthName to  @ViewBag.OdinalDay  @ViewBag.MonthName',
          align: 'center',
          children: [
            { title: 'USD', key: 'TotalUSD', width: 220 },
            { title: 'MMK (in Million)', key: 'TotalMMK', width: 220 },
          ],
          width: 400
        },
       
      ],
          dataLoader: Function,
          show_select: Boolean,
          value: [],
        },
      
        data() {
          return {
            loading: false,
            resetting: false,
            datatable: new DataTable(),
          };
        },
    
        computed: {
            selected: {
                get () {
                    return this.value
                },
                set (value) {
                    this.$emit('input', value)
                }
            },
        },
      
        methods: {
    
          loadItems ({ page, itemsPerPage, sortBy }) {
            this.loading = true
    
            this.dataLoader({ page, itemsPerPage, sortBy }).then((resp) => {
              this.datatable.items = [];
              this.datatable.total = 0;
              console.log(resp);
              if(resp.data) {
                
                this.datatable.items = resp.data.data;
                this.datatable.total =  resp.data.recordsTotal;
              }
              this.resetting = false;
              this.loading = false;
            });
          },
    
          Reload() {
            this.loadItems(this.datatable.getParams());
          },
    
        
      
        },
        
      }
      </script>

<style>
.custom-table-border {
  border: 1px solid black; /* Add border to the table */
}


/* .v-table--density-default > .v-table__wrapper > table > tbody > tr > th, .v-table--density-default >
 .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper >
  table > tfoot > tr > th {
  border: 1px solid black;
  /* Add border between table rows 
} */

.custom-table-border> .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper >
table > tfoot > tr > th {
  border: 1px solid black;
}
</style>