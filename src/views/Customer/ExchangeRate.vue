<template>
    <div>
            <v-form @submit.prevent="SaveOrUpdate" autocomplete="off" ref="form" v-model="valid">
                <v-card flat>
                <v-col cols="12" md="12">
                <v-row dense>
                    <v-col cols="12" md="1"></v-col>
                    <v-col cols="12" md="10" class="">
                        <v-row dense class="mb-5" v-show="defaultshow">
                            <v-col cols="12" md="12" class="text-center">
                                <h2 style="color: darkblue">1   {{ this.depositratename }}   =     {{this.model.deposit_exchange_rate}}    {{this.withdrawratename}}</h2>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="12" md="6">
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Currency<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-autocomplete v-model="model.deposit_currency_id" item-title='text' item-value='value' variant="outlined" density="compact" :rules="deposit_currencyrule" :items="currencylist"></v-autocomplete></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Amount<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-text-field type="number" v-model="model.deposit_amount" item-title='text' item-value='value' variant="outlined" density="compact" :rules="deposit_amountrule"></v-text-field></v-col>
                            </v-row>
                           
                            <v-row dense v-show="usdshow">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Deposit Exchange Rate<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-text-field  type="number" readonly v-model="model.deposit_exchange_rate" item-title='text' item-value='value' variant="outlined" density="compact" :rules="deposit_exchangeraterule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense v-show="usdshow">
                                <v-col cols="12" md="5"><label class="font-weight-regular">USD Amount<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-text-field  type="number" readonly v-model="model.usd_amount" item-title='text' item-value='value' variant="outlined" density="compact" :rules="deposit_exchangeraterule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense v-show="usdshow">
                                <v-col cols="12" md="5"></v-col>
                                <v-col cols="12" md="7"><v-autocomplete label="Rate" readonly disabled v-model="model.rate_id" item-title='text' item-value='value' variant="outlined" density="compact" :rules="rate_rule" :items="ratelist"></v-autocomplete></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Service Fee</label></v-col>
                                <v-col cols="12" md="7"><v-text-field  v-model="model.service_fee" item-title='text' item-value='value' variant="outlined" density="compact"></v-text-field></v-col>
                            </v-row>
                            </v-col>
                            
                            <v-col cols="12" md="6">
                                <v-row dense>
                                    <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw Currency<span class="text-red">*</span></label></v-col>
                                    <v-col cols="12" md="7"><v-autocomplete v-model="model.withdraw_currency_id" disabled item-title='text' item-value='value' variant="outlined" density="compact" :rules="withdraw_currencyrule" :items="currencylist"></v-autocomplete></v-col>
                                </v-row>
                                <v-row dense class="">
                                    <v-col cols="12" md="5">
                                        <label class="font-weight-regular">Withdraw Amount<span class="text-red">*</span></label>
                                    </v-col>
                                    <v-col cols="12" md="7">
                                        <v-text-field  type="number" v-model="model.withdraw_amount" readonly step="0.00001" item-title='text' item-value='value' variant="outlined" density="compact" :rules="withdraw_amountrule">
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row dense v-show="usdshow">
                                    <v-col cols="12" md="5"><label class="font-weight-regular">Withdraw Exchange Rate<span class="text-red">*</span></label></v-col>
                                    <v-col cols="12" md="7">
                                        <v-text-field  type="number" v-model="model.withdraw_exchange_rate" readonly item-title='text' item-value='value' variant="outlined" density="compact" :items="countrylist" :rules="withdraw_exchangeraterule"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row dense v-show="usdshow">
                                    <v-col cols="12" md="5"><label class="font-weight-regular">USD Exchange Rate<span class="text-red">*</span></label></v-col>
                                    <v-col cols="12" md="7"><v-text-field  type="number" readonly v-model="model.usd_exchange_rate" item-title='text' item-value='value' variant="outlined" density="compact" :rules="deposit_exchangeraterule"></v-text-field></v-col>
                                </v-row>
                                
                                <v-col cols="12" md="12">
                            <v-card-actions class="text-right">
                            <v-spacer></v-spacer>
                            <v-btn type="submit" size="small" variant="outlined" color="primary">Save</v-btn>
                            <v-btn dark size="small" variant="outlined" color="warning" @click.stop="ClearData()">Cancel</v-btn>
                            </v-card-actions>
                            </v-col>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="1"></v-col>
                </v-row>
                </v-col>
                </v-card>
            </v-form>
</div>
</template>

<script>
import Model from "@/models/customer_exchangerate.js";
import Service from "@/services/customerinformation.service.js";
import DropDownService from '@/services/dropdown.service.js';
export default {
    data() {
        return {
            dialog: false,
            defaultshow:false,
            currencylist:[],
            usdshow:false,
            basebuyrate:0.000000000,
            baseamount:0.000000000,
            usd_repayment:0,
            depositratename:"",
            withdrawratename:"",
            ratelist:[{value:1, text:"Buy"},{value:2, text:"Sell"}],
            model: new Model(),
            deposit_currencyrule: [(v) => !!v || "Please Choise Deposit Currency!"],
            deposit_exchangeraterule: [(v) => !!v || "Please Fill Deposit Exchange Rate!"],
            deposit_amountrule: [(v) => !!v || "Please Fill Deposit Amount !"],
            withdraw_currencyrule: [(v) => !!v || "Choise Withdraw Currency"],
            withdraw_exchangeraterule: [(v) => !!v || "Please Fill Withdraw Exchange Rate!"],
            withdraw_amountrule: [(v) => !!v || "Please Fill Withdraw Amount !"],
            rate_rule: [(v) => !!v || "Choise Rate"],
        }
    },
    created(){
        this.model.id = this.$route.query.id;
        this.model.withdraw_exchange_rate = 1;
        this.model.service_fee = "0";

        //For CBM Format
        this.model.usd_amount =0;
        this.model.usd_exchange_rate =0;
        this.model.cbm_incentive =0;
        
        DropDownService.GetCurrencyList().then((result) => {
            this.currencylist = result.data;
        })
        
    },
    mounted(){
        this.model.withdraw_exchange_rate = 1;
        this.model.service_fee = "0";
    },
    watch:{
        '$route.query.id'( newId) {
        this.model.id = newId;
        if(this.id >0){
            Service.GetById(this.id).then(
                (response) => {
                    window.console.log(response.data)
                    this.model = response.data;
                    this.$router.push({
                        path:this.$route.path,
                        query:{
                            id:this.id,
                        },
                    });
                }
            )};
        },
        'model.deposit_currency_id'(val){
            if(val != null){
                Service.Calculation(val).then((result) => {
                    window.console.log(result.data.exchange);
                    this.defaultshow = true;
                    this.model.withdraw_currency_id = result.data.exmodel.to_currency_id;
                    this.model.deposit_exchange_rate = result.data.exmodel.buy_rate;
                    this.depositratename = result.data.exmodel.buy;
                    this.withdrawratename = result.data.exmodel.sell;
                    if(this.model.deposit_amount != null){
                        this.model.withdraw_amount = this.model.deposit_amount * result.data.exmodel.buy_rate;
                    }
                    // this.basebuyrate = result.data.exmodel.buy_rate;
                    // this.baseamount = this.model.exmodel.deposit_amount * this.basebuyrate;
            
                    
                    
        })
        }
        },
        'model.deposit_amount'(val){
            if(val != null){
                this.model.withdraw_amount = this.model.deposit_amount * this.model.deposit_exchange_rate;
                    // this.model.usd_exchange_rate = result.data.usdrate.buy_rate;
                    // this.model.usd_amount = this.model.withdraw_amount/result.data.usdrate.buy_rate;
                    // this.usd_repayment = this.model.withdraw_amount/result.data.usdrate.buy_rate;
                    // this.model.usd_repayment =0;
                    
                    //Exchange USD
                    // if(this.usd_repayment >1){
                    //     this.model.withdraw_amount = this.model.withdraw_amount+ this.usd_repayment;
                    //     this.model.cbm_incentive = this.usd_repayment;
                    // }
            }
        }
    },
    methods: {
        ValidateModel() {
            return this.$refs.form.validate();
        },
        
        SaveOrUpdate() {
            this.model.withdraw_exchange_rate = 1;
            this.model.rate_id =1;
            this.ValidateModel();
            //if (this.valid == true) {
                Service.SaveOrUpdateExchangeRate(this.model).then((result) => {
                    if (result.data) {
                        var message = result.data.messages[0];
                        if (result.data.success) {
                            this.$root.AlertDialog.Show({ message: message, color: 'success' });
                            this.$emit("afterSaved");
                        } else {
                            this.$root.AlertDialog.Show({ message: message, color: 'error' });
                        }
                    }
                });
            //}
        },
        // Ed(){
        //     this.model = 
        // },
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