(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[200],{28212:(t,n,e)=>{"use strict";e.d(n,{Z:()=>A});var r=e(92950),o=e.n(r),a=e(334),i=e(22122),s=e(81253),c=e(45697),u=e.n(c),l=e(92137),f=e(6610),p=e(5991),v=e(10379),m=e(86089),h=e(77608),d=e(87757),y=e.n(d);function w(t){return function(n){(0,v.Z)(s,n);var e,r,a,i=(r=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=(0,h.Z)(r);if(a){var e=(0,h.Z)(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return(0,m.Z)(this,t)});function s(t){var n;return(0,f.Z)(this,s),(n=i.call(this,t)).state={component:null},n}return(0,p.Z)(s,[{key:"componentDidMount",value:(e=(0,l.Z)(y().mark((function n(){var e,r;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e=n.sent,r=e.default,this.setState({component:r});case 5:case"end":return n.stop()}}),n,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this.state.component;return t?o().createElement(t,this.props):o().createElement("div",null,"Loading...")}}]),s}(r.Component)}var g=e(20806),b=["component","rootClass"],E=w((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,65086))})),P=w((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,15691))})),S=w((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,24704))})),_=w((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,1859))})),C=w((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,84823))})),x=w((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,53210))})),R=w((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,97761))})),Z=w((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,35945))})),k=function(t){var n=t.component,e=t.rootClass,r=(0,s.Z)(t,b),c=document.getElementById("root");return c.removeAttribute("class"),c.classList.add("page__".concat(e),"pf-c-page__main"),c.setAttribute("role","main"),o().createElement(a.Route,(0,i.Z)({},r,{component:n}))};k.propTypes={component:u().func,rootClass:u().string};var j=function(){var t=(0,a.useLocation)().pathname;return o().createElement(a.Switch,null,o().createElement(a.Redirect,{from:"/:url*(/+)",to:t.slice(0,-1)}),o().createElement(k,{path:g.n.clusters,component:E,rootClass:"clusters"}),o().createElement(k,{path:g.n.organizationStatistics,component:P,rootClass:"organizationStatistics"}),o().createElement(k,{path:g.n.notifications,component:S,rootClass:"notifications"}),o().createElement(k,{path:g.n.automationCalculator,component:_,rootClass:"automationCalculator"}),o().createElement(k,{path:g.n.jobExplorer,component:C,rootClass:"jobExplorer"}),o().createElement(k,{path:g.n.savingsPlanAdd,component:x,rootClass:"SavingsPlanAdd"}),o().createElement(k,{path:g.n.savingsPlan,component:Z,rootClass:"SavingsPlan"}),o().createElement(k,{path:g.n.savingsPlanner,component:R,rootClass:"SavingsPlanner"}),o().createElement(a.Route,null,o().createElement(a.Redirect,{to:g.n.clusters})))};const A=function(){var t=(0,a.useHistory)();return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("automation-analytics");var n=insights.chrome.on("APP_NAVIGATION",(function(n){n.domEvent&&t.push("/".concat(n.navId))}));return function(){n()}}),[]),o().createElement("div",{id:"automation-analytics-application",version:"1.1.0"},o().createElement(j,null))}},83653:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.pathname,n="/",e=t.split("/");return e.shift(),"beta"===e[0]&&(e.shift(),n="/beta/"),"".concat(n).concat(e[0],"/").concat(e[1]||"")}},20806:(t,n,e)=>{"use strict";e.d(n,{n:()=>r});var r={clusters:"/clusters",organizationStatistics:"/organization-statistics",notifications:"/notifications",automationCalculator:"/automation-calculator",jobExplorer:"/job-explorer",savingsPlanner:"/savings-planner",savingsPlan:"/savings-planner/:id",savingsPlanAdd:"/savings-planner/add"}},30319:(t,n,e)=>{"use strict";e.d(n,{S1:()=>s});var r,o=e(18546),a=e(57283),i=e.n(a);function s(){if(!r){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];r=new o.ZP({},[i()].concat(n))}return r}},64866:(t,n,e)=>{"use strict";e.d(n,{he:()=>E,Kh:()=>S,N$:()=>f,YU:()=>p,hD:()=>x,VU:()=>R,wi:()=>h,og:()=>w,Ij:()=>v,ZW:()=>m,A7:()=>Z,wp:()=>g,wD:()=>P,nE:()=>C,Wu:()=>b,QJ:()=>d,Yn:()=>y,Vs:()=>_});var r=e(17563),o=function(t){return t.json().then((function(n){return t.ok?n:404===t.status||401===t.status?Promise.reject({status:t.status,message:n}):403===t.status?Promise.reject({status:t.status,error:"RBAC access denied"}):Promise.reject(n)}))},a=function(t,n){return void 0===n&&(n={}),window.insights.chrome.auth.getUser().then((function(){return fetch(t,n)}))},i=function(t,n){void 0===n&&(n={});var e=new URL(t,window.location.origin);return e.search=(0,r.stringify)(n),a(e.toString(),{method:"GET"}).then(o)},s=function(t,n){void 0===n&&(n={});var e=new URL(t,window.location.origin);return a(e.toString(),{method:"POST",body:JSON.stringify(n)}).then(o)},c=function(t,n){void 0===n&&(n={});var e=n.limit,i=n.offset,s=n.sort_by,c=new URL(t,window.location.origin);return c.search=(0,r.stringify)({limit:e,offset:i,sort_by:s}),a(c.toString(),{method:"POST",body:JSON.stringify(n)}).then(o)},u="/api/tower-analytics/v1/plans/",l="/api/tower-analytics/v1/plan/",f=function(){return t=void 0,n=void 0,r=function(){var t,n;return function(t,n){var e,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(t,i)}catch(t){a=[6,t],r=0}finally{e=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),t=new URL("/api/featureflags/v0",window.location.origin),[4,a(t.toString())];case 1:return[2,(n=e.sent()).ok?n.json():{}];case 2:return e.sent(),[2,{}];case 3:return[2]}}))},new((e=void 0)||(e=Promise))((function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,s)}c((r=r.apply(t,n||[])).next())}));var t,n,e,r},p=function(){return a("/api/tower-analytics/v0/authorized/")},v=function(t){var n=t.params;return c("/api/tower-analytics/v1/job_explorer/",n)},m=function(t){var n=t.params;return s("/api/tower-analytics/v1/job_explorer_options/",n)},h=function(t){var n=t.params;return c("/api/tower-analytics/v1/event_explorer/",n)},d=function(t){var n=t.params;return c("/api/tower-analytics/v1/roi_templates/",n)},y=function(t){var n=t.params;return s("/api/tower-analytics/v1/roi_templates_options/",n)},w=function(t){var n=t.params;return c("/api/tower-analytics/v1/host_explorer/",n)},g=function(t){var n=t.params;return s("/api/tower-analytics/v1/dashboard_organization_statistics_options/",n)},b=function(t){var n=t.params;return c(u,n)},E=function(t){var n=t.params;return s(l,n)},P=function(t){var n=t.params;return s(u,n)},S=function(t){return function(t,n){var e=new URL("/api/tower-analytics/v1/plan/"+n,window.location.origin);return a(e.toString(),{method:"DELETE"}).then(o)}(0,t.id)},_=function(t){var n=t.id,e=t.params;return function(t,n,e){void 0===e&&(e={});var r=new URL("/api/tower-analytics/v1/plan/"+n,window.location.origin);return a(r.toString(),{method:"PUT",body:JSON.stringify(e)}).then(o)}(0,n,void 0===e?{}:e)},C=function(t){var n=(void 0===t?{params:{}}:t).params;return i("/api/tower-analytics/v1/plan_options/",n)},x=function(){return i("/api/tower-analytics/v0/clusters/")},R=function(t){var n=t.params;return s("/api/tower-analytics/v1/dashboard_clusters_options/",n)},Z=function(t){var n=t.params;return i("/api/tower-analytics/v0/notifications/",n)}},14245:(t,n,e)=>{"use strict";e.d(n,{Z:()=>l});var r=e(92950),o=e.n(r),a=e(45697),i=e.n(a),s=(0,r.createContext)([]).Provider,c=e(64866),u=function(t){var n=t.children,e=(0,r.useState)([]),a=e[0],i=e[1];return(0,r.useEffect)((function(){(0,c.N$)().then((function(t){t&&t.toggles?i(t.toggles):i([])})).catch((function(t){return console.error("Getting the feature flags resulted in error:",t)}))}),[]),o().createElement(s,{value:a},n)};u.propTypes={children:i().node.isRequired};const l=u}}]);
//# sourceMappingURL=../sourcemaps/200.33acea510ebae5cb646f.js.map