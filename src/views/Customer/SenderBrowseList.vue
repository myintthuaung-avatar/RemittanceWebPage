<template>
    <v-dialog persistent v-model="dialog" width="100%" >
        <v-card>
            <v-toolbar dark color="secondary">
                <v-toolbar-title dark>Customer Sender List</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn @click.stop="ClearDialog()" icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-col cols="12" md="12">
                <v-row density="compact">
                    <v-col cols="12" md="3"><v-text-field label=" Name"variant="outlined" v-model="model.name" persistent-hint density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="3"><v-text-field label=" Nrc/Passport" v-model="model.nrcpassport" variant="outlined" persistent-hint density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="3"><v-text-field label=" Phone no" v-model="model.phone_no" variant="outlined" persistent-hint density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="3" class="mt-2"> 
                        <v-btn size="small" variant="outlined" color="primary" class="mr-2" @click="SearchData()">Search</v-btn>
                        <v-btn dark size="small" variant="outlined" color="warning" @click="ClearData()">Cancel</v-btn>
                    </v-col>
                </v-row></v-col>
                <!-- <v-card flat class="mt-n8"> -->
                    <v-col cols="12" md="12" class="mt-n9">
                        <DataTableHelper ref="DataTable" :headers="headers" :dataLoader="GetAllData" :show_select=false v-model="selected">
                            <template v-slot:[`item.id`]="{ item }">
                                <v-btn variant="text" icon size="small" @click="AddSenderInformation(item)" color="success"><v-icon>mdi-arrow-down-bold-outline</v-icon></v-btn>
                            </template>
                        </DataTableHelper>
                    </v-col>
                <!-- </v-card> -->
        </v-card>
    </v-dialog>
</template>

<script>
import Model from "@/models/personinfo_add.js";
import DataTableHelper from "@/components/base/DataTableHelper";
import Service from "@/services/senderinformation.service.js";
export default {
    components:{DataTableHelper,},
    data() {
        return {
            formname:'',
            dialog: false,
            model: new Model(),
            sender_info_id:0,
            headers: [
                { title: 'Action', width: 40, key: 'id' },
                { title: 'Name', key: 'customer_sender_name', width: 220 },
                { title: 'NRC/Passport', key: 'nrc_passport', width: 220 },
                { title: 'Phone no', key: 'phone_no', width: 220 },
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
    created(){
        this.model.customer_info_id = this.$route.query.id;
    },
    watch:{
        '$route.query.id'( newId) {
        this.model.customer_info_id = newId;
        },
    },
    methods: {

        Show() {
            this.dialog = true;
        },
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
        DetailItem(item){
            window.console.log(item.id)
        },
        ClearData() {
            this.model.name = '';
            this.model.nrcpassport = '';
            this.model.phone_no ='';
        },
        ClearDialog() {
            this.model.name = '';
            this.model.nrcpassport = '';
            this.model.phone_no ='';
            this.dialog = false;
        },
        SearchData(){
            this.$refs.DataTable.Reload(true);
        },
        AddSenderInformation(item){
            var id = item.id;
            this.$emit("PersonId", id);
            this.dialog = false;
        }
    
    }
}
</script>
