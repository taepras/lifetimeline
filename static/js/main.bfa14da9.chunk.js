(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{61:function(n,t,e){},64:function(n,t,e){},71:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e(1),o=e.n(i),a=e(30),c=e.n(a),s=(e(61),e(4)),u=e(3),l=e(2),d={containerMaxWidth:600,spacing:{xxs:2,xs:4,x1:8,x2:16,x3:24,x4:32}};function b(){var n=Object(u.a)(['\n  body {\n    /* background-color: #DED8C9; */\n    height: 100vh;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n\n    background-color: #DED8C9;\n    color: #333;\n    /* background: \n    radial-gradient(\n        100% 60% at 50% 45%, \n        rgba(137, 130, 119, 0) 30%, \n        rgba(85, 80, 72, 0.57) 85%, \n        rgba(85, 80, 72, 0.75) 100%\n      ), \n      #DED8C9; */\n    background-blend-mode: normal, normal;\n    \n    &::after {\n      content: " ";\n      background: \n      ',"\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      pointer-events: none;\n      z-index: 0;\n    }\n\n    font-family: thonglor;\n    font-size: 20px;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: anugrom;\n    font-weight: normal;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: ","px;\n  }\n\n  .mt-0 { margin-top: 0; }\n  .mt-1 { margin-top: ","px !important; }\n  .mt-2 { margin-top: ","px !important; }\n  .mt-3 { margin-top: ","px !important; }\n  .mt-4 { margin-top: ","px !important; }\n\n  .mb-0 { margin-bottom: 0; }\n  .mb-1 { margin-bottom: ","px !important; }\n  .mb-2 { margin-bottom: ","px !important; }\n  .mb-3 { margin-bottom: ","px !important; }\n  .mb-4 { margin-bottom: ","px !important; }\n\n  .mr-0 { margin-right: 0; }\n  .mr-1 { margin-right: ","px !important; }\n  .mr-2 { margin-right: ","px !important; }\n  .mr-3 { margin-right: ","px !important; }\n  .mr-4 { margin-right: ","px !important; }\n\n  .text-center { text-align: center; }\n  .text-left { text-align: left; }\n  .text-right { text-align: right; }\n"]);return b=function(){return n},n}var p=Object(l.a)(b(),(function(n){return n.isBorn?"radial-gradient(\n          100% 60% at 50% 45%, \n          rgba(85, 80, 72, 0) 30%, \n          rgba(85, 80, 72, 0.4) 85%, \n          rgba(85, 80, 72, 0.6) 100%\n        );":"radial-gradient(\n          100% 60% at 50% 45%, \n          rgba(0, 0, 0, 0) 30%, \n          rgba(0, 0, 0, 0.4) 85%, \n          rgba(0, 0, 0, 0.6) 100%\n        );"}),d.spacing.x2,d.spacing.x1,d.spacing.x2,d.spacing.x3,d.spacing.x4,d.spacing.x1,d.spacing.x2,d.spacing.x3,d.spacing.x4,d.spacing.x1,d.spacing.x2,d.spacing.x3,d.spacing.x4);e(64);function f(){var n=Object(u.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: ",";\n"]);return f=function(){return n},n}var x=l.b.div(f(),(function(n){return n.z||1}));function g(){var n=Object(u.a)(["\n    width: auto;\n    max-width: ","px;\n    margin: auto;\n    padding: 0 ","px;\n\n    ","\n"]);return g=function(){return n},n}console.log(d.spacing.x2);var h=l.b.div(g(),d.containerMaxWidth,(function(n){return n.padding||d.spacing.x2}),(function(n){return n.fillHeight&&"height: 100%;"}));function j(){var n=Object(u.a)(["\n    width: 100%;\n    border: 1px solid #eee;\n    border-radius: ","px;\n    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);\n    height: ","px;\n    padding: 0 ","px;\n"]);return j=function(){return n},n}var m=l.b.select(j(),d.spacing.xs,d.spacing.x4,d.spacing.x1);function v(){var n=Object(u.a)(["\n    ","\n    border: ",";\n    border-radius: ","px;\n    /* height: ","px; */\n    padding: ","px ","px;\n    background-color: ",";\n    ","\n    color: #fff;\n"]);return v=function(){return n},n}var O=l.b.button(v(),(function(n){return n.block&&"width: 100%;"}),(function(n){return n.outlined?"1px solid #fff":"none"}),d.spacing.xs,d.spacing.x4,d.spacing.x1,1.5*d.spacing.x1,(function(n){return n.outlined?"transparent":"#C14953"}),(function(n){return!n.outlined&&"box-shadow: 0px 4px 8px rgba(142, 34, 43, 0.21);"})),y=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ad",e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(e?"ad"==t?"\u0e04.\u0e28. ":"\u0e1e.\u0e28. ":"")+("ad"==t?+n:+n+543)},k=function(n,t,e){return Math.min(Math.max(n,t),e)},w=function(n){var t=Object(i.useState)(n),e=Object(s.a)(t,2),r=e[0],o=e[1],a=Object(i.useRef)(null);Object(i.useEffect)((function(){a.current&&(a.current(r),a.current=null)}),[a.current,r]);var c=Object(i.useCallback)((function(n){return o(n),new Promise((function(n){a.current=n}))}),[o]);return[r,c]},C=1920,T=2020,Y=2,z=120,D=80,M=60,E=16;var S=function(n){for(var t=n.onSubmit,e=void 0===t?function(n){}:t,o=n.yearMode,a=n.yearRangeMin,c=void 0===a?C:a,u=n.yearRangeMax,l=void 0===u?T:u,d=n.buttonLabel,b=[],p=Object(i.useState)(-1),f=Object(s.a)(p,2),x=f[0],g=f[1],h=Object(i.useState)(""),j=Object(s.a)(h,2),v=j[0],k=j[1],w=c;w<=l;w++)b.push(w);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(m,{onChange:function(n){g(+n.target.value)},children:[Object(r.jsx)("option",{children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14"}),b.reverse().map((function(n,t){return Object(r.jsx)("option",{value:n,children:y(n,o,!0)},"select-".concat(n))}))]}),v,Object(r.jsx)(O,{className:"mt-1",block:!0,onClick:function(){x>0?e(x):k("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14")},children:d||"\u0e44\u0e1b\u0e22\u0e49\u0e2d\u0e19\u0e14\u0e39\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e01\u0e31\u0e19"})]})};function B(){var n=Object(u.a)(["\n  font-size: 48px;\n  margin-bottom: 0;\n  margin-bottom: ","px;\n"]);return B=function(){return n},n}var N=l.b.h1(B(),d.spacing.x2);var F=function(n){for(var t=n.onProceed,e=n.yearMode,o=[],a=Object(i.useState)(-1),c=Object(s.a)(a,2),u=(c[0],c[1],Object(i.useState)("")),l=Object(s.a)(u,2),b=(l[0],l[1],C);b<=T;b++)o.push(b);return Object(r.jsx)(x,{children:Object(r.jsx)(h,{fillHeight:!0,style:{display:"flex",alignItems:"center"},padding:d.spacing.x4,children:Object(r.jsxs)("div",{style:{marginBottom:"80px"},children:[Object(r.jsxs)(N,{children:["\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22",Object(r.jsx)("u",{children:"\u0e44\u0e2b\u0e19"}),"?"]}),Object(r.jsx)("p",{children:"\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e34\u0e14\u0e04\u0e19\u0e25\u0e30\u0e1b\u0e35 \u0e01\u0e47\u0e42\u0e15\u0e21\u0e32\u0e43\u0e19\u0e2a\u0e20\u0e32\u0e1e\u0e2a\u0e31\u0e07\u0e04\u0e21\u0e04\u0e19\u0e25\u0e30\u0e41\u0e1a\u0e1a \u0e0a\u0e27\u0e19\u0e04\u0e38\u0e13\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e25\u0e2d\u0e07\u0e14\u0e39\u0e27\u0e48\u0e32\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22\u0e04\u0e38\u0e13\u0e40\u0e15\u0e34\u0e1a\u0e42\u0e15\u0e1c\u0e48\u0e32\u0e19\u0e2d\u0e30\u0e44\u0e23\u0e21\u0e32 \u0e41\u0e25\u0e30\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e01\u0e31\u0e19\u0e41\u0e25\u0e49\u0e27 \u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e42\u0e15\u0e21\u0e32\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e1a\u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e44\u0e07\u0e1a\u0e49\u0e32\u0e07"}),Object(r.jsx)("p",{children:"\u0e04\u0e38\u0e13\u0e40\u0e01\u0e34\u0e14\u0e1b\u0e35"}),Object(r.jsx)(S,{onSubmit:t,yearMode:e})]})})})};function P(){var n=Object(u.a)(["\n  width: auto;\n  ","\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return P=function(){return n},n}var H=l.b.div(P(),(function(n){return n.fillHeight&&"height: 100%;"}));var A=function(n){var t=n.className,e=n.children,i=n.fillHeight;return Object(r.jsx)(H,{className:t,fillHeight:i,children:Object(r.jsx)("div",{children:e})})};function I(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 60%;\n  z-index: -1;\n  background: linear-gradient(to top, #000f 90%, #0000 100%);\n\n  animation-name: ",";\n  animation-delay: ","s;\n  animation-duration: ","s;\n  animation-fill-mode: forwards;\n  transition: 0.3s all;\n"]);return I=function(){return n},n}function R(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60%;\n  z-index: -1;\n  background: linear-gradient(to bottom, #000f 90%, #0000 100%);\n\n  animation-name: ",";\n  animation-delay: ","s;\n  animation-duration: ","s;\n  animation-fill-mode: forwards;\n  transition: 0.3s all;\n"]);return R=function(){return n},n}function L(){var n=Object(u.a)(["\n  color: #fff;\n\n  animation-name: ",";\n  animation-delay: ","s;\n  animation-duration: ","s;\n  animation-fill-mode: forwards;\n  transition: 0.3s all;\n\n  * {\n    margin: 0;\n    margin-bottom: ","px;\n  }\n"]);return L=function(){return n},n}function _(){var n=Object(u.a)(["\n  0%   { opacity: 1; }\n  100% { opacity: 0; }\n"]);return _=function(){return n},n}function J(){var n=Object(u.a)(["\n  0%   { transform: translateY(0%); }\n  20%  { transform: translateY(50%); }\n  40%  { transform: translateY(10%); }\n  100% { transform: translateY(100%); }\n"]);return J=function(){return n},n}function W(){var n=Object(u.a)(["\n  0%   { transform: translateY(0%); }\n  20%  { transform: translateY(-50%); }\n  40%  { transform: translateY(-10%); }\n  100% { transform: translateY(-100%); }\n"]);return W=function(){return n},n}function G(){var n=Object(u.a)(["\n  color: #fff;\n  text-align: center;\n\n  pointer-events: none;\n  transition: 1s opacity;\n  z-index: 1000;\n  ","\n"]);return G=function(){return n},n}var q=Object(l.b)(x)(G(),(function(n){return!n.blink&&"opacity: 0;"})),K=Object(l.c)(W()),Q=Object(l.c)(J()),U=Object(l.c)(_()),V=Object(l.b)(A)(L(),(function(n){return n.blink?U:"none"}),3,2,d.spacing.x1),X=l.b.div(R(),(function(n){return n.blink?K:"none"}),3,2),Z=l.b.div(I(),(function(n){return n.blink?Q:"none"}),3,2);var $=function(n){var t=n.birthYear,e=void 0===t?0:t,o=n.yearMode,a=void 0===o?"ad":o,c=n.blink,u=void 0!==c&&c,l=n.onPageChange,d=void 0===l?function(){}:l,b=Object(i.useState)(!1),p=Object(s.a)(b,2),f=p[0],x=p[1];return Object(i.useEffect)((function(){console.log("blink check",u),u&&(console.log("blink started"),x(!0),setTimeout(d,1500),setTimeout((function(){return x(!1)}),5e3))}),[u]),Object(r.jsxs)(q,{z:100,blink:f,children:[Object(r.jsx)(X,{blink:u}),Object(r.jsx)(Z,{blink:u}),Object(r.jsxs)(V,{fillHeight:!0,blink:u,children:[Object(r.jsx)("p",{children:"\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e42\u0e25\u0e01\u0e43\u0e19\u0e21\u0e38\u0e21\u0e21\u0e2d\u0e07\u0e02\u0e2d\u0e07"}),Object(r.jsxs)("h1",{children:["\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 ",Object(r.jsx)("u",{children:y(e,a)})]})]})]})},nn=e(7);function tn(){var n=Object(u.a)([""]);return tn=function(){return n},n}function en(){var n=Object(u.a)(["\n  position: absolute;\n  right: -","px;\n  bottom: -","px;\n  width: 24px;\n  height: 24px;\n\n  background: ",";\n  border-radius: ",';\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &::after {\n    content: " ";\n    display: block;\n    width: 16px;\n    height: 16px;\n    background-color: #fff;\n    border-radius: 50%;\n  }\n']);return en=function(){return n},n}function rn(){var n=Object(u.a)(["\n  width: 64px; //",";\n  flex: 0 0 64px; //",";\n  height: 64px; //",";\n  ","\n  border-radius: ",";\n  box-sizing: border-box;\n  background-color: ",";\n  /* background-image: url(","); */\n  background-size: cover;\n  background-position: center center;\n  border: ","px solid\n    ",";\n  margin-right: ","px;\n  position: relative;\n  box-shadow: 0px 2px 4px\n    ","44;\n\n  transition: 0.3s transform;\n"]);return rn=function(){return n},n}function on(){var n=Object(u.a)(["\n  display: flex;\n  width: 200px;\n  max-width: 200px;\n  height: 64px;\n  overflow: visible;\n  align-items: center;\n  transform: translateY(-50%);\n  position: ",";\n  z-index: ",";\n\n  transition: 0.3s all;\n"]);return on=function(){return n},n}var an=function(n){switch(n){case"thailand":return"#D89D3E";case"world":return"#6599A5";case"birthyear":return"#ac646a";default:return"#fff"}},cn=l.b.div(on(),(function(n){return n.relative?"relative":"absolute"}),(function(n){return n.z})),sn=l.b.div(rn(),(function(n){return n.collapsed?"24px":"64px"}),(function(n){return n.collapsed?"24px":"64px"}),(function(n){return n.collapsed?"24px":"64px"}),(function(n){return n.collapsed&&"transform: scale(0.375);"}),(function(n){return"birthyear"==n.eventType?"50%":"8px"}),(function(n){var t=n.eventType;return Object(nn.b)(.2,an(t))}),(function(n){return n.image}),(function(n){return 3*(n.collapsed?2.5:1)}),(function(n){var t=n.eventType;return an(t)}),1.5*d.spacing.x1,(function(n){var t=n.eventType;return Object(nn.a)(.3,an(t))})),un=l.b.div(en(),3,3,(function(n){var t=n.eventType;return an(t)}),(function(n){return"birthyear"==n.eventType?"50%":"8px 0px"})),ln=l.b.div(tn());var dn=function(n){var t=n.title,e=n.type,i=void 0===e?"world":e,o=n.image,a=n.onClick,c=void 0===a?function(){}:a,s=n.x,u=n.y,l=n.z,d=n.relative,b=n.collapsed,p=void 0!==b&&b,f=n.onCollapsedClick,x=void 0===f?function(){}:f;return Object(r.jsxs)(cn,{onClick:function(n){p?x(n):c()},relative:d,style:{transform:"translate(".concat(s,"px, ").concat(u,"px)")},z:l,children:[Object(r.jsx)(sn,{eventType:i,style:{backgroundImage:"url(/img/events/".concat(o,")")},collapsed:p,children:!p&&Object(r.jsx)(un,{eventType:i})}),!p&&Object(r.jsxs)(ln,{eventType:i,children:["birthyear"==i&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("small",{style:{opacity:.7},children:"\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14"}),Object(r.jsx)("br",{})]}),t]})]})};function bn(){var n=Object(u.a)(["\n  border: none;\n  color: #fff;\n  display: flex;\n  font-size: 24px;\n  line-height: 1;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  right: 8px;\n  top: 8px;\n\n  z-index: 10;\n  background: rgba(51, 51, 51, 0.5);\n  border-radius: 16px;\n"]);return bn=function(){return n},n}function pn(){var n=Object(u.a)(["\n  padding: ","px;\n\n  * {\n    margin: 0;\n    margin-bottom: ","px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  h2 {\n    line-height: 1.2;\n  }\n"]);return pn=function(){return n},n}function fn(){var n=Object(u.a)(["\n  position: absolute;\n  right: -","px;\n  bottom: -","px;\n  /* width: 24px; */\n  height: 24px;\n  padding: 0 ","px;\n\n  background: ",";\n  border-radius: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return fn=function(){return n},n}function xn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 240px;\n\n  border-radius: 8px;\n  box-sizing: border-box;\n  background-size: cover;\n  background-position: center center;\n\n  background-color: ",";\n  background-image: url(",");\n  border: ","px solid\n    ",";\n\n  position: relative;\n"]);return xn=function(){return n},n}function gn(){var n=Object(u.a)(["\n  width: 320px;\n  max-width: calc(100% - ","px);\n  /* align-items: center; */\n  /* transform: translateY(-50%); */\n  border-radius: 8px;\n  background-color: ",";\n  box-shadow: 0px 2px 4px\n    ","44;\n  color: #fff;\n  position: relative;\n\n  transition: 0.3s all;\n  ","\n"]);return gn=function(){return n},n}function hn(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #0008;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n\n  transition: 0.3s all;\n  ","\n"]);return hn=function(){return n},n}var jn=function(n){switch(n){case"thailand":return"#D89D3E";case"world":return"#6599A5";case"birthyear":return"#ac646a";default:return"#fff"}},mn=l.b.div(hn(),(function(n){return!n.open&&"\n    opacity: 0;\n    pointer-events: none;\n  "})),vn=l.b.div(gn(),2*d.spacing.x2,(function(n){var t=n.eventType;return Object(nn.a)(.1,jn(t))}),(function(n){var t=n.eventType;return Object(nn.a)(.3,jn(t))}),(function(n){return!n.open&&"\n    opacity: 0;\n    transform: translateY(100px);\n  "})),On=l.b.div(xn(),(function(n){var t=n.eventType;return Object(nn.b)(.2,jn(t))}),(function(n){return n.image}),4,(function(n){var t=n.eventType;return Object(nn.a)(.1,jn(t))})),yn=l.b.div(fn(),4,4,d.spacing.x1,(function(n){var t=n.eventType;return Object(nn.a)(.1,jn(t))}),(function(n){return"birthyear"==n.eventType?"50%":"8px 0px"})),kn=l.b.div(pn(),d.spacing.x2,d.spacing.x1),wn=l.b.button(bn());var Cn=function(n){var t=n.open,e=n.setOpen,i=void 0===e?function(n){}:e,o=(n.children,n.title,n.data),a=n.type,c=void 0===a?"world":a,s=n.year,u=n.yearMode,l=n.birthYear,d=n.image,b=n.onClick,p=void 0===b?function(){}:b,f=n.onClose,x=void 0===f?function(){}:f;return Object(r.jsx)(mn,{open:t,onClick:function(n){n.currentTarget==n.target&&i(!1)},children:Object(r.jsxs)(vn,{onClick:p,eventType:c,open:t,children:[Object(r.jsx)(wn,{onClose:x,onClick:function(n){i(!1),x(n)},children:"\xd7"}),Object(r.jsx)(On,{style:{backgroundImage:"url(/img/events/".concat(d,")")},eventType:c,children:Object(r.jsxs)(yn,{eventType:c,children:["\u2b24 ",function(n){switch(n){case"thailand":return"\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e44\u0e17\u0e22";case"world":return"\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e42\u0e25\u0e01";case"birthyear":return"\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e2a\u0e33\u0e04\u0e31\u0e0d"}}(o.type)]})}),Object(r.jsxs)(kn,{eventType:c,children:[Object(r.jsx)("h2",{children:"birthyear"==o.type?o.name:o.event}),Object(r.jsxs)("p",{children:[y(s,u,!0)," ","birthyear"==o.type&&"- \u0e1b\u0e35\u0e19\u0e35\u0e49\u0e2d\u0e32\u0e22\u0e38 ".concat((new Date).getFullYear()-s," \u0e1b\u0e35"),Object(r.jsx)("br",{}),"birthyear"!=o.type&&Object(r.jsxs)(r.Fragment,{children:[s-l>0&&"\u0e15\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 ".concat(l," \u0e21\u0e35\u0e2d\u0e32\u0e22\u0e38 ").concat(s-l," \u0e1b\u0e35"),s-l<0&&"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 ".concat(l," \u0e40\u0e01\u0e34\u0e14 ").concat(s-l," \u0e1b\u0e35")]})]}),Object(r.jsx)(O,{className:"mt-1",block:!0,outlined:!0,children:"\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e19\u0e35\u0e49"})]})]})})};function Tn(){var n=Object(u.a)(["\n  border: none;\n  color: #fff;\n  display: flex;\n  font-size: 24px;\n  line-height: 1;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  right: 8px;\n  top: 8px;\n\n  z-index: 10;\n  background: rgba(51, 51, 51, 0.5);\n  border-radius: 16px;\n"]);return Tn=function(){return n},n}function Yn(){var n=Object(u.a)(["\n  width: calc(100% - ","px);\n  max-width: 480px;\n  /* align-items: center; */\n  /* transform: translateY(-50%); */\n  border-radius: 8px;\n  background-color: #ece8e3;\n  box-shadow: 0px 2px 4px ",";\n  color: #222;\n  position: relative;\n  padding: ","px;\n  box-sizing: border-box;\n\n  transition: 0.3s all;\n  ","\n\n* {\n    margin: 0;\n    margin-bottom: ","px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    line-height: 1.2;\n  }\n"]);return Yn=function(){return n},n}function zn(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #0008;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n\n  transition: 0.3s all;\n  ","\n"]);return zn=function(){return n},n}var Dn=l.b.div(zn(),(function(n){return!n.open&&"\n    opacity: 0;\n    pointer-events: none;\n  "})),Mn=l.b.div(Yn(),2*d.spacing.x2,Object(nn.a)(.3,"#ece8e3"),d.spacing.x3,(function(n){return!n.open&&"\n    opacity: 0;\n    transform: translateY(100px);\n  "}),d.spacing.x1),En=l.b.button(Tn());var Sn=function(n){var t=n.open,e=n.setOpen,i=void 0===e?function(n){}:e,o=n.children,a=n.onClose,c=void 0===a?function(){}:a;return Object(r.jsx)(Dn,{open:t,onClick:function(n){n.currentTarget==n.target&&i(!1)},children:Object(r.jsxs)(Mn,{open:t,children:[Object(r.jsx)(En,{onClose:c,onClick:function(n){i(!1),c(n)},children:"\xd7"}),o]})})},Bn=e(10);function Nn(){var n=Object(u.a)(["\n  position: absolute;\n  top:32px;\n  left: ","px;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  padding: ","px;\n  background-color: ",";\n  transition: 0.5s all;\n"]);return Nn=function(){return n},n}function Fn(){var n=Object(u.a)(["\n  position: absolute;\n"]);return Fn=function(){return n},n}var Pn=l.b.div(Fn()),Hn=l.b.div(Nn(),4.5*d.spacing.x1,d.spacing.xs,(function(n){return n.isBorn?"#DED8C9":"#161514"}));var An=function(n){var t=n.year,e=n.y,i=n.yearMode,o=(n.birthYear,n.data),a=n.maxDisplay,c=void 0===a?1:a,s=(n.className,n.children,n.style,n.isBorn),u=n.smoothTransition,l=void 0===u||u,d=n.onDialogOpen,b=void 0===d?function(n){}:d,p=n.onCollapsedClick,f=void 0===p?function(n){}:p,x=function(n){return n<c?n*D:(c-1)*D+M},g=function(n){return n<c?0:(n-c)*E};return Object(r.jsxs)(Pn,{style:{transform:"translateY(".concat(e,"px)"),transition:l?"0.3s all":"none"},children:[Object(r.jsx)(Hn,{isBorn:s,children:y(t,i)}),o.events.map((function(n,e){return Object(r.jsx)(dn,{y:x(e),x:100+g(e),title:"birthyear"==n.type?n.name:n.event,type:n.type,image:n.image,collapsed:e>=c,z:10-e,onClick:function(){return b(n)},onCollapsedClick:function(t){return f(t,n)}},t+"-"+e)}))]})},In=e(36),Rn=e(72),Ln=e(35),_n=e.n(Ln),Jn=e.p+"static/media/events.384cfac5.csv",Wn=e.p+"static/media/celebrities.830a867e.csv",Gn=e.p+"static/media/life.91f8f7a1.csv";function qn(){var n=Object(u.a)(["\n  position: absolute;\n  left: ","px;\n  height: 100%;\n  width: 1px;\n\n  background-color: ",";\n"]);return qn=function(){return n},n}function Kn(){var n=Object(u.a)(["\n  font-weight: bold;\n  font-size: 30px;\n  margin-top: -4px;\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ","px;\n  height: ","px;\n  white-space: nowrap;\n  top: 0;\n  left: ","px;\n  /* padding: 4px 8px; */\n  background-color: ",";\n  color: ",";\n  border: ","px solid #f005;\n  border-radius: ","px;\n  /* border-radius: 50%; */\n  transform: translateY(-50%);\n  transition: 0.5s all;\n\n  /* width: 50px; */\n"]);return Qn=function(){return n},n}function Un(){var n=Object(u.a)(["\n  width: 100%;\n  height: 4px;\n  background-color: #f005;\n  position: fixed;\n  top: 50vh;\n"]);return Un=function(){return n},n}function Vn(){var n=Object(u.a)(["\n  width: 100%;\n  position: fixed;\n  top: 50vh;\n  z-index: 100;\n"]);return Vn=function(){return n},n}function Xn(){var n=Object(u.a)(["\n  position: fixed;\n  right: ","px;\n  bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n\n  "," {\n    font-size: 1.2em;\n  }\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  right: ","px;\n  padding: ","px;\n\n  text-align: right;\n  background: #ece8e3;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 0px 0px 8px 8px;\n  z-index: 100;\n  color: #333;\n\n  h1 {\n    margin: 0;\n    line-height: 1.2;\n    margin-bottom: ","px;\n  }\n"]);return Zn=function(){return n},n}function $n(){var n=Object(u.a)(["\n\n  color: ",';;\n  transition: 0.5s all;\n\n  background-color: #DED8C9;\n\n  &::before {\n    content: " ";\n    background-color: ',";\n    color: ",';\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    pointer-events: none;\n    z-index: 0;\n    transition: 0.5s all;\n  }\n  \n  &::after {\n    content: " ";\n    background: \n    ',"\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    pointer-events: none;\n    z-index: 0;\n\n    transition: 0.5s all;\n  }\n"]);return $n=function(){return n},n}var nt=Object(l.b)(h)($n(),(function(n){return n.isBorn?"#333":"#fff"}),(function(n){return n.isBorn?"#DED8C9":"#161514"}),(function(n){return n.isBorn?"#333":"#fff"}),(function(n){return n.isBorn?"radial-gradient(\n        100% 60% at 50% 45%, \n        rgba(85, 80, 72, 0) 30%, \n        rgba(85, 80, 72, 0.57) 85%, \n        rgba(85, 80, 72, 0.75) 100%\n      );":"radial-gradient(\n        100% 60% at 50% 45%, \n        rgba(0, 0, 0, 0) 30%, \n        rgba(0, 0, 0, 0.57) 85%, \n        rgba(0, 0, 0, 0.75) 100%\n      );"})),tt=l.b.div(Zn(),d.spacing.x2,d.spacing.x2,d.spacing.x1),et=l.b.div(Xn(),d.spacing.x2,O),rt=l.b.div(Vn()),it=l.b.div(Un()),ot=l.b.div(Qn(),9*d.spacing.x1,7*d.spacing.x1,d.spacing.x2,(function(n){return n.isBorn?"#e4dfd3":"#2c2b28"}),(function(n){return n.isBorn?"#333":"#fff"}),d.spacing.xs,d.spacing.x1),at=l.b.div(Kn()),ct=l.b.div(qn(),d.spacing.x2+4.5*d.spacing.x1,(function(n){return n.isBorn?"#333":"#fff"})),st=[1,5],ut=C-Y,lt=T+Y,dt=(T-C+2*Y)*z,bt=dt*st[1],pt=bt-dt,ft=2*bt-dt,xt=Rn.a().domain([ut,lt]).range([pt,pt+dt]);var gt=function(n){var t=n.birthYear,e=n.yearMode,o=n.onYearChange,a=void 0===o?function(n){}:o,c=Object(i.useState)(!1),u=Object(s.a)(c,2),l=u[0],b=u[1],p=Object(i.useState)({}),f=Object(s.a)(p,2),x=f[0],g=f[1],j=Object(i.useState)(!1),m=Object(s.a)(j,2),v=m[0],C=m[1],T=w([]),Y=Object(s.a)(T,2),z=Y[0],D=Y[1],M=w(Bn.b),E=Object(s.a)(M,2),B=E[0],N=E[1],F=w((function(){return xt})),P=Object(s.a)(F,2),H=P[0],A=P[1],I=w(!0),R=Object(s.a)(I,2),L=(R[0],R[1],w(!1)),_=Object(s.a)(L,2),J=_[0],W=(_[1],Object(i.useState)(0)),G=Object(s.a)(W,2),q=G[0],K=G[1],Q=Object(i.useState)(null),U=Object(s.a)(Q,2),V=U[0],X=U[1],Z=Object(i.useMemo)((function(){return[H(ut),H(lt)]}),[H]),$=Object(i.useState)(null),nn=Object(s.a)($,2),tn=nn[0],en=nn[1],rn=Object(i.useRef)(null);Object(i.useEffect)((function(){tn&&window.removeEventListener("scroll",tn);var n=function(n){var t=document.body.scrollTop||document.documentElement.scrollTop;t<Z[0]&&(console.log("too low"),n.preventDefault(),window.scrollTo(0,Z[0])),t>Z[1]&&(console.log("too high"),n.preventDefault(),window.scrollTo(0,Z[1]));var e=document.documentElement.scrollTop+(rn.current?rn.current.getBoundingClientRect():0).top;K(Math.floor(H.invert(e)))};en((function(){return n})),window.addEventListener("scroll",n,{passive:!1})}),[Z]);var on=function(n){return new Promise((function(t){var e=_n()(n);e.forEach((function(n){n.y=H(n.year)})),D(e).then(t)}))},an=function(n){g(n),b(!0)},cn=function(n,t,e){var r=n.invert([0,t])[1];return n.translate(0,r).scale(e).translate(0,-r)},sn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=k(B.k+n,st[0],st[1]),r=0;if(null===t){var i=document.documentElement.scrollTop,o=rn.current?rn.current.getBoundingClientRect():0;r=i+o.top}else r=t;var a=cn(B,r,e/B.k),c=a.rescaleY(xt);N(a),A((function(){return c}))},un=function(n,t){var e=rn.current.getBoundingClientRect(),r=(t?t(n):H(n))-e.top;window.scrollTo(0,r)};return Object(i.useEffect)((function(){on(z)}),[H]),Object(i.useEffect)((function(){Promise.all([Bn.a(Jn),Bn.a(Gn),Bn.a(Wn)]).then((function(n){console.log("fileloaded");var e=n[0],r=(n[1],function(n,t){var e=In.a().key((function(n){return n.year})).entries(n).map((function(n){return{year:n.key,events:n.values}}));for(var r in e.forEach((function(n){n.events.sort((function(n,t){return n.importance-t.importance})),n.celebrities=[]})),e)for(var i in t)+t[i].year==+e[r].year&&(t[i].type="birthyear",e[r].events.push(t[i]));return console.log(e),e}(e,n[2]));on(r).then((function(){return un(t)}))}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(rt,{children:[Object(r.jsx)(it,{ref:rn}),Object(r.jsx)(h,{style:{position:"relative"},children:Object(r.jsx)(ot,{isBorn:q>=t,children:q>t?Object(r.jsxs)("div",{style:{textAlign:"center"},children:["\u0e2d\u0e32\u0e22\u0e38",Object(r.jsxs)(at,{children:[q-t," \u0e1b\u0e35"]})]}):q<t?Object(r.jsxs)("div",{style:{textAlign:"center"},children:["\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e01\u0e34\u0e14",Object(r.jsxs)(at,{children:[t-q," \u0e1b\u0e35"]})]}):"\u0e1b\u0e35\u0e41\u0e23\u0e01\u0e40\u0e01\u0e34\u0e14"})})]}),Object(r.jsxs)(nt,{isBorn:q>=t,style:{height:"".concat(ft,"px"),position:"relative"},onTouchEnd:function(n){n.touches.length>1&&(n.preventDefault(),n.nativeEvent.stopImmediatePropagation(),X(null))},onTouchMove:function(n){if(n.touches.length>1){if(n.preventDefault(),n.nativeEvent.stopImmediatePropagation(),null===V)return void X(n.touches[1].pageY-n.touches[0].pageY);var t=n.touches[1].pageY-n.touches[0].pageY,e=(n.touches[1].pageY+n.touches[0].pageY)/2;sn(t/V-1,e),X(t)}},children:[Object(r.jsx)(ct,{isBorn:q>=t}),Object(r.jsxs)(tt,{children:[Object(r.jsxs)("h1",{style:{marginBottom:"0"},children:[Object(r.jsx)("div",{style:{fontSize:"21px"},children:"\u0e42\u0e25\u0e01\u0e43\u0e19\u0e21\u0e38\u0e21\u0e21\u0e2d\u0e07"}),Object(r.jsxs)("div",{style:{fontSize:"28px"},children:["\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 ",Object(r.jsx)("u",{children:y(t,e)})]})]}),Object(r.jsxs)("p",{style:{marginBottom:d.spacing.x1},children:["(\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e2d\u0e32\u0e22\u0e38 ",(new Date).getFullYear()-t," \u0e1b\u0e35)"]}),Object(r.jsx)(O,{onClick:function(){return C(!0)},children:"\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14"})]}),z.map((function(n,i){return Object(r.jsx)(An,{year:n.year,data:n,yearMode:e,isBorn:q>=t,birthYear:t,y:n.y,onDialogOpen:an,maxDisplay:B.k,smoothTransition:!J,onCollapsedClick:function(n){return sn(1,n.pageY)}},"item".concat(i))})),Object(r.jsx)(Cn,{open:l,setOpen:b,data:x,title:"birthyear"==x.type?x.name:x.event,year:x.year,yearMode:e,birthYear:t,image:x.image,type:x.type}),Object(r.jsxs)(et,{children:[Object(r.jsx)(O,{onClick:function(){return sn(1)},children:"+"}),Object(r.jsx)(O,{onClick:function(){return sn(-1)},children:"-"})]})]}),Object(r.jsxs)(Sn,{open:v,setOpen:C,children:[Object(r.jsx)("h2",{children:"\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14"}),Object(r.jsx)(S,{onSubmit:function(n){C(!1),a(n),un(n)},yearMode:e})]})]})};function ht(){var n=Object(u.a)(["\n  padding-bottom: ","px;\n  color: #fff;\n  margin-right: ","px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  a:link, a:visited {\n    color: #fff;\n  }\n\n  a.active {\n    opacity: 0.7;\n    font-weight: bold;\n    text-decoration: none;\n  }\n"]);return ht=function(){return n},n}function jt(){var n=Object(u.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 80px;\n  background: linear-gradient(180deg, #38353100 0%, #383531ff 100%);\n  z-index: 100;\n"]);return jt=function(){return n},n}var mt=l.b.div(jt()),vt=l.b.div(ht(),d.spacing.x2,d.spacing.x2);var Ot=function(n){var t=n.mode,e=void 0===t?"home":t,i=n.yearMode,o=n.onYearModeChange,a=void 0===o?function(n){}:o,c=n.onOpenAbout,s=void 0===c?function(){}:c,u=n.onHome,l=void 0===u?function(){}:u,d=function(n,t){n.preventDefault(),console.log("!!!!!"),a(t)};return Object(r.jsx)(mt,{children:Object(r.jsxs)(h,{fillHeight:!0,style:{display:"flex",alignItems:"flex-end"},children:["home"!=e&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(vt,{onClick:l,children:"Home"})}),Object(r.jsxs)(vt,{children:[Object(r.jsx)("a",{href:"#",onClick:function(n){d(n,"be")},className:"be"==i?"active":"",children:"\u0e1e.\u0e28."})," ","|"," ",Object(r.jsx)("a",{href:"#",onClick:function(n){d(n,"ad")},className:"ad"==i?"active":"",children:"\u0e04.\u0e28."})]}),Object(r.jsx)("div",{style:{flexGrow:1}}),"home"!=e&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(vt,{children:"\u0e27\u0e34\u0e18\u0e35\u0e40\u0e25\u0e48\u0e19"}),Object(r.jsx)(vt,{children:"\u0e2a\u0e31\u0e0d\u0e25\u0e31\u0e01\u0e29\u0e13\u0e4c"})]}),Object(r.jsx)(vt,{onClick:s,children:"About"})]})})};var yt=function(){var n=Object(i.useState)("home"),t=Object(s.a)(n,2),e=t[0],o=t[1],a=Object(i.useState)("ad"),c=Object(s.a)(a,2),u=c[0],l=c[1],d=Object(i.useState)(1995),b=Object(s.a)(d,2),f=b[0],x=b[1],g=Object(i.useState)(!1),h=Object(s.a)(g,2),j=h[0],m=h[1],v=Object(i.useState)(!1),O=Object(s.a)(v,2),y=O[0],k=O[1],w=function(n){console.log("start transtiion"),x(n),m(!1),setTimeout((function(){m(!0)}),100)},C=function(n){console.log("pagechange"),o(n)};return Object(r.jsxs)("div",{id:"app",className:"App",children:[Object(r.jsx)(p,{}),"home"==e&&Object(r.jsx)(F,{yearMode:u,onProceed:w}),"timeline"==e&&Object(r.jsx)(gt,{yearMode:u,birthYear:f,onYearChange:w}),Object(r.jsx)($,{yearMode:u,blink:j,birthYear:f,onPageChange:function(){C("timeline")}}),Object(r.jsx)(Ot,{mode:e,yearMode:u,onYearModeChange:function(n){return l(n)},onHome:function(){C("home")},onOpenAbout:function(){return k(!0)}}),Object(r.jsxs)(Sn,{open:y,setOpen:k,children:[Object(r.jsx)("p",{className:"mb-0",children:"About"}),Object(r.jsx)("h2",{className:"mb-4",children:'\u0e08\u0e32\u0e01 "\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22\u0e19\u0e35\u0e49"'}),Object(r.jsx)("p",{children:"\u0e40\u0e23\u0e32\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e27\u0e48\u0e32\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e08\u0e30\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e44\u0e14\u0e49 \u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e40\u0e01\u0e34\u0e14\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e01\u0e31\u0e19 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e01\u0e31\u0e19\u0e08\u0e30\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e44\u0e14\u0e49 \u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e04\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e27\u0e48\u0e32\u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e19\u0e40\u0e15\u0e34\u0e1a\u0e42\u0e15\u0e21\u0e32\u0e43\u0e19\u0e2a\u0e20\u0e32\u0e1e\u0e41\u0e27\u0e14\u0e25\u0e49\u0e2d\u0e21\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19 \u0e16\u0e39\u0e01\u0e2b\u0e25\u0e48\u0e2d\u0e2b\u0e25\u0e2d\u0e21\u0e14\u0e49\u0e27\u0e22\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e02\u0e2d\u0e07\u0e22\u0e38\u0e04\u0e2a\u0e21\u0e31\u0e22\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19 \u0e40\u0e23\u0e32\u0e40\u0e25\u0e22\u0e2d\u0e22\u0e32\u0e01\u0e2b\u0e32\u0e27\u0e34\u0e18\u0e35\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32\u0e01\u0e31\u0e1a\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e46"}),Object(r.jsx)("p",{className:"mb-4",children:"\u0e40\u0e23\u0e32\u0e2b\u0e27\u0e31\u0e07\u0e27\u0e48\u0e32\u0e01\u0e32\u0e23\u0e41\u0e0a\u0e23\u0e4c\u0e2a\u0e34\u0e48\u0e07\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e49\u0e04\u0e19\u0e23\u0e2d\u0e1a\u0e15\u0e31\u0e27\u0e04\u0e38\u0e13 \u0e08\u0e30\u0e44\u0e14\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e1a\u0e17\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e41\u0e25\u0e30\u0e1e\u0e27\u0e01\u0e40\u0e02\u0e32\u0e44\u0e14\u0e49\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e01\u0e31\u0e19\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19"}),Object(r.jsxs)("p",{className:"text-right",children:["\u0e18\u0e19\u0e27\u0e34\u0e0a\u0e0d\u0e4c \u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e1e\u0e07\u0e29\u0e4c\u0e0a\u0e31\u0e22 - \u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 1995",Object(r.jsx)("br",{}),"\u0e2d\u0e25\u0e34\u0e29\u0e32 \u0e25\u0e34\u0e49\u0e21\u0e44\u0e1e\u0e1a\u0e39\u0e25\u0e22\u0e4c - \u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 1996"]}),Object(r.jsx)("p",{className:"text-right",children:"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1e\u0e39\u0e14\u0e04\u0e38\u0e22\u0e01\u0e31\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48 _____"})]})]})},kt=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,75)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;e(n),r(n),i(n),o(n),a(n)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(yt,{})}),document.getElementById("root")),kt(console.log)}},[[71,1,2]]]);
//# sourceMappingURL=main.bfa14da9.chunk.js.map