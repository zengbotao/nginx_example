!function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);m.length;)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t,n,a,s,c,l=[],u=(r[e]?l.push(r[e]):0!==r[e]&&{about:1,"chunk-1be7fc98":1,"chunk-7a73a4f4":1,"chunk-f503f4b6":1}[e]&&l.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"4ea8ade4","chunk-069202e4":"31d6cfe0","chunk-1be7fc98":"52e6b8ed","chunk-24eb13c4":"31d6cfe0","chunk-2d0e2696":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-484cc8de":"31d6cfe0","chunk-7866e1fb":"31d6cfe0","chunk-7a73a4f4":"4ea8ade4","chunk-a33a61b8":"31d6cfe0","chunk-edd41c62":"31d6cfe0","chunk-f503f4b6":"b499dd27"}[e]+".css",o=i.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=(u=s[c]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var u,d=document.getElementsByTagName("style");for(c=0;c<d.length;c++)if((l=(u=d[c]).getAttribute("data-href"))===a||l===o)return t();var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){t=t&&t.target&&t.target.src||o;var a=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=t,delete r[e],m.parentNode.removeChild(m),n(a)},m.href=o,document.getElementsByTagName("head")[0].appendChild(m)})).then((function(){r[e]=0}))),o[e]);return 0!==u&&(u?l.push(u[2]):(c=new Promise((function(t,n){u=o[e]=[t,n]})),l.push(u[2]=c),(t=document.createElement("script")).charset="utf-8",t.timeout=120,i.nc&&t.setAttribute("nonce",i.nc),t.src=i.p+"js/"+({about:"about"}[c=e]||c)+"."+{about:"d6abdd77","chunk-069202e4":"76ecdda7","chunk-1be7fc98":"d8eb9cc0","chunk-24eb13c4":"be0fbace","chunk-2d0e2696":"cc750ca3","chunk-2d22d746":"bec47e66","chunk-484cc8de":"04124036","chunk-7866e1fb":"00b8dd2e","chunk-7a73a4f4":"7eff0de9","chunk-a33a61b8":"06cbd1bf","chunk-edd41c62":"f5491949","chunk-f503f4b6":"32091426"}[c]+".js",n=new Error,a=function(a){t.onerror=t.onload=null,clearTimeout(s);var r,i=o[e];0!==i&&(i&&(r=a&&("load"===a.type?"missing":a.type),a=a&&a.target&&a.target.src,n.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",n.name="ChunkLoadError",n.type=r,n.request=a,i[1](n)),o[e]=void 0)},s=setTimeout((function(){a({type:"timeout",target:t})}),12e4),t.onerror=t.onload=a,document.head.appendChild(t))),Promise.all(l)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw e};var c=(l=window.webpackJsonp=window.webpackJsonp||[]).push.bind(l);l.push=t;for(var l=l.slice(),u=0;u<l.length;u++)t(l[u]);var d=c;s.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"0f65":function(e,t,n){"use strict";n("c275")},"0f9a":function(e,t,n){"use strict";n.r(t);var a=n("1602"),r=n("5c96");t.default={state:{isLogin:!1,userInfo:null,userMenus:null,cachedTags:[]},getters:{getIsLogin(e){return e.isLogin},getUserInfo(e){return e.userInfo},getUserMenus(e){return e.userMenus},getTags(e){return e.cachedTags}},mutations:{delTag(e,t){var n=e.cachedTags.findIndex(e=>t.compName===e.compName);-1!==n&&e.cachedTags.splice(n,1)},addTag(e,t){e.cachedTags.find(e=>t.compName===e.compName)||e.cachedTags.push(t)},changeIsLogin(e,t){e.isLogin=t},changeUserInfo(e,t){e.userInfo=t},changeUserMenus(e,t){e.userMenus=t}},actions:{async doLogout({commit:e},t){var[,n]=await Object(a.c)();return n?r.Message.error("退出失败!!"):(e("changeIsLogin",!1),e("changeUserInfo",null),e("changeUserMenus",null),window.sessionStorage.setItem("token",""),1)}}}},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},1602:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s}));var a=n("b775");const r=e=>Object(a.a)(a.b.post("/user/login",{account:e.username,password:e.pass})),o=()=>Object(a.a)(a.b.post("/user/logout")),s=({username:e,password:t,permission:n})=>Object(a.a)(a.b.post("/permission/createUser",{account:e,password:t,role_id:n}))},"160f":function(e,t,n){},"1a5d":function(e,t,n){var a={"./401.vue":["8a54","chunk-f503f4b6"],"./404.vue":["8cdb","chunk-1be7fc98"],"./About.vue":["f820","chunk-2d22d746"],"./Home.vue":["bb51"],"./Login.vue":["a55b","chunk-7a73a4f4"],"./contract/index.vue":["7ffa","chunk-484cc8de"],"./input-manager/index.vue":["dc0e","chunk-7866e1fb"],"./loan-approve/end.vue":["68a6","chunk-edd41c62"],"./loan-approve/first.vue":["d9be","chunk-069202e4"],"./loan-input/index.vue":["a5b5","chunk-24eb13c4"],"./permission/create.vue":["7f1b","chunk-2d0e2696"],"./permission/list.vue":["33c5","chunk-a33a61b8"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="1a5d",e.exports=r},2:function(e,t){},"25ea":function(e,t,n){},"2daa":function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c}));const a=["/login"],r="jindu520",o=[{value:"man",label:"男"},{value:"woman",label:"女"}],s=[{value:"education",label:"教育"},{value:"finance",label:"金融"}],i=[{value:"married",label:"已婚"},{value:"unmarried",label:"未婚"}],c=[{value:"college",label:"大学"},{value:"highschool",label:"高中"}]},3:function(e,t){},4:function(e,t){},4360:function(e,t,n){"use strict";var a=n("8bbf"),r=(a=n.n(a),n("2f62"));a.a.use(r.a);const o=n("c653"),s=/.*\/(.*)\.js$/,i={},c=(o.keys().forEach(e=>{let t=s.exec(e);null!==t&&(t=t[1]),e=o(e),i[t]={namespaced:!0,...e.default}}),{state:{loadings:{}},mutations:{},actions:{},modules:i});for(let l=1;l<20;l++)c.state.loadings["tab"+l]=!1,c.mutations["settab"+l]=function({loadings:e},t){e["tab"+l]=t};t.a=new r.a.Store(c)},"4d8a":function(e,t,n){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);t=n("8bbf"),t=n.n(t);var a=n("2877"),r=Object(a.a)({},(function(){return(0,this._self._c)("router-view")}),[],!1,null,null,null).exports,o=n("a18c"),s=n("4360"),i=n("5c96"),c=n.n(i),l=(n("0fae"),n("160f"),n("cebe")),u=(l=n.n(l),"drag"),d={unbind:function(e){let t=e.getElementsByClassName("el-table__body-wrapper")[0];t.onmousedown=null},inserted:function(e,t,n){let a=e.getElementsByClassName("el-table__body-wrapper")[0];a.style.overflowX="hidden",a.style.cursor="grab",a.onmousedown=function(e){let t=e.clientX,n=a.scrollLeft;document.onmousemove=function(e){e=e.clientX-t,a.scrollLeft=n-e},document.onmouseup=function(){document.onmouseup=null,document.onmousemove=null}}}},m={install:function(e){e.directive(u,d)}},f={name:"GAsideMenu",props:{item:{type:Object,required:!0}}},h=Object(a.a)(f,(function(){var e,t=this,n=t._self._c;return t.item.children?n("el-submenu",{attrs:{index:t.item.path},scopedSlots:t._u([{key:"title",fn:function(){var e;return[t._v(t._s(null==(e=t.item)||null==(e=e.meta)?void 0:e.title))]},proxy:!0}])},t._l(t.item.children,(function(e,t){return n("GAsideMenu",{key:t,attrs:{item:e}})})),1):n("el-menu-item",{attrs:{index:t.item.path}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(null==(e=t.item)||null==(e=e.meta)?void 0:e.title))])])}),[],!1,null,"3879abdc",null).exports,p=(f={name:"GBreadcrumb",computed:{breadcrumbList(){return this.$route.matched.filter(e=>null==e||null==(e=e.meta)?void 0:e.title)}}},Object(a.a)(f,(function(){var e=this,t=e._self._c;return t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.breadcrumbList,(function(n,a){return t("el-breadcrumb-item",{key:a},[e.breadcrumbList.length-1===a?t("span",[e._v(e._s(null==n||null==(a=n.meta)?void 0:a.title))]):t("router-link",{attrs:{to:n}},[e._v(e._s(null==n||null==(a=n.meta)?void 0:a.title))])],1)})),1)}),[],!1,null,"269b77e0",null).exports),b=(f={name:"GDropdown",props:{title:{required:!0,type:String},items:{type:Array,required:!0}}},Object(a.a)(f,(function(){var e=this,t=e._self._c;return t("el-dropdown",{on:{command:function(t){return e.$emit("command",t)}}},[t("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.title)),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.items,(function(n,a){return t("el-dropdown-item",{key:a,attrs:{command:n.key}},[e._v(e._s(n.label))])})),1)],1)}),[],!1,null,null,null).exports),g=n("8890"),v=(f=n("2638"),n.n(f)),y=(f={name:"GTable",render(){const e=arguments[0];var{g_pageOptions:t,showPagination:n}=this;return e("div",[this.renderTable(),n&&this.renderPagination(t)])},methods:{handleCurrentChange(e){this.$emit("handleCurrentChange",e)},renderPagination(e){const t=this.$createElement;return t("el-pagination",v()([{on:{"current-change":this.handleCurrentChange,"size-change":e=>this.$emit("size-change",e)}},{attrs:e},{attrs:{layout:"total, sizes, prev, pager, next, jumper"}}]))},renderIndex(){const e=this.$createElement;return e("el-table-column",{attrs:{type:"index",label:"序号",width:"55",align:"center"}})},renderMultiSelect(){const e=this.$createElement;return e("el-table-column",{attrs:{"reserve-selection":!0,type:"selection",width:"55"}})},renderTable(){const e=this.$createElement,{columns:t,loadingTag:n,g_options:a,data:r,$store:{state:{loadings:o}}}=this;var s=[{name:"loading",modifiters:{gbox:!0},value:o[n]},{name:"drag"}],i=a["useIndex"],c=a["useMultiSelect"];return e("el-table",v()([{attrs:{id:"gbox"},on:{"selection-change":e=>this.$emit("selection-change",e)}},{directives:s},{attrs:{data:r}},{attrs:a}]),[i&&this.renderIndex(),c&&this.renderMultiSelect(),t&&t.map((t,n)=>e("GColumn",{key:n,attrs:{column:t},scopedSlots:this.$scopedSlots}))])}},computed:{g_options(){return Object.assign({},this.gOptions,this.options)},g_pageOptions(){return Object.assign({},this.gPageOptions,this.pageOptions)}},data(){return{gOptions:{stripe:!0,border:!1,fit:!0,showHeader:!0,rowKey:"id",useIndex:!0,useMultiSelect:!1},gPageOptions:{currentPage:1,pageSizes:[100,200,300,400],pageSize:100,total:400}}},props:{showPagination:{type:Boolean,default:()=>!0},loadingTag:{type:String,default:()=>""},options:{type:Object,default(){return this.gOptions}},pageOptions:{type:Object,default(){return this.gPageOptions}},data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}}},Object(a.a)(f,void 0,void 0,!1,null,null,null).exports),k=(f={name:"GColumn",methods:{renderTableColumns(e){return e.map((e,t)=>this.renderTableCol(e,t))},renderTableCol(e){var t,n;const a=this.$createElement;let r;return e.formatter&&(r={default:function(t){return a("div",{domProps:{innerHTML:e.formatter(t)}})}}),e.slot?null==(t=(n=this.$scopedSlots)[e.slot])?void 0:t.call(n,e):!e.isHide&&a("el-table-column",{attrs:{label:e.label,prop:e.prop,width:e.width},scopedSlots:r},[e.children&&0<e.children.length&&this.renderTableColumns(e.children)])}},props:{column:{type:Object,required:!0}},render(){return this.renderTableCol(this.column)}},Object(a.a)(f,void 0,void 0,!1,null,null,null).exports),w=n("ed08"),x=(f={name:"GSearchQuery",watch:{query(){this.$scopedSlots.default||this.debounceQuery()}},data(){return{query:"",debounceQuery:Object(w.b)(()=>{this.$emit("setValue",this.query)},1e3)}}},n("0f65"),Object(a.a)(f,(function(){var e=this,t=e._self._c;return t("el-row",[t("el-col",{attrs:{span:e.$scopedSlots.default?22:24}},[t("el-input",{attrs:{placeholder:"请输入名称",type:"text"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),t("el-col",{attrs:{span:2}},[e._t("default",null,{q:e.query})],2)],1)}),[],!1,null,"13538b85",null).exports);function O(e){return i.MessageBox.confirm(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>!0).catch(()=>(i.Message.error({type:"info",message:"操作已取消"}),!1))}a={install:function(e){e.component(h.name,h),e.component(p.name,p),e.component(b.name,b),e.component(g.a.name,g.a),e.component(y.name,y),e.component(k.name,k),e.component(x.name,x)}},f={install:function(e){Object.defineProperty(e.prototype,"confirm",{set(){},get(){return O}})}},n=n("8975"),t.a.use(c.a),t.a.use(m),t.a.use(a),t.a.use(f),t.a.use(n.a),t.a.prototype.$ajax=l.a,t.a.config.productionTip=!1,new t.a({router:o.a,store:s.a,render:e=>e(r)}).$mount("#app")},6:function(e,t){},6389:function(e,t){e.exports=VueRouter},7:function(e,t){},"74ee":function(e,t,n){"use strict";n("4d8a")},8:function(e,t){},8890:function(e,t,n){"use strict";var a=n("2638"),r=n.n(a);n("d9e2"),a={name:"GFormCreator",props:{conf:{type:Object,required:!0},nonCheck:{type:Boolean,default:()=>!1}},data(){return{form:{}}},created(){const{items:e,cards:t,rules:n}=this.conf;var a=this["nonCheck"];if(!a&&!n)throw new Error("看文档,哪个表单不验证啊？");this.rulesHandler(n),e?this.reaciveFileds(e):t&&t.forEach(e=>{e.children&&this.reaciveFileds(e.children)})},methods:{reaciveFileds(e){e.forEach(e=>{e.forEach(e=>{this.$set(this.form,e.key,e.value)})})},rulesHandler(e){for(var t in e){let n=e[t];n.forEach(e=>{e.validator&&(e.validator=e.validator.bind(this))})}},deepClone(e){return JSON.parse(JSON.stringify(e))},doSubmit(){var e=this.$listeners["submit"];this.validate(e)},validate(e){this.$refs.form.validate(t=>{e(!!t&&this.getData())})},getData(){return this.deepClone(this.form)},reset(){this.$refs.form.resetFields()},renderItem(e){const t=this.$createElement;switch(e.type){case"input":case"password":case"textarea":return t("el-input",r()([{},{attrs:e.attrs},{attrs:{type:e.type},model:{value:this.form[e.key],callback:t=>{this.$set(this.form,e.key,t)}}}]));case"radio":return e.options.map((n,a)=>t("el-radio",r()([{},{attrs:e.attrs},{key:a,attrs:{label:n.label},model:{value:this.form[e.key],callback:t=>{this.$set(this.form,e.key,t)}}}]),[n.text]));case"select":return t("el-select",r()([{},{attrs:e.attrs},{model:{value:this.form[e.key],callback:t=>{this.$set(this.form,e.key,t)}}}]),[e.options.map(e=>t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}}))]);case"datetime":return t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:this.form[e.key],callback:t=>{this.$set(this.form,e.key,t)}}})}},renderColums(e){const t=this.$createElement;return e.map(e=>t("el-col",{attrs:{xl:e.colspan,lg:e.colspan,md:12,sm:24,xs:24}},[t("el-form-item",{attrs:{label:e.label,prop:e.key}},[this.renderItem(e)])]))},renderRows(e){const t=this.$createElement;return e.map(e=>t("el-row",[" ",this.renderColums(e),"  "]))},renderCards(e){const t=this.$createElement;return e.map(e=>t("el-card",{class:"box-card"},[t("div",{slot:"header"},[t("span",[e.name])]),e.children&&this.renderRows(e.children)]))}},render(e){var{title:t,items:n,rules:a,cards:o}=this.conf,s=this["form"];return e("div",{class:"form-box"},[e("h1",[t]),t&&e("hr"),e("el-form",r()([{ref:"form"},{attrs:{model:s}},{attrs:{rules:a,"label-width":"80px"}}]),[o?this.renderCards(o):this.renderRows(n)]),e("div",{class:"btns clear-fix"},[this.$slots.default||e("div",[e("el-button",{attrs:{type:"primary"},on:{click:e=>this.doSubmit()}},["提交"]),e("el-button",{on:{click:e=>this.reset()}},["重置"])])])])}},n("a7d8"),n=n("2877"),n=Object(n.a)(a,void 0,void 0,!1,null,"1e8eacdb",null);t.a=n.exports},8975:function(e,t,n){"use strict";function a(e){return e<10?"0"+e:e}const r=e=>{let t=new Date(e);return t.getFullYear()+"-"+a(t.getMonth()+1)+"-"+a(t.getDate())+" "+a(t.getHours())+":"+a(t.getSeconds())+":"+a(t.getMinutes())};t.a={install:function(e){e.filter("birthday",r),e.filter("sex",e=>{switch(e){case"man":return"男";case"woman":return"女";default:return e}}),e.filter("education",e=>{switch(e){case"college":return"大学";case"highschool":return"高中";default:return e}}),e.filter("status",e=>{switch(e){case 0:return"进件";case 1:return"提交初审";case 2:return"初审通过";case 3:return"初审拒绝";case 4:return"提交终审";case 5:return"终审通过";case 6:return"终审拒绝";case 7:return"生成合同"}}),e.filter("statusColor",e=>{switch(e){case 0:return"success";case 1:return"";case 2:return"success";case 3:return"danger";case 4:return"warning";case 5:return"success";case 6:return"danger";case 7:return"success"}}),e.filter("contractText",e=>5<e?"已生成合同":"未生成合同"),e.filter("contractColor",e=>5<e?"success":"primary"),e.filter("role",e=>{switch(e){case"input":return"录入专员";case"administrator":return"管理员";case"approve":return"审批专员"}})}}},"8bbf":function(e,t){e.exports=Vue},9:function(e,t){},9709:function(e,t,n){"use strict";n("25ea")},a18c:function(e,t,n){"use strict";n("d9e2"),n("caad");var a=n("8bbf"),r=(a=n.n(a),n("6389")),o=(r=n.n(r),n("bb51")),s=n("2daa"),i=n("ed08"),c=n("4360"),l=n("cebe"),u=n.n(l),d=n("b775"),m=(l=n("2f62"),l={methods:{...Object(l.d)({delTag:"user/delTag"}),...Object(l.b)({doLogout:"user/doLogout"}),async doCommand(e){"logout"===e&&(await this.doLogout(),window.location.reload())}},computed:{...Object(l.c)({menus:"user/getUserMenus",tags:"user/getTags"}),getTagsCompName(){return this.tags.map(e=>e.compName)}},name:"Layout"},n("9709"),n("2877")),f=Object(m.a)(l,(function(){var e=this,t=e._self._c;return t("el-container",[t("el-aside",{attrs:{width:"240px"}},[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:"","default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},e._l(e.menus,(function(e,n){return t("GAsideMenu",{key:n,attrs:{item:e}})})),1)],1),t("el-container",[t("el-header",[t("div",{staticClass:"left"},[t("GBreadcrumb")],1),t("div",{staticClass:"right"},[t("GDropdown",{attrs:{title:"admin",items:[{key:"logout",label:"退出"}]},on:{command:e.doCommand}})],1)]),t("el-main",[t("div",{staticClass:"tags-box"},e._l(e.tags,(function(n,a){return t("el-tag",{key:a,attrs:{closable:""},on:{click:function(t){return e.$router.push({name:n.compName})},close:function(t){return e.delTag(n)}}},[e._v(e._s(n.title))])})),1),t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("keep-alive",{attrs:{max:40,include:e.getTagsCompName}},[t("router-view")],1)],1)],1),t("el-footer",[e._v("Footer")])],1)],1)}),[],!1,null,"4cd3a9db",null).exports;a.a.use(r.a);const h=r.a.prototype.push;r.a.prototype.push=function(e){return h.call(this,e).catch(e=>e)},m=[{path:"/",redirect:"/home",name:"Home",meta:{title:"首页"},component:f,children:[{path:"/home",component:o.default}]},{path:"/404",name:"NotFound",component:()=>n.e("chunk-1be7fc98").then(n.bind(null,"8cdb"))},{path:"/401",name:"Reject",component:()=>n.e("chunk-f503f4b6").then(n.bind(null,"8a54"))},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/login",name:"Login",component:()=>n.e("about").then(n.bind(null,"a55b"))}];const p=new r.a({routes:m});async function b(e,t){var[a,r]=await Object(d.a)(u.a.get("/menus.json",{responseType:"json"}));if(r)throw new Error("加载动态菜单出错"+r.message);let o=function e(t){return t.map(t=>{if("Layout"===t.component)t.component=f;else{const e=t.component;t.component=()=>n("1a5d")(`./${e}.vue`)}return t.children&&(t.children=e(t.children)),t})}(a.data);o.push({path:"*",redirect:{name:"NotFound"}}),o.forEach(e=>{p.addRoute(e)}),c.a.commit("user/changeUserMenus",a.data),e({...t,replace:!0})}p.beforeEach((e,t,n)=>{return s.f.includes(e.path)?n():(a=Object(i.a)())?(c.a.getters["user/getUserInfo"]||(c.a.commit("user/changeUserInfo",{username:a.account}),c.a.commit("user/changeIsLogin",!0)),c.a.getters["user/getUserMenus"]?(e.name&&c.a.commit("user/addTag",{title:null==e||null==(a=e.meta)?void 0:a.title,compName:e.name}),n()):b(n,e)):void n("/login?redirect="+e.path);var a}),t.a=p},a7d8:function(e,t,n){"use strict";n("f291")},b775:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n("5c96"),r=(t=n("cebe"),t=n.n(t),n("a18c")),o=n("4360");const s=t.a.create({baseURL:"/api"}),i=(s.interceptors.request.use(e=>{e.loadingTag&&o.a.commit("set"+e.loadingTag,!0);var t=window.sessionStorage.getItem("token");return t&&(e.headers.token=t),e},e=>Promise.reject(e)),s.interceptors.response.use(e=>{e.config.loadingTag&&o.a.commit("set"+e.config.loadingTag,!1);var t=null==e||null==(t=e.data)||null==(t=t.data)?void 0:t.token;return t&&window.sessionStorage.setItem("token",t),2e4===(null==e||null==(t=e.data)?void 0:t.code)?("string"==typeof(null==e||null==(t=e.data)?void 0:t.data)&&a.Message.success(null==e||null==(t=e.data)?void 0:t.data),"string"==typeof(null==e||null==(t=e.data)||null==(t=t.data)?void 0:t.info)&&a.Message.success(null==e||null==(t=e.data)||null==(t=t.data)?void 0:t.info)):603===(null==e||null==(t=e.data)?void 0:t.code)?(a.Notification.error({title:"错误",message:"token失效,请重新登录"}),r.a.replace("/401")):a.Notification.error({title:"错误",message:"响应错误"}),e},e=>(a.Message.error(e.Message),Promise.reject(e))),function(e){return e.then(e=>[e,void 0]).catch(e=>[void 0,e])})},bb51:function(e,t,n){"use strict";n.r(t),n("13d5");var a=n("ec1b"),r=(a=n.n(a),n("313e")),o=n.n(r);r={name:"Home",methods:{initCharts(){let e={};e.configParameters={rotate:{min:-90,max:90},align:{options:{left:"left",center:"center",right:"right"}},verticalAlign:{options:{top:"top",middle:"middle",bottom:"bottom"}},position:{options:["left","right","top","bottom","inside","insideTop","insideLeft","insideRight","insideBottom","insideTopLeft","insideTopRight","insideBottomLeft","insideBottomRight"].reduce((function(e,t){return e[t]=t,e}),{})},distance:{min:0,max:100}},e.config={rotate:90,align:"left",verticalAlign:"middle",position:"insideBottom",distance:15,onChange:function(){var t={rotate:e.config.rotate,align:e.config.align,verticalAlign:e.config.verticalAlign,position:e.config.position,distance:e.config.distance};this.chart2.setOption({series:[{label:t},{label:t},{label:t},{label:t}]})}};var t={show:!0,position:e.config.position,distance:e.config.distance,align:e.config.align,verticalAlign:e.config.verticalAlign,rotate:e.config.rotate,formatter:"{c}  {name|{a}}",fontSize:16,rich:{name:{}}};t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["Forest","Steppe","Desert","Wetland"]},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar","stack"]},restore:{show:!0},saveAsImage:{show:!0}}},xAxis:[{type:"category",axisTick:{show:!1},data:["2012","2013","2014","2015","2016"]}],yAxis:[{type:"value"}],series:[{name:"Forest",type:"bar",barGap:0,label:t,emphasis:{focus:"series"},data:[320,332,301,334,390]},{name:"Steppe",type:"bar",label:t,emphasis:{focus:"series"},data:[220,182,191,234,290]},{name:"Desert",type:"bar",label:t,emphasis:{focus:"series"},data:[150,232,201,154,190]},{name:"Wetland",type:"bar",label:t,emphasis:{focus:"series"},data:[98,77,101,99,40]}]};this.chart1=o.a.init(document.querySelector(".chart1")),this.chart2=o.a.init(document.querySelector(".chart2")),this.chart3=o.a.init(document.querySelector(".chart3")),this.chart1.setOption({title:{text:"第一个图表"},tooltip:{trigger:"axis"},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"Email",type:"line",stack:"Total",data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",data:[820,932,901,934,1290,1330,1320]}]}),this.chart2.setOption(t),this.chart3.setOption({angleAxis:{},radiusAxis:{type:"category",data:["Mon","Tue","Wed","Thu"],z:10},polar:{},series:[{type:"bar",data:[1,2,3,4],coordinateSystem:"polar",name:"A",stack:"a",emphasis:{focus:"series"}},{type:"bar",data:[2,4,6,8],coordinateSystem:"polar",name:"B",stack:"a",emphasis:{focus:"series"}},{type:"bar",data:[1,2,3,4],coordinateSystem:"polar",name:"C",stack:"a",emphasis:{focus:"series"}}],legend:{show:!0,data:["A","B","C"]}})},resize(){this.chart1.resize(),this.chart2.resize(),this.chart3.resize()}},mounted(){this.initCharts(),this.resizeCallback=this.resize.bind(this),window.addEventListener("resize",this.resizeCallback)},beforeDestroy(){window.removeEventListener("resize",this.resizeCallback)},data(){return{list:[{val:13594,title:"最高可借金额",color:"#67ca3a"},{val:9833,title:"回报率",color:"#ff6600"},{val:8888,title:"业绩领跑",color:"#f56c6c"},{val:6666,title:"安稳底薪战队",color:"#409eff"}]}},components:{CountTo:a.a}},n("74ee"),a=n("2877"),n=Object(a.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("el-row",{attrs:{gutter:10}},e._l(e.list,(function(n,a){return t("el-col",{key:a,attrs:{xl:6,lg:6,md:12,sm:24,xs:24}},[t("div",{staticClass:"dashboard-item",style:{background:n.color}},[t("p",[e._v(e._s(n.title))]),t("CountTo",{attrs:{startVal:0,endVal:n.val,duration:3e3}})],1)])})),1),e._m(0)],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"echarts-box"},[e("div",{staticClass:"chart1"}),e("div",{staticClass:"chart2"}),e("div",{staticClass:"chart3"})])}],!1,null,"660674fe",null);t.default=n.exports},c275:function(e,t,n){},c653:function(e,t,n){var a={"./user.js":"0f9a"};function r(e){return e=o(e),n(e)}function o(e){if(n.o(a,e))return a[e];throw(e=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",e}r.keys=function(){return Object.keys(a)},r.resolve=o,(e.exports=r).id="c653"},cebe:function(e,t){e.exports=axios},ed08:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l}));t=n("14b7");var a=n.n(t),r=n("2daa"),o=n("b775");const s=()=>{var e=i();return e?a.a.decode(e,r.d):null},i=()=>window.sessionStorage.getItem("token");function c(e,t=1e3){let n;return function(){clearTimeout(n),n=setTimeout(e,t)}}async function l(e,t){try{var n=await Object(o.b)({url:e,responseType:"blob"});{var a=n.data,r=t;a=window.URL.createObjectURL(a);let e=document.createElement("a");return e.href=a,e.download=r,e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e),void window.URL.revokeObjectURL(a)}}catch(e){}}},f291:function(e,t,n){}});