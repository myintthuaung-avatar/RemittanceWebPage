<template>
    <div>
        <v-col cols="12" md="12">
            <v-form @submit.prevent="SaveOrUpdate" autocomplete="off" ref="form" v-model="valid">
                <v-card flat>
                    <!-- <v-col cols="12" md="12">
                    </v-col> -->
                    <v-col cols="12" md="12">
                        <v-row dense>

                            <v-col cols="12" md="1" class="mt-8">
                                <v-tooltip location="bottom">
                                    <template v-slot:activator="{ props }">
                                        <v-btn variant="outlined" color="success" size="small" v-bind="props"
                                            v-show="model.id > 0"
                                            @click="Browse()"><v-icon>mdi-account-arrow-right</v-icon></v-btn>
                                    </template>
                                    <span class="text-center">Old Customer</span>
                                </v-tooltip>
                            </v-col>

                            <v-col cols="12" md="12" class="mt-8">
                                <v-row dense>
                                    <v-col cols="12" md="6">
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Passport/Boarder
                                                    Pass/Work Permit/OWIC<span class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7">
                                                <picture-input ref="pictureInput" width="150" height="150"
                                                    v-model="model.nrc_passport_photo"
                                                    :prefill="model.nrc_passport_image" margin="14"
                                                    accept="image/jpeg,image/png" size="300" button-class="btn"
                                                    :custom-strings="{
                                                        upload: '',
                                                        drag: ' 😺Photo Upload '
                                                    }" @change="onChange">
                                                </picture-input>
                                                <span v-show="nrc_passport_photorule"
                                                    style="letter-spacing: 0; margin-right: 80px; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                                                    class="text-red">Please Fill NRC/Passport Photo</span>
                                            </v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">First Name<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-text-field v-model="model.first_name"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact" :rules="first_namerule"></v-text-field></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Last Name<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-text-field v-model="model.last_name"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact" :rules="last_namerule"></v-text-field></v-col>
                                        </v-row>
                                        <v-row dense class="mb-4">
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Phone No<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7">
                                                <v-row class="d-flex align-center">
                                                    <v-col cols="11">
                                                        <vue-tel-input v-model="model.phone_no" mode="international"
                                                            variant="outlined" density="compact" :rules="phone_norule"></vue-tel-input>
                                                    </v-col>
                                                    <v-col cols="1" class="d-flex justify-end">
                                                        <v-btn variant="text" icon size="x-medium" color="warning">
                                                            <v-icon>mdi-help-circle-outline</v-icon>
                                                            <v-tooltip activator="parent" location="bottom">
                                                                If you don't enter the correct phone number, you will
                                                                not see the country code!
                                                            </v-tooltip>
                                                        </v-btn>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            

                                            <!-- <v-col cols="12" md="7"><v-text-field v-model="model.phone_no" item-title='text' item-value='value' variant="outlined" density="compact" :rules="phone_norule"></v-text-field></v-col> -->
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label
                                                    class="font-weight-regular">Email</label></v-col>
                                            <v-col cols="12" md="7"><v-text-field v-model="model.email"
                                                    item-title='text' placeholder="@gmail.com" :rules="emailRules"
                                                    item-value='value' variant="outlined"
                                                    density="compact"></v-text-field></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Identity
                                                    Type<span class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-autocomplete v-model="model.identity_type_id"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact" :items="identity_typelist"
                                                    :rules="identiy_typerule"></v-autocomplete></v-col>
                                        </v-row>
                                        <v-row dense v-show="nrcshow">
                                            <v-col cols="12" md="2"><v-autocomplete
                                                    v-model="model.nrc_state_division_id" label="၁/" item-title='text'
                                                    item-value='value' variant="outlined" density="compact"
                                                    :items="statedivisioncodelist"></v-autocomplete></v-col>
                                            <v-col cols="12" md="3"><v-autocomplete v-model="model.nrc_township_id"
                                                    item-title='text' label="ကခထ/" item-value='value' variant="outlined"
                                                    density="compact"
                                                    :items="townshipcodelist"></v-autocomplete></v-col>
                                            <v-col cols="12" md="3"><v-autocomplete v-model="model.nrc_citizentype_id"
                                                    item-title='text' label="(နိူင်)" item-value='value'
                                                    variant="outlined" density="compact"
                                                    :items="citizentypelist"></v-autocomplete></v-col>
                                            <v-col cols="12" md="4"><v-text-field v-model="model.nrc_no"
                                                    item-title='text' item-value='value' label="xxxxxx"
                                                    variant="outlined" density="compact"
                                                    @input="handleInput"></v-text-field>
                                                <v-alert v-if="showMessage" class="sixnummsg">{{ showMessageText }}
                                                </v-alert></v-col>

                                        </v-row>
                                        <v-row dense v-show="passportshow">
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Passport<span
                                                        class="text-red"></span></label></v-col>
                                            <v-col cols="12" md="7"><v-text-field v-model="model.nrc_passport"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact"></v-text-field></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Address on
                                                    Documents<span class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-text-field v-model="model.address_document"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact"
                                                    :rules="address_documentrule"></v-text-field></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Address<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-text-field v-model="model.address"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact" :rules="address_rule"></v-text-field></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Country<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-autocomplete v-model="model.country_id"
                                                    item-title='text' @click="ChangeCountry()" item-value='value'
                                                    variant="outlined" :items="countrylist" density="compact"
                                                    :rules="state_rule"></v-autocomplete></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">State<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-autocomplete v-model="model.state_division_id"
                                                    item-title='text' @click="ChangeStateDivision()" item-value='value'
                                                    variant="outlined" :items="state_divisionlist" density="compact"
                                                    :rules="state_rule"></v-autocomplete></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">City<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-autocomplete v-model="model.city_id"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    :items="citylist" density="compact"
                                                    :rules="city_rule"></v-autocomplete></v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Selfie with
                                                    Passport/Boarder
                                                    Pass/WorkPermit/OWIC<span class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7">
                                                <picture-input ref="SelfiePictureInput" width="150" height="150"
                                                    margin="14" v-model="model.selfie_photo"
                                                    :prefill="model.selfie_image"
                                                    label="Selfie with Passport/Boarder Pass/WorkPermit/OWIC"
                                                    accept="image/jpeg,image/png" size="300" button-class="btn"
                                                    :custom-strings="{
                                                        upload: '',
                                                        drag: ' 😺 Selfie Photo Upload '
                                                    }" @change="onChange">
                                                </picture-input>
                                                <span v-show="selfie_photorule"
                                                    style="letter-spacing: 0; margin-right: 80px; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                                                    class="text-red">Please Fill NRC/Passport with Selfie Photo</span>
                                            </v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Date of
                                                    Birth<span class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7">
                                                <VueDatePicker v-model="model.date_birth" :enable-time-picker="false"
                                                    teleport-center utc />
                                                <span v-show="birthdaterule"
                                                    style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                                                    class="text-red">Please Fill Date of Birth</span>
                                            </v-col>
                                        </v-row>
                                        <v-row dense class="mt-5">
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Issuse Date<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7">
                                                <VueDatePicker v-model="model.issuse_date" :enable-time-picker="false"
                                                    teleport-center utc />
                                                <span v-show="issusedaterule"
                                                    style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                                                    class="text-red">Please Fill Issuse Date</span>
                                            </v-col>
                                        </v-row>
                                        <v-row dense class="mt-5 mb-5">
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Expiry Date<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7">
                                                <VueDatePicker v-model="model.expiry_date" :enable-time-picker="false"
                                                    teleport-center utc />
                                                <span v-show="expirydaterule"
                                                    style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                                                    class="text-red">Please Fill Expiry Date</span>
                                            </v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Business
                                                    Type</label></v-col>
                                            <v-col cols="12" md="7"><v-autocomplete v-model="model.business_type_id"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    :items="businesstypelist" density="compact"
                                                    :rules="business_typerule"></v-autocomplete></v-col>
                                        </v-row>
                                        <v-row dense v-show="businesstypeshow">
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Business
                                                    Name</label></v-col>
                                            <v-col cols="12" md="7"><v-text-field v-model="model.business_name"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact"></v-text-field></v-col>
                                        </v-row>
                                        <v-row dense v-show="businesstypeshow">
                                            <v-col cols="12" md="5"><label
                                                    class="font-weight-regular">Occupations/Others</label></v-col>
                                            <v-col cols="12" md="7"><v-text-field v-model="model.occupations"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact"></v-text-field></v-col>
                                        </v-row>

                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">Address
                                                    (Work)<span class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-text-field v-model="model.address_work"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    density="compact"
                                                    :rules="address_documentrule"></v-text-field></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label
                                                    class="font-weight-regular">Country(Work)<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-autocomplete v-model="model.work_country_id"
                                                    item-title='text' @click="ChangeWorkCountry()" item-value='value'
                                                    variant="outlined" :items="countrylist" density="compact"
                                                    :rules="state_rule"></v-autocomplete></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">State(Work)<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-autocomplete
                                                    v-model="model.work_state_division_id" item-title='text'
                                                    @click="ChangeWorkStateDivision()" item-value='value'
                                                    variant="outlined" :items="work_state_divisionlist"
                                                    density="compact" :rules="state_rule"></v-autocomplete></v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="5"><label class="font-weight-regular">City(Work)<span
                                                        class="text-red">*</span></label></v-col>
                                            <v-col cols="12" md="7"><v-autocomplete v-model="model.work_city_id"
                                                    item-title='text' item-value='value' variant="outlined"
                                                    :items="work_citylist" density="compact"
                                                    :rules="city_rule"></v-autocomplete></v-col>
                                        </v-row>
                                        <v-col cols="12" md="12">
                                            <v-card-actions class="text-right">
                                                <v-spacer></v-spacer>
                                                <v-btn type="submit" size="small" variant="outlined"
                                                    color="primary">Save</v-btn>
                                                <v-btn dark size="small" variant="outlined" color="warning"
                                                    @click.stop="ClearCancel()">Cancel</v-btn>
                                            </v-card-actions>
                                        </v-col>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <!-- <v-col cols="12" md="1"></v-col> -->
                        </v-row>
                    </v-col>
                </v-card>
            </v-form>
            <SenderBrowse ref="SenderBrowseModal" @PersonId="PersonId" />
        </v-col>
    </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import PictureInput from 'vue-picture-input';
import SelfiePictureInput from 'vue-picture-input';
import Model from "@/models/customer_senderinformation.js";
import Service from "@/services/customerinformation.service.js";
import DropDownService from '@/services/dropdown.service.js';
import SenderBrowse from './SenderBrowseList.vue';
import SenderInformationService from "@/services/senderinformation.service.js";
import { VueTelInput } from 'vue-tel-input';
//import 'vue-tel-input/vue-tel-input.css';


export default {
    components: { VueDatePicker, PictureInput, SelfiePictureInput, SenderBrowse, VueTelInput },

    data() {
        return {
            model: new Model(),
            work_state_divisionlist: [],
            work_citylist: [],
            countrylist: [],
            state_divisionlist: [],
            businesstypelist: [],
            identity_typelist: [],
            statedivisioncodelist: [],
            townshipcodelist: [],
            citizentypelist: [],
            citylist: [],
            first_namerule: [(v) => !!v || "Please Fill FirstName !"],
            last_namerule: [(v) => !!v || "Please Fill LastName !"],
            nrc_passportrule: [(v) => !!v || "Please Fill Passport !"],
            phone_norule: [(v) => !!v || "Please Fill Phone No !"],
            //phone_norule: [(v) => !!v || this.$refs.phoneInput.isValidNumber() || "Invalid phone number"],
            state_divisioncoderule: [(v) => !!v || "State/Divsion"],
            townshipcoderule: [(v) => !!v || "Township"],
            citizentyperule: [(v) => !!v || "Citizen"],
            nrcnorule: [(v) => !!v || "Please Fill NRC No !"],
            nrcshow: false,
            passportshow: false,
            businesstypeshow: false,
            showMessageText: "",
            showMessage: false,
            birthdaterule: false,
            issusedaterule: false,
            expirydaterule: false,
            business_typerule: [(v) => !!v || "Please Fill Business Type!"],
            address_documentrule: [(v) => !!v || "Please Fill Address on Document!"],
            address_rule: [(v) => !!v || "Please Fill Address!"],
            contry_rule: [(v) => !!v || "Please Choise Country!"],
            state_rule: [(v) => !!v || "Please Choise State!"],
            city_rule: [(v) => !!v || "Please Choise City!"],

            emailRules: [(v) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'],
            nrc_passport_photorule: false,
            selfie_photorule: false,
            format: (date) => {
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                return `Selected date is ${day}/${month}/${year}`;
            },
        }
    },

    watch: {
        '$route.query.id'(newId) {
            this.model.id = newId;
        },

        'model.country_id'(val) {
            if (val != null) {
                DropDownService.GetStateDivisionByCountry(val).then((result) => {
                    this.state_divisionlist = result.data;
                })
            }
        },

        'model.state_division_id'(state_id) {
            this.citylist = [];
            if (state_id != null) {
                DropDownService.GetCityListByStateDivision(state_id).then((result) => {
                    this.citylist = result.data;
                })
            }
        },
        'model.work_country_id'(val) {
            if (val != null) {
                DropDownService.GetStateDivisionByCountry(val).then((result) => {
                    this.work_state_divisionlist = result.data;
                })
            }
        },

        'model.work_state_division_id'(work_state_id) {
            this.work_citylist = [];
            if (work_state_id != null) {
                DropDownService.GetCityListByStateDivision(work_state_id).then((result) => {
                    this.work_citylist = result.data;
                })
            }
        },
        'model.identity_type_id'(val) {
            if (val == 1) {
                this.nrcshow = true;
                this.passportshow = false;
            }
            else {
                this.nrcshow = false;
                this.passportshow = true;
            }
        },
        'model.nrc_state_division_id'(val) {
            if (val != null) {
                DropDownService.GetTownshipCode(val).then((result) => {
                    this.townshipcodelist = result.data;
                })
            }
        },
        'model.business_type_id'(val) {
            if (val == 1) {
                this.businesstypeshow = false;
            }
            else {
                this.businesstypeshow = true;
            }
        }
    },

    methods: {
        onChange(image) {
            console.log('New picture selected!')
            if (image) {
                console.log('Picture loaded.')
                this.image = image;
            } else {
                console.log('FileReader API not supported: use the <form>, Luke!')
            }
        },
        changeMedia(media) {
            this.media = media
        },
        ValidateModel() {
            var vm = this;
            if (vm.model.date_birth != null) {

                this.birthdaterule = false;
            }
            else {
                this.birthdaterule = true;
            }
            if (vm.model.issuse_date != null) {
                this.issusedaterule = false;
            }
            else {
                this.issusedaterule = true;
            }
            if (vm.model.expiry_date != null) {
                this.expirydaterule = false;
            }
            else {
                this.expirydaterule = true;
            }
            //For NRC 
            if (this.model.identity_type_id != 1) {
                this.model.nrc_state_division_id = 0;
                this.model.nrc_township_id = 0;
                this.model.nrc_citizentype_id = 0;
                this.model.nrc_no = "";
            }
            else {
                //alert("nrc_passport"+this.model.nrc_passport)
                this.model.nrc_passport = "";
            }
            return this.$refs.form.validate();
        },
        SaveOrUpdate() {
            this.ValidateModel();
            var vm = this;
            if (vm.valid == true) {

                vm.model.nrc_passport_photo = vm.$refs.pictureInput.file;
                vm.model.selfie_photo = vm.$refs.SelfiePictureInput.file;
                window.console.log(vm.$refs.pictureInput.file);
                window.console.log(vm.$refs.SelfiePictureInput.file);
                vm.model.id = parseInt(vm.model.id);
                if(this.model.customer_sender_id == null && this.model.customer_sender_id == undefined){
                    this.model.customer_sender_id = 0;
                }
                Service.SaveOrUpdateSenderInformation(vm.model).then((result) => {
                    if (result.data) {
                        var message = result.data.messages[0];
                        if (result.data.success) {
                            this.$root.AlertDialog.Show({ message: message, color: 'success' });
                            this.$emit("AfterSaved");
                        } else {
                            this.$root.AlertDialog.Show({ message: message, color: 'error' });
                        }
                    }
                });
            }
        },
        ClearCancel() {
            this.model.first_name = "";
            this.model.last_name = "";
            this.model.nrc_passport = "";
            this.model.phone_no = "";
            this.model.date_birth = "";
            this.model.issuse_date = "";
            this.model.expiry_date = "";
            this.model.address_document = "";
            this.model.email = "";
            this.model.business_type_id = 1;
            this.model.business_name = "";
            this.model.occupations = "";
            this.model.address = "";
            this.model.address_work = "";
            this.model.country_id = null;
            this.model.state_division_id = null;
            this.model.city_id = null;
            this.model.nrc_passport_photo = "";
            this.model.nrc_passport_image = "";
            this.model.selfie_photo = "";
            this.model.selfie_image = "";
        },
        ChangeCountry() {
            this.model.state_division_id = null;
            this.model.city_id = null;
        },
        ChangeWorkCountry() {
            this.model.work_state_division_id = null;
            this.model.work_city_id = null;
        },
        ChangeStateDivision() {
            this.model.city_id = null;
        },
        ChangeWorkStateDivision() {
            this.model.work_city_id = null;
        },
        Browse() {
            this.$refs.SenderBrowseModal.Show();
        },
        PersonId(id) {
            var vm = this;
            SenderInformationService.GetById(id).then(
                (response) => {
                    window.console.log(response.data)

                    vm.model= response.data;
                    vm.model.customer_sender_id = response.data.customer_sender_id;
                    vm.model.id = this.$route.query.id;
                    if (response.data.nrc_passport_image == null || response.data.nrc_passport_image == "") {
                        vm.model.nrc_passport_image = null;
                    }
                    else {
                        vm.model.nrc_passport_image = `data:image/png;base64,${response.data.nrc_passport_image}`;
                    }
                    if (response.data.selfie_image == null || response.data.selfie_image == "") {
                        vm.model.selfie_image = null;
                    }
                    else {
                        vm.model.selfie_image = `data:image/png;base64,${response.data.selfie_image}`;
                    }
                    this.dialog = flase;
                });
        },
        handleInput() {
            this.model.nrc_no = this.model.nrc_no.replace(/[^0-9]/g, '');
            if (this.model.nrc_no.length > 6) {
                this.model.nrc_no = this.model.nrc_no.slice(0, 6);
            }
            this.showMessage = this.model.nrc_no.length !== 6;
            this.showMessageText = this.model.nrc_no.length < 6 ? '6 Digits' : '';
            if (this.model.nrc_no.length === 6) {
                this.showMessage = false;
            }
            this.validateInput();
        },
        validateInput() {
            this.isValid = /^\d{6}$/.test(this.model.nrc_no);
        },

        //     GetById(){
        //         var vm = this;
        //         alert("hh")
        //         Service.GetById(this.model.id).then(
        //              (response) => {
        //             vm.model= response.data;
        //             if(response.data.nrc_passport_image == null || response.data.nrc_passport_image =="")
        //     {
        //       vm.model.nrc_passport_image=null;
        //     }
        //     else{
        //       vm.model.nrc_passport_image = `data:image/png;base64,${response.data.nrc_passport_image}`;
        //     }
        //     if(response.data.selfie_image == null || response.data.selfie_image =="")
        //     {
        //       vm.model.selfie_image=null;
        //     }
        //     else{
        //       vm.model.selfie_image = `data:image/png;base64,${response.data.selfie_image}`;
        //     }
        //     });
        // },
    },
    created() {
        this.model.id = this.$route.query.id;
        this.model.identity_type_id = 2; //For Default Passport
        this.model.business_type_id = 1; //For Default Business Type
        DropDownService.GetCountryList().then((result) => {
            this.countrylist = result.data;
        })
        DropDownService.GetGetBusinessTypeList().then((result) => {
            this.businesstypelist = result.data;
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

.sixnummsg {
    background: #fff !important;
    color: rgb(201, 8, 8) !important;
    font-size: 14px !important;
    margin-top: -20px !important;
    font-weight: bold;
}
</style>