/*! For license information please see 761.71dea92e3c5930cf4c24.js.LICENSE.txt */
(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[761],{70254:e=>{e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var n=e.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){e.exports=!n(4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(32)("wks"),o=n(9),i=n(0).Symbol,a="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=r},function(e,t,n){var r=n(0),o=n(2),i=n(8),a=n(22),u=n(10),c=function(e,t,n){var s,l,f,p,d=e&c.F,v=e&c.G,g=e&c.S,y=e&c.P,m=e&c.B,h=v?r:g?r[t]||(r[t]={}):(r[t]||{}).prototype,b=v?o:o[t]||(o[t]={}),D=b.prototype||(b.prototype={});for(s in v&&(n=t),n)f=((l=!d&&h&&void 0!==h[s])?h:n)[s],p=m&&l?u(f,r):y&&"function"==typeof f?u(Function.call,f):f,h&&a(h,s,f,e&c.U),b[s]!=f&&i(b,s,p),y&&D[s]!=f&&(D[s]=f)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,n){var r=n(16),o=n(21);e.exports=n(3)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(24);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var r=n(28),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=e.type||"",i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim();return"."===t.charAt(0)?r.toLowerCase().endsWith(t.toLowerCase()):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0},n(14),n(34)},function(e,t,n){n(15),e.exports=n(2).Array.some},function(e,t,n){"use strict";var r=n(7),o=n(25)(3);r(r.P+r.F*!n(33)([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},function(e,t,n){var r=n(17),o=n(18),i=n(20),a=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(1);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){e.exports=!n(3)&&!n(4)((function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(1),o=n(0).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var r=n(1);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(0),o=n(8),i=n(23),a=n(9)("src"),u=Function.toString,c=(""+u).split("toString");n(2).inspectSource=function(e){return u.call(e)},(e.exports=function(e,t,n,u){var s="function"==typeof n;s&&(i(n,"name")||o(n,"name",t)),e[t]!==n&&(s&&(i(n,a)||o(n,a,e[t]?""+e[t]:c.join(String(t)))),e===r?e[t]=n:u?e[t]?e[t]=n:o(e,t,n):(delete e[t],o(e,t,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||u.call(this)}))},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(10),o=n(26),i=n(27),a=n(12),u=n(29);e.exports=function(e,t){var n=1==e,c=2==e,s=3==e,l=4==e,f=6==e,p=5==e||f,d=t||u;return function(t,u,v){for(var g,y,m=i(t),h=o(m),b=r(u,v,3),D=a(h.length),w=0,O=n?d(t,D):c?d(t,0):void 0;D>w;w++)if((p||w in h)&&(y=b(g=h[w],w,m),e))if(n)O[w]=y;else if(y)switch(e){case 3:return!0;case 5:return g;case 6:return w;case 2:O.push(g)}else if(l)return!1;return f?-1:s||l?l:O}}},function(e,t,n){var r=n(5);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t,n){var r=n(11);e.exports=function(e){return Object(r(e))}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(30);e.exports=function(e,t){return new(r(e))(t)}},function(e,t,n){var r=n(1),o=n(31),i=n(6)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},function(e,t,n){var r=n(5);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,t,n){"use strict";var r=n(4);e.exports=function(e,t){return!!e&&r((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},function(e,t,n){n(35),e.exports=n(2).String.endsWith},function(e,t,n){"use strict";var r=n(7),o=n(12),i=n(36),a="".endsWith;r(r.P+r.F*n(38)("endsWith"),"String",{endsWith:function(e){var t=i(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=o(t.length),u=void 0===n?r:Math.min(o(n),r),c=String(e);return a?a.call(t,c,u):t.slice(u-c.length,u)===c}})},function(e,t,n){var r=n(37),o=n(11);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},function(e,t,n){var r=n(1),o=n(5),i=n(6)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},function(e,t,n){var r=n(6)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}}])},61667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},44291:(e,t,n)=>{"use strict";n.d(t,{v:()=>b});var r,o=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],i=o.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},s=function(e){return"INPUT"===e.tagName},l=function(e,t){return!(t.disabled||function(e){return s(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=a.call(e,"details>summary:first-of-type")?e.parentElement:e;if(a.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var r=e.getBoundingClientRect(),o=r.width,i=r.height;return 0===o&&0===i}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t))},f=function(e,t){return!(!l(e,t)||function(e){return function(e){return s(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)}(t)||u(t)<0)},p=o.concat("iframe").join(","),d=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,p)&&l(t,e)};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var y,m=(y=[],{activateTrap:function(e){if(y.length>0){var t=y[y.length-1];t!==e&&t.pause()}var n=y.indexOf(e);-1===n||y.splice(n,1),y.push(e)},deactivateTrap:function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1),y.length>0&&y[y.length-1].unpause()}}),h=function(e){return setTimeout(e,0)},b=function(e,t){var n,o=document,s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),l={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},p=function(e){return l.containers.some((function(t){return t.contains(e)}))},y=function(e){var t=s[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=o.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},b=function(){var e;if(null!==y("initialFocus"))e=y("initialFocus");else if(p(o.activeElement))e=o.activeElement;else{var t=l.tabbableGroups[0];e=t&&t.firstTabbableNode||y("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},D=function(){if(l.tabbableGroups=l.containers.map((function(e){var t,n,r,o,s,l,p,d=(n=[],r=[],(o=e,s=(t=t||{}).includeContainer,l=f.bind(null,t),p=Array.prototype.slice.apply(o.querySelectorAll(i)),s&&a.call(o,i)&&p.unshift(o),p.filter(l)).forEach((function(e,t){var o=u(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(c).map((function(e){return e.node})).concat(n));if(d.length>0)return{firstTabbableNode:d[0],lastTabbableNode:d[d.length-1]}})).filter((function(e){return!!e})),l.tabbableGroups.length<=0&&!y("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},w=function e(t){t!==o.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!s.preventScroll}),l.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(b()))},O=function(e){p(e.target)||(s.clickOutsideDeactivates?n.deactivate({returnFocus:s.returnFocusOnDeactivate&&!d(e.target)}):s.allowOutsideClick&&("boolean"==typeof s.allowOutsideClick?s.allowOutsideClick:s.allowOutsideClick(e))||e.preventDefault())},x=function(e){var t=p(e.target);t||e.target instanceof Document?t&&(l.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),w(l.mostRecentlyFocusedNode||b()))},S=function(e){if(!1!==s.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){D();var t=null;if(l.tabbableGroups.length>0)if(e.shiftKey){var n=l.tabbableGroups.findIndex((function(t){var n=t.firstTabbableNode;return e.target===n}));if(n>=0){var r=0===n?l.tabbableGroups.length-1:n-1;t=l.tabbableGroups[r].lastTabbableNode}}else{var o=l.tabbableGroups.findIndex((function(t){var n=t.lastTabbableNode;return e.target===n}));if(o>=0){var i=o===l.tabbableGroups.length-1?0:o+1;t=l.tabbableGroups[i].firstTabbableNode}}else t=y("fallbackFocus");t&&(e.preventDefault(),w(t))}(e)},E=function(e){s.clickOutsideDeactivates||p(e.target)||s.allowOutsideClick&&("boolean"==typeof s.allowOutsideClick?s.allowOutsideClick:s.allowOutsideClick(e))||(e.preventDefault(),e.stopImmediatePropagation())},F=function(){if(l.active)return m.activateTrap(n),r=s.delayInitialFocus?h((function(){w(b())})):w(b()),o.addEventListener("focusin",x,!0),o.addEventListener("mousedown",O,{capture:!0,passive:!1}),o.addEventListener("touchstart",O,{capture:!0,passive:!1}),o.addEventListener("click",E,{capture:!0,passive:!1}),o.addEventListener("keydown",S,{capture:!0,passive:!1}),n},k=function(){if(l.active)return o.removeEventListener("focusin",x,!0),o.removeEventListener("mousedown",O,!0),o.removeEventListener("touchstart",O,!0),o.removeEventListener("click",E,!0),o.removeEventListener("keydown",S,!0),n};return(n={activate:function(e){if(l.active)return this;D(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=o.activeElement;var t=e&&e.onActivate?e.onActivate:s.onActivate;return t&&t(),F(),this},deactivate:function(e){if(!l.active)return this;clearTimeout(r),k(),l.active=!1,l.paused=!1,m.deactivateTrap(n);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:s.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:s.returnFocusOnDeactivate)&&h((function(){var e;w((e=l.nodeFocusedBeforeActivation,y("setReturnFocus")||e))})),this},pause:function(){return l.paused||!l.active||(l.paused=!0,k()),this},unpause:function(){return l.paused&&l.active?(l.paused=!1,D(),F(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return l.containers=t.map((function(e){return"string"==typeof e?o.querySelector(e):e})),l.active&&D(),this}}).updateContainerElements(e),n}},41389:(e,t,n)=>{"use strict";n.d(t,{Z:()=>W});var r=n(92950),o=n.n(r);function i(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))}function a(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}Object.create,Object.create;var c=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function s(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=c.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var l=[".DS_Store","Thumbs.db"];function f(e){return(null!==e.target&&e.target.files?v(e.target.files):[]).map((function(e){return s(e)}))}function p(e,t){return i(this,void 0,void 0,(function(){var n;return a(this,(function(r){switch(r.label){case 0:return e.items?(n=v(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(g))]):[3,2];case 1:return[2,d(y(r.sent()))];case 2:return[2,d(v(e.files).map((function(e){return s(e)})))]}}))}))}function d(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function v(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function g(e){if("function"!=typeof e.webkitGetAsEntry)return m(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?b(t):m(e)}function y(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(u(arguments[t]));return e}(e,Array.isArray(t)?y(t):[t])}),[])}function m(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=s(t);return Promise.resolve(n)}function h(e){return i(this,void 0,void 0,(function(){return a(this,(function(t){return[2,e.isDirectory?b(e):D(e)]}))}))}function b(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var u=this;t.readEntries((function(t){return i(u,void 0,void 0,(function(){var i,u,c;return a(this,(function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=a.sent(),e(i),[3,4];case 3:return u=a.sent(),n(u),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(h)),r.push(c),o(),a.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function D(e){return i(this,void 0,void 0,(function(){return a(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=s(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var w=n(45697),O=n.n(w),x=n(70254),S=n.n(x),E=("function"==typeof Symbol&&Symbol.iterator,"undefined"==typeof document||!document||!document.createElement||"multiple"in document.createElement("input"));function F(e,t){return"application/x-moz-file"===e.type||S()(e,t)}function k(e,t,n){return e.size<=t&&e.size>=n}function P(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function j(e){return void 0!==e.defaultPrevented?e.defaultPrevented:"function"==typeof e.isDefaultPrevented&&e.isDefaultPrevented()}function C(e){return!e.dataTransfer||Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e}))}function A(e){e.preventDefault()}function T(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function _(e){return-1!==e.indexOf("Edge/")}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return T(e)||_(e)}function L(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return t&&t.apply(void 0,[e].concat(r)),e.defaultPrevented}))}}var N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function G(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var H=function(e){function t(){var e,n,r;z(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=K(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={draggedFiles:[],acceptedFiles:[],rejectedFiles:[]},r.isFileDialogActive=!1,r.onDocumentDrop=function(e){r.node&&r.node.contains(e.target)||(e.preventDefault(),r.dragTargets=[])},r.onDragStart=function(e){e.persist(),r.props.onDragStart&&C(e)&&r.props.onDragStart.call(r,e)},r.onDragEnter=function(e){e.preventDefault(),-1===r.dragTargets.indexOf(e.target)&&r.dragTargets.push(e.target),e.persist(),C(e)&&(Promise.resolve(r.props.getDataTransferItems(e)).then((function(t){P(e)||r.setState({draggedFiles:t,isDragActive:!0})})),r.props.onDragEnter&&r.props.onDragEnter.call(r,e))},r.onDragOver=function(e){return e.preventDefault(),e.persist(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),r.props.onDragOver&&C(e)&&r.props.onDragOver.call(r,e),!1},r.onDragLeave=function(e){e.preventDefault(),e.persist(),r.dragTargets=r.dragTargets.filter((function(t){return t!==e.target&&r.node.contains(t)})),r.dragTargets.length>0||(r.setState({isDragActive:!1,draggedFiles:[]}),r.props.onDragLeave&&C(e)&&r.props.onDragLeave.call(r,e))},r.onDrop=function(e){var t=r.props,n=t.onDrop,o=t.onDropAccepted,i=t.onDropRejected,a=t.multiple,u=t.accept,c=t.getDataTransferItems;e.preventDefault(),e.persist(),r.dragTargets=[],r.isFileDialogActive=!1,r.draggedFiles=null,r.setState({isDragActive:!1,draggedFiles:[]}),C(e)&&Promise.resolve(c(e)).then((function(t){var c=[],s=[];P(e)||(t.forEach((function(e){F(e,u)&&k(e,r.props.maxSize,r.props.minSize)?c.push(e):s.push(e)})),!a&&c.length>1&&s.push.apply(s,G(c.splice(0))),r.setState({acceptedFiles:c,rejectedFiles:s},(function(){n&&n.call(r,c,s,e),s.length>0&&i&&i.call(r,s,e),c.length>0&&o&&o.call(r,c,e)})))}))},r.onClick=function(e){var t=r.props.onClick;t&&t.call(r,e),j(e)||(e.stopPropagation(),I()?setTimeout(r.open,0):r.open())},r.onInputElementClick=function(e){e.stopPropagation()},r.onFileDialogCancel=function(){var e=r.props.onFileDialogCancel;r.isFileDialogActive&&setTimeout((function(){null!=r.input&&(r.input.files.length||(r.isFileDialogActive=!1,"function"==typeof e&&e()))}),300)},r.onFocus=function(e){var t=r.props.onFocus;t&&t.call(r,e),j(e)||r.setState({isFocused:!0})},r.onBlur=function(e){var t=r.props.onBlur;t&&t.call(r,e),j(e)||r.setState({isFocused:!1})},r.onKeyDown=function(e){var t=r.props.onKeyDown;r.node.isEqualNode(e.target)&&(t&&t.call(r,e),j(e)||32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),r.open()))},r.composeHandler=function(e){return r.props.disabled?null:e},r.getRootProps=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.refKey,o=void 0===n?"ref":n,i=t.onKeyDown,a=t.onFocus,u=t.onBlur,c=t.onClick,s=t.onDragStart,l=t.onDragEnter,f=t.onDragOver,p=t.onDragLeave,d=t.onDrop,v=B(t,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragStart","onDragEnter","onDragOver","onDragLeave","onDrop"]);return N((M(e={onKeyDown:r.composeHandler(i?L(i,r.onKeyDown):r.onKeyDown),onFocus:r.composeHandler(a?L(a,r.onFocus):r.onFocus),onBlur:r.composeHandler(u?L(u,r.onBlur):r.onBlur),onClick:r.composeHandler(c?L(c,r.onClick):r.onClick),onDragStart:r.composeHandler(s?L(s,r.onDragStart):r.onDragStart),onDragEnter:r.composeHandler(l?L(l,r.onDragEnter):r.onDragEnter),onDragOver:r.composeHandler(f?L(f,r.onDragOver):r.onDragOver),onDragLeave:r.composeHandler(p?L(p,r.onDragLeave):r.onDragLeave),onDrop:r.composeHandler(d?L(d,r.onDrop):r.onDrop)},o,r.setNodeRef),M(e,"tabIndex",r.props.disabled?-1:0),e),v)},r.getInputProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,o=e.onChange,i=e.onClick,a=B(e,["refKey","onChange","onClick"]),u=r.props,c=u.accept,s=u.multiple,l=u.name,f=M({accept:c,type:"file",style:{display:"none"},multiple:E&&s,onChange:L(o,r.onDrop),onClick:L(i,r.onInputElementClick),autoComplete:"off",tabIndex:-1},n,r.setInputRef);return l&&l.length&&(f.name=l),N({},f,a)},r.setNodeRef=function(e){r.node=e},r.setInputRef=function(e){r.input=e},r.open=function(){r.isFileDialogActive=!0,r.input&&(r.input.value=null,r.input.click())},K(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),R(t,[{key:"componentDidMount",value:function(){var e=this.props.preventDropOnDocument;this.dragTargets=[],e&&(document.addEventListener("dragover",A,!1),document.addEventListener("drop",this.onDocumentDrop,!1)),window.addEventListener("focus",this.onFileDialogCancel,!1)}},{key:"componentWillUnmount",value:function(){this.props.preventDropOnDocument&&(document.removeEventListener("dragover",A),document.removeEventListener("drop",this.onDocumentDrop)),window.removeEventListener("focus",this.onFileDialogCancel,!1)}},{key:"render",value:function(){var e,t,n=this.props,r=n.children,o=n.multiple,i=n.disabled,a=this.state,u=a.isDragActive,c=a.isFocused,s=a.draggedFiles,l=a.acceptedFiles,f=a.rejectedFiles,p=s.length,d=o||p<=1,v=p>0&&(e=s,t=this.props.accept,e.every((function(e){return F(e,t)})));return r({isDragActive:u,isDragAccept:v,isDragReject:p>0&&(!v||!d),draggedFiles:s,acceptedFiles:l,rejectedFiles:f,isFocused:c&&!i,getRootProps:this.getRootProps,getInputProps:this.getInputProps,open:this.open})}}]),t}(o().Component);const W=H;H.propTypes={accept:O().oneOfType([O().string,O().arrayOf(O().string)]),children:O().func,disabled:O().bool,preventDropOnDocument:O().bool,multiple:O().bool,name:O().string,maxSize:O().number,minSize:O().number,getDataTransferItems:O().func,onClick:O().func,onFocus:O().func,onBlur:O().func,onKeyDown:O().func,onDrop:O().func,onDropAccepted:O().func,onDropRejected:O().func,onDragStart:O().func,onDragEnter:O().func,onDragOver:O().func,onDragLeave:O().func,onFileDialogCancel:O().func},H.defaultProps={preventDropOnDocument:!0,disabled:!1,multiple:!0,maxSize:1/0,minSize:0,getDataTransferItems:function(e){return i(this,void 0,void 0,(function(){return a(this,(function(t){return[2,(n=e,n.dataTransfer&&e.dataTransfer?p(e.dataTransfer,e.type):f(e))];var n}))}))}}}}]);
//# sourceMappingURL=../sourcemaps/761.01fcf377896fe2b560c3.js.map