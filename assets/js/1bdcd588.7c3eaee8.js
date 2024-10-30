"use strict";(self.webpackChunkproject_documentation=self.webpackChunkproject_documentation||[]).push([[3944],{3572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(4848),s=n(8453);const r={sidebar_position:1},o="201 - Testing Pipeline",a={id:"ihps/testing/201",title:"201 - Testing Pipeline",description:"The testing pipeline is defined as the process to determine the flow of tests and in which order they are written as well as executed.",source:"@site/docs/ihps/testing/201.md",sourceDirName:"ihps/testing",slug:"/ihps/testing/201",permalink:"/docs/ihps/testing/201",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ihps/testing/201.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"200 - Testing",permalink:"/docs/category/200---testing"},next:{title:"211 - Unittesting",permalink:"/docs/ihps/testing/211"}},c={},l=[{value:"Frontend Testing Pipeline",id:"frontend-testing-pipeline",level:3},{value:"Backend Testing Pipeline",id:"backend-testing-pipeline",level:3},{value:"Workflow",id:"workflow",level:3}];function d(e){const t={h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"201---testing-pipeline",children:"201 - Testing Pipeline"})}),"\n",(0,i.jsx)(t.p,{children:"The testing pipeline is defined as the process to determine the flow of tests and in which order they are written as well as executed."}),"\n",(0,i.jsx)(t.p,{children:"This has to be seperated in Frontend and Backend tests as they differ from each other and do not cross each others path (segregated execution and functionality)"}),"\n",(0,i.jsx)(t.p,{children:"Concept : TDD"}),"\n",(0,i.jsx)(t.h3,{id:"frontend-testing-pipeline",children:"Frontend Testing Pipeline"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Unit"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"At first you will test the pages functionality at its core, therefore any methods have to be tested as a seperated unit."}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"E2E (Cypress Tests)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The cypress tests are used to test our whole applications stack.\n(Requires Running Backend)\nCypress is used to mock a users behaviour such as typing or click events and therefore expects a response from the page.\nIf you want to dig deeper into the concept of cypress please visit (TODO)"}),"\n",(0,i.jsx)(t.h3,{id:"backend-testing-pipeline",children:"Backend Testing Pipeline"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Unit"}),"\n",(0,i.jsx)(t.li,{children:"Property test (Generalized unit test)"}),"\n",(0,i.jsx)(t.li,{children:"Architecture tests"}),"\n",(0,i.jsx)(t.li,{children:"Integration tests"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"workflow",children:"Workflow"}),"\n",(0,i.jsx)(t.p,{children:"Define Spec of your narrowed down feature\nDefine Test"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"For Frontend that would mean defining your cucumber spec (In natural language)"}),"\n",(0,i.jsx)(t.li,{children:'For Backend functionality that would mean defining your "unit" test case before starting to implement the functionality'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This Process requires you to think about your functionalities outcome in a more detailed manner!"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);