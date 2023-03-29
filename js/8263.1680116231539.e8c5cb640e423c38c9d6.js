"use strict";(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[8263],{94592:(e,t,n)=>{n.d(t,{Z:()=>y});var a,l,r,o,i,u=n(30168),c=n(92950),s=n.n(c),d=n(29163),m=n(45697),f=n.n(m),p=d.default.div(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n  max-width: 100%;\n  height: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"]))),g=d.default.div(l||(l=(0,u.Z)(["\n  height: 100%;\n"]))),v=d.default.div(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n"]))),b=d.default.div(o||(o=(0,u.Z)(["\n  padding-left: 2rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n"]))),_=d.default.div(i||(i=(0,u.Z)(["\n  width: 0.75rem;\n  height: 0.75rem;\n  margin-right: 0.5rem;\n"])));function E(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}var h=function(e){var t=e.categoryCount,n=e.categoryColor,a=e.showPercent,l=void 0!==a&&a,r=Object.values(t).reduce((function(e,t){return e+t})),o=Object.keys(t).filter((function(e){return t[e]>0})).sort((function(e,n){return t[e]<t[n]?1:t[e]>t[n]?-1:0})).map((function(e){return{name:e,barSpacing:t[e]/r,color:n[e]}})),i=1-.15*(o.length-1)/100;return s().createElement(s().Fragment,null,s().createElement(p,null,o.map((function(e,t){var n=e.barSpacing,a=e.color;return t<o.length-1?s().createElement(s().Fragment,{key:t},s().createElement(g,{style:{backgroundColor:a,width:"".concat(100*n*i,"%")}}),s().createElement(g,{style:{backgroundColor:"transparent",width:"".concat(.15,"%")}})):s().createElement(s().Fragment,{key:t},s().createElement(g,{style:{backgroundColor:a,width:"".concat(100*n*i,"%")}}))}))),s().createElement(v,null,o.map((function(e){var t=e.name,n=e.barSpacing,a=e.color;return s().createElement(b,{key:"label-".concat(t)},s().createElement(_,{style:{backgroundColor:a}}),l?s().createElement("p",null,E(t)," ",Math.round(100*n),"%"):s().createElement("p",null,E(t)))}))))};h.propTypes={categoryColor:f().object.isRequired,categoryCount:f().object.isRequired,showPercent:f().bool};const y=h},48990:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(70885),l=n(92950),r=n.n(l),o=n(77685),i=n(77388),u=n(53345),c=n(62455),s=n(94592),d=n(9771),m=n(12613),f=n(49148),p=n(35993),g=n(1085),v=n(91573),b=n(48607),_=n(83474),E=n(43345),h=n(59698);const y=function(){var e=(0,o.Kx)(p.cY.defaultParams),t=e.queryParams,n=e.setFromPagination,y=e.setFromToolbar,w=e.dispatch,k=(0,i.ZP)(f.ZW,{}),x=k.result,C=k.error,P=k.request,S=(0,i.ZP)(f.Ij,{items:[],meta:{count:0}}),O=S.result,T=O.items,R=O.meta,j=S.request;if((0,l.useEffect)((function(){P(t),j(t)}),[t]),C)return r().createElement(d.Z,{message:C.error.error});var Z={ok:v.global_palette_green_300.value,passed:v.global_palette_green_300.value,unreachable:v.global_palette_black_400.value,changed:v.global_palette_gold_300.value,failed:v.global_palette_red_100.value,skipped:v.global_palette_blue_300.value},F=function(e){var t,n,a,l,r;return e?{ok:null!==(t=null==e?void 0:e.ok_host_count)&&void 0!==t?t:0,skipped:null!==(n=null==e?void 0:e.skipped_host_count)&&void 0!==n?n:0,changed:null!==(a=null==e?void 0:e.changed_host_count)&&void 0!==a?a:0,failed:null!==(l=null==e?void 0:e.failed_host_count)&&void 0!==l?l:0,unreachable:null!==(r=null==e?void 0:e.unreachable_host_count)&&void 0!==r?r:0}:null},I=[{header:"ID/Name",sort:"id",type:"text",cell:function(e){return r().createElement(h.TextCell,{text:e.id.id,iconSize:"sm"})},value:function(e){return r().createElement("a",{href:e.id.tower_link,target:"_blank",rel:"noopener noreferrer"},"".concat(e.id.id," - ").concat(e.id.template_name))}},{header:"Status",sort:"status",type:"label",cell:function(e){return r().createElement(c.Z,{status:null==e?void 0:e.status})},value:function(e){return r().createElement(c.Z,{status:null==e?void 0:e.status})}},{header:"Cluster",type:"text",cell:function(e){return r().createElement(h.TextCell,{text:e.cluster_name,iconSize:"sm"})},value:function(e){return e.cluster_name}},{header:"Organization",type:"text",cell:function(e){return r().createElement(h.TextCell,{text:e.org_name,iconSize:"sm"})},value:function(e){return e.org_name}},{header:"Type",sort:"job_type",type:"text",cell:function(e){return r().createElement(h.TextCell,{text:e.job_type,iconSize:"sm"})},value:function(e){return(0,u.GV)(null==e?void 0:e.job_type)}}];return r().createElement(r().Fragment,null,r().createElement(h.PageHeader,{title:"Job Explorer"}),r().createElement(g.PageSection,null,r().createElement(g.Card,null,r().createElement(g.CardBody,null,r().createElement(_.Z,{categories:x,filters:t,setFilters:y,pagination:r().createElement(m.Z,{count:R.count,params:{limit:+t.limit,offset:+t.offset},setPagination:n,isCompact:!0}),settingsPanel:function(e,n){return r().createElement(E.fQ,{filters:t,setFilters:y,settingsExpanded:n,setSettingsExpanded:e,id:"showRootWorkflowJobs",label:"Ignore nested workflows and jobs",labelOff:"Ignore nested workflows and jobs",isChecked:t.only_root_workflows_and_standalone_jobs,onChange:function(e){y("only_root_workflows_and_standalone_jobs",e)},ariaLabel:"ignore nested workflow popover",bodyContent:"If enabled, nested workflows and jobs will not be included in the overall totals. Enable this option to filter out duplicate entries."})},hasSettings:!0}),r().createElement(h.PageTable,{pageItems:T,itemCount:R.count,autoHidePagination:!0,tableColumns:I,expandedRow:function(e){var t;return r().createElement(b.ExpandableRowContent,null,r().createElement(g.Flex,null,r().createElement(g.FlexItem,null,r().createElement("strong",null,"Host status")),r().createElement(g.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Hosts"),"  ",null!==(t=null==e?void 0:e.host_count)&&void 0!==t?t:0)),r().createElement(s.Z,{categoryCount:F(e),categoryColor:Z,showPercent:!0}),function(e){var t=(0,l.useState)(!1),n=(0,a.Z)(t,2),o=n[0],i=n[1];if(null!=e)return r().createElement(r().Fragment,null,r().createElement("p",null,r().createElement("strong",null,"Top failed tasks")),r().createElement(g.Grid,{hasGutter:!0},e.slice(0,o?e.length:2).map((function(e,t){var n,a,l,o={passed:null!==(n=null==e?void 0:e.passed_host_count)&&void 0!==n?n:0,failed:null!==(a=null==e?void 0:e.failed_host_count)&&void 0!==a?a:0,unreachable:null!==(l=null==e?void 0:e.unreachable_host_count)&&void 0!==l?l:0};return r().createElement(g.GridItem,{lg:6,md:12,key:"most-failed-".concat(t)},r().createElement(g.Flex,null,r().createElement(g.FlexItem,null,r().createElement("strong",null,"Task name ")," ",null==e?void 0:e.task_name),r().createElement(g.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Module name ")," ",null==e?void 0:e.module_name)),r().createElement(s.Z,{categoryCount:o,categoryColor:Z,showPercent:!0}))}))),e.length>2?function(e,t){return r().createElement(g.Flex,{className:"pf-u-mb-md"},r().createElement(g.FlexItem,{align:{default:"alignRight"}},r().createElement(g.Button,{variant:"secondary",onClick:function(){t(!e)},fullWidth:{default:"fullWidth"}},e?"Show less":"Show more")))}(o,i):null)}(e.most_failed_tasks),r().createElement(g.DescriptionList,{isHorizontal:!0,columnModifier:{lg:"3Col"}},function(e){var t;return[{label:"Created",value:e.created?(0,u.o0)(e.created):"Unavailable"},{label:"Started",value:e.created?(0,u.o0)(e.started):"Unavailable"},{label:"Finished",value:e.created?(0,u.o0)(e.finished):"Unavailable"},{label:"Tasks",value:null!==(t=e.host_task_count)&&void 0!==t?t:0}]}(e).map((function(e){var t=e.label,n=e.value;return r().createElement(g.DescriptionListGroup,{key:t},r().createElement(g.DescriptionListTerm,null,t),r().createElement(g.DescriptionListDescription,null,n))}))))},errorStateTitle:"Error loading templates",emptyStateTitle:"No templates yet",emptyStateDescription:"To get started, create a template.",sort:t.sort_options,sortDirection:t.sort_order,setSort:function(e){var n;(n=e)!==t.sort_options?(w({type:"SET_SORT_OPTIONS",value:{sort_options:n}}),w({type:"SET_SORT_ORDER",value:{sort_order:"asc"}})):w({type:"SET_SORT_ORDER",value:{sort_order:"asc"===t.sort_order?"desc":"asc"}})}}),r().createElement(m.Z,{count:R.count,params:{limit:+t.limit,offset:+t.offset},setPagination:n,variant:g.PaginationVariant.bottom})))))}},62455:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(92950),l=n.n(a),r=n(1085),o=n(68778),i=n(43047),u=n(66395),c=n(69957),s=n(93279),d=n(53345);const m=function(e){var t=e.status;return l().createElement(r.Label,{variant:"outline",color:function(){switch(t){case"successful":return"green";case"failed":case"error":return"red";case"running":case"pending":return"blue";case"canceled":return"orange";default:return"grey"}}(),icon:function(){switch(t){case"successful":return l().createElement(o.rE,null);case"failed":case"error":return l().createElement(i.$O,null);case"running":return l().createElement(u.ew,null);case"canceled":return l().createElement(c.LP,null);default:return l().createElement(s.T3,null)}}(),style:{marginRight:"0.5rem",marginBottom:"0.5rem"}},(0,d.kC)(t))}},12613:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(92950),l=n.n(a),r=n(45697),o=n.n(r),i=n(1085),u=function(){return u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},u.apply(this,arguments)},c=[{title:"5",value:5},{title:"10",value:10},{title:"15",value:15},{title:"20",value:20},{title:"25",value:25}],s=function(e){var t=e.count,n=void 0===t?0:t,a=e.perPageOptions,r=void 0===a?null:a,o=e.params,s=e.setPagination,d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["count","perPageOptions","params","setPagination"]),m=o.offset,f=o.limit,p=Math.floor(m/f+1),g=function(e){return(e-1)*f};return l().createElement(i.Pagination,u({"data-cy":d.isCompact?"pagination_top":"pagination_bottom",itemCount:n,widgetId:"aa-pagination",perPageOptions:null!=r?r:c,perPage:f,page:p,onPerPageSelect:function(e,t,n){s(g(n),t)},onSetPage:function(e,t){s(g(t))}},d))};s.propTypes={count:o().number,params:o().exact({offset:o().number.isRequired,limit:o().number.isRequired}).isRequired,setPagination:o().func.isRequired,perPageOptions:o().arrayOf(o().exact({title:o().string.isRequired,value:o().number.isRequired}).isRequired)};const d=s}}]);