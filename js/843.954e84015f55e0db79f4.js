(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[843],{65843:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>Dt});var r=a(92137),n=a(96156),i=a(87757),l=a.n(i),s=a(92950),o=a.n(s),c=a(53677),u=a(48236),d=a(64866),p=a(13784),m=a(86350),f=a(48716),h=a(39173),g=a(58788),y=a(6610),b=a(5991),v=a(63349),_=a(10379),x=a(86089),E=a(77608),T=a(87986),k=a(25914),w=a(45697),j=a.n(w);const Z=function(){function t(e){var a=this;(0,y.Z)(this,t),(0,n.Z)(this,"handleMouseOver",(function(t){var e=0,r=0,n=0,i=k.Ba6.pageX-k.Ys(a.svg).node().getBoundingClientRect().x+10,l=k.Ba6.pageY-k.Ys(a.svg).node().getBoundingClientRect().y-10,s=k.i$Z("%m/%d");if(t){var o=a.toolTipBase.node().getBoundingClientRect().width,c=k.Ys(a.svg+"> svg").node().getBoundingClientRect().width,u=100-o/c*100<i/c*100;t&&(e=t.RAN||0,r=t.FAIL||0,n=t.TOTAL||0,a.date.text(s(t.DATE||null))),t&&t.data&&(e=t.data.RAN||0,r=t.data.FAIL||0,n=t.data.TOTAL||0,a.date.text(s(t.data.DATE||null))),a.jobs.text(n+" jobs"),a.jobsWidth=a.jobs.node().getComputedTextLength(),a.failed.text(""+r),a.successful.text(""+e),a.successTextWidth=a.successful.node().getComputedTextLength(),a.failTextWidth=a.failed.node().getComputedTextLength();var d,p=a.jobsWidth/a.boxWidth*100,m=p/40;d=p>40?a.boxWidth*m:a.boxWidth,a.boundingBox.attr("width",d),a.toolTipBase.attr("transform","translate("+i+","+l+")"),u?(a.toolTipPoint.attr("transform","translate(-20, 0) rotate(45)"),a.boundingBox.attr("x",-d-20),a.circleSuccess.attr("cx",-d),a.circleFail.attr("cx",-d),a.failedIcon.attr("x",-d-7),a.successIcon.attr("x",-d-7),a.successText.attr("x",17-d),a.failText.attr("x",17-d),a.successful.attr("x",-a.successTextWidth-20-12),a.failed.attr("x",-a.failTextWidth-20-12),a.date.attr("x",-d-5),a.jobs.attr("x",-a.jobsWidth/2-7),a.clickMore.attr("x",-d)):(a.toolTipPoint.attr("transform","translate(10, 0) rotate(45)"),a.boundingBox.attr("x",10),a.circleSuccess.attr("cx",26),a.circleFail.attr("cx",26),a.failedIcon.attr("x",19),a.successIcon.attr("x",19),a.successText.attr("x",43),a.failText.attr("x",43),a.successful.attr("x",d-a.successTextWidth),a.failed.attr("x",d-a.failTextWidth),a.date.attr("x",20),a.jobs.attr("x",d),a.clickMore.attr("x",20)),a.toolTipBase.style("opacity",1),a.toolTipBase.interrupt()}})),(0,n.Z)(this,"handleMouseOut",(function(){a.toolTipBase.transition().delay(15).style("opacity",0).style("pointer-events","none")})),this.svg=e.svg,this.colors=e.colors,this.draw()}return(0,b.Z)(t,[{key:"draw",value:function(){this.toolTipBase=k.Ys(this.svg+"> svg").append("g"),this.toolTipBase.attr("id","svg-chart-Tooltip.base-"+this.svg.slice(1)),this.toolTipBase.attr("overflow","visible"),this.toolTipBase.style("opacity",0),this.toolTipBase.style("pointer-events","none"),this.toolTipBase.attr("transform","translate(100, 100)"),this.boxWidth=145,this.textWidthThreshold=20,this.toolTipPoint=this.toolTipBase.append("rect").attr("transform","translate(10, -10) rotate(45)").attr("x",0).attr("y",0).attr("height",20).attr("width",20).attr("fill","#393f44"),this.boundingBox=this.toolTipBase.append("rect").attr("x",10).attr("y",-41).attr("rx",2).attr("height",110).attr("width",this.boxWidth).attr("fill","#393f44"),this.circleSuccess=this.toolTipBase.append("circle").attr("cx",26).attr("cy",0).attr("r",8).attr("stroke","white").attr("fill","white"),this.circleFail=this.toolTipBase.append("circle").attr("cx",26).attr("cy",26).attr("r",8).attr("stroke","white").attr("fill","white"),this.successText=this.toolTipBase.append("text").attr("x",43).attr("y",4).attr("font-size",12).attr("fill","white").text("Successful"),this.failText=this.toolTipBase.append("text").attr("x",43).attr("y",28).attr("font-size",12).attr("fill","white").text("Failed"),this.successIcon=this.toolTipBase.append("text").attr("class","fas fa-sm").attr("fill",this.colors(1)).attr("x",19).attr("y",5).text(""),this.failedIcon=this.toolTipBase.append("text").attr("class","fas fa-sm").attr("fill",this.colors(0)).attr("x",20).attr("y",31).text(""),this.jobs=this.toolTipBase.append("text").attr("fill","white").attr("x",137).attr("y",-21).attr("font-size",12).attr("text-anchor","end").text("No jobs"),this.successful=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("x",122).attr("y",4).text("0"),this.failed=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("x",122).attr("y",28).text("0"),this.date=this.toolTipBase.append("text").attr("fill","white").attr("stroke","white").attr("x",20).attr("y",-21).attr("font-size",12).text("Never"),this.clickMore=this.toolTipBase.append("text").attr("fill","white").attr("x",20).attr("y",55).attr("font-size",12).text("Click for details")}}]),t}();var L=a(17563),D=a(20806),O=a(53345);var A=function(t){(0,_.Z)(n,t);var e,a,r=(e=n,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,E.Z)(e);if(a){var n=(0,E.Z)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return(0,x.Z)(this,t)});function n(t){var e;return(0,y.Z)(this,n),(e=r.call(this,t)).draw=e.draw.bind((0,v.Z)(e)),e.init=e.init.bind((0,v.Z)(e)),e.resize=e.resize.bind((0,v.Z)(e)),e.redirectToJobExplorer=e.redirectToJobExplorer.bind((0,v.Z)(e)),e.state={formattedData:[],timeout:null},e}return(0,b.Z)(n,[{key:"redirectToJobExplorer",value:function(t){var e=t.data.DATE,a=D.n.jobExplorer,r=(0,O.p6)(e),n={start_date:r,end_date:r,quick_date_range:"custom",status:["failed","successful"],template_id:this.props.queryParams.template_id,org_id:this.props.queryParams.org_id,job_type:this.props.queryParams.job_type},i=(0,L.stringify)(n,{arrayFormat:"bracket"});this.props.history.push({pathname:a,search:i})}},{key:"resize",value:function(){var t=this,e=this.state.timeout;clearTimeout(e),this.setState({timeout:setTimeout((function(){t.init()}),500)})}},{key:"init",value:function(){this.draw()}},{key:"draw",value:function(){k.td_("#"+this.props.id+" > *").remove();var t,e=k.Z1g("%Y-%m-%d"),a=this.props.data.reduce((function(t,a){var r=a.created_date,n=a.successful_count,i=a.failed_count,l=e(r)||new Date,s=+n||0,o=+i||0,c=+n+i||0;return t.concat({DATE:l,RAN:s,FAIL:o,TOTAL:c})}),[]),r=this.props.getWidth(),n=this.props.getHeight(),i=k.tiA().rangeRound([0,r]).padding(.35),l=k.BYU().range([n,0]),s=k.Ys("#"+this.props.id).append("svg").attr("width",r+this.props.margin.left+this.props.margin.right).attr("height",n+this.props.margin.top+this.props.margin.bottom).append("g").attr("transform","translate("+this.props.margin.left+","+this.props.margin.top+")"),o=k.PKp(["#6EC664","#A30000"]),c=new Z({svg:"#"+this.props.id,colors:o}),u=k.knu().keys(["FAIL","RAN"]).order(k.Qxt).offset(k.HLf)(a);i.domain(u[0].map((function(t){return t.data.DATE}))),l.domain([0,k.Fp7(u[u.length-1],(function(t){return 1.15*t[1]}))||8]),s.append("g").attr("class","y-axis").call(k.y4O(l).tickSize(-r,0,0)).selectAll("line").attr("stroke","#d7d7d7"),s.selectAll(".y-axis .tick text").attr("x",-5),s.append("text").attr("transform","rotate(-90)").attr("y",0-this.props.margin.left).attr("x",0-n/2).attr("dy","1em").style("text-anchor","middle").text("Jobs across all clusters");var d=Math.round(a.length/(a.length/2));t=a.map((function(t){return t.DATE})),a.length>14&&(t=a.map((function(t,e){return e%d==0?t.DATE:void 0})).filter((function(t){return t}))),s.append("g").attr("class","x-axis").attr("transform","translate(0,"+n+")").call(k.LLu(i).tickValues(t).tickFormat(k.i$Z("%-m/%-d"))).selectAll("line").attr("stroke","#d7d7d7"),s.selectAll(".x-axis .tick text").attr("y",10),s.append("text").attr("transform","translate("+r/2+" ,"+(n+this.props.margin.top+20)+")").style("text-anchor","middle").text("Date");var p=s.selectAll("layer").data(u).enter().append("g").attr("class","layer").style("fill",(function(t,e){return o(e)}));p.selectAll("rect").data((function(t){return t})).enter().append("rect").attr("x",(function(t){return i(t.data.DATE)})).attr("y",(function(t){return l(t[0])})).attr("height",0).attr("width",i.bandwidth()-1).transition().duration(550).ease(k.LUP).attr("y",(function(t){return l(t[1])})).attr("height",(function(t){return l(t[0])-l(t[1])})),p.selectAll("rect").on("mouseover",c.handleMouseOver).on("mousemove",c.handleMouseOver).on("mouseout",c.handleMouseOut).on("click",this.redirectToJobExplorer)}},{key:"componentDidMount",value:function(){this.init(),window.addEventListener("resize",this.resize)}},{key:"componentDidUpdate",value:function(t){t.data!==this.props.data&&this.init()}},{key:"componentWillUnmount",value:function(){var t=this.state.timeout;clearTimeout(t),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){return o().createElement("div",{id:this.props.id})}}]),n}(s.Component);A.propTypes={id:j().string,queryParams:j().object,data:j().array,margin:j().object,getHeight:j().func,getWidth:j().func,history:j().object};const P=(0,T.Z)(A);var q=function(t){(0,_.Z)(n,t);var e,a,r=(e=n,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,E.Z)(e);if(a){var n=(0,E.Z)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return(0,x.Z)(this,t)});function n(t){var e;return(0,y.Z)(this,n),(e=r.call(this,t)).init=e.init.bind((0,v.Z)(e)),e.draw=e.draw.bind((0,v.Z)(e)),e.resize=e.resize.bind((0,v.Z)(e)),e.updateCluster=e.updateCluster.bind((0,v.Z)(e)),e.redirectToJobExplorer=e.redirectToJobExplorer.bind((0,v.Z)(e)),e.state={formattedData:[],timeout:null},e}return(0,b.Z)(n,[{key:"redirectToJobExplorer",value:function(t){var e=t.DATE,a=D.n.jobExplorer,r=(0,O.p6)(e),n={start_date:r,end_date:r,quick_date_range:"custom",status:["failed","successful"],cluster_id:this.props.queryParams.cluster_id,org_id:this.props.queryParams.org_id,template_id:this.props.queryParams.template_id,job_type:this.props.queryParams.job_type},i=(0,L.stringify)(n,{arrayFormat:"bracket"});this.props.history.push({pathname:a,search:i})}},{key:"resize",value:function(){var t=this,e=this.state.timeout;clearTimeout(e),this.setState({timeout:setTimeout((function(){t.init()}),500)})}},{key:"updateCluster",value:function(){this.init()}},{key:"init",value:function(){this.draw()}},{key:"draw",value:function(){k.td_("#"+this.props.id+" > *").remove();var t=this.props.getWidth(),e=this.props.getHeight();function a(t){t.transition().duration(1e3).attrTween("stroke-dasharray",r)}function r(){var t=this.getTotalLength(),e=k.ITZ("0,"+t,t+","+t);return function(t){return e(t)}}var n=k.Xf().rangeRound([0,t]),i=k.BYU().range([e,0]),l=k.PKp(["#6EC664","#A30000","#06C"]),s=k.Ys("#"+this.props.id).append("svg").attr("width",t+this.props.margin.left+this.props.margin.right).attr("height",e+this.props.margin.top+this.props.margin.bottom).attr("z",100).append("g").attr("transform","translate("+this.props.margin.left+","+this.props.margin.top+")"),o=new Z({svg:"#"+this.props.id,colors:l}),c=this.props.data,u=k.Z1g("%Y-%m-%d"),d=c.reduce((function(t,e){var a=e.created_date,r=e.successful_count,n=e.failed_count,i=u(a)||new Date,l=+r||0,s=+n||0,o=+r+n||0;return t.concat({DATE:i,RAN:l,FAIL:s,TOTAL:o})}),[]);n.domain(k.Wem(d,(function(t){return t.DATE}))),i.domain([0,k.Fp7(d,(function(t){return 1.15*t.TOTAL||8}))]);var p,m=k.jvg().curve(k.FdL).x((function(t){return n(t.DATE)})).y((function(t){return i(t.RAN)})),f=k.jvg().defined((function(t){return!isNaN(t.FAIL)})).curve(k.FdL).x((function(t){return n(t.DATE)})).y((function(t){return i(t.FAIL)}));s.append("g").attr("class","y-axis").call(k.y4O(i).ticks(10).tickSize(-t)).selectAll("line").attr("stroke","#d7d7d7"),s.selectAll(".y-axis .tick text").attr("x",-5),s.append("text").attr("transform","rotate(-90)").attr("y",0-this.props.margin.left).attr("x",0-e/2).attr("dy","1em").style("text-anchor","middle").text("Job runs");var h=Math.round(d.length/(d.length/2));p=d.map((function(t){return t.DATE})),d.length>14&&(p=d.map((function(t,e){return e%h==0?t.DATE:void 0})).filter((function(t){return t}))),s.append("g").attr("class","x-axis").attr("transform","translate(0,"+e+")").call(k.LLu(n).tickValues(p).tickSize(-e).tickFormat(k.i$Z("%-m/%-d"))).selectAll("line").attr("stroke","#d7d7d7"),s.selectAll(".x-axis .tick text").attr("y",10),s.append("text").attr("transform","translate("+t/2+" ,"+(e+this.props.margin.top+20)+")").style("text-anchor","middle").text("Date");var g=s.append("path").attr("class","mouse-line").style("stroke","black").style("stroke-width","3px").style("stroke-dasharray","3, 3").style("opacity","0"),y=function(t){o.handleMouseOver(t),g.transition().style("opacity","1")},b=function(){var t=this.cx.baseVal.value;g.attr("d",(function(){return"M"+t+","+e+" "+t+",0"}))},v=function(){o.handleMouseOut(),g.transition().style("opacity",0)};s.append("path").data([d]).attr("class","line").style("fill","none").style("stroke",(function(){return l(1)})).attr("stroke-width",2).attr("d",m).call(a),s.append("path").data([d]).attr("class","line").style("fill","none").style("stroke",(function(){return l(0)})).attr("stroke-width",2).attr("d",f).call(a),s.selectAll("dot").data(d).enter().append("circle").attr("r",3).style("stroke",(function(){return l(1)})).style("fill",(function(){return l(1)})).attr("cx",(function(t){return n(t.DATE)})).attr("cy",(function(t){return i(t.RAN)})).on("mouseover",y).on("mousemove",b).on("mouseout",v).on("click",this.redirectToJobExplorer),s.selectAll("dot").data(d).enter().append("circle").attr("r",3).style("stroke",(function(){return l(0)})).style("fill",(function(){return l(0)})).attr("cx",(function(t){return n(t.DATE)})).attr("cy",(function(t){return i(t.FAIL)})).on("mouseover",y).on("mousemove",b).on("mouseout",v).on("click",this.redirectToJobExplorer)}},{key:"componentDidMount",value:function(){this.updateCluster(),window.addEventListener("resize",this.resize)}},{key:"componentDidUpdate",value:function(t){t.data!==this.props.data&&this.updateCluster()}},{key:"componentWillUnmount",value:function(){var t=this.state.timeout;clearTimeout(t),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){return o().createElement("div",{id:this.props.id})}}]),n}(s.Component);q.propTypes={id:j().string,queryParams:j().object,data:j().array,margin:j().object,getHeight:j().func,getWidth:j().func,history:j().object};const C=(0,T.Z)(q);var B,I,R,M=a(32465),F=a(29163),S=a(83061),z=(0,F.ZP)(g.DataListCell)(B||(B=(0,M.Z)(["\n  --pf-c-data-list__cell-cell--MarginRight: 0;\n"]))),W=(0,F.ZP)(g.DataListItem)(I||(I=(0,M.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 0 15px 10px 15px;\n"]))),N=(0,F.ZP)(z)(R||(R=(0,M.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]))),U=function(t){var e=t.modules,a=t.isLoading;return o().createElement(g.DataList,{"aria-label":"Top Modules",style:{maxHeight:"400px",overflow:"auto",height:"400px",background:"white"}},o().createElement(W,{"aria-labelledby":"top-modules-header"},o().createElement(z,null,o().createElement("h3",null,"Top modules")),o().createElement(N,null,o().createElement("h3",null,"Usage"))),a&&o().createElement(g.DataListItem,{"aria-labelledby":"modules-loading",key:a,style:{border:"none"}},o().createElement(g.DataListCell,null,o().createElement(u.Z,null))),!a&&e.length<=0&&o().createElement(g.DataListItem,{"aria-labelledby":"modules-no-data",key:a,style:{border:"none"}},o().createElement(g.DataListCell,null,o().createElement(S.Z,null))),!a&&e.filter((function(t){return null!==t.name})).map((function(t,e){var a=t.name,r=t.host_task_count;return o().createElement(W,{"aria-labelledby":"top-modules-detail",key:e},o().createElement(z,null,o().createElement("span",null,(0,O.mN)(a))),o().createElement(N,null,r))})))};U.propTypes={modules:j().array,isLoading:j().bool};const H=U;var J,Y=a(34699),G=a(81253),V=a(334),K=a(9771),$=a(37384),X=a(94592),Q=a(62455),tt=a(29587),et=a(94550),at=a(77388),rt=["result","request"],nt=["result","request"];function it(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function lt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?it(Object(a),!0).forEach((function(e){(0,n.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):it(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var st=F.ZP.div(J||(J=(0,M.Z)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n"]))),ot=function(t){if(t){if(t&&t[0]){var e=Math.ceil(t[0].failed_count/t[0].total_failed_count*100);return"".concat(t[0].task_name," ").concat(e,"%")}return"Unavailable"}},ct=function(t,e){return Math.ceil(t/e*100)+"%"},ut=function(t){var e,a,r,n,i,l,c,p=t.selectedId,m=t.isOpen,f=t.handleModal,h=t.qp,y=t.jobType,b=(0,at.ZP)((0,s.useCallback)((function(){return(0,d.Ij)(A)}),[p]),{}),v=b.result,_=b.request,x=(0,G.Z)(b,rt),E=(0,at.ZP)((0,s.useCallback)((function(){return(0,d.Ij)(Z)}),[p]),{}),T=E.result,k=E.request,w=(0,G.Z)(E,nt),j=(0,V.useHistory)(),Z=lt(lt({},h),{},{template_id:[p],attributes:["id","status","job_type","started","finished","elapsed","created","cluster_name","org_name"],group_by_time:!1,limit:5,sort_options:"created",sort_oder:"desc",quick_date_range:h.quick_date_range?h.quick_date_range:"last_30_days",job_type:[y]}),A={group_by:"template",template_id:[p],attributes:["elapsed","job_type","successful_count","failed_count","error_count","waiting_count","pending_count","canceled_count","new_count","running_count","total_count","job"===y?"most_failed_tasks":"most_failed_steps"],status:h.status,quick_date_range:h.quick_date_range?h.quick_date_range:"last_30_days",job_type:[y]};(0,s.useEffect)((function(){k(),_()}),[p]);var P,q,C=null!==(e=x.isSuccess&&(null==v?void 0:v.items[0]))&&void 0!==e?e:null,B=C?{success:C.successful_count,cancelled:C.canceled_count,error:C.error_count,failed:C.failed_count,new:C.new_count,pending:C.pending_count,running:C.running_count,waiting:C.waiting_count}:null,I={success:tt.global_palette_green_200.value,cancelled:tt.global_palette_black_850.value,error:tt.global_palette_orange_300.value,failed:tt.global_palette_red_100.value,new:tt.global_palette_cyan_200.value,pending:tt.global_palette_purple_300.value,running:tt.global_palette_blue_300.value,waiting:tt.global_palette_light_green_200.value},R=C&&[{label:"Number of runs",id:"total-runs",value:null!==(a=C.total_count)&&void 0!==a?a:"Unavailable"},{label:"Total time",id:"total-time",value:C.elapsed?(0,O.yH)(C.elapsed):"Unavailable"},{label:"Average time",id:"avg-time",value:C.elapsed?(P=C.elapsed,q=C.total_count,new Date(1e3*Math.ceil(P/q)).toISOString().substr(11,8)):"Unavailable"},{label:"Type",id:"type",value:y?(0,O.GV)(y):"Unavailable"},{label:"Success rate",id:"success-rate",value:isNaN(C.successful_count)?"Unavailable":ct(C.successful_count,C.total_count)},{label:"Most failed task",id:"most-failed",value:C.most_failed_tasks?ot(C.most_failed_tasks):"Unavailable"}],M=function(){f(!1)};return o().createElement(g.Modal,{"aria-label":"modal",variant:g.ModalVariant.medium,title:w.isSuccess&&x.isSuccess&&(null==v||null===(r=v.items)||void 0===r?void 0:r.length)>0&&(null!==(n=null==v||null===(i=v.items[0])||void 0===i?void 0:i.name)&&void 0!==n?n:"No template name"),isOpen:m,onClose:M},(x.isLoading||w.isLoading)&&o().createElement(u.Z,null),(x.error||w.error)&&o().createElement(K.Z,{message:w.error.error}),x.isSuccess&&w.isSuccess&&(null==T||null===(l=T.items)||void 0===l?void 0:l.length)<=0&&o().createElement($.Z,null),x.isSuccess&&w.isSuccess&&(null==T||null===(c=T.items)||void 0===c?void 0:c.length)>0&&o().createElement(o().Fragment,null,B&&o().createElement(X.Z,{categoryCount:B,categoryColor:I}),o().createElement(g.DescriptionList,{isHorizontal:!0,columnModifier:{lg:"3Col"}},R.map((function(t){var e=t.label,a=t.id,r=t.value;return o().createElement(g.DescriptionListGroup,{className:a,key:e},o().createElement(g.DescriptionListTerm,null,e),o().createElement(g.DescriptionListDescription,null,r))}))),o().createElement(g.Divider,{component:"div",style:{marginTop:"2rem",marginBottom:"1.5rem"}}),o().createElement("p",null,o().createElement("strong",null,"Last 5 jobs")),o().createElement(et.TableComposable,{"aria-label":"Template information table",variant:"compact"},o().createElement(et.Thead,null,o().createElement(et.Tr,null,["Id/Name","Status","Cluster","Finished","Total time"].map((function(t,e){return o().createElement(et.Th,{key:e},t)})))),o().createElement(et.Tbody,null,T.items.map((function(t,e){return o().createElement(et.Tr,{key:"job-detail-".concat(e)},o().createElement(et.Td,null,"".concat(t.id.id," - ").concat(t.id.template_name)),o().createElement(et.Td,null,o().createElement(Q.Z,{status:t.status})),o().createElement(et.Td,null,t.cluster_name),o().createElement(et.Td,null,(0,O.o0)(t.finished)),o().createElement(et.Td,null,(0,O.yH)(t.elapsed)))}))))),o().createElement(st,null,o().createElement(g.Button,{key:"cancel",variant:"secondary",onClick:function(){M()}},"Close"),o().createElement(g.Button,{component:"a",onClick:function(){var t=D.n.jobExplorer,e={"job-explorer.template_id":p,"job-explorer.status":["successful","failed","new","pending","waiting","error","canceled","running"],"job-explorer.job_type":[y],"job-explorer.quick_date_range":"last_30_days"},a=(0,L.stringify)(e,{arrayFormat:"bracket"});j.push({pathname:t,search:a})},variant:"link"},"View all jobs")))};ut.propTypes={selectedId:j().number.isRequired,qp:j().object.isRequired,jobType:j().string.isRequired,isOpen:j().bool.isRequired,handleModal:j().func.isRequired};const dt=ut;var pt,mt,ft,ht=(0,F.ZP)(g.DataListCell)(pt||(pt=(0,M.Z)(["\n  --pf-c-data-list__cell-cell--MarginRight: 0;\n"]))),gt=(0,F.ZP)(g.DataListItem)(mt||(mt=(0,M.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 0 15px 10px 15px;\n  justify-content: center;\n  align-items: center;\n"]))),yt=(0,F.ZP)(ht)(ft||(ft=(0,M.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]))),bt=function(t){var e=t.templates,a=t.isLoading,r=t.qp,n=t.title,i=t.jobType,l=(0,s.useState)(null),c=(0,Y.Z)(l,2),d=c[0],p=c[1],m=(0,s.useState)(!1),f=(0,Y.Z)(m,2),h=f[0],y=f[1],b=function(t){return"job"===t?"templates":"workflows"};return o().createElement(o().Fragment,null,o().createElement(g.DataList,{"aria-label":"Top ".concat(b(i)),style:{maxHeight:"400px",overflow:"auto",height:"400px",background:"white"}},o().createElement(gt,{"aria-labelledby":"top-".concat(b(i),"-header")},o().createElement(ht,null,o().createElement("h3",null,n)),o().createElement(yt,null,o().createElement("h3",null,"Usage"))),a&&o().createElement(g.DataListItem,{"aria-labelledby":"".concat(b(i),"-loading"),key:a,style:{border:"none"}},o().createElement(g.DataListCell,null,o().createElement(u.Z,null))),!a&&e.length<=0&&o().createElement(g.DataListItem,{"aria-labelledby":"".concat(b(i),"-no-data"),key:a,style:{border:"none"}},o().createElement(g.DataListCell,null,o().createElement(S.Z,null))),!a&&e.map((function(t,e){var a=t.name,r=t.total_count,n=t.id;return o().createElement(gt,{"aria-labelledby":"top-".concat(b(i),"-detail"),key:e},o().createElement(ht,null,o().createElement("a",{onClick:function(){y(!0),p(n)}},a)),o().createElement(yt,null,r))}))),d&&o().createElement(dt,{isOpen:h,handleModal:y,selectedId:d,qp:r,jobType:i}))};bt.propTypes={templates:j().array,isLoading:j().bool,queryParams:j().object,title:j().string,qp:j().object,jobType:j().string};const vt=bt;var _t=a(83474),xt=a(21048);function Et(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function Tt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Et(Object(a),!0).forEach((function(e){(0,n.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Et(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var kt={group_by:"template",limit:10,job_type:["job"],group_by_time:!1,status:["successful","failed"]},wt={group_by:"template",limit:10,job_type:["workflowjob"],group_by_time:!1,status:["successful","failed"]},jt={group_by:"module",sort_options:"host_task_count",sort_oder:"desc",limit:10},Zt={attributes:p.cY.attributes},Lt=(0,xt.Hm)("clusters",Tt({},p.kK.defaultParams),["limit","offset"]);const Dt=function(){var t=(0,c.K)(Zt),e=(0,c.K)(Lt),a=e.queryParams,n=e.setFromToolbar,i=(0,at.ZP)((0,s.useCallback)((function(){return(0,d.VU)(t)}),[t]),{}),p=i.result,y=i.error,b=i.request,v=(0,at.ZP)((0,s.useCallback)((0,r.Z)(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.Ij)(a);case 2:return e=t.sent,t.abrupt("return",e.items);case 4:case"end":return t.stop()}}),t)}))),[a]),[]),_=v.result,x=v.isLoading,E=v.isSuccess,T=v.request,k=(0,at.ZP)((0,s.useCallback)((0,r.Z)(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.wi)(V);case 2:return e=t.sent,t.abrupt("return",e.items);case 4:case"end":return t.stop()}}),t)}))),[a]),[]),w=k.result,j=k.isLoading,Z=k.request,L=(0,at.ZP)((0,s.useCallback)((0,r.Z)(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.Ij)(Y);case 2:return e=t.sent,t.abrupt("return",e.items);case 4:case"end":return t.stop()}}),t)}))),[a]),[]),D=L.result,O=L.isLoading,A=L.request,q=(0,at.ZP)((0,s.useCallback)((0,r.Z)(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.Ij)(G);case 2:return e=t.sent,t.abrupt("return",e.items);case 4:case"end":return t.stop()}}),t)}))),[a]),[]),B=q.result,I=q.isLoading,R=q.request;(0,s.useEffect)((function(){b(),T(),Z(),A(),R()}),[a]);var M,F,S=a.cluster_id,z=a.org_id,W=a.template_id,N=a.quick_date_range,U=a.start_date,J=a.end_date,Y=Tt({cluster_id:S,org_id:z,template_id:W,quick_date_range:N,start_date:U,end_date:J},kt),G=Tt({cluster_id:S,org_id:z,template_id:W,quick_date_range:N,start_date:U,end_date:J},wt),V=Tt({cluster_id:S,org_id:z,template_id:W,quick_date_range:N,start_date:U,end_date:J},jt);return y?o().createElement(K.Z,{message:y.error}):o().createElement(o().Fragment,null,o().createElement(f.Z,null,o().createElement(h.Z,{title:"Clusters"}),o().createElement(_t.Z,{categories:p,qsConfig:Lt,filters:a,setFilters:n})),o().createElement(m.Z,null,o().createElement(g.Grid,{hasGutter:!0},o().createElement(g.GridItem,{span:12},o().createElement(g.Card,null,o().createElement(g.CardTitle,null,o().createElement("h2",null,"Job status")),o().createElement(g.CardBody,null,x&&o().createElement(u.Z,null),(!a.cluster_id||(null===(M=a.cluster_id)||void 0===M?void 0:M.length)<=0)&&E&&o().createElement(P,{margin:{top:20,right:20,bottom:50,left:70},id:"d3-bar-chart-root",data:_,queryParams:a}),(null===(F=a.cluster_id)||void 0===F?void 0:F.length)>0&&E&&o().createElement(C,{margin:{top:20,right:20,bottom:50,left:70},id:"d3-line-chart-root",data:_,queryParams:a})))),o().createElement(g.GridItem,{span:4},o().createElement(vt,{qp:a,templates:B,isLoading:I,title:"Top workflows",jobType:"workflowjob"})),o().createElement(g.GridItem,{span:4},o().createElement(vt,{qp:a,templates:D,isLoading:O,title:"Top templates",jobType:"job"})),o().createElement(g.GridItem,{span:4},o().createElement(H,{modules:w,isLoading:j})))))}}}]);
//# sourceMappingURL=../sourcemaps/843.d41033340f5cabc92af1.js.map