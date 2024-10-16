<template>
    <div style="max-width: auto; max-height: auto;">
        <v-form autocomplete="off" ref="form" v-model="valid">
            <v-row align="center" class="mt-1" justify="center">
                <v-col cols="12" md="10">
                    <v-card flat class="mx-auto">
                        <v-img src='../../../src/assets/transf-1.jpg' height="500px" cover>
                            <v-card-title class="text-h1 text-blue text-center d-flex flex-column">
                                <p class="mt-2 text-body-2 font-weight-bold">
                                    M Moneyနဲ့ ငွေလွှဲဖို့ ခုပဲ Register လုပ်လိုက်ရအောင်
                                </p>
                                <!-- <div>
                                            <p class="ma-0 text-body-1 font-weight-bold">
                                                {{ item.text }}
                                            </p>
                                            <p class="text-caption font-weight-medium">
                                                {{ item.subtext }}
                                            </p>
                                        </div> -->
                            </v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12">
                    <v-card style="background-color: #AED8FF;">
                        <v-col cols="12" md="10">
                            <h1 style="color: blue;" align="center" class="mt-2">How to Register</h1>
                            <v-row align="center" class="mt-1" justify="center">
                                <v-col cols="12" md="4">
                                    <v-img src="../../../src/assets/Landing/phone.webp" height="200"></v-img>
                                    <p style="text-align: center;">1.Enter Phone No</p>
                                    <!-- <label style="align-items: center">1.Enter Phone No</label> -->
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-img src="../../../src/assets/Landing/otp.webp" height="200"></v-img>
                                    <p style="text-align: center;">2.Enter OTP code</p>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-img src="../../../src/assets/Landing/terms.webp" height="200"></v-img>
                                    <p style="text-align: center;">3. Review Terms of Service and Privacy Policy then
                                        click “Accept” to start </p>
                                </v-col>
                                
                            </v-row>
                            <v-row align="center" class="mt-1" justify="center">
                                <v-col cols="12" md="4">
                                    <v-img src="../../../src/assets/Landing/fillInfo.png" height="200"></v-img>
                                    <p style="text-align: center;">4. Fill your information in Register Form </p>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-img src="../../../src/assets/Landing/workpermit.png" height="200"></v-img>
                                    <p style="text-align: center;">6.Upload your Passport and WorkPermit</p>
                                    <p style="text-align: center;">7.Click Submit</p>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-img src="../../../src/assets/approve.jpg" height="200"></v-img>
                                    <p style="text-align: center;">8.Email will send to approve and Username and Password for Login</p>
                                </v-col>
                            </v-row>
                            <v-row align="center" class="mt-1" justify="center">
                                <v-col cols="12" md="4">
                                    <v-img src="../../../src/assets/Landing/Thank.webp" height="200"></v-img>
                                    <p style="text-align: center;">Successful register and waiting for approval by SMS in 1-3 business days. After which, you can login and use M-Money</p>
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
        items: [
            {
                title: 'How To Transfer Money with M-Money ',
                text: `It's New Release Friday`,
                subtext: 'Newly released songs.',
                img: '../../../src/assets/transf-1.jpg',
            },
        ],
        transparent: 'rgba(255, 255, 255, 0)',
    })
}
</script>
<style scoped>
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
</style>