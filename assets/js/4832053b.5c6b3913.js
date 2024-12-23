"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[34],{5333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"frontend/third-party-dependencies","title":"Third Party Dependencies","description":"This page was last reviewed on September 19th, 2024. It needs to be reviewed again on June 19th, 2025.","source":"@site/docs/frontend/third-party-dependencies.md","sourceDirName":"frontend","slug":"/frontend/third-party-dependencies","permalink":"/docs/frontend/third-party-dependencies","draft":false,"unlisted":false,"editUrl":"https://github.com/Amsterdam/development-standards/edit/main/docs/frontend/third-party-dependencies.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Testing","permalink":"/docs/frontend/testing"},"next":{"title":"Application Insights","permalink":"/docs/projects/monitoring"}}');var i=t(4848),s=t(8453);const o={},a="Third Party Dependencies",d={},c=[{value:"How can you secure front-end third-party integrations?",id:"how-can-you-secure-front-end-third-party-integrations",level:2},{value:"Recommended third-party packages",id:"recommended-third-party-packages",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"third-party-dependencies",children:"Third Party Dependencies"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This page was last reviewed on September 19th, 2024. It needs to be reviewed again on June 19th, 2025."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Guidelines for choosing a third party package can be found in the ",(0,i.jsx)(n.a,{href:"/docs/general/third-party-dependencies",children:"general third party dependencies documentation page"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"how-can-you-secure-front-end-third-party-integrations",children:"How can you secure front-end third-party integrations?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use modern browser features such as HTTPS, Content Security Policy (CSP), Subresource Integrity (SRI).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["use ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/HTTPS",children:"HTTPS (Hypertext Transfer Protocol Secure)"})," for all your web traffic, including the requests and responses from third-party services. HTTPS encrypts the data in transit, preventing eavesdropping, tampering, or spoofing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",children:"CSP (Content Security Policy)"}),", a browser security feature that allows you to specify what is allowed on your website, such as scripts, styles, images and fonts. CSP can help prevent cross-site scripting (XSS) attacks, which can inject malicious code into your web pages through third-party integrations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity",children:"Subresource Integrity (SRI)"}),", a browser security feature that enables browsers to verify that the resources they fetch (for example, from a CDN) are delivered without unexpected manipulation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Monitor and audit your integrations.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Monitoring means keeping track of the performance, availability and errors of your integrations, using tools like logs, alerts, dashboards and reports. For example, ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",children:"Azure Monitor"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Auditing means reviewing the security and compliance of your integrations, using tools like scanners, analyzers and testers. For example, ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide",children:"GitHub Dependabot"}),", ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v10/commands/npm-audit",children:"NPM audit"})," and ",(0,i.jsx)(n.a,{href:"https://snyk.io/",children:"Snyk"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Update and review your integrations (ideally annually).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Updating means applying the latest patches and fixes."}),"\n",(0,i.jsx)(n.li,{children:"Reviewing means evaluating the quality, reliability and necessity."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"recommended-third-party-packages",children:"Recommended third-party packages"}),"\n",(0,i.jsx)(n.p,{children:"Maintaining a list of third-party frontend packages is too complex, therefore, we have reduced our recommendations to project build tools previously used by Gemeente Amsterdam projects."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/vitejs/vite",children:"Vite"})," - Next Generation Frontend Tooling","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/vitejs/awesome-vite#templates",children:"Vite community templates"})," - Vite based project templates"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://esbuild.github.io/",children:"esbuild"})," - Next Generation Frontend Tooling"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You may also be interested in ",(0,i.jsx)(n.a,{href:"/docs/frontend/languages-and-frameworks",children:"Languages and Frameworks (frontend)"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);