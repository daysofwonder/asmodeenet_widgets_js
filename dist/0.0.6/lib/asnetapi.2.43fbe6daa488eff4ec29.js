webpackJsonp([2],{"12/L":function(t,e){var a=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:a)(t)}},"1tVq":function(t,e,a){var n=a("12/L"),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?r(t+e,0):i(t,e)}},"2hHA":function(t,e,a){var n=a("GJ5T"),r=a("W9uE").document,i=n(r)&&n(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},"5cRM":function(t,e,a){(t.exports=a("Vmy+")(!1)).push([t.i,"nav[data-v-6ff086dc]{text-align:center}nav .pagination[data-v-6ff086dc]{font-size:.9em}nav .pagination[data-v-6ff086dc] li.next a,nav .pagination[data-v-6ff086dc] li.previous a{cursor:pointer}nav .pagination[data-v-6ff086dc] li.next.disabled a,nav .pagination[data-v-6ff086dc] li.previous.disabled a{cursor:not-allowed}nav .pagination[data-v-6ff086dc] li a{color:#55387c}nav .pagination[data-v-6ff086dc] li.active a{color:#fff}@media (max-width:991.98px){nav .pagination[data-v-6ff086dc] .pagination a{padding:4px 9px}}@media (max-width:449.98px){nav .pagination[data-v-6ff086dc] .pagination{font-size:.8em;margin:1em 0}nav .pagination[data-v-6ff086dc] .pagination a{padding:3px 6px}}@media (max-width:359.98px){nav .pagination[data-v-6ff086dc] a,nav .pagination[data-v-6ff086dc] span{padding:3px 6px}}",""])},"6xwZ":function(t,e,a){var n=a("5cRM");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("pFN4").default)("079f7e18",n,!0,{})},"6zZR":function(t,e,a){var n=a("WsAY"),r=a("W9uE"),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:a("q9/b")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"7Mi/":function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"b",function(){return i});var n=a("XQ85");const r=new n.a;r.maxAge=6e5;const i=new n.a;i.maxAge=864e5},"9rUb":function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"DPF+":function(t,e,a){"use strict";var n=a("vdRI"),r=function(t){delete t.target.onerror,t.target.src="https://cdn.daysofwonder.com/images/avatars/avatar-neutral.jpg"},i=function(t){delete t.target.onerror,delete t.target.src},s=function(t){delete t.target.onerror,delete t.target.src},o=function(t){delete t.target.onerror,delete t.target.src};var c=function(){const t=/^({(-?\d+(\.\d+)?\s*(,?\s*(-?\d+(\.\d+)?))*)})\s(.+)$/,e=/^(([[\]])\s*(-Inf|-?\d+(\.\d+)?)\s*,\s*(\+?Inf|-?\d+(\.\d+)?)\s*([[\]]))\s(.+)$/;function a(t){return"-Inf"===t?-1/0:"+Inf"===t||"Inf"===t?1/0:parseFloat(t)}let n=function(n,r){r=r.trim();let i=t.exec(r)||e.exec(r);if(!i)return console.error('"'+r+'" is not a valid interval.'),!1;if(i[3]){let t=a(i[3]),e=a(i[5]);return("["===i[2]?n>=t:n>t)&&("]"===i[7]?n<=e:n<e)}{let t=i[2].split(",");for(let e=0;e<t.length;e++){let a=t[e];if(n===parseInt(a))return!0}}return!1},r=function(t,e){switch("pt_BR"===e&&(e="xbr"),e.length>3&&(e=e.split("_")[0]),e){case"az":case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"tr":case"vi":case"zh":return 0;case"af":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"oc":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"ur":case"zu":return 1===t?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"hy":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return 0===t||1===t?0:1;case"be":case"bs":case"hr":case"ru":case"sh":case"sr":case"uk":return 1===t&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2;case"cs":case"sk":return 1===t?0:t>=2&&t<=4?1:2;case"ga":return 1===t?0:2===t?1:2;case"lt":return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2;case"sl":return t%100==1?0:t%100==2?1:t%100==3||t%100==4?2:3;case"mk":return t%10==1?0:1;case"mt":return 1===t?0:0===t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3;case"lv":return 0===t?0:t%10==1&&t%100!=11?1:2;case"pl":return 1===t?0:t%10>=2&&t%10<=4&&(t%100<12||t%100>14)?1:2;case"cy":return 1===t?0:2===t?1:8===t||11===t?2:3;case"ro":return 1===t?0:0===t||t%100>0&&t%100<20?1:2;case"ar":return 0===t?0:1===t?1:2===t?2:t%100>=3&&t%100<=10?3:t%100>=11&&t%100<=99?4:5;default:return 0}},i=function(t,e){return e&&Object.keys(e).forEach(function(a){t=t.replace(a,e[a])}),t};return{getTrans:function(t,e,a,n){if(void 0!==t[a]){return i(t[a],n)}return""},getTransChoice:function(a,s,o,c,u){if(void 0!==a[c]){let l=function(a,i,s){let o,c=a.split("|"),u={},l=[];c.forEach(function(a){a=a.replace("||","|").trim(),(o=t.exec(a))?u[o[0]]=o:(o=e.exec(a))?u[o[0]]=o:(o=/^\w+:\s*(.*?)$/.exec(a))?l.push(o[1]):l.push(a)});let f=Object.keys(u);for(let t=0;t<f.length;t++){let e=f[t];if(n(i,e))return u[e][u[e].length-1]}let d=r(i,s);return void 0===l[d]?1===c.length&&void 0!==l[0]?l[0]:(console.error('Unable to choose a translation for "'+a+'" with locale "'+s+'" for value "'+i+'". Double check that this translation has the correct plural options (e.g. "There is one apple|There are %%count%% apples").'),""):l[d]}(a[c],o,s);return i(l,u)}return""}}}();const u={props:["config"],computed:{title(){return this.getTrans(this.$options.name+"_title")},lang(){return this.$moment.locale()!==n.a.getters.globalOptions.lang&&this.$moment.locale(n.a.getters.globalOptions.lang),n.a.getters.globalOptions.lang},gameIconError:()=>i,avatarError:()=>r,achievementError:()=>s,genericImageError:()=>o,isLogged:()=>!n.a.getters.unloggedMode,isIn3rdParty:()=>!!n.a.getters.globalOptions.in_3rd_party,baseHost:()=>n.a.getters.globalOptions.host?n.a.getters.globalOptions.host.replace(/\/$/,""):"",baseISImageHost:()=>"https://ncdn.asmodee.net/is/img/"},methods:{getTrans(t,e){return c.getTrans(this.config.trans,this.lang,t,e)},getTransChoice(t,e,a){return c.getTransChoice(this.config.trans,this.lang,t,e,a)},urlFor(t,e){if(e=e||{},this.config.urls&&this.config.urls[t]){let a=this.config.urls[t];return Object.keys(e).forEach(function(t){a=a.replace(":"+t,e[t])}),/^\/[a-z]{2}\/.*/.exec(a)||(a="/"+this.lang+a),this.baseHost+a}return""},goToGame(t){let e=this.urlFor("game-index",{id:t});this.isIn3rdParty?window.open(e):window.location=e},goToGameRanking(t){let e=this.urlFor("rankings-game",{id:t});this.isIn3rdParty?window.open(e):window.location=e},forceHTTPS:t=>t?t.replace("^http://","https://"):t}};e.a=u},"DVK/":function(t,e){var a={}.hasOwnProperty;t.exports=function(t,e){return a.call(t,e)}},FE40:function(t,e,a){var n=a("ec8k");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("pFN4").default)("7b36e982",n,!0,{})},Fmkg:function(t,e,a){var n=a("DVK/"),r=a("buEK"),i=a("bt/m")(!1),s=a("O5S5")("IE_PROTO");t.exports=function(t,e){var a,o=r(t),c=0,u=[];for(a in o)a!=s&&n(o,a)&&u.push(a);for(;e.length>c;)n(o,a=e[c++])&&(~i(u,a)||u.push(a));return u}},GJ5T:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},HuYH:function(t,e,a){var n=a("p25U");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},JL8o:function(t,e,a){var n=a("12/L"),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},KLhA:function(t,e,a){var n=a("SZ/P"),r=a("WsAY"),i=a("gHxa");t.exports=function(t,e){var a=(r.Object||{})[t]||Object[t],s={};s[t]=e(a),n(n.S+n.F*i(function(){a(1)}),"Object",s)}},KktU:function(t,e,a){var n=a("qQMF"),r=a("Te4x");t.exports=a("V5XO")?function(t,e,a){return n.f(t,e,r(1,a))}:function(t,e,a){return t[e]=a,t}},MgXD:function(t,e,a){"use strict";var n=a("wYgs");e.a=((t,e,a,r)=>{e=e||1,r=r||{},a.limit=a.limit||10,a.offset=(e-1)*a.limit,r.total&&a.offset>r.total&&(a.offset=r.total);let i={params:a};return r.cache&&(i.cache=r.cache),n.a.http.get(n.a.convert(t),i)})},O5S5:function(t,e,a){var n=a("6zZR")("keys"),r=a("XQtG");t.exports=function(t){return n[t]||(n[t]=r(t))}},P3Sh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("zX9P"),r=a.n(n),i=a("wYgs"),s=a("uj17"),o=a.n(s),c=a("hYtS"),u=a("wZkS"),l=a("DPF+"),f=a("g/V+"),d={name:"game-histories",props:["config"],mixins:[l.a],components:{pagination:c.a,"font-awesome-icon":f.FontAwesomeIcon},computed:{gameId:function(){return this.config.game.id},gameName:function(){return this.config.game.name},pageCount:function(){return Math.ceil(this.itemCount/this.itemsPerPage)},userProfileName:function(){return this.publicDisplay?this.config.userProfile.login:null},userProfileId:function(){return this.config.userProfile?this.config.userProfile.id:"me"},userProfileAvatar:function(){return this.publicDisplay?this.config.userProfile.avatar:null},publicDisplay:function(){return"me"!==this.userProfileId},search:function(){var t="";return this.publicDisplay&&(t="?u="+this.userProfileId),this.currentFilter&&(t+=""===t?"?":"&"),t},aggregateSummaries:function(){if(null===this.summaries)return[];var t={},e=this;r()(this.summaries).forEach(function(a){"TT"===e.gameId&&["TT_2p","TT_mp"].includes(a)||r()(e.summaries[a]).forEach(function(n){void 0===t[n]&&(t[n]={year:n,count:0,count_finished:0}),t[n].count+=e.summaries[a][n].count,t[n].count_finished+=e.summaries[a][n].count_finished})});var a=[];return r()(t).sort().reverse().map(function(e){a.push(t[e])}),a}},methods:{initPage:function(){var t=this,e=this;o.a.all([u.a.onlineGames(this.userProfileId,this.gameId),this.prepareNavigate(this.currentPage)]).then(o.a.spread(function(a,n){e.summaries=a.data.summaries,e.treatNavigate(n,t.currentPage)}))},prepareNavigate:function(t){var e=[this.userProfileId,this.gameId,this.currentFilter?"ended":"ended,disconnected"],a=null;return"lastgames"===this.currentPeriod?a=u.a.lastgames:(a=u.a.history,e.push(this.currentPeriod)),e.push(t),e.push(this.itemsPerPage),this.histories=null,this.itemCount=null,a.apply(void 0,e)},treatNavigate:function(t,e){this.histories=t.data.games,this.itemCount=t.data.total;var a=Math.max(Math.min(e,this.pageCount),1);a===e?this.currentPage=e:this.navigate(a)},navigate:function(t){var e=this;this.prepareNavigate(t).then(function(a){return e.treatNavigate(a,t)})},switchPeriod:function(t){this.currentPeriod="lastgames"!==t?parseInt(t):t,this.navigate(1)},filterAborted:function(){this.currentFilter=!this.currentFilter,this.navigate(1)},getVariant:function(t){switch(this.gameId){case"TT":if(t)return'<img src="https://ncdn1.daysofwonder.com/fr/img/variant_'+t+'.gif" title="'+t+'" alt="'+t+'"/>';break;case"MM":if(!t)return"online"}return t||"&nbsp;"}},watch:{currentPage:function(t,e){var a=window.location.pathname.split("/");a[a.length-1]===""+e&&e!==this.currentPeriode&&a.pop(),a.push(t),window.history.replaceState({},"",a.join("/")+this.search+(this.currentFilter?"noaborted=1":""))},currentPeriod:function(t,e){var a=window.location.pathname.split("/");"lastgames"===e&&(a[a.length-1]===""+this.currentPage?(a[a.length]=""+this.currentPage,a[a.length-2]="lastgames"):(a[a.length]="lastgames",a[a.length]=""+this.currentPage));var n=2;a[a.length-n].match(/^20\d\d$/)||a[a.length-1].match(/^20\d\d$/)&&(n=1),"lastgames"!==t?a[a.length-n]=t:(a[a.length-n]=this.currentPage,a.pop()),window.history.replaceState({},"",a.join("/")+this.search+(this.currentFilter?"?noaborted=1":""))},currentFilter:function(t,e){t?window.history.replaceState({},"",window.location.pathname+this.search+"noaborted=1"):window.history.replaceState({},"",window.location.pathname+this.search)}},mounted:function(){i.a.ifInitialized(this.initPage)},data:function(){return{summaries:null,histories:null,itemsPerPage:20,currentPage:this.config.page,itemCount:0,currentPeriod:this.config.period||"lastgames",currentFilter:this.config.filter||null}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"histories"}},[a("keep-alive",[a("div",{staticClass:"table-responsive"},[a("caption",{staticClass:"history_headers"},[t.publicDisplay?a("img",{staticClass:"user-public-avatar",attrs:{src:t.userProfileAvatar},on:{error:t.avatarError}}):t._e(),t._v(" "),a("h3",{domProps:{innerHTML:t._s(t.getTrans("history_caption"+(t.publicDisplay?"_public":""),{"%game%":t.gameName,"%login%":t.userProfileName}))}}),a("small",[t._v(t._s(t.getTrans("history_sub_caption"))+" "),a("input",{attrs:{type:"checkbox"},domProps:{checked:t.currentFilter},on:{click:t.filterAborted}})]),a("br"),t._v(" "),a("ul",{staticClass:"periods pagination"},[a("li",{staticClass:"first",class:{active:"lastgames"===t.currentPeriod}},[a("a",{attrs:{href:"#",disabled:"lastgames"===t.currentPeriod},on:{click:function(e){e.preventDefault(),t.switchPeriod("lastgames")}}},[t._v(t._s(t.getTrans("last_15_games")))])]),t._v(" "),t.summaries&&t.aggregateSummaries?t._l(t.aggregateSummaries,function(e){return a("li",{key:e.year,class:{active:t.currentPeriod===parseInt(e.year)}},[a("a",{attrs:{href:"#",disabled:t.currentPeriod===parseInt(e.year)},on:{click:function(a){a.preventDefault(),t.switchPeriod(e.year)}}},[t._v(t._s(e.year)+" ("+t._s(t.currentFilter?e.count_finished:e.count)+")")])])}):t._e()],2)]),t._v(" "),null!==t.histories&&t.histories.length>0?[a("pagination",{attrs:{lang:t.lang,"current-page":t.currentPage,"page-count":t.pageCount,size:t._f("mq")(t.$mq,{xxs:1,md:9,xl:15})},on:{navigate:t.navigate}})]:t._e(),t._v(" "),a("table",{staticClass:"table table-striped"},[null===t.histories?[a("tbody",[a("tr",[a("td",{staticClass:"centercol",attrs:{colspan:"5"}},[a("LoadingComp")],1)])])]:[0===t.histories.length?[a("tbody",[a("tr",[t.summaries?a("td",{staticClass:"centercol",attrs:{colspan:"5"},domProps:{innerHTML:t._s(t.getTrans("history_no_games_on_period"+(t.publicDisplay?"_public":""),{"%login%":t.userProfileName}))}}):a("td",{staticClass:"centercol",attrs:{colspan:"5"},domProps:{innerHTML:t._s(t.getTrans("history_no_games"+(t.publicDisplay?"_public":""),{"%login%":t.userProfileName}))}})])])]:[a("thead",[a("tr",[a("td",[t._v(t._s(t.getTrans("date")))]),t._v(" "),a("td",[t._v(t._s(t.getTrans("score")))]),t._v(" "),a("td",[t._v(t._s(t.getTrans("other_players")))]),t._v(" "),a("td",[t._v(t._s(t.getTrans("variant")))]),t._v(" "),a("td",[t._v(t._s(t.getTrans("ranked_game")))])])]),t._v(" "),a("tbody",t._l(t.histories,function(e){return a("tr",{key:e.id},[a("td",[a("time",{attrs:{"data-timestamp":e.date}},[["xs","xxs"].includes(t.$mq)?[t._v(t._s(t.$moment(e.date).format("L")))]:[t._v(t._s(t.$moment(e.date).format("LL")))]],2)]),t._v(" "),a("td",[a("span",[t._v(t._s(e.score))])]),t._v(" "),a("td",{staticClass:"other_players"},t._l(e.other_players,function(e){return a("span",{key:e.id},[a("a",{attrs:{href:t.urlFor("profile-user",{id:e.id})}},[t._v(t._s(e.login_name))]),t._v(" ("+t._s(e.score)+")")])})),t._v(" "),a("td",[a("span",{domProps:{innerHTML:t._s(t.getVariant(e.variant))}})]),t._v(" "),a("td",[a("span",{staticClass:"ranked-checked"},[e.options.split(",").includes("rated")?a("font-awesome-icon",{attrs:{icon:"check"}}):t._e()],1)])])}))]]],2),t._v(" "),null!==t.histories&&t.histories.length>0?[a("pagination",{attrs:{lang:t.lang,"current-page":t.currentPage,"page-count":t.pageCount,size:t._f("mq")(t.$mq,{xxs:1,md:9,xl:15})},on:{navigate:t.navigate}})]:t._e()],2)])],1)},staticRenderFns:[]};var g=a("mUJo")(d,p,!1,function(t){a("FE40")},"data-v-36e497d2",null);e.default=g.exports},SAmk:function(t,e,a){t.exports=!a("V5XO")&&!a("gHxa")(function(){return 7!=Object.defineProperty(a("2hHA")("div"),"a",{get:function(){return 7}}).a})},"SZ/P":function(t,e,a){var n=a("W9uE"),r=a("WsAY"),i=a("yhwo"),s=a("KktU"),o=a("DVK/"),c=function(t,e,a){var u,l,f,d=t&c.F,p=t&c.G,g=t&c.S,h=t&c.P,v=t&c.B,m=t&c.W,b=p?r:r[e]||(r[e]={}),_=b.prototype,y=p?n:g?n[e]:(n[e]||{}).prototype;for(u in p&&(a=e),a)(l=!d&&y&&void 0!==y[u])&&o(b,u)||(f=l?y[u]:a[u],b[u]=p&&"function"!=typeof y[u]?a[u]:v&&l?i(f,n):m&&y[u]==f?function(t){var e=function(e,a,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,a)}return new t(e,a,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((b.virtual||(b.virtual={}))[u]=f,t&c.R&&_&&!_[u]&&s(_,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},Te4x:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},ToFw:function(t,e,a){var n=a("GJ5T");t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},V5XO:function(t,e,a){t.exports=!a("gHxa")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},W9uE:function(t,e){var a=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},WFAk:function(t,e,a){var n=a("Fmkg"),r=a("9rUb");t.exports=Object.keys||function(t){return n(t,r)}},WsAY:function(t,e){var a=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=a)},XQtG:function(t,e){var a=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++a+n).toString(36))}},"bt/m":function(t,e,a){var n=a("buEK"),r=a("JL8o"),i=a("1tVq");t.exports=function(t){return function(e,a,s){var o,c=n(e),u=r(c.length),l=i(s,u);if(t&&a!=a){for(;u>l;)if((o=c[l++])!=o)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===a)return t||l||0;return!t&&-1}}},buEK:function(t,e,a){var n=a("HuYH"),r=a("v41l");t.exports=function(t){return n(r(t))}},ec8k:function(t,e,a){(t.exports=a("Vmy+")(!1)).push([t.i,"table td.buddy[data-v-36e497d2],table td.buddy_game[data-v-36e497d2],table td.icon[data-v-36e497d2]{width:60px;text-align:center}table td.centercol[data-v-36e497d2]{text-align:center}.table-responsive[data-v-36e497d2]{border-width:0}.table-responsive a[data-v-36e497d2]{color:#55387c}h2[data-v-36e497d2]{color:#831fdb;font-size:1.25em;margin-top:0}h4[data-v-36e497d2]{color:#831fdb;font-size:1em;margin-top:0}h3[data-v-36e497d2]{color:#55387c;font-size:1.3em;margin-top:10px;margin-bottom:10px}#histories .user-public-avatar[data-v-36e497d2]{float:left;display:block;width:100px;height:100px;margin:0 auto 10px;border-radius:50%;background-color:#fff;z-index:1001}@media (max-width:767.98px){#histories .user-public-avatar[data-v-36e497d2]{width:40px;height:40px;margin:0 auto 5px}}#histories .history_headers[data-v-36e497d2]{display:block;text-align:center;width:100%}#histories .history_headers .periods[data-v-36e497d2]{display:inline-flex;flex-wrap:wrap;justify-content:center}#histories .history_headers .periods a[data-v-36e497d2]{margin-left:10px;margin-right:10px;white-space:nowrap}#histories .history_headers .active a[data-v-36e497d2]{color:#fff}#histories table[data-v-36e497d2]{text-align:center}#histories table .other_players[data-v-36e497d2]{display:flex;flex-wrap:nowrap;justify-content:space-around}#histories table .ranked-checked[data-v-36e497d2]{color:green}",""])},gHxa:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},hYtS:function(t,e,a){"use strict";var n={props:{lang:String,currentPage:{type:Number,required:!0,validator:function(t){return t>0}},pageCount:{type:Number,required:!0,validator:function(t){return t>=0}},size:{type:Number,required:!1,default:15,validator:function(t){return t%2==1}}},computed:{pageRange:function(){var t=Math.max(1,this.currentPage-Math.floor(this.size/2));return t=Math.max(1,Math.min(t,this.pageCount-this.size+1)),Array.apply(null,{length:Math.min(this.pageCount,this.size)}).map(function(e,a){return a+t})}},methods:{navigate:function(t){t>this.pageCount||t===this.currentPage||t<=0||this.$emit("navigate",t)}},data:function(){return{}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.pageCount>1?a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"first",class:{disabled:1===t.currentPage}},[a("a",{attrs:{href:"#",disabled:1===t.currentPage},on:{click:function(e){e.preventDefault(),t.navigate(1)}}},[t._v("<<")])]),t._v(" "),1===t.size||t.pageRange.length>=3?a("li",{staticClass:"previous",class:{disabled:1===t.currentPage}},[a("a",{attrs:{href:"#",disabled:1===t.currentPage},on:{click:function(e){e.preventDefault(),t.navigate(t.currentPage-1)}}},[t._v("<")])]):t._e(),t._v(" "),1===t.size?[a("li",{staticClass:"disabled"},[a("a",{attrs:{disabled:"1"}},[["xs","xxs"].includes(t.$mq)?t._e():[t._v(t._s("de"===t.lang?"Seite":"Page")+" ")],t._v(t._s(t.currentPage)+" "+t._s("fr"===t.lang?"sur":"de"===t.lang?"von":"of")+" "+t._s(t.pageCount))],2)])]:t._l(t.pageRange,function(e){return a("li",{key:e,class:{active:e===t.currentPage},attrs:{"data-page":e}},[a("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.navigate(e)}}},[t._v(t._s(e))])])}),t._v(" "),1===t.size||t.pageRange.length>=3?a("li",{staticClass:"next",class:{disabled:t.currentPage+1>t.pageCount}},[a("a",{attrs:{href:"#",disabled:t.currentPage+1>t.pageCount},on:{click:function(e){e.preventDefault(),t.navigate(t.currentPage+1)}}},[t._v(">")])]):t._e(),t._v(" "),a("li",{staticClass:"last",class:{disabled:t.currentPage>=t.pageCount}},[a("a",{attrs:{href:"#",disabled:t.currentPage>=t.pageCount},on:{click:function(e){e.preventDefault(),t.navigate(t.pageCount)}}},[t._v(">>")])])],2)]):t._e()},staticRenderFns:[]};var i=a("mUJo")(n,r,!1,function(t){a("6xwZ")},"data-v-6ff086dc",null);e.a=i.exports},kZlZ:function(t,e,a){a("mxWh"),t.exports=a("WsAY").Object.keys},mxWh:function(t,e,a){var n=a("vNUB"),r=a("WFAk");a("KLhA")("keys",function(){return function(t){return r(n(t))}})},"p0o+":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},p25U:function(t,e){var a={}.toString;t.exports=function(t){return a.call(t).slice(8,-1)}},"q9/b":function(t,e){t.exports=!0},qQMF:function(t,e,a){var n=a("ToFw"),r=a("SAmk"),i=a("scWE"),s=Object.defineProperty;e.f=a("V5XO")?Object.defineProperty:function(t,e,a){if(n(t),e=i(e,!0),n(a),r)try{return s(t,e,a)}catch(t){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(t[e]=a.value),t}},scWE:function(t,e,a){var n=a("GJ5T");t.exports=function(t,e){if(!n(t))return t;var a,r;if(e&&"function"==typeof(a=t.toString)&&!n(r=a.call(t)))return r;if("function"==typeof(a=t.valueOf)&&!n(r=a.call(t)))return r;if(!e&&"function"==typeof(a=t.toString)&&!n(r=a.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},v41l:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},vNUB:function(t,e,a){var n=a("v41l");t.exports=function(t){return Object(n(t))}},wZkS:function(t,e,a){"use strict";var n=a("wYgs"),r=a("MgXD"),i=a("7Mi/");const s={myAccount:t=>(t=t||!1,n.a.http.get(n.a.convert("/v1/user/me"),{cache:i.b,forceUpdate:t})),details:(t,...e)=>(0===e.length&&(e=["achievements","userapps","nbbuddies","onlinegames"]),n.a.http.get(n.a.convert("/v1/user/"+t+"?extras="+e.join(","),"details"),{cache:i.b})),achievements:t=>(t=t||"me",n.a.http.get(n.a.convert("/v1/user/"+t+"?extras=achievements","achievements"),{cache:i.b})),activities:t=>n.a.http.get(n.a.convert("/v1/user/"+t+"?extras=userapps","activity"),{cache:i.a}),onlineGames:(t,e)=>n.a.http.get(n.a.convert("/v1/user/"+t+"/games/summary"+(e?"/"+e:"")),{cache:i.a}),rank:(t,e)=>n.a.http.get(n.a.convert("/v1/user/"+t+"/rank/"+e),{cache:i.a}),myRank:t=>s.rank("me",t),buddiesCollection:()=>n.a.http.get("/v1/user/me/buddies/collection",{cache:i.b}),addBuddy:t=>n.a.http.post("/v1/user/me/buddies/"+t),removeBuddy:t=>n.a.http.delete("/v1/user/me/buddies/"+t),lastgames:(t,e,a,s,o)=>Object(r.a)(n.a.convert("/v1/user/"+t+"/lastgames/"+e,"lastgames"),s,{limit:o,status:a},{cache:i.b}),history:(t,e,a,s,o,c)=>Object(r.a)(n.a.convert("/v1/user/"+t+"/games/"+e,"history"),o,{limit:c,y:s,status:a,o:0},{cache:i.b})};e.a=s},yhwo:function(t,e,a){var n=a("p0o+");t.exports=function(t,e,a){if(n(t),void 0===e)return t;switch(a){case 1:return function(a){return t.call(e,a)};case 2:return function(a,n){return t.call(e,a,n)};case 3:return function(a,n,r){return t.call(e,a,n,r)}}return function(){return t.apply(e,arguments)}}},zX9P:function(t,e,a){t.exports={default:a("kZlZ"),__esModule:!0}}});
//# sourceMappingURL=asnetapi.2.43fbe6daa488eff4ec29.js.map