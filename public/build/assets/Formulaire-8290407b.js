import{q as i,W as c,a as e,j as a,d as u}from"./app-2d8fb9b5.js";function b(){const l=new URLSearchParams(window.location.search).get("restau"),{auth:d}=i().props,{data:r,setData:m,post:o,processing:p,errors:t}=c({name:d.user.name,restau:l,date:"",ticket:"",objet:"",canal:"",plat:"",motif:""});function n(s){s.preventDefault(),o("/reclamations")}return e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 px-10 py-10",children:a("form",{className:"space-y-8 divide-y divide-gray-200",onSubmit:n,children:[e("div",{className:"space-y-8 divide-y divide-gray-200 sm:space-y-5",children:a("div",{children:[e("div",{children:e("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Fiche Erreur Plat et Reclamation"})}),a("div",{className:"mt-6 sm:mt-5 space-y-6 sm:space-y-5",children:[a("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[e("label",{htmlFor:"date",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Date"}),e("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:a("div",{className:"max-w-lg flex rounded-md shadow-sm",children:[e("input",{type:"date",name:"date",id:"date",value:r.date,onChange:s=>m("date",s.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"}),t.date&&e("div",{children:t.date})]})})]}),a("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[e("label",{htmlFor:"ticket",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Ticket"}),e("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:a("div",{className:"max-w-lg flex rounded-md shadow-sm",children:[e("input",{type:"text",name:"ticket",id:"ticket",value:r.ticket,onChange:s=>m("ticket",s.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"}),t.ticket&&e("div",{children:t.ticket})]})})]}),a("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[e("label",{htmlFor:"objet",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Objet"}),e("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:a("div",{className:"max-w-lg flex rounded-md shadow-sm",children:[e("input",{type:"text",name:"objet",id:"objet",value:r.objet,onChange:s=>m("objet",s.target.value),className:"flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"}),t.objet&&e("div",{children:t.objet})]})})]}),a("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[e("label",{htmlFor:"canal",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Canal"}),a("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:[a("select",{id:"canal",name:"canal",value:r.canal,onChange:s=>m("canal",s.target.value),autoComplete:"country-name",className:"max-w-lg block focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md",children:[e("option",{selected:!0,children:"Selectionner le canal ..."}),e("option",{value:"Livraison",children:"Livraison"}),e("option",{value:"A Emporter",children:"A Emporter"}),e("option",{value:"Glovo",children:"Glovo"}),e("option",{value:"Sur Place",children:"Sur Place"}),e("option",{value:"Livraison.ma",children:"Livraison.ma"})]}),t.canal&&e("div",{children:t.canal})]})]}),a("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[e("label",{htmlFor:"plat",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Plat Objet de la reclamation"}),a("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:[e("textarea",{id:"plat",name:"plat",value:r.plat,onChange:s=>m("plat",s.target.value),rows:3,className:"max-w-lg shadow-sm block w-full focus:ring-green-500 focus:border-green-500 sm:text-sm border border-gray-300 rounded-md"}),t.plat&&e("div",{children:t.plat})]})]}),a("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5",children:[e("label",{htmlFor:"motif",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Motif de Reclamation"}),a("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:[e("textarea",{id:"motif",name:"motif",value:r.motif,onChange:s=>m("motif",s.target.value),rows:3,className:"max-w-lg shadow-sm block w-full focus:ring-green-500 focus:border-green-500 sm:text-sm border border-gray-300 rounded-md"}),t.motif&&e("div",{children:t.motif})]})]})]})]})}),e("div",{className:"pt-5",children:a("div",{className:"flex justify-end",children:[e(u,{type:"button",as:"button",href:"/",className:"bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Annuler"}),e("button",{type:"submit",className:"ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Ajouter"})]})})]})})}export{b as default};