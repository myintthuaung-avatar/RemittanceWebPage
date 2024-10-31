<template>
    <!-- <div> -->
        <v-col cols="12" md="12" sm="12">
            <v-card>
            <v-col cols="12" md="12">
                <v-table style="table-layout: fixed; width: 100%;">
        <thead>
            <v-btn size="x-small" icon="mdi-plus" @click="NewAdd" color="success" solo class="ml-5"></v-btn>
            <tr>
            <th>NRC/Passport</th>
            <th>NRC/Passport with Selfie</th>
            <th class="text-left">
                ______Remittance_Date_______
            </th>
            <th class="text-left" style="width: 350px;">
                ______Sender_Customer_Type_______
            </th>
            <th class="text-left" style="width: 750px !important;">
                _____Purpose_of_Transaction_______
            </th>
            <th style="width: 75px !important;">
            ______Remittance_No_____
            </th>
            <th class="text-left">
            ________Receiver_Customer_Type______
            </th>
            <th class="text-left">
            Network_Code________
            </th>
            <th class="text-left">
            First_Name________
            </th>
            <th class="text-left">
            Last_Name________
            </th>
            <th class="text-left">
            PhoneNo________
            </th>
            <th class="text-left">
            Email________
            </th>
            <th class="text-left">
            Identity Type________
            </th>
            <th class="text-left">
            Passport________
            </th>
            <th class="text-left">
            Address_on_Documents________
            </th>
            <th class="text-left">
            Address____________
            </th>
            <th class="text-left">
            City____________
            </th>
            <th class="text-left">
            Address(Work)____________
            </th>
            <th class="text-left">
            City(Work)____________
            </th>
            <th class="text-left">
            Deposit Amount
            </th>
            <th class="text-left">
            WithdrawAmount____________
            </th>
            <th class="text-left">
            Deposit_Payment_Type____________
            </th>
            <th class="text-left">
            Deposit_Payment____________
            </th>
            <th class="text-left">
            Deposit_Reference_No____________
            </th>
            <th class="text-left">
            DepositCompany____________
            </th>
            <th class="text-left">
            DepositAccount____________
            </th>
            <th class="text-left">
            Withdraw_Payment_Type_______
            </th>
            <th class="text-left">
            Withdraw_Payment__________
            </th>
            <th class="text-left">
            Withdraw_Reference_No___________
            </th>
            <th class="text-left">
            Withdraw_Company__________
            </th>
            <th class="text-left">
                Withdraw_Account__________
            </th>
            </tr>
        </thead> 
        <tbody>
        <tr v-for="item in model" :key="item">
        <td>
        <picture-input ref="pictureInput" width="100" height="100"
            v-model="model.nrc_passport_photo"
            :prefill="model.nrc_passport_image" margin="14"
            accept="image/jpeg,image/png" size="200" button-class="btn"
            :custom-strings="{
                upload: '',
                drag: ' 😺Photo Upload '
            }" @change="onChange">
        </picture-input>
        </td>
        <td>
            <picture-input ref="pictureInput" width="100" height="100"
                v-model="model.nrc_passport_photo"
                :prefill="model.nrc_passport_image" margin="14"
                accept="image/jpeg,image/png" size="200" button-class="btn"
                :custom-strings="{
                    upload: '',
                    drag: ' 😺Photo Upload '
                }" @change="onChange">
            </picture-input>
            </td>
        <td>
            <v-text-field  v-model="item.name" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.aa" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.nrc" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.address" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.name" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.aa" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.nrc" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.address" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.name" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.aa" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.nrc" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.address" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.name" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.aa" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.nrc" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.address" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.name" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.aa" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.nrc" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.address" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.name" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.aa" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.nrc" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.address" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.name" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.aa" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.nrc" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.address" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        <td>
            <v-text-field  v-model="item.name" class="" variant="outlined" density="compact" dense></v-text-field>
        </td>
        
        <v-icon color="red">mdi-delete</v-icon>
        
                      </tr>
                    </tbody>
                  </v-table>
            <!-- <v-row dense>
                <v-col cols="12" md="2" sm="6">
                    <picture-input ref="pictureInput" width="150" height="150"
                    v-model="nrc_passport_photo"
                    :prefill="nrc_passport_image" margin="14"
                    accept="image/jpeg,image/png" size="300" button-class="btn"
                    :custom-strings="{
                        upload: '',
                        drag: ' 😺Photo Upload '
                    }" @change="onChange">
                </picture-input>
                <span v-show="nrc_passport_photorule"
                    style="letter-spacing: 0; margin-right: 80px; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                    class="text-red">Please Fill NRC/Passport Photo</span>
                </v-col>
                <v-col cols="12" md="2" sm="6">
                    <picture-input ref="pictureInput" width="150" height="150"
                    v-model="nrc_passport_photo"
                    :prefill="nrc_passport_image" margin="14"
                    accept="image/jpeg,image/png" size="300" button-class="btn"
                    :custom-strings="{
                        upload: '',
                        drag: ' 😺Photo Upload '
                    }" @change="onChange">
                </picture-input>
                <span v-show="nrc_passport_photorule"
                    style="letter-spacing: 0; margin-right: 80px; font-size: 12px; font-weight: inherit;  color:AE1B10;"
                    class="text-red">Please Fill NRC/Passport Photo</span>
                </v-col>
              
              <v-col cols="12" md="2" sm="6" class="mt-12">
                <v-text-field var variant="outlined" density="compact"
                  label="Sender Customer Type"></v-text-field>
              </v-col>
  
              <v-col cols="12" md="2" sm="6" class="mt-12">
                <v-text-field var variant="outlined" density="compact" label="Purpose of Transaction*" persistent-hint required></v-text-field>
              </v-col>
  
              <v-col cols="12" md="2" sm="6" class="mt-12">
                <v-text-field var variant="outlined" density="compact" label="Receiver Customer Type" required></v-text-field>
              </v-col>
  
              <v-col cols="12" md="2" sm="6" class="mt-12">
                <v-text-field var variant="outlined" density="compact" label="Network Code" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6" >
                <v-text-field var variant="outlined" density="compact" label="Email" required></v-text-field>
              </v-col>
  
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Sender" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Receiver" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Deposit Currency" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Deposit Amount" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Withdraw Currency" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Withdraw Amount" type="password" required></v-text-field>
              </v-col>

              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Deposit Payment Type" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Deposit Payment" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Deposit Reference No" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Deposit Company" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Deposit Account" type="password" required></v-text-field>
              </v-col>

              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Withdraw Payment Type" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Withdraw Payment" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Withdraw Reference No" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Withdraw Company" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field var variant="outlined" density="compact" label="Withdraw Account" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-card-actions class="text-right">
                    <v-spacer></v-spacer>
                    <v-btn type="submit" size="small" variant="outlined"
                        color="primary">Save</v-btn>
                    <v-btn dark size="small" variant="outlined" color="warning"
                        @click.stop="ClearCancel()">Cancel</v-btn>
                </v-card-actions>
              </v-col>
            </v-row> -->
        </v-col>
        </v-card>
        </v-col>
    <!-- </div> -->
</template>
<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import PictureInput from 'vue-picture-input';
import SelfiePictureInput from 'vue-picture-input';
import CustomerInformationModel from '@/models/customerinfo.js';
  export default {
      components: { VueDatePicker, PictureInput, SelfiePictureInput ,CustomerInformationModel},
    data: () => ({
      dialog: false,
      deleteshow:false,
      model : [new CustomerInformationModel()]
    }),
    methods:{
      Show() {
                  this.dialog = true;
              },
      ClearDialog(){
      this.dialog = false;
    },
    NewAdd(){
    let index = this.model.length + 1;
    this.model.push(
        {
          index: index,
        //   name: '',
        //   nrc: '',
        //   relationship:'',
        //   address: ''
        },
      );
      this.deleteshow = true;
   },
    },
    
  }
</script>