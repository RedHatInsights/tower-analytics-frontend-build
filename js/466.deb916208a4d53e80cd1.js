(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[466],{28212:(t,n,e)=>{"use strict";e.d(n,{Z:()=>z});var o=e(92950),a=e.n(o),r=e(334),i=e(22122),s=e(81253),c=e(45697),l=e.n(c),u=e(92137),m=e(6610),p=e(5991),f=e(10379),h=e(86089),d=e(77608),v=e(87757),g=e.n(v);function E(t){return function(n){(0,f.Z)(s,n);var e,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=(0,d.Z)(o);if(r){var e=(0,d.Z)(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return(0,h.Z)(this,t)});function s(t){var n;return(0,m.Z)(this,s),(n=i.call(this,t)).state={component:null},n}return(0,p.Z)(s,[{key:"componentDidMount",value:(e=(0,u.Z)(g().mark((function n(){var e,o;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e=n.sent,o=e.default,this.setState({component:o});case 5:case"end":return n.stop()}}),n,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this.state.component;return t?a().createElement(t,this.props):a().createElement("div",null,"Loading...")}}]),s}(o.Component)}var P=e(20806),y=["component","rootClass"],b=E((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,19335))})),C=E((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,15691))})),Z=E((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,24704))})),w=E((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,1859))})),A=E((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,84823))})),R=E((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,53210))})),S=E((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,97761))})),k=E((function(){return Promise.all([e.e(410),e.e(252),e.e(736),e.e(788),e.e(188)]).then(e.bind(e,35945))})),x=function(t){var n=t.component,e=t.rootClass,o=(0,s.Z)(t,y),c=document.getElementById("root");return c.removeAttribute("class"),c.classList.add("page__".concat(e),"pf-c-page__main"),c.setAttribute("role","main"),a().createElement(r.Route,(0,i.Z)({},o,{component:n}))};x.propTypes={component:l().func,rootClass:l().string};var _=function(){var t=(0,r.useLocation)().pathname;return a().createElement(r.Switch,null,a().createElement(r.Redirect,{from:"/:url*(/+)",to:t.slice(0,-1)}),a().createElement(x,{path:P.n.clusters,component:b,rootClass:"clusters"}),a().createElement(x,{path:P.n.organizationStatistics,component:C,rootClass:"organizationStatistics"}),a().createElement(x,{path:P.n.notifications,component:Z,rootClass:"notifications"}),a().createElement(x,{path:P.n.automationCalculator,component:w,rootClass:"automationCalculator"}),a().createElement(x,{path:P.n.jobExplorer,component:A,rootClass:"jobExplorer"}),a().createElement(x,{path:P.n.savingsPlanAdd,component:R,rootClass:"SavingsPlanAdd"}),a().createElement(x,{path:P.n.savingsPlan,component:k,rootClass:"SavingsPlan"}),a().createElement(x,{path:P.n.savingsPlanner,component:S,rootClass:"SavingsPlanner"}),a().createElement(r.Route,null,a().createElement(r.Redirect,{to:P.n.clusters})))};const z=function(){var t=r.useHistory;return(0,o.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("automation-analytics");var n=insights.chrome.on("APP_NAVIGATION",(function(n){n.domEvent&&t.push("/".concat(n.navId))}));return function(){n()}}),[]),a().createElement("div",{className:"automation-analytics",id:"automation-analytics-application",version:"1.1.0"},a().createElement(_,null))}},83653:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});const o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.pathname,n="/",e=t.split("/");return e.shift(),"beta"===e[0]&&(e.shift(),n="/beta/"),"".concat(n).concat(e[0],"/").concat(e[1]||"")}},20806:(t,n,e)=>{"use strict";e.d(n,{n:()=>o});var o={clusters:"/clusters",organizationStatistics:"/organization-statistics",notifications:"/notifications",automationCalculator:"/automation-calculator",jobExplorer:"/job-explorer",savingsPlanner:"/savings-planner",savingsPlan:"/savings-planner/:id",savingsPlanAdd:"/savings-planner/add"}},30319:(t,n,e)=>{"use strict";e.d(n,{S1:()=>s});var o,a=e(18546),r=e(57283),i=e.n(r);function s(){if(o)throw new Error("store already initialized");for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return o=new a.ZP({},[i()].concat(n))}}}]);
//# sourceMappingURL=../sourcemaps/466.a75b21ac5dd77cf99395.js.map