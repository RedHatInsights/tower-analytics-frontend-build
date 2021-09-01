(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[158],{9771:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(92950),a=n.n(r),l=n(58788),o=n(43047),i=n(29587);const s=function(e){var t=e.message;return a().createElement(l.EmptyState,{variant:l.EmptyStateVariant.small},a().createElement(l.EmptyStateIcon,{icon:o.$O,color:i.global_danger_color_200.value}),a().createElement(l.Title,{headingLevel:"h2",size:"lg"},"Error"),a().createElement(l.EmptyStateBody,null,t))}},45994:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});var r=n(92950),a=n.n(r),l=n(58788),o=n(76889),i=n(75386),s={status:{type:"select",name:"Status",placeholder:"Filter by job status",hasChips:!0},quick_date_range:{type:"select",name:"Date",placeholder:"Filter by date",hasChips:!1},start_date:{type:"date",name:"Start date",hasChips:!1},end_date:{type:"date",name:"End date",hasChips:!1},job_type:{type:"select",name:"Job",placeholder:"Filter by job type",hasChips:!0},org_id:{type:"select",name:"Organization",placeholder:"Filter by organization",hasChips:!0},cluster_id:{type:"select",name:"Cluster",placeholder:"Filter by cluster",hasChips:!0},template_id:{type:"select",name:"Template",placeholder:"Filter by template",hasChips:!0},sort_options:{type:"select",name:"Sort by",placeholder:"Sort by attribute",hasChips:!1},automation_status:{type:"select",name:"Automation status",placeholder:"Filter by automation status",hasChips:!0},frequency_period:{type:"select",name:"Frequency",placeholder:"Filter by frequency",hasChips:!0},category:{type:"select",name:"Category",placeholder:"Filter by category",hasChips:!0},inventory_id:{type:"select",name:"Inventory",placeholder:"Filter by inventory",hasChips:!0},name:{type:"text",name:"Search by name",hasChips:!0},granularity:{type:"select",name:"Granularity",hasChips:!1}};const c=function(e){var t=e.selected,n=e.setSelected,o=void 0===n?function(){return null}:n,i=e.categories,s=void 0===i?[]:i,c=(0,r.useState)(!1),u=c[0],p=c[1];return a().createElement(l.ToolbarItem,null,a().createElement(l.Select,{isOpen:u,variant:l.SelectVariant.single,"aria-label":"Categories",onToggle:function(){return p(!u)},onSelect:function(e,t){o(t),p(!1)},selections:t,placeholderText:"Filter by"},s.map((function(e){var t=e.key,n=e.name;return a().createElement(l.SelectOption,{key:t,value:t},n)}))))};var u,p,d=n(29163),y=function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},f=(0,d.ZP)("span")(v||(u=["\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n"],p=["\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n"],Object.defineProperty?Object.defineProperty(u,"raw",{value:p}):u.raw=p,v=u)),m=function(e){return e&&e.map((function(e){var t=e.key,n=e.value,r=e.description;return a().createElement(l.SelectOption,{key:t,value:t,description:r},a().createElement(l.Tooltip,{content:a().createElement("div",null,n)},a().createElement(f,null,n)))}))};var v,g=n(45697),h=n.n(g),b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},E=function(e){var t=e.categoryKey,n=e.value,r=void 0===n?"":n,o=e.setValue,i=void 0===o?function(){return{}}:o,c=e.otherProps,u=void 0===c?{}:c,p=s[t];return a().createElement(l.DatePicker,b({"aria-label":p.name,value:r,onChange:i,inputProps:{isReadOnly:!0}},u))};E.propTypes={categoryKey:h().string.isRequired,value:h().string,setValue:h().func.isRequired,otherProps:h().any};const _=E;var k=n(80810),S=function(e){var t=e.categoryKey,n=e.isVisible,o=void 0===n||n,i=e.value,c=void 0===i?"":i,u=e.setValue,p=(0,r.useState)(c),d=p[0],y=p[1],f=s[t];return(0,r.useEffect)((function(){y(c)}),[c]),a().createElement(l.ToolbarFilter,{"data-cy":t,key:t,showToolbarItem:o,chips:f.hasChips&&c?[c]:[],categoryName:f.name,deleteChip:f.hasChips?function(){u("")}:void 0},a().createElement(l.InputGroup,null,a().createElement(l.TextInput,{type:"search","aria-label":f.name,value:d,onChange:y,onKeyDown:function(e){e.key&&"Enter"===e.key&&(e.preventDefault(),u(d))}}),a().createElement(l.Button,{variant:"control","aria-label":"Search button for "+f.name,onClick:function(){u(d)}},a().createElement(k.W1,null))))};S.propTypes={categoryKey:h().string.isRequired,value:h().any,isVisible:h().bool,setValue:h().func.isRequired};var C={select:function(e){var t,n,o=e.categoryKey,i=e.value,c=e.selectOptions,u=e.isVisible,p=void 0===u||u,d=e.setValue,f=(0,r.useState)(!1),v=f[0],g=f[1],h=s[o],b=c.map((function(e){var t=e.key,n=e.value,r=e.description;return{key:null==t?void 0:t.toString(),value:null==n?void 0:n.toString(),description:null==r?void 0:r.toString()}}));return a().createElement(l.ToolbarFilter,{"data-cy":o,key:o,showToolbarItem:p,chips:h.hasChips?Array.isArray(i)?(t=i.map((function(e){return e.toString()})),n=b,t&&n?t.reduce((function(e,t){return n.forEach((function(n){var r=n.key,a=n.value;r===t&&e.push(a)})),e}),[]):[]):function(e,t){var n;return e&&"string"==typeof e&&t&&(t.forEach((function(t){var r=t.key,a=t.value;r===e&&(n=a)})),void 0!==n)?[n]:[]}(i.toString(),b):[],categoryName:h.name,deleteChip:h.hasChips?function(e,t){return function(e){var t;if(Array.isArray(i)){var n=null===(t=b.find((function(t){return t.value===e})))||void 0===t?void 0:t.key,r=i.map((function(e){return e.toString()})).filter((function(e){return e!==n}));d(r)}else d(void 0)}(t)}:void 0},a().createElement(l.Select,{variant:Array.isArray(i)?l.SelectVariant.checkbox:l.SelectVariant.single,"aria-label":h.name,onToggle:function(){return g(!v)},onSelect:function(e,t){if(Array.isArray(i)){var n=i.map((function(e){return e.toString()}));d(n.includes(t.toString())?n.filter((function(e){return e!==t.toString()})):y(y([],n),[t]))}else d(t),g(!1)},selections:i,isOpen:v,hasInlineFilter:!0,placeholderText:h.placeholder,onFilter:function(e,t){return m(""===t?b:b.filter((function(e){return e.value.toString().toLowerCase().includes(t.toLowerCase())})))},maxHeight:"1000%"},m(b)))},date:_,text:S};const O=function(e){var t=e.categoryKey,n=e.value,r=e.selectOptions,l=e.isVisible,o=void 0===l||l,i=e.setValue,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["categoryKey","value","selectOptions","isVisible","setValue"]),u=s[t],p=C[u.type];return a().createElement(p,{categoryKey:t,value:n||("select"!==u.type?"":void 0),selectOptions:r,isVisible:o,setValue:i,otherProps:c})},w=function(e){var t=e.filterCategories,n=e.filters,o=e.setFilters,i=(0,r.useState)(Object.keys(t)[0]),u=i[0],p=i[1];return a().createElement(l.ToolbarGroup,{variant:"filter-group"},a().createElement(c,{selected:u,setSelected:p,categories:Object.keys(t).map((function(e){return{key:e,name:s[e].name}}))}),Object.keys(t).map((function(e){return a().createElement(O,{key:e,categoryKey:e,value:n[e],selectOptions:t[e],isVisible:u===e,setValue:function(t){return o(e,t)}})})))};var T=n(53345),V=function(e){return(0,T.Lg)(e).toISOString().split(/T/)[0]},F=function(e){var t=e.split("-");return new Date(+t[0],+t[1]-1,+t[2])};const j=function(e){var t=e.filters,n=e.setFilters,r=e.values,o=t.end_date||V(0),i=t.start_date||V(-30);return a().createElement(l.ToolbarGroup,{variant:l.ToolbarGroupVariant["filter-group"]},r.granularity&&a().createElement(O,{categoryKey:"granularity",value:t.granularity,selectOptions:r.granularity,setValue:function(e){return n("granularity",e)}}),a().createElement(O,{categoryKey:"quick_date_range",value:t.quick_date_range,selectOptions:r.quick_date_range,setValue:function(e){return n("quick_date_range",e)}}),"custom"===t.quick_date_range&&a().createElement(l.Split,{hasGutter:!0},a().createElement(l.SplitItem,null,a().createElement(O,{categoryKey:"start_date",value:i,setValue:function(e){return n("start_date",e)},validators:[function(e){return e>F(o)?"Must not be after end date":""}]})),a().createElement(l.SplitItem,{style:{paddingTop:"6px"}},"to"),a().createElement(l.SplitItem,null,a().createElement(O,{categoryKey:"end_date",value:o,setValue:function(e){return n("end_date",e)},validators:[function(e){return e<F(i)?"Must not be before start date":e>(0,T.Lg)()?"Must not be after today":""}]}))))};var x=n(44610),I=n(60532);const q=function(e){var t=e.filters,n=e.setFilters,r=e.sort_options;return a().createElement(l.ToolbarGroup,{variant:"filter-group"},a().createElement(O,{categoryKey:"sort_options",value:t.sort_options,selectOptions:r,setValue:function(e){return n("sort_options",e)}}),a().createElement(l.Button,{variant:l.ButtonVariant.control,onClick:function(){return n("sort_order","asc"===t.sort_order?"desc":"asc")}},"asc"===t.sort_order&&a().createElement(x.um,null),"desc"===t.sort_order&&a().createElement(I.WJ,null)))};var K=n(24307),P=n(73479);const A=function(e){var t=e.filters,n=e.setFilters,r=e.settingsExpanded,o=e.setSettingsExpanded;return a().createElement(l.Card,{isFlat:!0,style:{backgroundColor:"#EEEEEE"}},a().createElement(l.CardHeader,null,a().createElement(l.CardActions,null,a().createElement(l.Button,{variant:"plain",onClick:function(){return o(!r)}},a().createElement(K.q1,null))),a().createElement(l.CardTitle,null,"Settings")),a().createElement(l.CardBody,null,a().createElement(l.Switch,{id:"showRootWorkflowJobs",label:"Ignore nested workflows and jobs",labelOff:"Ignore nested workflows and jobs",isChecked:!!t.only_root_workflows_and_standalone_jobs,onChange:function(e){return n("only_root_workflows_and_standalone_jobs",e)}}),a().createElement(l.Tooltip,{position:"top",content:a().createElement("div",null," ","If enabled, nested workflows and jobs will not be included in the overall totals. Enable this option to filter out duplicate entries.")},a().createElement(P.pT,null))))};var B=n(334),G=n(21048);const L=function(e){var t=e.categories,n=e.filters,c=e.qsConfig,u=e.setFilters,p=e.pagination,d=void 0===p?null:p,y=e.hasSettings,f=void 0!==y&&y,m=e.additionalControls,v=void 0===m?[]:m,g=(0,r.useState)(!1),h=g[0],b=g[1],E=t.quick_date_range,_=t.sort_options,k=t.granularity,S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(t,["quick_date_range","sort_options","granularity"]),C=(0,B.useHistory)(),O=Object.keys(S).filter((function(e){return Object.keys(s).includes(e)})).reduce((function(e,t){return e[t]=S[t],e}),{}),T=function(e,t){u(e,t),(0,G.o1)(e,t,c,C)};return a().createElement(l.Toolbar,{id:c.namespace+"-filterable-toolbar-with-chip-groups",clearAllFilters:function(){return T(void 0,void 0)},collapseListedFiltersBreakpoint:"xl"},a().createElement(l.ToolbarContent,null,a().createElement(l.Button,{variant:l.ButtonVariant.control},a().createElement(o.k1,null)),Object.keys(O).length>0&&a().createElement(w,{filterCategories:O,filters:n,setFilters:T}),(E||k)&&a().createElement(j,{filters:n,values:{quick_date_range:E,granularity:k},setFilters:T}),_&&a().createElement(q,{filters:n,setFilters:T,sort_options:_}),f&&a().createElement(l.ToolbarItem,null,a().createElement(l.Button,{variant:l.ButtonVariant.plain,onClick:function(){return b(!h)},"aria-label":"settings",isActive:h},a().createElement(i.IE,null))),v.length>0&&a().createElement(l.ToolbarGroup,null,v.map((function(e,t){return a().createElement(l.ToolbarItem,{key:t},e)}))),d&&a().createElement(l.ToolbarItem,{variant:l.ToolbarItemVariant.pagination,visibility:{default:"hidden",lg:"visible"}},d)),h&&a().createElement(A,{filters:n,setFilters:T,settingsExpanded:h,setSettingsExpanded:b}))}}}]);
//# sourceMappingURL=../sourcemaps/158.07033006ffdab06ef9a2.js.map