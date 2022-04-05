"use strict";(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[214],{9771:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(92950),a=n.n(r),l=n(1085),o=n(43047),i=n(91573);const s=function(e){var t=e.message;return a().createElement(l.EmptyState,{variant:l.EmptyStateVariant.small},a().createElement(l.EmptyStateIcon,{icon:o.$O,color:i.global_danger_color_200.value}),a().createElement(l.Title,{headingLevel:"h2",size:"lg"},"Error"),a().createElement(l.EmptyStateBody,null,t))}},13704:(e,t,n)=>{n.d(t,{Z:()=>k});var r,a,l=n(92950),o=n.n(l),i=n(1085),s=n(32042),c=n(29163),u=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,l=t.length;a<l;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},p=(0,c.ZP)("span")(y||(r=["\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n"],a=["\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n"],Object.defineProperty?Object.defineProperty(r,"raw",{value:a}):r.raw=a,y=r)),d=function(e){return e&&e.map((function(e){var t=e.key,n=e.value,r=e.description;return o().createElement(i.SelectOption,{key:t,value:t,description:r},o().createElement(i.Tooltip,{content:o().createElement("div",null,n)},o().createElement(p,null,n)))}))};var y,m=n(45697),f=n.n(m),v=function(){return v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},v.apply(this,arguments)},g=function(e){var t=e.categoryKey,n=e.value,r=void 0===n?"":n,a=e.setValue,l=void 0===a?function(){return{}}:a,c=e.otherProps,u=void 0===c?{}:c,p=s.O[t];return o().createElement(i.DatePicker,v({"aria-label":p.name,value:r,onChange:l,inputProps:{isReadOnly:!0}},u))};g.propTypes={categoryKey:f().string.isRequired,value:f().string,setValue:f().func.isRequired,otherProps:f().any};const b=g;var h=n(80810),E=function(e){var t=e.categoryKey,n=e.isVisible,r=void 0===n||n,a=e.value,c=void 0===a?"":a,u=e.setValue,p=(0,l.useState)(c),d=p[0],y=p[1],m=s.O[t];return(0,l.useEffect)((function(){y(c)}),[c]),o().createElement(i.ToolbarFilter,{"data-cy":t,key:t,showToolbarItem:r,chips:m.hasChips&&c?[c]:[],categoryName:m.name,deleteChip:m.hasChips?function(){u("")}:void 0},o().createElement(i.InputGroup,null,o().createElement(i.TextInput,{type:"search","aria-label":m.name,value:d,onChange:y,onKeyDown:function(e){e.key&&"Enter"===e.key&&(e.preventDefault(),u(d))}}),o().createElement(i.Button,{variant:"control","aria-label":"Search button for "+m.name,onClick:function(){u(d)}},o().createElement(h.W1,null))))};E.propTypes={categoryKey:f().string.isRequired,value:f().any,isVisible:f().bool,setValue:f().func.isRequired};var _={select:function(e){var t,n,r=e.categoryKey,a=e.value,c=e.selectOptions,p=e.isVisible,y=void 0===p||p,m=e.setValue,f=(0,l.useState)(!1),v=f[0],g=f[1],b=s.O[r],h=c.map((function(e){var t=e.key,n=e.value,r=e.description;return{key:null==t?void 0:t.toString(),value:null==n?void 0:n.toString(),description:null==r?void 0:r.toString()}}));return o().createElement(i.ToolbarFilter,{"data-cy":r,key:r,showToolbarItem:y,chips:b.hasChips?Array.isArray(a)?(t=a.map((function(e){return e.toString()})),n=h,t&&n?t.reduce((function(e,t){return n.forEach((function(n){var r=n.key,a=n.value;r===t&&e.push(a)})),e}),[]):[]):function(e,t){var n;return e&&"string"==typeof e&&t&&(t.forEach((function(t){var r=t.key,a=t.value;r===e&&(n=a)})),void 0!==n)?[n]:[]}(a.toString(),h):[],categoryName:b.name,deleteChip:b.hasChips?function(e,t){return function(e){var t;if(Array.isArray(a)){var n=null===(t=h.find((function(t){return t.value===e})))||void 0===t?void 0:t.key,r=a.map((function(e){return e.toString()})).filter((function(e){return e!==n}));m(r)}else m(void 0)}(t)}:void 0},o().createElement(i.Select,{variant:Array.isArray(a)?i.SelectVariant.checkbox:i.SelectVariant.single,"aria-label":b.name,onToggle:function(){return g(!v)},onSelect:function(e,t){if(Array.isArray(a)){var n=a.map((function(e){return e.toString()}));m(n.includes(t.toString())?n.filter((function(e){return e!==t.toString()})):u(u([],n,!0),[t],!1))}else m(t),g(!1)},selections:a,isOpen:v,hasInlineFilter:!0,placeholderText:b.placeholder,onFilter:function(e,t){return d(""===t?h:h.filter((function(e){return e.value.toString().toLowerCase().includes(t.toLowerCase())})))},maxHeight:"1000%"},d(h)))},date:b,text:E};const k=function(e){var t=e.categoryKey,n=e.value,r=e.selectOptions,a=e.isVisible,l=void 0===a||a,i=e.setValue,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["categoryKey","value","selectOptions","isVisible","setValue"]),u=s.O[t],p=_[u.type];return o().createElement(p,{categoryKey:t,value:n||("select"!==u.type?"":void 0),selectOptions:r,isVisible:l,setValue:i,otherProps:c})}},50596:(e,t,n)=>{n.d(t,{Z:()=>V});var r=n(92950),a=n.n(r),l=n(1085),o=n(76889),i=n(75386),s=n(32042);const c=function(e){var t=e.categoryKey,n=e.selected,o=e.setSelected,i=void 0===o?function(){return null}:o,s=e.categories,c=void 0===s?[]:s,u=(0,r.useState)(!1),p=u[0],d=u[1];return a().createElement(l.ToolbarItem,{"data-testid":t},a().createElement(l.Select,{isOpen:p,variant:l.SelectVariant.single,"aria-label":"Categories",onToggle:function(){return d(!p)},onSelect:function(e,t){i(t),d(!1)},selections:n,placeholderText:"Filter by"},c.map((function(e){var t=e.key,n=e.name;return a().createElement(l.SelectOption,{key:t,value:t},n)}))))};var u=n(13704);const p=function(e){var t=e.filterCategories,n=e.defaultSelected,o=e.filters,i=e.setFilters,p=(0,r.useState)(n||Object.keys(t)[0]),d=p[0],y=p[1];return a().createElement(l.ToolbarGroup,{variant:"filter-group"},a().createElement(c,{categoryKey:"category_selector",selected:d,setSelected:y,categories:Object.keys(t).map((function(e){return{key:e,name:s.O[e].name}}))}),Object.keys(t).map((function(e){return a().createElement(u.Z,{key:e,categoryKey:e,value:o[e],selectOptions:t[e],isVisible:d===e,setValue:function(t){return i(e,t)}})})))};var d=n(53345),y=function(e){return(0,d.Lg)(e).toISOString().split(/T/)[0]},m=function(e){var t=e.split("-");return new Date(+t[0],+t[1]-1,+t[2])};const f=function(e){var t=e.filters,n=e.setFilters,r=e.values,o=t.end_date||y(0),i=t.start_date||y(-30);return a().createElement(l.ToolbarGroup,{variant:l.ToolbarGroupVariant["filter-group"]},r.granularity&&a().createElement(u.Z,{categoryKey:"granularity",value:t.granularity,selectOptions:r.granularity,setValue:function(e){return n("granularity",e)}}),a().createElement(u.Z,{categoryKey:"quick_date_range",value:t.quick_date_range,selectOptions:r.quick_date_range,setValue:function(e){return n("quick_date_range",e)}}),["custom","roi_custom"].includes(t.quick_date_range)&&a().createElement(l.Split,{hasGutter:!0},a().createElement(l.SplitItem,null,a().createElement(u.Z,{categoryKey:"start_date",value:i,setValue:function(e){return n("start_date",e)},validators:[function(e){return e>m(o)?"Must not be after end date":""}]})),a().createElement(l.SplitItem,{style:{paddingTop:"6px"}},"to"),a().createElement(l.SplitItem,null,a().createElement(u.Z,{categoryKey:"end_date",value:o,setValue:function(e){return n("end_date",e)},validators:[function(e){return e<m(i)?"Must not be before start date":e>(0,d.Lg)()?"Must not be after today":""}]}))))};var v=n(44610),g=n(60532);const b=function(e){var t=e.filters,n=e.setFilters,r=e.sort_options;return a().createElement(l.ToolbarGroup,{variant:l.ToolbarGroupVariant["filter-group"]},a().createElement(l.ToolbarItem,null,a().createElement(u.Z,{categoryKey:"sort_options",value:t.sort_options,selectOptions:r,setValue:function(e){return n("sort_options",e)}})),a().createElement(l.ToolbarItem,null,a().createElement(l.Button,{variant:l.ButtonVariant.control,onClick:function(){return n("sort_order","asc"===t.sort_order?"desc":"asc")}},"asc"===t.sort_order&&a().createElement(v.um,null),"desc"===t.sort_order&&a().createElement(g.WJ,null))))};var h=n(91290),E=n(24307),_=n(29163),k=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},O=(0,_.ZP)(h.iC)(w||(w=k(["\n  color: #151515;\n"],["\n  color: #151515;\n"]))),S=(0,_.ZP)(l.Button)(T||(T=k(["\n  vertical-align: middle;\n"],["\n  vertical-align: middle;\n"])));const C=function(e){var t=e.filters,n=e.setFilters,r=e.settingsExpanded,o=e.setSettingsExpanded;return a().createElement(l.Card,{isFlat:!0,style:{backgroundColor:"#EEEEEE"}},a().createElement(l.CardHeader,null,a().createElement(l.CardActions,null,a().createElement(l.Button,{variant:"plain",onClick:function(){return o(!r)}},a().createElement(E.q1,null))),a().createElement(l.CardTitle,null,"Settings")),a().createElement(l.CardBody,null,a().createElement(l.Switch,{id:"showRootWorkflowJobs",label:"Ignore nested workflows and jobs",labelOff:"Ignore nested workflows and jobs",isChecked:!!t.only_root_workflows_and_standalone_jobs,onChange:function(e){return n("only_root_workflows_and_standalone_jobs",e)}}),a().createElement(S,{variant:"plain"},a().createElement(l.Popover,{"aria-label":"ignore nested workflow popover",position:"top",bodyContent:a().createElement("div",null,"If enabled, nested workflows and jobs will not be included in the overall totals. Enable this option to filter out duplicate entries.")},a().createElement(O,null)))))};var w,T;const V=function(e){var t=e.categories,n=e.filters,c=e.defaultSelected,u=void 0===c?"":c,d=e.setFilters,y=e.pagination,m=void 0===y?null:y,v=e.hasSettings,g=void 0!==v&&v,h=e.additionalControls,E=void 0===h?[]:h,_=(0,r.useState)(!1),k=_[0],O=_[1],S=t.quick_date_range,w=t.sort_options,T=t.granularity,V=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(t,["quick_date_range","sort_options","granularity"]),j=Object.keys(V).filter((function(e){return Object.keys(s.O).includes(e)&&Object.keys(n).includes(e)})).reduce((function(e,t){return e[t]=V[t],e}),{}),F=function(e,t){d(e,t)};return a().createElement(l.Toolbar,{className:"pf-m-toggle-group-container",clearAllFilters:function(){return F(void 0,void 0)},collapseListedFiltersBreakpoint:"xl"},a().createElement(l.ToolbarContent,null,a().createElement(l.ToolbarToggleGroup,{toggleIcon:a().createElement(o.k1,null),breakpoint:"xl"},Object.keys(j).length>0&&a().createElement(p,{filterCategories:j,defaultSelected:u,filters:n,setFilters:F}),(S||T)&&a().createElement(f,{filters:n,values:{quick_date_range:S,granularity:T},setFilters:F}),w&&a().createElement(b,{filters:n,setFilters:F,sort_options:w})),g&&a().createElement(l.ToolbarItem,null,a().createElement(l.Button,{variant:l.ButtonVariant.plain,onClick:function(){return O(!k)},"aria-label":"settings",isActive:k},a().createElement(i.IE,null))),E.length>0&&a().createElement(l.ToolbarGroup,null,E.map((function(e,t){return a().createElement(l.ToolbarItem,{key:t},e)}))),m&&a().createElement(l.ToolbarItem,{variant:l.ToolbarItemVariant.pagination,visibility:{default:"hidden",lg:"visible"}},m)),k&&a().createElement(C,{filters:n,setFilters:F,settingsExpanded:k,setSettingsExpanded:O}))}},32042:(e,t,n)=>{n.d(t,{O:()=>r});var r={status:{type:"select",name:"Status",placeholder:"Filter by job status",hasChips:!0},quick_date_range:{type:"select",name:"Date",placeholder:"Filter by date",hasChips:!1},start_date:{type:"date",name:"Start date",hasChips:!1},end_date:{type:"date",name:"End date",hasChips:!1},job_type:{type:"select",name:"Job",placeholder:"Filter by job type",hasChips:!0},org_id:{type:"select",name:"Organization",placeholder:"Filter by organization",hasChips:!0},cluster_id:{type:"select",name:"Cluster",placeholder:"Filter by cluster",hasChips:!0},task_action_id:{type:"select",name:"Module",placeholder:"Filter by module",hasChips:!0},template_id:{type:"select",name:"Template",placeholder:"Filter by template",hasChips:!0},sort_options:{type:"select",name:"Sort by",placeholder:"Sort by attribute",hasChips:!1},automation_status:{type:"select",name:"Automation status",placeholder:"Filter by automation status",hasChips:!0},frequency_period:{type:"select",name:"Frequency",placeholder:"Filter by frequency",hasChips:!0},category:{type:"select",name:"Category",placeholder:"Filter by category",hasChips:!0},inventory_id:{type:"select",name:"Inventory",placeholder:"Filter by inventory",hasChips:!0},name:{type:"text",name:"Search by name",hasChips:!0},granularity:{type:"select",name:"Granularity",hasChips:!1}}},83474:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(50596).Z}}]);
//# sourceMappingURL=../sourcemaps/214.ac547d2ade2b120eb6a6bd01ec66402a.js.map