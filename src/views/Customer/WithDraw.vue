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
                            <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw  Payment Type<span class="text-red">*</span></label></v-col>
                            <v-col cols="12" md="7"><v-autocomplete v-model="model.withdraw_payment_type_id" item-title='text' item-value='value' variant="outlined" density="compact"  :items="paymenttypelist" :rules="withdraw_payment_typerule"></v-autocomplete></v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw  Payment<span class="text-red">*</span></label></v-col>
                            <v-col cols="12" md="7"><v-autocomplete v-model="model.withdraw_payment_id" item-title='text' item-value='value' variant="outlined" density="compact"  :items="paymentlist" :rules="withdraw_paymentrule"></v-autocomplete></v-col>
                        </v-row>
                        <v-row dense  v-show="showbank">
                            <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw  Payment Branch<span class="text-red">*</span></label></v-col>
                            <v-col cols="12" md="7"><v-autocomplete v-model="model.withdraw_payment_branch_id" item-title='text' item-value='value' variant="outlined" density="compact"  :items="paymentbranchlist" :rules="withdraw_payment_branchrule"></v-autocomplete></v-col>
                        </v-row>
                        <v-row density="compact"  v-show="showbank">
                            <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw  Swift Code<span class="text-red">*</span></label></v-col>
                            <v-col cols="12" md="7">
                                <v-text-field v-model="model.withdraw_swift_code"  variant="outlined" density="compact" required :rules="withdraw_swift_coderule"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense class="mb-4"  v-show="showbank">
                            <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw  Account Number<span class="text-red">*</span></label></v-col>
                            <v-col cols="12" md="7">
                                <v-text-field v-model="model.withdraw_account_number" item-title='text' item-value='value' variant="outlined" density="compact" :rules="withdraw_account_number_rule"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row dense v-show="showwallet">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw  Account Type<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-autocomplete v-model="model.withdraw_account_type_id" item-title='text' item-value='value' variant="outlined" :items="accounttypellist" density="compact" :rules="withdraw_account_type_rule"></v-autocomplete></v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw  Reference<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <picture-input 
                                    ref="pictureInput"
                                    width="150" 
                                    height="150" 
                                    v-model="model.withdraw_reference"
                                    :prefill="model.withdraw_reference_image"
                                    margin="14" 
                                    accept="image/jpeg,image/png" 
                                    size="300" 
                                    button-class="btn"
                                    :custom-strings="{
                                        upload: '',
                                        drag: ' 😺Photo Upload '
                                    }"
                                    @change="onChange">
                                    </picture-input>
                                    </v-col>
                            </v-row>
                            <v-row dense class="mt-10">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw  Reference No</label></v-col>
                                <v-col cols="12" md="7">
                                    <v-text-field v-model="model.withdraw_reference_no" item-title='text' item-value='value' variant="outlined" density="compact" :rules="withdraw_reference_norule"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw  Company<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-autocomplete v-model="model.withdraw_company_id" item-title='text' disabled item-value='value' variant="outlined" density="compact" :items="companylist" :rules="withdraw_companyrule"></v-autocomplete>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw  Account<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-autocomplete v-model="model.withdraw_account_id" item-title='text' item-value='value' variant="outlined" density="compact" :items="accountlist" :rules="withdraw_accountrule"></v-autocomplete>
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
                                        src="../../assets/myanmar_flag.jpg"
                                    ></v-img>
                                    </v-avatar>
                                </v-col>
                                <v-col cols="12" md="5" style="text-align: left;"><h3 >Withdraw  Denomination</h3></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">50</label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.withdraw_50" type="number" item-title='text' item-value='value' variant="outlined" density="compact" :rules="licensenorule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">100</label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.withdraw_100" type="number" item-title='text' item-value='value' variant="outlined" density="compact" :rules="account_norule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">200</label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.withdraw_200" type="number" item-title='text' item-value='value' variant="outlined" density="compact" :rules="AccountKeeperInstitutionCoderule"></v-text-field></v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="6" v-show="show_cashcount">
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">500</label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.withdraw_500" type="number" item-title='text' item-value='value' variant="outlined" density="compact" :rules="licensenorule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">1000</label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.withdraw_1000" type="number" item-title='text' item-value='value' variant="outlined" density="compact" :rules="account_norule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">5000</label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.withdraw_5000" type="number" item-title='text' item-value='value' variant="outlined" density="compact" :rules="AccountKeeperInstitutionCoderule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">10000</label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.withdraw_10000" type="number" item-title='text' item-value='value' variant="outlined" density="compact" :rules="AccountKeeperInstitutionCoderule"></v-text-field></v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="12">
                        <v-card-actions class="text-right">
                        <v-spacer></v-spacer>
                        <v-btn type="submit" size="small" variant="outlined" color="primary">Save</v-btn>
                        <v-btn dark size="small" variant="outlined" color="warning" @click.stop="ClearCancel()">Cancel</v-btn>
                        </v-card-actions>
                        </v-col>
                        </v-row>
                        </v-col>
                    </v-row>
                    </v-col>
                    <v-col cols="12" md="1"></v-col>
                </v-card>
            </v-form>
    </v-col>
</div>
</template>

<script>
import PictureInput from 'vue-picture-input';
import Model from "@/models/customer_withdraw.js";
import Service from "@/services/customerinformation.service.js";
import DropDownService from "@/services/dropdown.service.js";
export default {
    components:{PictureInput},
    data() {
        return {
            model: new Model(),
            paymenttypelist:[],
            paymentlist:[],
            paymentbranchlist:[],
            accounttypellist:[],
            companylist:[],
            accountlist:[],
            showbank:false,
            showwallet:false,
            show_cashcount:false,
            path:"/opreator",
            show_cashcount:true,
            withdraw_payment_typerule: [(v) => !!v || "Please Fill Payment Type !"],
            withdraw_paymentrule: [(v) => !!v || "Please Fill Payment !"],
            withdraw_payment_branchrule: [(v) => !!v || "Please Fill Payment Branch !"],
            withdraw_swift_coderule: [(v) => !!v || "Please Fill Swift Code!"],
            withdraw_account_number_rule: [(v) => !!v || "Please Fill Account Number!"],
            withdraw_account_type_rule: [(v) => !!v || "Please Fill Account Type!"],
            withdraw_companyrule: [(v) => !!v || "Please Fill Company!"],
            withdraw_accountrule: [(v) => !!v || "Please Fill Account!"],
            withdraw_reference_norule:[(v) => !!v || "Please Fill Reference No!"],
        }
    },
    created(){
        this.model.id = this.$route.query.id;
        DropDownService.GetPaymentTypeList().then((result) => {
            this.paymenttypelist = result.data;
        })
        DropDownService.GetPaymentList().then((result) => {
            this.paymentlist = result.data;
        })
        // DropDownService.GetGetPaymentBranchList().then((result) => {
        //     this.paymentbranchlist = result.data;
        // })
        DropDownService.GetAccountTypeList().then((result) => {
            this.accounttypellist = result.data;
        })
        DropDownService.GetAccountList().then((result) => {
            this.accountlist = result.data;
            this.model.withdraw_account_id = 2;
        })
        DropDownService.GetCompanyList().then((result) => {
            this.companylist = result.data;
            this.model.withdraw_company_id = 1;
        })
        this.model.withdraw_payment_type_id = 3;
        this.model.withdraw_payment_id = 8;
    },
    watch:
    {
        '$route.query.customer_id'( newId) {
        this.model.customer_id = newId;
        },
        'model.withdraw_payment_type_id'(val){
            if(val == 1){
                this.show_cashcount = true;
            }
            else{
                this.show_cashcount = false;
            }
        },
        'model.withdraw_payment_type_id'(val){
            if(val == 1){
                this.show_cashcount = true;
                this.showbank = false;
                this.showwallet =false;
            }
            else if(val == 2){
                this.showbank = true;
                this.show_cashcount = false;
                this.showwallet =true;
            }
            else if(val == 3){
                this.showbank = false;
                this.show_cashcount = false;
                this.showwallet =false;
            }
            DropDownService.GetPaymentList(val).then((result) => {
            this.paymentlist = result.data;
            this.model.withdraw_payment_id = null;
        })
        },
        'model.withdraw_payment_id'(val){
            if(val != null){
                DropDownService.GetGetPaymentBranchList(val).then((result) => {
                this.paymentbranchlist = result.data;
                this.model.withdraw_payment_branch_id = null;
            })
            }
        }
    },
    methods: {

        ValidateModel() {
            if(this.model.withdraw_payment_type_id != 2){
                this.model.withdraw_payment_branch_id =0;
                this.model.withdraw_account_type_id =0;
            }
            return this.$refs.form.validate();
        },
        SaveOrUpdate() {
            var vm = this;
            //vm.ValidateModel();
            if(vm.model.withdraw_payment_type_id > 1){
                vm.model.withdraw_50 = 0;
                vm.model.withdraw_100 = 0;
                vm.model.withdraw_200 = 0;
                vm.model.withdraw_500 = 0;
                vm.model.withdraw_1000 = 0;
                vm.model.withdraw_5000 = 0;
                vm.model.withdraw_10000 = 0;
            }
            if(vm.model.withdraw_payment_type_id == 1){
                if(vm.model.withdraw_50 == null){
                    vm.model.withdraw_50 = 0;
                }
                if(vm.model.withdraw_100 == null){
                    vm.model.withdraw_100 = 0;
                }
                if(vm.model.withdraw_200 == null){
                    vm.model.withdraw_200 = 0;
                }
                if(vm.withdraw_500 == null){
                    vm.model.withdraw_500 = 0;
                }
                if(vm.withdraw_1000 == null){
                    vm.model.withdraw_1000 = 0;
                }
                if(vm.withdraw_5000 == null){
                    vm.model.withdraw_5000 = 0;
                }
                if(vm.withdraw_10000 == null){
                    vm.model.withdraw_10000 = 0;
                }
            }
            vm.ValidateModel();
                vm.model.withdraw_reference = this.$refs.pictureInput.file;
                window.console.log(vm.model)
                Service.SaveOrUpdateWithdraw(vm.model).then((result) => {
                    if (result.data) {
                        var message = result.data.messages[0];
                        if (result.data.success) {
                            vm.$root.AlertDialog.Show({ message: message, color: 'success' });
                            vm.$emit("AfterSaved");
                            vm.ClearData();
                            this.$router.push({path:this.path});
                        } else {
                            vm.$root.AlertDialog.Show({ message: message, color: 'error' });
                        }
                    }
                });
            //}
        },

        ClearData() {
            this.model = [];
        },
        onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
        changeMedia(media){
        this.media = media
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