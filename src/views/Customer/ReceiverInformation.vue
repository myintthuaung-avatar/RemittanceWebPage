<template>
    <div>
        <v-col cols="12" md="12">
            <v-form @submit.prevent="SaveOrUpdate" autocomplete="off" ref="form" v-model="valid">
                <v-card flat>
                <v-col cols="12" md="12">
                    <v-row dense>
                    <v-col cols="12" md="1">
                        <v-tooltip location="bottom">
                    <template v-slot:activator="{ props }">
                    <v-btn variant="outlined" color="success" size="small" v-bind="props" v-show="model.id > 0" @click="Browse()"><v-icon>mdi-account-arrow-right</v-icon></v-btn>
                    </template>
                    <span class="text-center">Old Customer</span>
                    </v-tooltip>
                    </v-col>
                    <v-col cols="12" md="10" class="">
                        <v-row dense>
                            <v-col cols="12" md="6">
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Name<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.receiver_name" item-title='text' item-value='value' variant="outlined" density="compact" :rules="namerule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Identity Type<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-autocomplete v-model="model.receiver_identity_type_id" item-title='text' item-value='value' variant="outlined" density="compact"  :items="identity_typelist" :rules="identiy_typerule"></v-autocomplete></v-col>
                            </v-row>
                            <v-row dense v-show="nrcshow">
                                <v-col cols="12" md="2"><v-autocomplete v-model="model.receiver_nrc_state_division_id" label="1/" item-title='text' item-value='value' variant="outlined" density="compact"  :items="statedivisioncodelist" :rules="nrcshow === true ? state_divisioncoderule : []"></v-autocomplete></v-col>
                                <v-col cols="12" md="3"><v-autocomplete v-model="model.receiver_nrc_township_id" item-title='text' label="MaHtaLa/" item-value='value' variant="outlined" density="compact"  :items="townshipcodelist" :rules="nrcshow === true ? townshipcoderule : []"></v-autocomplete></v-col>
                                <v-col cols="12" md="3"><v-autocomplete v-model="model.receiver_nrc_citizentype_id" item-title='text' label="(N)" item-value='value' variant="outlined" density="compact"  :items="citizentypelist" :rules="nrcshow === true ? citizentyperule : []"></v-autocomplete></v-col>
                                <v-col cols="12" md="4"><v-text-field v-model="model.receiver_nrc_no" item-title='text' item-value='value' label="xxxxxx" variant="outlined" density="compact" @input="handleInput" :rules="nrcshow === true ? nrcnorule : []"></v-text-field>
                                <v-alert v-if="showMessage" class="sixnummsg" >{{ showMessageText }} </v-alert></v-col>
                                
                            </v-row >
                            <v-row dense v-show="passportshow">
                                <v-col cols="12" md="5"><label class="font-weight-regular">NRC/Passport No<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.receiver_nrc_passportno" item-title='text' item-value='value' variant="outlined" density="compact" :rules="passportshow === true ? passportrule : []"></v-text-field></v-col>
                            </v-row>
                            <v-row dense class="mb-4">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Phone<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-row class="d-flex align-center">
                                        <v-col cols="11">
                                            <vue-tel-input v-model="model.receiver_phoneno" mode="international" variant="outlined" density="compact" :rules="phonerule"></vue-tel-input>
                                        </v-col>
                                        <v-col cols="1" class="d-flex justify-end">
                                            <v-btn variant="text" icon size="x-medium" color="warning">
                                                <v-icon>mdi-help-circle-outline</v-icon>
                                                <v-tooltip activator="parent" location="bottom" content-class="custom-tooltip">
                                                    If you don't enter the correct phone number, you will not see the country code!
                                                </v-tooltip>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>

                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Email</label></v-col>

                                <v-col cols="12" md="7"><v-text-field v-model="model.receiver_email" item-title='text' placeholder="@gmail.com" item-value='value' variant="outlined" density="compact"  :rules="emailRules"></v-text-field></v-col>
                            </v-row>
                            
                            </v-col>
                        <v-col cols="12" md="6">
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Address<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-text-field v-model="model.receiver_address" item-title='text' item-value='value' variant="outlined" density="compact" :rules="addressrule"></v-text-field></v-col>
                            </v-row>
                            <v-row dense class="mb-4">
                                <v-col cols="12" md="5"><label class="font-weight-regular">Country<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-autocomplete v-model="model.receiver_country_id" @click="ChangeCountry()" item-title='text' item-value='value' variant="outlined" density="compact" :items="countrylist" :rules="countryrule"></v-autocomplete>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">State<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7"><v-autocomplete v-model="model.receiver_state_id" @click="ChangeStateDivision()" item-title='text' item-value='value' variant="outlined" density="compact" :items="statedivisionlist" :rules="statedivisionrule"></v-autocomplete></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">City<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" md="7">
                                    <v-autocomplete v-model="model.receiver_city_id" item-title='text' item-value='value' variant="outlined" density="compact" :items="citylist" :rules="cityrule"></v-autocomplete>
                                </v-col>
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
                        <ReceiverBrowse ref="ReceiverBrowseModal" @PersonId="PersonId"/>
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

import Model from "@/models/customer_receiverinformation.js";
import Service from "@/services/customerinformation.service.js";
import DropDownService from '@/services/dropdown.service.js';
import ReceiverBrowse from './ReceiverBrowseList.vue';
import ReceiverInformationService from "@/services/receiverinformation.service.js";
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
export default {
    components:{ReceiverBrowse, VueTelInput},
    data() {
        return {
            formname:'',
            model: new Model(),
            countrylist:[],
            statedivisionlist:[],
            citylist:[],
            identity_typelist:[],
            statedivisioncodelist:[],
            townshipcodelist:[],
            citizentypelist:[],
            nrcshow:false,
            passportshow:false,
            namerule: [(v) => !!v || "Please Fill Name Code !"],
            nrcrule: [(v) => !!v || "Please Fill NRC/Passport Name !"],
            phonerule: [(v) => !!v || "Please Fill Phone no!"],
            addressrule: [(v) => !!v || "Please Fill Address !"],
            countryrule: [(v) => !!v || "Please Fill Country !"],
            statedivisionrule: [(v) => !!v || "Please Fill State Division !"],
            cityrule: [(v) => !!v || "Please Fill City !"],
            state_divisioncoderule: [(v) => !!v || "State/Divsion"],
            townshipcoderule: [(v) => !!v || "Township"],
            citizentyperule: [(v) => !!v || "Citizen"],
            nrcnorule: [(v) => !!v || "Please Fill NRC No !"],
            passportrule: [(v) => !!v || "Please Fill Passport No !"],
            emailRules: [(v) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail Format must be valid']
        }
    },
    created(){
        //this.ClearData();
        this.model.id = this.$route.query.id;
        this.model.receiver_identity_type_id = 2 ; //For Default Passport
        if(this.model.receiver_identity_type_id == 1){ //For NRC Show
            this.nrcshow = true;
            this.passportshow =false;
        }
        {
            this.nrcshow = false;
            this.passportshow = true;
        }
        DropDownService.GetCountryList().then((result) => {
            this.countrylist = result.data;
        })
        DropDownService.GetIdentityTypeList().then((result) => {
            this.identity_typelist = result.data;
        })
        DropDownService.GetStateDivisionCode().then((result) => {
            this.statedivisioncodelist = result.data;
        })

        DropDownService.GetCitizenType().then((result) => {
            this.citizentypelist = result.data;
        })
    },
    watch:{
        '$route.query.id'( newId) {
        this.model.id = newId;
        },
        'model.receiver_country_id'(val){
            if(val != null){
                DropDownService.GetStateDivisionByCountry(val).then((result) => {
            this.statedivisionlist = result.data;
        })}
    },
        'model.receiver_state_id'(val){
            if(val != null){
                DropDownService.GetCityListByStateDivision(val).then((result) => {
            this.citylist = result.data;
        })
        }
    },
    'model.receiver_identity_type_id'(val){
            if(val ==1){
                this.nrcshow = true;
                this.passportshow =false;
            }else if(val ==0){
                this.model.receiver_identity_type_id=2;
            }
            else{
                this.nrcshow = false;
                this.passportshow = true;
            }
        },
        'model.receiver_nrc_state_division_id'(val){
            if(val != null){
                DropDownService.GetTownshipCode(val).then((result) => {
            this.townshipcodelist = result.data;
        })
            }
        },
    },
    
    methods: {
        ValidateModel() {
            if(this.model.receiver_identity_type_id != 1){
                    this.model.receiver_nrc_state_division_id = 0;
                    this.model.receiver_nrc_township_id = 0;
                    this.model.receiver_nrc_citizentype_id = 0;
                    this.model.receiver_nrc_no = "null";
                }
                else{
                    this.model.receiver_nrc_passportno = "null";
                }
            return this.$refs.form.validate();
        },
        SaveOrUpdate() {
            var vm = this;
            vm.ValidateModel();
           
            //if (vm.valid == true) {
                window.console.log(vm.model)
                Service.SaveOrUpdateReceiverInformation(vm.model).then((result) => {
                    if (result.data) {
                        var message = result.data.messages[0];
                        if (result.data.success) {
                            vm.$root.AlertDialog.Show({ message: message, color: 'success' });
                            vm.$emit("AfterSaved");
                            //vm.ClearData();
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
        Browse(){
            this.$refs.ReceiverBrowseModal.Show();
        },
        PersonId(id)
        {
            var vm = this;
            ReceiverInformationService.GetById(id).then(
                (response) => {
                    window.console.log(response.data)
                    vm.model= response.data;
                    vm.model.id = this.$route.query.id;
                    this.dialog = false;
                });
        },
        ChangeCountry() {
            this.model.receiver_state_id = null;
            this.model.receiver_city_id = null;
        }, ChangeStateDivision() {
            this.model.receiver_city_id = null;
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

.custom-tooltip .v-tooltip{
  background-color:  yellow; /* Set your custom color here */
  color: #000; /* Change the text color if needed */
}
</style>