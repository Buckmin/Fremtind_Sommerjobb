(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{"9upH":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var n=a("Cm42"),r=a("o0Dr");function l(){var e=[],t={};for(var a in null!=localStorage.getItem("emissionsPerDay")||Object(n.oppdaterDagligUtslipp)(),t=JSON.parse(localStorage.getItem("emissionsPerDay")))e.push([a,t[a]]);return e}function i(e,t){for(var a=Object(r.a)(e,t),n=0,l=new Date(e),i=JSON.parse(localStorage.getItem("emissionsPerDay")),o=-1;o<a;o++)l.setDate(l.getDate()+1),n+=i[Object(r.c)(l)];return n}},Cm42:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d})),a.d(t,"initalLoadOfData",(function(){return p})),a.d(t,"oppdaterDagligUtslipp",(function(){return f})),a.d(t,"updateUserGoal",(function(){return h}));var n=a("q1tI"),r=a.n(n),l=a("cWnB"),i=a("LbRr"),o=a("W/9C"),s=a("wd/R"),c=a.n(s),u=a("o0Dr");var m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleOnSubmit=function(e){h(parseInt(a.state.dailyGoal)),e.preventDefault()},a.handleInputChange=function(e){a.setState({dailyGoal:e.target.value})},a.state={dailyGoal:JSON.parse(localStorage.getItem("userGoals")).dailyGoal},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{id:"divRundtForm"},r.a.createElement("form",{id:"updateDailyGoal",className:"form",onSubmit:this.handleOnSubmit},r.a.createElement("label",{id:"dailyGoalInput",htmlFor:"dailyGoal"},"Sett daglig mål:",r.a.createElement("input",{id:"dailyGoal",type:"number",name:"dailyGoal",value:this.state.dailyGoal,placeholder:"tall for daglig mål",onChange:this.handleInputChange})),r.a.createElement(l.a,{type:"submit"},"Endre!")))},n}(n.Component);function d(){return p(),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(i.a,{headerText:"Devpage"}),r.a.createElement(l.a,{onClick:f}," set ny emissionsPerDay"),r.a.createElement("p",null,"  "),r.a.createElement(l.a,{onClick:v}," set ny amountOfTrips"),r.a.createElement("p",null,"  "),r.a.createElement(l.a,{onClick:g}," set ny CO2SumTransportMeans"),r.a.createElement("p",null,"  "),r.a.createElement(l.a,{onClick:b}," kjør setInitialPersonlia"),r.a.createElement("p",null,"  "),r.a.createElement(m,null),r.a.createElement(o.a,null))}function p(){return null===localStorage.getItem("emissionsPerDay")&&f(),null===localStorage.getItem("amountOfTrips")&&v(),null===localStorage.getItem("CO2SumTransportMeans")&&g(),null===localStorage.getItem("userGoals")&&h(),null===localStorage.getItem("personlia")&&b(),null}function f(){var e=new Date("2020-01-01"),t=0,a={};e.setDate(e.getDate()-1);for(var n=0;n<366;n++)e.setDate(e.getDate()+1),t=Math.floor(11*Math.random()),a[Object(u.c)(new Date(e))]=t;localStorage.setItem("emissionsPerDay",JSON.stringify(a))}function v(){var e={walkTrips:Math.floor(21*Math.random()),bikeTrips:Math.floor(21*Math.random()),trainTrips:Math.floor(21*Math.random()),busTrips:Math.floor(21*Math.random()),carTrips:Math.floor(21*Math.random())};localStorage.setItem("amountOfTrips",JSON.stringify(e))}function g(){var e={walkEmission:Math.floor(101*Math.random()),bikeEmission:Math.floor(101*Math.random()),trainEmission:Math.floor(101*Math.random()),busEmission:Math.floor(101*Math.random()),carEmission:Math.floor(101*Math.random())};localStorage.setItem("CO2SumTransportMeans",JSON.stringify(e))}function h(e){var t={dailyGoal:0,weeklyGoal:0,monthlyGoal:0,yearlyGoal:0,totalGoal:0};t.dailyGoal=void 0!==e?e:7,t.weeklyGoal=7*t.dailyGoal,t.monthlyGoal=30*t.dailyGoal,t.yearlyGoal=365*t.dailyGoal;var a=JSON.parse(localStorage.getItem("personlia")),n=c()(new Date).diff(new Date(a.initialDate),"days");t.totalGoal=t.dailyGoal*(1+n),localStorage.setItem("userGoals",JSON.stringify(t))}function b(){var e={name:"Kari",middleName:"Kanari",lastName:"Nordmann",adress:"Hammerborgsgate 2, Oslo",email:"kari@email.com",initialDate:new Date("2020-01-01")};localStorage.setItem("personlia",JSON.stringify(e))}},K0Db:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return q}));var n=a("q1tI"),r=a.n(n),l=a("LbRr");function i(){return r.a.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}var o=a("W/9C"),s=(a("K0Db"),a("f3/d"),a("8+KV"),a("wx14")),c=a("zLVn"),u=a("TSYQ"),m=a.n(u),d=a("vUet");a("bWfx");function p(e,t,a){var n=(e-t)/(a-t)*100;return Math.round(1e3*n)/1e3}function f(e,t){var a,n=e.min,l=e.now,i=e.max,o=e.label,u=e.srOnly,d=e.striped,f=e.animated,v=e.className,g=e.style,h=e.variant,b=e.bsPrefix,y=Object(c.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return r.a.createElement("div",Object(s.a)({ref:t},y,{role:"progressbar",className:m()(v,b+"-bar",(a={},a["bg-"+h]=h,a[b+"-bar-animated"]=f,a[b+"-bar-striped"]=f||d,a)),style:Object(s.a)({width:p(l,n,i)+"%"},g),"aria-valuenow":l,"aria-valuemin":n,"aria-valuemax":i}),u?r.a.createElement("span",{className:"sr-only"},o):o)}var v=r.a.forwardRef((function(e,t){var a=e.isChild,l=Object(c.a)(e,["isChild"]);if(l.bsPrefix=Object(d.a)(l.bsPrefix,"progress"),a)return f(l,t);var i=l.min,o=l.now,u=l.max,p=l.label,v=l.srOnly,g=l.striped,h=l.animated,b=l.bsPrefix,y=l.variant,E=l.className,O=l.children,k=Object(c.a)(l,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return r.a.createElement("div",Object(s.a)({ref:t},k,{className:m()(E,b)}),O?function(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}(O,(function(e){return Object(n.cloneElement)(e,{isChild:!0})})):f({min:i,now:o,max:u,label:p,srOnly:v,striped:g,animated:h,bsPrefix:b,variant:y},t))}));v.displayName="ProgressBar",v.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var g=v,h=a("NIcq");a("q4sD"),a("uS5m");function b(){var e=JSON.parse(localStorage.getItem("CO2SumTransportMeans")),t=e.walkEmission,a=e.bikeEmission,n=e.trainEmission,l=e.busEmission,i=e.carEmission,o=t+a+i+l+n;return r.a.createElement("div",{id:"theProgressBars",className:"div__theProgressBars"},r.a.createElement(y,{id:"walk",IconName:r.a.createElement(h.d,{size:24}),CO2number:t,sumEmissions:o}),r.a.createElement(y,{id:"bike",IconName:r.a.createElement(h.a,{size:24}),CO2number:a,sumEmissions:o}),r.a.createElement(y,{id:"train",IconName:r.a.createElement(h.e,{size:24}),CO2number:n,sumEmissions:o}),r.a.createElement(y,{id:"bus",IconName:r.a.createElement(h.b,{size:24}),CO2number:l,sumEmissions:o}),r.a.createElement(y,{id:"car",IconName:r.a.createElement(h.c,{size:24}),CO2number:i,sumEmissions:o}))}function y(e){var t=(e.CO2number/e.sumEmissions*100).toFixed(1);return r.a.createElement("div",{id:"enBarMedIkonOgTekst",className:"div__enBarMedIkonOgTekst"},e.IconName,r.a.createElement("span",{className:"span__tekstOverBaren"}," ",e.CO2number," kg "),r.a.createElement("div",{id:"bareBaren",className:"div__bareBaren"},r.a.createElement(g,{animated:!0,striped:!0,variant:"info",now:t})))}function E(){var e=JSON.parse(localStorage.getItem("amountOfTrips")),t=e.walkTrips,a=e.bikeTrips,n=e.trainTrips,l=e.busTrips,i=e.carTrips,o=t+a+n+l+i;return r.a.createElement("div",{id:"theProgressBars",className:"div__theProgressBarsPercent"},r.a.createElement(O,{id:"walk",IconName:r.a.createElement(h.d,{size:24}),antallTrips:t,sumTrips:o}),r.a.createElement(O,{id:"bike",IconName:r.a.createElement(h.a,{size:24}),antallTrips:a,sumTrips:o}),r.a.createElement(O,{id:"train",IconName:r.a.createElement(h.e,{size:24}),antallTrips:n,sumTrips:o}),r.a.createElement(O,{id:"bus",IconName:r.a.createElement(h.b,{size:24}),antallTrips:l,sumTrips:o}),r.a.createElement(O,{id:"car",IconName:r.a.createElement(h.c,{size:24}),antallTrips:i,sumTrips:o}))}function O(e){var t=(e.antallTrips/e.sumTrips*100).toFixed(1),a=350*t/100;a>260&&(a=260);var n={width:90,left:a,position:"relative"};return r.a.createElement("div",{id:"enBarMedIkonOgTekst",className:"div__enBarMedIkonOgTekst"},r.a.createElement("div",{id:"boksRundtBevegelig",style:{width:"100%"}},r.a.createElement("div",{id:"bevegendeIkonOgTekst",className:"div__bevegendeIkonOgTekst",style:n},e.IconName," ",r.a.createElement("span",null," ",t," % "))),r.a.createElement(g,{animated:!0,variant:"success",now:t}))}var k=a("Wbzz"),C=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("ioFf"),a("V+eJ"),a("91GP"),a("hHhE"),a("/SS/"),function(e,t){return(C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)});var N=function(){return(N=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function w(e){var t=e.className,a=e.counterClockwise,r=e.dashRatio,l=e.pathRadius,i=e.strokeWidth,o=e.style;return Object(n.createElement)("path",{className:t,style:Object.assign({},o,x({pathRadius:l,dashRatio:r,counterClockwise:a})),d:j({pathRadius:l,counterClockwise:a}),strokeWidth:i,fillOpacity:0})}function j(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function x(e){var t=e.counterClockwise,a=e.dashRatio,n=e.pathRadius,r=2*Math.PI*n,l=(1-a)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-l:l)+"px"}}var S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}C(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,a),n)-a)/(n-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,r=e.classes,l=e.counterClockwise,i=e.styles,o=e.strokeWidth,s=e.text,c=this.getPathRadius(),u=this.getPathRatio();return Object(n.createElement)("svg",{className:r.root+" "+a,style:i.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?Object(n.createElement)("circle",{className:r.background,style:i.background,cx:50,cy:50,r:50}):null,Object(n.createElement)(w,{className:r.trail,counterClockwise:l,dashRatio:t,pathRadius:c,strokeWidth:o,style:i.trail}),Object(n.createElement)(w,{className:r.path,counterClockwise:l,dashRatio:u*t,pathRadius:c,strokeWidth:o,style:i.path}),s?Object(n.createElement)("text",{className:r.text,style:i.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);function P(e){e.children;var t=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a}(e,["children"]);return Object(n.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren"},Object(n.createElement)("div",{style:{position:"relative",width:"100%",height:"100%"}},Object(n.createElement)(S,N({},t)),e.children?Object(n.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren__children",style:{position:"absolute",width:"100%",height:"100%",marginTop:"-100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.children):null))}function D(e){return Object.keys(e).forEach((function(t){null==e[t]&&delete e[t]})),e}a("lIpO");var T=a("X13+");a("sotj");function I(e){var t,a,n,l,i,o,s,c,u,m,d,p,f=e.totalEmission,v=e.userGoalTotCO2,g=f.toFixed(1);return r.a.createElement("div",{id:"heleDivRundtHjulet",className:"div__heleDivRundtHjulet"},r.a.createElement("p",null,"Mitt CO2-utslipp"),r.a.createElement("div",{id:"rundtHjulet",className:"div__rundtHjulet"},r.a.createElement(P,{value:100*f/v,styles:(t={pathColor:f>v?"#90352f":"#50E68C",textColor:"#000000"},a=t.rotation,n=t.strokeLinecap,l=t.textColor,i=t.textSize,o=t.pathColor,s=t.pathTransition,c=t.pathTransitionDuration,u=t.trailColor,m=t.backgroundColor,d=null==a?void 0:"rotate("+a+"turn)",p=null==a?void 0:"center center",{root:{},path:D({stroke:o,strokeLinecap:n,transform:d,transformOrigin:p,transition:s,transitionDuration:null==c?void 0:c+"s"}),trail:D({stroke:u,strokeLinecap:n,transform:d,transformOrigin:p}),text:D({fill:l,fontSize:i}),background:D({fill:m})})},r.a.createElement("div",null,r.a.createElement("span",{style:{fontSize:[20,20,20,80,70,60,50,40,30,20][g.length],fontWeight:200}},g),r.a.createElement("p",{style:{marginTop:0,marginBottom:0}},"kg")))),r.a.createElement("p",null,"av ",v,"kg  ",r.a.createElement(M,null)))}function M(){return r.a.createElement(k.a,{to:"/dev",style:{color:"#000AFA"}},r.a.createElement(T.g,null))}var G=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.size,l=e.toggle,i=e.vertical,o=e.className,u=e.as,p=void 0===u?"div":u,f=Object(c.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),v=Object(d.a)(a,"btn-group"),g=v;return i&&(g=v+"-vertical"),r.a.createElement(p,Object(s.a)({},f,{ref:t,className:m()(o,g,n&&v+"-"+n,l&&v+"-toggle")}))}));G.displayName="ButtonGroup",G.defaultProps={vertical:!1,toggle:!1,role:"group"};var R=G,_=a("cWnB"),z=function(){},B=r.a.forwardRef((function(e,t){var a=e.children,l=e.name,i=e.className,o=e.checked,u=e.type,d=e.onChange,p=e.value,f=e.disabled,v=e.inputRef,g=Object(c.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),h=Object(n.useState)(!1),b=h[0],y=h[1],E=Object(n.useCallback)((function(e){"INPUT"===e.target.tagName&&y(!0)}),[]),O=Object(n.useCallback)((function(e){"INPUT"===e.target.tagName&&y(!1)}),[]);return r.a.createElement(_.a,Object(s.a)({},g,{ref:t,className:m()(i,b&&"focus",f&&"disabled"),type:void 0,active:!!o,as:"label"}),r.a.createElement("input",{name:l,type:u,value:p,ref:v,autoComplete:"off",checked:!!o,disabled:!!f,onFocus:E,onBlur:O,onChange:d||z}),a)}));B.displayName="ToggleButton";var W=B;function U(e){var t=e.periodeDUMÅ,a=e.onChange;return r.a.createElement("div",{id:"knappene",style:{textAlign:"center"}},r.a.createElement("br",null),r.a.createElement(R,{toggle:!0},[{name:"Dag",value:"Dag"},{name:"Uke",value:"Uke"},{name:"Måned",value:"Måned"},{name:"År",value:"År"}].map((function(e,n){return r.a.createElement(W,{key:n,type:"radio",variant:t===e.value?"dark":"secondary",name:"radio",value:e.value,checked:t===e.value,onChange:a},e.name)}))),r.a.createElement("br",null))}function J(e){var t=e.periodeDUM,a=e.onChange;return r.a.createElement("div",{id:"knappene",style:{textAlign:"center"}},r.a.createElement("br",null),r.a.createElement(R,{toggle:!0},[{name:"Dag",value:"Dag"},{name:"Uke",value:"Uke"},{name:"Måned",value:"Måned"}].map((function(e,n){return r.a.createElement(W,{key:n,type:"radio",variant:t===e.value?"dark":"secondary",name:"radio",value:e.value,checked:t===e.value,onChange:a},e.name)}))),r.a.createElement("br",null))}function A(e){var t=e.middel,a=e.onChange,n=[{name:r.a.createElement(h.d,{size:20}),value:"Gå"},{name:r.a.createElement(h.a,{size:20}),value:"Sykkel"},{name:r.a.createElement(h.e,{size:20}),value:"Tog"},{name:r.a.createElement(h.b,{size:20}),value:"Buss"},{name:r.a.createElement(h.c,{size:20}),value:"Bil"}];return r.a.createElement("div",{id:"knappene",style:{textAlign:"center"}},r.a.createElement("br",null),r.a.createElement(R,{toggle:!0},n.map((function(e,n){return r.a.createElement(W,{key:n,type:"radio",variant:t===e.value?"dark":"secondary",name:"radio",value:e.value,checked:t===e.value,onChange:a},e.name)}))),r.a.createElement("br",null))}function F(e){var t=e.sortering,a=e.onChange;return r.a.createElement("div",{id:"knappene",style:{textAlign:"center"}},r.a.createElement("br",null),r.a.createElement(R,{toggle:!0},[{name:"Nylig",value:"Nylig"},{name:"Mest Reist",value:"Mest Reist"},{name:"Favoritter",value:"Favoritter"}].map((function(e,n){return r.a.createElement(W,{key:n,type:"radio",variant:t===e.value?"dark":"secondary",name:"radio",value:e.value,checked:t===e.value,onChange:a},e.name)}))),r.a.createElement("br",null))}var L=a("Cm42"),V=a("9upH");function q(){Object(L.initalLoadOfData)();var e=Object(n.useState)("undefined"),t=e[0],a=e[1];Object(n.useEffect)((function(){a(JSON.parse(localStorage.getItem("userGoals")))}),[]);var s=t.totalGoal,c=Object(V.b)(new Date("2020-01-01"),new Date),u=Object(n.useState)("Dag"),m=u[0],d=u[1],p=Object(n.useState)("Dag"),f=p[0],v=p[1],g=Object(n.useState)("Gå"),h=g[0],y=g[1],O=Object(n.useState)("Nylig"),k=O[0],C=O[1];return r.a.createElement("div",{id:"hovedkontainer",className:"div__hovedStyle"},r.a.createElement(l.a,{headerText:"headeren vår"}),r.a.createElement("div",null,"Hello world!"),r.a.createElement(F,{sortering:k,onChange:function(e){return C(e.currentTarget.value)}}),r.a.createElement("h5",null,"Fremkomstmiddel valgt: ",k," "),r.a.createElement(A,{middel:h,onChange:function(e){return y(e.currentTarget.value)}}),r.a.createElement("h5",null,"Fremkomstmiddel valgt: ",h," "),r.a.createElement(U,{"periodeDUMÅ":m,onChange:function(e){return d(e.currentTarget.value)}})," ",r.a.createElement("h5",null,"periode valgt: ",m),r.a.createElement(J,{periodeDUM:f,onChange:function(e){return v(e.currentTarget.value)}})," ",r.a.createElement("h5",null,"periode valgt: ",f),r.a.createElement(I,{totalEmission:c,userGoalTotCO2:s}),r.a.createElement(b,null),r.a.createElement(i,null),r.a.createElement(E,null),r.a.createElement(o.a,null))}},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},Tze0:function(e,t,a){"use strict";a("qncB")("trim",(function(e){return function(){return e(this,3)}}))},cWnB:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),l=a("TSYQ"),i=a.n(l),o=a("q1tI"),s=a.n(o),c=a("vUet");a("Tze0"),a("0l/t"),a("DNiP");var u=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)};function m(e){return!e||"#"===e.trim()}var d=s.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"a":a,i=e.disabled,o=e.onKeyDown,c=Object(r.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=c.href,a=c.onClick;(i||m(t))&&e.preventDefault(),i?e.stopPropagation():a&&a(e)};return m(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),i&&(c.tabIndex=-1,c["aria-disabled"]=!0),s.a.createElement(l,Object(n.a)({ref:t},c,{onClick:d,onKeyDown:u((function(e){" "===e.key&&(e.preventDefault(),d(e))}),o)}))}));d.displayName="SafeAnchor";var p=d,f=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.variant,o=e.size,u=e.active,m=e.className,d=e.block,f=e.type,v=e.as,g=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(c.a)(a,"btn"),b=i()(m,h,u&&"active",h+"-"+l,d&&h+"-block",o&&h+"-"+o);if(g.href)return s.a.createElement(p,Object(n.a)({},g,{as:v,ref:t,className:i()(b,g.disabled&&"disabled")}));t&&(g.ref=t),f?g.type=f:v||(g.type="button");var y=v||"button";return s.a.createElement(y,Object(n.a)({},g,{className:b}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=f},lIpO:function(e,t,a){},q4sD:function(e,t,a){},sotj:function(e,t,a){},uS5m:function(e,t,a){},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("f3/d"),a("wx14");var n=a("q1tI"),r=a.n(n),l=r.a.createContext({});l.Consumer,l.Provider;function i(e,t){var a=Object(n.useContext)(l);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-index-js-722772d42c45c693c5ca.js.map