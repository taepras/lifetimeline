(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{63:function(n,t,e){},66:function(n,t,e){},73:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e(1),o=e.n(i),a=e(30),c=e.n(a),s=(e(63),e(4)),u=e(3),l=e(2),d={containerMaxWidth:480,bubbleXOffset:100,spacing:{xxs:2,xs:4,x1:8,x2:16,x3:24,x4:32}};function b(){var n=Object(u.a)(['\n  body {\n    /* background-color: #DED8C9; */\n    height: 100vh;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n\n    background-color: #DED8C9;\n    color: #333;\n    /* background: \n    radial-gradient(\n        100% 60% at 50% 45%, \n        rgba(137, 130, 119, 0) 30%, \n        rgba(85, 80, 72, 0.57) 85%, \n        rgba(85, 80, 72, 0.75) 100%\n      ), \n      #DED8C9; */\n    background-blend-mode: normal, normal;\n    \n    &::after {\n      content: " ";\n      background: \n      ',"\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      pointer-events: none;\n      z-index: 0;\n    }\n\n    font-family: thonglor;\n    font-size: 20px;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: anugrom;\n    font-weight: normal;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: ","px;\n  }\n\n  .mt-0 { margin-top: 0; }\n  .mt-1 { margin-top: ","px !important; }\n  .mt-2 { margin-top: ","px !important; }\n  .mt-3 { margin-top: ","px !important; }\n  .mt-4 { margin-top: ","px !important; }\n\n  .mb-0 { margin-bottom: 0; }\n  .mb-1 { margin-bottom: ","px !important; }\n  .mb-2 { margin-bottom: ","px !important; }\n  .mb-3 { margin-bottom: ","px !important; }\n  .mb-4 { margin-bottom: ","px !important; }\n\n  .mr-0 { margin-right: 0; }\n  .mr-1 { margin-right: ","px !important; }\n  .mr-2 { margin-right: ","px !important; }\n  .mr-3 { margin-right: ","px !important; }\n  .mr-4 { margin-right: ","px !important; }\n\n  .text-center { text-align: center; }\n  .text-left { text-align: left; }\n  .text-right { text-align: right; }\n"]);return b=function(){return n},n}var p=Object(l.a)(b(),(function(n){return n.isBorn?"radial-gradient(\n          100% 60% at 50% 45%, \n          rgba(85, 80, 72, 0) 30%, \n          rgba(85, 80, 72, 0.4) 85%, \n          rgba(85, 80, 72, 0.6) 100%\n        );":"radial-gradient(\n          100% 60% at 50% 45%, \n          rgba(0, 0, 0, 0) 30%, \n          rgba(0, 0, 0, 0.4) 85%, \n          rgba(0, 0, 0, 0.6) 100%\n        );"}),d.spacing.x2,d.spacing.x1,d.spacing.x2,d.spacing.x3,d.spacing.x4,d.spacing.x1,d.spacing.x2,d.spacing.x3,d.spacing.x4,d.spacing.x1,d.spacing.x2,d.spacing.x3,d.spacing.x4);e(66);function f(){var n=Object(u.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: ",";\n"]);return f=function(){return n},n}var x=l.b.div(f(),(function(n){return n.z||1}));function g(){var n=Object(u.a)(["\n    width: auto;\n    max-width: ","px;\n    margin: auto;\n    padding: 0 ","px;\n\n    ","\n"]);return g=function(){return n},n}console.log(d.spacing.x2);var j=l.b.div(g(),d.containerMaxWidth,(function(n){return n.padding||d.spacing.x2}),(function(n){return n.fillHeight&&"height: 100%;"}));function h(){var n=Object(u.a)(["\n    width: 100%;\n    border: 1px solid #eee;\n    border-radius: ","px;\n    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);\n    height: ","px;\n    padding: 0 ","px;\n"]);return h=function(){return n},n}var m=l.b.select(h(),d.spacing.xs,d.spacing.x4,d.spacing.x1);function v(){var n=Object(u.a)(["\n    ","\n    border: ",";\n    border-radius: ","px;\n    /* height: ","px; */\n    padding: ","px ","px;\n    background-color: ",";\n    ","\n    color: #fff;\n"]);return v=function(){return n},n}var O=l.b.button(v(),(function(n){return n.block&&"width: 100%;"}),(function(n){return n.outlined?"1px solid #fff":"none"}),d.spacing.xs,d.spacing.x4,d.spacing.x1,1.5*d.spacing.x1,(function(n){return n.outlined?"transparent":"#C14953"}),(function(n){return!n.outlined&&"box-shadow: 0px 4px 8px rgba(142, 34, 43, 0.21);"})),y=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ad",e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(e?"ad"==t?"\u0e04.\u0e28. ":"\u0e1e.\u0e28. ":"")+("ad"==t?+n:+n+543)},k=function(n,t,e){return Math.min(Math.max(n,t),e)},w=function(n){var t=Object(i.useState)(n),e=Object(s.a)(t,2),r=e[0],o=e[1],a=Object(i.useRef)(null);Object(i.useEffect)((function(){a.current&&(a.current(r),a.current=null)}),[a.current,r]);var c=Object(i.useCallback)((function(n){return o(n),new Promise((function(n){a.current=n}))}),[o]);return[r,c]},C={yearRangeMin:1920,yearRangeMax:2020,defaultYearMode:"ad",yearsOffset:2,yearHeight:120,spacePerEvent:80,yOffsetCollapsedEvents:60,xSpacePerCollapsedEvent:16,xOffsetCollapsedEvents:20,zoomStep:.7,minZoom:1,maxZoomSteps:3,generations:{2010:"Generation Alpha",1997:"Generation Z",1981:"Generation Y",1965:"Generation X",1946:"Baby Boomer"}};var M=function(n){for(var t=n.onSubmit,e=void 0===t?function(n){}:t,o=n.yearMode,a=n.yearRangeMin,c=void 0===a?C.yearRangeMin:a,u=n.yearRangeMax,l=void 0===u?C.yearRangeMax:u,d=n.buttonLabel,b=[],p=Object(i.useState)(-1),f=Object(s.a)(p,2),x=f[0],g=f[1],j=Object(i.useState)(""),h=Object(s.a)(j,2),v=h[0],k=h[1],w=c;w<=l;w++)b.push(w);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(m,{onChange:function(n){g(+n.target.value)},children:[Object(r.jsx)("option",{children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14"}),b.reverse().map((function(n,t){return Object(r.jsxs)("option",{value:n,children:[y(n,o,!0)," ",n in C.generations&&"(".concat(C.generations[n],")")]},"select-".concat(n))}))]}),v,Object(r.jsx)(O,{className:"mt-1",block:!0,onClick:function(){x>0?e(x):k("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14")},children:d||"\u0e44\u0e1b\u0e22\u0e49\u0e2d\u0e19\u0e14\u0e39\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e01\u0e31\u0e19"})]})};function z(){var n=Object(u.a)(["\n  font-size: 48px;\n  margin-bottom: 0;\n  margin-bottom: ","px;\n"]);return z=function(){return n},n}var T=l.b.h1(z(),d.spacing.x2);var E=function(n){for(var t=n.onProceed,e=n.yearMode,o=[],a=Object(i.useState)(-1),c=Object(s.a)(a,2),u=(c[0],c[1],Object(i.useState)("")),l=Object(s.a)(u,2),b=(l[0],l[1],C.yearRangeMin);b<=C.yearRangeMax;b++)o.push(b);return Object(r.jsx)(x,{children:Object(r.jsx)(j,{fillHeight:!0,style:{display:"flex",alignItems:"center"},padding:d.spacing.x4,children:Object(r.jsxs)("div",{style:{marginBottom:"80px"},children:[Object(r.jsxs)(T,{children:["\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22",Object(r.jsx)("u",{children:"\u0e44\u0e2b\u0e19"}),"?"]}),Object(r.jsx)("p",{children:"\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e34\u0e14\u0e04\u0e19\u0e25\u0e30\u0e1b\u0e35 \u0e01\u0e47\u0e42\u0e15\u0e21\u0e32\u0e43\u0e19\u0e2a\u0e20\u0e32\u0e1e\u0e2a\u0e31\u0e07\u0e04\u0e21\u0e04\u0e19\u0e25\u0e30\u0e41\u0e1a\u0e1a \u0e0a\u0e27\u0e19\u0e04\u0e38\u0e13\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e25\u0e2d\u0e07\u0e14\u0e39\u0e27\u0e48\u0e32\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22\u0e04\u0e38\u0e13\u0e40\u0e15\u0e34\u0e1a\u0e42\u0e15\u0e1c\u0e48\u0e32\u0e19\u0e2d\u0e30\u0e44\u0e23\u0e21\u0e32 \u0e41\u0e25\u0e30\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e01\u0e31\u0e19\u0e41\u0e25\u0e49\u0e27 \u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e42\u0e15\u0e21\u0e32\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e1a\u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e44\u0e07\u0e1a\u0e49\u0e32\u0e07"}),Object(r.jsx)("p",{children:"\u0e04\u0e38\u0e13\u0e40\u0e01\u0e34\u0e14\u0e1b\u0e35"}),Object(r.jsx)(M,{onSubmit:t,yearMode:e})]})})})};function S(){var n=Object(u.a)(["\n  width: auto;\n  ","\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return n},n}var Y=l.b.div(S(),(function(n){return n.fillHeight&&"height: 100%;"}));var B=function(n){var t=n.className,e=n.children,i=n.fillHeight;return Object(r.jsx)(Y,{className:t,fillHeight:i,children:Object(r.jsx)("div",{children:e})})};function D(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 60%;\n  z-index: -1;\n  background: linear-gradient(to top, #000f 90%, #0000 100%);\n\n  animation-name: ",";\n  animation-delay: ","s;\n  animation-duration: ","s;\n  animation-fill-mode: forwards;\n  transition: 0.3s all;\n"]);return D=function(){return n},n}function R(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60%;\n  z-index: -1;\n  background: linear-gradient(to bottom, #000f 90%, #0000 100%);\n\n  animation-name: ",";\n  animation-delay: ","s;\n  animation-duration: ","s;\n  animation-fill-mode: forwards;\n  transition: 0.3s all;\n"]);return R=function(){return n},n}function P(){var n=Object(u.a)(["\n  color: #fff;\n\n  animation-name: ",";\n  animation-delay: ","s;\n  animation-duration: ","s;\n  animation-fill-mode: forwards;\n  transition: 0.3s all;\n\n  * {\n    margin: 0;\n    margin-bottom: ","px;\n  }\n"]);return P=function(){return n},n}function N(){var n=Object(u.a)(["\n  0%   { opacity: 1; }\n  100% { opacity: 0; }\n"]);return N=function(){return n},n}function F(){var n=Object(u.a)(["\n  0%   { transform: translateY(0%); }\n  20%  { transform: translateY(50%); }\n  40%  { transform: translateY(10%); }\n  100% { transform: translateY(100%); }\n"]);return F=function(){return n},n}function H(){var n=Object(u.a)(["\n  0%   { transform: translateY(0%); }\n  20%  { transform: translateY(-50%); }\n  40%  { transform: translateY(-10%); }\n  100% { transform: translateY(-100%); }\n"]);return H=function(){return n},n}function A(){var n=Object(u.a)(["\n  color: #fff;\n  text-align: center;\n\n  pointer-events: none;\n  transition: 1s opacity;\n  z-index: 1000;\n  ","\n"]);return A=function(){return n},n}var L=Object(l.b)(x)(A(),(function(n){return!n.blink&&"opacity: 0;"})),Z=Object(l.c)(H()),I=Object(l.c)(F()),G=Object(l.c)(N()),_=Object(l.b)(B)(P(),(function(n){return n.blink?G:"none"}),3,2,d.spacing.x1),W=l.b.div(R(),(function(n){return n.blink?Z:"none"}),3,2),X=l.b.div(D(),(function(n){return n.blink?I:"none"}),3,2);var J=function(n){var t=n.birthYear,e=void 0===t?0:t,o=n.yearMode,a=void 0===o?"ad":o,c=n.blink,u=void 0!==c&&c,l=n.onPageChange,d=void 0===l?function(){}:l,b=Object(i.useState)(!1),p=Object(s.a)(b,2),f=p[0],x=p[1];return Object(i.useEffect)((function(){console.log("blink check",u),u&&(console.log("blink started"),x(!0),setTimeout(d,1500),setTimeout((function(){return x(!1)}),5e3))}),[u]),Object(r.jsxs)(L,{z:100,blink:f,children:[Object(r.jsx)(W,{blink:u}),Object(r.jsx)(X,{blink:u}),Object(r.jsxs)(_,{fillHeight:!0,blink:u,children:[Object(r.jsx)("p",{children:"\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e42\u0e25\u0e01\u0e43\u0e19\u0e21\u0e38\u0e21\u0e21\u0e2d\u0e07\u0e02\u0e2d\u0e07"}),Object(r.jsxs)("h1",{children:["\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 ",Object(r.jsx)("u",{children:y(e,a)})]})]})]})},q=e(7);function K(){var n=Object(u.a)([""]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n  position: absolute;\n  right: -","px;\n  bottom: -","px;\n  width: 24px;\n  height: 24px;\n\n  background: ",";\n  border-radius: ",';\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &::after {\n    content: " ";\n    display: block;\n    width: 16px;\n    height: 16px;\n    background-color: #fff;\n    border-radius: 50%;\n  }\n']);return Q=function(){return n},n}function U(){var n=Object(u.a)(["\n  width: 64px; //",";\n  flex: 0 0 64px; //",";\n  height: 64px; //",";\n  ","\n  border-radius: ",";\n  box-sizing: border-box;\n  background-color: ",";\n  /* background-image: url(","); */\n  background-size: cover;\n  background-position: center center;\n  border: ","px solid\n    ",";\n  margin-right: ","px;\n  position: relative;\n  box-shadow: 0px 2px 4px\n    ","44;\n\n  transition: 0.3s transform;\n"]);return U=function(){return n},n}function V(){var n=Object(u.a)(["\n  display: flex;\n  width: calc(min(100vw, ","px) - ","px - ","px);\n  max-width: calc(min(100vw, ","px) - ","px - ","px);\n  height: 64px;\n  overflow: visible;\n  align-items: center;\n  transform: translateY(-50%);\n  position: ",";\n  z-index: ",";\n\n  transition: 0.3s all;\n\n  pointer-events: none;\n"]);return V=function(){return n},n}var $=function(n){switch(n){case"thailand":return"#D89D3E";case"world":return"#6599A5";case"birthyear":return"#ac646a";default:return"#fff"}},nn=l.b.div(V(),d.containerMaxWidth,(function(n){return n.x}),6*d.spacing.x1,d.containerMaxWidth,(function(n){return n.x}),6*d.spacing.x1,(function(n){return n.relative?"relative":"absolute"}),(function(n){return n.z})),tn=l.b.div(U(),(function(n){return n.collapsed?"24px":"64px"}),(function(n){return n.collapsed?"24px":"64px"}),(function(n){return n.collapsed?"24px":"64px"}),(function(n){return n.collapsed&&"transform: scale(0.375);"}),(function(n){return"birthyear"===n.eventType?"50%":"8px"}),(function(n){var t=n.eventType;return Object(q.b)(.2,$(t))}),(function(n){return n.image}),(function(n){return 3*(n.collapsed?2.5:1)}),(function(n){var t=n.eventType;return $(t)}),1.5*d.spacing.x1,(function(n){var t=n.eventType;return Object(q.a)(.3,$(t))})),en=l.b.div(Q(),3,3,(function(n){var t=n.eventType;return $(t)}),(function(n){return"birthyear"===n.eventType?"50%":"8px 0px"})),rn=l.b.div(K());var on=function(n){var t=n.title,e=n.type,i=void 0===e?"world":e,o=n.image,a=n.onClick,c=void 0===a?function(){}:a,s=n.x,u=n.y,l=n.z,d=n.relative,b=n.collapsed,p=void 0!==b&&b,f=n.onCollapsedClick,x=void 0===f?function(){}:f;return Object(r.jsxs)(nn,{onClick:function(n){p?x(n):c()},relative:d,style:{transform:"translate(".concat(s,"px, ").concat(u,"px)")},z:l,x:s,children:[Object(r.jsx)(tn,{eventType:i,style:{backgroundImage:"url(/img/events/".concat(o,")")},collapsed:p,children:!p&&Object(r.jsx)(en,{eventType:i})}),!p&&Object(r.jsxs)(rn,{eventType:i,children:["birthyear"==i&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("small",{style:{opacity:.7},children:"\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14"}),Object(r.jsx)("br",{})]}),t]})]})};function an(){var n=Object(u.a)(["\n  border: none;\n  color: #fff;\n  display: flex;\n  font-size: 24px;\n  line-height: 1;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  right: 8px;\n  top: 8px;\n\n  z-index: 10;\n  background: rgba(51, 51, 51, 0.5);\n  border-radius: 16px;\n"]);return an=function(){return n},n}function cn(){var n=Object(u.a)(["\n  padding: ","px;\n\n  * {\n    margin: 0;\n    margin-bottom: ","px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  h2 {\n    line-height: 1.2;\n  }\n"]);return cn=function(){return n},n}function sn(){var n=Object(u.a)(["\n  position: absolute;\n  right: -","px;\n  bottom: -","px;\n  /* width: 24px; */\n  height: 24px;\n  padding: 0 ","px;\n\n  background: ",";\n  border-radius: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return sn=function(){return n},n}function un(){var n=Object(u.a)(["\n  width: 100%;\n  height: 240px;\n\n  border-radius: 8px;\n  box-sizing: border-box;\n  background-size: cover;\n  background-position: center center;\n\n  background-color: ",";\n  background-image: url(",");\n  border: ","px solid\n    ",";\n\n  position: relative;\n"]);return un=function(){return n},n}function ln(){var n=Object(u.a)(["\n  width: 320px;\n  max-width: calc(100% - ","px);\n  /* align-items: center; */\n  /* transform: translateY(-50%); */\n  border-radius: 8px;\n  background-color: ",";\n  box-shadow: 0px 2px 4px\n    ","44;\n  color: #fff;\n  position: relative;\n\n  transition: 0.3s all;\n  ","\n"]);return ln=function(){return n},n}function dn(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #0008;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n\n  transition: 0.3s all;\n  ","\n"]);return dn=function(){return n},n}var bn=function(n){switch(n){case"thailand":return"#D89D3E";case"world":return"#6599A5";case"birthyear":return"#ac646a";default:return"#fff"}},pn=l.b.div(dn(),(function(n){return!n.open&&"\n    opacity: 0;\n    pointer-events: none;\n  "})),fn=l.b.div(ln(),2*d.spacing.x2,(function(n){var t=n.eventType;return Object(q.a)(.1,bn(t))}),(function(n){var t=n.eventType;return Object(q.a)(.3,bn(t))}),(function(n){return!n.open&&"\n    opacity: 0;\n    transform: translateY(100px);\n  "})),xn=l.b.div(un(),(function(n){var t=n.eventType;return Object(q.b)(.2,bn(t))}),(function(n){return n.image}),4,(function(n){var t=n.eventType;return Object(q.a)(.1,bn(t))})),gn=l.b.div(sn(),4,4,d.spacing.x1,(function(n){var t=n.eventType;return Object(q.a)(.1,bn(t))}),(function(n){return"birthyear"==n.eventType?"50%":"8px 0px"})),jn=l.b.div(cn(),d.spacing.x2,d.spacing.x1),hn=l.b.button(an());var mn=function(n){var t=n.open,e=n.setOpen,i=void 0===e?function(n){}:e,o=(n.children,n.title,n.data),a=n.type,c=void 0===a?"world":a,s=n.year,u=n.yearMode,l=n.birthYear,d=n.image,b=n.onClick,p=void 0===b?function(){}:b,f=n.onClose,x=void 0===f?function(){}:f;return Object(r.jsx)(pn,{open:t,onClick:function(n){n.currentTarget==n.target&&i(!1)},children:Object(r.jsxs)(fn,{onClick:p,eventType:c,open:t,children:[Object(r.jsx)(hn,{onClose:x,onClick:function(n){i(!1),x(n)},children:"\xd7"}),Object(r.jsx)(xn,{style:{backgroundImage:"url(/img/events/".concat(d,")")},eventType:c,children:Object(r.jsxs)(gn,{eventType:c,children:["\u2b24 ",function(n){switch(n){case"thailand":return"\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e44\u0e17\u0e22";case"world":return"\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e42\u0e25\u0e01";case"birthyear":return"\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e2a\u0e33\u0e04\u0e31\u0e0d"}}(o.type)]})}),Object(r.jsxs)(jn,{eventType:c,children:[Object(r.jsx)("h2",{children:"birthyear"==o.type?o.name:o.event}),Object(r.jsxs)("p",{children:[y(s,u,!0)," ","birthyear"==o.type&&"- \u0e1b\u0e35\u0e19\u0e35\u0e49\u0e2d\u0e32\u0e22\u0e38 ".concat((new Date).getFullYear()-s," \u0e1b\u0e35"),Object(r.jsx)("br",{}),"birthyear"!=o.type&&Object(r.jsxs)(r.Fragment,{children:[s-l>0&&"\u0e15\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 ".concat(l," \u0e21\u0e35\u0e2d\u0e32\u0e22\u0e38 ").concat(s-l," \u0e1b\u0e35"),s-l<0&&"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 ".concat(l," \u0e40\u0e01\u0e34\u0e14 ").concat(s-l," \u0e1b\u0e35")]})]}),Object(r.jsx)(O,{className:"mt-1",block:!0,outlined:!0,children:"\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e19\u0e35\u0e49"})]})]})})};function vn(){var n=Object(u.a)(["\n  border: none;\n  color: #fff;\n  display: flex;\n  font-size: 24px;\n  line-height: 1;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  right: 8px;\n  top: 8px;\n\n  z-index: 10;\n  background: rgba(51, 51, 51, 0.5);\n  border-radius: 16px;\n"]);return vn=function(){return n},n}function On(){var n=Object(u.a)(["\n  width: calc(100% - ","px);\n  max-width: 480px;\n  /* align-items: center; */\n  /* transform: translateY(-50%); */\n  border-radius: 8px;\n  background-color: #ece8e3;\n  box-shadow: 0px 2px 4px ",";\n  color: #222;\n  position: relative;\n  padding: ","px;\n  box-sizing: border-box;\n\n  transition: 0.3s all;\n  ","\n\n* {\n    margin: 0;\n    margin-bottom: ","px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    line-height: 1.2;\n  }\n"]);return On=function(){return n},n}function yn(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #0008;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n\n  transition: 0.3s all;\n  ","\n"]);return yn=function(){return n},n}var kn=l.b.div(yn(),(function(n){return!n.open&&"\n    opacity: 0;\n    pointer-events: none;\n  "})),wn=l.b.div(On(),2*d.spacing.x2,Object(q.a)(.3,"#ece8e3"),d.spacing.x3,(function(n){return!n.open&&"\n    opacity: 0;\n    transform: translateY(100px);\n  "}),d.spacing.x1),Cn=l.b.button(vn());var Mn=function(n){var t=n.open,e=n.setOpen,i=void 0===e?function(n){}:e,o=n.children,a=n.onClose,c=void 0===a?function(){}:a;return Object(r.jsx)(kn,{open:t,onClick:function(n){n.currentTarget==n.target&&i(!1)},children:Object(r.jsxs)(wn,{open:t,children:[Object(r.jsx)(Cn,{onClose:c,onClick:function(n){i(!1),c(n)},children:"\xd7"}),o]})})},zn=e(38),Tn=e(10);function En(){var n=Object(u.a)(["\n  position: absolute;\n  top: 32px;\n  left: ","px;\n  transform: translate(-50%, -50%);\n  background-color: ",";\n  height: 1px;\n  width: 8px;\n"]);return En=function(){return n},n}function Sn(){var n=Object(u.a)(["\n  position: absolute;\n  top:32px;\n  left: ","px;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  padding: ","px;\n  background-color: ",";\n  transition: 0.5s all;\n"]);return Sn=function(){return n},n}function Yn(){var n=Object(u.a)(["\n  position: absolute;\n"]);return Yn=function(){return n},n}var Bn=l.b.div(Yn()),Dn=l.b.div(Sn(),4.5*d.spacing.x1,d.spacing.xs,(function(n){return n.isBorn?"#DED8C9":"#161514"})),Rn=l.b.div(En(),4.5*d.spacing.x1,(function(n){return n.isBorn?"#333":"#fff"}));var Pn=function(n){var t=n.year,e=n.y,o=n.yearMode,a=(n.birthYear,n.data),c=n.zoomLevel,s=void 0===c?1:c,u=(n.className,n.children,n.style,n.isBorn),l=n.smoothTransition,b=void 0===l||l,p=n.onDialogOpen,f=void 0===p?function(n){}:p,x=n.onCollapsedClick,g=void 0===x?function(n){}:x,j=Object(i.useMemo)((function(){return Math.floor((s-C.minZoom)/C.zoomStep)+C.minZoom}),[s]),h=function(n){return n<j?n*C.spacePerEvent:Math.ceil(j-1)*C.spacePerEvent+C.yOffsetCollapsedEvents},m=function(n){return n<j?0:Math.floor(n-j)*C.xSpacePerCollapsedEvent};return Object(r.jsxs)(Bn,{style:{transform:"translateY(".concat(e,"px)"),transition:b?"0.3s all":"none"},children:[Object(r.jsx)(Dn,{isBorn:u,children:y(t,o)}),Object(zn.a)(Array(Math.max(Math.floor(j-1),0))).map((function(n,t){return Object(r.jsx)(Rn,{isBorn:u,style:{transform:"translate(-50%, ".concat(C.spacePerEvent*(t+1),"px)")}},t)})),a.events.map((function(n,e){return Object(r.jsx)(on,{y:h(e),x:d.bubbleXOffset+m(e),title:"birthyear"==n.type?n.name:n.event,type:n.type,image:n.image,collapsed:e>=j,z:10-e,onClick:function(){return f(n)},onCollapsedClick:function(t){return g(t,n)}},t+"-"+e)}))]})},Nn=e(37),Fn=e(74),Hn=e(35),An=e.n(Hn),Ln=e.p+"static/media/events.384cfac5.csv",Zn=e.p+"static/media/celebrities.830a867e.csv",In=e.p+"static/media/life.91f8f7a1.csv",Gn=e(36);function _n(){var n=Object(u.a)(["\n  position: absolute;\n  left: ","px;\n  height: 100%;\n  width: 1px;\n\n  background-color: ",";\n"]);return _n=function(){return n},n}function Wn(){var n=Object(u.a)(["\n  font-weight: bold;\n  font-size: ","px;\n  margin-top: -4px;\n"]);return Wn=function(){return n},n}function Xn(){var n=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ","px;\n  height: ","px;\n  white-space: nowrap;\n  top: 0;\n  left: ","px;\n  /* padding: 4px 8px; */\n  background-color: ",";\n  color: ",";\n  border: ","px solid #f005;\n  border-radius: ","px;\n  /* border-radius: 50%; */\n  transform: translateY(-50%);\n  transition: 0.5s all;\n\n  /* width: 50px; */\n"]);return Xn=function(){return n},n}function Jn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 4px;\n  background-color: #f005;\n  position: fixed;\n  top: 50vh;\n"]);return Jn=function(){return n},n}function qn(){var n=Object(u.a)(["\n  width: 100%;\n  position: fixed;\n  top: 50vh;\n  z-index: 100;\n"]);return qn=function(){return n},n}function Kn(){var n=Object(u.a)(["\n  position: fixed;\n  right: ","px;\n  bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n\n  "," {\n    font-size: 1.2em;\n  }\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  right: ","px;\n  padding: ","px;\n\n  text-align: right;\n  background: #ece8e3;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 0px 0px 8px 8px;\n  z-index: 100;\n  color: #333;\n\n  h1 {\n    margin: 0;\n    line-height: 1.2;\n    margin-bottom: ","px;\n  }\n"]);return Qn=function(){return n},n}function Un(){var n=Object(u.a)(["\n\n  color: ",';;\n  transition: 0.5s all;\n\n  background-color: #DED8C9;\n\n  &::before {\n    content: " ";\n    background-color: ',";\n    color: ",';\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    pointer-events: none;\n    z-index: 0;\n    transition: 0.5s all;\n  }\n  \n  &::after {\n    content: " ";\n    background: \n    ',"\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    pointer-events: none;\n    z-index: 0;\n\n    transition: 0.5s all;\n  }\n"]);return Un=function(){return n},n}var Vn=Object(l.b)(j)(Un(),(function(n){return n.isBorn?"#333":"#fff"}),(function(n){return n.isBorn?"#DED8C9":"#161514"}),(function(n){return n.isBorn?"#333":"#fff"}),(function(n){return n.isBorn?"radial-gradient(\n        100% 60% at 50% 45%, \n        rgba(85, 80, 72, 0) 30%, \n        rgba(85, 80, 72, 0.57) 85%, \n        rgba(85, 80, 72, 0.75) 100%\n      );":"radial-gradient(\n        100% 60% at 50% 45%, \n        rgba(0, 0, 0, 0) 30%, \n        rgba(0, 0, 0, 0.57) 85%, \n        rgba(0, 0, 0, 0.75) 100%\n      );"})),$n=l.b.div(Qn(),d.spacing.x2,d.spacing.x2,d.spacing.x1),nt=l.b.div(Kn(),d.spacing.x2,O),tt=l.b.div(qn()),et=l.b.div(Jn()),rt=l.b.div(Xn(),9*d.spacing.x1,5*d.spacing.x1,d.spacing.x2,(function(n){return n.isBorn?"#e4dfd3":"#2c2b28"}),(function(n){return n.isBorn?"#333":"#fff"}),d.spacing.xs,50*d.spacing.x1),it=l.b.div(Wn(),25),ot=l.b.div(_n(),d.spacing.x2+4.5*d.spacing.x1,(function(n){return n.isBorn?"#333":"#fff"})),at=[C.minZoom,C.minZoom+C.maxZoomSteps*C.zoomStep],ct=C.yearRangeMin-C.yearsOffset,st=C.yearRangeMax+C.yearsOffset,ut=(C.yearRangeMax-C.yearRangeMin+2*C.yearsOffset)*C.yearHeight,lt=ut*at[1],dt=lt-ut,bt=2*lt-ut,pt=Fn.a().domain([ct,st]).range([dt,dt+ut]);var ft=function(n){var t=n.birthYear,e=n.yearMode,o=n.onYearChange,a=void 0===o?function(n){}:o,c=Object(i.useState)(!1),u=Object(s.a)(c,2),l=u[0],b=u[1],p=Object(i.useState)({}),f=Object(s.a)(p,2),x=f[0],g=f[1],h=Object(i.useState)(!1),m=Object(s.a)(h,2),v=m[0],z=m[1],T=w([]),E=Object(s.a)(T,2),S=E[0],Y=E[1],B=w(Tn.b),D=Object(s.a)(B,2),R=D[0],P=D[1],N=w((function(){return pt})),F=Object(s.a)(N,2),H=F[0],A=F[1],L=w(!0),Z=Object(s.a)(L,2),I=(Z[0],Z[1],w(!1)),G=Object(s.a)(I,2),_=G[0],W=(G[1],Object(i.useState)(0)),X=Object(s.a)(W,2),J=X[0],q=X[1],K=Object(i.useState)(null),Q=Object(s.a)(K,2),U=(Q[0],Q[1],Object(i.useMemo)((function(){return[H(ct),H(st)]}),[H])),V=Object(i.useState)(null),$=Object(s.a)(V,2),nn=$[0],tn=$[1],en=Object(i.useRef)(null),rn=Object(i.useRef)(null);Object(Gn.a)((function(n){console.log(n);var t=n.da[0],e=n.delta[0]+n.delta[1],r=document.body.scrollTop||document.documentElement.scrollTop,i=n.origin[0]+r;console.log(n.origin),sn(e/t,i)}),{domTarget:rn,eventOptions:{passive:!1,capture:!0}}),Object(i.useEffect)((function(){nn&&window.removeEventListener("scroll",nn);var n=function(n){var t=document.body.scrollTop||document.documentElement.scrollTop;t<U[0]&&(console.log("too low"),n.preventDefault(),window.scrollTo(0,U[0])),t>U[1]&&(console.log("too high"),n.preventDefault(),window.scrollTo(0,U[1]));var e=document.documentElement.scrollTop+(en.current?en.current.getBoundingClientRect():0).top;q(Math.floor(H.invert(e)))};tn((function(){return n})),window.addEventListener("scroll",n,{passive:!1})}),[U]);var on=function(n){return new Promise((function(t){var e=An()(n);e.forEach((function(n){n.y=H(n.year)})),Y(e).then(t)}))},an=function(n){g(n),b(!0)},cn=function(n,t,e){var r=n.invert([0,t])[1];return n.translate(0,r).scale(e).translate(0,-r)},sn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;console.log(n,t);var e=k(R.k+n,at[0],at[1]),r=0;if(null===t){var i=document.documentElement.scrollTop,o=en.current?en.current.getBoundingClientRect():0;r=i+o.top}else r=t;var a=cn(R,r,e/R.k),c=a.rescaleY(pt);P(a),A((function(){return c}))},un=function(n,t){var e=en.current.getBoundingClientRect(),r=(t?t(n):H(n))-e.top;window.scrollTo(0,r)};return Object(i.useEffect)((function(){on(S)}),[H]),Object(i.useEffect)((function(){Promise.all([Tn.a(Ln),Tn.a(In),Tn.a(Zn)]).then((function(n){console.log("fileloaded");var e=n[0],r=(n[1],function(n,t){var e=Nn.a().key((function(n){return n.year})).entries(n).map((function(n){return{year:n.key,events:n.values}}));for(var r in e.forEach((function(n){n.events.sort((function(n,t){return n.importance-t.importance})),n.celebrities=[]})),e)for(var i in t)+t[i].year==+e[r].year&&(t[i].type="birthyear",e[r].events.push(t[i]));for(var o=e.map((function(n){return n.year})),a=ct;a<=st;a++)o.includes(a)||e.push({year:a,events:[]});return e.sort((function(n,t){return n.year-t.year})),e}(e,n[2]));on(r).then((function(){return un(t)}))}))}),[]),Object(i.useEffect)((function(){console.log("!!!!"),document.addEventListener("gesturestart",(function(n){return n.preventDefault()})),document.addEventListener("gesturechange",(function(n){return n.preventDefault()}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(tt,{children:[Object(r.jsx)(et,{ref:en}),Object(r.jsx)(j,{style:{position:"relative"},children:Object(r.jsx)(rt,{isBorn:J>=t,children:J>t?Object(r.jsxs)("div",{style:{textAlign:"center"},children:[Object(r.jsx)("small",{children:"\u0e2d\u0e32\u0e22\u0e38"}),Object(r.jsxs)(it,{children:[J-t," \u0e1b\u0e35"]})]}):J<t?Object(r.jsxs)("div",{style:{textAlign:"center"},children:[Object(r.jsx)("small",{children:"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e01\u0e34\u0e14"}),Object(r.jsxs)(it,{children:[t-J," \u0e1b\u0e35"]})]}):"\u0e1b\u0e35\u0e41\u0e23\u0e01\u0e40\u0e01\u0e34\u0e14"})})]}),Object(r.jsxs)(Vn,{isBorn:J>=t,style:{height:"".concat(bt,"px"),position:"relative"},ref:rn,children:[Object(r.jsx)(ot,{isBorn:J>=t}),Object(r.jsxs)($n,{children:[Object(r.jsxs)("h1",{style:{marginBottom:"0"},children:[Object(r.jsx)("div",{style:{fontSize:"21px"},children:"\u0e42\u0e25\u0e01\u0e43\u0e19\u0e21\u0e38\u0e21\u0e21\u0e2d\u0e07"}),Object(r.jsxs)("div",{style:{fontSize:"28px"},children:["\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 ",Object(r.jsx)("u",{children:y(t,e)})]})]}),Object(r.jsxs)("p",{style:{marginBottom:d.spacing.x1},children:["(\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e2d\u0e32\u0e22\u0e38 ",(new Date).getFullYear()-t," \u0e1b\u0e35)"]}),Object(r.jsx)(O,{onClick:function(){return z(!0)},children:"\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14"})]}),S.map((function(n,i){return Object(r.jsx)(Pn,{year:n.year,data:n,yearMode:e,isBorn:J>=t,birthYear:t,y:n.y,onDialogOpen:an,zoomLevel:R.k,smoothTransition:!_,onCollapsedClick:function(n){return sn(C.zoomStep,n.pageY)}},"item".concat(i))})),Object(r.jsx)(mn,{open:l,setOpen:b,data:x,title:"birthyear"==x.type?x.name:x.event,year:x.year,yearMode:e,birthYear:t,image:x.image,type:x.type}),Object(r.jsxs)(nt,{children:[Object(r.jsx)(O,{onClick:function(){return sn(C.zoomStep)},children:"+"}),Object(r.jsx)(O,{onClick:function(){return sn(-C.zoomStep)},children:"-"})]})]}),Object(r.jsxs)(Mn,{open:v,setOpen:z,children:[Object(r.jsx)("h2",{children:"\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14"}),Object(r.jsx)(M,{onSubmit:function(n){z(!1),a(n),un(n)},yearMode:e})]})]})};function xt(){var n=Object(u.a)(["\n  padding-bottom: ","px;\n  color: #fff;\n  margin-right: ","px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  a:link, a:visited {\n    color: #fff;\n  }\n\n  a.active {\n    opacity: 0.7;\n    font-weight: bold;\n    text-decoration: none;\n  }\n"]);return xt=function(){return n},n}function gt(){var n=Object(u.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 80px;\n  background: linear-gradient(180deg, #38353100 0%, #383531ff 100%);\n  z-index: 100;\n"]);return gt=function(){return n},n}var jt=l.b.div(gt()),ht=l.b.div(xt(),d.spacing.x2,d.spacing.x2);var mt=function(n){var t=n.mode,e=void 0===t?"home":t,i=n.yearMode,o=n.onYearModeChange,a=void 0===o?function(n){}:o,c=n.onOpenAbout,s=void 0===c?function(){}:c,u=n.onHome,l=void 0===u?function(){}:u,d=function(n,t){n.preventDefault(),console.log("!!!!!"),a(t)};return Object(r.jsx)(jt,{children:Object(r.jsxs)(j,{fillHeight:!0,style:{display:"flex",alignItems:"flex-end"},children:["home"!=e&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(ht,{onClick:l,children:"Home"})}),Object(r.jsxs)(ht,{children:[Object(r.jsx)("a",{href:"#",onClick:function(n){d(n,"be")},className:"be"==i?"active":"",children:"\u0e1e.\u0e28."})," ","|"," ",Object(r.jsx)("a",{href:"#",onClick:function(n){d(n,"ad")},className:"ad"==i?"active":"",children:"\u0e04.\u0e28."})]}),Object(r.jsx)("div",{style:{flexGrow:1}}),"home"!=e&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ht,{children:"\u0e27\u0e34\u0e18\u0e35\u0e40\u0e25\u0e48\u0e19"}),Object(r.jsx)(ht,{children:"\u0e2a\u0e31\u0e0d\u0e25\u0e31\u0e01\u0e29\u0e13\u0e4c"})]}),Object(r.jsx)(ht,{onClick:s,children:"About"})]})})};var vt=function(){var n=Object(i.useState)("home"),t=Object(s.a)(n,2),e=t[0],o=t[1],a=Object(i.useState)("ad"),c=Object(s.a)(a,2),u=c[0],l=c[1],d=Object(i.useState)(1995),b=Object(s.a)(d,2),f=b[0],x=b[1],g=Object(i.useState)(!1),j=Object(s.a)(g,2),h=j[0],m=j[1],v=Object(i.useState)(!1),O=Object(s.a)(v,2),y=O[0],k=O[1],w=function(n){console.log("start transtiion"),x(n),m(!1),setTimeout((function(){m(!0)}),100)},C=function(n){console.log("pagechange"),o(n)};return Object(r.jsxs)("div",{id:"app",className:"App",children:[Object(r.jsx)(p,{}),"home"==e&&Object(r.jsx)(E,{yearMode:u,onProceed:w}),"timeline"==e&&Object(r.jsx)(ft,{yearMode:u,birthYear:f,onYearChange:w}),Object(r.jsx)(J,{yearMode:u,blink:h,birthYear:f,onPageChange:function(){C("timeline")}}),Object(r.jsx)(mt,{mode:e,yearMode:u,onYearModeChange:function(n){return l(n)},onHome:function(){C("home")},onOpenAbout:function(){return k(!0)}}),Object(r.jsxs)(Mn,{open:y,setOpen:k,children:[Object(r.jsx)("p",{className:"mb-0",children:"About"}),Object(r.jsx)("h2",{className:"mb-4",children:'\u0e08\u0e32\u0e01 "\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22\u0e19\u0e35\u0e49"'}),Object(r.jsx)("p",{children:"\u0e40\u0e23\u0e32\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e27\u0e48\u0e32\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e08\u0e30\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e44\u0e14\u0e49 \u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e40\u0e01\u0e34\u0e14\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e01\u0e31\u0e19 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e01\u0e31\u0e19\u0e08\u0e30\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e44\u0e14\u0e49 \u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e04\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e27\u0e48\u0e32\u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e19\u0e40\u0e15\u0e34\u0e1a\u0e42\u0e15\u0e21\u0e32\u0e43\u0e19\u0e2a\u0e20\u0e32\u0e1e\u0e41\u0e27\u0e14\u0e25\u0e49\u0e2d\u0e21\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19 \u0e16\u0e39\u0e01\u0e2b\u0e25\u0e48\u0e2d\u0e2b\u0e25\u0e2d\u0e21\u0e14\u0e49\u0e27\u0e22\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e02\u0e2d\u0e07\u0e22\u0e38\u0e04\u0e2a\u0e21\u0e31\u0e22\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19 \u0e40\u0e23\u0e32\u0e40\u0e25\u0e22\u0e2d\u0e22\u0e32\u0e01\u0e2b\u0e32\u0e27\u0e34\u0e18\u0e35\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32\u0e01\u0e31\u0e1a\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e46"}),Object(r.jsx)("p",{className:"mb-4",children:"\u0e40\u0e23\u0e32\u0e2b\u0e27\u0e31\u0e07\u0e27\u0e48\u0e32\u0e01\u0e32\u0e23\u0e41\u0e0a\u0e23\u0e4c\u0e2a\u0e34\u0e48\u0e07\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e49\u0e04\u0e19\u0e23\u0e2d\u0e1a\u0e15\u0e31\u0e27\u0e04\u0e38\u0e13 \u0e08\u0e30\u0e44\u0e14\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e1a\u0e17\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e41\u0e25\u0e30\u0e1e\u0e27\u0e01\u0e40\u0e02\u0e32\u0e44\u0e14\u0e49\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e01\u0e31\u0e19\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19"}),Object(r.jsxs)("p",{className:"text-right",children:["\u0e18\u0e19\u0e27\u0e34\u0e0a\u0e0d\u0e4c \u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e1e\u0e07\u0e29\u0e4c\u0e0a\u0e31\u0e22 - \u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 1995",Object(r.jsx)("br",{}),"\u0e2d\u0e25\u0e34\u0e29\u0e32 \u0e25\u0e34\u0e49\u0e21\u0e44\u0e1e\u0e1a\u0e39\u0e25\u0e22\u0e4c - \u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 1996"]}),Object(r.jsx)("p",{className:"text-right",children:"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1e\u0e39\u0e14\u0e04\u0e38\u0e22\u0e01\u0e31\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48 _____"})]})]})},Ot=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,77)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;e(n),r(n),i(n),o(n),a(n)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(vt,{})}),document.getElementById("root")),Ot(console.log)}},[[73,1,2]]]);
//# sourceMappingURL=main.d13f7127.chunk.js.map