<template>
<div>
  <v-snackbar :color="color" top right location="top right"
      v-model="showSnackbar"
      :timeout="timeout" 
    >
           {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn icon dark
          text
          v-bind="attrs"
          @click="showSnackbar=false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    </div>
</template>

<script>

export default {
  data() {
    return {
      showSnackbar: false,
      message: '',
      color: '',
      timeout: 3000
    };
  },

  methods: {
    Show(data) {
      var vm = this;
    

       if(this.showSnackbar) {
          setTimeout(function() {
           if(data){
            vm.message = data.message || ''
            vm.color = data.color || ''
            vm.timeout = data.timeout || 3000
           }

           vm.showSnackbar = true

          }, vm.timeout);
        }else {
            if(data){
            vm.message = data.message || ''
            vm.color = data.color || ''
            vm.timeout = data.timeout || 3000
           }

            vm.showSnackbar = true
        }
      
      
    },

  
  }
  
}
</script>