"use strict";(self.webpackChunkcommerce_contributor=self.webpackChunkcommerce_contributor||[]).push([[505],{88466:function(e,t,s){s.d(t,{o:function(){return D}});var i=s(15785),l=s(35776),a=s(67293),n=s(4539),r=s(54129),o=s(82026),c=s(95459),u=s(3987),d=s(94184),m=s.n(d),g=s(82357),h=s(22222),p=s(18870),v=s(73181);const f="688px",y="All Products",b="keywords",w=e=>e.replace(/[\u00A0-\u9999<>\&]/g,(e=>"&#"+e.charCodeAt(0)+";")).replace(/&#60;mark&#62;/g,"<mark>").replace(/&#60;em&#62;/g,"<em>").replace(/&#60;\/mark&#62;/g,"</mark>").replace(/&#60;\/em&#62;/g,"</em>"),x=(e,t)=>{const s=new URLSearchParams(window.location.search);s.set(e,t),window.history.replaceState({},"",`${window.location.pathname}?${s}`)},Z=()=>{window.history.replaceState({},"",`${window.location.pathname}`)},S=async(e,t,s,i,l,a,n,r)=>{let o;if(a.length)o=a;else{const t=await e.listIndices(),i=Object.values(t.items).map((e=>{let{name:t}=e;return t})),a=l.map((e=>e.productIndices)).flat().map((e=>{let{indexName:t}=e;return s?`${s}-${t}`:t})).filter((e=>i.includes(e)));n(a),o=a}i=i.includes("all")?o:i.filter((e=>o.includes(e)));const c=[];return i.forEach((e=>{c.push({indexName:e,query:t,params:{facets:[b],attributesToRetrieve:["objectID","url","product"],hitsPerPage:Math.ceil(100/i.length),filters:r.map((e=>`keywords:"${e}"`)).join(" AND ")}})})),await e.multipleQueries(c)},z=(e,t)=>{e.forEach((e=>{let{objectID:s,url:i,path:l,_highlightResult:a}=e,n="";n=l||(i.includes("https://developer.adobe.com")?i.replace("https://developer.adobe.com",""):i),(0,c.Bm)(n)||t.find((e=>e.url===n))||t.push({objectID:s,url:n,_highlightResult:a})}))};var k={name:"5fn1g1",styles:"margin-top:var(--spectrum-global-dimension-size-100)"},A={name:"pcg0ds",styles:"width:var(--spectrum-global-dimension-size-2400);height:var(--spectrum-global-dimension-size-1200);margin-bottom:var(--spectrum-global-dimension-size-300);fill:var(--spectrum-global-color-static-gray-500)"},N={name:"rwu85d",styles:"margin:var(--spectrum-global-dimension-size-100) 0"},E={name:"1jwcxx3",styles:"font-style:italic"},P={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},q={name:"1hctma0",styles:"margin:var(--spectrum-global-dimension-size-300);mark,em{background-color:transparent;color:inherit;font-weight:700;font-style:inherit;}"},I={name:"13udsys",styles:"height:100%"},j={name:"oragi2",styles:"white-space:nowrap;text-overflow:ellipsis"},_={name:"i2ekfq",styles:"margin-top:var(--spectrum-global-dimension-size-200);margin-bottom:var(--spectrum-global-dimension-size-100)"},H={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},L={name:"3tj9xb",styles:"width:100%;height:100%;display:grid;place-items:start center"},M={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},O={name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"},R={name:"14gwd3k",styles:"margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-800)"},$={name:"1ef11wo",styles:"font-style:italic;margin:var(--spectrum-global-dimension-size-50) 0"},B={name:"pgkztz",styles:"mark,em{background-color:transparent;color:inherit;font-weight:inherit;font-style:inherit;text-decoration:underline;}"},T={name:"11qpleq",styles:"min-width:auto;width:100%"},C={name:"1d3w5wq",styles:"width:100%"};const D=e=>{let{algolia:t,indexAll:s,indexPrefix:d,showSearch:b,setShowSearch:D,searchButtonId:F,isIFramed:Q}=e;const{0:V,1:W}=(0,l.useState)(!1),{0:J,1:K}=(0,l.useState)(""),{0:U,1:X}=(0,l.useState)(""),{0:G,1:Y}=(0,l.useState)(["all"]),{0:ee,1:te}=(0,l.useState)([y]),{0:se,1:ie}=(0,l.useState)([]),{0:le,1:ae}=(0,l.useState)([]),{0:ne,1:re}=(0,l.useState)(!1),{0:oe,1:ce}=(0,l.useState)(!1),{0:ue,1:de}=(0,l.useState)(!1),me=(0,l.useRef)(null),ge=(0,l.useRef)(null),he=(0,l.useRef)(null),pe=(0,l.useRef)(null),{0:ve,1:fe}=(0,l.useState)([]),{0:ye,1:be}=(0,l.useState)([]),{0:we,1:xe}=(0,l.useState)([]),{0:Ze,1:Se}=(0,l.useState)([]),{0:ze,1:ke}=(0,l.useState)(!1),{0:Ae,1:Ne}=(0,l.useState)(!1),{0:Ee,1:Pe}=(0,l.useState)(0),qe=async()=>{if(J.length){var e,i;let l;if(ke(!1),x(c.AQ.query,J),x(c.AQ.keywords,le),x(c.AQ.index,G),Q){const e=JSON.stringify({query:J,keywords:le,index:G}),t=(()=>{const e=document.referrer;return(e.indexOf("localhost")>=0||e.indexOf("developer-stage.adobe")>=0||e.indexOf("hlx.page")>=0||e.indexOf("hlx.live")>=0||e.indexOf("developer.adobe")>=0)&&e})();t&&parent.postMessage(e,t)}re(!0),J!==U?(W(!0),l=await S(t,J,d,["all"],s,se,ie,le)):l=await S(t,J,d,G,s,se,ie,le);const a=ee.filter((e=>e!==y))[0],n=[y],r=[],o=[];null!==(e=l)&&void 0!==e&&null!==(i=e.results)&&void 0!==i&&i.length&&l.results.forEach((e=>{let{hits:t,facets:s}=e;if(void 0!==s){if(t.length>0){const e=t[0].product;e&&(n.includes(e)||(e!==a?n.push(e):n.splice(1,0,a)))}return z(t,r),((e,t)=>{e.keywords&&Object.keys(e.keywords).forEach((s=>{const i=t.find((e=>Object.keys(e)[0]===s));i?i[s]+=e.keywords[s]:t.push({[s]:e.keywords[s]})}))})(s,o),!0}})),J!==U?(xe(n),X(J),a&&n.includes(a)?(Y((0,u.getIndexesFromProduct)(a)),Ne(!0)):(be(r),Se(o),W(!1))):(be(r),Se(o),W(!1))}};return(0,l.useEffect)((async()=>{Q&&window.addEventListener("message",(e=>{const t=JSON.parse(e.data);if(t.localPathName){let e=t.localPathName;if("/"!==e){e.startsWith("/")||(e=`/${e}`),e.endsWith("/")||(e=`${e}/`);const t=s.find((t=>t.productIndices.some((t=>e.startsWith(t.indexPathPrefix)))));null!=t&&t.productName&&te([t.productName].concat((0,i.Z)(ee)))}const l=JSON.stringify({received:t.localPathName});parent.postMessage(l,"*")}}));const e=await t.listIndices(),l=Object.values(e.items).map((e=>{let{name:t}=e;return t})),a=s.map((e=>e.productIndices)).flat().map((e=>{let{indexName:t}=e;return d?`${d}-${t}`:t})).filter((e=>l.includes(e)));ie(a)}),[]),(0,l.useEffect)((()=>{if(b){const e=new URL(window.location).searchParams,t=e.get(c.AQ.query),s=e.get(c.AQ.keywords),i=e.get(c.AQ.index);i&&Y(i.split(",")),s&&ae(s.split(",")),null!=t&&t.length&&(K(t),de(!0),Ne(!0)),null!=he&&he.current&&he.current.focus()}else Z()}),[b]),(0,l.useEffect)((()=>{Ae&&(Ne(!1),qe())}),[Ae]),(0,l.useEffect)((()=>{null!=pe&&pe.current&&(pe.current.scrollTop=0)}),[ye]),(0,l.useEffect)((()=>{const e=e=>{let{target:t}=e;ke(!1),me.current&&!me.current.contains(t)&&t.id!==F&&D(!1)};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[ke,ne,D,me]),(0,l.useEffect)((()=>{const e=e=>{let{key:t}=e;if("Escape"===t){D(!1),Z();const e=document.getElementById("aio-Search-close");e&&e.focus()}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[D]),(0,l.useEffect)((()=>{const e=setTimeout((()=>l()),500),l=async()=>{if(J.length&&!ye.length){var e;de(!0);const l=await(async(e,t,s,l,a,n,r)=>{const o=[];let c;if(n.length)c=n;else{const t=await e.listIndices(),i=Object.values(t.items).map((e=>{let{name:t}=e;return t})),l=a.map((e=>e.productIndices)).flat().map((e=>{let{indexName:t}=e;return s?`${s}-${t}`:t})).filter((e=>i.includes(e)));r(l),c=l}if(l[0]===y)l=c;else{const e=l.filter((e=>e!==y)),t=(0,u.getIndexesFromProduct)(e[0]);l=[].concat((0,i.Z)(t),(0,i.Z)(c.filter((t=>!e.includes(t))))).filter((e=>c.includes(e)))}return l.forEach((e=>{o.push({indexName:e,query:t,params:{hitsPerPage:Math.ceil(50/l.length),attributesToRetrieve:["objectID","url","title","description"]}})})),await e.multipleQueries(o)})(t,J,d,ee,s,se,ie);if(Pe(Ee+1),console.log("Total search queries counted is:",Ee),null!=l&&null!==(e=l.results)&&void 0!==e&&e.length){const e=[];l.results.forEach((t=>{let{hits:s}=t;z(s,e)})),fe(e),ye.length||re(!1)}else fe([]);ke(!0)}else de(!1),ke(!1)};return()=>clearTimeout(e)}),[J]),Q&&(0,l.useEffect)((()=>{if(ge&&ve.length>0){const e=ge.current.querySelectorAll("a");e.length>0&&e.forEach((e=>{e.target="_top"}))}if(pe&&ye.length>0){const e=pe.current.querySelectorAll("a");e.length>0&&e.forEach((e=>{e.target="_top"}))}}),[ve,ye]),(0,a.tZ)(l.default.Fragment,null,(0,a.tZ)("div",{ref:me,css:(0,a.iv)("position:fixed;top:",Q?"0":"var(--spectrum-global-dimension-size-800)",";left:0;right:0;",ne&&"bottom: 0;"," background-color:var(--spectrum-global-color-static-white);z-index:10;@media screen and (max-width: ",c.q9,"){top:var(--spectrum-global-dimension-size-1200);}","")},(0,a.tZ)("div",{css:(0,a.iv)("position:relative;margin:var(--spectrum-global-dimension-size-400) auto;max-width:",f,";@media screen and (max-width: ",c.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},(0,a.tZ)("form",{css:C,className:"spectrum-Search",onSubmit:async e=>{e.preventDefault(),ae([]),de(!0),Ne(!0)}},(0,a.tZ)("div",{className:m()("spectrum-Textfield",{"is-focused":oe}),css:T},(0,a.tZ)(h.Magnify,{className:"spectrum-Textfield-icon"}),(0,a.tZ)("input",{ref:he,value:J,onFocus:()=>{ce(!0)},onBlur:()=>{ce(!1)},onKeyDown:e=>{let{key:t}=e;null!=ge&&ge.current&&("ArrowDown"===t?ge.current.querySelector('[tabindex="0"]').focus():"ArrowUp"===t&&ge.current.querySelector('[tabindex="0"]:last-of-type').focus())},onChange:async e=>{const t=e.target.value;K(t)},"aria-label":"Search",type:"search",placeholder:"Search",className:"spectrum-Textfield-input spectrum-Search-input",autoComplete:"off"})),ue&&(0,a.tZ)(g.K,{css:(0,a.iv)("position:absolute;margin-right:var(--spectrum-global-dimension-size-100);margin-bottom:var(--spectrum-global-dimension-size-40);@media screen and (max-width: ",c.q9,"){margin-right:0;}&:focus{border:2px solid #007aff!important;border-radius:15%!important;}",""),tabIndex:"0",isQuiet:!0,"aria-label":"Clear Search",type:"reset",className:"spectrum-ClearButton spectrum-Search-clearButton",onClick:()=>{K(""),be([]),re(!1),Z(),he.current.focus()}},(0,a.tZ)(h.Close,null))),(0,a.tZ)(o.J,{isOpen:ze,css:(0,a.iv)("position:absolute;top:var(--spectrum-global-dimension-size-400);width:",f,";@media screen and (max-width: ",c.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},ve.length>0?(0,a.tZ)(r.v2,{ref:ge,onKeyDown:e=>{let{key:t}=e;if(null!=ge&&ge.current&&ge.current.contains(document.activeElement))if("ArrowDown"===t){const e=document.activeElement.nextElementSibling;e?e.focus():ge.current.querySelector('[tabindex="0"]').focus()}else if("ArrowUp"===t){const e=document.activeElement.previousElementSibling;e?e.focus():ge.current.querySelector('[tabindex="0"]:last-of-type').focus()}}},ve.map((e=>{var t;const s=`${location.origin}${e.url}`,i=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",l=Object.entries(e._highlightResult).filter((e=>e[1].matchedWords.length>0));let n="";var o,c,u,d,m,g,h,p;l.length>1?(l.sort(((e,t)=>e[1].value.length>t[1].value.length?-1:1)),n=(null===(o=l[0][1])||void 0===o||null===(c=o.value)||void 0===c?void 0:c.length)>(null===(u=l[1][1])||void 0===u||null===(d=u.value)||void 0===d?void 0:d.length)?null===(m=l[0][1])||void 0===m?void 0:m.value:null===(g=l[1][1])||void 0===g?void 0:g.value):n=null!==(h=l[0][1])&&void 0!==h&&h.value?null===(p=l[0][1])||void 0===p?void 0:p.value:"";return n=n.substring(0,250),(0,a.tZ)(r.ck,{key:e.objectID,href:s},(0,a.tZ)("div",{css:B},(0,a.tZ)("strong",{dangerouslySetInnerHTML:{__html:w(i)}}),(0,a.tZ)("div",{css:$},s),(0,a.tZ)("div",{dangerouslySetInnerHTML:{__html:w(n)}})))}))):(0,a.tZ)("div",{css:R},(0,a.tZ)("div",{css:O},(0,a.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS",css:M},"No Results Found"),(0,a.tZ)("em",null,"Try another search term"))))),V&&(0,a.tZ)("div",{css:L},(0,a.tZ)(v._,{size:"L"})),ne&&!V&&(0,a.tZ)("div",{css:(0,a.iv)("display:flex;max-width:",c.Av,";margin:auto;height:100%;@media screen and (max-width: ",c.q9,"){overflow:auto;flex-wrap:wrap;}","")},(0,a.tZ)("div",{css:(0,a.iv)("display:flex;align-items:flex-start;flex-direction:column;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);width:",c.dP,";","")},(0,a.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:H},"Filter by Products"),(0,a.tZ)("div",{css:(0,a.iv)("display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;max-height:30%;width:",c.dP,";@media screen and (max-width: ",c.q9,"){margin-bottom:0;}","")},we.map(((e,t)=>(0,a.tZ)(p.X,{key:t,isSelected:e===y?G.includes("all"):G.some((t=>(0,u.getIndexesFromProduct)(e).includes(t))),value:e,onChange:t=>{Y(t?"All Products"===e?["all"]:[].concat((0,i.Z)(G.filter((e=>"all"!==e))),(0,i.Z)((0,u.getIndexesFromProduct)(e))):"All Products"===e?G.filter((e=>"all"!==e)):G.filter((t=>!(0,u.getIndexesFromProduct)(e).includes(t)))),ae([]),Ne(!0)}},(0,a.tZ)("span",null,e))))),(0,a.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:_},"Filter by Keywords"),(0,a.tZ)("div",{css:(0,a.iv)("margin-bottom:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;max-height:50%;width:",c.dP,";@media screen and (max-width: ",c.q9,"){margin-bottom:0;}","")},Ze.length>0?Ze.map(((e,t)=>{const s=Object.keys(e)[0];return(0,a.tZ)(p.X,{key:t,isSelected:le.includes(s),value:s,onChange:e=>{ae(e?e=>[].concat((0,i.Z)(e),[s]):le.filter((e=>e!==s))),Ne(!0)}},(0,a.tZ)("span",{css:j},s))})):(0,a.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS"},"No filter options available"))),(0,a.tZ)("div",{css:I},ye.length>0?(0,a.tZ)("div",{ref:pe,css:(0,a.iv)("height:calc(\n                      100% - var(--spectrum-global-dimension-size-800) - var(--spectrum-global-dimension-size-800) -\n                        var(--spectrum-global-dimension-size-200)\n                    );overflow:auto;@media screen and (max-width: ",c.q9,"){height:auto;overflow:inherit;}","")},ye.map((e=>{var t;const s=`${location.origin}${e.url}`,i=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",l=Object.entries(e._highlightResult).filter((e=>e[1].matchedWords.length>0));let r="";var o,c,u,d,m,g,h,p;l.length>1?(l.sort(((e,t)=>e[1].value.length>t[1].value.length?-1:1)),r=(null===(o=l[0][1])||void 0===o||null===(c=o.value)||void 0===c?void 0:c.length)>(null===(u=l[1][1])||void 0===u||null===(d=u.value)||void 0===d?void 0:d.length)?null===(m=l[0][1])||void 0===m?void 0:m.value:null===(g=l[1][1])||void 0===g?void 0:g.value):r=null!==(h=l[0][1])&&void 0!==h&&h.value?null===(p=l[0][1])||void 0===p?void 0:p.value:"";return r=r.substring(0,250),(0,a.tZ)("div",{css:q},(0,a.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeM",css:P},(0,a.tZ)(n.P,{to:s},(0,a.tZ)("span",{dangerouslySetInnerHTML:{__html:w(i)}}))),(0,a.tZ)("div",{css:E},(0,a.tZ)(n.P,{variant:"secondary",to:s},s)),(0,a.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS",css:N,dangerouslySetInnerHTML:{__html:w(r)}}))}))):(0,a.tZ)("div",{css:(0,a.iv)("position:absolute;top:var(--spectrum-global-dimension-size-3600);height:calc(2 * var(--spectrum-global-dimension-size-1250));margin-top:calc(-1 * var(--spectrum-global-dimension-size-1250));text-align:center;right:0;left:0;padding:0 var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",c.q9,"){position:static;margin:var(--spectrum-global-dimension-size-800) 0;height:auto;}","")},(0,a.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 104 90",css:A},(0,a.tZ)("g",null,(0,a.tZ)("g",null,(0,a.tZ)("path",{d:"M37.5,69A24.54,24.54,0,1,0,17,57.92l0,0L1.46,73.52A5,5,0,0,0,5,82.05H5a5,5,0,0,0,3.54-1.47L24.06,65l0,0A24.33,24.33,0,0,0,37.5,69Zm0-46A21.5,21.5,0,1,1,16,44.5,21.52,21.52,0,0,1,37.5,23ZM6.41,78.46A2,2,0,0,1,5,79.05H5a2,2,0,0,1-1.42-3.42L18.83,60.34a25.21,25.21,0,0,0,2.83,2.83Z"}),(0,a.tZ)("path",{d:"M28.67,53.33a1.51,1.51,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l6.71-6.71,6.71,6.71a1.5,1.5,0,0,0,2.12,0,1.49,1.49,0,0,0,0-2.12L39.62,44.5l6.71-6.71a1.49,1.49,0,0,0,0-2.12,1.51,1.51,0,0,0-2.12,0L37.5,42.38l-6.71-6.71a1.5,1.5,0,0,0-2.12,2.12l6.71,6.71-6.71,6.71A1.51,1.51,0,0,0,28.67,53.33Z"}),(0,a.tZ)("path",{d:"M102.5,31a1.5,1.5,0,0,0-1.5,1.5V86.17a.83.83,0,0,1-.83.83H38.83a.83.83,0,0,1-.83-.83V73.5a1.5,1.5,0,0,0-3,0V86.17A3.84,3.84,0,0,0,38.83,90h61.34A3.84,3.84,0,0,0,104,86.17V32.5A1.5,1.5,0,0,0,102.5,31Z"}),(0,a.tZ)("path",{d:"M37.5,17A1.5,1.5,0,0,0,39,15.5V3.83A.83.83,0,0,1,39.83,3H75V26.5A1.5,1.5,0,0,0,76.5,28h25.55a1.5,1.5,0,0,0,1-2.57L77.55.43a1.43,1.43,0,0,0-.49-.32A1.41,1.41,0,0,0,76.52,0H39.83A3.84,3.84,0,0,0,36,3.83V15.5A1.5,1.5,0,0,0,37.5,17ZM78,5.07,98.37,25H78Z"})))),(0,a.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--light spectrum-Heading--sizeM"},"Sorry, we couldn't find any results for ",(0,a.tZ)("strong",null,J)),(0,a.tZ)("p",{className:"spectrum-Body spectrum-Body--S",css:k},"Make sure all the words are spelled correctly or try to refine your keywords."))))),!ne&&(0,a.tZ)("div",{css:(0,a.iv)("position:fixed;z-index:1;top:",Q?"var(--spectrum-global-dimension-size-800)":"calc(var(--spectrum-global-dimension-size-1200) + var(--spectrum-global-dimension-size-800))",";bottom:0;left:0;right:0;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;","")}))}}}]);
//# sourceMappingURL=379b34f3-2ca6ee96f2bd7bff7c6c.js.map