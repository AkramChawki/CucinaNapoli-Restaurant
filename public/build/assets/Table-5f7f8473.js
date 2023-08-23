import{a as e,j as a,d as l}from"./app-81ab0f75.js";function o({categories:r,ficheId:s,name:i}){const d=document.querySelector('meta[name="csrf-token"]').getAttribute("content");return e("div",{className:"flex flex-col h-screen",children:e("div",{className:"m-auto w-[90%]",children:a("form",{method:"post",action:"/commande-cuisinier/commander",children:[e("input",{type:"hidden",name:"_token",defaultValue:d}),e("input",{type:"hidden",name:"name",defaultValue:i}),e("input",{type:"hidden",name:"ficheId",defaultValue:s}),e("div",{className:"border-b border-gray-200 px-4 dark:border-gray-700",children:e("nav",{className:"flex space-x-2 justify-center","aria-label":"Tabs",role:"tablist",children:r.map(t=>e("button",{type:"button",className:"hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-white","data-hs-tab":`#tab-${t.id}`,"aria-controls":`tab-${t.id}`,role:"tab",children:t.name},t.id))})}),e("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:r.map(t=>e("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg hidden",id:`tab-${t.id}`,role:"tabpanel",children:a("table",{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"image"}),e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Designiation"}),e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Quantité"}),e("th",{scope:"col",className:"relative px-6 py-3",children:e("span",{className:"sr-only",children:"Action"})})]})}),e("tbody",{children:t.products.map(n=>a("tr",{children:[e("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:e("img",{src:"https://admin.cucinanapoli.com/storage/"+n.image,alt:"",className:"object-contain h-48 w-96 ..."})}),e("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:n.designation}),e("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:a("div",{className:"mt-1 relative rounded-md shadow-sm",children:[e("input",{type:"number",name:"qty[]",className:"focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md",placeholder:"0.00"}),e("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:a("span",{className:"text-gray-500 sm:text-sm",id:"price-currency",children:["unité (",n.unite,")"]})})]})}),e("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:e("input",{type:"checkbox",name:"products_ids[]",value:n.id,className:"focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"})})]},`p-${n.id}`))})]})},`c-${t.id}`))})}),e("button",{type:"submit",className:"inline-flex items-center w-[100%] mt-10 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Commander"}),e(l,{type:"button",as:"button",href:"/",className:"inline-flex items-center w-[100%] mt-2 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Annuler"})]})})})}export{o as default};
