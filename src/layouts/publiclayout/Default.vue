<template>
  <v-app>
    <!-- First Fixed App Bar -->
    <v-app-bar scroll-behavior="hide" class="hidden-sm-and-down" scroll-threshold="60" color="#0a1775" density="compact" height="50" flat="true">
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
    <v-app-bar app dark style="color: darkblue;" class="hidden-sm-and-down">
      <v-avatar color="white" size="50" class="ml-5" width="100px">
        <v-img src="../../../src/assets/mbf_logo.png" class="rotating-image"></v-img>
    </v-avatar>
      <v-toolbar-title style="font-size: 16px; color:darkblue;" class="">M-Money</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item
           v-for="button in buttons"
          :key="button"
          :value="'tab-' + button"   show-arrows>
        <v-btn
        
        :key="button.name"
        :variant="buttonVariant"
        :to="button.route"
        :class="{'active': activeButton === button.name}"
        @click="setActive(button.name)">
        {{ button.label }}
      </v-btn>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-app-bar>
    <v-app-bar app class="hidden-sm-and-up" style="top: 0%;" color="#FFF">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" style="color: darkblue"></v-app-bar-nav-icon>
        <v-toolbar-title style="color: darkblue">M-Money</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer style="top: 62px;"
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'top' : undefined"
        temporary
      >
      <v-list density="compact">
  
        <v-list-item
          v-for="(item, i) in buttons"
          :key="i"
          :value="item"
          :to="item.route"
          style="color: darkblue"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" style="color: darkblue"></v-icon>
          </template>
          
          <v-list-item-title v-text="item.label"></v-list-item-title>
        </v-list-item>
      </v-list>
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
      </v-navigation-drawer>

    <v-main style="--v-layout-top: 65px;">
      <router-view/>
    </v-main>
    
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
      small
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>

    <v-footer color="#0a1775" class="text-center d-flex flex-column">
    
      <v-col cols="12" md="12">
        <v-row dense class="">
          <v-col cols="12" md="2">
            <v-img src="../../../src/assets/mbf_logo.png" width="60px" height="80px;" class="mt-10"></v-img>
            <h4 class="mt-n10" color="white">M-Money</h4>
            <h5 class="mt-9" color="white">Mahar Bawga Money Co.,ltd</h5>
          </v-col>
          <v-col cols="12" md="5">
            <h4 class="mt-9"><v-icon>mdi-currency-sign</v-icon>Remittance</h4>
            <h4 class="mt-9"><v-icon>mdi-account</v-icon>Register</h4>
            <h4 class="mt-9"><v-icon>mdi-checkbox-marked-circle-outline</v-icon>Money Transfer</h4>
          </v-col>
          <v-col cols="12" md="5">
            <h4 class="mt-9"><v-icon>mdi-account-convert</v-icon>Our Services</h4>
            <h4 class="mt-9"><v-icon>mdi-biohazard</v-icon>About Us</h4>
            <h4 class="mt-9"><v-icon>mdi-help-circle</v-icon>Help services</h4>
          </v-col>
          <v-divider color="#FFF"></v-divider>
          
          <v-col cols="12" md="6" class="mt-6 text-left">
            {{ new Date().getFullYear() }} — <strong>MAHAR BAWGA CO.,LTD</strong>
          </v-col>
          <v-col cols="12" md="6" class="mt-2 text-right">
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
        </v-row>
      </v-col>


    <v-divider></v-divider>
    <v-spacer></v-spacer>
    <v-row align="center" justify="center">
    <v-col cols="auto" align="right">
      <v-btn icon="mdi-chevron-up" v-if="fab" bottom fixed right color="#0a1775" @click="toTop" class="fab-btn"></v-btn>
    </v-col>
    </v-row>
    <div>
      
    </div>
  </v-footer>
  
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import { ref,onMounted, onBeforeUnmount  } from 'vue';
export default {
  setup() {
    // Define the active button
    const activeButton = ref('');
    const fab = ref(false);
    // Method to set the active button
    const setActive = (buttonName) => {
      activeButton.value = buttonName;
      this.buttonVariant = this.buttonVariant === 'text' ? 'outlined' : 'text';
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
      
      
  }
},
  data() {
    return {
      fab: false,
      currentUrl: "",
      ecurrentUrl: "",
      dialog: false,
      valid: true,
      selectedLanguage: "",

      change: true,
      drawer: false, // Hide mobile side menu by default
      items: [],
      //mmList:[],
      buttons : [
      { name: 'home', label: 'Home', route: { name: 'Home' },icon: 'mdi-clock' },
      { name: 'remittance', label: 'Remittance', route: { name: 'Remittance' },icon: 'mdi-clock' },
      { name: 'services', label: 'Our Services', route: { name: 'Ourservices' } ,icon: 'mdi-clock'},
      { name: 'contact', label: 'Contact Us', route: {name:'Contactus'} ,icon: 'mdi-clock'},
      { name: 'about', label: 'About Us', route: { name: 'Aboutus' },icon: 'mdi-clock' },
      { name: 'register', label: 'Register', route: { name: 'Register' } ,icon: 'mdi-clock'},
      { name: 'money-transfer', label: 'Money Transfer', route: null,icon: 'mdi-clock' },
    ],

    };
  },
  computed: mapState(["languages"]),

  updated() {
    const hostName = window.location.protocol + "//" + window.location.host;
    //this.currentUrl = hostName + "#latbook" ;
    this.currentUrl = hostName + this.$router.currentRoute.fullPath;
    //alert(this.currentUrl)
    this.ecurrentUrl = encodeURIComponent(this.currentUrl);
    //alert(this.ecurrentUrl);
  },

  created() {
    this.selectedLanguage = this.$store.state.curLanguage;
    this.items = this.enList;
    //Vue.i18n.set("en");
  },
  methods: {
    Change() {
      if (this.change) {
        this.change = false;
        this.items = this.mmList;
      }
      // else {
      //   this.change = true;
      //   this.items = this.enList;
      // }
      this.$emit("eventname", this.change);
    },
    ChangeEng() {
      if (!this.change) {
        this.change = true;
        this.items = this.enList;
      }
      this.$emit("eventname", this.change);
    },

    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },

  },

  //  watch: {
  //     selectedLanguage: function (newLang) {
  //       if (this.change) {
  //         this.change = false;
  //       this.items = this.mmList;
  //         Vue.i18n.set(newLang.short);
  //         this.$store.commit("setLanguage", newLang.short);

  //       }
  //       else{
  //          this.change = true;
  //       this.items = this.enList;
  //         Vue.i18n.set(newLang.long);
  //         this.$store.commit("setLanguage", newLang.long);
  //       }
  //     },
  //   },
};
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
  animation: rotate 30s linear infinite;
}
@keyframes rotate {
  from {
      transform: rotate(0deg);
  }

  to {
      transform: rotate(360deg);
  }
}
.responsive-container {
  background-color: white;
  padding: 20px;
}

@media (max-width: 768px) {
  /* Tablet and Mobile */
  .responsive-container {
    background-color: white;
    padding: 2px;
  }
}

@media (max-width: 480px) {
  /* Mobile */
  .responsive-container {
    background-color: white;
    padding: 20px;
  }
}
.barhight{
  height: 5%;
}
.mobiledrawer{
  top: 90px;
}
</style>
