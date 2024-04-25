"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[608],{6957:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var t=s(4848),n=s(8453);const a={},l="Accessibility",o={id:"frontend/accessibility",title:"Accessibility",description:"This page was last reviewed 6th March 2024. It needs to be reviewed again on the 6th December 2024.",source:"@site/docs/frontend/accessibility.mdx",sourceDirName:"frontend",slug:"/frontend/accessibility",permalink:"/ee-docs/docs/frontend/accessibility",draft:!1,unlisted:!1,editUrl:"https://github.com/Amsterdam/development-standards/edit/main/docs/frontend/accessibility.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Third Party Dependencies",permalink:"/ee-docs/docs/frontend/third-party-dependencies"},next:{title:"Testing",permalink:"/ee-docs/docs/frontend/testing"}},c={},r=[{value:"What is the standard for accessibility?",id:"what-is-the-standard-for-accessibility",level:2},{value:"When and for whom is this standard applicable?",id:"when-and-for-whom-is-this-standard-applicable",level:2},{value:"How to test for accessibility",id:"how-to-test-for-accessibility",level:2},{value:"in general?",id:"in-general",level:3},{value:"on a web application?",id:"on-a-web-application",level:3},{value:"on a mobile app?",id:"on-a-mobile-app",level:3},{value:"on a non-web application?",id:"on-a-non-web-application",level:3},{value:"How to comply with the WCAG?",id:"how-to-comply-with-the-wcag",level:2},{value:"What to avoid?",id:"what-to-avoid",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Further reading",id:"further-reading",level:2},{value:"Acknowledgments",id:"acknowledgments",level:2}];function d(e){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"This page was last reviewed 6th March 2024. It needs to be reviewed again on the 6th December 2024."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"what-is-the-standard-for-accessibility",children:"What is the standard for accessibility?"}),"\n",(0,t.jsx)(i.p,{children:"In accordance with the Digital Government Act, the municipality of Amsterdam is required to build all its websites and applications in compliance with the Web Content Accessibility Guidelines (WCAG) at levels A and AA."}),"\n",(0,t.jsx)(i.h2,{id:"when-and-for-whom-is-this-standard-applicable",children:"When and for whom is this standard applicable?"}),"\n",(0,t.jsxs)(i.p,{children:["This standard applies to front-end developers.",(0,t.jsx)(i.br,{}),"\n","The law is applicable to all government websites and applications, including intranets, extranets, and cloud applications. Additionally, it includes mobile applications, encompassing native, web, and hybrid apps for mobile devices."]}),"\n",(0,t.jsx)(i.h2,{id:"how-to-test-for-accessibility",children:"How to test for accessibility"}),"\n",(0,t.jsx)(i.h3,{id:"in-general",children:"in general?"}),"\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Manually test your application to ensure proper rendering:","\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","adjusting the text size to the maximum"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","zooming in at 200%"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","verify that all links feature descriptive link text"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Evaluate the usability of your application by","\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","testing a workflow on your application without the use of a keyboard. Employ screen readers, such as ",(0,t.jsx)(i.a,{href:"https://accessibility.psu.edu/screenreaders/jawscommands/",children:"JAWS"})," or ",(0,t.jsx)(i.a,{href:"https://support.apple.com/guide/voiceover-guide/welcome/web",children:"VoiceOver"}),".","\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","confirm the page's order is logical"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","verify all content is accessible to the screen reader"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","testing a workflow on your application without the use of a mouse  Employ keyboard shortcuts","\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","check if the focus ring remains consistently visible"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Ensure all videos are captioned"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Ensure all audio is described as needed"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Ensure all audio-only files are transcribed"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"on-a-web-application",children:"on a web application?"}),"\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Validate your webpage with ",(0,t.jsx)(i.a,{href:"https://wave.webaim.org/standalone",children:"WebAIM\u2019s WAVE Accessibility Evaluation Tool"})," WebAIM's WAVE Accessibility Evaluation Tool offers the option to disable stylesheets, allowing you to assess the content ordering as presented to screen readers."]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Validate your webpage with ",(0,t.jsx)(i.a,{href:"https://validator.w3.org/",children:"Markup Validation Service"})]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Validate your webpage with ",(0,t.jsx)(i.a,{href:"https://developer.chrome.com/docs/lighthouse/overview",children:"Lighthouse from Google"})]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Manually test the rendering of your application by enabling high contrast mode on your website (you can use a plugin like High Contrast in Chrome)"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Review your page using a grayscale filter or a color-deficient vision simulator, such as ",(0,t.jsx)(i.a,{href:"https://www.color-blindness.com/coblis-color-blindness-simulator/",children:"Coblis"}),", to confirm that the content is not solely reliant on color"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Review the print preview of your webpage (CTL + P on Windows)"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Translate your page into another language, including a right-to-left language like Arabic","\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsx)(i.li,{children:"Confirm the following:"}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","ensure accurate rendering of all elements"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","verify precise translation of all content (employ a screen reader to catch potential oversights, especially in aria-labels)"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","check for proper content orientation when translated to or from a right-to-left language\n-[ ] Apply the provided CSS snippet and confirm that all elements are still rendered correctly, adhering to WCAG 1.4.12. In Chrome, you can utilize the Stylus plugin for easy implementation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-css",children:"*{\n  line-height: 1.5 !important;\n  letter-spacing: 0.12em !important;\n  word-spacing: 0.16em !important;\n} p\n  {\n  margin-bottom: 2em !important;\n }\n"})}),"\n",(0,t.jsx)(i.h3,{id:"on-a-mobile-app",children:"on a mobile app?"}),"\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","For Android apps, employ the Accessibility Scanner app, and for iOS apps, activate the Xcode Accessibility Inspector within Xcode.","\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","check for unlabeled elements"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","check for clipped text"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","check the color contrast levels"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","check the text size"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Follow the tips and tricks provided on ",(0,t.jsx)(i.a,{href:"https://mobilea11y.com/",children:"Mobile A11y"}),"."]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Utilize a screen reader to assess the element order in your app. For Android, you can use TalkBack, and for iOS, employ VoiceOver."]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Utilize ",(0,t.jsx)(i.a,{href:"http://appium.io/docs/en/latest/",children:"Appium"})," to develop a test suite for a mobile app, incorporating accessibility testing."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"on-a-non-web-application",children:"on a non-web application?"}),"\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",disabled:!0})," ","Refer to the guidance provided in ",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/wcag2ict-22/#introduction",children:"Applying WCAG 2.2 to Non-Web Information and Communications Technologies (WCAG2ICT)"})," for additional tips and tricks."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"how-to-comply-with-the-wcag",children:"How to comply with the WCAG?"}),"\n",(0,t.jsx)(i.p,{children:"The WCAG can be broken down into four key principles. If the website or application aligns with these principles, it meets the WCAG requirements. The four principles are:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Perceivable:"})," Ensure that everything on the website or app is easily noticeable by everyone."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Operable:"})," Make sure that everything on the website or app is accessible to everyone, including those who don't use a mouse or keyboard."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Understandable:"})," Ensure that everything on the website or app, including error handling, is comprehensible for both software and users."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Robust:"})," Guarantee that the website or app can be utilized across various devices and assistive technologies."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["W3.org has offered ",(0,t.jsx)(i.a,{href:"https://www.w3.org/WAI/WCAG22/quickref/?versions=2.0",children:"a concise guide"})," detailing actions you can take to align with the four principles. Below are brief suggestions for each principle:"]}),"\n",(0,t.jsx)(i.h2,{id:"what-to-avoid",children:"What to avoid?"}),"\n",(0,t.jsx)(i.p,{children:"Incorporate accessibility into the core design of your application rather than treating it as an add-on feature."}),"\n",(0,t.jsx)(i.h2,{id:"considerations",children:"Considerations"}),"\n",(0,t.jsx)(i.p,{children:"Testing accessibility thoroughly can be challenging. Consider collaborating with users, including those with disabilities, and invite them to test and provide feedback."}),"\n",(0,t.jsx)(i.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://accessibility.psu.edu/testing/protocol/",children:"Testing for Accessibility"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.digitoegankelijk.nl/aan-de-slag/tips",children:"Praktische toegankelijkheidstips"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"acknowledgments",children:"Acknowledgments"}),"\n",(0,t.jsxs)(i.p,{children:["Many thanks to ",(0,t.jsx)(i.a,{href:"https://github.com/alimpens",children:"Aram Limpens"})," and ",(0,t.jsx)(i.a,{href:"https://github.com/SireeKoolenWijkstra",children:"Sir\xe9e Koolen-Wijkstra"})]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>o});var t=s(6540);const n={},a=t.createContext(n);function l(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);