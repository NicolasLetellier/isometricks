(window.webpackJsonpisometricks=window.webpackJsonpisometricks||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/isometricks_logo.97a25612.svg"},,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),c=(n(11),n(5)),l=n(1),s=1;function u(e){return Math.sqrt(3)/2*e}function d(e,t,n){var a=u(e*s),o=u((e+1)*s),r=t*(s/2),i=t*(s/2)+s/2,c=t*(s/2)+s;return"left"===n?{topVertexCoord:[o,r],sideVertexCoord:[a,i],bottomVertexCoord:[o,c]}:"right"===n?{topVertexCoord:[a,r],sideVertexCoord:[o,i],bottomVertexCoord:[a,c]}:void 0}function m(e,t){var n=function(e,t){return e%2===t%2?"left":"right"}(e,t);return{orientation:n,coordinates:d(e,t,n)}}n(12);var p=function(e){var t=e.setGridDimensionsInTriangles,n=Object(a.useState)(!1),r=Object(l.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)(null),u=Object(l.a)(s,2),d=u[0],m=u[1];function p(){null!==d&&m(null),c(!1)}return o.a.createElement("div",{className:"grid-size-wrapper"},o.a.createElement("button",{type:"button",className:"grid-size toolbar-btn ".concat(i&&"active"),onClick:function(){!1===i?c(!0):p()}},o.a.createElement("svg",{viewBox:"0 0 42 47.75"},o.a.createElement("path",{d:"m 40,47.75 c 1.104,0 2,-0.896 2,-2 v -24 c 0,-0.53 -0.211,-1.039 -0.586,-1.414 l -8,-8 C 33.039,11.961 32.53,11.75 32,11.75 H 14 c -1.104,0 -2,0.896 -2,2 v 32 c 0,1.104 0.896,2 2,2 z m -3.829,-27 H 32 V 16.579 Z M 16,15.75 h 12 v 7 c 0,1.104 0.896,2 2,2 h 8 v 19 H 16 Z"}),o.a.createElement("path",{d:"m 38,6 c 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2 V 2 C 42,0.896 41.104,0 40,0 38.896,0 38,0.896 38,2 H 16 C 16,0.896 15.104,0 14,0 12.896,0 12,0.896 12,2 v 4 c 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2"}),o.a.createElement("path",{d:"m 0,45.75 c 0,1.104 0.896,2 2,2 h 4 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 v -28 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 H 2 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 v 28 c -1.104,0 -2,0.896 -2,2 z"}))),i&&o.a.createElement("div",{className:"grid-size-dropdown"},o.a.createElement("p",null,"Select a size for a new ",o.a.createElement("strong",null,"empty")," grid:"),o.a.createElement("div",{className:"radio-component"},o.a.createElement("input",{id:"mobile-size",type:"radio",name:"size",onClick:function(){return m({width:15,height:33})}}),o.a.createElement("label",{htmlFor:"mobile-size"},"for mobile phone (15 x 33)")),o.a.createElement("div",{className:"radio-component"},o.a.createElement("input",{id:"desktop-size",type:"radio",name:"size",onClick:function(){return m({width:45,height:35})}}),o.a.createElement("label",{htmlFor:"desktop-size"},"for desktop (45 x 35)")),o.a.createElement("button",{type:"button",className:"apply-grid-size dialog-btn",disabled:null===d,onClick:function(){return null!==d&&(t(d),m(null)),void c(!1)}},"Apply"),o.a.createElement("button",{type:"button",className:"close-grid-size dialog-btn",onClick:function(){return p()}},"Close")))};n(13);var h=function(e){var t=e.activeFace,n=e.setActiveFace,a=e.backwardInHistory,r=e.forwardInHistory,i=e.setGridDimensionsInTriangles;return o.a.createElement("div",{className:"Toolbar"},o.a.createElement("div",{className:"left-buttons"},o.a.createElement(p,{setGridDimensionsInTriangles:i})),o.a.createElement("div",{className:"center-buttons"},o.a.createElement("button",{type:"button",className:"left toolbar-btn ".concat("left"===t&&"active"),onClick:function(){return n("left")}},o.a.createElement("svg",{viewBox:"0 0 0.8660 1.5"},o.a.createElement("polygon",{points:"0,0 0.8660,0.5 0.8660,1.5 0,1"}))),o.a.createElement("button",{type:"button",className:"top toolbar-btn ".concat("top"===t&&"active"),onClick:function(){return n("top")}},o.a.createElement("svg",{viewBox:"0 0 1.7321 1"},o.a.createElement("polygon",{points:"0.8660,0 1.7321,0.5 0.8660,1 0,0.5"}))),o.a.createElement("button",{type:"button",className:"right toolbar-btn ".concat("right"===t&&"active"),onClick:function(){return n("right")}},o.a.createElement("svg",{viewBox:"0 0 0.8660 1.5"},o.a.createElement("polygon",{points:"0.8660,0 0.8660,1 0,1.5 0,0.5"})))),o.a.createElement("div",{className:"right-buttons"},o.a.createElement("button",{type:"button",className:"backward toolbar-btn",disabled:null===a,onClick:a},o.a.createElement("svg",{viewBox:"0 0 454.839 454.839"},o.a.createElement("path",{d:"M404.908,283.853c0,94.282-76.71,170.986-170.986,170.986h-60.526c-10.03,0-18.158-8.127-18.158-18.157v-6.053c0-10.031,8.127-18.158,18.158-18.158h60.526c70.917,0,128.618-57.701,128.618-128.618c0-70.917-57.701-128.618-128.618-128.618H122.255l76.905,76.905c8.26,8.257,8.26,21.699,0,29.956c-8.015,8.009-21.964,7.997-29.961,0L56.137,149.031c-4.001-4.001-6.206-9.321-6.206-14.981c0-5.656,2.205-10.979,6.206-14.978L169.205,6.002c7.997-8.003,21.958-8.003,29.956,0c8.26,8.255,8.26,21.699,0,29.953l-76.905,76.911h111.666C328.198,112.866,404.908,189.573,404.908,283.853z"}))),o.a.createElement("button",{type:"button",className:"forward toolbar-btn",disabled:null===r,onClick:r},o.a.createElement("svg",{viewBox:"0 0 454.839 454.839"},o.a.createElement("g",{transform:"rotate(-180 227.41949462890625,227.45840454101562)"},o.a.createElement("path",{d:"m404.908004,170.994574c0,-94.332459 -76.709999,-171.07751 -170.985997,-171.07751l-60.525999,0c-10.03,0 -18.158,8.13135 -18.158,18.166717l0,6.05624c0,10.036369 8.127,18.167718 18.158,18.167718l60.525999,0c70.916999,0 128.617998,57.731881 128.617998,128.686835c0,70.954954 -57.700999,128.686835 -128.617998,128.686835l-111.666998,0l76.904999,-76.946159c8.26,-8.261419 8.26,-21.710613 0,-29.972032c-8.015,-8.013286 -21.964,-8.00128 -29.960999,0l-113.061998,113.125512c-4.001,4.003141 -6.206,9.325989 -6.206,14.989018c0,5.659027 2.205,10.984876 6.206,14.986016l113.067998,113.130514c7.997,8.007283 21.958,8.007283 29.955999,0c8.26,-8.259418 8.26,-21.710613 0,-29.969031l-76.904999,-76.952162l111.665998,0c94.275998,0 170.985997,-76.748053 170.985997,-171.078511z"}))))))};n(14);var f=function(e){for(var t=e.presentation,n=e.gridDimensionsInTriangles,a=e.trianglesMap,r=e.triangleClickHandler,i=[],c=function(e){for(var c=function(n){var c=a[e][n],l=c.orientation,s=c.coordinates,u=s.topVertexCoord,d=s.sideVertexCoord,m=s.bottomVertexCoord;i.push(o.a.createElement("polygon",{key:"".concat(e,",").concat(n),points:"".concat(u[0],",").concat(u[1]," ").concat(d[0],",").concat(d[1]," ").concat(m[0],",").concat(m[1]),"data-orientation":l,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,onClick:r&&function(){return r({x:e,y:n},c)}}))},l=0;l<n.height;l++)c(l)},l=0;l<n.width;l++)c(l);return o.a.createElement("g",{className:"TrianglesGrid"},i)};n(15);var v=function(e){var t,n,a=e.gridDimensionsInTriangles,r=e.trianglesMap,i=e.triangleClickHandler,c=e.polygonStack,l=(t=a.width,n=a.height,{width:t*u(s),height:(n-1)*s/2+s}),d=[];return c.forEach((function(e,t){var n=e.points.reduce((function(e,t){return e+"".concat(t[0],",").concat(t[1]," ")}),"");d.push(o.a.createElement("polygon",{key:t,points:n,stroke:"none",fill:e.fill}))})),o.a.createElement("div",{className:"Frame"},o.a.createElement("svg",{className:"Frame-svg",viewBox:"0 0 ".concat(l.width," ").concat(l.height),preserveAspectRatio:"xMidYMin"},o.a.createElement("rect",{x:"0",y:"0",width:l.width,height:l.height,className:"Frame-background",stroke:"none",fill:"white"}),o.a.createElement(f,{presentation:{stroke:"silver",strokeWidth:"0.01",fill:"transparent"},gridDimensionsInTriangles:a,trianglesMap:r}),d,o.a.createElement(f,{presentation:{stroke:"none",fill:"transparent"},gridDimensionsInTriangles:a,trianglesMap:r,triangleClickHandler:i})))},g=(n(16),{width:15,height:33});var b=function(){var e=Object(a.useState)(g),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)("left"),s=Object(l.a)(i,2),u=s[0],d=s[1],p=Object(a.useState)([[]]),f=Object(l.a)(p,2),b=f[0],E=f[1],C=Object(a.useState)(null),k=Object(l.a)(C,2),x=k[0],w=k[1],y=b.length-1;function V(){return null===x?y:x}var N=function(e,t){for(var n=[],a=0;a<e;a++){n[a]=[];for(var o=0;o<t;o++)n[a][o]=m(a,o)}return n}(n.width,n.height);function z(){w(null===x?y-1:x-1)}function H(){w(x===y-1?null:x+1)}function I(e){var t=function(e,t){for(var n=Object(c.a)(e),a=t.points.flat().toString(),o=0;o<n.length;o++){if(n[o].points.flat().toString()===a){n.splice(o,1);break}}return n.concat(t)}(b[V()],e),n=b.slice(0,V()+1);n.push(t),E(n),w(null)}return o.a.createElement("div",{className:"Editor"},o.a.createElement(h,{activeFace:u,setActiveFace:d,backwardInHistory:0===y||0===x?null:z,forwardInHistory:null===x?null:H,setGridDimensionsInTriangles:r}),o.a.createElement(v,{gridDimensionsInTriangles:n,trianglesMap:N,triangleClickHandler:function(e,t){if(null!==u){var n,a=function(e,t,n,a){var o=t.orientation,r=t.coordinates,i=[];if("left"===a||"right"===a)if(o===a){var c=n[e.x][e.y-1];if(void 0===c)return;var l=c.coordinates;i.push(l.topVertexCoord),i.push(r.topVertexCoord),i.push(r.bottomVertexCoord),i.push(r.sideVertexCoord)}else{var s=n[e.x][e.y+1];if(void 0===s)return;var u=s.coordinates;i.push(r.topVertexCoord),i.push(r.sideVertexCoord),i.push(u.bottomVertexCoord),i.push(r.bottomVertexCoord)}else if("top"===a)if("left"===o){var d=n[e.x+1];if(void 0===d)return;var m=d[e.y].coordinates;i.push(r.topVertexCoord),i.push(m.sideVertexCoord),i.push(r.bottomVertexCoord),i.push(r.sideVertexCoord)}else if("right"===o){var p=n[e.x-1];if(void 0===p)return;var h=p[e.y].coordinates;i.push(r.topVertexCoord),i.push(r.sideVertexCoord),i.push(r.bottomVertexCoord),i.push(h.sideVertexCoord)}return i}(e,t,N,u);if(void 0!==a)"top"===u?n="lightskyblue":"right"===u?n="mediumblue":"left"===u&&(n="royalblue"),I({type:"face",points:a,fill:n})}},polygonStack:b[V()]}))},E=n(4),C=n.n(E);n(17);var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:C.a,className:"App-logo",alt:"logo"})),o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.d804467d.chunk.js.map