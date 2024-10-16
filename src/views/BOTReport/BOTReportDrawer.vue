<template>
    <v-col cols="12" md="12" class="mt-n2">
  <v-card>
    <v-tabs align-tabs="center"  color="white" bg-color="#AEAEAF" grow
      v-model="activetab">
      <v-tab  value="one"  text="FMTS"  class="text-none"  prepend-icon="mdi-file-document" :disabled="tabonedisabled"></v-tab>
      <v-tab  value="two" style="letter-spacing:0"  class="text-none" text="EMTS" prepend-icon="mdi-file-document" :disabled="tabtwodisabled"></v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="activetab">
        <v-window-item value="one">
          <FMTS ref="FMTSModal"/>
        </v-window-item>
        <v-window-item value="two">
          <EMTS   ref="EMTSModal"/>
        </v-window-item>
      </v-window>
    </v-card-text>

  </v-card>
</v-col>
</template>
<script>
import EMTS from './EMTS.vue';
import FMTS from './FMTS.vue';
  export default {
    components: {EMTS,FMTS},
    data: () => ({
      activetab:0,
      tabonedisabled:false,
      tabtwodisabled:false,
      id:0,
    }),
    created() {
      this.$emit("eventname", true);
  },
  watch:{
    },
  
   
  
}
</script>