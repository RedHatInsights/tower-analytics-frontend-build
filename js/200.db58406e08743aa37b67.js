(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[200],{28212:(t,n,e)=>{"use strict";e.d(n,{Z:()=>A});var r=e(92950),o=e.n(r),i=e(334),a=e(22122),s=e(81253),c=e(45697),u=e.n(c),l=e(92137),f=e(6610),p=e(5991),h=e(10379),d=e(86089),v=e(77608),m=e(87757),y=e.n(m);function g(t){return function(n){(0,h.Z)(s,n);var e,r,i,a=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=(0,v.Z)(r);if(i){var e=(0,v.Z)(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return(0,d.Z)(this,t)});function s(t){var n;return(0,f.Z)(this,s),(n=a.call(this,t)).state={component:null},n}return(0,p.Z)(s,[{key:"componentDidMount",value:(e=(0,l.Z)(y().mark((function n(){var e,r;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e=n.sent,r=e.default,this.setState({component:r});case 5:case"end":return n.stop()}}),n,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this.state.component;return t?o().createElement(t,this.props):o().createElement("div",null,"Loading...")}}]),s}(r.Component)}var w=e(20806),b=["component","rootClass"],E=g((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,65086))})),P=g((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,15691))})),S=g((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,24704))})),_=g((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,1859))})),C=g((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,84823))})),x=g((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,53210))})),R=g((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,97761))})),j=g((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,35945))})),Z=function(t){var n=t.component,e=t.rootClass,r=(0,s.Z)(t,b),c=document.getElementById("root");return c.removeAttribute("class"),c.classList.add("page__".concat(e),"pf-c-page__main"),c.setAttribute("role","main"),o().createElement(i.Route,(0,a.Z)({},r,{component:n}))};Z.propTypes={component:u().func,rootClass:u().string};var k=function(){var t=(0,i.useLocation)().pathname;return o().createElement(i.Switch,null,o().createElement(i.Redirect,{from:"/:url*(/+)",to:t.slice(0,-1)}),o().createElement(Z,{path:w.n.clusters,component:E,rootClass:"clusters"}),o().createElement(Z,{path:w.n.organizationStatistics,component:P,rootClass:"organizationStatistics"}),o().createElement(Z,{path:w.n.notifications,component:S,rootClass:"notifications"}),o().createElement(Z,{path:w.n.automationCalculator,component:_,rootClass:"automationCalculator"}),o().createElement(Z,{path:w.n.jobExplorer,component:C,rootClass:"jobExplorer"}),o().createElement(Z,{path:w.n.savingsPlanAdd,component:x,rootClass:"SavingsPlanAdd"}),o().createElement(Z,{path:w.n.savingsPlan,component:j,rootClass:"SavingsPlan"}),o().createElement(Z,{path:w.n.savingsPlanner,component:R,rootClass:"SavingsPlanner"}),o().createElement(i.Route,null,o().createElement(i.Redirect,{to:w.n.clusters})))};const A=function(){var t=(0,i.useHistory)();return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("automation-analytics");var n=insights.chrome.on("APP_NAVIGATION",(function(n){n.domEvent&&t.push("/".concat(n.navId))}));return function(){n()}}),[]),o().createElement("div",{id:"automation-analytics-application",version:"1.1.0"},o().createElement(k,null))}},83653:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.pathname,n="/",e=t.split("/");return e.shift(),"beta"===e[0]&&(e.shift(),n="/beta/"),"".concat(n).concat(e[0],"/").concat(e[1]||"")}},20806:(t,n,e)=>{"use strict";e.d(n,{n:()=>r});var r={clusters:"/clusters",organizationStatistics:"/organization-statistics",notifications:"/notifications",automationCalculator:"/automation-calculator",jobExplorer:"/job-explorer",savingsPlanner:"/savings-planner",savingsPlan:"/savings-planner/:id",savingsPlanAdd:"/savings-planner/add"}},30319:(t,n,e)=>{"use strict";e.d(n,{S1:()=>s});var r,o=e(18546),i=e(57283),a=e.n(i);function s(){if(!r){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];r=new o.ZP({},[a()].concat(n))}return r}},64866:(t,n,e)=>{"use strict";e.d(n,{he:()=>E,Kh:()=>S,N$:()=>f,YU:()=>p,hD:()=>x,VU:()=>R,wi:()=>v,og:()=>g,Ij:()=>h,ZW:()=>d,A7:()=>j,wp:()=>w,wD:()=>P,nE:()=>C,Wu:()=>b,QJ:()=>m,Yn:()=>y,Vs:()=>_});var r=e(17563),o=function(){return(o=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},i=function(t){return t.json().then((function(n){return t.ok?n:404===t.status||401===t.status?Promise.reject({status:t.status,message:n}):403===t.status?Promise.reject({status:t.status,error:"RBAC access denied"}):Promise.reject(n)}))},a=function(t,n){return void 0===n&&(n={}),window.insights.chrome.auth.getUser().then((function(){return fetch(t,o(o({},n),{headers:{"Content-Type":"application/json"}}))}))},s=function(t,n){void 0===n&&(n={});var e=new URL(t,window.location.origin);return e.search=(0,r.stringify)(n),a(e.toString(),{method:"GET"}).then(i)},c=function(t,n){void 0===n&&(n={});var e=new URL(t,window.location.origin);return a(e.toString(),{method:"POST",body:JSON.stringify(n)}).then(i)},u=function(t,n){void 0===n&&(n={});var e=n.limit,o=n.offset,s=n.sort_by,c=new URL(t,window.location.origin);return c.search=(0,r.stringify)({limit:e,offset:o,sort_by:s}),a(c.toString(),{method:"POST",body:JSON.stringify(n)}).then(i)},l="/api/tower-analytics/v1/plan/",f=function(){return t=void 0,n=void 0,r=function(){var t,n;return function(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),t=new URL("/api/featureflags/v0",window.location.origin),[4,a(t.toString())];case 1:return[2,(n=e.sent()).ok?n.json():{}];case 2:return e.sent(),[2,{}];case 3:return[2]}}))},new((e=void 0)||(e=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((r=r.apply(t,n||[])).next())}));var t,n,e,r},p=function(){return a("/api/tower-analytics/v0/authorized/")},h=function(t){return u("/api/tower-analytics/v1/job_explorer/",t)},d=function(t){return c("/api/tower-analytics/v1/job_explorer_options/",t)},v=function(t){return u("/api/tower-analytics/v1/event_explorer/",t)},m=function(t){return u("/api/tower-analytics/v1/roi_templates/",t)},y=function(t){return c("/api/tower-analytics/v1/roi_templates_options/",t)},g=function(t){return u("/api/tower-analytics/v1/host_explorer/",t)},w=function(t){return c("/api/tower-analytics/v1/dashboard_organization_statistics_options/",t)},b=function(t){return u("/api/tower-analytics/v1/plans/",t)},E=function(t){return c(l,t)},P=function(t){return s(""+l+t+"/")},S=function(t){return function(t,n){var e=new URL("/api/tower-analytics/v1/plan/"+n,window.location.origin);return a(e.toString(),{method:"DELETE"}).then(i)}(0,t.id)},_=function(t){var n=t.id,e=t.params;return function(t,n,e){void 0===e&&(e={});var r=new URL("/api/tower-analytics/v1/plan/"+n,window.location.origin);return a(r.toString(),{method:"PUT",body:JSON.stringify(e)}).then(i)}(0,n,void 0===e?{}:e)},C=function(t){return void 0===t&&(t={}),s("/api/tower-analytics/v1/plan_options/",t)},x=function(){return s("/api/tower-analytics/v0/clusters/")},R=function(t){return c("/api/tower-analytics/v1/dashboard_clusters_options/",t)},j=function(t){return s("/api/tower-analytics/v0/notifications/",t)}},14245:(t,n,e)=>{"use strict";e.d(n,{Z:()=>l});var r=e(92950),o=e.n(r),i=e(45697),a=e.n(i),s=(0,r.createContext)([]).Provider,c=e(64866),u=function(t){var n=t.children,e=(0,r.useState)([]),i=e[0],a=e[1];return(0,r.useEffect)((function(){(0,c.N$)().then((function(t){t&&t.toggles?a(t.toggles):a([])})).catch((function(t){return console.error("Getting the feature flags resulted in error:",t)}))}),[]),o().createElement(s,{value:i},n)};u.propTypes={children:a().node.isRequired};const l=u}}]);
//# sourceMappingURL=../sourcemaps/200.2b4e16f4a38bd418f742.js.map