import{r as g,b as br}from"./app-2eed7194.js";function ir(r){var e,t,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(t=ir(r[e]))&&(o&&(o+=" "),o+=t);else for(e in r)r[e]&&(o&&(o+=" "),o+=e);return o}function ar(){for(var r,e,t=0,o="";t<arguments.length;)(r=arguments[t++])&&(e=ir(r))&&(o&&(o+=" "),o+=e);return o}function gr(){for(var r=0,e,t,o="";r<arguments.length;)(e=arguments[r++])&&(t=sr(e))&&(o&&(o+=" "),o+=t);return o}function sr(r){if(typeof r=="string")return r;for(var e,t="",o=0;o<r.length;o++)r[o]&&(e=sr(r[o]))&&(t&&(t+=" "),t+=e);return t}var Z="-";function vr(r){var e=hr(r),t=r.conflictingClassGroups,o=r.conflictingClassGroupModifiers,s=o===void 0?{}:o;function a(i){var c=i.split(Z);return c[0]===""&&c.length!==1&&c.shift(),lr(c,e)||mr(i)}function n(i,c){var l=t[i]||[];return c&&s[i]?[].concat(l,s[i]):l}return{getClassGroupId:a,getConflictingClassGroupIds:n}}function lr(r,e){var n;if(r.length===0)return e.classGroupId;var t=r[0],o=e.nextPart.get(t),s=o?lr(r.slice(1),o):void 0;if(s)return s;if(e.validators.length!==0){var a=r.join(Z);return(n=e.validators.find(function(i){var c=i.validator;return c(a)}))==null?void 0:n.classGroupId}}var rr=/^\[(.+)\]$/;function mr(r){if(rr.test(r)){var e=rr.exec(r)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function hr(r){var e=r.theme,t=r.prefix,o={nextPart:new Map,validators:[]},s=xr(Object.entries(r.classGroups),t);return s.forEach(function(a){var n=a[0],i=a[1];U(i,o,n,e)}),o}function U(r,e,t,o){r.forEach(function(s){if(typeof s=="string"){var a=s===""?e:er(e,s);a.classGroupId=t;return}if(typeof s=="function"){if(yr(s)){U(s(o),e,t,o);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(function(n){var i=n[0],c=n[1];U(c,er(e,i),t,o)})})}function er(r,e){var t=r;return e.split(Z).forEach(function(o){t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function yr(r){return r.isThemeGetter}function xr(r,e){return e?r.map(function(t){var o=t[0],s=t[1],a=s.map(function(n){return typeof n=="string"?e+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(function(i){var c=i[0],l=i[1];return[e+c,l]})):n});return[o,a]}):r}function wr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,t=new Map,o=new Map;function s(a,n){t.set(a,n),e++,e>r&&(e=0,o=t,t=new Map)}return{get:function(n){var i=t.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return s(n,i),i},set:function(n,i){t.has(n)?t.set(n,i):s(n,i)}}}var cr="!";function Cr(r){var e=r.separator||":",t=e.length===1,o=e[0],s=e.length;return function(n){for(var i=[],c=0,l=0,u,d=0;d<n.length;d++){var p=n[d];if(c===0){if(p===o&&(t||n.slice(d,d+s)===e)){i.push(n.slice(l,d)),l=d+s;continue}if(p==="/"){u=d;continue}}p==="["?c++:p==="]"&&c--}var h=i.length===0?n:n.substring(l),y=h.startsWith(cr),v=y?h.substring(1):h,m=u&&u>l?u-l:void 0;return{modifiers:i,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:m}}}function kr(r){if(r.length<=1)return r;var e=[],t=[];return r.forEach(function(o){var s=o[0]==="[";s?(e.push.apply(e,t.sort().concat([o])),t=[]):t.push(o)}),e.push.apply(e,t.sort()),e}function Mr(r){return{cache:wr(r.cacheSize),splitModifiers:Cr(r),...vr(r)}}var Ar=/\s+/;function zr(r,e){var t=e.splitModifiers,o=e.getClassGroupId,s=e.getConflictingClassGroupIds,a=new Set;return r.trim().split(Ar).map(function(n){var i=t(n),c=i.modifiers,l=i.hasImportantModifier,u=i.baseClassName,d=i.maybePostfixModifierPosition,p=o(d?u.substring(0,d):u),h=!!d;if(!p){if(!d)return{isTailwindClass:!1,originalClassName:n};if(p=o(u),!p)return{isTailwindClass:!1,originalClassName:n};h=!1}var y=kr(c).join(":"),v=l?y+cr:y;return{isTailwindClass:!0,modifierId:v,classGroupId:p,originalClassName:n,hasPostfixModifier:h}}).reverse().filter(function(n){if(!n.isTailwindClass)return!0;var i=n.modifierId,c=n.classGroupId,l=n.hasPostfixModifier,u=i+c;return a.has(u)?!1:(a.add(u),s(c,l).forEach(function(d){return a.add(i+d)}),!0)}).reverse().map(function(n){return n.originalClassName}).join(" ")}function Sr(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o,s,a,n=i;function i(l){var u=e[0],d=e.slice(1),p=d.reduce(function(h,y){return y(h)},u());return o=Mr(p),s=o.cache.get,a=o.cache.set,n=c,c(l)}function c(l){var u=s(l);if(u)return u;var d=zr(l,o);return a(l,d),d}return function(){return n(gr.apply(null,arguments))}}function f(r){var e=function(o){return o[r]||[]};return e.isThemeGetter=!0,e}var dr=/^\[(?:([a-z-]+):)?(.+)\]$/i,Gr=/^\d+\/\d+$/,Ir=new Set(["px","full","screen"]),$r=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Er=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,Pr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function w(r){return z(r)||Ir.has(r)||Gr.test(r)||A(r)}function A(r){return S(r,"length",Or)}function jr(r){return S(r,"size",ur)}function Rr(r){return S(r,"position",ur)}function Nr(r){return S(r,"url",Wr)}function N(r){return S(r,"number",z)}function z(r){return!Number.isNaN(Number(r))}function Vr(r){return r.endsWith("%")&&z(r.slice(0,-1))}function $(r){return tr(r)||S(r,"number",tr)}function b(r){return dr.test(r)}function E(){return!0}function M(r){return $r.test(r)}function Tr(r){return S(r,"",Lr)}function S(r,e,t){var o=dr.exec(r);return o?o[1]?o[1]===e:t(o[2]):!1}function Or(r){return Er.test(r)}function ur(){return!1}function Wr(r){return r.startsWith("url(")}function tr(r){return Number.isInteger(Number(r))}function Lr(r){return Pr.test(r)}function Br(){var r=f("colors"),e=f("spacing"),t=f("blur"),o=f("brightness"),s=f("borderColor"),a=f("borderRadius"),n=f("borderSpacing"),i=f("borderWidth"),c=f("contrast"),l=f("grayscale"),u=f("hueRotate"),d=f("invert"),p=f("gap"),h=f("gradientColorStops"),y=f("gradientColorStopPositions"),v=f("inset"),m=f("margin"),k=f("opacity"),C=f("padding"),q=f("saturate"),T=f("scale"),H=f("sepia"),_=f("skew"),J=f("space"),K=f("translate"),O=function(){return["auto","contain","none"]},W=function(){return["auto","hidden","clip","visible","scroll"]},L=function(){return["auto",e]},X=function(){return["",w]},P=function(){return["auto",z,b]},Q=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},j=function(){return["solid","dashed","dotted","double","none"]},Y=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},B=function(){return["start","end","center","between","around","evenly","stretch"]},G=function(){return["","0",b]},D=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},I=function(){return[z,N]},R=function(){return[z,b]};return{cacheSize:500,theme:{colors:[E],spacing:[w],blur:["none","",M,A],brightness:I(),borderColor:[r],borderRadius:["none","","full",M,A],borderSpacing:[e],borderWidth:X(),contrast:I(),grayscale:G(),hueRotate:R(),invert:G(),gap:[e],gradientColorStops:[r],gradientColorStopPositions:[Vr,A],inset:L(),margin:L(),opacity:I(),padding:[e],saturate:I(),scale:I(),sepia:G(),skew:R(),space:[e],translate:[e]},classGroups:{aspect:[{aspect:["auto","square","video",b]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Q(),[b])}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",$]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",b]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",$]}],"grid-cols":[{"grid-cols":[E]}],"col-start-end":[{col:["auto",{span:[$]},b]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[E]}],"row-start-end":[{row:["auto",{span:[$]},b]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",b]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",b]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal"].concat(B())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(B(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(B(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",e]}],"min-w":[{"min-w":["min","max","fit",w]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[M]},M,A]}],h:[{h:[e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",w]}],"max-h":[{"max-h":[e,"min","max","fit"]}],"font-size":[{text:["base",M,A]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",N]}],"font-family":[{font:[E]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",A]}],"line-clamp":[{"line-clamp":["none",z,N]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",w]}],"list-image":[{"list-image":["none",b]}],"list-style-type":[{list:["none","disc","decimal",b]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(j(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",w]}],"underline-offset":[{"underline-offset":["auto",w]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[e]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",A]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",b]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Q(),[Rr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",jr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Nr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[].concat(j(),["hidden"])}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:j()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:[""].concat(j())}],"outline-offset":[{"outline-offset":[w]}],"outline-w":[{outline:[w]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[w]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",M,Tr]}],"shadow-color":[{shadow:[E]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":Y()}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",M,b]}],grayscale:[{grayscale:[l]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[q]}],sepia:[{sepia:[H]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[l]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[q]}],"backdrop-sepia":[{"backdrop-sepia":[H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",b]}],duration:[{duration:R()}],ease:[{ease:["linear","in","out","in-out",b]}],delay:[{delay:R()}],animate:[{animate:["none","spin","ping","pulse","bounce",b]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[$,b]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[_]}],"skew-y":[{"skew-y":[_]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",b]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",b]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[e]}],"scroll-mx":[{"scroll-mx":[e]}],"scroll-my":[{"scroll-my":[e]}],"scroll-ms":[{"scroll-ms":[e]}],"scroll-me":[{"scroll-me":[e]}],"scroll-mt":[{"scroll-mt":[e]}],"scroll-mr":[{"scroll-mr":[e]}],"scroll-mb":[{"scroll-mb":[e]}],"scroll-ml":[{"scroll-ml":[e]}],"scroll-p":[{"scroll-p":[e]}],"scroll-px":[{"scroll-px":[e]}],"scroll-py":[{"scroll-py":[e]}],"scroll-ps":[{"scroll-ps":[e]}],"scroll-pe":[{"scroll-pe":[e]}],"scroll-pt":[{"scroll-pt":[e]}],"scroll-pr":[{"scroll-pr":[e]}],"scroll-pb":[{"scroll-pb":[e]}],"scroll-pl":[{"scroll-pl":[e]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",b]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[w,N]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var Ur=Sr(Br);function Fr(...r){return Ur(ar(r))}function V(){return V=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},V.apply(this,arguments)}function Zr(r,e){typeof r=="function"?r(e):r!=null&&(r.current=e)}function fr(...r){return e=>r.forEach(t=>Zr(t,e))}function Yr(...r){return g.useCallback(fr(...r),r)}const pr=g.forwardRef((r,e)=>{const{children:t,...o}=r,s=g.Children.toArray(t),a=s.find(Hr);if(a){const n=a.props.children,i=s.map(c=>c===a?g.Children.count(n)>1?g.Children.only(null):g.isValidElement(n)?n.props.children:null:c);return g.createElement(F,V({},o,{ref:e}),g.isValidElement(n)?g.cloneElement(n,void 0,i):null)}return g.createElement(F,V({},o,{ref:e}),t)});pr.displayName="Slot";const F=g.forwardRef((r,e)=>{const{children:t,...o}=r;return g.isValidElement(t)?g.cloneElement(t,{..._r(o,t.props),ref:e?fr(e,t.ref):t.ref}):g.Children.count(t)>1?g.Children.only(null):null});F.displayName="SlotClone";const qr=({children:r})=>g.createElement(g.Fragment,null,r);function Hr(r){return g.isValidElement(r)&&r.type===qr}function _r(r,e){const t={...e};for(const o in e){const s=r[o],a=e[o];/^on[A-Z]/.test(o)?s&&a?t[o]=(...i)=>{a(...i),s(...i)}:s&&(t[o]=s):o==="style"?t[o]={...s,...a}:o==="className"&&(t[o]=[s,a].filter(Boolean).join(" "))}return{...r,...t}}const or=r=>typeof r=="boolean"?"".concat(r):r===0?"0":r,nr=ar,Jr=(r,e)=>t=>{var o;if((e==null?void 0:e.variants)==null)return nr(r,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:s,defaultVariants:a}=e,n=Object.keys(s).map(l=>{const u=t==null?void 0:t[l],d=a==null?void 0:a[l];if(u===null)return null;const p=or(u)||or(d);return s[l][p]}),i=t&&Object.entries(t).reduce((l,u)=>{let[d,p]=u;return p===void 0||(l[d]=p),l},{}),c=e==null||(o=e.compoundVariants)===null||o===void 0?void 0:o.reduce((l,u)=>{let{class:d,className:p,...h}=u;return Object.entries(h).every(y=>{let[v,m]=y;return Array.isArray(m)?m.includes({...a,...i}[v]):{...a,...i}[v]===m})?[...l,d,p]:l},[]);return nr(r,n,c,t==null?void 0:t.class,t==null?void 0:t.className)},Kr=Jr("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Xr=g.forwardRef(({className:r,variant:e,size:t,asChild:o=!1,...s},a)=>br(o?pr:"button",{className:Fr(Kr({variant:e,size:t,className:r})),ref:a,...s}));Xr.displayName="Button";export{Yr as $,Xr as B,V as _,ar as a,pr as b,Fr as c,fr as d,Jr as e,Kr as f};