import{_ as m,r as v,a as d,b as f,u as k,c as y,y as x,o as q,d as u,e as o,f as n,g as t,t as i,i as L,F as N,j as T,k as h,z as V,s as b,m as w,h as B}from"./index.cf630636.js";import"./moment.40bc58bf.js";const C={name:"search",components:{rankstar:v},setup(){d({}),d("");let c=f({list:[]});const l=k();return y(()=>l.query.searchText),x(()=>l.query.searchText,async e=>{let r=await b.get(w.search,{start:0,count:20,q:e});c.list=r.items.filter(s=>s.target_type=="movie")},{deep:!1,immediate:!0}),q(async()=>{}),{searchList:c,changeScore:e=>{let r=[];starlist.list.forEach((s,_)=>{_<=e?s.state="full":s.state="normal",r.push({...s})}),starlist.list=r}}},computed:{},methods:{}},S={class:"search-container"},$={class:"page-title"},E={class:"search-result"},F={key:0},j={class:"item-content"},z=["src"],D={class:"left-content"},I={class:"rank-content"},M={class:"score-text"},R={class:"place"};function A(c,l,p,e,r,s){const _=u("router-link"),g=u("rankstar");return o(),n("div",S,[t("h1",$,"\u641C\u7D22\uFF1A"+i(c.$route.query.searchText),1),t("div",E,[e.searchList.list.length==0?(o(),n("div",F,"\u6682\u65E0\u641C\u7D22\u6570\u636E")):L("",!0),(o(!0),n(N,null,T(e.searchList.list,a=>(o(),n("div",j,[t("img",{src:a.target.cover_url,class:"item-img"},null,8,z),t("div",D,[h(_,{to:"/detail?id="+a.target.id,class:"title"},{default:V(()=>[B(i(a.target.title),1)]),_:2},1032,["to"]),t("div",I,[h(g,{score:a.target.rating.value,class:"rank-star"},null,8,["score"]),t("div",M,i(a.target.rating.value),1)]),t("div",R,i(a.target.card_subtitle),1)])]))),256))])])}var J=m(C,[["render",A],["__scopeId","data-v-f05bf75a"]]);export{J as default};
