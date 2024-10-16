<template>
    <div>
        <v-dialog persistent v-model="dialog" width="100%">
            <v-card>
                <v-toolbar dark color="rgb(0 208 250)">
                    <v-toolbar-title dark>{{ formname }}</v-toolbar-title>
                    <v-spacer></v-spacer>

                    <v-btn @click.stop="ClearData()" icon>
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-form @submit.prevent="SaveOrUpdate" autocomplete="off" ref="form" v-model="valid">
                <v-col cols="12" md="12">
                    <v-row dense>
                    <v-col cols="12" md="4">
                    <v-row dense>
                        <v-col cols="12" md="5"><label class="font-weight-regular">Company<span
                                    class="text-red">*</span></label></v-col>
                        <v-col cols="12" md="7">
                            <v-autocomplete v-model="model.company_id" item-title='text'
                                label="Company" item-value='value' variant="outlined"
                                density="compact" @click="onCompanyChange()" :items="Companylist"
                                :rules="companyrule"></v-autocomplete>
                        </v-col>
                    </v-row>
                    </v-col>
                    <v-col cols="12" md="4" style="padding-left: 0%;">
                        <v-row dense>
                            <v-col cols="12" md="5"><label class="font-weight-regular">Account</label></v-col>
                            <v-col cols="12" md="7">
                                <v-autocomplete v-model="model.account_id" item-title='text'
                                    label="Account" item-value='value' variant="outlined"
                                    density="compact" :items="Accountlist"
                                    :rules="accountrule"></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-row dense>
                            <v-col cols="12" md="4"><label class="font-weight-regular">Currency
                                    <span class="text-red">*</span></label></v-col>
                            <v-col cols="12" md="8"><v-autocomplete v-model="model.currency_id"
                                    item-title='text' label="Currency" item-value='value'
                                    variant="outlined" density="compact" :items="Currencylist"
                                    :rules="currencyrule"></v-autocomplete></v-col>
                        </v-row>
                    </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="12">
                <v-row dense>
                    <v-col cols="12" md="2">
                        <v-avatar size="x-small" style="text-align: center">
                            <v-img class="img" alt="John" src="../../assets/Thai_Flag.png"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col cols="12" md="10"></v-col>
                    <v-col cols="12" md="1" v-show="show_THB"><label class="font-weight-regular">Quantity 1</label></v-col>
                    <v-col cols="12" md="3"  v-show="show_THB"><v-text-field v-model="model.note_qty_1" variant="outlined" density="compact" type="number"></v-text-field></v-col>
                    <v-col cols="12" md="1"  v-show="show_THB"><label class="font-weight-regular">2</label></v-col>
                    <v-col cols="12" md="3"  v-show="show_THB"><v-text-field type="number" v-model="model.note_qty_2"  variant="outlined" density="compact" ></v-text-field></v-col>
                    <v-col cols="12" md="1"  v-show="show_THB"><label class="font-weight-regular">5</label></v-col>
                    <v-col cols="12" md="3"  v-show="show_THB"><v-text-field type="number" v-model="model.note_qty_5"  variant="outlined" density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="1"  v-show="show_THB"><label class="font-weight-regular"> 10</label></v-col>
                    <v-col cols="12" md="3"  v-show="show_THB"><v-text-field type="number" v-model="model.note_qty_10" variant="outlined" density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="1"  v-show="show_THB"><label class="font-weight-regular">20</label></v-col>
                    <v-col cols="12" md="3"  v-show="show_THB"><v-text-field type="number" v-model="model.note_qty_20" variant="outlined" density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="1"  v-show="show_THB"><label class="font-weight-regular">50</label></v-col>
                    <v-col cols="12" md="3"  v-show="show_THB"><v-text-field type="number" v-model="model.note_qty_50" variant="outlined" density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="1"><label class="font-weight-regular">100</label></v-col>
                    <v-col cols="12" md="3"><v-text-field type="number" v-model="model.note_qty_100" variant="outlined" density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="1" v-show="show_MMK"><label class="font-weight-regular">200</label></v-col>
                    <v-col cols="12" md="3" v-show="show_MMK"><v-text-field type="number" v-model="model.note_qty_200" variant="outlined" density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="1"><label class="font-weight-regular">500</label></v-col>
                    <v-col cols="12" md="3"><v-text-field type="number" v-model="model.note_qty_500" variant="outlined" density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="1"><label class="font-weight-regular">1000</label></v-col>
                    <v-col cols="12" md="3"><v-text-field type="number" v-model="model.note_qty_1000" variant="outlined" density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="1" v-show="show_MMK"><label class="font-weight-regular">5000</label></v-col>
                    <v-col cols="12" md="3" v-show="show_MMK"><v-text-field type="number" v-model="model.note_qty_5000" variant="outlined" density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="1" v-show="show_MMK"><label class="font-weight-regular">10000</label></v-col>
                    <v-col cols="12" md="3" v-show="show_MMK"><v-text-field type="number" v-model="model.note_qty_10000" variant="outlined" density="compact"></v-text-field></v-col>
                    <v-col cols="12" md="12">
                        <v-card-actions class="text-right">
                            <v-spacer></v-spacer>
                            <v-btn type="submit" size="small" variant="outlined"
                                color="primary">Save</v-btn>
                            <v-btn dark size="small" variant="outlined" color="warning"
                                @click.stop="ClearCancel()">Clear</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
                
                 </v-col>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Model from "@/models/denoBalance.js";
import Service from "@/services/denominationbalance.service.js";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import DropDownService from "@/services/dropdown.service.js";
export default {
    components: { VueDatePicker },
    data() {
        return {
            formname: '',
            dialog: false,
            show_THB: false,
            show_MMK:true,
            model: new Model(),
            Currencylist: [],
            Companylist: [],
            Accountlist:[],
            currencyrule: [(v) => !!v || "Please Select Currency !"],
            accountrule: [(v) => !!v || "Please Select Account !"],
            companyrule: [(v) => !!v || "Please Select Account !"],
    
        }
    },
    watch: {
        'model.company_id'(val) {
            if (val != null) {
                DropDownService.GetAccountListByCompany(val).then((result) => {
                    this.Accountlist = result.data;
                })
            }
        },
        'model.currency_id'(val) {
            if (val == 1) {
                this.show_MMK = true;
                this.show_THB = false;
            }
            else if(val == 2){
                this.show_THB = true;
                this.show_MMK = false;
            }
            else
            {
                this.show_MMK = true;
                this.show_THB = true;
            }
        }
        
    },
    methods: {

        Show(fname) {
            this.dialog = true;
            if (fname == "new") {
                this.formname = "Denomination Balance Entry";
            } else {
                this.formname = "Edit Denomination Balance Entry";
            }
        },
        ValidateModel() {
            return this.$refs.form.validate();
        },
        SaveOrUpdate() {
            this.ValidateModel();
            if (this.valid == true) {
                window.console.log(this.model)
                Service.SaveOrUpdate(this.model).then((result) => {
                    if (result.data) {
                        var message = result.data.messages[0];
                        if (result.data.success) {
                            this.$root.AlertDialog.Show({ message: message, color: 'success' });
                            this.$emit("AfterSaved");
                            this.ClearData();
                        } else {
                            this.$root.AlertDialog.Show({ message: message, color: 'error' });
                        }
                    }
                });
            }
        },

        ClearData() {
            this.model.account_id = null;
            this.model.currency_id = null;
            this.model.company_id = null;
            this.model.note_qty_1 = 0;
            this.model.note_qty_2 = 0;
            this.model.note_qty_5 = 0;
            this.model.note_qty_10 = 0;
            this.model.note_qty_20 = 0;
            this.model.note_qty_50 = 0;
            this.model.note_qty_100 = 0;
            this.model.note_qty_200 = 0;
            this.model.note_qty_500 = 0;
            this.model.note_qty_1000 = 0;
            this.model.note_qty_5000 = 0;
            this.model.note_qty_10000 = 0;
            this.dialog = false;
        },
        ClearCancel() {
            this.model.company_id = null;
            this.model.account_id = null;
            this.model.currency_id = null;
            this.model.note_qty_1 = 0;
            this.model.note_qty_2 = 0;
            this.model.note_qty_5 = 0;
            this.model.note_qty_10 = 0;
            this.model.note_qty_20 = 0;
            this.model.note_qty_50 = 0;
            this.model.note_qty_100 = 0;
            this.model.note_qty_200 = 0;
            this.model.note_qty_500 = 0;
            this.model.note_qty_1000 = 0;
            this.model.note_qty_5000 = 0;
            this.model.note_qty_10000 = 0;
        },
        onCompanyChange() {
            this.model.account_id = null;
        },
    },
    created() {
        // DropDownService.GetCurrencyList().then((result) => {
        //     this.Currencylist = result.data;
        // });
        // DropDownService.GetCashBookTypeList().then((result) => {
        //     this.CashBookTypelist = result.data;
        // });
        // DropDownService.GetAccountList().then((result) => {
        //     this.Accountlist = result.data;
        // })
        DropDownService.GetCurrencyList().then((result) => {
            this.Currencylist = result.data;
        });
        DropDownService.GetCompanyList().then((result) => {
            this.Companylist = result.data;
        });
    },
}
</script>
<style scoped>
.v-text-field fieldset,
.v-text-field .v-input__control {
    height: 37px;
}

.v-row {
    text-align: right;
}

.v-messages__message {
    text-align: right;
}

.font-weight-regular {
    font-size: 14px;
}

.v-text-field.v-text-field--enclosed {
    font-weight: 500;
}

</style>