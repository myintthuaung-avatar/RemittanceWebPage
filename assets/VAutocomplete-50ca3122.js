import{c as l,L as ge,aM as we,b3 as Ce,b4 as Ge,Y as Ve,aa as be,r as _,aO as $,Z as O,$ as G,b5 as Se,a8 as Le,b6 as ke,w as z,n as Y,aV as $e,ap as Pe,z as Z,j as i,F,b7 as Te,ad as B,b8 as xe,b9 as J,s as Q,ba as Ae,ac as _e,u as Be,bb as Fe,av as Ie,bc as X,am as Re}from"./index-26f63e57.js";import{m as Me,b as Ne,u as Ue,c as Ee,d as Oe,V as ze}from"./DataTableHelper-234fa2d4.js";import{V as Ke}from"./VCheckboxBtn-5a600a8b.js";class He{GetRoleList(){return l.$http.get("/Dropdown/GetRole")}GetCompanyList(){return l.$http.get("/Dropdown/GetCompany")}GetDepartmentList(a){return l.$http.get("/Dropdown/GetDepartment?company_id="+a)}GetCurrencyList(){return l.$http.get("/DropDown/GetCurrency")}GetAccountList(){return l.$http.get("/DropDown/GetAccount")}GetCashBookTypeList(){return l.$http.get("/DropDown/GetAllCashBookType")}GetCountryList(){return l.$http.get("/DropDown/GetCountry")}GetStateDivisionByCountry(a){return l.$http.get("/DropDown/GetStateDivisonByCountry?country_id="+a)}GetStateDivisionList(){return l.$http.get("/DropDown/GetStateDivison")}GetCityListByStateDivision(a){return l.$http.get("/DropDown/GetCityByStateDivision?state_division_id="+a)}GetPurposeTranscationList(){return l.$http.get("/DropDown/GetTransactionpurpose")}GetCustomerTypeList(){return l.$http.get("/DropDown/GetCustomerType")}GetNetworkCodeList(){return l.$http.get("/DropDown/GetNetworkCode")}GetIdentityTypeList(){return l.$http.get("/DropDown/GetIdentityType")}GetChannelList(){return l.$http.get("/DropDown/GetChannel")}GetPaymentTypeList(){return l.$http.get("/DropDown/GetPaymentType")}GetPaymentList(a){return l.$http.get("/DropDown/GetPayment?paymenttype_id="+a)}GetPaymentListByCountry(a){return l.$http.get("/DropDown/GetPaymentByCountry?country_id="+a)}GetPaymentBranchListByPayment(a){return l.$http.get("/DropDown/GetPaymentBranchByPayment?payment_id="+a)}GetGetPaymentBranchList(a){return l.$http.get("/DropDown/GetPaymentBranch?payment_id="+a)}GetAccountTypeList(){return l.$http.get("/DropDown/GetDepositAccountType")}GetAccountList(){return l.$http.get("/DropDown/GetAccount")}GetAccountListByCompany(a){return l.$http.get("/DropDown/GetAccountByCompany?company_id="+a)}GetCompayList(){return l.$http.get("/DropDown/GetCompany")}GetGetBusinessTypeList(){return l.$http.get("/DropDown/GetBusinessType")}GetStateDivisionCode(){return l.$http.get("/DropDown/GetStateDivisionCode")}GetTownshipCode(a){return l.$http.get("/DropDown/GetTownshipCode?state_division_code="+a)}GetCitizenType(){return l.$http.get("/DropDown/GetCitizenType")}GetUserList(){return l.$http.get("DropDown/GetUser")}}const Je=new He;function je(e,a,n){if(a==null)return e;if(Array.isArray(a))throw new Error("Multiple matches is not implemented");return typeof a=="number"&&~a?i(F,null,[i("span",{class:"v-autocomplete__unmask"},[e.substr(0,a)]),i("span",{class:"v-autocomplete__mask"},[e.substr(a,n)]),i("span",{class:"v-autocomplete__unmask"},[e.substr(a+n)])]):e}const qe=ge({autoSelectFirst:{type:[Boolean,String]},search:String,...Me({filterKeys:["title"]}),...Ne(),...we(Ce({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ge({transition:!1})},"VAutocomplete"),Qe=Ve()({name:"VAutocomplete",props:qe(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,a){let{slots:n}=a;const{t:I}=be(),D=_(),w=$(!1),C=$(!0),P=$(!1),K=_(),H=_(),R=O(e,"menu"),d=G({get:()=>R.value,set:t=>{var u;R.value&&!t&&((u=K.value)!=null&&u.ΨopenChildren)||(R.value=t)}}),s=$(-1),ee=G(()=>{var t;return(t=D.value)==null?void 0:t.color}),j=G(()=>d.value?e.closeText:e.openText),{items:M,transformIn:te,transformOut:ne}=Se(e),{textColorClasses:le,textColorStyles:ae}=Le(ee),p=O(e,"search",""),r=O(e,"modelValue",[],t=>te(t===null?[null]:Re(t)),t=>{const u=ne(t);return e.multiple?u:u[0]??null}),ue=G(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),L=ke(),{filteredItems:N,getMatches:oe}=Ue(e,M,()=>C.value?"":p.value),g=G(()=>e.hideSelected?N.value.filter(t=>!r.value.some(u=>u.value===t.value)):N.value),re=G(()=>r.value.map(t=>t.props.value)),T=G(()=>{var u;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&p.value===((u=g.value[0])==null?void 0:u.title))&&g.value.length>0&&!C.value&&!P.value}),U=G(()=>e.hideNoData&&!M.value.length||e.readonly||(L==null?void 0:L.isReadonly.value)),E=_(),{onListScroll:ie,onListKeydown:se}=Ee(E,D);function ce(t){e.openOnClear&&(d.value=!0),p.value=""}function ve(){U.value||(d.value=!0)}function de(t){U.value||(w.value&&(t.preventDefault(),t.stopPropagation()),d.value=!d.value)}function pe(t){var y,o,m;if(e.readonly||L!=null&&L.isReadonly.value)return;const u=D.value.selectionStart,v=r.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(d.value=!0),["Escape"].includes(t.key)&&(d.value=!1),T.value&&["Enter","Tab"].includes(t.key)&&V(g.value[0]),t.key==="ArrowDown"&&T.value&&((y=E.value)==null||y.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(t.key)){if(s.value<0){t.key==="Backspace"&&!p.value&&(s.value=v-1);return}const c=s.value,h=r.value[s.value];h&&!h.props.disabled&&V(h),s.value=c>=v-1?v-2:c}if(t.key==="ArrowLeft"){if(s.value<0&&u>0)return;const c=s.value>-1?s.value-1:v-1;r.value[c]?s.value=c:(s.value=-1,D.value.setSelectionRange((o=p.value)==null?void 0:o.length,(m=p.value)==null?void 0:m.length))}if(t.key==="ArrowRight"){if(s.value<0)return;const c=s.value+1;r.value[c]?s.value=c:(s.value=-1,D.value.setSelectionRange(0,0))}}}function me(t){if(X(D.value,":autofill")||X(D.value,":-webkit-autofill")){const u=M.value.find(v=>v.title===t.target.value);u&&V(u)}}function fe(){var t;w.value&&(C.value=!0,(t=D.value)==null||t.focus())}function ye(t){w.value=!0,setTimeout(()=>{P.value=!0})}function he(t){P.value=!1}function De(t){(t==null||t===""&&!e.multiple)&&(r.value=[])}const k=$(!1);function V(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!t.props.disabled)if(e.multiple){const v=r.value.findIndex(y=>e.valueComparator(y.value,t.value));if(v===-1)r.value=[...r.value,t];else{const y=[...r.value];y.splice(v,1),r.value=y}}else r.value=u?[t]:[],k.value=!0,p.value=u?t.title:"",d.value=!1,C.value=!0,Y(()=>k.value=!1)}return z(w,(t,u)=>{var v;t!==u&&(t?(k.value=!0,p.value=e.multiple?"":String(((v=r.value.at(-1))==null?void 0:v.props.title)??""),C.value=!0,Y(()=>k.value=!1)):(!e.multiple&&p.value==null?r.value=[]:T.value&&!P.value&&!r.value.some(y=>{let{value:o}=y;return o===g.value[0].value})&&V(g.value[0]),d.value=!1,p.value="",s.value=-1))}),z(p,t=>{!w.value||k.value||(t&&(d.value=!0),C.value=!t)}),z(d,()=>{if(!e.hideSelected&&d.value&&r.value.length){const t=g.value.findIndex(u=>r.value.some(v=>u.value===v.value));$e&&window.requestAnimationFrame(()=>{var u;t>=0&&((u=H.value)==null||u.scrollToIndex(t))})}}),Pe(()=>{const t=!!(e.chips||n.chip),u=!!(!e.hideNoData||g.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),v=r.value.length>0,y=Z.filterProps(e);return i(Z,B({ref:D},y,{modelValue:p.value,"onUpdate:modelValue":[o=>p.value=o,De],focused:w.value,"onUpdate:focused":o=>w.value=o,validationValue:r.externalValue,counterValue:ue.value,dirty:v,onChange:me,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":d.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!n.selection,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:v?void 0:e.placeholder,"onClick:clear":ce,"onMousedown:control":ve,onKeydown:pe}),{...n,default:()=>i(F,null,[i(Te,B({ref:K,modelValue:d.value,"onUpdate:modelValue":o=>d.value=o,activator:"parent",contentClass:"v-autocomplete__content",disabled:U.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:fe},e.menuProps),{default:()=>[u&&i(xe,{ref:E,selected:re.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onKeydown:se,onFocusin:ye,onFocusout:he,onScrollPassive:ie,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var o,m,c;return[(o=n["prepend-item"])==null?void 0:o.call(n),!g.value.length&&!e.hideNoData&&(((m=n["no-data"])==null?void 0:m.call(n))??i(J,{title:I(e.noDataText)},null)),i(Oe,{ref:H,renderless:!0,items:g.value},{default:h=>{var W;let{item:f,index:b,itemRef:S}=h;const q=B(f.props,{ref:S,key:b,active:T.value&&b===0?!0:void 0,onClick:()=>V(f)});return((W=n.item)==null?void 0:W.call(n,{item:f,index:b,props:q}))??i(J,q,{prepend:x=>{let{isSelected:A}=x;return i(F,null,[e.multiple&&!e.hideSelected?i(Ke,{key:f.value,modelValue:A,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependIcon&&i(Q,{icon:f.props.prependIcon},null)])},title:()=>{var x,A;return C.value?f.title:je(f.title,(x=oe(f))==null?void 0:x.title,((A=p.value)==null?void 0:A.length)??0)}})}}),(c=n["append-item"])==null?void 0:c.call(n)]}})]}),r.value.map((o,m)=>{function c(S){S.stopPropagation(),S.preventDefault(),V(o,!1)}const h={"onClick:close":c,onMousedown(S){S.preventDefault(),S.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=t?!!n.chip:!!n.selection,b=f?Ae(t?n.chip({item:o,index:m,props:h}):n.selection({item:o,index:m})):void 0;if(!(f&&!b))return i("div",{key:o.value,class:["v-autocomplete__selection",m===s.value&&["v-autocomplete__selection--selected",le.value]],style:m===s.value?ae.value:{}},[t?n.chip?i(_e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[b]}):i(ze,B({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},h),null):b??i("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&m<r.value.length-1&&i("span",{class:"v-autocomplete__selection-comma"},[Be(",")])])])})]),"append-inner":function(){var h;for(var o=arguments.length,m=new Array(o),c=0;c<o;c++)m[c]=arguments[c];return i(F,null,[(h=n["append-inner"])==null?void 0:h.call(n,...m),e.menuIcon?i(Q,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:de,onClick:Fe,"aria-label":I(j.value),title:I(j.value)},null):void 0])}})}),Ie({isFocused:w,isPristine:C,menu:d,search:p,filteredItems:N,select:V},D)}});export{Je as D,Qe as V};