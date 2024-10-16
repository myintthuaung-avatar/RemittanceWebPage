<template>
      <v-col cols="12" md="12" class="mt-n2">
    <v-card>
      <v-tabs  align-tabs="center"  color="white" bg-color="#AEAEAF" grow
        v-model="activetab">
        <v-tab  value="one"  text="DailyInwardStatement"  class="text-none"  prepend-icon="mdi-account" :disabled="tabonedisabled"></v-tab>
        <v-tab  value="two" style="letter-spacing:0"  class="text-none" text="DailyOutwardStatement" prepend-icon="mdi-currency-usd" :disabled="tabtwodisabled"></v-tab>
        <v-tab  value="three" style="letter-spacing:0"  class="text-none" text="MonthlySOIRemittance" prepend-icon="mdi-arrow-right-bold-hexagon-outline" :disabled="tabthreedisabled"></v-tab>
        <v-tab  value="four" style="letter-spacing:0"  class="text-none" text="Monthly SOO Remittance" prepend-icon="mdi-crosshairs-gps" :disabled="tabfourdisabled"></v-tab>
        <v-tab  value="five" style="letter-spacing:0"  class="text-none" text="TotalInwardOutward" prepend-icon="mdi-archive" :disabled="tabfivedisabled"></v-tab>
        
      </v-tabs>
      <v-card-text>
        <v-window v-model="activetab">
          <v-window-item value="one">
            <DailyInwardStatement ref="DailyInwardStatementModal"/>
          </v-window-item>
          <v-window-item value="two">
            <DailyOutwardStatement   ref="DailyOutwardStatementModal"/>
          </v-window-item>
          <v-window-item value="three">
            <MonthlySOIRemittance  ref="MonthlySOIRemittanceModal" />
          </v-window-item>
          <v-window-item value="four">
            <MonthlySOORemittance  ref="MonthlySOORemittanceModal"/>
          </v-window-item>
          <v-window-item value="five">
            <TotalInwardOutward ref="TotalInwardOutwardModal"/>
          </v-window-item>
        </v-window>
      </v-card-text>
  
    </v-card>
  </v-col>
  </template>
  <script>
  import DailyInwardStatement from './DailyInwardStatement.vue';
  import DailyOutwardStatement from './DailyOutwardStatement.vue';
  import MonthlySOIRemittance from './MonthlySOIRemittance.vue';
  import MonthlySOORemittance from './MonthlySOORemittance.vue';
  import TotalInwardOutward from './TotalInwardOutward.vue';
    export default {
      components: {DailyInwardStatement,DailyOutwardStatement,MonthlySOIRemittance,MonthlySOORemittance,TotalInwardOutward},
      data: () => ({
        activetab:0,
        tabonedisabled:false,
        tabtwodisabled:false,
        tabthreedisabled:false,
        tabfourdisabled:false,
        tabfivedisabled:false,
        id:0,
      }),
      created() {
        this.$emit("eventname", true);
    },
    watch:{
      },
    
     
    
  }
  </script>