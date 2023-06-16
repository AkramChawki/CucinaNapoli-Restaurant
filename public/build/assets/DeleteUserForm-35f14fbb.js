import{i as p,r as u,f as nt,h as oe,a as v,j as R,W as rt}from"./app-76420757.js";import{T as ot,I as lt}from"./TextInput-c0617ba2.js";import{I as at}from"./InputLabel-ee1bbeef.js";import{l as Q,s as U,a as M,u as O,b as de,D as $,X as T,o as E,t as fe,y as P,p as it,f as Se,T as ut,c as st,S as Ee,C as ct,d as K,$ as te}from"./transition-87c4f2de.js";var ye;let k=(ye=p.useId)!=null?ye:function(){let e=Q(),[t,n]=p.useState(e?()=>U.nextId():null);return M(()=>{t===null&&n(U.nextId())},[t]),t!=null?""+t:void 0};function Pe(e){return U.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),Le=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Le||{}),dt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(dt||{});function ft(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var De=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(De||{});function mt(e,t=0){var n;return e===((n=Pe(e))==null?void 0:n.body)?!1:O(t,{[0](){return e.matches(le)},[1](){let r=e;for(;r!==null;){if(r.matches(le))return!0;r=r.parentElement}return!1}})}var pt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(pt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function N(e){e==null||e.focus({preventScroll:!0})}let gt=["textarea","input"].join(",");function vt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,gt))!=null?n:!1}function ht(e,t=n=>n){return e.slice().sort((n,r)=>{let a=t(n),l=t(r);if(a===null||l===null)return 0;let o=a.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function X(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:a=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?ht(e):e:ft(e);a.length>0&&o.length>1&&(o=o.filter(m=>!a.includes(m))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=o.length,g;do{if(c>=f||c+f<=0)return 0;let m=s+c;if(t&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}g=o[m],g==null||g.focus(d),c+=i}while(g!==l.activeElement);return t&6&&vt(g)&&g.select(),2}function be(e,t,n){let r=de(t);u.useEffect(()=>{function a(l){r.current(l)}return document.addEventListener(e,a,n),()=>document.removeEventListener(e,a,n)},[e,n])}function Fe(e,t,n){let r=de(t);u.useEffect(()=>{function a(l){r.current(l)}return window.addEventListener(e,a,n),()=>window.removeEventListener(e,a,n)},[e,n])}function wt(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function a(o,i){if(!r.current||o.defaultPrevented)return;let s=i(o);if(s===null||!s.getRootNode().contains(s))return;let d=function c(f){return typeof f=="function"?c(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let c of d){if(c===null)continue;let f=c instanceof HTMLElement?c:c.current;if(f!=null&&f.contains(s)||o.composed&&o.composedPath().includes(f))return}return!mt(s,De.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let l=u.useRef(null);be("mousedown",o=>{var i,s;r.current&&(l.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),be("click",o=>{l.current&&(a(o,()=>l.current),l.current=null)},!0),Fe("blur",o=>a(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Et(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&yt(n)?!1:r}function yt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let bt="div";var z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(z||{});function $t(e,t){let{features:n=1,...r}=e,a={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return T({ourProps:a,theirProps:r,slot:{},defaultTag:bt,name:"Hidden"})}let ae=$($t);var Ce=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ce||{});function me(e,t){let n=u.useRef([]),r=E(e);u.useEffect(()=>{let a=[...n.current];for(let[l,o]of t.entries())if(n.current[l]!==o){let i=r(t,a);return n.current=t,i}},[r,...t])}function Tt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var B=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(B||{});function xt(){let e=u.useRef(0);return Fe("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function j(...e){return u.useMemo(()=>Pe(...e),[...e])}function Ne(e,t,n,r){let a=de(n);u.useEffect(()=>{e=e??window;function l(o){a.current(o)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function St(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Me(e){let t=E(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,fe(()=>{n.current&&t()})}),[t])}function Ae(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Pt="div";var Re=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Re||{});function Lt(e,t){let n=u.useRef(null),r=P(n,t),{initialFocus:a,containers:l,features:o=30,...i}=e;Q()||(o=1);let s=j(n);Ct({ownerDocument:s},!!(o&16));let d=Nt({ownerDocument:s,container:n,initialFocus:a},!!(o&2));Mt({ownerDocument:s,container:n,containers:l,previousActiveElement:d},!!(o&8));let c=xt(),f=E(h=>{let x=n.current;x&&(L=>L())(()=>{O(c.current,{[B.Forwards]:()=>{X(x,F.First,{skipElements:[h.relatedTarget]})},[B.Backwards]:()=>{X(x,F.Last,{skipElements:[h.relatedTarget]})}})})}),g=it(),m=u.useRef(!1),Z={ref:r,onKeyDown(h){h.key=="Tab"&&(m.current=!0,g.requestAnimationFrame(()=>{m.current=!1}))},onBlur(h){let x=Ae(l);n.current instanceof HTMLElement&&x.add(n.current);let L=h.relatedTarget;L instanceof HTMLElement&&L.dataset.headlessuiFocusGuard!=="true"&&(Oe(x,L)||(m.current?X(n.current,O(c.current,{[B.Forwards]:()=>F.Next,[B.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&N(h.target)))}};return p.createElement(p.Fragment,null,!!(o&4)&&p.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:z.Focusable}),T({ourProps:Z,theirProps:i,defaultTag:Pt,name:"FocusTrap"}),!!(o&4)&&p.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:z.Focusable}))}let Dt=$(Lt),I=Object.assign(Dt,{features:Re}),D=[];St(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Ft(e=!0){let t=u.useRef(D.slice());return me(([n],[r])=>{r===!0&&n===!1&&fe(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=D.slice())},[e,D,t]),E(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Ct({ownerDocument:e},t){let n=Ft(t);me(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(n())},[t]),Me(()=>{t&&N(n())})}function Nt({ownerDocument:e,container:t,initialFocus:n},r){let a=u.useRef(null),l=Se();return me(()=>{if(!r)return;let o=t.current;o&&fe(()=>{if(!l.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){a.current=i;return}}else if(o.contains(i)){a.current=i;return}n!=null&&n.current?N(n.current):X(o,F.First)===Le.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=e==null?void 0:e.activeElement})},[r]),a}function Mt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},a){let l=Se();Ne(e==null?void 0:e.defaultView,"focus",o=>{if(!a||!l.current)return;let i=Ae(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let d=o.target;d&&d instanceof HTMLElement?Oe(i,d)?(r.current=d,N(d)):(o.preventDefault(),o.stopPropagation(),N(s)):N(r.current)},!0)}function Oe(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let ke=u.createContext(!1);function At(){return u.useContext(ke)}function ie(e){return p.createElement(ke.Provider,{value:e.force},e.children)}function Rt(e){let t=At(),n=u.useContext(Ie),r=j(e),[a,l]=u.useState(()=>{if(!t&&n!==null||U.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{a!==null&&(r!=null&&r.body.contains(a)||r==null||r.body.appendChild(a))},[a,r]),u.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),a}let Ot=u.Fragment;function kt(e,t){let n=e,r=u.useRef(null),a=P(ut(c=>{r.current=c}),t),l=j(r),o=Rt(r),[i]=u.useState(()=>{var c;return U.isServer?null:(c=l==null?void 0:l.createElement("div"))!=null?c:null}),s=u.useContext(ue),d=Q();return M(()=>{!o||!i||o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i))},[o,i]),M(()=>{if(i&&s)return s.register(i)},[s,i]),Me(()=>{var c;!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o)))}),d?!o||!i?null:nt.createPortal(T({ourProps:{ref:a},theirProps:n,defaultTag:Ot,name:"Portal"}),i):null}let It=u.Fragment,Ie=u.createContext(null);function Ht(e,t){let{target:n,...r}=e,a={ref:P(t)};return p.createElement(Ie.Provider,{value:n},T({ourProps:a,theirProps:r,defaultTag:It,name:"Popover.Group"}))}let ue=u.createContext(null);function Bt(){let e=u.useContext(ue),t=u.useRef([]),n=E(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=E(l=>{let o=t.current.indexOf(l);o!==-1&&t.current.splice(o,1),e&&e.unregister(l)}),a=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:l}){return p.createElement(ue.Provider,{value:a},l)},[a])]}let Ut=$(kt),jt=$(Ht),se=Object.assign(Ut,{Group:jt}),He=u.createContext(null);function Be(){let e=u.useContext(He);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Be),t}return e}function Wt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=E(l=>(t(o=>[...o,l]),()=>t(o=>{let i=o.slice(),s=i.indexOf(l);return s!==-1&&i.splice(s,1),i}))),a=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(He.Provider,{value:a},n.children)},[t])]}let _t="p";function Vt(e,t){let n=k(),{id:r=`headlessui-description-${n}`,...a}=e,l=Be(),o=P(t);M(()=>l.register(r),[r,l.register]);let i={ref:o,...l.props,id:r};return T({ourProps:i,theirProps:a,slot:l.slot||{},defaultTag:_t,name:l.name||"Description"})}let Yt=$(Vt),Gt=Object.assign(Yt,{}),pe=u.createContext(()=>{});pe.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function qt(){return u.useContext(pe)}function Kt({children:e,onUpdate:t,type:n,element:r,enabled:a}){let l=qt(),o=E((...i)=>{t==null||t(...i),l(...i)});return M(()=>{let i=a===void 0||a===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,a]),p.createElement(pe.Provider,{value:o},e)}function Xt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const zt=typeof Object.is=="function"?Object.is:Xt,{useState:Jt,useEffect:Qt,useLayoutEffect:Zt,useDebugValue:en}=oe;function tn(e,t,n){const r=t(),[{inst:a},l]=Jt({inst:{value:r,getSnapshot:t}});return Zt(()=>{a.value=r,a.getSnapshot=t,ne(a)&&l({inst:a})},[e,r,t]),Qt(()=>(ne(a)&&l({inst:a}),e(()=>{ne(a)&&l({inst:a})})),[e]),en(r),r}function ne(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!zt(n,r)}catch{return!0}}function nn(e,t,n){return t()}const rn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",on=!rn,ln=on?nn:tn,an="useSyncExternalStore"in oe?(e=>e.useSyncExternalStore)(oe):ln;function un(e){return an(e.subscribe,e.getSnapshot,e.getSnapshot)}function sn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(a){return r.add(a),()=>r.delete(a)},dispatch(a,...l){let o=t[a].call(n,...l);o&&(n=o,r.forEach(i=>i()))}}}function cn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,a=r.clientWidth-r.offsetWidth,l=e-a;n.style(r,"paddingRight",`${l}px`)}}}function dn(){if(!Tt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function a(o){return r.containers.flatMap(i=>i()).some(i=>i.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),d=t.querySelector(s);d&&!a(d)&&(l=d)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!a(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})}}}function fn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function mn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=sn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:st(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:mn(n)},a=[dn(),cn(),fn()];a.forEach(({before:l})=>l==null?void 0:l(r)),a.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!r||!a&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function pn(e,t,n){let r=un(C),a=e?r.get(e):void 0,l=a?a.count>0:!1;return M(()=>{if(!(!e||!t))return C.dispatch("PUSH",e,n),()=>C.dispatch("POP",e,n)},[t,e]),l}let re=new Map,H=new Map;function $e(e,t=!0){M(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function a(){var o;if(!r)return;let i=(o=H.get(r))!=null?o:1;if(i===1?H.delete(r):H.set(r,i-1),i!==1)return;let s=re.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,re.delete(r))}let l=(n=H.get(r))!=null?n:0;return H.set(r,l+1),l!==0||(re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),a},[e,t])}function gn({defaultContainers:e=[],portals:t}={}){let n=u.useRef(null),r=j(n),a=E(()=>{var l;let o=[];for(let i of e)i!==null&&(i instanceof HTMLElement?o.push(i):"current"in i&&i.current instanceof HTMLElement&&o.push(i.current));if(t!=null&&t.current)for(let i of t.current)o.push(i);for(let i of(l=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?l:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(n.current)||o.some(s=>i.contains(s))||o.push(i));return o});return{resolveContainers:a,contains:E(l=>a().some(o=>o.contains(l))),mainTreeNodeRef:n,MainTreeNode:u.useMemo(()=>function(){return p.createElement(ae,{features:z.Hidden,ref:n})},[n])}}var vn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(vn||{}),hn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(hn||{});let wn={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},J=u.createContext(null);J.displayName="DialogContext";function W(e){let t=u.useContext(J);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function En(e,t,n=()=>[document.body]){pn(e,t,r=>{var a;return{containers:[...(a=r.containers)!=null?a:[],n]}})}function yn(e,t){return O(t.type,wn,e,t)}let bn="div",$n=Ee.RenderStrategy|Ee.Static;function Tn(e,t){var n;let r=k(),{id:a=`headlessui-dialog-${r}`,open:l,onClose:o,initialFocus:i,__demoMode:s=!1,...d}=e,[c,f]=u.useState(0),g=ct();l===void 0&&g!==null&&(l=(g&K.Open)===K.Open);let m=u.useRef(null),Z=P(m,t),h=j(m),x=e.hasOwnProperty("open")||g!==null,L=e.hasOwnProperty("onClose");if(!x&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!x)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let y=l?0:1,[_,Ue]=u.useReducer(yn,{titleId:null,descriptionId:null,panelRef:u.createRef()}),A=E(()=>o(!1)),ge=E(w=>Ue({type:0,id:w})),V=Q()?s?!1:y===0:!1,Y=c>1,ve=u.useContext(J)!==null,[je,We]=Bt(),{resolveContainers:ee,mainTreeNodeRef:G,MainTreeNode:_e}=gn({portals:je,defaultContainers:[(n=_.panelRef.current)!=null?n:m.current]}),Ve=Y?"parent":"leaf",he=g!==null?(g&K.Closing)===K.Closing:!1,Ye=(()=>ve||he?!1:V)(),Ge=u.useCallback(()=>{var w,S;return(S=Array.from((w=h==null?void 0:h.querySelectorAll("body > *"))!=null?w:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(G.current)&&b instanceof HTMLElement))!=null?S:null},[G]);$e(Ge,Ye);let qe=(()=>Y?!0:V)(),Ke=u.useCallback(()=>{var w,S;return(S=Array.from((w=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(b=>b.contains(G.current)&&b instanceof HTMLElement))!=null?S:null},[G]);$e(Ke,qe);let Xe=(()=>!(!V||Y))();wt(ee,A,Xe);let ze=(()=>!(Y||y!==0))();Ne(h==null?void 0:h.defaultView,"keydown",w=>{ze&&(w.defaultPrevented||w.key===Ce.Escape&&(w.preventDefault(),w.stopPropagation(),A()))});let Je=(()=>!(he||y!==0||ve))();En(h,Je,ee),u.useEffect(()=>{if(y!==0||!m.current)return;let w=new ResizeObserver(S=>{for(let b of S){let q=b.target.getBoundingClientRect();q.x===0&&q.y===0&&q.width===0&&q.height===0&&A()}});return w.observe(m.current),()=>w.disconnect()},[y,m,A]);let[Qe,Ze]=Wt(),et=u.useMemo(()=>[{dialogState:y,close:A,setTitleId:ge},_],[y,_,A,ge]),we=u.useMemo(()=>({open:y===0}),[y]),tt={ref:Z,id:a,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":_.titleId,"aria-describedby":Qe};return p.createElement(Kt,{type:"Dialog",enabled:y===0,element:m,onUpdate:E((w,S)=>{S==="Dialog"&&O(w,{[ce.Add]:()=>f(b=>b+1),[ce.Remove]:()=>f(b=>b-1)})})},p.createElement(ie,{force:!0},p.createElement(se,null,p.createElement(J.Provider,{value:et},p.createElement(se.Group,{target:m},p.createElement(ie,{force:!1},p.createElement(Ze,{slot:we,name:"Dialog.Description"},p.createElement(I,{initialFocus:i,containers:ee,features:V?O(Ve,{parent:I.features.RestoreFocus,leaf:I.features.All&~I.features.FocusLock}):I.features.None},p.createElement(We,null,T({ourProps:tt,theirProps:d,slot:we,defaultTag:bn,features:$n,visible:y===0,name:"Dialog"}))))))))),p.createElement(_e,null))}let xn="div";function Sn(e,t){let n=k(),{id:r=`headlessui-dialog-overlay-${n}`,...a}=e,[{dialogState:l,close:o}]=W("Dialog.Overlay"),i=P(t),s=E(c=>{if(c.target===c.currentTarget){if(Et(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),d=u.useMemo(()=>({open:l===0}),[l]);return T({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:a,slot:d,defaultTag:xn,name:"Dialog.Overlay"})}let Pn="div";function Ln(e,t){let n=k(),{id:r=`headlessui-dialog-backdrop-${n}`,...a}=e,[{dialogState:l},o]=W("Dialog.Backdrop"),i=P(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:l===0}),[l]);return p.createElement(ie,{force:!0},p.createElement(se,null,T({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:a,slot:s,defaultTag:Pn,name:"Dialog.Backdrop"})))}let Dn="div";function Fn(e,t){let n=k(),{id:r=`headlessui-dialog-panel-${n}`,...a}=e,[{dialogState:l},o]=W("Dialog.Panel"),i=P(t,o.panelRef),s=u.useMemo(()=>({open:l===0}),[l]),d=E(c=>{c.stopPropagation()});return T({ourProps:{ref:i,id:r,onClick:d},theirProps:a,slot:s,defaultTag:Dn,name:"Dialog.Panel"})}let Cn="h2";function Nn(e,t){let n=k(),{id:r=`headlessui-dialog-title-${n}`,...a}=e,[{dialogState:l,setTitleId:o}]=W("Dialog.Title"),i=P(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:l===0}),[l]);return T({ourProps:{ref:i,id:r},theirProps:a,slot:s,defaultTag:Cn,name:"Dialog.Title"})}let Mn=$(Tn),An=$(Ln),Rn=$(Fn),On=$(Sn),kn=$(Nn),Te=Object.assign(Mn,{Backdrop:An,Panel:Rn,Overlay:On,Title:kn,Description:Gt});function xe({className:e="",disabled:t,children:n,...r}){return v("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function In({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:a=()=>{}}){const l=()=>{r&&a()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return v(te,{show:t,as:u.Fragment,leave:"duration-200",children:R(Te,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[v(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:v("div",{className:"absolute inset-0 bg-gray-500/75"})}),v(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:v(Te.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${o}`,children:e})})]})})}function Hn({type:e="button",className:t="",disabled:n,children:r,...a}){return v("button",{...a,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function _n({className:e=""}){const[t,n]=u.useState(!1),r=u.useRef(),{data:a,setData:l,delete:o,processing:i,reset:s,errors:d}=rt({password:""}),c=()=>{n(!0)},f=m=>{m.preventDefault(),o(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>g(),onError:()=>r.current.focus(),onFinish:()=>s()})},g=()=>{n(!1),s()};return R("section",{className:`space-y-6 ${e}`,children:[R("header",{children:[v("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),v("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),v(xe,{onClick:c,children:"Delete Account"}),v(In,{show:t,onClose:g,children:R("form",{onSubmit:f,className:"p-6",children:[v("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),v("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),R("div",{className:"mt-6",children:[v(at,{htmlFor:"password",value:"Password",className:"sr-only"}),v(ot,{id:"password",type:"password",name:"password",ref:r,value:a.password,onChange:m=>l("password",m.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),v(lt,{message:d.password,className:"mt-2"})]}),R("div",{className:"mt-6 flex justify-end",children:[v(Hn,{onClick:g,children:"Cancel"}),v(xe,{className:"ml-3",disabled:i,children:"Delete Account"})]})]})})]})}export{_n as default};
