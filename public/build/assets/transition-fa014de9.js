import{r as l,m as T}from"./app-2eed7194.js";var ye=Object.defineProperty,Te=(e,t,r)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t,r)=>(Te(e,typeof t!="symbol"?t+"":t,r),r);let we=class{constructor(){W(this,"current",this.detect()),W(this,"handoffState","pending"),W(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},D=new we,q=(e,t)=>{D.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function j(e){let t=l.useRef(e);return q(()=>{t.current=e},[e]),t}function Fe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function P(){let e=[],t={addEventListener(r,n,i,f){return r.addEventListener(n,i,f),t.add(()=>r.removeEventListener(n,i,f))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(n))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let n=setTimeout(...r);return t.add(()=>clearTimeout(n))},microTask(...r){let n={current:!0};return Fe(()=>{n.current&&r[0]()}),t.add(()=>{n.current=!1})},style(r,n,i){let f=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:i}),this.add(()=>{Object.assign(r.style,{[n]:f})})},group(r){let n=P();return r(n),this.add(()=>n.dispose())},add(r){return e.push(r),()=>{let n=e.indexOf(r);if(n>=0)for(let i of e.splice(n,1))i()}},dispose(){for(let r of e.splice(0))r()}};return t}function oe(){let[e]=l.useState(P);return l.useEffect(()=>()=>e.dispose(),[e]),e}let C=function(e){let t=j(e);return T.useCallback((...r)=>t.current(...r),[t])};function ae(){let[e,t]=l.useState(D.isHandoffComplete);return e&&D.isHandoffComplete===!1&&t(!1),l.useEffect(()=>{e!==!0&&t(!0)},[e]),l.useEffect(()=>D.handoff(),[]),e}function w(e,t,...r){if(e in t){let i=t[e];return typeof i=="function"?i(...r):i}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}let Ce=Symbol();function se(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let r=C(n=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(n):i.current=n)});return e.every(n=>n==null||(n==null?void 0:n[Ce]))?void 0:r}function Q(...e){return e.filter(Boolean).join(" ")}var ue=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ue||{}),S=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(S||{});function ce({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:i,visible:f=!0,name:d}){let s=fe(t,e);if(f)return A(s,r,n,d);let u=i??0;if(u&2){let{static:a=!1,...c}=s;if(a)return A(c,r,n,d)}if(u&1){let{unmount:a=!0,...c}=s;return w(a?0:1,{[0](){return null},[1](){return A({...c,hidden:!0,style:{display:"none"}},r,n,d)}})}return A(s,r,n,d)}function A(e,t={},r,n){let{as:i=r,children:f,refName:d="ref",...s}=X(e,["unmount","static"]),u=e.ref!==void 0?{[d]:e.ref}:{},a=typeof f=="function"?f(t):f;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let c={};if(t){let h=!1,v=[];for(let[m,o]of Object.entries(t))typeof o=="boolean"&&(h=!0),o===!0&&v.push(m);h&&(c["data-headlessui-state"]=v.join(" "))}if(i===l.Fragment&&Object.keys(ie(s)).length>0){if(!l.isValidElement(a)||Array.isArray(a)&&a.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(o=>`  - ${o}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(o=>`  - ${o}`).join(`
`)].join(`
`));let h=a.props,v=typeof(h==null?void 0:h.className)=="function"?(...o)=>Q(h==null?void 0:h.className(...o),s.className):Q(h==null?void 0:h.className,s.className),m=v?{className:v}:{};return l.cloneElement(a,Object.assign({},fe(a.props,ie(X(s,["ref"]))),c,u,Se(a.ref,u.ref),m))}return l.createElement(i,Object.assign({},X(s,["ref"]),i!==l.Fragment&&u,i!==l.Fragment&&c),a)}function Se(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}}function fe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let i in n)i.startsWith("on")&&typeof n[i]=="function"?(r[i]!=null||(r[i]=[]),r[i].push(n[i])):t[i]=n[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](i,...f){let d=r[n];for(let s of d){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;s(i,...f)}}});return t}function ee(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function ie(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function X(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let te=l.createContext(null);te.displayName="OpenClosedContext";var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function de(){return l.useContext(te)}function Oe({value:e,children:t}){return T.createElement(te.Provider,{value:e},t)}function re(){let e=l.useRef(!1);return q(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function $e(e=0){let[t,r]=l.useState(e),n=re(),i=l.useCallback(u=>{n.current&&r(a=>a|u)},[t,n]),f=l.useCallback(u=>!!(t&u),[t]),d=l.useCallback(u=>{n.current&&r(a=>a&~u)},[r,n]),s=l.useCallback(u=>{n.current&&r(a=>a^u)},[r]);return{flags:t,addFlag:i,hasFlag:f,removeFlag:d,toggleFlag:s}}function Ne(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function Y(e,...t){e&&t.length>0&&e.classList.add(...t)}function _(e,...t){e&&t.length>0&&e.classList.remove(...t)}function je(e,t){let r=P();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:i}=getComputedStyle(e),[f,d]=[n,i].map(u=>{let[a=0]=u.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,h)=>h-c);return a}),s=f+d;if(s!==0){r.group(a=>{a.setTimeout(()=>{t(),a.dispose()},s),a.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&a.dispose()})});let u=r.addEventListener(e,"transitionend",a=>{a.target===a.currentTarget&&(t(),u())})}else t();return r.add(()=>t()),r.dispose}function Re(e,t,r,n){let i=r?"enter":"leave",f=P(),d=n!==void 0?Ne(n):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let s=w(i,{enter:()=>t.enter,leave:()=>t.leave}),u=w(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),a=w(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return _(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Y(e,...s,...a),f.nextFrame(()=>{_(e,...a),Y(e,...u),je(e,()=>(_(e,...s),Y(e,...t.entered),d()))}),f.dispose}function Pe({container:e,direction:t,classes:r,onStart:n,onStop:i}){let f=re(),d=oe(),s=j(t);q(()=>{let u=P();d.add(u.dispose);let a=e.current;if(a&&s.current!=="idle"&&f.current)return u.dispose(),n.current(s.current),u.add(Re(a,r.current,s.current==="enter",()=>{u.dispose(),i.current(s.current)})),u.dispose},[t])}function $(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let I=l.createContext(null);I.displayName="TransitionContext";var xe=(e=>(e.Visible="visible",e.Hidden="hidden",e))(xe||{});function Le(){let e=l.useContext(I);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function ke(){let e=l.useContext(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let M=l.createContext(null);M.displayName="NestingContext";function U(e){return"children"in e?U(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function me(e,t){let r=j(e),n=l.useRef([]),i=re(),f=oe(),d=C((m,o=S.Hidden)=>{let g=n.current.findIndex(({el:p})=>p===m);g!==-1&&(w(o,{[S.Unmount](){n.current.splice(g,1)},[S.Hidden](){n.current[g].state="hidden"}}),f.microTask(()=>{var p;!U(n)&&i.current&&((p=r.current)==null||p.call(r))}))}),s=C(m=>{let o=n.current.find(({el:g})=>g===m);return o?o.state!=="visible"&&(o.state="visible"):n.current.push({el:m,state:"visible"}),()=>d(m,S.Unmount)}),u=l.useRef([]),a=l.useRef(Promise.resolve()),c=l.useRef({enter:[],leave:[],idle:[]}),h=C((m,o,g)=>{u.current.splice(0),t&&(t.chains.current[o]=t.chains.current[o].filter(([p])=>p!==m)),t==null||t.chains.current[o].push([m,new Promise(p=>{u.current.push(p)})]),t==null||t.chains.current[o].push([m,new Promise(p=>{Promise.all(c.current[o].map(([b,N])=>N)).then(()=>p())})]),o==="enter"?a.current=a.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(o)):g(o)}),v=C((m,o,g)=>{Promise.all(c.current[o].splice(0).map(([p,b])=>b)).then(()=>{var p;(p=u.current.shift())==null||p()}).then(()=>g(o))});return l.useMemo(()=>({children:n,register:s,unregister:d,onStart:h,onStop:v,wait:a,chains:c}),[s,d,n,h,v,c,a])}function He(){}let Ae=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function le(e){var t;let r={};for(let n of Ae)r[n]=(t=e[n])!=null?t:He;return r}function De(e){let t=l.useRef(le(e));return l.useEffect(()=>{t.current=le(e)},[e]),t}let qe="div",pe=ue.RenderStrategy;function Ie(e,t){let{beforeEnter:r,afterEnter:n,beforeLeave:i,afterLeave:f,enter:d,enterFrom:s,enterTo:u,entered:a,leave:c,leaveFrom:h,leaveTo:v,...m}=e,o=l.useRef(null),g=se(o,t),p=m.unmount?S.Unmount:S.Hidden,{show:b,appear:N,initial:y}=Le(),[E,B]=l.useState(b?"visible":"hidden"),ne=ke(),{register:x,unregister:L}=ne,V=l.useRef(null);l.useEffect(()=>x(o),[x,o]),l.useEffect(()=>{if(p===S.Hidden&&o.current){if(b&&E!=="visible"){B("visible");return}return w(E,{hidden:()=>L(o),visible:()=>x(o)})}},[E,o,x,L,b,p]);let z=j({enter:$(d),enterFrom:$(s),enterTo:$(u),entered:$(a),leave:$(c),leaveFrom:$(h),leaveTo:$(v)}),k=De({beforeEnter:r,afterEnter:n,beforeLeave:i,afterLeave:f}),G=ae();l.useEffect(()=>{if(G&&E==="visible"&&o.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[o,E,G]);let J=y&&!N,ve=(()=>!G||J||V.current===b?"idle":b?"enter":"leave")(),R=$e(0),ge=C(O=>w(O,{enter:()=>{R.addFlag(F.Opening),k.current.beforeEnter()},leave:()=>{R.addFlag(F.Closing),k.current.beforeLeave()},idle:()=>{}})),be=C(O=>w(O,{enter:()=>{R.removeFlag(F.Opening),k.current.afterEnter()},leave:()=>{R.removeFlag(F.Closing),k.current.afterLeave()},idle:()=>{}})),H=me(()=>{B("hidden"),L(o)},ne);Pe({container:o,classes:z,direction:ve,onStart:j(O=>{H.onStart(o,O,ge)}),onStop:j(O=>{H.onStop(o,O,be),O==="leave"&&!U(H)&&(B("hidden"),L(o))})}),l.useEffect(()=>{J&&(p===S.Hidden?V.current=null:V.current=b)},[b,J,E]);let K=m,Ee={ref:g};return N&&b&&y&&(K={...K,className:Q(m.className,...z.current.enter,...z.current.enterFrom)}),T.createElement(M.Provider,{value:H},T.createElement(Oe,{value:w(E,{visible:F.Open,hidden:F.Closed})|R.flags},ce({ourProps:Ee,theirProps:K,defaultTag:qe,features:pe,visible:E==="visible",name:"Transition.Child"})))}function Me(e,t){let{show:r,appear:n=!1,unmount:i,...f}=e,d=l.useRef(null),s=se(d,t);ae();let u=de();if(r===void 0&&u!==null&&(r=(u&F.Open)===F.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[a,c]=l.useState(r?"visible":"hidden"),h=me(()=>{c("hidden")}),[v,m]=l.useState(!0),o=l.useRef([r]);q(()=>{v!==!1&&o.current[o.current.length-1]!==r&&(o.current.push(r),m(!1))},[o,r]);let g=l.useMemo(()=>({show:r,appear:n,initial:v}),[r,n,v]);l.useEffect(()=>{if(r)c("visible");else if(!U(h))c("hidden");else{let y=d.current;if(!y)return;let E=y.getBoundingClientRect();E.x===0&&E.y===0&&E.width===0&&E.height===0&&c("hidden")}},[r,h]);let p={unmount:i},b=C(()=>{var y;v&&m(!1),(y=e.beforeEnter)==null||y.call(e)}),N=C(()=>{var y;v&&m(!1),(y=e.beforeLeave)==null||y.call(e)});return T.createElement(M.Provider,{value:h},T.createElement(I.Provider,{value:g},ce({ourProps:{...p,as:l.Fragment,children:T.createElement(he,{ref:s,...p,...f,beforeEnter:b,beforeLeave:N})},theirProps:{},defaultTag:l.Fragment,features:pe,visible:a==="visible",name:"Transition"})))}function Ue(e,t){let r=l.useContext(I)!==null,n=de()!==null;return T.createElement(T.Fragment,null,!r&&n?T.createElement(Z,{ref:t,...e}):T.createElement(he,{ref:t,...e}))}let Z=ee(Me),he=ee(Ie),Be=ee(Ue),Ge=Object.assign(Z,{Child:Be,Root:Z});export{Ge as $};
