(this.webpackJsonpisometricks=this.webpackJsonpisometricks||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/isometricks_logo.97a25612.svg"},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/close.78109d26.svg"},,,function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(21),l=a.n(c),r=(a(31),a(10)),i=a(1),s=a(25),u=a(16),d=a(3),m=a(22);function g(e){return Math.sqrt(3)/2*e}var h=g(1);function p(e,t){return e%2===t%2?"right":"left"}function b(e,t,a,n){var o,c=e*h,l=c+h,r=.5*t,i=r+.5,s=r+1,u=r-.5,d=s+.5;"left"===n&&(o=l+h),"right"===n&&(o=c-h);var m,g,p,b;return"left"===n&&(m="".concat(l,",").concat(r," ").concat(l,",").concat(s," ").concat(c,",").concat(i),g=o>a.width+.01?m:"".concat(l,",").concat(r," ").concat(o,",").concat(i," ").concat(l,",").concat(s," ").concat(c,",").concat(i),p=u<0?m:"".concat(c,",").concat(u," ").concat(l,",").concat(r," ").concat(l,",").concat(s," ").concat(c,",").concat(i),b=d>a.height?m:"".concat(l,",").concat(r," ").concat(l,",").concat(s," ").concat(c,",").concat(d," ").concat(c,",").concat(i)),"right"===n&&(m="".concat(c,",").concat(r," ").concat(l,",").concat(i," ").concat(c,",").concat(s),g=o<0?m:"".concat(c,",").concat(r," ").concat(l,",").concat(i," ").concat(c,",").concat(s," ").concat(o,",").concat(i),b=u<0?m:"".concat(l,",").concat(u," ").concat(l,",").concat(i," ").concat(c,",").concat(s," ").concat(c,",").concat(r),p=d>a.height?m:"".concat(c,",").concat(r," ").concat(l,",").concat(i," ").concat(l,",").concat(d," ").concat(c,",").concat(s)),{orientation:n,triangleCoord:m,topFaceCoord:g,leftFaceCoord:p,rightFaceCoord:b}}function f(e,t){return{width:e*g(1),height:1*(t-1)/2+1}}var v=a(23),E=a.n(v);a(32);var $=function(e){var t=e.onClick;return o.a.createElement("div",{className:"close-dropdown-button-wrapper"},o.a.createElement("button",{className:"close-dropdown-button",type:"button",onClick:function(){return t()}},o.a.createElement("img",{src:E.a,className:"close-icon",alt:"close icon"})))};a(33);var k=function(e){var t=e.onDialog,a=e.setOnDialog,c=e.setGridDimensionsInTriangles,l=Object(n.useState)(null),r=Object(d.a)(l,2),i=r[0],s=r[1];function u(){null!==i&&s(null),a(null)}return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",disabled:null!==t&&"grid size"!==t,className:"grid-size toolbar-btn ".concat("grid size"===t&&"active"),onClick:function(){null===t?a("grid size"):"grid size"===t&&u()}},o.a.createElement("svg",{viewBox:"0 0 42 47.75"},o.a.createElement("path",{d:"m 40,47.75 c 1.104,0 2,-0.896 2,-2 v -24 c 0,-0.53 -0.211,-1.039 -0.586,-1.414 l -8,-8 C 33.039,11.961 32.53,11.75 32,11.75 H 14 c -1.104,0 -2,0.896 -2,2 v 32 c 0,1.104 0.896,2 2,2 z m -3.829,-27 H 32 V 16.579 Z M 16,15.75 h 12 v 7 c 0,1.104 0.896,2 2,2 h 8 v 19 H 16 Z"}),o.a.createElement("path",{d:"m 38,6 c 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2 V 2 C 42,0.896 41.104,0 40,0 38.896,0 38,0.896 38,2 H 16 C 16,0.896 15.104,0 14,0 12.896,0 12,0.896 12,2 v 4 c 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2"}),o.a.createElement("path",{d:"m 0,45.75 c 0,1.104 0.896,2 2,2 h 4 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 v -28 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 H 2 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 v 28 c -1.104,0 -2,0.896 -2,2 z"}))),"grid size"===t&&o.a.createElement("div",{className:"grid-size-wrapper"},o.a.createElement("div",{className:"grid-size-dropdown"},o.a.createElement($,{onClick:u}),o.a.createElement("p",{className:"size-instructions"},"Select a size for a new ",o.a.createElement("strong",null,"empty")," grid:"),o.a.createElement("div",{className:"radio-component"},o.a.createElement("input",{id:"mobile-size",type:"radio",name:"size",onClick:function(){return s({width:16,height:39})}}),o.a.createElement("label",{htmlFor:"mobile-size"},"for mobile phone (16 x 39)")),o.a.createElement("div",{className:"radio-component"},o.a.createElement("input",{id:"desktop-size",type:"radio",name:"size",onClick:function(){return s({width:46,height:39})}}),o.a.createElement("label",{htmlFor:"desktop-size"},"for desktop (46 x 39)")),o.a.createElement("button",{type:"button",className:"apply-grid-size dialog-btn",disabled:null===i,onClick:function(){return null!==i&&(c(i),s(null)),void a(null)}},"Apply"))))};function y(e){var t=document.createElement("div");t.id="for-computed-style",t.style.color=e,document.querySelector("body").appendChild(t);var a=getComputedStyle(t).color.match(/^rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d\.\d)\s*)?\)$/i);if(document.querySelector("#for-computed-style").remove(),a){var n={r:a[1],g:a[2],b:a[3]};return a[4]&&(n.a=a[4]),n}throw new Error("Color ".concat(e," could not be parsed."))}function w(e,t,a,n,o){var c=C(e,t,a);return void 0!==n?c*n+o*(1-n):c}function C(e,t,a){var n=[e,t,a].map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}));return.2126*n[0]+.7152*n[1]+.0722*n[2]}var N=C(255,255,255);a(34);var x=function(e){var t=e.onDialog,a=e.setOnDialog,c=e.selectedColors,l=e.setSelectedColors,r=e.changeFaceColor,i=Object(n.useState)(""),s=Object(d.a)(i,2),u=s[0],m=s[1],g=Object(n.useState)(!1),h=Object(d.a)(g,2),p=h[0],b=h[1],f=Object(n.useState)([c.background,c.right,c.top,c.left]),v=Object(d.a)(f,2),E=v[0],k=v[1],C=Object(n.useState)([108,108,108]),x=Object(d.a)(C,2),O=x[0],j=x[1],S=Object(n.useState)(null),F=Object(d.a)(S,2),z=F[0],D=F[1];function B(){a(null),m(""),D(null),b(!1)}function I(e){D(null),m(e)}function M(e,t){if(""!==e){var a=e.trim();if(function(e){var t=e.match(/(?:#(?:[0-9a-f]{2}){2,4}$|#[0-9a-f]{3}$|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\)$|black$|silver$|gray$|whitesmoke$|maroon$|red$|purple$|fuchsia$|green$|lime$|olivedrab$|yellow$|navy$|blue$|teal$|aquamarine$|orange$|aliceblue$|antiquewhite$|aqua$|azure$|beige$|bisque$|blanchedalmond$|blueviolet$|brown$|burlywood$|cadetblue$|chartreuse$|chocolate$|coral$|cornflowerblue$|cornsilk$|crimson$|darkblue$|darkcyan$|darkgoldenrod$|darkgray$|darkgreen$|darkgrey$|darkkhaki$|darkmagenta$|darkolivegreen$|darkorange$|darkorchid$|darkred$|darksalmon$|darkseagreen$|darkslateblue$|darkslategray$|darkslategrey$|darkturquoise$|darkviolet$|deeppink$|deepskyblue$|dimgray$|dimgrey$|dodgerblue$|firebrick$|floralwhite$|forestgreen$|gainsboro$|ghostwhite$|goldenrod$|gold$|greenyellow$|grey$|honeydew$|hotpink$|indianred$|indigo$|ivory$|khaki$|lavenderblush$|lavender$|lawngreen$|lemonchiffon$|lightblue$|lightcoral$|lightcyan$|lightgoldenrodyellow$|lightgray$|lightgreen$|lightgrey$|lightpink$|lightsalmon$|lightseagreen$|lightskyblue$|lightslategray$|lightslategrey$|lightsteelblue$|lightyellow$|limegreen$|linen$|mediumaquamarine$|mediumblue$|mediumorchid$|mediumpurple$|mediumseagreen$|mediumslateblue$|mediumspringgreen$|mediumturquoise$|mediumvioletred$|midnightblue$|mintcream$|mistyrose$|moccasin$|navajowhite$|oldlace$|olive$|orangered$|orchid$|palegoldenrod$|palegreen$|paleturquoise$|palevioletred$|papayawhip$|peachpuff$|peru$|pink$|plum$|powderblue$|rosybrown$|royalblue$|saddlebrown$|salmon$|sandybrown$|seagreen$|seashell$|sienna$|skyblue$|slateblue$|slategray$|slategrey$|snow$|springgreen$|steelblue$|tan$|thistle$|tomato$|transparent$|turquoise$|violet$|wheat$|white$|yellowgreen$|rebeccapurple$)/i);return t&&0===t.index}(a)){if(l((function(e){var n=Object.assign({},e);return n[t]=a,n})),"background"===t){var n=function(e){var t;try{t=y(e)}catch(a){return console.log(a),[0,0,0]}return w(t.r,t.g,t.b,t.a,N)>.5?[108,108,108]:[237,237,237]}(a);j(n)}p&&(r(t,a),b(!1)),function(e){k((function(t){var a=t.slice(),n=a.findIndex((function(t){return e===t}));return-1!==n&&a.splice(n,1),a.push(e),a}))}(e),I("")}else D("incorrect color syntax")}}return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",disabled:null!==t&&"palette"!==t,className:"palette toolbar-btn ".concat("palette"===t&&"active"),onClick:function(){null===t?a("palette"):"palette"===t&&B()}},o.a.createElement("svg",{width:"639.59314pt",viewBox:"-21 -21 640.21837 635.85004",height:"635.85004pt"},o.a.createElement("path",{id:"path2",d:"m 243.63859,-16.405955 c 84.14811,-14.809817 169.02669,4.021664 239.01372,53.027116 69.99088,49.004763 116.71925,122.328819 131.5784,206.464269 14.75536,83.54686 -3.48092,167.84218 -51.349,237.35101 -47.87306,69.52557 -120.12783,116.60831 -203.43726,132.57523 -1.16293,0.2209 -2.32922,0.44249 -3.49415,0.65186 l -0.36534,0.0644 c -26.58981,4.6885 -53.73151,-2.43334 -74.52273,-19.56769 -21.1401,-17.42583 -33.4858,-43.24126 -33.87003,-70.83991 -0.0894,-6.58054 -0.80441,-13.22463 -2.12184,-19.75126 -5.37842,-26.67839 -20.75015,-50.05552 -43.28121,-65.83195 -22.52722,-15.77711 -49.75951,-22.22403 -76.66535,-18.15808 -6.58362,0.99428 -13.0723,2.59341 -19.29041,4.76078 -26.054135,9.0762 -54.54544,6.31369 -78.15071,-7.59152 -23.3154099,-13.7461 -39.32809,-36.96215 -43.93851,-63.71646 -0.20024,-1.15861 -0.39117,-2.3313 -0.57998,-3.49192 C -30.32534,265.79365 -10.79435,181.79458 38.16476,113.02947 87.093315,44.293557 160.02169,-1.6620389 243.54184,-16.388896 Z"}),o.a.createElement("path",{id:"path899",d:"M 532.79158,281.65801 A 79.588722,79.588722 0 0 1 430.7817,329.226 79.588722,79.588722 0 0 1 383.21371,227.21611 79.588722,79.588722 0 0 1 485.2236,179.64813 79.588722,79.588722 0 0 1 532.79158,281.65801 Z",style:{fill:c.right}}),o.a.createElement("path",{id:"path897",d:"M 215.00468,281.65826 A 79.588722,79.588722 0 0 1 112.9948,329.22625 79.588722,79.588722 0 0 1 65.426808,227.21637 79.588722,79.588722 0 0 1 167.43669,179.64839 79.588722,79.588722 0 0 1 215.00468,281.65826 Z",style:{fill:c.left}}),o.a.createElement("path",{id:"path829-0-6",d:"M 373.66048,123.6484 A 79.588715,79.588715 0 0 1 271.65061,171.21638 79.588715,79.588715 0 0 1 224.08263,69.206513 79.588715,79.588715 0 0 1 326.09249,21.638527 79.588715,79.588715 0 0 1 373.66048,123.6484 Z",style:{fill:c.top}}))),"palette"===t&&o.a.createElement("div",{className:"palette-wrapper"},o.a.createElement("div",{className:"palette-dropdown"},o.a.createElement($,{onClick:B}),o.a.createElement("div",{className:"color-input"},o.a.createElement("label",null,"Introduce any\xa0",o.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value",target:"_blank",rel:"noreferrer noopener"},"CSS color"),", or pick one from history:"),o.a.createElement("input",{value:u,onChange:function(e){return I(e.target.value)}})),z&&o.a.createElement("p",{className:"color-syntax-error-message"},z),o.a.createElement("p",null,"And apply it to:"),o.a.createElement("div",{className:"color-change-checkbox"},o.a.createElement("input",{type:"checkbox",id:"color-change",checked:p,disabled:""===u,onChange:function(){return b(!p)}}),o.a.createElement("label",{htmlFor:"color-change"},"color existing faces")),o.a.createElement("div",{className:"color-targets"},o.a.createElement("div",{style:{backgroundColor:c.background}},o.a.createElement("div",{className:"faces-wrapper"},o.a.createElement("button",{type:"button",disabled:""===u},o.a.createElement("svg",{viewBox:"0 0 0.8660 1.5"},o.a.createElement("polygon",{onClick:function(){return M(u,"left")},points:"0,0 0.8660,0.5 0.8660,1.5 0,1",style:{fill:c.left}})),o.a.createElement("p",{className:"selected-color-text",style:{color:"rgb(".concat(O[0],", ").concat(O[1],", ").concat(O[2],")")}},c.left)),o.a.createElement("button",{type:"button",disabled:""===u},o.a.createElement("svg",{viewBox:"0 0 1.7321 1"},o.a.createElement("polygon",{onClick:function(){return M(u,"top")},points:"0.8660,0 1.7321,0.5 0.8660,1 0,0.5",style:{fill:c.top}})),o.a.createElement("p",{className:"selected-color-text",style:{color:"rgb(".concat(O[0],", ").concat(O[1],", ").concat(O[2],")")}},c.top)),o.a.createElement("button",{type:"button",disabled:""===u},o.a.createElement("svg",{viewBox:"0 0 0.8660 1.5"},o.a.createElement("polygon",{onClick:function(){return M(u,"right")},points:"0.8660,0 0.8660,1 0,1.5 0,0.5",style:{fill:c.right}})),o.a.createElement("p",{className:"selected-color-text",style:{color:"rgb(".concat(O[0],", ").concat(O[1],", ").concat(O[2],")")}},c.right))),o.a.createElement("button",{className:"background-target",type:"button",disabled:""===u||p,onClick:function(){return M(u,"background")}},o.a.createElement("p",{className:"selected-color-text",style:{color:"rgb(".concat(O[0],", ").concat(O[1],", ").concat(O[2],")")}},"Background: ".concat(c.background))))),o.a.createElement("div",{className:"color-list"},o.a.createElement("p",null,"Palette history"),o.a.createElement("ul",null,E.slice().reverse().map((function(e){return o.a.createElement("li",{key:e},o.a.createElement("div",{onClick:function(){return I(e)},className:"color-sample",style:{backgroundColor:e}}),e)})))))))};a(35);var O=function(e){var t=e.activeFace,a=e.setActiveFace,n=e.selectedColors,c=e.setSelectedColors,l=e.changeFaceColor,r=e.onErasing,i=e.toggleOnErasing,s=e.onDialog,u=e.setOnDialog,d=e.backwardInHistory,m=e.forwardInHistory,g=e.setGridDimensionsInTriangles,h=e.buildAndSaveFile;return o.a.createElement("div",{className:"Toolbar"},o.a.createElement("div",{className:"left-buttons"},o.a.createElement(k,{onDialog:s,setOnDialog:u,setGridDimensionsInTriangles:g}),o.a.createElement("button",{type:"button",disabled:null!==s,className:"download toolbar-btn",onClick:function(){return h()}},o.a.createElement("svg",{viewBox:"0 0 30 36"},o.a.createElement("path",{d:"m 28,36 c 1.104,0 2,-0.896 2,-2 V 10 C 30,9.47 29.789,8.961 29.414,8.586 l -8,-8 C 21.039,0.211 20.53,0 20,0 H 2 C 0.896,0 0,0.896 0,2 v 32 c 0,1.104 0.896,2 2,2 z M 24.171,9 H 20 V 4.829 Z M 4,4 h 12 v 7 c 0,1.104 0.896,2 2,2 h 8 V 32 H 4 Z"}),o.a.createElement("path",{d:"m 15,27.641506 -5.033641,-3.25 m 5.033641,3.25 5.033641,-3.25 M 15,16.95101 v 10.690496",style:{strokeWidth:"3.25",strokeLinecap:"round",strokeLinejoin:"round"}}))),o.a.createElement("button",{type:"button",className:"backward toolbar-btn",disabled:null===d||null!==s,onClick:d},o.a.createElement("svg",{viewBox:"0 0 454.839 454.839"},o.a.createElement("path",{d:"M404.908,283.853c0,94.282-76.71,170.986-170.986,170.986h-60.526c-10.03,0-18.158-8.127-18.158-18.157v-6.053c0-10.031,8.127-18.158,18.158-18.158h60.526c70.917,0,128.618-57.701,128.618-128.618c0-70.917-57.701-128.618-128.618-128.618H122.255l76.905,76.905c8.26,8.257,8.26,21.699,0,29.956c-8.015,8.009-21.964,7.997-29.961,0L56.137,149.031c-4.001-4.001-6.206-9.321-6.206-14.981c0-5.656,2.205-10.979,6.206-14.978L169.205,6.002c7.997-8.003,21.958-8.003,29.956,0c8.26,8.255,8.26,21.699,0,29.953l-76.905,76.911h111.666C328.198,112.866,404.908,189.573,404.908,283.853z"}))),o.a.createElement("button",{type:"button",className:"forward toolbar-btn",disabled:null===m||null!==s,onClick:m},o.a.createElement("svg",{viewBox:"0 0 454.839 454.839"},o.a.createElement("g",{transform:"rotate(-180 227.41949462890625,227.45840454101562)"},o.a.createElement("path",{d:"m404.908004,170.994574c0,-94.332459 -76.709999,-171.07751 -170.985997,-171.07751l-60.525999,0c-10.03,0 -18.158,8.13135 -18.158,18.166717l0,6.05624c0,10.036369 8.127,18.167718 18.158,18.167718l60.525999,0c70.916999,0 128.617998,57.731881 128.617998,128.686835c0,70.954954 -57.700999,128.686835 -128.617998,128.686835l-111.666998,0l76.904999,-76.946159c8.26,-8.261419 8.26,-21.710613 0,-29.972032c-8.015,-8.013286 -21.964,-8.00128 -29.960999,0l-113.061998,113.125512c-4.001,4.003141 -6.206,9.325989 -6.206,14.989018c0,5.659027 2.205,10.984876 6.206,14.986016l113.067998,113.130514c7.997,8.007283 21.958,8.007283 29.955999,0c8.26,-8.259418 8.26,-21.710613 0,-29.969031l-76.904999,-76.952162l111.665998,0c94.275998,0 170.985997,-76.748053 170.985997,-171.078511z"})))),o.a.createElement("button",{type:"button",className:"erase toolbar-btn ".concat(r&&"active"),disabled:null!==s,onClick:i},o.a.createElement("svg",{viewBox:"0 0 469.333 469.333"},o.a.createElement("path",{d:"M456.833,172.237L318.167,33.439c-8.061-8.068-19.109-12.103-30.159-12.105c-11.055-0.002-22.11,4.033-30.175,12.105 L12.5,279.006C4.437,287.076,0,297.794,0,309.201c0,11.407,4.406,22.094,12.594,30.289l95.51,93.318 c10.021,9.791,23.25,15.192,37.271,15.192h71.771c14.115,0,27.417-5.464,37.479-15.4l202.208-199.972 c8.063-8.07,12.5-18.789,12.5-30.195S464.896,180.308,456.833,172.237z M224.656,402.25c-2.052,2.021-4.646,3.083-7.51,3.083 h-71.771c-2.844,0-5.417-1.042-7.458-3.042l-95.25-92.958l110.708-110.708l137.844,137.854L224.656,402.25z"})))),o.a.createElement("div",{className:"center-buttons"},o.a.createElement("button",{type:"button",disabled:null!==s||r,className:"left toolbar-btn ".concat("left"===t&&"active"),onClick:function(){return a("left")}},o.a.createElement("svg",{viewBox:"0 0 0.8660 1.5"},o.a.createElement("polygon",{points:"0,0 0.8660,0.5 0.8660,1.5 0,1"}))),o.a.createElement("button",{type:"button",disabled:null!==s||r,className:"top toolbar-btn ".concat("top"===t&&"active"),onClick:function(){return a("top")}},o.a.createElement("svg",{viewBox:"0 0 1.7321 1"},o.a.createElement("polygon",{points:"0.8660,0 1.7321,0.5 0.8660,1 0,0.5"}))),o.a.createElement("button",{type:"button",disabled:null!==s||r,className:"right toolbar-btn ".concat("right"===t&&"active"),onClick:function(){return a("right")}},o.a.createElement("svg",{viewBox:"0 0 0.8660 1.5"},o.a.createElement("polygon",{points:"0.8660,0 0.8660,1 0,1.5 0,0.5"})))),o.a.createElement("div",{className:"right-buttons"},o.a.createElement(x,{onDialog:s,setOnDialog:u,selectedColors:n,setSelectedColors:c,changeFaceColor:l})))};a(36);var j=function(e){for(var t=e.presentation,a=e.gridDimensionsInTriangles,n=e.trianglesMap,c=e.triangleClickHandler,l=[],r=0;r<a.width;r++)for(var i=function(e){var a=n[r][e];l.push(o.a.createElement("polygon",{key:"".concat(r,",").concat(e),points:a.triangleCoord,"data-orientation":a.orientation,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,onClick:c&&function(){return c(a)}}))},s=0;s<a.height;s++)i(s);return o.a.createElement("g",{className:"TrianglesGrid"},l)};a(37);var S=function(e){var t=e.gridDimensionsInTriangles,a=e.backgroundColor,n=e.triangleClickHandler,c=e.polygonStack,l=function(e,t){for(var a=f(e,t),n=[],o=0;o<e;o++){n[o]=[];for(var c=0;c<t;c++){var l=p(o,c);n[o][c]=b(o,c,a,l)}}return n}(t.width,t.height),r=f(t.width,t.height),i=function(e){var t;try{t=y(e)}catch(a){return console.log(a),[255,255,255]}return w(t.r,t.g,t.b,t.a,N)>.5?[137,137,137]:[225,225,225]}(a),s={stroke:"rgb(".concat(i[0],", ").concat(i[1],", ").concat(i[2],")"),strokeWidth:"0.01",fill:"transparent"},u=[];return c.forEach((function(e,t){u.push(o.a.createElement("polygon",{key:t,points:e.points,stroke:"none",fill:e.fill}))})),o.a.createElement("div",{className:"Frame"},o.a.createElement("svg",{className:"Frame-svg",viewBox:"0 ".concat(.5," ").concat(r.width," ").concat(r.height-1),preserveAspectRatio:"xMidYMin"},o.a.createElement("rect",{x:"0",y:"0",width:r.width,height:r.height,className:"Frame-default-white-background",stroke:"none",fill:"white"}),o.a.createElement("rect",{x:"0",y:"0",width:r.width,height:r.height,className:"Frame-background",stroke:"none",fill:a}),o.a.createElement(j,{presentation:s,gridDimensionsInTriangles:t,trianglesMap:l}),u,o.a.createElement(j,{presentation:{stroke:"none",fill:"transparent"},gridDimensionsInTriangles:t,trianglesMap:l,triangleClickHandler:n})))},F=(a(38),{width:16,height:39});var z=function(){var e=Object(n.useState)(F),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("left"),r=Object(d.a)(l,2),i=r[0],g=r[1],h=Object(n.useState)({left:"dodgerblue",top:"lightskyblue",right:"mediumblue",background:"white"}),p=Object(d.a)(h,2),b=p[0],v=p[1],E=Object(n.useState)(!1),$=Object(d.a)(E,2),k=$[0],y=$[1],w=Object(n.useState)(null),C=Object(d.a)(w,2),N=C[0],x=C[1],j=Object(n.useState)([[]]),z=Object(d.a)(j,2),D=z[0],B=z[1],I=Object(n.useState)(null),M=Object(d.a)(I,2),A=M[0],H=M[1];Object(n.useEffect)((function(){B([[]]),H(null),y(!1)}),[a]);var q=D.length-1;function T(){return null===A?q:A}function W(){H(null===A?q-1:A-1)}function Z(){H(A===q-1?null:A+1)}function L(e){return function(e,t){for(var a=Object(u.a)(e),n=0;n<a.length;n++){if(a[n].points===t.points){a.splice(n,1);break}}return a.concat(t)}(D[T()],e)}function G(e){var t=D.slice(0,T()+1);t.push(e),B(t),H(null)}return o.a.createElement("div",{className:"Editor"},o.a.createElement(O,{activeFace:i,setActiveFace:g,selectedColors:b,setSelectedColors:v,changeFaceColor:function(e,t){G(D[T()].map((function(a){return a.face===e?Object(s.a)({},a,{fill:t}):a})))},onErasing:k,toggleOnErasing:function(){y((function(e){return!e}))},onDialog:N,setOnDialog:x,backwardInHistory:0===q||0===A?null:W,forwardInHistory:null===A?null:Z,setGridDimensionsInTriangles:c,buildAndSaveFile:function(){!function(e,t,a){var n=f(t.width,t.height),o="0 ".concat(.5," ").concat(n.width," ").concat(n.height-1),c='\n<svg class="isometricks-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="'.concat(30*n.width,'px" height="').concat(30*(n.height-1),'px" preserveAspectRatio="xMinYMin" viewBox="').concat(o,'">\n  <polygon points="0,0 ').concat(n.width,",0 ").concat(n.width,",").concat(n.height," 0,").concat(n.height,'" stroke="none" fill="').concat(a||"white",'" />').concat(function(e){var t="";return e.forEach((function(e){t+='\n  <polygon points="'.concat(e.points,'" stroke="none" fill="').concat(e.fill,'" />')})),t}(e),"\n</svg>\n  "),l=new Blob([c],{type:"image/svg+xml"});Object(m.saveAs)(l,"isometricks.svg")}(D[T()],a,b.background)}}),o.a.createElement(S,{gridDimensionsInTriangles:a,backgroundColor:b.background,triangleClickHandler:function(e){null!==i&&null===N&&(k?function(e){for(var t=D[T()],a=Object(u.a)(t),n=0;n<a.length;n++){var o=a.length-(n+1),c=a[o].points;if(c===e.leftFaceCoord||c===e.topFaceCoord||c===e.rightFaceCoord){a.splice(o,1),G(a);break}}}(e):G(L(function(e,t,a){var n,o;return"left"===e?(n=t.leftFaceCoord,o=a.left):"top"===e?(n=t.topFaceCoord,o=a.top):"right"===e&&(n=t.rightFaceCoord,o=a.right),{type:"face",face:e,points:n,fill:o}}(i,e,b))))},polygonStack:D[T()]}))};a(39);var D=function(){return o.a.createElement("div",{className:"info-page"},o.a.createElement("h2",null,"What is it?"),o.a.createElement("p",null,"isometricks.com is meant to be an easy-to-use digital counterpart of isometric paper, with the features of an editor, to be used directly in the browser (use it on mobile, tablet or desktop, with any OS)."),o.a.createElement("h2",null,"And what for?"),o.a.createElement("p",null,'Isometric projections are an easy way to represent 3D shapes on a 2D image. With this editor, you can draw shapes based on basic isometric tiles (or "faces"). It can be used for quick prototyping of isometric designs, such as logos for example. Or just have fun with it, experimenting and drawing isometric shapes, illustrations or illusions!'),o.a.createElement("h2",null,"How to use it?"),o.a.createElement("p",null,"The easiest isometric shape is a cube, you draw it with three faces: a left face, an upper face, and a right face. Just select the face you want to draw in the editor's toolbar, and click on the grid where you want to draw it. That's it!"),o.a.createElement("p",null,"Current features are (in the order they appear in the toolbar):"),o.a.createElement("ul",null,o.a.createElement("li",null,"grid size selector"),o.a.createElement("li",null,"download the current illustration as SVG file"),o.a.createElement("li",null,"history backward and forward buttons"),o.a.createElement("li",null,"face selector buttons"),o.a.createElement("li",null,"configuration tool for faces' colors")),o.a.createElement("p",null,"If you like this tool, please promote it!",o.a.createElement("em",{className:"hashtag"},"#isometricks")),o.a.createElement("h2",null,"Free to use, open source and open to collaboration"),o.a.createElement("p",null,"This editor is free to use, doesn't require registration, and doesn't use any cookie (absolutely no data is stored)."),o.a.createElement("p",null,"The code of this editor is open source and open to collaboration on Github. Feel free to ",o.a.createElement("a",{href:"https://github.com/NicolasLetellier/isometricks"},"have a look")," and see how it works under the hood!"),o.a.createElement("h2",null,"Some examples:"),o.a.createElement("div",null,o.a.createElement("img",{className:"example-image",src:"blueTriangleIllusion.svg",alt:"Blue optical illusion"}),o.a.createElement("img",{className:"example-image",src:"redConstruction.svg",alt:"Isometrick abstract construction in red"}),o.a.createElement("img",{className:"example-image",src:"isometricksFace.svg",alt:"Representation of the purple face of the isometricks logo"})),o.a.createElement("p",null,"Please show us what you can do too!",o.a.createElement("em",{className:"hashtag"},"#isometricks")))},B=a(13),I=a.n(B);a(40);var M=function(){return o.a.createElement(r.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:I.a,className:"App-logo",alt:"logo"}),o.a.createElement(r.b,{to:"/info"},o.a.createElement("button",{type:"button",className:"info-btn"},o.a.createElement("svg",{viewBox:"0 0 192.01154 192.01204"},o.a.createElement("g",{transform:"translate(-8.9942336,-52.493976)",id:"layer1"},o.a.createElement("path",{d:"M 104.99974,52.493976 A 96.00595,96.00595 0 0 0 8.9942336,148.5 96.00595,96.00595 0 0 0 104.99974,244.50602 96.00595,96.00595 0 0 0 201.00577,148.5 96.00595,96.00595 0 0 0 104.99974,52.493976 Z m 0,16.253272 a 79.752975,79.752975 0 0 1 7.96231,0.398425 79.752975,79.752975 0 0 1 7.8822,1.191141 79.752975,79.752975 0 0 1 7.72408,1.97249 79.752975,79.752975 0 0 1 7.48895,2.733167 79.752975,79.752975 0 0 1 7.17837,3.467489 79.752975,79.752975 0 0 1 6.79597,4.167187 79.752975,79.752975 0 0 1 6.34638,4.824511 79.752975,79.752975 0 0 1 5.83324,5.433777 79.752975,79.752975 0 0 1 5.26117,5.989298 79.752975,79.752975 0 0 1 4.63745,6.484357 79.752975,79.752975 0 0 1 3.96668,6.91534 79.752975,79.752975 0 0 1 3.25613,7.27656 79.752975,79.752975 0 0 1 2.51406,7.56543 79.752975,79.752975 0 0 1 1.74563,7.77833 79.752975,79.752975 0 0 1 0.96067,7.91373 79.752975,79.752975 0 0 1 0.19998,5.64152 79.752975,79.752975 0 0 1 -0.39842,7.96178 79.752975,79.752975 0 0 1 -1.19166,7.88273 79.752975,79.752975 0 0 1 -1.97197,7.72407 79.752975,79.752975 0 0 1 -2.73369,7.48895 79.752975,79.752975 0 0 1 -3.46749,7.17786 79.752975,79.752975 0 0 1 -4.16667,6.79648 79.752975,79.752975 0 0 1 -4.82451,6.34639 79.752975,79.752975 0 0 1 -5.43429,5.83323 79.752975,79.752975 0 0 1 -5.9893,5.26118 79.752975,79.752975 0 0 1 -6.48436,4.63692 79.752975,79.752975 0 0 1 -6.91482,3.96669 79.752975,79.752975 0 0 1 -7.27656,3.25665 79.752975,79.752975 0 0 1 -7.56543,2.51354 79.752975,79.752975 0 0 1 -7.77834,1.74614 79.752975,79.752975 0 0 1 -7.91424,0.96067 79.752975,79.752975 0 0 1 -5.64152,0.19947 79.752975,79.752975 0 0 1 -7.961787,-0.39842 79.752975,79.752975 0 0 1 -7.882723,-1.19114 79.752975,79.752975 0 0 1 -7.724076,-1.97249 79.752975,79.752975 0 0 1 -7.488431,-2.73317 79.752975,79.752975 0 0 1 -7.178373,-3.46749 79.752975,79.752975 0 0 1 -6.796484,-4.16719 79.752975,79.752975 0 0 1 -6.346384,-4.82451 79.752975,79.752975 0 0 1 -5.832718,-5.43378 79.752975,79.752975 0 0 1 -5.261695,-5.98929 79.752975,79.752975 0 0 1 -4.636926,-6.48436 79.752975,79.752975 0 0 1 -3.966683,-6.91534 79.752975,79.752975 0 0 1 -3.256648,-7.27656 79.752975,79.752975 0 0 1 -2.513541,-7.56491 79.752975,79.752975 0 0 1 -1.74563,-7.77886 79.752975,79.752975 0 0 1 -0.960665,-7.91373 79.752975,79.752975 0 0 1 -0.199988,-5.64151 79.752975,79.752975 0 0 1 0.398425,-7.96179 79.752975,79.752975 0 0 1 1.191143,-7.88272 79.752975,79.752975 0 0 1 1.97249,-7.72408 79.752975,79.752975 0 0 1 2.733683,-7.48843 79.752975,79.752975 0 0 1 3.467488,-7.17837 79.752975,79.752975 0 0 1 4.166669,-6.79649 79.752975,79.752975 0 0 1 4.824513,-6.346377 79.752975,79.752975 0 0 1 5.434293,-5.833236 79.752975,79.752975 0 0 1 5.988783,-5.261176 79.752975,79.752975 0 0 1 6.484874,-4.636927 79.752975,79.752975 0 0 1 6.914824,-3.966683 79.752975,79.752975 0 0 1 7.276558,-3.256648 79.752975,79.752975 0 0 1 7.565429,-2.513541 79.752975,79.752975 0 0 1 7.778338,-1.746147 79.752975,79.752975 0 0 1 7.913727,-0.960665 79.752975,79.752975 0 0 1 5.641515,-0.199472 z"}),o.a.createElement("path",{d:"m 90.264317,105.80131 q 0,-6.033504 4.022339,-10.133196 4.099692,-4.099693 10.752024,-4.099693 6.65233,0 10.67467,4.099693 4.02234,4.099692 4.02234,10.133196 0,6.03351 -4.02234,10.21056 -4.02234,4.09969 -10.67467,4.09969 -6.652332,0 -10.752024,-4.09969 -4.022339,-4.17705 -4.022339,-10.21056 z m 28.233723,98.23791 q -1.77911,0.30941 -5.18262,0.85088 -3.40352,0.54147 -6.88439,0.54147 -3.48087,0 -6.26557,-0.46412 -2.784697,-0.46412 -4.718514,-1.85646 -1.856464,-1.4697 -2.862049,-3.86764 -1.005585,-2.47528 -1.005585,-6.42027 v -64.51214 q 1.779112,-0.30941 5.105277,-0.85087 3.403521,-0.54147 6.884391,-0.54147 3.48087,0 6.26556,0.46411 2.7847,0.46412 4.64117,1.93382 1.93381,1.39235 2.9394,3.86763 1.08293,2.39794 1.08293,6.34292 z"})))))),o.a.createElement(z,null)),o.a.createElement(i.b,{exact:!0,path:"/info"},o.a.createElement("header",{className:"App-header info-header"},o.a.createElement(r.b,{to:"/"},o.a.createElement("img",{src:I.a,className:"App-logo",alt:"logo"})),o.a.createElement(r.b,{to:"/",className:"back-to-editor-link"},o.a.createElement("button",{type:"button",className:"back-to-editor-btn"},"Back to editor"))),o.a.createElement(D,null)),o.a.createElement(i.b,{path:"/"},o.a.createElement(i.a,{to:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[26,1,2]]]);
//# sourceMappingURL=main.3162d92e.chunk.js.map