(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[252],{18546:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f});var r=n(34699),a=n(87329),c=n(6610),o=n(5991),i=n(96156),s=n(34058);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.compose;(0,c.Z)(this,e);var o=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r;this.store=(0,s.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return e}),t,o(s.applyMiddleware.apply(void 0,(0,a.Z)(n)))),this.reducers={}}return(0,o.Z)(e,[{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){var t=this;return this.reducers=l(l({},this.reducers),e),this.store.replaceReducer((0,s.combineReducers)(l({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var n=(0,r.Z)(t,2),a=n[0],c=n[1];return l(l({},e),{},(0,i.Z)({},a,c))}),{}),t.store.replaceReducer((0,s.combineReducers)(l({},t.reducers)))}}}]),e}();new p;const f=p},72466:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(92950);const a=n.n(r)().createContext("light")},86350:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=n(22122),a=n(81253),c=n(87329),o=n(96156),i=n(6610),s=n(5991),u=n(10379),l=n(86089),p=n(77608),f=n(92950),d=n.n(f),m=n(45697),h=n.n(m),g=n(94184),y=n.n(g),v=n(45237),O=n(72466);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){(0,u.Z)(m,e);var t,n,f=(t=m,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,p.Z)(t);if(n){var a=(0,p.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function m(){return(0,i.Z)(this,m),f.apply(this,arguments)}return(0,s.Z)(m,[{key:"calculateLocation",value:function(){var e=this.props,t=e.path,n=e.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var r=insights.chrome.$internal.store.getState();if(t&&r)return t.split("/").reduce((function(e,t){return 0===t.indexOf(":")?e.dynamic=P(P({},e.dynamic),{},(0,o.Z)({},"data-".concat(t.substr(1).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),n[t.substr(1)])):e.staticPart=[].concat((0,c.Z)(e.staticPart),(0,c.Z)(""!==t?[t]:[])),e}),{staticPart:[r.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,c=(e.params,e.path,(0,a.Z)(e,["className","children","params","path"])),i=this.calculateLocation(),s=i.dynamic,u=i.staticPart;return d().createElement(O.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",a=y()((0,o.Z)({},"pf-m-".concat(e),"dark"===e));return{dark:d().createElement("section",(0,r.Z)({},c,s,{"page-type":u.join("-"),className:"".concat(y()(t,"pf-l-page__main-section pf-c-page__main-section")," ").concat(a)}),d().Children.map(n,(function(e){return d().cloneElement(e,{className:"pf-m-dark"})}))),light:d().createElement("section",(0,r.Z)({},c,s,{"page-type":u.join("-"),className:"".concat(y()(t,"pf-l-page__main-section pf-c-page__main-section"))}),n)}[e]}))}}]),m}(f.Component);Z.propTypes={className:h().string,children:h().any.isRequired,params:h().any,path:h().string};const j=(0,v.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))(Z)},27839:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(22122),a=n(81253),c=n(92950),o=n.n(c),i=n(45697),s=n.n(i),u=n(60485),l=n(47173),p=n(9947),f=n(38424),d=n(75106),m=n(99332),h=function(){return o().createElement(o().Fragment,null,"Contact your organization administrator(s) for more information or visit ",o().createElement("a",{href:"./settings/my-user-access"},"My User Access"),"  to learn more about your permissions.")},g=function(e){var t=e.prevPageButtonText,n=e.toLandingPageText,c=e.title,i=e.actions,s=e.serviceName,m=e.icon,h=e.description,g=e.showReturnButton,y=e.className,v=(0,a.Z)(e,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),O=c||"You do not have access to ".concat(s);return o().createElement(p.u,(0,r.Z)({variant:p.I.full,className:"ins-c-not-authorized ".concat(y||"")},v),o().createElement(f.k,{icon:m}),o().createElement(u.D,{headingLevel:"h5",size:"lg"},O),o().createElement(d.B,null,h),i,g&&(document.referrer?o().createElement(l.zx,{variant:"primary",onClick:function(){return history.back()}},t):o().createElement(l.zx,{variant:"primary",component:"a",href:"."},n)))};g.propTypes={serviceName:function(e,t,n){if(void 0===e.title){for(var r,a=arguments.length,c=new Array(a>3?a-3:0),o=3;o<a;o++)c[o-3]=arguments[o];return(r=s().node).isRequired.apply(r,[e,t,n].concat(c))}},icon:s().func,description:s().node,showReturnButton:s().bool,className:s().string,title:s().node,actions:s().oneOfType([s().node,s().arrayOf(s().node)]),prevPageButtonText:s().node,toLandingPageText:s().node},g.defaultProps={icon:m.ZP,showReturnButton:!0,description:o().createElement(h,null),actions:null,prevPageButtonText:"Return to previous page",toLandingPageText:"Go to landing page"};const y=g},48716:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(22122),a=n(96156),c=n(81253),o=n(92950),i=n.n(o),s=n(45697),u=n.n(s),l=n(94184),p=n.n(l),f=n(72466),d=function(e){var t=e.className,n=e.children,o=(0,c.Z)(e,["className","children"]),s=p()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return i().createElement(f.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=p()((0,a.Z)({},"pf-m-".concat(e,"-200"),"dark"===e),(0,a.Z)({},"pf-m-light","light"===e));return i().createElement("section",(0,r.Z)({},o,{className:"".concat(s," ").concat(t),"widget-type":"InsightsPageHeader"}),n)}))};const m=d;d.propTypes={children:u().any.isRequired,className:u().string}},39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(92950),a=n.n(r),c=n(45697),o=n.n(c),i=n(94184),s=n.n(i),u=n(60485),l=function(e){var t=e.className,n=e.title,r=s()(t);return a().createElement(u.D,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"}," ",n," ")};const p=l;l.propTypes={title:o().node.isRequired,className:o().string}}}]);
//# sourceMappingURL=../sourcemaps/rhcsVendor.2974b887c4f43ec1e72f.js.map