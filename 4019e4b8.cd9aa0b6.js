(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{2191:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},2192:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},2193:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,O=m["".concat(b,".").concat(d)]||m[d]||j[d]||l;return n?r.a.createElement(O,c(c({ref:t},p),{},{components:n})):r.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},613:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return o}));var a=n(2191),r=n(2192),l=(n(0),n(2193)),b={title:"\u6a21\u677f"},c={unversionedId:"platform-plugin-template",id:"platform-plugin-template",isDocsHomePage:!1,title:"\u6a21\u677f",description:"Taro3 \u901a\u8fc7\u628a DOM \u6811\u7684\u6570\u636e\u8fdb\u884c setData\uff0c\u4ece\u800c\u9a71\u52a8\u6a21\u677f\uff08``\uff09\u62fc\u63a5\u6765\u6e32\u67d3\u51fa\u89c6\u56fe\u3002",source:"@site/docs/platform-plugin-template.md",slug:"/platform-plugin-template",permalink:"/taro/docs/next/platform-plugin-template",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/platform-plugin-template.md",version:"current",sidebar:"docs",previous:{title:"TaroPlatformBase",permalink:"/taro/docs/next/platform-plugin-base"},next:{title:"Reconciler",permalink:"/taro/docs/next/platform-plugin-reconciler"}},i=[{value:"\u9012\u5f52\u4e0e\u975e\u9012\u5f52\u6a21\u677f",id:"\u9012\u5f52\u4e0e\u975e\u9012\u5f52\u6a21\u677f",children:[{value:"\u53ef\u9012\u5f52\u6a21\u677f",id:"\u53ef\u9012\u5f52\u6a21\u677f",children:[]},{value:"\u975e\u9012\u5f52\u6a21\u677f",id:"\u975e\u9012\u5f52\u6a21\u677f",children:[]}]},{value:"\u6a21\u677f\u57fa\u7c7b",id:"\u6a21\u677f\u57fa\u7c7b",children:[{value:"this.Adapter",id:"thisadapter",children:[]},{value:"this.isSupportRecursive",id:"thisissupportrecursive",children:[]},{value:"this.supportXS",id:"thissupportxs",children:[]},{value:"this.exportExpr",id:"thisexportexpr",children:[]},{value:"this.internalComponents",id:"thisinternalcomponents",children:[]},{value:"this.focusComponents",id:"thisfocuscomponents",children:[]},{value:"this.voidElements",id:"thisvoidelements",children:[]},{value:"this.nestElements",id:"thisnestelements",children:[]},{value:"replacePropName (name, value, componentName)",id:"replacepropname-name-value-componentname",children:[]},{value:"buildXsTemplate ()",id:"buildxstemplate-",children:[]},{value:"modifyLoopBody (child, nodeName)",id:"modifyloopbody-child-nodename",children:[]},{value:"modifyLoopContainer (children, nodeName)",id:"modifyloopcontainer-children-nodename",children:[]},{value:"modifyTemplateResult (res, nodeName, level, children)",id:"modifytemplateresult-res-nodename-level-children",children:[]},{value:"getAttrValue (value, key, nodeName)",id:"getattrvalue-value-key-nodename",children:[]}]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[{value:"\u5934\u6761\u5c0f\u7a0b\u5e8f\u6a21\u677f",id:"\u5934\u6761\u5c0f\u7a0b\u5e8f\u6a21\u677f",children:[]},{value:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6a21\u677f",id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6a21\u677f",children:[]}]}],p={rightToc:i};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Taro3 \u901a\u8fc7\u628a DOM \u6811\u7684\u6570\u636e\u8fdb\u884c ",Object(l.b)("inlineCode",{parentName:"p"},"setData"),"\uff0c\u4ece\u800c\u9a71\u52a8\u6a21\u677f\uff08",Object(l.b)("inlineCode",{parentName:"p"},"<template>"),"\uff09\u62fc\u63a5\u6765\u6e32\u67d3\u51fa\u89c6\u56fe\u3002"),Object(l.b)("p",null,"\u56e0\u6b64\u5f00\u53d1\u8005\u53ef\u4ee5\u770b\u5230\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u4e2d\uff0c\u9875\u9762\u6a21\u677f\u6587\u4ef6\u7684\u5185\u5bb9\u5f88\u7b80\u5355\uff0c\u53ea\u662f\u5f15\u7528\u4e86\u516c\u5171\u6a21\u677f ",Object(l.b)("inlineCode",{parentName:"p"},"base.xml"),"\uff0c\u6240\u6709\u7ec4\u4ef6\u7684\u6a21\u677f\u90fd\u5728\u6b64\u6587\u4ef6\u4e2d\u8fdb\u884c\u58f0\u660e\u3002"),Object(l.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u6a21\u677f\u7c7b\uff0c\u63a7\u5236 ",Object(l.b)("inlineCode",{parentName:"p"},"base")," \u6a21\u677f\u7684\u7f16\u8bd1\u7ed3\u679c\u3002"),Object(l.b)("h2",{id:"\u9012\u5f52\u4e0e\u975e\u9012\u5f52\u6a21\u677f"},"\u9012\u5f52\u4e0e\u975e\u9012\u5f52\u6a21\u677f"),Object(l.b)("p",null,"\u6211\u4eec\u628a\u6a21\u677f\u76f8\u5173\u7684\u5904\u7406\u903b\u8f91\u5c01\u88c5\u6210\u4e86\u57fa\u7c7b\u3002\u5206\u522b\u662f\u7ed9",Object(l.b)("strong",{parentName:"p"},"\u652f\u6301\u6a21\u677f\u9012\u5f52"),"\u7684\u5c0f\u7a0b\u5e8f\u7ee7\u627f\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"RecursiveTemplate")," \u7c7b\uff0c\u548c\u7ed9",Object(l.b)("strong",{parentName:"p"},"\u4e0d\u652f\u6301\u6a21\u677f\u9012\u5f52"),"\u7684\u5c0f\u7a0b\u5e8f\u7ee7\u627f\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"UnRecursiveTemplate")," \u7c7b\u3002"),Object(l.b)("h3",{id:"\u53ef\u9012\u5f52\u6a21\u677f"},"\u53ef\u9012\u5f52\u6a21\u677f"),Object(l.b)("p",null,"\u652f\u6301\u6a21\u677f\u9012\u5f52\u7684\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u540c\u4e00\u4e2a\u6a21\u677f\u80fd\u591f\u4e0d\u65ad\u8c03\u7528\u81ea\u8eab\uff0c\u5305\u62ec\u652f\u4ed8\u5b9d\u3001\u5934\u6761\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u3002"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"view_0")," \u5f15\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"container_0"),"\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"container_0")," \u80fd\u518d\u5f15\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"view_0"),"\uff1a"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"http://storage.jd.com/cjj-pub-images/recursive_temp.png",alt:null}))),Object(l.b)("h3",{id:"\u975e\u9012\u5f52\u6a21\u677f"},"\u975e\u9012\u5f52\u6a21\u677f"),Object(l.b)("p",null,"\u4e0d\u652f\u6301\u6a21\u677f\u9012\u5f52\u7684\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u5f15\u7528\u8fc7\u7684\u6a21\u677f\u4e0d\u80fd\u518d\u8c03\u7528\u81ea\u8eab\uff0c\u5305\u62ec\u5fae\u4fe1\u3001QQ\u3001\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u3002"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"view_0")," \u5f15\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"container_0"),"\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"container_0")," \u4e0d\u80fd\u518d\u5f15\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"view_0"),"\uff0c\u53ea\u80fd\u5f15\u7528\u65b0\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"view")," \u6a21\u677f ",Object(l.b)("inlineCode",{parentName:"p"},"view_1"),"\uff1a"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"http://storage.jd.com/cjj-pub-images/unrecursive_temp.png",alt:null}))),Object(l.b)("h2",{id:"\u6a21\u677f\u57fa\u7c7b"},"\u6a21\u677f\u57fa\u7c7b"),Object(l.b)("h3",{id:"thisadapter"},"this.Adapter"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"object")),Object(l.b)("p",null,"\u5e73\u53f0\u7684\u6a21\u677f\u8bed\u6cd5\u5173\u952e\u8bcd\u3002"),Object(l.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// \u58f0\u660e\u4e86\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6a21\u677f\u8bed\u6cd5\u5173\u952e\u8bcd\u7684 Adapter\nclass Template extends UnRecursiveTemplate {\n  Adapter = {\n    if: 'wx:if',\n    else: 'wx:else',\n    elseif: 'wx:elif',\n    for: 'wx:for',\n    forItem: 'wx:for-item',\n    forIndex: 'wx:for-index',\n    key: 'wx:key',\n    xs: 'wxs',\n    type: 'weapp'\n  }\n}\n")),Object(l.b)("h3",{id:"thisissupportrecursive"},"this.isSupportRecursive"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("p",null,"\u53ea\u8bfb\uff0c\u662f\u5426\u652f\u6301\u6a21\u677f\u9012\u5f52\u3002"),Object(l.b)("h3",{id:"thissupportxs"},"this.supportXS"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("p",null,"\u9ed8\u8ba4\u503c\uff1afalse"),Object(l.b)("p",null,"\u662f\u5426\u652f\u6301\u6e32\u67d3\u5c42\u811a\u672c\uff0c\u5982\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684 wxs\uff0c\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7684 sjs\u3002"),Object(l.b)("h3",{id:"thisexportexpr"},"this.exportExpr"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",null,"\u9ed8\u8ba4\u503c\uff1a'module.exports ='"),Object(l.b)("p",null,"\u6e32\u67d3\u5c42\u811a\u672c\u7684\u5bfc\u51fa\u547d\u4ee4\u3002"),Object(l.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f sjs \u811a\u672c\u7684\u5bfc\u51fa\u547d\u4ee4\u4e3a ES \u6a21\u5f0f\nclass Template extends RecursiveTemplate {\n  exportExpr = 'export default'\n}\n")),Object(l.b)("h3",{id:"thisinternalcomponents"},"this.internalComponents"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"object")),Object(l.b)("p",null,"Taro \u5185\u7f6e\u7ec4\u4ef6\u5217\u8868\uff0c\u5305\u62ec\u4e86\u76f8\u5bf9\u901a\u7528\u7684\u7ec4\u4ef6\u53ca\u5176\u90e8\u5206\u901a\u7528\u5c5e\u6027\u3002"),Object(l.b)("h3",{id:"thisfocuscomponents"},"this.focusComponents"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Set<string>")),Object(l.b)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e focus \u805a\u7126\u7684\u7ec4\u4ef6\u3002"),Object(l.b)("p",null,"\u9ed8\u8ba4\u503c\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"focusComponents = new Set([\n  'input',\n  'textarea',\n  'editor'\n])\n")),Object(l.b)("h3",{id:"thisvoidelements"},"this.voidElements"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Set<string>")),Object(l.b)("p",null,"\u4e0d\u9700\u8981\u6e32\u67d3\u5b50\u8282\u70b9\u7684\u5143\u7d20\u3002\u914d\u7f6e\u540e\u8fd9\u4e9b\u7ec4\u4ef6\u4e0d\u4f1a\u6e32\u67d3\u5b50\u8282\u70b9\uff0c\u80fd\u591f\u51cf\u5c11\u6a21\u677f\u4f53\u79ef\u3002"),Object(l.b)("p",null,"\u9ed8\u8ba4\u503c\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"voidElements = new Set([\n  'progress',\n  'icon',\n  'rich-text',\n  'input',\n  'textarea',\n  'slider',\n  'switch',\n  'audio',\n  'live-pusher',\n  'video',\n  'ad',\n  'official-account',\n  'open-data',\n  'navigation-bar'\n])\n")),Object(l.b)("h3",{id:"thisnestelements"},"this.nestElements"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Map<string, number>")),Object(l.b)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u6765\u8bf4\uff0c\u53ea\u6709\u90e8\u5206\u7ec4\u4ef6\u6709\u53ef\u80fd\u9012\u5f52\u8c03\u7528\u81ea\u8eab\u3002\u5982 ",Object(l.b)("inlineCode",{parentName:"p"},"<Map>")," \u7ec4\u4ef6\u4e0d\u4f1a\u518d\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"<Map>"),"\uff0c\u800c ",Object(l.b)("inlineCode",{parentName:"p"},"<View>")," \u5219\u53ef\u4ee5\u4e0d\u65ad\u9012\u5f52\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"<View>"),"\u3002"),Object(l.b)("p",null,"\u5982\u679c\u6b64\u5c0f\u7a0b\u5e8f\u4e0d\u652f\u6301\u9012\u5f52\uff0c\u6211\u4eec\u53c8\u628a ",Object(l.b)("inlineCode",{parentName:"p"},"<Map>")," \u6a21\u677f\u5faa\u73af\u6e32\u67d3\u4e86 N \u6b21\uff0c\u90a3\u4e48\u5c0f\u7a0b\u5e8f\u4f53\u79ef\u5c31\u4f1a\u53d8\u5927\uff0c\u800c\u8fd9\u4e9b\u5faa\u73af\u51fa\u6765\u7684\u6a21\u677f\u53c8\u662f\u4e0d\u5fc5\u8981\u7684\u3002\u56e0\u6b64\u4f7f\u7528\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"nestElements")," \u53bb\u6807\u8bb0\u90a3\u4e9b\u53ef\u80fd\u9012\u5f52\u8c03\u7528\u7684\u7ec4\u4ef6\u3002"),Object(l.b)("p",null,"\u4f46\u8003\u8651\u5230\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"p"},"<Form>")," \u8fd9\u4e9b\u7ec4\u4ef6\u5373\u4f7f\u53ef\u80fd\u9012\u5f52\u8c03\u7528\uff0c\u4f46\u4e5f\u4e0d\u4f1a\u9012\u5f52\u8c03\u7528\u592a\u591a\u6b21\u3002\u56e0\u6b64\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"nestElements")," \u4e2d\u53ef\u4ee5\u5bf9\u5b83\u7684\u5faa\u73af\u6e32\u67d3\u6b21\u6570\u8fdb\u884c\u63a7\u5236\uff0c\u5047\u8bbe ",Object(l.b)("inlineCode",{parentName:"p"},"<Form>")," \u4e0d\u4f1a\u9012\u5f52\u8c03\u7528\u8d85\u8fc7 N \u6b21\uff0c\u8fdb\u4e00\u6b65\u51cf\u5c11\u6a21\u677f\u4f53\u79ef\u3002"),Object(l.b)("p",null,"\u9ed8\u8ba4\u503c\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"nestElements = new Map([\n  ['view', -1],\n  ['cover-view', -1],\n  ['block', -1],\n  ['text', -1],\n  ['slot', 8],\n  ['slot-view', 8],\n  ['label', 6],\n  ['form', 4],\n  ['scroll-view', 4]\n])\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"key")," \u503c\u4e3a\u53ef\u4ee5\u9012\u5f52\u8c03\u7528\u81ea\u8eab\u7684\u7ec4\u4ef6\u3002"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"value")," \u503c\u4ee3\u8868\u9012\u5f52\u751f\u6210\u6b64\u7ec4\u4ef6\u7684\u6b21\u6570\uff0c",Object(l.b)("strong",{parentName:"p"},"-1")," \u4ee3\u8868\u5faa\u73af ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"./config-detail#minibaselevel"}),"baseLevel")," \u5c42\u3002"),Object(l.b)("h3",{id:"replacepropname-name-value-componentname"},"replacePropName (name, value, componentName)"),Object(l.b)("p",null,"\u4ee3\u66ff\u7ec4\u4ef6\u7684\u5c5e\u6027\u540d\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"value"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u503c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"componetName"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7ec4\u4ef6\u540d")))),Object(l.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"replacePropName (name, value, componentName) {\n  // \u5982\u679c\u5c5e\u6027\u503c\u4e3a 'eh'\uff0c\u4ee3\u8868\u8fd9\u662f\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u628a\u5c5e\u6027\u540d\u6539\u4e3a\u5168\u5c0f\u5199\u3002\n  if (value === 'eh') return name.toLowerCase()\n  return name\n}\n")),Object(l.b)("h3",{id:"buildxstemplate-"},"buildXsTemplate ()"),Object(l.b)("p",null,"\u652f\u6301\u6e32\u67d3\u5c42\u811a\u672c\u7684\u5c0f\u7a0b\u5e8f\uff0cTaro \u4f1a\u751f\u6210\u4e00\u4e2a utils \u811a\u672c\u5728\u6839\u76ee\u5f55\u3002\u6b64\u65f6\u9700\u8981\u58f0\u660e\u6b64\u51fd\u6570\u4ee5\u8bbe\u7f6e base \u6a21\u677f\u4e2d\u5bf9 utils \u811a\u672c\u7684\u5f15\u7528\u8bed\u6cd5\u3002"),Object(l.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// \u5fae\u4fe1\u5c0f\u7a0b\u5e8f base \u6a21\u677f\u5f15\u7528 utils.wxs \u811a\u672c\nbuildXsTemplate () {\n  return \'<wxs module="xs" src="./utils.wxs" />\'\n}\n')),Object(l.b)("h3",{id:"modifyloopbody-child-nodename"},"modifyLoopBody (child, nodeName)"),Object(l.b)("p",null,"\u4fee\u6539\u7ec4\u4ef6\u6a21\u677f\u7684\u5b50\u8282\u70b9\u5faa\u73af\u4f53\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"child"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7ec4\u4ef6\u6a21\u677f\u7684\u5b50\u8282\u70b9\u5faa\u73af\u4f53")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"nodeName"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7ec4\u4ef6\u540d")))),Object(l.b)("p",null,"\u6ca1\u6709\u5728 ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"./platform-plugin-template#thisvoidelements"}),"this.voidElements")," \u4e2d\u58f0\u660e\u8fc7\u7684\u7ec4\u4ef6\uff0c\u4f1a\u904d\u5386\u5b50\u8282\u70b9\u8fdb\u884c\u6e32\u67d3\u3002"),Object(l.b)("p",null,"\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u6a21\u677f\u901a\u7528\u683c\u5f0f\u4e3a\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<template name="tmpl_0_view">\n  <view>\n    \x3c!-- \u5b50\u8282\u70b9\u5faa\u73af begin --\x3e\n    <block wx:for="{{i.cn}}" wx:key="uid">\n      \x3c!-- \u5b50\u8282\u70b9\u5faa\u73af\u4f53 begin --\x3e\n      <template is="{{...}}" data="{{...}}" />\n      \x3c!-- \u5b50\u8282\u70b9\u5faa\u73af\u4f53 end --\x3e\n    </block>\n    \x3c!-- \u5b50\u8282\u70b9\u5faa\u73af end --\x3e\n  </view>\n</template>\n')),Object(l.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7684 <swiper> \u7ec4\u4ef6\u4e2d\uff0c\u5faa\u73af\u4f53\u5957\u4e00\u5c42 <swiper-item> \u548c <view> \u7ec4\u4ef6\nmodifyLoopBody (child, nodeName) {\n  if (nodeName === \'swiper\') {\n    return `<swiper-item>\n      <view a:for="{{item.cn}}" a:key="id">\n        ${child}\n      </view>\n    </swiper-item>`\n  }\n  return child\n}\n')),Object(l.b)("h3",{id:"modifyloopcontainer-children-nodename"},"modifyLoopContainer (children, nodeName)"),Object(l.b)("p",null,"\u4fee\u6539\u7ec4\u4ef6\u6a21\u677f\u7684\u5b50\u8282\u70b9\u5faa\u73af\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"children"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7ec4\u4ef6\u6a21\u677f\u7684\u5b50\u8282\u70b9\u5faa\u73af")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"nodeName"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7ec4\u4ef6\u540d")))),Object(l.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7684 <picker> \u7ec4\u4ef6\u4e2d\uff0c\u5b50\u8282\u70b9\u5faa\u73af\u5957\u4e00\u5c42 <view> \u7ec4\u4ef6\nmodifyLoopContainer (children, nodeName) {\n  if (nodeName === 'picker') {\n    return `\n<view>${children}</view>\n`\n  }\n  return children\n}\n")),Object(l.b)("h3",{id:"modifytemplateresult-res-nodename-level-children"},"modifyTemplateResult (res, nodeName, level, children)"),Object(l.b)("p",null,"\u4fee\u6539\u7ec4\u4ef6\u6a21\u677f\u7684\u6700\u7ec8\u7ed3\u679c\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"res"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7ec4\u4ef6\u6a21\u677f\u7684\u7ed3\u679c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"nodeName"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7ec4\u4ef6\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"level"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5faa\u73af\u5c42\u7ea7")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"children"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7ec4\u4ef6\u6a21\u677f\u7684\u5b50\u8282\u70b9\u5faa\u73af")))),Object(l.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5f53\u9047\u5230 <swiper-item> \u7ec4\u4ef6\u65f6\u4e0d\u6e32\u67d3\u5176\u6a21\u677f\nmodifyTemplateResult = (res: string, nodeName: string) => {\n  if (nodeName === 'swiper-item') return ''\n  return res\n}\n")),Object(l.b)("h3",{id:"getattrvalue-value-key-nodename"},"getAttrValue (value, key, nodeName)"),Object(l.b)("p",null,"\u8bbe\u7f6e\u7ec4\u4ef6\u7684\u5c5e\u6027\u7ed1\u5b9a\u8bed\u6cd5\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"value"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u503c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"key"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"nodeName"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7ec4\u4ef6\u540d")))),Object(l.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"getAttrValue (value, key, nodeName) {\n  const swanSpecialAttrs = {\n    'scroll-view': ['scrollTop', 'scrollLeft', 'scrollIntoView']\n  }\n\n  // \u767e\u5ea6\u5c0f\u7a0b\u5e8f\u4e2d scroll-view \u7ec4\u4ef6\u90e8\u5206\u5c5e\u6027\u7684\u5c5e\u6027\u7ed1\u5b9a\u8bed\u6cd5\u662f: {= value =}\n  if (isArray(swanSpecialAttrs[nodeName]) && swanSpecialAttrs[nodeName].includes(key)) {\n    return `= ${value} =`\n  }\n\n  // \u5176\u4f59\u5c5e\u6027\u8fd8\u662f\u4f7f\u7528 {{ value }} \u7ed1\u5b9a\u8bed\u6cd5\n  return `{ ${value} }`\n}\n")),Object(l.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(l.b)("h3",{id:"\u5934\u6761\u5c0f\u7a0b\u5e8f\u6a21\u677f"},"\u5934\u6761\u5c0f\u7a0b\u5e8f\u6a21\u677f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5934\u6761\u5c0f\u7a0b\u5e8f\u652f\u6301\u6a21\u677f\u9012\u5f52\uff0c\u6240\u4ee5\u7ee7\u627f ",Object(l.b)("inlineCode",{parentName:"p"},"RecursiveTemplate")," \u57fa\u7c7b\u3002")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u56e0\u4e3a\u4e0d\u9700\u8981\u8c03\u6574\u6a21\u677f\u5185\u5bb9\uff0c\u6240\u4ee5\u53ea\u7528\u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"p"},"supportXS")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},"Adapter")," \u5c5e\u6027\u5373\u53ef\u3002"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { RecursiveTemplate } from '@tarojs/shared'\n\nexport class Template extends RecursiveTemplate {\n  supportXS = false\n  Adapter = {\n    if: 'tt:if',\n    else: 'tt:else',\n    elseif: 'tt:elif',\n    for: 'tt:for',\n    forItem: 'tt:for-item',\n    forIndex: 'tt:for-index',\n    key: 'tt:key',\n    type: 'tt'\n  }\n}\n")),Object(l.b)("h3",{id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6a21\u677f"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6a21\u677f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u652f\u6301\u6a21\u677f\u9012\u5f52\uff0c\u6240\u4ee5\u7ee7\u627f ",Object(l.b)("inlineCode",{parentName:"li"},"UnRecursiveTemplate")," \u57fa\u7c7b\u3002"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"supportXS")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"Adapter")," \u5c5e\u6027\u3002"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u652f\u6301\u6e32\u67d3\u5c42\u811a\u672c ",Object(l.b)("inlineCode",{parentName:"li"},"wxs"),"\uff0c\u6240\u4ee5\b\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"li"},"buildXsTemplate")," \u8bbe\u7f6e base \u6a21\u677f\u4e2d\u5bf9 utils \u811a\u672c\u7684\u5f15\u7528\u8bed\u6cd5\u3002"),Object(l.b)("li",{parentName:"ul"},"\u5229\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"replacePropName")," \u4fee\u6539\u4e86\u7ec4\u4ef6\u7ed1\u5b9a\u7684\u5c5e\u6027\u540d\u3002")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { UnRecursiveTemplate } from '@tarojs/shared'\n\nexport class Template extends UnRecursiveTemplate {\n  supportXS = true\n  Adapter = {\n    if: 'wx:if',\n    else: 'wx:else',\n    elseif: 'wx:elif',\n    for: 'wx:for',\n    forItem: 'wx:for-item',\n    forIndex: 'wx:for-index',\n    key: 'wx:key',\n    xs: 'wxs',\n    type: 'weapp'\n  }\n\n  buildXsTemplate () {\n    return '<wxs module=\"xs\" src=\"./utils.wxs\" />'\n  }\n\n  replacePropName (name, value, componentName) {\n    if (value === 'eh') {\n      const nameLowerCase = name.toLowerCase()\n      if (nameLowerCase === 'bindlongtap' && componentName !== 'canvas') return 'bindlongpress'\n      return nameLowerCase\n    }\n    return name\n  }\n}\n")))}o.isMDXComponent=!0}}]);