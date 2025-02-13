"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["802"],{1613:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"general/secure-coding","title":"Secure coding","description":"This page was last reviewed January 16th 2025. It needs to be reviewed again on October 16th 2025.","source":"@site/docs/general/secure-coding.md","sourceDirName":"general","slug":"/general/secure-coding","permalink":"/docs/general/secure-coding","draft":false,"unlisted":false,"editUrl":"https://github.com/Amsterdam/development-standards/edit/main/docs/general/secure-coding.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Readme files","permalink":"/docs/general/readme-default"},"next":{"title":"Store your project in GitHub","permalink":"/docs/general/storing-source-code"}}'),r=s("5893"),t=s("65");let a={},o="Secure coding",d={},l=[{value:"What is the standard for secure coding?",id:"what-is-the-standard-for-secure-coding",level:2},{value:"When and for whom is this standard applicable?",id:"when-and-for-whom-is-this-standard-applicable",level:2},{value:"What is required?",id:"what-is-required",level:2},{value:"What to avoid?",id:"what-to-avoid",level:2},{value:"Further reading",id:"further-reading",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",br:"br",h1:"h1",h2:"h2",header:"header",input:"input",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"secure-coding",children:"Secure coding"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This page was last reviewed January 16th 2025. It needs to be reviewed again on October 16th 2025."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"what-is-the-standard-for-secure-coding",children:"What is the standard for secure coding?"}),"\n",(0,r.jsx)(n.p,{children:"Code must be developed in accordance with the security-by-design principle."}),"\n",(0,r.jsx)(n.h2,{id:"when-and-for-whom-is-this-standard-applicable",children:"When and for whom is this standard applicable?"}),"\n",(0,r.jsx)(n.p,{children:"This standard applies to anyone involved in working with source code, including but not limited to front-end developers, back-end developers, cloud engineers, and other related roles."}),"\n",(0,r.jsx)(n.p,{children:"This standard must be applied to all repositories of the city of Amsterdam"}),"\n",(0,r.jsx)(n.h2,{id:"what-is-required",children:"What is required?"}),"\n",(0,r.jsxs)(n.p,{children:["When developing an application, the following ",(0,r.jsx)(n.strong,{children:"10 rules of security by design"})," should be applied:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Proactive Security Integration"}),(0,r.jsx)(n.br,{}),"\n","Security measures should be incorporated during the requirements, design, and architecture phases, rather than added as patches later."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Principle of Least Privilege"}),(0,r.jsx)(n.br,{}),"\n","Limit user and process access to only what is necessary for their roles or tasks."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Principle of Defense in Depth"}),(0,r.jsx)(n.br,{}),"\n","Implement multiple layers of security controls to protect against a wide range of threats. If one layer fails, others will still provide protection."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Principle of Fail-Safe"}),(0,r.jsx)(n.br,{}),"\n","Applications should default to a secure state in the event of failure, ensuring sensitive data or functionality remains protected."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Minimize the Attack Surface"}),(0,r.jsx)(n.br,{}),"\n","Use only the essential tools, software, data, and hardware needed for a service to stay secure while fulfilling its purpose thereby reducing the attack surface of the service."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Do Not Trust Services"}),(0,r.jsx)(n.br,{}),"\n","Always validate and sanitize all data provided by external or internal services including data provided by users."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Principle of Open Design"}),(0,r.jsx)(n.br,{}),"\n","The security of an application should not rely on the secrecy of its design or source code."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Security by Default"}),(0,r.jsx)(n.br,{}),"\n","Default configuration settings should prioritize security and only allow users to lower these settings through deliberate action."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Principle of Separation of Duties"}),(0,r.jsx)(n.br,{}),"\n","Tasks should require multiple conditions or participants to prevent any single entity from having complete control over sensitive processes."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Keep Security Simple"}),(0,r.jsx)(n.br,{}),"\n","Simplify security measures for end-users to avoid workarounds, and for developers to minimize code complexity."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This means for the developers of Amsterdam it is required to:"}),"\n",(0,r.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," ","use safe coding practises such as ",(0,r.jsx)(n.a,{href:"/docs/general/storing-source-code",children:"branch protection rules"})]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," ","publish your ",(0,r.jsx)(n.a,{href:"/docs/general/storing-source-code",children:"source code"})," unless it pertains to infra-as-code"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," ","set up your workflow in Git according to ",(0,r.jsx)(n.a,{href:"/docs/general/using-git",children:"the rules"})]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,r.jsx)(n.a,{href:"/docs/general/testing",children:"test your code"})," before being deployed"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," ","determine which third party dependencies to use according to ",(0,r.jsx)(n.a,{href:"/docs/general/third-party-dependencies",children:"the guidelines"})]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," ","authenticate your users as per ",(0,r.jsx)(n.a,{href:"https://github.com/Amsterdam/development-standards/tree/main/internal/sso",children:"the city's standard"})]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," ","set up monitoring and logging as per ",(0,r.jsx)(n.a,{href:"https://github.com/Amsterdam/development-standards/tree/main/internal/monitoring",children:"the city's standard"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"what-to-avoid",children:"What to avoid?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SQL injection or cross-site scripting vulnerabilities caused by neglecting input validation and sanitization."}),"\n",(0,r.jsx)(n.li,{children:"Exposing your application to known threats by neglecting regular updates and patches."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://owasp.org/www-project-developer-guide/draft/foundations/security_principles/",children:"https://owasp.org/www-project-developer-guide/draft/foundations/security_principles/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.security.gov.uk/policy-and-guidance/secure-by-design/principles/",children:"https://www.security.gov.uk/policy-and-guidance/secure-by-design/principles/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,r.jsxs)(n.p,{children:["Many thanks to ",(0,r.jsx)(n.a,{href:"https://github.com/SireeKoolenWijkstra",children:"Sir\xe9e Koolen-Wijkstra"})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},65:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var i=s(7294);let r={},t=i.createContext(r);function a(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);