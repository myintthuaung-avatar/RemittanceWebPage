<template>
  <div>
      <v-col cols="12" md="12">
        <h4>
          Electronic Money Trasnfer Service Report
        </h4>
          <v-col cols="12" md="12">
            <v-card>
              <v-col cols="12" md="12">
                <v-row dense>
                    <v-col cols="12" md="3">
                      <VueDatePickerFrom v-model="model.from_date" :enable-time-picker="false" teleport-center :format="format" />
                      <span v-show="from_daterule" style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                      class="text-red">To Date ထည့်ရန်လိုအပ်ပါသည်။</span>
                    </v-col>
                    <v-col cols="12" md="3">
                        <VueDatePickerTo v-model="model.to_date" :enable-time-picker="false" teleport-center />
                        <span v-show="to_daterule" style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
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

              
            </DataTableHelper>
          </v-col>
      </v-col>
    </div>
</template>
    
    <script>
    
    import Service from "@/services/emtsreport.service.js";
    import Model from "@/models/botreport.js";
    import DataTableHelper from "@/components/base/DataTableHelper";
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
          from_daterule:false,
          to_daterule:false,
          headers: [
            { title: 'BOTLicense No', key: 'bOTLicenseNo',width:220},
            { title: 'Transaction Date', key: 'transactionDate', width:220},
            { title: 'Type', key: 'transactionPurposeCode',width:220 },
            { title: 'Country', key: 'senderCountry', width:220},
            { title: 'NetWork Code', key: 'networkCode',width:220 },
            { title: 'NetWork Code Detail', key: 'networkDetailDescription',width:220 },
            { title: 'sender Type', key: 'senderCustomerType', width:220},
            { title: 'Sender Name', key: 'senderName',width:220 },
            { title: 'Sender Code Type', key: 'senderCode',width:220},
            { title: 'Sender Country', key: 'identityCode', width:220},
            { title: 'Sender Address', key: 'senderAddress',width:220 },
            { title: 'Receiver Type', key: 'receiverType', width:220},
            { title: 'Receiver Name', key: 'receiverName',width:220 },
            { title: 'Receiver Country', key: 'receiverCountry',width:220 },
            { title: 'Receiver Address', key: 'receiverAddress', width:220},
            { title: 'Puerpose of Transaction', key: 'transactionPurpose',width:220 },
            { title: 'Transfer Point', key: 'transferPoint',width:220 },
            { title: 'Channel', key: 'channel',width:220},
            { title: 'Currency', key: 'depositCurrency', width:220},
            { title: 'Exchange Rate', key: 'depositExchangeRateq',width:220 },
            { title: 'Deposit Amount', key: 'depositAmount', width:220},
            { title: 'Withdraw Amount', key: 'withdrawAmount',width:220 },
            { title: 'Fee (Foreign Currency)', key: 'foreignCurrencyFee',width:220 },
            { title: 'Fee in THB', key: 'tHBFee', width:220},
            { title: 'Note', key: 'note',width:220 },
          ],
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
        Report(){
          var vm = this;
          return new Promise(() => {
            Service.DownLoadReport(vm.model, { itemsPerPage : -1 }).then(response => {
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
        }
    
        
    
      },
      created()
      {
        this.GetAllData();
      }
    
    };
    </script>
    