(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return u}));var r=n(2191),c=n(2192),o=(n(0),n(2193)),i={title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},l={unversionedId:"apis/device/ibeacon/IBeaconInfo",id:"version-3.x/apis/device/ibeacon/IBeaconInfo",isDocsHomePage:!1,title:"IBeaconInfo",description:"\u65b9\u6cd5",source:"@site/versioned_docs/version-3.x/apis/device/ibeacon/IBeaconInfo.md",slug:"/apis/device/ibeacon/IBeaconInfo",permalink:"/taro/docs/apis/device/ibeacon/IBeaconInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/ibeacon/IBeaconInfo.md",version:"3.x",sidebar_label:"IBeaconInfo",sidebar:"version-3.x/API",previous:{title:"Taro.getBeacons(option)",permalink:"/taro/docs/apis/device/ibeacon/getBeacons"},next:{title:"Taro.stopWifi(option)",permalink:"/taro/docs/apis/device/wifi/stopWifi"}},a=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]}],b={rightToc:a};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"accuracy"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",null,"iBeacon \u8bbe\u5907\u7684\u8ddd\u79bb")),Object(o.b)("tr",null,Object(o.b)("td",null,"major"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"iBeacon \u8bbe\u5907\u7684\u4e3b id")),Object(o.b)("tr",null,Object(o.b)("td",null,"minor"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"iBeacon \u8bbe\u5907\u7684\u6b21 id")),Object(o.b)("tr",null,Object(o.b)("td",null,"proximity"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",null,"\u8868\u793a\u8bbe\u5907\u8ddd\u79bb\u7684\u679a\u4e3e\u503c")),Object(o.b)("tr",null,Object(o.b)("td",null,"rssi"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",null,"\u8868\u793a\u8bbe\u5907\u7684\u4fe1\u53f7\u5f3a\u5ea6")),Object(o.b)("tr",null,Object(o.b)("td",null,"uuid"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"iBeacon \u8bbe\u5907\u5e7f\u64ad\u7684 uuid")))))}u.isMDXComponent=!0},2191:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},2192:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return r}))},2193:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),u=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(i,".").concat(p)]||d[p]||s[p]||o;return n?c.a.createElement(f,l(l({ref:t},b),{},{components:n})):c.a.createElement(f,l({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);