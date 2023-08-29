import{q as d,W as i,a as e,j as a,d as c}from"./app-90330d8d.js";function b(){const m=new URLSearchParams(window.location.search).get("restau"),{auth:o}=d().props,{data:t,setData:r,post:l,processing:g,errors:p}=i({name:o.user.name,restau:m,date:"",ticket:"",canal:"",objet:"",motif:""});function n(s){s.preventDefault(),l("/reclamations")}return e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 px-10 py-10",children:a("form",{className:"space-y-8 divide-y divide-gray-200",onSubmit:n,children:[e("div",{className:"space-y-8 divide-y divide-gray-200 sm:space-y-5",children:a("div",{children:[e("div",{children:e("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Reclamations"})}),a("div",{className:"mt-6 sm:mt-5 space-y-6 sm:space-y-5",children:[a("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[e("label",{htmlFor:"date",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Date"}),e("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:e("div",{className:"max-w-lg flex rounded-md shadow-sm",children:e("input",{type:"date",name:"date",id:"date",value:t.date,onChange:s=>r("date",s.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),a("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[e("label",{htmlFor:"ticket",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Ticket"}),e("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:e("div",{className:"max-w-lg flex rounded-md shadow-sm",children:e("input",{type:"text",name:"ticket",id:"ticket",value:t.ticket,onChange:s=>r("ticket",s.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"})})})]}),a("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[e("label",{htmlFor:"canal",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Canal"}),e("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:a("select",{id:"canal",name:"canal",value:t.canal,onChange:s=>r("canal",s.target.value),autoComplete:"country-name",className:"max-w-lg block focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md",children:[e("option",{selected:!0,children:"Selectionner le canal ..."}),e("option",{value:"Livraison",children:"Livraison"}),e("option",{value:"A Emporter",children:"A Emporter"}),e("option",{value:"Glovo",children:"Glovo"}),e("option",{value:"Sur Place",children:"Sur Place"}),e("option",{value:"Livraison.ma",children:"Livraison.ma"})]})})]}),a("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[e("label",{htmlFor:"objet",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Plat Objet de la reclamation"}),e("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:e("textarea",{id:"objet",name:"objet",value:t.objet,onChange:s=>r("objet",s.target.value),rows:3,className:"max-w-lg shadow-sm block w-full focus:ring-green-500 focus:border-green-500 sm:text-sm border border-gray-300 rounded-md"})})]}),a("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[e("label",{htmlFor:"motif",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Motif de Reclamation"}),e("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:e("textarea",{id:"motif",name:"motif",value:t.motif,onChange:s=>r("motif",s.target.value),rows:3,className:"max-w-lg shadow-sm block w-full focus:ring-green-500 focus:border-green-500 sm:text-sm border border-gray-300 rounded-md"})})]})]})]})}),e("div",{className:"pt-5",children:a("div",{className:"flex justify-end",children:[e(c,{type:"button",as:"button",href:"/",className:"bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Annuler"}),e("button",{type:"submit",className:"ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Ajouter"})]})})]})})}export{b as default};
