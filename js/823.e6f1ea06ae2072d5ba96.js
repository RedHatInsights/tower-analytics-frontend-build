(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[823],{84823:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>W});var n=l(96156),a=l(92950),r=l.n(a),o=l(45697),i=l.n(o),u=l(53677),c=l(77388),s=l(94794),d=l(26249),m=l(83160),p=l(12613),f=l(64866),E=l(13784),b=l(86350),v=l(48716),g=l(39173),_=l(58788),h=l(22122),y=l(34699),T=l(94550),j=l(79886),k=l(20272),P=l(66088),O=l(29587),C={ok:O.global_palette_green_300.value,passed:O.global_palette_green_300.value,unreachable:O.global_palette_black_400.value,changed:O.global_palette_gold_300.value,failed:O.global_palette_red_100.value,skipped:O.global_palette_blue_300.value},Z=function(e){var t,l,n,o,i,u,c,s=e.job,d=(0,a.useState)(!1),m=(0,y.Z)(d,2),p=m[0],f=m[1],E=s?{ok:null!==(t=null==s?void 0:s.ok_host_count)&&void 0!==t?t:0,skipped:null!==(l=null==s?void 0:s.skipped_host_count)&&void 0!==l?l:0,changed:null!==(n=null==s?void 0:s.changed_host_count)&&void 0!==n?n:0,failed:null!==(o=null==s?void 0:s.failed_host_count)&&void 0!==o?o:0,unreachable:null!==(i=null==s?void 0:s.unreachable_host_count)&&void 0!==i?i:0}:null,b=[{label:"Created",value:s.created?(0,j.o0)(s.created):"Unavailable"},{label:"Started",value:s.created?(0,j.o0)(s.started):"Unavailable"},{label:"Finished",value:s.created?(0,j.o0)(s.finished):"Unavailable"},{label:"Tasks",value:null!==(u=s.host_task_count)&&void 0!==u?u:0}];return r().createElement(r().Fragment,null,r().createElement(T.Tr,null,r().createElement(T.Td,{expand:{rowIndex:s.id.id,isExpanded:p,onToggle:function(){f(!p)}}}),r().createElement(T.Td,{href:s.id.tower_link},"".concat(s.id.id," - ").concat(s.id.template_name)),r().createElement(T.Td,null,r().createElement(k.Z,{status:null==s?void 0:s.status})),r().createElement(T.Td,null,null==s?void 0:s.cluster_name),r().createElement(T.Td,null,null==s?void 0:s.org_name),r().createElement(T.Td,null,(0,j.GV)(null==s?void 0:s.job_type))),r().createElement(T.Tr,{isExpanded:p},r().createElement(T.Td,{colSpan:6},r().createElement(T.ExpandableRowContent,null,r().createElement(_.Flex,null,r().createElement(_.FlexItem,null,r().createElement("strong",null,"Host status")),r().createElement(_.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Hosts"),"  ",null!==(c=null==s?void 0:s.host_count)&&void 0!==c?c:0)),r().createElement(P.Z,{categoryCount:E,categoryColor:C,showPercent:!0}),function(e){var t=(0,a.useState)(!1),l=(0,y.Z)(t,2),n=l[0],o=l[1];if(null!=e)return r().createElement(r().Fragment,null,r().createElement("p",null,r().createElement("strong",null,"Top failed tasks")),r().createElement(_.Grid,{hasGutter:!0},e.slice(0,n?e.length:2).map((function(e,t){var l,n,a,o={passed:null!==(l=null==e?void 0:e.passed_host_count)&&void 0!==l?l:0,failed:null!==(n=null==e?void 0:e.failed_host_count)&&void 0!==n?n:0,unreachable:null!==(a=null==e?void 0:e.unreachable_host_count)&&void 0!==a?a:0};return r().createElement(_.GridItem,{lg:6,md:12,key:"most-failed-".concat(t)},r().createElement(_.Flex,null,r().createElement(_.FlexItem,null,r().createElement("strong",null,"Task name ")," ",null==e?void 0:e.task_name),r().createElement(_.FlexItem,{align:{default:"alignRight"}},r().createElement("strong",null,"Module name ")," ",null==e?void 0:e.module_name)),r().createElement(P.Z,{categoryCount:o,categoryColor:C,showPercent:!0}))}))),e.length>2?function(e,t){return r().createElement(_.Flex,{className:"pf-u-mb-md"},r().createElement(_.FlexItem,{align:{default:"alignRight"}},r().createElement(_.Button,{variant:"secondary",onClick:function(){t(!e)},fullWidth:{default:"fullWidth"}},e?"Show less":"Show more")))}(n,o):null)}(s.most_failed_tasks),r().createElement(_.DescriptionList,{isHorizontal:!0,columnModifier:{lg:"3Col"}},b.map((function(e){var t=e.label,l=e.value;return r().createElement(_.DescriptionListGroup,{key:t},r().createElement(_.DescriptionListTerm,null,t),r().createElement(_.DescriptionListDescription,null,l))})))))))};Z.propTypes={job:i().object.isRequired};const S=Z;var x=["Id/Name","Status","Cluster","Organization","Type"],q=["Id/Name","Status","Type"],I={0:"id",1:"status",4:"job_type"},w={id:0,status:1,job_type:4},F=function(e){var t=e.jobs,l=e.queryParams,n=e.queryParamsDispatch,o=(0,a.useState)(-1),i=(0,y.Z)(o,2),u=i[0],c=i[1],s=(0,a.useState)("none"),d=(0,y.Z)(s,2),m=d[0],p=d[1];(0,a.useEffect)((function(){(null==l?void 0:l.sort_options)in w?(c(w[l.sort_options]),p(null==l||!l.sort_order||"desc"!==l.sort_order&&"asc"!==l.sort_order?"desc":l.sort_order)):(c(-1),p("none"))}),[l]);var f=function(e,t,l){t!==u&&(c(t),n({type:"SET_SORT_OPTIONS",value:{sort_options:I[t]}})),l!==m&&(p(l),n({type:"SET_SORT_ORDER",value:{sort_order:l}}))};return r().createElement(T.TableComposable,{"aria-label":"Job Explorer Table",variant:"compact"},r().createElement(T.Thead,null,r().createElement(T.Tr,null,r().createElement(T.Th,null),x.map((function(e,t){var l=q.includes(e)?{sort:{sortBy:{index:u,direction:m},onSort:f,columnIndex:t}}:{};return r().createElement(T.Th,(0,h.Z)({key:"col-".concat(t)},l),e)})))),r().createElement(T.Tbody,null,t.map((function(e){return r().createElement(S,{job:e,key:e.id.id})}))))};F.propTypes={jobs:i().array.isRequired,queryParams:i().object.isRequired,queryParamsDispatch:i().func.isRequired};const D=F;var R=l(95735),N=l(21048);function G(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function L(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?G(Object(l),!0).forEach((function(t){(0,n.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):G(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var H=L(L({},E.cY.defaultParams),{},{attributes:E.cY.attributes}),B=(0,N.Hm)("job-explorer",L({},H),["limit","offset"]),U=function(){var e=(0,u.K)(B),t=e.queryParams,l=e.setFromPagination,n=e.setFromToolbar,o=e.dispatch,i=(0,c.ZP)((0,a.useCallback)((function(){return(0,f.ZW)(t)}),[t]),{}),E=i.result,h=i.error,y=i.request,T=(0,c.ZP)((0,a.useCallback)((function(){return(0,f.Ij)(t)}),[t]),{items:[],meta:{}}),j=T.result,k=j.items,P=j.meta,O=T.isLoading,C=T.isSuccess,Z=T.request;return(0,a.useEffect)((function(){insights.chrome.appNavClick({id:"job-explorer",secondaryNav:!0})}),[]),(0,a.useEffect)((function(){y(),Z()}),[t]),h?r().createElement(m.Z,{message:h.error}):r().createElement(r().Fragment,null,r().createElement(v.Z,null,r().createElement(g.Z,{title:"Job Explorer"})),r().createElement(b.Z,null,r().createElement(_.Card,null,r().createElement(_.CardBody,null,r().createElement(R.Z,{categories:E,filters:t,qsConfig:B,setFilters:n,pagination:r().createElement(p.Z,{count:null==P?void 0:P.count,params:{limit:parseInt(t.limit),offset:parseInt(t.offset)},qsConfig:B,setPagination:l,isCompact:!0}),hasSettings:!0}),O&&r().createElement(s.Z,null),C&&k.length<=0&&r().createElement(d.Z,null),C&&k.length>0&&r().createElement(D,{jobs:k,queryParams:t,queryParamsDispatch:o}),r().createElement(p.Z,{count:null==P?void 0:P.count,params:{limit:parseInt(t.limit),offset:parseInt(t.offset)},qsConfig:B,setPagination:l,variant:_.PaginationVariant.bottom})))))};U.propTypes={location:i().object,history:i().object};const W=U}}]);
//# sourceMappingURL=../sourcemaps/823.e771ba8081d3664fce9c.js.map