(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Cm42:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m})),a.d(t,"initalLoadOfData",(function(){return d})),a.d(t,"oppdaterDagligUtslipp",(function(){return p})),a.d(t,"updateUserGoal",(function(){return v}));var n=a("q1tI"),r=a.n(n),o=a("cWnB"),l=a("LbRr"),i=a("W/9C"),s=a("wd/R"),u=a.n(s),c=a("o0Dr");var f=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleOnSubmit=function(e){v(parseInt(a.state.dailyGoal)),e.preventDefault()},a.handleInputChange=function(e){a.setState({dailyGoal:e.target.value})},a.state={dailyGoal:JSON.parse(localStorage.getItem("userGoals")).dailyGoal},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{id:"divRundtForm"},r.a.createElement("form",{id:"updateDailyGoal",className:"form",onSubmit:this.handleOnSubmit},r.a.createElement("label",{id:"dailyGoalInput",htmlFor:"dailyGoal"},"Sett daglig mål:",r.a.createElement("input",{id:"dailyGoal",type:"number",name:"dailyGoal",value:this.state.dailyGoal,placeholder:"tall for daglig mål",onChange:this.handleInputChange})),r.a.createElement(o.a,{type:"submit"},"Endre!")))},n}(n.Component);function m(){return d(),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(l.a,{headerText:"Devpage"}),r.a.createElement(o.a,{onClick:p}," set ny emissionsPerDay"),r.a.createElement("p",null,"  "),r.a.createElement(o.a,{onClick:y}," set ny amountOfTrips"),r.a.createElement("p",null,"  "),r.a.createElement(o.a,{onClick:h}," set ny CO2SumTransportMeans"),r.a.createElement("p",null,"  "),r.a.createElement(o.a,{onClick:g}," kjør setInitialPersonlia"),r.a.createElement("p",null,"  "),r.a.createElement(f,null),r.a.createElement(i.a,null))}function d(){return null===localStorage.getItem("emissionsPerDay")&&p(),null===localStorage.getItem("amountOfTrips")&&y(),null===localStorage.getItem("CO2SumTransportMeans")&&h(),null===localStorage.getItem("userGoals")&&v(),null===localStorage.getItem("personlia")&&g(),null}function p(){var e=new Date("2020-01-01"),t=0,a={};e.setDate(e.getDate()-1);for(var n=0;n<366;n++)e.setDate(e.getDate()+1),t=Math.floor(11*Math.random()),a[Object(c.c)(new Date(e))]=t;localStorage.setItem("emissionsPerDay",JSON.stringify(a))}function y(){var e={walkTrips:Math.floor(21*Math.random()),bikeTrips:Math.floor(21*Math.random()),trainTrips:Math.floor(21*Math.random()),busTrips:Math.floor(21*Math.random()),carTrips:Math.floor(21*Math.random())};localStorage.setItem("amountOfTrips",JSON.stringify(e))}function h(){var e={walkEmission:Math.floor(101*Math.random()),bikeEmission:Math.floor(101*Math.random()),trainEmission:Math.floor(101*Math.random()),busEmission:Math.floor(101*Math.random()),carEmission:Math.floor(101*Math.random())};localStorage.setItem("CO2SumTransportMeans",JSON.stringify(e))}function v(e){var t={dailyGoal:0,weeklyGoal:0,monthlyGoal:0,yearlyGoal:0,totalGoal:0};t.dailyGoal=void 0!==e?e:7,t.weeklyGoal=7*t.dailyGoal,t.monthlyGoal=30*t.dailyGoal,t.yearlyGoal=365*t.dailyGoal;var a=JSON.parse(localStorage.getItem("personlia")),n=u()(new Date).diff(new Date(a.initialDate),"days");t.totalGoal=t.dailyGoal*(1+n),localStorage.setItem("userGoals",JSON.stringify(t))}function g(){var e={name:"Kari",middleName:"Kanari",lastName:"Nordmann",adress:"Hammerborgsgate 2, Oslo",email:"kari@email.com",initialDate:new Date("2020-01-01")};localStorage.setItem("personlia",JSON.stringify(e))}},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},Tze0:function(e,t,a){"use strict";a("qncB")("trim",(function(e){return function(){return e(this,3)}}))},cWnB:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),l=a.n(o),i=a("q1tI"),s=a.n(i),u=a("vUet");a("Tze0"),a("0l/t"),a("DNiP");var c=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)};function f(e){return!e||"#"===e.trim()}var m=s.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"a":a,l=e.disabled,i=e.onKeyDown,u=Object(r.a)(e,["as","disabled","onKeyDown"]),m=function(e){var t=u.href,a=u.onClick;(l||f(t))&&e.preventDefault(),l?e.stopPropagation():a&&a(e)};return f(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),l&&(u.tabIndex=-1,u["aria-disabled"]=!0),s.a.createElement(o,Object(n.a)({ref:t},u,{onClick:m,onKeyDown:c((function(e){" "===e.key&&(e.preventDefault(),m(e))}),i)}))}));m.displayName="SafeAnchor";var d=m,p=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.variant,i=e.size,c=e.active,f=e.className,m=e.block,p=e.type,y=e.as,h=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(u.a)(a,"btn"),g=l()(f,v,c&&"active",v+"-"+o,m&&v+"-block",i&&v+"-"+i);if(h.href)return s.a.createElement(d,Object(n.a)({},h,{as:y,ref:t,className:l()(g,h.disabled&&"disabled")}));t&&(h.ref=t),p?h.type=p:y||(h.type="button");var b=y||"button";return s.a.createElement(b,Object(n.a)({},h,{className:g}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=p},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("f3/d"),a("wx14");var n=a("q1tI"),r=a.n(n),o=r.a.createContext({});o.Consumer,o.Provider;function l(e,t){var a=Object(n.useContext)(o);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-dev-js-12bc429188708367bd65.js.map