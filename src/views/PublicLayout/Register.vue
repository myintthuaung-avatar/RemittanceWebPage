<template>
    <div>
        <v-col cols="12" md="12">
            <v-form @submit.prevent="SaveOrUpdate" autocomplete="off" ref="form" v-model="valid">
            <v-card class="mx-auto my-8" elevation="16" max-width="900px">

                <v-card-title style="text-align: center; font-weight: bold; color:#0a1775">
                    Create a new Account
                </v-card-title>
                <v-col cols="12" sm="12"><v-row dense>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="model.name" color="#0a1775" label="Name" clearable variant="outlined" density="compact" required :rules="namerule"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="model.username" color="#0a1775" label="User name" clearable variant="outlined" density="compact" required :rules="usernamerule"></v-text-field>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col cols="12" sm="6">
                    <v-text-field
                              v-model="model.password"
                              prepend-inner-icon="mdi-key"
                              variant="outlined" density="compact"
                              label="Password" required
                              :append-inner-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append-inner="() => (showpass = !showpass)"
                              :type="showpass ? 'password' : 'text'"
                              dense :rules="passwordrule">
                            </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="model.confirm_password" required 
                        :rules="confirm_passwordRules" :type="showPassText ? 'text' : 'password'"
                        :append-icon="showPassText ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassText = !showPassText" autocomplete="off" variant="outlined"
                        density="compact" dense></v-text-field>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="model.email" color="#0a1775" label="Email" hint="@gmail.com" clearable required :rules="emailrule"
                        variant="outlined" density="compact"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <vue-tel-input v-model="model.phone_no" mode="international" @blur="validatePhone"
                    variant="outlined" density="compact" required :rules="phone_norule"  label="Phone no"  style=" height: 40px;"></vue-tel-input>
                    <p v-if="!isPhoneValid" class="error-message">Invalid phone number</p>
                </v-col>
            </v-row>
                <v-col cols="12" sm="12" class="mt-n6" >
                    <v-checkbox v-model="aggrementone" color="primary"  style="margin-top: 25px;"
                    label="People who use our service may have uploaded your contact information to M-Money.">
                </v-checkbox>
                <v-checkbox v-model="aggrementtwo" color="primary"  class="mt-n5"
                    label="You are confirming that you have read and agree to M-Money’s Terms and Conditions and Privacy Policy.">
                </v-checkbox>
                </v-col>
                <v-col cols="auto" sm="12" class="d-flex justify-center mt-n8">
                    <v-card-actions>
                        <v-btn variant="flat" width="290" height="45" type="submit" class="flex-grow-1" block color="#0a1775">Sign Up</v-btn>
                    </v-card-actions>
                </v-col>
                <v-col cols="auto" sm="12" class="d-flex justify-center mt-8">
                    <a href="">Already have an account? Login</a>
                </v-col>
                </v-col>
            </v-card>
        </v-form>
        
        </v-col>
    </div>
    <!-- </div> -->
</template>

<script>
import { VueTelInput } from 'vue-tel-input';
import Service from "@/services/user.service.js";
import Model from "@/models/user";

export default {
    components: {VueTelInput },
    data: () => ({
        model: new Model(),
        showPassText: false,
        showPassInputBox:true,
        showpass: false,
        showconfirmpassword:false,
        valid: false,
        isPhoneValid:true,
        aggrementone:true,
        aggrementtwo:true,
        namerule:[(v) => !!v || "Please Fill Name !"],
        usernamerule: [(v) => !!v || "Please Fill User Name !"],
        phone_norule: [(v) => !!v || "Please Fill Phone No !"],
        emailrule: [(v) => !!v || "Please Fill E-mail!"],
        passwordrule: [
          (value) => !!value || "Please Fill Password !",
          (value) => (value && value.length >= 6) || "Password at least 6 characters !",
      ],
      confirm_passwordRules: [
        function (value) {
          return !!value || "Need to fill Confirm Password!";
        },
        function (value) {
          return value === this.model.password || "Password and Confirm Password must be the same!";
        },
      ],
    }),
    watch: {
       
    },
    methods: {
        SaveOrUpdate() {
        var vm = this;
        vm.ValidateModel();
        vm.model.company_id = 0;
        vm.model.department_id = 0;
          Service.RegisterSaveOrUpdate(vm.model).then((result) => {
            if (result.data) {
              var message = result.data.messages[0];
              if (result.data.success) {
                  vm.$root.AlertDialog.Show({ message: message, color: 'success'});
                  vm.$emit("AfterSaved");
                  vm.ClearData();
              } else {
                  vm.$root.AlertDialog.Show({ message: message , color: 'error'});
              }
            }
          });
      },
      ValidateModel() {
        if(this.model.phone_no != "" && this.model.phone_no != null){
            this.isPhoneValid =true;
        }
        else{
            this.isPhoneValid  =false;
        }
        
            return this.$refs.form.validate();
        },
    },
    created() {
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
.error-message {
  color: rgb(176,0,32);
  font-size: 0.9rem;
  margin-left: 19px
}
.v-text-field {
    color: black;
    /*font-family: 'Courier New', Courier, monospace;*/
    font-family: 'Times New Roman', Times, serif;
    font-variant: inherit;
    font-style: normal;

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
</style>
