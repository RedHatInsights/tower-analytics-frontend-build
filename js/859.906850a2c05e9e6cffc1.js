(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[859],{1859:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>xt});var a=n(92137),r=n(34699),o=n(96156),l=n(87757),i=n.n(l),s=n(92950),u=n.n(s),c=n(45697),m=n.n(c),p=n(86350),d=n(48716),f=n(39173),h=n(58788),g=n(48236),v=n(83061),y=n(9771),E=n(83474),x=n(64866),b=n(53677),C=n(13784),T=n(14115),Z=n(53345),k=n(77388),w=n(21048),B=n(63349),P=n(10379),O=n(86089),j=n(77608),S=n(6610),I=n(5991),A=n(25914),R=n(87986),W=n(91354);var _=function(){function t(e){var n=this;(0,S.Z)(this,t),(0,o.Z)(this,"handleMouseOver",(function(t){var e,a,r,o,l=A.Ys("#d3-roi-chart-root").node().scrollLeft,i=A.Ba6.pageX-A.Ys(n.svg).node().getBoundingClientRect().x+10+l,s=A.Ba6.pageY-A.Ys(n.svg).node().getBoundingClientRect().y-30;if(t){a=(0,W.Z)(+t.delta),e=t.name,r=(0,W.Z)(+t.manualCost),o=(0,W.Z)(+t.automatedCost);var u=n.toolTipBase.node().getBoundingClientRect().width,c=A.Ys(n.svg+"> svg").node().getBoundingClientRect().width,m=100-u/c*100<i/c*100;n.name.text(""+e),n.savings.text("Total savings ".concat(a)),n.manualCost.text("Manual Cost ".concat(r)),n.automationCost.text("Automation Cost ".concat(o)),n.nameWidth=n.name.node().getComputedTextLength(),n.savingsWidth=n.savings.node().getComputedTextLength(),n.manualCostWidth=n.manualCost.node().getComputedTextLength(),n.automationCostWidth=n.automationCost.node().getComputedTextLength(),n.widestTextElem=A.Fp7([n.nameWidth,n.savingsWidth,n.automationCostWidth,n.manualCostWidth]);var p,d=n.widestTextElem/n.boxWidth*100,f=d/85;p=d>85?n.boxWidth*f:n.boxWidth,n.boundingBox.attr("width",p),n.toolTipBase.attr("transform","translate("+i+","+s+")"),m?(n.toolTipPoint.attr("transform","translate(-20, 15) rotate(45)"),n.boundingBox.attr("x",-p-20),n.name.attr("x",-(u-7)),n.savings.attr("x",-(u-7)),n.manualCost.attr("x",-(u-7)),n.automationCost.attr("x",-(u-7))):(n.toolTipPoint.attr("transform","translate(10, 15) rotate(45)"),n.boundingBox.attr("x",10),n.name.attr("x",20),n.savings.attr("x",20),n.manualCost.attr("x",20),n.automationCost.attr("x",20)),n.toolTipBase.style("opacity",1),n.toolTipBase.interrupt()}})),(0,o.Z)(this,"handleMouseOut",(function(){n.toolTipBase.transition().delay(15).style("opacity",0).style("pointer-events","none")})),this.svg=e.svg,this.draw()}return(0,I.Z)(t,[{key:"draw",value:function(){this.width=125,this.toolTipBase=A.Ys(this.svg+"> svg").append("g"),this.toolTipBase.attr("id","svg-chart-Tooltip-base-"+this.svg.slice(1)),this.toolTipBase.attr("overflow","visible"),this.toolTipBase.style("opacity",0),this.toolTipBase.style("pointer-events","none"),this.toolTipBase.attr("transform","translate(100, 100)"),this.boxWidth=125,this.textWidthThreshold=20,this.toolTipPoint=this.toolTipBase.append("rect").attr("transform","translate(10, 0) rotate(45)").attr("x",0).attr("y",0).attr("height",20).attr("width",20).attr("fill","#393f44"),this.boundingBox=this.toolTipBase.append("rect").attr("x",10).attr("y",-23).attr("rx",2).attr("height",92).attr("width",this.boxWidth).attr("fill","#393f44"),this.name=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("x",20).attr("y",-2).text("Template name"),this.savings=this.toolTipBase.append("text").attr("x",20).attr("y",52).attr("font-size",12).attr("font-weight","bold").attr("fill","white").text("Total savings $0"),this.manualCost=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("x",20).attr("y",16).text("Manual cost $0"),this.automationCost=this.toolTipBase.append("text").attr("fill","white").attr("font-size",12).attr("x",20).attr("y",34).text("Automation cost $0")}}]),t}(),G=function(t){(0,P.Z)(r,t);var e,n,a=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=(0,j.Z)(e);if(n){var r=(0,j.Z)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return(0,O.Z)(this,t)});function r(t){var e;return(0,S.Z)(this,r),(e=a.call(this,t)).init=e.init.bind((0,B.Z)(e)),e.draw=e.draw.bind((0,B.Z)(e)),e.resize=e.resize.bind((0,B.Z)(e)),e.state={timeout:null},e}return(0,I.Z)(r,[{key:"resize",value:function(){var t=this,e=this.state.timeout;clearTimeout(e),this.setState({timeout:setTimeout((function(){t.init()}),500)})}},{key:"init",value:function(){this.draw()}},{key:"draw",value:function(){var t="#0066CC";A.td_("#"+this.props.id+" > *").remove();var e,n=this.props.data;e=n.length>=15?A.Ys(".automation-wrapper").node().getBoundingClientRect().width-this.props.margin.left-this.props.margin.right:this.props.getWidth();var a,r=this.props.getHeight(),o=A.tiA().rangeRound([0,e]).padding(.45),l=A.BYU().range([r,0]);a=n.map((function(t){return t.name}));var i=A.WUZ(".2s"),s=A.LLu(o).tickValues(a),u=A.y4O(l).ticks(8).tickFormat((function(t){return i(t).replace("G","B")})).tickSize(-e,0,0),c=A.Ys("#"+this.props.id).append("svg").attr("width",e+this.props.margin.left+this.props.margin.right).attr("height",r+this.props.margin.bottom+this.props.margin.top).append("g").attr("transform","translate("+this.props.margin.left+","+this.props.margin.top+")"),m=n.map((function(t){return t.name})),p=new _({svg:"#"+this.props.id});o.domain(m),l.domain([0,A.Fp7(n,(function(t){return 1.15*t.delta}))||8]),c.append("g").attr("class","y axis").call(u).selectAll("line").attr("stroke","#d7d7d7").append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").style("font-weight","bold").text("Value"),c.append("text").attr("transform","rotate(-90)").attr("y",0-this.props.margin.left).attr("x",0-r/2).attr("dy","1em").style("text-anchor","middle").text("Savings per template ($)"),c.append("g").attr("class","x-axis").attr("transform","translate(0,"+r+")").call(s).selectAll("text").style("text-anchor","start").attr("dx","0.75em").attr("dy",-o.bandwidth()/1.45-8).attr("transform","rotate(-90)"),c.selectAll(".x-axis line").attr("stroke","transparent"),c.selectAll(".bar").data(n).enter().append("rect").attr("x",(function(t){return o(t.name)})).attr("width",o.bandwidth()).attr("y",(function(t){return l(t.delta)})).style("fill",(function(){return t})).attr("height",(function(t){return r-l(t.delta)})).on("mouseover",(function(e){A.Ys(this).style("fill",A.B8C(t).darker(1)),p.handleMouseOver(e)})).on("mousemove",p.handleMouseOver).on("mouseout",(function(){A.Ys(this).style("fill",t),p.handleMouseOut()}))}},{key:"componentDidMount",value:function(){this.init(),window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){var t=this.state.timeout;clearTimeout(t),window.removeEventListener("resize",this.resize)}},{key:"componentDidUpdate",value:function(){this.init()}},{key:"render",value:function(){return u().createElement("div",{id:this.props.id})}}]),r}(s.Component);G.propTypes={id:m().string,data:m().array,margin:m().object,getHeight:m().func,getWidth:m().func};const M=(0,R.Z)(G);var z,L=n(32465),Y=n(29163),D=(0,Y.ZP)(h.CardTitle)(z||(z=(0,L.Z)(["\n  border-bottom: 1px solid #d7d7d7;\n  margin-bottom: 10px;\n"]))),F=function(t){var e=t.totalSavings,n=void 0===e?0:e;return u().createElement(h.Card,{style:{borderTop:"3px solid #2B9AF3"}},u().createElement(h.CardTitle,{style:{paddingBottom:"0"}},"Total savings"),u().createElement(h.CardBody,null,u().createElement(h.Title,{headingLevel:"h3",size:"4xl",style:{color:"var(--pf-global--success-color--200)"}},(0,W.Z)(n))))};F.propTypes={totalSavings:m().number};const q=F;var U,H=n(85111),J=Y.ZP.div(U||(U=(0,L.Z)(["\n  flex: 1;\n"]))),$=function(t){var e=parseFloat(t);return e&&e>=0?t:""},V=function(t){var e=t.costManual,n=void 0===e?"0":e,a=t.setCostManual,r=void 0===a?function(){}:a,o=t.costAutomation,l=void 0===o?"0":o,i=t.setCostAutomation,s=void 0===i?function(){}:i;return u().createElement(h.Card,null,u().createElement(D,null,"Calculate your automation"),u().createElement(h.CardBody,null,u().createElement(J,null,u().createElement("p",null,"Manual cost of automation"),u().createElement("em",{style:{color:"var(--pf-global--Color--dark-200)"}},"(e.g. average salary of mid-level Software Engineer)"),u().createElement(h.InputGroup,{style:{width:"50%"}},u().createElement(h.InputGroupText,null,u().createElement(H.ZP,null)),u().createElement(h.TextInput,{id:"manual-cost",type:"number","aria-label":"manual-cost",value:n,onChange:function(t){return r($(t))}}),u().createElement(h.InputGroupText,null,"/hr"))),u().createElement(J,{style:{paddingTop:"10px"}},u().createElement("p",null,"Automated process cost"),u().createElement(h.InputGroup,{style:{width:"50%"}},u().createElement(h.InputGroupText,null,u().createElement(H.ZP,null)),u().createElement(h.TextInput,{id:"automation-cost",type:"number","aria-label":"automation-cost",value:l,onChange:function(t){return s($(t))}}),u().createElement(h.InputGroupText,null,"/hr")))))};V.propTypes={costManual:m().string,setCostManual:m().func,costAutomation:m().string,setCostAutomation:m().func};const K=V,N=function(){return u().createElement(h.Card,{style:{height:"100%"}},u().createElement(D,null,"Automation formula"),u().createElement(h.CardBody,null,u().createElement("p",null,u().createElement("b",null,"Manual cost for template x")," =",u().createElement("em",null,"(time for a manual run on one host in hours * (sum of all hosts across all job runs) ) * cost per hour")),u().createElement("p",null,u().createElement("b",null,"Automation cost for template x")," =",u().createElement("em",null,"cost of automation per hour * sum of total elapsed hours for a template")),u().createElement("p",null,u().createElement("b",null,"Savings")," =",u().createElement("em",null,"Sum of (manual cost - automation cost) across all templates"))))};var Q,X,tt,et,nt,at=n(31369),rt=n(34238),ot=n(787),lt=Y.ZP.div(Q||(Q=(0,L.Z)(["\n  em {\n    display: block;\n    padding: 5px 0;\n  }\n\n  @media (max-width: 1490px) {\n    display: block;\n\n    em {\n      padding: 10px 0;\n      display: block;\n    }\n  }\n"]))),it=Y.ZP.em(X||(X=(0,L.Z)(["\n  color: var(--pf-global--Color--dark-200);\n"]))),st=Y.ZP.div(tt||(tt=(0,L.Z)(["\n  p {\n    text-align: left;\n  }\n"]))),ut=Y.ZP.div(et||(et=(0,L.Z)(["\n  & svg {\n    fill: var(--pf-global--Color--dark-200);\n\n    :hover {\n      cursor: pointer;\n    }\n\n    :first-of-type {\n      margin-right: 10px;\n      margin-left: 10px;\n\n      @media (max-width: 1350px) {\n        margin-left: 0;\n      }\n    }\n  }\n"]))),ct=Y.ZP.div(nt||(nt=(0,L.Z)(["\n  flex: 1;\n"]))),mt=function(t){var e=t.details;return u().createElement(h.Popover,{"aria-label":"template detail popover",position:"left",bodyContent:u().createElement(st,null,Object.keys(e).map((function(t,n){return u().createElement("p",{key:n},u().createElement("b",null,(0,Z.kC)(t.split("_").join(" "))),": ",e[t])})))},u().createElement(at.ZP,null))};mt.propTypes={details:m().object};var pt=function(t){var e=t.data,n=void 0===e?[]:e,a=t.sortBy,r=void 0===a?"":a,o=t.setDataRunTime,l=void 0===o?function(){}:o,i=t.setEnabled,s=void 0===i?function(){}:i,c=t.redirectToJobExplorer,m=void 0===c?function(){}:c;return u().createElement(h.Card,null,u().createElement(h.CardBody,null,u().createElement("p",null,"Enter the time it takes to run the following templates manually."),n.map((function(t){return u().createElement("div",{key:t.id},u().createElement(h.Tooltip,{content:"List of jobs for this template for past 30 days"},u().createElement(h.Button,{style:{padding:"15px 0 10px"},component:"a",onClick:function(){return m(t.id)},variant:"link"},t.name)),u().createElement(lt,null,u().createElement(ct,{key:t.id},u().createElement(h.InputGroup,null,u().createElement(h.TextInput,{id:t.id,type:"number","aria-label":"time run manually",value:t.avgRunTime/60,onChange:function(e){return l(60*e,t.id)}}),u().createElement(h.InputGroupText,null,"min"))),u().createElement(it,null,"x ",t.successful_hosts_total," host runs"),function(t,e){var n=e.split(":")[0],a=Object.keys(t).map((function(e){return e===n?"".concat(t[e]):null}));return u().createElement(it,null,(0,Z.kC)(n.split("_").join(" ")),": ",a)}(t,r),u().createElement(ut,null,u().createElement(mt,{details:t}),!t.enabled&&u().createElement(ot.ZP,{onClick:function(){return s(t.id)(!0)}}),t.enabled&&u().createElement(rt.ZP,{onClick:function(){return s(t.id)(!1)}}))),u().createElement("p",{style:{color:"#486B00"}},(0,W.Z)(+t.delta)))}))))};pt.propTypes={data:m().array,setDataRunTime:m().func,redirectToJobExplorer:m().func,deselectedIds:m().array,setDeselectedIds:m().func,setEnabled:m().func,sortBy:m().string};const dt=pt;function ft(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function ht(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ft(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ft(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var gt=function(t){return t.filter((function(t){return t.enabled}))},vt=function(t,e,n){return t.map((function(t){var a=(0,Z.B3)(t.avgRunTime)*t.successful_hosts_total*parseFloat(n),r=(0,Z.B3)(t.successful_elapsed_total)*parseFloat(e),o=(0,Z.YD)(r,a);return ht(ht({},t),{},{delta:o,manualCost:a,automatedCost:r})}))},yt=(0,w.Hm)("clusters",ht({},C.GL.defaultParams),["limit","offset"]),Et=function(t){var e=t.history,n=(0,T.Z)(e,"jobExplorer"),o=(0,s.useState)("50"),l=(0,r.Z)(o,2),c=l[0],m=l[1],C=(0,s.useState)("20"),Z=(0,r.Z)(C,2),w=Z[0],B=Z[1],P=(0,b.K)(yt),O=P.queryParams,j=P.setFromToolbar,S=(0,k.ZP)((0,s.useCallback)((function(){return(0,x.Yn)(O)}),[O]),{}),I=S.result,A=S.request,R=(0,k.ZP)((0,s.useCallback)((0,a.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,x.QJ)(O);case 2:return e=t.sent,t.abrupt("return",vt((void 0,(void 0===(n=e.items)?[]:n).map((function(t){return ht(ht({},t),{},{delta:0,avgRunTime:3600,manualCost:0,automatedCost:0,enabled:!0})}))),w,c));case 4:case"end":return t.stop()}var n}),t)}))),[O]),[]),W=R.result,_=R.error,G=R.isLoading,z=R.isSuccess,L=R.request,Y=R.setValue;(0,s.useEffect)((function(){A()}),[]),(0,s.useEffect)((function(){Y(vt(W,w,c))}),[w,c]),(0,s.useEffect)((function(){A(),L()}),[O]);var F;return u().createElement(u().Fragment,null,u().createElement(d.Z,null,u().createElement(f.Z,{title:"Automation Calculator"}),u().createElement(E.Z,{categories:I,filters:O,qsConfig:yt,setFilters:j})),u().createElement(p.Z,null,G?u().createElement(g.Z,null):_?u().createElement(y.Z,{message:_.error}):z&&W.length<=0?u().createElement(v.Z,null):z&&W.length>0?u().createElement(h.Grid,{hasGutter:!0,className:"automation-wrapper"},u().createElement(h.GridItem,{span:9},u().createElement(h.Stack,{hasGutter:!0},u().createElement(h.StackItem,null,u().createElement(h.Card,null,u().createElement(D,null,"Automation savings"),u().createElement(h.CardBody,null,u().createElement(M,{margin:{top:20,right:20,bottom:20,left:70},id:"d3-roi-chart-root",data:gt(W)}),u().createElement("p",{style:{textAlign:"center"}},"Templates")))),u().createElement(h.StackItem,{isFilled:!0},u().createElement(N,null)))),u().createElement(h.GridItem,{span:3},u().createElement(h.Stack,{hasGutter:!0},u().createElement(h.StackItem,null,u().createElement(q,{totalSavings:(F=gt(W),F.reduce((function(t,e){return t+e.delta}),0))})),u().createElement(h.StackItem,null,u().createElement(h.Stack,null,u().createElement(h.StackItem,null,u().createElement(K,{costManual:c,setCostManual:m,costAutomation:w,setCostAutomation:B})),u().createElement(h.StackItem,{style:{overflow:"auto",maxHeight:"48vh"}},u().createElement(dt,{redirectToJobExplorer:function(t){n({"job-explorer.quick_date_range":"last_30_days","job-explorer.template_id":t})},data:W,setDataRunTime:function(t,e){var n=W.map((function(n){return n.id===e?(n.avgRunTime=t,vt([n],w,c)[0]):n}));Y(n)},setUnfilteredData:W,setEnabled:function(t){return function(e){Y(W.map((function(n){return n.id===t?ht(ht({},n),{},{enabled:e}):n})))}},sortBy:"".concat(O.sort_options,":").concat(O.sort_order)}))))))):null))};Et.propTypes={history:m().object};const xt=Et}}]);
//# sourceMappingURL=../sourcemaps/859.8537e8b8aac13d43c847.js.map