(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[509],{13402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var r=n(92950),o=n.n(r),a=n(86235),s=n(15861),i=n(15671),u=n(43144),c=n(60136),l=n(6215),f=n(61120),p=n(87757),d=n.n(p);function _(e){var t=function(t){(0,c.Z)(_,t);var n,r,a,p=(r=_,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,f.Z)(r);if(a){var n=(0,f.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,l.Z)(this,e)});function _(e){var t;return(0,i.Z)(this,_),(t=p.call(this,e)).state={component:null},t}return(0,u.Z)(_,[{key:"componentDidMount",value:(n=(0,s.Z)(d().mark((function t(){var n,r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?o().createElement(e,this.props):o().createElement("div",null,"Loading...")}}]),_}(r.Component);return t}var h,y=n(20806),v=n(46336),m=((h={})[y.n.clusters]=_((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(236),n.e(214),n.e(61),n.e(607),n.e(592),n.e(647),n.e(986),n.e(837)]).then(n.bind(n,69837))})),h[y.n.organizationStatistics]=_((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(236),n.e(214),n.e(61),n.e(986),n.e(30),n.e(46)]).then(n.bind(n,87046))})),h[y.n.notifications]=_((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(236),n.e(61),n.e(613),n.e(173)]).then(n.bind(n,19173))})),h[y.n.automationCalculator]=_((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(236),n.e(214),n.e(61),n.e(986),n.e(354),n.e(859)]).then(n.bind(n,1859))})),h[y.n.jobExplorer]=_((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(236),n.e(214),n.e(613),n.e(607),n.e(592),n.e(647),n.e(674)]).then(n.bind(n,23674))})),h[y.n.savingsPlanner]=_((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(236),n.e(214),n.e(613),n.e(607),n.e(647),n.e(354),n.e(720),n.e(363)]).then(n.bind(n,5363))})),h[y.n.reports]=_((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(236),n.e(214),n.e(61),n.e(613),n.e(607),n.e(592),n.e(354),n.e(720),n.e(30),n.e(179)]).then(n.bind(n,93179))})),h),j=function(e){var t=e.component,n=e.path;return o().createElement(a.Route,{path:n,component:t})},b=function(){var e=(0,a.useLocation)().pathname;return o().createElement(a.Switch,null,o().createElement(a.Redirect,{from:"/:url*(/+)",to:e.slice(0,-1)}),Object.keys(m).map((function(e){return o().createElement(j,{key:e,path:e,component:m[e]})})),o().createElement(a.Route,null,o().createElement(v.Z,{body:"Sorry, we could not find what you were looking for. The page you requested may have been changed or moved."})))};var g=n(77388),E=n(44633),w=n(1085),O=n(5913),S=n(27839),T=n(35993),k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)};const P=function(e){var t=e.error;return o().createElement(w.EmptyState,{variant:w.EmptyStateVariant.full},o().createElement(w.EmptyStateIcon,{icon:O.R0}),404===t.status&&o().createElement(o().Fragment,null,o().createElement(w.Title,{headingLevel:"h5",size:"lg"},"No data found"),o().createElement(w.EmptyStateBody,null,"Please visit"," ",o().createElement("a",{href:"https://docs.ansible.com/ansible-tower/latest/html/administration/usability_data_collection.html#automation-analytics",target:"_blank",rel:"noopener noreferrer"},"here")," ","to learn how to enable Automation Analytics.")),401===t.status&&o().createElement(o().Fragment,null,o().createElement(w.Title,{headingLevel:"h5",size:"lg"},"Not authorized"),o().createElement(w.EmptyStateBody,null,"You do not have the correct permissions to view this page.")),403===t.status&&o().createElement(S.Z,k({},T.dR)),!t.status&&o().createElement(o().Fragment,null,o().createElement(w.Title,{headingLevel:"h5",size:"lg"},"Something went wrong, please try reloading the page"),o().createElement(w.Button,{variant:w.ButtonVariant.primary,onClick:function(){return window.location.reload()}},"Reload")))},R=function(){var e=(0,a.useHistory)(),t=(0,g.ZP)(E.YU,{}),n=t.error,s=t.request;return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("automation-analytics");var t=insights.chrome.on("APP_NAVIGATION",(function(t){e.push("/".concat(t.navId))}));s();var n=e.listen((function(){s()}));return function(){t(),n()}}),[]),o().createElement("div",{id:"automation-analytics-application",version:"1.1.0"},n?o().createElement(P,{error:n}):o().createElement(b,null))}},93750:(e,t,n)=>{"use strict";n.d(t,{zG:()=>u,O5:()=>c,f0:()=>l,BT:()=>f});var r=n(42982),o=n(4942),a=n(17563);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u="default",c=function(e){var t,n,r=(0,a.parse)(e,{parseNumbers:!1,parseBooleans:!0,arrayFormat:"bracket-separator"});return t=r,n={},Object.keys(t).map((function(e){var r=e.split(".")[0],o=e.split(".")[1];r in n||(n[r]={}),n[r][o]=t[e]})),n},l=function(e){var t=Object.keys(e).reduce((function(t,n){return i(i({},t),(a=e[n],s=n,u=Object.keys(a).map((function(e){return(0,o.Z)({},"".concat(s,".").concat(e),a[e])})),Object.assign.apply(Object,[{}].concat((0,r.Z)(u)))));var a,s,u}),{});return(0,a.stringify)(t,{arrayFormat:"bracket-separator"})},f=function(e,t){t.push({pathname:t.location.pathname,search:l(e)})}},83653:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.pathname,t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1]||"")}},20806:(e,t,n)=>{"use strict";n.d(t,{n:()=>r});var r={clusters:"/clusters",organizationStatistics:"/organization-statistics",notifications:"/notifications",automationCalculator:"/automation-calculator",jobExplorer:"/job-explorer",savingsPlanner:"/savings-planner",reports:"/reports"}},30319:(e,t,n)=>{"use strict";n.d(t,{S1:()=>i});var r,o=n(18546),a=n(57283),s=n.n(a);function i(){if(!r){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];r=new o.ZP({},[s()].concat(t))}return r}},46700:(e,t,n)=>{var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=46700},44633:(e,t,n)=>{"use strict";n.d(t,{F5:()=>r,he:()=>O,Kh:()=>T,z2:()=>k,Bt:()=>Y,$w:()=>N,N$:()=>p,YU:()=>d,hD:()=>D,VU:()=>A,wi:()=>y,og:()=>b,Ij:()=>_,ZW:()=>h,A7:()=>x,wp:()=>g,wD:()=>S,nE:()=>R,Wu:()=>w,QJ:()=>m,Yn:()=>j,Vs:()=>P});var r,o=n(17563),a=n(98390),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},i=function(e){return e.json().then((function(t){if(e.ok)return Promise.resolve(t);var n=403===e.status?"RBAC access denied":t;return Promise.reject({status:e.status,error:n})}))},u=function(e,t){return void 0===t&&(t={}),window.insights.chrome.auth.getUser().then((function(){return fetch(e,s(s({},t),{headers:{"Content-Type":"application/json"}}))}))},c=function(e,t){void 0===t&&(t={});var n=new URL(e,window.location.origin);return n.search=(0,o.stringify)(t),u(n.toString(),{method:"GET"}).then(i)},l=function(e,t){void 0===t&&(t={});var n=new URL(e,window.location.origin);return u(n.toString(),{method:"POST",body:JSON.stringify(t)}).then(i)},f=function(e,t){void 0===t&&(t={});var n=t.limit,r=t.offset,a=t.sort_options,s=t.sort_order,c=new URL(e,window.location.origin);return c.search=(0,o.stringify)({limit:n,offset:r,sort_by:a&&s?a+":"+s:void 0}),u(c.toString(),{method:"POST",body:JSON.stringify(t)}).then(i)};!function(e){e.notifications="/api/tower-analytics/v0/notifications/",e.preflight="/api/tower-analytics/v0/authorized/",e.clusters="/api/tower-analytics/v0/clusters/",e.pdfGenerate="/api/tower-analytics/v1/generate_pdf/",e.jobExplorer="/api/tower-analytics/v1/job_explorer/",e.hostExplorer="/api/tower-analytics/v1/host_explorer/",e.eventExplorer="/api/tower-analytics/v1/event_explorer/",e.ROI="/api/tower-analytics/v1/roi_templates/",e.plans="/api/tower-analytics/v1/plans/",e.plan="/api/tower-analytics/v1/plan/",e.jobExplorerOptions="/api/tower-analytics/v1/job_explorer_options/",e.ROIOptions="/api/tower-analytics/v1/roi_templates_options/",e.orgOptions="/api/tower-analytics/v1/dashboard_organization_statistics_options/",e.clustersOptions="/api/tower-analytics/v1/dashboard_clusters_options/",e.planOptions="/api/tower-analytics/v1/plan_options/",e.eventExplorerOptions="/api/tower-analytics/v1/event_explorer_options/",e.hostExplorerOptions="/api/tower-analytics/v1/host_explorer_options/",e.features="/api/featureflags/v0"}(r||(r={}));var p=function(){return e=void 0,t=void 0,o=function(){var e,t,n;return function(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),e=new URL(r.features,window.location.origin),[4,u(e.toString())];case 1:return[2,(t=o.sent()).ok?t.json():{toggles:[]}];case 2:return n=o.sent(),console.error("feature flag fetch failed",n),[2,{toggles:[]}];case 3:return[2]}}))},new((n=void 0)||(n=Promise))((function(r,a){function s(e){try{u(o.next(e))}catch(e){a(e)}}function i(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}u((o=o.apply(e,t||[])).next())}));var e,t,n,o},d=function(){return u(r.preflight)},_=function(e){return f(r.jobExplorer,e)},h=function(e){return l(r.jobExplorerOptions,e)},y=function(e){return f(r.eventExplorer,e)},v=function(e){return l(r.eventExplorerOptions,e)},m=function(e){return f(r.ROI,e)},j=function(e){return l(r.ROIOptions,e)},b=function(e){return f(r.hostExplorer,e)},g=function(e){return l(r.orgOptions,e)},E=function(e){return l(r.hostExplorerOptions,e)},w=function(e){return f(r.plans,e)},O=function(e){return l(r.plan,e)},S=function(e){return c(""+r.plan+e+"/")},T=function(e){return function(e,t){var n=new URL(""+e+t+"/",window.location.origin);return u(n.toString(),{method:"DELETE"}).then(i)}(r.plan,e)},k=function(e){return t=r.plans,n=e,o=new URL(t,window.location.origin),u(o.toString(),{method:"DELETE",body:JSON.stringify(n)}).then(i);var t,n,o},P=function(e,t){return function(e,t,n){void 0===n&&(n={});var r=new URL(""+e+t+"/",window.location.origin);return u(r.toString(),{method:"PUT",body:JSON.stringify(n)}).then(i)}(r.plan,e,t)},R=function(e){return c(r.planOptions,e)},D=function(){return c(r.clusters)},A=function(e){return l(r.clustersOptions,e)},x=function(e){return c(r.notifications,e)},N=function(e){return function(e,t){var n=new URL(e,window.location.origin);return u(n.toString(),{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.ok?{response:e,size:e.headers.get("content-length")}:e.json().then((function(t){return Promise.reject({status:e.status,error:t})}))})).then((function(e){var n=e.response,r=e.size,o=new Intl.DateTimeFormat("en-US").format(new Date),s=r?+r:void 0,i=(0,a.createWriteStream)((t.slug+"_"+o+".pdf").replace(/\s/g,"_"),{size:s});if(n.body)return function(e,t){var n=t.getWriter(),r=e.getReader(),o=function(){return r.read().then((function(e){return window.onunload=function(){return n.abort()},window.onbeforeunload=function(t){e.done||(t.returnValue="Are you sure you want to leave?")},e.done?n.close():n.write(e.value).then(o)}))};return o()}(n.body,i)}))}(r.pdfGenerate,e)},Y=function(e){switch(e){case r.jobExplorer:return _;case r.jobExplorerOptions:return h;case r.eventExplorer:return y;case r.eventExplorerOptions:return v;case r.ROI:return m;case r.ROIOptions:return j;case r.hostExplorer:return b;case r.hostExplorerOptions:return E;case r.orgOptions:return g;case r.plans:return w;case r.planOptions:return R;case r.clustersOptions:return A;case r.notifications:return x;default:throw new Error(e+" is not found in the api mapper.")}}},46336:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(92950),o=n.n(r),a=n(1085),s=n(50973),i=n(20806),u=n(86235);const c=function(e){var t=e.title,n=void 0===t?"404: Page does not exist.":t,r=e.body,c=void 0===r?"Let's find you a new one.":r,l=e.buttonText,f=void 0===l?"Return to home page":l,p=e.link,d=void 0===p?i.n.clusters:p;return o().createElement(a.EmptyState,{variant:a.EmptyStateVariant.xl},o().createElement(a.Title,{headingLevel:"h4",size:a.TitleSizes["4xl"],style:{padding:"2em"}},n),o().createElement(a.EmptyStateIcon,{icon:s.ZP}),o().createElement(a.EmptyStateBody,null,c),o().createElement(u.Link,{to:d},f))}},65317:(e,t,n)=>{"use strict";var r;n.d(t,{O1:()=>_,GA:()=>r,ye:()=>c}),function(e){e.moduleReports="moduleReports",e.newAutomationCalculator="newAutomationCalculator"}(r||(r={}));var o=n(92950),a=n.n(o),s=(0,o.createContext)([]),i=s.Provider;const u=s,c=function(e){var t=(0,o.useContext)(u),n="beta_"+e,r=t.find((function(t){return t.name===("beta"===window.location.pathname.split("/")[1]?n:e)}));return"localhost"===window.location.hostname||!!r&&r.enabled};var l=n(45697),f=n.n(l),p=n(44633),d=function(e){var t=e.children,n=(0,o.useState)([]),r=n[0],s=n[1];return(0,o.useEffect)((function(){(0,p.N$)().then((function(e){e&&e.toggles?s(e.toggles):s([])})).catch((function(e){return console.error("Getting the feature flags resulted in error:",e)}))}),[]),a().createElement(i,{value:r},t)};d.propTypes={children:f().node.isRequired};const _=d},64631:(e,t,n)=>{"use strict";n.d(t,{zG:()=>h.zG,qh:()=>A,Kx:()=>E,eR:()=>w});var r=n(70885),o=n(45987),a=n(4942),s=n(92950),i=n.n(s),u=n(30381),c=n.n(u),l=(0,s.createContext)({}),f=l.Provider,p=n(42982);const d=function(e){var t=e.executeAction,n=e.waitFor,o=(0,s.useState)([]),a=(0,r.Z)(o,2),i=a[0],u=a[1],c=(0,s.useState)(!1),l=(0,r.Z)(c,2),f=l[0],d=l[1];return(0,s.useEffect)((function(){var e;f||(e=i[0])&&(d(!0),t(e),u((function(e){return e.slice(1)})))}),[i,f]),(0,s.useEffect)((function(){d(!1)}),[n]),{push:function(e){u((function(t){return[].concat((0,p.Z)(t),[e])}))}}};var _=n(53345),h=n(93750),y=["id"],v=["severity"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e,t){var n=t.type,a=t.value;switch(n){case"SET_STARTDATE":return j(j({},e),{},{startDate:a});case"SET_ENDDATE":return j(j({},e),{},{endDate:a});case"SET_ID":return isNaN(a)?(e.id,(0,o.Z)(e,y)):j(j({},e),{},{id:+a});case"SET_SEVERITY":return""===a.severity?(e.severity,(0,o.Z)(e,v)):j(j({},e),a);case"SET_LIMIT":return isNaN(a)?j(j({},e),{},{limit:"5"}):j(j({},e),{},{limit:a});case"SET_OFFSET":return isNaN(a)?j(j({},e),{},{offset:"0"}):j(j({},e),{},{offset:a});case"SET_GRANULARITY":switch(a.granularity){case"daily":return j(j(j({},e),a),{},{quick_date_range:"last_30_days"});case"monthly":return j(j(j({},e),a),{},{quick_date_range:"last_6_months"});case"yearly":return j(j(j({},e),a),{},{quick_date_range:"last_6_years"});default:return j(j({},e),{},{granularity:"daily",quick_date_range:"last_30_days"})}case"SET_ATTRIBUTES":case"SET_JOB_TYPE":case"SET_STATUS":case"SET_ORG":case"SET_CLUSTER":case"SET_MODULE":case"SET_TEMPLATE":case"SET_AUTOMATION_STATUS":case"SET_CATEGORY":case"SET_FREQUENCY":case"SET_NAME":case"SET_ROOT_WORKFLOWS_AND_JOBS":case"SET_INVENTORY":case"SET_SORT_OPTIONS":case"SET_SORT_ORDER":return j(j({},e),a);case"SET_QUICK_DATE_RANGE":return"custom"!==a?j(j(j({},e),a),{},{start_date:null,end_date:null}):j(j({},e),a);case"SET_START_DATE":case"SET_END_DATE":var s={};return Object.entries(a).forEach((function(e){var t=(0,r.Z)(e,2),n=t[0],o=t[1];s[n]=(0,_.p6)(o)})),j(j({},e),s);default:throw new Error("The query params reducer action (".concat(n,") not found."))}},g={status:"SET_STATUS",quick_date_range:"SET_QUICK_DATE_RANGE",job_type:"SET_JOB_TYPE",org_id:"SET_ORG",cluster_id:"SET_CLUSTER",task_action_id:"SET_MODULE",template_id:"SET_TEMPLATE",sort_order:"SET_SORT_ORDER",sort_options:"SET_SORT_OPTIONS",start_date:"SET_START_DATE",end_date:"SET_END_DATE",automation_status:"SET_AUTOMATION_STATUS",category:"SET_CATEGORY",frequency_period:"SET_FREQUENCY",name:"SET_NAME",only_root_workflows_and_standalone_jobs:"SET_ROOT_WORKFLOWS_AND_JOBS",inventory_id:"SET_INVENTORY",granularity:"SET_GRANULARITY"};const E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.zG,n=(0,s.useContext)(l),r=n.queryParams,o=n.update,i=r[t]||e,u=function(n){if("RESET_FILTER"===n.type)o({newQueryParams:e,namespace:t});else{var r=b(i,n);o({newQueryParams:r,namespace:t})}},f=d({executeAction:u,waitFor:i}),p=f.push;return{queryParams:i,dispatch:p,setFromToolbar:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;p(e?{type:g[e],value:(0,a.Z)({},e,t)}:{type:"RESET_FILTER"})},setFromPagination:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;p({type:"SET_OFFSET",value:e}),t&&p({type:"SET_LIMIT",value:t})},setSeverity:function(e){return p({type:"SET_SEVERITY",value:{severity:e}})},setEndDate:function(){var e=c()().format("YYYY-MM-DD");p({type:"SET_ENDDATE",value:e})},setId:function(e){return p({type:"SET_ID",value:e})},setStartDate:function(e){var t;7===e&&(t=c()().subtract(1,"week").format("YYYY-MM-DD")),14===e&&(t=c()().subtract(2,"weeks").format("YYYY-MM-DD")),t=31===e?c()().subtract(1,"month").format("YYYY-MM-DD"):c()().subtract(e,"days").format("YYYY-MM-DD"),p({type:"SET_STARTDATE",value:t})},setStartDateAsString:function(e){return p({type:"SET_STARTDATE",value:e})}}},w=function(){return(0,s.useContext)(l).redirectWithQueryParams};var O=n(45697),S=n.n(O),T=n(86235),k=n(47217);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.children,n=(0,T.useHistory)(),o=(0,s.useState)({}),u=(0,r.Z)(o,2),c=u[0],l=u[1];return(0,s.useEffect)((function(){n.location.search.length>0&&l((0,h.O5)(location.search));var e=n.listen((function(e){l((0,h.O5)(e.search))}));return function(){e()}}),[]),i().createElement(f,{value:{queryParams:c,update:function(e){var t=e.newQueryParams,r=e.namespace,o=void 0===r?h.zG:r,s=R(R({},c),{},(0,a.Z)({},o,t));(0,h.BT)(s,n)},redirectWithQueryParams:(0,k.Z)(n)}},t)};D.propTypes={children:S().node.isRequired};const A=D},47217:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(93750);const o=function(e){return function(t,n){void 0===n&&(n=void 0);var o=n?(0,r.f0)(n):"";e.push(t+(o?"?":"")+o)}}},35993:(e,t,n)=>{"use strict";n.d(t,{cY:()=>o,GL:()=>a,wC:()=>s,kK:()=>i,bE:()=>u,dR:()=>c,ss:()=>l});var r=n(91573),o={defaultParams:{attributes:["id","status","job_type","started","finished","elapsed","created","cluster_name","org_name","most_failed_tasks","host_count","host_task_count","failed_host_count","unreachable_host_count","changed_host_count","ok_host_count","skipped_host_count"],status:["successful","failed"],quick_date_range:"last_30_days",job_type:["workflowjob","job"],org_id:[],cluster_id:[],template_id:[],inventory_id:[],sort_options:"created",sort_order:"desc",only_root_workflows_and_standalone_jobs:!1,limit:"5",offset:"0"}},a={defaultParams:{status:["successful"],org_id:[],cluster_id:[],template_id:[],inventory_id:[],quick_date_range:"roi_last_year",job_type:["job"],sort_options:"template_productivity_score",sort_order:"desc",start_date:void 0,end_date:void 0,limit:"25",offset:"0",only_root_workflows_and_standalone_jobs:!0,attributes:["elapsed","host_count","total_count","total_org_count","total_cluster_count","successful_hosts_total","successful_elapsed_total"],group_by:"template",group_by_time:!1}},s={defaultParams:{status:[],org_id:[],quick_date_range:"last_30_days",limit:"5",offset:"0",job_type:["workflowjob","job"],cluster_id:[],template_id:[],inventory_id:[],start_date:null,end_date:null}},i={defaultParams:{status:["successful","failed"],quick_date_range:"last_30_days",job_type:["workflowjob","job"],group_by_time:!0,org_id:[],cluster_id:[],template_id:[],inventory_id:[],only_root_workflows_and_standalone_jobs:!1}},u={defaultParams:{template_id:[],inventory_id:[],automation_status:[],category:[],frequency_period:[],name:"",limit:"10",offset:"0",sort_options:"modified",sort_order:"desc"}},c={title:"RBAC Access Denied",description:"User does not have privileges to perform this action. Contact your organization adminstrator(s) for more information."},l={ok:r.global_palette_green_300.value,passed:r.global_palette_green_300.value,unreachable:r.global_palette_black_400.value,unfinished:r.global_palette_black_400.value,changed:r.global_palette_gold_300.value,error:r.global_palette_black_400.value,failed:r.global_palette_red_100.value,skipped:r.global_palette_blue_300.value}},53345:(e,t,n)=>{"use strict";n.d(t,{i_:()=>a,mN:()=>s,yH:()=>i,o0:()=>u,p6:()=>c,NU:()=>l,kC:()=>f,YD:()=>p,Lg:()=>d,B3:()=>_,GV:()=>h});var r=n(30381),o=n.n(r),a=function(e){return/^\d+$/.test(""+e)},s=function(e){return e.replace(/['"]+/g,"")},i=function(e){return new Date(1e3*e).toISOString().substr(11,8)},u=function(e){return o()(new Date(e).toISOString()).format("M/D/YYYY h:mm:ssa")},c=function(e){return o()(e).format("YYYY-MM-DD")},l=function(e){if(e){var t=0;return e.forEach((function(e){var n=e.count;t+=+n})),t}},f=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},p=function(e,t){var n=+e,r=+t;return isNaN(n)||isNaN(r)||r-n<0?0:r-n},d=function(e){void 0===e&&(e=0);var t=new Date;return t.setDate(t.getDate()+e),t.setHours(0,0,0,0),t},_=function(e){return isNaN(+e)?0:+e/3600},h=function(e){return"job"===e?"Playbook run":"Workflow job"}},77388:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f,px:()=>l,pF:()=>c});var r=n(92950);var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function s(e){try{u(r.next(e))}catch(e){a(e)}}function i(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},i=function(e,t){if("object"==typeof e&&!Array.isArray(e)&&null!==e&&"object"==typeof t&&!Array.isArray(t)&&null!==t){var n=Object.keys(t),r=Object.keys(e);return n.length<1||!(n.length>r.length)&&!n.map((function(n){return!!Object.prototype.hasOwnProperty.call(t,n)&&!!Object.prototype.hasOwnProperty.call(e,n)&&i(e[n],t[n])})).includes(!1)}return typeof e==typeof t},u=function(e,t){var n=(0,r.useState)({result:t,error:null,isLoading:!1,isSuccess:!1}),u=n[0],c=n[1],l=function(){var e=(0,r.useRef)({});return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}})),e}();return o(o({},u),{request:(0,r.useCallback)((function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return a(void 0,void 0,void 0,(function(){var r,a,f;return s(this,(function(s){switch(s.label){case 0:c(o(o({},u),{isSuccess:!1,isLoading:!0})),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,e.apply(void 0,n)];case 2:return r=s.sent(),(a=i(r,t))||console.error("The request does not have all the required attributes.","\nRecieved response from API:\n",r,"\nInitial value supplied:\n",t),l.current&&c({isLoading:!1,result:a?r:t,error:null,isSuccess:!0}),[3,4];case 3:return f=s.sent(),l.current&&c({isSuccess:!1,isLoading:!1,error:f,result:t}),[3,4];case 4:return[2]}}))}))}),[e]),setValue:function(e){return c(o(o({},u),{result:e}))}})},c=function(e){var t=(0,r.useState)(!1),n=t[0],o=t[1];return(0,r.useEffect)((function(){e&&o(!0)}),[e]),{error:n?e:null,dismissError:function(){o(!1)}}},l=function(e){var t=u(e,null),n=t.error,r=t.isLoading,o=t.request,a=c(n);return{isLoading:r,deleteItems:o,deletionError:a.error,clearDeletionError:a.dismissError}};const f=u},70360:(e,t,n)=>{"use strict";n(74885)}}]);
//# sourceMappingURL=../sourcemaps/509.7625bd71b016f0942424be977524bb4a.js.map