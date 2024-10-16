<template>
    <v-container>
        <v-row dense>
            <v-col cols="12" md="12">
                <v-card>
                    <v-card-title>
                        <v-col cols="12" md="12">
                        <v-row dense>
                        <v-col cols="12" md="2">Cash Book Listing</v-col>
                        <v-col cols="12" md="4">
                            <v-toolbar density="compact" color="white" class="">
                                    <v-col cols="12" md="2">
                                        <v-tooltip location="bottom">
                                            <template v-slot:activator="{ props }">
                                                <v-btn size="small" variant="outlined" color="#000080" @click="NewItem"
                                                    v-bind="props">
                                                    New</v-btn>
                                            </template>
                                            <span class="text-center">Entry</span>
                                        </v-tooltip>
                                    </v-col>
                                </v-toolbar>
                            </v-col>
                        </v-row>
                    </v-col>
                    </v-card-title>
                        <v-row dense class="mt-n6">
                            <v-col cols="12" md="12">
                                <v-expansion-panels>
                                    <v-expansion-panel title="Search" height="70">
                                        <v-row>
                                            <v-col cols="12" md="3">
                                                <v-expansion-panel-text>
                                                    <v-text-field :elevation="0" density="compact"
                                                        v-model="model.transaction_no" label="Transaction_No"
                                                        variant="outlined"></v-text-field>
                                                </v-expansion-panel-text>
                                            </v-col>
                                            <v-col cols="12" md="3">
                                                <v-expansion-panel-text>
                                                    <VueDatePicker id="date-picker" v-model="model.transaction_date"
                                                    :format="format" variant="outlined" :enable-time-picker="false" density="compact"
                                                        placeholder="Pick a date" teleport-center />
                                                </v-expansion-panel-text>
                                            </v-col>
                                            <v-col cols="12" md="4">
                                                <v-expansion-panel-text>
                                                    <v-autocomplete v-model="model.account_id" item-title='text'
                                                        label="Account" item-value='value' variant="outlined"
                                                        density="compact" :items="Accountlist"></v-autocomplete>
                                                </v-expansion-panel-text>
                                            </v-col>
                                            <v-col cols="12" md="2">
                                                <v-expansion-panel-text>
                                                    <v-btn variant="text" @click="Filter" outlined>
                                                        <v-icon size="20" color="success">mdi-magnify</v-icon>
                                                    </v-btn>
                                                    <v-btn variant="text" icon @click.stop="ClearData()" outlined class="mr-n3">
                                                    <v-icon size="small" color="red">mdi-broom</v-icon>
                                                    </v-btn>
                                                </v-expansion-panel-text>
                                            </v-col>
                                        </v-row>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-col>
                        </v-row>
                            <DataTableHelper class="mt-2" ref="DataTable" :headers="headers" :dataLoader="GetAllData"
                                :show_select=false v-model="selected">

                                <template v-slot:[`item.id`]="{ item }">
                                    <v-btn variant="text" icon size="x-small" @click="EditItem(item)"
                                        color="warning"><v-icon>mdi-pencil</v-icon>
                                        <v-tooltip activator="parent" location="bottom">Edit</v-tooltip>
                                    </v-btn>
                                    <v-btn variant="text" icon size="small" @click="DeleteItem(item)"
                                        color="red"><v-icon>mdi-delete-outline</v-icon>
                                        <v-tooltip activator="parent" location="bottom">Delete</v-tooltip>
                                    </v-btn>
                                </template>
                            </DataTableHelper>
                            <Entry @AfterSaved="ResetFilter" ref="EntryModal" />
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Entry from "./Entry.vue";
import Service from "@/services/cashTransaction.service";
import VueDatePicker from '@vuepic/vue-datepicker';
import Model from "@/models/cashTransaction";
import '@vuepic/vue-datepicker/dist/main.css';
import DataTableHelper from "@/components/base/DataTableHelper";
import DropDownService from "@/services/dropdown.service.js";

export default {
    components: { Entry, DataTableHelper, VueDatePicker },
    data() {
        return {
            excelloading: false,
            loading: true,
            selected: [],
            model: new Model(),
            Accountlist: [],
            headers: [
                { title: 'Action', width: 140, key: 'id' },
                { title: 'Account', width: 150,key: 'account_name'},
                { title: 'Transaction No', key: 'transaction_no', width: 150 },
                { title: 'Transaction Date', key: 'transaction_date', width: 150 },
                { title: 'CashBook Type', key: 'cashbooktype_name', width: 150 },
                { title: 'Currency', key: 'currency_name', width: 100 },
                { title: 'Amount', key: 'amount', width: 100 },
                { title: 'User', key: 'createdby_name', width: 100 },
            ],
            format: (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
      }
        }
    },
    created() {
        this.model.transaction_date = "";
        DropDownService.GetAccountList().then((result) => {
            this.Accountlist = result.data;
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
            return this.selected.length;
        },
    },
    methods: {
        GetAllData(params) {
            this.model.status = -1;
            return Service.GetAll(params, this.model);
        },
        // loadItems({ page, itemsPerPage, sortBy }) {
        //     this.loading = true
        //     FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        //         this.serverItems = items
        //         this.totalItems = total
        //         this.loading = false
        //     })
        //},
        ResetFilter() {
            this.model = new Model();
            this.model.status = -1;
            this.$refs.DataTable.Reload(true);
        },
        ClearData() {
            this.model.transaction_no = "";
            this.model.transaction_date = "";
            this.model.account_id = "";

            this.dialog = false;
        },
        ShowLoading(val) {
            this.$refs.DataTable.loading = val;
        },
        NewItem() {
            this.$refs.EntryModal.Show("new");
        },
        EditItem(item) {
            var vm = this;
            vm.ShowLoading(true);
            Service.GetById(item.id).then(
                (response) => {
                    window.console.log(response.data)
                    vm.$refs.EntryModal.model = response.data;
                    vm.$refs.EntryModal.disabled = true;

                    vm.ShowLoading(false);
                    vm.$refs.EntryModal.Show("edit");
                });
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
                            ct.ShowLoading(false);
                        })
                }
            });
        },
        Filter() {
            this.$refs.DataTable.Reload(true);
        },

    },
}
</script>