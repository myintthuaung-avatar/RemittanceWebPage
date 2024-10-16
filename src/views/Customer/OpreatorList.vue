<template>
    <div>
    <!-- <v-container> -->
        <v-col cols="12" md="12">
        <v-row dense>
            <v-col cols="12" md="2"><h3 class="ml-5">Customer List</h3></v-col>
            <v-col cols="12" md="4">
                <router-link :to="{
                    path: route }" style="display: inline-block;text-decoration:none;">
                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }" >
                            <v-btn class="ml-5" size="small" variant="outlined" color="#000080" @click="NewItem" v-bind="props">
                                New
                            </v-btn>
                        </template>
                        <span class="text-center">Entry</span>
                    </v-tooltip>
                    </router-link>
                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }" >
                            <v-btn class="ml-5" size="small" variant="outlined" color="success" @click="ExcelImport()" v-bind="props">
                                Excel Import
                            </v-btn>
                        </template>
                        <span class="text-center">Excel Import</span>
                    </v-tooltip>
            </v-col>
            <v-col cols="12" md="12" class="">
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
            <v-col cols="12" md="12">
            <DataTableHelper ref="DataTable" :headers="headers" :dataLoader="GetAllData" :show_select=false v-model="selected">
                <template v-slot:[`item.id`]="{ item }" style="background-color:green;">
                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }" >
                            <v-btn variant="text" icon size="x-small" @click="DetailItem(item)" color="secondary" v-bind="props"><v-icon>mdi-eye-outline</v-icon></v-btn>
                        </template>
                        <span class="text-center">Detail</span>
                    </v-tooltip>
                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }" >
                            <v-btn v-show="item.opreator_check == false " variant="text" icon size="x-small" @click="EditItem(item)" color="warning" v-bind="props"><v-icon>mdi-pencil</v-icon></v-btn>
                        </template>
                        <span class="text-center">Edit</span>
                    </v-tooltip>
                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }" >
                            <v-btn v-show="item.opreator_check == false" variant="text" icon size="x-small" @click="DeleteItem(item)" color="red" v-bind="props"><v-icon>mdi-delete-outline</v-icon></v-btn>
                        </template>
                        <span class="text-center">Delete</span>
                    </v-tooltip>
                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }" >
                            <v-btn size="x-small" class="ma-2" color="success" icon="mdi-thumb-up" v-show="item.approver_check == true" variant="text" v-bind="props"></v-btn>
                        </template>
                        <span class="text-center">Status</span>
                    </v-tooltip>
                    
                </template>
            </DataTableHelper>
            </v-col>
            <CustomerDetailView ref="CustomerDetailModal" @AfterSaved="ResetFilter()" />
            <ExcelImportList ref="ExcelImportListModal" @AfterSave="ResetFilter()"/>
        </v-row>
    </v-col>
</div>
    <!-- </v-container> -->
</template>
<script>
import Service from "@/services/customerinformation.service.js";
import Model from "@/models/customerinformationsearch.js";
import CustomerDetailView from "./Detail.vue"
import DataTableHelper from "@/components/base/DataTableHelper";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import ExcelImportList from "./ExcelImportList.vue";
export default {
    components:{DataTableHelper,CustomerDetailView,VueDatePicker,ExcelImportList},
    data() {
        return {
            route:"/customerinfodrawer",
            excelloading: false,
            loading: true,
            selected: [],
            id:0,
            model: new Model(),
            headers: [
                { title: 'Action', width: 220, key: 'id' },
                { title: 'Remittance No', key: 'remittance_no', width: 220 },
                { title: 'Status', key: 'status', width: 220},
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
            return this.selected.length;
        },
    },
    methods: {
        GetAllData(params) {
            return Service.GetAll(params, this.model);
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
            this.$refs.CustomerDetailModal.Show(item.id);
        },
        ExcelImport(){
            this.$refs.ExcelImportListModal.Show();
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
                                window.console.log(response.data);
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
                fileLink.setAttribute("download", "Customer List.xls");
                document.body.appendChild(fileLink);
                fileLink.click();
                vm.excelloading = false;
                });
            });
        },
    },
}
</script>

<!-- <style>
.v-table--density-default > .v-table__wrapper > table > tbody > tr > th, .v-table--density-default > .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > th {
  height: calc(var(--v-table-header-height) + 0px);
  border: 1px solid black;
}
.v-table--density-default > .v-table__wrapper > table > tr > th, .v-table--density-default > .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > th {
    height: calc(var(--v-table-header-height) + 0px);
    border: 1px solid black;
  }
  .v-table--density-default > .v-table__wrapper > table > td > th, .v-table--density-default > .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > th {
    height: calc(var(--v-table-header-height) + 0px);
    border: 1px solid black;
  }
</style> -->
