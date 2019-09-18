!function(e){function n(n){for(var r,o,i=n[0],a=n[1],c=n[2],s=0,u=[];s<i.length;s++)o=i[s],A[o]&&u.push(A[o][0]),A[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(T&&T(n);u.length;)u.shift()();return I.push.apply(I,c||[]),t()}function t(){for(var e,n=0;n<I.length;n++){for(var t=I[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==A[i]&&(r=!1)}r&&(I.splice(n--,1),e=k(k.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!E[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--y&&0===b&&P()}(e,n),r&&r(e,n)};var o,i=!0,a="a0ab92b3649e206d8b87",c=1e4,s={},u=[],l=[];var d=[],p="idle";function f(e){p=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var h,v,m,y=0,b=0,g={},w={},E={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=k.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;w={},g={},E=e.c,m=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var t in v={},A)j(t);return"prepare"===p&&0===b&&0===y&&P(),n})}function j(e){E[e]?(w[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=k.p+""+e+"."+a+".hot-update.js",n.appendChild(t)}(e)):g[e]=!0}function P(){f("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return D(i)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(O(t));e.resolve(n)}}function D(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,o,i,c;function l(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,c=o.chain;if((i=x[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var s=0;s<i.parents.length;s++){var u=i.parents[s],l=x[u];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([u]),moduleId:a,parentId:u};-1===n.indexOf(u)&&(l.hot._acceptedDependencies[a]?(t[u]||(t[u]=[]),d(t[u],[a])):(delete t[u],n.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},y=[],b={},g=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var _;c=O(w);var j=!1,P=!1,D=!1,I="";switch((_=v[w]?l(c):{type:"disposed",moduleId:w}).chain&&(I="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+_.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(j=new Error("Aborted because "+c+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(_),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),D=!0;break;default:throw new Error("Unexception type "+_.type)}if(j)return f("abort"),Promise.reject(j);if(P)for(c in b[c]=v[c],d(y,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,c)&&(h[c]||(h[c]=[]),d(h[c],_.outdatedDependencies[c]));D&&(d(y,[_.moduleId]),b[c]=g)}var H,M=[];for(r=0;r<y.length;r++)c=y[r],x[c]&&x[c].hot._selfAccepted&&M.push({module:c,errorHandler:x[c].hot._selfAccepted});f("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete A[e]}(e)});for(var S,T,C=y.slice();C.length>0;)if(c=C.pop(),i=x[c]){var N={},R=i.hot._disposeHandlers;for(o=0;o<R.length;o++)(t=R[o])(N);for(s[c]=N,i.hot.active=!1,delete x[c],delete h[c],o=0;o<i.children.length;o++){var U=x[i.children[o]];U&&((H=U.parents.indexOf(c))>=0&&U.parents.splice(H,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=x[c]))for(T=h[c],o=0;o<T.length;o++)S=T[o],(H=i.children.indexOf(S))>=0&&i.children.splice(H,1);for(c in f("apply"),a=m,b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);var q=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=x[c])){T=h[c];var L=[];for(r=0;r<T.length;r++)if(S=T[r],t=i.hot._acceptedDependencies[S]){if(-1!==L.indexOf(t))continue;L.push(t)}for(r=0;r<L.length;r++){t=L[r];try{t(T)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:T[r],error:e}),n.ignoreErrored||q||(q=e)}}}for(r=0;r<M.length;r++){var B=M[r];c=B.module,u=[c];try{k(c)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),n.ignoreErrored||q||(q=t),q||(q=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:e}),n.ignoreErrored||q||(q=e)}}return q?(f("fail"),Promise.reject(q)):(f("idle"),new Promise(function(e){e(y)}))}var x={},A={1:0},I=[];function k(n){if(x[n])return x[n].exports;var t=x[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:_,apply:D,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:s[e]};return o=void 0,n}(n),parents:(l=u,u=[],l),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=x[e];if(!n)return k;var t=function(t){return n.hot.active?(x[t]?-1===x[t].parents.indexOf(e)&&x[t].parents.push(e):(u=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),u=[]),k(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(n){k[e]=n}}};for(var i in k)Object.prototype.hasOwnProperty.call(k,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,r(i));return t.e=function(e){return"ready"===p&&f("prepare"),b++,k.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===p&&(g[e]||j(e),0===b&&0===y&&P())}},t.t=function(e,n){return 1&n&&(e=t(e)),k.t(e,-2&n)},t}(n)),t.l=!0,t.exports}k.e=function(e){var n=[],t=A[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=A[e]=[n,r]});n.push(t[2]=r);var o,i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.charset="utf-8",a.timeout=120,k.nc&&a.setAttribute("nonce",k.nc),a.src=function(e){return k.p+"js/"+({0:"Rules~SamplePage",2:"SamplePage",3:"Rules"}[e]||e)+".js"}(e),o=function(n){a.onerror=a.onload=null,clearTimeout(c);var t=A[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,t[1](i)}A[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,i.appendChild(a)}return Promise.all(n)},k.m=e,k.c=x,k.d=function(e,n,t){k.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,n){if(1&n&&(e=k(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(k.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)k.d(t,r,function(n){return e[n]}.bind(null,r));return t},k.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(n,"a",n),n},k.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},k.p="/beta/apps/automation-analytics/",k.oe=function(e){throw console.error(e),e},k.h=function(){return a};var H=window.webpackJsonp=window.webpackJsonp||[],M=H.push.bind(H);H.push=n,H=H.slice();for(var S=0;S<H.length;S++)n(H[S]);var T=M;I.push([57,4]),t()}({25:function(e,n,t){(n=e.exports=t(12)(!1)).i(t(55),""),n.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n",""])},54:function(e,n,t){var r=t(25);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=t(15)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(25,function(){var n=t(25);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(n)}),e.hot.dispose(function(){i()})},57:function(e,n,t){"use strict";t.r(n);var r,o=t(1),i=t.n(o),a=t(13),c=t.n(a),s=t(151),u=t(21),l=t(35),d=t.n(l),p=t(39);var f=t(36),h=t.n(f),v=t(6),m=t.n(v),y=t(7),b=t.n(y),g=t(8),w=t.n(g),E=t(9),O=t.n(E),_=t(10),j=t.n(_),P=t(0),D=t.n(P),x=t(320),A=t(33),I=t.n(A),k=t(37),H=t.n(k),M=t(79),S=t(322),T=t(321),C=t(11),N=t.n(C),R=t(14),U=t.n(R);function q(e){return function(n){function t(e){var n;return m()(this,t),(n=w()(this,O()(t).call(this,e))).state={component:null},n}return j()(t,n),b()(t,[{key:"componentDidMount",value:function(){var n=U()(N.a.mark(function n(){var t,r;return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.default,this.setState({component:r});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?i.a.createElement(e,this.props):i.a.createElement("div",null,"Loading...")}}]),t}(o.Component)}var L=t(38),B=t.n(L),J=q(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,413))}),G=q(function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,412))}),X={dashboard:"/dashboard",rules:"/rules"},z=function(e){var n=e.component,t=e.rootClass,r=H()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(t),"pf-c-page__main"),o.setAttribute("role","main"),i.a.createElement(M.a,I()({},r,{component:n}))};z.propTypes={component:D.a.func,rootClass:D.a.string};var V=function(e){var n=e.childProps.location.pathname;return i.a.createElement(S.a,null,i.a.createElement(z,{path:X.dashboard,component:J,rootClass:"dashboard"}),i.a.createElement(z,{path:X.rules,component:G,rootClass:"rules"}),i.a.createElement(M.a,{render:function(){return B()(X,function(e){return e===n})?null:i.a.createElement(T.a,{to:X.dashboard})}}))},W=(t(54),function(e){function n(){return m()(this,n),w()(this,O()(n).apply(this,arguments))}return j()(n,e),b()(n,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("automation-analytics"),insights.chrome.navigation(K()),this.appNav=insights.chrome.on("APP_NAVIGATION",function(n){return e.props.history.push("/".concat(n.navId))}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(K())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return i.a.createElement(V,{childProps:this.props})}}]),n}(o.Component));W.propTypes={history:D.a.object};var F=Object(x.a)(Object(u.connect)()(W));function K(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map(function(n){return h()({},n,{active:n.id===e})})}var Q=function(e){var n="/",t=e.split("/");return t.shift(),"beta"===t[0]&&(t.shift(),n="/beta/"),"".concat(n).concat(t[0],"/").concat(t[1]||"")};c.a.render(i.a.createElement(u.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return r=new d.a({},[Object(p.a)()].concat(n))}().getStore()},i.a.createElement(s.a,{basename:Q(window.location.pathname)},i.a.createElement(F,null))),document.getElementById("root"))}});