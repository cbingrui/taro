(window.webpackJsonp=window.webpackJsonp||[]).push([[619],{2191:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},2192:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},2193:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(r),s=n,m=b["".concat(c,".").concat(s)]||b[s]||f[s]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},684:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2191),a=r(2192),o=(r(0),r(2193)),c={slug:"2019-02-25-taro-ui-2.0",title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",author:"jimczj",author_url:"https://github.com/jimczj",author_image_url:"https://avatars3.githubusercontent.com/u/13499146?s=460&u=a5a6d4c6bcc746b3b6353c245346d7a832f4649b&v=4"},i={permalink:"/taro/blog/2019-02-25-taro-ui-2.0",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2019-02-25-taro-ui-2.0.md",source:"@site/blog/2019-02-25-taro-ui-2.0.md",description:"\u8f6c\u773c\u95f4\uff0cTaro UI \u53d1\u5e03\u5df2\u6709\u534a\u5e74\uff0c\u611f\u8c22\u5927\u5bb6\u7684\u652f\u6301\uff0c\u8ba9\u6211\u4eec\u6536\u83b7\u4e86 GitHub 1400+ star\u3002\u5728\u6b64\u671f\u95f4\uff0c\u6211\u4eec\u4e0d\u65ad\u5b8c\u5584\u7ec4\u4ef6\u5e93\u7684\u529f\u80fd\u548c\u7279\u6027\uff0c\u65b0\u589e\u4e86\u8bb8\u591a\u7ec4\u4ef6\u548c\u5c0f\u5de5\u5177\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e:",date:"2019-02-25T00:00:00.000Z",tags:[],title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",readingTime:1.02,truncated:!0,prevItem:{title:"\u51b3\u6218\u6027\u80fd\u4e4b\u5dc5 - Taro H5 \u8f6c\u6362\u4e0e\u4f18\u5316\u5347\u7ea7",permalink:"/taro/blog/2019-02-28-taro-h5-optimize"},nextItem:{title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",permalink:"/taro/blog/2018-12-18-taro-1-2"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u8f6c\u773c\u95f4\uff0cTaro UI \u53d1\u5e03\u5df2\u6709\u534a\u5e74\uff0c\u611f\u8c22\u5927\u5bb6\u7684\u652f\u6301\uff0c\u8ba9\u6211\u4eec\u6536\u83b7\u4e86 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro-ui"}),"GitHub")," 1400+ star\u3002\u5728\u6b64\u671f\u95f4\uff0c\u6211\u4eec\u4e0d\u65ad\u5b8c\u5584\u7ec4\u4ef6\u5e93\u7684\u529f\u80fd\u548c\u7279\u6027\uff0c\u65b0\u589e\u4e86\u8bb8\u591a\u7ec4\u4ef6\u548c\u5c0f\u5de5\u5177\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u65b0\u589e\u65e5\u5386\u3001\u7d22\u5f15\u9009\u62e9\u3001\u533a\u57df\u9009\u62e9\u3001\u56fe\u7247\u9009\u62e9\u7b49\u5341\u4e00\u4e2a\u7ec4\u4ef6"),Object(o.b)("li",{parentName:"ul"},"\u9002\u914d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(o.b)("li",{parentName:"ul"},"\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd"),Object(o.b)("li",{parentName:"ul"},"\u65b0\u589e\u4e3b\u9898\u751f\u6210\u5668\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u4f7f\u7528\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd"),Object(o.b)("li",{parentName:"ul"},"\u65b0\u589e Issue Helper\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u89c4\u8303\u5730\u586b\u5199 Issue")))}p.isMDXComponent=!0}}]);