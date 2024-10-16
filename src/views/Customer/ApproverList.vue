<template>
    <div>
    <v-col cols="12" md="12">
        <v-row dense>
            <v-col cols="12" md="12" class="mt-2">
                <v-form @submit.prevent="SendData" autocomplete="off" ref="form" v-model="valid">
                <v-row density="compact">
                <v-col cols="12" md="4"><h3 class="ml-5">Customer List For Approver</h3></v-col>
                <v-col cols="12" md="2">
                    <v-btn type="submit" :disabled="getSel <= 0" variant="outlined" size="small" class="mr-3">
                        <v-icon size="20" color="primary">mdi-checkbox-multiple-marked</v-icon>
                        <v-tooltip activator="parent" location="bottom">Multiple Approved</v-tooltip>
                    </v-btn>
                </v-col>
                <v-col cols="12" md="12" class="mt-n4">
                <v-card>
                <v-expansion-panels>
                <v-expansion-panel title="Search" >
                    <v-expansion-panel-text>
                    <v-col cols="12" md="12">
                    <v-row dense class="mt-3">
                        <v-col cols="12" md="3">
                            <v-text-field :elevation="0" density="compact" v-model="model.remittance_no" label="Remittance No" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <VueDatePicker v-model="model.remittance_from_date" :enable-time-picker="false" teleport-center placeholder="From Date" utc/>
                        </v-col>
                        <v-col cols="12" md="3">
                            <VueDatePicker v-model="model.remittance_to_date" :enable-time-picker="false" teleport-center placeholder="To Date" utc/>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field :elevation="0" density="compact" v-model="model.sender_name" label="Sender Name" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field :elevation="0" density="compact" v-model="model.receiver_name" label="Receiver Name" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field :elevation="0" density="compact" v-model="model.deposit_amount" label="Deposit Amount" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field :elevation="0" density="compact" v-model="model.deposit_exchange_rate" label="Deposit Exchange" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field :elevation="0" density="compact" v-model="model.sender_phone_no" label="Sender Phone no" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field :elevation="0" density="compact" v-model="model.receiver_phone_no" label="Receiver Phone no" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-autocomplete v-model="model.user_id" item-title='text' label="User" item-value='value' variant="outlined" density="compact" :items="userlist"></v-autocomplete>
                        </v-col>
                        <v-checkbox v-model="model.excelimport" label="Excel Import Data"></v-checkbox>
                    <v-col cols="12" md="3">
                        <v-btn @click="Filter" variant="outlined" size="small" class="mr-3">
                            <v-icon size="20" color="success">mdi-magnify</v-icon>
                            <v-tooltip activator="parent" location="bottom">Search</v-tooltip>
                        </v-btn>
                        <v-btn variant="outlined" @click.stop="ClearData()" size="small" class="mr-3">
                            <v-icon size="small" color="red">mdi-broom</v-icon>
                            <v-tooltip activator="parent" location="bottom">Clear</v-tooltip>
                        </v-btn>
                        <v-btn @click="ExcelReport()" variant="outlined" size="small">
                            <v-icon size="20" color="success">mdi-file-excel</v-icon>
                            <v-tooltip activator="parent" location="bottom">Excel Report</v-tooltip>
                        </v-btn>
                    </v-col>
                </v-row>
                </v-col>
                </v-expansion-panel-text>
                </v-expansion-panel>
                </v-expansion-panels>
                </v-card>
                </v-col>
                <v-col cols="12" md="12" class="mt-n3">
                    <DataTableHelper ref="DataTable" :headers="headers" :dataLoader="GetAllData" :show_select=sendaction v-model="selectedRows">
                        <template v-slot:[`item.id`]="{ item }" >
                            <v-tooltip location="bottom">
                                <template v-slot:activator="{ props }" >
                                    <v-icon size="x-small" @click="DetailItem(item)" color="secondary" v-bind="props">mdi-eye-outline</v-icon>
                                    <!-- <v-btn variant="text" icon size="x-small" @click="DetailItem(item)" color="secondary" v-bind="props"><v-icon>mdi-eye-outline</v-icon></v-btn> -->
                                </template>
                                <span class="text-center">Detail</span>
                            </v-tooltip>
                            <v-tooltip location="bottom">
                                <template v-slot:activator="{ props }" >
                                    <v-icon size="x-small" class="ma-2" color="success" icon="mdi-thumb-up" v-show="item.approver_check == true" variant="text" v-bind="props">mdi-thumb-up</v-icon>
                                    <!-- <v-btn size="x-small" class="ma-2" color="success" icon="mdi-thumb-up" v-show="item.approver_check == true" variant="text" v-bind="props"></v-btn> -->
                                </template>
                                <span class="text-center">Status</span>
                            </v-tooltip>
                            
                        </template>
                    </DataTableHelper>
                </v-col>
                <CustomerDetailView ref="CustomerDetailModal" />
            </v-row>
        </v-form>
                <!-- </v-card> -->
            
            </v-col>
        </v-row>
    </v-col>
    </div>
</template>
<script>
import Service from "@/services/customerinformation.service.js";
import DropDownService from "@/services/dropdown.service.js";
import Model from "@/models/customerinformationsearch.js";
import CustomerDetailView from "./Detail.vue"
import DataTableHelper from "@/components/base/DataTableHelper";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
export default {
    components:{DataTableHelper,CustomerDetailView,VueDatePicker},
    data() {
        return {
            route:"/customerinfodrawer",
            excelloading: false,
            loading: true,
            sendaction:true,
            selected: [],
            selectedRows: [],
            selecteddatalist:[],
            userlist:[],
            id:0,
            model: new Model(),
            headers: [
                { title: 'Action', width: 250, key: 'id' },
                { title: 'Remittance No', key: 'remittance_no', width: 220 },
                { title: 'Status', key: 'status', width: 220 },
                { title: 'Remittance Date', key: 'remittance_date', width: 220 },
                { title: 'Sender Name', key: 'customer_sender_name', width: 220 },
                { title: 'Sender PhoneNo', key: 'phone_no', width: 220 },
                { title: 'Receiver Name', key: 'customer_receiver_name', width: 220 },
                { title: 'Receiver No', key: 'receiver_phoneno', width: 220 },
                { title: 'Deposit Amount', key: 'deposit_amount', width: 220 },
                { title: 'Deposit Exchange Rate', key: 'deposit_exchange_rate', width: 220 },
            ],
        }
    },
    created(){
        DropDownService.GetUserList().then((result) => {
            this.userlist = result.data;
        })
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
        getSel() {
            return this.selectedRows.length;
        },
    },
    methods: {
        SendData() {
            var vm = this;
            vm.selectedRows.forEach(function (item) {
            vm.selecteddatalist.push(item.id);
          });
            Service.SendData(vm.selecteddatalist).then((result) => {
                if (result.data) {
                  var message = result.data.messages[0];
                  if (result.data.success) {
                      vm.$root.AlertDialog.Show({ message: message, color: 'success'});
                      vm.$emit("AfterSaved");
                      this.$refs.DataTable.Reload(true);
                    } 
                    else {
                      vm.$root.AlertDialog.Show({ message: message , color: 'error'});
                    }
                  }
                });
                vm.selectedRows= [];
                vm.selecteddatalist=[];
            },
        GetAllData(params) {
            this.model.status = -1;
            return Service.GetAllForApproverList(params, this.model);
        },
        loadItems({ page, itemsPerPage, sortBy }) {
            this.loading = true
            FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
                this.serverItems = items
                this.totalItems = total
                this.loading = false
            })
        },
        ResetFilter() {
            this.model = new Model();
            this.model.status = -1;
            this.$refs.DataTable.Reload(true);
        },
        ShowLoading(val) {
            this.$refs.DataTable.loading = val;
        },
        DetailItem(item) {
            this.$refs.CustomerDetailModal.SuperAdminShow(item.id);
        },
        EditItem(item) {
            var vm =this;
            if(item.id>0){
                this.$router.push({
                         path:"customerinfodrawer",
                         query:{
                             id:item.id,
                         },
                     });
            }
            
                    vm.ShowLoading(false);
                    vm.$refs.EntryModal.Show("edit");
        },

        DeleteItem(item) {
            var vm = this;
            vm.$root.ConfirmBoxModal.open().then(res => {
                if (res) {
                    vm.ShowLoading(true);
                    Service.Delete(item.id).then(
                        (response) => {
                            if (response.data) {
                                var message = response.data.messages[0];
                                if (response.data.success) {
                                    vm.$root.AlertDialog.Show({ message: message, color: 'success' });
                                    vm.ResetFilter();

                                } else {
                                    vm.$root.AlertDialog.Show({ message: message, color: 'error' });
                                }
                            }
                        },
                        (error) => {
                            console.error(error);
                            vm.ShowLoading(false);
                        })
                }
            });
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
                fileLink.setAttribute("download", "Approver List.xls");
                document.body.appendChild(fileLink);
                fileLink.click();
                vm.excelloading = false;
                });
            });
        },
        ClearData(){
            this.model.remittance_from_date= "";
            this.model.remittance_to_date = "";
            this.model.remittance_no = "";
            this.model.sender_name = "";
            this.model.receiver_name = "";
            this.model.deposit_amount = "";
            this.model.deposit_exchange_rate = "";
            this.model.sender_phone_no = "";
            this.model.receiver_phone_no = "";
            this.model.user_id = null;
            this.model.excelimport = "";
            this.$refs.DataTable.Reload(true);
        },
    },
}
</script>

