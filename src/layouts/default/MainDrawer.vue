<style scoped>
.v-list-item--nav .v-list-item-title{
  line-height: 6rem;
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
  color:#000;
}
.v-list-item-title{
  color:darkblue;
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
  <v-list v-model:opened="open" v-for="item in items" style="padding: 0px; position: relat">
      <v-list-item v-if="item.children.length === 0 && item.permissions.includes(getUserInfo.role) === true" :key="item.id" :to="item.href"
      :title="item.text" :prepend-icon="item.icon">
          </v-list-item>  
      <v-list-group v-if="item.children.length > 0 && item.permissions.includes(getUserInfo.role) === true" :key="item.id" :to="item.href">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-currency-usd"
            :title="item.text"
          ></v-list-item>
        </template>

          <v-list-item style="margin-left: -40px;"
            v-for="child in item.children"
            :key="i" link :to="child.href" :title="child.text" :prepend-icon="child.icon">
          </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<style>
.v-list-item__spacer {
    width: 30px !important;
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
   open: ['Users'],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
   items:[
      { id: 1, text:"Dashboard", class:"menubarcolor", href: "/dashboard", icon: "mdi-view-dashboard", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"] },
      { id: 2, text:"Opreator", href: "/opreator", icon: "mdi-apple-safari", children: [], permissions:["ADMINISTRATOR","CHECKER","OPREATOR"] },
      { id: 3, text:"Approver", href: "/approver", icon: "mdi-account-check", children: [], permissions:["ADMINISTRATOR", "APPROVER",] },
      { id: 4, text:"Cash Book", href: "/cashbook", icon: "mdi-currency-usd", children: [
      { id: 4, text:"CashTransaction", href: "/cashtransaction", icon: "mdi-cash-100"},
      { id: 4, text:"Closing", href: "/closing", icon: "mdi-cash-100"},
      { id: 4, text:"Deno", href: "/denobalance", icon: "mdi-cash-100"},
      ], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 5, text:"Profile", href: "/", icon: "mdi-account-check", children: [], permissions:["USER"] },
      { id: 6, text:"CBM Reports ", href: "/cbmreport", icon: "mdi-bank", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 7, text:"BOT Reports", href: "/botreport", icon: "mdi-file-document", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 8, text:"MBGM Reports", href: "/mbgrmreport", icon: "mdi-chart-bubble",  children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"]},
      { id: 9, text:"SetUp", href: "/setup/user", icon: "mdi-sass",  children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"]},
      { id: 10, text:"SenderInformation", href: "/senderinformation", icon: "mdi-account-box-outline",  children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"]},
    ]
  };
},

created() {
  
//this.getMenu();
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
      { id: 1, text:"Dashboard", class:"menubarcolor", href: "/dashboard", icon: "mdi-account", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"] },
      { id: 2, text:"Opreator", href: "/opreator", icon: "mdi-book-open-page-variant", children: [], permissions:["ADMINISTRATOR","CHECKER","OPREATOR"] },
      { id: 3, text:"Approver", href: "/approver", icon: "mdi-book-open-page-variant", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 4, text:"Cash Books ", href: "/cashbook", icon: "mdi-database", children: [
      { id: 4, text:"Cash Books1 ", href: "/cashbook1", icon: "mdi-database"},
      { id: 4, text:"Cash Books2 ", href: "/cashbook2", icon: "mdi-database"},
      ], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 5, text:"Profile", href: "/", icon: "mdi-account-check", children: [], permissions:["USER"] },
      { id: 6, text:"CBM Reports ", href: "/cbmreports", icon: "mdi-database", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 7, text:"BOT Reports", href: "/botreports", icon: "mdi-account-check", children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"] },
      { id: 8, text:"MBGM Reports", href: "/mbgmreports", icon: "mdi-account-box",  children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"]},
      { id: 9, text:"SetUp", href: "/setup/user", icon: "mdi-account-box",  children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER"]},
      { id: 10, text:"SenderInformation", href: "/senderinformation", icon: "mdi-account-box-outline",  children: [], permissions:["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"]},
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



};
</script>
