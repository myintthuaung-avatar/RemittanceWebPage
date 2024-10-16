<style scoped>
.v-list-item--nav .v-list-item-title{
  line-height: 2rem;
}
.no-underline {
  text-decoration: none !important;
  font-size: 14px;
  color: #000;
}
v-navigation-drawer v-navigation-drawer--left v-navigation-drawer--expand-on-hover v-navigation-drawer--rail v-navigation-drawer--temporary v-theme--light v-navigation-drawer--mobile v-navigation-drawer{
  left: 0px;
  z-index: 1004;
  transform: translateX(-0%);
  position: fixed;
  height: calc(100% - 64px);
  top: 64px;
  bottom: 0px;
  width: 56px;
}
.v-navigation-drawer {
  left: 0px;

  z-index: 1004;

  transform: translateX(-0%);

  position: fixed;

  height: calc(100% - 64px);

  top: 64px;

  bottom: 0px;

  width: 56px;
}
</style>
<template>

 <v-navigation-drawer class="v-navigation-drawer v-navigation-drawer--left v-navigation-drawer--expand-on-hover v-navigation-drawer--rail v-navigation-drawer--temporary v-theme--light v-navigation-drawer--mobile v-navigation-drawer"  expand-on-hover rail>
<v-list dense>
<v-list-item-group v-model="model">
   <template v-for="item in items">
    <router-link :class="{ 'no-underline': true }" v-if="item.children.length === 0 && item.permissions.includes(getUserInfo.role) === true" :key="item.id" :to="item.href">
    <v-list-item link :prepend-icon= item.icon :title=item.text  dark>
    </v-list-item>
  </router-link>
   </template>
 </v-list-item-group>
</v-list>
  </v-navigation-drawer>
</template>
<style>
.v-list-item__spacer {
    width: 10px !important;
}
</style>
<script>

export default {

components: {},

name: "App",
data() {
return {
    drawer: null,
   model: 1,
  };
},

created() {
  
this.getMenu();
},

mounted() {
 
var vm = this;
var curr = this.items.filter((e)=> {
  return e.id === vm.$route.meta.id;
});
this.model = curr[0].id;
},

computed: {
getUserInfo() {
    return JSON.parse(localStorage.getItem("user"));
}
},

methods: {
  getMenu() {
    this.items = [
      { id: 1, text:"Dashboard", href: "/dashboard", icon: "mdi-view-dashboard", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 3, text:"User", href: "/setup/user", icon: "mdi-account-circle", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 4, text:"Role", href: "/setup/role", icon: "mdi-assistant", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 5, text:"Company", href: "/setup/company", icon: "mdi-home-outline",  children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"]},
      { id: 6, text: "Department", href: "/setup/department", icon: "mdi-codepen", children: [], permissions: ["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 7, text: "Account", href: "/setup/account", icon: "mdi-account-box-outline", children: [], permissions: ["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 7, text:"Country", href: "/setup/country", icon: "mdi-flag-outline", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 4, text:"State & Division", href: "/setup/statedivision", icon: "mdi-city", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 5, text: "City", href: "/setup/city", icon: "mdi-city", children: [], permissions: ["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 7, text: "CashBook Type", href: "/setup/cashbooktype", icon: "mdi-currency-usd", children: [], permissions: ["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 8, text:"Currency", href: "/setup/currency", icon: "mdi-currency-sign",  children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"]},
      { id: 9, text:"Exchange Rate", href: "/setup/exchangerate", icon: "mdi-square-outline",  children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"]},
      { id: 10, text: "FMTS", href: "/setup/fmts", icon: "mdi-file-delimited", children: [], permissions: ["ADMINISTRATOR", "APPROVER","CHECKER"] },
      //{ id: 6, text: "Cash Transaction", href: "/setup/cashTransaction", icon: "mdi-transfer", children: [], permissions: ["ADMINISTRATOR", "ADMIN"] },
      //{ id: 6, text: "Closing", href: "/setup/closing", icon: "mdi-account-box", children: [], permissions: ["ADMINISTRATOR", "ADMIN"] },

    ];


  },

shouldShowItem(item) {
    return item.children.length === 0 && item.permissions.includes(this.getUserInfo.role);
  },

  goToRoute(item) {
    this.model = item.id;
    this.$router.push(item.href);
  }

 
},

}
</script>
