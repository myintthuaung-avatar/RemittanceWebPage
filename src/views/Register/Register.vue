<template>
    <div style="background-color: #BBDEFB; background-size: cover; background-position: left;
         background-repeat: no-repeat; min-height: 90vh; display: flex; align-items: center; justify-content: center;">
        <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"> -->
        <v-form autocomplete="off" ref="form" v-model="valid">
            <v-card v-if="currentCard === 1" flat class="mx-auto" color="primary" rounded="lg" variant="outlined"
                style="background-color: white; margin-top: 3cap; width: 800px; height: 600px;">
                <v-card-title
                    style="font-family:Georgia, 'Times New Roman', Times, serif;  text-align: center; font-style: oblique;">
                    <!-- <v-icon icon="mdi-account-plus"></v-icon> -->
                    📜 User Registration
                </v-card-title>
                <div>
                    <v-row>
                        <v-col cols="12" sm="1">
                            <v-avatar color="white" size="40" class="ml-5" width="100px">
                                <v-img src="../../../src/assets/mbf_logo.png" class="rotating-image"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col cols="12" sm="10">
                            <figure>
                                <figcaption
                                    style="font-family:Georgia, 'Times New Roman', Times, serif; font-style: oblique;font-size: 20px;">
                                    Remittance System</figcaption>
                            </figure>
                        </v-col>
                    </v-row>
                </div>

                <v-col cols="12" sm="12" class="mt-2">
                    <!-- Form fields for the first card -->
                    <v-row dense>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="first" color="primary" label="🐷 First name" clearable
                                variant="outlined" density="compact"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="middle" color="primary" label="🦚 Middle name" clearable
                                variant="outlined" density="compact"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <VueDatePicker v-model="date_birth" placeholder="🎂 Date of Birth" variant="outlined"
                                :enable-time-picker="false" teleport-center utc />
                            <span v-show="birthdaterule"
                                style="letter-spacing: 0; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                                class="text-red">Please Fill Date of Birth</span>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="phone" color="primary" label="☎️ Phone NO" clearable
                                variant="outlined" density="compact"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="email" color="primary" label=" 📧 Email" clearable variant="outlined"
                                density="compact"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="password" color="primary" label="🔐 Password" clearable
                                placeholder="Enter your password" hint="At least 8 characters" variant="outlined"
                                density="compact"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12">
                            <v-textarea label="🏡 Address" v-model="address" row-height="20" rows="2" variant="outlined"
                                auto-grow color="primary" shaped></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-radio-group class="inline-radio" inline label="👻 Gender">
                            <v-radio label="Male" value="two"></v-radio>
                            <v-radio label="Female" value="three"></v-radio>
                            <v-radio label="Other" value="one"></v-radio>
                        </v-radio-group>
                        <v-checkbox v-model="ex4" color="primary" label="primary" value="primary"
                            hide-details></v-checkbox>
                        <v-checkbox v-model="ex4" color="indigo" label="indigo" value="indigo"
                            hide-details></v-checkbox>
                    </v-row>
                    <!-- Other form fields -->
                    <v-row align="center" justify="center">
                        <v-col cols="auto" sm="12" class="d-flex justify-center">
                            <v-card-actions>
                                <v-btn width="200" color="darkblue" variant="outlined" @click="nextCard" rounded>
                                    🙄 Next
                                    <v-icon icon="mdi-chevron-right" end></v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-col>
            </v-card>

            <v-card v-if="currentCard === 2" flat class="mx-auto" color="primary" rounded="lg" variant="outlined"
                style="background-color: white; margin-top: 3cap; width: 800px; height: 600px;">
                <v-card-title
                    style="font-family:Georgia, 'Times New Roman', Times, serif;  text-align: center; font-style: oblique;">
                    Additional Information
                </v-card-title>
                <v-col cols="12" sm="12" class="mt-2">
                    <!-- Form fields for the second card -->
                    <v-row dense>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="phone" color="primary" label="Phone NO" clearable variant="outlined"
                                density="compact"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="email" color="primary" label="Email" clearable variant="outlined"
                                density="compact"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="password" color="primary" label="Password" clearable
                                placeholder="Enter your password" hint="At least 8 characters" variant="outlined"
                                density="compact"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Selfie with Passport/Boarder
                                        Pass/Work Permit/OWIC<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" sm="7">
                                    <picture-input ref="SelfiePictureInput" width="150" height="150" margin="14"
                                        v-model="selfie_photo" :prefill="selfie_image"
                                        label="Selfie with Passport/Boarder Pass/WorkPermit/OWIC"
                                        accept="image/jpeg,image/png" size="300" button-class="btn" :custom-strings="{
                                            upload: '',
                                            drag: ' 😺 Selfie Photo Upload '
                                        }" @change="onChange">
                                    </picture-input>
                                    <span v-show="selfie_photorule"
                                        style="letter-spacing: 0; margin-right: 80px; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                                        class="text-red">Please Fill NRC/Passport with Selfie Photo</span>

                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-row dense>
                                <v-col cols="12" md="5"><label class="font-weight-regular">Passport/Boarder
                                        Pass/Work Permit/OWIC<span class="text-red">*</span></label></v-col>
                                <v-col cols="12" sm="7">
                                    <picture-input ref="pictureInput" width="150" height="150"
                                        v-model="nrc_passport_photo" :prefill="nrc_passport_image" margin="14"
                                        accept="image/jpeg,image/png" size="300" button-class="btn" :custom-strings="{
                                            upload: '',
                                            drag: ' 😺Photo Upload '
                                        }" @change="onChange">
                                    </picture-input>
                                    <span v-show="nrc_passport_photorule"
                                        style="letter-spacing: 0; margin-right: 80px; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                                        class="text-red">Please Fill NRC/Passport Photo</span>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col cols="12" sm="12">
                            <v-checkbox v-model="terms" class="custom-label" style="font-weight: bold;"
                                label="I agree to site terms and conditions"></v-checkbox>
                        </v-col>
                    </v-row>
                    <!-- Other form fields -->
                    <v-row align="center" justify="center">
                        <v-col cols="auto" sm="12" class="d-flex justify-center">
                            <v-card-actions>
                                <v-btn width="200" color="darkblue" variant="outlined" @click="backCard" rounded>
                                    🤮 Back
                                    <v-icon icon="mdi-chevron-left" end></v-icon>
                                </v-btn>
                                <v-btn width="200" color="darkblue" variant="outlined" @click="submitForm" rounded>
                                    👌 Submit
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-col>
            </v-card>

            <!-- <v-card-actions>
                      <v-row justify="center">
                          <v-col class="py-3 text-xs-center" cols="12">
                              ©2024 — <strong>Vuetify</strong>
                          </v-col>
                      </v-row>
                  </v-card-actions> -->
            <v-card-subtitle class="text-center" style="font-size: 14px; color: #666;">
                ©2024 — <strong>Vuetify</strong>
            </v-card-subtitle>
        </v-form>
        <!-- </v-parallax> -->
    </div>
</template>

<script>
import PictureInput from 'vue-picture-input';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
export default {
    components: { VueDatePicker, PictureInput },
    name: 'UserRegistrationCard',
    data: () => ({
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
        valid: false,
        inline: null,
        selfie_image: "",
        selfie_photo: "",
        nrc_passport_photo: "",
        nrc_passport_image: "",
        ex4: ['primary', 'indigo']
    }),
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
        }
    }
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

.v-card--flat {
    margin-top: 3cap;
}

.v-text-field {
    color: black;
    /*font-family: 'Courier New', Courier, monospace;*/
    font-family: 'Times New Roman', Times, serif;
    font-variant: inherit;
    font-style: normal;

}

.text-label {
    font-weight: bolder;
    color: #000;
    font-display: block;
}

.inline-radio {
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    font-style: oblique;
    color: blue;
    display: flex;
}

.bold-labels .v-radio__label {
    font-weight: bold;
}

.v-btn:hover {
    background-color: #AED8FF;
}

.custom-label {
    color: darkblue;
    font-family: 'Times New Roman', Times, serif;
}

.rotating-image {
    display: block;

    width: 100px;
    /* Adjust the width as needed */
    height: 100px;
    /* Adjust the height as needed */
    animation: rotate 5s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

/* .blurred-image {
  filter: blur(5px);
} */
</style>
