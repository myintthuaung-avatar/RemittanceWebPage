<template>
    <div>
        <v-snackbar
             top right location="top right"
            :color="color"
            v-model="snackbar"
            :right="x"
            :timeout="timeout"
            :top="y">
            {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
                <v-icon>mdi-close-circle</v-icon>
              </v-btn>
            </template>
            </v-snackbar>
      <v-col cols="12" md="12" class="mt-12">
        <v-row dense="compact" class="mt-12">
            
        
      <v-col cols="12" md="4" ></v-col>
      <v-col cols="12" md="4">
        <v-row compact="density">
          <v-col cols="12" md="12">
            <v-card style="border: 0px solid #ddd;"  max-width="900" elevation="16">
                <v-toolbar color="#0a1775" dark flat height="90">
                      <v-avatar color="white" size="50" width="60px" class="ml-4">
                      <img src="../../src/assets/mbf_logo.png" width="45" />
                    </v-avatar>
                    <v-toolbar-title style="font-size: 18px; color: white;" class="mr-3">
                      <span>Remittance System</span>
                    </v-toolbar-title>
              </v-toolbar>
              <v-container fluid>
                  
                    <v-form @submit.prevent="HandleLogin" class="mt-5">
                        <v-row dense="desity">
                          <v-col cols="12" md="9">
                            <v-text-field v-model="email"
                            label="Email"
                            variant="outlined"  density="compact"
                          ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="3" style="margin-bottom: 25px;" @click="sendEmail(email)"><v-btn  color="#0a1775">Send</v-btn></v-col>
                          <v-col cols="12" md="12" class="mt-n7"><v-otp-input v-model="user.otp" height="50"></v-otp-input></v-col>
                          <v-col cols="12" md="12">
                            <v-text-field 
                              v-model="user.name"
                              name="login"
                              prepend-inner-icon="mdi-account-circle"
                              variant="outlined" density="compact"
                              label="Username"
                              dense required
                              @keydown.enter.prevent="HandleLogin" :rules="nameRules">
                            </v-text-field>
                          </v-col>
                          <v-col cols="12" md="12">
                            <v-text-field
                              v-model="user.password"
                              prepend-inner-icon="mdi-key"
                              variant="outlined" density="compact"
                              label="Password" required
                              :append-inner-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append-inner="() => (showpass = !showpass)"
                              :type="showpass ? 'password' : 'text'"
                              dense @keydown.enter.prevent="HandleLogin"  :rules="pwdRules">
                            </v-text-field>
                          </v-col>
                          <v-spacer>
                            <v-col cols="12" md="12"  class="mx-auto">
                            <v-btn outlined type="submit" :disabled="loginbtn" size="large" :loading="loading" color="#0a1775" block dark ><span style="color: #FFF;">Login</span></v-btn>
                          </v-col>
                        </v-spacer>
                          </v-row>
                    </v-form>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
  </v-col>
  <v-col cols="12" md="4"></v-col>
  </v-row>
  </v-col>
  </div>
    </template>
    
    <script>
    import User from "../models/user";
    import UserService from "../services/user.service";
    export default {
    
      data: () => ({
        loading: false,
        valid: false,
        width:120,
        email:"",
        showpass: true,
        nameRules: [ v => !!v || '' ],
        pwdRules: [ v => !!v || '' ],
        color: "",
        snackbar: false,
        text: "",
        timeout: "5000",
        x: "right",
        y: "top",
        user: new User(),
        login_message:'',
        loginbtn:true,
      }),
      created() {
    
        
      },
      methods: {
        HandleLogin() {
          var vm = this;
    
          vm.valid = true;//this.$refs.form.validate();
          
        if(vm.valid) {
            vm.loading = true;
            vm.login_message="";
            vm.$store.dispatch('app/ResetStatesBeforeLogin', {});
            
            UserService.login(vm.user).then(
              (result) => {
                vm.loading = false;
                if (result.token) {
                  var userInfo = {
                    id: result.id,
                    name: result.name,
                    role: result.role,
                    dept_id: result.department,
                    is_admin: true,
                  };
                 window.console.log(result)
                  vm.$store.dispatch('app/SetUserInfo', userInfo);
                  if(result.role == "USER"){
                    alert("ff")
                    vm.$router.push({ name: "Dashboard1" });
                  }
                  else{
                    vm.$router.push({ name: "Dashboard" });
                  }
                  } else {
                    vm.$router.push({ name: "Login" });
                    vm.login_message = result.msg;
                  }
              },
            (error) => {
              vm.loading = false;
              vm.message =
                (error.response && error.response.datat) || error.message || error.toString();
            }
            );
          }
        },
        sendEmail(email){
            var vm = this;
            UserService.SendEmail(email).then((result) => {
                window.console.log(result.data)
              var message = result.data.message;
              if (result.data.active === true) {
                vm.color = "success";
                vm.snackbar = true;
                vm.text = message;
                  vm.$emit("AfterSaved");
                  //vm.ClearData();
              } else {
                vm.color = "red";
                vm.snackbar = true;
                vm.text = message;
              }
          });
        }
      },
      watch:{
        "user.otp"(val){
          if(val != null && val.length == 6){
            this.loginbtn = false;
          }
          else{
            this.loginbtn = true;
          }
        }
      }
    };
    </script>
    