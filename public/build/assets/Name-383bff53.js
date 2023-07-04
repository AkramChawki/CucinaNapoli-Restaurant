import{r as d,a as e,j as n,F as g,d as h}from"./app-f7cc19b2.js";import{y as s}from"./radio-group-7fe2ad59.js";import"./use-flags-3cbe0198.js";import"./description-67b26609.js";const c=["Cuisine","Pizza","Salle","Labo"];function o(...r){return r.filter(Boolean).join(" ")}function w(){const[r,m]=d.useState(""),[i,u]=d.useState(c[0]);return e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 flex h-screen",children:n("div",{className:"m-auto w-[90%] relative   ",children:[n("div",{className:"border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600",children:[e("label",{htmlFor:"name",className:"px-1 bg-white text-xs font-medium text-gray-900",children:"Votre Nom"}),e("input",{type:"text",name:"name",id:"name",className:"w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",placeholder:"",onChange:t=>{m(t.target.value)},value:r})]}),n(s,{value:i,onChange:u,children:[e(s.Label,{className:"text-base font-medium text-gray-900",children:"Select Actor"}),e("div",{className:"mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4",children:c.map(t=>e(s.Option,{value:t,className:({checked:a,active:l})=>o(a?"border-transparent":"border-gray-300",l?"ring-2 ring-green-500":"","relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"),children:({checked:a,active:l})=>n(g,{children:[e("div",{className:"flex-1 flex",children:e("div",{className:"flex flex-col",children:e(s.Label,{as:"span",className:"block text-sm font-medium text-gray-900",children:t})})}),e("svg",{className:o(a?"":"invisible","h-5 w-5 text-green-600"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e("div",{className:o(l?"border":"border-2",a?"border-green-500":"border-transparent","absolute -inset-px rounded-lg pointer-events-none"),"aria-hidden":"true"})]})},t))})]}),r!=""&&e(h,{type:"button",as:"button",href:"/inventaire/stock",method:"get",data:{nom:r,actor:i},className:"inline-flex w-full mt-8 text-left items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Suivant"})]})})}export{w as default};