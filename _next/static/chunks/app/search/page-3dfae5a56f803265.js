(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{8447:function(e,s,n){Promise.resolve().then(n.bind(n,110))},110:function(e,s,n){"use strict";n.r(s);var r=n(3827),t=n(9522),c=n(3610),i=n(7681),l=n(6558),a=n(2103),o=n(8404),d=n(7907),x=n(4090),u=n(8003),p=n(1537),h=n(5052);function f(){let e=a.Z.searchService,s=(0,u.Z)(),[n,f]=s.scheme,[m,v]=s.vocab,g=(0,d.useSearchParams)(),y=g.get("keyword"),b=o.default.fromCode(g.get("srcLang")),k=o.default.fromCode(g.get("dstLang"));return function(e,s){let[n,r]=(0,l.Z)();(0,x.useEffect)(()=>{r([e,s])},[])}(b,k),(0,x.useEffect)(()=>{(async function(){let s=await e.search(y,b.code,k.code);void 0!=s&&null!=s&&v(s)})()},[y,b,k]),(0,r.jsx)(p.U,{value:s,children:(0,r.jsxs)("div",{className:"min-h:h-screen flex flex-col items-center",style:{backgroundColor:n.background},children:[(0,r.jsx)(t.Z,{className:"sticky top-0 z-50"}),(0,r.jsx)(i.Z,{height:"50px"}),(0,r.jsx)(c.Z,{initialKeyword:y}),(0,r.jsx)(i.Z,{height:"10px"}),(0,r.jsx)(j,{keyword:y}),(0,r.jsx)(i.Z,{height:"300px"}),(0,r.jsx)(h.Z,{})]})})}function j(e){var s;let{keyword:n}=e,[t,c]=(0,p.b)().vocab,[l,a]=(0,p.b)().scheme;if(void 0==t||""===t)return(0,r.jsx)(r.Fragment,{});let o=t.ipa,d=null!==(s=t.partOfSpeechs)&&void 0!==s?s:t.partOfSpeechs=[];return(0,r.jsxs)("div",{className:"container pt-[10px] w-[100%]",children:[(0,r.jsx)(g,{keyword:n,nullableIpa:o,style:{color:l.onBackground}}),(0,r.jsx)(i.Z,{height:"10px"}),d.map((e,s)=>(0,r.jsx)(v,{partOfSpeech:e,scheme:l},s))]})}function m(e){let{defAndExamples:s}=e,n=s.definition,t=s.examples;return(0,r.jsxs)("div",{className:"mt-[5px]",children:[(0,r.jsx)("div",{className:"font-semibold",children:n}),(0,r.jsx)("div",{className:"ps-[15px] pt-[5px]",children:void 0==t?(0,r.jsx)(r.Fragment,{}):t.map((e,s)=>(0,r.jsxs)("p",{children:["• ",e]},s))})]})}function v(e){let{partOfSpeech:s,scheme:n}=e;s.ipa;let t=s.type,c=s.definitions;return(0,r.jsxs)("div",{className:"flex flex-col items-start mt-[10px]",style:{color:n.onBackground},children:[(0,r.jsx)("div",{className:"px-[10px] py-[3px] rounded-[5px]",style:{backgroundColor:n.primary,color:n.onPrimary},children:(0,r.jsx)("b",{children:t})}),(0,r.jsx)("div",{children:c.map((e,s)=>(0,r.jsx)(m,{defAndExamples:e},s))})]})}function g(e){let{keyword:s,nullableIpa:n,style:t}=e;return(0,r.jsxs)("div",{className:"flex flex-row justify-between w-[100%]",style:t,children:[(0,r.jsx)("h2",{children:s}),(0,r.jsx)("p",{children:n})]})}s.default=function(){return(0,r.jsx)(x.Suspense,{fallback:(0,r.jsx)("p",{children:"Loading..."}),children:(0,r.jsx)(f,{})})}}},function(e){e.O(0,[726,570,971,69,744],function(){return e(e.s=8447)}),_N_E=e.O()}]);