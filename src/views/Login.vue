<template>
  <div>
    <v-col cols="12" md="12" class="mt-12">
      <v-row dense="compact" class="mt-12">

      
    <v-col cols="12" md="4" ></v-col>
    <v-col cols="12" md="4">
      <v-row compact="density">
        <v-col cols="12" md="12">
          <v-card style="border: 0px solid #ddd;"  max-width="400">
              <v-toolbar color="rgb(25 63 115)" dark flat height="90">
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
                        <v-col cols="12" md="12">
                          <v-text-field 
                            v-model="user.name"
                            name="login"
                            prepend-inner-icon="mdi-account-circle"
                            variant="outlined" density="compact"
                            placeholder="Username"
                            dense required
                            @keydown.enter.prevent="HandleLogin" :rules="nameRules">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-text-field
                            v-model="user.password"
                            prepend-inner-icon="mdi-key"
                            variant="outlined" density="compact"
                            placeholder="Password" required
                            :append-inner-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append-inner="() => (showpass = !showpass)"
                            :type="showpass ? 'password' : 'text'"
                            dense @keydown.enter.prevent="HandleLogin"  :rules="pwdRules">
                          </v-text-field>
                        </v-col>
                        <v-spacer>
                          <v-col cols="12" md="12"  class="mx-auto">
                          <v-btn type="submit" size="large" :loading="loading" color="rgb(25 63 115)" block dark><span style="color: white;">Login</span></v-btn>
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
      showpass: true,
      nameRules: [ v => !!v || '' ],
      pwdRules: [ v => !!v || '' ],
      color: "",
      snackbar: false,
      message: "",
      timeout: "5000",
      x: "right",
      y: "top",
      user: new User(),
      login_message:''
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
               
                vm.$store.dispatch('app/SetUserInfo', userInfo);
              
                vm.$router.push({ name: "Dashboard" });
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
    },
  };
  </script>
  