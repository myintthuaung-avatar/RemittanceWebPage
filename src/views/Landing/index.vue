<template>
    <div style="padding-left: 10%">
        <v-row dense>
            <v-col cols="12" md="12" class="mt-6">
                <v-card max-width="1200" height="350">
                    <div width="100">
                        <video autoplay muted loop class="d-block w-100">
                            <source src="/src/assets/mbgr-landing.mp4" type="video/mp4">
                        </video>
                    </div>
                </v-card>

            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="12" md="12" class="mt-6">
                <v-card style="border: 1px solid #ddd;" class="background-container" max-width="1200" height="250">
                    <v-tool-bar color="rgb(25 63 115)" dark flat height="90">
                        <v-toolbar-title dark class="text-center secondary">Daily Exchange Rate</v-toolbar-title>
                    </v-tool-bar>
                    <v-form>
                        <v-row>
                            <v-col cols="12" md="4">
                                <h3 style="color: blue;"> 1 THB = 142.3698745 MMK</h3>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="12">
                                <h3>Exchange Rate Calculator</h3>
                            </v-col>
                            <v-col cols="12" md="3">
                                <label>Transfer Amount</label>
                                <v-text-field variant="outlined" density="compact"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3">
                                <label>From</label>
                                <select id="country" v-model="formValues.country">
                                    <option value="">Select a country</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="China">China</option>
                                    <option value="Thailand">Thailand</option>
                                </select>
                            </v-col>
                            <v-col cols="12" md="3">
                                <label>To</label>
                                <select id="country" v-model="formValues.country">
                                    <option value="">Select a country</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="China">China</option>
                                    <option value="Thailand">Thailand</option>
                                </select>
                            </v-col>
                            <v-col cols="12" md="3">
                                <label>Withdraw Amount</label>
                                <v-text-field variant="outlined" density="compact"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>

            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="12" md="12" class="mt-6">
                <v-card style="border: 1px solid #ddd;" max-width="1200" height="350">
                    <v-tool-bar color="rgb(25 63 115)" dark flat height="90">
                        <v-toolbar-title dark class="text-center secondary">How To Transfer Money With Mahar Bawga
                            Money</v-toolbar-title>
                    </v-tool-bar>
                    <v-form>
                        <v-col cols="12" md="12" class="mt-6">
                            <v-row dense>
                                <v-col cols="12" md="1"></v-col>
                                <v-col cols="12" md="2" class="card howto" style="text-align: center;">
                                    <label class='textcenter'>Go to Website</label>
                                    <!-- <img src="/src/assets/howto1.png" width="150" /> -->
                                </v-col>
                                <v-col cols="12" md="2" class="card howto">
                                    <label class='textcenter'>Prepare your Passport,Work Permit or OWIC</label>
                                    <!-- <img src="/src/assets/howto2.png" width="150" /> -->
                                </v-col>
                                <v-col cols="12" md="2" class="card howto">
                                    <label class='textcenter'>Fill in information</label>
                                    <!-- <img src="/src/assets/howto3.png" width="150" /> -->
                                </v-col>
                                <v-col cols="12" md="2" class="card howto">
                                    <label class='textcenter'>Take photo of Passport & selfie with
                                        Passport</label>
                                    <!-- <img src="/src/assets/howto4.png" width="150" /> -->
                                </v-col>
                                <v-col cols="12" md="2" class="card howto">
                                    <label class='textcenter'>Waiting for SMS to get Approval</label>
                                    <!-- <img src="/src/assets/howto5.png" width="150" /> -->
                                </v-col>
                                <v-col cols="12" md="1"></v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="1"></v-col>
                                <v-col cols="12" md="2" class="card howto" style="text-align: center;">
                                    <!-- <label class='textcenter'>Go to Website</label> -->
                                    <img src="/src/assets/howto1.png" width="150" />
                                </v-col>
                                <v-col cols="12" md="2" class="card howto">
                                    <!-- <label class='textcenter'>Prepare your Passport,Work Permit or OWIC</label> -->
                                    <img src="/src/assets/howto2.png" width="150" />
                                </v-col>
                                <v-col cols="12" md="2" class="card howto">
                                    <!-- <label class='textcenter'>Fill in information</label> -->
                                    <img src="/src/assets/howto3.png" width="150" />
                                </v-col>
                                <v-col cols="12" md="2" class="card howto">
                                    <!-- <label class='textcenter'>Take photo of Passport & selfie with
                                        Passport</label> -->
                                    <img src="/src/assets/howto4.png" width="150" />
                                </v-col>
                                <v-col cols="12" md="2" class="card howto">
                                    <!-- <label class='textcenter'>Waiting for SMS to get Approval</label> -->
                                    <img src="/src/assets/howto5.png" width="150" />
                                </v-col>
                                <v-col cols="12" md="1"></v-col>
                            </v-row>
                        </v-col>

                    </v-form>
                </v-card>

            </v-col>
        </v-row>

    </div>
</template>

<script>
export default {
    data() {
        return {
            formValues: {
                country: '',
            },
        }
    }
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
}

label {
    text-align: center;
    font-weight: bold;
    display: flex;
    margin-bottom: 5px;
}

input+label {
    font-weight: bold;
    display: inline-flex;
    margin-right: 20px;
}

input[type='text'],
textarea,
select {
    display: block;
    width: 200;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
}

.text-center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aqua;
}

.textcenter {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.background-container {
    background-image: url(/src/assets/exchangeratebg.png);
    background-size: cover;
    background-position: center;
}

img {
    text-align: center;
    border: none !important;
    background-color: #b9dbff;
}

.card.howto {
    border: none !important;
}

.card.howto .card-body {
    background-color: #b9dbff;
}

.card.howto .card-header {
    background-color: inherit;
    border: none !important;
    font-size: 0.875rem;
}
</style>