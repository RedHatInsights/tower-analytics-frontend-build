(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[173],{19173:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var a,r,i,l=n(92950),o=n.n(l),c=n(53677),s=n(29163),m=n(48236),u=n(83061),f=n(64866),d=n(86350),p=n(48716),b=n(39173),g=n(58788),E=n(32465),v=n(45697),w=n.n(v),y=n(30381),h=n.n(y),x=n(50470),k=n(53345),C=(0,s.ZP)(x.ZP)(a||(a=(0,E.Z)(["\n  margin-left: 7px;\n  color: var(--pf-global--Color--400);\n  font-size: 14px;\n"]))),N=(0,s.ZP)(g.NotificationDrawerListItem)(r||(r=(0,E.Z)(["\n  border-top: 1px solid var(--pf-global--BorderColor--light-100);\n  border-bottom::nth-child(odd): 1px solid var(--pf-global--BorderColor--light-100);\n  box-shadow: none;\n  &:focus {\n    outline: none;\n  }\n"]))),Z=(0,s.ZP)(g.NotificationDrawerList)(i||(i=(0,E.Z)(["\n  &:last-child {\n    border-bottom: 1px solid var(--pf-global--BorderColor--light-100);\n  }\n"]))),_=function(e){var t=h()(e),n=h()().utc();return n.isAfter(t)?"".concat(n.diff(t,"days")," day(s) ago."):t.isSame(n,"day")?t.valueOf()>36e5?"".concat(t.diff(n,"hours")," hour(s) ago."):"".concat(n.diff(t,"minutes")," minute(s) ago."):void 0},D=function(e){return e.notifications.map((function(e){var t=e.date,n=e.message,a=e.label,r=e.notification_id,i=e.tower_url;return""===a||"notice"===a?o().createElement(N,{variant:"info",key:t+"-"+r},o().createElement(g.NotificationDrawerListItemHeader,{variant:"info",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,k.kC)(a),o().createElement(C,null)):(0,k.kC)(a))}),o().createElement(g.NotificationDrawerListItemBody,null,n," ")):"error"===a?o().createElement(N,{variant:"danger",key:t+"-"+r},o().createElement(g.NotificationDrawerListItemHeader,{variant:"danger",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,k.kC)(a),o().createElement(C,null)):(0,k.kC)(a))}),o().createElement(g.NotificationDrawerListItemBody,{timestamp:_(t)},n," ")):"warning"===a?o().createElement(N,{variant:"warning",key:t+"-"+r},o().createElement(g.NotificationDrawerListItemHeader,{variant:"warning",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,k.kC)(a),o().createElement(C,null)):(0,k.kC)(a))}),o().createElement(g.NotificationDrawerListItemBody,{timestamp:_(t)},n," ")):void 0}))},P=function(e){return e.notifications.filter((function(e){return"error"===e.label})).map((function(e){var t=e.message,n=e.date,a=e.label,r=e.notification_id,i=e.tower_url;return o().createElement(N,{variant:"danger",key:n+"-"+r},o().createElement(g.NotificationDrawerListItemHeader,{variant:"danger",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,k.kC)(a),o().createElement(C,null)):(0,k.kC)(a))}),o().createElement(g.NotificationDrawerListItemBody,{timestamp:_(n)},t," "))}))},L=function(e){return e.notifications.filter((function(e){return"notice"===e.label})).map((function(e){var t=e.message,n=e.date,a=e.label,r=e.notification_id,i=e.tower_url;return o().createElement(N,{variant:"info",key:n+"-"+r},o().createElement(g.NotificationDrawerListItemHeader,{variant:"info",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,k.kC)(a),o().createElement(C,null)):(0,k.kC)(a))}),o().createElement(g.NotificationDrawerListItemBody,{timestamp:_(n)},t," "))}))},F=function(e){return e.notifications.filter((function(e){return"warning"===e.label})).map((function(e){var t=e.message,n=e.date,a=e.label,r=e.notification_id,i=e.tower_url;return o().createElement(N,{variant:"warning",key:n+"-"+r},o().createElement(g.NotificationDrawerListItemHeader,{variant:"warning",title:o().createElement(o().Fragment,null,i?o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},(0,k.kC)(a),o().createElement(C,null)):(0,k.kC)(a))}),o().createElement(g.NotificationDrawerListItemBody,{timestamp:_(n)},t," "))}))},I=function(e){var t=e.filterBy,n=e.notifications;return o().createElement(o().Fragment,null,o().createElement(Z,null,n.length<=0&&o().createElement(m.Z,null),""===t&&o().createElement(D,{notifications:n}),"notice"===t&&o().createElement(L,{notifications:n}),"error"===t&&o().createElement(P,{notifications:n}),"warning"===t&&o().createElement(F,{notifications:n})))};D.propTypes={notifications:w().array},P.propTypes={notifications:w().array},F.propTypes={notifications:w().array},I.propTypes={notifications:w().array,filterBy:w().string};const B=I;var S=n(12613),j=n(21048),O=n(77388),H=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},T=function(){return(T=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},q=function(e,t){for(var n=0,a=t.length,r=e.length;n<a;n++,r++)e[r]=t[n];return e},V=(0,s.ZP)(g.CardTitle)(W||(W=H(["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 1035px) {\n    display: block;\n  }\n"],["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 1035px) {\n    display: block;\n  }\n"]))),A=s.ZP.div(G||(G=H(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 1035px) {\n    display: block;\n  }\n\n  select {\n    margin: 0 10px;\n    width: 150px;\n\n    @media screen and (max-width: 1035px) {\n      margin: 10px 10px 0 0;\n    }\n\n    @media screen and (max-width: 865px) {\n      width: 100%;\n    }\n  }\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 1035px) {\n    display: block;\n  }\n\n  select {\n    margin: 0 10px;\n    width: 150px;\n\n    @media screen and (max-width: 1035px) {\n      margin: 10px 10px 0 0;\n    }\n\n    @media screen and (max-width: 865px) {\n      width: 100%;\n    }\n  }\n"]))),z=[{value:"please choose",label:"Select Notification Severity",disabled:!0},{value:"error",label:"View Critical",disabled:!1},{value:"warning",label:"View Warning",disabled:!1},{value:"notice",label:"View Notice",disabled:!1},{value:"",label:"View All",disabled:!1}],K=(0,j.Hm)("notifications",T({},{limit:5,offset:0,sort_options:"created"}),["limit","offset"]);const U=function(){var e,t,n=(0,l.useState)(""),a=n[0],r=n[1],i=(0,c.K)(K),s=i.queryParams,E=i.setId,v=i.setFromPagination,w=i.setSeverity,y=s,h=y.severity,x=y.limit,k=y.offset,C=(0,O.ZP)((0,l.useCallback)((function(){return(0,f.A7)(s)}),[s]),{notifications:[],meta:{count:0}}),N=C.result,Z=N.notifications,_=N.meta,D=(C.error,C.isLoading),P=C.isSuccess,L=C.request,F=(0,O.ZP)((function(){return(0,f.hD)()}),{templates:[]}),I=F.result.templates,j=void 0===I?[]:I,H=(F.error,F.request);return(0,l.useEffect)((function(){H().then((function(){return{}})).catch((function(){return{}}))}),[]),(0,l.useEffect)((function(){L().then((function(){return{}})).catch((function(){return{}}))}),[s]),o().createElement(o().Fragment,null,o().createElement(p.Z,null,o().createElement(b.Z,{title:"Notifications"})),o().createElement(o().Fragment,null,o().createElement(d.Z,null,o().createElement(g.Card,null,o().createElement(V,null,o().createElement(A,null,o().createElement(g.FormSelect,{name:"selectedCluster",value:a,onChange:function(e){r(e),E(e),v(0)},"aria-label":"Select Cluster"},(e=j,t=e.map((function(e){var t=e.label,n=e.cluster_id,a=e.install_uuid;return{value:n,label:null!=t?t:a,disabled:!1}})),q(q([],[{value:"please choose",label:"Select cluster",disabled:!0},{value:"",label:"All Clusters",disabled:!1},{value:"-1",label:"Unassociated",disabled:!1}]),t)).map((function(e,t){var n=e.value,a=e.label,r=e.disabled;return o().createElement(g.FormSelectOption,{isDisabled:r,key:t,value:n,label:a})}))),o().createElement(g.FormSelect,{name:"selectedNotification",value:h||"",onChange:function(e){w(e),v(0)},"aria-label":"Select Notification Type"},z.map((function(e,t){var n=e.disabled,a=e.value,r=e.label;return o().createElement(g.FormSelectOption,{isDisabled:n,key:t,value:a,label:r})})))),o().createElement(S.Z,{count:null==_?void 0:_.count,qsConfig:K,params:{limit:+x,offset:+k},setPagination:v,isCompact:!0})),o().createElement(g.CardBody,null,D&&o().createElement(m.Z,null),P&&Z.length<=0&&o().createElement(u.Z,null),P&&Z.length>0&&o().createElement(g.NotificationDrawer,null,o().createElement(B,{filterBy:h||"",notifications:Z})),o().createElement(S.Z,{count:null==_?void 0:_.count,qsConfig:K,params:{limit:+x,offset:+k},setPagination:v,variant:g.PaginationVariant.bottom}))))))};var W,G}}]);
//# sourceMappingURL=../sourcemaps/173.412ec705c263b0ec74a0.js.map