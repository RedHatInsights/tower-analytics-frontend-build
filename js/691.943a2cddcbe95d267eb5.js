(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[691],{15691:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>wt});var a,r,o,i,s,l,c=n(92137),u=n(34699),d=n(81253),p=n(96156),h=n(32465),g=n(87757),f=n.n(g),m=n(92950),v=n.n(m),x=n(45697),b=n.n(x),y=n(29163),w=n(53677),T=n(14115),B=n(53345),E=n(64866),Z=n(86350),k=n(48716),_=n(39173),C=n(58788),j=n(87329),O=n(25914),P=n(87986),z=y.ZP.div(a||(a=(0,h.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  overflow: auto;\n  width: 100%;\n  height: ",";\n"])),(function(t){return t.height})),S=y.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  padding: 7.5px 15px;\n  align-items: center;\n  justify-content: space-between;\n"]))),N=y.ZP.div(o||(o=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  overflow: auto;\n"]))),W=y.ZP.div.attrs((function(t){return{color:t.color||"black"}}))(i||(i=(0,h.Z)(["\n  min-width: 12px;\n  height: 12px;\n  background: ",";\n  margin-right: 20px;\n"])),(function(t){return t.color})),Y=y.ZP.span(s||(s=(0,h.Z)(["\n  font-size: 15px;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n"]))),M=y.ZP.span(l||(l=(0,h.Z)(["\n  font-size: 15px;\n  margin-left: auto;\n  margin-right: 0;\n  padding-right: 10px;\n"]))),R=function(t){var e=t.data,n=t.selected,a=t.height,r=t.onToggle,o=t.chartName;return v().createElement(z,{height:a},e.map((function(t,e){var a=t.name,i=t.value,s=t.id,l=t.count;return v().createElement(S,{key:e},v().createElement(N,null,v().createElement(W,{color:i}),v().createElement(Y,null,a)),l&&v().createElement(M,null,l),n&&v().createElement(C.Switch,{isChecked:n.some((function(t){return t===s})),onChange:function(){return r(s)},"aria-label":"".concat(o,"-").concat(a),value:s,key:e}))})))};R.propTypes={data:b().array.isRequired,selected:b().array.isRequired,onToggle:b().func.isRequired,height:b().string.isRequired,chartName:b().string.isRequired};const F=R;var q,D=["onClick","TooltipClass","legend"],L=y.ZP.div(q||(q=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n"]))),A=function(t){var e=t.split("-");return"".concat(e[1],"/").concat(e[2])},H=function(t){var e=t.onClick,n=void 0===e?null:e,a=t.TooltipClass,r=t.legend,o=(0,d.Z)(t,D),i=r.map((function(t){var e=t.id;return{name:t.name,value:o.colorFunc(e),id:e}})),s=(0,m.useState)(r.map((function(t){return t.id})).slice(0,8)),l=(0,u.Z)(s,2),c=l[0],p=l[1],h=null,g=function(){O.td_("#"+o.id+" > *").remove();var t=o.data.reduce((function(t,e){var n=e.date,a=e.items.filter((function(t){var e=t.id;return c.includes(e)}));return t.concat({date:n,selectedOrgs:a})}),[]),e=o.getWidth(),r=o.getHeight(),i=O.tiA().range([0,e]).padding(.35),s=O.tiA(),l=O.BYU().range([r,0]),u=Math.round(t.length/(t.length/2)),d=Math.round(t.length/(t.length/4)),p=t.map((function(t){return t.date}));t.length>14&&(p=t.map((function(e,n){return n%(t.length>31?d:u)==0?e.date:void 0})).filter((function(t){return t})));var h=O.LLu(i).tickValues(p).tickFormat(A),g=O.y4O(l).ticks(8).tickSize(-e,0,0),f=O.Ys("#"+o.id).append("svg").attr("width",e+o.margin.left+o.margin.right).attr("height",r+o.margin.bottom+o.margin.top).append("g").attr("transform","translate("+o.margin.left+","+o.margin.top+")"),m=t.map((function(t){return t.date})),v=new a({svg:"#"+o.id});i.domain(m),s.domain(c).range([0,i.bandwidth()]),l.domain([0,O.Fp7(t,(function(t){return O.Fp7(t.selectedOrgs,(function(t){return 1.15*t.value}))}))||8]),f.append("g").attr("class","y axis").call(g).selectAll("line").attr("stroke","#d7d7d7").append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").style("font-weight","bold").text("Value"),f.append("text").attr("transform","rotate(-90)").attr("y",0-o.margin.left).attr("x",0-r/2).attr("dy","1em").style("text-anchor","middle").text(o.yLabel),f.append("g").attr("class","x axis").attr("transform","translate(0,"+r+")").call(h).selectAll("line").attr("stroke","#d7d7d7"),f.append("text").attr("transform","translate("+e/2+" ,"+(r+o.margin.top+25)+")").style("text-anchor","middle").text("Date");var x=f.selectAll(".slice").data(t);x.exit().remove();var b=x.enter().append("g").attr("class","g foo").attr("transform",(function(t){return"translate("+i(t.date)+",0)"})),y=(x=x.merge(b)).selectAll("rect").data((function(t){return t.selectedOrgs}));y.exit().remove();var w=o.colorFunc,T=y.enter().append("rect").attr("width",s.bandwidth()).attr("x",(function(t){return s(t.id)})).style("fill",(function(t){return w(t.id)})).attr("y",(function(t){return l(t.value)})).attr("height",(function(t){return r-l(t.value)})).on("mouseover",(function(t){t.moreDetail=!t.name.endsWith("Others"),O.Ys(this).style("cursor",n&&t.moreDetail?"pointer":"default"),O.Ys(this).style("fill",O.B8C(w(t.id)).darker(1)),v.handleMouseOver(t)})).on("mousemove",v.handleMouseOver).on("mouseout",(function(t){O.Ys(this).style("fill",w(t.id)),v.handleMouseOut()})).on("click",n);y=y.merge(T)},f=function(){clearTimeout(h),h=setTimeout((function(){g()}),500)};return(0,m.useEffect)((function(){return g(),window.addEventListener("resize",f),function(){clearTimeout(h),window.removeEventListener("resize",f)}}),[]),(0,m.useEffect)((function(){g()}),[o.data,c]),v().createElement(L,null,v().createElement("div",{id:o.id}),i.length>0&&v().createElement(F,{id:"".concat(o.id,"-legend"),data:i,selected:c,onToggle:function(t){c.includes(t)?p(c.filter((function(e){return e!==t}))):p([].concat((0,j.Z)(c),[t]))},height:"350px",chartName:"".concat(o.id,"-legend")}))};H.propTypes={id:b().string,data:b().array,legend:b().array,margin:b().object,getHeight:b().func,getWidth:b().func,colorFunc:b().func,yLabel:b().string,onClick:b().func,TooltipClass:b().any.isRequired},H.defaultProps={legend:[]};const I=(0,P.Z)(H);var J,G=n(6610),K=n(5991),U=function(t){var e=t.split("-");return"".concat(e[1],"/").concat(e[2])},X=function(){function t(e){var n=this;(0,G.Z)(this,t),(0,p.Z)(this,"handleMouseOver",(function(t){var e,a,r,o=O.Ba6.pageX-O.Ys(n.svg).node().getBoundingClientRect().x+10,i=O.Ba6.pageY-O.Ys(n.svg).node().getBoundingClientRect().y-10;if(t){e=t.date,a=t.name,r=t.value,t.name.length>16&&(a=t.name.slice(0,16).concat("...")),t.moreDetail?(n.boundingBox.attr("height",68),n.boundingBox.attr("y",-23),n.date.attr("y",14),n.jobs.attr("y",14),n.orgName.attr("y",-1),n.clickMore.text("Click for details")):(n.boundingBox.attr("height",50),n.boundingBox.attr("y",-12),n.date.attr("y",25),n.jobs.attr("y",25),n.orgName.attr("y",10),n.clickMore.text(""));var s=U,l=n.toolTipBase.node().getBoundingClientRect().width,c=O.Ys(n.svg+"> svg").node().getBoundingClientRect().width,u=100-l/c*100<o/c*100;n.date.text(""+s(e)),n.orgName.text(""+a),n.jobs.text(r+" Jobs"),n.jobsWidth=n.jobs.node().getComputedTextLength();var d,p=n.jobsWidth/n.boxWidth*100,h=p/45;d=p>45?n.boxWidth*h:n.boxWidth,n.boundingBox.attr("width",d),n.toolTipBase.attr("transform","translate("+o+","+i+")"),u?(n.toolTipPoint.attr("transform","translate(-20, 0) rotate(45)"),n.boundingBox.attr("x",-d-20),n.jobs.attr("x",-n.jobsWidth-20-7),n.orgName.attr("x",-d-7),n.date.attr("x",-d-7),n.clickMore.attr("x",-d-7)):(n.toolTipPoint.attr("transform","translate(10, 0) rotate(45)"),n.boundingBox.attr("x",10),n.orgName.attr("x",20),n.jobs.attr("x",d/2),n.date.attr("x",20),n.clickMore.attr("x",20)),n.toolTipBase.style("opacity",1),n.toolTipBase.interrupt()}})),(0,p.Z)(this,"handleMouseOut",(function(){n.toolTipBase.transition().delay(15).style("opacity",0).style("pointer-events","none")})),this.svg=e.svg,this.draw()}return(0,K.Z)(t,[{key:"draw",value:function(){this.width=125,this.toolTipBase=O.Ys(this.svg+"> svg").append("g"),this.toolTipBase.attr("id","svg-chart-Tooltip.base-"+this.svg.slice(1)),this.toolTipBase.attr("overflow","visible"),this.toolTipBase.style("opacity",0),this.toolTipBase.style("pointer-events","none"),this.toolTipBase.attr("transform","translate(100, 100)"),this.boxWidth=125,this.textWidthThreshold=20,this.toolTipPoint=this.toolTipBase.append("rect").attr("transform","translate(10, -10) rotate(45)").attr("x",0).attr("y",0).attr("height",20).attr("width",20).attr("fill","#393f44"),this.boundingBox=this.toolTipBase.append("rect").attr("x",10).attr("y",-12).attr("rx",2).attr("height",50).attr("width",this.boxWidth).attr("fill","#393f44"),this.date=this.toolTipBase.append("text").attr("x",20).attr("y",25).attr("font-size",12).attr("fill","white").text("Date"),this.jobs=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("x",72).attr("y",25).text("0 Jobs"),this.orgName=this.toolTipBase.append("text").attr("fill","white").attr("font-weight",800).attr("x",20).attr("y",10).attr("font-size",12).text("Org"),this.clickMore=this.toolTipBase.append("text").attr("fill","white").attr("x",20).attr("y",30).attr("font-size",12).text("")}}]),t}(),V=function(t){var e=t.split("-");return"".concat(e[1],"/").concat(e[2])},Q=function(){function t(e){var n=this;(0,G.Z)(this,t),(0,p.Z)(this,"handleMouseOver",(function(t){var e,a,r,o=O.Ba6.pageX-O.Ys(n.svg).node().getBoundingClientRect().x+10,i=O.Ba6.pageY-O.Ys(n.svg).node().getBoundingClientRect().y-10;if(t){e=t.date,a=t.name,r=t.value,t.name.length>16&&(a=t.name.slice(0,16).concat("..."));var s=V,l=n.toolTipBase.node().getBoundingClientRect().width,c=O.Ys(n.svg+"> svg").node().getBoundingClientRect().width,u=100-l/c*100<o/c*100;n.date.text(""+s(e)),n.orgName.text(""+a),n.jobs.text(r+" Hosts"),n.jobsWidth=n.jobs.node().getComputedTextLength();var d,p=n.jobsWidth/n.boxWidth*100,h=p/45;d=p>45?n.boxWidth*h:n.boxWidth,n.boundingBox.attr("width",d),n.toolTipBase.attr("transform","translate("+o+","+i+")"),u?(n.toolTipPoint.attr("transform","translate(-20, 0) rotate(45)"),n.boundingBox.attr("x",-d-20),n.jobs.attr("x",-n.jobsWidth-20-7),n.orgName.attr("x",-d-7),n.date.attr("x",-d-7)):(n.toolTipPoint.attr("transform","translate(10, 0) rotate(45)"),n.boundingBox.attr("x",10),n.orgName.attr("x",20),n.jobs.attr("x",d/2),n.date.attr("x",20)),n.toolTipBase.style("opacity",1),n.toolTipBase.interrupt()}})),(0,p.Z)(this,"handleMouseOut",(function(){n.toolTipBase.transition().delay(15).style("opacity",0).style("pointer-events","none")})),this.svg=e.svg,this.draw()}return(0,K.Z)(t,[{key:"draw",value:function(){this.width=125,this.toolTipBase=O.Ys(this.svg+"> svg").append("g"),this.toolTipBase.attr("id","svg-chart-Tooltip.base-"+this.svg.slice(1)),this.toolTipBase.attr("overflow","visible"),this.toolTipBase.style("opacity",0),this.toolTipBase.style("pointer-events","none"),this.toolTipBase.attr("transform","translate(100, 100)"),this.boxWidth=125,this.textWidthThreshold=20,this.toolTipPoint=this.toolTipBase.append("rect").attr("transform","translate(10, -10) rotate(45)").attr("x",0).attr("y",0).attr("height",20).attr("width",20).attr("fill","#393f44"),this.boundingBox=this.toolTipBase.append("rect").attr("x",10).attr("y",-12).attr("rx",2).attr("height",50).attr("width",this.boxWidth).attr("fill","#393f44"),this.date=this.toolTipBase.append("text").attr("x",20).attr("y",25).attr("font-size",12).attr("fill","white").text("Date"),this.jobs=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("x",72).attr("y",25).text("0 Jobs"),this.orgName=this.toolTipBase.append("text").attr("fill","white").attr("font-weight",800).attr("x",20).attr("y",10).attr("font-size",12).text("Org")}}]),t}(),$=y.ZP.div(J||(J=(0,h.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  flex-shrink: 0;\n"]))),tt=function(){function t(e){var n=this;(0,G.Z)(this,t),(0,p.Z)(this,"handleMouseOver",(function(t){var e,a,r;!0!==n.drawn&&(n.draw(t),n.drawn=!0);var o=O.Ba6.pageX-O.Ys(n.svg).node().getBoundingClientRect().x+10,i=O.Ba6.pageY-O.Ys(n.svg).node().getBoundingClientRect().y-10;if(t){t&&t.data&&(e=t.data.percent,a=t.data.success_rate,r=t.data.name,t.data.name.length>16&&(r=t.data.name.slice(0,13).concat("...")));var s=n.toolTipBase.node().getBoundingClientRect().width,l=O.Ys(n.svg+"> svg").node().getBoundingClientRect().width,c=100-s/l*100<o/l*100;n.percentageTotal.text(e+"%"),a&&n.percentageSuccess&&n.percentageSuccess.text("("+a+"% successful)"),n.orgName.text(" "+r),n.toolTipBase.attr("transform","translate("+o+","+i+")"),c?(n.toolTipPoint.attr("transform","translate(-20, -10) rotate(45)"),n.boundingBOx.attr("x",-125),n.orgName.attr("x",-112),n.percentageTotal.attr("x",-112),n.showSuccess&&n.percentageSuccess.attr("x",-112)):(n.toolTipPoint.attr("transform","translate(10, -10) rotate(45)"),n.boundingBOx.attr("x",10),n.orgName.attr("x",20),n.percentageTotal.attr("x",20),n.showSuccess&&n.percentageSuccess.attr("x",20)),n.toolTipBase.style("opacity",1),n.toolTipBase.interrupt()}})),(0,p.Z)(this,"handleMouseOut",(function(){n.toolTipBase.transition().delay(15).style("opacity",0).style("pointer-events","none")})),this.svg=e.svg,this.drawn=!1,this.showSuccess=!1}return(0,K.Z)(t,[{key:"draw",value:function(t){this.showSuccess=!!(t&&t.data&&"success_rate"in t.data);var e=this.showSuccess?70:52,n=this.showSuccess?120:108;this.toolTipBase=O.Ys(this.svg+"> svg").append("g"),this.toolTipBase.attr("id","svg-chart-Tooltip.base-"+this.svg.slice(1)),this.toolTipBase.attr("overflow","visible"),this.toolTipBase.style("opacity",0),this.toolTipBase.style("pointer-events","none"),this.toolTipBase.attr("transform","translate(100, 100)"),this.toolTipPoint=this.toolTipBase.append("rect").attr("transform","translate(10, -10) rotate(45)").attr("x",0).attr("y",0).attr("height",20).attr("width",20).attr("fill","#393f44"),this.boundingBOx=this.toolTipBase.append("rect").attr("x",10).attr("y",-23).attr("rx",2).attr("height",e).attr("width",n).attr("fill","#393f44"),this.orgName=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("font-weight",800).attr("x",20).attr("y",0).text("Organization"),this.percentageTotal=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("font-weight",800).attr("x",20).attr("y",16).text("0"),this.percentageSuccess=null,this.showSuccess&&(this.percentageSuccess=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("font-weight",800).attr("x",20).attr("y",30).text(""))}}]),t}(),et=function(t){var e=t.data,n=t.id,a=t.colorFunc,r=t.margin,o=t.getWidth,i=t.getHeight,s=e.map((function(t){var e=t.id,n=t.name,r=t.count;return{id:e,name:n,value:a(e),count:Math.round(r)}})).sort((function(t,e){return t.count>e.count?1:e.count>t.count?-1:0})),l=(0,m.useState)(e.map((function(t){return t.id})).slice(0,8)),c=(0,u.Z)(l,2),d=c[0],p=c[1],h=null,g=function(){O.td_("#"+n+" > *").remove();var t=o(),s=i(),l=O.Ys("#"+n).append("svg").attr("width",t+r.left+r.right).attr("height",s+r.bottom).append("g");l.append("g").attr("class","slices"),l.append("g").attr("class","labels"),l.append("g").attr("class","lines");var c=Math.min(t,s)/2,u=e.filter((function(t){var e=t.id;return d.includes(e)})),p=(0,B.NU)(u);u.forEach((function(t){t.count=+t.count,t.percent=+Math.round(t.count/p*100)}));var h=new tt({svg:"#"+n}),g=O.ve8().sort(null).value((function(t){return t.count})),f=O.Nb1().outerRadius(c-10).innerRadius(0);l.attr("transform","translate("+(t+r.left+r.right)/2+","+(s+r.top+r.bottom)/2+")"),l.selectAll("path").data(g(u)).enter().append("path").attr("d",f).attr("fill",(function(t){return a(t.data.id)})),l.selectAll("path").on("mouseover",(function(t){O.Ys(this).style("fill",O.B8C(a(t.data.id)).darker(1)),h.handleMouseOver(t)})).on("mouseout",(function(t){O.Ys(this).style("fill",a(t.data.id)),h.handleMouseOut()})).on("mousemove",h.handleMouseOver),l.append("g").classed("labels",!0),l.append("g").classed("lines",!0)},f=function(){clearTimeout(h),h=setTimeout((function(){g()}),500)};return(0,m.useEffect)((function(){return g(),window.addEventListener("resize",f),function(){clearTimeout(h),window.removeEventListener("resize",f)}}),[]),(0,m.useEffect)((function(){g()}),[e,d]),v().createElement($,null,v().createElement("div",{id:n}),s.length>0&&v().createElement(F,{id:"".concat(n,"-legend"),data:s,selected:d,onToggle:function(t){d.includes(t)?p(d.filter((function(e){return e!==t}))):p([].concat((0,j.Z)(d),[t]))},height:"300px",chartName:"".concat(n,"-legend")}))};et.propTypes={id:b().string,data:b().array,margin:b().object,getHeight:b().func,getWidth:b().func,colorFunc:b().func};const nt=(0,P.Z)(et);var at,rt=n(83474),ot=n(13784),it=n(77388),st=n(21048),lt=n(9771),ct=n(48236),ut=n(83061),dt=["sort_options","sort_order"];function pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function ht(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pt(Object(n),!0).forEach((function(e){(0,p.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var gt=(0,y.ZP)("hr")(at||(at=(0,h.Z)(["\n  border: 1px solid #ebebeb;\n"]))),ft=(0,O.PKp)(["#06C","#4CB140","#009596","#5752D1","#F4C145","#EC7A08","#8BC1F7","#23511E","#A2D9D9","#2A265F","#F9E0A2","#8F4700","#002F5D"]),mt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,a=t.map((function(t){var e=t.date,a=t.items;return{date:e,items:a.map((function(t){var a=t.id,r=t[n],o=t.name;return{id:a,date:e,value:r,name:o||"No organization"}}))}}));return e.legend.map((function(t){return ht(ht({},t),{},{name:t.name||"No organization"})})),a},vt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=t.map((function(t){return{id:t.id,count:t[e],name:t.name||"No organization"}}));return n},xt=[{api:E.Ij,attr:"total_count",label:"Jobs across organizations",onClick:function(t,e){return function(n){var a=n.date,r=n.id;if(-1!==r){e.sort_options,e.sort_order;var o=(0,d.Z)(e,dt),i=(0,B.p6)(a),s=ht(ht({},o),{},{"job-explorer.quick_date_range":"custom","job-explorer.start_date":i,"job-explorer.end_date":i,"job-explorer.status":["successful","failed","new","pending","waiting","error","canceled","running"],"job-explorer.org_id":[r]});t(s)}}},tooltip:X},{api:E.og,attr:"total_unique_host_count",label:"Hosts across organizations",onClick:function(){return null},tooltip:Q}],bt=(0,st.Hm)("organization-statistics",ht({},ot.wC.defaultParams),["limit","offset"]),yt=function(t){var e,n,a,r,o,i,s=t.history,l=(0,T.Z)(s,"jobExplorer"),d=(0,m.useState)(0),p=(0,u.Z)(d,2),h=p[0],g=p[1],x=(0,w.K)(bt),b=x.queryParams,y=x.setFromToolbar,B=(0,it.ZP)((0,m.useCallback)((0,c.Z)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,E.Ij)(V));case 1:case"end":return t.stop()}}),t)}))),[V]),[]),j=B.result,O=B.error,P=B.isLoading,z=B.isSuccess,S=B.request,N=(0,it.ZP)((0,m.useCallback)((0,c.Z)(f().mark((function t(){var e,n=arguments;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(n.length>0&&void 0!==n[0]?n[0]:0)){t.next=7;break}return t.next=4,(0,E.Ij)(Q);case 4:e=t.sent,t.next=10;break;case 7:return t.next=9,(0,E.og)($);case 9:e=t.sent;case 10:return t.abrupt("return",e);case 11:case"end":return t.stop()}}),t)}))),[$,Q]),[]),W=N.result,Y=N.error,M=N.isLoading,R=N.isSuccess,F=N.request,q=(0,it.ZP)((0,m.useCallback)((function(){return(0,E.wp)(b)}),[b]),{}),D=q.result,L=q.request,A=(0,it.ZP)((0,m.useCallback)((0,c.Z)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,E.Ij)(X));case 1:case"end":return t.stop()}}),t)}))),[X]),[]),H=A.result,J=A.error,G=A.isLoading,K=A.isSuccess,U=A.request,X=ht(ht({},b),{},{attributes:["host_task_count"],group_by:"org",include_others:!0,sort_options:"host_task_count",sort_order:"desc"}),V=ht(ht({},b),{},{attributes:["total_count"],group_by:"org",include_others:!0,sort_options:"total_count",sort_order:"desc"}),Q=ht(ht({},b),{},{attributes:["total_count"],group_by:"org",group_by_time:!0,sort_options:"total_count",sort_order:"desc"}),$=ht(ht({},b),{},{attributes:["total_unique_host_count"],group_by:"org",group_by_time:!0,sort_options:"host_task_count",sort_order:"desc"});return(0,m.useEffect)((function(){F(h)}),[h]),(0,m.useEffect)((function(){F(),U(),L(),S()}),[b]),v().createElement(v().Fragment,null,v().createElement(k.Z,null,v().createElement(_.Z,{title:"Organization Statistics"}),v().createElement(rt.Z,{categories:D,filters:b,setFilters:y,qsConfig:bt})),v().createElement(Z.Z,null,v().createElement(C.Grid,{hasGutter:!0},v().createElement(C.GridItem,{span:12},v().createElement(C.Card,null,v().createElement(C.Tabs,{activeKey:h,onSelect:function(t,e){g(e)}},v().createElement(C.Tab,{eventKey:0,title:"Jobs"}),v().createElement(C.Tab,{eventKey:1,title:"Hosts"})),v().createElement(C.CardBody,null,M&&v().createElement(ct.Z,null),Y&&v().createElement(lt.Z,{message:Y.error}),R&&(null===(e=W.dates)||void 0===e?void 0:e.length)<=0&&v().createElement(ut.Z,null),R&&(null===(n=W.dates)||void 0===n?void 0:n.length)>0&&v().createElement(I,{margin:{top:20,right:20,bottom:50,left:50},id:"d3-grouped-bar-chart-root",data:mt(W.dates,W.meta,xt[h].attr),legend:W.meta.legend,history:s,colorFunc:ft,yLabel:xt[h].label,onClick:xt[h].onClick(l,b),TooltipClass:xt[h].tooltip})))),v().createElement(C.GridItem,{span:6},v().createElement(C.Card,null,v().createElement(C.CardTitle,null,v().createElement("h2",null,"Job Runs by Organization")),v().createElement(gt,null),v().createElement(C.CardBody,null,P&&v().createElement(ct.Z,null),O&&v().createElement(lt.Z,{message:O.error}),z&&(null===(a=j.items)||void 0===a?void 0:a.length)<=0&&v().createElement(ut.Z,null),z&&(null===(r=j.items)||void 0===r?void 0:r.length)>0&&v().createElement(nt,{margin:{top:20,right:20,bottom:0,left:20},id:"d3-donut-1-chart-root",data:vt(j.items,"total_count"),colorFunc:ft})))),v().createElement(C.GridItem,{span:6},v().createElement(C.Card,null,v().createElement(C.CardTitle,null,v().createElement("h2",null,"Usage by Organization (Tasks)")),v().createElement(gt,null),v().createElement(C.CardBody,null,G&&v().createElement(ct.Z,null),J&&v().createElement(lt.Z,{message:J.error}),K&&(null===(o=H.items)||void 0===o?void 0:o.length)<=0&&v().createElement(ut.Z,null),K&&(null===(i=H.items)||void 0===i?void 0:i.length)>0&&v().createElement(nt,{margin:{top:20,right:20,bottom:0,left:20},id:"d3-donut-2-chart-root",data:vt(H.items,"host_task_count"),colorFunc:ft})))))))};yt.propTypes={history:b().object};const wt=yt}}]);
//# sourceMappingURL=../sourcemaps/691.035fd5f0bf8ff2166576.js.map