import{q as c,a as e,j as n,d as m}from"./app-2cf28e06.js";function u({categories:a,ficheId:s,restau:l}){const{auth:i}=c().props,d=document.querySelector('meta[name="csrf-token"]').getAttribute("content");return e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:n("form",{method:"post",action:"/commande-cuisinier/commander",children:[n("div",{children:[e("input",{type:"hidden",name:"_token",defaultValue:d}),e("input",{type:"hidden",name:"name",defaultValue:i.user.name}),e("input",{type:"hidden",name:"restau",defaultValue:l}),e("input",{type:"hidden",name:"ficheId",defaultValue:s}),a.map(r=>n("div",{children:[e("h1",{className:"p-4 text-4xl font-bold text",children:r.name}),e("div",{className:"mt-12 max-w-4xl mx-auto grid gap-3 lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-1 lg:max-w-none",children:r.products.map(t=>n("div",{className:"flex flex-col rounded-lg shadow-lg overflow-hidden",children:[e("div",{className:"flex-shrink-0",children:e("img",{className:"h-48 w-full object-cover",src:"https://admin.cucinanapoli.com/storage/"+t.image,alt:""})}),n("div",{className:"flex-1 bg-white p-6 flex flex-col justify-between",children:[e("div",{className:"flex-1",children:e("a",{className:"block mt-2",children:e("p",{className:"text-xl font-semibold text-gray-900 text-center",children:t.designation})})}),e("div",{className:"mt-6 flex justify-center",children:n("div",{className:"ml-3 w-full",children:[e("input",{type:"number",name:"qty[]",className:"focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md text-center",placeholder:"0"}),n("div",{className:"text-center my-4",children:["unité (",t.unite,")"]})]})}),e("div",{className:"flex justify-center my-4",children:e("input",{type:"checkbox",name:"products_ids[]",value:t.id,className:"focus:ring-green-500 h-7 w-7 text-green-600 border-black border-4 rounded "})})]})]},`p-${t.id}`))})]},`c-${r.id}`))]}),n("div",{className:"px-4 py-4",children:[e("button",{type:"submit",className:"inline-flex items-center w-[100%] mt-10 px-4 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Commander"}),e(m,{type:"button",as:"button",href:"/",className:"inline-flex items-center w-[100%] mt-2 px-4 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Annuler"})]})]})})}export{u as default};
