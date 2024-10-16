<template>
    <v-dialog
      v-model="dialog"
      width="40%"
    >
    <v-card>
        <v-toolbar dark color="secondary" density="compact">
          <v-toolbar-title dark>Password Change</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click.stop="ClearData()" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-form
            autocomplete="off"
            @submit.prevent="SaveOrUpdate"
            ref="form"
            v-model="valid"
            lazy-validation>
            <v-container>
                <v-row dense>
                    <v-col cols="12" md="12">
                        <label class="lab">အမည်</label>
                        <v-text-field disabled v-model="model.username" variant="outlined" density="compact"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <label class="lab">Password<span class="text-red">*</span></label>
                        <v-text-field v-model="model.password" variant="outlined" density="compact" required :rules="passwordRules" :type="showPassText ? 'text' : 'password'" :append-icon="showPassText ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassText = !showPassText" autocomplete="off"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-card-actions class="text-right">
                            <v-spacer></v-spacer>
                            <v-btn size="small" type="submit" variant="outlined" color="primary">Save</v-btn>
                            <v-btn size="small" color="warning" @click.stop="ClearData()" variant="outlined">Cancel</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>

        </v-form>
    </v-card>
    </v-dialog>
</template>
<script>
import Model from '@/models/user.js';
import Service from '@/services/user.service';
export default{

    data:() => ({
        dialog : false,
        valid: false,
        model: new Model(),

        showPassText: false,
        
        passwordRules: [
                (value) => !!value || "Password ထည့်ရန်လိုအပ်ပါသည်။",
                (value) => (value && value.length >= 6) || "Password အနည်းဆုံး၆လုံးဖြစ်ရပါမည်။",
            ],
    }),
    
    created(){

    },

    methods:{
        Show(model) {

            if(model) {
                this.model = model;
            }
            this.model.password = '';
            if(this.$refs.form) {
                this.$refs.form.resetValidation()
            }

            
            this.dialog = true;
        },

        ValidateModel() {
            this.valid =  this.$refs.form.validate();
        },

        SaveOrUpdate() {
            var vm = this;
            vm.ValidateModel();

            if(vm.valid) {
                Service.ResetPassword(vm.model).then((result) => {
                    if(result.data){
                        var message = result.data.messages[0];
                        if (result.data.success) {
                            vm.$root.AlertDialog.Show({ message: message, color: 'success'});
                            vm.ClearData();

                        } else {
                            vm.$root.AlertDialog.Show({ message: message , color: 'error'});
                        }
                    }
                });
            }
           
        },

        ClearData() {
            this.model = new Model();
            if(this.$refs.form) {
                this.$refs.form.reset();
            }
            this.dialog = false;
        }
    }
}

</script>
