(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),o=(r(0),r(235)),i={id:"prep",title:"React Preparation",sidebar_label:"Preparation"},c={unversionedId:"react/prep",id:"react/prep",isDocsHomePage:!1,title:"React Preparation",description:"Before you start React you must make sure that you have some additional software installed.",source:"@site/docs/react/prep.md",slug:"/react/prep",permalink:"/react/prep",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/react/prep.md",version:"current",sidebar_label:"Preparation",sidebar:"React",previous:{title:"Overview",permalink:"/react/index"},next:{title:"React Cheatsheet",permalink:"/guides/react-cheatsheet"}},l=[{value:"1) Node &amp; NPM (15 minutes)",id:"1-node--npm-15-minutes",children:[]},{value:"2) Create React App (1 hour)",id:"2-create-react-app-1-hour",children:[]},{value:"3) What is React? (30 minutes)",id:"3-what-is-react-30-minutes",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before you start React you must make sure that you have some additional software installed."),Object(o.b)("h2",{id:"1-node--npm-15-minutes"},"1) Node & NPM (15 minutes)"),Object(o.b)("p",null,"You should already have these tools installed."),Object(o.b)("p",null,"To check if Node is installed open ",Object(o.b)("inlineCode",{parentName:"p"},"Command Prompt")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Terminal")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Git Bash")," and type."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"node -v\n")),Object(o.b)("p",null,"Running this command should print out a version number. If this does not work, you should ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"install Node"),"."),Object(o.b)("h2",{id:"2-create-react-app-1-hour"},"2) Create React App (1 hour)"),Object(o.b)("p",null,"Please follow this setup guide to get a new piece of software installed."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../guides/creating-a-react-app"}),"Installing Create React App")),Object(o.b)("p",null,"It is ",Object(o.b)("strong",{parentName:"p"},"critical")," that this is installed correctly before you arrive at class."),Object(o.b)("p",null,"If you have problems installing Create React App then you ",Object(o.b)("strong",{parentName:"p"},"must")," post on your Slack channel to get help."),Object(o.b)("h2",{id:"3-what-is-react-30-minutes"},"3) What is React? (30 minutes)"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Watch ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=0KlRgFEEz0g"}),"this video")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can stop watching at 11:06 (the rest is unnecessary)"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Answer these questions about the video"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'A. What does he say the "best description of React is"?'),Object(o.b)("li",{parentName:"ul"},'B. What does he say "could be a component"?'),Object(o.b)("li",{parentName:"ul"},"C. What does he say is the benefit of using JSX?"),Object(o.b)("li",{parentName:"ul"},"D. What makes React fast?"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once you have answered the questions, submit your answers on Slack. This will help you teaches see what level you're at before you start the module."))))}s.isMDXComponent=!0},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?n.a.createElement(m,c(c({ref:t},p),{},{components:r})):n.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);