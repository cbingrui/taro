(window.webpackJsonp=window.webpackJsonp||[]).push([[898],{2191:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},2192:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))},2193:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,j=u["".concat(b,".").concat(m)]||u[m]||O[m]||o;return a?n.a.createElement(j,c(c({ref:t},i),{},{components:a})):n.a.createElement(j,c({ref:t},i))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,b=new Array(o);b[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var i=2;i<o;i++)b[i]=a[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},963:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(2191),n=a(2192),o=(a(0),a(2193)),b={slug:"2018-12-18-taro-1-2",title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",author:"luckyadam",author_url:"https://github.com/luckyadam",author_image_url:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4"},c={permalink:"/taro/blog/2018-12-18-taro-1-2",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2018-12-18-taro-1-2.md",source:"@site/blog/2018-12-18-taro-1-2.md",description:"\u5728\u8ddd\u79bb Taro 1.1 \u53d1\u5e03 \u4e4b\u540e\u4e00\u4e2a\u6708\uff0c\u7ecf\u5386\u4e86 500 \u591a\u6b21\u63d0\u4ea4\u548c 17 \u4e2a\u9884\u89c8\u7248\u672c\u7684\u8fed\u4ee3\u4e4b\u540e\uff0c\u6211\u4eec\u6709\u4fe1\u5fc3\u5728\u4eca\u5929\u53d1\u5e03 Taro 1.2 \u6b63\u5f0f\u7248\u3002",date:"2018-12-18T00:00:00.000Z",tags:[],title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",readingTime:1.61,truncated:!0,prevItem:{title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2019-02-25-taro-ui-2.0"},nextItem:{title:"Taro 1.1 \u53d1\u5e03\uff0c\u5168\u9762\u652f\u6301\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2018-11-05-taro-1-1"}},p=[{value:"\u66f4\u591a\u7279\u6027",id:"\u66f4\u591a\u7279\u6027",children:[]},{value:"\u5199\u5728\u6700\u540e",id:"\u5199\u5728\u6700\u540e",children:[]}],i={rightToc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5728\u8ddd\u79bb ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://aotu.io/notes/2018/11/05/taro-1-1/"}),"Taro 1.1 \u53d1\u5e03")," \u4e4b\u540e\u4e00\u4e2a\u6708\uff0c\u7ecf\u5386\u4e86 ",Object(o.b)("strong",{parentName:"p"},"500")," \u591a\u6b21\u63d0\u4ea4\u548c ",Object(o.b)("strong",{parentName:"p"},"17")," \u4e2a\u9884\u89c8\u7248\u672c\u7684\u8fed\u4ee3\u4e4b\u540e\uff0c\u6211\u4eec\u6709\u4fe1\u5fc3\u5728\u4eca\u5929\u53d1\u5e03 Taro 1.2 \u6b63\u5f0f\u7248\u3002"),Object(o.b)("p",null,"Taro 1.2 \u6bd4\u8d77 Taro 1.1 \u548c\u5176\u5b83\u7684\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u6846\u67b6\uff0c\u589e\u52a0\u4e86\u8bb8\u591a\u9996\u6b21\u5728\u5c0f\u7a0b\u5e8f\u6846\u67b6\u4e0a\u5b9e\u73b0\u7684\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#taroize"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u591a\u7aef\u5e94\u7528")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#tt"}),"\u5b57\u8282\u8df3\u52a8\uff08\u5934\u6761\uff09\u5c0f\u7a0b\u5e8f\u652f\u6301")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#css"}),"CSS Modules \u652f\u6301")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#mobx"}),"MobX \u652f\u6301"))),Object(o.b)("h2",{id:"taroize"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u591a\u7aef\u5e94\u7528"),"\u5c31\u50cf\u535a\u5ba2\u5927\u6218\u65f6\u4ee3\u535a\u5ba2\u670d\u52a1\u5546\u63d0\u4f9b\u4e86\u300c\u642c\u5bb6\u300d\u5de5\u5177\u4e00\u6837\uff0cTaro \u73b0\u5728\u4e5f\u63d0\u4f9b\u4e86\u300c\u642c\u5bb6\u300d\u5de5\u5177\u8ba9\u4f60\u65b9\u4fbf\u5730\u5165\u9a7b Taro \u793e\u533a\u3002\u8f6c\u6362\u539f\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5b89\u88c5 Taro \u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b9a\u4f4d\u5230\u5f85\u8f6c\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u8fd0\u884c\u547d\u4ee4\uff1a",Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ taro convert\n")),Object(o.b)("p",null,"Taro \u5c31\u4f1a\u628a\u8f6c\u6362\u597d\u7684\u4ee3\u7801\u751f\u6210\u5728\u6839\u76ee\u5f55\u4e0b\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"taroConvert")," \u6587\u4ef6\u5939\u3002\u8f6c\u6362\u540e\u7684\u4ee3\u7801\u662f\u9ad8\u53ef\u8bfb\u6027\u7684 JSX \u4ee3\u7801\uff0c\u6ca1\u6709\u989d\u5916\u7684\u5e9e\u5927\u7ec4\u4ef6\u5e93\u5f00\u9500\u3002\u4f60\u53ef\u4ee5\u8f7b\u6613\u5730\u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1\uff0c\u6216\u8005\u76f4\u63a5\u5c06\u8fd9\u4e9b\u4ee3\u7801\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"taro build")," \u547d\u4ee4\u751f\u6210\u4efb\u610f Taro \u5df2\u7ecf\u652f\u6301\u5e73\u53f0\u7684\u5e94\u7528\u3002"),Object(o.b)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5c1d\u8bd5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"taro convert")," \u6210\u529f\u8f6c\u6362\u4e86\u56db\u4e2a GitHub \u4e0a\u6700\u70ed\u95e8\u7684\u5f00\u6e90\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\uff0c\u5b83\u4eec\u8f6c\u6362\u4e4b\u540e\u90fd\u8868\u73b0\u826f\u597d\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/EastWorld/wechat-app-mall"}),"EastWorld/wechat-app-mall \u26055000+")," - \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5546\u57ce")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tumobi/nideshop-mini-program"}),"tumobi/nideshop-mini-program \u26053000+")," - \u57fa\u4e8e Node.js + MySQL \u5f00\u53d1\u7684\u5f00\u6e90\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5546\u57ce")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/RebeccaHanjw/weapp-wechat-zhihu"}),"RebeccaHanjw/weapp-wechat-zhihu \u26051000+")," - \u4eff\u77e5\u4e4e")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jectychen/wechat-v2ex"}),"jectychen/wechat-v2ex \u2605400+")," - V2EX"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"taro convert"),"  \u4e0d\u4ec5\u4ec5\u80fd\u652f\u6301\u8f6c\u6362\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\uff0c\u5b83\u8fd8\u80fd\u8f6c\u6362\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u3002\u4f8b\u5982 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/icindy/wxParse"}),"wxParse")," \u7ecf\u8fc7  ",Object(o.b)("inlineCode",{parentName:"p"},"taro convert"),"  \u7f16\u8bd1\u4e4b\u540e\u8fd8\u80fd\u7a81\u7834\u539f\u6709\u53ea\u80fd\u89e3\u6790 11 \u5c42 HTML \u5d4c\u5957\u7684\u9650\u5236\uff0c\u7406\u8bba\u4e0a\u53ef\u4ee5\u89e3\u6790\u65e0\u9650\u5c42 HTML \u5d4c\u5957\u3002"))),Object(o.b)("p",null,"\u66f4\u591a\u8be6\u60c5\u53ef\u4ee5\u8bbf\u95ee\u6587\u6863 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nervjs.github.io/taro/docs/taroize.html"}),"https://nervjs.github.io/taro/docs/taroize.html")," \u4e86\u89e3\u66f4\u591a\u3002"),Object(o.b)("h2",{id:"tt"},"\u5b57\u8282\u8df3\u52a8\uff08\u5934\u6761\uff09\u5c0f\u7a0b\u5e8f\u652f\u6301"),"\u4f5c\u4e3a\u4e00\u4e2a\u300c\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6\u300d\uff0cTaro \u5f53\u7136\u4e5f\u4e0d\u4f1a\u653e\u8fc7\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u3002\u5728 Taro 1.2\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u7aef\u7684\u7f16\u8bd1\u9884\u89c8\u53ca\u6253\u5305\uff1a",Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# npm script\n$ npm run dev:tt\n$ npm run build:tt\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type tt --watch\n$ taro build --type tt\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type tt --watch\n$ npx taro build --type tt\n")),Object(o.b)("p",null,"\u9009\u62e9\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u6a21\u5f0f\uff0c\u4f60\u9700\u8981\u4e0b\u8f7d\u5e76\u6253\u5f00",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://microapp.bytedance.com/docs/devtool/versionUpdate.html"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177"),"\uff0c\u7136\u540e\u5728\u9879\u76ee\u7f16\u8bd1\u5b8c\u540e\u9009\u62e9\u9879\u76ee\u6839\u76ee\u5f55\u4e0b dist \u76ee\u5f55\u8fdb\u884c\u9884\u89c8\u3002"),Object(o.b)("p",null,"\u76f8\u5e94\u5730\uff0cTaro \u7684\u5e73\u53f0\u6807\u8bc6\uff08",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nervjs.github.io/taro/docs/envs.html#processenvtaro-env"}),"process.env.TARO_ENV"),"\uff09\u4e5f\u589e\u52a0\u4e86\u65b0\u6210\u5458",Object(o.b)("inlineCode",{parentName:"p"},"tt"),"\uff0c\u4ee3\u8868\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u3002"),Object(o.b)("h2",{id:"css"},"CSS Modules \u652f\u6301"),Object(o.b)("p",null,"\u5728 Taro \u6700\u65e9\u5f00\u6e90\u7684\u65f6\u5019\u6211\u4eec\u5c31\u652f\u6301\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"SCSS")," \u3001 ",Object(o.b)("inlineCode",{parentName:"p"},"LESS")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"Stylus"),"\uff0c\u800c\u5728 Taro 1.2 \u4e2d\u6211\u4eec\u767e\u5c3a\u7aff\u5934\u66f4\u8fdb\u4e00\u6b65\uff0c\u7ed9\u793e\u533a\u5e26\u6765\u4e86 JSX \u7684\u597d\u4f19\u4f34\uff1aCSS Modules\u3002"),Object(o.b)("p",null,"\u5bf9\u4e8e Taro \u800c\u8a00\u652f\u6301 CSS Modules \u6709\u7740\u91cd\u8981\u7684\u610f\u4e49\u3002Taro \u5728 1.0 \u7684\u65f6\u5019\u5df2\u7ecf\u652f\u6301\u7ec4\u4ef6\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"style")," \u4f20\u5165 JavaScript \u5bf9\u8c61\uff0c\u652f\u6301\u4e86 CSS Modules \u4e4b\u540e\u7ec4\u4ef6\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"className")," \u4e5f\u80fd\u505a\u8fd9\u70b9\u2014\u2014\u8fd9\u610f\u5473\u7740 Taro \u5b8c\u5168\u53ef\u4ee5\u505a\u5230 JSX \u7684\u4e00\u9879\u7279\u6027\uff1a\u300cEverything in JavaScript\u300d\u3002\u540c\u65f6\uff0c\u901a\u8fc7\u7f16\u8f91\u5668\u7684\u81ea\u52a8\u8865\u5168\u548c\u6821\u9a8c\u529f\u80fd\uff0c\u5f00\u53d1\u8005\u518d\u4e5f\u4e0d\u7528\u62c5\u5fc3 CSS \u7c7b\u8bef\u8f93\u5165\u548c CSS \u7c7b\u7684\u547d\u540d\u95ee\u9898\u3002"),Object(o.b)("p",null,"\u4f60\u53ef\u4ee5\u67e5\u9605\u6587\u6863 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nervjs.github.io/taro/docs/css-modules.html#docsNav"}),"CSS Modules \u7684\u4f7f\u7528 ")," \u627e\u5230 CSS Modules \u7684\u5f00\u542f\u65b9\u6cd5\u3002"),Object(o.b)("p",null,"CSS Modules \u7684\u652f\u6301\u4e3b\u8981\u7531 Taro \u793e\u533a\u7684\u4e2a\u4eba\u5f00\u53d1\u8005 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MrKou47"}),"@MrKou47 (MrKou47) ")," \u5f00\u53d1\uff0c\u611f\u8c22\u4ed6\u7684\u8d21\u732e\u3002"),Object(o.b)("h2",{id:"mobx"},"MobX \u652f\u6301"),Object(o.b)("p",null,"\u5728\u5c0f\u7a0b\u5e8f\u5e94\u7528\u53d8\u5f97\u65e5\u8d8b\u590d\u6742\u7684\u4eca\u5929\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u5f00\u53d1\u8005\u9009\u62e9\u4f7f\u7528\u72ec\u7acb\u7684\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u3002\u5728 Taro 1.1 \u4f60\u53ef\u4ee5\u9009\u62e9 Redux \u7684\u4f53\u7cfb\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"redux-thunk")," \u3001",Object(o.b)("inlineCode",{parentName:"p"},"dva-core"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"redux-saga")," \u7b49\u5de5\u5177\u3002\u5728 Taro 1.2 \u6211\u4eec\u53c8\u5e26\u6765\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"taro-mobx"),"\u3002"),Object(o.b)("p",null,"\u5728 Taro \u4e2d\u4f7f\u7528 MobX \u975e\u5e38\u7b80\u5355\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"taro init <your app>")," \u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u5168\u65b0\u7684 MobX \u6a21\u677f\u9879\u76ee\u3002\u4e5f\u53ef\u4ee5\u67e5\u9605 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nervjs.github.io/taro/docs/mobx.html#docsNav"}),"\u4f7f\u7528 MobX ")," \u6587\u6863\u5c06 ",Object(o.b)("inlineCode",{parentName:"p"},"taro-mobx"),"  \u63a5\u5165\u5df2\u6709\u9879\u76ee\u3002"),Object(o.b)("p",null,"MobX \u7684\u652f\u6301\u4e3b\u8981\u7531 Taro \u793e\u533a\u7684\u4e2a\u4eba\u5f00\u53d1\u8005 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nanjingboy"}),"@nanjingboy (Tom Huang)")," \u5f00\u53d1\uff0c\u611f\u8c22\u4ed6\u7684\u8d21\u732e\u3002"),Object(o.b)("h2",{id:"\u66f4\u591a\u7279\u6027"},"\u66f4\u591a\u7279\u6027"),Object(o.b)("p",null,"\u9762\u5bf9\u793e\u533a\u91cc\u7ed9\u529b\u7684\u4e2a\u4eba\u8d21\u732e\u8005\uff0cTaro \u5b98\u65b9\u56e2\u961f\u4e5f\u6ca1\u6709\u95f2\u7740\u3002\u5728 Taro 1.2 \u5f00\u53d1\u671f\u95f4\u901a\u8fc7 commit \u5173\u95ed\u4e86 169 \u4e2a issue \u7684\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u62ab\u661f\u6234\u6708\u5e26\u6765\u4e86\u66f4\u591a\u7279\u6027\u3002\u5176\u4e2d\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"H5 \u8def\u7531\u7cfb\u7edf\u5f7b\u5e95\u91cd\u6784"),Object(o.b)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684 props \u652f\u6301\u4f20\u5165 JSX \u5143\u7d20"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 JSX \u5143\u7d20\u5199\u5728 ",Object(o.b)("inlineCode",{parentName:"li"},"switch-case")," \u4e2d\uff0c\u5e76\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"li"},"if-else")," \u548c ",Object(o.b)("inlineCode",{parentName:"li"},"switch-case")," \u7684\u591a\u91cd\u5d4c\u5957"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u5f15\u7528\u522b\u540d\uff08alias\uff09"),Object(o.b)("li",{parentName:"ul"},"\u4e0e\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u548c\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u901a\u529b\u5408\u4f5c\uff0c\u62b9\u5e73\u4e86\u4e00\u5927\u6ce2\u548c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u5dee\u5f02")),Object(o.b)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/master/CHANGELOG.md"}),"CHANGELOG")," \u67e5\u9605\u5b8c\u6574\u7684\u529f\u80fd\u8fed\u4ee3\u7eaa\u5f55\u3002"),Object(o.b)("h2",{id:"\u5199\u5728\u6700\u540e"},"\u5199\u5728\u6700\u540e"),Object(o.b)("p",null,"Taro 1.2 \u6700\u4e3a\u6fc0\u52a8\u4eba\u5fc3\u7684\u529f\u80fd\u663e\u7136\u662f\u300c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c Taro\u300d \u529f\u80fd\uff0c\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\u5df2\u6709\u7684\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u80fd\u8f6c\u5316\u66f4\u597d\u7ef4\u62a4\u7684 Taro\uff08\u7c7b React\uff09 \u4ee3\u7801\uff0c\u4e5f\u80fd\u628a Taro \u4ee3\u7801\u8f6c\u5316\u4e3a\u591a\u7aef\u5e94\u7528\u3002"),Object(o.b)("p",null,"\u4f46\u66f4\u91cd\u8981\u7684\u662f\uff0c\u672c\u6b21 Taro 1.2 \u66f4\u65b0\u7684\u4e24\u4e2a\u6838\u5fc3\u529f\u80fd\u70b9\u5747\u7531\u4e2a\u4eba\u5f00\u53d1\u8005\u8d21\u732e\u2014\u2014\u8fd9\u5b8c\u5168\u4f53\u73b0\u4e86 Taro \u793e\u533a\u7684\u6d3b\u8dc3\u3001\u5f3a\u5927\u548c\u5f00\u653e\u3002\u6211\u4eec\u4e5f\u4f1a\u957f\u671f\u5730\u7ef4\u62a4\u4e0e\u793e\u533a\u5f00\u53d1\u8005\u4eec\u7684\u5173\u7cfb\uff0c\u4e0e\u5f00\u53d1\u8005\u4eec\u4e00\u540c\u6210\u957f\uff0c\u4e92\u5229\u4e92\u8d62\u3002\u8fd9\u4e5f\u662f Taro \u9009\u62e9\u5f00\u6e90\u7684\u610f\u4e49\u6240\u5728\u3002"),Object(o.b)("p",null,"\u5982\u679c\u4f60\u6709\u4efb\u4f55\u60f3\u6cd5\uff0c\u6216\u8005\u6ca1\u6709\u60f3\u6cd5\uff0cTaro \u90fd\u975e\u5e38\u6b22\u8fce\u4f60\u6765\u5410\u69fd\u6216\u89c2\u5149\uff1a"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro"}),"https://github.com/NervJS/taro")))}l.isMDXComponent=!0}}]);