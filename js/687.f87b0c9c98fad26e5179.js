(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[687],{21048:(e,t,r)=>{"use strict";r.d(t,{Hm:()=>u,dD:()=>j,p9:()=>E,o1:()=>S});var n=r(87329),s=r(96156),a=r(34699),o=r(13784);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{offset:1,limit:5,sort_options:"name"},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["offset","limit"],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["modified","created"];if(!e)throw new Error("a QS namespace is required");return{namespace:e,defaultParams:t,integerFields:r,dateFields:n}}function j(e,t){if(!t)return e.defaultParams||{};var r=function(e,t){var r={};return t.replace(/^\?/,"").split("&").map((function(e){return e.split("=")})).forEach((function(n){var s=(0,a.Z)(n,2),c=s[0],i=s[1];if(c&&l(e.namespace,c)){var u=e.namespace?decodeURIComponent(c.substr(e.namespace.length+1)):decodeURIComponent(c),j=function(e,t,r,n){var s=new URLSearchParams(n);if(e.integerFields&&e.integerFields.some((function(e){return e===t})))return parseInt(r,10);if(o.It&&o.It.some((function(e){return e===t}))){var a="".concat(e.namespace,".").concat(t),c=s.getAll(a).filter((function(e,t,r){return r.indexOf(e)===t}));return s.delete[a],c}return decodeURIComponent(r)}(e,u,i,t);r[u]=p(r[u],j)}})),r}(e,t);return function(e,t){return i(i({},e.defaultParams),t)}(e,r)}var l=function(e,t){return e?t.startsWith("".concat(e,".")):!t.includes(".")},f=function(e){return e?Object.keys(e).sort().filter((function(t){return null!==e[t]})).map((function(t){return[t,e[t]]})).map((function(e){var t,r,n=(0,a.Z)(e,2);return t=n[0],r=n[1],Array.isArray(r)?r.map((function(e){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e))})).join("&"):"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(r))})).join("&"):""},E=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t)return"";var n=m({},t,e.defaultParams);return f(i(i({},T(e.namespace,n)),r))},T=function(e,t){if(!e)return t;var r={};return Object.keys(t).forEach((function(n){r["".concat(e,".").concat(n)]=t[n]})),r};function m(e,t,r){var n=i({},e.defaultParams);return Object.keys(t).forEach((function(e){var s=d(t[e],r[e]);null!==s&&(n[e]=s)})),n}function d(e,t){if(e===t)return null;if(Array.isArray(t))return t.reduce(d,e);if(Array.isArray(e)){var r=e.indexOf(t);if(r>-1&&e.splice(r,1),1===e.length)return e[0]}return e}function p(e,t){return t||""===t?e||""===e?(r=Array.isArray(e)?e.concat(t):[e].concat(t),1===(s=(0,n.Z)(new Set(r))).length?s[0]:s):t:e;var r,s}var S=function(e,t,r,n){var a,o,c=function(e){var t=n.location.pathname,s=j({},n.location.search),a=E(r,e,s);n.push(a?"".concat(t,"?").concat(a):t)};if(e||t){var u=j(r,n.location.search);u=function(e,t){var r={};return Object.keys(e).forEach((function(n){r[n]=p(e[n],t[n])})),Object.keys(t).forEach((function(e){r[e]||(r[e]=t[e])})),r}(u=function(e,t){return i(i({},e),t)}(u,(0,s.Z)({},e,t)),(0,s.Z)({},e,t)),""!==t&&0!==t.length||(u=m(r,u,(0,s.Z)({},e,u[e]))),c(u)}else delete(o=i({},a=j(r,n.location.search))).limit,delete o.sort_by,c(m(r,a,o))}},53677:(e,t,r)=>{"use strict";r.d(t,{K:()=>d});var n=r(34699),s=r(81253),a=r(96156),o=r(92950),c=r(30381),i=r.n(c),u=r(334),j=r(53345),l=r(21048),f=["id"],E=["severity"];function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=(0,u.useHistory)(),r="undefined"!==t&&null!=t&&t.location?(0,l.dD)(e,t.location.search):e,c=(0,o.useReducer)((function(e,t){var a=t.type,o=t.value;switch(a){case"SET_STARTDATE":return m(m({},e),{},{startDate:o});case"SET_ENDDATE":return m(m({},e),{},{endDate:o});case"SET_ID":return parseInt(o)?m(m({},e),{},{id:parseInt(o)}):(e.id,(0,s.Z)(e,f));case"SET_SEVERITY":return""===o.severity?(e.severity,(0,s.Z)(e,E)):m(m({},e),o);case"SET_LIMIT":return isNaN(o)?m(m({},e),{},{limit:5}):m(m({},e),{},{limit:parseInt(o)});case"SET_OFFSET":return isNaN(o)?m(m({},e),{},{offset:0}):m(m({},e),{},{offset:parseInt(o)});case"SET_ATTRIBUTES":case"SET_JOB_TYPE":case"SET_STATUS":case"SET_ORG":case"SET_CLUSTER":case"SET_TEMPLATE":case"SET_AUTOMATION_STATUS":case"SET_CATEGORY":case"SET_FREQUENCY":case"SET_NAME":case"SET_ROOT_WORKFLOWS_AND_JOBS":case"SET_INVENTORY":case"SET_SORT_OPTIONS":case"SET_SORT_ORDER":return m(m({},e),o);case"SET_QUICK_DATE_RANGE":var c=m({},e);return"custom"!==o&&(c=m(m({},c),{},{start_date:null,end_date:null})),m(m({},c),o);case"SET_START_DATE":case"SET_END_DATE":var i={};return Object.entries(o).forEach((function(e){var t=(0,n.Z)(e,2),r=t[0],s=t[1];i[r]=(0,j.p6)(s)})),m(m({},e),i);case"REINITIALIZE":return m({},o);case"RESET_FILTER":return m({},r);default:throw new Error("The query params reducer action (".concat(a,") not found."))}}),m({},r)),T=(0,n.Z)(c,2),d=T[0],p=T[1],S={status:"SET_STATUS",quick_date_range:"SET_QUICK_DATE_RANGE",job_type:"SET_JOB_TYPE",org_id:"SET_ORG",cluster_id:"SET_CLUSTER",template_id:"SET_TEMPLATE",sort_order:"SET_SORT_ORDER",sort_options:"SET_SORT_OPTIONS",start_date:"SET_START_DATE",end_date:"SET_END_DATE",automation_status:"SET_AUTOMATION_STATUS",category:"SET_CATEGORY",frequency_period:"SET_FREQUENCY",name:"SET_NAME",only_root_workflows_and_standalone_jobs:"SET_ROOT_WORKFLOWS_AND_JOBS",inventory_id:"SET_INVENTORY"};return{queryParams:d,dispatch:p,setFromToolbar:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;p(e?{type:S[e],value:(0,a.Z)({},e,t)}:{type:"RESET_FILTER"})},setFromPagination:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;p({type:"SET_OFFSET",value:e}),t&&p({type:"SET_LIMIT",value:t})},setSeverity:function(e){return p({type:"SET_SEVERITY",value:{severity:e}})},setEndDate:function(){var e=i()().format("YYYY-MM-DD");p({type:"SET_ENDDATE",value:e})},setId:function(e){return p({type:"SET_ID",value:e})},setStartDate:function(e){var t;7===e&&(t=i()().subtract(1,"week").format("YYYY-MM-DD")),14===e&&(t=i()().subtract(2,"weeks").format("YYYY-MM-DD")),t=31===e?i()().subtract(1,"month").format("YYYY-MM-DD"):i()().subtract(e,"days").format("YYYY-MM-DD"),p({type:"SET_STARTDATE",value:t})},setStartDateAsString:function(e){return p({type:"SET_STARTDATE",value:e})}}}},46700:(e,t,r)=>{var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function s(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id=46700},48236:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(92950),s=r.n(n),a=r(58788),o=r(76473);const c=function(){return s().createElement(a.EmptyState,{variant:a.EmptyStateVariant.full},s().createElement(a.EmptyStateIcon,{icon:o.TF}),s().createElement(a.Title,{headingLevel:"h5",size:"lg"},"Loading..."),s().createElement(a.EmptyStateBody,null,"Please wait."))}},53345:(e,t,r)=>{"use strict";r.d(t,{i_:()=>a,mN:()=>o,yH:()=>c,o0:()=>i,p6:()=>u,NU:()=>j,kC:()=>l,YD:()=>f,Lg:()=>E,B3:()=>T,GV:()=>m});var n=r(30381),s=r.n(n),a=function(e){return/^\d+$/.test(""+e)},o=function(e){return e.replace(/['"]+/g,"")},c=function(e){return new Date(1e3*e).toISOString().substr(11,8)},i=function(e){return s()(new Date(e).toISOString()).format("M/D/YYYY h:mm:ssa")},u=function(e){return s()(e).format("YYYY-MM-DD")},j=function(e){if(e){var t=0;return e.forEach((function(e){var r=e.count;t+=+r})),t}},l=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},f=function(e,t){var r=+e,n=+t;return isNaN(r)||isNaN(n)||n-r<0?0:n-r},E=function(e){void 0===e&&(e=0);var t=new Date;return t.setDate(t.getDate()+e),t.setHours(0,0,0,0),t},T=function(e){return isNaN(+e)?0:+e/3600},m=function(e){return"job"===e?"Playbook run":"Workflow job"}}}]);
//# sourceMappingURL=../sourcemaps/687.8537e8b8aac13d43c847.js.map