<template>
    <div>
    <v-col cols="12" md="12">
        <v-form @submit.prevent="SaveOrUpdate" autocomplete="off" ref="form" v-model="valid">
                <v-card flat>
                    <v-col cols="12" md="12">
                    <v-row dense>
                    <v-col cols="12" md="1"></v-col>
                    <v-col cols="12" md="10" class="mt-8">
                        <v-row dense>
                            <v-col cols="12" md="6">
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Payment Type<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-autocomplete v-model="model.deposit_payment_type_id"  @click="onPaymentTypeChange()" item-title='text' item-value='value' variant="outlined" density="compact"  :items="paymenttypelist" :rules="deposit_payment_typerule"></v-autocomplete></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Payment<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-autocomplete v-model="model.deposit_payment_id" item-title='text' item-value='value' variant="outlined" density="compact"  :items="paymentlist" :rules="deposit_payment_rule"></v-autocomplete></v-col>
                            </v-row>
                            <v-row dense  v-show="showbank">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Payment Branch<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-autocomplete v-model="model.deposit_payment_branch_id" item-title='text' item-value='value' variant="outlined" density="compact"  :items="paymentbranchlist" :rules="payment_brunchrule"></v-autocomplete></v-col>
                            </v-row>
                            <v-row density="compact"  v-show="showbank">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Swift Code<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.deposit_swift_code" item-title='text' item-value='value' variant="outlined" density="compact"  :rules="swift_coderule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense class="mb-4"  v-show="showbank">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Account Number<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.deposit_account_number" item-title='text' item-value='value' variant="outlined" density="compact" :rules="account_number_rule"></v-text-field></v-col>
                            </v-row>
                            </v-col>
                        <v-col cols="12" md="6">
                            
                            <v-row dense v-show="showbank">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Account Type<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-autocomplete v-model="model.deposit_account_type_id" item-title='text' item-value='value' variant="outlined" :items="accounttypellist" density="compact" :rules="account_type_rule"></v-autocomplete></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Reference No<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-text-field v-model="model.deposit_reference_no" item-title='text' item-value='value' variant="outlined" density="compact" :rules="reference_no_rule"></v-text-field>
                                </v-col>
                            </v-row>
                            <!-- <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Reference<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-text-field v-model="model.deposit_reference" item-title='text' item-value='value' variant="outlined" density="compact" :rules="reference_rule"></v-text-field>
                                </v-col>
                            </v-row> -->
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Company<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-autocomplete v-model="model.deposit_company_id" item-title='text' item-value='value' variant="outlined" density="compact" :items="companylist" :rules="company_rule"></v-autocomplete>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Account<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-autocomplete v-model="model.deposit_account_id" item-title='text' item-value='value' variant="outlined" density="compact" :items="accountlist" :rules="account_rule"></v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-divider class="mb-5"></v-divider>
                        <v-col cols="12" md="6" v-show="show_cashcount">
                            <v-row dense>
                                <v-col cols="12" md="5">
                                    <v-avatar size="large">
                                    <v-img
                                        alt="John"
                                        src="../../assets/Thai_Flag.png"
                                    ></v-img>
                                    </v-avatar>
                                </v-col>
                            <v-col cols="12" md="5" style="text-align: left;"><h3 >Deposit Denomination</h3></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">50</label></v-col>
                                <v-col cols="12" md="7"><v-text-field type="number" v-model="model.deposit_50"  variant="outlined" density="compact" :rules="licensenorule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">100</label></v-col>
                                <v-col cols="12" md="7"><v-text-field type="number" v-model="model.deposit_100" variant="outlined" density="compact" :rules="account_norule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">200</label></v-col>
                                <v-col cols="12" md="7"><v-text-field type="number" v-model="model.deposit_200" variant="outlined" density="compact" :rules="AccountKeeperInstitutionCoderule"></v-text-field></v-col>
                            </v-row>
                            
                        </v-col>
                        <v-col cols="12" md="6"  v-show="show_cashcount">
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">500</label></v-col>
                                <v-col cols="12" md="7"><v-text-field type="number" v-model="model.deposit_500" variant="outlined" density="compact" :rules="licensenorule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">1000</label></v-col>
                                <v-col cols="12" md="7"><v-text-field type="number" v-model="model.deposit_1000" variant="outlined" density="compact" :rules="account_norule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">5000</label></v-col>
                                <v-col cols="12" md="7"><v-text-field type="number" v-model="model.deposit_5000" variant="outlined" density="compact" :rules="AccountKeeperInstitutionCoderule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">10000</label></v-col>
                                <v-col cols="12" md="7"><v-text-field type="number" v-model="model.deposit_10000" variant="outlined" density="compact" :rules="AccountKeeperInstitutionCoderule"></v-text-field></v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="12">
                        <v-card-actions class="text-right">
                        <v-spacer></v-spacer>
                        <v-btn type="submit" size="small" variant="outlined" color="primary">Save</v-btn>
                        <v-btn dark size="small" variant="outlined" color="warning" @click.stop="ClearData()">Cancel</v-btn>
                        </v-card-actions>
                        </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="1"></v-col>
                </v-row>
            </v-col>
                </v-card>
            </v-form>      
    </v-col>
</div>
</template>

<script>
import Model from "@/models/customer_deposit.js";
import Service from "@/services/customerinformation.service.js";
import DropDownService from '@/services/dropdown.service.js';
export default {
    data() {
        return {
            model: new Model(),
            paymenttypelist:[],
            show_cashcount:false,
            paymentlist:[],
            paymentbranchlist:[],
            accounttypellist:[],
            companylist:[],
            accountlist:[],
            showbank:false,
            showwallet:false,
            deposit_payment_typerule: [(v) => !!v || "Please Fill Payment Type!"],
            deposit_payment_rule: [(v) => !!v || "Please Fill Payment!"],
            payment_brunchrule: [(v) => !!v || "Please Fill Payment Branch!"],
            swift_coderule: [(v) => !!v || "Please Fill Swift Code!"],
            account_number_rule: [(v) => !!v || "Please Fill Account Number!"],
            account_type_rule: [(v) => !!v || "Please Fill Account Type!"],
            reference_no_rule: [(v) => !!v || "Please Fill Reference No!"],
            reference_rule: [(v) => !!v || "Please Fill Reference!"],
            company_rule: [(v) => !!v || "Please Fill Company!"],
            account_rule: [(v) => !!v || "Please Fill Account!"],
        }
    },
    created(){
        this.model.id = this.$route.query.id;
        //this.model.deposit_payment_type_id = 2; //For Default Bank
        if(this.model.deposit_payment_type_id == 1)
            {
                //alert("dd"+this.model.deposit_payment_type_id )
                this.show_cashcount = true;
                this.showbank = false;
            }
        else if(this.model.deposit_payment_type_id == 2)
            {
                this.showbank = true;
                this.show_cashcount = false;
            }
        else if(this.model.deposit_payment_type_id == 3)
            {
                this.showbank = false;
                this.show_cashcount = false;
                this.showwallet =false;
            }
        DropDownService.GetPaymentTypeList().then((result) => {
            this.paymenttypelist = result.data;
        })
        // DropDownService.GetPaymentList().then((result) => {
        //     this.paymentlist = result.data;
        // })
        // DropDownService.GetGetPaymentBranchList().then((result) => {
        //     this.paymentbranchlist = result.data;
        // })
        DropDownService.GetAccountTypeList().then((result) => {
            this.accounttypellist = result.data;
        })
        DropDownService.GetAccountList().then((result) => {
            this.accountlist = result.data;
        })
        DropDownService.GetCompanyList().then((result) => {
            this.companylist = result.data;
        })
    },
    watch:{
        '$route.query.id'( newId) {
        this.model.id = newId;
        },
        'model.deposit_payment_type_id'(val){
            if(val == 1){
                this.show_cashcount = true;
                this.showbank = false;
            }
            else if(val == 2){
                this.showbank = true;
                this.show_cashcount = false;
            }
            else if(val == 3){
                this.showbank = false;
                this.show_cashcount = false;
                this.showwallet =false;
            }
            DropDownService.GetPaymentList(val).then((result) => {
            this.paymentlist = result.data;
            //this.model.deposit_payment_id = null;
        })
        },
        'model.deposit_payment_id'(val){
            if(val != null){
                DropDownService.GetGetPaymentBranchList(val).then((result) => {
                this.paymentbranchlist = result.data;
                //this.model.deposit_payment_branch_id = null;
            })
            }
        }
        // 'model.deposit_payment_type_id'(val){
        //     if(val == 2){
                
        //     }
        //     else{
        //         this.showbank = false;
        //     }
        // }
    },
    methods: {

        ValidateModel() {
            if(this.model.deposit_payment_type_id != 2){
                this.model.deposit_payment_branch_id = 0;
                this.model.deposit_account_type_id = 0;
                //this.model.deposit_swift_code = null;
                //this.model.deposit_account_number =null;
                //this.payment_brunchrule = true;
                //this.payment_brunchrule = true;
                //this.swift_coderule = true;
                //this.account_number_rule =true;
                //this.account_type_rule = true;
                // this.model.deposit_payment_branch_id = 0;
                // this.model.deposit_swift_code = 
                //this.model.
            }
            return this.$refs.form.validate();
        },
        SaveOrUpdate() {
            var vm = this;
            if(vm.model.deposit_payment_type_id > 1){
                vm.model.deposit_50 = 0;
                vm.model.deposit_100 = 0;
                vm.model.deposit_200 = 0;
                vm.model.deposit_500 = 0;
                vm.model.deposit_1000 = 0;
                vm.model.deposit_5000 = 0;
                vm.model.deposit_10000 = 0;
            }
            if(vm.model.deposit_payment_type_id == 1){
               if(vm.model.deposit_50 == null){
                vm.model.deposit_50 =0;
               }
               if(vm.model.deposit_100 == null){
                vm.model.deposit_100 =0;
               }
               if(vm.model.deposit_200 == null){
                vm.model.deposit_200 = 0;
               }
               if(vm.model.deposit_500 == null){
                vm.model.deposit_500 = 0;
               }
               if(vm.deposit_1000 == null){
                vm.model.deposit_1000 = 0;
               }
               if(vm.model.deposit_5000 == null){
                vm.model.deposit_5000 = 0;
               }
               if(vm.model.deposit_10000 == null){
                vm.model.deposit_10000 =0;
               }
            }
            this.ValidateModel();
            //if (vm.valid == true) {
                Service.SaveOrUpdateDeposit(vm.model).then((result) => {
                    if (result.data) {
                        var message = result.data.messages[0];
                        if (result.data.success) {
                            vm.$root.AlertDialog.Show({ message: message, color: 'success' });
                            vm.$emit("AfterSaved");
                            vm.ShowLoading(true);
                        } else {
                            vm.$root.AlertDialog.Show({ message: message, color: 'error' });
                        }
                    }
                });
            //}
        },
        ShowLoading(val) {
            this.$refs.DataTable.loading = val;
        },
        ClearData() {
            this.model = [];
        },
        onPaymentTypeChange() {
            this.model.deposit_payment_id = null;
        },
    }
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