import{_ as w,r as F,V as S,a as T,b as D,u as $,c as p,o as I,s as x,m as b,d as f,e as i,f as c,g as t,h as d,t as s,i as u,F as m,j as g,k,n as q,p as M,l as C}from"./index.cf630636.js";const B={name:"movieinfo",components:{rankstar:F},setup(){const o=S.useStore();let r=T({}),n=D({orgin:[],short:[],isShowMore:!0}),e=D({list:[],betterList:[]});const v=$();let _=p(()=>v.query.id);I(async()=>{r.value=await x.get(b.detail(_.value),{}),o.commit("setTitle",r.value.title),n.orgin=r.value.actors||[],n.short=n.orgin.slice(0,3),n.isShowMore=n.orgin.length>3;let h=await x.get(b.rate(_.value),{});e.list=l(h),e.betterList=h.type_ranks||[]});const l=h=>{let N=70,L=[];for(let y=0;y<h.stats.length;y++){let V=h.stats[y].toFixed(3)*100;L.push({index:y+1,count:V,width:V*N/100})}return L.reverse()};return{detailData:r,actors:n,expand:()=>{n.short=n.orgin,n.isShowMore=!1},rate:e}},methods:{goPublish(){this.$store.state.userInfo.nickname?this.$router.push("/publish?id="+this.detailData.id):this.$router.push("/login")}}},j=o=>(M("data-v-1fbe2f8c"),o=o(),C(),o),P={key:0,class:"movie-info"},R={class:"title"},z={class:"year"},E={class:"desc-content"},A=["src"],G={class:"mv-desc"},H={key:0,href:"#"},J={class:"it"},K={class:"it"},O={class:"it"},Q={class:"it"},U={class:"it"},W={class:"it"},X={class:"mv-rank"},Y=j(()=>t("div",{class:"rank-title"},"\u8C46\u74E3\u8BC4\u5206",-1)),Z={class:"rank-score"},tt={class:"score"},et={class:"num"},st={class:"score-star"},at={class:"score-comment"},ot={href:"#"},nt={class:"score-rate"},it={class:"percent"},ct={class:"better-content"},rt={class:"better-item"},lt={href:"#"},dt={class:"opera-box"},_t=j(()=>t("div",null,"\u8BF7\u8BC4\u5206\uFF1A",-1)),ht=j(()=>t("img",{src:"https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif"},null,-1)),vt={class:"intro"},ut={class:"intro-title"},mt={style:{"text-indent":"20px"}};function pt(o,r,n,e,v,_){const l=f("rankstar");return e.detailData.id?(i(),c("div",P,[t("h1",R,[d(s(e.detailData.title)+" "+s(e.detailData.original_title),1),t("span",z,"\uFF08"+s(e.detailData.year)+"\uFF09",1)]),t("div",E,[t("img",{class:"mv-img",src:e.detailData.cover_url},null,8,A),t("div",G,[t("p",null,[d("\u5BFC\u6F14: "),e.detailData.directors&&e.detailData.directors.length?(i(),c("a",H,s(e.detailData.directors[0].name),1)):u("",!0)]),t("p",null,[d("\u4E3B\u6F14: "),(i(!0),c(m,null,g(e.actors.short,(a,h)=>(i(),c("a",{href:"#",key:h},[d(s(a.name)+" ",1),h!=e.actors.short.length-1?(i(),c(m,{key:0},[d("/")],64)):u("",!0)]))),128)),e.actors.isShowMore?(i(),c("span",{key:0,onClick:r[0]||(r[0]=(...a)=>e.expand&&e.expand(...a)),class:"more-actors"},"\u66F4\u591A..")):u("",!0)]),t("p",null,[d("\u7C7B\u578B: "),t("span",J,s(e.detailData.genres.join("/")),1)]),t("p",null,[d("\u5236\u7247\u56FD\u5BB6/\u5730\u533A: "),t("span",K,s(e.detailData.countries.join("/")),1)]),t("p",null,[d("\u8BED\u8A00: "),t("span",O,s(e.detailData.languages.join("/")),1)]),t("p",null,[d("\u4E0A\u6620\u65E5\u671F: "),t("span",Q,s(e.detailData.pubdate.join("/")),1)]),t("p",null,[d("\u7247\u957F: "),t("span",U,s(e.detailData.durations.join("/")),1)]),t("p",null,[d("\u53C8\u540D: "),t("span",W,s(e.detailData.aka.join("/")),1)])]),t("div",X,[Y,t("div",Z,[t("div",tt,[t("strong",et,s(e.detailData.rating.value),1)]),t("div",st,[k(l,{score:e.detailData.rating.value,class:"rankstar"},null,8,["score"]),t("div",at,[t("a",ot,s(e.detailData.rating.count),1),d("\u4EBA\u8BC4\u4EF7")])])]),t("div",nt,[(i(!0),c(m,null,g(e.rate.list,a=>(i(),c("div",{class:"rate-item",key:a.index},[t("span",null,s(a.index)+" \u661F",1),t("span",{class:"wline",style:q({width:a.width+"px"})},null,4),t("span",it,s(a.count.toFixed(1))+" %",1)]))),128))]),t("div",ct,[(i(!0),c(m,null,g(e.rate.betterList,(a,h)=>(i(),c("div",rt,[d("\u597D\u4E8E "),t("a",lt,s((a.rank*100).toFixed(1)+"%")+" "+s(a.type),1)]))),256))])])]),t("div",dt,[_t,t("div",null,[ht,d("\xA0 "),t("a",{href:"javascript:void(0)",class:"comment-link",onClick:r[1]||(r[1]=(...a)=>_.goPublish&&_.goPublish(...a))},"\u5199\u5F71\u8BC4")])]),t("div",vt,[t("h2",ut,s(e.detailData.title)+"\u7684\u5267\u60C5\u7B80\u4ECB\xB7 \xB7 \xB7 \xB7 \xB7 \xB7 ",1),t("div",mt,s(e.detailData.intro),1)])])):u("",!0)}var ft=w(B,[["render",pt],["__scopeId","data-v-1fbe2f8c"]]);const gt={name:"movieactors",components:{},setup(){const o=S.useStore(),r=p(()=>o.state.detailTitle);let n=D({list:[]});const e=$();let v=p(()=>e.query.id);return I(async()=>{let _=await x.get(b.actors(v.value));n.list=_.directors.concat(_.actors)}),{detailData:n,title:r}}},kt={key:0,class:"movie-actors"},yt={class:"intro-title"},Dt={class:"scroll-wrap"},xt={class:"scroll-content"},bt=["src"],wt={class:"actor-name one-line"},St={class:"actor-character one-line"};function $t(o,r,n,e,v,_){return e.detailData.list.length?(i(),c("div",kt,[t("h2",yt,s(e.title)+"\u7684\u6F14\u804C\u5458\xB7 \xB7 \xB7 \xB7 \xB7 ",1),t("div",Dt,[t("div",xt,[(i(!0),c(m,null,g(e.detailData.list,l=>(i(),c("div",{class:"actor-item",key:l.id},[t("img",{class:"actor-img",src:l.cover_url},null,8,bt),t("div",wt,s(l.name),1),t("div",St,s(l.character),1)]))),128))])])])):u("",!0)}var It=w(gt,[["render",$t],["__scopeId","data-v-c0fb93cc"]]);const jt={name:"moviecomments",components:{rankstar:F},setup(){const o=S.useStore(),r=p(()=>o.state.detailTitle),n=p(()=>o.state.commentList);let e=D({list:[]});const v=$();let _=p(()=>v.query.id);return I(async()=>{let l=await x.get(b.comments(_.value),{start:0,count:20});e.list=n.value.concat(l.reviews||[])}),{detailData:e,title:r}}},Lt=o=>(M("data-v-4ef703f0"),o=o(),C(),o),Vt={key:0,class:"movie-comments"},Ft={class:"intro-title"},Mt={class:"scroll-wrap"},Ct={class:"comment-item"},Nt={class:"top-content"},Tt=["src"],qt={class:"nickname"},Bt={key:0,class:"rankstar"},Pt=Lt(()=>t("span",{class:"rank-text"},"\u770B\u8FC7",-1)),Rt={class:"time"},zt={class:"content three-line"};function Et(o,r,n,e,v,_){const l=f("rankstar");return e.detailData.list.length?(i(),c("div",Vt,[t("h2",Ft,s(e.title)+"\u7684\u5F71\u8BC4\xB7 \xB7 \xB7 \xB7 \xB7 ",1),t("div",Mt,[(i(!0),c(m,null,g(e.detailData.list||[],a=>(i(),c("div",Ct,[t("div",Nt,[t("img",{class:"avatar",src:a.user.avatar},null,8,Tt),t("span",qt,s(a.user.name),1),a.rating&&a.rating.value?(i(),c("div",Bt,[Pt,k(l,{score:a.rating.value},null,8,["score"])])):u("",!0),t("div",Rt,s(a.create_time),1)]),t("div",zt,s(a.abstract),1)]))),256))])])):u("",!0)}var At=w(jt,[["render",Et],["__scopeId","data-v-4ef703f0"]]);const Gt={name:"detail",components:{movieinfo:ft,movieactors:It,moviecomments:At}},Ht={class:"detail-container"},Jt={class:"left-content"};function Kt(o,r,n,e,v,_){const l=f("movieinfo"),a=f("movieactors"),h=f("moviecomments");return i(),c("div",Ht,[t("div",Jt,[k(l),k(a),k(h)])])}var Qt=w(Gt,[["render",Kt],["__scopeId","data-v-90210b0a"]]);export{Qt as default};
