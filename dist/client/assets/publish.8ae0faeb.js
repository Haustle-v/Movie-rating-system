import{_ as f,a as _,b as p,u as g,c as b,o as D,s as I,m as k,e as l,f as c,g as e,t as d,i as y,F as S,j as x,w as M,v as w,q as B,p as C,l as Y}from"./index.cf630636.js";import{h as E}from"./moment.40bc58bf.js";const V={name:"publish",components:{},setup(){let s=_({}),o=_(""),n=p({list:new Array(5).fill({state:"normal"})});const t=g();let m=b(()=>t.query.id);return D(async()=>{let a=await I.get(k.detail(m.value),{});s.value=a}),{movieData:s,starlist:n,content:o,changeScore:a=>{let i=[];n.list.forEach((r,h)=>{h<=a?r.state="full":r.state="normal",i.push({...r})}),n.list=i}}},computed:{userInfo(){return this.$store.state.userInfo}},methods:{submit(){let s=0;this.starlist.list.forEach(o=>{o.state=="full"&&s++}),this.$store.commit("setCommentList",{rating:{value:s},user:{avatar:this.userInfo.avatar,name:this.userInfo.name},create_time:E().format("YYYY-MM-DD HH:mm:ss"),abstract:this.content}),this.$router.push("/detail?id="+this.movieData.id)}}},v=s=>(C("data-v-655b210a"),s=s(),Y(),s),q={class:"publish-container"},F=v(()=>e("h1",{class:"page-title"},"\u5199\u8BC4\u8BBA",-1)),H={key:0,class:"movie-info"},L=["src"],N={class:"right-info"},j={class:"title"},z={class:"desc"},A={class:"score-add"},R=v(()=>e("div",null,"\u7ED9\u4E2A\u8BC4\u4EF7\u5427\uFF1A",-1)),T={class:"rankstar"},U=["onMouseenter"],G={class:"text-input"};function J(s,o,n,t,m,u){return l(),c("div",q,[F,t.movieData.title?(l(),c("div",H,[e("img",{class:"info-img",src:t.movieData.cover_url},null,8,L),e("div",N,[e("div",j,d(t.movieData.title),1),e("div",z,d(t.movieData.card_subtitle)+" "+d(t.movieData.rating.value)+"\u5206("+d(t.movieData.rating.count)+"\u8BC4\u4EF7)",1)])])):y("",!0),e("div",A,[R,e("div",T,[(l(!0),c(S,null,x(t.starlist.list||[],(a,i)=>(l(),c("div",{class:B(["star-item",a.state]),key:i,onMouseenter:r=>t.changeScore(i)},null,42,U))),128))])]),e("div",G,[M(e("textarea",{id:"commentInput",placeholder:"\u5199\u8BC4\u8BBA","onUpdate:modelValue":o[0]||(o[0]=a=>t.content=a)},null,512),[[w,t.content,void 0,{trim:!0}]])]),e("div",{id:"submitBtn",onClick:o[1]||(o[1]=(...a)=>u.submit&&u.submit(...a))},"\u63D0\u4EA4")])}var P=f(V,[["render",J],["__scopeId","data-v-655b210a"]]);export{P as default};