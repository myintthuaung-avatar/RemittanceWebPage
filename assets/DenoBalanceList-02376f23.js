var I=Object.defineProperty;var P=(d,e,r)=>e in d?I(d,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):d[e]=r;var m=(d,e,r)=>(P(d,typeof e!="symbol"?e+"":e,r),r);import{c as q,_ as S,f as x,i as K,j as t,k as l,x as M,H as U,I as z,u as _,E as F,B as T,q as V,C as v,s as h,D as N,V as n,l as w,p as u,ai as R,aj as O,m as i,v as s,z as f,A as j,J,e as D,G as Q,ay as W,y as X,af as B,ad as Y}from"./index-26f63e57.js";import{H}from"./main-ba3fde8e.js";import{D as b,V as k}from"./VAutocomplete-50ca3122.js";import{_ as Z}from"./Thai_Flag-02eed13a.js";import{C as A}from"./cashTransaction-2d4cc8a8.js";import{D as $}from"./DataTableHelper-234fa2d4.js";import{V as ee,a as te,b as g}from"./VExpansionPanel-d5a93536.js";import"./VCheckboxBtn-5a600a8b.js";class le{constructor(){m(this,"id",0);m(this,"account_id",null);m(this,"currency_id",null);m(this,"company_id",null);m(this,"note_qty_1",0);m(this,"note_qty_2",0);m(this,"note_qty_5",0);m(this,"note_qty_10",0);m(this,"note_qty_20",0);m(this,"note_qty_50",0);m(this,"note_qty_100",0);m(this,"note_qty_200",0);m(this,"note_qty_500",0);m(this,"note_qty_1000",0);m(this,"note_qty_5000",0);m(this,"note_qty_10000",0)}}class oe{SaveOrUpdate(e){return q.$http.post("/DenominationBalance/SaveOrUpdate",e)}GetAll(e,r){let p={params:{...e,...r}};return q.$http.get("DenominationBalance/GetAll",p)}GetById(e){return q.$http.get("/DenominationBalance/GetById?id="+e)}Delete(e){return q.$http.delete("DenominationBalance/Delete?id="+e)}}const C=new oe;const ne={components:{VueDatePicker:H},data(){return{formname:"",dialog:!1,show_THB:!1,show_MMK:!0,model:new le,Currencylist:[],Companylist:[],Accountlist:[],currencyrule:[d=>!!d||"Please Select Currency !"],accountrule:[d=>!!d||"Please Select Account !"],companyrule:[d=>!!d||"Please Select Account !"]}},watch:{"model.company_id"(d){d!=null&&b.GetAccountListByCompany(d).then(e=>{this.Accountlist=e.data})},"model.currency_id"(d){d==1?(this.show_MMK=!0,this.show_THB=!1):d==2?(this.show_THB=!0,this.show_MMK=!1):(this.show_MMK=!0,this.show_THB=!0)}},methods:{Show(d){this.dialog=!0,d=="new"?this.formname="Denomination Balance Entry":this.formname="Edit Denomination Balance Entry"},ValidateModel(){return this.$refs.form.validate()},SaveOrUpdate(){this.ValidateModel(),this.valid==!0&&(window.console.log(this.model),C.SaveOrUpdate(this.model).then(d=>{if(d.data){var e=d.data.messages[0];d.data.success?(this.$root.AlertDialog.Show({message:e,color:"success"}),this.$emit("AfterSaved"),this.ClearData()):this.$root.AlertDialog.Show({message:e,color:"error"})}}))},ClearData(){this.model.account_id=null,this.model.currency_id=null,this.model.company_id=null,this.model.note_qty_1=0,this.model.note_qty_2=0,this.model.note_qty_5=0,this.model.note_qty_10=0,this.model.note_qty_20=0,this.model.note_qty_50=0,this.model.note_qty_100=0,this.model.note_qty_200=0,this.model.note_qty_500=0,this.model.note_qty_1000=0,this.model.note_qty_5000=0,this.model.note_qty_10000=0,this.dialog=!1},ClearCancel(){this.model.company_id=null,this.model.account_id=null,this.model.currency_id=null,this.model.note_qty_1=0,this.model.note_qty_2=0,this.model.note_qty_5=0,this.model.note_qty_10=0,this.model.note_qty_20=0,this.model.note_qty_50=0,this.model.note_qty_100=0,this.model.note_qty_200=0,this.model.note_qty_500=0,this.model.note_qty_1000=0,this.model.note_qty_5000=0,this.model.note_qty_10000=0},onCompanyChange(){this.model.account_id=null}},created(){b.GetCurrencyList().then(d=>{this.Currencylist=d.data}),b.GetCompanyList().then(d=>{this.Companylist=d.data})}};function de(d,e,r,p,o,c){return x(),K("div",null,[t(J,{persistent:"",modelValue:o.dialog,"onUpdate:modelValue":e[19]||(e[19]=a=>o.dialog=a),width:"100%"},{default:l(()=>[t(M,null,{default:l(()=>[t(U,{dark:"",color:"rgb(0 208 250)"},{default:l(()=>[t(z,{dark:""},{default:l(()=>[_(F(o.formname),1)]),_:1}),t(T),t(V,{onClick:e[0]||(e[0]=v(a=>c.ClearData(),["stop"])),icon:""},{default:l(()=>[t(h,null,{default:l(()=>e[20]||(e[20]=[_("mdi-close")])),_:1})]),_:1})]),_:1}),t(N,{onSubmit:v(c.SaveOrUpdate,["prevent"]),autocomplete:"off",ref:"form",modelValue:d.valid,"onUpdate:modelValue":e[18]||(e[18]=a=>d.valid=a)},{default:l(()=>[t(n,{cols:"12",md:"12"},{default:l(()=>[t(w,{dense:""},{default:l(()=>[t(n,{cols:"12",md:"4"},{default:l(()=>[t(w,{dense:""},{default:l(()=>[t(n,{cols:"12",md:"5"},{default:l(()=>e[21]||(e[21]=[u("label",{class:"font-weight-regular"},[_("Company"),u("span",{class:"text-red"},"*")],-1)])),_:1}),t(n,{cols:"12",md:"7"},{default:l(()=>[t(k,{modelValue:o.model.company_id,"onUpdate:modelValue":e[1]||(e[1]=a=>o.model.company_id=a),"item-title":"text",label:"Company","item-value":"value",variant:"outlined",density:"compact",onClick:e[2]||(e[2]=a=>c.onCompanyChange()),items:o.Companylist,rules:o.companyrule},null,8,["modelValue","items","rules"])]),_:1})]),_:1})]),_:1}),t(n,{cols:"12",md:"4",style:{"padding-left":"0%"}},{default:l(()=>[t(w,{dense:""},{default:l(()=>[t(n,{cols:"12",md:"5"},{default:l(()=>e[22]||(e[22]=[u("label",{class:"font-weight-regular"},"Account",-1)])),_:1}),t(n,{cols:"12",md:"7"},{default:l(()=>[t(k,{modelValue:o.model.account_id,"onUpdate:modelValue":e[3]||(e[3]=a=>o.model.account_id=a),"item-title":"text",label:"Account","item-value":"value",variant:"outlined",density:"compact",items:o.Accountlist,rules:o.accountrule},null,8,["modelValue","items","rules"])]),_:1})]),_:1})]),_:1}),t(n,{cols:"12",md:"4"},{default:l(()=>[t(w,{dense:""},{default:l(()=>[t(n,{cols:"12",md:"4"},{default:l(()=>e[23]||(e[23]=[u("label",{class:"font-weight-regular"},[_("Currency "),u("span",{class:"text-red"},"*")],-1)])),_:1}),t(n,{cols:"12",md:"8"},{default:l(()=>[t(k,{modelValue:o.model.currency_id,"onUpdate:modelValue":e[4]||(e[4]=a=>o.model.currency_id=a),"item-title":"text",label:"Currency","item-value":"value",variant:"outlined",density:"compact",items:o.Currencylist,rules:o.currencyrule},null,8,["modelValue","items","rules"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(n,{cols:"12",md:"12"},{default:l(()=>[t(w,{dense:""},{default:l(()=>[t(n,{cols:"12",md:"2"},{default:l(()=>[t(R,{size:"x-small",style:{"text-align":"center"}},{default:l(()=>[t(O,{class:"img",alt:"John",src:Z})]),_:1})]),_:1}),t(n,{cols:"12",md:"10"}),i(t(n,{cols:"12",md:"1"},{default:l(()=>e[24]||(e[24]=[u("label",{class:"font-weight-regular"},"Quantity 1",-1)])),_:1},512),[[s,o.show_THB]]),i(t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{modelValue:o.model.note_qty_1,"onUpdate:modelValue":e[5]||(e[5]=a=>o.model.note_qty_1=a),variant:"outlined",density:"compact",type:"number"},null,8,["modelValue"])]),_:1},512),[[s,o.show_THB]]),i(t(n,{cols:"12",md:"1"},{default:l(()=>e[25]||(e[25]=[u("label",{class:"font-weight-regular"},"2",-1)])),_:1},512),[[s,o.show_THB]]),i(t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{type:"number",modelValue:o.model.note_qty_2,"onUpdate:modelValue":e[6]||(e[6]=a=>o.model.note_qty_2=a),variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1},512),[[s,o.show_THB]]),i(t(n,{cols:"12",md:"1"},{default:l(()=>e[26]||(e[26]=[u("label",{class:"font-weight-regular"},"5",-1)])),_:1},512),[[s,o.show_THB]]),i(t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{type:"number",modelValue:o.model.note_qty_5,"onUpdate:modelValue":e[7]||(e[7]=a=>o.model.note_qty_5=a),variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1},512),[[s,o.show_THB]]),i(t(n,{cols:"12",md:"1"},{default:l(()=>e[27]||(e[27]=[u("label",{class:"font-weight-regular"}," 10",-1)])),_:1},512),[[s,o.show_THB]]),i(t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{type:"number",modelValue:o.model.note_qty_10,"onUpdate:modelValue":e[8]||(e[8]=a=>o.model.note_qty_10=a),variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1},512),[[s,o.show_THB]]),i(t(n,{cols:"12",md:"1"},{default:l(()=>e[28]||(e[28]=[u("label",{class:"font-weight-regular"},"20",-1)])),_:1},512),[[s,o.show_THB]]),i(t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{type:"number",modelValue:o.model.note_qty_20,"onUpdate:modelValue":e[9]||(e[9]=a=>o.model.note_qty_20=a),variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1},512),[[s,o.show_THB]]),i(t(n,{cols:"12",md:"1"},{default:l(()=>e[29]||(e[29]=[u("label",{class:"font-weight-regular"},"50",-1)])),_:1},512),[[s,o.show_THB]]),i(t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{type:"number",modelValue:o.model.note_qty_50,"onUpdate:modelValue":e[10]||(e[10]=a=>o.model.note_qty_50=a),variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1},512),[[s,o.show_THB]]),t(n,{cols:"12",md:"1"},{default:l(()=>e[30]||(e[30]=[u("label",{class:"font-weight-regular"},"100",-1)])),_:1}),t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{type:"number",modelValue:o.model.note_qty_100,"onUpdate:modelValue":e[11]||(e[11]=a=>o.model.note_qty_100=a),variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),i(t(n,{cols:"12",md:"1"},{default:l(()=>e[31]||(e[31]=[u("label",{class:"font-weight-regular"},"200",-1)])),_:1},512),[[s,o.show_MMK]]),i(t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{type:"number",modelValue:o.model.note_qty_200,"onUpdate:modelValue":e[12]||(e[12]=a=>o.model.note_qty_200=a),variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1},512),[[s,o.show_MMK]]),t(n,{cols:"12",md:"1"},{default:l(()=>e[32]||(e[32]=[u("label",{class:"font-weight-regular"},"500",-1)])),_:1}),t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{type:"number",modelValue:o.model.note_qty_500,"onUpdate:modelValue":e[13]||(e[13]=a=>o.model.note_qty_500=a),variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12",md:"1"},{default:l(()=>e[33]||(e[33]=[u("label",{class:"font-weight-regular"},"1000",-1)])),_:1}),t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{type:"number",modelValue:o.model.note_qty_1000,"onUpdate:modelValue":e[14]||(e[14]=a=>o.model.note_qty_1000=a),variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),i(t(n,{cols:"12",md:"1"},{default:l(()=>e[34]||(e[34]=[u("label",{class:"font-weight-regular"},"5000",-1)])),_:1},512),[[s,o.show_MMK]]),i(t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{type:"number",modelValue:o.model.note_qty_5000,"onUpdate:modelValue":e[15]||(e[15]=a=>o.model.note_qty_5000=a),variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1},512),[[s,o.show_MMK]]),i(t(n,{cols:"12",md:"1"},{default:l(()=>e[35]||(e[35]=[u("label",{class:"font-weight-regular"},"10000",-1)])),_:1},512),[[s,o.show_MMK]]),i(t(n,{cols:"12",md:"3"},{default:l(()=>[t(f,{type:"number",modelValue:o.model.note_qty_10000,"onUpdate:modelValue":e[16]||(e[16]=a=>o.model.note_qty_10000=a),variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1},512),[[s,o.show_MMK]]),t(n,{cols:"12",md:"12"},{default:l(()=>[t(j,{class:"text-right"},{default:l(()=>[t(T),t(V,{type:"submit",size:"small",variant:"outlined",color:"primary"},{default:l(()=>e[36]||(e[36]=[_("Save")])),_:1}),t(V,{dark:"",size:"small",variant:"outlined",color:"warning",onClick:e[17]||(e[17]=v(a=>c.ClearCancel(),["stop"]))},{default:l(()=>e[37]||(e[37]=[_("Clear")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit","modelValue"])]),_:1})]),_:1},8,["modelValue"])])}const ae=S(ne,[["render",de],["__scopeId","data-v-c527e09b"]]);const ie={components:{Entry:ae,DataTableHelper:$,VueDatePicker:H},data(){return{excelloading:!1,loading:!0,selected:[],model:new A,Accountlist:[],headers:[{title:"Deno Action ",width:180,key:"id"},{title:"Denomination Account",width:100,key:"account_name"},{title:"Denomination Date",with:480,key:"deno_date"},{title:"Currency",key:"currency_name",width:150},{title:"1",key:"note_qty_1",width:150},{title:"2",key:"note_qty_2",width:150},{title:"5",key:"note_qty_5",width:100},{title:"10",key:"note_qty_10",width:100},{title:"20",key:"note_qty_20",width:100},{title:"50",key:"note_qty_50",width:150},{title:"100",key:"note_qty_100",width:150},{title:"200",key:"note_qty_200",width:100},{title:"500",key:"note_qty_500",width:100},{title:"1000",key:"note_qty_1000",width:100},{title:"5000",key:"note_qty_5000",width:100},{title:"10000",key:"note_qty_10000",width:100},{title:"Total",key:"total",width:100}],headerthb:[{title:"Action",width:140,key:"id"},{title:"Account",width:150,key:"account_name"},{title:"Currency",key:"currency_name",width:150},{title:"1",key:"note_qty_1",width:150},{title:"2",key:"note_qty_2",width:150},{title:"5",key:"note_qty_5",width:100},{title:"10",key:"note_qty_10",width:100},{title:"20",key:"note_qty_20",width:100},{title:"100",key:"note_qty_100",width:100},{title:"500",key:"note_qty_500",width:100},{title:"1000",key:"note_qty_1000",width:100}]}},created(){this.model.transaction_date="",b.GetAccountList().then(d=>{this.Accountlist=d.data})},computed:{getTableHeaders(){let d=[];return this.showActionButtons===!1&&d.push("actions"),this.headers.filter(e=>!d.includes(e.value))},getSel(){return this.selected.length}},methods:{GetAllData(d){return C.GetAll(d,this.model)},ResetFilter(){this.model=new A,this.model.status=-1,this.$refs.DataTable.Reload(!0)},ClearData(){this.model.transaction_no="",this.model.transaction_date="",this.model.account_id="",this.dialog=!1},ShowLoading(d){this.$refs.DataTable.loading=d},NewItem(){this.$refs.EntryModal.Show("new")},EditItem(d){var e=this;e.ShowLoading(!0),C.GetById(d.id).then(r=>{window.console.log(r.data),e.$refs.EntryModal.model=r.data,e.$refs.EntryModal.disabled=!0,e.ShowLoading(!1),e.$refs.EntryModal.Show("edit")})},DeleteItem(d){var e=this;e.$root.ConfirmBoxModal.open().then(r=>{r&&(e.ShowLoading(!0),C.Delete(d.id).then(p=>{if(p.data){var o=p.data.messages[0];p.data.success?(e.$root.AlertDialog.Show({message:o,color:"success"}),e.ResetFilter()):e.$root.AlertDialog.Show({message:o,color:"error"})}},p=>{console.error(p),ct.ShowLoading(!1)}))})},Filter(){this.$refs.DataTable.Reload(!0)}}};function se(d,e,r,p,o,c){const a=D("VueDatePicker"),E=D("DataTableHelper"),L=D("Entry");return x(),Q(W,null,{default:l(()=>[t(w,{dense:""},{default:l(()=>[t(n,{cols:"12",md:"12"},{default:l(()=>[t(M,null,{default:l(()=>[t(X,null,{default:l(()=>[t(n,{cols:"12",md:"12"},{default:l(()=>[t(w,{dense:""},{default:l(()=>[t(n,{cols:"12",md:"3"},{default:l(()=>e[5]||(e[5]=[_("Denomination Balance List")])),_:1}),t(n,{cols:"12",md:"4"},{default:l(()=>[t(U,{density:"compact",color:"white",class:""},{default:l(()=>[t(n,{cols:"12",md:"2"},{default:l(()=>[t(B,{location:"bottom"},{activator:l(({props:y})=>[t(V,Y({size:"small",variant:"outlined",color:"#000080",onClick:c.NewItem},y),{default:l(()=>e[6]||(e[6]=[_(" New")])),_:2},1040,["onClick"])]),default:l(()=>[e[7]||(e[7]=u("span",{class:"text-center"},"Entry",-1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{dense:"",class:"mt-n6"},{default:l(()=>[t(n,{cols:"12",md:"12"},{default:l(()=>[t(ee,null,{default:l(()=>[t(te,{title:"Search",height:"70"},{default:l(()=>[t(w,null,{default:l(()=>[t(n,{cols:"12",md:"3"},{default:l(()=>[t(g,null,{default:l(()=>[t(f,{elevation:0,density:"compact",modelValue:o.model.transaction_no,"onUpdate:modelValue":e[0]||(e[0]=y=>o.model.transaction_no=y),label:"Transaction_No",variant:"outlined"},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{cols:"12",md:"3"},{default:l(()=>[t(g,null,{default:l(()=>[t(a,{id:"date-picker",modelValue:o.model.transaction_date,"onUpdate:modelValue":e[1]||(e[1]=y=>o.model.transaction_date=y),variant:"outlined","enable-time-picker":!1,density:"compact",placeholder:"Pick a date","teleport-center":""},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{cols:"12",md:"4"},{default:l(()=>[t(g,null,{default:l(()=>[t(k,{modelValue:o.model.account_id,"onUpdate:modelValue":e[2]||(e[2]=y=>o.model.account_id=y),"item-title":"text",label:"Account","item-value":"value",variant:"outlined",density:"compact",items:o.Accountlist},null,8,["modelValue","items"])]),_:1})]),_:1}),t(n,{cols:"12",md:"2"},{default:l(()=>[t(g,null,{default:l(()=>[t(V,{variant:"text",onClick:c.Filter,outlined:""},{default:l(()=>[t(h,{size:"20",color:"success"},{default:l(()=>e[8]||(e[8]=[_("mdi-magnify")])),_:1})]),_:1},8,["onClick"]),t(V,{variant:"text",icon:"",onClick:e[3]||(e[3]=v(y=>c.ClearData(),["stop"])),outlined:"",class:"mr-n3"},{default:l(()=>[t(h,{size:"small",color:"red"},{default:l(()=>e[9]||(e[9]=[_("mdi-broom")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(E,{class:"mt-2",ref:"DataTable",headers:o.headers,dataLoader:c.GetAllData,show_select:!1,modelValue:o.selected,"onUpdate:modelValue":e[4]||(e[4]=y=>o.selected=y)},{"item.id":l(({item:y})=>[t(V,{variant:"text",icon:"",size:"x-small",onClick:G=>c.EditItem(y),color:"warning"},{default:l(()=>[t(h,null,{default:l(()=>e[10]||(e[10]=[_("mdi-pencil")])),_:1}),t(B,{activator:"parent",location:"bottom"},{default:l(()=>e[11]||(e[11]=[_("Edit")])),_:1})]),_:2},1032,["onClick"]),t(V,{variant:"text",icon:"",size:"small",onClick:G=>c.DeleteItem(y),color:"red"},{default:l(()=>[t(h,null,{default:l(()=>e[12]||(e[12]=[_("mdi-delete-outline")])),_:1}),t(B,{activator:"parent",location:"bottom"},{default:l(()=>e[13]||(e[13]=[_("Delete")])),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["headers","dataLoader","modelValue"]),t(L,{onAfterSaved:c.ResetFilter,ref:"EntryModal"},null,8,["onAfterSaved"])]),_:1})]),_:1})]),_:1})]),_:1})}const Ve=S(ie,[["render",se]]);export{Ve as default};
