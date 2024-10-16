<template>
    <div>
        <v-dialog persistent v-model="dialog" width="80%">
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
                        <v-row>
                            <!-- <v-card flat> -->
                            <v-col cols="12" md="1"></v-col>
                            <v-col cols="12" md="10" class="mt-6">
                                <v-row dense>
                                    <v-col cols="12" md="6">
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Transaction
                                                    No<span class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-text-field v-model="model.transaction_no"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact" :rules="transactionrule"></v-text-field></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Currency
                                                    No<span class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-autocomplete v-model="model.currency_id"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact" :items="Currencylist"
                                                    :rules="currecyrule"></v-autocomplete></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">CashBook
                                                    Type<span class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-autocomplete v-model="model.cashbooktype_id"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact" :items="CashBookTypelist"
                                                    :rules="cashbookrule"></v-autocomplete></v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Transaction
                                                    Date</label></v-col>
                                            <v-col cols="12" md="7">
                                                <VueDatePicker v-model="model.transaction_date" disabled
                                                    :enable-time-picker="false" teleport-center />
                                                <span v-show="transaction_daterule"
                                                    style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                                                    class="text-red">Transction Date ထည့်ရန်လိုအပ်ပါသည်။</span>
                                            </v-col>
                                        </v-row>
                                        <v-row dense style="padding-top: 4%">
                                            <v-col cols="12" md="5" ><label class="font-weight-regular">Amount
                                                    <span class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-text-field v-model="model.amount"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact" :rules="amountrule"></v-text-field></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Account<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-autocomplete v-model="model.account_id"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact" :items="Accountlist"
                                                    :rules="accountrule"></v-autocomplete></v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-row dense style="padding-left: 5%">
                                            <v-col cols="12" md="2" ><label
                                                    class="font-weight-regular">Description</label></v-col>
                                            <v-col cols="12" md="10" >
                                                <v-textarea :rules="descrule" placeholder="Enter Description"
                                                    v-model="model.description" counter></v-textarea>
                                            </v-col>
                                        </v-row>
                                    </v-col>
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
                            <v-col cols="12" md="1"></v-col>
                        </v-row>
                        <!-- </v-card> -->
                    </v-col>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Model from "@/models/cashTransaction.js";
import Service from "@/services/cashTransaction.service.js";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import DropDownService from "@/services/dropdown.service.js";
export default {
    components: { VueDatePicker },
    data() {
        return {
            formname: '',
            dialog: false,
            model: new Model(),
            Currencylist: [],
            CashBookTypelist: [],
            Accountlist:[],
            transactionrule: [(v) => !!v || "Please Fill Transaction No !"],
            currecyrule: [(v) => !!v || "Please Select Currency !"],
            amountrule: [(v) => !!v || "Please Fill Amount !"],
            cashbookrule: [(v) => !!v || "Please Select CashBook Type !"],
            accountrule: [(v) => !!v || "Please Select Account !"],
        }
    },

    methods: {

        Show(fname) {
            this.dialog = true;
            if (fname == "new") {
                this.formname = "Cash Transaction Entry";
            } else {
                this.formname = "Edit Cash Transaction Entry";
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
            this.model.transaction_no = "";
            this.model.currency_id = null;
            this.model.amount = 0.0;
            this.model.cashbooktype_id = null;
            this.model.account_id = null;
            this.model.description = "";
            this.dialog = false;
        },
        ClearCancel() {
            this.model.transaction_no = "";
            this.model.currency_id = null;
            this.model.amount = 0.0;
            this.model.cashbooktype_id = null;
            this.model.account_id = null;
            this.model.description = "";
            this.transaction_daterule = false;
        },
    },
    created() {
        DropDownService.GetCurrencyList().then((result) => {
            this.Currencylist = result.data;
        });
        DropDownService.GetCashBookTypeList().then((result) => {
            this.CashBookTypelist = result.data;
        });
        DropDownService.GetAccountList().then((result) => {
            this.Accountlist = result.data;
        })
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