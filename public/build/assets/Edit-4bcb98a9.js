import{j as a,a as e,b as i}from"./app-81169028.js";import{A as t}from"./AuthenticatedLayout-3b329b02.js";import o from"./DeleteUserForm-168dd709.js";import l from"./UpdatePasswordForm-d8553cbe.js";import d from"./UpdateProfileInformationForm-973aefb9.js";import"./ApplicationLogo-0a1fd5fe.js";import"./transition-9b7d81a9.js";import"./TextInput-ccc93388.js";import"./InputLabel-b0aa2176.js";import"./PrimaryButton-d753fadd.js";function b({auth:s,mustVerifyEmail:m,status:r}){return a(t,{user:s.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[e(i,{title:"Profile"}),e("div",{className:"py-12",children:a("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(d,{mustVerifyEmail:m,status:r,className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(l,{className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(o,{className:"max-w-xl"})})]})})]})}export{b as default};