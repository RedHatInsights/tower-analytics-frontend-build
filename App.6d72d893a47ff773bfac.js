!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],s=0,l=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(S,o)&&S[o]&&l.push(S[o][0]),S[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(z&&z(t);l.length;)l.shift()();return A.push.apply(A,c||[]),n()}function n(){for(var e,t=0;t<A.length;t++){for(var n=A[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==S[a]&&(r=!1)}r&&(A.splice(t--,1),e=M(M.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!j[e]||!x[e])return;for(var n in x[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--y&&0===g&&P()}(e,t),r&&r(e,t)};var o,a=!0,i="6d72d893a47ff773bfac",c={},s=[],l=[];function d(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(m={})[t]=e[t],f("ready");break;case"ready":I(t);break;case"prepare":case"check":case"dispose":case"apply":(b=b||[]).push(t)}},check:O,apply:D,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[t]};return o=void 0,n}var p=[],u="idle";function f(e){u=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,m,v,b,y=0,g=0,w={},x={},j={};function E(e){return+e+""===e?+e:e}function O(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=M.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f(k()?"ready":"idle"),null;x={},w={},j=e.c,v=e.h,f("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in m={},S)_(n);return"prepare"===u&&0===g&&0===y&&P(),t}));var t}function _(e){j[e]?(x[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=M.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function P(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then((function(){return D(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(E(n));e.resolve(t)}}function D(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function t(n){var r,a,l,d,p;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((d=C[a])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<d.parents.length;c++){var s=d.parents[c],l=C[s];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[a]?(n[s]||(n[s]=[]),h(n[s],[a])):(delete n[s],t.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}k();var y={},g=[],w={},x=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var O in m)if(Object.prototype.hasOwnProperty.call(m,O)){var _;p=E(O),_=m[O]?u(p):{type:"disposed",moduleId:O};var P=!1,D=!1,I=!1,A="";switch(_.chain&&(A="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(P=new Error("Aborted because of self decline: "+_.moduleId+A));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+A));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(P=new Error("Aborted because "+p+" is not accepted"+A));break;case"accepted":n.onAccepted&&n.onAccepted(_),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),I=!0;break;default:throw new Error("Unexception type "+_.type)}if(P)return f("abort"),Promise.reject(P);if(D)for(p in w[p]=m[p],h(g,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,p)&&(y[p]||(y[p]=[]),h(y[p],_.outdatedDependencies[p]));I&&(h(g,[_.moduleId]),w[p]=x)}var H,N=[];for(a=0;a<g.length;a++)p=g[a],C[p]&&C[p].hot._selfAccepted&&w[p]!==x&&!C[p].hot._selfInvalidated&&N.push({module:p,parents:C[p].parents.slice(),errorHandler:C[p].hot._selfAccepted});f("dispose"),Object.keys(j).forEach((function(e){!1===j[e]&&function(e){delete S[e]}(e)}));var T,z,R=g.slice();for(;R.length>0;)if(p=R.pop(),d=C[p]){var q={},U=d.hot._disposeHandlers;for(l=0;l<U.length;l++)(r=U[l])(q);for(c[p]=q,d.hot.active=!1,delete C[p],delete y[p],l=0;l<d.children.length;l++){var B=C[d.children[l]];B&&((H=B.parents.indexOf(p))>=0&&B.parents.splice(H,1))}}for(p in y)if(Object.prototype.hasOwnProperty.call(y,p)&&(d=C[p]))for(z=y[p],l=0;l<z.length;l++)T=z[l],(H=d.children.indexOf(T))>=0&&d.children.splice(H,1);f("apply"),void 0!==v&&(i=v,v=void 0);for(p in m=void 0,w)Object.prototype.hasOwnProperty.call(w,p)&&(e[p]=w[p]);var L=null;for(p in y)if(Object.prototype.hasOwnProperty.call(y,p)&&(d=C[p])){z=y[p];var V=[];for(a=0;a<z.length;a++)if(T=z[a],r=d.hot._acceptedDependencies[T]){if(-1!==V.indexOf(r))continue;V.push(r)}for(a=0;a<V.length;a++){r=V[a];try{r(z)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:p,dependencyId:z[a],error:e}),n.ignoreErrored||L||(L=e)}}}for(a=0;a<N.length;a++){var J=N[a];p=J.module,s=J.parents,o=p;try{M(p)}catch(e){if("function"==typeof J.errorHandler)try{J.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:p,error:t,originalError:e}),n.ignoreErrored||L||(L=t),L||(L=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:p,error:e}),n.ignoreErrored||L||(L=e)}}if(L)return f("fail"),Promise.reject(L);if(b)return t(n).then((function(e){return g.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(g)}))}(t=t||{})}function k(){if(b)return m||(m={}),b.forEach(I),b=void 0,!0}function I(t){Object.prototype.hasOwnProperty.call(m,t)||(m[t]=e[t])}var C={},S={1:0},A=[];function M(t){if(C[t])return C[t].exports;var n=C[t]={i:t,l:!1,exports:{},hot:d(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=C[e];if(!t)return M;var n=function(n){return t.hot.active?(C[n]?-1===C[n].parents.indexOf(e)&&C[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),M(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(t){M[e]=t}}};for(var a in M)Object.prototype.hasOwnProperty.call(M,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===u&&f("prepare"),g++,M.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===u&&(w[e]||_(e),0===g&&0===y&&P())}},n.t=function(e,t){return 1&t&&(e=n(e)),M.t(e,-2&t)},n}(t)),n.l=!0,n.exports}M.e=function(e){var t=[],n=S[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=S[e]=[t,r]}));t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,M.nc&&a.setAttribute("nonce",M.nc),a.src=function(e){return M.p+"js/"+({2:"automation_analytics",3:"pfVendor",6:"vendors~automation_analytics"}[e]||e)+"."+i+".js"}(e);var c=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=S[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}S[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},M.m=e,M.c=C,M.d=function(e,t,n){M.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},M.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,t){if(1&t&&(e=M(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(M.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)M.d(n,r,function(t){return e[t]}.bind(null,r));return n},M.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(t,"a",t),t},M.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},M.p="/apps/automation-analytics/",M.oe=function(e){throw console.error(e),e},M.h=function(){return i};var H=window.webpackJsonp=window.webpackJsonp||[],N=H.push.bind(H);H.push=t,H=H.slice();for(var T=0;T<H.length;T++)t(H[T]);var z=N;A.push([73,0,4,5]),n()}({31:function(e,t,n){(e.exports=n(27)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-c-data-list__cell{--pf-c-data-list__cell--PaddingBottom: 10px}.dataCard .pf-c-data-list{flex:1;margin-right:0}.dataCard ul+ul{margin-left:20px}.pf-c-modal-box.templateModal{--pf-c-modal-box--Width: 1000px}.pf-c-modal-box.templateModal .pf-c-table{--pf-c-table-td--PaddingBottom: 20px;--pf-c-table-td--PaddingTop: 20px}.pf-c-modal-box.templateModal .pf-c-table th:first-child,.pf-c-modal-box.templateModal .pf-c-table td:first-child{padding-left:0}.pf-c-modal-box.templateModal .pf-c-table th:last-child,.pf-c-modal-box.templateModal .pf-c-table td:last-child{padding-right:20px;text-align:right}@media only screen and (max-width: 600px){.dataCard{flex-direction:column}.dataCard .pf-c-data-list{margin:20px 0 0 0}}#d3-donut-1-chart-root,#d3-donut-2-chart-root{min-height:300px;min-width:60%}h2{color:#393f44}#d3-grouped-bar-chart-root,#d3-line-chart-root,#d3-bar-chart-root,#d3-pie-1-chart-root,#d3-roi-chart-root{min-height:450px;min-width:75%}#d3-roi-chart-root{overflow-x:auto}#fail-icon{position:absolute;left:21px;top:20px;color:white;font-size:14px}section#refTab1Section,section#refTab2Section{outline:none}#d3-bar-chart-root rect:hover{cursor:pointer}#d3-grouped-bar-chart-root rect:hover{cursor:pointer}#d3-line-chart-root circle:hover{cursor:pointer}\n",""])},46:function(e){e.exports=JSON.parse('{"name":"automation-analytics","version":"1.1.0","private":false,"dependencies":{"@babel/runtime":"^7.1.2","@patternfly/patternfly":"4.10.31","@patternfly/react-charts":"^6.9.8","@patternfly/react-core":"4.63.3","@patternfly/react-table":"4.5.7","@redhat-cloud-services/frontend-components":"^3.0.9","@redhat-cloud-services/frontend-components-utilities":"^3.0.3","babel-plugin-transform-imports":"^2.0.0","classnames":"^2.2.6","moment":"^2.24.0","react":"^16.9.0","react-dom":"^16.9.0","react-redux":"^7.2.2","react-router-dom":"^5.2.0","redux":"^4.0.5","redux-logger":"^3.0.6","redux-promise-middleware":"^6.1.2"},"jest":{"coverageDirectory":"./coverage/","collectCoverage":true,"collectCoverageFrom":["src/**/*.js","!src/**/stories/*"],"setupFiles":["<rootDir>/config/setupTests.js"],"roots":["<rootDir>/src/"],"moduleNameMapper":{"\\\\.(css|scss)$":"identity-obj-proxy"},"transformIgnorePatterns":["/node_modules/(?!@redhat-cloud-services)"]},"devDependencies":{"@babel/core":"^7.3.4","@babel/plugin-proposal-class-properties":"^7.5.0","@babel/plugin-proposal-object-rest-spread":"^7.0.0","@babel/plugin-syntax-dynamic-import":"^7.0.0","@babel/plugin-transform-runtime":"^7.1.0","@babel/preset-env":"^7.3.4","@babel/preset-flow":"^7.0.0","@babel/preset-react":"^7.0.0","@redhat-cloud-services/frontend-components-config":"2.1.8","@testing-library/react-hooks":"^5.1.0","babel-core":"^7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-jest":"^24.1.0","babel-plugin-dual-import":"^1.2.1","babel-plugin-lodash":"^3.3.2","cross-fetch":"^2.2.2","css-loader":"^2.1.1","cypress":"^6.5.0","d3":"^5.9.2","enzyme":"^3.11.0","enzyme-adapter-react-16":"^1.15.2","enzyme-to-json":"^3.3.4","eslint":"7.19.0","eslint-config-prettier":"^2.10.0","eslint-loader":"4.0.2","eslint-plugin-react":"^7.11.1","fetch-mock-jest":"^1.3.0","identity-obj-proxy":"^3.0.0","jest":"^26.6.0","jest-when":"^3.0.1","moment":"^2.24.0","node-fetch":"^2.6.1","node-sass":"^4.11.0","npm-run-all":"^4.1.3","postcss":"^7.0.16","prop-types":"^15.6.2","query-string":"^6.12.1","redux-mock-store":"^1.5.4","styled-components":"^4.3.1","stylelint":"^9.10.1","stylelint-config-recommended-scss":"^3.2.0","stylelint-scss":"^3.3.0","ts-loader":"^8.0.17","typescript":"^4.1.5","webpack":"^4.17.2","webpack-bundle-analyzer":"^3.3.2","webpack-cli":"^3.2.3"},"scripts":{"proxy":"SPANDX_CONFIG=./config/spandx.config.js bash ./insights-proxy/scripts/run.sh","build":"webpack --config config/prod.webpack.config.js","test":"jest --verbose","test_dev":"jest --coverage=false --watch","integration_headless":"cypress run --headless --browser chrome","integration":"cypress open","lint":"npm-run-all lint:*","lint:js":"eslint config src","lint:js:fix":"eslint config src --fix","lint:sass":"stylelint \'src/**/*.scss\' --config .stylelintrc.json","prod":"NODE_ENV=production webpack-dev-server --config config/dev.webpack.config.js","server:ctr":"node src/server/generateServerKey.js","start":"NODE_OPTIONS=--max-old-space-size=8192 NODE_ENV=development webpack-dev-server --config config/dev.webpack.config.js","start:container":"NODE_OPTIONS=--max-old-space-size=8192 NODE_ENV=development webpack-dev-server --config config/dev.webpack.config.js --host 0.0.0.0","build:prod":"NODE_ENV=production webpack --config config/prod.webpack.config.js","deploy":"npm-run-all build:prod lint test","verify":"npm-run-all build lint test"},"insights":{"appname":"automation-analytics"}}')},68:function(e,t,n){var r=n(31);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(28)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(31,(function(){var t=n(31);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},73:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n.n(o),i=n(20),c=n.n(i),s=n(21),l=n(17),d=n(75),p=n(44);var u=n(2),f=n.n(u),h=n(3),m=n(12),v=n.n(m),b=n(15),y=n.n(b),g=n(38),w=n.n(g),x=n(13),j=n.n(x),E=n(14),O=n.n(E),_=n(22),P=n.n(_),D=n(23),k=n.n(D),I=n(16),C=n.n(I),S=n(30),A=n.n(S);function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C()(e);if(t){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k()(this,n)}}function H(e){return function(t){P()(o,t);var n,r=M(o);function o(e){var t;return j()(this,o),(t=r.call(this,e)).state={component:null},t}return O()(o,[{key:"componentDidMount",value:(n=w()(A.a.mark((function t(){var n,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):a.a.createElement("div",null,"Loading...")}}]),o}(o.Component)}var N=n(45),T=n.n(N),z=n(9),R=H((function(){return Promise.all([n.e(0),n.e(3),n.e(6),n.e(2)]).then(n.bind(null,625))})),q=H((function(){return Promise.all([n.e(0),n.e(3),n.e(6),n.e(2)]).then(n.bind(null,623))})),U=H((function(){return Promise.all([n.e(0),n.e(3),n.e(6),n.e(2)]).then(n.bind(null,627))})),B=H((function(){return Promise.all([n.e(0),n.e(3),n.e(6),n.e(2)]).then(n.bind(null,624))})),L=H((function(){return Promise.all([n.e(0),n.e(3),n.e(6),n.e(2)]).then(n.bind(null,626))})),V=function(e){var t=e.component,n=e.rootClass,r=y()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(h.b,v()({},r,{component:t}))};V.propTypes={component:f.a.func,rootClass:f.a.string};var J=function(e){var t=e.childProps.location.pathname;return a.a.createElement(h.d,null,a.a.createElement(V,{path:z.a.clusters,component:R,rootClass:"clusters"}),a.a.createElement(V,{path:z.a.organizationStatistics,component:q,rootClass:"organizationStatistics"}),a.a.createElement(V,{path:z.a.notifications,component:U,rootClass:"notifications"}),a.a.createElement(V,{path:z.a.automationCalculator,component:B,rootClass:"automationCalculator"}),a.a.createElement(V,{path:z.a.jobExplorer,component:L,rootClass:"jobExplorer"}),a.a.createElement(h.b,{render:function(){return T()(z.a,(function(e){return e===t}))?null:a.a.createElement(h.a,{to:z.a.clusters})}}))};J.propTypes={childProps:f.a.any};n(68);var F=n(46),G=function(e){return Object(o.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("automation-analytics");var t=insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&e.history.push("/".concat(t.navId))}));return function(){t()}}),[]),a.a.createElement("div",{id:"automation-analytics-application",version:F.version},a.a.createElement(J,{childProps:e}))};G.propTypes={history:f.a.object};var X=Object(h.h)(Object(l.b)()(G));var K=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1]||"")};c.a.render(a.a.createElement(l.a,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r=new d.a({},[p.a].concat(t))}().getStore()},a.a.createElement(s.a,{basename:K(window.location.pathname)},a.a.createElement(X,null))),document.getElementById("root"))},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={clusters:"/clusters",organizationStatistics:"/organization-statistics",notifications:"/notifications",automationCalculator:"/automation-calculator",jobExplorer:"/job-explorer"}}});
//# sourceMappingURL=App.6d72d893a47ff773bfac.js.map