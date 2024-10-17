<template>
  <v-app>
    <!-- First Fixed App Bar -->
    <v-app-bar scroll-behavior="hide" scroll-threshold="60" color="#0a1775" density="compact" height="50" flat="true">
      <v-spacer></v-spacer>
      <img
          style="border: 1px solid #fff; cursor: pointer"
          class="mr-2 ml-3"
          width="20"
          height="15"
          src="../../assets/eng.jpg"
          @click="ChangeEng"/>
        <img
          style="border: 1px solid #fff; cursor: pointer"
          class=""
          width="20"
          height="15"
          src="../../assets/mm.jpg"
          @click="Change"/>
      
      <v-tooltip location="bottom">
      <template v-slot:activator="{ props }" >
        <v-btn :to="{ name: 'Login' }">
          <v-icon size="large" v-bind="props">mdi-login</v-icon>
        </v-btn>
      </template>
    <span class="text-center">Login</span>
</v-tooltip>
    </v-app-bar>

    <!-- Second Fixed App Bar -->
    <v-app-bar fixed dense color="white" disabled="true">
      <v-toolbar color="white">
          <v-avatar color="white" size="40" class="ml-5" width="100px">
              <v-img src="../../../src/assets/mbf_logo.png" class="rotating-image"></v-img>
          </v-avatar>
      <!-- </v-col> -->
        <v-toolbar-title style="font-style:normal; color:darkblue;">M-MONEY</v-toolbar-title>
        <v-spacer></v-spacer>
        
        <!-- Remittance Button -->
        <v-row>
          <v-btn
            v-for="button in buttons"
            :key="button.name"
            variant="text"
            :to="button.route"
            :class="{'active': activeButton === button.name}"
            style="font-weight:bold; color:darkblue;"
            @click="setActive(button.name)">
            {{ button.label }}
          </v-btn>
        </v-row>
      </v-toolbar>
    </v-app-bar>
    <div style="height: 48px;"></div>

    <!-- Main Content -->
    <v-main @scroll.passive="onScroll" class="ml-1 mt-n11">
      <router-view/>
    </v-main>
    <v-footer color="#0a1775"
    class="text-center d-flex flex-column"
  >
    
      <v-col cols="12" md="12">
        <v-row dense class="mt-n10">
          <v-col cols="12" md="4">
            <h4 class="mt-9"><v-icon>mdi-currency-sign</v-icon>Remittance</h4>
            <h4 class="mt-9"><v-icon>mdi-account-convert</v-icon>Our Services</h4>
            
            
          </v-col>
          <v-col cols="12" md="4">
            <h4 class="mt-9"><v-icon>mdi-account</v-icon>Register</h4>
            <h4 class="mt-9"><v-icon>mdi-checkbox-marked-circle-outline</v-icon>Money Transfer</h4>
            
          </v-col>
          <v-col cols="12" md="4">
            <h4 class="mt-9"><v-icon>mdi-biohazard</v-icon>About Us</h4>
            <h4 class="mt-9"><v-icon>mdi-help-circle</v-icon>Help services</h4>
          </v-col>
          <v-divider color="#FFF"></v-divider>
          <v-col cols="12" md="12" class="mt-2">
            <!-- <h4 class="">Follow Us</h4> -->
            <v-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon"
            class="mx-4"
            size="large"
            variant="plain"
          ></v-btn>
          </v-col>
          <v-col cols="12" md="12">
            {{ new Date().getFullYear() }} — <strong>MAHAR BAWGA CO.,LTD</strong>
          </v-col>
        </v-row>
      </v-col>


    <v-divider></v-divider>

    <div>
      
    </div>
  </v-footer>
    <v-spacer></v-spacer>
    <v-row align="center" justify="center">
    <v-col cols="auto" align="right">
      <v-btn icon="mdi-chevron-up" v-if="fab" bottom fixed right color="#0a1775" @click="toTop" class="fab-btn"></v-btn>
    </v-col>
    </v-row>
  </v-app>
</template>
<script>
import { ref,onMounted, onBeforeUnmount  } from 'vue';
// import { useDisplay } from 'vuetify';
// const mobileBreakpoint = 600;
// const { displayClasses } = useDisplay({ mobileBreakpoint })
export default {
  setup() {
    // Define the active button
    const activeButton = ref('');
    const fab = ref(false);
    // Method to set the active button
    const setActive = (buttonName) => {
      activeButton.value = buttonName;
    };
    const onScroll = (e) => {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      fab.value = top > 20;
    };

    const toTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
     // Attach and detach scroll event listener
     onMounted(() => {
      window.addEventListener('scroll', onScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll);
    });
    return{
      activeButton,
      setActive,
      fab,
      toTop,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
      
      
  }
},
data(){
  return{
    drawer: false,
    buttons : [
      { name: 'home', label: 'Home', route: { name: 'Home' } },
      { name: 'remittance', label: 'Remittance', route: { name: 'Remittance' } },
      { name: 'services', label: 'Our Services', route: null },
      { name: 'contact', label: 'Contact Us', route: null },
      { name: 'about', label: 'About Us', route: { name: 'Aboutus' } },
      { name: 'register', label: 'Register', route: { name: 'Register' } },
      { name: 'money-transfer', label: 'Money Transfer', route: null },
    ],
  }
},
watch: {
      group () {
        this.drawer = false
      },
    },

}
</script>
<style scoped>
/* Style for active button */
.v-btn.active {
  background-color:darkblue;
  color: white !important;
  border-color: darkblue;
}
.fab-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}
.rotating-image {
  display: block;

  width: 100px;
  /* Adjust the width as needed */
  height: 100px;
  /* Adjust the height as needed */
  animation: rotate 5s linear infinite;
}
</style>