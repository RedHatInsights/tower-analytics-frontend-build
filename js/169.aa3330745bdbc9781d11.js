(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[169],{62622:(t,e,n)=>{"use strict";n.d(e,{Z:()=>Z});var r=n(92950),o=n.n(r),i=n(334),a=n(22122),s=n(81253),u=n(45697),c=n.n(u),l=n(92137),f=n(6610),d=n(5991),p=n(10379),h=n(86089),_=n(77608),m=n(87757),y=n.n(m);function v(t){return function(e){(0,p.Z)(s,e);var n,r,i,a=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=(0,_.Z)(r);if(i){var n=(0,_.Z)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return(0,h.Z)(this,t)});function s(t){var e;return(0,f.Z)(this,s),(e=a.call(this,t)).state={component:null},e}return(0,d.Z)(s,[{key:"componentDidMount",value:(n=(0,l.Z)(y().mark((function e(){var n,r;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n=e.sent,r=n.default,this.setState({component:r});case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var t=this.state.component;return t?o().createElement(t,this.props):o().createElement("div",null,"Loading...")}}]),s}(r.Component)}var g=n(20806),w=["component","rootClass"],b={clusters:v((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(692),n.e(605),n.e(853),n.e(735),n.e(550),n.e(0),n.e(986),n.e(88),n.e(86)]).then(n.bind(n,65086))})),organizationStatistics:v((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(692),n.e(605),n.e(853),n.e(735),n.e(986),n.e(115),n.e(691)]).then(n.bind(n,15691))})),notifications:v((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(692),n.e(853),n.e(613),n.e(704)]).then(n.bind(n,24704))})),automationCalculator:v((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(692),n.e(605),n.e(853),n.e(735),n.e(986),n.e(354),n.e(115),n.e(859)]).then(n.bind(n,1859))})),jobExplorer:v((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(692),n.e(605),n.e(735),n.e(613),n.e(550),n.e(0),n.e(88),n.e(823)]).then(n.bind(n,84823))})),savingsPlanner:v((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(692),n.e(605),n.e(735),n.e(613),n.e(550),n.e(0),n.e(354),n.e(595),n.e(3)]).then(n.bind(n,69003))})),reports:v((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(692),n.e(605),n.e(853),n.e(613),n.e(550),n.e(354),n.e(595),n.e(383)]).then(n.bind(n,21383))}))},E=function(t){var e=t.component,n=(t.rootClass,(0,s.Z)(t,w));return o().createElement(i.Route,(0,a.Z)({},n,{component:e}))};E.propTypes={component:c().func,rootClass:c().string};var k=function(){var t=(0,i.useLocation)().pathname;return o().createElement(i.Switch,null,o().createElement(i.Redirect,{from:"/:url*(/+)",to:t.slice(0,-1)}),Object.keys(b).map((function(t){return o().createElement(E,{key:t,path:g.n[t],component:b[t],rootClass:t})})),o().createElement(i.Route,null,o().createElement(i.Redirect,{to:g.n.clusters})))};var j=n(77388),S=n(64866),P=n(58788),x=n(2112),R=n(27839),L=n(13784),C=function(t){var e=t.preflightError;return o().createElement(P.EmptyState,{variant:P.EmptyStateVariant.full},o().createElement(P.EmptyStateIcon,{icon:x.ZP}),404===e.status&&o().createElement(o().Fragment,null,o().createElement(P.Title,{headingLevel:"h5",size:"lg"},"No data found"),o().createElement(P.EmptyStateBody,null,"Please visit"," ",o().createElement("a",{href:"https://docs.ansible.com/ansible-tower/latest/html/administration/usability_data_collection.html#automation-analytics",target:"_blank",rel:"noopener noreferrer"},"here")," ","to learn how to enable Automation Analytics.")),401===e.status&&o().createElement(o().Fragment,null,o().createElement(P.Title,{headingLevel:"h5",size:"lg"},"Not authorized"),o().createElement(P.EmptyStateBody,null,"You do not have the correct permissions to view this page.")),403===e.status&&o().createElement(R.Z,L.dR),!e.status&&o().createElement(o().Fragment,null,o().createElement(P.Title,{headingLevel:"h5",size:"lg"},"Something went wrong, please try reloading the page"),o().createElement(P.Button,{variant:"primary",onClick:function(){return window.location.reload()}},"Reload")))};C.propTypes={preflightError:c().object};const T=C,Z=function(){var t=(0,i.useHistory)(),e=(0,j.QT)(S.YU,{}),n=e.error,a=e.request;return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("automation-analytics");var e=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&t.push("/".concat(e.navId))})),n=t.listen((function(){a()}));return function(){e(),n()}}),[]),o().createElement("div",{id:"automation-analytics-application",version:"1.1.0"},n?o().createElement(T,{preflightError:n}):o().createElement(k,null))}},13784:(t,e,n)=>{"use strict";n.d(e,{cY:()=>r,GL:()=>o,wC:()=>i,kK:()=>a,bE:()=>s,dR:()=>u,It:()=>c});var r={attributes:["id","status","job_type","started","finished","elapsed","created","cluster_name","org_name","most_failed_tasks","host_count","host_task_count","failed_host_count","unreachable_host_count","changed_host_count","ok_host_count","skipped_host_count"],defaultParams:{status:["successful","failed"],quick_date_range:"last_30_days",job_type:["workflowjob","job"],org_id:[],cluster_id:[],template_id:[],inventory_id:[],sort_by:"created:desc",sort_options:"created",sort_order:"desc",only_root_workflows_and_standalone_jobs:!1,limit:5,offset:0}},o={defaultParams:{status:["successful"],org_id:[],cluster_id:[],template_id:[],inventory_id:[],quick_date_range:"roi_last_year",job_type:["job"],sort_options:"template_productivity_score",sort_order:"desc",start_date:null,end_date:null,limit:25,only_root_workflows_and_standalone_jobs:!0,attributes:["successful_hosts_total","successful_elapsed_total","total_org_count","total_cluster_count"],group_by:"template",group_by_time:!1}},i={defaultParams:{status:[],org_id:[],quick_date_range:"last_30_days",limit:5,offset:0,job_type:["workflowjob","job"],cluster_id:[],template_id:[],inventory_id:[],start_date:null,end_date:null}},a={defaultParams:{status:["successful","failed"],quick_date_range:"last_30_days",job_type:["workflowjob","job"],group_by_time:!0,org_id:[],cluster_id:[],template_id:[],inventory_id:[],only_root_workflows_and_standalone_jobs:!1}},s={defaultParams:{template_id:[],inventory_id:[],automation_status:[],category:[],frequency_period:[],name:"",limit:10,offset:0,sort_options:"modified",sort_order:"desc",sort_by:"modified:desc"}},u={title:"RBAC Access Denied",description:"User does not have privileges to perform this action. Contact your organization adminstrator(s) for more information."},c=["automation_status","attributes","cluster_id","category","frequency_period","host_id","host_status","inventory_id","job_type","status","org_id","template_id"]},83653:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.pathname,e="/",n=t.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),e="/beta/"),"".concat(e).concat(n[0],"/").concat(n[1]||"")}},20806:(t,e,n)=>{"use strict";n.d(e,{n:()=>r});var r={clusters:"/clusters",organizationStatistics:"/organization-statistics",notifications:"/notifications",automationCalculator:"/automation-calculator",jobExplorer:"/job-explorer",savingsPlanner:"/savings-planner",reports:"/reports"}},30319:(t,e,n)=>{"use strict";n.d(e,{S1:()=>s});var r,o=n(18546),i=n(57283),a=n.n(i);function s(){if(!r){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r=new o.ZP({},[a()].concat(e))}return r}},64866:(t,e,n)=>{"use strict";n.d(e,{he:()=>E,Kh:()=>j,N$:()=>f,YU:()=>d,hD:()=>x,VU:()=>R,wi:()=>_,og:()=>v,FW:()=>w,Ij:()=>p,ZW:()=>h,A7:()=>L,wp:()=>g,wD:()=>k,nE:()=>P,Wu:()=>b,QJ:()=>m,Yn:()=>y,Vs:()=>S});var r=n(17563),o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=function(t){return t.json().then((function(e){return t.ok?e:404===t.status||401===t.status?Promise.reject({status:t.status,message:e}):403===t.status?Promise.reject({status:t.status,error:"RBAC access denied"}):Promise.reject(e)}))},a=function(t,e){return void 0===e&&(e={}),window.insights.chrome.auth.getUser().then((function(){return fetch(t,o(o({},e),{headers:{"Content-Type":"application/json"}}))}))},s=function(t,e){void 0===e&&(e={});var n=new URL(t,window.location.origin);return n.search=(0,r.stringify)(e),a(n.toString(),{method:"GET"}).then(i)},u=function(t,e){void 0===e&&(e={});var n=new URL(t,window.location.origin);return a(n.toString(),{method:"POST",body:JSON.stringify(e)}).then(i)},c=function(t,e){void 0===e&&(e={});var n=e.limit,o=e.offset,s=e.sort_by,u=new URL(t,window.location.origin);return u.search=(0,r.stringify)({limit:n,offset:o,sort_by:s}),a(u.toString(),{method:"POST",body:JSON.stringify(e)}).then(i)},l="/api/tower-analytics/v1/plan/",f=function(){return t=void 0,e=void 0,r=function(){var t,e;return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),t=new URL("/api/featureflags/v0",window.location.origin),[4,a(t.toString())];case 1:return[2,(e=n.sent()).ok?e.json():{}];case 2:return n.sent(),[2,{}];case 3:return[2]}}))},new((n=void 0)||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}));var t,e,n,r},d=function(){return a("/api/tower-analytics/v0/authorized/")},p=function(t){return c("/api/tower-analytics/v1/job_explorer/",t)},h=function(t){return u("/api/tower-analytics/v1/job_explorer_options/",t)},_=function(t){return c("/api/tower-analytics/v1/event_explorer/",t)},m=function(t){return c("/api/tower-analytics/v1/roi_templates/",t)},y=function(t){return u("/api/tower-analytics/v1/roi_templates_options/",t)},v=function(t){return c("/api/tower-analytics/v1/host_explorer/",t)},g=function(t){return u("/api/tower-analytics/v1/dashboard_organization_statistics_options/",t)},w=function(t){return u("/api/tower-analytics/v1/host_explorer_options/",t)},b=function(t){return c("/api/tower-analytics/v1/plans/",t)},E=function(t){return u(l,t)},k=function(t){return s(""+l+t+"/")},j=function(t){return function(t,e){var n=new URL("/api/tower-analytics/v1/plan/"+e,window.location.origin);return a(n.toString(),{method:"DELETE"}).then(i)}(0,t.id)},S=function(t,e){return function(t,e,n){void 0===n&&(n={});var r=new URL("/api/tower-analytics/v1/plan/"+e,window.location.origin);return a(r.toString(),{method:"PUT",body:JSON.stringify(n)}).then(i)}(0,t,e)},P=function(t){return void 0===t&&(t={}),s("/api/tower-analytics/v1/plan_options/",t)},x=function(){return s("/api/tower-analytics/v0/clusters/")},R=function(t){return u("/api/tower-analytics/v1/dashboard_clusters_options/",t)},L=function(t){return s("/api/tower-analytics/v0/notifications/",t)}},14245:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r=n(92950),o=n.n(r),i=n(45697),a=n.n(i),s=(0,r.createContext)([]).Provider,u=n(64866),c=function(t){var e=t.children,n=(0,r.useState)([]),i=n[0],a=n[1];return(0,r.useEffect)((function(){(0,u.N$)().then((function(t){t&&t.toggles?a(t.toggles):a([])})).catch((function(t){return console.error("Getting the feature flags resulted in error:",t)}))}),[]),o().createElement(s,{value:i},e)};c.propTypes={children:a().node.isRequired};const l=c},77388:(t,e,n)=>{"use strict";n.d(e,{ZP:()=>l,px:()=>c,pF:()=>u,QT:()=>s});var r=n(92950);var o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},a=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},s=function(t,e){var n=(0,r.useState)({result:e,error:null,isLoading:!1,isSuccess:!1}),s=n[0],u=n[1],c=function(){var t=(0,r.useRef)({});return(0,r.useEffect)((function(){return t.current=!0,function(){t.current=!1}})),t}();return o(o({},s),{request:(0,r.useCallback)((function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return i(void 0,void 0,void 0,(function(){var r,i;return a(this,(function(a){switch(a.label){case 0:u(o(o({},s),{isSuccess:!1,isLoading:!0})),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,t.apply(void 0,n)];case 2:return r=a.sent(),c.current&&u({isLoading:!1,result:r,error:null,isSuccess:!0}),[3,4];case 3:return i=a.sent(),c.current&&u({isSuccess:!1,isLoading:!1,error:i,result:e}),[3,4];case 4:return[2]}}))}))}),[t]),setValue:function(t){return u(o(o({},s),{result:t}))}})},u=function(t){var e=(0,r.useState)(!1),n=e[0],o=e[1];return(0,r.useEffect)((function(){t&&o(!0)}),[t]),{error:n?t:null,dismissError:function(){o(!1)}}},c=function(t){var e=s(t,null),n=e.error,r=e.isLoading,o=e.request,i=u(n);return{isLoading:r,deleteItems:o,deletionError:i.error,clearDeletionError:i.dismissError}};const l=s}}]);
//# sourceMappingURL=../sourcemaps/169.2974b887c4f43ec1e72f.js.map