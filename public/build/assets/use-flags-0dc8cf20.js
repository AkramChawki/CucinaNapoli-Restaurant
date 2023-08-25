import{r as s,i as k}from"./app-239b61e5.js";var $=Object.defineProperty,T=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t,n)=>(T(e,typeof t!="symbol"?t+"":t,n),n);let C=class{constructor(){v(this,"current",this.detect()),v(this,"handoffState","pending"),v(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},g=new C,O=(e,t)=>{g.isServer?s.useEffect(e,t):s.useLayoutEffect(e,t)};function A(e){let t=s.useRef(e);return O(()=>{t.current=e},[e]),t}function R(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function w(){let e=[],t={addEventListener(n,r,o,l){return n.addEventListener(r,o,l),t.add(()=>n.removeEventListener(r,o,l))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return R(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let l=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:l})})},group(n){let r=w();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}function M(){let[e]=s.useState(w);return s.useEffect(()=>()=>e.dispose(),[e]),e}let P=function(e){let t=A(e);return k.useCallback((...n)=>t.current(...n),[t])};function U(){let[e,t]=s.useState(g.isHandoffComplete);return e&&g.isHandoffComplete===!1&&t(!1),s.useEffect(()=>{e!==!0&&t(!0)},[e]),s.useEffect(()=>g.handoff(),[]),e}function S(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,S),r}let N=Symbol();function V(e,t=!0){return Object.assign(e,{[N]:t})}function D(...e){let t=s.useRef(e);s.useEffect(()=>{t.current=e},[e]);let n=P(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[N]))?void 0:n}function j(...e){return e.filter(Boolean).join(" ")}var q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(q||{}),H=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(H||{});function W({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:f}){let a=F(t,e);if(l)return h(a,n,r,f);let u=o??0;if(u&2){let{static:i=!1,...m}=a;if(i)return h(m,n,r,f)}if(u&1){let{unmount:i=!0,...m}=a;return S(i?0:1,{[0](){return null},[1](){return h({...m,hidden:!0,style:{display:"none"}},n,r,f)}})}return h(a,n,r,f)}function h(e,t={},n,r){let{as:o=n,children:l,refName:f="ref",...a}=b(e,["unmount","static"]),u=e.ref!==void 0?{[f]:e.ref}:{},i=typeof l=="function"?l(t):l;"className"in a&&a.className&&typeof a.className=="function"&&(a.className=a.className(t));let m={};if(t){let c=!1,p=[];for(let[y,d]of Object.entries(t))typeof d=="boolean"&&(c=!0),d===!0&&p.push(y);c&&(m["data-headlessui-state"]=p.join(" "))}if(o===s.Fragment&&Object.keys(E(a)).length>0){if(!s.isValidElement(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let c=i.props,p=typeof(c==null?void 0:c.className)=="function"?(...d)=>j(c==null?void 0:c.className(...d),a.className):j(c==null?void 0:c.className,a.className),y=p?{className:p}:{};return s.cloneElement(i,Object.assign({},F(i.props,E(b(a,["ref"]))),m,u,x(i.ref,u.ref),y))}return s.createElement(o,Object.assign({},b(a,["ref"]),o!==s.Fragment&&u,o!==s.Fragment&&m),i)}function x(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function F(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...l){let f=n[r];for(let a of f){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;a(o,...l)}}});return t}function X(e){var t;return Object.assign(s.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function E(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function b(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function I(){let e=s.useRef(!1);return O(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Y(e=0){let[t,n]=s.useState(e),r=I(),o=s.useCallback(u=>{r.current&&n(i=>i|u)},[t,r]),l=s.useCallback(u=>!!(t&u),[t]),f=s.useCallback(u=>{r.current&&n(i=>i&~u)},[n,r]),a=s.useCallback(u=>{r.current&&n(i=>i^u)},[n]);return{flags:t,addFlag:o,hasFlag:l,removeFlag:f,toggleFlag:a}}export{X as D,E as R,q as S,V as T,W as X,U as a,g as b,Y as c,w as d,j as e,I as f,H as j,O as l,P as o,M as p,A as s,R as t,S as u,D as y};