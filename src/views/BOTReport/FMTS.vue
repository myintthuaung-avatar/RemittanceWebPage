<template>
  <div>
      <v-col cols="12" md="12">
        <h4>
          Final Money Trasnfer Service Report
        </h4>
          <v-col cols="12" md="12">
            <v-card>
              <v-col cols="12" md="12">
                <v-row dense>
                    <v-col cols="12" md="3">
                      <v-autocomplete clearable v-model="model.company_id" item-title='text' item-value='value' variant="outlined" density="compact" :items="companylist"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="3">
                      <VueDatePickerFrom v-model="model.from_date" :enable-time-picker="false" teleport-center :format="format" />
                      <span v-show="transaction_daterule" style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                      class="text-red">To Date ထည့်ရန်လိုအပ်ပါသည်။</span>
                    </v-col>
                    <v-col cols="12" md="3">
                        <VueDatePickerTo v-model="model.to_date" :enable-time-picker="false" teleport-center />
                        <span v-show="transaction_daterule" style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                          class="text-red">To Date ထည့်ရန်လိုအပ်ပါသည်။</span>
                      </v-col>
                    <v-col cols="12" md="3">
                      <v-btn @click="Filter" variant="outlined" class="mr-3" size="small">
                        <v-icon size="20" color="success">mdi-magnify</v-icon>
                        <v-tooltip activator="parent" location="bottom">Search</v-tooltip>
                    </v-btn>
                    <v-btn @click="ClearData()" variant="outlined" class="mr-3" size="small">
                        <v-icon size="20" color="red">mdi-broom</v-icon>
                        <v-tooltip activator="parent" location="bottom">Clear</v-tooltip>
                    </v-btn>
                    <v-btn @click="Report()" variant="outlined" size="small">
                        <v-icon size="20" color="primary">mdi-note-text</v-icon>
                        <v-tooltip activator="parent" location="bottom">Text Report</v-tooltip>
                    </v-btn>
                    </v-col>
                </v-row>
                
              </v-col>
            </v-card>
          </v-col>
          <v-col cols="12" md="12">
            <DataTableHelper ref="DataTable" :headers="headers" :dataLoader="GetAllData" :show_select=false
              v-model="selected">

              <template v-slot:[`item.id`]="{ item }">
              </template>
            </DataTableHelper>
          </v-col>
      </v-col>
    </div>
</template>
    
    <script>
    
    import Service from "@/services/fmts.service.js";
    import Model from "@/models/botreport.js";
    import DataTableHelper from "@/components/base/DataTableHelper";
    import DropDownService from "@/services/dropdown.service.js";
    import VueDatePickerFrom from '@vuepic/vue-datepicker';
    import VueDatePickerTo from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    export default {
      components: {
        DataTableHelper,VueDatePickerFrom, VueDatePickerTo
      },
    
      data() {
        return {
          excelloading: false,
          loading: true,
          model: new Model(),
          companylist:[],
          selected: [],
          headers: [
            { title: 'License No', key: 'license_no',width:220},
            { title: 'Transaction Date', key: 'transaction_date', width:220},
            { title: 'FI Code', key: 'account_no',width:220 },
            { title: 'Country', key: 'account_no', width:220},
            { title: 'Account No', key: 'account_no',width:220 },
            { title: 'Account Name', key: 'account_name',width:220 },
            { title: 'Currency', key: 'currency_name', width:220},
            { title: 'Status', key: 'status',width:220 },

          ],
    
          roleList:["ADMINISTRATOR", "Administrator","Checker","Approver"],
          format : (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
            }
        };
      },
      
      computed: {
        getUserInfo() {
          return JSON.parse(localStorage.getItem("user"));
        },
        getTableHeaders() {
          let hideColumns = [];
          if(this.showActionButtons === false) {
              hideColumns.push('actions');
          }
          return this.headers.filter((e)=> {
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
          return Service.GetAllForBOTReport(params, this.model);
        },
    
        Filter() {
          this.$refs.DataTable.Reload(true);
        },
        ResetFilter() {
          this.model = new Model();
          this.model.status = -1;
          this.$refs.DataTable.Reload(true);
        },
        Report(){
          var vm = this;
          return new Promise(() => {
            Service.DownLoadReport(vm.model, { itemsPerPage : -1 }).then(response => {
              window.console.log(window.URL.createObjectURL(new Blob([response.data])));
            const url = window.URL.createObjectURL(new Blob([response.data]));
            
            var fileLink = document.createElement("a");
            fileLink.href = url;
            fileLink.setAttribute("download", "FTMS.txt");
            document.body.appendChild(fileLink);
            fileLink.click();
            vm.excelloading = false;
            });
        });
        }
      },
      created(){
        DropDownService.GetCompanyList().then((result) => {
            this.companylist = result.data;
        })
      }
    
    };
    </script>
    