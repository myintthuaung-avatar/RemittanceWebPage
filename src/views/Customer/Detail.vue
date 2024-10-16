<style scoped>
th{
    text-align: left;
    padding: 10px;
    font-size: 15px;
}
td{
    font-size: 15px;
}
td span{
    padding: 5px;
    font-weight:200;
}
hr{
  border: 1px solid rgb(194, 194, 194);
}
hr.pc{
  border: 1px dashed rgb(192, 192, 192);
}
@media print {
.menus{
  display: none;
}
  .printable-content {
    display: block !important; /* Make sure the printable content is visible */
  }
}
</style>
<template>
   <div>
<v-dialog persistent v-model="dialog"  fullscreen>
  <v-card style="background-color: lightgray;">
    <v-toolbar dark color="secondary" style="height: 50px;">
      <v-toolbar-title dark style="color: #fff; text-align: center; text-decoration: none;">Customer Information</v-toolbar-title>                     
      <v-spacer></v-spacer>

      <v-btn @click.stop="ClearData()" icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
      <v-form>
        <v-col cols="12" md="12">
          <v-row dense>
            <v-col cols="12" md="2">
              <v-img
                      height="100"
                      width="100"
                      contain
                      class="grey lighten-5"
                      :src="`data:image/png;base64,${model.qrcode}`">
                      </v-img> 
            </v-col>
            <v-col cols="12" md="3">
              <v-card>
              <v-simple-table dense class="">
                <tbody>
                  <tr>
                    <th style="color:blue">Opreator Staff</th>
                    <td><span>-</span> {{model.created_by}}</td>
                  </tr>
                  <tr>
                    <th style="color:blue">Created Date</th>
                    <td><span>-</span>{{model.created_date }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
            </v-col>
            <v-col cols="12" md="4" >
              <v-card>
              <v-simple-table dense class="" v-show="model.opreator_check == true">
                <tbody>
                  <tr v-show="model.opreator_check == true">
                    <th style="color:blue">Opreator Approved By</th>
                    <td><span>-</span> {{model.opreator_approver}}</td>
                  </tr>
                  <tr v-show="model.opreator_check == true">
                    <th style="color:blue">Checker Approved Date</th>
                    <td><span>-</span>{{model.opreator_approve_date }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
            </v-col>
            <v-col cols="12" md="3" v-show="model.superadmin_approved_check == true">
              <v-card>
              <v-simple-table dense class="" >
                <tbody>
                  <tr v-show="model.superadmin_approved_check == true">
                    <th style="color:blue">SuperAdmin Approved By</th>
                    <td><span>-</span> {{model.superadmin_approve}}</td>
                  </tr>
                  <tr v-show="model.superadmin_approved_check == true" >
                    <th style="color:blue">SuperAdmin Approved Date</th>
                    <td><span>-</span>{{model.superadmin_approve_date }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
            </v-col>
            <v-col cols="12" md="6" class="">
              <v-card height="400">
                
              <v-simple-table dense >
                <H4 style="color:blue" class="ml-7 mt-4">Remittance Information</H4>
                <tbody class="ml-7">
                  <tr>
                    <th>Remittance Date</th>
                    <td><span>-</span> {{model.remittance_date}}</td>
                  </tr>
                  <tr>
                    <th>Sender Customer Type</th>
                    <td><span>-</span>{{model.sender_customer_type_name }}</td>
                  </tr>
                  <tr>
                    <th>Purpose of Transaction</th>
                    <td><span>-</span>{{model.purpose_transaction_name }}</td>
                  </tr>
                  <tr>
                    <th>Remittance No</th>
                    <td><span>-</span>{{model.remittance_no }}</td>
                  </tr>
                  <tr > 
                    <th>Receiver Customer Type</th>
                    <td><span>-</span>{{model.receiver_customer_type_name }} </td>
                  </tr>
                  <tr > 
                    <th>Network Code</th>
                    <td><span>-</span>{{model.network_code_name }} </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
            </v-col>
            <v-col cols="12" md="6" class="">
              <v-card  height="400">
                <H4 style="color:blue" class="ml-7 mt-4">Exchange Rate</H4>
              <v-simple-table dense>
                <tbody>
                    <tr > 
                    <th>Deposit Amount</th>
                    <td><span>-</span>{{model.deposit_amount }} </td>
                  </tr>
                  <tr > 
                    <th>Deposit Currency</th>
                    <td><span>-</span>{{model.deposit_currency_name }} </td>
                  </tr>
                    <tr > 
                    <th>Deposit Exchange Rate</th>
                    <td><span>-</span>{{model.deposit_exchange_rate }} </td>
                  </tr>
                  <tr  > 
                    <th>Withdraw Amount</th>
                    <td><span>-</span>{{model.withdraw_amount }} </td>
                  </tr>
                  <tr  > 
                    <th>Withdraw Currency</th>
                    <td><span>-</span>{{model.withdraw_currency_name }} </td>
                  </tr>
                  <tr  > 
                    <th>Rate</th>
                    <td><span>-</span>{{model.rate_name }} </td>
                  </tr>
                  <tr  > 
                    <th>Withdraw Exchange Rate</th>
                    <td><span>-</span>{{model.withdraw_exchange_rate }} </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
            </v-col> 
            <v-divider></v-divider>
            <v-col cols="12" md="6" >
              <v-card height="900">
                <H4 style="color:blue"  class="ml-7 mt-4">Sender Information</H4>
              <v-simple-table dense class="">
                <tbody>
                  <tr>
                    <th>NRC/Passport</th>
                    <td>
                      <v-img
                      height="150"
                      width="150"
                      contain
                      class="grey lighten-5"
                      :src="`data:image/png;base64,${model.nrc_passport_image}`">
                      </v-img>      
                    </td>
                    <th>Selfie Photo</th>
                    <td>
                      <v-img
                      height="150"
                      width="150"
                      contain
                      class="grey lighten-5"
                      :src="`data:image/png;base64,${model.selfie_image}`">
                      </v-img>      
                    </td>
                  </tr>
                    <tr > 
                    <th>First Name</th>
                    <td><span>-</span>{{model.first_name }} </td>
                  </tr>
                  <tr > 
                    <th>Last Name   </th>
                    <td><span>-</span>{{model.last_name }} </td>
                  </tr>
                  <tr > 
                    <th>NRC/Passport</th>
                    <td><span>-</span>{{model.nrc_passport }} </td>
                  </tr>
                  <tr > 
                  <th>Phone No</th>
                  <td><span>-</span>{{model.phone_no }} </td>
                </tr>
                <tr > 
                  <th>Email</th>
                  <td><span>-</span>{{model.email }} </td>
                </tr>
                  <tr > 
                    <th>Date of Birth</th>
                    <td><span>-</span>{{model.date_birth }} </td>
                  </tr>
                  <tr > 
                    <th>Issuse Date</th>
                    <td><span>-</span>{{model.issuse_date }} </td>
                  </tr>
                  <tr > 
                    <th>Expire Date</th>
                    <td><span>-</span>{{model.expiry_date }} </td>
                  </tr>
                    <tr > 
                    <th>Address on Documents</th>
                    <td><span>-</span>{{model.address_document }} </td>
                  </tr>
                  <tr > 
                    <th>Business Type</th>
                    <td><span>-</span>{{model.business_type_name }} </td>
                  </tr>
                  <tr > 
                    <th>Business Name</th>
                    <td><span>-</span>{{model.business_name }} </td>
                  </tr>
                  <tr > 
                    <th>Occupation</th>
                    <td><span>-</span>{{model.occupations }} </td>
                  </tr>
                  <tr > 
                    <th>Address</th>
                    <td><span>-</span>{{model.address }} </td>
                  </tr>
                    <tr > 
                    <th>Address (Work)</th>
                    <td><span>-</span>{{model.address_work }} </td>
                  </tr>
                  <tr > 
                    <th>Country</th>
                    <td><span>-</span>{{model.sender_country_name }} </td>
                  </tr>
                  <tr > 
                    <th>State Division</th>
                    <td><span>-</span>{{model.state_division_name }} </td>
                  </tr>
                    <tr > 
                    <th>City</th>
                    <td><span>-</span>{{model.city_name }} </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
            </v-col> 
            <v-col cols="12" md="6">
              <v-card height="900">
                <H4 style="color:blue" class="ml-7 mt-4">Receiver information</H4>
              <v-simple-table dense class="">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td><span>-</span> {{model.receiver_name }}</td>
                  </tr>
                  <tr>
                    <th>NRC/Passport No</th>
                    <td><span>-</span>{{model.receiver_nrc_passportno }}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td><span>-</span>{{model.receiver_phoneno }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td><span>-</span>{{model.receiver_email }}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td><span>-</span>{{model.receiver_address }}</td>
                  </tr>
                  <tr > 
                    <th>Country</th>
                    <td><span>-</span>{{model.receiver_country_name }} </td>
                  </tr>
                  <tr > 
                    <th>State Division</th>
                    <td><span>-</span>{{model.receiver_state_name }} </td>
                  </tr>
                  <tr > 
                    <th>City</th>
                    <td><span>-</span>{{model.receiver_city_name }} </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
            </v-col> 
            <v-divider></v-divider>
            <v-col cols="12" md="6">
              <v-card height="700">
                <H4 style="color:blue"  class="ml-7 mt-4">Deposit</H4>
              <v-simple-table dense class="">
                <tbody>
                    <tr > 
                    <th>Deposit Payment Type</th>
                    <td><span>-</span>{{model.deposit_payment_type_name }} </td>
                  </tr>
                  <tr > 
                    <th>Deposit Payment</th>
                    <td><span>-</span>{{model.deposit_payment_name }} </td>
                  </tr>
                  <tr > 
                    <th>Deposit Payment Branch</th>
                    <td><span>-</span>{{model.deposit_payment_branch_name }} </td>
                  </tr>
                    <tr > 
                    <th>Deposit Swift Code</th>
                    <td><span>-</span>{{model.deposit_swift_code }} </td>
                  </tr>
                  <tr > 
                    <th>Deposit Account Number</th>
                    <td><span>-</span>{{model.deposit_account_number }} </td>
                  </tr>
                  <tr > 
                    <th>Deposit Account Type</th>
                    <td><span>-</span>{{model.deposit_account_type_name }} </td>
                  </tr>
                  <tr > 
                    <th>Deposit Reference No</th>
                    <td><span>-</span>{{model.deposit_reference_no }} </td>
                  </tr>
                    <!-- <tr > 
                    <th>Deposit Reference</th>
                    <td><span>-</span>{{model.deposit_reference }} </td>
                  </tr>-->
                  <tr >  
                    <th>Deposit Company</th>
                    <td><span>-</span>{{model.deposit_company_name }} </td>
                  </tr>
                  <tr > 
                    <th>Deposit Account</th>
                    <td><span>-</span>{{model.deposit_account_name }} </td>
                  </tr>
                  <tr v-show="model.deposit_deno_id !=null">
                    <th>1</th>
                    <td><span>-</span>{{model.deposit_1 }}</td>
                  </tr>
                  <tr  v-show="model.deposit_deno_id !=null">
                    <th>2</th>
                    <td><span>-</span>{{model.deposit_2 }}</td>
                  </tr>
                  <tr v-show="model.deposit_deno_id !=null">
                    <th>5</th>
                    <td><span>-</span>{{model.deposit_5 }}</td>
                  </tr>
                  <tr v-show="model.deposit_deno_id !=null">
                    <th>10</th>
                    <td><span>-</span>{{model.deposit_10 }}</td>
                  </tr>
                  <tr  v-show="model.deposit_deno_id !=null">
                    <th>20</th>
                    <td><span>-</span>{{model.deposit_20 }}</td>
                  </tr>
                  <tr  v-show="model.deposit_deno_id !=null">
                    <th>50</th>
                    <td><span>-</span>{{model.deposit_50 }}</td>
                  </tr>
                  <tr  v-show="model.deposit_deno_id !=null">
                    <th>100</th>
                    <td><span>-</span>{{model.deposit_100 }}</td>
                  </tr>
                  <tr  v-show="model.deposit_deno_id !=null">
                    <th>200</th>
                    <td><span>-</span>{{model.deposit_200 }}</td>
                  </tr>
                  <tr  v-show="model.deposit_deno_id !=null"> 
                    <th>500</th>
                    <td><span>-</span>{{model.deposit_500 }} </td>
                  </tr>
                  <tr  v-show="model.deposit_deno_id !=null"> 
                    <th>1000</th>
                    <td><span>-</span>{{model.deposit_1000 }} </td>
                  </tr>
                  <tr  v-show="model.deposit_deno_id !=null"> 
                    <th>5000</th>
                    <td><span>-</span>{{model.deposit_5000 }} </td>
                  </tr>
                  <tr  v-show="model.deposit_deno_id !=null"> 
                    <th>10000</th>
                    <td><span>-</span>{{model.deposit_10000 }} </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
            </v-col> 
            <v-col cols="12" md="6">
            <v-card height="700">
                <H4 style="color:blue" class="ml-7 mt-4">Withdraw</H4>
              <v-simple-table dense class="">
                <tbody>
                  <tr>
                    <th>Withdraw Reference</th>
                    <td>
                      <v-img
                      height="150"
                      width="150"
                      contain
                      class="grey lighten-5"
                      :src="`data:image/png;base64,${model.withdraw_reference_image}`">
                      </v-img>  
                    </td>
                  </tr>
                  <tr>
                    <th>Withdraw Payment Type</th>
                    <td><span>-</span> {{model.withdraw_payment_type_name }}</td>
                  </tr>
                  <tr>
                    <th>Withdraw Payment</th>
                    <td><span>-</span>{{model.withdraw_payment_name }}</td>
                  </tr>
                  <tr>
                    <th>Withdraw Payment Branch</th>
                    <td><span>-</span>{{model.withdraw_payment_branch_name }}</td>
                  </tr>
                  <tr>
                    <th>Withdraw Swift Code</th>
                    <td><span>-</span>{{model.withdraw_swift_code }}</td>
                  </tr>
                  <tr>
                    <th>Withdraw Account Number</th>
                    <td><span>-</span>{{model.withdraw_account_number }}</td>
                  </tr>
                  <tr > 
                    <th>Withdraw Account Type</th>
                    <td><span>-</span>{{model.withdraw_account_type_name }} </td>
                  </tr>
                  <tr > 
                    <th>Withdraw Reference No</th>
                    <td><span>-</span>{{model.withdraw_reference_no }} </td>
                  </tr>
                  <tr > 
                    <th>Withdraw Company</th>
                    <td><span>-</span>{{model.withdraw_company_name }} </td>
                  </tr>
                  <tr > 
                    <th>Withdraw Account</th>
                    <td><span>-</span>{{model.withdraw_account_name }} </td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null">
                    <th>1</th>
                    <td><span>-</span>{{model.withdraw_1 }}</td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null">
                    <th>2</th>
                    <td><span>-</span>{{model.withdraw_2 }}</td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null">
                    <th>5</th>
                    <td><span>-</span>{{model.withdraw_5 }}</td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null">
                    <th>10</th>
                    <td><span>-</span>{{model.withdraw_10 }}</td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null">
                    <th>20</th>
                    <td><span>-</span>{{model.withdraw_20 }}</td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null">
                    <th>50</th>
                    <td><span>-</span>{{model.withdraw_50 }}</td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null">
                    <th>100</th>
                    <td><span>-</span>{{model.withdraw_100 }}</td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null">
                    <th>200</th>
                    <td><span>-</span>{{model.withdraw_200 }}</td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null"> 
                    <th>500</th>
                    <td><span>-</span>{{model.withdraw_500 }} </td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null"> 
                    <th>1000</th>
                    <td><span>-</span>{{model.withdraw_1000 }} </td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null"> 
                    <th>5000</th>
                    <td><span>-</span>{{model.withdraw_5000 }} </td>
                  </tr>
                  <tr v-show="model.withdraw_deno_id !=null"> 
                    <th>10000</th>
                    <td><span>-</span>{{model.withdraw_10000 }} </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
            </v-col> 
            <v-col cols="12" md="6">
              <v-card-actions class="text-right">
             <v-spacer></v-spacer>
             <v-dialog max-width="300" v-if="show_opreationbutton">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps" variant="outlined"
                  color="blue" style="background-color: white;"
                  text="Approve Opreation"
                ></v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Approver" style="color: darkblue">
                  <v-card-text style="color:#FF9800">
                    Are You Ready to Approve?
                  </v-card-text>
                  <v-col cols="12" md="12"  class="text-center">
                  <!-- <v-card-actions> -->
                    <v-btn text="OK" @click="Approve(model)" size="small" variant="outlined" color="primary"></v-btn>
                  <!-- </v-card-actions> -->
                </v-col>
                </v-card>
              </template>
            </v-dialog>
            <v-dialog max-width="300" v-if="show_superadminbutton" v-model="dialogapprover">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn  v-show="model.superadmin_approved_check == false"
                  v-bind="activatorProps" variant="outlined"
                  color="blue" style="background-color: white;"
                  text="Approve Finical"
                ></v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Finical Approver" style="color: darkblue">
                  <v-card-text style="color:#FF9800">
                    Are You Ready to Approve?
                  </v-card-text>
                  <v-col cols="12" md="12"  class="text-center">
                  <!-- <v-card-actions> -->
                    <v-btn text="OK" @click="SuperAdminApprove(model)" size="small" variant="outlined" color="primary"></v-btn>
                  <!-- </v-card-actions> -->
                </v-col>
                </v-card>
              </template>
            </v-dialog>
            </v-card-actions> 
            </v-col>
          </v-row>
           
        </v-col>
      </v-form>
  </v-card>
  </v-dialog>
</div>
</template>
<script>
import Model from "@/models/customerinformationdetail.js";
import Service from "@/services/customerinformation.service.js";
export default {

  data () {
    return {
  model: new Model(),
  dialog:false,
  dialogapprover:false,
  show_opreationbutton:true,
  show_superadminbutton:true,
  opreator_check:true,
  checker_check:true,
  approver_check:true,
  text:"",
  isPrintableContentVisible: true,
    }
  },
created(){
this.$emit("eventname", true);
},
computed: {
    getUserInfo() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    Show(id) {
        var vm= this;
        Service.DetailById(id).then(
          (response) => {
            window.console.log(response.data);
            vm.model = response.data;
            if(this.getUserInfo.role === "OPREATOR"){
              this.show_opreationbutton = false;
              this.show_superadminbutton = false;
            }
            else if(response.data.approver_check === true && this.getUserInfo.role === "CHECKER" )
            {
              this.show_opreationbutton = false;
              this.show_superadminbutton = false;
            }
            else if(response.data.opreator_check === false && this.getUserInfo.role === "CHECKER" ){
              this.show_opreationbutton = true;
              this.show_superadminbutton = false;
              
            }
            // else if(response.data.approver_check === false && this.getUserInfo.role === "ADMINISTRATOR")
            // {
            //   this.show_opreationbutton = false;
            //   this.show_superadminbutton = true;
            // }
            else if(response.data.approver_check === false && response.data.opreator_check ===true && this.getUserInfo.role === "ADMINISTRATOR")
            {
              this.show_opreationbutton = false;
              this.show_superadminbutton = false;
            }
            else if(response.data.approver_check === true && this.getUserInfo.role === "ADMINISTRATOR"){
              this.show_opreationbutton = false;
              this.show_superadminbutton = false;
            }
            else if(response.data.opreator_check === false && this.getUserInfo.role === "ADMINISTRATOR")
            {
              this.show_opreationbutton = true;
              this.show_superadminbutton = false;
            }
            else if(response.data.opreator_check === true && this.getUserInfo.role === "ADMINISTRATOR")
            {
              this.show_opreationbutton = false;
              this.show_superadminbutton = false;
            }
            else if(response.data.opreator_check === true && this.getUserInfo.role === "CHECKER"){
              this.show_opreationbutton = false;
              this.show_superadminbutton = false;
            }
          });
    this.dialog = true;
    },
    SuperAdminShow(id){
      var vm= this;
        Service.SuperAdminDetailById(id).then(
          (response) => {
            window.console.log(response.data);
            vm.model = response.data;
            if(response.data.superadmin_approved_check  === true){
              this.show_opreationbutton = false;
              this.show_superadminbutton = false;
            }
            else{
              this.show_superadminbutton = true;
              this.show_opreationbutton = false;
            }
          });
    this.dialog = true;
    },
    SuperAdminApprove(item) {
      var vm = this;
        Service.SuperAdminApprove(item.id).then((result) => {
                if (result.data) {
                  window.console.log(result.data)
                  var message = result.data.messages[0];
                  if (result.data.success == true) {
                      vm.$root.AlertDialog.Show({ message: message, color: 'success'});
                      vm.ClearData();
                      vm.$emit("AfterSaved");
                      this.dialogapprover = false;
                  } else {
                      vm.$root.AlertDialog.Show({ message: message , color: 'error'});
                  }
                }
              });
            },
      
    Approve(item){
        Service.Approve(item.id).then((result) => {
                if (result.data) {
                  var vm= this;
                  var message = result.data.messages[0];
                  window.console.log(result.data)
                  if (result.data.success ==true) {
                      vm.$root.AlertDialog.Show({ message: message, color: 'success'});
                      vm.ClearData();
                      vm.$emit("AfterSaved");
                      this.dialog = false;
                  } else {
                      vm.$root.AlertDialog.Show({ message: message , color: 'error'});
                  }
                }
              });
            },
      
  
    ClearData() {
            this.dialog = false;
            this.model = [];
        },
}
}
</script>
