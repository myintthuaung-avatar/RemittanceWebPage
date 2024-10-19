// Composables
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/default/Default.vue'
import LogInLayout from '@/layouts/login/Default.vue'
import SettingLayout from '@/layouts/settings/Default.vue';
import PublicLayout from '@/layouts/publiclayout/Default.vue'
import { isAuthenticated } from './route-check';

const routes = [
  
 
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Dashboard/Dashboard.vue'),
    meta: { id: 1, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/customerinfodrawer",
    name: "CustomerInfoDrawer",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Customer/CustomerInfoDrawer.vue'),
    meta: { id: 2, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/opreator",
    name: "OpreatorList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Customer/OpreatorList.vue'),
    meta: { id: 2, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/approver",
    name: "ApproverList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Customer/ApproverList.vue'),
    meta: { id: 2, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/cashtransaction",
    name: "CashTransaction",
    component: () => import(/* webpackChunkName: "home" */ '@/views/CashTransaction/List.vue'),
    meta: { id: 2, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/closing",
    name: "Closing",
    component: () => import(/* webpackChunkName: "home" */ '@/views/CashTransaction/Closing.vue'),
    meta: { id: 2, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/denobalance",
    name: "DenoBalance",
    component: () => import(/* webpackChunkName: "home" */ '@/views/CashTransaction/DenoBalanceList.vue'),
    meta: { id: 2, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/cbmreport",
    name: "CBMReport",
    component: () => import(/* webpackChunkName: "home" */ '@/views/CBMReport/CBMReportDrawer.vue'),
    meta: { id: 2, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/botreport",
    name: "BOTReport",
    component: () => import(/* webpackChunkName: "home" */ '@/views/BOTReport/BOTReportDrawer.vue'),
    meta: { id: 2, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/mbgrmreport",
    name: "MBGRMReport",
    component: () => import(/* webpackChunkName: "home" */ '@/views/MBGMReport/MBGMReportDrawer.vue'),
    meta: { id: 2, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/cbm/monthlysooremittance",
    name: "MonthlySOORemittance",
    component: () => import(/* webpackChunkName: "home" */ '@/views/CBMReport/MonthlySOORemittance.vue'),
    meta: { id: 2, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  // {
  //   path: "/deno",
  //   name: "Deno",
  //   component: () => import(/* webpackChunkName: "home" */ '@/views/CashBook/Deno.vue'),
  //   meta: { id: 2, layout: DefaultLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  // },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
    meta: { id: 3, layout: LogInLayout, requiresAuth: false, roles :["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  
  {
    path: "/setup/user",
    name: "UserList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/users/List.vue'),
    meta: { id: 4, layout: SettingLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"],}
  },
  {
    path: "/setup/role",
    name: "RoleList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Role/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"],}
  },
  {
    path: "/setup/company",
    name: "CompanyList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Company/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"],}
  },{
    path: "/setup/department",
    name: "DepartmentList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Department/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"],}
  },
  {
    path: "/setup/account",
    name: "AccountList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Account/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles :["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"],}
  },
  {
    path: "/setup/country",
    name: "CountryList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Country/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles: ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/setup/statedivision",
    name: "StateList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/StateDivision/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"],}
  },
  {
    path: "/setup/city",
    name: "CityList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/City/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"],}
  },
  {
    path: "/setup/cashbooktype",
    name: "CashBookTypeList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/CashBookType/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles: ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/setup/currency",
    name: "CurrecyList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Currency/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"],}
  },
  {
    path: "/setup/exchangerate",
    name: "ExchangeRateList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/ExchangeRate/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles : ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"],}
  },
  {
    path: "/setup/fmts",
    name: "FMTSList",
    component: () => import(/* webpackChunkName: "home" */ '@/views/FMTS/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles :["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"],}
  },
  {
    path: "/setup/cashTransaction",
    name: "CashTransaction List",
    component: () => import(/* webpackChunkName: "home" */ '@/views/CashTransaction/List.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles: ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/setup/closing",
    name: "CashBook Closing",
    component: () => import(/* webpackChunkName: "home" */ '@/views/CashTransaction/Closing.vue'),
    meta: { id: 6, layout: SettingLayout, requiresAuth: true, roles: ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "/Landing",
    name: "Landing",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Landing/index.vue'),
   // meta: { id: 6, requiresAuth: true, roles: ["ADMINISTRATOR", "APPROVER","CHECKER","OPREATOR"], }
  },
  {
    path: "",
    name: "Home",
    component: () => import('@/views/PublicLayout/Home.vue'),
    meta: { id: 1, layout: PublicLayout}
  },
  {
    path: "/Remittance",
    name: "Remittance",
    component: () => import('@/views/Landing/remittance.vue'),
    meta: { id: 1, layout: PublicLayout}
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import('@/views/Landing/Register.vue'),
    meta: { id: 1, layout: PublicLayout}
  },
  {
    path: "/Aboutus",
    name: "Aboutus",
    component: () => import('@/views/Landing/aboutus.vue'),
    meta: { id: 1, layout: PublicLayout}
  }, 
  {

    path: "/Ourservices",
    name: "Ourservices",
    component: () => import('@/views/Landing/service.vue'),
    meta: { id: 1, layout: PublicLayout}
  },
  {
    path: "/Contactus",
    name: "Contactus",
    component: () => import('@/views/Landing/contactus.vue'),
    meta: { id: 1, layout: PublicLayout}
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


let isHomePageRouteRequired = function (route) {
  var required = false;
  if (route.name === 'Login') {
      required = true;
  }
  return required;
};

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
      if (isAuthenticated(to.meta.roles)) {
          if (isHomePageRouteRequired(to)) {
              next('/home');
          } else {
              next();
          }
      } else {
          next('/login');
      }
  } else {
      next();
  }
});


export default router
