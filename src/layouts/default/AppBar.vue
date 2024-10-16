<template>

  <v-app-bar color="rgb(3 34 78)" elevation="1"  dark app clipped-left>
    <v-avatar color="white" size="40" class="ml-1" width="80px">
      <img src="../../../src/assets/mbf_logo.png" width="55" />
    </v-avatar>

    <h5 style=" letter-spacing: 0;padding:5px;color:white;font-size: 12px;font-weight:bold;">
    Remittance System<br><span style="font-size: 18px"></span>
    </h5> 
    <v-spacer></v-spacer>
    
    <v-menu>
      
      <template v-slot:activator="{ props }">
        <v-btn class="ml-2"
          icon style="color:white;"
          v-bind="props">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      
      <v-list class="mx-auto text-center">
        <v-list-item >
          <v-avatar color="info">
            <v-icon icon="mdi-account-circle"></v-icon>
          </v-avatar>
        </v-list-item>
        <v-list-item>
          <h3 style="font-size:17px;">{{ userdata.name }}</h3>
        </v-list-item>
        <v-list-item @click="EditItem()">
          <template v-slot:prepend>
            <v-icon color="success">mdi-grease-pencil</v-icon>
          </template>
         <v-list-item-title>Edit Peson</v-list-item-title>
        </v-list-item> 
        <v-list-item @click="ResetPassword()">
          <template v-slot:prepend>
            <v-icon color="warning">mdi-key</v-icon>
          </template>
         <v-list-item-title>Change Password</v-list-item-title>
        </v-list-item> 
        <v-list-item @click="Logout">
          <template v-slot:prepend>
            <v-icon color="#01099e">mdi-logout</v-icon>
          </template>
          <v-list-item-title>Log out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <PasswordReset ref="PasswordResetModal"/>
</v-app-bar>


 

</template>

<script>
import PasswordReset from "@/components/base/PasswordReset.vue";
import Service from "@/services/user.service";
export default {
components: {
 PasswordReset
},

data() {
  return {
   userdata: null,
};
},

computed: {
 
  getNoti() {
    return this.$store.state.app.notifications;
  },

},




created() {
  this.userdata = JSON.parse(localStorage.getItem("user"));
  window.console.log(this.userdata);
},

mounted() {

},

methods: {
  Logout() {
   localStorage.removeItem("user");
   this.$http.defaults.headers.common["Authorization"] = '';
   this.$http.defaults.headers["Authorization"] = '';
   this.$router.push({
      name: "Login",
    });
  },

  
  ResetPassword(){
    this.$refs.PasswordResetModal.Show({ id: this.userdata.id, username:  this.userdata.username });
  },
  EditItem(){
          var vm = this;
          Service.GetById(this.userdata.id).then(
              (response)=> {
                window.console.log(response.data)
              vm.$refs.EntryModal.model = response.data;
              vm.$refs.EntryModal.disabled = true;
            
              vm.$refs.EntryModal.Show();
          });
        },
  

},


};
</script>
