<template>
  <div style="max-width: auto; max-height: auto;">
    <v-form autocomplete="off" ref="form" v-model="valid">
      <v-row align="center" class="mt-1" justify="center">
        <v-col cols="12" sm="12" class="" height="30%">
          <v-card>
            <!-- <v-img src='../../../src/assets/Landing/reg_back4.webp' height="400px" cover>
                            <v-card-title class="text-h1 text-blue text-center d-flex flex-column">
                                <p class="mt-2 text-body-2 font-weight-bold">
                                    M Moneyနဲ့ ငွေလွှဲဖို့ ခုပဲ Register လုပ်လိုက်ရအောင်
                                </p>
                                <div>
                                            <p class="ma-0 text-body-1 font-weight-bold">
                                                {{ item.text }}
                                            </p>
                                            <p class="text-caption font-weight-medium">
                                                {{ item.subtext }}
                                            </p>
                                        </div>
                            </v-card-title>
                        </v-img> -->

            <video autoplay muted loop class="d-block w-100">
              <source src="/src/assets/Landing/registerBC.mp4" type="video/mp4">
            </video>
          </v-card>
        </v-col>
      </v-row>


      <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card flat class="pa-4" style="background-color: whitesmoke;">
          <v-card-title class="text-center">
            <h1 class="display-1">How to Register for M-Money</h1>
          </v-card-title>
          <v-card-subtitle class="text-center mb-4">
            <h2 class="subtitle-1">Follow these simple steps to create your account</h2>
          </v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <h3>Step 1: Go to the Registration Page</h3>
                <p>Open your web browser and navigate to the M-Money website. Click on the "Register" button located at the top right corner of the homepage.</p>
              </v-col>
              <v-col cols="12">
                <h3>Step 2: Enter Your Personal Information</h3>
                <p><strong>Name:</strong> Type your full name in the provided field.</p>
                <p><strong>Date of Birth:</strong> Select your date of birth from the calendar.</p>
                <p><strong>Phone Number:</strong> Enter your mobile phone number. Make sure it's active as you might receive a verification code.</p>
              </v-col>
              <v-col cols="12">
                <h3>Step 3: Provide Your Contact Details</h3>
                <p><strong>Email:</strong> Enter a valid email address. This will be used for account verification and communication.</p>
                <p><strong>Password:</strong> Create a strong password. It should be at least 8 characters long and include a mix of letters, numbers, and special characters.</p>
              </v-col>
              <v-col cols="12">
                <h3>Step 4: Verify Your Information</h3>
                <p>Double-check all the information you have entered to ensure it's correct. Click on the "Submit" button to proceed.</p>
              </v-col>
              <v-col cols="12">
                <h3>Step 5: Complete the Verification Process</h3>
                <p><strong>Email Verification:</strong> Check your email inbox for a verification link from M-Money. Click on the link to verify your email address.</p>
                <p><strong>Phone Verification:</strong> You might receive a text message with a verification code. Enter this code on the registration page to verify your phone number.</p>
              </v-col>
              <v-col cols="12">
                <h3>Step 6: Finalize Your Registration</h3>
                <p>Once your email and phone number are verified, you will be redirected to a confirmation page. Congratulations! Your M-Money account is now active. You can log in and start using the services.</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

      <v-row align="center" class="mt-1" justify="center">
        <v-col cols="12" sm="12">
          <v-card flat style="background-color: whitesmoke;" class="element-animation">
            <v-col cols="12" sm="12">
              <h1 style="color: black;" align="center" class="mt-2 sm-4">How to Transfer</h1>
              <v-row align="center" justify="center" class="mt-1">
                <v-col cols="12" sm="4">
                  <v-card class="mx-auto my-8" elevation="16" max-width="220px">
                    <v-img src="../../../src/assets/Landing/register_new1.png" height="200" we></v-img>
                    <p style="text-align: center;">1.Create an Acccount First!</p>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-card class="mx-auto my-8" elevation="16" max-width="200px">
                    <v-img src="../../../src/assets/Landing/phone.webp" height="200" we></v-img>
                    <p style="text-align: center;">1.Enter Phone No</p>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-card class="mx-auto my-8" elevation="16" max-width="200px">
                    <v-img src="../../../src/assets/Landing/otp.webp" height="200"></v-img>
                    <p style="text-align: center;">2.Enter OTP code</p>
                  </v-card>
                </v-col>
              </v-row>
              <v-row align="center" class="mt-2" justify="center">
                <v-col cols="12" md="4">
                  <v-card class="mx-auto my-8" elevation="16" max-width="200px">
                    <v-img src="../../../src/assets/Landing/terms.webp" height="180"></v-img>
                    <p style="text-align: center;">3. Review Terms of Service and Privacy Policy
                    </p>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card class="mx-auto my-8" elevation="16" max-width="200px">
                    <v-img src="../../../src/assets/Landing/fillInfo.png" height="200"></v-img>
                    <p style="text-align: center;">4. Fill your information in Register Form </p>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card class="mx-auto my-8" elevation="16" max-width="200px">
                    <v-img src="../../../src/assets/Landing/workpermit.png" height="200"></v-img>
                    <p style="text-align: center;">5.Upload your Passport and WorkPermit</p>
                    <p style="text-align: center;">6.Click Submit</p>
                  </v-card>
                </v-col>

              </v-row>
              <v-row align="center" class="mt-2" justify="center">
                <v-col cols="12" md="4">
                  <v-card class="mx-auto my-8" elevation="16" max-width="250px">
                    <v-img src="../../../src/assets/approve.jpg" height="250"></v-img>
                    <p style="text-align: center;">7.Email will send to approve and Username and
                      Password for Login</p>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card class="mx-auto my-8" elevation="16" max-width="250px">
                    <v-img src="../../../src/assets/Landing/Thank.webp" height="200"></v-img>
                    <p style="text-align: center;">Successful register and waiting for approval by
                      SMS
                      in 1-3 business days. After which, you can login and use M-Money</p>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
    <!-- <v-form style="width: 80vh;" class="pa-2 text-center">
            <v-row align="center" class="fill-height ma-0" justify="center">
                <v-col cols="12" md="12">
                <v-img src="../../../src/assets/office.jpg" :class="{ 'hover-effect': isHovering }" class="my-image">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
</v-img>
</v-col>
</v-row>
</v-form> -->

  </div>
</template>
<script>
export default {
  name: 'ImageHoverExample,PayslipComponent',
  data: () => ({
    valid: false,
    showText: true,
    items: [
      {
        title: 'How To Transfer Money with M-Money ',
        text: `It's New Release Friday`,
        subtext: 'Newly released songs.',
        img: '../../../src/assets/transf-1.jpg',
      },
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),
  methods: {
    toggleText() {
      this.showText = !this.showText;
    }
  }

}


</script>
<style scoped>
.bordered-container {
  border: 1px solid #000;
  /* Adjust the color and width as needed */
  border-radius: 4px;
  /* Optional: Add rounded corners */
  padding: 3px;
  /* Optional: Add padding inside the border */
  text-align: center;
  /* Ensure text is centered */
}

.text-center {
  text-align: center;
}

/* .v-img:hover {
    display: block;
    transition: transform 0.5s ease-in-out;
    transform: scale(1.1);
    color: black;
} */
/* .v-card {
    transition: transform .4s ease-in-out;
  }

  .v-card:not(.on-hover) {
    transform: scale(1.1);
  } */
/* @keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element-animation {
  
  animation: fadeInUp 2s ease-out;
} */



@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.element-animation {
  animation: fadeInUp 1s ease-out;
}

@keyframes customFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-animation {
  animation: customFadeIn 1s ease-out;
}


@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInUp {
  animation: fadeInUp 1s ease-out;
}


@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInLeft {
  animation: fadeInLeft 1s ease-out;
}


@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInRight {
  animation: fadeInRight 1s ease-out;
}


@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInDown {
  animation: fadeInDown 1s ease-out;
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  animation: fadeIn 1s ease-out;
}
</style>