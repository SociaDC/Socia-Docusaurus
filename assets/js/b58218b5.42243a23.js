"use strict";(self.webpackChunkproject_documentation=self.webpackChunkproject_documentation||[]).push([[730],{9831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(4848),i=n(8453);const r={sidebar_position:1,author:"Philipp Cserich x Thomas Boigner",Date:"02.10.2024"},o="Software Testing and its variations",a={id:"knowledgebase/testing",title:"Software Testing and its variations",description:"Software Testing Guide",source:"@site/docs/knowledgebase/testing.md",sourceDirName:"knowledgebase",slug:"/knowledgebase/testing",permalink:"/docs/knowledgebase/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/knowledgebase/testing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,author:"Philipp Cserich x Thomas Boigner",Date:"02.10.2024"},sidebar:"tutorialSidebar",previous:{title:"Knowledgebase",permalink:"/docs/category/knowledgebase"},next:{title:"Git & Conventions",permalink:"/docs/knowledgebase/git-paper"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Test types",id:"test-types",level:2},{value:"Unittests",id:"unittests",level:3},{value:"Example",id:"example",level:4},{value:"End to end tests",id:"end-to-end-tests",level:3},{value:"Integration tests",id:"integration-tests",level:3},{value:"Mocking",id:"mocking",level:3},{value:"Example based testing",id:"example-based-testing",level:3},{value:"Property based testing and its random nature",id:"property-based-testing-and-its-random-nature",level:3},{value:"Test Workflow",id:"test-workflow",level:2},{value:"Code Coverage",id:"code-coverage",level:2}];function c(e){const t={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"software-testing-and-its-variations",children:"Software Testing and its variations"})}),"\n",(0,s.jsx)(t.p,{children:"Software Testing Guide"}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"This Testing guide is written for Socia/Phobos developers only, all usages or publications outside of project reach are not allowed and therefore this document restrains in terms restricted access."}),"\n",(0,s.jsx)(t.h2,{id:"test-types",children:"Test types"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Unittests"}),"\n",(0,s.jsx)(t.li,{children:"Architecturetests"}),"\n",(0,s.jsx)(t.li,{children:"End to End tests"}),"\n",(0,s.jsx)(t.li,{children:"Integrationtests"}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"There are two types of testing strategies called"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Example based testing"}),"\n",(0,s.jsx)(t.li,{children:"Property based testing"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"unittests",children:"Unittests"}),"\n",(0,s.jsx)(t.p,{children:"As it says in its name, unittests represent the smallest testing unit of code. Their main prupose is to ensure functionality on a more fine grained scale and without the context of your whole Application.\nThey can come in many different sizes. Method tests / Class tests can all be considered Unittests, but normally you take the smallest unit possible (Method test)."}),"\n",(0,s.jsxs)(t.p,{children:["For us the role ",(0,s.jsx)(t.strong,{children:"Unit # Methodtest"})," applies."]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.h3,{id:"end-to-end-tests",children:"End to end tests"}),"\n",(0,s.jsx)(t.p,{children:"[TODO]"}),"\n",(0,s.jsx)(t.h3,{id:"integration-tests",children:"Integration tests"}),"\n",(0,s.jsx)(t.p,{children:"[TODO]"}),"\n",(0,s.jsx)(t.h3,{id:"mocking",children:"Mocking"}),"\n",(0,s.jsx)(t.h3,{id:"example-based-testing",children:"Example based testing"}),"\n",(0,s.jsx)(t.p,{children:"You will already be really familiar with this type of testing, because this is the intuitive way to test functionality."}),"\n",(0,s.jsx)(t.p,{children:"Define an input -> test the functionality with that predefined input -> is the output the same as my expected output?"}),"\n",(0,s.jsx)(t.p,{children:"Example based testing requires hardcoded checks on both ends and is the most easiest way to ensure functionality.\nThe problem is that many testcases will be ignored by predefining your in and output.\nMaybe you dont even have some possible problematic edge cases in mind. This can lead to major issues in production because every fail that is not recognized in code is one error too much."}),"\n",(0,s.jsx)(t.h3,{id:"property-based-testing-and-its-random-nature",children:"Property based testing and its random nature"}),"\n",(0,s.jsxs)(t.p,{children:["Property Based testing aka random testing, is not specified in size. Property Based testing means that\nIts counterpart is ",(0,s.jsx)(t.strong,{children:"example based testing"})," which tests cases for a predefined input of variables."]}),"\n",(0,s.jsxs)(t.p,{children:["In java there are many testing frameworks available to implement such randomness. One of them beeing ",(0,s.jsx)(t.strong,{children:"jqwik"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"test-workflow",children:"Test Workflow"}),"\n",(0,s.jsx)(t.p,{children:"For Unittests"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Example based Testing"}),"\n",(0,s.jsx)(t.li,{children:"Property based Testing"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"code-coverage",children:"Code Coverage"}),"\n",(0,s.jsx)(t.p,{children:"Code Coverage is the metric to define how well your code is targeted by your tests.\nIt is displayed in percentage points for example bad testing would result in 20% code coverage -> 20% of your actual code has been covered by your tests."}),"\n",(0,s.jsxs)(t.p,{children:["The industries differ in CC standart very much. For example plane software has to hit 97% CC before beeing able to get into production cycles.\nThis is a more extreme example, because normally ",(0,s.jsx)(t.strong,{children:"80%"})," is the golden Standart for non critical software.\n(Critical software is Software that acts in critical Systems. And Problems or errors in such fields can cause harm or danger to human individuals)"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);