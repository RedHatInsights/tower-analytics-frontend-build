"use strict";(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[6219],{50470:(e,t,n)=>{t.mq={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},t.LA=n(35183).createIcon(t.mq),t.ZP=t.LA},48236:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(92950),r=n.n(a),i=n(1085),l=n(76473);const o=function(){return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.full,style:{minHeight:"400px"}},r().createElement(i.EmptyStateIcon,{icon:l.TF}),r().createElement(i.Title,{headingLevel:"h5",size:"lg"},"Loading..."),r().createElement(i.EmptyStateBody,null,"Please wait."))}},83061:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(92950),r=n.n(a),i=n(1085),l=n(76473);const o=function(e){var t=e.title,n=e.subtext;return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.full,style:{minHeight:"400px"}},r().createElement(i.EmptyStateIcon,{icon:l.TF}),r().createElement(i.Title,{headingLevel:"h5",size:"lg"},t||"No Data"),n&&r().createElement(i.EmptyStateBody,null,n))}},12613:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(92950),r=n.n(a),i=n(45697),l=n.n(i),o=n(1085),c=function(){return c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},s=[{title:"5",value:5},{title:"10",value:10},{title:"15",value:15},{title:"20",value:20},{title:"25",value:25}],m=function(e){var t=e.count,n=void 0===t?0:t,a=e.perPageOptions,i=void 0===a?null:a,l=e.params,m=e.setPagination,u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["count","perPageOptions","params","setPagination"]),f=l.offset,d=l.limit,p=Math.floor(f/d+1),g=function(e){return(e-1)*d};return r().createElement(o.Pagination,c({"data-cy":u.isCompact?"pagination_top":"pagination_bottom",itemCount:n,widgetId:"aa-pagination",perPageOptions:null!=i?i:s,perPage:d,page:p,onPerPageSelect:function(e,t,n){m(g(n),t)},onSetPage:function(e,t){m(g(t))}},u))};m.propTypes={count:l().number,params:l().exact({offset:l().number.isRequired,limit:l().number.isRequired}).isRequired,setPagination:l().func.isRequired,perPageOptions:l().arrayOf(l().exact({title:l().string.isRequired,value:l().number.isRequired}).isRequired)};const u=m},19173:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var a,r,i,l=n(92950),o=n.n(l),c=n(16559),s=n(29163),m=n(48236),u=n(83061),f=n(49148),d=n(77388),p=n(86350),g=n(48716),E=n(39173),y=n(1085),v=n(30168),b=n(45697),w=n.n(b),h=n(30381),x=n.n(h),k=n(50470),P=n(53345),C=(0,s.ZP)(k.ZP)(a||(a=(0,v.Z)(["\n  margin-left: 7px;\n  color: var(--pf-global--Color--400);\n  font-size: 14px;\n"]))),Z=(0,s.ZP)(y.NotificationDrawerListItem)(r||(r=(0,v.Z)(["\n  border-top: 1px solid var(--pf-global--BorderColor--light-100);\n  border-bottom::nth-child(odd): 1px solid var(--pf-global--BorderColor--light-100);\n  box-shadow: none;\n  &:focus {\n    outline: none;\n  }\n"]))),S=(0,s.ZP)(y.NotificationDrawerList)(i||(i=(0,v.Z)(["\n  &:last-child {\n    border-bottom: 1px solid var(--pf-global--BorderColor--light-100);\n  }\n"]))),L=function(e){var t=x()(e),n=x()().utc();return n.isAfter(t)?"".concat(n.diff(t,"days")," day(s) ago."):t.isSame(n,"day")?t.valueOf()>36e5?"".concat(t.diff(n,"hours")," hour(s) ago."):"".concat(n.diff(t,"minutes")," minute(s) ago."):void 0},O=function(e){return e.notifications.map((function(e){var t=e.date,n=e.message,a=e.label,r=e.notification_id,i=e.tower_url;return""===a||"notice"===a?o().createElement(Z,{variant:"info",key:t+"-"+r},o().createElement(y.NotificationDrawerListItemHeader,{variant:"info",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,P.kC)(a),o().createElement(C,null)):(0,P.kC)(a))}),o().createElement(y.NotificationDrawerListItemBody,null,n," ")):"error"===a?o().createElement(Z,{variant:"danger",key:t+"-"+r},o().createElement(y.NotificationDrawerListItemHeader,{variant:"danger",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,P.kC)(a),o().createElement(C,null)):(0,P.kC)(a))}),o().createElement(y.NotificationDrawerListItemBody,{timestamp:L(t)},n," ")):"warning"===a?o().createElement(Z,{variant:"warning",key:t+"-"+r},o().createElement(y.NotificationDrawerListItemHeader,{variant:"warning",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,P.kC)(a),o().createElement(C,null)):(0,P.kC)(a))}),o().createElement(y.NotificationDrawerListItemBody,{timestamp:L(t)},n," ")):void 0}))},N=function(e){return e.notifications.filter((function(e){return"error"===e.label})).map((function(e){var t=e.message,n=e.date,a=e.label,r=e.notification_id,i=e.tower_url;return o().createElement(Z,{variant:"danger",key:n+"-"+r},o().createElement(y.NotificationDrawerListItemHeader,{variant:"danger",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,P.kC)(a),o().createElement(C,null)):(0,P.kC)(a))}),o().createElement(y.NotificationDrawerListItemBody,{timestamp:L(n)},t," "))}))},_=function(e){return e.notifications.filter((function(e){return"notice"===e.label})).map((function(e){var t=e.message,n=e.date,a=e.label,r=e.notification_id,i=e.tower_url;return o().createElement(Z,{variant:"info",key:n+"-"+r},o().createElement(y.NotificationDrawerListItemHeader,{variant:"info",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,P.kC)(a),o().createElement(C,null)):(0,P.kC)(a))}),o().createElement(y.NotificationDrawerListItemBody,{timestamp:L(n)},t," "))}))},I=function(e){return e.notifications.filter((function(e){return"warning"===e.label})).map((function(e){var t=e.message,n=e.date,a=e.label,r=e.notification_id,i=e.tower_url;return o().createElement(Z,{variant:"warning",key:n+"-"+r},o().createElement(y.NotificationDrawerListItemHeader,{variant:"warning",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,P.kC)(a),o().createElement(C,null)):(0,P.kC)(a))}),o().createElement(y.NotificationDrawerListItemBody,{timestamp:L(n)},t," "))}))},D=function(e){var t=e.filterBy,n=e.notifications;return o().createElement(o().Fragment,null,o().createElement(S,null,n.length<=0&&o().createElement(m.Z,null),""===t&&o().createElement(O,{notifications:n}),"notice"===t&&o().createElement(_,{notifications:n}),"error"===t&&o().createElement(N,{notifications:n}),"warning"===t&&o().createElement(I,{notifications:n})))};O.propTypes={notifications:w().array},N.propTypes={notifications:w().array},I.propTypes={notifications:w().array},D.propTypes={notifications:w().array,filterBy:w().string};const F=D;var B=n(12613),H=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},V=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,i=t.length;r<i;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},j=(0,s.ZP)(y.CardTitle)(z||(z=H(["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 1035px) {\n    display: block;\n  }\n"],["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 1035px) {\n    display: block;\n  }\n"]))),q=s.ZP.div(M||(M=H(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 1035px) {\n    display: block;\n  }\n\n  select {\n    margin: 0 10px;\n    width: 150px;\n\n    @media screen and (max-width: 1035px) {\n      margin: 10px 10px 0 0;\n    }\n\n    @media screen and (max-width: 865px) {\n      width: 100%;\n    }\n  }\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 1035px) {\n    display: block;\n  }\n\n  select {\n    margin: 0 10px;\n    width: 150px;\n\n    @media screen and (max-width: 1035px) {\n      margin: 10px 10px 0 0;\n    }\n\n    @media screen and (max-width: 865px) {\n      width: 100%;\n    }\n  }\n"]))),A=[{value:"please choose",label:"Select Notification Severity",disabled:!0},{value:"error",label:"View Critical",disabled:!1},{value:"warning",label:"View Warning",disabled:!1},{value:"notice",label:"View Notice",disabled:!1},{value:"",label:"View All",disabled:!1}],T={limit:5,offset:0,sort_options:"created"};const R=function(){var e,t,n=(0,l.useState)(""),a=n[0],r=n[1],i=(0,c.Kx)(T),s=i.queryParams,v=i.setId,b=i.setFromPagination,w=i.setSeverity,h=s,x=h.severity,k=h.limit,P=h.offset,C=(0,d.ZP)((0,l.useCallback)((function(){return(0,f.A7)(s)}),[s]),{notifications:[],meta:{count:0}}),Z=C.result,S=Z.notifications,L=Z.meta,O=C.isLoading,N=C.isSuccess,_=C.error,I=C.request,D=(0,d.ZP)((function(){return(0,f.hD)()}),{templates:[]}),H=D.result.templates,R=void 0===H?[]:H,z=D.request;return(0,l.useEffect)((function(){z()}),[]),(0,l.useEffect)((function(){I()}),[s]),o().createElement(o().Fragment,null,o().createElement(g.Z,null,o().createElement(E.Z,{title:"Notifications"})),o().createElement(o().Fragment,null,o().createElement(p.Z,null,o().createElement(y.Card,null,o().createElement(j,null,o().createElement(q,null,o().createElement(y.FormSelect,{name:"selectedCluster",value:a,onChange:function(e){r(e),v(e),b(0)},"aria-label":"Select Cluster"},(e=R,t=e.map((function(e){var t=e.label,n=e.cluster_id,a=e.install_uuid;return{value:n,label:null!=t?t:a,disabled:!1}})),V(V([],[{value:"please choose",label:"Select cluster",disabled:!0},{value:"",label:"All Clusters",disabled:!1},{value:"-1",label:"Unassociated",disabled:!1}],!0),t,!0)).map((function(e,t){var n=e.value,a=e.label,r=e.disabled;return o().createElement(y.FormSelectOption,{isDisabled:r,key:t,value:n,label:a})}))),o().createElement(y.FormSelect,{name:"selectedNotification",value:x||"",onChange:function(e){w(e),b(0)},"aria-label":"Select Notification Type"},A.map((function(e,t){var n=e.disabled,a=e.value,r=e.label;return o().createElement(y.FormSelectOption,{isDisabled:n,key:t,value:a,label:r})})))),o().createElement(B.Z,{count:null==L?void 0:L.count,params:{limit:+k,offset:+P},setPagination:b,isCompact:!0})),o().createElement(y.CardBody,null,O&&o().createElement(m.Z,null),N&&S.length<=0&&o().createElement(u.Z,null),N&&S.length>0&&o().createElement(y.NotificationDrawer,null,o().createElement(F,{filterBy:x||"",notifications:S})),_&&o().createElement(u.Z,null),o().createElement(B.Z,{count:null==L?void 0:L.count,params:{limit:+k,offset:+P},setPagination:b,variant:y.PaginationVariant.bottom}))))))};var z,M}}]);