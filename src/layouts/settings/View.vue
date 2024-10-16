<template>
  <v-main>
    <router-view />
  </v-main>
  <ConfirmBox ref="ConfirmBoxModal" />
  <AlertDialog ref="AlertDialog"/>
</template>




<script>
import AlertDialog from '@/components/base/AlertDialog.vue'
import ConfirmBox from '@/components/base/Confirm.vue'

export default {
 

components: {
  ConfirmBox, AlertDialog
},

mounted() {
  this.$root.AlertDialog = this.$refs.AlertDialog;
  this.$root.ConfirmBoxModal = this.$refs.ConfirmBoxModal;
},

};
  
</script>
