import{P as x}from"./PictureInput-9398578f.js";import{H}from"./main-ba3fde8e.js";import{L as T,Y as z,ap as O,j as e,ad as k,al as L,aM as Q,M as R,bQ as Y,$ as Z,Z as J,aq as K,ar as U,F as X,bR as ee,_ as le,e as B,f as y,i as ae,k as o,D as oe,G as S,y as A,u as i,p as d,l as r,V as s,ai as te,aj as se,b1 as re,z as n,m as v,v as h,A as F,q as C,s as N,x as _,ag as G,bS as de}from"./index-26f63e57.js";import{V as ie}from"./VTextarea-2b7330cf.js";import{m as ne,a as j,b as ue,c as me}from"./VCheckboxBtn-5a600a8b.js";import{V as w}from"./VCheckbox-e3cb1aac.js";const pe=T({...ne({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),P=z()({name:"VRadio",props:pe(),setup(l,a){let{slots:f}=a;return O(()=>e(j,k(l,{class:["v-radio",l.class],style:l.style,type:"radio"}),f)),{}}});const fe=T({height:{type:[Number,String],default:"auto"},...L(),...Q(ue(),["multiple"]),trueIcon:{type:R,default:"$radioOn"},falseIcon:{type:R,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),ce=z()({name:"VRadioGroup",inheritAttrs:!1,props:fe(),emits:{"update:modelValue":l=>!0},setup(l,a){let{attrs:f,slots:p}=a;const I=Y(),u=Z(()=>l.id||`radio-group-${I}`),m=J(l,"modelValue");return O(()=>{const[c,t]=K(f),D=U.filterProps(l),E=j.filterProps(l),V=p.label?p.label({label:l.label,props:{for:u.value}}):l.label;return e(U,k({class:["v-radio-group",l.class],style:l.style},c,D,{modelValue:m.value,"onUpdate:modelValue":g=>m.value=g,id:u.value}),{...p,default:g=>{let{id:b,messagesId:$,isDisabled:W,isReadonly:q}=g;return e(X,null,[V&&e(ee,{id:b.value},{default:()=>[V]}),e(me,k(E,{id:b.value,"aria-describedby":$.value,defaultsTarget:"VRadio",trueIcon:l.trueIcon,falseIcon:l.falseIcon,type:l.type,disabled:W.value,readonly:q.value,"aria-labelledby":V?b.value:void 0,multiple:!1},t,{modelValue:m.value,"onUpdate:modelValue":M=>m.value=M}),p)])}})}),{}}}),Ve={components:{VueDatePicker:H,PictureInput:x},name:"UserRegistrationCard",data:()=>({currentCard:1,first:null,middle:null,last:null,phone:null,address:null,email:null,date_birth:null,password:null,terms:!1,valid:!1,inline:null,selfie_image:"",selfie_photo:"",nrc_passport_photo:"",nrc_passport_image:"",ex4:["primary","indigo"]}),methods:{nextCard(){this.currentCard=2},backCard(){this.currentCard=1},submitForm(){alert("Form submitted!")}}},ge={style:{"background-color":"#BBDEFB","background-size":"cover","background-position":"left","background-repeat":"no-repeat","min-height":"90vh",display:"flex","align-items":"center","justify-content":"center"}},be={style:{"letter-spacing":"0","font-size":"12px","font-weight":"inherit",color:"AE1B10"},class:"text-red"},ye={style:{"letter-spacing":"0","margin-right":"80px","font-size":"12px","font-weight":"inherit",color:"AE1B10"},class:"text-red"},ve={style:{"letter-spacing":"0","margin-right":"80px","font-size":"12px","font-weight":"inherit",color:"AE1B10"},class:"text-red"};function he(l,a,f,p,I,u){const m=B("VueDatePicker"),c=B("picture-input");return y(),ae("div",ge,[e(oe,{autocomplete:"off",ref:"form",modelValue:l.valid,"onUpdate:modelValue":a[15]||(a[15]=t=>l.valid=t)},{default:o(()=>[l.currentCard===1?(y(),S(_,{key:0,flat:"",class:"mx-auto",color:"primary",rounded:"lg",variant:"outlined",style:{"background-color":"white","margin-top":"3cap",width:"800px",height:"600px"}},{default:o(()=>[e(A,{style:{"font-family":"Georgia, 'Times New Roman', Times, serif","text-align":"center","font-style":"oblique"}},{default:o(()=>a[16]||(a[16]=[i(" 📜 User Registration ")])),_:1}),d("div",null,[e(r,null,{default:o(()=>[e(s,{cols:"12",sm:"1"},{default:o(()=>[e(te,{color:"white",size:"40",class:"ml-5",width:"100px"},{default:o(()=>[e(se,{src:re,class:"rotating-image"})]),_:1})]),_:1}),e(s,{cols:"12",sm:"10"},{default:o(()=>a[17]||(a[17]=[d("figure",null,[d("figcaption",{style:{"font-family":"Georgia, 'Times New Roman', Times, serif","font-style":"oblique","font-size":"20px"}}," Remittance System")],-1)])),_:1})]),_:1})]),e(s,{cols:"12",sm:"12",class:"mt-2"},{default:o(()=>[e(r,{dense:""},{default:o(()=>[e(s,{cols:"12",sm:"4"},{default:o(()=>[e(n,{modelValue:l.first,"onUpdate:modelValue":a[0]||(a[0]=t=>l.first=t),color:"primary",label:"🐷 First name",clearable:"",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",sm:"4"},{default:o(()=>[e(n,{modelValue:l.middle,"onUpdate:modelValue":a[1]||(a[1]=t=>l.middle=t),color:"primary",label:"🦚 Middle name",clearable:"",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",sm:"4"},{default:o(()=>[e(m,{modelValue:l.date_birth,"onUpdate:modelValue":a[2]||(a[2]=t=>l.date_birth=t),placeholder:"🎂 Date of Birth",variant:"outlined","enable-time-picker":!1,"teleport-center":"",utc:""},null,8,["modelValue"]),v(d("span",be,"Please Fill Date of Birth",512),[[h,l.birthdaterule]])]),_:1})]),_:1}),e(r,{dense:""},{default:o(()=>[e(s,{cols:"12",sm:"4"},{default:o(()=>[e(n,{modelValue:l.phone,"onUpdate:modelValue":a[3]||(a[3]=t=>l.phone=t),color:"primary",label:"☎️ Phone NO",clearable:"",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",sm:"4"},{default:o(()=>[e(n,{modelValue:l.email,"onUpdate:modelValue":a[4]||(a[4]=t=>l.email=t),color:"primary",label:" 📧 Email",clearable:"",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",sm:"4"},{default:o(()=>[e(n,{modelValue:l.password,"onUpdate:modelValue":a[5]||(a[5]=t=>l.password=t),color:"primary",label:"🔐 Password",clearable:"",placeholder:"Enter your password",hint:"At least 8 characters",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,null,{default:o(()=>[e(s,{cols:"12",sm:"12"},{default:o(()=>[e(ie,{label:"🏡 Address",modelValue:l.address,"onUpdate:modelValue":a[6]||(a[6]=t=>l.address=t),"row-height":"20",rows:"2",variant:"outlined","auto-grow":"",color:"primary",shaped:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,null,{default:o(()=>[e(ce,{class:"inline-radio",inline:"",label:"👻 Gender"},{default:o(()=>[e(P,{label:"Male",value:"two"}),e(P,{label:"Female",value:"three"}),e(P,{label:"Other",value:"one"})]),_:1}),e(w,{modelValue:l.ex4,"onUpdate:modelValue":a[7]||(a[7]=t=>l.ex4=t),color:"primary",label:"primary",value:"primary","hide-details":""},null,8,["modelValue"]),e(w,{modelValue:l.ex4,"onUpdate:modelValue":a[8]||(a[8]=t=>l.ex4=t),color:"indigo",label:"indigo",value:"indigo","hide-details":""},null,8,["modelValue"])]),_:1}),e(r,{align:"center",justify:"center"},{default:o(()=>[e(s,{cols:"auto",sm:"12",class:"d-flex justify-center"},{default:o(()=>[e(F,null,{default:o(()=>[e(C,{width:"200",color:"darkblue",variant:"outlined",onClick:u.nextCard,rounded:""},{default:o(()=>[a[18]||(a[18]=i(" 🙄 Next ")),e(N,{icon:"mdi-chevron-right",end:""})]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):G("",!0),l.currentCard===2?(y(),S(_,{key:1,flat:"",class:"mx-auto",color:"primary",rounded:"lg",variant:"outlined",style:{"background-color":"white","margin-top":"3cap",width:"800px",height:"600px"}},{default:o(()=>[e(A,{style:{"font-family":"Georgia, 'Times New Roman', Times, serif","text-align":"center","font-style":"oblique"}},{default:o(()=>a[19]||(a[19]=[i(" Additional Information ")])),_:1}),e(s,{cols:"12",sm:"12",class:"mt-2"},{default:o(()=>[e(r,{dense:""},{default:o(()=>[e(s,{cols:"12",sm:"4"},{default:o(()=>[e(n,{modelValue:l.phone,"onUpdate:modelValue":a[9]||(a[9]=t=>l.phone=t),color:"primary",label:"Phone NO",clearable:"",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",sm:"4"},{default:o(()=>[e(n,{modelValue:l.email,"onUpdate:modelValue":a[10]||(a[10]=t=>l.email=t),color:"primary",label:"Email",clearable:"",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",sm:"4"},{default:o(()=>[e(n,{modelValue:l.password,"onUpdate:modelValue":a[11]||(a[11]=t=>l.password=t),color:"primary",label:"Password",clearable:"",placeholder:"Enter your password",hint:"At least 8 characters",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,null,{default:o(()=>[e(s,{cols:"12",sm:"6"},{default:o(()=>[e(r,{dense:""},{default:o(()=>[e(s,{cols:"12",md:"5"},{default:o(()=>a[20]||(a[20]=[d("label",{class:"font-weight-regular"},[i("Selfie with Passport/Boarder Pass/Work Permit/OWIC"),d("span",{class:"text-red"},"*")],-1)])),_:1}),e(s,{cols:"12",sm:"7"},{default:o(()=>[e(c,{ref:"SelfiePictureInput",width:"150",height:"150",margin:"14",modelValue:l.selfie_photo,"onUpdate:modelValue":a[12]||(a[12]=t=>l.selfie_photo=t),prefill:l.selfie_image,label:"Selfie with Passport/Boarder Pass/WorkPermit/OWIC",accept:"image/jpeg,image/png",size:"300","button-class":"btn","custom-strings":{upload:"",drag:" 😺 Selfie Photo Upload "},onChange:l.onChange},null,8,["modelValue","prefill","onChange"]),v(d("span",ye,"Please Fill NRC/Passport with Selfie Photo",512),[[h,l.selfie_photorule]])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",sm:"6"},{default:o(()=>[e(r,{dense:""},{default:o(()=>[e(s,{cols:"12",md:"5"},{default:o(()=>a[21]||(a[21]=[d("label",{class:"font-weight-regular"},[i("Passport/Boarder Pass/Work Permit/OWIC"),d("span",{class:"text-red"},"*")],-1)])),_:1}),e(s,{cols:"12",sm:"7"},{default:o(()=>[e(c,{ref:"pictureInput",width:"150",height:"150",modelValue:l.nrc_passport_photo,"onUpdate:modelValue":a[13]||(a[13]=t=>l.nrc_passport_photo=t),prefill:l.nrc_passport_image,margin:"14",accept:"image/jpeg,image/png",size:"300","button-class":"btn","custom-strings":{upload:"",drag:" 😺Photo Upload "},onChange:l.onChange},null,8,["modelValue","prefill","onChange"]),v(d("span",ve,"Please Fill NRC/Passport Photo",512),[[h,l.nrc_passport_photorule]])]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{dense:""},{default:o(()=>[e(s,{cols:"12",sm:"12"},{default:o(()=>[e(w,{modelValue:l.terms,"onUpdate:modelValue":a[14]||(a[14]=t=>l.terms=t),class:"custom-label",style:{"font-weight":"bold"},label:"I agree to site terms and conditions"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{align:"center",justify:"center"},{default:o(()=>[e(s,{cols:"auto",sm:"12",class:"d-flex justify-center"},{default:o(()=>[e(F,null,{default:o(()=>[e(C,{width:"200",color:"darkblue",variant:"outlined",onClick:u.backCard,rounded:""},{default:o(()=>[a[22]||(a[22]=i(" 🤮 Back ")),e(N,{icon:"mdi-chevron-left",end:""})]),_:1},8,["onClick"]),e(C,{width:"200",color:"darkblue",variant:"outlined",onClick:u.submitForm,rounded:""},{default:o(()=>a[23]||(a[23]=[i(" 👌 Submit ")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):G("",!0),e(de,{class:"text-center",style:{"font-size":"14px",color:"#666"}},{default:o(()=>a[24]||(a[24]=[i(" ©2024 — "),d("strong",null,"Vuetify",-1)])),_:1})]),_:1},8,["modelValue"])])}const Ue=le(Ve,[["render",he],["__scopeId","data-v-358f2ad7"]]);export{Ue as default};
