"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[827],{2248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"frontend/testing","title":"Testing","description":"Testing is a crucial part of the developing high-quality software products. It should give you more confidence in shipping products to the world.","source":"@site/docs/frontend/testing.md","sourceDirName":"frontend","slug":"/frontend/testing","permalink":"/docs/frontend/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/Amsterdam/development-standards/edit/main/docs/frontend/testing.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Shared Components","permalink":"/docs/frontend/shared-components"},"next":{"title":"Third Party Dependencies","permalink":"/docs/frontend/third-party-dependencies"}}');var s=n(4848),r=n(8453);const o={},a="Testing",l={},c=[{value:"Guidelines for testing frontend applications",id:"guidelines-for-testing-frontend-applications",level:2},{value:"Unit &amp; Integration Tests",id:"unit--integration-tests",level:3},{value:"Define a Test Plan",id:"define-a-test-plan",level:3},{value:"Best practices",id:"best-practices",level:2},{value:"Framework / Libraries / Tooling",id:"framework--libraries--tooling",level:2},{value:"References",id:"references",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"testing",children:"Testing"})}),"\n",(0,s.jsx)(t.p,{children:"Testing is a crucial part of the developing high-quality software products. It should give you more confidence in shipping products to the world.\nTests do not only ensure quality and reliability but also describes how (parts of) the software works.\nThere are different kinds of tests with each having its own purpose and benefits. In the frontend the following are very common."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Unit testing"}),":\nUnit tests focus on a single part of a whole application in total isolation, usually, a function or class. Ideally, the tested component is free of side effects so it is as easy to isolate and test as possible."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Integration testing:"}),"\nWhile unit test are run in isolation and are free of side effects, integration tests aim to test interaction between components/modules and where side effects might occur. It is does not test the implementation details, but the context of a functionality."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"E2E-testing:"}),"\nE2E-testing goes a step further than integration testing. It test the whole flow from start to end, in example a user journey. For e2e tests the team is responsible for describing scenerios and cases. E2E are time consuming, require high maintenance and have a more complex setup. Running e2e test is usually a team effort. Although e2e tests are quite expensive, it ensures a higher confidence in shipping software. It tests real world scenerios on a production like environment."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Snapshot testing:"}),"\nSnapshot tests ensure that the UI did not unexpectedly change compared to the previous state of the rendered output. A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot."]}),"\n",(0,s.jsx)(t.h2,{id:"guidelines-for-testing-frontend-applications",children:"Guidelines for testing frontend applications"}),"\n",(0,s.jsx)(t.p,{children:'These guidelines will help to integrate testing in your development process. They also provide a "framework" to plan, execute and manage the testing process.'}),"\n",(0,s.jsx)(t.h3,{id:"unit--integration-tests",children:"Unit & Integration Tests"}),"\n",(0,s.jsx)(t.p,{children:"Every production ready frontend project needs to have unit and integration tests included. Developers are responsible for writing and maintaining these tests. E2E are optional since not all expertise or the required resources are at hand. We strongly recommend Jest as a testing framework. React Testing Library is an useful utility library for testing React applications."}),"\n",(0,s.jsx)(t.h3,{id:"define-a-test-plan",children:"Define a Test Plan"}),"\n",(0,s.jsx)(t.p,{children:"It is good to have a predefined test plan. This helps us to write consistent and high-quality test suits.\nA test plan may outline:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The scope of the tests."}),"\n",(0,s.jsx)(t.li,{children:"Whether the focus is on unit or intergration test."}),"\n",(0,s.jsx)(t.li,{children:"Determine what to mock. I.e. mock away http responses."}),"\n",(0,s.jsx)(t.li,{children:"How to structure test files, mocks and stubs."}),"\n",(0,s.jsx)(t.li,{children:"Determine which code coverage is leading."}),"\n",(0,s.jsx)(t.li,{children:"Determine baseline for code coverage."}),"\n",(0,s.jsx)(t.li,{children:"How to integrate in the deployment pipeline."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,s.jsx)(t.p,{children:"Here are some things to keep it mind when writing tests. For code snippets see examples in this Github repo."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Components test re-rendering logic not business logic."}),"\n",(0,s.jsx)(t.li,{children:"Write test to simulate user interactions."}),"\n",(0,s.jsx)(t.li,{children:"Separate helper/util functions from the component context. Easier to test."}),"\n",(0,s.jsx)(t.li,{children:"Don't test implementation details."}),"\n",(0,s.jsx)(t.li,{children:"Don't test 3rd party library api."}),"\n",(0,s.jsxs)(t.li,{children:["Make use of ",(0,s.jsx)(t.code,{children:"data-testid"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"framework--libraries--tooling",children:"Framework / Libraries / Tooling"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://jestjs.io/",children:"Jest"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://testing-library.com/",children:"React Testing Library"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest",children:"VS Code Jest extension"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner",children:"VS Code Jest Runner"})}),"\n",(0,s.jsxs)(t.li,{children:["For mocking API: ",(0,s.jsx)(t.a,{href:"https://miragejs.com/",children:"Mirage JS"})]}),"\n",(0,s.jsxs)(t.li,{children:["For mocking API: ",(0,s.jsx)(t.a,{href:"https://mswjs.io/",children:"Mock Service Worker - MSW"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://circleci.com/blog/unit-testing-vs-integration-testing/",children:"https://circleci.com/blog/unit-testing-vs-integration-testing/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://circleci.com/blog/snapshot-testing-with-jest/",children:"https://circleci.com/blog/snapshot-testing-with-jest/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.geeksforgeeks.org/difference-between-unit-testing-and-integration-testing/",children:"https://www.geeksforgeeks.org/difference-between-unit-testing-and-integration-testing/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://testing-library.com/docs/guiding-principles/",children:"https://testing-library.com/docs/guiding-principles/"})}),"\n",(0,s.jsxs)(t.li,{children:["Don't test ",(0,s.jsx)(t.a,{href:"https://kentcdodds.com/blog/testing-implementation-details",children:"implementation details"})]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://kentcdodds.com/blog/write-tests",children:"What to test"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.benmvp.com/blog/react-testing-library-best-practices/",children:"https://www.benmvp.com/blog/react-testing-library-best-practices/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/patternfly/patternfly-react/wiki/React-Testing-Library-Basics,-Best-Practices,-and-Guidelines",children:"https://github.com/patternfly/patternfly-react/wiki/React-Testing-Library-Basics,-Best-Practices,-and-Guidelines"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://michalzalecki.com/fixtures-the-way-to-manage-sample-and-test-data/",children:"Clean and flexible way to write fixtures"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);