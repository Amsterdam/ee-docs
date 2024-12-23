"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[709],{3311:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"general/third-party-dependencies","title":"Third Party Dependencies","description":"This page was last reviewed on September 19th, 2024. It needs to be reviewed again on June 19th, 2025.","source":"@site/docs/general/third-party-dependencies.md","sourceDirName":"general","slug":"/general/third-party-dependencies","permalink":"/docs/general/third-party-dependencies","draft":false,"unlisted":false,"editUrl":"https://github.com/Amsterdam/development-standards/edit/main/docs/general/third-party-dependencies.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Testing","permalink":"/docs/general/testing"},"next":{"title":"Using Git","permalink":"/docs/general/using-git"}}');var r=s(4848),t=s(8453);const a={},o="Third Party Dependencies",l={},c=[{value:"Guidelines for choosing a third party package",id:"guidelines-for-choosing-a-third-party-package",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"third-party-dependencies",children:"Third Party Dependencies"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This page was last reviewed on September 19th, 2024. It needs to be reviewed again on June 19th, 2025."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Third party dependencies can be introduced via:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["using a dependency management tool (for example, ",(0,r.jsx)(n.a,{href:"https://getcomposer.org/",children:"Composer for PHP"}),", ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/",children:"NPM for JavaScript"})," and ",(0,r.jsx)(n.a,{href:"https://python-poetry.org/",children:"Poetry for Python"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"copying the code from a library/package"}),"\n",(0,r.jsx)(n.li,{children:"forked repositories or internal repositories for third party libraries/packages"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"It is common to use third-party libraries/packages, however, choosing the right library/package can be a difficult task. To help, we have established guidelines for choosing a package."}),"\n",(0,r.jsx)(n.h2,{id:"guidelines-for-choosing-a-third-party-package",children:"Guidelines for choosing a third party package"}),"\n",(0,r.jsx)(n.p,{children:"When selecting a package that has not been previously used in a Gemeente Amsterdam project, we ask the following questions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Documentation","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Is there documentation?"}),"\n",(0,r.jsx)(n.li,{children:"Are there tutorials or guides?"}),"\n",(0,r.jsx)(n.li,{children:"How steep is the learning curve?"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Licensing considerations","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Does the license fit with your project's requirements?"}),"\n",(0,r.jsxs)(n.li,{children:["Are there any usage restrictions?","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.em,{children:["Generally packages with MIT, Apache 2.0, BSD and EUPL are safe to use for commercial purpose. If you choose a package with a license that is not one of those, please read the license carefully. ",(0,r.jsx)(n.a,{href:"https://choosealicense.com/licenses/",children:"This page"})," is helpful in providing a simple overview."]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Performance","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Does it have an acceptable bundle size?","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This is more relevant for frontend projects."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Does it integrate well with other libraries?"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Security","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Does the package have any open security vulnerabilities?"}),"\n",(0,r.jsx)(n.li,{children:"How quickly are security issues patched?"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Stability","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"How old is the project?"}),"\n",(0,r.jsx)(n.li,{children:"Is there a roadmap?"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Support","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Who is maintaining it?","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A single person / An open-source community / An organisation"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Is the project sponsored?"}),"\n",(0,r.jsxs)(n.li,{children:["Is it actively maintained?","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"How many open and closed issues are there in the last several months?"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["How many downloads are there per month/year?","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://npmtrends.com/",children:"npm trends"})," provides useful metrics for NPM package download numbers and similar packages."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://packagist.org/",children:"Packagist"})," provides useful metrics for PHP package download numbers"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.pepy.tech/",children:"PePy"})," provides useful metrics for Python package download numbers"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If the answer to the majority of these questions is negative then the third party code should not be used. If you have mixed answers to these questions and are unsure, post a question in your relevant gilde channel to discuss and hear other possible solutions."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(6540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);