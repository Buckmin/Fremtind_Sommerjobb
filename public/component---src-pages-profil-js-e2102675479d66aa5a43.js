(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},JwsL:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),i=(n("xfY5"),n("+ZDr")),o=n.n(i);n("lw3w"),n("emEt").default.enqueue;var c=n("X13+");function l(){return a.a.createElement("div",{id:"baren",style:s},a.a.createElement(u,{iconName:a.a.createElement(c.c,{size:30}),linkLink:"/"}),a.a.createElement(u,{iconName:a.a.createElement(c.b,{size:30}),linkLink:"/ruter"}),a.a.createElement(u,{iconName:a.a.createElement(c.e,{size:30}),linkLink:"/tidslinje"}),a.a.createElement(u,{iconName:a.a.createElement(c.d,{size:30}),linkLink:"/profil"}))}function u(e){return a.a.createElement("div",{style:f},a.a.createElement(o.a,{to:e.linkLink,activeStyle:m},e.iconName))}var s={position:"fixed",left:"0",bottom:"0",width:"100%",backgroundColor:"#6F6F6F",height:"50px",padding:"20px 0px 0px 0px",maxWidth:"500px"},f={width:"25%",height:s.height,float:"left",textAlign:"center",verticalAlign:"middle",lineHeight:s.height},m={color:"#FFFFFF"}},LbRr:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r);function i(e){return a.a.createElement("div",{style:o},a.a.createElement("h1",null,e.headerText))}var o={maxWidth:"500px",margin:"0 auto",fontFamily:"Fremtind Grotesk Display",marginBottom:"0.5cm",marginTop:"2cm"}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function l(e){return function(t){return r.createElement(u,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,l=e.title,u=c(e,["attr","title"]);return r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:n,style:o({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},ecdP:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("q1tI"),a=n.n(r),i=n("LbRr"),o=n("JwsL");function c(){return a.a.createElement("div",{id:"hovedkontainer",style:l},a.a.createElement(i.a,{headerText:"profil"}),a.a.createElement(o.a,null))}var l={maxWidth:"500px",margin:"0 auto"}},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},qncB:function(e,t,n){var r=n("XKFU"),a=n("vhPU"),i=n("eeVq"),o=n("/e88"),c="["+o+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),s=function(e,t,n){var a={},c=i((function(){return!!o[e]()||"​"!="​"[e]()})),l=a[e]=c?t(f):o[e];n&&(a[n]=l),r(r.P+r.F*c,"String",a)},f=s.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=s},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),i=n("LZWt"),o=n("Xbzi"),c=n("apmT"),l=n("eeVq"),u=n("kJMx").f,s=n("EemH").f,f=n("hswa").f,m=n("qncB").trim,d=r.Number,p=d,h=d.prototype,v="Number"==i(n("Kuth")(h)),g="trim"in String.prototype,E=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=g?t.trim():m(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,l=t.slice(2),u=0,s=l.length;u<s;u++)if((o=l.charCodeAt(u))<48||o>a)return NaN;return parseInt(l,r)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(v?l((function(){h.valueOf.call(n)})):"Number"!=i(n))?o(new p(E(t)),n,d):E(t)};for(var N,x=n("nh4g")?u(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;x.length>y;y++)a(p,N=x[y])&&!a(d,N)&&f(d,N,s(p,N));d.prototype=h,h.constructor=d,n("KroJ")(r,"Number",d)}}}]);
//# sourceMappingURL=component---src-pages-profil-js-e2102675479d66aa5a43.js.map