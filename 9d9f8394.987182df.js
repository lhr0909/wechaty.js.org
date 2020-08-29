(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(142)),i={title:"Troubleshooting Index",sidebar_label:"Troubleshooting"},c={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Index",description:"This is a place to share common problems and solutions to them.",source:"@site/docs/troubleshooting.md",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/troubleshooting.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1598690123,sidebar_label:"Troubleshooting",sidebar:"docs",previous:{title:"Wechaty FAQ: Miscellaneous",permalink:"/docs/faq/miscellaneous"},next:{title:"Changelog",permalink:"/docs/changelog"}},s=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Nothing happens when I dispatch an action",id:"nothing-happens-when-i-dispatch-an-action",children:[]},{value:"Something else doesn&#39;t work",id:"something-else-doesnt-work",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is a place to share common problems and solutions to them.\nThe examples use TypeScript, but you should still find them useful if you use something else."),Object(a.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Token"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#concepts"}),"Concepts")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#motivations"}),"Motivations")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#alternatives"}),"Alternatives")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Puppet"))),Object(a.b)("h2",{id:"nothing-happens-when-i-dispatch-an-action"},"Nothing happens when I dispatch an action"),Object(a.b)("p",null,"Sometimes, you are trying to dispatch an action, but your view does not update. Why does this happen? There may be several reasons for this."),Object(a.b)("p",null,"Never mutate reducer arguments\nIt is tempting to modify the state or action passed to you by Redux. Don't do this!"),Object(a.b)("p",null,"Redux assumes that you"),Object(a.b)("h2",{id:"something-else-doesnt-work"},"Something else doesn't work"),Object(a.b)("p",null,"Ask around on the ",Object(a.b)("strong",{parentName:"p"},"wechaty/wechaty")," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://gitter.im/wechaty/wechaty"}),"Gitter.im")," Gitter.im room,\nor ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/issues"}),"create an issue"),".\nIf you figure it out, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty.js.org/edit/master/docs/troubleshooting.md"}),"edit this document"),"\nas a courtesy to the next person having the same problem."))}u.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(i,".").concat(h)]||p[h]||b[h]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);