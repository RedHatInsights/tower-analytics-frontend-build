(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[612],{33691:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Q});var a,r,i,l=n(92137),o=n(34699),c=n(96156),s=n(32465),u=n(87757),f=n.n(u),m=n(92950),d=n.n(m),p=n(53677),b=n(29163),v=n(48236),E=n(83061),g=n(64866),y=n(86350),w=n(48716),h=n(39173),k=n(58788),C=n(45697),Z=n.n(C),x=n(30381),D=n.n(x),N=n(50470),O=n(53345),P=(0,b.ZP)(N.ZP)(a||(a=(0,s.Z)(["\n  margin-left: 7px;\n  color: var(--pf-global--Color--400);\n  font-size: 14px;\n"]))),S=(0,b.ZP)(k.NotificationDrawerListItem)(r||(r=(0,s.Z)(["\n  border-top: 1px solid var(--pf-global--BorderColor--light-100);\n  border-bottom::nth-child(odd): 1px solid var(--pf-global--BorderColor--light-100);\n  box-shadow: none;\n  &:focus {\n    outline: none;\n  }\n"]))),_=(0,b.ZP)(k.NotificationDrawerList)(i||(i=(0,s.Z)(["\n  &:last-child {\n    border-bottom: 1px solid var(--pf-global--BorderColor--light-100);\n  }\n"]))),F=function(e){var t=D()(e),n=D()().utc();return n.isAfter(t)?"".concat(n.diff(t,"days")," day(s) ago."):t.isSame(n,"day")?t.valueOf()>36e5?"".concat(t.diff(n,"hours")," hour(s) ago."):"".concat(n.diff(t,"minutes")," minute(s) ago."):void 0},I=function(e){return e.notifications.map((function(e){var t=e.date,n=e.message,a=e.label,r=e.notification_id,i=e.tower_url;return""===a||"notice"===a?d().createElement(S,{variant:"info",key:t+"-"+r},d().createElement(k.NotificationDrawerListItemHeader,{variant:"info",title:d().createElement(d().Fragment,null,i?d().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,O.kC)(a),d().createElement(P,null)):(0,O.kC)(a))}),d().createElement(k.NotificationDrawerListItemBody,null,n," ")):"error"===a?d().createElement(S,{variant:"danger",key:t+"-"+r},d().createElement(k.NotificationDrawerListItemHeader,{variant:"danger",title:d().createElement(d().Fragment,null,i?d().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,O.kC)(a),d().createElement(P,null)):(0,O.kC)(a))}),d().createElement(k.NotificationDrawerListItemBody,{timestamp:F(t)},n," ")):"warning"===a?d().createElement(S,{variant:"warning",key:t+"-"+r},d().createElement(k.NotificationDrawerListItemHeader,{variant:"warning",title:d().createElement(d().Fragment,null,i?d().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,O.kC)(a),d().createElement(P,null)):(0,O.kC)(a))}),d().createElement(k.NotificationDrawerListItemBody,{timestamp:F(t)},n," ")):void 0}))},L=function(e){return e.notifications.filter((function(e){return"error"===e.label})).map((function(e){var t=e.message,n=e.date,a=e.label,r=e.notification_id,i=e.tower_url;return d().createElement(S,{variant:"danger",key:n+"-"+r},d().createElement(k.NotificationDrawerListItemHeader,{variant:"danger",title:d().createElement(d().Fragment,null,i?d().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,O.kC)(a),d().createElement(P,null)):(0,O.kC)(a))}),d().createElement(k.NotificationDrawerListItemBody,{timestamp:F(n)},t," "))}))},j=function(e){return e.notifications.filter((function(e){return"notice"===e.label})).map((function(e){var t=e.message,n=e.date,a=e.label,r=e.notification_id,i=e.tower_url;return d().createElement(S,{variant:"info",key:n+"-"+r},d().createElement(k.NotificationDrawerListItemHeader,{variant:"info",title:d().createElement(d().Fragment,null,i?d().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,O.kC)(a),d().createElement(P,null)):(0,O.kC)(a))}),d().createElement(k.NotificationDrawerListItemBody,{timestamp:F(n)},t," "))}))},B=function(e){return e.notifications.filter((function(e){return"warning"===e.label})).map((function(e){var t=e.message,n=e.date,a=e.label,r=e.notification_id,i=e.tower_url;return d().createElement(S,{variant:"warning",key:n+"-"+r},d().createElement(k.NotificationDrawerListItemHeader,{variant:"warning",title:d().createElement(d().Fragment,null,i?d().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,O.kC)(a),d().createElement(P,null)):(0,O.kC)(a))}),d().createElement(k.NotificationDrawerListItemBody,{timestamp:F(n)},t," "))}))},H=function(e){var t=e.filterBy,n=e.notifications;return d().createElement(d().Fragment,null,d().createElement(_,null,n.length<=0&&d().createElement(v.Z,null),""===t&&d().createElement(I,{notifications:n}),"notice"===t&&d().createElement(j,{notifications:n}),"error"===t&&d().createElement(L,{notifications:n}),"warning"===t&&d().createElement(B,{notifications:n})))};I.propTypes={notifications:Z().array},L.propTypes={notifications:Z().array},B.propTypes={notifications:Z().array},H.propTypes={notifications:Z().array,filterBy:Z().string};const T=H;var A,V,q=n(12613),z=n(21048);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var U=(0,b.ZP)(k.CardTitle)(A||(A=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 1035px) {\n    display: block;\n  }\n"]))),W=b.ZP.div(V||(V=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 1035px) {\n    display: block;\n  }\n\n  select {\n    margin: 0 10px;\n    width: 150px;\n\n    @media screen and (max-width: 1035px) {\n      margin: 10px 10px 0 0;\n    }\n\n    @media screen and (max-width: 865px) {\n      width: 100%;\n    }\n  }\n"]))),G=[{value:"please choose",label:"Select Notification Severity",disabled:!0},{value:"error",label:"View Critical",disabled:!1},{value:"warning",label:"View Warning",disabled:!1},{value:"notice",label:"View Notice",disabled:!1},{value:"",label:"View All",disabled:!1}];function J(e){return e.reduce((function(e,t){var n=t.label,a=t.cluster_id,r=t.install_uuid;return 0===n.length?e.push({value:a,label:r,disabled:!1}):e.push({value:a,label:n,disabled:!1}),e}),[{value:"please choose",label:"Select cluster",disabled:!0},{value:"",label:"All Clusters",disabled:!1},{value:-1,label:"Unassociated",disabled:!1}])}var M=(0,z.Hm)("notifications",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{limit:5,offset:0}),["limit","offset"]);const Q=function(){var e=(0,m.useState)([]),t=(0,o.Z)(e,2),n=t[0],a=t[1],r=(0,m.useState)([]),i=(0,o.Z)(r,2),c=i[0],s=i[1],u=(0,m.useState)(""),b=(0,o.Z)(u,2),C=b[0],Z=b[1],x=(0,m.useState)(!0),D=(0,o.Z)(x,2),N=D[0],O=D[1],P=(0,m.useState)(!0),S=(0,o.Z)(P,2),_=S[0],F=S[1],I=(0,m.useState)({}),L=(0,o.Z)(I,2),j=L[0],B=L[1],H=(0,p.K)(M),A=H.queryParams,V=H.setId,z=H.setFromPagination,K=H.setSeverity;return(0,m.useEffect)((function(){N||(F(!0),(0,g.A7)(A).then((function(e){var t=e.notifications,n=void 0===t?[]:t,r=e.meta;a(n),B(r),F(!1)})))}),[A]),(0,m.useEffect)((function(){var e=!1,t=function(){return Promise.all([(0,g.hD)(),(0,g.A7)(A)].map((function(e){return e.catch((function(){return[]}))})))};function n(){return(n=(0,l.Z)(f().mark((function n(){return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:F(!0),t().then((function(t){var n=(0,o.Z)(t,2),r=n[0].templates,i=void 0===r?[]:r,l=n[1],c=l.notifications,u=void 0===c?[]:c,f=l.meta;if(!e){var m=J(i);s(m),a(u),B(f),O(!1),F(!1)}}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){return e=!0}}),[A]),d().createElement(d().Fragment,null,d().createElement(w.Z,null,d().createElement(h.Z,{title:"Notifications"})),d().createElement(d().Fragment,null,d().createElement(y.Z,null,d().createElement(k.Card,null,d().createElement(U,null,d().createElement(W,null,d().createElement(k.FormSelect,{name:"selectedCluster",value:C,onChange:function(e){Z(e),V(e),z(0)},"aria-label":"Select Cluster"},c.map((function(e,t){var n=e.value,a=e.label,r=e.disabled;return d().createElement(k.FormSelectOption,{isDisabled:r,key:t,value:n,label:a})}))),d().createElement(k.FormSelect,{name:"selectedNotification",value:A.severity||"",onChange:function(e){K(e),z(0)},"aria-label":"Select Notification Type"},G.map((function(e,t){var n=e.disabled,a=e.value,r=e.label;return d().createElement(k.FormSelectOption,{isDisabled:n,key:t,value:a,label:r})})))),d().createElement(q.Z,{count:null==j?void 0:j.count,qsConfig:M,params:{limit:A.limit,offset:A.offset},setPagination:z,isCompact:!0})),d().createElement(k.CardBody,null,_&&d().createElement(v.Z,null),!_&&n.length<=0&&d().createElement(E.Z,null),!_&&n.length>0&&d().createElement(k.NotificationDrawer,null,d().createElement(T,{filterBy:A.severity||"",options:G,notifications:n})),d().createElement(q.Z,{count:null==j?void 0:j.count,qsConfig:M,params:{limit:A.limit,offset:A.offset},setPagination:z,variant:k.PaginationVariant.bottom}))))))}}}]);
//# sourceMappingURL=../sourcemaps/612.fa8ddab749b51f9ee850.js.map