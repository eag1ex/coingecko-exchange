(this["webpackJsonpcoingecko-exchange"]=this["webpackJsonpcoingecko-exchange"]||[]).push([[0],{61:function(e,t,a){e.exports=a.p+"static/media/slack_icon.2522dee8.png"},74:function(e,t,a){e.exports=a(92)},79:function(e,t,a){},80:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=80},90:function(e,t,a){},91:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=91},92:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),l=(a(79),a(8)),o=a(11),i=a(66);const m=Object(i.a)({palette:{primary:{main:"#00acc1"},secondary:{main:"#ffcc80"},muted:{main:"#aaa"},contrastThreshold:3,tonalOffset:.2,background:{paper:"#f4f4f4"},fontFamily:'Roboto, "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif'}});var u=a(128),h=a(4),p=a(9);const g=async e=>{if(e.ok)return e.json();{if(!e.body)return Promise.reject("body has no content");let a;try{a=await e.json()}catch(t){return Promise.reject(t)}return Object(p.e)(a)?Promise.reject(a.error):Promise.reject(a||"HTTP-Error: "+a.status)}},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e3;const t=new AbortController,a=setTimeout(()=>t.abort("Aborted"),e);return Object(p.c)(100).then(e=>{clearTimeout(a)}),t};var b=a(56),E=a.n(b);const x="https://api.coingecko.com/api/v3",f={base:x,exchanges:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Object(p.d)(e))return"".concat(x,"/exchanges");{let t=E.a.stringify(e);return"".concat(x,"/exchanges?").concat(t)}},exchangesProduct:e=>"".concat(x,"/exchanges/").concat(e)};Object.freeze(f);var y=a(117),v=a(118),N=a(119),j=a(94),O=a(120),k=a(57),w=a.n(k);const _=Object(y.a)(e=>({root:{flexGrow:1},menuButton:{marginRight:e.spacing(1)},title:{flexGrow:1}}));let P=e=>{const{first:t,second:a}=e;let{name:n,route:r}=t||{};return console.log("route",r),c.a.createElement(c.a.Fragment,null,r&&!a?c.a.createElement(o.b,{className:"btn btn-sm btn-secondary text-white py-0 px-0 strong",activeClassName:"is-active",to:"/app/"+r,exact:!0},n.toUpperCase()):r&&a?c.a.createElement(c.a.Fragment,null,c.a.createElement(o.b,{className:"btn btn-sm btn-secondary text-white py-0 px-0 base-link d-none-sm d-block-md",to:"/app/"+r,exact:!0},n.toUpperCase()),c.a.createElement("span",{className:"base-link-split"},"\xa0/\xa0"),c.a.createElement(o.b,{className:"btn btn-sm btn-secondary text-white py-0 px-0 dest-link strong",activeClassName:"is-active",to:a,exact:!0},a.toUpperCase())):null)};var C=Object(l.h)((function(e){let{routeName:t}=e;const a=_();return c.a.createElement("div",{className:a.root+" navbar"},c.a.createElement(v.a,{position:"static"},c.a.createElement(N.a,null,c.a.createElement(O.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(w.a,null)),c.a.createElement(j.a,{variant:"h6",className:a.title},c.a.createElement(P,t)))))})),D=(a(90),a(32)),S=a(121),T=a(130);const U=Object(y.a)(e=>({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)},"& .d-flex":{backgroundColor:"rgb(253, 236, 234)"}}})),B=e=>c.a.createElement(c.a.Fragment,null,e.link?c.a.createElement(o.b,{className:"btn btn-sm btn-outline-primary",activeClassName:"is-active",to:"/app/".concat(e.link),exact:!0},e.link):null);function R(e){const t=U(),a=e.type,n=e.value,r=e.link;return n?c.a.createElement("div",{className:t.root+" mx-1","data-testid":"message"},"error"===a?c.a.createElement("div",{className:"d-flex flex-row justify-content-start align-items-center w-100"},c.a.createElement(T.a,{severity:"error"},n),c.a.createElement(B,{link:r||!1})):"warning"===a?c.a.createElement(T.a,{severity:"warning"},n):"info"===a?c.a.createElement(T.a,{severity:"info"},n):"success"===a?c.a.createElement(T.a,{severity:"success"},n):null):null}var L=(e,t)=>Object(D.a)(t=>{const{mobxstore:a}=t,{page:n}=Object(l.g)();if(isNaN(Number(n)))return c.a.createElement(R,{type:"error",value:"Invalid exchange page",link:"exchanges"});const[r,s]=c.a.useState(null);return c.a.useEffect(()=>{null!==r&&r===n||a.fetch_exchanges({page:n,per_page:a.pagedPerPage}).then(e=>{s(n)})},[n,r,a]),"error"===a.state?c.a.createElement(R,{type:"error",value:"No data from server"}):"ready"===a.state?c.a.createElement(e,t):c.a.createElement("div",{className:"mt-5 pt-4 row"},c.a.createElement("div",{className:"col-8 m-auto"},c.a.createElement(S.a,null)))}),G=a(122),F=a(93),I=a(69),W=a(123);Object(h.b)({enforceActions:"never"});class M{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;this.entity="",this.item={},this.status="",this.baseUrl="",Object(h.d)(this,{item:h.e}),this.entity=e,this.baseUrl=a,this.item=Object(p.a)(t),this.showSlack=!0}get detailUrl(){return"".concat(this.baseUrl,"/").concat(this.item.id)}get socialList(){return[this.item.facebook_url?{name:"Facebook",type:"facebook",url:this.item.facebook_url}:null,this.item.twitter_handle?{name:"Twitter",type:"twitter",url:"http://twitter.com/".concat(this.item.twitter_handle)}:null,this.item.telegram_url?{name:"Telegram",type:"telegram",url:this.item.telegram_url}:this.item.reddit_url?{name:"Reddit",url:this.item.reddit_url,type:"reddit"}:null,this.item.slack_url?{name:"Slack",url:this.item.slack_url,type:"slack"}:null].filter(e=>!!e)}}var z=a(59),A=a.n(z);const H=Object(y.a)(e=>({margin:{margin:e.spacing(1)},root:{flexGrow:1},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},listGoup:{"& li":{border:"none"}}}));var J=Object(D.a)(e=>{let{mobxstore:t,item:a,history:n,page:r}=e;const s="/app/exchanges/".concat(r),l=new M("Product",a,s),i=H();return c.a.createElement("div",{className:i.root+" product-item my-4"},c.a.createElement(F.a,{className:i.paper+" product-paper"},c.a.createElement(G.a,{container:!0,spacing:2},c.a.createElement(G.a,{item:!0,className:"product-grid"},c.a.createElement(I.a,{className:i.image+" m-auto button-base"},c.a.createElement("img",{className:i.img,alt:"complex",src:l.item.image}))),c.a.createElement(G.a,{item:!0,xs:12,sm:!0,container:!0,className:"pt-4"},c.a.createElement(G.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},c.a.createElement(G.a,{item:!0,xs:!0},c.a.createElement(j.a,{gutterBottom:!0,variant:"subtitle1",className:"my-0 larger"},c.a.createElement("strong",null,l.item.name)),c.a.createElement(j.a,{variant:"body2",gutterBottom:!0,className:"my-0"},c.a.createElement("span",{className:"text-muted strong"},"Country: "),l.item.country),c.a.createElement(j.a,{variant:"body2",color:"textSecondary"},c.a.createElement("span",{className:"text-muted align-left strong"},"URL: "),c.a.createElement(W.a,{target:" _blank",className:"px-0 btn btn-sm text-primary align-left smaller",href:l.item.url},l.item.url))),c.a.createElement(G.a,{item:!0,className:"my-0"},c.a.createElement(j.a,{variant:"body2",style:{cursor:"pointer"}},c.a.createElement(o.b,{className:"btn btn-sm btn-secondary text-white detail-link",activeClassName:"is-active",to:l.detailUrl,exact:!0},"Detail")))),c.a.createElement(G.a,{item:!0,className:i.listGoup},c.a.createElement("ul",{className:"list-group list-group-horizontal p-0"},c.a.createElement("li",{className:"list-group-item py-0 pl-0 pr-1 mt-1"},l.item.trust_score_rank),c.a.createElement("li",{className:"list-group-item p-0 "},c.a.createElement(A.a,{fontSize:"small",color:"primary"}))))))))}),q=a(129);const K=Object(y.a)(e=>({root:{"& > *":{marginTop:e.spacing(2)}}}));function Q(e){const t=K(),{perPage:a,history:n,pageState:r}=e,[s,l]=c.a.useState(1);return c.a.createElement("div",{className:t.root+" row"},c.a.createElement("div",{className:"col-12 mt-1 mb-5"},c.a.createElement(q.a,{"data-testid":"pagination",className:"d-flex justify-content-center",page:r||s,count:a,variant:"outlined",shape:"rounded",onChange:(e,t)=>{l(t),n.push({pathname:"/app/exchanges/".concat(t)})}})))}var V=a(60);var X=Object(l.h)(L((function(e){const{mobxstore:t,onRouteChange:a,history:n}=e,{name:r,page:s}=Object(l.g)(),[o,i]=c.a.useState(!1);return c.a.useEffect(()=>{if(!o){let e=r+"/"+s;i(!0),a({name:r,page:s,route:e})}},[o,a,s,r]),c.a.createElement("div",{"data-testid":"exchange-wrap-page-".concat(s),id:"exchange-wrap"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-8 m-auto "},c.a.createElement("div",{className:"d-flex justify-content-center align-items-center m-auto"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-7 m-auto p-4"},(t.exchanges||[]).length?t.exchanges.map((e,a)=>c.a.createElement(J,{key:a,item:e,mobxstore:t,page:s})):"no exchanges available yet!")),c.a.createElement(Q,{pageState:Number(s),history:n,perPage:t.pagedPerPage,routeOnChange:e=>{Object(V.a)("route on change",e)}}))}),"exchange"));var Y=e=>t=>{const{productID:a}=Object(l.g)(),{mobxstore:n}=t,[r,s]=c.a.useState(null);return c.a.useEffect(()=>{null===r&&n.fetch_exchangeProduct(a).then(e=>{s(a)})},[r,a,n]),"ready"===n.state?c.a.createElement(e,t):"pending"===n.state?c.a.createElement("div",{className:"mt-5 pt-4 row"},c.a.createElement("div",{className:"col-8 m-auto"},c.a.createElement(S.a,null))):"error"===n.state?c.a.createElement(R,{type:"error",value:"Invalid product page",link:"exchanges"}):void 0},Z=a(125),$=a(124),ee=a(126),te=a(127),ae=a(62),ne=a.n(ae),ce=a(63),re=a.n(ce),se=a(64),le=a.n(se),oe=a(65),ie=a.n(oe),me=a(61),ue=a.n(me);const he=Object(y.a)(e=>({root:{margin:"auto"},image:{maxWidth:20,height:"auto"}}));function pe(){const e=he();return c.a.createElement("div",{className:e.root+" m-0"},c.a.createElement("img",{className:e.image,src:ue.a,alt:"Slack"}))}const ge=Object(y.a)(e=>({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},ListItem:{width:"inherit",maxWidth:"30px"}}));function de(e){const t=ge(),{socialList:a}=e;function n(e){return c.a.createElement($.a,Object.assign({className:t.ListItem+" mx-1 px-0",button:!0,component:"a"},e,{target:" _blank"}))}return c.a.createElement("div",{className:t.root},c.a.createElement(Z.a,{component:"nav","aria-label":"secondary mailbox folders",className:"d-flex flex-row justify-content-center"},a.map((e,t)=>c.a.createElement(n,{key:t,href:e.url},c.a.createElement(ee.a,{"data-testid":"social-ico-".concat(t)},"facebook"===e.type?c.a.createElement(ne.a,{color:"primary"}):"twitter"===e.type?c.a.createElement(re.a,{color:"primary"}):"slack"===e.type?c.a.createElement(pe,null):"reddit"===e.type?c.a.createElement(le.a,{color:"primary"}):"telegram"===e.type?c.a.createElement(ie.a,{color:"primary"}):null)))),c.a.createElement(te.a,null))}const be=Object(y.a)(e=>({margin:{margin:e.spacing(1)},root:{flexGrow:1},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{display:"block",maxWidth:"100%",maxHeight:"100%"},shape:{backgroundColor:e.palette.primary.secondary,width:12,height:12,marginRight:"5px"},shapeCircle:{borderRadius:"50%"}})),Ee=Object(D.a)(e=>{let{mobxstore:t,onRouteChange:a}=e;const{productID:n,page:r,name:s}=Object(l.g)(),i="/app/exchanges/".concat(r),m=new M("productDetail",t.productDetail,i),[u,h]=c.a.useState(!1);c.a.useEffect(()=>{if(!u){a({name:s,page:r,route:s+"/"+r},n),h(!0)}},[u,a,s,r,n]);const p=be();return c.a.createElement("div",{className:p.root+" mt-5 product-detail my-4","data-testid":"product-detail"},c.a.createElement(F.a,{className:p.paper+" product-paper"},c.a.createElement(G.a,{container:!0,spacing:2},c.a.createElement(G.a,{item:!0,className:"product-grid"},c.a.createElement(I.a,{className:p.image+" m-auto button-base"},c.a.createElement("img",{className:p.img+" m-auto",alt:"complex",src:m.item.image}))),c.a.createElement(G.a,{item:!0,xs:12,sm:!0,container:!0,className:"pt-4"},c.a.createElement(G.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},c.a.createElement(G.a,{item:!0,xs:!0},c.a.createElement(j.a,{gutterBottom:!0,variant:"subtitle1",className:"my-0 larger"},c.a.createElement("strong",null,m.item.name)),c.a.createElement(j.a,{variant:"body2",gutterBottom:!0,className:"my-1"},c.a.createElement(c.a.Fragment,null,m.item.description?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"text-muted cf strong"},"Description:"),c.a.createElement("span",{className:" mt-0"},m.item.description)):null)),c.a.createElement(j.a,{variant:"body2",gutterBottom:!0,className:"my-1"},c.a.createElement("span",{className:"text-muted strong"},"Country: "),m.item.country),c.a.createElement(j.a,{variant:"body2",gutterBottom:!0,className:"my-1"},c.a.createElement("span",{className:"text-muted strong"},"Trust Rank: "),m.item.trust_score_rank),c.a.createElement(j.a,{variant:"body2",gutterBottom:!0,className:"my-1"},c.a.createElement("span",{className:"text-muted strong"},"Established:")," ",m.item.year_established),m.item.url?c.a.createElement(j.a,{variant:"body2",color:"textSecondary"},c.a.createElement("span",{className:"text-muted align-left strong"},"URL: "),c.a.createElement(W.a,{target:" _blank",className:"px-0 btn btn-sm text-primary align-left smaller",href:m.item.url},m.item.url)):null,m.socialList.length?c.a.createElement("div",{ariant:"body2",className:"socialmedia-list"},c.a.createElement(de,{socialList:m.socialList})):null),c.a.createElement(G.a,{item:!0,className:"my-0"},c.a.createElement(j.a,{variant:"body2",style:{cursor:"pointer"}},c.a.createElement(o.b,{className:"btn btn-sm btn-secondary text-white",activeClassName:"is-active",to:m.baseUrl,exact:!0},"Back to Exchanges"))))))))});var xe=Object(l.h)(Y(Ee));Object(p.g)("log","off"),Object(p.g)("debug","off");const fe=new class{constructor(){this.state="pending",this.exchanges=[],this.productDetail={},this.cachedProduct={},this.cachedExchangePaged={},this.apiBase=f.base,this.pagedPerPage=10,Object(h.d)(this,{state:h.e,productDetail:h.e,exchanges:h.e})}fetch_exchanges(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;return e.page||(e.page=1),this.state="pending",isNaN(Number(e.page))?Promise.reject("fetch_exchanges wrong page provided").catch(e=>{Object(h.f)(()=>{this.state="error"})}):this.cachedExchangePaged[e.page]?(Object(h.f)(()=>{Object(p.f)("[exchanges][paged][cached]"),this.exchanges=this.cachedExchangePaged[e.page],this.state="ready"}),Promise.resolve(this.cachedExchangePaged[e.page])):(this.exchanges=[],Object(p.b)("[fetch]",f.exchanges(e)),fetch(f.exchanges(e),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8"},signal:d(t).signal}).then(g).then(t=>{Object(h.f)(()=>{(t=t||[]).sort((e,t)=>t.trust_score_rank-e.trust_score_rank),this.exchanges=t||[],this.cachedExchangePaged[e.page]=t,this.state="ready",Object(p.f)("[exchanges]",this.exchanges)})}).catch(e=>{Object(h.f)(()=>{this.state="error"}),e instanceof DOMException?Object(p.h)("[fetch_exchanges]",e.toString()):Object(p.h)("[fetch_exchanges]",e)}))}fetch_exchangeProduct(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;return this.state="pending",this.cachedProduct[e]?(Object(h.f)(()=>{this.productDetail=this.cachedProduct[e],this.state="ready",Object(p.f)("[productDetail][cached]")}),Promise.resolve(this.cachedProduct[e])):(this.productDetail={},Object(p.b)("[fetch]",f.exchangesProduct(e)),fetch(f.exchangesProduct(e),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8"},signal:d(t).signal}).then(g).then(t=>{Object(h.f)(()=>{this.productDetail=t||{},this.cachedProduct[e]=t,this.state="ready",Object(p.f)("[productDetail]",this.productDetail)})}).catch(e=>{Object(h.f)(()=>{this.state="error"}),e instanceof DOMException?Object(p.h)("[fetch_exchangeProduct]",e.toString()):Object(p.h)("[fetch_exchangeProduct]",e)}))}};var ye=function(){const[e,t]=c.a.useState({}),a=(e,a)=>{t({first:e,second:a})};return window.location.href.includes("app/exchanges")?c.a.createElement(o.a,null,c.a.createElement(u.a,{theme:m},c.a.createElement(C,{routeName:e}),c.a.createElement("div",{className:"container-fluid mt-3"},c.a.createElement(l.d,null,c.a.createElement(l.b,{exact:!0,path:"/"},c.a.createElement(l.a,{to:"/app/exchanges/1"})),c.a.createElement(l.b,{exact:!0,path:"/app"},c.a.createElement(l.a,{to:"/app/exchanges/1"})),c.a.createElement(l.b,{exact:!0,path:"/app/exchanges"},c.a.createElement(l.a,{to:"/app/exchanges/1"})),c.a.createElement(l.b,{exact:!0,path:"/exchanges/:name"},c.a.createElement(l.a,{to:"/app/exchanges/1"})),c.a.createElement(l.b,{exact:!0,path:"/app/:name/:page"},c.a.createElement(X,{mobxstore:fe,onRouteChange:e=>a(e)})),c.a.createElement(l.b,{exact:!0,path:"/app/:name/:page/:productID"},c.a.createElement(xe,{mobxstore:fe,onRouteChange:(e,t)=>a(e,t)})))))):c.a.createElement(l.a,{to:"/app/exchanges/1"})};s.a.render(c.a.createElement(ye,null),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.41aa3544.chunk.js.map