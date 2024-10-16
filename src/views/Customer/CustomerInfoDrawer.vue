<template>
  <div>
    <v-col cols="12" md="12" class="mt-n2">
  <v-card>
    <v-tabs align-tabs="center"  color="black" bg-color="grey"
      v-model="activetab">
      <router-link to="/opreator">
        <v-tooltip location="bottom">
          <template v-slot:activator="{ props }">
          <v-icon color="black" v-bind="props" class="mt-5 mr-8">mdi-arrow-left-bold-box</v-icon>
        </template>
        <span>Back To List</span>
      </v-tooltip>
        </router-link>
      <v-tab  value="one"  text="Customer Info"  class="text-none"  prepend-icon="mdi-account" :disabled="tabonedisabled"></v-tab>
      <v-tab  value="two" style="letter-spacing:0"  class="text-none" text="Sender Information" prepend-icon="mdi-currency-usd" :disabled="tabtwodisabled"></v-tab>
      <v-tab  value="three" style="letter-spacing:0"  class="text-none" text="Exchange Rate" prepend-icon="mdi-arrow-right-bold-hexagon-outline" :disabled="tabthreedisabled"></v-tab>
      <v-tab  value="four" style="letter-spacing:0"  class="text-none" text="Deposit" prepend-icon="mdi-crosshairs-gps" :disabled="tabfourdisabled"></v-tab>
      <v-tab  value="five" style="letter-spacing:0"  class="text-none" text="Receiver Information" prepend-icon="mdi-archive" :disabled="tabfivedisabled"></v-tab>
      <v-tab  value="six" style="letter-spacing:0"  class="text-none" text="WithDraw" prepend-icon="mdi-clipboard"  :disabled="tabsixdisabled"></v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="activetab">
        <v-window-item value="one">
          <CustomerInfoEntry @AfterSaved="AfterSavedCustomerInformation" ref="CustomerInfoEntryModal"/>
        </v-window-item>
        <v-window-item value="two">
          <SenderInformation @AfterSaved="AfterSavedSenderInformation" ref="SenderInformationModal" />
        </v-window-item>
        <v-window-item value="three">
          <ExchangeRate  @AfterSaved="AfterSavedExchangeRate" ref="ExchangeRateModal"/>
        </v-window-item>
        <v-window-item value="four">
          <Deposit @AfterSaved="AfterSavedDeposit" ref="DepositModal"/>
        </v-window-item>
        <v-window-item value="five">
          <ReceiverInformation @AfterSaved="AfterSavedReceiverInformation" ref="ReceiverInformationModal"/>
        </v-window-item>
        <v-window-item value="six">
          <WithDraw ref="WithDrawModal"/>
        </v-window-item>
      </v-window>
    </v-card-text>

  </v-card>
</v-col>
</div>
</template>
<script>
 import CustomerInfoEntry from './CustomerInfoEntry.vue';
 import ExchangeRate from './ExchangeRate.vue';
 import SenderInformation from './SenderInformation.vue';
 import Deposit from './Deposit.vue';
 import ReceiverInformation from './ReceiverInformation.vue';
 import WithDraw from './WithDraw.vue';
 import Service from '@/services/customerinformation.service.js';
  export default {
    components: {CustomerInfoEntry,ExchangeRate,SenderInformation,Deposit,ReceiverInformation,WithDraw},
    data: () => ({
      activetab:0,
      tabonedisabled:false,
      tabtwodisabled:false,
      tabthreedisabled:false,
      tabfourdisabled:false,
      tabfivedisabled:false,
      tabsixdisabled:false,
      id:0,
    }),
    created() {
      this.$emit("eventname", true);
       this.id= this.$route.query.id;
       if(this.id >0){
            Service.GetById(this.id).then(
                (response) => {
                    this.cmodel = response.data;
                    this.$router.push({
                        path:this.$route.path,
                        query:{
                            id:this.id,
                        },
                    });
               }
            )};
  },
  watch:{
    '$route.query.id'( newId) {
      this.id = newId;
      
    },
     'activetab'(value){
      if(value != ""){
        this.editTab(value);
      }
    }
    
  },
  
   methods:{
    editTab(tab){
      if(tab == "one"){
        this.activetab = 0;
        Service.GetById(this.id).then(
                 (response) => {
        this.$refs.CustomerInfoEntryModal.model= response.data;
      })
    }
      
      else if(tab=="two"){
        this.activetab = 1;
        Service.GetById(this.id).then(
                 (response) => {
                  window.console.log(response.data)
        this.$refs.SenderInformationModal.model= response.data;
        if(response.data.nrc_passport_image == null || response.data.nrc_passport_image =="")
        {
          this.$refs.SenderInformationModal.model.nrc_passport_image=null;
        }
        else{
          this.$refs.SenderInformationModal.model.nrc_passport_image = `data:image/png;base64,${response.data.nrc_passport_image}`;
        }
        if(response.data.selfie_image == null || response.data.selfie_image =="")
        {
          this.$refs.SenderInformationModal.model.selfie_image=null;
        }
        else{
          this.$refs.SenderInformationModal.model.selfie_image = `data:image/png;base64,${response.data.selfie_image}`;
        }
        
      })
    }
    else if(tab=="three"){
        this.activetab = 2;
        Service.GetById(this.id).then(
                 (response) => {
        this.$refs.ExchangeRateModal.model= response.data;
      })
    }
      else if(tab=="four"){
        this.activetab = 3;
        Service.GetById(this.id).then(
                 (response) => {
        this.$refs.DepositModal.model= response.data;
      })
  }
  else if(tab=="five"){
        this.activetab = 4;
        Service.GetById(this.id).then(
                 (response) => {
        this.$refs.ReceiverInformationModal.model= response.data;
      })
    }
      else if(tab=="six"){
        this.activetab = 5;
        Service.GetById(this.id).then(
          (response) => {
          window.console.log(response.data)
        this.$refs.WithDrawModal.model= response.data;
        if(response.data.withdraw_reference_image == null || response.data.withdraw_reference_image =="")
        {
          this.$refs.WithDrawModal.model.withdraw_reference_image=null;
        }
        else{
          this.$refs.WithDrawModal.model.withdraw_reference_image = `data:image/png;base64,${response.data.withdraw_reference_image}`;
        }
      })
      }
    },
    AfterSavedCustomerInformation()
    {
      this.activetab = 1;
      Service.GetById(this.id).then(
                 (response) => {
        //this.$refs.ExchangeRateModal.model= response.data;
        this.$refs.SenderInformationModal.model= response.data;
      })
      
    },
    AfterSavedSenderInformation(){
      this.activetab = 2;
      Service.GetById(this.id).then(
                 (response) => {
      this.$refs.ExchangeRateModal.model= response.data;
      //this.$refs.DepositModal.model= response.data;
      })
    },
    AfterSavedExchangeRate()
    {
      this.activetab = 3;
      Service.GetById(this.id).then(
                 (response) => {
                  window.console.log(response.data)
        this.$refs.DepositModal.model= response.data;
        //this.$refs.ExchangeRateModal.model= response.data;
        //this.$refs.SenderInformationModal.model= response.data;
      })
    },
    
    AfterSavedDeposit(){
      this.activetab = 4;
      Service.GetById(this.id).then(
                 (response) => {
        //this.$refs.ReceiverInformationModal.model=[];
        window.console.log(response.data);
        this.$refs.ReceiverInformationModal.model= response.data;
      })
    },
    AfterSavedReceiverInformation(){
      this.activetab = 5;
      Service.GetById(this.id).then(
                 (response) => {
        this.$refs.WithDrawModal.model= response.data;
      })
    },
    
   }
  
}
</script>