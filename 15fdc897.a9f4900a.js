(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{2191:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return a}))},2192:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))},2193:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,s=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.a.createElement(s,i(i({ref:t},b),{},{components:r})):n.a.createElement(s,i({ref:t},b))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},260:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(2191),n=r(2192),o=(r(0),r(2193)),c={slug:"2020-12-02-taro-3-2-0-cannary-1",title:"\u589e\u52a0 React Native \u652f\u6301\u7684 Taro 3.2.0 \u7248\u672c\u6d4b\u8bd5\u901a\u544a",author:"zhiqingchen",author_url:"https://github.com/zhiqingchen",author_image_url:"https://avatars1.githubusercontent.com/u/1876158?s=88&u=0305430cab9f7a516c720e7fc7f8680df1c835b9&v=4",tags:["v3"],description:"\u589e\u52a0 React Native \u652f\u6301\u7684 Taro 3.2.0 \u7248\u672c\u6d4b\u8bd5\u901a\u544a"},i={permalink:"/taro/blog/2020-12-02-taro-3-2-0-cannary-1",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2020-12-02-taro-3-2-0-cannary-1.md",source:"@site/blog/2020-12-02-taro-3-2-0-cannary-1.md",description:"\u589e\u52a0 React Native \u652f\u6301\u7684 Taro 3.2.0 \u7248\u672c\u6d4b\u8bd5\u901a\u544a",date:"2020-12-02T00:00:00.000Z",tags:[{label:"v3",permalink:"/taro/blog/tags/v-3"}],title:"\u589e\u52a0 React Native \u652f\u6301\u7684 Taro 3.2.0 \u7248\u672c\u6d4b\u8bd5\u901a\u544a",readingTime:.995,truncated:!0,prevItem:{title:"Taro 3.1 beta \u53d1\u5e03\uff1a \u5f00\u653e\u5f0f\u67b6\u6784\u65b0\u589e 4 \u7aef\u652f\u6301",permalink:"/taro/blog/2020-12-15-taro-3-1-beta"},nextItem:{title:"Taro \u7248\u672c\u5347\u7ea7\u6743\u5a01\u6307\u5357",permalink:"/taro/blog/2020-09-01-taro-versions"}},l=[{value:"\u76f8\u5173\u8d44\u6599\u94fe\u63a5",id:"\u76f8\u5173\u8d44\u6599\u94fe\u63a5",children:[]},{value:"\u65b0\u7248\u672c\u7279\u6027\u4e00\u89c8",id:"\u65b0\u7248\u672c\u7279\u6027\u4e00\u89c8",children:[]}],b={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u76f8\u5173\u8d44\u6599\u94fe\u63a5"},"\u76f8\u5173\u8d44\u6599\u94fe\u63a5"),Object(o.b)("ol",{start:0},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NervJS/taro-rfcs/pull/8"}),"\u7248\u672c\u5185\u5bb9\u5bf9\u5e94\u7684RFC")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NervJS/taro/tree/feat/react-native"}),"3.2.0 canary \u7248\u672c\u5206\u652f")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NervJS/taro-native-shell/tree/0.63.2"}),"\u58f3\u5de5\u7a0b\u5206\u652f")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wuba/taro-react-native"}),"\u6700\u65b0\u8fdb\u5c55\uff0c\u53ef\u5173\u6ce858\u5f00\u6e90"))),Object(o.b)("h2",{id:"\u65b0\u7248\u672c\u7279\u6027\u4e00\u89c8"},"\u65b0\u7248\u672c\u7279\u6027\u4e00\u89c8"),Object(o.b)("ol",{start:0},Object(o.b)("li",{parentName:"ol"},"\u66f4\u5feb\u7684\u7f16\u8bd1\u901f\u5ea6",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"\u57fa\u4e8e\u5168\u65b0\u7684\u7f16\u8bd1\u4f53\u7cfb\uff0c\u542f\u52a8\u901f\u5ea6\u63d0\u53471\u500d"))),Object(o.b)("li",{parentName:"ol"},"\u66f4\u4fbf\u6377\u7684\u5f00\u53d1\u8c03\u8bd5\u4f53\u9a8c",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"\u53bb\u6389\u4e86 webpack \u540e\uff0csource-map \u7684\u652f\u6301\u66f4\u52a0\u7b80\u5355\uff0c\u8fd9\u5bf9\u4e8e\u5f00\u53d1\u4f53\u9a8c\u662f\u4e00\u4e2a\u5de8\u5927\u7684\u63d0\u5347"))),Object(o.b)("li",{parentName:"ol"},"\u66f4\u5168\u9762\u7684API\u548c\u7ec4\u4ef6",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"\u65b0\u589e 38 \u4e2aAPI"),Object(o.b)("li",{parentName:"ol"},"\u65b0\u589e 7 \u4e2a\u7ec4\u4ef6"))),Object(o.b)("li",{parentName:"ol"},"\u66f4\u7075\u6d3b\u7684\u63a5\u5165\u65b9\u5f0f",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"\u652f\u6301 React Native 0.60 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u53ef\u81ea\u884c\u5b9a\u5236\uff0c\u6211\u4eec\u4e5f\u5c06\u63a2\u7d22\u66f4\u591a\u7248\u672c\u7684\u652f\u6301"),Object(o.b)("li",{parentName:"ol"},"API \u548c\u7ec4\u4ef6\u652f\u6301\u6309\u9700\u52a0\u8f7d\uff0c\u672a\u4f7f\u7528\u7684\u539f\u751f\u4f9d\u8d56\uff0c\u65e0\u9700\u5b89\u88c5"),Object(o.b)("li",{parentName:"ol"},"\u67b6\u6784\u5b8c\u5168\u57fa\u4e8e React Native \u751f\u6001\uff0c\u76f8\u5173\u5de5\u5177\u3001\u7ec4\u4ef6\u7b49\u5747\u53ef\u8f7b\u677e\u63a5\u5165"))),Object(o.b)("li",{parentName:"ol"},"\u66f4\u7a33\u5b9a\u7684\u6e90\u7801",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"\u4f7f\u7528 TypeScript\u3001ESlint\u3001Jest\uff0c\u4fdd\u8bc1\u4ee3\u7801\u8d28\u91cf"),Object(o.b)("li",{parentName:"ol"},"\u6b22\u8fce\u793e\u533a\u8d21\u732e")))))}p.isMDXComponent=!0}}]);