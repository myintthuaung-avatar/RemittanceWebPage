<template>
    <!-- <div style="text-align: center; justify-content: center">
        <h1>M-Money</h1>
    </div> -->
    <div
        style=" background-size: cover; margin-top: 2cap;
         background-repeat: no-repeat; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
        <v-form autocomplete="off" ref="form" v-model="valid">
            <v-card class="mx-auto my-8" elevation="16" max-width="500px">

                <v-card-title style="text-align: center; font-weight: bold">
                    <!-- <v-icon icon="mdi-account-plus"></v-icon>  -->
                    Create a new Account
                </v-card-title>
                
                <v-divider></v-divider>
                <v-col cols="12" sm="12">
                    <!-- Form fields for the first card -->
                     <label style="font-size: 11px;">Please Enter your name on passport</label>
                    <v-row dense>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="first" color="primary" label="First name" clearable
                                variant="outlined" density="compact"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="middle" color="primary" label="Last name" clearable
                                variant="outlined" density="compact"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col cols="12" sm="6">
                            <VueDatePicker v-model="date_birth" placeholder=" Date of Birth" variant="outlined"
                                :enable-time-picker="false" teleport-center utc />
                            <span v-show="birthdaterule"
                                style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                                class="text-red">Please Fill Date of Birth</span>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="phone" color="primary" label="Phone Number" clearable
                                variant="outlined" density="compact"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="email" color="primary" label="Email" hint="@gmail.com" clearable
                                variant="outlined" density="compact"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="password" color="primary" label="Password" clearable
                                placeholder="Enter your password" hint="At least 8 characters" variant="outlined"
                                density="compact"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="12" sm="1">
                            <v-checkbox v-model="terms" color="indigo"></v-checkbox>
                            <!-- <v-checkbox :model-value="true"></v-checkbox> -->
                        </v-col>
                        <v-col cols="12" sm="11" >
                            <label style="font-size: 14px; ">
                                People who use our service may have uploaded your contact information to M-Money.</label> 
                        </v-col>
                    </v-row>
                    <v-row style="margin-top: -30px;" align="center" justify="center" height>
                        <v-col cols="12" sm="1">
                            <v-checkbox v-model="privacy" color="indigo"></v-checkbox>
                            <!-- <v-checkbox :model-value="true"></v-checkbox> -->
                        </v-col>
                        <v-col cols="12" sm="11">
                            <label style="font-size: 14px;">
                                By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. 
                                You may receive SMS notifications from us and can opt out at any time.</label> 
                        </v-col>
                    </v-row dense>
                    <!-- Other form fields -->
                    <v-row align="center" justify="center">
                        <v-col cols="auto" sm="12" class="d-flex justify-center">
                            <v-card-actions>
                                <v-btn width="180" variant="outlined" rounded>
                                    Sign Up
                                    <!-- <v-icon icon="mdi-chevron-right" end></v-icon> -->
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-card-actions>
                            <a href="">Already have an account? Login</a>
                        </v-card-actions>
                    </v-row>
                    <v-row style="text-align: center;">
                        <v-col cols="12" sm="1"></v-col>
                        <v-col cols="12" sm="10">
                            <p style="font-weight: bold;">Money Transfer Agent license number 12547002 Issued by the Ministry of Finance</p>
                        </v-col>
                        
                    </v-row>
                </v-col>
            </v-card>
        </v-form>
    </div>
</template>

<script>
import PictureInput from 'vue-picture-input';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import DropDownService from '@/services/dropdown.service.js';
import Model from "@/models/customer_senderinformation.js";
import Service from "@/services/customerinformation.service.js";
export default {
    components: { VueDatePicker, PictureInput },
    name: 'UserRegistrationCard',
    data: () => ({
        model: new Model(),
        currentCard: 1,
        first: null,
        middle: null,
        last: null,
        phone: null,
        address: null,
        email: null,
        date_birth: null,
        password: null,
        terms: false,
        privacy: false,
        valid: false,
        inline: null,
        selfie_image: "",
        selfie_photo: "",
        nrc_passport_photo: "",
        nrc_passport_image: "",
        countrylist: [],
        state_divisionlist: [],
        citylist: [],
        businesstypelist: [],
        contry_rule: [(v) => !!v || "Please Choise Country!"],
        state_rule: [(v) => !!v || "Please Choise State!"],
        city_rule: [(v) => !!v || "Please Choise City!"],
    }),
    watch: {

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
    },
    methods: {
        nextCard() {
            this.currentCard = 2;
        },
        backCard() {
            this.currentCard = 1;
        },
        submitForm() {
            // Handle form submission
            alert('Form submitted!');
        },
        ChangeCountry() {
            this.model.state_division_id = null;
            this.model.city_id = null;
        },
    },
    created() {

        DropDownService.GetCountryList().then((result) => {
            this.countrylist = result.data;
        })
        DropDownService.GetGetBusinessTypeList().then((result) => {
            this.businesstypelist = result.data;
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
.outlined-title {
    border: 1pt solid #000;
    /* Adjust the border color as needed */
    padding: 2cap;
    font-size: 24px;
    /* Adjust the font size as needed */
    font-weight: bold;
    text-align: left;

}

.v-text-field {
    color: black;
    /*font-family: 'Courier New', Courier, monospace;*/
    font-family: 'Times New Roman', Times, serif;
    font-variant: inherit;
    font-style: normal;

}

.v-btn{
    background-color: blue;
    color:  white !important;
    text-shadow: 5cap;
}

.custom-label {
    color: darkblue;
    font-family: 'Times New Roman', Times, serif;
}

/* .rotating-image {
    display: block;

    width: 100px;
    /* Adjust the width as needed 
    height: 100px;
    /* Adjust the height as needed 
    animation: rotate 5s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
} */

/* .blurred-image {
  filter: blur(5px);
} */
</style>
