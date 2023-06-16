import{g as $,c as V,e as J,r as U,W as K,a as i,j as P}from"./app-76420757.js";import{r as Q}from"./index-08c7c3df.js";var G={exports:{}};/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */function L(t,n,r){this.x=t,this.y=n,this.time=r||new Date().getTime()}L.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1};L.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))};L.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time};function j(t,n,r,e){this.startPoint=t,this.control1=n,this.control2=r,this.endPoint=e}j.prototype.length=function(){for(var t=10,n=0,r=void 0,e=void 0,a=0;a<=t;a+=1){var d=a/t,s=this._point(d,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),o=this._point(d,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(a>0){var h=s-r,l=o-e;n+=Math.sqrt(h*h+l*l)}r=s,e=o}return n};j.prototype._point=function(t,n,r,e,a){return n*(1-t)*(1-t)*(1-t)+3*r*(1-t)*(1-t)*t+3*e*(1-t)*t*t+a*t*t*t};function Z(t,n,r){var e,a,d,s=null,o=0;r||(r={});var h=function(){o=r.leading===!1?0:Date.now(),s=null,d=t.apply(e,a),s||(e=a=null)};return function(){var l=Date.now();!o&&r.leading===!1&&(o=l);var u=n-(l-o);return e=this,a=arguments,u<=0||u>n?(s&&(clearTimeout(s),s=null),o=l,d=t.apply(e,a),s||(e=a=null)):!s&&r.trailing!==!1&&(s=setTimeout(h,u)),d}}function x(t,n){var r=this,e=n||{};this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle="throttle"in e?e.throttle:16,this.minDistance="minDistance"in e?e.minDistance:5,this.throttle?this._strokeMoveUpdate=Z(x.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=x.prototype._strokeUpdate,this.dotSize=e.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=e.penColor||"black",this.backgroundColor=e.backgroundColor||"rgba(0,0,0,0)",this.onBegin=e.onBegin,this.onEnd=e.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(a){a.which===1&&(r._mouseButtonDown=!0,r._strokeBegin(a))},this._handleMouseMove=function(a){r._mouseButtonDown&&r._strokeMoveUpdate(a)},this._handleMouseUp=function(a){a.which===1&&r._mouseButtonDown&&(r._mouseButtonDown=!1,r._strokeEnd(a))},this._handleTouchStart=function(a){if(a.targetTouches.length===1){var d=a.changedTouches[0];r._strokeBegin(d)}},this._handleTouchMove=function(a){a.preventDefault();var d=a.targetTouches[0];r._strokeMoveUpdate(d)},this._handleTouchEnd=function(a){var d=a.target===r._canvas;d&&(a.preventDefault(),r._strokeEnd(a))},this.on()}x.prototype.clear=function(){var t=this._ctx,n=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,n.width,n.height),t.fillRect(0,0,n.width,n.height),this._data=[],this._reset(),this._isEmpty=!0};x.prototype.fromDataURL=function(t){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=new Image,a=r.ratio||window.devicePixelRatio||1,d=r.width||this._canvas.width/a,s=r.height||this._canvas.height/a;this._reset(),e.src=t,e.onload=function(){n._ctx.drawImage(e,0,0,d,s)},this._isEmpty=!1};x.prototype.toDataURL=function(t){var n;switch(t){case"image/svg+xml":return this._toSVG();default:for(var r=arguments.length,e=Array(r>1?r-1:0),a=1;a<r;a++)e[a-1]=arguments[a];return(n=this._canvas).toDataURL.apply(n,[t].concat(e))}};x.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()};x.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)};x.prototype.isEmpty=function(){return this._isEmpty};x.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),typeof this.onBegin=="function"&&this.onBegin(t)};x.prototype._strokeUpdate=function(t){var n=t.clientX,r=t.clientY,e=this._createPoint(n,r),a=this._data[this._data.length-1],d=a&&a[a.length-1],s=d&&e.distanceTo(d)<this.minDistance;if(!(d&&s)){var o=this._addPoint(e),h=o.curve,l=o.widths;h&&l&&this._drawCurve(h,l.start,l.end),this._data[this._data.length-1].push({x:e.x,y:e.y,time:e.time,color:this.penColor})}};x.prototype._strokeEnd=function(t){var n=this.points.length>2,r=this.points[0];if(!n&&r&&this._drawDot(r),r){var e=this._data[this._data.length-1],a=e[e.length-1];r.equals(a)||e.push({x:r.x,y:r.y,time:r.time,color:this.penColor})}typeof this.onEnd=="function"&&this.onEnd(t)};x.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)};x.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)};x.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor};x.prototype._createPoint=function(t,n,r){var e=this._canvas.getBoundingClientRect();return new L(t-e.left,n-e.top,r||new Date().getTime())};x.prototype._addPoint=function(t){var n=this.points,r=void 0;if(n.push(t),n.length>2){n.length===3&&n.unshift(n[0]),r=this._calculateCurveControlPoints(n[0],n[1],n[2]);var e=r.c2;r=this._calculateCurveControlPoints(n[1],n[2],n[3]);var a=r.c1,d=new j(n[1],e,a,n[2]),s=this._calculateCurveWidths(d);return n.shift(),{curve:d,widths:s}}return{}};x.prototype._calculateCurveControlPoints=function(t,n,r){var e=t.x-n.x,a=t.y-n.y,d=n.x-r.x,s=n.y-r.y,o={x:(t.x+n.x)/2,y:(t.y+n.y)/2},h={x:(n.x+r.x)/2,y:(n.y+r.y)/2},l=Math.sqrt(e*e+a*a),u=Math.sqrt(d*d+s*s),f=o.x-h.x,g=o.y-h.y,b=u/(l+u),m={x:h.x+f*b,y:h.y+g*b},_=n.x-m.x,C=n.y-m.y;return{c1:new L(o.x+_,o.y+C),c2:new L(h.x+_,h.y+C)}};x.prototype._calculateCurveWidths=function(t){var n=t.startPoint,r=t.endPoint,e={start:null,end:null},a=this.velocityFilterWeight*r.velocityFrom(n)+(1-this.velocityFilterWeight)*this._lastVelocity,d=this._strokeWidth(a);return e.start=this._lastWidth,e.end=d,this._lastVelocity=a,this._lastWidth=d,e};x.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)};x.prototype._drawPoint=function(t,n,r){var e=this._ctx;e.moveTo(t,n),e.arc(t,n,r,0,2*Math.PI,!1),this._isEmpty=!1};x.prototype._drawCurve=function(t,n,r){var e=this._ctx,a=r-n,d=Math.floor(t.length());e.beginPath();for(var s=0;s<d;s+=1){var o=s/d,h=o*o,l=h*o,u=1-o,f=u*u,g=f*u,b=g*t.startPoint.x;b+=3*f*o*t.control1.x,b+=3*u*h*t.control2.x,b+=l*t.endPoint.x;var m=g*t.startPoint.y;m+=3*f*o*t.control1.y,m+=3*u*h*t.control2.y,m+=l*t.endPoint.y;var _=n+l*a;this._drawPoint(b,m,_)}e.closePath(),e.fill()};x.prototype._drawDot=function(t){var n=this._ctx,r=typeof this.dotSize=="function"?this.dotSize():this.dotSize;n.beginPath(),this._drawPoint(t.x,t.y,r),n.closePath(),n.fill()};x.prototype._fromData=function(t,n,r){for(var e=0;e<t.length;e+=1){var a=t[e];if(a.length>1)for(var d=0;d<a.length;d+=1){var s=a[d],o=new L(s.x,s.y,s.time),h=s.color;if(d===0)this.penColor=h,this._reset(),this._addPoint(o);else if(d!==a.length-1){var l=this._addPoint(o),u=l.curve,f=l.widths;u&&f&&n(u,f,h)}}else{this._reset();var g=a[0];r(g)}}};x.prototype._toSVG=function(){var t=this,n=this._data,r=this._canvas,e=Math.max(window.devicePixelRatio||1,1),a=0,d=0,s=r.width/e,o=r.height/e,h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.setAttributeNS(null,"width",r.width),h.setAttributeNS(null,"height",r.height),this._fromData(n,function(p,k,M){var D=document.createElement("path");if(!isNaN(p.control1.x)&&!isNaN(p.control1.y)&&!isNaN(p.control2.x)&&!isNaN(p.control2.y)){var R="M "+p.startPoint.x.toFixed(3)+","+p.startPoint.y.toFixed(3)+" "+("C "+p.control1.x.toFixed(3)+","+p.control1.y.toFixed(3)+" ")+(p.control2.x.toFixed(3)+","+p.control2.y.toFixed(3)+" ")+(p.endPoint.x.toFixed(3)+","+p.endPoint.y.toFixed(3));D.setAttribute("d",R),D.setAttribute("stroke-width",(k.end*2.25).toFixed(3)),D.setAttribute("stroke",M),D.setAttribute("fill","none"),D.setAttribute("stroke-linecap","round"),h.appendChild(D)}},function(p){var k=document.createElement("circle"),M=typeof t.dotSize=="function"?t.dotSize():t.dotSize;k.setAttribute("r",M),k.setAttribute("cx",p.x),k.setAttribute("cy",p.y),k.setAttribute("fill",p.color),h.appendChild(k)});var l="data:image/svg+xml;base64,",u='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+(' viewBox="'+a+" "+d+" "+s+" "+o+'"')+(' width="'+s+'"')+(' height="'+o+'"')+">",f=h.innerHTML;if(f===void 0){var g=document.createElement("dummy"),b=h.childNodes;g.innerHTML="";for(var m=0;m<b.length;m+=1)g.appendChild(b[m].cloneNode(!0));f=g.innerHTML}var _="</svg>",C=u+f+_;return l+btoa(C)};x.prototype.fromData=function(t){var n=this;this.clear(),this._fromData(t,function(r,e){return n._drawCurve(r,e.start,e.end)},function(r){return n._drawDot(r)}),this._data=t};x.prototype.toData=function(){return this._data};const tt=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),et=$(tt);var z={exports:{}},H;function rt(){return H||(H=1,function(t,n){(function(r,e){t.exports=e()})(V,function(){return function(r){function e(d){if(a[d])return a[d].exports;var s=a[d]={exports:{},id:d,loaded:!1};return r[d].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var a={};return e.m=r,e.c=a,e.p="",e(0)}([function(r,e){function a(l){var u=l.getContext("2d"),f=l.width,g=l.height,b=u.getImageData(0,0,f,g).data,m=o(!0,f,g,b),_=o(!1,f,g,b),C=h(!0,f,g,b),p=h(!1,f,g,b),k=p-C+1,M=_-m+1,D=u.getImageData(C,m,k,M);return l.width=k,l.height=M,u.clearRect(0,0,k,M),u.putImageData(D,0,0),l}function d(l,u,f,g){return{red:g[4*(f*u+l)],green:g[4*(f*u+l)+1],blue:g[4*(f*u+l)+2],alpha:g[4*(f*u+l)+3]}}function s(l,u,f,g){return d(l,u,f,g).alpha}function o(l,u,f,g){for(var b=l?1:-1,m=l?0:f-1,_=m;l?_<f:_>-1;_+=b)for(var C=0;C<u;C++)if(s(C,_,u,g))return _;return null}function h(l,u,f,g){for(var b=l?1:-1,m=l?0:u-1,_=m;l?_<u:_>-1;_+=b)for(var C=0;C<f;C++)if(s(_,C,u,g))return _;return null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a}])})}(z)),z.exports}(function(t,n){(function(r,e){t.exports=e(Q(),U,et,rt())})(V,function(r,e,a,d){return function(s){function o(l){if(h[l])return h[l].exports;var u=h[l]={exports:{},id:l,loaded:!1};return s[l].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}var h={};return o.m=s,o.c=h,o.p="",o(0)}([function(s,o,h){function l(y){return y&&y.__esModule?y:{default:y}}function u(y,v){var N={};for(var w in y)v.indexOf(w)>=0||Object.prototype.hasOwnProperty.call(y,w)&&(N[w]=y[w]);return N}function f(y,v){if(!(y instanceof v))throw new TypeError("Cannot call a class as a function")}function g(y,v){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!v||typeof v!="object"&&typeof v!="function"?y:v}function b(y,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);y.prototype=Object.create(v&&v.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(y,v):y.__proto__=v)}Object.defineProperty(o,"__esModule",{value:!0});var m=Object.assign||function(y){for(var v=1;v<arguments.length;v++){var N=arguments[v];for(var w in N)Object.prototype.hasOwnProperty.call(N,w)&&(y[w]=N[w])}return y},_=function(){function y(v,N){for(var w=0;w<N.length;w++){var c=N[w];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(v,c.key,c)}}return function(v,N,w){return N&&y(v.prototype,N),w&&y(v,w),v}}(),C=h(1),p=l(C),k=h(2),M=l(k),D=h(3),R=l(D),X=h(4),Y=l(X),W=function(y){function v(){var N,w,c,B;f(this,v);for(var A=arguments.length,q=Array(A),O=0;O<A;O++)q[O]=arguments[O];return w=c=g(this,(N=v.__proto__||Object.getPrototypeOf(v)).call.apply(N,[this].concat(q))),c._sigPad=null,c._excludeOurProps=function(){var E=c.props,S=(E.canvasProps,E.clearOnResize,u(E,["canvasProps","clearOnResize"]));return S},c.getCanvas=function(){return c._canvas},c.getTrimmedCanvas=function(){var E=document.createElement("canvas");return E.width=c._canvas.width,E.height=c._canvas.height,E.getContext("2d").drawImage(c._canvas,0,0),(0,Y.default)(E)},c.getSignaturePad=function(){return c._sigPad},c._checkClearOnResize=function(){c.props.clearOnResize&&c._resizeCanvas()},c._resizeCanvas=function(){var E=c.props.canvasProps||{},S=E.width,I=E.height;if(!S||!I){var T=c._canvas,F=Math.max(window.devicePixelRatio||1,1);S||(T.width=T.offsetWidth*F),I||(T.height=T.offsetHeight*F),T.getContext("2d").scale(F,F),c.clear()}},c.on=function(){return window.addEventListener("resize",c._checkClearOnResize),c._sigPad.on()},c.off=function(){return window.removeEventListener("resize",c._checkClearOnResize),c._sigPad.off()},c.clear=function(){return c._sigPad.clear()},c.isEmpty=function(){return c._sigPad.isEmpty()},c.fromDataURL=function(E,S){return c._sigPad.fromDataURL(E,S)},c.toDataURL=function(E,S){return c._sigPad.toDataURL(E,S)},c.fromData=function(E){return c._sigPad.fromData(E)},c.toData=function(){return c._sigPad.toData()},B=w,g(c,B)}return b(v,y),_(v,[{key:"componentDidMount",value:function(){this._sigPad=new R.default(this._canvas,this._excludeOurProps()),this._resizeCanvas(),this.on()}},{key:"componentWillUnmount",value:function(){this.off()}},{key:"componentDidUpdate",value:function(){Object.assign(this._sigPad,this._excludeOurProps())}},{key:"render",value:function(){var N=this,w=this.props.canvasProps;return M.default.createElement("canvas",m({ref:function(c){N._canvas=c}},w))}}]),v}(k.Component);W.propTypes={velocityFilterWeight:p.default.number,minWidth:p.default.number,maxWidth:p.default.number,minDistance:p.default.number,dotSize:p.default.oneOfType([p.default.number,p.default.func]),penColor:p.default.string,throttle:p.default.number,onEnd:p.default.func,onBegin:p.default.func,canvasProps:p.default.object,clearOnResize:p.default.bool},W.defaultProps={clearOnResize:!0},o.default=W},function(s,o){s.exports=r},function(s,o){s.exports=e},function(s,o){s.exports=a},function(s,o){s.exports=d}])})})(G);var nt=G.exports;const at=J(nt);function it(){const n=new URLSearchParams(window.location.search).get("nom"),[r,e]=U.useState(),[a,d]=U.useState(),{data:s,setData:o,post:h,processing:l,errors:u}=K({name:n,date:"",time:"",caissierE:"",caissierS:"",montant:"",montantE:"",glovoE:"",glovoC:"",cartebancaire:"",LivE:"",LivC:"",signature:""}),f=()=>{r.clear(),d(""),o("signature","")},g=()=>{d(r.getTrimmedCanvas().toDataURL("image/png")),o("signature",r.getTrimmedCanvas().toDataURL("image/png"))};function b(m){m.preventDefault(),h("/cloture-caisse")}return i("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 px-10 py-10",children:P("form",{onSubmit:b,className:"space-y-8 divide-y divide-gray-200",children:[i("div",{className:"space-y-8 divide-y divide-gray-200 sm:space-y-5",children:P("div",{children:[i("div",{children:i("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Cloture Caisse"})}),P("div",{className:"mt-6 sm:mt-5 space-y-6 sm:space-y-5",children:[P("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[i("label",{htmlFor:"date",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Date"}),i("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:i("div",{className:"max-w-lg flex rounded-md shadow-sm",children:i("input",{type:"date",name:"date",id:"date",value:s.date,onChange:m=>o("date",m.target.value),className:"flex-1 block  w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),P("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[i("label",{htmlFor:"heur",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Heure"}),i("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:i("div",{className:"max-w-lg flex rounded-md shadow-sm",children:i("input",{type:"time",name:"time",id:"time",value:s.time,onChange:m=>o("time",m.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),P("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[i("label",{htmlFor:"caissierE",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Caissier Entrant"}),i("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:i("div",{className:"max-w-lg flex rounded-md shadow-sm",children:i("input",{type:"text",name:"caissierE",id:"caissierE",value:s.caissierE,onChange:m=>o("caissierE",m.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),P("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[i("label",{htmlFor:"caissierS",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Caissier Sortant"}),i("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:i("div",{className:"max-w-lg flex rounded-md shadow-sm",children:i("input",{type:"text",name:"caissierS",id:"caissierS",value:s.caissierS,onChange:m=>o("caissierS",m.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),P("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[i("label",{htmlFor:"montant",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Montant Caisse"}),i("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:i("div",{className:"max-w-lg flex rounded-md shadow-sm",children:i("input",{type:"number",name:"montant",id:"montant",value:s.montant,onChange:m=>o("montant",m.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),P("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[i("label",{htmlFor:"montantE",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Montant Espece"}),i("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:i("div",{className:"max-w-lg flex rounded-md shadow-sm",children:i("input",{type:"number",name:"montantE",id:"montantE",value:s.montantE,onChange:m=>o("montantE",m.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),P("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[i("label",{htmlFor:"glovoE",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Glovo Espece"}),i("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:i("div",{className:"max-w-lg flex rounded-md shadow-sm",children:i("input",{type:"number",name:"glovoE",id:"glovoE",value:s.glovoE,onChange:m=>o("glovoE",m.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),P("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[i("label",{htmlFor:"glovoC",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Glovo Carte"}),i("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:i("div",{className:"max-w-lg flex rounded-md shadow-sm",children:i("input",{type:"number",name:"glovoC",id:"glovoC",value:s.glovoC,onChange:m=>o("glovoC",m.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),P("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[i("label",{htmlFor:"cartebancaire",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Carte Bancaire"}),i("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:i("div",{className:"max-w-lg flex rounded-md shadow-sm",children:i("input",{type:"number",name:"cartebancaire",id:"cartebancaire",value:s.cartebancaire,onChange:m=>o("cartebancaire",m.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),P("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[i("label",{htmlFor:"LivE",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Livraison.ma Espece"}),i("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:i("div",{className:"max-w-lg flex rounded-md shadow-sm",children:i("input",{type:"number",name:"LivE",id:"LivE",value:s.LivE,onChange:m=>o("LivE",m.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),P("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[i("label",{htmlFor:"LivC",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Livraison.ma Carte"}),i("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:i("div",{className:"max-w-lg flex rounded-md shadow-sm",children:i("input",{type:"number",name:"LivC",id:"LivC",value:s.LivC,onChange:m=>o("LivC",m.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]})]})]})}),P("div",{children:[i("label",{htmlFor:"signature",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Signature"}),i("div",{className:"border-solid border-2 border-black w-[300px] mx-auto",children:i(at,{backgroundColor:"white",canvasProps:{width:300,height:200,className:"sigCanvas"},ref:m=>e(m)})}),P("div",{className:"flex justify-center",children:[i("a",{className:"bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",onClick:f,children:"Clear"}),i("a",{className:"bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",onClick:g,children:"Sauvgarder"})]}),i("br",{}),i("br",{}),i("img",{src:a,className:"mx-auto"})]}),P("div",{className:"flex justify-end",children:[i("button",{type:"button",className:"bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Cancel"}),i("button",{type:"submit",className:"ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Save"})]})]})})}export{it as default};
