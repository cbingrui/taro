(window.webpackJsonp=window.webpackJsonp||[]).push([[1634],{1698:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(2191),n=a(2192),b=(a(0),a(2193)),c={},o={unversionedId:"CONTRIBUTING",id:"version-3.2.0-canary.1/CONTRIBUTING",isDocsHomePage:!1,title:"CONTRIBUTING",description:"\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u793e\u533a\u7684\u5f00\u53d1\u8005\u5411 Taro \u505a\u51fa\u8d21\u732e\uff0c\u6211\u4eec\u7684\u5171\u5efa\u5021\u8bae\u300aTaro \u9080\u4f60\u52a0\u5165\u793e\u533a\u5171\u5efa\u300b\u3002",source:"@site/versioned_docs/version-3.2.0-canary.1/CONTRIBUTING.md",slug:"/CONTRIBUTING",permalink:"/taro/docs/3.2.0-canary.1/CONTRIBUTING",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.1/CONTRIBUTING.md",version:"3.2.0-canary.1",sidebar:"version-3.2.0-canary.1/docs",previous:{title:"Taro \u56e2\u961f",permalink:"/taro/docs/3.2.0-canary.1/team"},next:{title:"\u5b89\u88c5\u53ca\u4f7f\u7528",permalink:"/taro/docs/3.2.0-canary.1/GETTING-STARTED"}},i=[{value:"Taro \u7ec4\u6210",id:"taro-\u7ec4\u6210",children:[]},{value:"Issue \u62a5\u544a\u6307\u5357",id:"issue-\u62a5\u544a\u6307\u5357",children:[]},{value:"\u5f00\u53d1\u914d\u7f6e",id:"\u5f00\u53d1\u914d\u7f6e",children:[]},{value:"\u63d0\u4ea4 commit",id:"\u63d0\u4ea4-commit",children:[]},{value:"\u4ee3\u7801\u98ce\u683c",id:"\u4ee3\u7801\u98ce\u683c",children:[]},{value:"Pull Request \u6307\u5357",id:"pull-request-\u6307\u5357",children:[]},{value:"Credits",id:"credits",children:[]}],p={rightToc:i};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u793e\u533a\u7684\u5f00\u53d1\u8005\u5411 Taro \u505a\u51fa\u8d21\u732e\uff0c\u6211\u4eec\u7684\u5171\u5efa\u5021\u8bae",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/4714"}),"\u300aTaro \u9080\u4f60\u52a0\u5165\u793e\u533a\u5171\u5efa\u300b"),"\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u63d0\u4ea4 RFC \u6216\u8005\u67e5\u770b\u76f8\u5173\u7684 RFC\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/NervJS/taro-rfcs"}),"taro-rfcs \u4ed3\u5e93")),Object(b.b)("li",{parentName:"ul"},"\u5206\u4eab\u4f60\u7684\u6848\u4f8b\uff0c\u53ea\u9700\u63d0\u4ea4\u5c0f\u7a0b\u5e8f\u7801\u3001\u4e8c\u7ef4\u7801\uff0c\u4f60\u53ef\u4ee5\u63d0\u4ea4\u5230 ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/NervJS/taro-user-cases"}),"taro-user-cases")),Object(b.b)("li",{parentName:"ul"},"\u5206\u4eab\u4f60\u7684 \u201c\u8f6e\u5b50\u201d \uff08SDK\u3001\u7ec4\u4ef6\u3001UI\u3001\u9879\u76ee\uff09\u4f60\u53ef\u4ee5\u63d0\u4ea4\u5230 ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://taro-ext.jd.com"}),"\u7269\u6599\u5e02\u573a")),Object(b.b)("li",{parentName:"ul"},"\u5206\u4eab\u4f60\u7684\u7ecf\u9a8c\uff08\u5f00\u6e90\u9879\u76ee\u3001\u6559\u7a0b\u3001\u6587\u7ae0\uff09\u4f60\u53ef\u4ee5\u63d0\u4ea4\u5230 ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/NervJS/awesome-taro"}),"wesome-taro")," \u6216\u8005\u7ed9 \u300cTaro\u793e\u533a\u300d\u516c\u4f17\u53f7\u6295\u7a3f")),Object(b.b)("p",null,"\u5728\u4ee3\u7801\u63d0\u4ea4\u8d21\u732e\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u82b1\u4e00\u4e9b\u65f6\u95f4\u9605\u8bfb\u4ee5\u4e0b\u5185\u5bb9\uff0c\u4fdd\u8bc1\u8d21\u732e\u662f\u7b26\u5408\u89c4\u8303\u5e76\u4e14\u80fd\u5e2e\u52a9\u5230\u793e\u533a\u3002"),Object(b.b)("h2",{id:"taro-\u7ec4\u6210"},"Taro \u7ec4\u6210"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"NPM \u5305"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u63cf\u8ff0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/babel-preset-taro"}),Object(b.b)("inlineCode",{parentName:"a"},"babel-preset-taro"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7ed9 Taro \u9879\u76ee\u4f7f\u7528\u7684 babel preset")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/taro"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/taro"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u66b4\u9732\u7ed9\u5e94\u7528\u5f00\u53d1\u8005\u7684 Taro \u6838\u5fc3 API")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/shared"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/shared"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Taro \u5185\u90e8\u4f7f\u7528\u7684 utils")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/api"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/api"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u66b4\u9732\u7ed9 @tarojs/taro \u7684\u6240\u6709\u7aef\u7684\u516c\u6709 API")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/taro-h5"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/taro-h5"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u66b4\u9732\u7ed9 @tarojs/taro \u7684 H5 \u7aef API")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/router"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/router"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Taro H5 \u8def\u7531")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/react"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/react"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u57fa\u4e8e react-reconciler \u7684\u5c0f\u7a0b\u5e8f\u4e13\u7528 React \u6e32\u67d3\u5668")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/cli"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/cli"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Taro \u5f00\u53d1\u5de5\u5177")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/extend"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/extend"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Taro \u6269\u5c55\uff0c\u5305\u542b jQuery API \u7b49")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/helper"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/helper"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5185\u90e8\u7ed9 CLI \u548c runner \u4f7f\u7528\u8f85\u52a9\u65b9\u6cd5\u96c6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/service"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/service"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Taro \u63d2\u4ef6\u5316\u5185\u6838")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/taro-loader"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/taro-loader"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u66b4\u9732\u7ed9 @tarojs/mini-runner \u548c @tarojs/webpack-runner \u4f7f\u7528\u7684 Webpack loader")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/runner-utils"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/runner-utils"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u66b4\u9732\u7ed9 @tarojs/mini-runner \u548c @tarojs/webpack-runner \u7684\u516c\u7528\u5de5\u5177\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/webpack-runner"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/webpack-runner"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Taro H5 \u7aef Webpack \u6253\u5305\u7f16\u8bd1\u5de5\u5177")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/mini-runner"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/mini-runner"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Taro \u5c0f\u7a0b\u5e8f \u7aef Webpack \u6253\u5305\u7f16\u8bd1\u5de5\u5177")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/components"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/components"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Taro \u6807\u51c6\u7ec4\u4ef6\u5e93\uff0cH5 \u7248")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/taroize"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/taroize"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Taro \u5c0f\u7a0b\u5e8f\u53cd\u5411\u7f16\u8bd1\u5668")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/@tarojs/with-weapp"}),Object(b.b)("inlineCode",{parentName:"a"},"@tarojs/with-weapp"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u53cd\u5411\u8f6c\u6362\u7684\u8fd0\u884c\u65f6\u9002\u914d\u5668")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/eslint-config-taro"}),Object(b.b)("inlineCode",{parentName:"a"},"eslint-config-taro"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Taro ESLint \u89c4\u5219")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.npmjs.com/package/eslint-plugin-taro"}),Object(b.b)("inlineCode",{parentName:"a"},"eslint-plugin-taro"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Taro ESLint \u63d2\u4ef6")))),Object(b.b)("h2",{id:"issue-\u62a5\u544a\u6307\u5357"},"Issue \u62a5\u544a\u6307\u5357"),Object(b.b)("p",null,"\u5982\u679c\u63d0\u4ea4\u7684\u662f Bug \u62a5\u544a\uff0c\u8bf7\u70b9\u51fb ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://nervjs.github.io/taro-issue-helper/"}),Object(b.b)("inlineCode",{parentName:"a"},"New issue"))," \u3002"),Object(b.b)("p",null,"\u5982\u679c\u4f60\u60f3\u4e3a Taro \u5b9e\u73b0\u4e00\u4e2a\u91cd\u8981\u529f\u80fd\uff0c\u9700\u8981\u5148\u64b0\u5199 RFC \u6587\u6863\uff0c\u6309\u7167 Taro \u7684",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs"})," RFC \u673a\u5236"),"\u8fdb\u884c\u64cd\u4f5c\uff0c\u5728\u7ecf\u8fc7\u793e\u533a\u8ba8\u8bba\u5b8c\u5584\u540e\u624d\u53ef\u4ee5\u8fdb\u884c\u4ee3\u7801\u7684\u63d0\u4ea4\u3002"),Object(b.b)("h2",{id:"\u5f00\u53d1\u914d\u7f6e"},"\u5f00\u53d1\u914d\u7f6e"),Object(b.b)("p",null,"\u4f60\u9700\u8981\u4fdd\u8bc1\u4f60\u7684 Node.js \u7248\u672c\u5927\u4e8e 8\uff0c\u628a\u4ed3\u5e93 Clone \u5230\u672c\u5730\u3002\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install # or yarn\n$ npm run bootstrap\n$ npm run build\n")),Object(b.b)("h2",{id:"\u63d0\u4ea4-commit"},"\u63d0\u4ea4 commit"),Object(b.b)("p",null,"\u6574\u4e2a Taro \u4ed3\u5e93\u9075\u4ece ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"}),"Angular Style Commit Message Conventions"),"\uff0c\u5728\u8f93\u5165 commit message \u7684\u65f6\u5019\u8bf7\u52a1\u5fc5\u9075\u4ece\u6b64\u89c4\u8303\u3002"),Object(b.b)("h2",{id:"\u4ee3\u7801\u98ce\u683c"},"\u4ee3\u7801\u98ce\u683c"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"JavaScript"),"\uff1aJavaScript \u98ce\u683c\u9075\u4ece ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/standard/standard"}),"JavaScript Standard Style"),"\u3002"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"TypeScript"),"\uff1aTypeScript \u98ce\u683c\u4e5f\u662f ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/standard/standard"}),"JavaScript Standard Style")," \u7684\u53d8\u79cd\uff0c\u8be6\u60c5\u8bf7\u770b\u76f8\u5173\u5305\u76ee\u5f55\u4e0b\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"tslint.json")," \u548c ",Object(b.b)("inlineCode",{parentName:"li"},"tsconfig.json"),"\u3002"),Object(b.b)("li",{parentName:"ul"},"\u6837\u5f0f\uff1a\u9075\u5faa\u76f8\u5173\u5305\u76ee\u5f55\u4e0b\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},".stylelintrc")," \u98ce\u683c\u3002")),Object(b.b)("h2",{id:"pull-request-\u6307\u5357"},"Pull Request \u6307\u5357"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u52a1\u5fc5\u4fdd\u8bc1 ",Object(b.b)("inlineCode",{parentName:"li"},"npm run build")," \u80fd\u591f\u7f16\u8bd1\u6210\u529f\uff1b"),Object(b.b)("li",{parentName:"ol"},"\u52a1\u5fc5\u4fdd\u8bc1\u63d0\u4ea4\u5230\u4ee3\u7801\u9075\u5faa\u76f8\u5173\u5305\u4e2d\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},".eslintrc"),", ",Object(b.b)("inlineCode",{parentName:"li"},".tslintrc"),", ",Object(b.b)("inlineCode",{parentName:"li"},".stylelintrc")," \u6240\u89c4\u5b9a\u7684\u89c4\u8303\uff1b"),Object(b.b)("li",{parentName:"ol"},"\u5f53\u76f8\u5173\u5305\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"package.json")," \u542b\u6709 ",Object(b.b)("inlineCode",{parentName:"li"},"npm test")," \u547d\u4ee4\u65f6\uff0c\u5fc5\u987b\u4fdd\u8bc1\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u90fd\u9700\u8981\u901a\u8fc7\uff1b"),Object(b.b)("li",{parentName:"ol"},"\u5f53\u76f8\u5173\u5305\u6709\u6d4b\u8bd5\u7528\u4f8b\u65f6\uff0c\u8bf7\u7ed9\u4f60\u63d0\u4ea4\u7684\u4ee3\u7801\u4e5f\u6dfb\u52a0\u76f8\u5e94\u7684\u6d4b\u8bd5\u7528\u4f8b\uff1b"),Object(b.b)("li",{parentName:"ol"},"\u63d0\u4ea4\u4ee3\u7801 commit \u65f6\uff0ccommit \u4fe1\u606f\u9700\u8981\u9075\u5faa ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"}),"Angular Style Commit Message Conventions"),"\u3002"),Object(b.b)("li",{parentName:"ol"},"\u5982\u679c\u63d0\u4ea4\u5230\u4ee3\u7801\u975e\u5e38\u591a\u6216\u529f\u80fd\u590d\u6742\uff0c\u53ef\u4ee5\u628a PR \u5206\u6210\u51e0\u4e2a commit \u4e00\u8d77\u63d0\u4ea4\u3002\u6211\u4eec\u5728\u5408\u5e76\u65f6\u4f1a\u4f1a\u6839\u636e\u60c5\u51b5 squash\u3002")),Object(b.b)("h2",{id:"credits"},"Credits"),Object(b.b)("p",null,"\u611f\u8c22\u4ee5\u4e0b\u6240\u6709\u7ed9 Taro \u8d21\u732e\u8fc7\u4ee3\u7801\u7684\u5f00\u53d1\u8005\uff1a"),Object(b.b)("a",{href:"https://github.com/NervJS/taro/graphs/contributors"},Object(b.b)("img",{src:"https://opencollective.com/taro/contributors.svg?width=890&button=false"})))}l.isMDXComponent=!0},2191:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},2192:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))},2193:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},j=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),j=l(a),m=r,s=j["".concat(c,".").concat(m)]||j[m]||O[m]||b;return a?n.a.createElement(s,o(o({ref:t},p),{},{components:a})):n.a.createElement(s,o({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);