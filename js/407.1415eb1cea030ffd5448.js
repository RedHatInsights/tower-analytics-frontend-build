(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[407],{34407:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ve,paths:()=>be});var r=n(92950),a=n.n(r),o=n(334),i=n(20806),l=n(29163),s=n(58788),u=n(86350),c=n(48716),d=n(39173),p=n(69595),m=n(45697),f=n.n(m),h=n(35397),y=n(94550),g=n(12613),b=n(53677),v=n(77388),_=n(53345),k=n(29587),E=n(9771),w=n(48236),x=n(83061);const P=function(e){var t=e.api,n=e.children;return!t||t.isLoading?a().createElement(w.Z,null):t.error?a().createElement(E.Z,{message:t.error.error}):t.isSuccess?Array.isArray(t.result)&&0===t.result.length||0===Object.keys(t.result).length?a().createElement(x.Z,null):a().createElement(a().Fragment,null,n):null};var O=n(45994),Z=n(91354),j=n(21048),C=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},D=function(){return(D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},A=function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},F=(0,l.ZP)(s.CardBody)(H||(H=C(["\n  & .pf-c-toolbar,\n  & .pf-c-toolbar__content {\n    padding: 0;\n  }\n"],["\n  & .pf-c-toolbar,\n  & .pf-c-toolbar__content {\n    padding: 0;\n  }\n"]))),q=(0,l.ZP)(y.Tr)(z||(z=C(["\n  & td:first-child {\n    width: 50px;\n  }\n"],["\n  & td:first-child {\n    width: 50px;\n  }\n"]))),T=[{title:"4",value:4},{title:"6",value:6},{title:"8",value:8},{title:"10",value:10}],R=["elapsed"],I=[],S=function(e,t){return"id"===t&&-1===e[t]},$=function(e,t){return S(e,t)?{backgroundColor:k.global_disabled_color_300.value}:{}},L=function(e){var t,n,o,i,l,u,c=e.defaultParams,d=e.extraAttributes,p=e.readData,m=e.readOptions,f=e.schemaFnc,k=(0,j.Hm)("non-unique-report",c,["limit","offset"]),E=(0,b.K)(k),w=E.queryParams,x=E.setFromPagination,C=E.setFromToolbar,L=(0,v.ZP)((0,r.useCallback)((function(){return p(w)}),[w]),{}),G=L.request,H=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(L,["request"]),z=(0,v.ZP)((0,r.useCallback)((function(){return m(w)}),[w]),{}),K=z.result,M=z.request,W=(0,r.useState)([]),Y=W[0],B=W[1];(0,r.useEffect)((function(){K.sort_options&&B(A(A([],d),K.sort_options))}),[K,d]);var N=f((null===(t=Y.find((function(e){return e.key===w.sort_options})))||void 0===t?void 0:t.value)||"Label Y",w.sort_options);(0,r.useEffect)((function(){G(),M()}),[w]);var X,U=function(e,t,n){var r;C("sort_order",n),C("sort_options",null===(r=Y[t])||void 0===r?void 0:r.key)};return a().createElement(s.Card,null,a().createElement(F,null,a().createElement(O.Z,{categories:K,filters:w,qsConfig:k,setFilters:C,pagination:a().createElement(g.Z,{count:null===(o=null===(n=H.result)||void 0===n?void 0:n.meta)||void 0===o?void 0:o.count,perPageOptions:T,params:{limit:w.limit,offset:w.offset},qsConfig:k.defaultParams,setPagination:x,isCompact:!0})}),a().createElement(P,{api:H},a().createElement(h.ZP,{schema:N,functions:(X=H.result,D(D({},h.wk),{fetchFnc:function(){return new Promise((function(e){e(X)}))}}))}),a().createElement(y.TableComposable,{"aria-label":"Report Table",variant:y.TableVariant.compact},a().createElement(y.Thead,null,a().createElement(q,null,Y.map((function(e){var t=e.key,n=e.value;return a().createElement(y.Th,D({key:t},function(e){var t;return(null===(t=null==K?void 0:K.sort_options)||void 0===t?void 0:t.map((function(e){return e.key}))).includes(e)?{sort:{sortBy:{index:Y.findIndex((function(e){return e.key===w.sort_options}))||0,direction:w.sort_order||"none"},onSort:U,columnIndex:Y.findIndex((function(t){return t.key===e}))}}:{}}(t)),n)})))),a().createElement(y.Tbody,null,null===(i=H.result.meta)||void 0===i?void 0:i.legend.map((function(e){return a().createElement(q,{key:e.id,style:$(e,"id")},Y.map((function(t){var n=t.key;return a().createElement(y.Td,{key:e.id+"-"+n},function(e,t){return S(e,t)?"-":R.includes(t)?(0,_.yH)(e[t]):I.includes(t)?(0,Z.Z)(+e[t]):""+e[t]}(e,n))})))})))))),a().createElement(s.CardFooter,null,a().createElement(g.Z,{count:null===(u=null===(l=H.result)||void 0===l?void 0:l.meta)||void 0===u?void 0:u.count,perPageOptions:T,params:{limit:w.limit,offset:w.offset},qsConfig:k.defaultParams,setPagination:x,variant:s.PaginationVariant.bottom})))};L.propTypes={defaultParams:f().any,extraAttributes:f().arrayOf(f().exact({key:f().string.isRequired,value:f().string.isRequired}).isRequired).isRequired,readData:f().func.isRequired,readOptions:f().func.isRequired,schemaFnc:f().func.isRequired};const G=L;var H,z,K=n(64866),M="Executive";const W={name:"Hosts changed by job template",description:"The number of hosts changed by a job template in a specified time window.\n\nYou can use this report to find discrepancies in the host change rate at a particular time, helping you drill down to when and why hosts were unreachable at a particular time.",categories:[M],report:{defaultParams:{limit:6,offset:0,attributes:["total_unique_host_count","total_unique_host_changed_count"],group_by:"template",group_by_time:!0,granularity:"monthly",sort_options:"total_unique_host_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},extraAttributes:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],readData:K.og,readOptions:K.FW,schemaFnc:function(e,t){return[{id:1,kind:h.$v.wrapper,type:h.yD.chart,parent:null,props:{height:400,padding:{top:10,right:100},domainPadding:{y:25},themeColor:h.nz.multiOrdered},xAxis:{label:"Date",tickFormat:"formatDateAsDayMonth"},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:h.nw.vertical,position:h.St.right},tooltip:{}},{id:2,kind:h.$v.group,parent:1,template:{id:0,kind:h.$v.simple,type:h.oX.line,parent:0,props:{x:"created_date",y:t},tooltip:{standalone:!0}}}]}}},Y={name:"Changes made by job template",description:"The total count of changes made by each job template in a specified time window.\n\nYou can use this report to ensure the correct number of changes are made per hostname, as well as see which job templates are doing the most changes to your infrastructure.",categories:[M],report:{defaultParams:{limit:6,offset:0,attributes:["host_count","changed_host_count","host_task_count","host_task_changed_count"],group_by:"template",group_by_time:!0,granularity:"monthly",sort_options:"changed_host_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},extraAttributes:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],readData:K.Ij,readOptions:K.ZW,schemaFnc:function(e,t){return[{id:1,kind:h.$v.wrapper,type:h.yD.chart,parent:null,props:{height:400,padding:{top:10,right:100},domainPadding:{y:25},themeColor:h.nz.multiOrdered},xAxis:{label:"Date",tickFormat:"formatDateAsDayMonth"},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:h.nw.vertical,position:h.St.right},tooltip:{}},{id:2,kind:h.$v.group,parent:1,template:{id:0,kind:h.$v.simple,type:h.oX.line,parent:0,props:{x:"created_date",y:t},tooltip:{standalone:!0}}}]}}};var B={name:"Job template run rate",description:"The number of times a job template has ran in a specified time window.\n\nYou can use this report to be able to tell which playbooks are running most frequently, allowing you to see which groups in your organization are running Ansible the most.",categories:[M],report:{defaultParams:{limit:6,offset:0,attributes:["failed_count","successful_count","total_count"],group_by:"template",group_by_time:!0,granularity:"monthly",sort_options:"total_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},extraAttributes:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],readData:K.Ij,readOptions:K.ZW,schemaFnc:function(e,t){return[{id:1,kind:h.$v.wrapper,type:h.yD.chart,parent:null,props:{height:400,padding:{top:10,right:100},domainPadding:{y:25},themeColor:h.nz.multiOrdered},xAxis:{label:"Date",tickFormat:"formatDateAsDayMonth"},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:h.nw.vertical,position:h.St.right},tooltip:{}},{id:2,kind:h.$v.group,parent:1,template:{id:0,kind:h.$v.simple,type:h.oX.line,parent:0,props:{x:"created_date",y:t},tooltip:{standalone:!0}}}]}}},N=function(){return(N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},X=[W,Y,B].map((function(e,t){return N({id:t+1},e)})),U={name:"Unknown",description:"Unknown",categories:[]};const V=X;var J,Q,ee=function(){return(ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},te=l.ZP.p(re||(J=["\n  max-width: 70em;\n  padding-top: 8px;\n"],Q=["\n  max-width: 70em;\n  padding-top: 8px;\n"],Object.defineProperty?Object.defineProperty(J,"raw",{value:Q}):J.raw=Q,re=J));const ne=function(){var e=function(e){var t;return null!==(t=X.find((function(t){return t.id===e})))&&void 0!==t?t:U}(+(0,o.useParams)().id),t=e.name,n=e.description,r=e.report,i=[{title:"Reports",navigate:be.get}];return a().createElement(a().Fragment,null,a().createElement(c.Z,null,a().createElement(p.Z,{items:i}),a().createElement(d.Z,{title:t}),a().createElement(te,null,n)),a().createElement(u.Z,null,a().createElement(s.Card,null,r&&a().createElement(G,ee({},r)))))};var re,ae,oe,ie,le=n(32465),se=(0,l.ZP)(s.CardTitle)(ae||(ae=(0,le.Z)(["\n  word-break: break-word;\n"]))),ue=l.ZP.small(oe||(oe=(0,le.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  color: #6a6e73;\n  white-space: pre-line;\n"]))),ce=(0,l.ZP)(s.Label)(ie||(ie=(0,le.Z)(["\n  margin-right: 10px;\n"]))),de=function(e){var t=e.report,n=t.id,r=t.description,i=t.name,l=t.categories;return a().createElement(s.Card,null,a().createElement(s.CardHeader,null,a().createElement(s.CardHeaderMain,null,a().createElement(se,null,a().createElement(o.Link,{to:be.getDetails(n)},i)))),a().createElement(s.CardBody,null,r?a().createElement(ue,null,r):null),a().createElement(s.CardFooter,null,l.map((function(e,t){return a().createElement(ce,{key:t},e)}))))};de.propTypes={report:f().object};const pe=de;var me,fe,he=l.ZP.div(me||(me=(0,le.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 76px);\n"]))),ye=(0,l.ZP)(u.Z)(fe||(fe=(0,le.Z)(["\n  flex-grow: 1;\n"])));const ge=function(){return a().createElement(he,null,a().createElement(c.Z,null,a().createElement(d.Z,{title:"Reports"})),a().createElement(ye,null,a().createElement(s.Gallery,{hasGutter:!0,minWidths:{sm:"307px",md:"307px",lg:"307px",xl:"307px","2xl":"307px"}},V.map((function(e){return a().createElement(pe,{key:e.id,report:e})})))))};var be={get:""+i.n.reports,details:i.n.reports+"/:id",getDetails:function(e){return i.n.reports+"/"+e}};const ve=function(){return a().createElement(o.Switch,null,a().createElement(o.Route,{exact:!0,path:be.get},a().createElement(ge,null)),a().createElement(o.Route,{path:be.details},a().createElement(ne,null)))}}}]);
//# sourceMappingURL=../sourcemaps/407.035fd5f0bf8ff2166576.js.map