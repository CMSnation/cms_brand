import{$ as Q,_ as B}from"./button-14336666.js";import{r as c,e as we,$ as Ce}from"./app-2eed7194.js";import{d as k,b as H,e as Te}from"./index-8bfea8f1.js";import{$ as _,a as Pe}from"./index-96f8db38.js";function Oe(e,t=globalThis==null?void 0:globalThis.document){const n=k(e);c.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const Z="dismissableLayer.update",xe="dismissableLayer.pointerDownOutside",Re="dismissableLayer.focusOutside";let ee;const de=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Le=c.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:a,onPointerDownOutside:u,onFocusOutside:l,onInteractOutside:o,onDismiss:h,...y}=e,f=c.useContext(de),[s,m]=c.useState(null),v=(n=s==null?void 0:s.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,w]=c.useState({}),i=Q(t,E=>m(E)),d=Array.from(f.layers),[b]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),S=d.indexOf(b),p=s?d.indexOf(s):-1,g=f.layersWithOutsidePointerEventsDisabled.size>0,$=p>=S,D=ke(E=>{const O=E.target,J=[...f.branches].some(K=>K.contains(O));!$||J||(u==null||u(E),o==null||o(E),E.defaultPrevented||h==null||h())},v),T=Fe(E=>{const O=E.target;[...f.branches].some(K=>K.contains(O))||(l==null||l(E),o==null||o(E),E.defaultPrevented||h==null||h())},v);return Oe(E=>{p===f.layers.size-1&&(a==null||a(E),!E.defaultPrevented&&h&&(E.preventDefault(),h()))},v),c.useEffect(()=>{if(s)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(ee=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(s)),f.layers.add(s),te(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=ee)}},[s,v,r,f]),c.useEffect(()=>()=>{s&&(f.layers.delete(s),f.layersWithOutsidePointerEventsDisabled.delete(s),te())},[s,f]),c.useEffect(()=>{const E=()=>w({});return document.addEventListener(Z,E),()=>document.removeEventListener(Z,E)},[]),c.createElement(_.div,B({},y,{ref:i,style:{pointerEvents:g?$?"auto":"none":void 0,...e.style},onFocusCapture:H(e.onFocusCapture,T.onFocusCapture),onBlurCapture:H(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:H(e.onPointerDownCapture,D.onPointerDownCapture)}))}),De=c.forwardRef((e,t)=>{const n=c.useContext(de),r=c.useRef(null),a=Q(t,r);return c.useEffect(()=>{const u=r.current;if(u)return n.branches.add(u),()=>{n.branches.delete(u)}},[n.branches]),c.createElement(_.div,B({},e,{ref:a}))});function ke(e,t=globalThis==null?void 0:globalThis.document){const n=k(e),r=c.useRef(!1),a=c.useRef(()=>{});return c.useEffect(()=>{const u=o=>{if(o.target&&!r.current){let y=function(){fe(xe,n,h,{discrete:!0})};const h={originalEvent:o};o.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=y,t.addEventListener("click",a.current,{once:!0})):y()}r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",u),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Fe(e,t=globalThis==null?void 0:globalThis.document){const n=k(e),r=c.useRef(!1);return c.useEffect(()=>{const a=u=>{u.target&&!r.current&&fe(Re,n,{originalEvent:u},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function te(){const e=new CustomEvent(Z);document.dispatchEvent(e)}function fe(e,t,n,{discrete:r}){const a=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?Pe(a,u):a.dispatchEvent(u)}const Rt=Le,Lt=De;let X=0;function Dt(){c.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:ne()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:ne()),X++,()=>{X===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),X--}},[])}function ne(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const j="focusScope.autoFocusOnMount",Y="focusScope.autoFocusOnUnmount",re={bubbles:!1,cancelable:!0},kt=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:u,...l}=e,[o,h]=c.useState(null),y=k(a),f=k(u),s=c.useRef(null),m=Q(t,i=>h(i)),v=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let i=function(p){if(v.paused||!o)return;const g=p.target;o.contains(g)?s.current=g:P(s.current,{select:!0})},d=function(p){if(v.paused||!o)return;const g=p.relatedTarget;g!==null&&(o.contains(g)||P(s.current,{select:!0}))},b=function(p){const g=document.activeElement;for(const $ of p)$.removedNodes.length>0&&(o!=null&&o.contains(g)||P(o))};document.addEventListener("focusin",i),document.addEventListener("focusout",d);const S=new MutationObserver(b);return o&&S.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",i),document.removeEventListener("focusout",d),S.disconnect()}}},[r,o,v.paused]),c.useEffect(()=>{if(o){oe.add(v);const i=document.activeElement;if(!o.contains(i)){const b=new CustomEvent(j,re);o.addEventListener(j,y),o.dispatchEvent(b),b.defaultPrevented||(Ae(Be(ve(o)),{select:!0}),document.activeElement===i&&P(o))}return()=>{o.removeEventListener(j,y),setTimeout(()=>{const b=new CustomEvent(Y,re);o.addEventListener(Y,f),o.dispatchEvent(b),b.defaultPrevented||P(i??document.body,{select:!0}),o.removeEventListener(Y,f),oe.remove(v)},0)}}},[o,y,f,v]);const w=c.useCallback(i=>{if(!n&&!r||v.paused)return;const d=i.key==="Tab"&&!i.altKey&&!i.ctrlKey&&!i.metaKey,b=document.activeElement;if(d&&b){const S=i.currentTarget,[p,g]=Ie(S);p&&g?!i.shiftKey&&b===g?(i.preventDefault(),n&&P(p,{select:!0})):i.shiftKey&&b===p&&(i.preventDefault(),n&&P(g,{select:!0})):b===S&&i.preventDefault()}},[n,r,v.paused]);return c.createElement(_.div,B({tabIndex:-1},l,{ref:m,onKeyDown:w}))});function Ae(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(P(r,{select:t}),document.activeElement!==n)return}function Ie(e){const t=ve(e),n=ae(t,e),r=ae(t.reverse(),e);return[n,r]}function ve(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ae(e,t){for(const n of e)if(!Ne(n,{upTo:t}))return n}function Ne(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function We(e){return e instanceof HTMLInputElement&&"select"in e}function P(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&We(e)&&t&&e.select()}}const oe=Me();function Me(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ce(e,t),e.unshift(t)},remove(t){var n;e=ce(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function ce(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Be(e){return e.filter(t=>t.tagName!=="A")}const _e=we["useId".toString()]||(()=>{});let Ue=0;function Ft(e){const[t,n]=c.useState(_e());return Te(()=>{e||n(r=>r??String(Ue++))},[e]),e||(t?`radix-${t}`:"")}const At=c.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...a}=e;return r?Ce.createPortal(c.createElement(_.div,B({},a,{ref:t})),r):null});var Ke=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},x=new WeakMap,F=new WeakMap,A={},z=0,he=function(e){return e&&(e.host||he(e.parentNode))},He=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=he(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Xe=function(e,t,n,r){var a=He(t,Array.isArray(e)?e:[e]);A[n]||(A[n]=new WeakMap);var u=A[n],l=[],o=new Set,h=new Set(a),y=function(s){!s||o.has(s)||(o.add(s),y(s.parentNode))};a.forEach(y);var f=function(s){!s||h.has(s)||Array.prototype.forEach.call(s.children,function(m){if(o.has(m))f(m);else{var v=m.getAttribute(r),w=v!==null&&v!=="false",i=(x.get(m)||0)+1,d=(u.get(m)||0)+1;x.set(m,i),u.set(m,d),l.push(m),i===1&&w&&F.set(m,!0),d===1&&m.setAttribute(n,"true"),w||m.setAttribute(r,"true")}})};return f(t),o.clear(),z++,function(){l.forEach(function(s){var m=x.get(s)-1,v=u.get(s)-1;x.set(s,m),u.set(s,v),m||(F.has(s)||s.removeAttribute(r),F.delete(s)),v||s.removeAttribute(n)}),z--,z||(x=new WeakMap,x=new WeakMap,F=new WeakMap,A={})}},It=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=t||Ke(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),Xe(r,a,n,"aria-hidden")):function(){return null}},C=function(){return C=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},C.apply(this,arguments)};function me(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function je(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,u;r<a;r++)(u||!(r in t))&&(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return e.concat(u||Array.prototype.slice.call(t))}var W="right-scroll-bar-position",M="width-before-scroll-bar",Ye="with-scroll-bars-hidden",ze="--removed-body-scroll-bar-size";function Ve(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ge(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}function Ze(e,t){return Ge(t||null,function(n){return e.forEach(function(r){return Ve(r,n)})})}function qe(e){return e}function Qe(e,t){t===void 0&&(t=qe);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(u){var l=t(u,r);return n.push(l),function(){n=n.filter(function(o){return o!==l})}},assignSyncMedium:function(u){for(r=!0;n.length;){var l=n;n=[],l.forEach(u)}n={push:function(o){return u(o)},filter:function(){return n}}},assignMedium:function(u){r=!0;var l=[];if(n.length){var o=n;n=[],o.forEach(u),l=n}var h=function(){var f=l;l=[],f.forEach(u)},y=function(){return Promise.resolve().then(h)};y(),n={push:function(f){l.push(f),y()},filter:function(f){return l=l.filter(f),n}}}};return a}function Je(e){e===void 0&&(e={});var t=Qe(null);return t.options=C({async:!0,ssr:!1},e),t}var be=function(e){var t=e.sideCar,n=me(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return c.createElement(r,C({},n))};be.isSideCarExport=!0;function et(e,t){return e.useMedium(t),be}var pe=Je(),V=function(){},U=c.forwardRef(function(e,t){var n=c.useRef(null),r=c.useState({onScrollCapture:V,onWheelCapture:V,onTouchMoveCapture:V}),a=r[0],u=r[1],l=e.forwardProps,o=e.children,h=e.className,y=e.removeScrollBar,f=e.enabled,s=e.shards,m=e.sideCar,v=e.noIsolation,w=e.inert,i=e.allowPinchZoom,d=e.as,b=d===void 0?"div":d,S=me(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),p=m,g=Ze([n,t]),$=C(C({},S),a);return c.createElement(c.Fragment,null,f&&c.createElement(p,{sideCar:pe,removeScrollBar:y,shards:s,noIsolation:v,inert:w,setCallbacks:u,allowPinchZoom:!!i,lockRef:n}),l?c.cloneElement(c.Children.only(o),C(C({},$),{ref:g})):c.createElement(b,C({},$,{className:h,ref:g}),o))});U.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};U.classNames={fullWidth:M,zeroRight:W};var ie,tt=function(){if(ie)return ie;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function nt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=tt();return t&&e.setAttribute("nonce",t),e}function rt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function at(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var ot=function(){var e=0,t=null;return{add:function(n){e==0&&(t=nt())&&(rt(t,n),at(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ct=function(){var e=ot();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ge=function(){var e=ct(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},it={left:0,top:0,right:0,gap:0},G=function(e){return parseInt(e||"",10)||0},ut=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[G(n),G(r),G(a)]},st=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return it;var t=ut(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},lt=ge(),dt=function(e,t,n,r){var a=e.left,u=e.top,l=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Ye,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(W,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(M,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(W," .").concat(W,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(M," .").concat(M,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(ze,": ").concat(o,`px;
  }
`)},ft=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r,u=c.useMemo(function(){return st(a)},[a]);return c.createElement(lt,{styles:dt(u,!t,a,n?"":"!important")})},q=!1;if(typeof window<"u")try{var I=Object.defineProperty({},"passive",{get:function(){return q=!0,!0}});window.addEventListener("test",I,I),window.removeEventListener("test",I,I)}catch{q=!1}var R=q?{passive:!1}:!1,vt=function(e){return e.tagName==="TEXTAREA"},ye=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!vt(e)&&n[t]==="visible")},ht=function(e){return ye(e,"overflowY")},mt=function(e){return ye(e,"overflowX")},ue=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=Ee(e,n);if(r){var a=$e(e,n),u=a[1],l=a[2];if(u>l)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},bt=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},pt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ee=function(e,t){return e==="v"?ht(t):mt(t)},$e=function(e,t){return e==="v"?bt(t):pt(t)},gt=function(e,t){return e==="h"&&t==="rtl"?-1:1},yt=function(e,t,n,r,a){var u=gt(e,window.getComputedStyle(t).direction),l=u*r,o=n.target,h=t.contains(o),y=!1,f=l>0,s=0,m=0;do{var v=$e(e,o),w=v[0],i=v[1],d=v[2],b=i-d-u*w;(w||b)&&Ee(e,o)&&(s+=b,m+=w),o=o.parentNode}while(!h&&o!==document.body||h&&(t.contains(o)||t===o));return(f&&(a&&s===0||!a&&l>s)||!f&&(a&&m===0||!a&&-l>m))&&(y=!0),y},N=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},se=function(e){return[e.deltaX,e.deltaY]},le=function(e){return e&&"current"in e?e.current:e},Et=function(e,t){return e[0]===t[0]&&e[1]===t[1]},$t=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},St=0,L=[];function wt(e){var t=c.useRef([]),n=c.useRef([0,0]),r=c.useRef(),a=c.useState(St++)[0],u=c.useState(function(){return ge()})[0],l=c.useRef(e);c.useEffect(function(){l.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var i=je([e.lockRef.current],(e.shards||[]).map(le),!0).filter(Boolean);return i.forEach(function(d){return d.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),i.forEach(function(d){return d.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var o=c.useCallback(function(i,d){if("touches"in i&&i.touches.length===2)return!l.current.allowPinchZoom;var b=N(i),S=n.current,p="deltaX"in i?i.deltaX:S[0]-b[0],g="deltaY"in i?i.deltaY:S[1]-b[1],$,D=i.target,T=Math.abs(p)>Math.abs(g)?"h":"v";if("touches"in i&&T==="h"&&D.type==="range")return!1;var E=ue(T,D);if(!E)return!0;if(E?$=T:($=T==="v"?"h":"v",E=ue(T,D)),!E)return!1;if(!r.current&&"changedTouches"in i&&(p||g)&&(r.current=$),!$)return!0;var O=r.current||$;return yt(O,d,i,O==="h"?p:g,!0)},[]),h=c.useCallback(function(i){var d=i;if(!(!L.length||L[L.length-1]!==u)){var b="deltaY"in d?se(d):N(d),S=t.current.filter(function($){return $.name===d.type&&$.target===d.target&&Et($.delta,b)})[0];if(S&&S.should){d.cancelable&&d.preventDefault();return}if(!S){var p=(l.current.shards||[]).map(le).filter(Boolean).filter(function($){return $.contains(d.target)}),g=p.length>0?o(d,p[0]):!l.current.noIsolation;g&&d.cancelable&&d.preventDefault()}}},[]),y=c.useCallback(function(i,d,b,S){var p={name:i,delta:d,target:b,should:S};t.current.push(p),setTimeout(function(){t.current=t.current.filter(function(g){return g!==p})},1)},[]),f=c.useCallback(function(i){n.current=N(i),r.current=void 0},[]),s=c.useCallback(function(i){y(i.type,se(i),i.target,o(i,e.lockRef.current))},[]),m=c.useCallback(function(i){y(i.type,N(i),i.target,o(i,e.lockRef.current))},[]);c.useEffect(function(){return L.push(u),e.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:m}),document.addEventListener("wheel",h,R),document.addEventListener("touchmove",h,R),document.addEventListener("touchstart",f,R),function(){L=L.filter(function(i){return i!==u}),document.removeEventListener("wheel",h,R),document.removeEventListener("touchmove",h,R),document.removeEventListener("touchstart",f,R)}},[]);var v=e.removeScrollBar,w=e.inert;return c.createElement(c.Fragment,null,w?c.createElement(u,{styles:$t(a)}):null,v?c.createElement(ft,{gapMode:"margin"}):null)}const Ct=et(pe,wt);var Se=c.forwardRef(function(e,t){return c.createElement(U,C({},e,{ref:t,sideCar:Ct}))});Se.classNames=U.classNames;const Nt=Se;export{Ft as $,At as a,Dt as b,kt as c,Le as d,Nt as e,Lt as f,Rt as g,It as h};
