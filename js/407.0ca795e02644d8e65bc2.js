(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[407],{34407:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_e,paths:()=>ve});var r=n(92950),a=n.n(r),o=n(334),i=n(20806),l=n(29163),s=n(58788),u=n(86350),c=n(48716),d=n(39173),m=n(69595),p=n(45697),f=n.n(p),h=n(35397),y=n(94550),g=n(12613),b=n(53677),v=n(77388),_=n(53345),k=n(29587),x=n(9771),w=n(48236),E=n(83061);const P=function(e){var t=e.api,n=e.children;return!t||t.isLoading?a().createElement(w.Z,null):t.error?a().createElement(x.Z,{message:t.error.error}):t.isSuccess?Array.isArray(t.result)&&0===t.result.length||0===Object.keys(t.result).length?a().createElement(E.Z,null):a().createElement(a().Fragment,null,n):null};var O=n(45994),Z=n(91354),F=n(21048),j=n(10001),A=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},C=function(){return(C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},T=function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},q=(0,l.ZP)(s.CardBody)(H||(H=A(["\n  & .pf-c-toolbar,\n  & .pf-c-toolbar__content {\n    padding: 0;\n  }\n"],["\n  & .pf-c-toolbar,\n  & .pf-c-toolbar__content {\n    padding: 0;\n  }\n"]))),D=(0,l.ZP)(y.Tr)(z||(z=A(["\n  & td:first-child {\n    width: 50px;\n  }\n"],["\n  & td:first-child {\n    width: 50px;\n  }\n"]))),R=[{title:"4",value:4},{title:"6",value:6},{title:"8",value:8},{title:"10",value:10}],I=["elapsed"],S=[],$=function(e,t){return"id"===t&&-1===e[t]},L=function(e,t){return $(e,t)?{backgroundColor:k.global_disabled_color_300.value}:{}},Y=function(e){var t,n,o,i,l,u=e.defaultParams,c=e.extraAttributes,d=e.readData,m=e.readOptions,p=e.schemaFnc,f=(0,F.Hm)("non-unique-report",u,["limit","offset"]),k=(0,b.K)(f),x=k.queryParams,w=k.setFromPagination,E=k.setFromToolbar,A=(0,v.ZP)((0,r.useCallback)((function(){return d(x)}),[x]),{}),Y=A.request,G=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(A,["request"]),H=(0,v.ZP)((0,r.useCallback)((function(){return m(x)}),[x]),{}),z=H.result,K=H.request,M=(0,r.useState)([]),W=M[0],B=M[1];(0,r.useEffect)((function(){z.sort_options&&B(T(T([],c),z.sort_options))}),[z,c]);var N,X=p((null===(t=W.find((function(e){return e.key===x.sort_options})))||void 0===t?void 0:t.value)||"Label Y",x.sort_options,"yearly"===(N=x.granularity)?"formatAsYear":"monthly"===N?"formatAsMonth":"daily"===N?"formatDateAsDayMonth":void 0);(0,r.useEffect)((function(){Y(),K()}),[x]);var U=function(e,t,n){var r;E("sort_order",n),E("sort_options",null===(r=W[t])||void 0===r?void 0:r.key)};return a().createElement(s.Card,null,a().createElement(q,null,a().createElement(O.Z,{categories:z,filters:x,qsConfig:f,setFilters:E,pagination:a().createElement(g.Z,{count:null===(o=null===(n=G.result)||void 0===n?void 0:n.meta)||void 0===o?void 0:o.count,perPageOptions:R,params:{limit:x.limit,offset:x.offset},qsConfig:f.defaultParams,setPagination:w,isCompact:!0})}),a().createElement(P,{api:G},function(e,t,n,r){var o,i,l;return e.isSuccess&&0===(null===(o=e.result.meta)||void 0===o?void 0:o.count)?a().createElement(j.Z,null):a().createElement(a().Fragment,null,a().createElement(h.ZP,{schema:t,functions:(l=e.result,C(C({},h.wk),{axisFormat:C(C({},h.wk.axisFormat),{formatAsYear:function(e){return Intl.DateTimeFormat("en",{year:"numeric"}).format(new Date(e))},formatAsMonth:function(e){return Intl.DateTimeFormat("en",{month:"long"}).format(new Date(e))}}),fetchFnc:function(){return new Promise((function(e){e(l)}))}}))}),a().createElement(y.TableComposable,{"aria-label":"Report Table",variant:y.TableVariant.compact},a().createElement(y.Thead,null,a().createElement(D,null,n.map((function(e){var t=e.key,n=e.value;return a().createElement(y.Th,C({key:t},r(t)),n)})))),a().createElement(y.Tbody,null,null===(i=e.result.meta)||void 0===i?void 0:i.legend.map((function(e){return a().createElement(D,{key:e.id,style:L(e,"id")},n.map((function(t){var n=t.key;return a().createElement(y.Td,{key:e.id+"-"+n},function(e,t){return $(e,t)?"-":I.includes(t)?(0,_.yH)(e[t]):S.includes(t)?(0,Z.Z)(+e[t]):""+e[t]}(e,n))})))})))))}(G,X,W,(function(e){var t;return(null===(t=null==z?void 0:z.sort_options)||void 0===t?void 0:t.map((function(e){return e.key}))).includes(e)?{sort:{sortBy:{index:W.findIndex((function(e){return e.key===x.sort_options}))||0,direction:x.sort_order||"none"},onSort:U,columnIndex:W.findIndex((function(t){return t.key===e}))}}:{}})))),a().createElement(s.CardFooter,null,a().createElement(g.Z,{count:null===(l=null===(i=G.result)||void 0===i?void 0:i.meta)||void 0===l?void 0:l.count,perPageOptions:R,params:{limit:x.limit,offset:x.offset},qsConfig:f.defaultParams,setPagination:w,variant:s.PaginationVariant.bottom})))};Y.propTypes={defaultParams:f().any,extraAttributes:f().arrayOf(f().exact({key:f().string.isRequired,value:f().string.isRequired}).isRequired).isRequired,readData:f().func.isRequired,readOptions:f().func.isRequired,schemaFnc:f().func.isRequired};const G=Y;var H,z,K=n(64866),M="Executive";const W={name:"Hosts changed by job template",description:"The number of hosts changed by a job template in a specified time window.\n\nYou can use this report to find discrepancies in the host change rate at a particular time, helping you drill down to when and why hosts were unreachable at a particular time.",categories:[M],report:{defaultParams:{limit:6,offset:0,attributes:["total_unique_host_count","total_unique_host_changed_count"],group_by:"template",group_by_time:!0,granularity:"monthly",quick_date_range:"last_6_months",sort_options:"total_unique_host_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},extraAttributes:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],readData:K.og,readOptions:K.FW,schemaFnc:function(e,t,n){return[{id:1,kind:h.$v.wrapper,type:h.yD.chart,parent:null,props:{height:400,padding:{top:10,right:100},domainPadding:{y:25},themeColor:h.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:h.nw.vertical,position:h.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,customFnc:function(e){return e.name+": "+e.y}}},{id:2,kind:h.$v.group,parent:1,template:{id:0,kind:h.$v.simple,type:h.oX.line,parent:0,props:{x:"created_date",y:t}}}]}}},B={name:"Changes made by job template",description:"The total count of changes made by each job template in a specified time window.\n\nYou can use this report to ensure the correct number of changes are made per hostname, as well as see which job templates are doing the most changes to your infrastructure.",categories:[M],report:{defaultParams:{limit:6,offset:0,attributes:["host_count","changed_host_count","host_task_count","host_task_changed_count"],group_by:"template",group_by_time:!0,granularity:"monthly",quick_date_range:"last_6_months",sort_options:"changed_host_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},extraAttributes:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],readData:K.Ij,readOptions:K.ZW,schemaFnc:function(e,t,n){return[{id:1,kind:h.$v.wrapper,type:h.yD.chart,parent:null,props:{height:400,padding:{top:10,right:100},domainPadding:{y:25},themeColor:h.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:h.nw.vertical,position:h.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,customFnc:function(e){return e.name+": "+e.y}}},{id:2,kind:h.$v.group,parent:1,template:{id:0,kind:h.$v.simple,type:h.oX.line,parent:0,props:{x:"created_date",y:t}}}]}}};var N={name:"Job template run rate",description:"The number of times a job template has ran in a specified time window.\n\nYou can use this report to be able to tell which playbooks are running most frequently, allowing you to see which groups in your organization are running Ansible the most.",categories:[M],report:{defaultParams:{limit:6,offset:0,attributes:["failed_count","successful_count","total_count"],group_by:"template",group_by_time:!0,granularity:"monthly",quick_date_range:"last_6_months",sort_options:"total_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},extraAttributes:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],readData:K.Ij,readOptions:K.ZW,schemaFnc:function(e,t,n){return[{id:1,kind:h.$v.wrapper,type:h.yD.chart,parent:null,props:{height:400,padding:{top:10,right:100},domainPadding:{y:25},themeColor:h.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:h.nw.vertical,position:h.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,customFnc:function(e){return e.name+": "+e.y}}},{id:2,kind:h.$v.group,parent:1,template:{id:0,kind:h.$v.simple,type:h.oX.line,parent:0,props:{x:"created_date",y:t}}}]}}},X=function(){return(X=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},U=[W,B,N].map((function(e,t){return X({id:t+1},e)})),V={name:"Unknown",description:"Unknown",categories:[]};const J=U;var Q,ee,te=function(){return(te=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ne=l.ZP.p(ae||(Q=["\n  max-width: 70em;\n  padding-top: 8px;\n"],ee=["\n  max-width: 70em;\n  padding-top: 8px;\n"],Object.defineProperty?Object.defineProperty(Q,"raw",{value:ee}):Q.raw=ee,ae=Q));const re=function(){var e=function(e){var t;return null!==(t=U.find((function(t){return t.id===e})))&&void 0!==t?t:V}(+(0,o.useParams)().id),t=e.name,n=e.description,r=e.report,i=[{title:"Reports",navigate:ve.get}];return a().createElement(a().Fragment,null,a().createElement(c.Z,null,a().createElement(m.Z,{items:i}),a().createElement(d.Z,{title:t}),a().createElement(ne,null,n)),a().createElement(u.Z,null,a().createElement(s.Card,null,r&&a().createElement(G,te({},r)))))};var ae,oe,ie,le,se=n(32465),ue=(0,l.ZP)(s.CardTitle)(oe||(oe=(0,se.Z)(["\n  word-break: break-word;\n"]))),ce=l.ZP.small(ie||(ie=(0,se.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  color: #6a6e73;\n  white-space: pre-line;\n"]))),de=(0,l.ZP)(s.Label)(le||(le=(0,se.Z)(["\n  margin-right: 10px;\n"]))),me=function(e){var t=e.report,n=t.id,r=t.description,i=t.name,l=t.categories;return a().createElement(s.Card,null,a().createElement(s.CardHeader,null,a().createElement(s.CardHeaderMain,null,a().createElement(ue,null,a().createElement(o.Link,{to:ve.getDetails(n)},i)))),a().createElement(s.CardBody,null,r?a().createElement(ce,null,r):null),a().createElement(s.CardFooter,null,l.map((function(e,t){return a().createElement(de,{key:t},e)}))))};me.propTypes={report:f().object};const pe=me;var fe,he,ye=l.ZP.div(fe||(fe=(0,se.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 76px);\n"]))),ge=(0,l.ZP)(u.Z)(he||(he=(0,se.Z)(["\n  flex-grow: 1;\n"])));const be=function(){return a().createElement(ye,null,a().createElement(c.Z,null,a().createElement(d.Z,{title:"Reports"})),a().createElement(ge,null,a().createElement(s.Gallery,{hasGutter:!0,minWidths:{sm:"307px",md:"307px",lg:"307px",xl:"307px","2xl":"307px"}},J.map((function(e){return a().createElement(pe,{key:e.id,report:e})})))))};var ve={get:""+i.n.reports,details:i.n.reports+"/:id",getDetails:function(e){return i.n.reports+"/"+e}};const _e=function(){return a().createElement(o.Switch,null,a().createElement(o.Route,{exact:!0,path:ve.get},a().createElement(be,null)),a().createElement(o.Route,{path:ve.details},a().createElement(re,null)))}}}]);
//# sourceMappingURL=../sourcemaps/407.dfe2e3b4ad8bddec4d18.js.map