<template>
    <v-col cols="12" md="12" class="mt-n2">
  <v-card>
    <v-tabs  align-tabs="center"  color="white" bg-color="#AEAEAF" grow
      v-model="activetab">
      <v-tab  value="one"  text="Denomination Balance"  class="text-none"  prepend-icon="mdi-account" :disabled="tabonedisabled"></v-tab>
      <v-tab  value="two" style="letter-spacing:0"  class="text-none" text="In Out Exchange" prepend-icon="mdi-currency-usd" :disabled="tabtwodisabled"></v-tab>
      <v-tab  value="three" style="letter-spacing:0"  class="text-none" text="Balance Summary" prepend-icon="mdi-arrow-right-bold-hexagon-outline" :disabled="tabthreedisabled"></v-tab>
      <v-tab  value="four" style="letter-spacing:0"  class="text-none" text="Customer Analysis" prepend-icon="mdi-crosshairs-gps" :disabled="tabfourdisabled"></v-tab>
      <v-tab  value="five" style="letter-spacing:0"  class="text-none" text="Receiver Analysis" prepend-icon="mdi-crosshairs-gps" :disabled="tabfourdisabled"></v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="activetab">
        <v-window-item value="one">
          <DenominationBalance ref="DenominationBalanceModal"/>
        </v-window-item>
        <v-window-item value="two">
          <InOutExchange   ref="InOutExchangeModal"/>
        </v-window-item>
        <v-window-item value="three">
          <BalanceSummary  ref="BalanceSummaryModal" />
        </v-window-item>
        <v-window-item value="four">
          <CustomerAnalysis  ref="CustomerAnalysisModal"/>
        </v-window-item>
        <v-window-item value="five">
          <ReceiverAnalysis  ref="ReceiverAnalysisModal"/>
        </v-window-item>
      </v-window>
    </v-card-text>

  </v-card>
</v-col>
</template>
<script>
import BalanceSummary from './BalanceSummary.vue';
import CustomerAnalysis from './CustomerAnalysis.vue';
import DenominationBalance from './DenominationBalance.vue';
import InOutExchange from './InOutExchange.vue';
import ReceiverAnalysis from './ReceiverAnalysis.vue';
  export default {
    components: {BalanceSummary,CustomerAnalysis,DenominationBalance,InOutExchange,ReceiverAnalysis},
    data: () => ({
      activetab:0,
      tabonedisabled:false,
      tabtwodisabled:false,
      tabthreedisabled:false,
      tabfourdisabled:false,
      id:0,
    }),
    created() {
      this.$emit("eventname", true);
  },
  watch:{
    },
  
   
  
}
</script>