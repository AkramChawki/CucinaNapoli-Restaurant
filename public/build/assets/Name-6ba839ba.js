import{r as o,a as e,j as n,F as i,d as r}from"./app-76420757.js";function m(){const[t,a]=o.useState("");return e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 flex h-screen",children:n("div",{className:"m-auto w-[90%] relative   ",children:[n("div",{className:"border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600",children:[e("label",{htmlFor:"name",className:"px-1 bg-white text-xs font-medium text-gray-900",children:"Votre Nom"}),e("input",{type:"text",name:"name",id:"name",className:"w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",placeholder:"",onChange:s=>{a(s.target.value)},value:t})]}),t!==""&&n(i,{children:[e(r,{type:"button",as:"button",href:"/cloture-caisse/ajouter",method:"get",data:{nom:t},className:"inline-flex w-full mt-8 text-left items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Suivant"}),e(r,{type:"button",as:"button",href:"/",className:"inline-flex w-full mt-2 text-left items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Annuler"})]})]})})}export{m as default};
