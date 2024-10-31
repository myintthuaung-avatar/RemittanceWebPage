
        <template>
            <div>
            <v-dialog persistent v-model="dialog" width="100%" fullscreen="">
                <v-card>
                    <v-col cols="12">
                        <v-row dense="">
                    <v-toolbar dark color="#878787">
                        <v-toolbar-title dark>Excel Import For Customer Information</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn @click.stop="ClearDialog()" icon>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-col cols="12" md="12">
                        <v-row density="compact">
                            <v-col cols="12" md="4">
                                <v-file-input variant="outlined"
                                :prefix="excel"
                                v-model="excel"
                                :prefillOptions="{mediaType: 'application/xls'}"
                                placeholder="Select Excel"
                                outlined
                                @change="handleFileUpload"
                                density="compact"
                                style="color:red"></v-file-input>
                            </v-col>
                            <v-col cols="12" md="1" class="mt-2">
                                <v-tooltip location="bottom">
                                    <template v-slot:activator="{ props }" >
                                        <v-btn size="small" variant="outlined" color="success" class="mr-2" @click="ImportData()" v-bind="props"><v-icon>mdi-arrow-down-bold-outline</v-icon></v-btn>
                                        <!-- <v-btn variant="text" icon size="x-small" @click="ImportData()" color="secondary" ><v-icon>mdi-arrow-down-bold-outline</v-icon></v-btn> -->
                                    </template>
                                    <span class="text-center">Excel Import</span>
                                </v-tooltip>
                                <!-- <v-btn variant="text" icon size="small" @click="ImportData()" color="success"><v-icon>mdi-arrow-down-bold-outline</v-icon></v-btn> -->
                            </v-col>   
                            <v-col cols="12" md="12" class="mt-n8">
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
                                    </v-col>    
                                </v-row>
                                </v-col>
                                </v-expansion-panel-text>
                                </v-expansion-panel>
                                </v-expansion-panels>
                                </v-card>
                                </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="12" class="">
                        <DataTableHelper ref="DataTable" :headers="headers" :dataLoader="GetAllData"  :show_select=false v-model="selectedRows">
                            <template v-slot:[`item.id`]="{ item }">
                                <v-btn variant="text" icon size="x-small" @click="DetailItem(item)" color="secondary" v-bind="props"><v-icon>mdi-eye-outline</v-icon></v-btn>
                            </template>
                        </DataTableHelper>
                    </v-col>
                        </v-row>
                </v-col>
                </v-card>
            </v-dialog>
            </div>
        </template>
        
        <script>
        import Model from "@/models/personinfo_add.js";
        import DataTableHelper from "@/components/base/DataTableHelper";
        import service from "@/services/excelImport.service.js";
        import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
        export default {
            components:{DataTableHelper,VueDatePicker},
            data() {
                return {
                    excel:"",
                    sendaction:true,
                    formname:'',
                    selectedFile: null,
                    dialog: false,
                    model: new Model(),
                    selectedRows: [],
                    sender_info_id:0,
                    headers: [
                    // { title: 'Action', width: 220, key: 'id' },
                    { title: 'Remittance No', key: 'remittance_no', width: 220 },
                    // { title: 'Status', key: 'status', width: 220},
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
            created(){
                this.model.customer_info_id = this.$route.query.id;
            },
            watch:{
                '$route.query.id'( newId) {
                this.model.customer_info_id = newId;
                },
            },
            methods: {
                getSel() {
                return this.selectedRows.length;
                },
                Show() {
                    this.dialog = true;
                },
                GetAllData(params) {
                    return service.GetAll(params, this.model);
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
                    this.excel = "";
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
                },
                handleFileUpload(event) {
                this.selectedFile = event.target.files[0];
                },
                ImportData(){
                    var vm = this;
                    service.SaveOrUpdate(this.selectedFile).then((result) => {
                    var message = result.data.message;
                        if (result.data.data.success) {
                            vm.$root.AlertDialog.Show({ message: message, color: 'success' });
                            vm.$emit("AfterSaved");
                            this.$refs.DataTable.Reload(true);
                            vm.ClearData();

                        } else {
                            vm.$root.AlertDialog.Show({ message: message, color: 'error' });
                        }
                     })
                }
            
            }
        }
        </script>