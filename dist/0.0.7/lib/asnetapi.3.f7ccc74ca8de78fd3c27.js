webpackJsonp([3],{"0uSv":function(e,t,a){var n=a("rbf2");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("pFN4").default)("0e846f5e",n,!0,{})},"12/L":function(e,t){var a=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:a)(e)}},"1tVq":function(e,t,a){var n=a("12/L"),s=Math.max,i=Math.min;e.exports=function(e,t){return(e=n(e))<0?s(e+t,0):i(e,t)}},"2hHA":function(e,t,a){var n=a("GJ5T"),s=a("W9uE").document,i=n(s)&&n(s.createElement);e.exports=function(e){return i?s.createElement(e):{}}},"6zZR":function(e,t,a){var n=a("WsAY"),s=a("W9uE"),i=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:a("q9/b")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"7Mi/":function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i});var n=a("XQ85");const s=new n.a;s.maxAge=6e5;const i=new n.a;i.maxAge=864e5},"9rUb":function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},ByyM:function(e,t,a){"use strict";var n=a("wYgs"),s=a("7Mi/");const i={all:()=>n.a.http.get(n.a.convert("/v1/games"),{cache:s.b}),rankables:()=>n.a.http.get(n.a.convert("/v1/game/rankables"),{cache:s.b}),achievements:e=>n.a.http.get(n.a.convert("/v1/game/"+e+"/achievements?limit=200"),{cache:s.b}),crosspromo:(e,t)=>n.a.http.get(n.a.convert("/v1/game/"+e+"/product/"+t),{cache:s.b}),counterData:(e,t)=>n.a.http.get(e+"/"+t+"/prx/gamecounter",{cache:s.b})};t.a=i},"DPF+":function(e,t,a){"use strict";var n=a("vdRI"),s=function(e){delete e.target.onerror,e.target.src="https://cdn.daysofwonder.com/images/avatars/avatar-neutral.jpg"},i=function(e){delete e.target.onerror,delete e.target.src},r=function(e){delete e.target.onerror,delete e.target.src},c=function(e){delete e.target.onerror,delete e.target.src};var o=function(){const e=/^({(-?\d+(\.\d+)?\s*(,?\s*(-?\d+(\.\d+)?))*)})\s(.+)$/,t=/^(([[\]])\s*(-Inf|-?\d+(\.\d+)?)\s*,\s*(\+?Inf|-?\d+(\.\d+)?)\s*([[\]]))\s(.+)$/;function a(e){return"-Inf"===e?-1/0:"+Inf"===e||"Inf"===e?1/0:parseFloat(e)}let n=function(n,s){s=s.trim();let i=e.exec(s)||t.exec(s);if(!i)return console.error('"'+s+'" is not a valid interval.'),!1;if(i[3]){let e=a(i[3]),t=a(i[5]);return("["===i[2]?n>=e:n>e)&&("]"===i[7]?n<=t:n<t)}{let e=i[2].split(",");for(let t=0;t<e.length;t++){let a=e[t];if(n===parseInt(a))return!0}}return!1},s=function(e,t){switch("pt_BR"===t&&(t="xbr"),t.length>3&&(t=t.split("_")[0]),t){case"az":case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"tr":case"vi":case"zh":return 0;case"af":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"oc":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"ur":case"zu":return 1===e?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"hy":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return 0===e||1===e?0:1;case"be":case"bs":case"hr":case"ru":case"sh":case"sr":case"uk":return 1===e&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2;case"cs":case"sk":return 1===e?0:e>=2&&e<=4?1:2;case"ga":return 1===e?0:2===e?1:2;case"lt":return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2;case"sl":return e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3;case"mk":return e%10==1?0:1;case"mt":return 1===e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3;case"lv":return 0===e?0:e%10==1&&e%100!=11?1:2;case"pl":return 1===e?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:2;case"cy":return 1===e?0:2===e?1:8===e||11===e?2:3;case"ro":return 1===e?0:0===e||e%100>0&&e%100<20?1:2;case"ar":return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11&&e%100<=99?4:5;default:return 0}},i=function(e,t){return t&&Object.keys(t).forEach(function(a){e=e.replace(a,t[a])}),e};return{getTrans:function(e,t,a,n){if(void 0!==e[a]){return i(e[a],n)}return""},getTransChoice:function(a,r,c,o,l){if(void 0!==a[o]){let u=function(a,i,r){let c,o=a.split("|"),l={},u=[];o.forEach(function(a){a=a.replace("||","|").trim(),(c=e.exec(a))?l[c[0]]=c:(c=t.exec(a))?l[c[0]]=c:(c=/^\w+:\s*(.*?)$/.exec(a))?u.push(c[1]):u.push(a)});let d=Object.keys(l);for(let e=0;e<d.length;e++){let t=d[e];if(n(i,t))return l[t][l[t].length-1]}let f=s(i,r);return void 0===u[f]?1===o.length&&void 0!==u[0]?u[0]:(console.error('Unable to choose a translation for "'+a+'" with locale "'+r+'" for value "'+i+'". Double check that this translation has the correct plural options (e.g. "There is one apple|There are %%count%% apples").'),""):u[f]}(a[o],c,r);return i(u,l)}return""}}}();const l={keyforge:"https://www.keyforgegame.com/",xwing:"https://squadbuilder.fantasyflightgames.com/"},u={props:["config"],computed:{title(){return this.getTrans(this.$options.name+"_title")},lang(){return this.$moment.locale()!==n.a.getters.globalOptions.lang&&this.$moment.locale(n.a.getters.globalOptions.lang),n.a.getters.globalOptions.lang},gameIconError:()=>i,avatarError:()=>s,achievementError:()=>r,genericImageError:()=>c,isLogged:()=>!n.a.getters.unloggedMode,isIn3rdParty:()=>!!n.a.getters.globalOptions.in_3rd_party,baseHost:()=>n.a.getters.globalOptions.host?n.a.getters.globalOptions.host.replace(/\/$/,""):"",baseISImageHost:()=>"https://ncdn.asmodee.net/is/img/"},methods:{getTrans(e,t){return o.getTrans(this.config.trans,this.lang,e,t)},getTransChoice(e,t,a){return o.getTransChoice(this.config.trans,this.lang,e,t,a)},urlFor(e,t){if(t=t||{},this.config.urls&&this.config.urls[e]){let a=this.config.urls[e];return Object.keys(t).forEach(function(e){a=a.replace(":"+e,t[e])}),/^\/[a-z]{2}\/.*/.exec(a)||(a="/"+this.lang+a),this.baseHost+a}return""},gameUrl(e){return["keyforge","xwing"].includes(e)?l[e]:this.urlFor("game-index",{id:e})},goToGame(e){let t=this.gameUrl(e);return["keyforge","xwing"].includes(e)?window.open(t):this.isIn3rdParty?window.open(t):window.location=t,!1},goToGameRanking(e){let t=this.urlFor("rankings-game",{id:e});this.isIn3rdParty?window.open(t):window.location=t},forceHTTPS:e=>e?e.replace("^http://","https://"):e,debugDump(){console.log(...arguments)}}};t.a=u},"DVK/":function(e,t){var a={}.hasOwnProperty;e.exports=function(e,t){return a.call(e,t)}},Fmkg:function(e,t,a){var n=a("DVK/"),s=a("buEK"),i=a("bt/m")(!1),r=a("O5S5")("IE_PROTO");e.exports=function(e,t){var a,c=s(e),o=0,l=[];for(a in c)a!=r&&n(c,a)&&l.push(a);for(;t.length>o;)n(c,a=t[o++])&&(~i(l,a)||l.push(a));return l}},GJ5T:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},HuYH:function(e,t,a){var n=a("p25U");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},JL8o:function(e,t,a){var n=a("12/L"),s=Math.min;e.exports=function(e){return e>0?s(n(e),9007199254740991):0}},KDwR:function(e,t,a){"use strict";const n={methods:{hasAtLeastOneValidAchievement(e){return void 0!==e.find(this.validAchievementToDisplay)},validAchievementToDisplay(e){return!(null===this.getAchievementDescription(e,"")&&!e.picture&&!e.ribbon)},getAchievementFieldForCurrentLang(e,t){return e.textsFor(this.lang)[t]},getAchievementDescription(e,t,a){if(void 0===a&&(a=!0),void 0===e.texts)return null;let n=e.textsFor(this.lang),s="";return n.name&&(s="<p><b>"+n.name+"</b></p>"),e.awarded_ts&&(s+='<p><small><time date="'+e.awarded_ts+'">'+t+"</time></small></p>"),a&&n.description&&(s+="<p>"+n.description+"</p>"),s},getAchievementIcon:e=>e.hasPicture()?e.picture:e.ribbon,getAchievementIconClass:e=>e.hasRibbon()&&!e.hasPicture()?"ribbon":e.isMedal()?"medal":""}};t.a=n},KLhA:function(e,t,a){var n=a("SZ/P"),s=a("WsAY"),i=a("gHxa");e.exports=function(e,t){var a=(s.Object||{})[e]||Object[e],r={};r[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",r)}},KktU:function(e,t,a){var n=a("qQMF"),s=a("Te4x");e.exports=a("V5XO")?function(e,t,a){return n.f(e,t,s(1,a))}:function(e,t,a){return e[t]=a,e}},MgXD:function(e,t,a){"use strict";var n=a("wYgs");t.a=((e,t,a,s)=>{t=t||1,s=s||{},a.limit=a.limit||10,a.offset=(t-1)*a.limit,s.total&&a.offset>s.total&&(a.offset=s.total);let i={params:a};return s.cache&&(i.cache=s.cache),n.a.http.get(n.a.convert(e),i)})},O5S5:function(e,t,a){var n=a("6zZR")("keys"),s=a("XQtG");e.exports=function(e){return n[e]||(n[e]=s(e))}},Pk40:function(e,t,a){"use strict";const n=Object.freeze({3:"medal",2:"flag",1:"badge",0:"none"}),s=Object.freeze(Object.keys(n).map(e=>[n[e],e]).reduce(function(e,t){return e[t[0]]=t[1],e},{}));t.a=class{constructor(e={}){let t=this;Object.keys(e).forEach(a=>{t[a]=e[a]})}category(){return n[this.category]}isOfCat(e){return s[e]===this.category}isOfType(e){return this.type===e}isMedal(){return this.isOfCat("medal")}isFlag(){return this.isOfCat("flag")}isBadge(){return this.isOfCat("badge")}isNone(){return this.isOfCat("none")}isEvent(){return this.isOfType("event")}isOfficer(){return this.isOfType("officer")}isNormal(){return this.isOfType("normal")}isCommunity(){return this.isOfType("community")}isActive(){return this.active}isSecret(){return this.secret}hasRibbon(){return!!this.ribbon}hasPicture(){return!!this.picture}hasPictureOrRibbon(){return this.hasPicture()||this.hasRibbon()}textsFor(e){let t=null;return void 0===this.texts.length?t=void 0!==this.texts[e]?this.texts[e]:this.texts.en:(0===(t=this.texts.filter(t=>t.lang===e)).length&&(t=this.texts.filter(e=>"en"===e.lang)),t&&(t=t[0])),t=t||{description:null,name:null}}isAlwaysHidden(){return"officer"===this.type}}},SAmk:function(e,t,a){e.exports=!a("V5XO")&&!a("gHxa")(function(){return 7!=Object.defineProperty(a("2hHA")("div"),"a",{get:function(){return 7}}).a})},"SZ/P":function(e,t,a){var n=a("W9uE"),s=a("WsAY"),i=a("yhwo"),r=a("KktU"),c=a("DVK/"),o=function(e,t,a){var l,u,d,f=e&o.F,p=e&o.G,h=e&o.S,v=e&o.P,m=e&o.B,g=e&o.W,x=p?s:s[t]||(s[t]={}),b=x.prototype,_=p?n:h?n[t]:(n[t]||{}).prototype;for(l in p&&(a=t),a)(u=!f&&_&&void 0!==_[l])&&c(x,l)||(d=u?_[l]:a[l],x[l]=p&&"function"!=typeof _[l]?a[l]:m&&u?i(d,n):g&&_[l]==d?function(e){var t=function(t,a,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,a)}return new e(t,a,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):v&&"function"==typeof d?i(Function.call,d):d,v&&((x.virtual||(x.virtual={}))[l]=d,e&o.R&&b&&!b[l]&&r(b,l,d)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,e.exports=o},T1s6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("zX9P"),s=a.n(n),i=a("uj17"),r=a.n(i),c=a("DPF+"),o=a("KDwR"),l=a("wYgs"),u=a("ByyM"),d=a("wZkS"),f=a("Pk40"),p={name:"v-card",mixins:[c.a,o.a],computed:{displayWidth:function(){return this.config.width?this.config.width:"sm"===this.$mq?"96%":["xsm","xs","xxs"].includes(this.$mq)?"100%":"500px"},getChevronPos:function(){var e=this.displayWidth;return e.endsWith("px")?parseInt(e)-20+"px":"calc("+e+" - 2em)"},userProfileId:function(){return this.config.userProfile.id},lastAchievement:function(){var e=this;return this.achievements?s()(this.achievements).reduce(function(t,a){var n=e.achievements[a].reduce(function(e,t){return(!e||e.awarded_ts<t.awarded_ts)&&"officer"!==t.type&&t.texts?t:e},t);return n&&(!t||t.awarded_ts<n.awarded_ts)&&n.texts?new f.a(n):t?new f.a(t):null},null):null},achievementsCount:function(){var e=this;return this.achievements?s()(this.achievements).reduce(function(t,a){return t+e.achievements[a].length},0):0},onlineGamesCount:function(){return this.onlinegames.length>0?this.onlinegames.reduce(function(e,t){return e+t.nbgames},0):0}},methods:{userDetails:function(){var e=this;r.a.all([d.a.details(this.userProfileId),u.a.all()]).then(r.a.spread(function(t,a){e.games=a.data.games,e.activities=t.data.user.userapps,e.achievements=t.data.user.achievements,e.onlinegames=t.data.user.onlinegames,e.user=t.data.user}))},tooSmall:function(){return!["xsm","xs","xxs"].includes(this.$mq)}},mounted:function(){l.a.ifInitialized(this.userDetails)},data:function(){return{user:null,activities:[],achievements:null,onlinegames:[],games:null}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("panel",{staticClass:"panel-v-card clickable",class:{high:0===e.activities.length},style:{width:e.displayWidth},attrs:{config:e.config}},[e.user?a("template",{slot:"body"},[a("div",{staticClass:"chevron-action",class:{high:0===e.activities.length},style:{left:"calc("+e.displayWidth+" - "+(["xs","xxs","sm"].includes(e.$mq)?10:40)+"px)"}},[a("font-awesome-icon",{attrs:{icon:"chevron-right",size:"3x"}})],1),e._v(" "),a("a",{attrs:{href:e.urlFor("public_profile",{id:e.userProfileId}),target:e.isIn3rdParty?"_blank":"_self"}},[e.tooSmall()?a("div",{staticClass:"col-xs-2 col-sm-2 col-md-2"},[a("img",{staticClass:"icon avatar",attrs:{src:e.user.avatar},on:{error:e.avatarError}}),e._v(" "),a("span",{staticClass:"registered_since"},[e._v(e._s(e.getTrans("registered_since"))+" "),a("time",{attrs:{date:e.user.join_date_ts}},[e._v(e._s(e.$moment.unix(e.user.join_date_ts).format("L")))])])]):e._e(),e._v(" "),a("div",{staticClass:"details col-xs-10 col-sm-10 col-md-10",class:{"col-xs-12":["xs","xxs"].includes(e.$mq)}},[a("h2",[["xsm","xs","xxs"].includes(e.$mq)?a("img",{staticClass:"icon avatar fixed",attrs:{src:e.user.avatar},on:{error:e.avatarError}}):e._e(),e._v(" "+e._s(e.user.login_name))]),e._v(" "),["xsm","xs","xxs"].includes(e.$mq)?a("p",{staticClass:"registered_since"},[e._v(e._s(e.getTrans("registered_since"))+" "),a("time",{attrs:{date:e.user.join_date_ts}},[e._v(e._s(e.$moment.unix(e.user.join_date_ts).format("L")))])]):e._e(),e._v(" "),a("h4",{staticClass:"icons"},[a("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.getTrans("nb_achievements"),expression:"getTrans('nb_achievements')"}],staticClass:"icon_detail"},[a("i",{staticClass:"fanet fanet-stack anet-achievements"}),e._v(" "+e._s(e.achievementsCount))]),e._v("\n                       \n                    "),a("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.getTrans("number_buddies").replace(/&#039;/,"'"),expression:"getTrans('number_buddies').replace(/&#039;/, '\\'')"}],staticClass:"icon_detail"},[a("i",{staticClass:"fanet fanet-stack anet-buddies"}),e._v(" "+e._s(e.user.nbbuddies))]),e._v("\n                       \n                    "),a("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.getTrans("ranked_online_games"),expression:"getTrans('ranked_online_games')"}],staticClass:"icon_detail"},[a("i",{staticClass:"fanet fanet-stack anet-online-game fa-2x"}),e._v(" "+e._s(e.onlineGamesCount))]),e._v("\n                       \n                    "),a("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.getTrans("number_games"),expression:"getTrans('number_games')"}],staticClass:"icon_detail"},[a("i",{staticClass:"fanet fanet-stack anet-game-log"}),e._v(" "+e._s(e.activities.length))])]),e._v(" "),a("div",{style:"display:flex;align-content:flex-start;align-items: baseline;"+(["xs","xxs"].includes(this.$mq)?" flex-wrap: wrap;":"")},[e.activities.length>0&&e.games&&Object.keys(e.games).length>0?a("div",{staticClass:"last_data",class:["xxs"].includes(this.$mq)?" first_line":" midwith"},[a("h6",[e._v(e._s(e.getTrans("last_activity")))]),e._v(" "),a("div",{staticClass:"row decal"},[a("div",{staticClass:"col-xxs-1 col-xs-1 col-sm-1 col-md-1 small"},[a("img",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:e.games[e.activities[0].game_id].name,expression:"games[activities[0].game_id].name",modifiers:{bottom:!0}}],staticClass:"icon game small",attrs:{src:e.games[e.activities[0].game_id].icon}})]),e._v(" "),a("div",{staticClass:"col-xxs-9 col-xs-9 col-sm-9 col-md-9 small"},[a("h4",[e._v(e._s(e.games[e.activities[0].game_id].name))]),e._v(" "),a("time",{attrs:{date:e.activities[0].last_used}},[e._v(e._s(e.$moment.unix(e.activities[0].last_used).format("L HH:mm")))])])])]):e._e(),e._v(" "),e.activities.length>0&&e.achievements&&Object.keys(e.achievements).length>0?a("div",{staticClass:"last_data",class:{midwith:!["xxs"].includes(this.$mq)}},[a("h6",[e._v(e._s(e.getTrans("last_achievement")))]),e._v(" "),a("div",{staticClass:"row decal"},[a("div",{staticClass:"col-xxs-1 col-xs-1 col-sm-1 col-md-1 small"},[a("img",{staticClass:"icon achievement small",class:e.getAchievementIconClass(e.lastAchievement),attrs:{src:e.getAchievementIcon(e.lastAchievement)}})]),e._v(" "),a("div",{staticClass:"col-xxs-9 col-xs-9 col-sm-9 col-md-9 small"},[a("h4",[e._v(e._s(e.getAchievementFieldForCurrentLang(e.lastAchievement,"name")))]),e._v(" "),a("time",{attrs:{date:e.lastAchievement.awarded_ts}},[e._v(e._s(e.$moment.unix(e.lastAchievement.awarded_ts).format("L HH:mm")))])])])]):e._e()])])])]):a("template",{slot:"body"},[a("LoadingComp")],1)],2)},staticRenderFns:[]};var v=a("mUJo")(p,h,!1,function(e){a("0uSv")},"data-v-65df533c",null);t.default=v.exports},Te4x:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},ToFw:function(e,t,a){var n=a("GJ5T");e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},V5XO:function(e,t,a){e.exports=!a("gHxa")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},W9uE:function(e,t){var a=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},WFAk:function(e,t,a){var n=a("Fmkg"),s=a("9rUb");e.exports=Object.keys||function(e){return n(e,s)}},WsAY:function(e,t){var a=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=a)},XQtG:function(e,t){var a=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++a+n).toString(36))}},"bt/m":function(e,t,a){var n=a("buEK"),s=a("JL8o"),i=a("1tVq");e.exports=function(e){return function(t,a,r){var c,o=n(t),l=s(o.length),u=i(r,l);if(e&&a!=a){for(;l>u;)if((c=o[u++])!=c)return!0}else for(;l>u;u++)if((e||u in o)&&o[u]===a)return e||u||0;return!e&&-1}}},buEK:function(e,t,a){var n=a("HuYH"),s=a("v41l");e.exports=function(e){return n(s(e))}},gHxa:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},kZlZ:function(e,t,a){a("mxWh"),e.exports=a("WsAY").Object.keys},mxWh:function(e,t,a){var n=a("vNUB"),s=a("WFAk");a("KLhA")("keys",function(){return function(e){return s(n(e))}})},"p0o+":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},p25U:function(e,t){var a={}.toString;e.exports=function(e){return a.call(e).slice(8,-1)}},"q9/b":function(e,t){e.exports=!0},qQMF:function(e,t,a){var n=a("ToFw"),s=a("SAmk"),i=a("scWE"),r=Object.defineProperty;t.f=a("V5XO")?Object.defineProperty:function(e,t,a){if(n(e),t=i(t,!0),n(a),s)try{return r(e,t,a)}catch(e){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(e[t]=a.value),e}},rbf2:function(e,t,a){(e.exports=a("Vmy+")(!1)).push([e.i,"h2[data-v-65df533c]{color:#831fdb;font-size:1.25em;margin-top:0}h4[data-v-65df533c]{color:#831fdb;font-size:1em;margin-top:0}h3[data-v-65df533c]{color:#55387c;font-size:1.3em;margin-top:10px;margin-bottom:10px}img.icon[data-v-65df533c]{margin-right:0!important}img.icon.achievement[data-v-65df533c]{margin:8px;height:60px;width:60px;object-fit:contain}img.icon.achievement.ribbon[data-v-65df533c]{height:30px}img.icon.achievement.ribbon.small[data-v-65df533c]{height:15px;width:30px}img.icon.achievement.small[data-v-65df533c]{height:30px;width:30px}img.icon.game[data-v-65df533c]{max-height:60px;max-width:60px}img.icon.game.fixed[data-v-65df533c]{height:60px;width:60px}img.icon.game.small[data-v-65df533c]{height:30px;width:30px}@media (max-width:767.98px){img.icon.game.fixed[data-v-65df533c]{height:30px;width:30px}}img.icon.avatar[data-v-65df533c]{max-height:60px;max-width:60px}img.icon.avatar.fixed[data-v-65df533c]{height:60px;width:60px}@media (max-width:767.98px){img.icon.avatar.fixed[data-v-65df533c]{height:30px;width:30px}}.panel-body div .row[data-v-65df533c]{margin:0}.panel.panel-v-card[data-v-65df533c] .panel-body{padding:0}.panel.panel-v-card[data-v-65df533c] a{color:#333;display:inline-block;position:relative;top:-40px;width:100%}.panel.panel-v-card[data-v-65df533c] .icon.avatar{border-radius:50%}.panel.panel-v-card[data-v-65df533c] .registered_since{font-size:.8em}.panel.panel-v-card[data-v-65df533c] h4{margin-bottom:6px}.panel.panel-v-card[data-v-65df533c] h4.icons{position:relative;top:-10px}.panel.panel-v-card[data-v-65df533c] .chevron-action{text-align:center;top:60px;vertical-align:middle;float:left}.panel.panel-v-card[data-v-65df533c] .chevron-action.high{top:10px}.panel.panel-v-card[data-v-65df533c] .chevron-action .fa-chevron-right{position:relative;top:15px;color:#d3d3d3;font-weight:700}.panel.panel-v-card[data-v-65df533c] .icon_detail{white-space:nowrap}.panel.panel-v-card[data-v-65df533c] .last_data{font-size:.9em;padding-left:0}.panel.panel-v-card[data-v-65df533c] .last_data.midwith{width:50%}.panel.panel-v-card[data-v-65df533c] .last_data.first_line:first-of-type{position:relative;top:-10px}.panel.panel-v-card[data-v-65df533c] .last_data .row .col-md-1.small{padding-left:0}.panel.panel-v-card[data-v-65df533c] .last_data .row .col-md-1 .achievement{margin:0}.panel.panel-v-card[data-v-65df533c] .last_data .row .col-md-1 .achievement.ribbon.small{height:20px;position:relative;top:10px}.panel.panel-v-card[data-v-65df533c] .last_data .row .col-md-9{white-space:nowrap}.panel.panel-v-card[data-v-65df533c] .last_data .row .col-md-9.small{padding-left:30px;padding-top:4px}.panel.panel-v-card[data-v-65df533c] .clearboth{clear:both}.panel-v-card.clickable[data-v-65df533c]:hover{background-color:#d3d3d3;cursor:pointer}.panel-v-card.clickable:hover .chevron-action .fa-chevron-right[data-v-65df533c]{color:#fff}.panel-v-card.high[data-v-65df533c]{padding-bottom:0}@media (max-width:767.98px){.panel.panel-v-card .icon.avatar.fixed[data-v-65df533c]{height:60px;width:60px}}@media (max-width:767.98px){.panel.panel-v-card .last_data.midwith[data-v-65df533c]{width:100%}}@media (max-width:449.98px){.panel.panel-v-card .chevron-action[data-v-65df533c]{top:110px}}@media (min-width:450px){.panel.panel-v-card .registered_since[data-v-65df533c]{float:left}}",""])},scWE:function(e,t,a){var n=a("GJ5T");e.exports=function(e,t){if(!n(e))return e;var a,s;if(t&&"function"==typeof(a=e.toString)&&!n(s=a.call(e)))return s;if("function"==typeof(a=e.valueOf)&&!n(s=a.call(e)))return s;if(!t&&"function"==typeof(a=e.toString)&&!n(s=a.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},v41l:function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},vNUB:function(e,t,a){var n=a("v41l");e.exports=function(e){return Object(n(e))}},wZkS:function(e,t,a){"use strict";var n=a("wYgs"),s=a("MgXD"),i=a("7Mi/");const r={myAccount:e=>(e=e||!1,n.a.http.get(n.a.convert("/v1/user/me"),{cache:i.b,forceUpdate:e})),details:(e,...t)=>(0===t.length&&(t=["achievements","userapps","nbbuddies","onlinegames"]),n.a.http.get(n.a.convert("/v1/user/"+e+"?extras="+t.join(","),"details"),{cache:i.b})),achievements:e=>(e=e||"me",n.a.http.get(n.a.convert("/v1/user/"+e+"?extras=achievements","achievements"),{cache:i.b})),activities:e=>n.a.http.get(n.a.convert("/v1/user/"+e+"?extras=userapps","activity"),{cache:i.a}),onlineGames:(e,t)=>n.a.http.get(n.a.convert("/v1/user/"+e+"/games/summary"+(t?"/"+t:"")),{cache:i.a}),rank:(e,t)=>n.a.http.get(n.a.convert("/v1/user/"+e+"/rank/"+t),{cache:i.a}),myRank:e=>r.rank("me",e),buddiesCollection:()=>n.a.http.get("/v1/user/me/buddies/collection",{cache:i.b}),addBuddy:e=>n.a.http.post("/v1/user/me/buddies/"+e),removeBuddy:e=>n.a.http.delete("/v1/user/me/buddies/"+e),lastgames:(e,t,a,r,c)=>Object(s.a)(n.a.convert("/v1/user/"+e+"/lastgames/"+t,"lastgames"),r,{limit:c,status:a},{cache:i.b}),history:(e,t,a,r,c,o)=>Object(s.a)(n.a.convert("/v1/user/"+e+"/games/"+t,"history"),c,{limit:o,y:r,status:a,o:0},{cache:i.b})};t.a=r},yhwo:function(e,t,a){var n=a("p0o+");e.exports=function(e,t,a){if(n(e),void 0===t)return e;switch(a){case 1:return function(a){return e.call(t,a)};case 2:return function(a,n){return e.call(t,a,n)};case 3:return function(a,n,s){return e.call(t,a,n,s)}}return function(){return e.apply(t,arguments)}}},zX9P:function(e,t,a){e.exports={default:a("kZlZ"),__esModule:!0}}});
//# sourceMappingURL=asnetapi.3.f7ccc74ca8de78fd3c27.js.map