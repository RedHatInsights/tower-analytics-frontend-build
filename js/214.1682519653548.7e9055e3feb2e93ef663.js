"use strict";(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[214],{9771:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(92950),n=a.n(r),l=a(1085),o=a(43047),i=a(91573);const c=function(e){var t=e.message;return n().createElement(l.EmptyState,{variant:l.EmptyStateVariant.small,"data-cy":"api_error_state"},n().createElement(l.EmptyStateIcon,{icon:o.$O,color:i.global_danger_color_200.value}),n().createElement(l.Title,{headingLevel:"h2",size:"lg"},"Error"),n().createElement(l.EmptyStateBody,null,t))}},13704:(e,t,a)=>{a.d(t,{Z:()=>O});var r,n,l=a(92950),o=a.n(l),i=a(1085),c=a(32042),s=a(29163),u=function(e,t,a){if(a||2===arguments.length)for(var r,n=0,l=t.length;n<l;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))},p=(0,s.default)("span")(y||(r=["\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n"],n=["\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n"],Object.defineProperty?Object.defineProperty(r,"raw",{value:n}):r.raw=n,y=r)),d=function(e){return e&&e.map((function(e){var t=e.key,a=e.value,r=e.description;return o().createElement(i.SelectOption,{key:t,value:t,description:r,"data-cy":t},o().createElement(i.Tooltip,{content:o().createElement("div",null,a)},o().createElement(p,null,a)))}))};var y,m=a(45697),f=a.n(m),v=function(){return v=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},v.apply(this,arguments)},g=function(e){var t=e.categoryKey,a=e.value,r=void 0===a?"":a,n=e.setValue,l=void 0===n?function(){return{}}:n,s=e.otherProps,u=void 0===s?{}:s,p=c.O[t];return o().createElement(i.DatePicker,v({"aria-label":p.name,id:t,key:t,value:r,onChange:function(e,t){return function(e){l(e)}(t)},inputProps:{isReadOnly:!0}},u))};g.propTypes={categoryKey:f().string.isRequired,value:f().string,setValue:f().func.isRequired,otherProps:f().any};const h=g;var b=a(80810),E=function(e){var t=e.categoryKey,a=e.isVisible,r=void 0===a||a,n=e.value,s=void 0===n?"":n,u=e.setValue,p=(0,l.useState)(s),d=p[0],y=p[1],m=c.O[t];return(0,l.useEffect)((function(){y(s)}),[s]),o().createElement(i.ToolbarFilter,{"data-cy":t,key:t,showToolbarItem:r,chips:m.hasChips&&s?[s]:[],categoryName:m.name,deleteChip:m.hasChips?function(){u("")}:void 0},o().createElement(i.InputGroup,null,o().createElement(i.TextInput,{type:"search","aria-label":m.name,value:d,onChange:y,onKeyDown:function(e){e.key&&"Enter"===e.key&&(e.preventDefault(),u(d))}}),o().createElement(i.Button,{variant:"control","aria-label":"Search button for ".concat(m.name),onClick:function(){u(d)}},o().createElement(b.W1,null))))};E.propTypes={categoryKey:f().string.isRequired,value:f().any,isVisible:f().bool,setValue:f().func.isRequired};var _={select:function(e){var t,a,r=e.categoryKey,n=e.value,s=e.selectOptions,p=e.isVisible,y=void 0===p||p,m=e.setValue,f=(0,l.useState)(!1),v=f[0],g=f[1],h=c.O[r],b=s.map((function(e){var t=e.key,a=e.value,r=e.description;return{key:null==t?void 0:t.toString(),value:null==a?void 0:a.toString(),description:null==r?void 0:r.toString()}})),E=b;return b=b.slice(0,500),o().createElement(i.ToolbarFilter,{"data-cy":r,key:r,showToolbarItem:y,chips:h.hasChips?Array.isArray(n)&&0===n.length||void 0===n?[]:Array.isArray(n)?(t=n.map((function(e){return e.toString()})),a=E,t&&a?t.reduce((function(e,t){return a.forEach((function(a){var r=a.key,n=a.value;r===t&&e.push(n)})),e}),[]):[]):function(e,t){var a;return e&&"string"==typeof e&&t&&(t.forEach((function(t){var r=t.key,n=t.value;r===e&&(a=n)})),void 0!==a)?[a]:[]}(n.toString(),b):[],categoryName:h.name,deleteChip:h.hasChips?function(e,t){return function(e){var t;if(Array.isArray(n)){var a=null===(t=E.find((function(t){return t.value===e})))||void 0===t?void 0:t.key,r=n.map((function(e){return e.toString()})).filter((function(e){return e!==a}));m(r)}else m(void 0)}(t)}:void 0},o().createElement(i.Select,{variant:Array.isArray(n)?i.SelectVariant.checkbox:i.SelectVariant.single,"aria-label":h.name,onToggle:function(){return g(!v)},onSelect:function(e,t){if(Array.isArray(n)){var a=n.map((function(e){return e.toString()}));m(a.includes(t.toString())?a.filter((function(e){return e!==t.toString()})):u(u([],a,!0),[t],!1))}else m(t),g(!1)},selections:n,isOpen:v,hasInlineFilter:!0,placeholderText:h.placeholder,onFilter:function(e,t){return d(""===t?b:E.filter((function(e){return e.value.toString().toLowerCase().includes(t.toLowerCase())})).slice(0,50))},maxHeight:"1000%"},d(b)))},date:h,text:E};const O=function(e){var t=e.categoryKey,a=e.value,r=e.selectOptions,n=e.isVisible,l=void 0===n||n,i=e.setValue,s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["categoryKey","value","selectOptions","isVisible","setValue"]),u=c.O[t],p=_[u.type];return o().createElement(p,{"data-cy":u.name,categoryKey:t,value:a||("select"!==u.type?"":void 0),selectOptions:r,isVisible:l,setValue:i,otherProps:s})}},43345:(e,t,a)=>{a.d(t,{MA:()=>s,gf:()=>y,fQ:()=>C,nv:()=>v});var r=a(92950),n=a.n(r),l=a(1085);const o=function(e){var t=e.categoryKey,a=e.selected,o=e.setSelected,i=void 0===o?function(){return null}:o,c=e.categories,s=void 0===c?[]:c,u=(0,r.useState)(!1),p=u[0],d=u[1];return n().createElement(l.ToolbarItem,{"data-cy":t},n().createElement(l.Select,{isOpen:p,variant:l.SelectVariant.single,"aria-label":"Categories",onToggle:function(){return d(!p)},onSelect:function(e,t){i(t),d(!1)},selections:a,placeholderText:"Filter by"},s.map((function(e){var t=e.key,a=e.name;return n().createElement(l.SelectOption,{key:t,value:t},a)}))))};var i=a(13704),c=a(32042);const s=function(e){var t=e.filterCategories,a=e.defaultSelected,s=e.filters,u=e.setFilters,p=(0,r.useState)(a||Object.keys(t)[0]),d=p[0],y=p[1];return n().createElement(l.ToolbarGroup,{variant:"filter-group"},n().createElement(o,{categoryKey:"category_selector",selected:d,setSelected:y,categories:Object.keys(t).map((function(e){return{key:e,name:c.O[e].name}}))}),Object.keys(t).map((function(e){return n().createElement(i.Z,{key:e,categoryKey:e,value:s[e],selectOptions:t[e],isVisible:d===e,setValue:function(t){return u(e,t)}})})))};var u=a(53345),p=function(e){return(0,u.Lg)(e).toISOString().split(/T/)[0]},d=function(e){var t=e.split("-");return new Date(+t[0],+t[1]-1,+t[2])};const y=function(e){var t=e.filters,a=e.setFilters,r=e.values,o=t.end_date||p(0),c=t.start_date||p(-30);return n().createElement(l.ToolbarGroup,{variant:l.ToolbarGroupVariant["filter-group"]},r.granularity&&n().createElement(i.Z,{categoryKey:"granularity",value:t.granularity,selectOptions:r.granularity,setValue:function(e){return a("granularity",e)}}),n().createElement(i.Z,{categoryKey:"quick_date_range",value:t.quick_date_range,selectOptions:r.quick_date_range,setValue:function(e){return a("quick_date_range",e)}}),["custom","roi_custom"].includes(t.quick_date_range)&&n().createElement(l.Split,{hasGutter:!0},n().createElement(l.SplitItem,null,n().createElement(i.Z,{categoryKey:"start_date",value:c,setValue:function(e){return a("start_date",e)},validators:[function(e){return e>d(o)?"Must not be after end date":""}]})),n().createElement(l.SplitItem,{style:{paddingTop:"6px"}},"to"),n().createElement(l.SplitItem,null,n().createElement(i.Z,{categoryKey:"end_date",value:o,setValue:function(e){return a("end_date",e)},validators:[function(e){return e<d(c)?"Must not be before start date":e>(0,u.Lg)()?"Must not be after today":""}]}))))};var m=a(44610),f=a(60532);const v=function(e){var t=e.filters,a=e.setFilters,r=e.sort_options;return n().createElement(l.ToolbarGroup,{variant:l.ToolbarGroupVariant["filter-group"]},n().createElement(l.ToolbarItem,null,n().createElement(i.Z,{categoryKey:"sort_options",value:t.sort_options,selectOptions:r,setValue:function(e){return a("sort_options",e)}})),n().createElement(l.ToolbarItem,{"data-cy":"sort"},n().createElement(l.Button,{variant:l.ButtonVariant.control,"data-cy":"asc"===t.sort_order?"desc":"asc",onClick:function(){return a("sort_order","asc"===t.sort_order?"desc":"asc")}},"asc"===t.sort_order&&n().createElement(m.um,null),"desc"===t.sort_order&&n().createElement(f.WJ,null))))};var g=a(91290),h=a(24307),b=a(29163),E=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},_=(0,b.default)(g.iC)(k||(k=E(["\n  color: #151515;\n"],["\n  color: #151515;\n"]))),O=(0,b.default)(l.Button)(S||(S=E(["\n  vertical-align: middle;\n"],["\n  vertical-align: middle;\n"])));const C=function(e){var t=e.settingsExpanded,a=e.setSettingsExpanded,r=e.id,o=e.label,i=e.labelOff,c=e.isChecked,s=e.onChange,u=e.ariaLabel,p=e.bodyContent;return n().createElement(l.Card,{isFlat:!0,style:{backgroundColor:"#EEEEEE"}},n().createElement(l.CardHeader,null,n().createElement(l.CardActions,null,n().createElement(l.Button,{variant:"plain",onClick:function(){return a(!t)}},n().createElement(h.q1,null))),n().createElement(l.CardTitle,null,"Settings")),n().createElement(l.CardBody,null,n().createElement(l.Switch,{id:r,label:o,labelOff:i,isChecked:!!c,onChange:s}),n().createElement(O,{variant:"plain"},n().createElement(l.Popover,{"aria-label":u,position:"top",bodyContent:n().createElement("div",null," ",p," ")},n().createElement(_,null)))))};var k,S},68936:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(92950),n=a.n(r),l=a(1085),o=a(76889),i=a(75386),c=a(32042),s=a(43345);const u=function(e){var t=e.categories,a=e.filters,u=e.defaultSelected,p=void 0===u?"":u,d=e.setFilters,y=e.pagination,m=void 0===y?null:y,f=e.hasSettings,v=void 0!==f&&f,g=e.settingsPanel,h=void 0===g?null:g,b=e.additionalControls,E=void 0===b?[]:b,_=(0,r.useState)(!1),O=_[0],C=_[1],k=t.quick_date_range,S=t.sort_options,T=t.granularity,F=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(t,["quick_date_range","sort_options","granularity"]);Object.keys(t).includes("name")&&(null!==t.name[0].value?c.O.name.type="select":c.O.name.type="text");var V=Object.keys(F).filter((function(e){return Object.keys(c.O).includes(e)&&Object.keys(a).includes(e)})).reduce((function(e,t){return e[t]=F[t],e}),{}),w=function(e,t){d(e,t)};return n().createElement(l.Toolbar,{className:"pf-m-toggle-group-container",clearAllFilters:function(){return w(void 0,void 0)},collapseListedFiltersBreakpoint:"xl","data-cy":"filter-toolbar"},n().createElement(l.ToolbarContent,null,n().createElement(l.ToolbarToggleGroup,{toggleIcon:n().createElement(o.k1,null),breakpoint:"xl"},Object.keys(V).length>0&&n().createElement(s.MA,{filterCategories:V,defaultSelected:p,filters:a,setFilters:w}),(k||T)&&n().createElement(s.gf,{filters:a,values:{quick_date_range:k,granularity:T},setFilters:w}),S&&n().createElement(s.nv,{filters:a,setFilters:w,sort_options:S})),v&&n().createElement(l.ToolbarItem,null,n().createElement(l.Button,{variant:l.ButtonVariant.plain,onClick:function(){return C(!O)},"aria-label":"settings","data-cy":"settings",isActive:O},n().createElement(i.IE,null))),E.length>0&&n().createElement(l.ToolbarGroup,null,E.map((function(e,t){return n().createElement(l.ToolbarItem,{key:t},e)}))),m&&n().createElement(l.ToolbarItem,{"data-cy":"top_pagination",variant:l.ToolbarItemVariant.pagination,visibility:{default:"hidden",lg:"visible"}},m)),O&&h&&h(C,O))}},32042:(e,t,a)=>{a.d(t,{O:()=>r});var r={status:{type:"select",name:"Status",placeholder:"Filter by job status",hasChips:!0},quick_date_range:{type:"select",name:"Date",placeholder:"Filter by date",hasChips:!1},start_date:{type:"date",name:"Start date",hasChips:!1},end_date:{type:"date",name:"End date",hasChips:!1},job_type:{type:"select",name:"Job",placeholder:"Filter by job type",hasChips:!0},org_id:{type:"select",name:"Organization",placeholder:"Filter by organization",hasChips:!0},cluster_id:{type:"select",name:"Cluster",placeholder:"Filter by cluster",hasChips:!0},task_action_id:{type:"select",name:"Module",placeholder:"Filter by module",hasChips:!0},template_id:{type:"select",name:"Template",placeholder:"Filter by template",hasChips:!0},sort_options:{type:"select",name:"Sort by",placeholder:"Sort by attribute",hasChips:!1},automation_status:{type:"select",name:"Automation status",placeholder:"Filter by automation status",hasChips:!0},host_status:{type:"select",name:"Host status",placeholder:"Filter by host status",hasChips:!0},frequency_period:{type:"select",name:"Frequency",placeholder:"Filter by frequency",hasChips:!0},category:{type:"select",name:"Category",placeholder:"Filter by category",hasChips:!0},inventory_id:{type:"select",name:"Inventory",placeholder:"Filter by inventory",hasChips:!0},percentile:{type:"select",name:"Percentile",placeholder:"Filter by percentile",hasChips:!0},adoption_rate_type:{type:"select",name:"Adoption rate type",placeholder:"Filter by adoption rate type",hasChips:!1},granularity:{type:"select",name:"Granularity",hasChips:!1},tags:{type:"select",name:"Tag",placeholder:"Filter by tag",hasChips:!0},name:{type:"text",name:"Name",placeholder:"Filter by name",hasChips:!0},description:{type:"text",name:"Description",hasChips:!0}}},83474:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a(68936).Z}}]);