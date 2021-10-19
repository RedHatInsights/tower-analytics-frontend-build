"use strict";(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[903],{71903:(e,t,n)=>{n.r(t),n.d(t,{default:()=>nt});var a=n(92950),r=n.n(a),o=n(86235),l=n(29163),i=n(86350),s=n(46336),u=n(48716),c=n(39173),d=n(69595),p=n(86445),m=n(65460),g=n(53345),_=n(91354),h=n(58788),y=n(94592),f=n(13784);const b=function(e){var t,n,a,o,l,i,s,u,c,d,m,g,_,b,v,k,E,x=e.isExpanded,w=e.item,T=w?{ok:null!==(t=null==w?void 0:w.successful_count)&&void 0!==t?t:0,skipped:null!==(n=null==w?void 0:w.skipped_count)&&void 0!==n?n:0,failed:null!==(a=null==w?void 0:w.failed_count)&&void 0!==a?a:0,error:null!==(o=null==w?void 0:w.error_count)&&void 0!==o?o:0}:null,A=w?{ok:null!==(l=null==w?void 0:w.average_host_task_ok_count_per_host)&&void 0!==l?l:0,skipped:null!==(i=null==w?void 0:w.average_host_task_skipped_count_per_host)&&void 0!==i?i:0,changed:null!==(s=null==w?void 0:w.average_host_task_changed_count_per_host)&&void 0!==s?s:0,failed:null!==(u=null==w?void 0:w.average_host_task_failed_count_per_host)&&void 0!==u?u:0,unreachable:null!==(c=null==w?void 0:w.average_host_task_unreachable_count_per_host)&&void 0!==c?c:0}:null,F=w?{ok:null!==(d=null==w?void 0:w.ok_host_count)&&void 0!==d?d:0,skipped:null!==(m=null==w?void 0:w.skipped_host_count)&&void 0!==m?m:0,changed:null!==(g=null==w?void 0:w.changed_host_count)&&void 0!==g?g:0,failed:null!==(_=null==w?void 0:w.failed_host_count)&&void 0!==_?_:0,unreachable:null!==(b=null==w?void 0:w.unreachable_host_count)&&void 0!==b?b:0}:null;return r().createElement(p.Tr,{isExpanded:x},r().createElement(p.Td,{colSpan:6},r().createElement(p.ExpandableRowContent,null,r().createElement(h.Flex,null,r().createElement(h.FlexItem,null,r().createElement("strong",null,"Job status")),r().createElement(h.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Jobs"),"  ",null!==(v=null==w?void 0:w.total_count)&&void 0!==v?v:0)),r().createElement(y.Z,{categoryCount:T,categoryColor:f.ss,showPercent:!0}),r().createElement(h.Flex,null,r().createElement(h.FlexItem,null,r().createElement("strong",null,"All Host status")),r().createElement(h.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Hosts"),"  ",null!==(k=null==w?void 0:w.host_count)&&void 0!==k?k:0)),r().createElement(y.Z,{categoryCount:F,categoryColor:f.ss,showPercent:!0}),r().createElement(h.Flex,null,r().createElement(h.FlexItem,null,r().createElement("strong",null,"All Task status")),r().createElement(h.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Tasks"),"  ",null!==(E=null==w?void 0:w.host_task_count)&&void 0!==E?E:0)),r().createElement(y.Z,{categoryCount:A,categoryColor:f.ss,showPercent:!0}),r().createElement(h.Divider,{component:"div",style:{marginTop:"2rem",marginBottom:"1.5rem"}}),function(e){var t=e.most_failed_tasks;if(null!=t)return r().createElement(r().Fragment,null,r().createElement("p",null,r().createElement("strong",null,"Most failed tasks")),r().createElement("br",null),r().createElement(h.Grid,{hasGutter:!0},t.slice(0,t.length).map((function(e,t){var n,a,o,l,i,s,u={passed:null!==(n=null==e?void 0:e.passed_host_count)&&void 0!==n?n:0,failed:null!==(a=null==e?void 0:e.failed_host_count)&&void 0!==a?a:0,unreachable:null!==(o=null==e?void 0:e.unreachable_host_count)&&void 0!==o?o:0},c={passed:null!==(l=null==e?void 0:e.successful_count)&&void 0!==l?l:0,failed:null!==(i=null==e?void 0:e.failed_count)&&void 0!==i?i:0,unfinished:null!==(s=null==e?void 0:e.unfinished_count)&&void 0!==s?s:0};return r().createElement(h.Grid,{hasGutter:!0,key:t},r().createElement(h.GridItem,null,r().createElement(h.DescriptionList,{isHorizontal:!0},function(e){return[{label:"Task name",value:e.task_name},{label:"Module name",value:e.module_name}]}(e).map((function(e){var t=e.label,n=e.value;return r().createElement(h.DescriptionListGroup,{key:t},r().createElement(h.DescriptionListTerm,null,t),r().createElement(h.DescriptionListDescription,null,n))})))),r().createElement(h.GridItem,null,r().createElement(h.Flex,null,r().createElement(h.FlexItem,null,r().createElement("strong",null,"Host status")),r().createElement(h.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Hosts"),"  ",function(e){return parseInt(e.passed_host_count)+parseInt(e.failed_host_count)+parseInt(e.unreachable_host_count)}(e)),r().createElement(h.FlexItem,null,r().createElement("strong",null,"Task status")),r().createElement(h.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Tasks"),"  ",function(e){return parseInt(e.successful_count)+parseInt(e.failed_count)+parseInt(e.unfinished_count)}(e)))),r().createElement(h.GridItem,{lg:6,md:12,key:"hosts-"+t},r().createElement(y.Z,{categoryCount:u,categoryColor:f.ss,showPercent:!0})),r().createElement(h.GridItem,{lg:6,md:12,key:"tasks-"+t},r().createElement(y.Z,{categoryCount:c,categoryColor:f.ss,showPercent:!0})))}))))}(w),r().createElement(h.DescriptionList,{isHorizontal:!0,columnModifier:{lg:"3Col"}},function(e){var t,n;return[{label:"Clusters",value:null!==(t=e.total_cluster_count)&&void 0!==t?t:0},{label:"Organizations",value:null!==(n=e.total_org_count)&&void 0!==n?n:0}]}(w).map((function(e){var t=e.label,n=e.value;return r().createElement(h.DescriptionListGroup,{key:t},r().createElement(h.DescriptionListTerm,null,t),r().createElement(h.DescriptionListDescription,null,n))}))))))};var v=["elapsed"],k=[],E=function(e,t){return"id"===t&&-1===e[t]};const x=function(e){var t,n=e.legendEntry,o=e.headers,l=e.expandRows,i=(0,a.useState)(!1),s=i[0],u=i[1];return r().createElement(r().Fragment,null,r().createElement(p.Tr,{style:(t=n,"id",E(t,"id")?{backgroundColor:m.global_disabled_color_300.value}:{})},l&&r().createElement(p.Td,{expand:{rowIndex:+n.id,isExpanded:s,onToggle:function(){return u(!s)}}}),o.map((function(e){var t=e.key;return r().createElement(p.Td,{key:n.id+"-"+t},function(e,t){return function(e,t){return"id"===t&&-2===e[t]}(e,t)||E(e,t)?"-":v.includes(t)?(0,g.yH)(+e[t]):k.includes(t)?(0,_.Z)(+e[t]):""+e[t]}(n,t))}))),l&&r().createElement(b,{isExpanded:s,item:n}))};var w=function(){return w=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},w.apply(this,arguments)};const T=function(e){var t=e.legend,n=e.headers,a=e.getSortParams,o=void 0===a?function(){return{}}:a,l=e.expandRows,i=void 0!==l&&l;return r().createElement(p.TableComposable,{"aria-label":"Report Table",variant:p.TableVariant.compact},r().createElement(p.Thead,null,r().createElement(p.Tr,null,i&&r().createElement(p.Th,null),n.map((function(e){var t=e.key,n=e.value;return r().createElement(p.Th,w({key:t},o(t),{"data-testid":t}),n)})))),r().createElement(p.Tbody,null,t.map((function(e){return r().createElement(x,{key:e.id,legendEntry:e,headers:n,expandRows:i})}))))};var A=n(91738),F=function(){return F=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},F.apply(this,arguments)},P=function(e){return F(F({},A.wk),{axisFormat:F(F({},A.wk.axisFormat),{formatAsYear:function(e){return Intl.DateTimeFormat("en",{year:"numeric"}).format(new Date(e))},formatAsMonth:function(e){return Intl.DateTimeFormat("en",{month:"long"}).format(new Date(e))}}),fetchFnc:function(){return new Promise((function(t){t(e)}))}})};const C=function(e){var t=e.schema,n=e.data;return r().createElement(A.ZP,{schema:t,functions:P(n)})};var Z=n(12613),j=n(45625),D=n(77388),O=n(9771),I=n(48236),L=n(83061);const q=function(e){var t=e.api,n=e.children;return!t||t.isLoading?r().createElement(I.Z,null):t.error?r().createElement(O.Z,{message:t.error.error}):t.isSuccess?Array.isArray(t.result)&&0===t.result.length||0===Object.keys(t.result).length?r().createElement(L.Z,null):r().createElement(r().Fragment,null,n):null};var G=n(45994),R=n(70885),z=n(45697),S=n.n(z),$=n(98478),H=n(84564),X=n(64866),N=n(55411),Y=n(23071),B=function(e){var t,n,o,l=e.slug,i=e.data,s=e.y,u=e.label,c=e.xTickFormat,d=(0,a.useState)(!1),p=(0,R.Z)(d,2),m=p[0],g=p[1],_=(0,D.ZP)((function(e){return(0,X.$w)({slug:l,data:e,y:s,label:u,x_tick_format:c})}),null),y=_.error,f=_.isLoading,b=_.request,v=null==y||null===(t=y.error)||void 0===t||null===(n=t.detail)||void 0===n?void 0:n.name,k=null!==(o=null==v?void 0:v.at(0))&&void 0!==o?o:"Download PDF version of report";return(0,a.useEffect)((function(){y&&g(!0)}),[y]),r().createElement(r().Fragment,null,r().createElement(h.Tooltip,{position:h.TooltipPosition.top,content:k},r().createElement(h.Button,{variant:y?h.ButtonVariant.link:h.ButtonVariant.plain,"aria-label":k,onClick:function(){return b(i)},isDanger:!!y},f&&r().createElement(h.Spinner,{isSVG:!0,size:"md"}),!f&&y&&r().createElement(H.ZP,null),!f&&!y&&r().createElement($.ZP,null))),r().createElement(N.Z,{isOpen:m,title:"PDF download error!",onClose:function(){g(!1)}},r().createElement(Y.Z,{error:v})))};B.propTypes={slug:S().string.isRequired,data:S().object.isRequired,y:S().string.isRequired,label:S().string.isRequired,xTickFormat:S().string.isRequired};const K=B;var M,W,V=n(65317),J=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},Q=(0,l.ZP)(h.CardBody)(te||(M=["\n  & .pf-c-toolbar,\n  & .pf-c-toolbar__content {\n    padding: 0;\n  }\n"],W=["\n  & .pf-c-toolbar,\n  & .pf-c-toolbar__content {\n    padding: 0;\n  }\n"],Object.defineProperty?Object.defineProperty(M,"raw",{value:W}):M.raw=W,te=M)),U=[{title:"4",value:4},{title:"6",value:6},{title:"8",value:8},{title:"10",value:10}];const ee=function(e){var t,n,o=e.slug,l=e.defaultParams,i=e.defaultTableHeaders,s=e.tableAttributes,u=e.expandedAttributes,c=e.availableChartTypes,d=e.readData,p=e.readOptions,m=e.schemaFnc,_=(0,V.ye)(V.GA.pdfDownloadButton),y=(0,j.Kx)(l),f=y.queryParams,b=y.setFromPagination,v=y.setFromToolbar,k=(0,D.ZP)((0,a.useCallback)((function(){return d(f)}),[f]),{meta:{count:0,legend:[]}}),E=k.request,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(k,["request"]),w=(0,D.ZP)((function(){return p(f)}),{sort_options:[]}),A=w.result,F=w.request;(0,a.useEffect)((function(){E(),F()}),[f]);var P,O=(0,a.useState)(c[0]),I=O[0],L=O[1],R=J(J([],i,!0),s?A.sort_options.filter((function(e){var t=e.key;return s.includes(t)})):A.sort_options,!0),z={y:f.sort_options,label:(null===(n=null===(t=A.sort_options)||void 0===t?void 0:t.find((function(e){return e.key===f.sort_options})))||void 0===n?void 0:n.value)||"Label Y",xTickFormat:(P=f.granularity,"yearly"===P?"formatAsYear":"monthly"===P?"formatAsMonth":"daily"===P?"formatDateAsDayMonth":""),chartType:I},S=[c.length>1&&r().createElement(h.ToggleGroup,{"aria-label":"Chart type toggle",key:"chart-toggle"},c.map((function(e){return r().createElement(h.ToggleGroupItem,{key:e,text:(0,g.kC)(e)+" Chart",buttonId:e,isSelected:e===I,onChange:function(){return L(e)}})}))),_&&r().createElement(K,{key:"download-button",slug:o,data:x.result,y:z.y,label:z.label,xTickFormat:z.xTickFormat})];return r().createElement(h.Card,null,r().createElement(Q,null,r().createElement(G.Z,{categories:A,filters:f,setFilters:v,pagination:r().createElement(Z.Z,{count:x.result.meta.count,perPageOptions:U,params:{limit:+f.limit,offset:+f.offset},setPagination:b,isCompact:!0}),additionalControls:S}),R&&r().createElement(q,{api:x},r().createElement(C,{schema:m(z.label,z.y,z.xTickFormat,z.chartType),data:x.result}),r().createElement(T,{legend:x.result.meta.legend,headers:R,getSortParams:function(e){var t,n=null===(t=null==A?void 0:A.sort_options)||void 0===t?void 0:t.map((function(e){return e.key}));return(null==n?void 0:n.includes(e))?{sort:{sortBy:{index:R.findIndex((function(e){return e.key===f.sort_options}))||0,direction:f.sort_order||"none"},onSort:function(e,t,n){var a;v("sort_order",n),v("sort_options",null===(a=R[t])||void 0===a?void 0:a.key)},columnIndex:R.findIndex((function(t){return t.key===e}))}}:{}},expandRows:u.length>0}))),r().createElement(h.CardFooter,null,r().createElement(Z.Z,{count:x.result.meta.count,perPageOptions:U,params:{limit:+f.limit,offset:+f.offset},setPagination:b,variant:h.PaginationVariant.bottom})))};var te,ne="Executive",ae=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},re="hosts_changed_by_job_template",oe=["total_unique_host_count","total_unique_host_changed_count"],le=[];const ie={slug:re,name:"Hosts changed by job template",description:"The number of hosts changed by a job template in a specified time window.\n\nYou can use this report to find discrepancies in the host change rate at a particular time, helping you drill down to when and why hosts were unreachable at a particular time.",categories:[ne],report:{slug:re,defaultParams:{limit:6,offset:0,attributes:ae(ae([],oe,!0),le,!0),group_by:"template",group_by_time:!0,granularity:"monthly",quick_date_range:"last_6_months",sort_options:"total_unique_host_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],tableAttributes:oe,expandedAttributes:le,availableChartTypes:[A.oX.line,A.oX.bar],readData:X.og,readOptions:X.FW,schemaFnc:function(e,t,n,a){return[{id:1,kind:A.$v.wrapper,type:A.yD.chart,parent:null,props:{height:400,padding:{top:40,bottom:85,right:90,left:90},domainPadding:{y:25,x:a==A.oX.bar?85:0},themeColor:A.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n,style:{axisLabel:{padding:50}}},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:60}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:A.nw.vertical,position:A.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,legendTooltip:{titleProperyForLegend:"created_date"}}},{id:2,kind:A.$v.group,parent:1,template:{id:0,kind:A.$v.simple,type:a,parent:0,props:{x:"created_date",y:t},tooltip:{labelName:""}}}]}}};var se=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},ue="changes_made_by_job_template",ce=["host_count","changed_host_count","host_task_count","host_task_changed_count"],de=[];const pe={slug:ue,name:"Changes made by job template",description:"The total count of changes made by each job template in a specified time window.\n\nYou can use this report to ensure the correct number of changes are made per hostname, as well as see which job templates are doing the most changes to your infrastructure.",categories:[ne],report:{slug:ue,defaultParams:{limit:6,offset:0,attributes:se(se([],ce,!0),de,!0),group_by:"template",group_by_time:!0,granularity:"monthly",quick_date_range:"last_6_months",sort_options:"changed_host_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],tableAttributes:ce,expandedAttributes:de,availableChartTypes:[A.oX.line,A.oX.bar],readData:X.Ij,readOptions:X.ZW,schemaFnc:function(e,t,n,a){return[{id:1,kind:A.$v.wrapper,type:A.yD.chart,parent:null,props:{height:400,padding:{top:40,bottom:85,right:90,left:90},domainPadding:{y:25,x:a==A.oX.bar?85:0},themeColor:A.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n,style:{axisLabel:{padding:50}}},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:60}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:A.nw.vertical,position:A.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,legendTooltip:{titleProperyForLegend:"created_date"}}},{id:2,kind:A.$v.group,parent:1,template:{id:0,kind:A.$v.simple,type:a,parent:0,props:{x:"created_date",y:t},tooltip:{labelName:""}}}]}}};var me=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},ge="job_template_run_rate",_e=["failed_count","successful_count","total_count"],he=[];const ye={slug:ge,name:"Job template run rate",description:"The number of times a job template has ran in a specified time window.\n\nYou can use this report to be able to tell which playbooks are running most frequently, allowing you to see which groups in your organization are running Ansible the most.",categories:[ne],report:{slug:ge,defaultParams:{limit:6,offset:0,attributes:me(me([],_e,!0),he,!0),group_by:"template",group_by_time:!0,granularity:"monthly",quick_date_range:"last_6_months",sort_options:"total_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],tableAttributes:_e,expandedAttributes:he,availableChartTypes:[A.oX.line,A.oX.bar],readData:X.Ij,readOptions:X.ZW,schemaFnc:function(e,t,n,a){return[{id:1,kind:A.$v.wrapper,type:A.yD.chart,parent:null,props:{height:400,padding:{top:40,bottom:85,right:90,left:90},domainPadding:{y:25,x:a==A.oX.bar?85:0},themeColor:A.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n,style:{axisLabel:{padding:50}}},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:60}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:A.nw.vertical,position:A.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,legendTooltip:{titleProperyForLegend:"created_date"}}},{id:2,kind:A.$v.group,parent:1,template:{id:0,kind:A.$v.simple,type:a,parent:0,props:{x:"created_date",y:t},tooltip:{labelName:""}}}]}}};var fe=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},be="hosts_by_organization",ve=["total_unique_host_count","total_unique_host_changed_count"],ke=[];const Ee={slug:be,name:"Hosts by organization",description:"The number of unique hosts, grouped by organizations from Ansible Controller.\n\nYou can use this report to find which organizations are managing the most hosts with Ansible automation.",categories:[ne],report:{slug:be,defaultParams:{limit:6,offset:0,granularity:"daily",quick_date_range:"last_30_days",status:[],org_id:[],job_type:["workflowjob","job"],cluster_id:[],template_id:[],inventory_id:[],attributes:fe(fe([],ve,!0),ke,!0),group_by:"org",group_by_time:!0,sort_options:"total_unique_host_count",sort_order:"desc"},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Organization name"}],tableAttributes:ve,expandedAttributes:ke,availableChartTypes:[A.oX.line,A.oX.bar],readData:X.og,readOptions:X.FW,schemaFnc:function(e,t,n,a){return[{id:1,kind:A.$v.wrapper,type:A.yD.chart,parent:null,props:{height:400,padding:{top:40,bottom:85,right:90,left:90},domainPadding:{y:25,x:a==A.oX.bar?85:0},themeColor:A.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n,style:{axisLabel:{padding:50}}},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:60}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:A.nw.vertical,position:A.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,legendTooltip:{titleProperyForLegend:"created_date"}}},{id:2,kind:A.$v.group,parent:1,template:{id:0,kind:A.$v.simple,type:a,parent:0,props:{x:"created_date",y:t},tooltip:{labelName:""}}}]}}};var xe=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},we="jobs_and_tasks_by_organization",Te=["total_count","host_task_count"],Ae=[];const Fe={slug:we,name:"Jobs/Tasks by organization",description:"The number of job template and task runs, grouped by organizations from Ansible Controller.\n\nYou can use this report to find which organizations are running the most Ansible jobs.",categories:[ne],report:{slug:we,defaultParams:{limit:6,offset:0,granularity:"daily",quick_date_range:"last_30_days",status:[],org_id:[],job_type:["workflowjob","job"],cluster_id:[],template_id:[],inventory_id:[],attributes:xe(xe([],Te,!0),Ae,!0),group_by:"org",group_by_time:!0,sort_options:"total_count",sort_order:"desc"},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Organization name"}],tableAttributes:Te,expandedAttributes:Ae,availableChartTypes:[A.oX.line,A.oX.bar],readData:X.Ij,readOptions:X.ZW,schemaFnc:function(e,t,n,a){return[{id:1,kind:A.$v.wrapper,type:A.yD.chart,parent:null,props:{height:400,padding:{top:40,bottom:85,right:90,left:90},domainPadding:{y:25,x:a==A.oX.bar?85:0},themeColor:A.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n,style:{axisLabel:{padding:50}}},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:60}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:A.nw.vertical,position:A.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,legendTooltip:{titleProperyForLegend:"created_date"}}},{id:2,kind:A.$v.group,parent:1,template:{id:0,kind:A.$v.simple,type:a,parent:0,props:{x:"created_date",y:t},tooltip:{labelName:""}}}]}}};var Pe=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},Ce="templates_explorer",Ze=["failed_count","successful_count","total_count"],je=["average_host_task_count_per_host","average_host_task_ok_count_per_host","average_host_task_failed_count_per_host","average_host_task_unreachable_count_per_host","average_host_task_skipped_count_per_host","successful_count","failed_count","error_count","started","finished","elapsed","created","total_cluster_count","total_org_count","most_failed_tasks","host_count","host_task_count","host_task_changed_count","host_task_failed_count","host_task_ok_count","host_task_skipped_count","host_task_unreachable_count","failed_host_count","unreachable_host_count","changed_host_count","ok_host_count","skipped_host_count","total_count"],De={slug:Ce,name:"Templates explorer",description:"An overview of the job templates that have ran across your Ansible cluster.\n\nYou can use this report to review the status of particular job templates across its job runs, giving you an overview of the times a template fails a job run, a host, or a task. You can also review the host and task status for tasks that fail the most, allowing you to identify any bottlenecks or problems with the templates you are running.",categories:["Operations"],report:{slug:Ce,defaultParams:{limit:6,offset:0,attributes:Pe(Pe([],Ze,!0),je,!0),group_by:"template",group_by_time:!1,granularity:"monthly",quick_date_range:"last_6_months",sort_options:"total_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],tableAttributes:Ze,expandedAttributes:je,availableChartTypes:[A.oX.bar],readData:X.Ij,readOptions:X.ZW,schemaFnc:function(e,t,n){return[{id:1,kind:A.$v.wrapper,type:A.yD.chart,parent:null,props:{height:400,padding:{top:40,bottom:85,right:90,left:90},domainPadding:{y:25,x:85},themeColor:A.nz.multiOrdered},xAxis:{label:"Template",style:{axisLabel:{padding:50}}},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:60}}},api:{url:"",params:{}}},{id:2,kind:A.$v.group,parent:1,template:{id:0,kind:A.$v.simple,type:A.oX.bar,parent:0,props:{x:"name",y:t},tooltip:{standalone:!0}}}]}}},Oe=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},Ie={slug:"",name:"",description:"",categories:[],report:void 0},Le=[Ee,Fe,De],qe=[ie,pe,ye],Ge=n(22030),Re=function(){return Re=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},Re.apply(this,arguments)},ze=l.ZP.p($e||($e=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}(["\n  max-width: 70em;\n  padding-top: 8px;\n"],["\n  max-width: 70em;\n  padding-top: 8px;\n"])));const Se=function(){var e=function(e){var t,n=(0,V.ye)(V.GA.orgReports);return null!==(t=Oe(Oe([],qe,!0),n?Le:[],!0).find((function(t){return t.slug===e})))&&void 0!==t?t:Ie}((0,o.useParams)().slug),t=e.name,n=e.description,a=e.report,l=[{title:"Reports",navigate:Ge.Z.get}];return a?r().createElement(r().Fragment,null,r().createElement(u.Z,null,r().createElement(d.Z,{items:l}),r().createElement(c.Z,{title:t}),r().createElement(ze,null,n)),r().createElement(i.Z,null,r().createElement(ee,Re({},a)))):r().createElement(s.Z,{title:"404: Page does not exist.",body:"The report you are looking for does not exist.",buttonText:"Return to Reports page",link:Ge.Z.get})};var $e,He,Xe,Ne,Ye=n(30168),Be=(0,l.ZP)(h.CardTitle)(He||(He=(0,Ye.Z)(["\n  word-break: break-word;\n"]))),Ke=l.ZP.small(Xe||(Xe=(0,Ye.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  color: #6a6e73;\n  white-space: pre-line;\n"]))),Me=(0,l.ZP)(h.Label)(Ne||(Ne=(0,Ye.Z)(["\n  margin-right: 10px;\n"]))),We=function(e){var t=e.report,n=t.slug,a=t.description,l=t.name,i=t.categories;return r().createElement(h.Card,{"data-testid":n},r().createElement(h.CardHeader,null,r().createElement(h.CardHeaderMain,null,r().createElement(Be,null,r().createElement(o.Link,{to:Ge.Z.getDetails(n)},l)))),r().createElement(h.CardBody,null,a?r().createElement(Ke,null,a):null),r().createElement(h.CardFooter,null,i.map((function(e,t){return r().createElement(Me,{key:t},e)}))))};We.propTypes={report:S().object};const Ve=We;var Je,Qe,Ue=l.ZP.div(Je||(Je=(0,Ye.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 76px);\n"]))),et=(0,l.ZP)(i.Z)(Qe||(Qe=(0,Ye.Z)(["\n  flex-grow: 1;\n"])));const tt=function(){return r().createElement(Ue,null,r().createElement(u.Z,null,r().createElement(c.Z,{title:"Reports"})),r().createElement(et,null,r().createElement(h.Gallery,{"data-testid":"all_reports",hasGutter:!0,minWidths:{sm:"307px",md:"307px",lg:"307px",xl:"307px","2xl":"307px"}},(e=(0,V.ye)(V.GA.orgReports),Oe(Oe([],qe,!0),e?Le:[],!0)).map((function(e){return r().createElement(Ve,{key:e.slug,report:e})})))));var e},nt=function(){return r().createElement(o.Switch,null,r().createElement(o.Route,{exact:!0,path:Ge.Z.get},r().createElement(tt,null)),r().createElement(o.Route,{path:Ge.Z.details},r().createElement(Se,null)))}}}]);
//# sourceMappingURL=../sourcemaps/903.fbab09acd87b43d5a4cebad638c9a2b8.js.map