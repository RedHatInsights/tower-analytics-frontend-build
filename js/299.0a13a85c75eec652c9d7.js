(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[299],{13402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var r=n(92950),o=n.n(r),a=n(86235),i=n(15861),s=n(15671),u=n(43144),c=n(60136),l=n(6215),f=n(61120),p=n(87757),d=n.n(p);function h(e){var t=function(t){(0,c.Z)(h,t);var n,r,a,p=(r=h,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,f.Z)(r);if(a){var n=(0,f.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,l.Z)(this,e)});function h(e){var t;return(0,s.Z)(this,h),(t=p.call(this,e)).state={component:null},t}return(0,u.Z)(h,[{key:"componentDidMount",value:(n=(0,i.Z)(d().mark((function t(){var n,r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?o().createElement(e,this.props):o().createElement("div",null,"Loading...")}}]),h}(r.Component);return t}var y,v=n(20806),_=n(46336),m=((y={})[v.n.clusters]=h((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(214),n.e(61),n.e(607),n.e(592),n.e(647),n.e(986),n.e(837)]).then(n.bind(n,69837))})),y[v.n.organizationStatistics]=h((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(214),n.e(61),n.e(986),n.e(30),n.e(46)]).then(n.bind(n,87046))})),y[v.n.notifications]=h((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(613),n.e(61),n.e(173)]).then(n.bind(n,19173))})),y[v.n.automationCalculator]=h((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(214),n.e(613),n.e(61),n.e(607),n.e(592),n.e(202),n.e(30),n.e(157)]).then(n.bind(n,24157))})),y[v.n.jobExplorer]=h((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(214),n.e(613),n.e(607),n.e(592),n.e(647),n.e(674)]).then(n.bind(n,23674))})),y[v.n.savingsPlanner]=h((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(214),n.e(613),n.e(607),n.e(647),n.e(202),n.e(521)]).then(n.bind(n,86521))})),y[v.n.reports]=h((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(214),n.e(613),n.e(61),n.e(607),n.e(592),n.e(202),n.e(30),n.e(157)]).then(n.bind(n,24157))})),y),g=function(e){var t=e.component,n=e.path;return o().createElement(a.Route,{path:n,component:t})},b=function(){var e=(0,a.useLocation)().pathname;return o().createElement(a.Switch,null,o().createElement(a.Redirect,{from:"/:url*(/+)",to:e.slice(0,-1)}),Object.keys(m).map((function(e){return o().createElement(g,{key:e,path:e,component:m[e]})})),o().createElement(a.Route,null,o().createElement(_.Z,{body:"Sorry, we could not find what you were looking for. The page you requested may have been changed or moved."})))};var E=n(77388),j=n(49148),w=n(1085),T=n(5913),S=n(27839),O=n(35993),k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)};const R=function(e){var t=e.error;return o().createElement(w.EmptyState,{variant:w.EmptyStateVariant.full},o().createElement(w.EmptyStateIcon,{icon:T.R0}),404===t.status&&o().createElement(o().Fragment,null,o().createElement(w.Title,{headingLevel:"h5",size:"lg"},"No data found"),o().createElement(w.EmptyStateBody,null,"Please visit"," ",o().createElement("a",{href:"https://docs.ansible.com/ansible-tower/latest/html/administration/usability_data_collection.html#automation-analytics",target:"_blank",rel:"noopener noreferrer"},"here")," ","to learn how to enable Automation Analytics.")),401===t.status&&o().createElement(o().Fragment,null,o().createElement(w.Title,{headingLevel:"h5",size:"lg"},"Not authorized"),o().createElement(w.EmptyStateBody,null,"You do not have the correct permissions to view this page.")),403===t.status&&o().createElement(S.Z,k({},O.dR)),!t.status&&o().createElement(o().Fragment,null,o().createElement(w.Title,{headingLevel:"h5",size:"lg"},"Something went wrong, please try reloading the page"),o().createElement(w.Button,{variant:w.ButtonVariant.primary,onClick:function(){return window.location.reload()}},"Reload")))};var P=document.getElementById("global-filter");P&&(P.style.display="none");const D=function(){var e=(0,a.useHistory)(),t=(0,E.ZP)(j.YU,{}),n=t.error,i=t.request;return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("automation-analytics");var t=insights.chrome.on("APP_NAVIGATION",(function(t){e.push("/".concat(t.navId))}));i();var n=e.listen((function(){i()}));return function(){t(),n()}}),[]),o().createElement("div",{id:"automation-analytics-application",version:"1.1.0"},n?o().createElement(R,{error:n}):o().createElement(b,null))}},83653:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.pathname,t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1]||"")}},20806:(e,t,n)=>{"use strict";n.d(t,{n:()=>r});var r={clusters:"/clusters",organizationStatistics:"/organization-statistics",notifications:"/notifications",automationCalculator:"/automation_calculator",jobExplorer:"/job-explorer",savingsPlanner:"/savings-planner",reports:"/reports"}},46700:(e,t,n)=>{var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=46700},73566:(e,t,n)=>{"use strict";n.d(t,{F5:()=>r,he:()=>N,Kh:()=>L,z2:()=>z,Bt:()=>V,$w:()=>q,N$:()=>g,YU:()=>b,hD:()=>U,VU:()=>C,wi:()=>w,og:()=>R,Ij:()=>E,ZW:()=>j,A7:()=>F,wp:()=>P,wD:()=>x,nE:()=>Y,Wu:()=>A,kL:()=>W,Vk:()=>B,mN:()=>O,Cz:()=>M,Vs:()=>I});var r,o=n(17563),a=n(98390),i=n(83215),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},u=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},f=function(e){return e.json().then((function(t){if(e.ok)return Promise.resolve(t);var n=403===e.status?"RBAC access denied":t;return Promise.reject({status:e.status,error:n})}))},p=function(e,t){return void 0===t&&(t={}),window.insights.chrome.auth.getUser().then((function(){return fetch(e,s(s({},t),{headers:{"Content-Type":"application/json"}}))}))},d=function(e,t,n){return u(void 0,void 0,void 0,(function(){var r,o=n.dispatch,s=l(n,["dispatch"]);return c(this,(function(n){return r=new URL(e,window.location.origin),o((0,i.wN)(s.pending(s.id))),[2,p(r.toString(),{method:"POST",body:JSON.stringify(t)}).then((function(e){return o((0,i.FV)(s.id)),e.ok?{response:e,size:e.headers.get("content-length")}:e.json().then((function(t){var n;return o((0,i.wN)(s.rejected(s.id,null===(n=null==t?void 0:t.detail)||void 0===n?void 0:n.name[0]))),Promise.reject({status:e.status,error:t})}))})).then((function(e){var n=e.response,r=e.size,o=new Intl.DateTimeFormat("en-US").format(new Date),i=r?+r:void 0,s=(0,a.createWriteStream)((t.slug+"_"+o+".pdf").replace(/\s/g,"_"),{size:i});if(n.body)return function(e,t){var n=t.getWriter(),r=e.getReader(),o=function(){return r.read().then((function(e){return window.onunload=function(){return n.abort()},window.onbeforeunload=function(t){e.done||(t.returnValue="Are you sure you want to leave?")},e.done?n.close():n.write(e.value).then(o)}))};return o()}(n.body,s)}))]}))}))},h=function(e,t){void 0===t&&(t={});var n=new URL(e,window.location.origin);return n.search=(0,o.stringify)(t),p(n.toString(),{method:"GET"}).then(f)},y=function(e,t){void 0===t&&(t={});var n=new URL(e,window.location.origin);return p(n.toString(),{method:"POST",body:JSON.stringify(t)}).then(f)},v=function(e,t){void 0===t&&(t={});var n=t.limit,r=t.offset,a=t.sort_options,i=t.sort_order,s=new URL(e,window.location.origin);return s.search=(0,o.stringify)({limit:n,offset:r,sort_by:a&&i?a+":"+i:void 0}),p(s.toString(),{method:"POST",body:JSON.stringify(t)}).then(f)},_=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},m=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};!function(e){e.notifications="/api/tower-analytics/v0/notifications/",e.preflight="/api/tower-analytics/v0/authorized/",e.clusters="/api/tower-analytics/v0/clusters/",e.pdfGenerate="/api/tower-analytics/v1/generate_pdf/",e.jobExplorer="/api/tower-analytics/v1/job_explorer/",e.hostExplorer="/api/tower-analytics/v1/host_explorer/",e.eventExplorer="/api/tower-analytics/v1/event_explorer/",e.probeTemplates="/api/tower-analytics/v1/probe_templates/",e.ROI="/api/tower-analytics/v1/roi_templates/",e.costEffortROI="/api/tower-analytics/v1/roi_cost_effort_data/",e.plans="/api/tower-analytics/v1/plans/",e.plan="/api/tower-analytics/v1/plan/",e.sendEmail="api/tower-analytics/v1/send_email/",e.readRbacGroups="api/tower-analytics/v1/rbac_groups/",e.readRbacPrincipals="api/tower-analytics/v1/rbac_principals/",e.jobExplorerOptions="/api/tower-analytics/v1/job_explorer_options/",e.ROIOptions="/api/tower-analytics/v1/roi_templates_options/",e.orgOptions="/api/tower-analytics/v1/dashboard_organization_statistics_options/",e.clustersOptions="/api/tower-analytics/v1/dashboard_clusters_options/",e.planOptions="/api/tower-analytics/v1/plan_options/",e.eventExplorerOptions="/api/tower-analytics/v1/event_explorer_options/",e.hostExplorerOptions="/api/tower-analytics/v1/host_explorer_options/",e.probeTemplatesOptions="/api/tower-analytics/v1/probe_templates_options/",e.features="/api/featureflags/v0"}(r||(r={}));var g=function(){return _(void 0,void 0,void 0,(function(){var e,t,n;return m(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),e=new URL(r.features,window.location.origin),[4,p(e.toString())];case 1:return[2,(t=o.sent()).ok?t.json():{toggles:[]}];case 2:return n=o.sent(),console.error("feature flag fetch failed",n),[2,{toggles:[]}];case 3:return[2]}}))}))},b=function(){return p(r.preflight)},E=function(e){return v(r.jobExplorer,e)},j=function(e){return y(r.jobExplorerOptions,e)},w=function(e){return v(r.eventExplorer,e)},T=function(e){return y(r.eventExplorerOptions,e)},S=function(e){return v(r.ROI,e)},O=function(e){return function(e,t){var n=new URL(e,window.location.origin);return p(n.toString(),{method:"POST",body:JSON.stringify(t)}).then(f)}(r.costEffortROI,e)},k=function(e){return y(r.ROIOptions,e)},R=function(e){return v(r.hostExplorer,e)},P=function(e){return y(r.orgOptions,e)},D=function(e){return y(r.hostExplorerOptions,e)},A=function(e){return v(r.plans,e)},N=function(e){return y(r.plan,e)},x=function(e){return h(""+r.plan+e+"/")},L=function(e){return function(e,t){var n=new URL(""+e+t+"/",window.location.origin);return p(n.toString(),{method:"DELETE"}).then(f)}(r.plan,e)},z=function(e){return t=r.plans,n=e,o=new URL(t,window.location.origin),p(o.toString(),{method:"DELETE",body:JSON.stringify(n)}).then(f);var t,n,o},I=function(e,t){return function(e,t,n){void 0===n&&(n={});var r=new URL(""+e+t+"/",window.location.origin);return p(r.toString(),{method:"PUT",body:JSON.stringify(n)}).then(f)}(r.plan,e,t)},Y=function(e){return h(r.planOptions,e)},U=function(){return h(r.clusters)},C=function(e){return y(r.clustersOptions,e)},F=function(e){return h(r.notifications,e)},G=function(e){return y(r.probeTemplates,e)},Z=function(e){return h(r.probeTemplatesOptions,e)},q=function(e,t){return _(void 0,void 0,void 0,(function(){return m(this,(function(n){return[2,d(r.pdfGenerate,e,t)]}))}))},M=function(e,t){return function(e,t,n){return u(void 0,void 0,void 0,(function(){var r,o=n.dispatch,a=l(n,["dispatch"]);return c(this,(function(n){return r=new URL(e,window.location.origin),o((0,i.wN)(a.pending(a.id,"Processing Email"))),[2,p(r.toString(),{method:"POST",body:JSON.stringify(t)}).then((function(e){o((0,i.FV)(a.id)),e.ok?o((0,i.wN)(a.success(a.id,"Email sent successfully"))):o((0,i.wN)(a.rejected(a.id,"Error sending email, please try again.")))}))]}))}))}(r.sendEmail,e,t)},W=function(){return h(r.readRbacGroups)},B=function(e){return h(""+r.readRbacPrincipals+e+"/")},V=function(e){switch(e){case r.jobExplorer:return E;case r.jobExplorerOptions:return j;case r.eventExplorer:return w;case r.eventExplorerOptions:return T;case r.ROI:return S;case r.ROIOptions:return k;case r.hostExplorer:return R;case r.hostExplorerOptions:return D;case r.orgOptions:return P;case r.plans:return A;case r.planOptions:return Y;case r.clustersOptions:return C;case r.notifications:return F;case r.probeTemplates:return G;case r.probeTemplatesOptions:return Z;default:throw new Error(e+" is not found in the api mapper.")}}},49148:(e,t,n)=>{"use strict";n.d(t,{F5:()=>r.F5,he:()=>r.he,Kh:()=>r.Kh,z2:()=>r.z2,Bt:()=>r.Bt,N$:()=>r.N$,YU:()=>r.YU,hD:()=>r.hD,VU:()=>r.VU,wi:()=>r.wi,og:()=>r.og,Ij:()=>r.Ij,ZW:()=>r.ZW,A7:()=>r.A7,wp:()=>r.wp,wD:()=>r.wD,nE:()=>r.nE,Wu:()=>r.Wu,kL:()=>r.kL,Vk:()=>r.Vk,mN:()=>r.mN,Vs:()=>r.Vs});var r=n(73566)},48236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(92950),o=n.n(r),a=n(1085),i=n(76473);const s=function(){return o().createElement(a.EmptyState,{variant:a.EmptyStateVariant.full,style:{minHeight:"400px"}},o().createElement(a.EmptyStateIcon,{icon:i.TF}),o().createElement(a.Title,{headingLevel:"h5",size:"lg"},"Loading..."),o().createElement(a.EmptyStateBody,null,"Please wait."))}},46336:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(92950),o=n.n(r),a=n(1085),i=n(50973),s=n(20806),u=n(86235);const c=function(e){var t=e.title,n=void 0===t?"404: Page does not exist.":t,r=e.body,c=void 0===r?"Let's find you a new one.":r,l=e.buttonText,f=void 0===l?"Return to home page":l,p=e.link,d=void 0===p?s.n.clusters:p;return o().createElement(a.EmptyState,{variant:a.EmptyStateVariant.xl},o().createElement(a.Title,{headingLevel:"h4",size:a.TitleSizes["4xl"],style:{padding:"2em"}},n),o().createElement(a.EmptyStateIcon,{icon:i.ZP}),o().createElement(a.EmptyStateBody,null,c),o().createElement(u.Link,{to:d},f))}},65317:(e,t,n)=>{"use strict";var r;n.d(t,{O1:()=>y,GA:()=>r,ye:()=>c}),function(e){e.moduleReports="moduleReports",e.newAutomationCalculator="newAutomationCalculator",e.onboardingReports="aa21Onboarding",e.sendEmail="sendEmail"}(r||(r={}));var o=n(92950),a=n.n(o),i=(0,o.createContext)([]),s=i.Provider;const u=i,c=function(e){var t=(0,o.useContext)(u),n="beta_"+e,r=t.find((function(t){return t.name===("beta"===window.location.pathname.split("/")[1]?n:e)}));return"localhost"===window.location.hostname||window.location.hostname.includes("ephemeral")?function(e){return!e||(null==e?void 0:e.enabled)}(r):function(e){return!!e&&(null==e?void 0:e.enabled)}(r)};var l=n(45697),f=n.n(l),p=n(49148),d=n(48236),h=function(e){var t=e.children,n=(0,o.useState)([]),r=n[0],i=n[1],u=(0,o.useState)(!0),c=u[0],l=u[1];return(0,o.useEffect)((function(){(0,p.N$)().then((function(e){e&&e.toggles?i(e.toggles):i([]),l(!1)})).catch((function(e){return console.error("Getting the feature flags resulted in error:",e)}))}),[]),c||!r?a().createElement(d.Z,null):a().createElement(s,{value:r},t)};h.propTypes={children:f().node.isRequired};const y=h},22277:(e,t,n)=>{"use strict";n.d(t,{zG:()=>a,O5:()=>i,f0:()=>s,BT:()=>u});var r=n(17563),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a="default",i=function(e){var t,n,o=(0,r.parse)(e,{parseNumbers:!1,parseBooleans:!0,arrayFormat:"bracket-separator"});return t=o,n={},Object.keys(t).map((function(e){var r=e.split(".")[0],o=e.split(".")[1];r in n||(n[r]={}),n[r][o]=t[e]})),n},s=function(e){var t=Object.keys(e).reduce((function(t,n){return o(o({},t),(r=e[n],a=n,i=Object.keys(r).map((function(e){var t;return(t={})[a+"."+e]=r[e],t})),Object.assign.apply(Object,function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}([{}],i,!1))));var r,a,i}),{});return(0,r.stringify)(t,{arrayFormat:"bracket-separator"})},u=function(e,t){t.push({pathname:t.location.pathname,search:s(e)})}},16559:(e,t,n)=>{"use strict";n.d(t,{zG:()=>y.zG,qh:()=>R,Kx:()=>j,cm:()=>w,eR:()=>T});var r=n(70885),o=n(45987),a=n(4942),i=n(92950),s=n.n(i),u=n(30381),c=n.n(u),l=(0,i.createContext)({queryParams:{},update:function(){return null},redirectWithQueryParams:function(){return null}}),f=l.Provider,p=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};const d=function(e){var t=e.executeAction,n=e.waitFor,r=(0,i.useState)([]),o=r[0],a=r[1],s=(0,i.useState)(!1),u=s[0],c=s[1];return(0,i.useEffect)((function(){var e;u||(e=o[0])&&(c(!0),t(e),a((function(e){return e.slice(1)})))}),[o,u]),(0,i.useEffect)((function(){c(!1)}),n),{push:function(e){a((function(t){return p(p([],t,!0),[e],!1)}))}}};var h=n(53345),y=n(22277),v=["id"],_=["severity"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e,t){var n=t.type,a=t.value;switch(n){case"SET_STARTDATE":return g(g({},e),{},{startDate:a});case"SET_ENDDATE":return g(g({},e),{},{endDate:a});case"SET_ID":return isNaN(a)?(e.id,(0,o.Z)(e,v)):g(g({},e),{},{id:+a});case"SET_SEVERITY":return""===a.severity?(e.severity,(0,o.Z)(e,_)):g(g({},e),a);case"SET_CHART_TYPE":return g(g({},e),{},{chartType:a});case"SET_CHART_SERIES_HIDDEN_PROPS":return g(g({},e),{},{chartSeriesHiddenProps:a});case"SET_LIMIT":return isNaN(a)?g(g({},e),{},{limit:"5"}):g(g({},e),{},{limit:a});case"SET_OFFSET":return isNaN(a)?g(g({},e),{},{offset:"0"}):g(g({},e),{},{offset:a});case"SET_GRANULARITY":switch(a.granularity){case"daily":return g(g(g({},e),a),{},{quick_date_range:"last_30_days"});case"monthly":return g(g(g({},e),a),{},{quick_date_range:"last_6_months"});case"yearly":return g(g(g({},e),a),{},{quick_date_range:"last_6_years"});default:return g(g({},e),{},{granularity:"daily",quick_date_range:"last_30_days"})}case"SET_ATTRIBUTES":case"SET_JOB_TYPE":case"SET_STATUS":case"SET_ORG":case"SET_CLUSTER":case"SET_MODULE":case"SET_TEMPLATE":case"SET_AUTOMATION_STATUS":case"SET_CATEGORY":case"SET_FREQUENCY":case"SET_NAME":case"SET_ROOT_WORKFLOWS_AND_JOBS":case"SET_INVENTORY":case"SET_SORT_OPTIONS":case"SET_CALCULATOR":case"SET_SORT_ORDER":return g(g({},e),a);case"SET_QUICK_DATE_RANGE":return"custom"!==a?g(g(g({},e),a),{},{start_date:null,end_date:null}):g(g({},e),a);case"SET_START_DATE":case"SET_END_DATE":var i={};return Object.entries(a).forEach((function(e){var t=(0,r.Z)(e,2),n=t[0],o=t[1];i[n]=(0,h.p6)(o)})),g(g({},e),i);default:throw new Error("The query params reducer action (".concat(n,") not found."))}},E={status:"SET_STATUS",quick_date_range:"SET_QUICK_DATE_RANGE",job_type:"SET_JOB_TYPE",org_id:"SET_ORG",cluster_id:"SET_CLUSTER",task_action_id:"SET_MODULE",template_id:"SET_TEMPLATE",sort_order:"SET_SORT_ORDER",sort_options:"SET_SORT_OPTIONS",start_date:"SET_START_DATE",end_date:"SET_END_DATE",automation_status:"SET_AUTOMATION_STATUS",category:"SET_CATEGORY",frequency_period:"SET_FREQUENCY",name:"SET_NAME",only_root_workflows_and_standalone_jobs:"SET_ROOT_WORKFLOWS_AND_JOBS",inventory_id:"SET_INVENTORY",granularity:"SET_GRANULARITY"};const j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.zG,n=(0,i.useContext)(l),r=n.queryParams,o=n.update,s=r[t]||e,u=function(n){if("RESET_FILTER"===n.type)o({newQueryParams:e,namespace:t});else{var r=b(s,n);o({newQueryParams:r,namespace:t})}},f=d({executeAction:u,waitFor:[s]}),p=f.push;return{queryParams:s,dispatch:p,setFromToolbar:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;p({type:"SET_OFFSET",value:0}),p(e?{type:E[e],value:(0,a.Z)({},e,t)}:{type:"RESET_FILTER"})},setFromPagination:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;p({type:"SET_OFFSET",value:e}),t&&p({type:"SET_LIMIT",value:t})},setSeverity:function(e){return p({type:"SET_SEVERITY",value:{severity:e}})},setEndDate:function(){var e=c()().format("YYYY-MM-DD");p({type:"SET_ENDDATE",value:e})},setId:function(e){return p({type:"SET_ID",value:e})},setStartDate:function(e){var t;7===e&&(t=c()().subtract(1,"week").format("YYYY-MM-DD")),14===e&&(t=c()().subtract(2,"weeks").format("YYYY-MM-DD")),t=31===e?c()().subtract(1,"month").format("YYYY-MM-DD"):c()().subtract(e,"days").format("YYYY-MM-DD"),p({type:"SET_STARTDATE",value:t})},setStartDateAsString:function(e){return p({type:"SET_STARTDATE",value:e})}}},w=function(e,t){return void 0===t&&(t=y.zG),(0,i.useContext)(l).queryParams[t]||e},T=function(){return(0,i.useContext)(l).redirectWithQueryParams};var S=n(86235),O=n(47217),k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)};const R=function(e){var t=e.children,n=(0,S.useHistory)(),r=(0,i.useState)({}),o=r[0],a=r[1];return(0,i.useEffect)((function(){n.location.search.length>0&&a((0,y.O5)(location.search));var e=n.listen((function(e){a((0,y.O5)(e.search))}));return function(){e()}}),[]),s().createElement(f,{value:{queryParams:o,update:function(e){var t,r=e.newQueryParams,a=e.namespace,i=void 0===a?y.zG:a,s=k(k({},o),((t={})[i]=r,t));(0,y.BT)(s,n)},redirectWithQueryParams:(0,O.Z)(n)}},t)}},47217:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(22277);const o=function(e){return function(t,n){void 0===n&&(n=void 0);var o=n?(0,r.f0)(n):"";e.push(t+(o?"?":"")+o)}}},35993:(e,t,n)=>{"use strict";n.d(t,{cY:()=>o,GL:()=>a,wC:()=>i,kK:()=>s,bE:()=>u,dR:()=>c,ss:()=>l});var r=n(91573),o={defaultParams:{attributes:["id","status","job_type","started","finished","elapsed","created","cluster_name","org_name","most_failed_tasks","host_count","host_task_count","failed_host_count","unreachable_host_count","changed_host_count","ok_host_count","skipped_host_count"],status:["successful","failed"],quick_date_range:"last_30_days",job_type:["workflowjob","job"],org_id:[],cluster_id:[],template_id:[],inventory_id:[],sort_options:"created",sort_order:"desc",only_root_workflows_and_standalone_jobs:!1,limit:"5",offset:"0"}},a={defaultParams:{status:["successful"],org_id:[],cluster_id:[],template_id:[],inventory_id:[],quick_date_range:"roi_last_year",job_type:["job"],sort_options:"template_productivity_score",sort_order:"desc",start_date:void 0,end_date:void 0,limit:"6",offset:"0",only_root_workflows_and_standalone_jobs:!0,attributes:["elapsed","host_count","total_count","total_org_count","total_cluster_count","successful_hosts_total","successful_elapsed_total"],group_by:"template",group_by_time:!1}},i={defaultParams:{status:[],org_id:[],quick_date_range:"last_30_days",limit:"5",offset:"0",job_type:["workflowjob","job"],cluster_id:[],template_id:[],inventory_id:[],start_date:null,end_date:null}},s={defaultParams:{status:["successful","failed"],quick_date_range:"last_30_days",job_type:["workflowjob","job"],group_by_time:!0,org_id:[],cluster_id:[],template_id:[],inventory_id:[],only_root_workflows_and_standalone_jobs:!1}},u={defaultParams:{inventory_id:[],automation_status:[],category:[],frequency_period:[],name:"",limit:"10",offset:"0",sort_options:"modified",sort_order:"desc"}},c={title:"RBAC Access Denied",description:"User does not have privileges to perform this action. Contact your organization adminstrator(s) for more information."},l={ok:r.global_palette_green_300.value,passed:r.global_palette_green_300.value,unreachable:r.global_palette_black_400.value,unfinished:r.global_palette_black_400.value,changed:r.global_palette_gold_300.value,error:r.global_palette_black_400.value,failed:r.global_palette_red_100.value,skipped:r.global_palette_blue_300.value}},53345:(e,t,n)=>{"use strict";n.d(t,{i_:()=>a,mN:()=>i,yH:()=>s,o0:()=>u,p6:()=>c,NU:()=>l,kC:()=>f,YD:()=>p,Lg:()=>d,B3:()=>h,GV:()=>y});var r=n(30381),o=n.n(r),a=function(e){return/^\d+$/.test(""+e)},i=function(e){return e.replace(/['"]+/g,"")},s=function(e){return new Date(1e3*e).toISOString().substr(11,8)},u=function(e){return o()(new Date(e).toISOString()).format("M/D/YYYY h:mm:ssa")},c=function(e){return o()(e).format("YYYY-MM-DD")},l=function(e){if(e){var t=0;return e.forEach((function(e){var n=e.count;t+=+n})),t}},f=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},p=function(e,t){var n=+e,r=+t;return isNaN(n)||isNaN(r)||r-n<0?0:r-n},d=function(e){void 0===e&&(e=0);var t=new Date;return t.setDate(t.getDate()+e),t.setHours(0,0,0,0),t},h=function(e){return isNaN(+e)?0:+e/3600},y=function(e){return"job"===e?"Playbook run":"Workflow job"}},77388:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f,px:()=>l,pF:()=>c});var r=n(92950);var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},i=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},s=function(e,t){if("object"==typeof e&&!Array.isArray(e)&&null!==e&&"object"==typeof t&&!Array.isArray(t)&&null!==t){var n=Object.keys(t),r=Object.keys(e);return n.length<1||!(n.length>r.length)&&!n.map((function(n){return!!Object.prototype.hasOwnProperty.call(t,n)&&!!Object.prototype.hasOwnProperty.call(e,n)&&s(e[n],t[n])})).includes(!1)}return typeof e==typeof t},u=function(e,t){var n=(0,r.useState)({result:t,error:null,isLoading:!1,isSuccess:!1}),u=n[0],c=n[1],l=function(){var e=(0,r.useRef)({});return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}})),e}();return o(o({},u),{request:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return a(void 0,void 0,void 0,(function(){var r,a,f;return i(this,(function(i){switch(i.label){case 0:c(o(o({},u),{isSuccess:!1,isLoading:!0})),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,e.apply(void 0,n)];case 2:return r=i.sent(),(a=s(r,t))||console.error("The request does not have all the required attributes.","\nRecieved response from API:\n",r,"\nInitial value supplied:\n",t),l.current&&c({isLoading:!1,result:a?r:t,error:null,isSuccess:!0}),[3,4];case 3:return f=i.sent(),l.current&&c({isSuccess:!1,isLoading:!1,error:f,result:t}),[3,4];case 4:return[2]}}))}))},setValue:function(e){return c(o(o({},u),{result:e}))}})},c=function(e){var t=(0,r.useState)(!1),n=t[0],o=t[1];return(0,r.useEffect)((function(){e&&o(!0)}),[e]),{error:n?e:null,dismissError:function(){o(!1)}}},l=function(e){var t=u(e,null),n=t.error,r=t.isLoading,o=t.request,a=c(n);return{isLoading:r,deleteItems:o,deletionError:a.error,clearDeletionError:a.dismissError}};const f=u},39677:(e,t,n)=>{"use strict";var r;n.d(t,{k:()=>r}),function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info"}(r||(r={}))},70360:(e,t,n)=>{"use strict";n(74885)},26142:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>h,TL:()=>p,CG:()=>d});var r=n(21324),o=n(57283),a=n.n(o),i=n(16659),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)};n(3128);var u=n(83215),c=n(44745),l=(0,r.combineReducers)({notifications:u.ee,pdfDownloadButton:function(e,t){var n,r,o;switch(void 0===e&&(e={}),t.type){case i.W.pending:return s(s({},e),((n={})[t.meta.slug]=i.r.pending,n));case i.W.fulfilled:return s(s({},e),((r={})[t.meta.slug]=i.r.fulfilled,r));case i.W.rejected:return s(s({},e),((o={})[t.meta.slug]=i.r.rejected,o));default:return s({},e)}}}),f=(0,r.createStore)(l,(0,r.applyMiddleware)(a())),p=function(){return(0,c.useDispatch)()},d=c.useSelector;const h=f},3128:(e,t,n)=>{"use strict";n.d(t,{j:()=>c,D:()=>l});var r=n(73566),o=n(16659),a=n(39677),i=function(e,t){return{variant:a.k.info,title:t||"Your report is being generated and will download shortly.",id:e,autoDismiss:!1}},s=function(e,t,n){return{variant:a.k.danger,title:t||"There was an error generating your report. Please try again.",description:n?"Details: "+n:"",autoDismiss:!1,id:e}},u=function(e,t){return{variant:a.k.success,title:t||"Email sent successfully.",id:e}},c=function(e,t,n){return{type:o.W.act,payload:(0,r.$w)(e,{pending:i,rejected:s,success:u,dispatch:t,id:n}),meta:{slug:n}}},l=function(e,t,n){return{type:o.W.act,payload:(0,r.Cz)(e,{pending:i,rejected:s,success:u,dispatch:t,id:n}),meta:{slug:n}}}},16659:(e,t,n)=>{"use strict";var r,o;n.d(t,{r:()=>r,W:()=>o}),function(e){e[e.pending=0]="pending",e[e.fulfilled=1]="fulfilled",e[e.rejected=2]="rejected"}(r||(r={})),function(e){e.pending="PDF_DOWNLOAD_PENDING",e.fulfilled="PDF_DOWNLOAD_FULFILLED",e.rejected="PDF_DOWNLOAD_REJECTED",e.act="PDF_DOWNLOAD"}(o||(o={}))}}]);
//# sourceMappingURL=../sourcemaps/299.d96cef6248e0bef1e606b69b5b09cf3c.js.map