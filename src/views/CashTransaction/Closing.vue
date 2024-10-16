<template>
    <div>
        <v-col cols="12" md="12">
            <v-card>
                <v-card-title>
                    Cash Book Closing
                </v-card-title>
                <v-col cols="12" md="12">
                    <v-row dense class="mt-n6">
                        <v-expansion-panels class="mb-4">
                            <v-col cols="12" md="12">
                                <v-expansion-panels>
                                    <v-expansion-panel title="Search" height="70">
                                        <v-row>
                                            <v-col cols="12" md="4">
                                                <v-expansion-panel-text>
                                                    <VueDatePicker id="date-picker" v-model="model.transaction_date"
                                                        :format="format" variant="outlined" :enable-time-picker="false"
                                                        density="compact" placeholder="Pick a date" teleport-center />
                                                </v-expansion-panel-text>
                                            </v-col>
                                            <v-col cols="12" md="4">
                                                <v-expansion-panel-text>
                                                    <v-btn @click="Filter" variant="outlined" class="mr-3">
                                                        <v-icon size="20" color="success">mdi-magnify</v-icon>
                                                    </v-btn>
                                                    <v-btn @click="ClearData()" variant="outlined" class="mr-3">
                                                        <v-icon size="20" color="red">mdi-broom</v-icon>
                                                    </v-btn>
                                                    <v-btn @click="Report()" variant="outlined" size="small">
                                                        <v-icon size="20" color="success">mdi-file-excel</v-icon>
                                                    </v-btn>
                                                </v-expansion-panel-text>
                                            </v-col>
                                        </v-row>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-col>
                        </v-expansion-panels>
                    </v-row>
                    <DataTableHelper ref="DataTable" :headers="headers" :dataLoader="GetAllByDate" :show_select=false
                        v-model="selected">
                    </DataTableHelper>
                    <v-col>
                        <v-btn @click="GetAllByDateClosing()" variant="outlined">
                            <v-icon size="20" color="red">mdi-chart-donut-variant</v-icon>
                            <v-tooltip activator="parent" location="bottom">Proceed</v-tooltip>
                        </v-btn>
                    </v-col>
                </v-col>
            </v-card>
        </v-col>
    </div>
</template>

<script>
import Service from "@/services/cashTransaction.service";
import VueDatePicker from '@vuepic/vue-datepicker';
import Model from "@/models/cashTransaction";
import '@vuepic/vue-datepicker/dist/main.css';
import DataTableHelper from "@/components/base/DataTableHelper";

export default {
    components: { DataTableHelper, VueDatePicker },
    data() {
        return {
            excelloading: false,
            loading: true,
            selected: [],
            model: new Model(),
            Accountlist: [],
            headers: [
                { title: 'Account', width: 200, key: 'account_name' },
                { title: 'CashBook Type', key: 'cashbooktype_name', width: 200 },
                { title: 'Amount', key: 'amount', width: 150 },
                { title: 'Currency', key: 'currency_name', width: 150 },

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
        const current = new Date();
        this.model.transaction_date = current;
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
        GetAllByDate(params) {
            this.model.closingDate = "";
            this.model.status = -1;
            return Service.GetAllByDate(params, this.model);
        },
        GetAllByDateClosing(params) {
            this.model.closingDate = "closing";
            Service.GetAllByDate(params, this.model)
                .then((result) => {
                    if (result.data) {
                        var message = result.data.messages[0];
                        if (result.data.success) {
                            this.$root.AlertDialog.Show({ message: message, color: 'success' });
                            // After fetching data, reload the DataTable
                            this.$refs.DataTable.Reload(true); 
                        } else {
                            this.$root.AlertDialog.Show({ message: message, color: 'error' });
                        }
                    }
                })
                .catch(error => {
                    console.error("Error fetching closing date data:", error);
                });
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
        Filter() {
            this.$refs.DataTable.Reload(true);
        },

    },
}
</script>