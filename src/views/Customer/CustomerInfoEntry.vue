<template>
    <div>
            <v-form @submit.prevent="SaveOrUpdate" autocomplete="off" ref="form" v-model="valid">
                <v-card flat>
                    <v-col cols="12" md="12">
                    <v-row dense>
                    <v-col cols="12" md="1"></v-col>
                    <v-col cols="12" md="10" class="">
                        <v-row dense>
                            <v-col cols="12" md="6">
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Remittance Date</label></v-col>
                                <v-col cols="12" md="7">
                                    <VueDatePicker v-model="model.remittance_date" disabled :enable-time-picker="false"  teleport-center />
                                    <span v-show="transaction_daterule" style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;" class="text-red">Transction Date ထည့်ရန်လိုအပ်ပါသည်။</span>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-5">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Sender Customer Type<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-autocomplete v-model="model.sender_customer_type_id" item-title='text' item-value='value' variant="outlined" density="compact"  :items="customertypelist" :rules="sender_customertyperule"></v-autocomplete>
                                </v-col>
                            </v-row>
                            <!-- <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Identity Type<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-autocomplete v-model="model.identity_type_id" item-title='text' item-value='value' variant="outlined" density="compact"  :items="identity_typelist" :rules="identiy_typerule"></v-autocomplete></v-col>
                            </v-row> -->
                            <v-row density="compact">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Purpose of Transaction<span class="text-red">*</span></label></v-col>
                            <v-col cols="12" md="7"><v-autocomplete v-model="model.purpose_transaction_id" item-title='text' item-value='value' variant="outlined" density="compact"  :items="purposetransactionlist" :rules="purpose_transactionrule"></v-autocomplete></v-col>
                            </v-row>
                            
                            </v-col>
                        <v-col cols="12" md="6">
                            <v-row dense class="">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Remittance No</label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.remittance_no" disabled filled item-title='text' item-value='value' variant="outlined" density="compact" :rules="licensenorule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Receiver Customer Type<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-autocomplete v-model="model.receiver_customer_type_id" item-title='text' item-value='value' variant="outlined" density="compact" :items="customertypelist" :rules="receiver_customertyperule"></v-autocomplete>
                                </v-col>
                            </v-row>
                            <!-- <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Channel<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-autocomplete v-model="model.channel_id" item-title='text' item-value='value' variant="outlined" density="compact" :items="channel_list" :rules="channelrule"></v-autocomplete>
                                </v-col>
                            </v-row> -->
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Network Code<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-autocomplete v-model="model.network_code_id" item-title='text' item-value='value' variant="outlined" density="compact" :items="networkcodelist" :rules="networkcoderule"></v-autocomplete>
                                </v-col>
                            </v-row>
                            <v-col cols="12" md="12">
                        <v-card-actions class="text-right">
                        <v-spacer></v-spacer>
                        <v-btn type="submit" size="small" variant="outlined" color="primary">Save</v-btn>
                        <v-btn dark size="small" variant="outlined" color="warning" @click.stop="ClearCancel()">Cancel</v-btn>
                        </v-card-actions>
                        </v-col>
                        </v-col>
                        </v-row>
                        </v-col>
                    </v-row>
                    </v-col>
                    <v-col cols="12" md="1"></v-col>
                </v-card>
            </v-form>
</div>
</template>

<script>
import Model from "@/models/customerinfo";
import Service from "@/services/customerinformation.service.js";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import DropDownService from '@/services/dropdown.service.js';
export default {
    components:{VueDatePicker},
    data() {
        return {
            formname:'',
            dialog: false,
            purposetransactionlist:[],
            customertypelist:[],
            networkcodelist:[],
            channel_list:[],
            identity_typelist:[],
            model: new Model(),
            id:0,
            sender_customertyperule: [(v) => !!v || "Please Choise Sender Type !"],
            receiver_customertyperule: [(v) => !!v || "Please Choise Receiver Type !"],
            identiy_typerule: [(v) => !!v || "Please Choise Identity Type !"],
            purpose_transactionrule: [(v) => !!v || "Please Choise Purpose Transaction !"],
            channelrule: [(v) => !!v || "Please Choise Channel !"],
            networkcoderule: [(v) => !!v || "Please Choise Network Code !"],
            format : (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `Selected date is ${day}/${month}/${year}`;
            }
        }
    },
    created(){
        DropDownService.GetPurposeTranscationList().then((result) => {
            this.purposetransactionlist = result.data;
        })
        DropDownService.GetCustomerTypeList().then((result) => {
            this.customertypelist = result.data;
        })
        DropDownService.GetNetworkCodeList().then((result) => {
            this.networkcodelist = result.data;
            this.model.network_code_id = 5;
        })
        DropDownService.GetIdentityTypeList().then((result) => {
            this.identity_typelist = result.data;
        })
        DropDownService.GetChannelList().then((result) => {
            this.channel_list = result.data;
        })
        this.id = this.$route.query.id;
        this.model.id = this.$route.query.id;
        Service.GetById(this.id).then(
                 (response) => {
        this.model= response.data;
      })
    
    },

    methods: {
        ValidateModel() {
            return this.$refs.form.validate();
        },
        SaveOrUpdate() {
            var vm = this;
            vm.ValidateModel();
            if (vm.valid == true) {
                Service.SaveOrUpdateCustomerInfo(vm.model).then((result) => {
                    if (result.data) {
                        var message = result.data.messages[0];
                        if (result.data.success) {
                            vm.$root.AlertDialog.Show({ message: message, color: 'success' });
                            vm.$emit("AfterSaved");
                        } else {
                            country.$root.AlertDialog.Show({ message: message, color: 'error' });
                        }
                        this.$router.push({
                        path:this.$route.path,
                        query:{
                            id:result.data.id,
                        },
                    });
                    
                    }
                });
            }
        },

        ClearData() {
            this.model = [];
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