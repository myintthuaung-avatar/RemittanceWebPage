import{_ as f,a$ as g,b0 as c,f as w,i as y,j as s,k as o,V as l,l as t,x as V,H as h,ai as b,p as i,b1 as v,I as k,ay as _,D as L,C as r,z as u,b2 as p,B as S,q as R}from"./index-26f63e57.js";const B={data:()=>({loading:!1,valid:!1,width:120,showpass:!0,nameRules:[e=>!!e||""],pwdRules:[e=>!!e||""],color:"",snackbar:!1,message:"",timeout:"5000",x:"right",y:"top",user:new g,login_message:""}),created(){},methods:{HandleLogin(){var e=this;e.valid=!0,e.valid&&(e.loading=!0,e.login_message="",e.$store.dispatch("app/ResetStatesBeforeLogin",{}),c.login(e.user).then(a=>{if(e.loading=!1,a.token){var m={id:a.id,name:a.name,role:a.role,dept_id:a.department,is_admin:!0};e.$store.dispatch("app/SetUserInfo",m),e.$router.push({name:"Dashboard"})}else e.$router.push({name:"Login"}),e.login_message=a.msg},a=>{e.loading=!1,e.message=a.response&&a.response.datat||a.message||a.toString()}))}}};function C(e,a,m,$,H,d){return w(),y("div",null,[s(l,{cols:"12",md:"12",class:"mt-12"},{default:o(()=>[s(t,{dense:"compact",class:"mt-12"},{default:o(()=>[s(l,{cols:"12",md:"4"}),s(l,{cols:"12",md:"4"},{default:o(()=>[s(t,{compact:"density"},{default:o(()=>[s(l,{cols:"12",md:"12"},{default:o(()=>[s(V,{style:{border:"0px solid #ddd"},"max-width":"400"},{default:o(()=>[s(h,{color:"rgb(25 63 115)",dark:"",flat:"",height:"90"},{default:o(()=>[s(b,{color:"white",size:"50",width:"60px",class:"ml-4"},{default:o(()=>a[3]||(a[3]=[i("img",{src:v,width:"45"},null,-1)])),_:1}),s(k,{style:{"font-size":"18px",color:"white"},class:"mr-3"},{default:o(()=>a[4]||(a[4]=[i("span",null,"Remittance System",-1)])),_:1})]),_:1}),s(_,{fluid:""},{default:o(()=>[s(L,{onSubmit:r(d.HandleLogin,["prevent"]),class:"mt-5"},{default:o(()=>[s(t,{dense:"desity"},{default:o(()=>[s(l,{cols:"12",md:"12"},{default:o(()=>[s(u,{modelValue:e.user.name,"onUpdate:modelValue":a[0]||(a[0]=n=>e.user.name=n),name:"login","prepend-inner-icon":"mdi-account-circle",variant:"outlined",density:"compact",placeholder:"Username",dense:"",required:"",onKeydown:p(r(d.HandleLogin,["prevent"]),["enter"]),rules:e.nameRules},null,8,["modelValue","onKeydown","rules"])]),_:1}),s(l,{cols:"12",md:"12"},{default:o(()=>[s(u,{modelValue:e.user.password,"onUpdate:modelValue":a[1]||(a[1]=n=>e.user.password=n),"prepend-inner-icon":"mdi-key",variant:"outlined",density:"compact",placeholder:"Password",required:"","append-inner-icon":e.showpass?"mdi-eye":"mdi-eye-off","onClick:appendInner":a[2]||(a[2]=()=>e.showpass=!e.showpass),type:e.showpass?"password":"text",dense:"",onKeydown:p(r(d.HandleLogin,["prevent"]),["enter"]),rules:e.pwdRules},null,8,["modelValue","append-inner-icon","type","onKeydown","rules"])]),_:1}),s(S,null,{default:o(()=>[s(l,{cols:"12",md:"12",class:"mx-auto"},{default:o(()=>[s(R,{type:"submit",size:"large",loading:e.loading,color:"rgb(25 63 115)",block:"",dark:""},{default:o(()=>a[5]||(a[5]=[i("span",{style:{color:"white"}},"Login",-1)])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(l,{cols:"12",md:"4"})]),_:1})]),_:1})])}const U=f(B,[["render",C]]);export{U as default};