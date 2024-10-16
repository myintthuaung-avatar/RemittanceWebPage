<template>
    <v-container>
        <v-row dense>
            <v-col cols="12" md="12">
                <v-card>
                    <template v-slot:title>
                        Role List
                    </template>

                    <v-col>
                        <v-toolbar density="compact" color="white" class="mb-2">
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
                            <v-col cols="12" md="4"></v-col>
                            <v-col cols="12" md="5">
                                <v-card-text>
                                    <v-text-field :elevation="0" density="compact" v-model="model.name" variant="solo"
                                        label="Search" single-line hide-details clearable @click:clear="ResetFilter"
                                        v-on:keyup.enter="Filter"></v-text-field>
                                </v-card-text>
                            </v-col>
                        </v-toolbar>
                        <DataTableHelper ref="DataTable" :headers="headers" :dataLoader="GetAllData" :show_select=false
                            v-model="selected">

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
                    </v-col>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Entry from "./Entry.vue";
import Service from "@/services/role.service";
import Model from "@/models/company";
import DataTableHelper from "@/components/base/DataTableHelper";

export default {
    components:{Entry,DataTableHelper},
    data() {
        return {
            excelloading: false,
            loading: true,
            selected: [],
            model: new Model(),
            headers: [
                { title: 'Action', width: 140, key: 'id' },
                { title: 'Role Name', key: 'name', width: 220 },
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
            this.model.status = -1;
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
        NewItem() {
            this.$refs.EntryModal.Show("new");
        },
        EditItem(item) {
            var rn = this;
            rn.ShowLoading(true);
            Service.GetById(item.id).then(
                (response) => {
                    window.console.log(response.data)
                    rn.$refs.EntryModal.model = response.data;
                    rn.$refs.EntryModal.disabled = true;

                    rn.ShowLoading(false);
                    rn.$refs.EntryModal.Show("edit");
                });
        },

        DeleteItem(item) {
            var rn = this;
            rn.$root.ConfirmBoxModal.open().then(res => {
                if (res) {
                    rn.ShowLoading(true);
                    Service.Delete(item.id).then(
                        (response) => {
                            if (response.data) {
                                var message = response.data.messages[0];
                                if (response.data.success) {
                                    rn.$root.AlertDialog.Show({ message: message, color: 'success' });
                                    rn.ResetFilter();

                                } else {
                                    rn.$root.AlertDialog.Show({ message: message, color: 'error' });
                                }
                            }
                        },
                        (error) => {
                            console.error(error);
                            rn.ShowLoading(false);
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

