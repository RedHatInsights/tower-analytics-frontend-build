"use strict";(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[3398],{87986:(t,e,a)=>{a.d(e,{Z:()=>d});var r=a(87462),n=a(92950),i=a.n(n),l=a(45697),o=a.n(l),s=a(73612),c=a(62012),u=function(t){var e=function(e){var a=e.id,n=e.margin,l=(0,c.useNavigate)();return i().createElement(t,(0,r.Z)({},e,{getWidth:function(){return parseInt(s.Ys("#"+a).style("width"))-n.left-n.right||700},getHeight:function(){return parseInt(s.Ys("#"+a).style("height"))-n.top-n.bottom||450},navigate:l}))};return e.propTypes={id:o().string,margin:o().object},e};u.propTypes={Chart:o().element};const d=u},94592:(t,e,a)=>{a.d(e,{Z:()=>x});var r,n,i,l,o,s=a(30168),c=a(92950),u=a.n(c),d=a(29163),p=a(45697),m=a.n(p),f=d.default.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n  max-width: 100%;\n  height: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"]))),h=d.default.div(n||(n=(0,s.Z)(["\n  height: 100%;\n"]))),g=d.default.div(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n"]))),y=d.default.div(l||(l=(0,s.Z)(["\n  padding-left: 2rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n"]))),b=d.default.div(o||(o=(0,s.Z)(["\n  width: 0.75rem;\n  height: 0.75rem;\n  margin-right: 0.5rem;\n"])));function v(t){return t[0].toUpperCase()+t.slice(1).toLowerCase()}var _=function(t){var e=t.categoryCount,a=t.categoryColor,r=t.showPercent,n=void 0!==r&&r,i=Object.values(e).reduce((function(t,e){return t+e})),l=Object.keys(e).filter((function(t){return e[t]>0})).sort((function(t,a){return e[t]<e[a]?1:e[t]>e[a]?-1:0})).map((function(t){return{name:t,barSpacing:e[t]/i,color:a[t]}})),o=1-.15*(l.length-1)/100;return u().createElement(u().Fragment,null,u().createElement(f,null,l.map((function(t,e){var a=t.barSpacing,r=t.color;return e<l.length-1?u().createElement(u().Fragment,{key:e},u().createElement(h,{style:{backgroundColor:r,width:"".concat(100*a*o,"%")}}),u().createElement(h,{style:{backgroundColor:"transparent",width:"".concat(.15,"%")}})):u().createElement(u().Fragment,{key:e},u().createElement(h,{style:{backgroundColor:r,width:"".concat(100*a*o,"%")}}))}))),u().createElement(g,null,l.map((function(t){var e=t.name,a=t.barSpacing,r=t.color;return u().createElement(y,{key:"label-".concat(e)},u().createElement(b,{style:{backgroundColor:r}}),n?u().createElement("p",null,v(e)," ",Math.round(100*a),"%"):u().createElement("p",null,v(e)))}))))};_.propTypes={categoryColor:m().object.isRequired,categoryCount:m().object.isRequired,showPercent:m().bool};const x=_},69837:(t,e,a)=>{a.r(e),a.d(e,{default:()=>kt});var r=a(4942),n=a(92950),i=a.n(n),l=a(48236),o=a(49148),s=a(35993),c=a(59698),u=a(1085),d=a(15671),p=a(43144),m=a(97326),f=a(79340),h=a(82963),g=a(61120),y=a(87986),b=a(73612),v=a(45697),_=a.n(v);const x=function(){function t(e){var a=this;(0,d.Z)(this,t),(0,r.Z)(this,"handleMouseOver",(function(t){var e=0,r=0,n=0,i=b.Ba6.pageX-b.Ys(a.svg).node().getBoundingClientRect().x+10,l=b.Ba6.pageY-b.Ys(a.svg).node().getBoundingClientRect().y-10,o=b.i$Z("%m/%d");if(t){var s=a.toolTipBase.node().getBoundingClientRect().width,c=b.Ys(a.svg+"> svg").node().getBoundingClientRect().width,u=100-s/c*100<i/c*100;t&&(e=t.RAN||0,r=t.FAIL||0,n=t.TOTAL||0,a.date.text(o(t.DATE||null))),t&&t.data&&(e=t.data.RAN||0,r=t.data.FAIL||0,n=t.data.TOTAL||0,a.date.text(o(t.data.DATE||null))),a.jobs.text(n+" jobs"),a.jobsWidth=a.jobs.node().getComputedTextLength(),a.failed.text(""+r),a.successful.text(""+e),a.successTextWidth=a.successful.node().getComputedTextLength(),a.failTextWidth=a.failed.node().getComputedTextLength();var d,p=a.jobsWidth/a.boxWidth*100,m=p/40;d=p>40?a.boxWidth*m:a.boxWidth,a.boundingBox.attr("width",d),a.toolTipBase.attr("transform","translate("+i+","+l+")"),u?(a.toolTipPoint.attr("transform","translate(-20, 0) rotate(45)"),a.boundingBox.attr("x",-d-20),a.circleSuccess.attr("cx",-d),a.circleFail.attr("cx",-d),a.failedIcon.attr("x",-d-7),a.successIcon.attr("x",-d-7),a.successText.attr("x",17-d),a.failText.attr("x",17-d),a.successful.attr("x",-a.successTextWidth-20-12),a.failed.attr("x",-a.failTextWidth-20-12),a.date.attr("x",-d-5),a.jobs.attr("x",-a.jobsWidth/2-7),a.clickMore.attr("x",-d)):(a.toolTipPoint.attr("transform","translate(10, 0) rotate(45)"),a.boundingBox.attr("x",10),a.circleSuccess.attr("cx",26),a.circleFail.attr("cx",26),a.failedIcon.attr("x",19),a.successIcon.attr("x",19),a.successText.attr("x",43),a.failText.attr("x",43),a.successful.attr("x",d-a.successTextWidth),a.failed.attr("x",d-a.failTextWidth),a.date.attr("x",20),a.jobs.attr("x",d),a.clickMore.attr("x",20)),a.toolTipBase.style("opacity",1),a.toolTipBase.interrupt()}})),(0,r.Z)(this,"handleMouseOut",(function(){a.toolTipBase.transition().delay(15).style("opacity",0).style("pointer-events","none")})),this.svg=e.svg,this.colors=e.colors,this.draw()}return(0,p.Z)(t,[{key:"draw",value:function(){this.toolTipBase=b.Ys(this.svg+"> svg").append("g"),this.toolTipBase.attr("id","svg-chart-Tooltip.base-"+this.svg.slice(1)),this.toolTipBase.attr("overflow","visible"),this.toolTipBase.style("opacity",0),this.toolTipBase.style("pointer-events","none"),this.toolTipBase.attr("transform","translate(100, 100)"),this.boxWidth=145,this.textWidthThreshold=20,this.toolTipPoint=this.toolTipBase.append("rect").attr("transform","translate(10, -10) rotate(45)").attr("x",0).attr("y",0).attr("height",20).attr("width",20).attr("fill","#393f44"),this.boundingBox=this.toolTipBase.append("rect").attr("x",10).attr("y",-41).attr("rx",2).attr("height",110).attr("width",this.boxWidth).attr("fill","#393f44"),this.circleSuccess=this.toolTipBase.append("circle").attr("cx",26).attr("cy",0).attr("r",8).attr("stroke","white").attr("fill","white"),this.circleFail=this.toolTipBase.append("circle").attr("cx",26).attr("cy",26).attr("r",8).attr("stroke","white").attr("fill","white"),this.successText=this.toolTipBase.append("text").attr("x",43).attr("y",4).attr("font-size",12).attr("fill","white").text("Successful"),this.failText=this.toolTipBase.append("text").attr("x",43).attr("y",28).attr("font-size",12).attr("fill","white").text("Failed"),this.successIcon=this.toolTipBase.append("text").attr("class","fas fa-sm").attr("fill",this.colors(1)).attr("x",19).attr("y",5).text(""),this.failedIcon=this.toolTipBase.append("text").attr("class","fas fa-sm").attr("fill",this.colors(0)).attr("x",20).attr("y",31).text(""),this.jobs=this.toolTipBase.append("text").attr("fill","white").attr("x",137).attr("y",-21).attr("font-size",12).attr("text-anchor","end").text("No jobs"),this.successful=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("x",122).attr("y",4).text("0"),this.failed=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("x",122).attr("y",28).text("0"),this.date=this.toolTipBase.append("text").attr("fill","white").attr("stroke","white").attr("x",20).attr("y",-21).attr("font-size",12).text("Never"),this.clickMore=this.toolTipBase.append("text").attr("fill","white").attr("x",20).attr("y",55).attr("font-size",12).text("Click for details")}}]),t}();var E=a(27443),T=a(53345),w=a(77685);function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(Object(a),!0).forEach((function(e){(0,r.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var O=function(t){(0,f.Z)(l,t);var e,a,n=(e=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,g.Z)(e);if(a){var n=(0,g.Z)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return(0,h.Z)(this,t)});function l(t){var e;return(0,d.Z)(this,l),(e=n.call(this,t)).draw=e.draw.bind((0,m.Z)(e)),e.init=e.init.bind((0,m.Z)(e)),e.resize=e.resize.bind((0,m.Z)(e)),e.navigateToJobExplorer=e.navigateToJobExplorer.bind((0,m.Z)(e)),e.state={formattedData:[],timeout:null},e}return(0,p.Z)(l,[{key:"navigateToJobExplorer",value:function(t){var e=t.data.DATE,a=(0,T.p6)(e),n=(0,r.Z)({},w.zG,j(j({},s.cY.defaultParams),{},{start_date:a,end_date:a,quick_date_range:"custom",status:["failed","successful"],template_id:this.props.queryParams.template_id,org_id:this.props.queryParams.org_id,job_type:this.props.queryParams.job_type}));this.props.navigate((0,w.uJ)(E.n.jobExplorer,!0,n))}},{key:"resize",value:function(){var t=this,e=this.state.timeout;clearTimeout(e),this.setState({timeout:setTimeout((function(){t.init()}),500)})}},{key:"init",value:function(){this.draw()}},{key:"draw",value:function(){b.td_("#"+this.props.id+" > *").remove();var t,e=b.Z1g("%Y-%m-%d"),a=this.props.data.reduce((function(t,a){var r=a.created_date,n=a.successful_count,i=a.failed_count,l=e(r)||new Date,o=+n||0,s=+i||0,c=+n+i||0;return t.concat({DATE:l,RAN:o,FAIL:s,TOTAL:c})}),[]),r=this.props.getWidth(),n=this.props.getHeight(),i=b.tiA().rangeRound([0,r]).padding(.35),l=b.BYU().range([n,0]),o=b.Ys("#"+this.props.id).append("svg").attr("width",r+this.props.margin.left+this.props.margin.right).attr("height",n+this.props.margin.top+this.props.margin.bottom).append("g").attr("transform","translate("+this.props.margin.left+","+this.props.margin.top+")"),s=b.PKp(["#6EC664","#A30000"]),c=new x({svg:"#"+this.props.id,colors:s}),u=b.knu().keys(["FAIL","RAN"]).order(b.Qxt).offset(b.HLf)(a);i.domain(u[0].map((function(t){return t.data.DATE}))),l.domain([0,b.Fp7(u[u.length-1],(function(t){return 1.15*t[1]}))||8]),o.append("g").attr("class","y-axis").call(b.y4O(l).tickSize(-r,0,0)).selectAll("line").attr("stroke","#d7d7d7"),o.selectAll(".y-axis .tick text").attr("x",-5),o.append("text").attr("transform","rotate(-90)").attr("y",0-this.props.margin.left).attr("x",0-n/2).attr("dy","1em").style("text-anchor","middle").text("Jobs across all clusters");var d=Math.round(a.length/(a.length/2));t=a.map((function(t){return t.DATE})),a.length>14&&(t=a.map((function(t,e){return e%d==0?t.DATE:void 0})).filter((function(t){return t}))),o.append("g").attr("class","x-axis").attr("transform","translate(0,"+n+")").call(b.LLu(i).tickValues(t).tickFormat(b.i$Z("%-m/%-d"))).selectAll("line").attr("stroke","#d7d7d7"),o.selectAll(".x-axis .tick text").attr("y",10),o.append("text").attr("transform","translate("+r/2+" ,"+(n+this.props.margin.top+20)+")").style("text-anchor","middle").text("Date");var p=o.selectAll("layer").data(u).enter().append("g").attr("class","layer").style("fill",(function(t,e){return s(e)}));p.selectAll("rect").data((function(t){return t})).enter().append("rect").attr("x",(function(t){return i(t.data.DATE)})).attr("y",(function(t){return l(t[0])})).attr("height",0).attr("width",i.bandwidth()-1).transition().duration(550).ease(b.LUP).attr("y",(function(t){return l(t[1])})).attr("height",(function(t){return l(t[0])-l(t[1])})),p.selectAll("rect").on("mouseover",c.handleMouseOver).on("mousemove",c.handleMouseOver).on("mouseout",c.handleMouseOut).on("click",this.navigateToJobExplorer)}},{key:"componentDidMount",value:function(){this.init(),window.addEventListener("resize",this.resize)}},{key:"componentDidUpdate",value:function(t){t.data!==this.props.data&&this.init()}},{key:"componentWillUnmount",value:function(){var t=this.state.timeout;clearTimeout(t),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){return i().createElement("div",{id:this.props.id,"data-cy":"barchart"})}}]),l}(n.Component);O.propTypes={id:_().string,queryParams:_().object,data:_().array,margin:_().object,getHeight:_().func,getWidth:_().func,navigate:_().func};const Z=(0,y.Z)(O);function P(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function L(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?P(Object(a),!0).forEach((function(e){(0,r.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var D=function(t){(0,f.Z)(l,t);var e,a,n=(e=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,g.Z)(e);if(a){var n=(0,g.Z)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return(0,h.Z)(this,t)});function l(t){var e;return(0,d.Z)(this,l),(e=n.call(this,t)).init=e.init.bind((0,m.Z)(e)),e.draw=e.draw.bind((0,m.Z)(e)),e.resize=e.resize.bind((0,m.Z)(e)),e.updateCluster=e.updateCluster.bind((0,m.Z)(e)),e.navigateToJobExplorer=e.navigateToJobExplorer.bind((0,m.Z)(e)),e.state={formattedData:[],timeout:null},e}return(0,p.Z)(l,[{key:"navigateToJobExplorer",value:function(t){var e=t.DATE,a=(0,T.p6)(e),n=(0,r.Z)({},w.zG,L(L({},s.cY.defaultParams),{},{start_date:a,end_date:a,quick_date_range:"custom",status:["failed","successful"],cluster_id:this.props.queryParams.cluster_id,org_id:this.props.queryParams.org_id,template_id:this.props.queryParams.template_id,job_type:this.props.queryParams.job_type}));this.props.navigate((0,w.uJ)(E.n.jobExplorer,!0,n))}},{key:"resize",value:function(){var t=this,e=this.state.timeout;clearTimeout(e),this.setState({timeout:setTimeout((function(){t.init()}),500)})}},{key:"updateCluster",value:function(){this.init()}},{key:"init",value:function(){this.draw()}},{key:"draw",value:function(){b.td_("#"+this.props.id+" > *").remove();var t=this.props.getWidth(),e=this.props.getHeight();function a(){var t=this.getTotalLength(),e=b.ITZ("0,"+t,t+","+t);return function(t){return e(t)}}function r(t){t.transition().duration(1e3).attrTween("stroke-dasharray",a)}var n=b.Xf().rangeRound([0,t]),i=b.BYU().range([e,0]),l=b.PKp(["#6EC664","#A30000","#06C"]),o=b.Ys("#"+this.props.id).append("svg").attr("width",t+this.props.margin.left+this.props.margin.right).attr("height",e+this.props.margin.top+this.props.margin.bottom).attr("z",100).append("g").attr("transform","translate("+this.props.margin.left+","+this.props.margin.top+")"),s=new x({svg:"#"+this.props.id,colors:l}),c=this.props.data,u=b.Z1g("%Y-%m-%d"),d=c.reduce((function(t,e){var a=e.created_date,r=e.successful_count,n=e.failed_count,i=u(a)||new Date,l=+r||0,o=+n||0,s=+r+n||0;return t.concat({DATE:i,RAN:l,FAIL:o,TOTAL:s})}),[]);n.domain(b.Wem(d,(function(t){return t.DATE}))),i.domain([0,b.Fp7(d,(function(t){return 1.15*t.TOTAL||8}))]);var p,m=b.jvg().curve(b.FdL).x((function(t){return n(t.DATE)})).y((function(t){return i(t.RAN)})),f=b.jvg().defined((function(t){return!isNaN(t.FAIL)})).curve(b.FdL).x((function(t){return n(t.DATE)})).y((function(t){return i(t.FAIL)}));o.append("g").attr("class","y-axis").call(b.y4O(i).ticks(10).tickSize(-t)).selectAll("line").attr("stroke","#d7d7d7"),o.selectAll(".y-axis .tick text").attr("x",-5),o.append("text").attr("transform","rotate(-90)").attr("y",0-this.props.margin.left).attr("x",0-e/2).attr("dy","1em").style("text-anchor","middle").text("Job runs");var h=Math.round(d.length/(d.length/2));p=d.map((function(t){return t.DATE})),d.length>14&&(p=d.map((function(t,e){return e%h==0?t.DATE:void 0})).filter((function(t){return t}))),o.append("g").attr("class","x-axis").attr("transform","translate(0,"+e+")").call(b.LLu(n).tickValues(p).tickSize(-e).tickFormat(b.i$Z("%-m/%-d"))).selectAll("line").attr("stroke","#d7d7d7"),o.selectAll(".x-axis .tick text").attr("y",10),o.append("text").attr("transform","translate("+t/2+" ,"+(e+this.props.margin.top+20)+")").style("text-anchor","middle").text("Date");var g=o.append("path").attr("class","mouse-line").style("stroke","black").style("stroke-width","3px").style("stroke-dasharray","3, 3").style("opacity","0"),y=function(t){s.handleMouseOver(t),g.transition().style("opacity","1")},v=function(){var t=this.cx.baseVal.value;g.attr("d",(function(){return"M"+t+","+e+" "+t+",0"}))},_=function(){s.handleMouseOut(),g.transition().style("opacity",0)};o.append("path").data([d]).attr("class","line").style("fill","none").style("stroke",(function(){return l(1)})).attr("stroke-width",2).attr("d",m).call(r),o.append("path").data([d]).attr("class","line").style("fill","none").style("stroke",(function(){return l(0)})).attr("stroke-width",2).attr("d",f).call(r),o.selectAll("dot").data(d).enter().append("circle").attr("r",3).style("stroke",(function(){return l(1)})).style("fill",(function(){return l(1)})).attr("cx",(function(t){return n(t.DATE)})).attr("cy",(function(t){return i(t.RAN)})).on("mouseover",y).on("mousemove",v).on("mouseout",_).on("click",this.navigateToJobExplorer),o.selectAll("dot").data(d).enter().append("circle").attr("r",3).style("stroke",(function(){return l(0)})).style("fill",(function(){return l(0)})).attr("cx",(function(t){return n(t.DATE)})).attr("cy",(function(t){return i(t.FAIL)})).on("mouseover",y).on("mousemove",v).on("mouseout",_).on("click",this.navigateToJobExplorer)}},{key:"componentDidMount",value:function(){this.updateCluster(),window.addEventListener("resize",this.resize)}},{key:"componentDidUpdate",value:function(t){t.data!==this.props.data&&this.updateCluster()}},{key:"componentWillUnmount",value:function(){var t=this.state.timeout;clearTimeout(t),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){return i().createElement("div",{id:this.props.id})}}]),l}(n.Component);D.propTypes={id:_().string,queryParams:_().object,data:_().array,margin:_().object,getHeight:_().func,getWidth:_().func,navigate:_().func};const A=(0,y.Z)(D);var C,q,B,S=a(30168),I=a(29163),R=a(83061),z=(0,I.default)(u.DataListCell)(C||(C=(0,S.Z)(["\n  --pf-c-data-list__cell-cell--MarginRight: 0;\n  --pf-c-data-list__cell--PaddingBottom: 10px;\n"]))),F=(0,I.default)(u.DataListItem)(q||(q=(0,S.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 0 15px 10px 15px;\n"]))),M=(0,I.default)(z)(B||(B=(0,S.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]))),W=function(t){var e=t.modules,a=t.isLoading;return i().createElement(u.DataList,{"aria-label":"Top Modules",style:{maxHeight:"400px",overflow:"auto",height:"400px",background:"white"}},i().createElement(F,{"aria-labelledby":"top-modules-header"},i().createElement(z,null,i().createElement("h3",null,"Top modules")),i().createElement(M,null,i().createElement("h3",null,"Usage"))),a&&i().createElement(u.DataListItem,{"aria-labelledby":"modules-loading",key:a,style:{border:"none"}},i().createElement(u.DataListCell,null,i().createElement(l.Z,null))),!a&&e.length<=0&&i().createElement(u.DataListItem,{"aria-labelledby":"modules-no-data",key:a,style:{border:"none"}},i().createElement(u.DataListCell,null,i().createElement(R.Z,null))),!a&&e.filter((function(t){return null!==t.name})).map((function(t,e){var a=t.name,r=t.host_task_count;return i().createElement(F,{"aria-labelledby":"top-modules-detail",key:e},i().createElement(z,null,i().createElement("span",null,(0,T.mN)(a))),i().createElement(M,null,r))})))};W.propTypes={modules:_().array,isLoading:_().bool};const N=W;var U,Y=a(70885),J=a(45987),H=a(9771),G=a(37384),V=a(94592),K=a(62455),$=a(91573),X=a(48607),Q=a(77388),tt=a(62012),et=["result","request"],at=["result","request"];function rt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function nt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(a),!0).forEach((function(e){(0,r.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):rt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var it=I.default.div(U||(U=(0,S.Z)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n"]))),lt=function(t){if(t){if(t&&t[0]){var e=Math.ceil(t[0].failed_count/t[0].total_failed_count*100);return"".concat(t[0].task_name," ").concat(e,"%")}return"Unavailable"}},ot=function(t,e){return Math.ceil(t/e*100)+"%"},st=function(t){var e,a,c,d,p,m,f,h=t.selectedId,g=t.isOpen,y=t.handleModal,b=t.qp,v=t.jobType,_=(0,tt.useNavigate)(),x=nt(nt({},b),{},{template_id:[h],attributes:["id","status","job_type","started","finished","elapsed","created","cluster_name","org_name"],group_by_time:!1,limit:5,sort_options:"created",sort_oder:"desc",quick_date_range:b.quick_date_range?b.quick_date_range:"last_30_days",job_type:[v]}),k={group_by:"template",template_id:[h],attributes:["elapsed","job_type","successful_count","failed_count","error_count","waiting_count","pending_count","canceled_count","new_count","running_count","total_count","job"===v?"most_failed_tasks":"most_failed_steps"],status:b.status,quick_date_range:b.quick_date_range?b.quick_date_range:"last_30_days",job_type:[v]},j=(0,Q.ZP)(o.Ij,{}),O=j.result,Z=j.request,P=(0,J.Z)(j,et),L=(0,Q.ZP)(o.Ij,{}),D=L.result,A=L.request,C=(0,J.Z)(L,at);(0,n.useEffect)((function(){Z(k),A(x)}),[h]);var q,B,S=null!==(e=P.isSuccess&&(null==O?void 0:O.items[0]))&&void 0!==e?e:null,I=S?{success:S.successful_count,cancelled:S.canceled_count,error:S.error_count,failed:S.failed_count,new:S.new_count,pending:S.pending_count,running:S.running_count,waiting:S.waiting_count}:null,R={success:$.global_palette_green_200.value,cancelled:$.global_palette_black_850.value,error:$.global_palette_orange_300.value,failed:$.global_palette_red_100.value,new:$.global_palette_cyan_200.value,pending:$.global_palette_purple_300.value,running:$.global_palette_blue_300.value,waiting:$.global_palette_light_green_200.value},z=S&&[{label:"Number of runs",id:"total-runs",value:null!==(a=S.total_count)&&void 0!==a?a:"Unavailable"},{label:"Total time",id:"total-time",value:S.elapsed?(0,T.yH)(S.elapsed):"Unavailable"},{label:"Average time",id:"avg-time",value:S.elapsed?(q=S.elapsed,B=S.total_count,new Date(1e3*Math.ceil(q/B)).toISOString().substr(11,8)):"Unavailable"},{label:"Type",id:"type",value:v?(0,T.GV)(v):"Unavailable"},{label:"Success rate",id:"success-rate",value:isNaN(S.successful_count)?"Unavailable":ot(S.successful_count,S.total_count)},{label:"Most failed task",id:"most-failed",value:S.most_failed_tasks?lt(S.most_failed_tasks):"Unavailable"}],F=function(){y(!1)};return i().createElement(u.Modal,{"aria-label":"modal",variant:u.ModalVariant.medium,title:C.isSuccess&&P.isSuccess&&(null==O||null===(c=O.items)||void 0===c?void 0:c.length)>0&&(null!==(d=null==O||null===(p=O.items[0])||void 0===p?void 0:p.name)&&void 0!==d?d:"No template name"),isOpen:g,onClose:F,"data-cy":"modal"},(P.isLoading||C.isLoading)&&i().createElement(l.Z,null),(P.error||C.error)&&i().createElement(H.Z,{message:C.error.error}),P.isSuccess&&C.isSuccess&&(null==D||null===(m=D.items)||void 0===m?void 0:m.length)<=0&&i().createElement(G.Z,null),P.isSuccess&&C.isSuccess&&(null==D||null===(f=D.items)||void 0===f?void 0:f.length)>0&&i().createElement(i().Fragment,null,I&&i().createElement(V.Z,{categoryCount:I,categoryColor:R}),i().createElement(u.DescriptionList,{isHorizontal:!0,columnModifier:{lg:"3Col"}},z.map((function(t){var e=t.label,a=t.id,r=t.value;return i().createElement(u.DescriptionListGroup,{className:a,key:e},i().createElement(u.DescriptionListTerm,null,e),i().createElement(u.DescriptionListDescription,null,r))}))),i().createElement(u.Divider,{component:"div",style:{marginTop:"2rem",marginBottom:"1.5rem"}}),i().createElement("p",null,i().createElement("strong",null,"Last 5 jobs")),i().createElement(X.TableComposable,{"aria-label":"Template information table",variant:"compact"},i().createElement(X.Thead,null,i().createElement(X.Tr,null,["Id/Name","Status","Cluster","Finished","Total time"].map((function(t,e){return i().createElement(X.Th,{key:e},t)})))),i().createElement(X.Tbody,null,D.items.map((function(t,e){return i().createElement(X.Tr,{key:"job-detail-".concat(e)},i().createElement(X.Td,null,"".concat(t.id.id," - ").concat(t.id.template_name)),i().createElement(X.Td,null,i().createElement(K.Z,{status:t.status})),i().createElement(X.Td,null,t.cluster_name),i().createElement(X.Td,null,(0,T.o0)(t.finished)),i().createElement(X.Td,null,(0,T.yH)(t.elapsed)))}))))),i().createElement(it,null,i().createElement(u.Button,{key:"cancel",variant:"secondary",onClick:function(){F()},"data-cy":"modal_cancel_button"},"Close"),i().createElement(u.Button,{component:"a",onClick:function(){var t=b.start_date,e=b.end_date,a=b.quick_date_range,n=(0,r.Z)({},w.zG,nt(nt({},s.cY.defaultParams),{},{template_id:[h],status:[],job_type:[v],quick_date_range:a,start_date:t,end_date:e}));_((0,w.uJ)(E.n.jobExplorer,!0,n))},variant:"link","data-cy":"modal_view_all_jobs_button"},"View all jobs")))};st.propTypes={selectedId:_().number.isRequired,qp:_().object.isRequired,jobType:_().string.isRequired,isOpen:_().bool.isRequired,handleModal:_().func.isRequired};const ct=st;var ut,dt,pt,mt=(0,I.default)(u.DataListCell)(ut||(ut=(0,S.Z)(["\n  --pf-c-data-list__cell-cell--MarginRight: 0;\n  --pf-c-data-list__cell--PaddingBottom: 10px;\n"]))),ft=(0,I.default)(u.DataListItem)(dt||(dt=(0,S.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 0 15px 10px 15px;\n  justify-content: center;\n  align-items: center;\n"]))),ht=(0,I.default)(mt)(pt||(pt=(0,S.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]))),gt=function(t){var e=t.templates,a=t.isLoading,r=t.qp,o=t.title,s=t.jobType,c=(0,n.useState)(null),d=(0,Y.Z)(c,2),p=d[0],m=d[1],f=(0,n.useState)(!1),h=(0,Y.Z)(f,2),g=h[0],y=h[1],b=function(t){return"job"===t?"templates":"workflows"};return i().createElement(i().Fragment,null,i().createElement(u.DataList,{"aria-label":"Top ".concat(b(s)),style:{maxHeight:"400px",overflow:"auto",height:"400px",background:"white"}},i().createElement(ft,{"aria-labelledby":"top-".concat(b(s),"-header")},i().createElement(mt,null,i().createElement("h3",null,o)),i().createElement(ht,null,i().createElement("h3",null,"Usage"))),a&&i().createElement(u.DataListItem,{"aria-labelledby":"".concat(b(s),"-loading"),key:a,style:{border:"none"}},i().createElement(u.DataListCell,null,i().createElement(l.Z,null))),!a&&e.length<=0&&i().createElement(u.DataListItem,{"aria-labelledby":"".concat(b(s),"-no-data"),key:a,style:{border:"none"}},i().createElement(u.DataListCell,null,i().createElement(R.Z,null))),!a&&e.map((function(t,e){var a=t.name,r=t.total_count,n=t.id;return i().createElement(ft,{"aria-labelledby":"top-".concat(b(s),"-detail"),key:e},i().createElement(mt,null,i().createElement("a",{onClick:function(){y(!0),m(n)}},a)),i().createElement(ht,null,r))}))),p&&i().createElement(ct,{isOpen:g,handleModal:y,selectedId:p,qp:r,jobType:s}))};gt.propTypes={templates:_().array,isLoading:_().bool,queryParams:_().object,title:_().string,qp:_().object,jobType:_().string};const yt=gt;var bt=a(83474);function vt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function _t(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(a),!0).forEach((function(e){(0,r.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):vt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var xt={group_by:"template",limit:10,job_type:["job"],group_by_time:!1,status:["successful","failed"]},Et={group_by:"template",limit:10,job_type:["workflowjob"],group_by_time:!1,status:["successful","failed"]},Tt={group_by:"module",sort_options:"host_task_count",sort_oder:"desc",limit:10},wt={attributes:s.cY.attributes};const kt=function(){var t,e,a=(0,w.Kx)(wt),r=(0,w.Kx)(s.kK.defaultParams),d=r.queryParams,p=r.setFromToolbar,m=(0,Q.ZP)(o.VU,{}),f=m.result,h=m.error,g=m.request,y=d.cluster_id,b=d.org_id,v=d.template_id,_=d.quick_date_range,x=d.start_date,E=d.end_date,T=_t({cluster_id:y,org_id:b,template_id:v,quick_date_range:_,start_date:x,end_date:E},xt),k=_t({cluster_id:y,org_id:b,template_id:v,quick_date_range:_,start_date:x,end_date:E},Et),j=_t({cluster_id:y,org_id:b,template_id:v,quick_date_range:_,start_date:x,end_date:E},Tt),O=(0,Q.ZP)(o.Ij,{items:[]}),P=O.result.items,L=O.isLoading,D=O.isSuccess,C=O.request,q=(0,Q.ZP)(o.wi,{items:[]}),B=q.result.items,S=q.isLoading,I=q.request,R=(0,Q.ZP)(o.Ij,{items:[]}),z=R.result.items,F=R.isLoading,M=R.request,W=(0,Q.ZP)(o.Ij,{items:[]}),U=W.result.items,Y=W.isLoading,J=W.request;return(0,n.useEffect)((function(){g(a),C(d),I(j),M(T),J(k)}),[d]),h?i().createElement(H.Z,{message:h.error.error}):i().createElement(i().Fragment,null,i().createElement(c.PageHeader,{"data-cy":"header-clusters",title:"Clusters"}),i().createElement(bt.Z,{categories:f,filters:d,setFilters:p}),i().createElement(u.PageSection,null,i().createElement(u.Grid,{hasGutter:!0},i().createElement(u.GridItem,{span:12},i().createElement(u.Card,null,i().createElement(u.CardTitle,{"data-cy":"card-title-job-status"},i().createElement("h2",null,"Job status")),i().createElement(u.CardBody,null,L&&i().createElement(l.Z,null),(!d.cluster_id||(null===(t=d.cluster_id)||void 0===t?void 0:t.length)<=0)&&D&&i().createElement(Z,{margin:{top:20,right:20,bottom:50,left:70},id:"d3-bar-chart-root",data:P,queryParams:d}),(null===(e=d.cluster_id)||void 0===e?void 0:e.length)>0&&D&&i().createElement(A,{margin:{top:20,right:20,bottom:50,left:70},id:"d3-line-chart-root",data:P,queryParams:d})))),i().createElement(u.GridItem,{span:4},i().createElement(yt,{qp:d,templates:U,isLoading:Y,title:"Top workflows",jobType:"workflowjob"})),i().createElement(u.GridItem,{span:4},i().createElement(yt,{qp:d,templates:z,isLoading:F,title:"Top templates",jobType:"job"})),i().createElement(u.GridItem,{span:4,"data-cy":"top-modules-header"},i().createElement(N,{modules:B,isLoading:S})))))}},48236:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(92950),n=a.n(r),i=a(1085),l=a(76473);const o=function(){return n().createElement(i.EmptyState,{variant:i.EmptyStateVariant.full,style:{minHeight:"400px"}},n().createElement(i.EmptyStateIcon,{icon:l.TF}),n().createElement(i.Title,{headingLevel:"h5",size:"lg"},"Loading..."),n().createElement(i.EmptyStateBody,null,"Please wait."))}},83061:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(92950),n=a.n(r),i=a(1085),l=a(76473);const o=function(t){var e=t.title,a=t.subtext;return n().createElement(i.EmptyState,{variant:i.EmptyStateVariant.full,style:{minHeight:"400px"}},n().createElement(i.EmptyStateIcon,{icon:l.TF}),n().createElement(i.Title,{headingLevel:"h5",size:"lg"},e||"No Data"),a&&n().createElement(i.EmptyStateBody,null,a))}},37384:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(92950),n=a.n(r),i=a(1085),l=a(80810);const o=function(){return n().createElement(i.EmptyState,{variant:i.EmptyStateVariant.full},n().createElement(i.EmptyStateIcon,{icon:l.W1}),n().createElement(i.Title,{size:"lg",headingLevel:"h4"},"No results found"),n().createElement(i.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."))}},62455:(t,e,a)=>{a.d(e,{Z:()=>p});var r=a(92950),n=a.n(r),i=a(1085),l=a(68778),o=a(43047),s=a(66395),c=a(69957),u=a(93279),d=a(53345);const p=function(t){var e=t.status;return n().createElement(i.Label,{variant:"outline",color:function(){switch(e){case"successful":return"green";case"failed":case"error":return"red";case"running":case"pending":return"blue";case"canceled":return"orange";default:return"grey"}}(),icon:function(){switch(e){case"successful":return n().createElement(l.rE,null);case"failed":case"error":return n().createElement(o.$O,null);case"running":return n().createElement(s.ew,null);case"canceled":return n().createElement(c.LP,null);default:return n().createElement(u.T3,null)}}(),style:{marginRight:"0.5rem",marginBottom:"0.5rem"}},(0,d.kC)(e))}}}]);