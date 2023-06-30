import{r as d,a as e,j as n,F as m,d as c}from"./app-88184b52.js";import{y as s}from"./radio-group-15c1527b.js";import"./use-flags-438f486b.js";import"./description-beb0bcf8.js";const u=["Cuisine","Pizza","Salle","Labo"];function l(...r){return r.filter(Boolean).join(" ")}function w(){const[r,g]=d.useState(""),[i,h]=d.useState(u[0]);return e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 flex h-screen",children:n("div",{className:"m-auto w-[90%] relative   ",children:[n("div",{className:"border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600",children:[e("label",{htmlFor:"name",className:"px-1 bg-white text-xs font-medium text-gray-900",children:"Votre Nom"}),e("input",{type:"text",name:"name",id:"name",className:"w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",placeholder:"",onChange:t=>{g(t.target.value)},value:r})]}),n(s,{value:i,onChange:h,children:[e(s.Label,{className:"text-base font-medium text-gray-900",children:"Select Actor"}),e("div",{className:"mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4",children:u.map(t=>e(s.Option,{value:t,className:({checked:a,active:o})=>l(a?"border-transparent":"border-gray-300",o?"ring-2 ring-green-500":"","relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"),children:({checked:a,active:o})=>n(m,{children:[e("div",{className:"flex-1 flex",children:e("div",{className:"flex flex-col",children:e(s.Label,{as:"span",className:"block text-sm font-medium text-gray-900",children:t})})}),e("svg",{className:l(a?"":"invisible","h-5 w-5 text-green-600"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),e("div",{className:l(o?"border":"border-2",a?"border-green-500":"border-transparent","absolute -inset-px rounded-lg pointer-events-none"),"aria-hidden":"true"})]})},t))})]}),r!==""&&n(m,{children:[e(c,{type:"button",as:"button",href:"/commande-cuisinier/commander",method:"get",data:{nom:r,actor:i},className:"inline-flex w-full mt-8 text-left items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Suivant"}),e(c,{type:"button",as:"button",href:"/",className:"inline-flex w-full mt-2 text-left items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Annuler"})]})]})})}export{w as default};