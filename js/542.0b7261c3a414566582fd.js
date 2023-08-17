"use strict";(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[542],{87986:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(87462),r=n(92950),o=n.n(r),i=n(45697),s=n.n(i),l=n(27061),c=n(62012),u=function(t){var e=function(e){var n=e.id,r=e.margin,i=(0,c.useNavigate)();return o().createElement(t,(0,a.Z)({},e,{getWidth:function(){return parseInt(l.Ys("#"+n).style("width"))-r.left-r.right||700},getHeight:function(){return parseInt(l.Ys("#"+n).style("height"))-r.top-r.bottom||450},navigate:i}))};return e.propTypes={id:s().string,margin:s().object},e};u.propTypes={Chart:s().element};const d=u},75504:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Ot});var a,r,o,i,s,l,c=n(15861),u=n(70885),d=n(44925),g=n(4942),h=n(30168),p=n(64687),f=n.n(p),m=n(92950),v=n.n(m),x=n(12788),b=n(97139),y=n(82048),w=n(11406),T=n(59698),B=n(62012),E=n(41448),Z=n(94513),_=n(50693),k=n(16475),O=n(32203),j=n(35262),C=n(28883),z=n(62394),P=n(70),N=n(32045),S=n(42982),Y=n(45697),W=n.n(Y),F=n(27061),M=n(87986),R=n(51442),D=x.default.div(a||(a=(0,h.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  overflow: auto;\n  width: 100%;\n  height: ",";\n"])),(function(t){return t.height})),L=x.default.div(r||(r=(0,h.Z)(["\n  display: flex;\n  padding: 7.5px 15px;\n  align-items: center;\n  justify-content: space-between;\n"]))),A=x.default.div(o||(o=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  overflow: auto;\n"]))),q=x.default.div.attrs((function(t){return{color:t.color||"black"}}))(i||(i=(0,h.Z)(["\n  min-width: 12px;\n  height: 12px;\n  background: ",";\n  margin-right: 20px;\n"])),(function(t){return t.color})),H=x.default.span(s||(s=(0,h.Z)(["\n  font-size: 15px;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n"]))),I=x.default.span(l||(l=(0,h.Z)(["\n  font-size: 15px;\n  margin-left: auto;\n  margin-right: 0;\n  padding-right: 10px;\n"]))),J=function(t){var e=t.data,n=t.selected,a=t.height,r=t.onToggle,o=t.chartName;return v().createElement(D,{height:a},e.map((function(t,e){var a=t.name,i=t.value,s=t.id,l=t.count;return v().createElement(L,{key:e},v().createElement(A,null,v().createElement(q,{color:i}),v().createElement(H,null,a)),l&&v().createElement(I,null,l),n&&v().createElement(R.r,{isChecked:n.some((function(t){return t===s})),onChange:function(){return r(s)},"aria-label":"".concat(o,"-").concat(a),value:s,key:e}))})))};J.propTypes={data:W().array.isRequired,selected:W().array.isRequired,onToggle:W().func.isRequired,height:W().string.isRequired,chartName:W().string.isRequired};const K=J;var U,X=["onClick","TooltipClass","legend"],G=x.default.div(U||(U=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n"]))),Q=function(t){var e=t.split("-");return"".concat(e[1],"/").concat(e[2])},V=function(t){var e=t.onClick,n=void 0===e?null:e,a=t.TooltipClass,r=t.legend,o=(0,d.Z)(t,X),i=r.map((function(t){var e=t.id;return{name:t.name||"No organization",value:o.colorFunc(e),id:e}})),s=(0,m.useState)(r.map((function(t){return t.id})).slice(0,8)),l=(0,u.Z)(s,2),c=l[0],g=l[1],h=null,p=function(){F.td_("#"+o.id+" > *").remove();var t=o.data.reduce((function(t,e){var n=e.date,a=e.items.filter((function(t){var e=t.id;return c.includes(e)}));return t.concat({date:n,selectedOrgs:a})}),[]),e=o.getWidth(),r=o.getHeight(),i=F.tiA().range([0,e]).padding(.35),s=F.tiA(),l=F.BYU().range([r,0]),u=Math.round(t.length/(t.length/2)),d=Math.round(t.length/(t.length/4)),g=t.map((function(t){return t.date}));t.length>14&&(g=t.map((function(e,n){return n%(t.length>31?d:u)==0?e.date:void 0})).filter((function(t){return t})));var h=F.LLu(i).tickValues(g).tickFormat(Q),p=F.y4O(l).ticks(8).tickSize(-e,0,0),f=F.Ys("#"+o.id).append("svg").attr("width",e+o.margin.left+o.margin.right).attr("height",r+o.margin.bottom+o.margin.top).append("g").attr("transform","translate("+o.margin.left+","+o.margin.top+")"),m=t.map((function(t){return t.date})),v=new a({svg:"#"+o.id});i.domain(m),s.domain(c).range([0,i.bandwidth()]),l.domain([0,F.Fp7(t,(function(t){return F.Fp7(t.selectedOrgs,(function(t){return 1.15*t.value}))}))||8]),f.append("g").attr("class","y axis").call(p).selectAll("line").attr("stroke","#d7d7d7").append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").style("font-weight","bold").text("Value"),f.append("text").attr("transform","rotate(-90)").attr("y",0-o.margin.left).attr("x",0-r/2).attr("dy","1em").style("text-anchor","middle").text(o.yLabel),f.append("g").attr("class","x axis").attr("transform","translate(0,"+r+")").call(h).selectAll("line").attr("stroke","#d7d7d7"),f.append("text").attr("transform","translate("+e/2+" ,"+(r+o.margin.top+25)+")").style("text-anchor","middle").text("Date");var x=f.selectAll(".slice").data(t);x.exit().remove();var b=x.enter().append("g").attr("class","g foo").attr("transform",(function(t){return"translate("+i(t.date)+",0)"})),y=(x=x.merge(b)).selectAll("rect").data((function(t){return t.selectedOrgs}));y.exit().remove();var w=o.colorFunc,T=y.enter().append("rect").attr("width",s.bandwidth()).attr("x",(function(t){return s(t.id)})).style("fill",(function(t){return w(t.id)})).attr("y",(function(t){return l(t.value)})).attr("height",(function(t){return r-l(t.value)})).on("mouseover",(function(t){t.moreDetail=!t.name.endsWith("Others"),F.Ys(this).style("cursor",n&&t.moreDetail?"pointer":"default"),F.Ys(this).style("fill",F.B8C(w(t.id)).darker(1)),v.handleMouseOver(t)})).on("mousemove",v.handleMouseOver).on("mouseout",(function(t){F.Ys(this).style("fill",w(t.id)),v.handleMouseOut()})).on("click",n);y=y.merge(T)},f=function(){clearTimeout(h),h=setTimeout((function(){p()}),500)};return(0,m.useEffect)((function(){return p(),window.addEventListener("resize",f),function(){clearTimeout(h),window.removeEventListener("resize",f)}}),[]),(0,m.useEffect)((function(){p()}),[o.data,c]),v().createElement(G,null,v().createElement("div",{id:o.id}),i.length>0&&v().createElement(K,{id:"".concat(o.id,"-legend"),data:i,selected:c,onToggle:function(t){c.includes(t)?g(c.filter((function(e){return e!==t}))):g([].concat((0,S.Z)(c),[t]))},height:"350px",chartName:"".concat(o.id,"-legend")}))};V.propTypes={id:W().string,data:W().array,legend:W().array,margin:W().object,getHeight:W().func,getWidth:W().func,colorFunc:W().func,yLabel:W().string,onClick:W().func,TooltipClass:W().any.isRequired},V.defaultProps={legend:[]};const $=(0,M.Z)(V);var tt,et=n(15671),nt=n(43144),at=function(t){var e=t.split("-");return"".concat(e[1],"/").concat(e[2])},rt=function(){function t(e){var n=this;(0,et.Z)(this,t),(0,g.Z)(this,"handleMouseOver",(function(t){var e,a,r,o=F.Ba6.pageX-F.Ys(n.svg).node().getBoundingClientRect().x+10,i=F.Ba6.pageY-F.Ys(n.svg).node().getBoundingClientRect().y-10;if(t){e=t.date,a=t.name,r=t.value,t.name.length>16&&(a=t.name.slice(0,16).concat("...")),t.moreDetail?(n.boundingBox.attr("height",68),n.boundingBox.attr("y",-23),n.date.attr("y",14),n.jobs.attr("y",14),n.orgName.attr("y",-1),n.clickMore.text("Click for details")):(n.boundingBox.attr("height",50),n.boundingBox.attr("y",-12),n.date.attr("y",25),n.jobs.attr("y",25),n.orgName.attr("y",10),n.clickMore.text(""));var s=at,l=n.toolTipBase.node().getBoundingClientRect().width,c=F.Ys(n.svg+"> svg").node().getBoundingClientRect().width,u=100-l/c*100<o/c*100;n.date.text(""+s(e)),n.orgName.text(""+a),n.jobs.text(r+" Jobs"),n.jobsWidth=n.jobs.node().getComputedTextLength();var d,g=n.jobsWidth/n.boxWidth*100,h=g/45;d=g>45?n.boxWidth*h:n.boxWidth,n.boundingBox.attr("width",d),n.toolTipBase.attr("transform","translate("+o+","+i+")"),u?(n.toolTipPoint.attr("transform","translate(-20, 0) rotate(45)"),n.boundingBox.attr("x",-d-20),n.jobs.attr("x",-n.jobsWidth-20-7),n.orgName.attr("x",-d-7),n.date.attr("x",-d-7),n.clickMore.attr("x",-d-7)):(n.toolTipPoint.attr("transform","translate(10, 0) rotate(45)"),n.boundingBox.attr("x",10),n.orgName.attr("x",20),n.jobs.attr("x",d/2),n.date.attr("x",20),n.clickMore.attr("x",20)),n.toolTipBase.style("opacity",1),n.toolTipBase.interrupt()}})),(0,g.Z)(this,"handleMouseOut",(function(){n.toolTipBase.transition().delay(15).style("opacity",0).style("pointer-events","none")})),this.svg=e.svg,this.draw()}return(0,nt.Z)(t,[{key:"draw",value:function(){this.width=125,this.toolTipBase=F.Ys(this.svg+"> svg").append("g"),this.toolTipBase.attr("id","svg-chart-Tooltip.base-"+this.svg.slice(1)),this.toolTipBase.attr("overflow","visible"),this.toolTipBase.style("opacity",0),this.toolTipBase.style("pointer-events","none"),this.toolTipBase.attr("transform","translate(100, 100)"),this.boxWidth=125,this.textWidthThreshold=20,this.toolTipPoint=this.toolTipBase.append("rect").attr("transform","translate(10, -10) rotate(45)").attr("x",0).attr("y",0).attr("height",20).attr("width",20).attr("fill","#393f44"),this.boundingBox=this.toolTipBase.append("rect").attr("x",10).attr("y",-12).attr("rx",2).attr("height",50).attr("width",this.boxWidth).attr("fill","#393f44"),this.date=this.toolTipBase.append("text").attr("x",20).attr("y",25).attr("font-size",12).attr("fill","white").text("Date"),this.jobs=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("x",72).attr("y",25).text("0 Jobs"),this.orgName=this.toolTipBase.append("text").attr("fill","white").attr("font-weight",800).attr("x",20).attr("y",10).attr("font-size",12).text("Org"),this.clickMore=this.toolTipBase.append("text").attr("fill","white").attr("x",20).attr("y",30).attr("font-size",12).text("")}}]),t}(),ot=function(t){var e=t.split("-");return"".concat(e[1],"/").concat(e[2])},it=function(){function t(e){var n=this;(0,et.Z)(this,t),(0,g.Z)(this,"handleMouseOver",(function(t){var e,a,r,o=F.Ba6.pageX-F.Ys(n.svg).node().getBoundingClientRect().x+10,i=F.Ba6.pageY-F.Ys(n.svg).node().getBoundingClientRect().y-10;if(t){e=t.date,a=t.name,r=t.value,t.name.length>16&&(a=t.name.slice(0,16).concat("..."));var s=ot,l=n.toolTipBase.node().getBoundingClientRect().width,c=F.Ys(n.svg+"> svg").node().getBoundingClientRect().width,u=100-l/c*100<o/c*100;n.date.text(""+s(e)),n.orgName.text(""+a),n.jobs.text(r+" Hosts"),n.jobsWidth=n.jobs.node().getComputedTextLength();var d,g=n.jobsWidth/n.boxWidth*100,h=g/45;d=g>45?n.boxWidth*h:n.boxWidth,n.boundingBox.attr("width",d),n.toolTipBase.attr("transform","translate("+o+","+i+")"),u?(n.toolTipPoint.attr("transform","translate(-20, 0) rotate(45)"),n.boundingBox.attr("x",-d-20),n.jobs.attr("x",-n.jobsWidth-20-7),n.orgName.attr("x",-d-7),n.date.attr("x",-d-7)):(n.toolTipPoint.attr("transform","translate(10, 0) rotate(45)"),n.boundingBox.attr("x",10),n.orgName.attr("x",20),n.jobs.attr("x",d/2),n.date.attr("x",20)),n.toolTipBase.style("opacity",1),n.toolTipBase.interrupt()}})),(0,g.Z)(this,"handleMouseOut",(function(){n.toolTipBase.transition().delay(15).style("opacity",0).style("pointer-events","none")})),this.svg=e.svg,this.draw()}return(0,nt.Z)(t,[{key:"draw",value:function(){this.width=125,this.toolTipBase=F.Ys(this.svg+"> svg").append("g"),this.toolTipBase.attr("id","svg-chart-Tooltip.base-"+this.svg.slice(1)),this.toolTipBase.attr("overflow","visible"),this.toolTipBase.style("opacity",0),this.toolTipBase.style("pointer-events","none"),this.toolTipBase.attr("transform","translate(100, 100)"),this.boxWidth=125,this.textWidthThreshold=20,this.toolTipPoint=this.toolTipBase.append("rect").attr("transform","translate(10, -10) rotate(45)").attr("x",0).attr("y",0).attr("height",20).attr("width",20).attr("fill","#393f44"),this.boundingBox=this.toolTipBase.append("rect").attr("x",10).attr("y",-12).attr("rx",2).attr("height",50).attr("width",this.boxWidth).attr("fill","#393f44"),this.date=this.toolTipBase.append("text").attr("x",20).attr("y",25).attr("font-size",12).attr("fill","white").text("Date"),this.jobs=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("x",72).attr("y",25).text("0 Jobs"),this.orgName=this.toolTipBase.append("text").attr("fill","white").attr("font-weight",800).attr("x",20).attr("y",10).attr("font-size",12).text("Org")}}]),t}(),st=x.default.div(tt||(tt=(0,h.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n"]))),lt=function(){function t(e){var n=this;(0,et.Z)(this,t),(0,g.Z)(this,"handleMouseOver",(function(t){var e,a,r;!0!==n.drawn&&(n.draw(t),n.drawn=!0);var o=F.Ba6.pageX-F.Ys(n.svg).node().getBoundingClientRect().x+10,i=F.Ba6.pageY-F.Ys(n.svg).node().getBoundingClientRect().y-10;if(t){t&&t.data&&(e=t.data.percent,a=t.data.success_rate,r=t.data.name,t.data.name.length>16&&(r=t.data.name.slice(0,13).concat("...")));var s=n.toolTipBase.node().getBoundingClientRect().width,l=F.Ys(n.svg+"> svg").node().getBoundingClientRect().width,c=100-s/l*100<o/l*100;n.percentageTotal.text(e+"%"),a&&n.percentageSuccess&&n.percentageSuccess.text("("+a+"% successful)"),n.orgName.text(" "+r),n.toolTipBase.attr("transform","translate("+o+","+i+")"),c?(n.toolTipPoint.attr("transform","translate(-20, -10) rotate(45)"),n.boundingBOx.attr("x",-125),n.orgName.attr("x",-112),n.percentageTotal.attr("x",-112),n.showSuccess&&n.percentageSuccess.attr("x",-112)):(n.toolTipPoint.attr("transform","translate(10, -10) rotate(45)"),n.boundingBOx.attr("x",10),n.orgName.attr("x",20),n.percentageTotal.attr("x",20),n.showSuccess&&n.percentageSuccess.attr("x",20)),n.toolTipBase.style("opacity",1),n.toolTipBase.interrupt()}})),(0,g.Z)(this,"handleMouseOut",(function(){n.toolTipBase.transition().delay(15).style("opacity",0).style("pointer-events","none")})),this.svg=e.svg,this.drawn=!1,this.showSuccess=!1}return(0,nt.Z)(t,[{key:"draw",value:function(t){this.showSuccess=!!(t&&t.data&&"success_rate"in t.data);var e=this.showSuccess?70:52,n=this.showSuccess?120:108;this.toolTipBase=F.Ys(this.svg+"> svg").append("g"),this.toolTipBase.attr("id","svg-chart-Tooltip.base-"+this.svg.slice(1)),this.toolTipBase.attr("overflow","visible"),this.toolTipBase.style("opacity",0),this.toolTipBase.style("pointer-events","none"),this.toolTipBase.attr("transform","translate(100, 100)"),this.toolTipPoint=this.toolTipBase.append("rect").attr("transform","translate(10, -10) rotate(45)").attr("x",0).attr("y",0).attr("height",20).attr("width",20).attr("fill","#393f44"),this.boundingBOx=this.toolTipBase.append("rect").attr("x",10).attr("y",-23).attr("rx",2).attr("height",e).attr("width",n).attr("fill","#393f44"),this.orgName=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("font-weight",800).attr("x",20).attr("y",0).text("Organization"),this.percentageTotal=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("font-weight",800).attr("x",20).attr("y",16).text("0"),this.percentageSuccess=null,this.showSuccess&&(this.percentageSuccess=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("font-weight",800).attr("x",20).attr("y",30).text(""))}}]),t}(),ct=function(t){var e=t.data,n=t.id,a=t.colorFunc,r=t.margin,o=t.getWidth,i=t.getHeight,s=e.map((function(t){var e=t.id,n=t.name,r=t.count;return{id:e,name:n,value:a(e),count:Math.round(r)}})).sort((function(t,e){return t.count>e.count?1:e.count>t.count?-1:0})),l=(0,m.useState)(e.map((function(t){return t.id})).slice(0,8)),c=(0,u.Z)(l,2),d=c[0],g=c[1],h=null,p=function(){F.td_("#"+n+" > *").remove();var t=o(),s=i(),l=F.Ys("#"+n).append("svg").attr("width",t+r.left+r.right).attr("height",s+r.bottom).append("g");l.append("g").attr("class","slices"),l.append("g").attr("class","labels"),l.append("g").attr("class","lines");var c=Math.min(t,s)/2,u=e.filter((function(t){var e=t.id;return d.includes(e)})),g=(0,y.NU)(u);u.forEach((function(t){t.count=+t.count,t.percent=+Math.round(t.count/g*100)}));var h=new lt({svg:"#"+n}),p=F.ve8().sort(null).value((function(t){return t.count})),f=F.Nb1().outerRadius(c-10).innerRadius(0);l.attr("transform","translate("+(t+r.left+r.right)/2+","+(s+r.top+r.bottom)/2+")"),l.selectAll("path").data(p(u)).enter().append("path").attr("d",f).attr("fill",(function(t){return a(t.data.id)})),l.selectAll("path").on("mouseover",(function(t){F.Ys(this).style("fill",F.B8C(a(t.data.id)).darker(1)),h.handleMouseOver(t)})).on("mouseout",(function(t){F.Ys(this).style("fill",a(t.data.id)),h.handleMouseOut()})).on("mousemove",h.handleMouseOver),l.append("g").classed("labels",!0),l.append("g").classed("lines",!0)},f=function(){clearTimeout(h),h=setTimeout((function(){p()}),500)};return(0,m.useEffect)((function(){return p(),window.addEventListener("resize",f),function(){clearTimeout(h),window.removeEventListener("resize",f)}}),[]),(0,m.useEffect)((function(){p()}),[e,d]),v().createElement(st,null,v().createElement("div",{id:n}),s.length>0&&v().createElement(K,{id:"".concat(n,"-legend"),data:s,selected:d,onToggle:function(t){d.includes(t)?g(d.filter((function(e){return e!==t}))):g([].concat((0,S.Z)(d),[t]))},height:"300px",chartName:"".concat(n,"-legend")}))};ct.propTypes={id:W().string,data:W().array,margin:W().object,getHeight:W().func,getWidth:W().func,colorFunc:W().func};const ut=(0,M.Z)(ct);var dt,gt=n(81221),ht=n(21249),pt=n(96146),ft=n(42910),mt=n(11470),vt=n(38003),xt=n(88241),bt=n(86388),yt=["sort_options","sort_order"];function wt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?wt(Object(n),!0).forEach((function(e){(0,g.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Bt=(0,x.default)("hr")(dt||(dt=(0,h.Z)(["\n  border: 1px solid #ebebeb;\n"]))),Et=(0,F.PKp)(["#06C","#4CB140","#009596","#5752D1","#F4C145","#EC7A08","#8BC1F7","#23511E","#A2D9D9","#2A265F","#F9E0A2","#8F4700","#002F5D"]),Zt=function(){var t=arguments.length>1?arguments[1]:void 0,e=arguments.length>2?arguments[2]:void 0,n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(t){var n=t.date,a=t.items;return{date:n,items:a.map((function(t){var a=t.id,r=t[e],o=t.name;return{id:a,date:n,value:r,name:o||"No organization"}}))}}));return t.legend.map((function(t){return Tt(Tt({},t),{},{name:t.name||"No organization"})})),n},_t=function(){var t=arguments.length>1?arguments[1]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){return{id:e.id,count:e[t],name:e.name||"No organization"}}))},kt=[{api:w.Ij,attr:"total_count",label:"Jobs across organizations",onClick:function(t){return function(e){var n=e.date,a=e.id,r=(0,B.useNavigate)();if(-1!==a){t.sort_options,t.sort_order;var o=(0,d.Z)(t,yt),i=(0,y.p6)(n),s=(0,g.Z)({},b.zG,Tt(Tt(Tt({},ht.cY.defaultParams),o),{},{quick_date_range:"custom",start_date:i,end_date:i,status:[],org_id:[a]}));r((0,b.uJ)(bt.n.jobExplorer.replace("/",""),s))}}},tooltip:rt},{api:w.og,attr:"total_unique_host_count",label:"Hosts across organizations",onClick:function(){return null},tooltip:it}];const Ot=function(){var t,e,n,a,r,o,i=(0,m.useState)(0),s=(0,u.Z)(i,2),l=s[0],d=s[1],g=(0,b.Kx)(ht.wC.defaultParams),h=g.queryParams,p=g.setFromToolbar,x=Tt(Tt({},h),{},{attributes:["host_task_count"],group_by:"org",include_others:!0,sort_options:"host_task_count",sort_order:"desc"}),y=Tt(Tt({},h),{},{attributes:["total_count"],group_by:"org",include_others:!0,sort_options:"total_count",sort_order:"desc"}),S=Tt(Tt({},h),{},{attributes:["total_count"],group_by:"org",group_by_time:!0,sort_options:"total_count",sort_order:"desc"}),Y=Tt(Tt({},h),{},{attributes:["total_unique_host_count"],group_by:"org",group_by_time:!0,sort_options:"host_task_count",sort_order:"desc"}),W=(0,ft.ZP)(w.Ij,[]),F=W.result,M=W.error,R=W.isLoading,D=W.isSuccess,L=W.request,A=(0,ft.ZP)(w.wp,{}),q=A.result,H=A.request,I=(0,ft.ZP)((0,c.Z)(f().mark((function t(){var e=arguments;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(e.length>0&&void 0!==e[0]?e[0]:0)){t.next=5;break}return t.abrupt("return",(0,w.Ij)(S));case 5:return t.abrupt("return",(0,w.og)(Y));case 6:case"end":return t.stop()}}),t)}))),[]),J=I.result,K=I.error,U=I.isLoading,X=I.isSuccess,G=I.request,Q=(0,ft.ZP)(w.Ij,[]),V=Q.result,tt=Q.error,et=Q.isLoading,nt=Q.isSuccess,at=Q.request;return(0,m.useEffect)((function(){G(l)}),[l]),(0,m.useEffect)((function(){G(l),at(x),H(h),L(y)}),[h]),v().createElement(v().Fragment,null,v().createElement(T.PageHeader,{title:"Organization Statistics"}),v().createElement(gt.Z,{categories:q,filters:h,setFilters:p}),v().createElement(N.NP,null,v().createElement(_.r,{hasGutter:!0},v().createElement(k.P,{span:12},v().createElement(E.b,{variant:E.U.warning,title:"The organization statistics page will be deprecated in a future release.",actionLinks:v().createElement(v().Fragment,null,v().createElement(Z.Q,null,v().createElement(B.Link,{to:"../reports/"+pt.Z.getDetails("hosts_by_organization")},"Hosts by organization report")),v().createElement(Z.Q,null,v().createElement(B.Link,{to:"../reports/"+pt.Z.getDetails("jobs_and_tasks_by_organization")},"Jobs/Tasks by organization report")))},"The organization statistics page has been converted to a set of reports. Please use our new, more full-featured reports by following the links below.")),v().createElement(k.P,{span:12},v().createElement(O.Z,null,v().createElement(j.m,{activeKey:l,onSelect:function(t,e){d(e)}},v().createElement(C.O,{eventKey:0,title:"Jobs"}),v().createElement(C.O,{eventKey:1,title:"Hosts"})),v().createElement(z.e,null,U&&v().createElement(vt.Z,null),K&&v().createElement(mt.Z,{message:K.error.error}),X&&(null===(t=J.dates)||void 0===t?void 0:t.length)<=0&&v().createElement(xt.Z,null),X&&(null===(e=J.dates)||void 0===e?void 0:e.length)>0&&v().createElement($,{margin:{top:20,right:20,bottom:50,left:50},id:"d3-grouped-bar-chart-root",data:Zt(J.dates,J.meta,kt[l].attr),legend:J.meta.legend,colorFunc:Et,yLabel:kt[l].label,onClick:kt[l].onClick(h),TooltipClass:kt[l].tooltip})))),v().createElement(k.P,{span:6},v().createElement(O.Z,null,v().createElement(P.l,null,v().createElement("h2",null,"Job Runs by Organization")),v().createElement(Bt,null),v().createElement(z.e,null,R&&v().createElement(vt.Z,null),M&&v().createElement(mt.Z,{message:M.error.error}),D&&(null===(n=F.items)||void 0===n?void 0:n.length)<=0&&v().createElement(xt.Z,null),D&&(null===(a=F.items)||void 0===a?void 0:a.length)>0&&v().createElement(ut,{margin:{top:20,right:20,bottom:0,left:20},id:"d3-donut-1-chart-root",data:_t(F.items,"total_count"),colorFunc:Et})))),v().createElement(k.P,{span:6},v().createElement(O.Z,null,v().createElement(P.l,null,v().createElement("h2",null,"Usage by Organization (Tasks)")),v().createElement(Bt,null),v().createElement(z.e,null,et&&v().createElement(vt.Z,null),tt&&v().createElement(mt.Z,{message:tt.error.error}),nt&&(null===(r=V.items)||void 0===r?void 0:r.length)<=0&&v().createElement(xt.Z,null),nt&&(null===(o=V.items)||void 0===o?void 0:o.length)>0&&v().createElement(ut,{margin:{top:20,right:20,bottom:0,left:20},id:"d3-donut-2-chart-root",data:_t(V.items,"host_task_count"),colorFunc:Et})))))))}},38003:(t,e,n)=>{n.d(e,{Z:()=>u});var a=n(92950),r=n.n(a),o=n(9947),i=n(38424),s=n(38779),l=n(75106),c=n(76473);const u=()=>r().createElement(o.u,{variant:o.I.full,style:{minHeight:"400px"}},r().createElement(i.k,{icon:c.TF}),r().createElement(s.D,{headingLevel:"h5",size:"lg"},"Loading..."),r().createElement(l.B,null,"Please wait."))},88241:(t,e,n)=>{n.d(e,{Z:()=>u});var a=n(92950),r=n.n(a),o=n(9947),i=n(38424),s=n(38779),l=n(75106),c=n(76473);const u=({title:t,subtext:e})=>r().createElement(o.u,{variant:o.I.full,style:{minHeight:"400px"}},r().createElement(i.k,{icon:c.TF}),r().createElement(s.D,{headingLevel:"h5",size:"lg"},t||"No Data"),e&&r().createElement(l.B,null,e))},96146:(t,e,n)=>{n.d(e,{Z:()=>a});const a={getDetails:t=>`${t}`}},42982:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(30907),r=n(40181);function o(t){return function(t){if(Array.isArray(t))return(0,a.Z)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,r.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);