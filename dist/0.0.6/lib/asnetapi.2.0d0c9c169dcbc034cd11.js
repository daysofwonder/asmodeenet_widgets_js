webpackJsonp([2],{"12/L":function(e,t){var a=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:a)(e)}},"1tVq":function(e,t,a){var n=a("12/L"),r=Math.max,i=Math.min;e.exports=function(e,t){return(e=n(e))<0?r(e+t,0):i(e,t)}},"2hHA":function(e,t,a){var n=a("GJ5T"),r=a("W9uE").document,i=n(r)&&n(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},"5cRM":function(e,t,a){(e.exports=a("Vmy+")(!1)).push([e.i,"nav[data-v-6ff086dc]{text-align:center}nav .pagination[data-v-6ff086dc]{font-size:.9em}nav .pagination[data-v-6ff086dc] li.next a,nav .pagination[data-v-6ff086dc] li.previous a{cursor:pointer}nav .pagination[data-v-6ff086dc] li.next.disabled a,nav .pagination[data-v-6ff086dc] li.previous.disabled a{cursor:not-allowed}nav .pagination[data-v-6ff086dc] li a{color:#55387c}nav .pagination[data-v-6ff086dc] li.active a{color:#fff}@media (max-width:991.98px){nav .pagination[data-v-6ff086dc] .pagination a{padding:4px 9px}}@media (max-width:449.98px){nav .pagination[data-v-6ff086dc] .pagination{font-size:.8em;margin:1em 0}nav .pagination[data-v-6ff086dc] .pagination a{padding:3px 6px}}@media (max-width:359.98px){nav .pagination[data-v-6ff086dc] a,nav .pagination[data-v-6ff086dc] span{padding:3px 6px}}",""])},"6xwZ":function(e,t,a){var n=a("5cRM");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("pFN4").default)("079f7e18",n,!0,{})},"6zZR":function(e,t,a){var n=a("WsAY"),r=a("W9uE"),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:a("q9/b")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"7Mi/":function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return i});var n=a("XQ85");const r=new n.a;r.maxAge=6e5;const i=new n.a;i.maxAge=864e5},"9rUb":function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"DPF+":function(e,t,a){"use strict";var n=a("vdRI"),r=function(e){delete e.target.onerror,e.target.src="https://cdn.daysofwonder.com/images/avatars/avatar-neutral.jpg"},i=function(e){delete e.target.onerror,delete e.target.src},s=function(e){delete e.target.onerror,delete e.target.src},o=function(e){delete e.target.onerror,delete e.target.src};var c=function(){const e=/^({(-?\d+(\.\d+)?\s*(,?\s*(-?\d+(\.\d+)?))*)})\s(.+)$/,t=/^(([[\]])\s*(-Inf|-?\d+(\.\d+)?)\s*,\s*(\+?Inf|-?\d+(\.\d+)?)\s*([[\]]))\s(.+)$/;function a(e){return"-Inf"===e?-1/0:"+Inf"===e||"Inf"===e?1/0:parseFloat(e)}let n=function(n,r){r=r.trim();let i=e.exec(r)||t.exec(r);if(!i)return console.error('"'+r+'" is not a valid interval.'),!1;if(i[3]){let e=a(i[3]),t=a(i[5]);return("["===i[2]?n>=e:n>e)&&("]"===i[7]?n<=t:n<t)}{let e=i[2].split(",");for(let t=0;t<e.length;t++){let a=e[t];if(n===parseInt(a))return!0}}return!1},r=function(e,t){switch("pt_BR"===t&&(t="xbr"),t.length>3&&(t=t.split("_")[0]),t){case"az":case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"tr":case"vi":case"zh":return 0;case"af":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"oc":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"ur":case"zu":return 1===e?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"hy":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return 0===e||1===e?0:1;case"be":case"bs":case"hr":case"ru":case"sh":case"sr":case"uk":return 1===e&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2;case"cs":case"sk":return 1===e?0:e>=2&&e<=4?1:2;case"ga":return 1===e?0:2===e?1:2;case"lt":return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2;case"sl":return e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3;case"mk":return e%10==1?0:1;case"mt":return 1===e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3;case"lv":return 0===e?0:e%10==1&&e%100!=11?1:2;case"pl":return 1===e?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:2;case"cy":return 1===e?0:2===e?1:8===e||11===e?2:3;case"ro":return 1===e?0:0===e||e%100>0&&e%100<20?1:2;case"ar":return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11&&e%100<=99?4:5;default:return 0}},i=function(e,t){return t&&Object.keys(t).forEach(function(a){e=e.replace(a,t[a])}),e};return{getTrans:function(e,t,a,n){if(void 0!==e[a]){return i(e[a],n)}return""},getTransChoice:function(a,s,o,c,u){if(void 0!==a[c]){let l=function(a,i,s){let o,c=a.split("|"),u={},l=[];c.forEach(function(a){a=a.replace("||","|").trim(),(o=e.exec(a))?u[o[0]]=o:(o=t.exec(a))?u[o[0]]=o:(o=/^\w+:\s*(.*?)$/.exec(a))?l.push(o[1]):l.push(a)});let f=Object.keys(u);for(let e=0;e<f.length;e++){let t=f[e];if(n(i,t))return u[t][u[t].length-1]}let d=r(i,s);return void 0===l[d]?1===c.length&&void 0!==l[0]?l[0]:(console.error('Unable to choose a translation for "'+a+'" with locale "'+s+'" for value "'+i+'". Double check that this translation has the correct plural options (e.g. "There is one apple|There are %%count%% apples").'),""):l[d]}(a[c],o,s);return i(l,u)}return""}}}();const u={keyforge:"https://www.keyforgegame.com/",xwing:"https://squadbuilder.fantasyflightgames.com/"},l={props:["config"],computed:{title(){return this.getTrans(this.$options.name+"_title")},lang(){return this.$moment.locale()!==n.a.getters.globalOptions.lang&&this.$moment.locale(n.a.getters.globalOptions.lang),n.a.getters.globalOptions.lang},gameIconError:()=>i,avatarError:()=>r,achievementError:()=>s,genericImageError:()=>o,isLogged:()=>!n.a.getters.unloggedMode,isIn3rdParty:()=>!!n.a.getters.globalOptions.in_3rd_party,baseHost:()=>n.a.getters.globalOptions.host?n.a.getters.globalOptions.host.replace(/\/$/,""):"",baseISImageHost:()=>"https://ncdn.asmodee.net/is/img/"},methods:{getTrans(e,t){return c.getTrans(this.config.trans,this.lang,e,t)},getTransChoice(e,t,a){return c.getTransChoice(this.config.trans,this.lang,e,t,a)},urlFor(e,t){if(t=t||{},this.config.urls&&this.config.urls[e]){let a=this.config.urls[e];return Object.keys(t).forEach(function(e){a=a.replace(":"+e,t[e])}),/^\/[a-z]{2}\/.*/.exec(a)||(a="/"+this.lang+a),this.baseHost+a}return""},gameUrl(e){return["keyforge","xwing"].includes(e)?u[e]:this.urlFor("game-index",{id:e})},goToGame(e){let t=this.gameUrl(e);return["keyforge","xwing"].includes(e)?window.open(t):this.isIn3rdParty?window.open(t):window.location=t,!1},goToGameRanking(e){let t=this.urlFor("rankings-game",{id:e});this.isIn3rdParty?window.open(t):window.location=t},forceHTTPS:e=>e?e.replace("^http://","https://"):e}};t.a=l},"DVK/":function(e,t){var a={}.hasOwnProperty;e.exports=function(e,t){return a.call(e,t)}},FE40:function(e,t,a){var n=a("ec8k");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("pFN4").default)("7b36e982",n,!0,{})},Fmkg:function(e,t,a){var n=a("DVK/"),r=a("buEK"),i=a("bt/m")(!1),s=a("O5S5")("IE_PROTO");e.exports=function(e,t){var a,o=r(e),c=0,u=[];for(a in o)a!=s&&n(o,a)&&u.push(a);for(;t.length>c;)n(o,a=t[c++])&&(~i(u,a)||u.push(a));return u}},GJ5T:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},HuYH:function(e,t,a){var n=a("p25U");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},JL8o:function(e,t,a){var n=a("12/L"),r=Math.min;e.exports=function(e){return e>0?r(n(e),9007199254740991):0}},KLhA:function(e,t,a){var n=a("SZ/P"),r=a("WsAY"),i=a("gHxa");e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],s={};s[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",s)}},KktU:function(e,t,a){var n=a("qQMF"),r=a("Te4x");e.exports=a("V5XO")?function(e,t,a){return n.f(e,t,r(1,a))}:function(e,t,a){return e[t]=a,e}},MgXD:function(e,t,a){"use strict";var n=a("wYgs");t.a=((e,t,a,r)=>{t=t||1,r=r||{},a.limit=a.limit||10,a.offset=(t-1)*a.limit,r.total&&a.offset>r.total&&(a.offset=r.total);let i={params:a};return r.cache&&(i.cache=r.cache),n.a.http.get(n.a.convert(e),i)})},O5S5:function(e,t,a){var n=a("6zZR")("keys"),r=a("XQtG");e.exports=function(e){return n[e]||(n[e]=r(e))}},P3Sh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("zX9P"),r=a.n(n),i=a("wYgs"),s=a("uj17"),o=a.n(s),c=a("hYtS"),u=a("wZkS"),l=a("DPF+"),f=a("g/V+"),d={name:"game-histories",props:["config"],mixins:[l.a],components:{pagination:c.a,"font-awesome-icon":f.FontAwesomeIcon},computed:{gameId:function(){return this.config.game.id},gameName:function(){return this.config.game.name},pageCount:function(){return Math.ceil(this.itemCount/this.itemsPerPage)},userProfileName:function(){return this.publicDisplay?this.config.userProfile.login:null},userProfileId:function(){return this.config.userProfile?this.config.userProfile.id:"me"},userProfileAvatar:function(){return this.publicDisplay?this.config.userProfile.avatar:null},publicDisplay:function(){return"me"!==this.userProfileId},search:function(){var e="";return this.publicDisplay&&(e="?u="+this.userProfileId),this.currentFilter&&(e+=""===e?"?":"&"),e},aggregateSummaries:function(){if(null===this.summaries)return[];var e={},t=this;r()(this.summaries).forEach(function(a){"TT"===t.gameId&&["TT_2p","TT_mp"].includes(a)||r()(t.summaries[a]).forEach(function(n){void 0===e[n]&&(e[n]={year:n,count:0,count_finished:0}),e[n].count+=t.summaries[a][n].count,e[n].count_finished+=t.summaries[a][n].count_finished})});var a=[];return r()(e).sort().reverse().map(function(t){a.push(e[t])}),a}},methods:{initPage:function(){var e=this,t=this;o.a.all([u.a.onlineGames(this.userProfileId,this.gameId),this.prepareNavigate(this.currentPage)]).then(o.a.spread(function(a,n){t.summaries=a.data.summaries,t.treatNavigate(n,e.currentPage)}))},prepareNavigate:function(e){var t=[this.userProfileId,this.gameId,this.currentFilter?"ended":"ended,disconnected"],a=null;return"lastgames"===this.currentPeriod?a=u.a.lastgames:(a=u.a.history,t.push(this.currentPeriod)),t.push(e),t.push(this.itemsPerPage),this.histories=null,this.itemCount=null,a.apply(void 0,t)},treatNavigate:function(e,t){this.histories=e.data.games,this.itemCount=e.data.total;var a=Math.max(Math.min(t,this.pageCount),1);a===t?this.currentPage=t:this.navigate(a)},navigate:function(e){var t=this;this.prepareNavigate(e).then(function(a){return t.treatNavigate(a,e)})},switchPeriod:function(e){this.currentPeriod="lastgames"!==e?parseInt(e):e,this.navigate(1)},filterAborted:function(){this.currentFilter=!this.currentFilter,this.navigate(1)},getVariant:function(e){switch(this.gameId){case"TT":if(e)return'<img src="https://ncdn1.daysofwonder.com/fr/img/variant_'+e+'.gif" title="'+e+'" alt="'+e+'"/>';break;case"MM":if(!e)return"online"}return e||"&nbsp;"}},watch:{currentPage:function(e,t){var a=window.location.pathname.split("/");a[a.length-1]===""+t&&t!==this.currentPeriode&&a.pop(),a.push(e),window.history.replaceState({},"",a.join("/")+this.search+(this.currentFilter?"noaborted=1":""))},currentPeriod:function(e,t){var a=window.location.pathname.split("/");"lastgames"===t&&(a[a.length-1]===""+this.currentPage?(a[a.length]=""+this.currentPage,a[a.length-2]="lastgames"):(a[a.length]="lastgames",a[a.length]=""+this.currentPage));var n=2;a[a.length-n].match(/^20\d\d$/)||a[a.length-1].match(/^20\d\d$/)&&(n=1),"lastgames"!==e?a[a.length-n]=e:(a[a.length-n]=this.currentPage,a.pop()),window.history.replaceState({},"",a.join("/")+this.search+(this.currentFilter?"?noaborted=1":""))},currentFilter:function(e,t){e?window.history.replaceState({},"",window.location.pathname+this.search+"noaborted=1"):window.history.replaceState({},"",window.location.pathname+this.search)}},mounted:function(){i.a.ifInitialized(this.initPage)},data:function(){return{summaries:null,histories:null,itemsPerPage:20,currentPage:this.config.page,itemCount:0,currentPeriod:this.config.period||"lastgames",currentFilter:this.config.filter||null}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"histories"}},[a("keep-alive",[a("div",{staticClass:"table-responsive"},[a("caption",{staticClass:"history_headers"},[e.publicDisplay?a("img",{staticClass:"user-public-avatar",attrs:{src:e.userProfileAvatar},on:{error:e.avatarError}}):e._e(),e._v(" "),a("h3",{domProps:{innerHTML:e._s(e.getTrans("history_caption"+(e.publicDisplay?"_public":""),{"%game%":e.gameName,"%login%":e.userProfileName}))}}),a("small",[e._v(e._s(e.getTrans("history_sub_caption"))+" "),a("input",{attrs:{type:"checkbox"},domProps:{checked:e.currentFilter},on:{click:e.filterAborted}})]),a("br"),e._v(" "),a("ul",{staticClass:"periods pagination"},[a("li",{staticClass:"first",class:{active:"lastgames"===e.currentPeriod}},[a("a",{attrs:{href:"#",disabled:"lastgames"===e.currentPeriod},on:{click:function(t){t.preventDefault(),e.switchPeriod("lastgames")}}},[e._v(e._s(e.getTrans("last_15_games")))])]),e._v(" "),e.summaries&&e.aggregateSummaries?e._l(e.aggregateSummaries,function(t){return a("li",{key:t.year,class:{active:e.currentPeriod===parseInt(t.year)}},[a("a",{attrs:{href:"#",disabled:e.currentPeriod===parseInt(t.year)},on:{click:function(a){a.preventDefault(),e.switchPeriod(t.year)}}},[e._v(e._s(t.year)+" ("+e._s(e.currentFilter?t.count_finished:t.count)+")")])])}):e._e()],2)]),e._v(" "),null!==e.histories&&e.histories.length>0?[a("pagination",{attrs:{lang:e.lang,"current-page":e.currentPage,"page-count":e.pageCount,size:e._f("mq")(e.$mq,{xxs:1,md:9,xl:15})},on:{navigate:e.navigate}})]:e._e(),e._v(" "),a("table",{staticClass:"table table-striped"},[null===e.histories?[a("tbody",[a("tr",[a("td",{staticClass:"centercol",attrs:{colspan:"5"}},[a("LoadingComp")],1)])])]:[0===e.histories.length?[a("tbody",[a("tr",[e.summaries?a("td",{staticClass:"centercol",attrs:{colspan:"5"},domProps:{innerHTML:e._s(e.getTrans("history_no_games_on_period"+(e.publicDisplay?"_public":""),{"%login%":e.userProfileName}))}}):a("td",{staticClass:"centercol",attrs:{colspan:"5"},domProps:{innerHTML:e._s(e.getTrans("history_no_games"+(e.publicDisplay?"_public":""),{"%login%":e.userProfileName}))}})])])]:[a("thead",[a("tr",[a("td",[e._v(e._s(e.getTrans("date")))]),e._v(" "),a("td",[e._v(e._s(e.getTrans("score")))]),e._v(" "),a("td",[e._v(e._s(e.getTrans("other_players")))]),e._v(" "),a("td",[e._v(e._s(e.getTrans("variant")))]),e._v(" "),a("td",[e._v(e._s(e.getTrans("ranked_game")))])])]),e._v(" "),a("tbody",e._l(e.histories,function(t){return a("tr",{key:t.id},[a("td",[a("time",{attrs:{"data-timestamp":t.date}},[["xs","xxs"].includes(e.$mq)?[e._v(e._s(e.$moment(t.date).format("L")))]:[e._v(e._s(e.$moment(t.date).format("LL")))]],2)]),e._v(" "),a("td",[a("span",[e._v(e._s(t.score))])]),e._v(" "),a("td",{staticClass:"other_players"},e._l(t.other_players,function(t){return a("span",{key:t.id},[a("a",{attrs:{href:e.urlFor("profile-user",{id:t.id})}},[e._v(e._s(t.login_name))]),e._v(" ("+e._s(t.score)+")")])})),e._v(" "),a("td",[a("span",{domProps:{innerHTML:e._s(e.getVariant(t.variant))}})]),e._v(" "),a("td",[a("span",{staticClass:"ranked-checked"},[t.options.split(",").includes("rated")?a("font-awesome-icon",{attrs:{icon:"check"}}):e._e()],1)])])}))]]],2),e._v(" "),null!==e.histories&&e.histories.length>0?[a("pagination",{attrs:{lang:e.lang,"current-page":e.currentPage,"page-count":e.pageCount,size:e._f("mq")(e.$mq,{xxs:1,md:9,xl:15})},on:{navigate:e.navigate}})]:e._e()],2)])],1)},staticRenderFns:[]};var g=a("mUJo")(d,p,!1,function(e){a("FE40")},"data-v-36e497d2",null);t.default=g.exports},SAmk:function(e,t,a){e.exports=!a("V5XO")&&!a("gHxa")(function(){return 7!=Object.defineProperty(a("2hHA")("div"),"a",{get:function(){return 7}}).a})},"SZ/P":function(e,t,a){var n=a("W9uE"),r=a("WsAY"),i=a("yhwo"),s=a("KktU"),o=a("DVK/"),c=function(e,t,a){var u,l,f,d=e&c.F,p=e&c.G,g=e&c.S,h=e&c.P,v=e&c.B,m=e&c.W,b=p?r:r[t]||(r[t]={}),_=b.prototype,y=p?n:g?n[t]:(n[t]||{}).prototype;for(u in p&&(a=t),a)(l=!d&&y&&void 0!==y[u])&&o(b,u)||(f=l?y[u]:a[u],b[u]=p&&"function"!=typeof y[u]?a[u]:v&&l?i(f,n):m&&y[u]==f?function(e){var t=function(t,a,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,a)}return new e(t,a,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((b.virtual||(b.virtual={}))[u]=f,e&c.R&&_&&!_[u]&&s(_,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},Te4x:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},ToFw:function(e,t,a){var n=a("GJ5T");e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},V5XO:function(e,t,a){e.exports=!a("gHxa")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},W9uE:function(e,t){var a=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},WFAk:function(e,t,a){var n=a("Fmkg"),r=a("9rUb");e.exports=Object.keys||function(e){return n(e,r)}},WsAY:function(e,t){var a=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=a)},XQtG:function(e,t){var a=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++a+n).toString(36))}},"bt/m":function(e,t,a){var n=a("buEK"),r=a("JL8o"),i=a("1tVq");e.exports=function(e){return function(t,a,s){var o,c=n(t),u=r(c.length),l=i(s,u);if(e&&a!=a){for(;u>l;)if((o=c[l++])!=o)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===a)return e||l||0;return!e&&-1}}},buEK:function(e,t,a){var n=a("HuYH"),r=a("v41l");e.exports=function(e){return n(r(e))}},ec8k:function(e,t,a){(e.exports=a("Vmy+")(!1)).push([e.i,"table td.buddy[data-v-36e497d2],table td.buddy_game[data-v-36e497d2],table td.icon[data-v-36e497d2]{width:60px;text-align:center}table td.centercol[data-v-36e497d2]{text-align:center}.table-responsive[data-v-36e497d2]{border-width:0}.table-responsive a[data-v-36e497d2]{color:#55387c}h2[data-v-36e497d2]{color:#831fdb;font-size:1.25em;margin-top:0}h4[data-v-36e497d2]{color:#831fdb;font-size:1em;margin-top:0}h3[data-v-36e497d2]{color:#55387c;font-size:1.3em;margin-top:10px;margin-bottom:10px}#histories .user-public-avatar[data-v-36e497d2]{float:left;display:block;width:100px;height:100px;margin:0 auto 10px;border-radius:50%;background-color:#fff;z-index:1001}@media (max-width:767.98px){#histories .user-public-avatar[data-v-36e497d2]{width:40px;height:40px;margin:0 auto 5px}}#histories .history_headers[data-v-36e497d2]{display:block;text-align:center;width:100%}#histories .history_headers .periods[data-v-36e497d2]{display:inline-flex;flex-wrap:wrap;justify-content:center}#histories .history_headers .periods a[data-v-36e497d2]{margin-left:10px;margin-right:10px;white-space:nowrap}#histories .history_headers .active a[data-v-36e497d2]{color:#fff}#histories table[data-v-36e497d2]{text-align:center}#histories table .other_players[data-v-36e497d2]{display:flex;flex-wrap:nowrap;justify-content:space-around}#histories table .ranked-checked[data-v-36e497d2]{color:green}",""])},gHxa:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},hYtS:function(e,t,a){"use strict";var n={props:{lang:String,currentPage:{type:Number,required:!0,validator:function(e){return e>0}},pageCount:{type:Number,required:!0,validator:function(e){return e>=0}},size:{type:Number,required:!1,default:15,validator:function(e){return e%2==1}}},computed:{pageRange:function(){var e=Math.max(1,this.currentPage-Math.floor(this.size/2));return e=Math.max(1,Math.min(e,this.pageCount-this.size+1)),Array.apply(null,{length:Math.min(this.pageCount,this.size)}).map(function(t,a){return a+e})}},methods:{navigate:function(e){e>this.pageCount||e===this.currentPage||e<=0||this.$emit("navigate",e)}},data:function(){return{}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.pageCount>1?a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"first",class:{disabled:1===e.currentPage}},[a("a",{attrs:{href:"#",disabled:1===e.currentPage},on:{click:function(t){t.preventDefault(),e.navigate(1)}}},[e._v("<<")])]),e._v(" "),1===e.size||e.pageRange.length>=3?a("li",{staticClass:"previous",class:{disabled:1===e.currentPage}},[a("a",{attrs:{href:"#",disabled:1===e.currentPage},on:{click:function(t){t.preventDefault(),e.navigate(e.currentPage-1)}}},[e._v("<")])]):e._e(),e._v(" "),1===e.size?[a("li",{staticClass:"disabled"},[a("a",{attrs:{disabled:"1"}},[["xs","xxs"].includes(e.$mq)?e._e():[e._v(e._s("de"===e.lang?"Seite":"Page")+" ")],e._v(e._s(e.currentPage)+" "+e._s("fr"===e.lang?"sur":"de"===e.lang?"von":"of")+" "+e._s(e.pageCount))],2)])]:e._l(e.pageRange,function(t){return a("li",{key:t,class:{active:t===e.currentPage},attrs:{"data-page":t}},[a("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.navigate(t)}}},[e._v(e._s(t))])])}),e._v(" "),1===e.size||e.pageRange.length>=3?a("li",{staticClass:"next",class:{disabled:e.currentPage+1>e.pageCount}},[a("a",{attrs:{href:"#",disabled:e.currentPage+1>e.pageCount},on:{click:function(t){t.preventDefault(),e.navigate(e.currentPage+1)}}},[e._v(">")])]):e._e(),e._v(" "),a("li",{staticClass:"last",class:{disabled:e.currentPage>=e.pageCount}},[a("a",{attrs:{href:"#",disabled:e.currentPage>=e.pageCount},on:{click:function(t){t.preventDefault(),e.navigate(e.pageCount)}}},[e._v(">>")])])],2)]):e._e()},staticRenderFns:[]};var i=a("mUJo")(n,r,!1,function(e){a("6xwZ")},"data-v-6ff086dc",null);t.a=i.exports},kZlZ:function(e,t,a){a("mxWh"),e.exports=a("WsAY").Object.keys},mxWh:function(e,t,a){var n=a("vNUB"),r=a("WFAk");a("KLhA")("keys",function(){return function(e){return r(n(e))}})},"p0o+":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},p25U:function(e,t){var a={}.toString;e.exports=function(e){return a.call(e).slice(8,-1)}},"q9/b":function(e,t){e.exports=!0},qQMF:function(e,t,a){var n=a("ToFw"),r=a("SAmk"),i=a("scWE"),s=Object.defineProperty;t.f=a("V5XO")?Object.defineProperty:function(e,t,a){if(n(e),t=i(t,!0),n(a),r)try{return s(e,t,a)}catch(e){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(e[t]=a.value),e}},scWE:function(e,t,a){var n=a("GJ5T");e.exports=function(e,t){if(!n(e))return e;var a,r;if(t&&"function"==typeof(a=e.toString)&&!n(r=a.call(e)))return r;if("function"==typeof(a=e.valueOf)&&!n(r=a.call(e)))return r;if(!t&&"function"==typeof(a=e.toString)&&!n(r=a.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},v41l:function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},vNUB:function(e,t,a){var n=a("v41l");e.exports=function(e){return Object(n(e))}},wZkS:function(e,t,a){"use strict";var n=a("wYgs"),r=a("MgXD"),i=a("7Mi/");const s={myAccount:e=>(e=e||!1,n.a.http.get(n.a.convert("/v1/user/me"),{cache:i.b,forceUpdate:e})),details:(e,...t)=>(0===t.length&&(t=["achievements","userapps","nbbuddies","onlinegames"]),n.a.http.get(n.a.convert("/v1/user/"+e+"?extras="+t.join(","),"details"),{cache:i.b})),achievements:e=>(e=e||"me",n.a.http.get(n.a.convert("/v1/user/"+e+"?extras=achievements","achievements"),{cache:i.b})),activities:e=>n.a.http.get(n.a.convert("/v1/user/"+e+"?extras=userapps","activity"),{cache:i.a}),onlineGames:(e,t)=>n.a.http.get(n.a.convert("/v1/user/"+e+"/games/summary"+(t?"/"+t:"")),{cache:i.a}),rank:(e,t)=>n.a.http.get(n.a.convert("/v1/user/"+e+"/rank/"+t),{cache:i.a}),myRank:e=>s.rank("me",e),buddiesCollection:()=>n.a.http.get("/v1/user/me/buddies/collection",{cache:i.b}),addBuddy:e=>n.a.http.post("/v1/user/me/buddies/"+e),removeBuddy:e=>n.a.http.delete("/v1/user/me/buddies/"+e),lastgames:(e,t,a,s,o)=>Object(r.a)(n.a.convert("/v1/user/"+e+"/lastgames/"+t,"lastgames"),s,{limit:o,status:a},{cache:i.b}),history:(e,t,a,s,o,c)=>Object(r.a)(n.a.convert("/v1/user/"+e+"/games/"+t,"history"),o,{limit:c,y:s,status:a,o:0},{cache:i.b})};t.a=s},yhwo:function(e,t,a){var n=a("p0o+");e.exports=function(e,t,a){if(n(e),void 0===t)return e;switch(a){case 1:return function(a){return e.call(t,a)};case 2:return function(a,n){return e.call(t,a,n)};case 3:return function(a,n,r){return e.call(t,a,n,r)}}return function(){return e.apply(t,arguments)}}},zX9P:function(e,t,a){e.exports={default:a("kZlZ"),__esModule:!0}}});
//# sourceMappingURL=asnetapi.2.0d0c9c169dcbc034cd11.js.map