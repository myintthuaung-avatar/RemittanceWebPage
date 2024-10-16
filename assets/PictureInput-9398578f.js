import{_ as w,f as l,i as h,p as m,bT as d,C as o,b2 as b,bU as v,ag as p,E as u}from"./index-26f63e57.js";const x={name:"picture-input",props:{width:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},height:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},margin:{type:[String,Number],default:0},accept:{type:String,default:"image/*"},capture:{type:String,default:null},size:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},name:{type:String,default:null},id:{type:[String,Number],default:null},buttonClass:{type:String,default:"btn btn-primary button"},removeButtonClass:{type:String,default:"btn btn-secondary button secondary"},aspectButtonClass:{type:String,default:"btn btn-secondary button secondary"},prefill:{type:typeof File>"u"||typeof Blob>"u"?[String]:[String,File,Blob],default:""},prefillOptions:{type:Object,default:()=>({})},crop:{type:Boolean,default:!0},radius:{type:[String,Number],default:0},removable:{type:Boolean,default:!1},hideChangeButton:{type:Boolean,default:!1},autoToggleAspectRatio:{type:Boolean,default:!1},toggleAspectRatio:{type:Boolean,default:!1},changeOnClick:{type:Boolean,default:!0},plain:{type:Boolean,default:!1},zIndex:{type:Number,default:1e4},alertOnError:{type:Boolean,default:!0},customStrings:{type:Object,default:()=>({})}},watch:{prefill(){this.prefill?this.preloadImage(this.prefill,this.prefillOptions):this.removeImage()}},data(){return{imageSelected:!1,previewHeight:0,previewWidth:0,draggingOver:!1,canvasWidth:0,canvasHeight:0,strings:{upload:"<p>Your device does not support file uploading.</p>",drag:"Drag an image or <br>click here to select a file",tap:"Tap here to select a photo <br>from your gallery",change:"Change Photo",aspect:"Landscape/Portrait",remove:"Remove Photo",select:"Select a Photo",selected:"<p>Photo successfully selected!</p>",fileSize:"The file size exceeds the limit",fileType:"This file type is not supported."}}},mounted(){if(this.updateStrings(),this.prefill&&this.preloadImage(this.prefill,this.prefillOptions),this.$nextTick(()=>{window.addEventListener("resize",this.onResize),this.onResize()}),this.supportsPreview){this.pixelRatio=Math.round(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI);const t=this.$refs.previewCanvas;t.getContext&&(this.context=t.getContext("2d"),this.context.scale(this.pixelRatio,this.pixelRatio))}this.accept!=="image/*"&&(this.fileTypes=this.accept.split(","),this.fileTypes=this.fileTypes.map(t=>t.trim())),this.canvasWidth=this.width!=Number.MAX_SAFE_INTEGER?this.width:this.$refs.container.clientWidth,this.canvasHeight=this.height!=Number.MAX_SAFE_INTEGER?this.height:this.canvasWidth,this.previewWidth=this.canvasWidth,this.previewHeight=this.canvasHeight},beforeDestroy(){window.removeEventListener("resize",this.onResize)},methods:{updateStrings(){for(let t in this.customStrings)t in this.strings&&typeof this.customStrings[t]=="string"&&(this.strings[t]=this.customStrings[t])},onClick(){if(!this.imageSelected){this.selectImage();return}this.changeOnClick&&this.selectImage(),this.$emit("click")},onResize(){this.resizeCanvas()&&this.imageObject&&this.drawImage(this.imageObject)},onDragEnter(){this.supportsDragAndDrop&&(this.draggingOver=!0)},onDragLeave(){this.supportsDragAndDrop&&(this.draggingOver=!1)},onFileDrop(t){this.onDragLeave(),this.$refs.fileInput.files=t.target.files||t.dataTransfer.files,this.onFileChange(t)},onFileChange(t,e){const i=t.target.files||t.dataTransfer.files;if(i.length){if(i[0].size<=0||i[0].size>this.size*1024*1024){this.$emit("error",{type:"fileSize",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileSize+" ("+this.size+"MB)"}),this.alertOnError&&alert(this.strings.fileSize+" ("+this.size+"MB)");return}if(!(i[0].name===this.fileName&&i[0].size===this.fileSize&&this.fileModified===i[0].lastModified)){if(this.file=i[0],this.fileName=i[0].name,this.fileSize=i[0].size,this.fileModified=i[0].lastModified,this.fileType=i[0].type.split(";")[0],this.accept==="image/*"){if(this.fileType.substr(0,6)!=="image/")return}else if(this.fileTypes.indexOf(this.fileType)===-1){this.$emit("error",{type:"fileType",fileSize:this.fileSize,fileType:this.fileType,fileName:this.fileName,message:this.strings.fileType}),this.alertOnError&&alert(this.strings.fileType);return}this.imageSelected=!0,this.image="",this.supportsPreview?this.loadImage(i[0],e||!1):e?this.$emit("prefill"):this.$emit("change",this.image)}}},loadImage(t,e){this.getEXIFOrientation(t,i=>{this.setOrientation(i);let r=new FileReader;r.onload=s=>{this.image=s.target.result,this.imageObject=new Image,this.imageObject.onload=()=>{if(this.autoToggleAspectRatio){let n=this.getOrientation(this.canvasWidth,this.canvasHeight),a=this.getOrientation(this.imageObject.width,this.imageObject.height);n!==a&&this.rotateCanvas()}this.drawImage(this.imageObject)},this.imageObject.src=this.image},r.readAsDataURL(t)})},drawImage(t){this.imageWidth=t.width,this.imageHeight=t.height,this.imageRatio=t.width/t.height;let e=0,i=0,r=this.previewWidth,s=this.previewHeight;const n=this.previewWidth/this.previewHeight;this.crop?this.imageRatio>=n?(r=s*this.imageRatio,e=(this.previewWidth-r)/2):(s=r/this.imageRatio,i=(this.previewHeight-s)/2):this.imageRatio>=n?(s=r/this.imageRatio,i=(this.previewHeight-s)/2):(r=s*this.imageRatio,e=(this.previewWidth-r)/2);const a=this.$refs.previewCanvas;a.style.background="none",a.width=this.previewWidth*this.pixelRatio,a.height=this.previewHeight*this.pixelRatio,this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,a.width,a.height),this.rotate&&typeof this.imageObject.style.imageOrientation>"u"&&(this.context.translate(e*this.pixelRatio,i*this.pixelRatio),this.context.translate(r/2*this.pixelRatio,s/2*this.pixelRatio),this.context.rotate(this.rotate),e=-r/2,i=-s/2),this.context.drawImage(t,e*this.pixelRatio,i*this.pixelRatio,r*this.pixelRatio,s*this.pixelRatio)},selectImage(){this.$refs.fileInput.click()},removeImage(){this.$refs.fileInput.value="",this.$refs.fileInput.type="",this.$refs.fileInput.type="file",this.fileName="",this.fileType="",this.fileSize=0,this.fileModified=0,this.imageSelected=!1,this.image="",this.file=null,this.imageObject=null,this.$refs.previewCanvas.style.backgroundColor="rgba(200,200,200,.25)",this.$refs.previewCanvas.width=this.previewWidth*this.pixelRatio,this.$emit("remove")},rotateImage(){this.rotateCanvas(),this.imageObject&&this.drawImage(this.imageObject);let t=this.getOrientation(this.canvasWidth,this.canvasHeight);this.$emit("aspectratiochange",t)},resizeCanvas(){let t=this.canvasWidth/this.canvasHeight,e=this.$refs.container.clientWidth;return!e||!this.toggleAspectRatio&&!this.autoToggleAspectRatio&&e===this.containerWidth?!1:(this.containerWidth=e,this.previewWidth=Math.min(this.containerWidth-this.margin*2,this.canvasWidth),this.previewHeight=this.previewWidth/t,!0)},getOrientation(t,e){let i="square";return t>e?i="landscape":t<e&&(i="portrait"),i},switchCanvasOrientation(){const t=this.canvasWidth,e=this.canvasHeight;this.canvasWidth=e,this.canvasHeight=t},rotateCanvas(){this.switchCanvasOrientation(),this.resizeCanvas()},setOrientation(t){this.rotate=!1,t===8?this.rotate=-Math.PI/2:t===6?this.rotate=Math.PI/2:t===3&&(this.rotate=-Math.PI)},getEXIFOrientation(t,e){var i=new FileReader;i.onload=r=>{var s=new DataView(r.target.result);if(s.getUint16(0,!1)!==65496)return e(-2);for(var n=s.byteLength,a=2;a<n;){var g=s.getUint16(a,!1);if(a+=2,g===65505){if(s.getUint32(a+=2,!1)!==1165519206)return e(-1);var f=s.getUint16(a+=6,!1)===18761;a+=s.getUint32(a+4,f);var y=s.getUint16(a,f);a+=2;for(var c=0;c<y;c++)if(s.getUint16(a+c*12,f)===274)return e(s.getUint16(a+c*12+8,f))}else{if((g&65280)!==65280)break;a+=s.getUint16(a,!1)}}return e(-1)},i.readAsArrayBuffer(t.slice(0,65536))},preloadImage(t,e){let i=window.File;try{new i([],"")}catch{i=class extends Blob{constructor(a,g,f={}){super(a,f),this.lastModifiedDate=new Date,this.lastModified=+this.lastModifiedDate,this.name=g}}}if(e=Object.assign({},e),typeof t=="object"){this.imageSelected=!0,this.image="",this.supportsPreview?this.loadImage(t,!0):this.$emit("prefill");return}t.indexOf("data:")===-1&&(t.indexOf("?")!==-1?t+="&_="+new Date().getTime():t+="?_="+new Date().getTime());let r=new Headers;r.append("Accept","image/*"),fetch(t,{method:"GET",mode:"cors",headers:r}).then(s=>s.blob()).then(s=>{let n={target:{files:[]}};const a=e.fileName||t.split("/").slice(-1)[0];let g=e.mediaType||s.type||"image/"+(e.fileType||a.split("?")[0].split(".").slice(-1)[0].split("?")[0]);g=g.replace("jpg","jpeg"),g=g.replace("image/svg","image/svg+xml"),g==="image/svg"&&(g="image/svg+xml"),n.target.files[0]=new i([s],a,{type:g}),this.onFileChange(n,!0)}).catch(s=>{this.$emit("error",{type:"failedPrefill",message:"Failed loading prefill image: "+s}),this.alertOnError&&alert("Failed loading prefill image: "+s)})}},computed:{supportsUpload(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;const t=document.createElement("input");return t.type="file",!t.disabled},supportsPreview(){return window.FileReader&&!!window.CanvasRenderingContext2D},supportsDragAndDrop(){const t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&!("ontouchstart"in window||navigator.msMaxTouchPoints)},computedClasses(){const t={};return t["dragging-over"]=this.draggingOver,t},fontSize(){return Math.min(.04*this.previewWidth,21)+"px"}}},I={ref:"container",id:"picture-input",class:"picture-input"},C=["innerHTML"],S={key:1},O=["innerHTML"],R=["innerHTML"],T={key:2},z={key:1},D=["innerHTML"],W=["name","id","accept","capture"];function F(t,e,i,r,s,n){return l(),h("div",I,[n.supportsUpload?n.supportsPreview?(l(),h("div",S,[m("div",{class:"preview-container",style:v({maxWidth:s.previewWidth+"px",height:s.previewHeight+"px",borderRadius:i.radius+"%"})},[m("canvas",{ref:"previewCanvas",class:d(["picture-preview",n.computedClasses]),tabindex:"0",onDrag:e[0]||(e[0]=o(()=>{},["stop","prevent"])),onDragover:e[1]||(e[1]=o(()=>{},["stop","prevent"])),onDragstart:e[2]||(e[2]=o(()=>{},["stop","prevent"])),onDragend:e[3]||(e[3]=o(()=>{},["stop","prevent"])),onDragenter:e[4]||(e[4]=o((...a)=>n.onDragEnter&&n.onDragEnter(...a),["stop","prevent"])),onDragleave:e[5]||(e[5]=o((...a)=>n.onDragLeave&&n.onDragLeave(...a),["stop","prevent"])),onDrop:e[6]||(e[6]=o((...a)=>n.onFileDrop&&n.onFileDrop(...a),["stop","prevent"])),onClick:e[7]||(e[7]=o((...a)=>n.onClick&&n.onClick(...a),["prevent"])),onKeyup:e[8]||(e[8]=b((...a)=>n.onClick&&n.onClick(...a),["enter"])),style:v({height:s.previewHeight+"px",zIndex:parseInt(i.zIndex)+1})},null,38),!s.imageSelected&&!i.plain?(l(),h("div",{key:0,class:"picture-inner",style:v({top:-s.previewHeight+"px",marginBottom:-s.previewHeight+"px",fontSize:n.fontSize,borderRadius:i.radius+"%",zIndex:parseInt(i.zIndex)+2})},[n.supportsDragAndDrop?(l(),h("span",{key:0,class:"picture-inner-text",innerHTML:s.strings.drag},null,8,O)):(l(),h("span",{key:1,class:"picture-inner-text",innerHTML:s.strings.tap},null,8,R))],4)):p("",!0)],4),s.imageSelected&&!i.hideChangeButton?(l(),h("button",{key:0,onClick:e[9]||(e[9]=o((...a)=>n.selectImage&&n.selectImage(...a),["prevent"])),class:d(i.buttonClass),type:"button"},u(s.strings.change),3)):p("",!0),s.imageSelected&&i.removable?(l(),h("button",{key:1,onClick:e[10]||(e[10]=o((...a)=>n.removeImage&&n.removeImage(...a),["prevent"])),class:d(i.removeButtonClass),type:"button"},u(s.strings.remove),3)):p("",!0),s.imageSelected&&i.toggleAspectRatio&&i.width!==i.height?(l(),h("button",{key:2,onClick:e[11]||(e[11]=o((...a)=>n.rotateImage&&n.rotateImage(...a),["prevent"])),class:d(i.aspectButtonClass),type:"button"},u(s.strings.aspect),3)):p("",!0)])):(l(),h("div",T,[s.imageSelected?(l(),h("div",z,[m("div",{innerHTML:s.strings.selected},null,8,D),i.hideChangeButton?p("",!0):(l(),h("button",{key:0,onClick:e[13]||(e[13]=o((...a)=>n.selectImage&&n.selectImage(...a),["prevent"])),class:d(i.buttonClass),type:"button"},u(s.strings.change),3)),i.removable?(l(),h("button",{key:1,onClick:e[14]||(e[14]=o((...a)=>n.removeImage&&n.removeImage(...a),["prevent"])),class:d(i.removeButtonClass),type:"button"},u(s.strings.remove),3)):p("",!0)])):(l(),h("button",{key:0,onClick:e[12]||(e[12]=o((...a)=>n.selectImage&&n.selectImage(...a),["prevent"])),class:d(i.buttonClass),type:"button"},u(s.strings.select),3))])):(l(),h("div",{key:0,innerHTML:s.strings.upload},null,8,C)),m("input",{ref:"fileInput",type:"file",name:i.name,id:i.id,accept:i.accept,onChange:e[15]||(e[15]=(...a)=>n.onFileChange&&n.onFileChange(...a)),capture:i.capture},null,40,W)],512)}const H=w(x,[["render",F],["__scopeId","data-v-0d2ec02f"]]);export{H as P};