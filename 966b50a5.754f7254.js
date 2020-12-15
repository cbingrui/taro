(window.webpackJsonp=window.webpackJsonp||[]).push([[1283],{1348:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(2191),a=t(2192),o=(t(0),t(2193)),c={title:"\u4ece\u65e7\u7248\u672c\u8fc1\u79fb\u5230 Taro Next"},i={unversionedId:"migration",id:"version-3.2.0-canary.1/migration",isDocsHomePage:!1,title:"\u4ece\u65e7\u7248\u672c\u8fc1\u79fb\u5230 Taro Next",description:"\u8fd9\u662f\u4e00\u7bc7\u9488\u5bf9\u65e7\u7248\u672c\u7528\u6237\u5347\u7ea7\u5230 Taro Next \u7684\u8fc1\u79fb\u6307\u5357\u3002\u56e0\u4e3a\u672c\u7ae0\u5185\u5bb9\u5305\u542b\u4e86\u8bb8\u591a\u8be6\u5c3d\u7684\u9610\u8ff0\u548c\u8fc1\u79fb\u4f8b\u5b50\uff0c\u6240\u4ee5\u770b\u8d77\u6765\u6709\u4e00\u4e9b\u957f\u3002\u4f46\u8bf7\u4e0d\u8981\u62c5\u5fc3\uff0cTaro Next  \u5927\u90e8\u5206\u7528\u6cd5\u8fd8\u662f\u548c\u65e7\u7248\u672c\u4e00\u6837\u7684\u3002\u672c\u7ae0\u6ca1\u6709\u63d0\u5230\u7684\u5185\u5bb9\uff0c\u4f60\u53ef\u4ee5\u50cf\u65e7\u7248\u672c\u7684 Taro \u4e00\u6837\u64cd\u4f5c\u6216\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-3.2.0-canary.1/migration.md",slug:"/migration",permalink:"/taro/docs/3.2.0-canary.1/migration",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.1/migration.md",version:"3.2.0-canary.1",sidebar:"version-3.2.0-canary.1/docs",previous:{title:"Reconciler",permalink:"/taro/docs/3.2.0-canary.1/platform-plugin-reconciler"},next:{title:"\u4f7f\u7528 Redux",permalink:"/taro/docs/3.2.0-canary.1/redux"}},p=[{value:"API",id:"api",children:[]},{value:"\u9879\u76ee/\u9875\u9762\u914d\u7f6e",id:"\u9879\u76ee\u9875\u9762\u914d\u7f6e",children:[]},{value:"\u4f7f\u7528\u7b2c\u4e09\u65b9 React \u5e93",id:"\u4f7f\u7528\u7b2c\u4e09\u65b9-react-\u5e93",children:[]},{value:"\u8def\u7531",id:"\u8def\u7531",children:[]},{value:"\u6837\u5f0f",id:"\u6837\u5f0f",children:[]},{value:"\u7f16\u8bd1\u914d\u7f6e",id:"\u7f16\u8bd1\u914d\u7f6e",children:[]},{value:"\u7f16\u8bd1\u4f9d\u8d56\u5e93",id:"\u7f16\u8bd1\u4f9d\u8d56\u5e93",children:[]},{value:"ESLint \u548c\u6700\u4f73\u5b9e\u8df5",id:"eslint-\u548c\u6700\u4f73\u5b9e\u8df5",children:[]},{value:"Ref &amp; DOM",id:"ref--dom",children:[]},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",children:[]},{value:"Hooks",id:"hooks",children:[]},{value:"$scope \u548c $componentType",id:"scope-\u548c-componenttype",children:[]}],b={rightToc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u8fd9\u662f\u4e00\u7bc7\u9488\u5bf9\u65e7\u7248\u672c\u7528\u6237\u5347\u7ea7\u5230 Taro Next \u7684\u8fc1\u79fb\u6307\u5357\u3002\u56e0\u4e3a\u672c\u7ae0\u5185\u5bb9\u5305\u542b\u4e86\u8bb8\u591a\u8be6\u5c3d\u7684\u9610\u8ff0\u548c\u8fc1\u79fb\u4f8b\u5b50\uff0c\u6240\u4ee5\u770b\u8d77\u6765\u6709\u4e00\u4e9b\u957f\u3002\u4f46\u8bf7\u4e0d\u8981\u62c5\u5fc3\uff0cTaro Next  \u5927\u90e8\u5206\u7528\u6cd5\u8fd8\u662f\u548c\u65e7\u7248\u672c\u4e00\u6837\u7684\u3002",Object(o.b)("strong",{parentName:"p"},"\u672c\u7ae0\u6ca1\u6709\u63d0\u5230\u7684\u5185\u5bb9\uff0c\u4f60\u53ef\u4ee5\u50cf\u65e7\u7248\u672c\u7684 Taro \u4e00\u6837\u64cd\u4f5c\u6216\u4f7f\u7528"),"\u3002"),Object(o.b)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u4f60\u5e76\u4e0d\u9700\u8981\u53bb\u66f4\u6539\u4efb\u4f55\u4e1a\u52a1\u7684\u903b\u8f91\u4ee3\u7801\uff0c\u8bb8\u591a\u66f4\u6539\u4f7f\u7528\u7f16\u8f91\u5668\u7684\u300c\u67e5\u627e/\u66ff\u6362\u300d\u5c31\u53ef\u4ee5\u5b8c\u6210\u3002\u4f60\u751a\u81f3\u4e0d\u9700\u8981\u5b8c\u6574\u5730\u9605\u8bfb\u6574\u7ae0\u5185\u5bb9\uff08\u91cd\u70b9\u5728 1\uff0c2 \u5c0f\u8282\uff0c ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#API"}),"API")," \u548c ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#%E9%A1%B9%E7%9B%AE/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE"}),"\u9879\u76ee/\u9875\u9762\u914d\u7f6e"),"\uff09\uff0c\u53ea\u6709\u5f53\u51fa\u95ee\u9898\u65f6\u5b9a\u4f4d\u5230\u5177\u4f53\u7684\u5c0f\u8282\u5373\u53ef\u3002"),Object(o.b)("p",null,"\u66f4\u65b0\u5230 Taro Next \u9996\u5148\u9700\u8981\u66f4\u65b0\u9879\u76ee\u4f9d\u8d56\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u66f4\u65b0 CLI\n$ npm i -g @tarojs/cli@next\n# \u5728\u9879\u76ee\u76ee\u5f55\u66f4\u65b0\u9879\u76ee\u4f9d\u8d56\n$ npm i @tarojs/runtime@next @tarojs/mini-runner@next @tarojs/components@next @tarojs/taro@next\n$ npm i react @tarojs/react@next # \u5982\u679c\u4f7f\u7528 React\n$ npm i nervjs # \u5982\u679c\u4f7f\u7528 Nerv\n# CLI \u547d\u4ee4\u548c\u4ee5\u524d\u4e00\u6a21\u4e00\u6837\n$ taro build --type weapp --watch\n")),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("p",null,"\u5728\u65e7\u7248\u672c Taro \u4e2d\uff0c\u6211\u4eec\u628a\u6240\u6709\u9762\u5411\u5e94\u7528\u5f00\u53d1\u8005\u7684 API \u90fd\u653e\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u91cc\uff0c\u4e00\u4e2a\u5178\u578b\u7684 Taro \u7ec4\u4ef6/\u9875\u9762\u4f1a\u50cf\u8fd9\u6837\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// \u7c7b\u7ec4\u4ef6\nimport Taro, { Component } from '@tarojs/taro'\n\nclass Wallace extends Component {\n    componentDidMount () {\n      Taro.request().then(/* do something */)\n    }\n  render () {\n    return ...\n    }\n}\n\n// \u51fd\u6570\u5f0f\u7ec4\u4ef6\nimport Taro, { useEffect } from '@tarojs/taro'\n\nfunction Tall () {\n    useEffect(() => {\n      Taro.request().then(/* do something */)\n    }, [])\n    return ...\n}\n")),Object(o.b)("p",null,"\u5728 Taro Next \u4e2d\uff0c\u5c5e\u4e8e\u6846\u67b6\u672c\u8eab\u7684 API \u4ece\u6846\u67b6\u81ea\u5df1\u7684\u5305\u4e2d\u5f15\u5165\uff0c\u5176\u5b83\u7684 API \u4ecd\u7136\u4ece ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u5f15\u5165\u3002\u4f7f\u7528\u54ea\u4e2a\u6846\u67b6\u6765\u8fdb\u884c\u5f00\u53d1\u5b8c\u5168\u7531\u5f00\u53d1\u8005\u6765\u51b3\u5b9a\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\nimport React, { Component }  from 'react' // Component \u662f\u6765\u81ea\u4e8e React \u7684 API\n// \u4ece nervjs \u4e2d\u5f15\u5165\uff0c\u90a3\u8fd0\u884c\u7684\u5c31\u662f Nerv\n// import { Component } from 'nervjs'\n\nclass Reporter extends Component {\n  componentDidMount () {\n    Taro.request().then(/* do something */)\n  }\n  render () {\n    return ...\n  }\n}\n\n// \u51fd\u6570\u5f0f\u7ec4\u4ef6\nimport Taro from '@tarojs/taro'\n// useEffect \u662f\u6765\u81ea\u4e8e React \u7684 API\nimport React, { useEffect }  from 'react'\n// \u4ece nervjs \u4e2d\u5f15\u5165\uff0c\u90a3\u8fd0\u884c\u7684\u5c31\u662f Nerv\n// import { useEffect } from 'nervjs'\n\nfunction Fast () {\n  useEffect(() => {\n    Taro.request().then(/* do something */)\n  }, [])\n  return ...\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Nerv \u662f\u51f9\u51f8\u5b9e\u9a8c\u5ba4\u7684\u4e00\u4e2a\u5f00\u6e90\u7c7b React \u6846\u67b6\uff0c\u4f53\u79ef\u6bd4 React \u66f4\u5c0f\uff0c\u591a\u6570\u60c5\u51b5\u6027\u80fd\u8868\u73b0\u4e5f\u6bd4 React \u66f4\u597d\u3002\u4f46\u67d0\u4e9b React \u751f\u6001\u7684\u5e93\u517c\u5bb9\u6027\u53ef\u80fd\u4f1a\u51fa\u73b0\u95ee\u9898\u3002")),Object(o.b)("h2",{id:"\u9879\u76ee\u9875\u9762\u914d\u7f6e"},"\u9879\u76ee/\u9875\u9762\u914d\u7f6e"),Object(o.b)("p",null,"\u5728\u65e7\u7248\u672c Taro \u4e2d\uff0c\u9875\u9762/\u9879\u76ee\u7684\u914d\u7f6e\u6302\u8f7d\u5728\u7c7b\u7ec4\u4ef6\u7684\u7c7b\u5c5e\u6027\u6216\u51fd\u6570\u5f0f\u7684\u5c5e\u6027\u4e0a\uff0c\u901a\u8fc7 AST \u5206\u6790\u53d6\u51fa\u6765\uff0c\u7136\u540e\u751f\u6210 JSON \u6587\u4ef6\u3002\u4f46\u8fd9\u6837\u505a\uff0c\u9879\u76ee\u9875\u9762\u7684\u914d\u7f6e\u5c31\u65e0\u6cd5\u52a8\u6001\u5730\u751f\u6210\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// app.js \u9879\u76ee\u914d\u7f6e\nclass App extends Component {\n  config = {\n    pages: [\n      'pages/index/index'\n    ],\n    window: {\n      backgroundTextStyle: 'light',\n      navigationBarBackgroundColor: '#fff',\n      navigationBarTitleText: 'WeChat',\n      navigationBarTextStyle: 'black'\n    }\n  }\n  render () {\n    return ...\n  }\n}\n\n// index.js \u9875\u9762\u914d\u7f6e\nfunction Index () {\n  return ...\n}\n\nIndex.config = {\n  navigationBarTitleText: '\u9996\u9875'\n}\n\n")),Object(o.b)("p",null,"\u5728 Taro Next \u4e2d\uff0c\u4f1a\u6709\u4e00\u4e2a\u65b0\u7684\u6587\u4ef6\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"*.config.js")," \uff0c",Object(o.b)("inlineCode",{parentName:"p"},"*")," \u4ee3\u8868\u4f60\u9875\u9762/\u9879\u76ee\u6587\u4ef6\u7684\u6587\u4ef6\u540d\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"config")," \u6587\u4ef6\u5fc5\u987b\u548c\u9875\u9762/\u9879\u76ee\u6587\u4ef6\u5728\u540c\u4e00\u6587\u4ef6\u5939\u3002\u5728\u8fd9\u4e2a\u6587\u4ef6\u91cc\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u5408\u6cd5\u7684 JavaScript \u8bed\u6cd5\uff0c\u53ea\u8981\u6700\u7ec8\u628a\u914d\u7f6e\u4f5c\u4e3a\u5bf9\u8c61\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"export default")," \u51fa\u53bb\u5373\u53ef\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// app.js \u9879\u76ee\u6587\u4ef6\nclass App extends Component {\n  render () {\n    return ...\n  }\n}\n\n// app.config.js\nexport default {\n  pages: [\n    'pages/index/index'\n  ],\n  window: {\n    backgroundTextStyle: 'light',\n    navigationBarBackgroundColor: '#fff',\n    navigationBarTitleText: 'WeChat',\n    navigationBarTextStyle: 'black'\n  }\n}\n\n// index.js \u9875\u9762\u6587\u4ef6\nfunction Index () {\n  return ...\n}\n\n// index.config.js \u9875\u9762\u914d\u7f6e\nconst title = '\u9996\u9875'\nexport default {\n  navigationBarTitleText: title\n}\n")),Object(o.b)("p",null,"\u4e00\u4e2a\u5b8c\u6574\u7684\u9879\u76ee\u6587\u4ef6\u7ed3\u6784\u793a\u4f8b\u4f1a\u50cf\u8fd9\u6837\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),".\n\u251c\u2500\u2500 app.config.js // \u5165\u53e3\u6587\u4ef6\u9879\u76ee\u914d\u7f6e\n\u251c\u2500\u2500 app.js\n\u251c\u2500\u2500 app.scss\n\u251c\u2500\u2500 components\n\u2502   \u2514\u2500\u2500 result.js // \u7ec4\u4ef6\u82e5\u4e0d\u4f7f\u7528\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u5219\u65e0\u9700\u914d\u7f6e\n\u2514\u2500\u2500 pages\n    \u2514\u2500\u2500 index\n        \u251c\u2500\u2500 index.config.js // index \u7684\u9875\u9762\u914d\u7f6e\n        \u2514\u2500\u2500 index.js\n")),Object(o.b)("h2",{id:"\u4f7f\u7528\u7b2c\u4e09\u65b9-react-\u5e93"},"\u4f7f\u7528\u7b2c\u4e09\u65b9 React \u5e93"),Object(o.b)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5f15\u5165 React \u76f8\u5173\u751f\u6001\u7684\u5e93\uff0c\u76f4\u63a5\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," \u5b89\u88c5\u7136\u540e\u5f15\u5165\u4f7f\u7528\u5373\u53ef\uff0cTaro \u4e0d\u4f1a\u518d\u7ef4\u62a4\u7c7b\u4f3c\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"taro-redux")," \u3001",Object(o.b)("inlineCode",{parentName:"p"},"taro-mobx")," \u4e4b\u7c7b\u7684\u5e93\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// \u5f53\u4f7f\u7528\u4e86 JSX \u65f6\uff0cbabel \u4f1a\u9690\u5f0f\u5730\u8c03\u7528 React.createElement\n// \u56e0\u6b64\u53ea\u8981\u4f60\u4f7f\u7528\u4e86 JSX\uff0c\u5c31\u8981\u628a React \u6216 Nerv \u5f15\u5165\nimport React from 'react'\nimport { useSelector }  from 'react-redux'\n// \u5982\u679c\u662f\u4f7f\u7528\u7684\u662f Nerv\n// import { useSelector }  from 'nerv-redux'\nfunction Excited () {\n  const counter = useSelector(state => state.counter)\n  return ...\n}\n")),Object(o.b)("h2",{id:"\u8def\u7531"},"\u8def\u7531"),Object(o.b)("p",null,"\u5728\u65e7\u7248\u672c\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"this.$router")," \u8bbf\u95ee\u5f53\u524d\u7ec4\u4ef6/\u9875\u9762\u8def\u7531\u7684\u8be6\u60c5\u3002\u5728 Taro Next \u5bf9\u5e94\u7684 API \u662f\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u4e2d\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"\uff0c\u4e24\u8005\u7684\u5c5e\u6027\u4e00\u6a21\u4e00\u6837\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { getCurrentInstance } from '@tarojs/taro'\nclass C extends Component {\n  current = getCurrentInstance()\n\n  componentWillMount () {\n    // getCurrentInstance().router \u548c this.$router \u548c\u5c5e\u6027\u4e00\u6837\n    console.log(this.current.router)\n  }\n}\n\n// \u51fd\u6570\u5f0f\u7ec4\u4ef6\nimport { getCurrentInstance } from '@tarojs/taro'\nfunction C () {\n  const { router } = getCurrentInstance()\n  // getCurrentInstance().router \u548c useRouter \u8fd4\u56de\u7684\u5185\u5bb9\u4e5f\u4e00\u6837\n  // const router = useRouter()\n}\n")),Object(o.b)("p",null,"\u800c\u5bf9\u4e8e\u9879\u76ee\u5165\u53e3\u7ec4\u4ef6\u800c\u8a00\uff0c\u8def\u7531\u4fe1\u606f\u6211\u4eec\u63a8\u8350\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidShow")," \u751f\u547d\u5468\u671f\u7684\u53c2\u6570\u4e2d\u76f4\u63a5\u8bfb\u53d6\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// app.js \u9879\u76ee\u5165\u53e3\u6587\u4ef6\nclass App extends Component {\n  componentDidShow (options /* \u8fd9\u91cc\u6709\u4f60\u60f3\u8981\u7684\u8def\u7531\u4fe1\u606f */) {\n  }\n\n  render () {\n    ...\n  }\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u806a\u660e\u7684\u8bfb\u8005\u5df2\u7ecf\u731c\u5230\u4e86\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"getCurrentInstance().router")," \u5176\u5b9e\u662f\u8bbf\u95ee\u5c0f\u7a0b\u5e8f\u5f53\u524d\u9875\u9762 ",Object(o.b)("inlineCode",{parentName:"p"},"onLoad")," \u751f\u547d\u5468\u671f\u53c2\u6570\u7684\u5feb\u6377\u65b9\u5f0f\u3002")),Object(o.b)("h2",{id:"\u6837\u5f0f"},"\u6837\u5f0f"),Object(o.b)("p",null,"\u5728 Taro Next \u4e2d\uff0c\u6ca1\u6709 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nervjs.github.io/taro/docs/component-style.html"}),"\u7ec4\u4ef6\u7684\u5916\u90e8\u6837\u5f0f\u548c\u5168\u5c40\u6837\u5f0f")," \u7684\u6982\u5ff5\uff0c\u7ec4\u4ef6\u7684\u914d\u7f6e\uff08",Object(o.b)("inlineCode",{parentName:"p"},"config.js"),"\uff09\u662f\u65e0\u6548\u7684\uff0c\u9875\u9762\u548c\u5165\u53e3\u6587\u4ef6\u5f15\u5165\u7684 CSS \u90fd\u4f1a\u53d8\u6210\u5168\u5c40 CSS \uff0c\u6ca1\u6709\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"externalClasses")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"addGlobalClass")," \u8fd9\u4e24\u4e2a\u6982\u5ff5\u3002"),Object(o.b)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5e26\u4f5c\u7528\u57df\u7684 CSS\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules"}),"CSS Modules"),"\u3002"),Object(o.b)("h2",{id:"\u7f16\u8bd1\u914d\u7f6e"},"\u7f16\u8bd1\u914d\u7f6e"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u9700\u8981\u6dfb\u52a0 ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://nervjs.github.io/taro/docs/config"}),"framework \u914d\u7f6e"),"\uff0c\u53d6\u503c\u4e3a\u4f7f\u7528\u7684\u6846\u67b6\uff08react, nerv, vue, vue3\uff09"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://nervjs.github.io/taro/docs/1.x/config"}),"jsxAttributeNameReplace")," \u914d\u7f6e\u5df2\u88ab\u79fb\u9664\u3002\u56e0\u4e3a\u6211\u4eec\u4e0d\u9700\u8981\u914d\u7f6e")),Object(o.b)("h2",{id:"\u7f16\u8bd1\u4f9d\u8d56\u5e93"},"\u7f16\u8bd1\u4f9d\u8d56\u5e93"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Webpack")," \u5347\u7ea7\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"Webpack@4"),"\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"Babel")," \u5347\u7ea7\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"babel@7"),"\u3002Webpack \u5347\u7ea7\u662f\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"taro@2")," \u4e2d\u5b8c\u6210\u7684\uff0c\u5982\u679c\u4f60\u662f\u4ece ",Object(o.b)("inlineCode",{parentName:"p"},"taro@1")," \u5347\u7ea7\u4e0a\u6765\u7684\u8bdd\uff0c\u6216\u8bb8\u9700\u8981\u53bb\u770b\u770b ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/feat_mini_webpack/docs/config-detail.md"}),"Taro 2 \u66f4\u6539")," \u67e5\u770b\u4f7f\u7528 Webpack \u7f16\u8bd1\u540e\u5e26\u6765\u7684\u53d8\u5316\u3002"),Object(o.b)("p",null,"\u5347\u7ea7\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"babel@7")," \u610f\u5473\u7740\u4f60\u7684\u9879\u76ee\u6587\u4ef6\u5168\u90e8\u90fd\u4f1a\u901a\u8fc7\u6839\u76ee\u5f55\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"babel.config.js")," \u7684\u914d\u7f6e\u8fdb\u884c\u7f16\u8bd1\u3002"),Object(o.b)("h2",{id:"eslint-\u548c\u6700\u4f73\u5b9e\u8df5"},"ESLint \u548c\u6700\u4f73\u5b9e\u8df5"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"eslint-plugin-taro")," \u5df2\u88ab\u5e9f\u5f03\uff0c\u4f60\u4e0d\u518d\u9700\u8981\u9075\u5faa\u5b83\u6240\u89c4\u5b9a\u7684\u79cd\u79cd\u9650\u5236\u3002\u4f60\u53ef\u4ee5\u53d1\u6325\u4f60\u7684\u521b\u9020\u529b\u4f7f\u7528\u4efb\u4f55\u5408\u6cd5\u7684 JSX \u8bed\u6cd5\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { View, Text } from '@tarojs/components'\nfunction C () {\n  // \u4f60\u53ef\u4ee5\u9009\u62e9\u4e0d\u4f7f\u7528 JSX\uff0c\u4f46\u5143\u7d20\u8fd8\u662f\u5fc5\u987b\u4ece `@tarojs/components` \u5f15\u5165\n  const title = React.createElement(View, null, 'Numbers:')\n\n  const numbers = []\n  for (let i = 0; i < 10; i++) {\n    numbers.push(<Text key={i}>{i}</Text>)\n  }\n\n  return <>\n    {title}\n    {numbers}\n  </>\n}\n")),Object(o.b)("p",null,"\u65e7\u7248\u672c\u6587\u6863\u6240\u63d0\u5230\u7684",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nervjs.github.io/taro/docs/1.x/best-practice.html"}),"\u6700\u4f73\u5b9e\u8df5"),"\u4e5f\u4e0d\u5fc5\u518d\u9075\u5faa\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5373\u4fbf\u4f60\u4e0d\u7ed9\u7ec4\u4ef6\u8bbe\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},"defaultProps"),"\uff0c\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d\u4e0d\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\uff08\u8fd8\u6709\u5176\u5b83\u7684\u65e7\u7248\u672c\u4ee3\u7801\u98ce\u683c\u6700\u4f73\u5b9e\u8df5\uff09\uff0c\u4f60\u7684\u4ee3\u7801\u4e5f\u80fd\u8fd0\u884c\u3002\u4f46\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u9075\u5faa\u8fd9\u6837\u7684 ",Object(o.b)("strong",{parentName:"p"},"\u4ee3\u7801\u98ce\u683c\u6700\u4f73\u5b9e\u8df5")," \u53ef\u4ee5\u8ba9\u4f60\u7684\u4ee3\u7801\u66f4\u5065\u58ee\uff0c\u4f60\u7684\u5e94\u7528\u4e5f\u4f1a\u56e0\u6b64\u800c\u6536\u76ca\u3002\u800c\u5bf9\u4e8e\u53e6\u5916\u7684\u4e00\u4e9b\u7531\u4e8e\u65e7\u7248\u672c Taro \u6267\u884c\u673a\u5236\u7684 hack\uff08\u4f8b\u5982 render \u8c03\u7528\u4e24\u6b21\uff0cstate \u548c props \u65e0\u6cd5\u91cd\u540d\uff0c\u4e0d\u8981\u6253\u5370\u7ec4\u4ef6\uff09\uff0c\u8fd9\u7c7b\u6700\u4f73\u5b9e\u8df5\u53ef\u4ee5\u4e0d\u5fc5\u7406\u4f1a\u3002"),Object(o.b)("h2",{id:"ref--dom"},"Ref & DOM"),Object(o.b)("p",null,"Taro Next \u5728\u5e95\u5c42\u4f1a\u7ef4\u62a4\u4e00\u4e2a\u7cbe\u7b80\u7684 DOM \u7cfb\u7edf\uff0c\u5728\u6846\u67b6\u4e2d\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"ref")," \u94fe\u63a5\u5230\u7684\u662f\u4e00\u4e2a Taro Element \u5b9e\u4f8b\uff0c\u56e0\u6b64\u4f60\u76f4\u63a5\u53ef\u4ee5\u4f7f\u7528 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement"}),Object(o.b)("inlineCode",{parentName:"a"},"HTMLElement"))," \u7684\u90e8\u5206\u65b9\u6cd5\u76f4\u63a5\u64cd\u4f5c\u5b83\u3002\u5982\u679c\u4f60\u9700\u8981\u83b7\u53d6\u539f\u751f\u5c0f\u7a0b\u5e8f DOM \u5b9e\u4f8b\uff0c\u90a3\u9700\u8981\u4f7f\u7528\u539f\u751f\u5c0f\u7a0b\u5e8f\u7684 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html"}),Object(o.b)("inlineCode",{parentName:"a"},"SelectorQuery"))," \u6765\u83b7\u53d6\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5927\u90e8\u5206\u548c\u6e32\u67d3\u76f8\u5173\u7684 DOM \u5c5e\u6027\u4f60\u90fd\u53ef\u4ee5\u901a\u8fc7\u50cf Web \u5f00\u53d1\u4e00\u6837\u83b7\u53d6\u6216\u8bbe\u7f6e\uff08\u5982\u679c\u6709\u5fc5\u8981\u7684\u8bdd\u4f60\u751a\u81f3\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"parentNode")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"childNodes")," \u8bbf\u95ee\u5143\u7d20\u7684\u7236\u5143\u7d20\u548c\u5b50\u5143\u7d20\uff01\uff09\uff0c\u4f46\u5143\u7d20\u7684\u4f4d\u7f6e\u4f60\u8fd8\u662f\u5fc5\u987b\u901a\u8fc7\u539f\u751f\u5c0f\u7a0b\u5e8f DOM \u5b9e\u4f8b\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"boundingClientRect()")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"scrollOffset()")," \u65b9\u6cd5\u83b7\u53d6\u3002")),Object(o.b)("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f React\uff0c\u5c31\u5c06\u65e0\u6cd5\u4f7f\u7528\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u6765\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"ref"),"\u3002(Nerv \u4e0d\u53d7\u6b64\u5f71\u54cd)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"class C extends Component {\n  input = React.createRef()\n\n  componentDidMount () {\n    const node = this.input.current // node \u662f\u4e00\u4e2a Taro Element \u5b9e\u4f8b\n    node.focus() // ok, \u5728 Web \u5f00\u53d1\u4e2d\u5e38\u89c1\u505a\u6cd5\n\n    // \u4ee5\u4e0b\u5199\u6cd5\u4e5f\u80fd\u66f4\u65b0\u89c6\u56fe\uff0c\u4f46\u4e0d\u63a8\u8350\u8fd9\u4e48\u505a\uff0c\u66f4\u63a8\u8350\u4f7f\u7528\u6570\u636e\u6765\u9a71\u52a8\u89c6\u56fe\u66f4\u65b0\n    node.setAttribute('class', 'input-css-class')\n    node.className = 'input-css-class'\n    node.style.fontSize = '16px'\n    node.value = 'excited!'\n\n    // \u5982\u679c\u4f60\u9700\u8981\u83b7\u53d6\u539f\u751f\u5c0f\u7a0b\u5e8f DOM \u7684\u8bdd\n    const miniNode = Taro.createSelectorQuery().select('#' + node.id)\n  }\n\n  render () {\n    return <Input ref={this.input} id='input' />\n  }\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5728\u672a\u6765\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u5728 Taro Element \u4e0a\u63d0\u4f9b\u4e00\u4e2a\u53ef\u4ee5\u5feb\u901f\u8bbf\u95ee\u5c0f\u7a0b\u5e8f DOM \u5b9e\u4f8b\u7684\u5c5e\u6027\u3002\u76ee\u524d\u8bf7\u6309\u7167\u4e0a\u8ff0\u4f8b\u5b50\u4f7f\u7528\u3002")),Object(o.b)("h2",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),Object(o.b)("p",null,"\u5f53\u4f60\u4f7f\u7528 React \u65f6\uff08\u4f7f\u7528 Nerv \u4e0d\u53d7\u6b64\u5f71\u54cd\uff09\uff0c\u4ee5\u4e0b\u751f\u547d\u5468\u671f\u88ab\u66f4\u540d\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"componentWillMount()")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"UNSAFE_componentWillMount()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"componentWillReceiveProps")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"UNSAFE_componentWillReceiveProps()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"componentWillUpdate")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"UNSAFE_componentWillUpdate()"))),Object(o.b)("p",null,"\u65b0\u589e\u4e00\u4e2a\u751f\u547d\u5468\u671f: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-component.html#componentdidcatch"}),Object(o.b)("inlineCode",{parentName:"a"},"componentDidCatch(err, info)"))," \uff0c\u8fd9\u662f\u7531\u6846\u67b6\u672c\u8eab\uff08React \u6216 Nerv\uff09\u63d0\u4f9b\u7684\u3002",Object(o.b)("inlineCode",{parentName:"p"},"componentDidCatch(err, info)")," \u4f1a\u5728\u7ec4\u4ef6\u548c\u5b83\u7684\u5b50\u5b59\u629b\u51fa\u9519\u8bef\u65f6\u89e6\u53d1\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570 ",Object(o.b)("inlineCode",{parentName:"p"},"err")," \u6307\u5411\u629b\u51fa\u7684\u9519\u8bef\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",Object(o.b)("inlineCode",{parentName:"p"},"info")," \u662f\u7ec4\u4ef6\u7684\u8c03\u7528\u4fe1\u606f\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"componentDidCatch")," \u548c\u539f\u6709\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidCatchError")," \u5171\u540c\u5b58\u5728\uff0c\u533a\u522b\u5728\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidCatchError")," \u53ea\u80fd\u5728\u5165\u53e3\u7ec4\u4ef6\uff08App\uff09\u4e2d\u4f7f\u7528\uff0c\u5bf9\u5e94\u539f\u751f\u5c0f\u7a0b\u5e8f\u7684\u751f\u547d\u5468\u671f ",Object(o.b)("inlineCode",{parentName:"p"},"onError()"),"\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"componentDidCatch")," \u53ef\u4ee5\u5728\u4efb\u4f55 React/Nerv \u7c7b\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff08\u5305\u62ec\u5165\u53e3\u7ec4\u4ef6\uff09\u3002")),Object(o.b)("h2",{id:"hooks"},"Hooks"),Object(o.b)("p",null,"\u5728 Taro Next\uff0cTaro \u7684",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./hooks"}),"\u4e13\u6709 Hooks"),"\uff08\u4f8b\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"usePageScroll"),", ",Object(o.b)("inlineCode",{parentName:"p"},"useReachBottom"),"\uff09\u4ece ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u4e2d\u5f15\u5165\uff0c\u6846\u67b6\u81ea\u5df1\u7684 Hooks \uff08\u4f8b\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect"),", ",Object(o.b)("inlineCode",{parentName:"p"},"useState"),"\uff09\u4ece\u5bf9\u5e94\u7684\u6846\u67b6\u5f15\u5165\u3002"),Object(o.b)("p",null,"\u53e6\u5916\uff0c\u65e7\u7248\u672c\u7684 Taro \u53ef\u4ee5\u5728 Class Component \u4e2d\u4f7f\u7528 Hooks\uff0c\u4f46 React \u662f\u4e0d\u5141\u8bb8\u8fd9\u6837\u7684\u884c\u4e3a\u7684\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { usePageScroll, useReachBottom } from '@tarojs/taro' // Taro \u4e13\u6709 Hooks\nimport { useState, useEffect } from 'react' // \u6846\u67b6 Hooks \uff08\u57fa\u7840 Hooks\uff09\n// \u5982\u679c\u4f60\u4f7f\u7528 Nerv \u7684\u8bdd\n// import { useState, useEffect } from 'nervjs' // \u6846\u67b6 Hooks \uff08\u57fa\u7840 Hooks\uff09\n")),Object(o.b)("h2",{id:"scope-\u548c-componenttype"},"$scope \u548c $componentType"),Object(o.b)("p",null,"\u7531\u4e8e Taro Next \u6ca1\u6709\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u6240\u4ee5\u4e5f\u6ca1\u6709\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"this.$scope")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"this.$componentType")," \u7684\u6982\u5ff5\u3002",Object(o.b)("inlineCode",{parentName:"p"},"getCurrentInstance().page")," \u53ef\u4ee5\u8fd4\u56de\u5f53\u524d\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u5b9e\u4f8b\u3002"))}l.isMDXComponent=!0},2191:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},2192:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},2193:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(t),m=r,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return t?a.a.createElement(d,i(i({ref:n},b),{},{components:t})):a.a.createElement(d,i({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);