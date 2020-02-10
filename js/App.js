!function(e){function n(n){for(var r,o,a=n[0],i=n[1],c=n[2],l=0,d=[];l<a.length;l++)o=a[l],A[o]&&d.push(A[o][0]),A[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(T&&T(n);d.length;)d.shift()();return I.push.apply(I,c||[]),t()}function t(){for(var e,n=0;n<I.length;n++){for(var t=I[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==A[a]&&(r=!1)}r&&(I.splice(n--,1),e=M(M.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!x[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(m[t]=n[t]);0==--y&&0===g&&P()}(e,n),r&&r(e,n)};var o,a=!0,i="152b5e7b3df59444258c",c=1e4,l={},d=[],s=[];var p=[],u="idle";function f(e){u=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var h,m,v,y=0,g=0,b={},w={},x={};function _(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return a=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=M.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;w={},b={},x=e.c,v=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var t in m={},A)O(t);return"prepare"===u&&0===g&&0===y&&P(),n})}function O(e){x[e]?(w[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=M.p+""+e+"."+i+".hot-update.js",n.appendChild(t)}(e)):b[e]=!0}function P(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return j(a)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&n.push(_(t));e.resolve(n)}}function j(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var t,r,o,a,c;function s(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<a.parents.length;l++){var d=a.parents[l],s=D[d];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([d]),moduleId:i,parentId:d};-1===n.indexOf(d)&&(s.hot._acceptedDependencies[i]?(t[d]||(t[d]=[]),p(t[d],[i])):(delete t[d],n.push(d),r.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},y=[],g={},b=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var w in m)if(Object.prototype.hasOwnProperty.call(m,w)){var E;c=_(w);var O=!1,P=!1,j=!1,I="";switch((E=m[w]?s(c):{type:"disposed",moduleId:w}).chain&&(I="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":n.onDeclined&&n.onDeclined(E),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(E),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(E),n.ignoreUnaccepted||(O=new Error("Aborted because "+c+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(E),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(E),j=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return f("abort"),Promise.reject(O);if(P)for(c in g[c]=m[c],p(y,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,c)&&(h[c]||(h[c]=[]),p(h[c],E.outdatedDependencies[c]));j&&(p(y,[E.moduleId]),g[c]=b)}var k,H=[];for(r=0;r<y.length;r++)c=y[r],D[c]&&D[c].hot._selfAccepted&&H.push({module:c,errorHandler:D[c].hot._selfAccepted});f("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete A[e]}(e)});for(var S,T,C=y.slice();C.length>0;)if(c=C.pop(),a=D[c]){var N={},U=a.hot._disposeHandlers;for(o=0;o<U.length;o++)(t=U[o])(N);for(l[c]=N,a.hot.active=!1,delete D[c],delete h[c],o=0;o<a.children.length;o++){var q=D[a.children[o]];q&&((k=q.parents.indexOf(c))>=0&&q.parents.splice(k,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=D[c]))for(T=h[c],o=0;o<T.length;o++)S=T[o],(k=a.children.indexOf(S))>=0&&a.children.splice(k,1);for(c in f("apply"),i=v,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var z=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=D[c])){T=h[c];var B=[];for(r=0;r<T.length;r++)if(S=T[r],t=a.hot._acceptedDependencies[S]){if(-1!==B.indexOf(t))continue;B.push(t)}for(r=0;r<B.length;r++){t=B[r];try{t(T)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:T[r],error:e}),n.ignoreErrored||z||(z=e)}}}for(r=0;r<H.length;r++){var R=H[r];c=R.module,d=[c];try{M(c)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),n.ignoreErrored||z||(z=t),z||(z=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:e}),n.ignoreErrored||z||(z=e)}}return z?(f("fail"),Promise.reject(z)):(f("idle"),new Promise(function(e){e(y)}))}var D={},A={0:0},I=[];function M(n){if(D[n])return D[n].exports;var t=D[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:E,apply:j,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:l[e]};return o=void 0,n}(n),parents:(s=d,d=[],s),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=D[e];if(!n)return M;var t=function(t){return n.hot.active?(D[t]?-1===D[t].parents.indexOf(e)&&D[t].parents.push(e):(d=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),M(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(n){M[e]=n}}};for(var a in M)Object.prototype.hasOwnProperty.call(M,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,r(a));return t.e=function(e){return"ready"===u&&f("prepare"),g++,M.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===u&&(b[e]||O(e),0===g&&0===y&&P())}},t.t=function(e,n){return 1&n&&(e=t(e)),M.t(e,-2&n)},t}(n)),t.l=!0,t.exports}M.e=function(e){var n=[],t=A[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=A[e]=[n,r]});n.push(t[2]=r);var o,a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,M.nc&&i.setAttribute("nonce",M.nc),i.src=function(e){return M.p+"js/"+({1:"automation_analytics"}[e]||e)+".js"}(e),o=function(n){i.onerror=i.onload=null,clearTimeout(c);var t=A[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,t[1](a)}A[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,a.appendChild(i)}return Promise.all(n)},M.m=e,M.c=D,M.d=function(e,n,t){M.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},M.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,n){if(1&n&&(e=M(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(M.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)M.d(t,r,function(n){return e[n]}.bind(null,r));return t},M.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(n,"a",n),n},M.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},M.p="/beta/apps/automation-analytics/",M.oe=function(e){throw console.error(e),e},M.h=function(){return i};var k=window.webpackJsonp=window.webpackJsonp||[],H=k.push.bind(k);k.push=n,k=k.slice();for(var S=0;S<k.length;S++)n(k[S]);var T=H;I.push([330,2]),t()}({17:function(e,n,t){(n=e.exports=t(19)(!1)).i(t(327),""),n.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.pf-c-data-list__cell {\n  --pf-c-data-list__cell--PaddingTop: 10px;\n  --pf-c-data-list__cell-cell--PaddingTop: 10px;\n  --pf-c-data-list__cell--PaddingBottom: 10px; }\n\n.dataCard .pf-c-data-list {\n  flex: 1;\n  margin-right: 0; }\n\n.dataCard ul + ul {\n  margin-left: 20px; }\n\n.pf-c-modal-box.templateModal {\n  --pf-c-modal-box--Width: 1000px; }\n  .pf-c-modal-box.templateModal .pf-c-table {\n    --pf-c-table-td--PaddingBottom: 20px;\n    --pf-c-table-td--PaddingTop: 20px; }\n    .pf-c-modal-box.templateModal .pf-c-table th:first-child,\n    .pf-c-modal-box.templateModal .pf-c-table td:first-child {\n      padding-left: 0; }\n    .pf-c-modal-box.templateModal .pf-c-table th:last-child,\n    .pf-c-modal-box.templateModal .pf-c-table td:last-child {\n      padding-right: 20px;\n      text-align: right; }\n\n@media only screen and (max-width: 600px) {\n  .dataCard {\n    flex-direction: column; }\n    .dataCard .pf-c-data-list {\n      margin: 20px 0 0 0; } }\n\n#d3-donut-1-chart-root, #d3-donut-2-chart-root {\n  min-height: 300px;\n  min-width: 60%; }\n\nh2 {\n  color: #393f44; }\n\n#d3-grouped-bar-chart-root, #d3-line-chart-root, #d3-bar-chart-root, #d3-pie-1-chart-root {\n  min-height: 450px;\n  min-width: 75%; }\n\n#fail-icon {\n  position: absolute;\n  left: 21px;\n  top: 20px;\n  color: white;\n  font-size: 14px; }\n\nsection#refTab1Section, section#refTab2Section {\n  outline: none; }\n",""])},326:function(e,n,t){var r=t(17);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=t(30)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(17,function(){var n=t(17);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)}),e.hot.dispose(function(){a()})},330:function(e,n,t){"use strict";t.r(n);var r,o=t(1),a=t.n(o),i=t(20),c=t.n(i),l=t(131),d=t(12),s=t(310),p=t.n(s),u=t(312);var f=t(27),h=t.n(f),m=t(6),v=t.n(m),y=t(7),g=t.n(y),b=t(8),w=t.n(b),x=t(9),_=t.n(x),E=t(10),O=t.n(E),P=t(0),j=t.n(P),D=t(305),A=t(28),I=t.n(A),M=t(29),k=t.n(M),H=t(62),S=t(304),T=t(306),C=t(16),N=t.n(C),U=t(22),q=t.n(U);function z(e){return function(n){function t(e){var n;return v()(this,t),(n=w()(this,_()(t).call(this,e))).state={component:null},n}return O()(t,n),g()(t,[{key:"componentDidMount",value:function(){var n=q()(N.a.mark(function n(){var t,r;return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.default,this.setState({component:r});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):a.a.createElement("div",null,"Loading...")}}]),t}(o.Component)}var B=t(311),R=t.n(B),L={clusters:"/clusters",organizationStatistics:"/organization-statistics"},J=z(function(){return t.e(1).then(t.bind(null,417))}),G=z(function(){return t.e(1).then(t.bind(null,418))}),W=function(e){var n=e.component,t=e.rootClass,r=k()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(t),"pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(H.a,I()({},r,{component:n}))};W.propTypes={component:j.a.func,rootClass:j.a.string};var X=function(e){var n=e.childProps.location.pathname;return a.a.createElement(S.a,null,a.a.createElement(W,{path:L.clusters,component:J,rootClass:"clusters"}),a.a.createElement(W,{path:L.organizationStatistics,component:G,rootClass:"organizationStatistics"}),a.a.createElement(H.a,{render:function(){return R()(L,function(e){return e===n})?null:a.a.createElement(T.a,{to:L.clusters})}}))};X.propTypes={childProps:j.a.any};t(326);var V=function(e){function n(){return v()(this,n),w()(this,_()(n).apply(this,arguments))}return O()(n,e),g()(n,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("automation-analytics"),insights.chrome.navigation(K()),this.appNav=insights.chrome.on("APP_NAVIGATION",function(n){return e.props.history.push("/".concat(n.navId))}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(K())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(X,{childProps:this.props})}}]),n}(o.Component);V.propTypes={history:j.a.object};var F=Object(D.a)(Object(d.connect)()(V));function K(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map(function(n){return h()({},n,{active:n.id===e})})}var Q=function(e){var n="/",t=e.split("/");return t.shift(),"beta"===t[0]&&(t.shift(),n="/beta/"),"".concat(n).concat(t[0],"/").concat(t[1]||"")};c.a.render(a.a.createElement(d.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return r=new p.a({},[Object(u.a)()].concat(n))}().getStore()},a.a.createElement(l.a,{basename:Q(window.location.pathname)},a.a.createElement(F,null))),document.getElementById("root"))}});