(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[466],{28212:(t,a,o)=>{"use strict";o.d(a,{Z:()=>_});var n=o(92950),e=o.n(n),i=o(334),r=o(22122),c=o(81253),l=o(45697),s=o.n(l),d=o(92137),u=o(6610),p=o(5991),m=o(10379),f=o(86089),A=o(77608),h=o(87757),C=o.n(h);function g(t){return function(a){(0,m.Z)(c,a);var o,n,i,r=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=(0,A.Z)(n);if(i){var o=(0,A.Z)(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return(0,f.Z)(this,t)});function c(t){var a;return(0,u.Z)(this,c),(a=r.call(this,t)).state={component:null},a}return(0,p.Z)(c,[{key:"componentDidMount",value:(o=(0,d.Z)(C().mark((function a(){var o,n;return C().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t();case 2:o=a.sent,n=o.default,this.setState({component:n});case 5:case"end":return a.stop()}}),a,this)}))),function(){return o.apply(this,arguments)})},{key:"render",value:function(){var t=this.state.component;return t?e().createElement(t,this.props):e().createElement("div",null,"Loading...")}}]),c}(n.Component)}var b=o(20806),x=g((function(){return Promise.all([o.e(410),o.e(252),o.e(679),o.e(655),o.e(155),o.e(854),o.e(188)]).then(o.bind(o,65086))})),v=g((function(){return Promise.all([o.e(410),o.e(252),o.e(679),o.e(655),o.e(155),o.e(854),o.e(188)]).then(o.bind(o,15691))})),y=g((function(){return Promise.all([o.e(410),o.e(252),o.e(679),o.e(655),o.e(155),o.e(854),o.e(188)]).then(o.bind(o,24704))})),B=g((function(){return Promise.all([o.e(410),o.e(252),o.e(679),o.e(655),o.e(155),o.e(854),o.e(188)]).then(o.bind(o,40641))})),P=g((function(){return Promise.all([o.e(410),o.e(252),o.e(679),o.e(655),o.e(155),o.e(854),o.e(188)]).then(o.bind(o,37596))})),D=g((function(){return Promise.all([o.e(410),o.e(252),o.e(679),o.e(655),o.e(155),o.e(854),o.e(188)]).then(o.bind(o,97555))})),w=g((function(){return Promise.all([o.e(410),o.e(252),o.e(679),o.e(655),o.e(155),o.e(854),o.e(188)]).then(o.bind(o,20059))})),E=g((function(){return Promise.all([o.e(410),o.e(252),o.e(679),o.e(655),o.e(155),o.e(854),o.e(188)]).then(o.bind(o,99869))})),M=function(t){var a=t.component,o=t.rootClass,n=(0,c.Z)(t,["component","rootClass"]),l=document.getElementById("root");return l.removeAttribute("class"),l.classList.add("page__".concat(o),"pf-c-page__main"),l.setAttribute("role","main"),e().createElement(i.Route,(0,r.Z)({},n,{component:a}))};M.propTypes={component:s().func,rootClass:s().string};var S=function(){return e().createElement(i.Switch,null,e().createElement(M,{path:b.n.clusters,component:x,rootClass:"clusters"}),e().createElement(M,{path:b.n.organizationStatistics,component:v,rootClass:"organizationStatistics"}),e().createElement(M,{path:b.n.notifications,component:y,rootClass:"notifications"}),e().createElement(M,{path:b.n.automationCalculator,component:B,rootClass:"automationCalculator"}),e().createElement(M,{path:b.n.jobExplorer,component:P,rootClass:"jobExplorer"}),e().createElement(M,{path:b.n.savingsPlanAdd,component:D,rootClass:"SavingsPlanAdd"}),e().createElement(M,{path:b.n.savingsPlan,component:E,rootClass:"SavingsPlan"}),e().createElement(M,{path:b.n.savingsPlanner,component:w,rootClass:"SavingsPlanner"}),e().createElement(i.Route,null,e().createElement(i.Redirect,{to:b.n.clusters})))};o(14154);const _=function(){var t=i.useHistory;return(0,n.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("automation-analytics");var a=insights.chrome.on("APP_NAVIGATION",(function(a){a.domEvent&&t.push("/".concat(a.navId))}));return function(){a()}}),[]),e().createElement("div",{className:"automation-analytics",id:"automation-analytics-application",version:"1.1.0"},e().createElement(S,null))}},83653:(t,a,o)=>{"use strict";o.d(a,{Z:()=>n});const n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.pathname,a="/",o=t.split("/");return o.shift(),"beta"===o[0]&&(o.shift(),a="/beta/"),"".concat(a).concat(o[0],"/").concat(o[1]||"")}},20806:(t,a,o)=>{"use strict";o.d(a,{n:()=>n});var n={clusters:"/clusters",organizationStatistics:"/organization-statistics",notifications:"/notifications",automationCalculator:"/automation-calculator",jobExplorer:"/job-explorer",savingsPlanner:"/savings-planner",savingsPlan:"/savings-planner/:id",savingsPlanAdd:"/savings-planner/add"}},30319:(t,a,o)=>{"use strict";o.d(a,{S1:()=>c});var n,e=o(18546),i=o(57283),r=o.n(i);function c(){if(n)throw new Error("store already initialized");for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return n=new e.ZP({},[r()].concat(a))}},67073:(t,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>c});var n=o(94015),e=o.n(n),i=o(23645),r=o.n(i)()(e());r.push([t.id,".automation-analytics :root{--ins-color--orange: #ec7a08}.automation-analytics .pf-c-data-list__cell{--pf-c-data-list__cell--PaddingBottom: 10px}.automation-analytics .dataCard .pf-c-data-list{flex:1;margin-right:0}.automation-analytics .dataCard ul+ul{margin-left:20px}.automation-analytics .pf-c-modal-box.templateModal{--pf-c-modal-box--Width: 1000px}.automation-analytics .pf-c-modal-box.templateModal .pf-c-table{--pf-c-table-td--PaddingBottom: 20px;--pf-c-table-td--PaddingTop: 20px}.automation-analytics .pf-c-modal-box.templateModal .pf-c-table th:first-child,.automation-analytics .pf-c-modal-box.templateModal .pf-c-table td:first-child{padding-left:0}.automation-analytics .pf-c-modal-box.templateModal .pf-c-table th:last-child,.automation-analytics .pf-c-modal-box.templateModal .pf-c-table td:last-child{padding-right:20px;text-align:right}@media only screen and (max-width: 600px){.automation-analytics .dataCard{flex-direction:column}.automation-analytics .dataCard .pf-c-data-list{margin:20px 0 0 0}}.automation-analytics #d3-donut-1-chart-root,.automation-analytics #d3-donut-2-chart-root{min-height:300px;min-width:60%}.automation-analytics h2{color:#393f44}.automation-analytics #d3-grouped-bar-chart-root,.automation-analytics #d3-line-chart-root,.automation-analytics #d3-bar-chart-root,.automation-analytics #d3-pie-1-chart-root,.automation-analytics #d3-roi-chart-root{min-height:450px;min-width:75%}.automation-analytics #d3-roi-chart-root{overflow-x:auto}.automation-analytics #fail-icon{position:absolute;left:21px;top:20px;color:white;font-size:14px}.automation-analytics section#refTab1Section,.automation-analytics section#refTab2Section{outline:none}.automation-analytics #d3-bar-chart-root rect:hover{cursor:pointer}.automation-analytics #d3-grouped-bar-chart-root rect:hover{cursor:pointer}.automation-analytics #d3-line-chart-root circle:hover{cursor:pointer}\n","",{version:3,sources:["webpack://./src/App.scss"],names:[],mappings:"AAAA,4BACM,4BAAoB,CAD1B,4CACyD,2CAAsC,CAD/F,gDAC+H,MAAM,CAAC,cAAc,CADpJ,sCACqK,gBAAgB,CADrL,oDACoN,+BAAwB,CAD5O,gEAC8R,oCAA+B,CAAM,iCAA4B,CAD/V,8JACud,cAAc,CADre,4JACslB,kBAAkB,CAAC,gBAAgB,CAAC,0CAD1nB,gCAC8qB,qBAAqB,CADnsB,gDAC8tB,iBAAiB,CAAE,CADjvB,0FAC+xB,gBAAgB,CAAC,aAAa,CAD7zB,yBACi0B,aAAa,CAD90B,wNACy7B,gBAAgB,CAAC,aAAa,CADv9B,yCAC2+B,eAAe,CAD1/B,iCACsgC,iBAAiB,CAAC,SAAS,CAAC,QAAQ,CAAC,WAAW,CAAC,cAAc,CADrkC,0FAConC,YAAY,CADhoC,oDAC+pC,cAAc,CAD7qC,4DACotC,cAAc,CADluC,uDACowC,cAAc",sourcesContent:[".automation-analytics{\n:root{--ins-color--orange: #ec7a08}.pf-c-data-list__cell{--pf-c-data-list__cell--PaddingBottom: 10px}.dataCard .pf-c-data-list{flex:1;margin-right:0}.dataCard ul+ul{margin-left:20px}.pf-c-modal-box.templateModal{--pf-c-modal-box--Width: 1000px}.pf-c-modal-box.templateModal .pf-c-table{--pf-c-table-td--PaddingBottom: 20px;--pf-c-table-td--PaddingTop: 20px}.pf-c-modal-box.templateModal .pf-c-table th:first-child,.pf-c-modal-box.templateModal .pf-c-table td:first-child{padding-left:0}.pf-c-modal-box.templateModal .pf-c-table th:last-child,.pf-c-modal-box.templateModal .pf-c-table td:last-child{padding-right:20px;text-align:right}@media only screen and (max-width: 600px){.dataCard{flex-direction:column}.dataCard .pf-c-data-list{margin:20px 0 0 0}}#d3-donut-1-chart-root,#d3-donut-2-chart-root{min-height:300px;min-width:60%}h2{color:#393f44}#d3-grouped-bar-chart-root,#d3-line-chart-root,#d3-bar-chart-root,#d3-pie-1-chart-root,#d3-roi-chart-root{min-height:450px;min-width:75%}#d3-roi-chart-root{overflow-x:auto}#fail-icon{position:absolute;left:21px;top:20px;color:white;font-size:14px}section#refTab1Section,section#refTab2Section{outline:none}#d3-bar-chart-root rect:hover{cursor:pointer}#d3-grouped-bar-chart-root rect:hover{cursor:pointer}#d3-line-chart-root circle:hover{cursor:pointer}\n\n}"],sourceRoot:""}]);const c=r},14154:(t,a,o)=>{"use strict";var n=o(93379),e=o.n(n),i=o(67073),r=e()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||t.hot.invalidate){var c=i.default.locals;t.hot.accept(67073,(a=>{i=o(67073),function(t,a,o){if(!t&&a||t&&!a)return!1;var n;for(n in t)if(t[n]!==a[n])return!1;for(n in a)if(!t[n])return!1;return!0}(c,i.default.locals)?(c=i.default.locals,r(i.default)):t.hot.invalidate()}))}t.hot.dispose((function(){r()})),i.default.locals}}]);
//# sourceMappingURL=../sourcemaps/466.36740467a7b68ed3d960.js.map