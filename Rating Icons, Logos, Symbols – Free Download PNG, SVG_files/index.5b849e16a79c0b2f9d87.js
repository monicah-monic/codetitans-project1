(window.webpackJsonp=window.webpackJsonp||[]).push([[52,24],{1225:function(t,e,o){"use strict";o(936)},1226:function(t,e,o){var n=o(8)((function(i){return i[1]}));n.push([t.i,'@keyframes spin-0133bdcc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.container[data-v-0133bdcc]{padding:0 32px}@media(max-width:768px){.container[data-v-0133bdcc]{padding:12px 16px 0}}.app-page-section.ads-bsa[data-v-0133bdcc]{padding-top:0}.new-icons-page[data-v-0133bdcc]{position:relative}.new-icons-page__skeletons[data-v-0133bdcc]{background:#fff;bottom:0;min-height:100vh;padding-top:16px;position:absolute;top:0;width:100%;z-index:2}@media(min-width:768px){.new-icons-page__skeletons[data-v-0133bdcc]{padding-top:32px}}.new-icons-page .is-loading[data-v-0133bdcc]{height:100px;position:relative}.new-icons-page .is-loading[data-v-0133bdcc]:after{animation:spin-0133bdcc 1s linear infinite;border:2px solid hsla(0,0%,67%,.2);border-radius:50%;border-top-color:hsla(0,0%,67%,.8);content:"";height:3rem;left:50%;margin-left:-1.5rem;margin-top:-1.5rem;position:absolute;top:50%;width:3rem}.new-icons-page .title-wrap[data-v-0133bdcc]{align-items:center;display:flex;margin-bottom:24px}.new-icons-page .app-title[data-v-0133bdcc]{color:#1a1a1a;font-size:32px;line-height:38px;margin:0}@media(max-width:535px){.new-icons-page .app-title .selector-container[data-v-0133bdcc]{display:block}}.new-icons-page .app-page-subtitle[data-v-0133bdcc]{color:#999;max-width:680px}.new-icons-page .app-page-section-title[data-v-0133bdcc]:first-child{margin-top:4px}',""]),n.locals={},t.exports=n},1727:function(t,e,o){"use strict";o.r(e);var n=o(13),r=o(11),c=o(10),l=o(765),d={name:"NewIconsPage",layout:"app",scrollToTop:!0,async asyncData(t){let{app:e,route:o,store:n,req:d}=t;const{getNewIcons:m,getIconsByDate:f}=Object(l.a)(n);n.dispatch("setFilterAuthors",void 0),n.dispatch("setFilterIsAnimated",void 0),n.dispatch("setFilterColor",void 0),n.dispatch("setSearchColor",c.e),n.dispatch("setFilterColorGradient",void 0),n.dispatch("setPlatform","all"),n.commit("IS_CONTENT_LOADED",!1),n.commit("SET_PLACEHOLDER_TYPE","icon");const h=e.i18n||e.$i18n,E=h.t("WEB_APP.NEW_ICONS"),y=h.t("ICON.ICONS.NEW.NEW_PAGE_DESCRIPTION"),v=h.t("ICON.ICONS.NEW.NEW_PAGE_SUBTITLE"),P={language:h.localeProperties.iso};try{const t=await m(P);if(!t.success)return{error:{message:t.message}};const{origin:e}=Object(r.getURL)(d),n=`${e}${o.path}`,c=Object(r.getSeoData)({url:n,titlePage:E,descriptionPage:y,canonical:n,title:h.t("WEB_APP.SEO.LATEST.TITLE_ALL"),description:h.t("WEB_APP.SEO.LATEST.META_DESCRIPTION_ALL"),image:t.preview}),l=f(t.icons);return{...t,seo:c,iconsByDate:l,pageSubtitle:v,descriptionPage:y}}catch(t){return console.error("error",t),{icons:[],pageSubtitle:v,iconsByDate:{},error:{message:t.message}}}},data:()=>({icons:[],iconsByDate:{},page:1,allIconsLoaded:!1,fetchErrorsCount:0,loading:!1,pageSubtitle:null,bySellAds:null}),head(){return{...this.seo}},computed:{...Object(n.e)({isContentLoaded:t=>t.ui.isContentLoaded})},mounted(){this.setContentLoaded(500),this.checkError()},async created(){this.bySellAds=await Object(r.clientOnly)(o.e(25).then(o.bind(null,1694)))},methods:{...Object(n.b)(["setFilterColorGradient","setFilterIsAnimated"]),async getNewIcons(t){return await Object(l.a)(this.$store).getNewIcons(t)},async fetchNext(t){try{const e=await this.getNewIcons({page:this.page+1,language:this.$i18n.localeProperties.iso});this.page++,e.success&&e.icons.length?(e.icons.forEach((t=>{this.icons.push(t)})),this.iconsByDate=Object(l.a)(this.$store).getIconsByDate(this.icons),t.loaded()):(t.complete(),this.allIconsLoaded=!0)}catch(e){t.loaded(),this.fetchErrorsCount++,3===this.fetchErrorsCount&&(t.complete(),this.allIconsLoaded=!0),console.error("page error",e&&e.message?e.message:e)}},checkError(t){void 0===t&&(t=this.error),t&&(console.error("this.error",this.error),this.error=void 0)},getAdsParams(t){return 0===t&&this.icons&&this.icons.length?{rowAds:5,term:this.icons[0].name}:void 0},setContentLoaded(t){setTimeout((()=>{this.$store.commit("IS_CONTENT_LOADED",!0)}),t)}}},m=(o(1225),o(6)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-icons-page"},[t.isContentLoaded?t._e():e("div",{staticClass:"new-icons-page__skeletons container"},[e("icon-placeholder",{attrs:{type:t.$store.state.ui.placeholderType,"short-bottom-margin":!0,"icons-heading":!1}})],1),t._v(" "),e("div",[e("div",{staticClass:"app-page-section ads-bsa custom-padding"},[e("client-only",[e(t.bySellAds,{tag:"component",attrs:{"model-value":!0,"single-icon-page":!0}})],1)],1),t._v(" "),e("div",{staticClass:"app-page-section is-body container"},[t._l(t.iconsByDate,(function(o,n,r){return[e("div",{key:n,staticClass:"app-page-section-title"},[t._v("\n          "+t._s(n)+"\n        ")]),t._v(" "),e("icon-grid",{key:r,attrs:{id:n,icons:o,action:"select","ads-params":t.getAdsParams(r),"carbon-ad":0===r}})]})),t._v(" "),e("div",{staticClass:"app-page-section description-padding"},[e("app-bottom-info",{attrs:{subtitle:t.pageSubtitle,description:t.descriptionPage}})],1),t._v(" "),e("client-only",[e("infinite-loading",{directives:[{name:"show",rawName:"v-show",value:!t.allIconsLoaded,expression:"!allIconsLoaded"}],attrs:{distance:1300},on:{infinite:t.fetchNext}},[e("div",{staticClass:"is-loading",attrs:{slot:"spinner"},slot:"spinner"})])],1)],2)])])}),[],!1,null,"0133bdcc",null);e.default=component.exports},759:function(t,e,o){"use strict";o.d(e,"a",(function(){return f}));var n=o(11),r=o(10),c=o(32);const l=Object(c.a)({baseURL:"https://search-app.icons8.com/api/iconsets"});async function d(t){let{term:e,limit:o=10,lang:n="en",platform:r="all"}=t;try{const t=await l.get("/similarTags",{params:{term:e,limit:o,lang:n,platform:r}});return t.data.success?t.data.data:null}catch(t){return null}}async function m(t){let{term:e}=t;try{const t=await l.get("/similarTags/info",{params:{term:e}});return t.data.success?t.data:null}catch(t){return null}}function f(t,e){function o(t,e){const{commonName:o,platform:n,colorHex:r}=t;if(!o||!n)return;let image=`https://img.icons8.com/${n}/${e}/${o}.png`;return r&&(image=`https://img.icons8.com/${n}/${e}w/${r}/${o}.png`),image}function c(t,e,o){var n,r;const c=e.parsedParams.animation||null,l=null===(n=e.parsedParams)||void 0===n||null===(r=n.color)||void 0===r?void 0:r.toUpperCase(),d="animated"===c;return o?t.t("WEB_APP.SEO.SEARCH.TITLE_DYNAMIC."+(d?"ONE_PLATFORM_ANIMATED":"ONE_PLATFORM"),{term:e.beautyTerm,platforms:e.style}):d?t.t("WEB_APP.SEO.SEARCH.META."+(d?"TITLE_ANIMATED":"TITLE_STATIC"),{term:e.beautyTerm}):l&&!l.includes("C-")?t.t(`WEB_APP.SEO.SEARCH.TITLE_ALL_${l}`,{term:e.beautyTerm}):t.t("WEB_APP.SEO.SEARCH.TITLE_ALL",{term:e.beautyTerm})}function l(t,e,o){return o?t.t("WEB_APP.SEO.SEARCH.DESCRIPTION_SINGLE",{term:e.beautyTerm,platform:e.platformName}):t.t("WEB_APP.SEO.SEARCH.DESCRIPTION_PAGE",{term:e.beautyTerm,platforms:"iOS, Material, Windows",pixelPerfectLink:"https://blog.icons8.com/articles/make-pixel-perfect-icons/",newIconsLink:"/icons/new",popularIconsLink:"/icons/set/popular"})}function f(t,e,o){var n,r;const c=e.parsedParams.animation||null,l="animated"===c,d="static"===c,m=null===(n=e.parsedParams)||void 0===n||null===(r=n.color)||void 0===r?void 0:r.toUpperCase();return o?t.t("WEB_APP.SEO.SEARCH.META."+(l?"DESCRIPTION_STYLE_ANIMATED":"DESCRIPTION_STYLE"),{term:e.beautyTerm,platform:e.style}):l?t.t("WEB_APP.SEO.SEARCH.META.DESCRIPTION_ANIMATED",{term:e.beautyTerm}):d?t.t("WEB_APP.SEO.SEARCH.META.DESCRIPTION_STATIC",{term:e.beautyTerm}):m&&!m.includes("C-")?t.t(`WEB_APP.SEO.SEARCH.META.DESCRIPTION_${m}`,{term:e.beautyTerm}):t.t("WEB_APP.SEO.SEARCH.META.DESCRIPTION",{term:e.beautyTerm})}function h(t,e){return(e.removeStatic||!1)&&t.link.length&&t.link.forEach((link=>(link.hreflang&&(link.href=link.href.replace("--static","")),link))),t}return{getPageSubtitle:function(t){return e.i18n.t("WEB_APP.SEO.SEARCH.SUBTITLE_PLATFORMS",{amount:t.amount,term:t.beautyTerm,platform:t.platformName})},getCanonical:function(t){const o=e.$hostUrl||"https://icons8.com";let n=t.url;try{n=decodeURIComponent(t.url)}catch(e){n=t.url}return`${o}${n}`},getShareImageLink:function(t,e){const o=t.pngSizes[t.pngSizes.length-1],n=o?o.title:"2x";return`https://img.icons8.com/${t.seoCode}/${n}w/${e}.png`},injectIconsSEO:function(d,m,E){var y;const style=t.state.platform.title,v=e.$hostUrl||"https://icons8.com",[P]=r.f.filter((t=>t.code===d.parsedParams.color)),A=t.state.filters.colorGradient,C="all"!==t.state.platform.apiCode;let I=(null==P||null===(y=P.value)||void 0===y?void 0:y.replace("#",""))||"000000";const T=`${v}${E.path}`;if(A){I=`${t.state.filters.colorGradient.start.replace("#","")||"000000"}/${t.state.filters.colorGradient.end.replace("#","")||"000000"}`}const S={url:T,titlePage:d.beautyTerm,descriptionPage:l(e.i18n,d,C),title:c(e.i18n,{...d,style:style},C),description:f(e.i18n,{...d,style:style},C),image:o({...d,colorHex:I},600),canonical:null,noindex:null};m?S.canonical=function(t,e,o){const style=e.parsedParams.$rootPath||"ios",n=e.parsedParams.color||null,r=e.parsedParams.animation||null,c=e.parsedParams.authors||null;if(o){let o=`${t}/icon/set/${e.term}/${style}`;return n&&(o+=`--${n}`),"animated"===r&&(o+=`--${r}`),c&&(o+=`--${c}`),o}let l=`${t}/icons/set/${e.term}`;n&&(l+=`--${n}`);"animated"===r&&(l+=`--${r}`);c&&(l+=`--${c}`);return l}(v,d,C):S.noindex=!0;let w=Object(n.getSeoData)(S);return w=h(w,{removeStatic:"static"===d.parsedParams.animation&&!1}),w},injectIconsContent:async function(t){let[o,n]=await Promise.all([d({term:t.term,limit:20,lang:e.i18n.localeProperties.code,platform:"all"}),m({term:t.term})]);return o=o.filter((e=>e.toLowerCase()!==t.term.toLowerCase())),{similarTags:o,isSearchInTags:n.isExist}},updateHreflang:h,translateHreflang:function(t,e){const{path:path,locales:o,routeParams:r,translations:c=[],isPack:l=!1}=e,d=r.term.split("--"),m=r.term.split("--")[0];return function(t,e){return e.forEach((e=>{const link=t.link.find((t=>t.hreflang===e.lang));link&&(link.href=e.url)})),t}(t,o.map((t=>{let e=null;e=l?c[t.iso]:c[t.code],e||(e=c.en||m);const o=Object(n.normalizeValue)(e);let f=`${path}${o}`;return d.map(((param,t)=>(f+=0!==t?`--${param}`:"",f))),r.platform&&(f+=`/${r.platform}`),{lang:t.code,url:t.href+f}})))},beautifyMadeIn:function(text,pattern,t){void 0===pattern&&(pattern="Made in"),void 0===t&&(t=" in ");const e=""+text;if(!new RegExp(pattern).test(e))return e;const content=e.split(t);if(!content[1])return e;let o=!1;return["USA","UK","UAE","NBA","FIFA"].forEach((t=>{t.toLowerCase()===content[1].toLowerCase()&&(content[1]=t,o=!0)})),o||(content[1]=content[1].replace(/(^|\s)\S/g,(t=>t.toUpperCase()))),content.join(t)},deleteHreflang:function(t){return t.link=t.link.filter((link=>!link.hreflang)),t}}}},761:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o(23),r=o(40);function c(t){let{pack:e,platform:o="all",amount:c=100,page:l=1,language:d,isAnimated:m,authors:f,sortBy:h,abortKey:E=null}=void 0===t?{}:t;const y=E&&Object(r.c)(E),v={category:e,amount:c,offset:(l-1)*c,platform:o,language:d,isAnimated:m,authors:f,sortBy:h};return n.b.request({url:"/siteApi/icons/packs/demarcation",signal:y,baseURL:"https://api-icons.icons8.com",method:"get",params:v}).then((t=>t.data))}},765:function(t,e,o){"use strict";o.d(e,"a",(function(){return v}));var n=o(87),r=o(76),c=(o(77),o(144)),l=o(759),d=o(142),m=o(32);const f=Object(m.a)({baseURL:"https://api-icons.icons8.com"});var h=o(761),E=o(18),y=o(10);function v(t,e,o){const m=Object(l.a)(t,e,o);async function v(n,r){let{req:c,res:l,redirect:d}=r;const m=t.state.iconsResponse,f=e.i18n.localeProperties.iso;if(o.fullPath===m.correctedPath&&!n.newRequest)return m;const h=await P(n,f),y=h.term.replace(/\s/g,"-"),v=n.term.replace(/-/g," ").toLowerCase(),A=decodeURIComponent(o.fullPath).replace(n.term,y);let C=v;if(t.commit(E.SET_ICONS_RESPONSE,{...h,initialTerm:C,correctedPath:A}),h.term===v)return h;encodeURIComponent(v);d(A)}function P(t,e){const o={term:t.term,platform:t.platform,page:t.page,isAnimated:t.isAnimated,authors:t.authors,language:e,isColor:t.isColor,amount:t.amount,spellcheck:t.spellcheck,authorName:t.author,action:t.action};return Object(n.a)(o)}async function A(t){var e;let{platform:o,pack:n,amount:r=24,language:c,sortBy:l="popular",abortKey:d}=void 0===t?{}:t;const{category:m}=await Object(h.a)({platform:o,pack:n,amount:r,language:c,sortBy:l,abortKey:d});return null!==(e=m.icons)&&void 0!==e?e:[]}async function C(t){var e,o;let{pack:n,language:r,abortKey:c}=t;const{category:l}=await Object(h.a)({pack:n,language:r,abortKey:c,authors:"external"});return null!==(e=null===(o=l.subcategory[0])||void 0===o?void 0:o.icons)&&void 0!==e?e:[]}async function I(t){var o,n;const r=e.i18n||e.$i18n,c={pack:t.pack,platform:t.platform,page:t.page,isAnimated:t.isAnimated,language:r.localeProperties.iso,authors:t.authors,amount:t.amount},l=await Object(h.a)(c),d=l.success,m=!!l&&!1,f=d&&(null===(o=l.category)||void 0===o||null===(n=o.subcategory)||void 0===n?void 0:n.length),E=m&&!1===d;return{...l,isFound:f,isLoaded:m,isLoadedAll:E}}function T(){const e=t.state.platform.isColor;let o;return t.state.filters.color&&!e&&(o=!1),o}function S(t){return y.r.includes(t)}return{fetchDataIcons:async function(n,l){var d,f,h,P;const A=t.state.filters.isAnimated,C=n.parsedParams.authors,I=t.state.filters.flags,w=t.state.platform.apiCode,_=t.state.platform.title,O=T(),L=I&&!I.includes(y.k.NOCORRECT),N=(e.i18n.localeProperties.iso,n.parsedParams.author?n.parsedParams.author.replace("-"," "):n.parsedParams.author),k=n.newRequest,$={...n,page:1,platform:w,platformName:_,isAnimated:A,authors:C,spellcheck:L,isColor:O,author:N,newRequest:k},[R,content]=await Promise.all([v($,l),m.injectIconsContent($)]);if(!R)return;const D=m.getPageSubtitle({...$,amount:R.countAll});if(w===y.o){const[e]=Object(c.a)();t.commit(E.SET_FILTER_COLOR_GRADIENT,e)}const[x]=R.icons;R.success&&x&&Object.assign($,{platform:x.platform,commonName:x.commonName});const j=R.icons.length,B=R.success&&R.countAll<=j,M=R.success&&j,F=Object(r.c)(null===(d=o.params)||void 0===d?void 0:d.term,{isAnimated:A,authors:t.state.filters.authors,color:null===(f=n.parsedParams)||void 0===f?void 0:f.color}),H=/[\u3000-\u303F | \u2600-\u26FF | \u2700-\u27BF]/giu.test(F),W=M&&F.length<=30&&F.split("-").length<=4&&content.isSearchInTags&&!H,U=M&&F.length<=30&&F.split("-").length<=4&&!o.fullPath.includes("--static")&&content.isSearchInTags&&!H;let G=m.injectIconsSEO($,W,o);if(U){var K;const path=null===(K=o.matched[0])||void 0===K?void 0:K.path.split(":")[0];G=m.translateHreflang(G,{path:path,locales:e.i18n.locales,routeParams:o.params,translations:R.searchTranslations})}else G=m.deleteHreflang(G);const Y=S(n.term),z=(null===(h=G)||void 0===h||null===(P=h.page)||void 0===P?void 0:P.description)||null;return{...R,...content,...n,pageSubtitle:D,descriptionPage:z,isFound:M,isLoadedAll:B,isPopular:Y,searchTemplate:"icons",seo:G}},fetchDataCategory:async function(n){const r=function(o){const n=o.replace(/-/g," ").replace(/[/\\^$*+?.()|[\]{}]/g,""),r=new RegExp(`^${n}$`,"i"),c=e.i18n.localeProperties.iso,l=t.state.appInfo.packs.find((t=>r.test(t.name[c])));return l}(n.term),c=t.state.platform.apiCode,l=t.state.platform.title,d=t.state.filters.isAnimated,f=t.state.platform.isExperimental;if(!r)return null;t.dispatch("setPack",r.code);const h={...n,page:1,platform:c,platformName:l,pack:f?`experimental-${c}-${r.code}`:r.code,isAnimated:d,authors:f?"external":void 0};let E=m.injectIconsSEO(n,!0,o);if(o.fullPath.includes("--static"))E=m.deleteHreflang(E);else{var y;const t={path:null===(y=o.matched[0])||void 0===y?void 0:y.path.split(":")[0],locales:e.i18n.locales.filter((t=>t.code!==e.i18n.locale)),routeParams:o.params,translations:r.name,isPack:!0};E=m.translateHreflang(E,t)}let v={isFound:!1},content={},P=!1;try{var A,C,T;v=await I(h);P=(null!==(A=null===(C=v.category)||void 0===C||null===(T=C.subcategory)||void 0===T?void 0:T.reduce(((t,e)=>{var o;return t+=null===(o=e.icons)||void 0===o?void 0:o.length}),0))&&void 0!==A?A:0)>=10,content=await m.injectIconsContent(h)}catch(t){console.error(t)}return{...v,...n,...content,isSubcategoryIcons:P,searchTemplate:"category",seo:E}},getNewIcons:async function(t){return await async function(t){let{amount:e=100,page:o=1,platform:n,language:r,authors:c="all",isColor:l,isAnimated:d}=t;const m={amount:e,offset:(o-1)*e,platform:n,language:r,authors:c,isColor:l,isAnimated:d},{data:data}=await f.get("/siteApi/icons/latest",{params:m});return data}(t)},getIcons:P,getIcon:async function(e){const{icon:o}=await t.dispatch("getIcon",{id:e,info:!0});return o},clearCache:async function(e){const o=t.state.auth.user.authToken;await Object(d.a)(o,e)},getIconsByDate:function(t){const e=y.m,o=y.n,n={};return t.forEach((t=>{const r=function(t){const n={date:"",code:""},r=new Date(t);switch(function(t){const e=864e5,o=Date.now(),n=new Date(Date.now()),r=new Date(t);return o-t<=e?"today":o-t<2*e?"yesterday":Math.ceil((o-t)/e)<=n.getDay()?"this_week":Math.ceil((o-t)/e)>n.getDay()&&Math.ceil((o-t)/e)<=n.getDay()+7?"last_week":n.getFullYear()===r.getFullYear()?"this_year":"other"}(t)){case"today":n.date="Today",n.code="today";break;case"yesterday":n.date="Yesterday",n.code="yesterday";break;case"this_week":n.date=e[r.getDay()],n.code=n.date.toLowerCase();break;case"last_week":n.date="Last "+e[r.getDay()],n.code="last_"+n.date.toLowerCase();break;case"this_year":n.date=o[r.getMonth()];break;default:n.date=`${o[r.getMonth()]} ${r.getFullYear()}`}return n}(1e3*t.timestamp);n[r.date]=n[r.date]||[],n[r.date].push(t)})),n},getCategory:I,getRelatedIconsList:async function(t,o){if(t.id&&!t.isExternal){const n={platform:t.platform,pack:t.categoryApiCode,language:e.i18n.localeProperties.iso,amount:o};return await A(n)}if(t.isExternal)return await C({pack:t.categoryApiCode,language:e.i18n.localeProperties.iso})},getRelatedIcons:A,getRelatedExternalIcons:C,getSimilarIcons:async function(e){var o,n;let{term:r,amount:c=24,language:l,isColor:d,abortKey:m}=void 0===e?{}:e;return null!==(o=null===(n=await t.dispatch("search",{term:r,amount:c,abortKey:m,language:l,...d&&{isColor:d}}))||void 0===n?void 0:n.icons)&&void 0!==o?o:[]},getSimilarIconIdVector:async function(t,e,o){var r;return null!==(r=(await Object(n.b)(t,e,o)).icons)&&void 0!==r?r:[]},get3DStyleIcons:async function(){const t=[];y.x.forEach((e=>{t.push(I({pack:"free-icons",platform:e,page:1,amount:24}))}));const e=[];try{(await Promise.all(t)).forEach(((t,o)=>{const n=[];t.category.subcategory.forEach((t=>{t.icons.forEach((t=>{n.push(t)}))})),e.push({styleApiCode:y.x[o],icons:n})}))}catch(t){console.error("Fetch 3D styles icons error:",t)}return e},isColorFilters:T,isPopularRequest:S,isPopular3DRequest:function(t){return y.q.includes(t)}}}},936:function(t,e,o){var content=o(1226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("3f4304a4",content,!0,{sourceMap:!1})}}]);
//# sourceMappingURL=index.5b849e16a79c0b2f9d87.js.map