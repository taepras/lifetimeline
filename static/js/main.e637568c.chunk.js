(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{62:function(n,t,e){},65:function(n,t,e){},72:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e(1),o=e.n(i),a=e(30),c=e.n(a),s=(e(62),e(4)),u=e(3),l=e(2),b={containerMaxWidth:600,spacing:{xxs:2,xs:4,x1:8,x2:16,x3:24,x4:32}};function d(){var n=Object(u.a)(["\n  body {\n    /* background-color: #DED8C9; */\n    height: 100vh;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n\n    background: \n    /* radial-gradient(\n        100% 60% at 50% 45%, \n        rgba(137, 130, 119, 0) 30%, \n        rgba(85, 80, 72, 0.57) 85%, \n        rgba(85, 80, 72, 0.75) 100%\n      ),  */\n      #DED8C9;\n    background-blend-mode: normal, normal;\n\n    font-family: thonglor;\n    font-size: 20px;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: anugrom;\n    font-weight: normal;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: ","px;\n  }\n\n  .mt-0 { margin-top: 0; }\n  .mt-1 { margin-top: ","px !important; }\n  .mt-2 { margin-top: ","px !important; }\n  .mt-3 { margin-top: ","px !important; }\n  .mt-4 { margin-top: ","px !important; }\n\n  .mb-0 { margin-bottom: 0; }\n  .mb-1 { margin-bottom: ","px !important; }\n  .mb-2 { margin-bottom: ","px !important; }\n  .mb-3 { margin-bottom: ","px !important; }\n  .mb-4 { margin-bottom: ","px !important; }\n\n  .mr-0 { margin-right: 0; }\n  .mr-1 { margin-right: ","px !important; }\n  .mr-2 { margin-right: ","px !important; }\n  .mr-3 { margin-right: ","px !important; }\n  .mr-4 { margin-right: ","px !important; }\n\n  .text-center { text-align: center; }\n  .text-left { text-align: left; }\n  .text-right { text-align: right; }\n"]);return d=function(){return n},n}var p=Object(l.a)(d(),b.spacing.x2,b.spacing.x1,b.spacing.x2,b.spacing.x3,b.spacing.x4,b.spacing.x1,b.spacing.x2,b.spacing.x3,b.spacing.x4,b.spacing.x1,b.spacing.x2,b.spacing.x3,b.spacing.x4);e(65);function f(){var n=Object(u.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: ",";\n"]);return f=function(){return n},n}var x=l.b.div(f(),(function(n){return n.z||1}));function j(){var n=Object(u.a)(["\n    width: auto;\n    max-width: ","px;\n    margin: auto;\n    padding: 0 ","px;\n\n    ","\n"]);return j=function(){return n},n}console.log(b.spacing.x2);var g=l.b.div(j(),b.containerMaxWidth,(function(n){return n.padding||b.spacing.x2}),(function(n){return n.fillHeight&&"height: 100%;"}));function h(){var n=Object(u.a)(["\n    width: 100%;\n    border: 1px solid #eee;\n    border-radius: ","px;\n    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);\n    height: ","px;\n    padding: 0 ","px;\n"]);return h=function(){return n},n}var m=l.b.select(h(),b.spacing.xs,b.spacing.x4,b.spacing.x1);function v(){var n=Object(u.a)(["\n    ","\n    border: ",";\n    border-radius: ","px;\n    /* height: ","px; */\n    padding: ","px ","px;\n    background-color: ",";\n    ","\n    color: #fff;\n"]);return v=function(){return n},n}var O=l.b.button(v(),(function(n){return n.block&&"width: 100%;"}),(function(n){return n.outlined?"1px solid #fff":"none"}),b.spacing.xs,b.spacing.x4,b.spacing.x1,1.5*b.spacing.x1,(function(n){return n.outlined?"transparent":"#C14953"}),(function(n){return!n.outlined&&"box-shadow: 0px 4px 8px rgba(142, 34, 43, 0.21);"})),y=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ad",e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(e?"ad"==t?"\u0e04.\u0e28. ":"\u0e1e.\u0e28. ":"")+("ad"==t?+n:+n+543)},k=function(n,t,e){return Math.min(Math.max(n,t),e)},w=function(n){var t=Object(i.useState)(n),e=Object(s.a)(t,2),r=e[0],o=e[1],a=Object(i.useRef)(null);Object(i.useEffect)((function(){a.current&&(a.current(r),a.current=null)}),[a.current,r]);var c=Object(i.useCallback)((function(n){return o(n),new Promise((function(n){a.current=n}))}),[o]);return[r,c]},C=1920,T=2020,z=2,Y=120,M=80,S=60,D=16;var E=function(n){for(var t=n.onSubmit,e=void 0===t?function(n){}:t,o=n.yearMode,a=n.yearRangeMin,c=void 0===a?C:a,u=n.yearRangeMax,l=void 0===u?T:u,b=n.buttonLabel,d=[],p=Object(i.useState)(-1),f=Object(s.a)(p,2),x=f[0],j=f[1],g=Object(i.useState)(""),h=Object(s.a)(g,2),v=h[0],k=h[1],w=c;w<=l;w++)d.push(w);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(m,{onChange:function(n){j(+n.target.value)},children:[Object(r.jsx)("option",{children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14"}),d.reverse().map((function(n,t){return Object(r.jsx)("option",{value:n,children:y(n,o,!0)},"select-".concat(n))}))]}),v,Object(r.jsx)(O,{className:"mt-1",block:!0,onClick:function(){x>0?e(x):k("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14")},children:b||"\u0e44\u0e1b\u0e22\u0e49\u0e2d\u0e19\u0e14\u0e39\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e01\u0e31\u0e19"})]})};function N(){var n=Object(u.a)(["\n  font-size: 48px;\n  margin-bottom: 0;\n  margin-bottom: ","px;\n"]);return N=function(){return n},n}var H=l.b.h1(N(),b.spacing.x2);var F=function(n){for(var t=n.onProceed,e=n.yearMode,o=[],a=Object(i.useState)(-1),c=Object(s.a)(a,2),u=(c[0],c[1],Object(i.useState)("")),l=Object(s.a)(u,2),d=(l[0],l[1],C);d<=T;d++)o.push(d);return Object(r.jsx)(x,{children:Object(r.jsx)(g,{fillHeight:!0,style:{display:"flex",alignItems:"center"},padding:b.spacing.x4,children:Object(r.jsxs)("div",{style:{marginBottom:"80px"},children:[Object(r.jsxs)(H,{children:["\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22",Object(r.jsx)("u",{children:"\u0e44\u0e2b\u0e19"}),"?"]}),Object(r.jsx)("p",{children:"\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e34\u0e14\u0e04\u0e19\u0e25\u0e30\u0e1b\u0e35 \u0e01\u0e47\u0e42\u0e15\u0e21\u0e32\u0e43\u0e19\u0e2a\u0e20\u0e32\u0e1e\u0e2a\u0e31\u0e07\u0e04\u0e21\u0e04\u0e19\u0e25\u0e30\u0e41\u0e1a\u0e1a \u0e0a\u0e27\u0e19\u0e04\u0e38\u0e13\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e25\u0e2d\u0e07\u0e14\u0e39\u0e27\u0e48\u0e32\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22\u0e04\u0e38\u0e13\u0e40\u0e15\u0e34\u0e1a\u0e42\u0e15\u0e1c\u0e48\u0e32\u0e19\u0e2d\u0e30\u0e44\u0e23\u0e21\u0e32 \u0e41\u0e25\u0e30\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e01\u0e31\u0e19\u0e41\u0e25\u0e49\u0e27 \u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e42\u0e15\u0e21\u0e32\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e1a\u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e44\u0e07\u0e1a\u0e49\u0e32\u0e07"}),Object(r.jsx)("p",{children:"\u0e04\u0e38\u0e13\u0e40\u0e01\u0e34\u0e14\u0e1b\u0e35"}),Object(r.jsx)(E,{onSubmit:t,yearMode:e})]})})})};function P(){var n=Object(u.a)(["\n  width: auto;\n  ","\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return P=function(){return n},n}var A=l.b.div(P(),(function(n){return n.fillHeight&&"height: 100%;"}));var I=function(n){var t=n.className,e=n.children,i=n.fillHeight;return Object(r.jsx)(A,{className:t,fillHeight:i,children:Object(r.jsx)("div",{children:e})})};function R(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 60%;\n  z-index: -1;\n  background: linear-gradient(to top, #000f 90%, #0000 100%);\n\n  animation-name: ",";\n  animation-delay: ","s;\n  animation-duration: ","s;\n  animation-fill-mode: forwards;\n  transition: 0.3s all;\n"]);return R=function(){return n},n}function B(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60%;\n  z-index: -1;\n  background: linear-gradient(to bottom, #000f 90%, #0000 100%);\n\n  animation-name: ",";\n  animation-delay: ","s;\n  animation-duration: ","s;\n  animation-fill-mode: forwards;\n  transition: 0.3s all;\n"]);return B=function(){return n},n}function L(){var n=Object(u.a)(["\n  color: #fff;\n\n  animation-name: ",";\n  animation-delay: ","s;\n  animation-duration: ","s;\n  animation-fill-mode: forwards;\n  transition: 0.3s all;\n\n  * {\n    margin: 0;\n    margin-bottom: ","px;\n  }\n"]);return L=function(){return n},n}function _(){var n=Object(u.a)(["\n  0%   { opacity: 1; }\n  100% { opacity: 0; }\n"]);return _=function(){return n},n}function J(){var n=Object(u.a)(["\n  0%   { transform: translateY(0%); }\n  20%  { transform: translateY(50%); }\n  40%  { transform: translateY(10%); }\n  100% { transform: translateY(100%); }\n"]);return J=function(){return n},n}function W(){var n=Object(u.a)(["\n  0%   { transform: translateY(0%); }\n  20%  { transform: translateY(-50%); }\n  40%  { transform: translateY(-10%); }\n  100% { transform: translateY(-100%); }\n"]);return W=function(){return n},n}function G(){var n=Object(u.a)(["\n  color: #fff;\n  text-align: center;\n\n  pointer-events: none;\n  transition: 1s opacity;\n  z-index: 1000;\n  ","\n"]);return G=function(){return n},n}var q=Object(l.b)(x)(G(),(function(n){return!n.blink&&"opacity: 0;"})),K=Object(l.c)(W()),Q=Object(l.c)(J()),U=Object(l.c)(_()),V=Object(l.b)(I)(L(),(function(n){return n.blink?U:"none"}),3,2,b.spacing.x1),X=l.b.div(B(),(function(n){return n.blink?K:"none"}),3,2),Z=l.b.div(R(),(function(n){return n.blink?Q:"none"}),3,2);var $=function(n){var t=n.birthYear,e=void 0===t?0:t,o=n.yearMode,a=void 0===o?"ad":o,c=n.blink,u=void 0!==c&&c,l=n.onPageChange,b=void 0===l?function(){}:l,d=Object(i.useState)(!1),p=Object(s.a)(d,2),f=p[0],x=p[1];return Object(i.useEffect)((function(){console.log("blink check",u),u&&(console.log("blink started"),x(!0),setTimeout(b,1500),setTimeout((function(){return x(!1)}),5e3))}),[u]),Object(r.jsxs)(q,{z:100,blink:f,children:[Object(r.jsx)(X,{blink:u}),Object(r.jsx)(Z,{blink:u}),Object(r.jsxs)(V,{fillHeight:!0,blink:u,children:[Object(r.jsx)("p",{children:"\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e42\u0e25\u0e01\u0e43\u0e19\u0e21\u0e38\u0e21\u0e21\u0e2d\u0e07\u0e02\u0e2d\u0e07"}),Object(r.jsxs)("h1",{children:["\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 ",Object(r.jsx)("u",{children:y(e,a)})]})]})]})},nn=e(8),tn=e.n(nn),en=e(34),rn=e(7);function on(){var n=Object(u.a)([""]);return on=function(){return n},n}function an(){var n=Object(u.a)(["\n  position: absolute;\n  right: -","px;\n  bottom: -","px;\n  width: 24px;\n  height: 24px;\n\n  background: ",";\n  border-radius: ",';\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &::after {\n    content: " ";\n    display: block;\n    width: 16px;\n    height: 16px;\n    background-color: #fff;\n    border-radius: 50%;\n  }\n']);return an=function(){return n},n}function cn(){var n=Object(u.a)(["\n  width: 64px; //",";\n  flex: 0 0 64px;//",";\n  height: 64px;//",";\n  ","\n  border-radius: ",";\n  box-sizing: border-box;\n  background-color: ",";\n  /* background-image: url(","); */\n  background-size: cover;\n  background-position: center center;\n  border: ","px solid\n    ",";\n  margin-right: ","px;\n  position: relative;\n  box-shadow: 0px 2px 4px\n    ","44;\n\n  transition: 0.3s transform;\n"]);return cn=function(){return n},n}function sn(){var n=Object(u.a)(["\n  display: flex;\n  width: 200px;\n  max-width: 200px;\n  height: 64px;\n  overflow: visible;\n  align-items: center;\n  transform: translateY(-50%);\n  position: ",";\n  z-index: ",";\n\n  transition: 0.3s all;\n"]);return sn=function(){return n},n}var un=function(n){switch(n){case"thailand":return"#D89D3E";case"world":return"#6599A5";case"birthyear":return"#ac646a";default:return"#fff"}},ln=l.b.div(sn(),(function(n){return n.relative?"relative":"absolute"}),(function(n){return n.z})),bn=l.b.div(cn(),(function(n){return n.collapsed?"24px":"64px"}),(function(n){return n.collapsed?"24px":"64px"}),(function(n){return n.collapsed?"24px":"64px"}),(function(n){return n.collapsed&&"transform: scale(0.375);"}),(function(n){return"birthyear"==n.eventType?"50%":"8px"}),(function(n){var t=n.eventType;return Object(rn.b)(.2,un(t))}),(function(n){return n.image}),(function(n){return 3*(n.collapsed?2.5:1)}),(function(n){var t=n.eventType;return un(t)}),1.5*b.spacing.x1,(function(n){var t=n.eventType;return Object(rn.a)(.3,un(t))})),dn=l.b.div(an(),3,3,(function(n){var t=n.eventType;return un(t)}),(function(n){return"birthyear"==n.eventType?"50%":"8px 0px"})),pn=l.b.div(on());var fn=function(n){var t=n.title,e=n.type,i=void 0===e?"world":e,o=n.image,a=n.onClick,c=void 0===a?function(){}:a,s=n.x,u=n.y,l=n.z,b=n.relative,d=n.collapsed,p=void 0!==d&&d;return Object(r.jsxs)(ln,{onClick:function(){p||c()},relative:b,style:{transform:"translate(".concat(s,"px, ").concat(u,"px)")},z:l,children:[Object(r.jsx)(bn,{eventType:i,style:{backgroundImage:"url(/img/events/".concat(o,")")},collapsed:p,children:!p&&Object(r.jsx)(dn,{eventType:i})}),!p&&Object(r.jsxs)(pn,{eventType:i,children:["birthyear"==i&&Object(r.jsxs)("small",{style:{opacity:.7},children:["\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14",Object(r.jsx)("br",{})]}),t]})]})};function xn(){var n=Object(u.a)(["\n  border: none;\n  color: #fff;\n  display: flex;\n  font-size: 24px;\n  line-height: 1;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  right: 8px;\n  top: 8px;\n\n  z-index: 10;\n  background: rgba(51, 51, 51, 0.5);\n  border-radius: 16px;\n"]);return xn=function(){return n},n}function jn(){var n=Object(u.a)(["\n  padding: ","px;\n\n  * {\n    margin: 0;\n    margin-bottom: ","px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  h2 {\n    line-height: 1.2;\n  }\n"]);return jn=function(){return n},n}function gn(){var n=Object(u.a)(["\n  position: absolute;\n  right: -","px;\n  bottom: -","px;\n  /* width: 24px; */\n  height: 24px;\n  padding: 0 ","px;\n\n  background: ",";\n  border-radius: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return gn=function(){return n},n}function hn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 240px;\n\n  border-radius: 8px;\n  box-sizing: border-box;\n  background-size: cover;\n  background-position: center center;\n\n  background-color: ",";\n  background-image: url(",");\n  border: ","px solid\n    ",";\n\n  position: relative;\n"]);return hn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  width: 320px;\n  max-width: calc(100% - ","px);\n  /* align-items: center; */\n  /* transform: translateY(-50%); */\n  border-radius: 8px;\n  background-color: ",";\n  box-shadow: 0px 2px 4px\n    ","44;\n  color: #fff;\n  position: relative;\n\n  transition: 0.3s all;\n  ","\n"]);return mn=function(){return n},n}function vn(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #0008;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n\n  transition: 0.3s all;\n  ","\n"]);return vn=function(){return n},n}var On=function(n){switch(n){case"thailand":return"#D89D3E";case"world":return"#6599A5";case"birthyear":return"#ac646a";default:return"#fff"}},yn=l.b.div(vn(),(function(n){return!n.open&&"\n    opacity: 0;\n    pointer-events: none;\n  "})),kn=l.b.div(mn(),2*b.spacing.x2,(function(n){var t=n.eventType;return Object(rn.a)(.1,On(t))}),(function(n){var t=n.eventType;return Object(rn.a)(.3,On(t))}),(function(n){return!n.open&&"\n    opacity: 0;\n    transform: translateY(100px);\n  "})),wn=l.b.div(hn(),(function(n){var t=n.eventType;return Object(rn.b)(.2,On(t))}),(function(n){return n.image}),4,(function(n){var t=n.eventType;return Object(rn.a)(.1,On(t))})),Cn=l.b.div(gn(),4,4,b.spacing.x1,(function(n){var t=n.eventType;return Object(rn.a)(.1,On(t))}),(function(n){return"birthyear"==n.eventType?"50%":"8px 0px"})),Tn=l.b.div(jn(),b.spacing.x2,b.spacing.x1),zn=l.b.button(xn());var Yn=function(n){var t=n.open,e=n.setOpen,i=void 0===e?function(n){}:e,o=(n.children,n.title),a=n.type,c=void 0===a?"world":a,s=n.year,u=n.yearMode,l=n.birthYear,b=n.image,d=n.onClick,p=void 0===d?function(){}:d,f=n.onClose,x=void 0===f?function(){}:f;return Object(r.jsx)(yn,{open:t,onClick:function(n){n.currentTarget==n.target&&i(!1)},children:Object(r.jsxs)(kn,{onClick:p,eventType:c,open:t,children:[Object(r.jsx)(zn,{onClose:x,onClick:function(n){i(!1),x(n)},children:"\xd7"}),Object(r.jsx)(wn,{style:{backgroundImage:"url(/img/events/".concat(b,")")},eventType:c,children:Object(r.jsx)(Cn,{eventType:c,children:"\u2b24 \u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e42\u0e25\u0e01"})}),Object(r.jsxs)(Tn,{eventType:c,children:[Object(r.jsx)("h2",{children:o}),Object(r.jsxs)("p",{children:[y(s,u,!0)," - \u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 ",l," \u0e2d\u0e32\u0e22\u0e38"," ",s-l,"} \u0e1b\u0e35"]}),Object(r.jsx)(O,{className:"mt-1",block:!0,outlined:!0,children:"\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e19\u0e35\u0e49"})]})]})})};function Mn(){var n=Object(u.a)(["\n  border: none;\n  color: #fff;\n  display: flex;\n  font-size: 24px;\n  line-height: 1;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  right: 8px;\n  top: 8px;\n\n  z-index: 10;\n  background: rgba(51, 51, 51, 0.5);\n  border-radius: 16px;\n"]);return Mn=function(){return n},n}function Sn(){var n=Object(u.a)(["\n  width: calc(100% - ","px);\n  max-width: 480px;\n  /* align-items: center; */\n  /* transform: translateY(-50%); */\n  border-radius: 8px;\n  background-color: #ece8e3;\n  box-shadow: 0px 2px 4px ",";\n  color: #222;\n  position: relative;\n  padding: ","px;\n  box-sizing: border-box;\n\n  transition: 0.3s all;\n  ","\n\n* {\n    margin: 0;\n    margin-bottom: ","px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    line-height: 1.2;\n  }\n"]);return Sn=function(){return n},n}function Dn(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #0008;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n\n  transition: 0.3s all;\n  ","\n"]);return Dn=function(){return n},n}var En=l.b.div(Dn(),(function(n){return!n.open&&"\n    opacity: 0;\n    pointer-events: none;\n  "})),Nn=l.b.div(Sn(),2*b.spacing.x2,Object(rn.a)(.3,"#ece8e3"),b.spacing.x3,(function(n){return!n.open&&"\n    opacity: 0;\n    transform: translateY(100px);\n  "}),b.spacing.x1),Hn=l.b.button(Mn());var Fn=function(n){var t=n.open,e=n.setOpen,i=void 0===e?function(n){}:e,o=n.children,a=n.onClose,c=void 0===a?function(){}:a;return Object(r.jsx)(En,{open:t,onClick:function(n){n.currentTarget==n.target&&i(!1)},children:Object(r.jsxs)(Nn,{open:t,children:[Object(r.jsx)(Hn,{onClose:c,onClick:function(n){i(!1),c(n)},children:"\xd7"}),o]})})},Pn=e(11);function An(){var n=Object(u.a)(["\n  position: absolute;\n"]);return An=function(){return n},n}var In=l.b.div(An());var Rn=function(n){var t=n.year,e=n.y,i=n.yearMode,o=n.birthYear,a=n.data,c=n.maxDisplay,s=void 0===c?1:c,u=(n.className,n.children,n.smoothTransition),l=void 0===u||u,b=n.onDialogOpen,d=void 0===b?function(n){}:b,p=function(n){return n<s?n*M:(s-1)*M+S},f=function(n){return n<s?0:(n-s)*D};return Object(r.jsxs)(In,{style:{transform:"translateY(".concat(e,"px)"),transition:l?"0.3s all":"none"},children:[y(t,i)," | ",+t-+o," \u0e1b\u0e35",a.events.map((function(n,e){return Object(r.jsx)(fn,{y:p(e),x:100+f(e),title:n.event,type:n.type,image:n.image,collapsed:e>=s,z:10-e,onClick:function(){return d(n)}},t+"-"+e)}))]})},Bn=e(37),Ln=e(73),_n=e(36),Jn=e.n(_n),Wn=e.p+"static/media/events.44603726.csv",Gn=e.p+"static/media/celebrities.830a867e.csv",qn=e.p+"static/media/life.91f8f7a1.csv";function Kn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 4px;\n  background-color: #f005;\n  position: fixed;\n  top: 50vh;\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(u.a)(["\n  position: fixed;\n  right: ","px;\n  bottom: 80px;\n  display: flex;\n  flex-direction: column;\n"]);return Qn=function(){return n},n}function Un(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  right: ","px;\n  padding: ","px;\n\n  text-align: right;\n  background: #ece8e3;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 0px 0px 8px 8px;\n  z-index: 100;\n\n  h1 {\n    margin: 0;\n    line-height: 1.2;\n    margin-bottom: ","px;\n  }\n"]);return Un=function(){return n},n}var Vn=l.b.div(Un(),b.spacing.x2,b.spacing.x2,b.spacing.x1),Xn=l.b.div(Qn(),b.spacing.x2),Zn=l.b.div(Kn()),$n=[1,5],nt=C-z,tt=T+z,et=(T-C+2*z)*Y,rt=et*$n[1],it=rt-et,ot=2*rt-et,at=Ln.a().domain([nt,tt]).range([it,it+et]);var ct=function(n){var t=n.birthYear,e=n.yearMode,o=n.onYearChange,a=void 0===o?function(n){}:o,c=Object(i.useState)(!1),u=Object(s.a)(c,2),l=u[0],b=u[1],d=Object(i.useState)({}),p=Object(s.a)(d,2),f=p[0],x=p[1],j=Object(i.useState)(!1),h=Object(s.a)(j,2),m=h[0],v=h[1],C=Object(i.useState)([]),T=Object(s.a)(C,2),z=T[0],Y=T[1],M=w(Pn.b),S=Object(s.a)(M,2),D=S[0],N=S[1],H=w((function(){return at})),F=Object(s.a)(H,2),P=F[0],A=F[1],I=w(!0),R=Object(s.a)(I,2),B=(R[0],R[1],w(!1)),L=Object(s.a)(B,2),_=L[0],J=(L[1],Object(i.useMemo)((function(){return[P(nt),P(tt)]}),[P])),W=Object(i.useState)(null),G=Object(s.a)(W,2),q=G[0],K=G[1],Q=Object(i.useRef)(null);Object(i.useEffect)((function(){q&&window.removeEventListener("scroll",q);var n=function(n){var t=document.body.scrollTop||document.documentElement.scrollTop;t<J[0]&&(console.log("too low"),n.preventDefault(),window.scrollTo(0,J[0])),t>J[1]&&(console.log("too high"),n.preventDefault(),window.scrollTo(0,J[1]))};K((function(){return n})),window.addEventListener("scroll",n,{passive:!1})}),[J]),Object(i.useEffect)((function(){Promise.all([Pn.a(Wn),Pn.a(qn),Pn.a(Gn)]).then((function(n){console.log("fileloaded");var e=n[0],r=(n[1],function(n,t){var e=Bn.a().key((function(n){return n.year})).entries(n).map((function(n){return{year:n.key,events:n.values}}));for(var r in e.forEach((function(n){n.events.sort((function(n,t){return n.importance-t.importance})),n.celebrities=[]})),e)for(var i in t)+t[i].year==+e[r].year&&(t[i].type="birthyear",e[r].events.push(t[i]));return e}(e,n[2]));Y(r),X(t)}))}),[]);var U=function(n){x(n),b(!0)},V=function(){var n=Object(en.a)(tn.a.mark((function n(t){var e,r,i,o,a,c;return tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=k(D.k+t,$n[0],$n[1]),r=document.documentElement.scrollTop,i=Q.current.getBoundingClientRect(),o=r+i.top,o*e-o,a=D.translate(0,-o).scale(e/D.k),console.log(a,o),c=a.rescaleY(P),D,N(a),A((function(){return c}));case 13:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),X=function(n,t){var e=Q.current.getBoundingClientRect(),r=(t?t(n):P(n))-e.top;window.scrollTo(0,r)};return Object(i.useEffect)((function(){var n=Jn()(z);n.forEach((function(n){n.y=at(n.year)})),Y(n)}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Zn,{ref:Q}),Object(r.jsxs)(g,{style:{height:"".concat(ot,"px")},children:[Object(r.jsxs)(Vn,{children:[Object(r.jsxs)("h1",{children:[Object(r.jsx)("div",{style:{fontSize:"21px"},children:"\u0e42\u0e25\u0e01\u0e43\u0e19\u0e21\u0e38\u0e21\u0e21\u0e2d\u0e07"}),Object(r.jsxs)("div",{style:{fontSize:"28px"},children:["\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 ",Object(r.jsx)("u",{children:y(t,e)})]})]}),Object(r.jsx)(O,{onClick:function(){return v(!0)},children:"\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14"})]}),z.map((function(n,i){return Object(r.jsx)(Rn,{year:n.year,data:n,yearMode:e,birthYear:t,y:P(n.year),onDialogOpen:U,maxDisplay:D.k,smoothTransition:!_},"item".concat(i))})),Object(r.jsx)(Yn,{open:l,setOpen:b,title:f.event,year:f.year,yearMode:e,birthYear:t,image:f.image,type:f.type}),Object(r.jsxs)(Xn,{children:[Object(r.jsx)(O,{onClick:function(){return V(1)},children:"+"}),Object(r.jsx)(O,{onClick:function(){return V(-1)},children:"-"})]})]}),Object(r.jsxs)(Fn,{open:m,setOpen:v,children:[Object(r.jsx)("h2",{children:"\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14"}),Object(r.jsx)(E,{onSubmit:function(n){v(!1),a(n),X(n)},yearMode:e})]})]})};function st(){var n=Object(u.a)(["\n  padding-bottom: ","px;\n  color: #fff;\n  margin-right: ","px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  a:link, a:visited {\n    color: #fff;\n  }\n\n  a.active {\n    opacity: 0.7;\n    font-weight: bold;\n    text-decoration: none;\n  }\n"]);return st=function(){return n},n}function ut(){var n=Object(u.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 80px;\n  background: linear-gradient(180deg, rgba(56, 53, 49, 0) 0%, #383531 100%);\n  z-index: 100;\n"]);return ut=function(){return n},n}var lt=l.b.div(ut()),bt=l.b.div(st(),b.spacing.x2,b.spacing.x2);var dt=function(n){var t=n.mode,e=void 0===t?"home":t,i=n.yearMode,o=n.onYearModeChange,a=void 0===o?function(n){}:o,c=n.onOpenAbout,s=void 0===c?function(){}:c,u=n.onHome,l=void 0===u?function(){}:u,b=function(n,t){n.preventDefault(),console.log("!!!!!"),a(t)};return Object(r.jsx)(lt,{children:Object(r.jsxs)(g,{fillHeight:!0,style:{display:"flex",alignItems:"flex-end"},children:["home"!=e&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(bt,{onClick:l,children:"Home"})}),Object(r.jsxs)(bt,{children:[Object(r.jsx)("a",{href:"#",onClick:function(n){b(n,"be")},className:"be"==i?"active":"",children:"\u0e1e.\u0e28."})," ","|"," ",Object(r.jsx)("a",{href:"#",onClick:function(n){b(n,"ad")},className:"ad"==i?"active":"",children:"\u0e04.\u0e28."})]}),Object(r.jsx)("div",{style:{flexGrow:1}}),"home"!=e&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(bt,{children:"\u0e27\u0e34\u0e18\u0e35\u0e40\u0e25\u0e48\u0e19"}),Object(r.jsx)(bt,{children:"\u0e2a\u0e31\u0e0d\u0e25\u0e31\u0e01\u0e29\u0e13\u0e4c"})]}),Object(r.jsx)(bt,{onClick:s,children:"About"})]})})};var pt=function(){var n=Object(i.useState)("home"),t=Object(s.a)(n,2),e=t[0],o=t[1],a=Object(i.useState)("ad"),c=Object(s.a)(a,2),u=c[0],l=c[1],b=Object(i.useState)(1995),d=Object(s.a)(b,2),f=d[0],x=d[1],j=Object(i.useState)(!1),g=Object(s.a)(j,2),h=g[0],m=g[1],v=Object(i.useState)(!1),O=Object(s.a)(v,2),y=O[0],k=O[1],w=function(n){console.log("start transtiion"),x(n),m(!1),setTimeout((function(){m(!0)}),100)},C=function(n){console.log("pagechange"),o(n)};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(p,{}),"home"==e&&Object(r.jsx)(F,{yearMode:u,onProceed:w}),"timeline"==e&&Object(r.jsx)(ct,{yearMode:u,birthYear:f,onYearChange:w}),Object(r.jsx)($,{yearMode:u,blink:h,birthYear:f,onPageChange:function(){C("timeline")}}),Object(r.jsx)(dt,{mode:e,yearMode:u,onYearModeChange:function(n){return l(n)},onHome:function(){C("home")},onOpenAbout:function(){return k(!0)}}),Object(r.jsxs)(Fn,{open:y,setOpen:k,children:[Object(r.jsx)("p",{className:"mb-0",children:"About"}),Object(r.jsx)("h2",{className:"mb-4",children:'\u0e08\u0e32\u0e01 "\u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22\u0e19\u0e35\u0e49"'}),Object(r.jsx)("p",{children:"\u0e40\u0e23\u0e32\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e27\u0e48\u0e32\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e08\u0e30\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e44\u0e14\u0e49 \u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e40\u0e01\u0e34\u0e14\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e01\u0e31\u0e19 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e01\u0e31\u0e19\u0e08\u0e30\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e44\u0e14\u0e49 \u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e04\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e27\u0e48\u0e32\u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e19\u0e40\u0e15\u0e34\u0e1a\u0e42\u0e15\u0e21\u0e32\u0e43\u0e19\u0e2a\u0e20\u0e32\u0e1e\u0e41\u0e27\u0e14\u0e25\u0e49\u0e2d\u0e21\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19 \u0e16\u0e39\u0e01\u0e2b\u0e25\u0e48\u0e2d\u0e2b\u0e25\u0e2d\u0e21\u0e14\u0e49\u0e27\u0e22\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e02\u0e2d\u0e07\u0e22\u0e38\u0e04\u0e2a\u0e21\u0e31\u0e22\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19 \u0e40\u0e23\u0e32\u0e40\u0e25\u0e22\u0e2d\u0e22\u0e32\u0e01\u0e2b\u0e32\u0e27\u0e34\u0e18\u0e35\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32\u0e01\u0e31\u0e1a\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e46"}),Object(r.jsx)("p",{className:"mb-4",children:"\u0e40\u0e23\u0e32\u0e2b\u0e27\u0e31\u0e07\u0e27\u0e48\u0e32\u0e01\u0e32\u0e23\u0e41\u0e0a\u0e23\u0e4c\u0e2a\u0e34\u0e48\u0e07\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e49\u0e04\u0e19\u0e23\u0e2d\u0e1a\u0e15\u0e31\u0e27\u0e04\u0e38\u0e13 \u0e08\u0e30\u0e44\u0e14\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e1a\u0e17\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e41\u0e25\u0e30\u0e1e\u0e27\u0e01\u0e40\u0e02\u0e32\u0e44\u0e14\u0e49\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e01\u0e31\u0e19\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19"}),Object(r.jsxs)("p",{className:"text-right",children:["\u0e18\u0e19\u0e27\u0e34\u0e0a\u0e0d\u0e4c \u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e1e\u0e07\u0e29\u0e4c\u0e0a\u0e31\u0e22 - \u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 1995",Object(r.jsx)("br",{}),"\u0e2d\u0e25\u0e34\u0e29\u0e32 \u0e25\u0e34\u0e49\u0e21\u0e44\u0e1e\u0e1a\u0e39\u0e25\u0e22\u0e4c - \u0e40\u0e14\u0e47\u0e01\u0e2a\u0e21\u0e31\u0e22 1996"]}),Object(r.jsx)("p",{className:"text-right",children:"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1e\u0e39\u0e14\u0e04\u0e38\u0e22\u0e01\u0e31\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48 _____"})]})]})},ft=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,76)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;e(n),r(n),i(n),o(n),a(n)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(pt,{})}),document.getElementById("root")),ft(console.log)}},[[72,1,2]]]);
//# sourceMappingURL=main.e637568c.chunk.js.map