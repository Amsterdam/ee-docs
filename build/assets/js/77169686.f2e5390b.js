"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["919"],{801:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"general/storing-source-code","title":"Store your project in GitHub","description":"This page was last reviewed August 6th 2024. It needs to be reviewed again on May 6th, 2025.","source":"@site/docs/general/storing-source-code.md","sourceDirName":"general","slug":"/general/storing-source-code","permalink":"/docs/general/storing-source-code","draft":false,"unlisted":false,"editUrl":"https://github.com/Amsterdam/development-standards/edit/main/docs/general/storing-source-code.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Readme files","permalink":"/docs/general/readme-default"},"next":{"title":"Testing","permalink":"/docs/general/testing"}}'),i=n("5893"),s=n("65");let o={},a="Store your project in GitHub",l={},d=[{value:"How to store projects on Github?",id:"how-to-store-projects-on-github",level:2},{value:"When and for whom is this standard?",id:"when-and-for-whom-is-this-standard",level:2},{value:"Public or private",id:"status",level:2},{value:"Recommendations",id:"recommendations",level:2},{value:"What pitfalls to avoid?",id:"what-pitfalls-to-avoid",level:2},{value:"Further reading",id:"further-reading",level:2},{value:"Acknowledgments",id:"acknowledgments",level:2},{value:"Further reading",id:"further-reading-1",level:2}];function h(e){let t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"store-your-project-in-github",children:"Store your project in GitHub"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"This page was last reviewed August 6th 2024. It needs to be reviewed again on May 6th, 2025."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-store-projects-on-github",children:"How to store projects on Github?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'All projects must have their repository on GitHub in the account of the city of Amsterdam and should be public,\r\nsee the section "Public or private" for allowed exemptions.'}),"\n",(0,i.jsxs)(t.li,{children:["You must use Git to store your code on GitHub. Include a CODEOWNER file with your team name in the source code. See ",(0,i.jsx)(t.a,{href:"https://github.com/Amsterdam/ee-docs/blob/develop/CODEOWNERS",children:"the EE-docs repository"})," for an example."]}),"\n",(0,i.jsxs)(t.li,{children:["Secure your repository by enabling these branch protection rules:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Require a pull request before merging","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Require approvals","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The required number of approvals before merging is at least 1"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"when-and-for-whom-is-this-standard",children:"When and for whom is this standard?"}),"\n",(0,i.jsxs)(t.p,{children:["This standard applies to all developers.",(0,i.jsx)("br",{}),"\r\nThis standard must be applied to all new repositories of the city of Amsterdam (new since May 2024)."]}),"\n",(0,i.jsx)(t.h2,{id:"status",children:"Public or private"}),"\n",(0,i.jsx)(t.p,{children:"Infra-as-code logic must always be stored in a private repository.\r\nThis improves transparency and reusability,\r\nbut protects us from exposing sensitive information that could benefit potential bad actors."}),"\n",(0,i.jsx)(t.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Send an e-mail to the Datapunt team to get access to the Amsterdam organisation in GitHub. Your e-mail must include the following:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"your GitHub username"}),"\n",(0,i.jsx)(t.li,{children:"your first and last name"}),"\n",(0,i.jsx)(t.li,{children:"the team responsible for the project"}),"\n",(0,i.jsx)(t.li,{children:"and your Product Owner needs to be included in the CC."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Don't store data in your repository unless it's testing data. Data used with tests must always be anonymized"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"what-pitfalls-to-avoid",children:"What pitfalls to avoid?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Don't store the following files on GitHub whether the repository is public or not:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Private keys, secrets, usernames or other credentials. Make use of the templates on [gitignore template] (",(0,i.jsx)(t.a,{href:"https://github.com/github/gitignore",children:"https://github.com/github/gitignore"}),") repository to exclude files."]}),"\n",(0,i.jsx)(t.li,{children:"Personally identifiable data. Report a data breach immediately if done so. Just removing the data will not erase it completely. The data will still be available through the history. Assume the data is publicly known as soon as you've published it. Bots are scanning repositories continuously looking for secrets."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Don't disable the branch protection policies when they're inconvenient. Ask other developers outside your team to approve pull requests if no team members are available."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started",children:"The GitHub documentation"})," is a good source of information."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",children:"GitHub"})," also has information about CODEOWNER files."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"acknowledgments",children:"Acknowledgments"}),"\n",(0,i.jsxs)(t.p,{children:["Many thanks to ",(0,i.jsx)(t.a,{href:"https://github.com/hcvdhaar",children:"Hee Chan van der Haar"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/bennyvdhoogen",children:"Benny van de Hoogen"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/SireeKoolenWijkstra",children:"Sir\xe9e Koolen-Wijkstra"})]}),"\n",(0,i.jsx)(t.h2,{id:"further-reading-1",children:"Further reading"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Want to know more about the Fork and Pull model? We recommend you read ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models#fork-and-pull-model",children:"the GitHub Docs"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},65:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(7294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);