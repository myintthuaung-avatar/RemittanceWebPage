import{R as T,S as c}from"./role.service-94031ecc.js";import{_ as S,f as b,G as D,k as l,j as t,H as k,I,u as d,E as R,B as _,q as f,C as p,s as g,D as F,x as V,V as n,l as w,p as h,z as A,A as L,J as M,e as C,ay as N,af as v,ad as B,ak as U,b2 as $}from"./index-26f63e57.js";import{A as y}from"./company-96ffbb87.js";import{D as z}from"./DataTableHelper-234fa2d4.js";import"./VCheckboxBtn-5a600a8b.js";const G={data(){return{formname:"",dialog:!1,model:new T,namerule:[a=>!!a||"Please Fill Role Name !"]}},methods:{Show(a){this.dialog=!0,a=="edit"?this.formname="Edit Role Entry":this.formname="Role Entry"},ValidateModel(){return this.$refs.form.validate()},SaveOrUpdate(){var a=this;a.ValidateModel(),a.valid==!0&&c.SaveOrUpdate(a.model).then(e=>{if(e.data){var s=e.data.messages[0];e.data.success?(a.$root.AlertDialog.Show({message:s,color:"success"}),a.$emit("AfterSaved"),a.ClearData()):a.$root.AlertDialog.Show({message:s,color:"error"})}})},ClearData(){this.model.name="",this.dialog=!1},ClearCancel(){this.model.name="",this.transaction_daterule=!1}}};function H(a,e,s,i,o,r){return b(),D(M,{persistent:"",modelValue:o.dialog,"onUpdate:modelValue":e[4]||(e[4]=m=>o.dialog=m),width:"50%"},{default:l(()=>[t(V,null,{default:l(()=>[t(k,{dark:"",color:"rgb(0 208 250)"},{default:l(()=>[t(I,{dark:""},{default:l(()=>[d(R(o.formname),1)]),_:1}),t(_),t(f,{onClick:e[0]||(e[0]=p(m=>r.ClearData(),["stop"])),icon:""},{default:l(()=>[t(g,null,{default:l(()=>e[5]||(e[5]=[d("mdi-close")])),_:1})]),_:1})]),_:1}),t(F,{onSubmit:p(r.SaveOrUpdate,["prevent"]),autocomplete:"off",ref:"form",modelValue:a.valid,"onUpdate:modelValue":e[3]||(e[3]=m=>a.valid=m)},{default:l(()=>[t(V,{flat:""},{default:l(()=>[t(n,{cols:"12",md:"12",class:"mt-8"},{default:l(()=>[t(w,{dense:""},{default:l(()=>[t(n,{cols:"12",md:"12"},{default:l(()=>[t(w,{dense:""},{default:l(()=>[t(n,{cols:"12",md:"4"},{default:l(()=>e[6]||(e[6]=[h("label",{class:"font-weight-regular"},[d("Name"),h("span",{class:"text-red"},"*")],-1)])),_:1}),t(n,{cols:"12",md:"5"},{default:l(()=>[t(A,{modelValue:o.model.name,"onUpdate:modelValue":e[1]||(e[1]=m=>o.model.name=m),variant:"outlined",density:"compact",rules:o.namerule},null,8,["modelValue","rules"])]),_:1}),t(n,{cols:"12",md:"9"},{default:l(()=>[t(L,{class:"text-right"},{default:l(()=>[t(_),t(f,{type:"submit",size:"small",variant:"outlined",color:"primary"},{default:l(()=>e[7]||(e[7]=[d("Save")])),_:1}),t(f,{dark:"",size:"small",variant:"outlined",color:"warning",onClick:e[2]||(e[2]=p(m=>r.ClearCancel(),["stop"]))},{default:l(()=>e[8]||(e[8]=[d("Clear")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit","modelValue"])]),_:1})]),_:1},8,["modelValue"])}const K=S(G,[["render",H],["__scopeId","data-v-5b96a7a6"]]),O={components:{Entry:K,DataTableHelper:z},data(){return{excelloading:!1,loading:!0,selected:[],model:new y,headers:[{title:"Action",width:140,key:"id"},{title:"Role Name",key:"name",width:220}]}},computed:{getTableHeaders(){let a=[];return this.showActionButtons===!1&&a.push("actions"),this.headers.filter(e=>!a.includes(e.value))},getSel(){return this.selected.length}},methods:{GetAllData(a){return this.model.status=-1,c.GetAll(a,this.model)},loadItems({page:a,itemsPerPage:e,sortBy:s}){this.loading=!0,FakeAPI.fetch({page:a,itemsPerPage:e,sortBy:s}).then(({items:i,total:o})=>{this.serverItems=i,this.totalItems=o,this.loading=!1})},ResetFilter(){this.model=new y,this.model.status=-1,this.$refs.DataTable.Reload(!0)},ShowLoading(a){this.$refs.DataTable.loading=a},NewItem(){this.$refs.EntryModal.Show("new")},EditItem(a){var e=this;e.ShowLoading(!0),c.GetById(a.id).then(s=>{window.console.log(s.data),e.$refs.EntryModal.model=s.data,e.$refs.EntryModal.disabled=!0,e.ShowLoading(!1),e.$refs.EntryModal.Show("edit")})},DeleteItem(a){var e=this;e.$root.ConfirmBoxModal.open().then(s=>{s&&(e.ShowLoading(!0),c.Delete(a.id).then(i=>{if(i.data){var o=i.data.messages[0];i.data.success?(e.$root.AlertDialog.Show({message:o,color:"success"}),e.ResetFilter()):e.$root.AlertDialog.Show({message:o,color:"error"})}},i=>{console.error(i),e.ShowLoading(!1)}))})},Filter(){this.$refs.DataTable.Reload(!0)}}};function P(a,e,s,i,o,r){const m=C("DataTableHelper"),E=C("Entry");return b(),D(N,null,{default:l(()=>[t(w,{dense:""},{default:l(()=>[t(n,{cols:"12",md:"12"},{default:l(()=>[t(V,null,{title:l(()=>e[2]||(e[2]=[d(" Role List ")])),default:l(()=>[t(n,null,{default:l(()=>[t(k,{density:"compact",color:"white",class:"mb-2"},{default:l(()=>[t(n,{cols:"12",md:"2"},{default:l(()=>[t(v,{location:"bottom"},{activator:l(({props:u})=>[t(f,B({size:"small",variant:"outlined",color:"#000080",onClick:r.NewItem},u),{default:l(()=>e[3]||(e[3]=[d(" New")])),_:2},1040,["onClick"])]),default:l(()=>[e[4]||(e[4]=h("span",{class:"text-center"},"Entry",-1))]),_:1})]),_:1}),t(n,{cols:"12",md:"4"}),t(n,{cols:"12",md:"5"},{default:l(()=>[t(U,null,{default:l(()=>[t(A,{elevation:0,density:"compact",modelValue:o.model.name,"onUpdate:modelValue":e[0]||(e[0]=u=>o.model.name=u),variant:"solo",label:"Search","single-line":"","hide-details":"",clearable:"","onClick:clear":r.ResetFilter,onKeyup:$(r.Filter,["enter"])},null,8,["modelValue","onClick:clear","onKeyup"])]),_:1})]),_:1})]),_:1}),t(m,{ref:"DataTable",headers:o.headers,dataLoader:r.GetAllData,show_select:!1,modelValue:o.selected,"onUpdate:modelValue":e[1]||(e[1]=u=>o.selected=u)},{"item.id":l(({item:u})=>[t(f,{variant:"text",icon:"",size:"x-small",onClick:x=>r.EditItem(u),color:"warning"},{default:l(()=>[t(g,null,{default:l(()=>e[5]||(e[5]=[d("mdi-pencil")])),_:1}),t(v,{activator:"parent",location:"bottom"},{default:l(()=>e[6]||(e[6]=[d("Edit")])),_:1})]),_:2},1032,["onClick"]),t(f,{variant:"text",icon:"",size:"small",onClick:x=>r.DeleteItem(u),color:"red"},{default:l(()=>[t(g,null,{default:l(()=>e[7]||(e[7]=[d("mdi-delete-outline")])),_:1}),t(v,{activator:"parent",location:"bottom"},{default:l(()=>e[8]||(e[8]=[d("Delete")])),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["headers","dataLoader","modelValue"]),t(E,{onAfterSaved:r.ResetFilter,ref:"EntryModal"},null,8,["onAfterSaved"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const X=S(O,[["render",P]]);export{X as default};