(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[823],{84823:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>W});var n=l(96156),a=l(92950),r=l.n(a),o=l(45697),u=l.n(o),i=l(53677),s=l(77388),c=l(94794),d=l(26249),m=l(83160),p=l(12613),f=l(64866),E=l(13784),b=l(86350),v=l(48716),g=l(39173),_=l(58788),h=l(22122),y=l(34699),T=l(94550),j=l(79886),k=l(20272),P=l(66088),O=l(29587),Z={ok:O.global_palette_green_300.value,passed:O.global_palette_green_300.value,unreachable:O.global_palette_black_400.value,changed:O.global_palette_gold_300.value,failed:O.global_palette_red_100.value,skipped:O.global_palette_blue_300.value},C=function(e){var t,l,n,o,u,i,s,c=e.job,d=(0,a.useState)(!1),m=(0,y.Z)(d,2),p=m[0],f=m[1],E=c?{ok:null!==(t=null==c?void 0:c.ok_host_count)&&void 0!==t?t:0,skipped:null!==(l=null==c?void 0:c.skipped_host_count)&&void 0!==l?l:0,changed:null!==(n=null==c?void 0:c.changed_host_count)&&void 0!==n?n:0,failed:null!==(o=null==c?void 0:c.failed_host_count)&&void 0!==o?o:0,unreachable:null!==(u=null==c?void 0:c.unreachable_host_count)&&void 0!==u?u:0}:null,b=[{label:"Created",value:c.created?(0,j.o0)(c.created):"Unavailable"},{label:"Started",value:c.created?(0,j.o0)(c.started):"Unavailable"},{label:"Finished",value:c.created?(0,j.o0)(c.finished):"Unavailable"},{label:"Tasks",value:null!==(i=c.host_task_count)&&void 0!==i?i:0}];return r().createElement(r().Fragment,null,r().createElement(T.Tr,null,r().createElement(T.Td,{expand:{rowIndex:c.id.id,isExpanded:p,onToggle:function(){f(!p)}}}),r().createElement(T.Td,{href:c.id.tower_link},"".concat(c.id.id," - ").concat(c.id.template_name)),r().createElement(T.Td,null,r().createElement(k.Z,{status:null==c?void 0:c.status})),r().createElement(T.Td,null,null==c?void 0:c.cluster_name),r().createElement(T.Td,null,null==c?void 0:c.org_name),r().createElement(T.Td,null,(0,j.GV)(null==c?void 0:c.job_type))),r().createElement(T.Tr,{isExpanded:p},r().createElement(T.Td,{colSpan:6},r().createElement(T.ExpandableRowContent,null,r().createElement(_.Flex,null,r().createElement(_.FlexItem,null,r().createElement("strong",null,"Host status")),r().createElement(_.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Hosts"),"  ",null!==(s=null==c?void 0:c.host_count)&&void 0!==s?s:0)),r().createElement(P.Z,{categoryCount:E,categoryColor:Z,showPercent:!0}),function(e){var t=(0,a.useState)(!1),l=(0,y.Z)(t,2),n=l[0],o=l[1];if(null!=e)return r().createElement(r().Fragment,null,r().createElement("p",null,r().createElement("strong",null,"Top failed tasks")),r().createElement(_.Grid,{hasGutter:!0},e.slice(0,n?e.length:2).map((function(e,t){var l,n,a,o={passed:null!==(l=null==e?void 0:e.passed_host_count)&&void 0!==l?l:0,failed:null!==(n=null==e?void 0:e.failed_host_count)&&void 0!==n?n:0,unreachable:null!==(a=null==e?void 0:e.unreachable_host_count)&&void 0!==a?a:0};return r().createElement(_.GridItem,{lg:6,md:12,key:"most-failed-".concat(t)},r().createElement(_.Flex,null,r().createElement(_.FlexItem,null,r().createElement("strong",null,"Task name ")," ",null==e?void 0:e.task_name),r().createElement(_.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Module name ")," ",null==e?void 0:e.module_name)),r().createElement(P.Z,{categoryCount:o,categoryColor:Z,showPercent:!0}))}))),e.length>2?function(e,t){return r().createElement(_.Flex,{className:"pf-u-mb-md"},r().createElement(_.FlexItem,{align:{default:"alignRight"}},r().createElement(_.Button,{variant:"secondary",onClick:function(){t(!e)},fullWidth:{default:"fullWidth"}},e?"Show less":"Show more")))}(n,o):null)}(c.most_failed_tasks),r().createElement(_.DescriptionList,{isHorizontal:!0,columnModifier:{lg:"3Col"}},b.map((function(e){var t=e.label,l=e.value;return r().createElement(_.DescriptionListGroup,{key:t},r().createElement(_.DescriptionListTerm,null,t),r().createElement(_.DescriptionListDescription,null,l))})))))))};C.propTypes={job:u().object.isRequired};const S=C;var x=["Id/Name","Status","Cluster","Organization","Type"],q=["Id/Name","Status","Type"],I={0:"id",1:"status",4:"job_type"},w={id:0,status:1,job_type:4},F=function(e){var t=e.jobs,l=e.queryParams,n=e.queryParamsDispatch,o=(0,a.useState)(-1),u=(0,y.Z)(o,2),i=u[0],s=u[1],c=(0,a.useState)("none"),d=(0,y.Z)(c,2),m=d[0],p=d[1];(0,a.useEffect)((function(){(null==l?void 0:l.sort_options)in w?(s(w[l.sort_options]),p(null==l||!l.sort_order||"desc"!==l.sort_order&&"asc"!==l.sort_order?"desc":l.sort_order)):(s(-1),p("none"))}),[l]);var f=function(e,t,l){t!==i&&(s(t),n({type:"SET_SORT_OPTIONS",value:{sort_options:I[t]}})),l!==m&&(p(l),n({type:"SET_SORT_ORDER",value:{sort_order:l}}))};return r().createElement(T.TableComposable,{"aria-label":"Job Explorer Table",variant:"compact"},r().createElement(T.Thead,null,r().createElement(T.Tr,null,r().createElement(T.Th,null),x.map((function(e,t){var l=q.includes(e)?{sort:{sortBy:{index:i,direction:m},onSort:f,columnIndex:t}}:{};return r().createElement(T.Th,(0,h.Z)({key:"col-".concat(t)},l),e)})))),r().createElement(T.Tbody,null,t.map((function(e){return r().createElement(S,{job:e,key:e.id.id})}))))};F.propTypes={jobs:u().array.isRequired,queryParams:u().object.isRequired,queryParamsDispatch:u().func.isRequired};const D=F;var R=l(95735),G=l(21048);function L(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function H(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?L(Object(l),!0).forEach((function(t){(0,n.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):L(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var N=H(H({},E.cY.defaultParams),{},{attributes:E.cY.attributes}),B=(0,G.Hm)("job-explorer",H({},N),["limit","offset"]),U=function(){var e=(0,i.K)(B),t=e.queryParams,l=e.setFromPagination,n=e.setFromToolbar,o=e.dispatch,u=(0,s.ZP)((0,a.useCallback)((function(){return(0,f.ZW)(t)}),[t]),{}),E=u.result,h=u.error,y=u.request,T=(0,s.ZP)((0,a.useCallback)((function(){return(0,f.Ij)(t)}),[t]),{items:[],meta:{}}),j=T.result,k=j.items,P=j.meta,O=T.isLoading,Z=T.isSuccess,C=T.request;return(0,a.useEffect)((function(){y(),C()}),[t]),h?r().createElement(m.Z,{message:h.error}):r().createElement(r().Fragment,null,r().createElement(v.Z,null,r().createElement(g.Z,{title:"Job Explorer"})),r().createElement(b.Z,null,r().createElement(_.Card,null,r().createElement(_.CardBody,null,r().createElement(R.Z,{categories:E,filters:t,qsConfig:B,setFilters:n,pagination:r().createElement(p.Z,{count:null==P?void 0:P.count,params:{limit:parseInt(t.limit),offset:parseInt(t.offset)},qsConfig:B,setPagination:l,isCompact:!0}),hasSettings:!0}),O&&r().createElement(c.Z,null),Z&&k.length<=0&&r().createElement(d.Z,null),Z&&k.length>0&&r().createElement(D,{jobs:k,queryParams:t,queryParamsDispatch:o}),r().createElement(p.Z,{count:null==P?void 0:P.count,params:{limit:parseInt(t.limit),offset:parseInt(t.offset)},qsConfig:B,setPagination:l,variant:_.PaginationVariant.bottom})))))};U.propTypes={location:u().object,history:u().object};const W=U}}]);
//# sourceMappingURL=../sourcemaps/823.820dec0e1c148797d3d7.js.map