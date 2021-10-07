"use strict";(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[903],{71903:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ue});var a=n(92950),r=n.n(a),o=n(86235),l=n(29163),i=n(86350),s=n(46336),u=n(48716),c=n(39173),d=n(69595),p=n(86445),m=n(65460),_=n(53345),g=n(91354),h=n(58788),f=n(94592),y=n(13784);const v=function(e){var t,n,a,o,l,i,s,u,c,d,m,_,g,v,b,k,E,x=e.isExpanded,w=e.item,A=w?{ok:null!==(t=null==w?void 0:w.successful_count)&&void 0!==t?t:0,skipped:null!==(n=null==w?void 0:w.skipped_count)&&void 0!==n?n:0,failed:null!==(a=null==w?void 0:w.failed_count)&&void 0!==a?a:0,error:null!==(o=null==w?void 0:w.error_count)&&void 0!==o?o:0}:null,F=w?{ok:null!==(l=null==w?void 0:w.average_host_task_ok_count_per_host)&&void 0!==l?l:0,skipped:null!==(i=null==w?void 0:w.average_host_task_skipped_count_per_host)&&void 0!==i?i:0,changed:null!==(s=null==w?void 0:w.average_host_task_changed_count_per_host)&&void 0!==s?s:0,failed:null!==(u=null==w?void 0:w.average_host_task_failed_count_per_host)&&void 0!==u?u:0,unreachable:null!==(c=null==w?void 0:w.average_host_task_unreachable_count_per_host)&&void 0!==c?c:0}:null,T=w?{ok:null!==(d=null==w?void 0:w.ok_host_count)&&void 0!==d?d:0,skipped:null!==(m=null==w?void 0:w.skipped_host_count)&&void 0!==m?m:0,changed:null!==(_=null==w?void 0:w.changed_host_count)&&void 0!==_?_:0,failed:null!==(g=null==w?void 0:w.failed_host_count)&&void 0!==g?g:0,unreachable:null!==(v=null==w?void 0:w.unreachable_host_count)&&void 0!==v?v:0}:null;return r().createElement(p.Tr,{isExpanded:x},r().createElement(p.Td,{colSpan:6},r().createElement(p.ExpandableRowContent,null,r().createElement(h.Flex,null,r().createElement(h.FlexItem,null,r().createElement("strong",null,"Job status")),r().createElement(h.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Jobs"),"  ",null!==(b=null==w?void 0:w.total_count)&&void 0!==b?b:0)),r().createElement(f.Z,{categoryCount:A,categoryColor:y.ss,showPercent:!0}),r().createElement(h.Flex,null,r().createElement(h.FlexItem,null,r().createElement("strong",null,"All Host status")),r().createElement(h.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Hosts"),"  ",null!==(k=null==w?void 0:w.host_count)&&void 0!==k?k:0)),r().createElement(f.Z,{categoryCount:T,categoryColor:y.ss,showPercent:!0}),r().createElement(h.Flex,null,r().createElement(h.FlexItem,null,r().createElement("strong",null,"All Task status")),r().createElement(h.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Tasks"),"  ",null!==(E=null==w?void 0:w.host_task_count)&&void 0!==E?E:0)),r().createElement(f.Z,{categoryCount:F,categoryColor:y.ss,showPercent:!0}),r().createElement(h.Divider,{component:"div",style:{marginTop:"2rem",marginBottom:"1.5rem"}}),function(e){var t=e.most_failed_tasks;if(null!=t)return r().createElement(r().Fragment,null,r().createElement("p",null,r().createElement("strong",null,"Most failed tasks")),r().createElement("br",null),r().createElement(h.Grid,{hasGutter:!0},t.slice(0,t.length).map((function(e,t){var n,a,o,l,i,s,u={passed:null!==(n=null==e?void 0:e.passed_host_count)&&void 0!==n?n:0,failed:null!==(a=null==e?void 0:e.failed_host_count)&&void 0!==a?a:0,unreachable:null!==(o=null==e?void 0:e.unreachable_host_count)&&void 0!==o?o:0},c={passed:null!==(l=null==e?void 0:e.successful_count)&&void 0!==l?l:0,failed:null!==(i=null==e?void 0:e.failed_count)&&void 0!==i?i:0,unfinished:null!==(s=null==e?void 0:e.unfinished_count)&&void 0!==s?s:0};return r().createElement(h.Grid,{hasGutter:!0,key:t},r().createElement(h.GridItem,null,r().createElement(h.DescriptionList,{isHorizontal:!0},function(e){return[{label:"Task name",value:e.task_name},{label:"Module name",value:e.module_name}]}(e).map((function(e){var t=e.label,n=e.value;return r().createElement(h.DescriptionListGroup,{key:t},r().createElement(h.DescriptionListTerm,null,t),r().createElement(h.DescriptionListDescription,null,n))})))),r().createElement(h.GridItem,null,r().createElement(h.Flex,null,r().createElement(h.FlexItem,null,r().createElement("strong",null,"Host status")),r().createElement(h.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Hosts"),"  ",function(e){return parseInt(e.passed_host_count)+parseInt(e.failed_host_count)+parseInt(e.unreachable_host_count)}(e)),r().createElement(h.FlexItem,null,r().createElement("strong",null,"Task status")),r().createElement(h.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Tasks"),"  ",function(e){return parseInt(e.successful_count)+parseInt(e.failed_count)+parseInt(e.unfinished_count)}(e)))),r().createElement(h.GridItem,{lg:6,md:12,key:"hosts-"+t},r().createElement(f.Z,{categoryCount:u,categoryColor:y.ss,showPercent:!0})),r().createElement(h.GridItem,{lg:6,md:12,key:"tasks-"+t},r().createElement(f.Z,{categoryCount:c,categoryColor:y.ss,showPercent:!0})))}))))}(w),r().createElement(h.DescriptionList,{isHorizontal:!0,columnModifier:{lg:"3Col"}},function(e){var t,n;return[{label:"Clusters",value:null!==(t=e.total_cluster_count)&&void 0!==t?t:0},{label:"Organizations",value:null!==(n=e.total_org_count)&&void 0!==n?n:0}]}(w).map((function(e){var t=e.label,n=e.value;return r().createElement(h.DescriptionListGroup,{key:t},r().createElement(h.DescriptionListTerm,null,t),r().createElement(h.DescriptionListDescription,null,n))}))))))};var b=["elapsed"],k=[],E=function(e,t){return"id"===t&&-1===e[t]};const x=function(e){var t,n=e.legendEntry,o=e.headers,l=e.expandRows,i=(0,a.useState)(!1),s=i[0],u=i[1];return r().createElement(r().Fragment,null,r().createElement(p.Tr,{style:(t=n,"id",E(t,"id")?{backgroundColor:m.global_disabled_color_300.value}:{})},o.map((function(e,t){var a=e.key;return r().createElement(r().Fragment,null,l&&0===t&&r().createElement(p.Td,{expand:{rowIndex:+n.id,isExpanded:s,onToggle:function(){return u(!s)}}}),r().createElement(p.Td,{key:n.id+"-"+a},function(e,t){return function(e,t){return"id"===t&&-2===e[t]}(e,t)||E(e,t)?"-":b.includes(t)?(0,_.yH)(+e[t]):k.includes(t)?(0,g.Z)(+e[t]):""+e[t]}(n,a)))}))),l&&r().createElement(v,{isExpanded:s,item:n}))};var w=function(){return w=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},w.apply(this,arguments)};const A=function(e){var t=e.legend,n=e.headers,a=e.getSortParams,o=void 0===a?function(){return{}}:a,l=e.expandRows,i=void 0!==l&&l;return r().createElement(p.TableComposable,{"aria-label":"Report Table",variant:p.TableVariant.compact},r().createElement(p.Thead,null,r().createElement(p.Tr,null,i&&r().createElement(p.Th,null),n.map((function(e){var t=e.key,n=e.value;return r().createElement(p.Th,w({key:t},o(t)),n)})))),r().createElement(p.Tbody,null,t.map((function(e){return r().createElement(x,{key:e.id,legendEntry:e,headers:n,expandRows:i})}))))};var F=n(91738),T=function(){return T=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},T.apply(this,arguments)},P=function(e){return T(T({},F.wk),{axisFormat:T(T({},F.wk.axisFormat),{formatAsYear:function(e){return Intl.DateTimeFormat("en",{year:"numeric"}).format(new Date(e))},formatAsMonth:function(e){return Intl.DateTimeFormat("en",{month:"long"}).format(new Date(e))}}),fetchFnc:function(){return new Promise((function(t){t(e)}))}})};const j=function(e){var t=e.schema,n=e.data;return r().createElement(F.ZP,{schema:t,functions:P(n)})};var Z=n(12613),D=n(47116),O=n(77388),C=n(9771),I=n(48236),q=n(83061);const R=function(e){var t=e.api,n=e.children;return!t||t.isLoading?r().createElement(I.Z,null):t.error?r().createElement(C.Z,{message:t.error.error}):t.isSuccess?Array.isArray(t.result)&&0===t.result.length||0===Object.keys(t.result).length?r().createElement(q.Z,null):r().createElement(r().Fragment,null,n):null};var G=n(45994),z=n(45697),L=n.n(z),$=n(98478),H=n(84564),S=n(64866),Y=function(e){var t=e.slug,n=e.data,o=e.y,l=e.label,i=e.xTickFormat,s=(0,O.ZP)((0,a.useCallback)((function(e){return(0,S.$w)({slug:t,data:e,y:o,label:l,x_tick_format:i})})),null),u=s.error,c=s.isLoading,d=s.request,p=function(e){return e||"Download PDF version of report"};return r().createElement(h.Tooltip,{position:h.TooltipPosition.top,content:r().createElement("div",null,p(u))},r().createElement(h.Button,{variant:u?h.ButtonVariant.link:h.ButtonVariant.plain,"aria-label":p(u),onClick:function(){return d(n)},isDanger:u},c&&r().createElement(h.Spinner,{isSVG:!0,size:"md"}),u&&r().createElement(H.ZP,null),!c&&!u&&r().createElement($.ZP,null)))};Y.propTypes={slug:L().string.isRequired,data:L().object.isRequired,y:L().string.isRequired,label:L().string.isRequired,xTickFormat:L().string.isRequired};const B=Y;var K,M,W=n(65317),N=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},X=(0,l.ZP)(h.CardBody)(Q||(K=["\n  & .pf-c-toolbar,\n  & .pf-c-toolbar__content {\n    padding: 0;\n  }\n"],M=["\n  & .pf-c-toolbar,\n  & .pf-c-toolbar__content {\n    padding: 0;\n  }\n"],Object.defineProperty?Object.defineProperty(K,"raw",{value:M}):K.raw=M,Q=K)),V=[{title:"4",value:4},{title:"6",value:6},{title:"8",value:8},{title:"10",value:10}];const J=function(e){var t,n,o=e.slug,l=e.defaultParams,i=e.defaultTableHeaders,s=e.tableAttributes,u=e.expandedAttributes,c=e.readData,d=e.readOptions,p=e.schemaFnc,m=(0,W.ye)(W.GA.pdfDownloadButton),_=(0,D.Kx)(l),g=_.queryParams,f=_.setFromPagination,y=_.setFromToolbar,v=(0,O.ZP)((0,a.useCallback)((function(){return c(g)}),[g]),{meta:{count:0,legend:[]}}),b=v.request,k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(v,["request"]),E=(0,O.ZP)((function(){return d(g)}),{sort_options:[]}),x=E.result,w=E.request;(0,a.useEffect)((function(){b(),w()}),[g]);var F,T=N(N([],i,!0),s?x.sort_options.filter((function(e){var t=e.key;return s.includes(t)})):x.sort_options,!0),P={y:g.sort_options,label:(null===(n=null===(t=x.sort_options)||void 0===t?void 0:t.find((function(e){return e.key===g.sort_options})))||void 0===n?void 0:n.value)||"Label Y",xTickFormat:(F=g.granularity,"yearly"===F?"formatAsYear":"monthly"===F?"formatAsMonth":"daily"===F?"formatDateAsDayMonth":"")},C=m?[r().createElement(B,{key:"download-button",slug:o,data:k.result,y:P.y,label:P.label,xTickFormat:P.xTickFormat})]:[];return r().createElement(h.Card,null,r().createElement(X,null,r().createElement(G.Z,{categories:x,filters:g,setFilters:y,pagination:r().createElement(Z.Z,{count:k.result.meta.count,perPageOptions:V,params:{limit:+g.limit,offset:+g.offset},setPagination:f,isCompact:!0}),additionalControls:C}),T&&r().createElement(R,{api:k},r().createElement(j,{schema:p(P.label,P.y,P.xTickFormat),data:k.result}),r().createElement(A,{legend:k.result.meta.legend,headers:T,getSortParams:function(e){var t,n=null===(t=null==x?void 0:x.sort_options)||void 0===t?void 0:t.map((function(e){return e.key}));return(null==n?void 0:n.includes(e))?{sort:{sortBy:{index:T.findIndex((function(e){return e.key===g.sort_options}))||0,direction:g.sort_order||"none"},onSort:function(e,t,n){var a;y("sort_order",n),y("sort_options",null===(a=T[t])||void 0===a?void 0:a.key)},columnIndex:T.findIndex((function(t){return t.key===e}))}}:{}},expandRows:u.length>0}))),r().createElement(h.CardFooter,null,r().createElement(Z.Z,{count:k.result.meta.count,perPageOptions:V,params:{limit:+g.limit,offset:+g.offset},setPagination:f,variant:h.PaginationVariant.bottom})))};var Q,U="Executive",ee=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},te="hosts_changed_by_job_template",ne=["total_unique_host_count","total_unique_host_changed_count"],ae=[];const re={slug:te,name:"Hosts changed by job template",description:"The number of hosts changed by a job template in a specified time window.\n\nYou can use this report to find discrepancies in the host change rate at a particular time, helping you drill down to when and why hosts were unreachable at a particular time.",categories:[U],report:{slug:te,defaultParams:{limit:6,offset:0,attributes:ee(ee([],ne,!0),ae,!0),group_by:"template",group_by_time:!0,granularity:"monthly",quick_date_range:"last_6_months",sort_options:"total_unique_host_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],tableAttributes:ne,expandedAttributes:ae,readData:S.og,readOptions:S.FW,schemaFnc:function(e,t,n){return[{id:1,kind:F.$v.wrapper,type:F.yD.chart,parent:null,props:{height:400,padding:{top:10,right:100},domainPadding:{y:25},themeColor:F.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:F.nw.vertical,position:F.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,customFnc:function(e){return e.name+": "+e.y}}},{id:2,kind:F.$v.group,parent:1,template:{id:0,kind:F.$v.simple,type:F.oX.line,parent:0,props:{x:"created_date",y:t}}}]}}};var oe=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},le="changes_made_by_job_template",ie=["host_count","changed_host_count","host_task_count","host_task_changed_count"],se=[];const ue={slug:le,name:"Changes made by job template",description:"The total count of changes made by each job template in a specified time window.\n\nYou can use this report to ensure the correct number of changes are made per hostname, as well as see which job templates are doing the most changes to your infrastructure.",categories:[U],report:{slug:le,defaultParams:{limit:6,offset:0,attributes:oe(oe([],ie,!0),se,!0),group_by:"template",group_by_time:!0,granularity:"monthly",quick_date_range:"last_6_months",sort_options:"changed_host_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],tableAttributes:ie,expandedAttributes:se,readData:S.Ij,readOptions:S.ZW,schemaFnc:function(e,t,n){return[{id:1,kind:F.$v.wrapper,type:F.yD.chart,parent:null,props:{height:400,padding:{top:10,right:100},domainPadding:{y:25},themeColor:F.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:F.nw.vertical,position:F.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,customFnc:function(e){return e.name+": "+e.y}}},{id:2,kind:F.$v.group,parent:1,template:{id:0,kind:F.$v.simple,type:F.oX.line,parent:0,props:{x:"created_date",y:t}}}]}}};var ce=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},de="job_template_run_rate",pe=["failed_count","successful_count","total_count"],me=[];const _e={slug:de,name:"Job template run rate",description:"The number of times a job template has ran in a specified time window.\n\nYou can use this report to be able to tell which playbooks are running most frequently, allowing you to see which groups in your organization are running Ansible the most.",categories:[U],report:{slug:de,defaultParams:{limit:6,offset:0,attributes:ce(ce([],pe,!0),me,!0),group_by:"template",group_by_time:!0,granularity:"monthly",quick_date_range:"last_6_months",sort_options:"total_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],tableAttributes:pe,expandedAttributes:me,readData:S.Ij,readOptions:S.ZW,schemaFnc:function(e,t,n){return[{id:1,kind:F.$v.wrapper,type:F.yD.chart,parent:null,props:{height:400,padding:{top:10,right:100},domainPadding:{y:25},themeColor:F.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:F.nw.vertical,position:F.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,customFnc:function(e){return e.name+": "+e.y}}},{id:2,kind:F.$v.group,parent:1,template:{id:0,kind:F.$v.simple,type:F.oX.line,parent:0,props:{x:"created_date",y:t}}}]}}};var ge=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},he="hosts_by_organization",fe=["total_unique_host_count","total_unique_host_changed_count"],ye=[];const ve={slug:he,name:"Hosts by organization",description:"The number of unique hosts, grouped by organizations from Ansible Controller.\n\nYou can use this report to find which organizations are managing the most hosts with Ansible automation.",categories:[U],report:{slug:he,defaultParams:{limit:6,offset:0,granularity:"daily",quick_date_range:"last_30_days",status:[],org_id:[],job_type:["workflowjob","job"],cluster_id:[],template_id:[],inventory_id:[],attributes:ge(ge([],fe,!0),ye,!0),group_by:"org",group_by_time:!0,sort_options:"total_unique_host_count",sort_order:"desc"},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Organization name"}],tableAttributes:fe,expandedAttributes:ye,readData:S.og,readOptions:S.FW,schemaFnc:function(e,t,n){return[{id:1,kind:F.$v.wrapper,type:F.yD.chart,parent:null,props:{height:400,padding:{top:10,right:100},domainPadding:{y:25},themeColor:F.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:F.nw.vertical,position:F.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,customFnc:function(e){return e.name+": "+e.y}}},{id:2,kind:F.$v.group,parent:1,template:{id:0,kind:F.$v.simple,type:F.oX.line,parent:0,props:{x:"created_date",y:t}}}]}}};var be=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},ke="jobs_and_tasks_by_organization",Ee=["total_count","host_task_count"],xe=[];const we={slug:ke,name:"Jobs/Tasks by organization",description:"The number of job template and task runs, grouped by organizations from Ansible Controller.\n\nYou can use this report to find which organizations are running the most Ansible jobs.",categories:[U],report:{slug:ke,defaultParams:{limit:6,offset:0,granularity:"daily",quick_date_range:"last_30_days",status:[],org_id:[],job_type:["workflowjob","job"],cluster_id:[],template_id:[],inventory_id:[],attributes:be(be([],Ee,!0),xe,!0),group_by:"org",group_by_time:!0,sort_options:"total_count",sort_order:"desc"},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Organization name"}],tableAttributes:Ee,expandedAttributes:xe,readData:S.Ij,readOptions:S.ZW,schemaFnc:function(e,t,n){return[{id:1,kind:F.$v.wrapper,type:F.yD.chart,parent:null,props:{height:400,padding:{top:10,right:100},domainPadding:{y:25},themeColor:F.nz.multiOrdered},xAxis:{label:"Date",tickFormat:n},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},legend:{interactive:!0,orientation:F.nw.vertical,position:F.St.right},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,customFnc:function(e){return e.name+": "+e.y}}},{id:2,kind:F.$v.group,parent:1,template:{id:0,kind:F.$v.simple,type:F.oX.line,parent:0,props:{x:"created_date",y:t}}}]}}};var Ae=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},Fe="templates_explorer",Te=["failed_count","successful_count","total_count"],Pe=["average_host_task_count_per_host","average_host_task_ok_count_per_host","average_host_task_failed_count_per_host","average_host_task_unreachable_count_per_host","average_host_task_skipped_count_per_host","successful_count","failed_count","error_count","started","finished","elapsed","created","total_cluster_count","total_org_count","most_failed_tasks","host_count","host_task_count","host_task_changed_count","host_task_failed_count","host_task_ok_count","host_task_skipped_count","host_task_unreachable_count","failed_host_count","unreachable_host_count","changed_host_count","ok_host_count","skipped_host_count","total_count"],je={slug:Fe,name:"Templates explorer",description:"An overview of the job templates that have ran across your Ansible cluster.\n\nYou can use this report to review the status of particular job templates across its job runs, giving you an overview of the times a template fails a job run, a host, or a task. You can also review the host and task status for tasks that fail the most, allowing you to identify any bottlenecks or problems with the templates you are running.",categories:[U],report:{slug:Fe,defaultParams:{limit:6,offset:0,attributes:Ae(Ae([],Te,!0),Pe,!0),group_by:"template",group_by_time:!1,granularity:"monthly",quick_date_range:"last_6_months",sort_options:"total_count",sort_order:"desc",cluster_id:[],inventory_id:[],job_type:[],org_id:[],status:[],template_id:[]},defaultTableHeaders:[{key:"id",value:"ID"},{key:"name",value:"Template name"}],tableAttributes:Te,expandedAttributes:Pe,readData:S.Ij,readOptions:S.ZW,schemaFnc:function(e,t,n){return[{id:1,kind:F.$v.wrapper,type:F.yD.chart,parent:null,props:{height:600,domainPadding:{x:100},padding:{bottom:60,left:80},themeColor:F.nz.multiOrdered},xAxis:{label:"Template"},yAxis:{tickFormat:"formatNumberAsK",showGrid:!0,label:e,style:{axisLabel:{padding:55}}},api:{url:"",params:{}},tooltip:{mouseFollow:!0,stickToAxis:"x",cursor:!0,customFnc:function(e){return e.name+": "+e.y}}},{id:2,kind:F.$v.group,parent:1,template:{id:0,kind:F.$v.simple,type:F.oX.bar,parent:0,props:{x:"name",y:t}}}]}}},Ze=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},De={slug:"",name:"",description:"",categories:[],report:void 0},Oe=[ve,we,je],Ce=[re,ue,_e],Ie=n(22030),qe=function(){return qe=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},qe.apply(this,arguments)},Re=l.ZP.p(ze||(ze=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}(["\n  max-width: 70em;\n  padding-top: 8px;\n"],["\n  max-width: 70em;\n  padding-top: 8px;\n"])));const Ge=function(){var e=function(e){var t,n=(0,W.ye)(W.GA.orgReports);return null!==(t=Ze(Ze([],Ce,!0),n?Oe:[],!0).find((function(t){return t.slug===e})))&&void 0!==t?t:De}((0,o.useParams)().slug),t=e.name,n=e.description,a=e.report,l=[{title:"Reports",navigate:Ie.Z.get}];return a?r().createElement(r().Fragment,null,r().createElement(u.Z,null,r().createElement(d.Z,{items:l}),r().createElement(c.Z,{title:t}),r().createElement(Re,null,n)),r().createElement(i.Z,null,r().createElement(J,qe({},a)))):r().createElement(s.Z,{title:"404: Page does not exist.",body:"The report you are looking for does not exist.",buttonText:"Return to Reports page",link:Ie.Z.get})};var ze,Le,$e,He,Se=n(30168),Ye=(0,l.ZP)(h.CardTitle)(Le||(Le=(0,Se.Z)(["\n  word-break: break-word;\n"]))),Be=l.ZP.small($e||($e=(0,Se.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  color: #6a6e73;\n  white-space: pre-line;\n"]))),Ke=(0,l.ZP)(h.Label)(He||(He=(0,Se.Z)(["\n  margin-right: 10px;\n"]))),Me=function(e){var t=e.report,n=t.slug,a=t.description,l=t.name,i=t.categories;return r().createElement(h.Card,null,r().createElement(h.CardHeader,null,r().createElement(h.CardHeaderMain,null,r().createElement(Ye,null,r().createElement(o.Link,{to:Ie.Z.getDetails(n)},l)))),r().createElement(h.CardBody,null,a?r().createElement(Be,null,a):null),r().createElement(h.CardFooter,null,i.map((function(e,t){return r().createElement(Ke,{key:t},e)}))))};Me.propTypes={report:L().object};const We=Me;var Ne,Xe,Ve=l.ZP.div(Ne||(Ne=(0,Se.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 76px);\n"]))),Je=(0,l.ZP)(i.Z)(Xe||(Xe=(0,Se.Z)(["\n  flex-grow: 1;\n"])));const Qe=function(){return r().createElement(Ve,null,r().createElement(u.Z,null,r().createElement(c.Z,{title:"Reports"})),r().createElement(Je,null,r().createElement(h.Gallery,{hasGutter:!0,minWidths:{sm:"307px",md:"307px",lg:"307px",xl:"307px","2xl":"307px"}},(e=(0,W.ye)(W.GA.orgReports),Ze(Ze([],Ce,!0),e?Oe:[],!0)).map((function(e){return r().createElement(We,{key:e.slug,report:e})})))));var e},Ue=function(){return r().createElement(o.Switch,null,r().createElement(o.Route,{exact:!0,path:Ie.Z.get},r().createElement(Qe,null)),r().createElement(o.Route,{path:Ie.Z.details},r().createElement(Ge,null)))}}}]);
//# sourceMappingURL=../sourcemaps/903.ae027a38875af959b3fb1fd9465f649b.js.map