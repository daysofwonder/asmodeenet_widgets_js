webpackJsonp([4,6],{"08n8":function(e,a,t){var n=t("kdWT");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t("pFN4").default)("43555462",n,!0,{})},"2hHA":function(e,a,t){var n=t("GJ5T"),r=t("W9uE").document,i=n(r)&&n(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},"5cRM":function(e,a,t){(e.exports=t("Vmy+")(!1)).push([e.i,"nav[data-v-6ff086dc]{text-align:center}nav .pagination[data-v-6ff086dc]{font-size:.9em}nav .pagination[data-v-6ff086dc] li.next a,nav .pagination[data-v-6ff086dc] li.previous a{cursor:pointer}nav .pagination[data-v-6ff086dc] li.next.disabled a,nav .pagination[data-v-6ff086dc] li.previous.disabled a{cursor:not-allowed}nav .pagination[data-v-6ff086dc] li a{color:#55387c}nav .pagination[data-v-6ff086dc] li.active a{color:#fff}@media (max-width:991.98px){nav .pagination[data-v-6ff086dc] .pagination a{padding:4px 9px}}@media (max-width:449.98px){nav .pagination[data-v-6ff086dc] .pagination{font-size:.8em;margin:1em 0}nav .pagination[data-v-6ff086dc] .pagination a{padding:3px 6px}}@media (max-width:359.98px){nav .pagination[data-v-6ff086dc] a,nav .pagination[data-v-6ff086dc] span{padding:3px 6px}}",""])},"6xwZ":function(e,a,t){var n=t("5cRM");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t("pFN4").default)("079f7e18",n,!0,{})},"7Mi/":function(e,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"b",function(){return i});var n=t("XQ85");const r=new n.a;r.maxAge=6e5;const i=new n.a;i.maxAge=864e5},ByyM:function(e,a,t){"use strict";var n=t("wYgs"),r=t("7Mi/");const i={all:()=>n.a.http.get(n.a.convert("/v1/games"),{cache:r.b}),rankables:()=>n.a.http.get(n.a.convert("/v1/game/rankables"),{cache:r.b}),achievements:e=>n.a.http.get(n.a.convert("/v1/game/"+e+"/achievements?limit=200"),{cache:r.b}),crosspromo:(e,a)=>n.a.http.get(n.a.convert("/v1/game/"+e+"/product/"+a),{cache:r.b})};a.a=i},C6gt:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("rd7B"),r=t.n(n),i=t("wYgs"),s=t("ByyM"),o=t("wZkS"),c={name:"my-ranking",mixins:[t("DPF+").a],props:["game"],computed:{minGames:function(){return 20},progress:function(){return Math.floor(100*this.rank.nbgames/20)},gameId:function(){return this.game||this.config.game_id},inExpandList:function(){return this.config.expandedlist||!1},displayChevron:function(){return void 0===this.config.chevron||this.config.chevron},displayBigSize:function(){return this.config.list_big||!1},activateShowMe:function(){return this.config.activate_show_me||!1},userId:function(){return this.config.userId||"me"},karma:function(){if(null===this.rank.karma)return"-";return"&bull;".repeat(Math.min(5,r()(this.rank.karma/20+1)))},score:function(){return null===this.rank.score?"-":Math.floor(this.rank.score)},gamesPlayedTransKey:function(){return"me"===this.userId?"games_played":"games_played_public"},isTooOldGameToRank:function(){var e=new Date;return e=e.setDate(e.getDate()-15),this.rank.lastgame<e},defaultRankDesc:function(){return this.isTooOldGameToRank&&this.displayBigSize?this.getTrans(this.tooOldGameTrans,{"%login%":this.rank.name}):"-"},tooOldGameTrans:function(){return this.isLogged&&"me"===this.userId?"too_old_game_to_rank":"too_old_game_to_rank_public"},showMeTrans:function(){return this.isLogged&&"me"===this.userId?"show_my_position":"show_position_public"},userQueryPath:function(){return"me"===this.userId?"":"?u="+this.userId}},methods:{myRank:function(){if(this.gameId){var e=this;e.currentRankGame=e.gameId,s.a.rankables().then(function(a){e.isRankable=!!a.data.rankingGames.find(function(a){return a===e.gameId}),e.isRankable?o.a.rank(e.userId,e.gameId).then(function(a){e.rank=a.data.user}).catch(function(a){404===a.response.status&&(e.rank={nbgames:0,rank:null,karma:null,score:0})}):e.rank=null})}},goHistory:function(e){this.isIn3rdParty?window.open(e.target.href):window.location=e.target.href}},mounted:function(){i.a.ifInitialized(this.myRank)},updated:function(){var e=this;this.$nextTick(function(){e.currentRankGame!==e.game&&e.myRank()})},data:function(){return{rank:null,isRankable:null,currentRankGame:this.gameId}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("keep-alive",[(e.isLogged||e.userId)&&e.gameId?t("div",{staticClass:"myranking",attrs:{config:e.config}},[e.isRankable?[e.rank?[e.inExpandList&&e.displayChevron?t("div",{staticClass:"chevron-action"},[t("font-awesome-icon",{attrs:{icon:"chevron-right",size:"3x"}})],1):e._e(),e._v(" "),e.inExpandList?t("li",{class:e.displayBigSize?"bigsize":"smallsize"},[e.rank.name?t("span",[e._v(e._s(e.getTransChoice(e.rank.nbgames||0,e.gamesPlayedTransKey,{"%nb_played_games%":e.rank.nbgames||0,"%login%":e.rank.name})))]):e._e()]):e._e(),e._v(" "),t("li",{staticClass:"score_rank",class:(e.displayBigSize?"bigsize":"smallsize")+" "+(e.rank.nbgames<e.minGames?"hasprogress":"")},[t("span",[e._v(e._s(e.getTrans("my_score")||e.getTrans("score"))+" "),t("b",[e._v(e._s(e.score||"-"))])]),e._v(" \n                "),e.rank.nbgames>=e.minGames?[t("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:{content:this.getTrans(e.tooOldGameTrans,{"%login%":e.rank.name}),visible:!e.displayBigSize},expression:"{content: this.getTrans(tooOldGameTrans, {'%login%': rank.name}), visible: !displayBigSize}",modifiers:{auto:!0}}]},[e._v(" - "+e._s("me"==e.userId?e.getTrans("my_rank"):e.getTrans("rank"))+" "),t("b",[e._v(e._s(e.rank.rank||e.defaultRankDesc))]),e._v(" "),e.rank.rank<=3&&null!=e.rank.rank?t("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:e.getTrans("on_podium"),expression:"getTrans('on_podium')",modifiers:{auto:!0}}],staticClass:"fanet fanet-stack anet-ranked"}):e._e()]),e._v(" \n                "),e.activateShowMe&&e.isLogged&&"me"==e.userId&&null!=e.rank.rank?t("span",{staticClass:"btn btn-primary",on:{click:function(a){e.$emit("show-my-rank",e.rank.rank)}}},[e._v(e._s(e.getTrans(e.showMeTrans,{"%login%":e.rank.name})))]):e._e()]:[t("div",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:{content:e.getTrans("missing_games",{"%nbgames%":e.minGames-(e.rank.nbgames||0)})},expression:"{content: getTrans('missing_games', {'%nbgames%': (minGames - (rank.nbgames || 0))})}",modifiers:{auto:!0}}],staticClass:"progress"},[t("div",{staticClass:"text-progress"},[e._v(e._s(e.rank.nbgames||0)+"/"+e._s(e.minGames))]),t("div",{staticClass:"progress-bar progress-bar-striped active",style:{width:e.progress+"%"},attrs:{role:"progressbar","aria-valuenow":e.progress,"aria-valuemin":"0","aria-valuemax":"100"}})])]],2),e._v(" "),e.inExpandList?t("li",{class:"ranked "+(e.displayBigSize?"bigsize":"smallsize")+" "+(e.rank.nbgames<e.minGames?"hasprogress":"")+" "+(e.rank.rank&&e.rank.rank<=3?"onpodium":"")},[t("span",[e._v(e._s(e.getTrans("karma"))+" "),t("span",{staticClass:"karma",domProps:{innerHTML:e._s(e.karma)}}),e._v("\n                      -  ")]),t("span",{staticClass:"history-game"},[t("a",{attrs:{href:e.urlFor("history-game",{id:e.gameId})+e.userQueryPath},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),e.goHistory(a)}}},[e._v(e._s(e.getTrans("game_history_link")))])])]):e._e(),e._v(" "),e.inExpandList&&e.displayBigSize?t("li",{staticClass:"bigsize"},[t("span",[e._v(e._s(e.getTrans("latest_game"))),t("time",{attrs:{"data-timestamp":e.rank.lastgame}},[["xs","xxs"].includes(e.$mq)?[e._v(e._s(e.$moment.unix(e.rank.lastgame).format("L HH:mm")))]:[e._v(e._s(e.$moment.unix(e.rank.lastgame).format("LLLL")))]],2)])]):e._e()]:[e.inExpandList?[e.inExpandList&&e.displayChevron?t("div",{staticClass:"chevron-action"},[t("font-awesome-icon",{attrs:{icon:"chevron-right",size:"3x"}})],1):e._e(),e._v(" "),t("li",{class:e.displayBigSize?"bigsize":"smallsize"},[t("span",[e._v(e._s(e.getTransChoice(0,e.gamesPlayedTransKey,{"%nb_played_games%":"-"})))])]),e._v(" "),t("li",{class:e.displayBigSize?"bigsize":"smallsize"},[t("span",[e._v(e._s(e.getTrans("score"))+" -")])]),e._v(" "),t("li",{class:"unranked "+(e.displayBigSize?"bigsize":"smallsize")},[t("span",[e._v(e._s(e.getTrans("karma"))+" -")])])]:e._e()]]:e._e()],2):e._e()])},staticRenderFns:[]};var u=t("mUJo")(c,l,!1,function(e){t("U7rh")},"data-v-1eff03a0",null);a.default=u.exports},"DPF+":function(e,a,t){"use strict";var n=t("vdRI"),r=function(e){delete e.target.onerror,e.target.src="https://cdn.daysofwonder.com/images/avatars/avatar-neutral.jpg"},i=function(e){delete e.target.onerror,delete e.target.src},s=function(e){delete e.target.onerror,delete e.target.src},o=function(e){delete e.target.onerror,delete e.target.src};var c=function(){const e=/^({(-?\d+(\.\d+)?\s*(,?\s*(-?\d+(\.\d+)?))*)})\s(.+)$/,a=/^(([[\]])\s*(-Inf|-?\d+(\.\d+)?)\s*,\s*(\+?Inf|-?\d+(\.\d+)?)\s*([[\]]))\s(.+)$/;function t(e){return"-Inf"===e?-1/0:"+Inf"===e||"Inf"===e?1/0:parseFloat(e)}let n=function(n,r){r=r.trim();let i=e.exec(r)||a.exec(r);if(!i)return console.error('"'+r+'" is not a valid interval.'),!1;if(i[3]){let e=t(i[3]),a=t(i[5]);return("["===i[2]?n>=e:n>e)&&("]"===i[7]?n<=a:n<a)}{let e=i[2].split(",");for(let a=0;a<e.length;a++){let t=e[a];if(n===parseInt(t))return!0}}return!1},r=function(e,a){switch("pt_BR"===a&&(a="xbr"),a.length>3&&(a=a.split("_")[0]),a){case"az":case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"tr":case"vi":case"zh":return 0;case"af":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"oc":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"ur":case"zu":return 1===e?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"hy":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return 0===e||1===e?0:1;case"be":case"bs":case"hr":case"ru":case"sh":case"sr":case"uk":return 1===e&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2;case"cs":case"sk":return 1===e?0:e>=2&&e<=4?1:2;case"ga":return 1===e?0:2===e?1:2;case"lt":return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2;case"sl":return e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3;case"mk":return e%10==1?0:1;case"mt":return 1===e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3;case"lv":return 0===e?0:e%10==1&&e%100!=11?1:2;case"pl":return 1===e?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:2;case"cy":return 1===e?0:2===e?1:8===e||11===e?2:3;case"ro":return 1===e?0:0===e||e%100>0&&e%100<20?1:2;case"ar":return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11&&e%100<=99?4:5;default:return 0}},i=function(e,a){return a&&Object.keys(a).forEach(function(t){e=e.replace(t,a[t])}),e};return{getTrans:function(e,a,t,n){if(void 0!==e[t]){return i(e[t],n)}return""},getTransChoice:function(t,s,o,c,l){if(void 0!==t[c]){let u=function(t,i,s){let o,c=t.split("|"),l={},u=[];c.forEach(function(t){t=t.replace("||","|").trim(),(o=e.exec(t))?l[o[0]]=o:(o=a.exec(t))?l[o[0]]=o:(o=/^\w+:\s*(.*?)$/.exec(t))?u.push(o[1]):u.push(t)});let g=Object.keys(l);for(let e=0;e<g.length;e++){let a=g[e];if(n(i,a))return l[a][l[a].length-1]}let d=r(i,s);return void 0===u[d]?1===c.length&&void 0!==u[0]?u[0]:(console.error('Unable to choose a translation for "'+t+'" with locale "'+s+'" for value "'+i+'". Double check that this translation has the correct plural options (e.g. "There is one apple|There are %%count%% apples").'),""):u[d]}(t[c],o,s);return i(u,l)}return""}}}();const l={keyforge:"https://www.keyforgegame.com/",xwing:"https://squadbuilder.fantasyflightgames.com/"},u={props:["config"],computed:{title(){return this.getTrans(this.$options.name+"_title")},lang(){return this.$moment.locale()!==n.a.getters.globalOptions.lang&&this.$moment.locale(n.a.getters.globalOptions.lang),n.a.getters.globalOptions.lang},gameIconError:()=>i,avatarError:()=>r,achievementError:()=>s,genericImageError:()=>o,isLogged:()=>!n.a.getters.unloggedMode,isIn3rdParty:()=>!!n.a.getters.globalOptions.in_3rd_party,baseHost:()=>n.a.getters.globalOptions.host?n.a.getters.globalOptions.host.replace(/\/$/,""):"",baseISImageHost:()=>"https://ncdn.asmodee.net/is/img/"},methods:{getTrans(e,a){return c.getTrans(this.config.trans,this.lang,e,a)},getTransChoice(e,a,t){return c.getTransChoice(this.config.trans,this.lang,e,a,t)},urlFor(e,a){if(a=a||{},this.config.urls&&this.config.urls[e]){let t=this.config.urls[e];return Object.keys(a).forEach(function(e){t=t.replace(":"+e,a[e])}),/^\/[a-z]{2}\/.*/.exec(t)||(t="/"+this.lang+t),this.baseHost+t}return""},gameUrl(e){return["keyforge","xwing"].includes(e)?l[e]:this.urlFor("game-index",{id:e})},goToGame(e){let a=this.gameUrl(e);return["keyforge","xwing"].includes(e)?window.open(a):this.isIn3rdParty?window.open(a):window.location=a,!1},goToGameRanking(e){let a=this.urlFor("rankings-game",{id:e});this.isIn3rdParty?window.open(a):window.location=a},forceHTTPS:e=>e?e.replace("^http://","https://"):e}};a.a=u},"DVK/":function(e,a){var t={}.hasOwnProperty;e.exports=function(e,a){return t.call(e,a)}},EEus:function(e,a,t){(a=e.exports=t("Vmy+")(!1)).i(t("6Gtg"),""),a.push([e.i,".progress[data-v-1eff03a0]{display:inline-table;width:200px}.progress .text-progress[data-v-1eff03a0]{color:#ff18fb;float:left;text-align:center;width:100%}.progress .progress-bar[data-v-1eff03a0]{background-color:#55387c;float:none}@media (max-width:767.98px){.myranking .progress[data-v-1eff03a0]{width:100px}}@media (max-width:359.98px){.myranking .progress[data-v-1eff03a0]{width:50px}}.h-tooltip.vue-tooltip[data-v-1eff03a0]{background-color:red}.h-tooltip.vue-tooltip .tooltip-content[data-v-1eff03a0]{font-size:.9em}@media (max-width:767.98px){.vue-tooltip .tooltip-content[data-v-1eff03a0]{font-size:.8em}}.myranking[data-v-1eff03a0]{position:relative;top:5px}.myranking[data-v-1eff03a0] .fanet{color:#831fdb}.myranking[data-v-1eff03a0] li{list-style:none;text-decoration:none}.myranking[data-v-1eff03a0] li.smallsize{font-size:.9em}.myranking[data-v-1eff03a0] li.smallsize.hasprogress{height:17px;position:relative;top:-4px}.myranking[data-v-1eff03a0] li.smallsize span{top:-5px}.myranking[data-v-1eff03a0] li.smallsize span.fanet.anet-ranked{height:21px}.myranking[data-v-1eff03a0] li.smallsize:nth-of-type(3):not(.unranked) span{top:-10px}.myranking[data-v-1eff03a0] li.smallsize:nth-of-type(3):not(.unranked) span.karma{top:0}.myranking[data-v-1eff03a0] li.bigsize:nth-of-type(2){height:30px}.myranking[data-v-1eff03a0] li.bigsize:nth-of-type(2):not(.hasprogress) span{position:relative;top:4px}.myranking[data-v-1eff03a0] li.bigsize:nth-of-type(2) span.fanet.anet-ranked{height:21px;top:-10px}.myranking[data-v-1eff03a0] li.bigsize:nth-of-type(3){height:30px}.myranking[data-v-1eff03a0] li.bigsize:nth-of-type(3) span.fanet.anet-ranked{height:21px;top:-10px}.myranking[data-v-1eff03a0] li.bigsize .progress{position:relative;top:4px}.myranking[data-v-1eff03a0] li.score_rank span b{color:#831fdb}.myranking[data-v-1eff03a0] li.ranked span.karma{font-size:2em;line-height:.5em;vertical-align:middle}.myranking[data-v-1eff03a0] li.ranked span.history-game:hover{background-color:#831fdb}.myranking[data-v-1eff03a0] li.ranked span.history-game:hover a{color:#fff}.myranking[data-v-1eff03a0] li.ranked span.history-game a{text-decoration:none;color:#831fdb}.myranking[data-v-1eff03a0] span{position:relative;top:0}.myranking[data-v-1eff03a0] span.fanet{top:-4px}.myranking[data-v-1eff03a0] .clickable:hover{background-color:#d3d3d3;cursor:pointer}.myranking.unclickable[data-v-1eff03a0] a,.myranking[data-v-1eff03a0] a.unclickable{cursor:default;pointer-events:none}.myranking[data-v-1eff03a0] .chevron-action{float:right;height:50px;position:relative;text-align:center;bottom:20px;vertical-align:middle}.myranking[data-v-1eff03a0] .chevron-action .fa-chevron-right{position:relative;top:15px;color:#d3d3d3;font-weight:700}.myranking[data-v-1eff03a0] :hover>.chevron-action .fa-chevron-right{color:#fff}.grid-activities .activity .myranking li.ranked span.history-game a[data-v-1eff03a0],.panel .panel-body .row .col-content ul .myranking li.ranked span.history-game a[data-v-1eff03a0]{color:#831fdb}.grid-activities .activity .myranking li.ranked span.history-game:hover a[data-v-1eff03a0],.panel .panel-body .row .col-content ul .myranking li.ranked span.history-game:hover a[data-v-1eff03a0]{color:#fff}",""])},"FtF+":function(e,a,t){var n=t("SZ/P");n(n.S,"Math",{trunc:function(e){return(e>0?Math.floor:Math.ceil)(e)}})},GJ5T:function(e,a){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},KktU:function(e,a,t){var n=t("qQMF"),r=t("Te4x");e.exports=t("V5XO")?function(e,a,t){return n.f(e,a,r(1,t))}:function(e,a,t){return e[a]=t,e}},MgXD:function(e,a,t){"use strict";var n=t("wYgs");a.a=((e,a,t,r)=>{a=a||1,r=r||{},t.limit=t.limit||10,t.offset=(a-1)*t.limit,r.total&&t.offset>r.total&&(t.offset=r.total);let i={params:t};return r.cache&&(i.cache=r.cache),n.a.http.get(n.a.convert(e),i)})},SAmk:function(e,a,t){e.exports=!t("V5XO")&&!t("gHxa")(function(){return 7!=Object.defineProperty(t("2hHA")("div"),"a",{get:function(){return 7}}).a})},"SZ/P":function(e,a,t){var n=t("W9uE"),r=t("WsAY"),i=t("yhwo"),s=t("KktU"),o=t("DVK/"),c=function(e,a,t){var l,u,g,d=e&c.F,f=e&c.G,p=e&c.S,m=e&c.P,v=e&c.B,h=e&c.W,k=f?r:r[a]||(r[a]={}),b=k.prototype,y=f?n:p?n[a]:(n[a]||{}).prototype;for(l in f&&(t=a),t)(u=!d&&y&&void 0!==y[l])&&o(k,l)||(g=u?y[l]:t[l],k[l]=f&&"function"!=typeof y[l]?t[l]:v&&u?i(g,n):h&&y[l]==g?function(e){var a=function(a,t,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(a);case 2:return new e(a,t)}return new e(a,t,n)}return e.apply(this,arguments)};return a.prototype=e.prototype,a}(g):m&&"function"==typeof g?i(Function.call,g):g,m&&((k.virtual||(k.virtual={}))[l]=g,e&c.R&&b&&!b[l]&&s(b,l,g)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},Te4x:function(e,a){e.exports=function(e,a){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:a}}},ToFw:function(e,a,t){var n=t("GJ5T");e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},U7rh:function(e,a,t){var n=t("EEus");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t("pFN4").default)("0cd0eeb9",n,!0,{})},V5XO:function(e,a,t){e.exports=!t("gHxa")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},W9uE:function(e,a){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},WsAY:function(e,a){var t=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t)},gHxa:function(e,a){e.exports=function(e){try{return!!e()}catch(e){return!0}}},hYtS:function(e,a,t){"use strict";var n={props:{lang:String,currentPage:{type:Number,required:!0,validator:function(e){return e>0}},pageCount:{type:Number,required:!0,validator:function(e){return e>=0}},size:{type:Number,required:!1,default:15,validator:function(e){return e%2==1}}},computed:{pageRange:function(){var e=Math.max(1,this.currentPage-Math.floor(this.size/2));return e=Math.max(1,Math.min(e,this.pageCount-this.size+1)),Array.apply(null,{length:Math.min(this.pageCount,this.size)}).map(function(a,t){return t+e})}},methods:{navigate:function(e){e>this.pageCount||e===this.currentPage||e<=0||this.$emit("navigate",e)}},data:function(){return{}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.pageCount>1?t("nav",{attrs:{"aria-label":"Page navigation"}},[t("ul",{staticClass:"pagination"},[t("li",{staticClass:"first",class:{disabled:1===e.currentPage}},[t("a",{attrs:{href:"#",disabled:1===e.currentPage},on:{click:function(a){a.preventDefault(),e.navigate(1)}}},[e._v("<<")])]),e._v(" "),1===e.size||e.pageRange.length>=3?t("li",{staticClass:"previous",class:{disabled:1===e.currentPage}},[t("a",{attrs:{href:"#",disabled:1===e.currentPage},on:{click:function(a){a.preventDefault(),e.navigate(e.currentPage-1)}}},[e._v("<")])]):e._e(),e._v(" "),1===e.size?[t("li",{staticClass:"disabled"},[t("a",{attrs:{disabled:"1"}},[["xs","xxs"].includes(e.$mq)?e._e():[e._v(e._s("de"===e.lang?"Seite":"Page")+" ")],e._v(e._s(e.currentPage)+" "+e._s("fr"===e.lang?"sur":"de"===e.lang?"von":"of")+" "+e._s(e.pageCount))],2)])]:e._l(e.pageRange,function(a){return t("li",{key:a,class:{active:a===e.currentPage},attrs:{"data-page":a}},[t("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.navigate(a)}}},[e._v(e._s(a))])])}),e._v(" "),1===e.size||e.pageRange.length>=3?t("li",{staticClass:"next",class:{disabled:e.currentPage+1>e.pageCount}},[t("a",{attrs:{href:"#",disabled:e.currentPage+1>e.pageCount},on:{click:function(a){a.preventDefault(),e.navigate(e.currentPage+1)}}},[e._v(">")])]):e._e(),e._v(" "),t("li",{staticClass:"last",class:{disabled:e.currentPage>=e.pageCount}},[t("a",{attrs:{href:"#",disabled:e.currentPage>=e.pageCount},on:{click:function(a){a.preventDefault(),e.navigate(e.pageCount)}}},[e._v(">>")])])],2)]):e._e()},staticRenderFns:[]};var i=t("mUJo")(n,r,!1,function(e){t("6xwZ")},"data-v-6ff086dc",null);a.a=i.exports},kdWT:function(e,a,t){(e.exports=t("Vmy+")(!1)).push([e.i,"table td.buddy[data-v-4516eb82],table td.buddy_game[data-v-4516eb82],table td.icon[data-v-4516eb82]{width:60px;text-align:center}table td.centercol[data-v-4516eb82]{text-align:center}.table-responsive[data-v-4516eb82]{border-width:0}.table-responsive a[data-v-4516eb82]{color:#55387c}h2[data-v-4516eb82]{color:#831fdb;font-size:1.25em;margin-top:0}h4[data-v-4516eb82]{color:#831fdb;font-size:1em;margin-top:0}h3[data-v-4516eb82]{color:#55387c;font-size:1.3em;margin-top:10px;margin-bottom:10px}@keyframes blink-data-v-4516eb82{to{background-color:#d9edf7}}#ranking[data-v-4516eb82] table caption{text-align:center}#ranking[data-v-4516eb82] table .highlight{animation-name:blink-data-v-4516eb82;animation-duration:.3s;animation-iteration-count:6}#ranking[data-v-4516eb82] table .highlight td{font-weight:700}",""])},lkW8:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("wYgs"),r=t("vdRI"),i=t("hYtS"),s=t("MgXD"),o=t("7Mi/");var c={established:(e,a,t)=>Object(s.a)(n.a.convert("/v1/game/"+e+"/rank/established","rankings"),a,{limit:t},{cache:o.b})},l=t("DPF+"),u=t("C6gt"),g={name:"ranking",mixins:[l.a],props:["config"],components:{pagination:i.a,"my-ranking":u.default},computed:{pageCount:function(){return Math.ceil(this.itemCount/this.itemsPerPage)}},methods:{navigate:function(e){var a=this,t=this;c.established(this.gameId,e,this.itemsPerPage).then(function(n){t.rankings=n.data.ranks,t.itemCount=n.data.total;var r=Math.max(Math.min(e,a.pageCount),1);r===e?t.currentPage=e:t.navigate(r)})},showMyRank:function(e){this.showMeId=r.a.getters.baseUser.id,this.navigate(Math.ceil(e/this.itemsPerPage))}},updated:function(){var e=this;this.$nextTick(function(){e.showMeId&&e.$refs["rank-"+e.showMeId][0]&&(e.$refs["rank-"+e.showMeId][0].scrollIntoView(!0),setTimeout(function(){e.showMeId=null},2e3))})},watch:{currentPage:function(e,a){var t=window.location.pathname.split("/");null!==t[t.length-1].match(/\d+/)&&t.pop(),t.push(e),window.history.replaceState({},"",t.join("/"))}},mounted:function(){var e=this;n.a.ifInitialized(function(){return e.navigate(e.currentPage)})},data:function(){return{rankings:null,gameId:this.config.game_id,itemsPerPage:20,currentPage:this.config.page,itemCount:0,showMeId:null}}},d={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"ranking"}},[t("keep-alive",[t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-striped"},[t("caption",[t("h3",[e._v(e._s(e.getTrans("rankings_caption")))]),e._v(" "),t("small",[e._v(e._s(e.getTrans("rankings_sub_caption")))]),e._v(" "),e.isLogged?t("my-ranking",{attrs:{game:e.gameId,config:{trans:e.config.trans,list_big:!0,activate_show_me:!0}},on:{"show-my-rank":e.showMyRank}}):e._e(),e._v(" "),t("pagination",{attrs:{lang:e.lang,"current-page":e.currentPage,"page-count":e.pageCount,size:e._f("mq")(e.$mq,{xxs:1,md:9,xl:15})},on:{navigate:e.navigate}})],1),e._v(" "),t("thead",[t("tr",[t("td",[e._v(e._s(e.getTrans("rank")))]),e._v(" "),t("td",[e._v(e._s(e.getTrans("player")))]),e._v(" "),t("td",[e._v(e._s(e.getTrans("score")))]),e._v(" "),t("td",[e._v(e._s(e.getTrans("games_played")))])])]),e._v(" "),t("tbody",[e.rankings?e._l(e.rankings,function(a){return t("tr",{key:a.id,ref:"rank-"+a.id,refInFor:!0,class:{highlight:e.showMeId===a.id},attrs:{id:"rank-"+a.id}},[t("td",[e._v(e._s(a.rank))]),e._v(" "),t("td",[t("a",{attrs:{href:e.urlFor("profile-user",{id:a.id})}},[e._v(e._s(a.name))])]),e._v(" "),t("td",[e._v(e._s(a.score))]),e._v(" "),t("td",[e._v(e._s(a.nbgames))])])}):t("tr",[t("td",{attrs:{colspan:"4"}},[t("LoadingComp")],1)])],2)])])]),e._v(" "),t("pagination",{attrs:{lang:e.lang,"current-page":e.currentPage,"page-count":e.pageCount,size:e._f("mq")(e.$mq,{xxs:1,md:9,xl:15})},on:{navigate:e.navigate}})],1)},staticRenderFns:[]};var f=t("mUJo")(g,d,!1,function(e){t("08n8")},"data-v-4516eb82",null);a.default=f.exports},"p0o+":function(e,a){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},qQMF:function(e,a,t){var n=t("ToFw"),r=t("SAmk"),i=t("scWE"),s=Object.defineProperty;a.f=t("V5XO")?Object.defineProperty:function(e,a,t){if(n(e),a=i(a,!0),n(t),r)try{return s(e,a,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[a]=t.value),e}},rd7B:function(e,a,t){e.exports={default:t("w3AY"),__esModule:!0}},scWE:function(e,a,t){var n=t("GJ5T");e.exports=function(e,a){if(!n(e))return e;var t,r;if(a&&"function"==typeof(t=e.toString)&&!n(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!n(r=t.call(e)))return r;if(!a&&"function"==typeof(t=e.toString)&&!n(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},w3AY:function(e,a,t){t("FtF+"),e.exports=t("WsAY").Math.trunc},wZkS:function(e,a,t){"use strict";var n=t("wYgs"),r=t("MgXD"),i=t("7Mi/");const s={myAccount:e=>(e=e||!1,n.a.http.get(n.a.convert("/v1/user/me"),{cache:i.b,forceUpdate:e})),details:(e,...a)=>(0===a.length&&(a=["achievements","userapps","nbbuddies","onlinegames"]),n.a.http.get(n.a.convert("/v1/user/"+e+"?extras="+a.join(","),"details"),{cache:i.b})),achievements:e=>(e=e||"me",n.a.http.get(n.a.convert("/v1/user/"+e+"?extras=achievements","achievements"),{cache:i.b})),activities:e=>n.a.http.get(n.a.convert("/v1/user/"+e+"?extras=userapps","activity"),{cache:i.a}),onlineGames:(e,a)=>n.a.http.get(n.a.convert("/v1/user/"+e+"/games/summary"+(a?"/"+a:"")),{cache:i.a}),rank:(e,a)=>n.a.http.get(n.a.convert("/v1/user/"+e+"/rank/"+a),{cache:i.a}),myRank:e=>s.rank("me",e),buddiesCollection:()=>n.a.http.get("/v1/user/me/buddies/collection",{cache:i.b}),addBuddy:e=>n.a.http.post("/v1/user/me/buddies/"+e),removeBuddy:e=>n.a.http.delete("/v1/user/me/buddies/"+e),lastgames:(e,a,t,s,o)=>Object(r.a)(n.a.convert("/v1/user/"+e+"/lastgames/"+a,"lastgames"),s,{limit:o,status:t},{cache:i.b}),history:(e,a,t,s,o,c)=>Object(r.a)(n.a.convert("/v1/user/"+e+"/games/"+a,"history"),o,{limit:c,y:s,status:t,o:0},{cache:i.b})};a.a=s},yhwo:function(e,a,t){var n=t("p0o+");e.exports=function(e,a,t){if(n(e),void 0===a)return e;switch(t){case 1:return function(t){return e.call(a,t)};case 2:return function(t,n){return e.call(a,t,n)};case 3:return function(t,n,r){return e.call(a,t,n,r)}}return function(){return e.apply(a,arguments)}}}});
//# sourceMappingURL=asnetapi.4.d498e9cf95eb14c9f51d.js.map