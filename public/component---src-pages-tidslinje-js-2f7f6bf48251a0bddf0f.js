(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/e88":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},JwsL:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),i=(n("xfY5"),n("+ZDr")),o=n.n(i);n("lw3w"),n("emEt").default.enqueue;var l=n("X13+");function c(){return a.a.createElement("div",{id:"baren",style:u},a.a.createElement(s,{iconName:a.a.createElement(l.c,{size:30}),linkLink:"/"}),a.a.createElement(s,{iconName:a.a.createElement(l.b,{size:30}),linkLink:"/ruter"}),a.a.createElement(s,{iconName:a.a.createElement(l.e,{size:30}),linkLink:"/tidslinje"}),a.a.createElement(s,{iconName:a.a.createElement(l.d,{size:30}),linkLink:"/profil"}))}function s(t){return a.a.createElement("div",{style:d},a.a.createElement(o.a,{to:t.linkLink,activeStyle:f},t.iconName))}var u={position:"fixed",left:"0 auto",bottom:"0",width:"100%",backgroundColor:"#6F6F6F",height:"50px",padding:"20px 0px 0px 0px",maxWidth:"294px",display:"flex"},d={width:"25%",height:u.height,float:"left",textAlign:"center",verticalAlign:"middle",lineHeight:u.height},f={color:"#FFFFFF"}},LbRr:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r);function i(t){return a.a.createElement("div",{style:o},a.a.createElement("h1",null,t.headerText))}var o={maxWidth:"294px",margin:"0 auto",fontFamily:"Fremtind Grotesk Display",marginBottom:"0.5cm",marginTop:"2cm"}},Lnxd:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&(n[r[a]]=t[r[a]])}return n};function c(t){return function(e){return r.createElement(s,o({attr:o({},t.attr)},e),function t(e){return e&&e.map((function(e,n){return r.createElement(e.tag,o({key:n},e.attr),t(e.child))}))}(t.child))}}function s(t){var e=function(e){var n,a=t.size||e.size||"1em";e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className);var i=t.attr,c=t.title,s=l(t,["attr","title"]);return r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,s,{className:n,style:o({color:t.color||e.color},e.style,t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(a)}},TABs:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var r=n("q1tI"),a=n.n(r),i=n("LbRr"),o=n("JwsL");var l=n("X13+");function c(){return a.a.createElement("div",{id:"hovedkontainer",style:s},a.a.createElement(i.a,{headerText:"tidslinje"}),a.a.createElement("div",{id:"startsdato"}," Startdato nå: ",u),a.a.createElement("div",{id:"tidslinjeinfo"},"Noe mer info om tidslinjen her?"),a.a.createElement("div",{id:"tidslinjen",style:{height:E,position:"relative"}},a.a.createElement(d,null),a.a.createElement(f,null),a.a.createElement(g,null)),a.a.createElement(o.a,null))}var s={maxWidth:"294px",margin:"0 auto"},u="\t2020-06-05\t";function d(t){for(var e=[],n=0;n<v;n+=.1)e.push(a.a.createElement(p,null));return a.a.createElement("div",{id:"linjen",style:{float:"left",padding:"10px",width:"10px",height:e.length,backgroundColor:"black"}},e)}function f(t){for(var e=[[1,"Mengden CO2 du slipper ut ved å puste i ett døgn"],[30,"Tilsvarer en biltur mellom Hamar og Oslo"],[60,"Mengden CO2 absorbert av 200 epler"],[100,"Mengden CO2 sluppet ut av en vedsekk"],[900,"Den lagrede CO2en i et fullvoksent grantre med stamme, greiner og røtter"]],n=[],r=0,i=0,o=0;o<h.length&&(i+=h[o][1],!(e[0][0]>v));o++)i>e[0][0]&&(r=10*e[0][0],n.push(a.a.createElement(m,{yVerdi:r,boksTekst:e[0][1],CO2mengde:e[0][0],dagenPassert:o,datoPassert:h[o][0]})),e.shift());return a.a.createElement("div",{id:"faktaboksenesBoks",style:{position:"relative",float:"right",width:"90%",height:E,backgroundColor:"black"}},n)}function m(t){var e={position:"absolute",width:"80%",height:"80px",top:t.yVerdi};return a.a.createElement("div",{id:"faktaboks",style:e},a.a.createElement(l.a,null)," ",a.a.createElement("span",{style:{color:"orange",fontSize:"30px",fontWeight:"700"}},t.CO2mengde)," ",a.a.createElement("span",{style:{color:"orange"}},"kg"),a.a.createElement("div",{id:"tekstboks",style:{border:"1px solid green",width:"90%",padding:"10px"}},a.a.createElement("p",{style:{marginTop:"0",fontSize:"10px",fontWeight:"800"}}," Passert på dag ",t.dagenPassert,", som var ",t.datoPassert," "),a.a.createElement("p",{style:{marginBottom:"0",fontWeight:"300"}},t.boksTekst)))}function p(t){return a.a.createElement("div",{style:{backgroundColor:"green",width:"10px",height:"1px",float:"top"}})}function g(t){var e={position:"absolute",width:"80%",height:"auto",top:E-10,left:"30px"};return a.a.createElement("div",{style:e},a.a.createElement(l.a,null),a.a.createElement("span",{style:{fontSize:"30px",fontWeight:"700"}},v)," ",a.a.createElement("span",null,"kg"),a.a.createElement("p",{style:{marginTop:"0",marginBottom:"0",fontWeight:"300"}}," totalt sluppet ut gjennom reiser siden ",u))}var h=function(t,e){for(var n=0,r=0;r<t.length;r++)t[r][0]===e&&(n=r);return t.slice(n)}([["\t2020-06-01\t",1],["\t2020-06-02\t",2],["\t2020-06-03\t",3],["\t2020-06-04\t",4],["\t2020-06-05\t",5],["\t2020-06-06\t",6],["\t2020-06-07\t",7],["\t2020-06-08\t",8],["\t2020-06-09\t",9],["\t2020-06-10\t",10],["\t2020-06-11\t",11],["\t2020-06-12\t",12],["\t2020-06-13\t",13],["\t2020-06-14\t",14],["\t2020-06-15\t",15],["\t2020-06-16\t",16],["\t2020-06-17\t",17],["\t2020-06-18\t",18],["\t2020-06-19\t",19],["\t2020-06-20\t",20],["\t2020-06-21\t",21],["\t2020-06-22\t",22],["\t2020-06-23\t",23],["\t2020-06-24\t",24],["\t2020-06-25\t",25],["\t2020-06-26\t",26],["\t2020-06-27\t",27],["\t2020-06-28\t",28],["\t2020-06-29\t",29],["\t2020-06-30\t",30],["\t2020-07-01\t",31],["\t2020-07-02\t",32],["\t2020-07-03\t",33],["\t2020-07-04\t",34],["\t2020-07-05\t",35],["\t2020-07-06\t",36],["\t2020-07-07\t",37],["\t2020-07-08\t",38],["\t2020-07-09\t",39]],u),v=function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n][1];return e}(h),E=10*v},lw3w:function(t,e,n){var r;t.exports=(r=n("rzlk"))&&r.default||r},qncB:function(t,e,n){var r=n("XKFU"),a=n("vhPU"),i=n("eeVq"),o=n("/e88"),l="["+o+"]",c=RegExp("^"+l+l+"*"),s=RegExp(l+l+"*$"),u=function(t,e,n){var a={},l=i((function(){return!!o[t]()||"​"!="​"[t]()})),c=a[t]=l?e(d):o[t];n&&(a[n]=c),r(r.P+r.F*l,"String",a)},d=u.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(s,"")),t};t.exports=u},rzlk:function(t,e,n){"use strict";n.r(e);n("91GP");var r=n("q1tI"),a=n.n(r),i=n("IOVJ");e.default=function(t){var e=t.location,n=t.pageResources;return n?a.a.createElement(i.a,Object.assign({location:e,pageResources:n},n.json)):null}},xfY5:function(t,e,n){"use strict";var r=n("dyZX"),a=n("aagx"),i=n("LZWt"),o=n("Xbzi"),l=n("apmT"),c=n("eeVq"),s=n("kJMx").f,u=n("EemH").f,d=n("hswa").f,f=n("qncB").trim,m=r.Number,p=m,g=m.prototype,h="Number"==i(n("Kuth")(g)),v="trim"in String.prototype,E=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,a,i=(e=v?e.trim():f(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var o,c=e.slice(2),s=0,u=c.length;s<u;s++)if((o=c.charCodeAt(s))<48||o>a)return NaN;return parseInt(c,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(h?c((function(){g.valueOf.call(n)})):"Number"!=i(n))?o(new p(E(e)),n,m):E(e)};for(var k,x=n("nh4g")?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;x.length>y;y++)a(p,k=x[y])&&!a(m,k)&&d(m,k,u(p,k));m.prototype=g,g.constructor=m,n("KroJ")(r,"Number",m)}}}]);
//# sourceMappingURL=component---src-pages-tidslinje-js-2f7f6bf48251a0bddf0f.js.map