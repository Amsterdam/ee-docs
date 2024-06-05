"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[206],{852:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=t(4848),n=t(8453);const a={},l="Using Git",c={id:"general/using-git",title:"Using Git",description:"This page was last reviewed May 14th, 2024. It needs to be reviewed again on February 14th, 2025.",source:"@site/docs/general/using-git.md",sourceDirName:"general",slug:"/general/using-git",permalink:"/nl/docs/general/using-git",draft:!1,unlisted:!1,editUrl:"https://github.com/Amsterdam/development-standards/edit/main/docs/general/using-git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Store your project in GitHub",permalink:"/nl/docs/general/storing-source-code"},next:{title:"Accessibility",permalink:"/nl/docs/frontend/accessibility"}},r={},o=[{value:"What is the standard for using Git?",id:"what-is-the-standard-for-using-git",level:2},{value:"When and for whom is this standard applicable?",id:"when-and-for-whom-is-this-standard-applicable",level:2},{value:"What is required?",id:"what-is-required",level:2},{value:"work flow",id:"work-flow",level:3},{value:"branches",id:"branches",level:3},{value:"commits",id:"commits",level:3},{value:"What is recommended?",id:"what-is-recommended",level:2},{value:"What to avoid?",id:"what-to-avoid",level:2},{value:"Further reading",id:"further-reading",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"using-git",children:"Using Git"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"This page was last reviewed May 14th, 2024. It needs to be reviewed again on February 14th, 2025."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"what-is-the-standard-for-using-git",children:"What is the standard for using Git?"}),"\n",(0,i.jsx)(s.p,{children:"The city of Amsterdam uses Git to push its code to GitHub.\r\nThe city of Amsterdam maintains minimal requirements for the work flow, branches and commits."}),"\n",(0,i.jsx)(s.h2,{id:"when-and-for-whom-is-this-standard-applicable",children:"When and for whom is this standard applicable?"}),"\n",(0,i.jsxs)(s.p,{children:["This standard applies to all developers.",(0,i.jsx)("br",{}),"\r\nThis standard must be applied to all new projects of the city of Amsterdam (new since June 2024)."]}),"\n",(0,i.jsx)(s.h2,{id:"what-is-required",children:"What is required?"}),"\n",(0,i.jsx)(s.h3,{id:"work-flow",children:"work flow"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Utilise the branch 'main' as a stable production-ready version of your project. Utilise the branch 'develop' as the integration branch for features and bug fixes."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Set up and document your team work flow. We recommend using ",(0,i.jsx)(s.a,{href:"https://www.gitkraken.com/learn/git/git-flow",children:"Git Flow"})," but other work flow are available. See ",(0,i.jsx)(s.a,{href:"#what-is-recommended",children:"the recommendations below"})," for options. As part of your work flow you must do up the following:","\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Set ",(0,i.jsx)(s.code,{children:"develop"})," as the default branch and set the branch protection rules as follows:","\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",'Enable "Require a pull request before merging"']}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",'Enable "Require approvals"']}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",'Set "Required number of approvals before merging" to at least 1.']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," "," Create a new branch every time you're implementing a feature, bug fix or other task."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Test before you push."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"branches",children:"branches"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Branch names must must","\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","prefix with either","\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","feature"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","chore"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","bugfix"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","hotfix"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","docs"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","contain a ticket number that references the PBI (product backlog item) if applicable"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","contain a short name to indicate the branch purpose"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"commits",children:"commits"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Commit messages must quickly convey what a change is supposed to do and why it was necessary."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Never commit generated files, dependencies or local configuration files unless there is a good reason."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","A commit message consists of two parts: a title and the description.","\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Title: describes what changed."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Description: describes why this change is needed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"what-is-recommended",children:"What is recommended?"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Recommended alternatives to Git Flow include the ",(0,i.jsx)(s.a,{href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html",children:"GitLab workflow"})," and ",(0,i.jsx)(s.a,{href:"https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development",children:"Trunk based development"}),".\r\nTrunk-based development should only be used when Continuous Integration is in place and code can be deployed at any time it is merged."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Push often to ensure that your work is visible and not lost."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create a draft pull request to discuss the progress on the current task."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create the same branch protection rules as for the 'main' and 'develop' branch for each long-lived environment branch:","\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",'Enable "Require a pull request before merging"']}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",'Enable "Require approvals"']}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",'Set "Required number of approvals before merging" to at least 1.']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Commits should be atomic, meaning that it contains only one change. It could be multiple files, but it's a single change."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Commit early and often."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"what-to-avoid",children:"What to avoid?"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Never commit sensitive information such as passwords, personal data or API keys."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,i.jsxs)(s.p,{children:["For more information on commits,\r\nplease refer to this ",(0,i.jsx)(s.a,{href:"https://initialcommit.com/blog/git-commit-messages-best-practices",children:"blog post"})]}),"\n",(0,i.jsx)(s.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,i.jsxs)(s.p,{children:["Many thanks to ",(0,i.jsx)(s.a,{href:"https://github.com/hcvdhaar",children:"Hee Chan van der Haar"})," and ",(0,i.jsx)(s.a,{href:"https://github.com/SireeKoolenWijkstra",children:"Sir\xe9e Koolen-Wijkstra"})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>c});var i=t(6540);const n={},a=i.createContext(n);function l(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);