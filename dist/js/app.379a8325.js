(function(t){function e(e){for(var r,o,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/gitogram/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0479":function(t,e,n){t.exports=n.p+"img/Gitogram.cc56deaa.svg"},"0f12":function(t,e,n){"use strict";n("dd55")},"117c":function(t,e,n){},"1a86":function(t,e,n){t.exports=n.p+"img/Logo.19e9871c.svg"},"1e96":function(t,e,n){},"200f":function(t,e,n){"use strict";n("fe76")},"257e":function(t,e,n){"use strict";n("edab")},"2b13":function(t,e,n){},"32a3":function(t,e,n){},3645:function(t,e,n){},"36fc":function(t,e,n){"use strict";n("2b13")},"37e4":function(t,e,n){"use strict";n("93ee")},"3c23":function(t,e,n){},"3d62":function(t,e,n){t.exports=n.p+"img/user-andrew.b624fe5d.svg"},"42a8":function(t,e,n){t.exports=n.p+"img/star.0169ff3c.svg"},"45d6":function(t,e,n){"use strict";n("9745")},"4ec4":function(t,e,n){"use strict";n("3c23")},5482:function(t,e,n){},"54ba":function(t,e,n){t.exports=n.p+"img/fork.c89cb2bc.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("5502"),c=n("1da1"),o=(n("96cf"),n("d81d"),n("7db0"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("a15b"),n("99af"),n("bc3a")),i=n.n(o),s="https://api.github.com",u=function(t){var e=t.url,n=t.method,r=void 0===n?"get":n,a=t.data,c=void 0===a?{}:a,o=t.headers,u=void 0===o?{}:o;return i()({url:e,method:r,data:c,headers:u,baseURL:s})},d=function(t){return t<10?"0".concat(t):t},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"javascript",e=new URLSearchParams,n=6048e5,r=new Date(Date.now()-n),a=[r.getFullYear(),d(r.getMonth()+1),d(r.getDate())].join("-");return e.append("order","desc"),e.append("sort","stars"),e.append("per_page",10),e.append("q","language:".concat(t," created:>").concat(a)),u({url:"/search/repositories?".concat(e)})},f=function(t){var e=t.owner,n=t.repo,r="application/vnd.github.v3.html+json";return u({url:"/repos/".concat(e,"/").concat(n,"/readme"),headers:{accept:r}})},b={namespaced:!0,state:{data:[],currentSlide:0},mutations:{updateCurrentSlide:function(t,e){t.currentSlide=e,console.log("store updated")},setReadme:function(t,e){t.data=t.data.map((function(t){return t.id===e.id&&(t.readme=e.content),t}))}},getters:{getRepoById:function(t){return function(e){return console.log(e),t.data.find((function(t){return t.id===e}))}}},actions:{fetchTrendings:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l();case 3:n=e.sent,r=n.data.items,t.state.data=r,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},fetchReadme:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,s,u,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.commit,a=t.getters,c=e.id,o=e.owner,i=e.repo,s=a.getRepoById(c),void 0===s.readme){n.next=5;break}return n.abrupt("return");case 5:return n.prev=5,n.next=8,f({owner:o,repo:i});case 8:u=n.sent,d=u.data,r("setReadme",{id:c,content:d}),n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](5),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[5,13]])})))()}}},p=Object(a["a"])({modules:{trendings:b}}),v=n("6c02"),m={class:"feed"},g={class:"stories-list"},O={class:"main"};function j(t,e,n,a,c,o){var i=Object(r["B"])("headline"),s=Object(r["B"])("storyItem"),u=Object(r["B"])("topline"),d=Object(r["B"])("articlePreview"),l=Object(r["B"])("post");return Object(r["t"])(),Object(r["f"])("div",m,[Object(r["i"])(u,null,{headline:Object(r["G"])((function(){return[Object(r["i"])(i)]})),content:Object(r["G"])((function(){return[Object(r["g"])("ul",g,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(o.formateObjects(t.trendings),(function(t,e){var n=t.id,a=t.login,c=t.avatarURL;return Object(r["t"])(),Object(r["f"])("li",{class:"stories-list__item",key:n},[Object(r["i"])(s,{name:a,avatarLink:c,id:e},null,8,["name","avatarLink","id"])])})),128))])]})),_:1}),Object(r["g"])("section",O,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(o.formateObjects(t.trendings),(function(t){return Object(r["t"])(),Object(r["d"])(l,{key:t.id,data:t},{default:Object(r["G"])((function(){return[Object(r["i"])(d,{data:t},null,8,["data"])]})),_:2},1032,["data"])})),128))])])}var h=n("5530"),w=(n("b0c0"),n("a4d3"),n("e01a"),{class:"c-topline"}),y={key:0,class:"content"};function _(t,e,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",w,[Object(r["A"])(t.$slots,"headline",{},void 0,!0),t.$slots.content?(Object(r["t"])(),Object(r["f"])("div",y,[Object(r["A"])(t.$slots,"content",{},void 0,!0)])):Object(r["e"])("",!0)])}var k={name:"topline"},x=(n("4ec4"),n("6b0d")),S=n.n(x);const B=S()(k,[["render",_],["__scopeId","data-v-63800661"]]);var R=B,I=n("86e6"),L=n.n(I),T=n("3d62"),M=n.n(T),C=n("81ca"),P=n.n(C),A={class:"headline"},F=Object(r["h"])('<li class="list" data-v-5f7b983d><a href="#" data-v-5f7b983d><img src="'+L.a+'" alt="homepage icon" class="list-item__img" data-v-5f7b983d></a><a href="#" data-v-5f7b983d><img src="'+M.a+'" alt="some user" class="list-item__img" data-v-5f7b983d></a><a href="#" data-v-5f7b983d><img src="'+P.a+'" alt="sign-out icon" class="list-item__img" data-v-5f7b983d></a></li>',1);function q(t,e,n,a,c,o){var i=Object(r["B"])("logo");return Object(r["t"])(),Object(r["f"])("div",A,[Object(r["i"])(i),F])}var D=n("1a86"),E=n.n(D),$=function(t){return Object(r["w"])("data-v-c55f00e8"),t=t(),Object(r["u"])(),t},N={href:"#"},U=$((function(){return Object(r["g"])("img",{src:E.a,alt:"Gitogram",href:"#"},null,-1)})),V=[U];function W(t,e,n,a,c,o){return Object(r["t"])(),Object(r["f"])("a",N,V)}var G={name:"logo"};n("a73d");const z=S()(G,[["render",W],["__scopeId","data-v-c55f00e8"]]);var H=z,X={name:"headline",components:{logo:H}};n("cd7c");const Y=S()(X,[["render",q],["__scopeId","data-v-5f7b983d"]]);var J=Y,K={class:"post"},Q={key:0,class:"post__comments"},Z={class:"post__date"};function tt(t,e,n,a,c,o){var i=Object(r["B"])("userButton"),s=Object(r["B"])("toggler"),u=Object(r["B"])("comment");return Object(r["t"])(),Object(r["f"])("div",K,[Object(r["i"])(i,{avatarLink:n.data.avatarURL,nickname:n.data.login,link:"#"},null,8,["avatarLink","nickname"]),Object(r["A"])(t.$slots,"default",{},void 0,!0),Object(r["i"])(s,{onOnToggle:o.toggle},null,8,["onOnToggle"]),c.shown?(Object(r["t"])(),Object(r["f"])("div",Q,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(n.data.comments,(function(t){return Object(r["t"])(),Object(r["d"])(u,{key:t.id,author:t.login,body:t.body},null,8,["author","body"])})),128))])):Object(r["e"])("",!0),Object(r["g"])("div",Z,Object(r["D"])(n.data.date),1)])}var et={class:"comment"},nt={class:"author"},rt={class:"body"};function at(t,e,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",et,[Object(r["g"])("span",nt,Object(r["D"])(n.author),1),Object(r["g"])("span",rt,Object(r["D"])(n.body),1)])}var ct={name:"comment",props:{author:{type:String,required:!0},body:{type:String,required:!0}}};n("8226");const ot=S()(ct,[["render",at],["__scopeId","data-v-033d5853"]]);var it=ot,st=(n("9911"),["href"]),ut=["src"],dt={class:"nickname"};function lt(t,e,n,a,c,o){return Object(r["t"])(),Object(r["f"])("a",{class:"post__author",href:n.link||"#"},[Object(r["g"])("img",{src:n.avatarLink,alt:"user icon",class:"post-author__icon"},null,8,ut),Object(r["g"])("span",dt,Object(r["D"])(n.nickname),1)],8,st)}var ft={name:"userButton",props:{avatarLink:{type:String,required:!0},nickname:{type:String,required:!0},link:String}};n("37e4");const bt=S()(ft,[["render",lt],["__scopeId","data-v-6165e74f"]]);var pt=bt,vt=n("e235"),mt=n.n(vt),gt=function(t){return Object(r["w"])("data-v-34dfada9"),t=t(),Object(r["u"])(),t},Ot={class:"button_text"},jt=gt((function(){return Object(r["g"])("img",{src:mt.a,alt:"arrow"},null,-1)})),ht=[jt];function wt(t,e,n,a,c,o){return Object(r["t"])(),Object(r["f"])("button",{type:"button",class:"toggler",onClick:e[0]||(e[0]=function(){return o.toggleValue&&o.toggleValue.apply(o,arguments)})},[Object(r["g"])("span",Ot,Object(r["D"])(o.currentText),1),Object(r["g"])("span",{class:Object(r["o"])(["button__icon",{active:c.isOpened}])},ht,2)])}var yt={name:"toggler",data:function(){return{isOpened:!1}},methods:{toggleValue:function(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}},computed:{currentText:function(){return this.isOpened?"Hide issues":"View issues"}}};n("c005");const _t=S()(yt,[["render",wt],["__scopeId","data-v-34dfada9"]]);var kt=_t,xt={name:"post",components:{comment:it,userButton:pt,toggler:kt},props:{data:Object},data:function(){return{shown:!1}},methods:{toggle:function(t){this.shown=t}}};n("36fc");const St=S()(xt,[["render",tt],["__scopeId","data-v-15f8b980"]]);var Bt=St,Rt=["href"],It={class:"post__title"},Lt={class:"post__subtitle"};function Tt(t,e,n,a,c,o){var i=Object(r["B"])("postControllers");return Object(r["t"])(),Object(r["f"])("a",{class:"post__article",href:n.data.link},[Object(r["g"])("div",It,Object(r["D"])(n.data.title),1),Object(r["g"])("div",Lt,Object(r["D"])(n.data.description||"Default description"),1),Object(r["i"])(i,{starsAmount:n.data.starsCount,forkAmount:n.data.forksCount},null,8,["starsAmount","forkAmount"])],8,Rt)}var Mt=n("42a8"),Ct=n.n(Mt),Pt=n("54ba"),At=n.n(Pt),Ft=function(t){return Object(r["w"])("data-v-24b22780"),t=t(),Object(r["u"])(),t},qt={class:"controllers-wrapper"},Dt={class:"stars"},Et=Ft((function(){return Object(r["g"])("button",{class:"stars__button",type:"button"},[Object(r["g"])("img",{src:Ct.a,alt:"star icon"}),Object(r["g"])("span",null,"Star")],-1)})),$t={class:"stars__value"},Nt={class:"fork"},Ut=Ft((function(){return Object(r["g"])("button",{class:"fork__button",type:"button"},[Object(r["g"])("img",{src:At.a,alt:"forked repository icon"}),Object(r["g"])("span",null,"Fork")],-1)})),Vt={class:"fork__value"};function Wt(t,e,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",qt,[Object(r["g"])("div",Dt,[Et,Object(r["g"])("span",$t,Object(r["D"])(n.starsAmount),1)]),Object(r["g"])("div",Nt,[Ut,Object(r["g"])("span",Vt,Object(r["D"])(n.forkAmount),1)])])}n("a9e3");var Gt={name:"postControllers",props:{starsAmount:{type:Number,required:!0},forkAmount:{type:Number,required:!0}}};n("200f");const zt=S()(Gt,[["render",Wt],["__scopeId","data-v-24b22780"]]);var Ht=zt,Xt={name:"articlePreview",components:{postControllers:Ht},props:{data:Object}};n("257e");const Yt=S()(Xt,[["render",Tt],["__scopeId","data-v-b82f87c2"]]);var Jt=Yt,Kt={class:"story-item"},Qt=["src"],Zt={class:"story-item__text"};function te(t,e,n,a,c,o){var i=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])("div",Kt,[Object(r["i"])(i,{to:"/stories",class:"icon",onClick:e[0]||(e[0]=function(e){return t.updateCurrentSlide(n.id)})},{default:Object(r["G"])((function(){return[Object(r["g"])("img",{src:n.avatarLink,alt:"user icon"},null,8,Qt)]})),_:1}),Object(r["g"])("span",Zt,Object(r["D"])(n.name),1)])}var ee={name:"storyItem",props:{name:{type:String,required:!0},avatarLink:{type:String,required:!0},id:{type:Number,required:!0}},methods:Object(h["a"])({},Object(a["c"])({updateCurrentSlide:"trendings/updateCurrentSlide"}))};n("aef9");const ne=S()(ee,[["render",te],["__scopeId","data-v-1c2ee12e"]]);var re=ne,ae={name:"feeds",components:{headline:J,topline:R,storyItem:re,post:Bt,articlePreview:Jt},methods:Object(h["a"])(Object(h["a"])({},Object(a["b"])({fetchTrendings:"trendings/fetchTrendings"})),{},{formateObjects:function(t){return t.map((function(t){return{id:t.id,login:t.owner.login,title:t.name,avatarURL:t.owner.avatar_url,starsCount:t.stargazers_count,forksCount:t.watchers_count,description:t.description,comments:[{nickname:"joshua_l",body:"Enable performance measuring in production, at the user's request",id:0},{nickname:"Camille",body:"It's Impossible to Rename an Inherited Slot",id:1},{nickname:"Marselle",body:"transition-group with flex parent causes removed items to fly",id:2}],body:["The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.","For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.","In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms","For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year."],date:"15 MAY"}}))}}),computed:Object(h["a"])({},Object(a["d"])({trendings:function(t){return t.trendings.data}})),created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchTrendings();case 2:case"end":return e.stop()}}),e)})))()}};n("0f12");const ce=S()(ae,[["render",j],["__scopeId","data-v-7f435fb5"]]);var oe=ce,ie=n("0479"),se=n.n(ie),ue=function(t){return Object(r["w"])("data-v-da35d446"),t=t(),Object(r["u"])(),t},de={class:"stories-section"},le={class:"header"},fe=ue((function(){return Object(r["g"])("div",{class:"logo"},[Object(r["g"])("img",{src:se.a,alt:"gitogram"})],-1)})),be=ue((function(){return Object(r["g"])("div",{class:"close-button"},"+",-1)})),pe={class:"wrapper"};function ve(t,e,n,a,c,o){var i=Object(r["B"])("router-link"),s=Object(r["B"])("sliderItem");return Object(r["t"])(),Object(r["f"])("section",de,[Object(r["g"])("header",le,[fe,Object(r["i"])(i,{to:"/",class:"link"},{default:Object(r["G"])((function(){return[be]})),_:1})]),Object(r["g"])("div",pe,[Object(r["g"])("div",{class:"stories-wrapper",style:Object(r["p"])({transform:"translateX(".concat(-23*this.currentSlide,"rem)")})},[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(o.formateObjects(t.trendings),(function(e){return Object(r["t"])(),Object(r["d"])(s,{key:e.id+t.currentSlide,data:e,onMoveSlide:o.handleMoveSlide},null,8,["data","onMoveSlide"])})),128))],4)])])}var me={class:"header"},ge={class:"progress"},Oe={class:"user"},je={class:"content"},he={key:0,class:"loader"},we=["innerHTML"],ye={key:2,class:"placeholder"},_e={class:"footer"},ke={class:"button"};function xe(t,e,n,a,c,o){var i=this,s=Object(r["B"])("progressBar"),u=Object(r["B"])("userButton"),d=Object(r["B"])("spinner"),l=Object(r["B"])("sliderPlaceholder"),f=Object(r["B"])("xButton");return Object(r["t"])(),Object(r["f"])("div",{class:Object(r["o"])(o.sliderStyles)},[o.showLeftButton?(Object(r["t"])(),Object(r["f"])("div",{key:0,class:"button-move button--prev",onClick:e[0]||(e[0]=function(t){return o.moveSlide("prev")})})):Object(r["e"])("",!0),Object(r["g"])("div",me,[Object(r["g"])("div",ge,[Object(r["i"])(s,{active:n.data.active,onOnFinish:e[1]||(e[1]=function(t){return i.$emit("moveSlide","next")})},null,8,["active"])]),Object(r["g"])("div",Oe,[Object(r["i"])(u,{avatarLink:n.data.avatarURL,nickname:n.data.login},null,8,["avatarLink","nickname"])])]),Object(r["g"])("div",je,[n.data.loading?(Object(r["t"])(),Object(r["f"])("div",he,[Object(r["i"])(d)])):void 0!==n.data.content?(Object(r["t"])(),Object(r["f"])("div",{key:1,class:"body",innerHTML:n.data.content},null,8,we)):(Object(r["t"])(),Object(r["f"])("div",ye,[Object(r["i"])(l)]))]),Object(r["g"])("div",_e,[Object(r["g"])("div",ke,[Object(r["i"])(f,{text:"Follow",hoverText:"Unfollow"})])]),o.showRightButton?(Object(r["t"])(),Object(r["f"])("div",{key:1,class:"button-move button--next",onClick:e[2]||(e[2]=function(t){return o.moveSlide("next")})})):Object(r["e"])("",!0)],2)}var Se={ref:"indicator",class:"indicator"};function Be(t,e,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",{class:Object(r["o"])([{active:c.isActive},"progress-bar"])},[Object(r["g"])("div",Se,null,512)],2)}var Re={name:"progressBar",emits:["onFinish"],props:{active:{type:Boolean,required:!0}},data:function(){return{isActive:!1}},methods:{emitOnFinish:function(){this.$emit("onFinish",1),console.log("onFinishEmit")}},mounted:function(){var t=this;setTimeout((function(){t.$props.active&&(t.isActive=!0)}),0),this.$refs.indicator.addEventListener("transitionend",this.emitOnFinish)},beforeUnmount:function(){this.$refs.indicator.removeEventListener("transitionend",this.emitOnFinish),this.$refs.indicator.sty}};n("45d6");const Ie=S()(Re,[["render",Be],["__scopeId","data-v-6cc1efa6"]]);var Le=Ie,Te={class:"lds-dual-ring"};function Me(t,e,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",Te)}var Ce={name:"spinner"};n("aaa2");const Pe=S()(Ce,[["render",Me],["__scopeId","data-v-982cc300"]]);var Ae=Pe;function Fe(t,e,n,a,c,o){return Object(r["t"])(),Object(r["f"])("button",{class:"button",onMouseenter:e[0]||(e[0]=function(){return o.onMouseEnter&&o.onMouseEnter.apply(o,arguments)}),onMouseleave:e[1]||(e[1]=function(){return o.onMouseLeave&&o.onMouseLeave.apply(o,arguments)})},Object(r["D"])(c.currentText),33)}var qe={name:"xButton",props:{text:{type:String,required:!0},hoverText:{type:String,required:!1}},data:function(){return{currentText:this.text}},methods:{onMouseEnter:function(){this.currentText=this.hoverText},onMouseLeave:function(){this.currentText=this.text}}};n("c928");const De=S()(qe,[["render",Fe],["__scopeId","data-v-229fa283"]]);var Ee=De,$e={class:"wrapper"},Ne=Object(r["h"])('<div class="img" data-v-48312ae3></div><div class="paragraph-wrapper" data-v-48312ae3><div class="paragraph--small" data-v-48312ae3></div><div class="paragraph--large" data-v-48312ae3></div><div class="paragraph--small" data-v-48312ae3></div></div><div class="paragraph-wrapper" data-v-48312ae3><div class="paragraph--small" data-v-48312ae3></div><div class="paragraph--large" data-v-48312ae3></div><div class="paragraph--small" data-v-48312ae3></div></div>',3),Ue=[Ne];function Ve(t,e,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",$e,Ue)}var We={name:"sliderPlaceholder"};n("9d39");const Ge=S()(We,[["render",Ve],["__scopeId","data-v-48312ae3"]]);var ze=Ge,He={name:"sliderItem",emits:["moveSlide"],components:{progressBar:Le,userButton:pt,xButton:Ee,spinner:Ae,sliderPlaceholder:ze},props:{data:{type:Object,required:!0,default:function(){return{}}}},methods:{moveSlide:function(t){this.$emit("moveSlide",t)}},computed:{showLeftButton:function(){return this.data.active&&!this.data.isLeft&&this.data.showButtons},showRightButton:function(){return this.data.active&&!this.data.isRight&&this.data.showButtons},sliderStyles:function(){return{"slider-item":!0,"not-active":!this.data.active}}}};n("7dcf");const Xe=S()(He,[["render",xe],["__scopeId","data-v-52c74ccc"]]);var Ye=Xe,Je={name:"stories",components:{sliderItem:Ye},data:function(){return{isLoading:!1,showButtons:!0}},methods:Object(h["a"])(Object(h["a"])(Object(h["a"])({},Object(a["b"])({fetchTrendings:"trendings/fetchTrendings",fetchReadme:"trendings/fetchReadme"})),Object(a["c"])({updateCurrentSlide:"trendings/updateCurrentSlide"})),{},{fetchReadmeForActiveSlide:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.trendings[t.currentSlide],r=n.id,a=n.owner,c=n.name,e.next=3,t.fetchReadme({id:r,owner:a.login,repo:c});case 3:case"end":return e.stop()}}),e)})))()},handleMoveSlide:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return"next"===t&&e.updateCurrentSlide(e.currentSlide+1),"prev"===t&&e.updateCurrentSlide(e.currentSlide-1),t>=0&&t<e.trendings.length&&e.updateCurrentSlide(t),n.next=5,e.loadReadme();case 5:case"end":return n.stop()}}),n)})))()},loadReadme:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,t.showButtons=!1,e.prev=2,e.next=5,t.fetchReadmeForActiveSlide();case 5:e.next=11;break;case 7:throw e.prev=7,e.t0=e["catch"](2),console.log(e.t0),e.t0;case 11:return e.prev=11,t.isLoading=!1,t.showButtons=!0,e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[2,7,11,15]])})))()},formateObjects:function(t){var e=this;return t.map((function(t,n,r){return{id:t.id,login:t.owner.login,title:t.name,avatarURL:t.owner.avatar_url,starsCount:t.stargazers_count,forksCount:t.watchers_count,description:t.description,content:t.readme,comments:[{nickname:"joshua_l",body:"Enable performance measuring in production, at the user's request",id:0},{nickname:"Camille",body:"It's Impossible to Rename an Inherited Slot",id:1},{nickname:"Marselle",body:"transition-group with flex parent causes removed items to fly",id:2}],body:["The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.","For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.","In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms","For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year."],date:"15 MAY",active:n===e.currentSlide,loading:n===e.currentSlide&&e.isLoading,showButtons:e.showButtons,isLeft:0===n,isRight:r.length-1===n}}))}}),computed:Object(h["a"])({},Object(a["d"])({trendings:function(t){return t.trendings.data},currentSlide:function(t){return t.trendings.currentSlide}})),created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchTrendings();case 2:return e.next=4,t.loadReadme();case 4:case"end":return e.stop()}}),e)})))()}};n("635b");const Ke=S()(Je,[["render",ve],["__scopeId","data-v-da35d446"]]);var Qe=Ke,Ze=[{path:"/",component:oe},{path:"/stories",component:Qe}],tn=Object(v["a"])({history:Object(v["b"])(),routes:Ze});function en(t,e,n,a,c,o){var i=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["d"])(i)}var nn={name:"App"};n("842e");const rn=S()(nn,[["render",en]]);var an=rn,cn=Object(r["c"])(an);cn.use(p),cn.use(tn),cn.mount("#app")},"635b":function(t,e,n){"use strict";n("caa7")},"7dcf":function(t,e,n){"use strict";n("117c")},"81ca":function(t,e,n){t.exports=n.p+"img/sign-out.6117be77.svg"},8226:function(t,e,n){"use strict";n("d7da")},"842e":function(t,e,n){"use strict";n("9864")},"86e6":function(t,e,n){t.exports=n.p+"img/home.f2c17fe3.svg"},"93ee":function(t,e,n){},9745:function(t,e,n){},9864:function(t,e,n){},"9d39":function(t,e,n){"use strict";n("ea7b")},a73d:function(t,e,n){"use strict";n("ceeb")},aaa2:function(t,e,n){"use strict";n("5482")},aef9:function(t,e,n){"use strict";n("3645")},c005:function(t,e,n){"use strict";n("fa3a")},c928:function(t,e,n){"use strict";n("32a3")},caa7:function(t,e,n){},cd7c:function(t,e,n){"use strict";n("1e96")},ceeb:function(t,e,n){},d7da:function(t,e,n){},dd55:function(t,e,n){},e235:function(t,e,n){t.exports=n.p+"img/arrow-icon.6ada2e8c.svg"},ea7b:function(t,e,n){},edab:function(t,e,n){},fa3a:function(t,e,n){},fe76:function(t,e,n){}});
//# sourceMappingURL=app.379a8325.js.map