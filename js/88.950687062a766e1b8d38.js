(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[88],{66088:(e,n,t)=>{"use strict";t.d(n,{Z:()=>v});var r,a,o,c,l,i=t(32465),m=t(92950),u=t.n(m),d=t(29163),s=t(45697),g=t.n(s),p=d.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n  max-width: 100%;\n  height: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"]))),h=d.ZP.div(a||(a=(0,i.Z)(["\n  height: 100%;\n"]))),f=d.ZP.div(o||(o=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n"]))),y=d.ZP.div(c||(c=(0,i.Z)(["\n  padding-left: 2rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n"]))),b=d.ZP.div(l||(l=(0,i.Z)(["\n  width: 0.75rem;\n  height: 0.75rem;\n  margin-right: 0.5rem;\n"])));function w(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}var k=function(e){var n=e.categoryCount,t=e.categoryColor,r=e.showPercent,a=void 0!==r&&r,o=Object.values(n).reduce((function(e,n){return e+n})),c=Object.keys(n).filter((function(e){return n[e]>0})).sort((function(e,t){return n[e]<n[t]?1:n[e]>n[t]?-1:0})).map((function(e){return{name:e,barSpacing:n[e]/o,color:t[e]}})),l=1-.15*(c.length-1)/100;return u().createElement(u().Fragment,null,u().createElement(p,null,c.map((function(e,n){var t=e.barSpacing,r=e.color;return n<c.length-1?u().createElement(u().Fragment,{key:n},u().createElement(h,{style:{backgroundColor:r,width:"".concat(100*t*l,"%")}}),u().createElement(h,{style:{backgroundColor:"transparent",width:"".concat(.15,"%")}})):u().createElement(u().Fragment,{key:n},u().createElement(h,{style:{backgroundColor:r,width:"".concat(100*t*l,"%")}}))}))),u().createElement(f,null,c.map((function(e){var n=e.name,t=e.barSpacing,r=e.color;return u().createElement(y,{key:"label-".concat(n)},u().createElement(b,{style:{backgroundColor:r}}),a?u().createElement("p",null,w(n)," ",Math.round(100*t),"%"):u().createElement("p",null,w(n)))}))))};k.propTypes={categoryColor:g().object.isRequired,categoryCount:g().object.isRequired,showPercent:g().bool};const v=k}}]);
//# sourceMappingURL=../sourcemaps/88.5874bff5ffd5398f9826.js.map