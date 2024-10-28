"use strict";(self.webpackChunkproject_documentation=self.webpackChunkproject_documentation||[]).push([[681],{6072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(4848),s=n(8453);const i={sidebar_position:2},r="Gitops principle",a={id:"knowledgebase/gitops-paper",title:"Gitops principle",description:"Gitops Guide",source:"@site/docs/knowledgebase/gitops-paper.md",sourceDirName:"knowledgebase",slug:"/knowledgebase/gitops-paper",permalink:"/docs/knowledgebase/gitops-paper",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/knowledgebase/gitops-paper.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Git & Conventions",permalink:"/docs/knowledgebase/git-paper"},next:{title:"Docker usage & Best Practices",permalink:"/docs/knowledgebase/docker-paper"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is Gitops",id:"what-is-gitops",level:3},{value:"How to use it",id:"how-to-use-it",level:3}];function l(e){const t={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"gitops-principle",children:"Gitops principle"})}),"\n",(0,o.jsx)(t.p,{children:"Gitops Guide"}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"Author : Philipp Cserich"}),"\n",(0,o.jsx)(t.p,{children:"Date : 08.07.2024"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"This Gitops guide is written for Socia/Phobos developers only, all usages or publications outside of project reach are not allowed and therefore this document restrains in terms restricted access."}),"\n",(0,o.jsx)(t.h3,{id:"what-is-gitops",children:"What is Gitops"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Building Applications or Complete Structures all around Git!"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:'"Config as Code done Right!"'})}),"\n",(0,o.jsxs)(t.p,{children:["Everything revolves around git Repos.\nThis normally means that you have to include one seperate Repository that is responsible for holding configuration files for ",(0,o.jsx)(t.strong,{children:"ArgoCD"})," or ",(0,o.jsx)(t.strong,{children:"FluxCD"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"But what exactly means building everything around a git repository?\nIn the good old times you would configure servers manually, that changed when kubernetes was introduced. Server configurations could be written beforehand and could get reused.\nThis opened up a whole new spectrum of reusability."}),"\n",(0,o.jsx)(t.p,{children:'Sadly even in a kubernetes environment you are configuring the Deployments and "Servers" / Pods once and these files do not get stored externally.\nGitOps changes that. It requires all configuration files and service definitions to be saved in a "git" centered repository, which is then used as a reference for kubernetes.\nSo even if an earthquake destroys our datacenter, we could reproduce all servers states, by recabling our git repo to another cluster.'}),"\n",(0,o.jsx)(t.p,{children:"This revolves in the k8smaster needing to know and watch the state of all configuration files.\nArgoCD and FluxCD do exactly that, they enable more accessable roleback strategies as well as instant updates whenever a new software version or config change hit."}),"\n",(0,o.jsx)(t.h3,{id:"how-to-use-it",children:"How to use it"}),"\n",(0,o.jsx)(t.p,{children:"[TODO]"})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(6540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);