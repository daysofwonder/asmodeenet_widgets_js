webpackJsonp([4],{"7Mi/":function(t,a,e){"use strict";e.d(a,"a",function(){return s}),e.d(a,"b",function(){return n});var i=e("XQ85");const s=new i.a;s.maxAge=6e5;const n=new i.a;n.maxAge=864e5},Ay1w:function(t,a,e){(t.exports=e("Vmy+")(!1)).push([t.i,"img.icon[data-v-6482b47e]{margin-right:0!important;min-height:40px;min-width:40px}img.icon.achievement[data-v-6482b47e]{margin:8px;max-height:60px;max-width:60px}img.icon.game[data-v-6482b47e]{max-height:60px;max-width:60px}img.icon.game.fixed[data-v-6482b47e]{height:60px;width:60px}@media (max-width:767.98px){img.icon.game.fixed[data-v-6482b47e]{height:30px;width:30px}}img.icon.avatar[data-v-6482b47e]{max-height:60px;max-width:60px}img.icon.avatar.fixed[data-v-6482b47e]{height:60px;width:60px}@media (max-width:767.98px){img.icon.avatar.fixed[data-v-6482b47e]{height:30px;width:30px}}table td.buddy[data-v-6482b47e],table td.buddy_game[data-v-6482b47e],table td.icon[data-v-6482b47e]{width:60px;text-align:center}.buddies-activity[data-v-6482b47e] .panel-heading h1{color:#ffc80b}.buddies-activity[data-v-6482b47e] .panel-heading h1 i{font-size:12px;margin-left:-14px}.buddies-activity[data-v-6482b47e] .table tbody{vertical-align:top}.buddies-activity[data-v-6482b47e] .table tbody .buddy_game img:first-child{border-radius:50%;margin-bottom:2px}.buddies-activity[data-v-6482b47e] .table tbody a{color:#333;text-decoration:none}.buddies-activity[data-v-6482b47e] .table tbody a .chevron-action{bottom:-5px}.buddies-activity[data-v-6482b47e] .table tbody tr td{border:none;vertical-align:middle}.buddies-activity[data-v-6482b47e] .table tbody tr td.buddy img{border-radius:50%}.buddies-activity[data-v-6482b47e] .table tbody ul{list-style:none;padding:0;text-decoration:none}.buddies-activity[data-v-6482b47e] .table tbody ul li{font-size:.9em}.buddies-activity[data-v-6482b47e] .table tbody ul li.buddy{color:#831fdb}.buddies-activity[data-v-6482b47e] .table tbody ul li.name{font-weight:500;font-size:1.1em}.buddies-activity[data-v-6482b47e] .table tbody tr.clickable:hover .buddy.icon{background-color:#fff}.buddies-activity[data-v-6482b47e] .table tbody tr.clickable:hover .fa-chevron-right{color:#fff}.buddies-activity[data-v-6482b47e] .table tbody .buddy.icon:hover~td{background-color:#fff}.buddies-activity[data-v-6482b47e] .table tbody .buddy.icon:hover~td .fa-chevron-right{color:#d3d3d3}",""])},ByyM:function(t,a,e){"use strict";var i=e("wYgs"),s=e("7Mi/");const n={all:()=>i.a.http.get(i.a.convert("/v1/games"),{cache:s.b}),rankables:()=>i.a.http.get(i.a.convert("/v1/game/rankables"),{cache:s.b})};a.a=n},"DPF+":function(t,a,e){"use strict";var i=e("vdRI"),s=function(t){delete t.target.onerror,t.target.src="https://cdn.daysofwonder.com/images/avatars/avatar-neutral.jpg"},n=function(t){delete t.target.onerror,delete t.target.src};var r=function(){const t=/^({(-?\d+(\.\d+)?\s*(,?\s*(-?\d+(\.\d+)?))*)})\s(.+)$/,a=/^(([[\]])\s*(-Inf|-?\d+(\.\d+)?)\s*,\s*(\+?Inf|-?\d+(\.\d+)?)\s*([[\]]))\s(.+)$/;function e(t){return"-Inf"===t?-1/0:"+Inf"===t||"Inf"===t?1/0:parseFloat(t)}let i=function(i,s){s=s.trim();let n=t.exec(s)||a.exec(s);if(!n)return console.error('"'+s+'" is not a valid interval.'),!1;if(n[3]){let t=e(n[3]),a=e(n[5]);return("["===n[2]?i>=t:i>t)&&("]"===n[7]?i<=a:i<a)}{let t=n[2].split(",");for(let a=0;a<t.length;a++){let e=t[a];if(i===parseInt(e))return!0}}return!1},s=function(t,a){switch("pt_BR"===a&&(a="xbr"),a.length>3&&(a=a.split("_")[0]),a){case"az":case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"tr":case"vi":case"zh":return 0;case"af":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"oc":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"ur":case"zu":return 1===t?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"hy":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return 0===t||1===t?0:1;case"be":case"bs":case"hr":case"ru":case"sh":case"sr":case"uk":return 1===t&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2;case"cs":case"sk":return 1===t?0:t>=2&&t<=4?1:2;case"ga":return 1===t?0:2===t?1:2;case"lt":return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2;case"sl":return t%100==1?0:t%100==2?1:t%100==3||t%100==4?2:3;case"mk":return t%10==1?0:1;case"mt":return 1===t?0:0===t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3;case"lv":return 0===t?0:t%10==1&&t%100!=11?1:2;case"pl":return 1===t?0:t%10>=2&&t%10<=4&&(t%100<12||t%100>14)?1:2;case"cy":return 1===t?0:2===t?1:8===t||11===t?2:3;case"ro":return 1===t?0:0===t||t%100>0&&t%100<20?1:2;case"ar":return 0===t?0:1===t?1:2===t?2:t%100>=3&&t%100<=10?3:t%100>=11&&t%100<=99?4:5;default:return 0}},n=function(t,a){return a&&Object.keys(a).forEach(function(e){t=t.replace(e,a[e])}),t};return{getTrans:function(t,a,e,i){if(void 0!==t[e]){return n(t[e],i)}return""},getTransChoice:function(e,r,c,o,l){if(void 0!==e[o]){let d=function(e,n,r){let c,o=e.split("|"),l={},d=[];o.forEach(function(e){e=e.replace("||","|").trim(),(c=t.exec(e))?l[c[0]]=c:(c=a.exec(e))?l[c[0]]=c:(c=/^\w+:\s*(.*?)$/.exec(e))?d.push(c[1]):d.push(e)});let u=Object.keys(l);for(let t=0;t<u.length;t++){let a=u[t];if(i(n,a))return l[a][l[a].length-1]}let g=s(n,r);return void 0===d[g]?1===o.length&&void 0!==d[0]?d[0]:(console.error('Unable to choose a translation for "'+e+'" with locale "'+r+'" for value "'+n+'". Double check that this translation has the correct plural options (e.g. "There is one apple|There are %%count%% apples").'),""):d[g]}(e[o],c,r);return n(d,l)}return""}}}();const c={props:["config"],computed:{title(){return this.getTrans(this.$options.name+"_title")},lang(){return this.$moment.locale()!==i.a.getters.globalOptions.lang&&this.$moment.locale(i.a.getters.globalOptions.lang),i.a.getters.globalOptions.lang},gameIconError:()=>n,avatarError:()=>s,isLogged:()=>!i.a.getters.unloggedMode,isIn3rdParty:()=>!!i.a.getters.globalOptions.in_3rd_party},methods:{getTrans(t,a){return r.getTrans(this.config.trans,this.lang,t,a)},getTransChoice(t,a,e){return r.getTransChoice(this.config.trans,this.lang,t,a,e)},baseHost:()=>i.a.getters.globalOptions.host?i.a.getters.globalOptions.host.replace(/\/$/,""):"",urlFor(t,a){if(a=a||{},this.config.urls&&this.config.urls[t]){let e="/"+this.lang+this.config.urls[t];return Object.keys(a).forEach(function(t){e=e.replace(":"+t,a[t])}),this.baseHost()+e}return""}}};a.a=c},LVfQ:function(t,a,e){(t.exports=e("Vmy+")(!1)).push([t.i,"nav[data-v-c2059796]{text-align:center}nav .pagination[data-v-c2059796]{font-size:.9em}@media (max-width:991.98px){nav .pagination[data-v-c2059796] .pagination a{padding:4px 9px}}@media (max-width:449.98px){nav .pagination[data-v-c2059796] .pagination{font-size:.8em;margin:1em 0}nav .pagination[data-v-c2059796] .pagination a{padding:3px 6px}nav .pagination[data-v-c2059796] .pagination a.active{color:#fff}}@media (max-width:359.98px){nav .pagination[data-v-c2059796] a,nav .pagination[data-v-c2059796] span{padding:3px 6px}}",""])},MgXD:function(t,a,e){"use strict";var i=e("wYgs");a.a=((t,a,e,s)=>{a=a||1,s=s||{},e.limit=e.limit||10,e.offset=(a-1)*e.limit,s.total&&e.offset>s.total&&(e.offset=s.total);let n={params:e};return s.cache&&(n.cache=s.cache),i.a.http.get(i.a.convert(t),n)})},hYtS:function(t,a,e){"use strict";var i={props:{lang:String,currentPage:{type:Number,required:!0,validator:function(t){return t>0}},pageCount:{type:Number,required:!0,validator:function(t){return t>=0}},size:{type:Number,required:!1,default:15,validator:function(t){return t%2==1}}},computed:{pageRange:function(){var t=Math.max(1,this.currentPage-Math.floor(this.size/2));return t=Math.max(1,Math.min(t,this.pageCount-this.size+1)),Array.apply(null,{length:Math.min(this.pageCount,this.size)}).map(function(a,e){return e+t})}},methods:{navigate:function(t){t>this.pageCount||t===this.currentPage||t<=0||this.$emit("navigate",t)}},data:function(){return{}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.pageCount>1?e("nav",{attrs:{"aria-label":"Page navigation"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"first",class:{disabled:1===t.currentPage}},[e("a",{attrs:{href:"#",disabled:1===t.currentPage},on:{click:function(a){a.preventDefault(),t.navigate(1)}}},[t._v("<<")])]),t._v(" "),1===t.size?[e("li",{staticClass:"previous",class:{disabled:1===t.currentPage}},[e("a",{attrs:{href:"#",disabled:1===t.currentPage},on:{click:function(a){a.preventDefault(),t.navigate(t.currentPage-1)}}},[t._v("<")])]),t._v(" "),e("li",{staticClass:"disabled"},[e("a",{attrs:{disabled:"1"}},[["xs","xxs"].includes(t.$mq)?t._e():[t._v(t._s("de"===t.lang?"Seite":"Page")+" ")],t._v(t._s(t.currentPage)+" "+t._s("fr"===t.lang?"sur":"de"===t.lang?"von":"of")+" "+t._s(t.pageCount))],2)]),t._v(" "),e("li",{staticClass:"next",class:{disabled:t.currentPage+1>t.pageCount}},[e("a",{attrs:{href:"#",disabled:t.currentPage+1>t.pageCount},on:{click:function(a){a.preventDefault(),t.navigate(t.currentPage+1)}}},[t._v(">")])])]:t._l(t.pageRange,function(a){return e("li",{key:a,class:{active:a===t.currentPage},attrs:{"data-page":a}},[e("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.navigate(a)}}},[t._v(t._s(a))])])}),t._v(" "),e("li",{staticClass:"last",class:{disabled:t.currentPage>=t.pageCount}},[e("a",{attrs:{href:"#",disabled:t.currentPage>=t.pageCount},on:{click:function(a){a.preventDefault(),t.navigate(t.pageCount)}}},[t._v(">>")])])],2)]):t._e()},staticRenderFns:[]};var n=e("mUJo")(i,s,!1,function(t){e("uqCE")},"data-v-c2059796",null);a.a=n.exports},jd5k:function(t,a,e){var i=e("Ay1w");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e("pFN4").default)("3a65e42e",i,!0,{})},uqCE:function(t,a,e){var i=e("LVfQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e("pFN4").default)("15600860",i,!0,{})},uzUf:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("uj17"),s=e.n(i),n=e("DPF+"),r=e("wYgs"),c=e("ByyM"),o=e("hYtS"),l=e("MgXD"),d=e("7Mi/"),u={name:"buddies_activities",mixins:[n.a],components:{pagination:o.a},computed:{lastUsedTrans:function(){return this.config.last_used},pageCount:function(){return this.activities?Math.ceil(this.activities.total/this.itemsPerPage):0}},methods:{getActivities:function(t){var a=this;s.a.all([Object(l.a)("/v1/user/me/buddies",t,{sort:"activity",extras:"last_activity,avatar",limit:this.itemsPerPage},{total:this.activities?this.activities.total:0,cache:d.a}),c.a.all(),c.a.rankables()]).then(s.a.spread(function(e,i,s){a.rankables=s.data.rankingGames,a.games=i.data.games,a.activities=e.data,t&&(a.currentPage=t),a.pageCount>1&&1===a.currentPage&&setTimeout(function(){var t=document.querySelector(".buddies-info .panel .table-responsive table");t.style.minHeight=t.offsetHeight+"px",document.querySelector(".buddies-info .panel .table-responsive table tr td").style.maxHeight="85px",document.querySelector(".buddies-info .panel .table-responsive table tr td").style.height="85px"},5)}))},profileUrl:function(t){return this.baseHost()+"/"+this.lang+"/profile/"+t},isRankable:function(t){return this.rankables&&this.rankables.findIndex(function(a){return a===t})>=0}},mounted:function(){r.a.ifInitialized(this.getActivities)},data:function(){return{itemsPerPage:10,currentPage:1,activities:null,games:null,rankables:null}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("panel",{staticClass:"buddies-activity",attrs:{config:t.config}},[e("template",{slot:"header"},[e("i",{staticClass:"fanet anet-buddies"},[t._v(" ")]),t._v(t._s(t.title))]),t._v(" "),e("template",{slot:"table_responsive"},[null===t.activities?[e("LoadingComp")]:[e("table",{staticClass:"table buddies activity"},[e("keep-alive",[t.activities.buddies.length>0?e("tbody",[t._l(t.activities.buddies,function(a){return a.user_activity&&t.games[a.user_activity.game_id]?e("tr",{key:a.id,class:t.isRankable(a.user_activity.game_id)?"clickable":"unclickable"},[["sm","xs","xxs"].includes(t.$mq)?[e("td",{staticClass:"buddy_game"},[e("a",{attrs:{href:t.profileUrl(a.id),target:t.isIn3rdParty?"_blank":"_self"}},[e("img",{staticClass:"icon avatar fixed",attrs:{src:a.avatar},on:{error:t.avatarError}})]),e("br"),t.games[a.user_activity.game_id].icon?e("img",{staticClass:"icon game fixed",attrs:{src:t.games[a.user_activity.game_id].icon},on:{error:t.gameIconError}}):t._e()])]:[e("td",{staticClass:"buddy icon"},[e("a",{attrs:{href:t.profileUrl(a.id),target:t.isIn3rdParty?"_blank":"_self"}},[e("img",{staticClass:"icon avatar fixed",attrs:{src:a.avatar},on:{error:t.avatarError}})])]),t._v(" "),e("td",{staticClass:"game icon"},[e("a",{class:t.isRankable(a.user_activity.game_id)?"clickable":"unclickable",attrs:{href:t.isRankable(a.user_activity.game_id)?t.urlFor("rankings-game",{id:a.user_activity.game_id}):"",target:t.isIn3rdParty?"_blank":"_self"}},[t.games[a.user_activity.game_id].icon?e("img",{staticClass:"icon game fixed",attrs:{src:t.games[a.user_activity.game_id].icon},on:{error:t.gameIconError}}):t._e()])])],t._v(" "),e("td",[e("a",{class:t.isRankable(a.user_activity.game_id)?"clickable":"unclickable",attrs:{href:t.isRankable(a.user_activity.game_id)?t.urlFor("rankings-game",{id:a.user_activity.game_id}):"",target:t.isIn3rdParty?"_blank":"_self"}},[t.isRankable(a.user_activity.game_id)?e("div",{staticClass:"chevron-action"},[e("font-awesome-icon",{attrs:{icon:"chevron-right",size:"2x"}})],1):t._e(),t._v(" "),e("ul",[e("li",{staticClass:"buddy name"},[t._v(t._s(a.login_name))]),t._v(" "),e("li",{staticClass:"game name"},[t._v(t._s(t.games[a.user_activity.game_id].name))]),t._v(" "),e("li",[["xs","xxs"].includes(t.$mq)?[e("time",{attrs:{date:a.user_activity.last_used}},[t._v(t._s(t.$moment.unix(a.user_activity.last_used).format("L HH:mm")))])]:[t._v(t._s(t.getTrans("last_used"))+" "),e("time",{attrs:{date:a.user_activity.last_used}},[t._v(t._s(t.$moment.unix(a.user_activity.last_used).format("LLLL")))])]],2)])])])],2):t._e()}),t._v(" "),t._l(Math.max(t.itemsPerPage-t.activities.buddies.length||0),function(a){return t.currentPage>1?e("tr",{key:a},[e("td",{staticClass:"buddy icon"}),t._v(" "),e("td",{staticClass:"game icon"}),t._v(" "),e("td")]):t._e()})],2):e("tbody",[e("tr",[e("td",[t._v(t._s(t.getTrans("nobody")))])])])]),t._v(" "),t.pageCount>1?e("tfoot",[e("tr",[e("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"3"}},[e("pagination",{attrs:{"current-page":t.currentPage,"page-count":t.pageCount,lang:t.lang,size:"small"},on:{navigate:t.getActivities}})],1)])]):t._e()],1)]],2)],2)},staticRenderFns:[]};var v=e("mUJo")(u,g,!1,function(t){e("jd5k")},"data-v-6482b47e",null);a.default=v.exports}});
//# sourceMappingURL=asnetapi.4.fb9a414f906428c41c6d.js.map