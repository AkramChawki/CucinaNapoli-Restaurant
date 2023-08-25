import{a as e,r as l,j as r,W as b}from"./app-239b61e5.js";import{T as v,I as N}from"./TextInput-bfe94220.js";import{I as F}from"./InputLabel-1a9c16d6.js";import{$ as u}from"./transition-bacd103e.js";import{_ as f}from"./dialog-d5059fae.js";import"./use-flags-0dc8cf20.js";import"./description-b2d737a4.js";function y({className:o="",disabled:s,children:t,...a}){return e("button",{...a,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${s&&"opacity-25"} `+o,disabled:s,children:t})}function C({children:o,show:s=!1,maxWidth:t="2xl",closeable:a=!0,onClose:n=()=>{}}){const i=()=>{a&&n()},c={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[t];return e(u,{show:s,as:l.Fragment,leave:"duration-200",children:r(f,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:i,children:[e(u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"absolute inset-0 bg-gray-500/75"})}),e(u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e(f.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${c}`,children:o})})]})})}function D({type:o="button",className:s="",disabled:t,children:a,...n}){return e("button",{...n,type:o,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+s,disabled:t,children:a})}function A({className:o=""}){const[s,t]=l.useState(!1),a=l.useRef(),{data:n,setData:i,delete:c,processing:x,reset:p,errors:g}=b({password:""}),h=()=>{t(!0)},w=m=>{m.preventDefault(),c(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>d(),onError:()=>a.current.focus(),onFinish:()=>p()})},d=()=>{t(!1),p()};return r("section",{className:`space-y-6 ${o}`,children:[r("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e(y,{onClick:h,children:"Delete Account"}),e(C,{show:s,onClose:d,children:r("form",{onSubmit:w,className:"p-6",children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),r("div",{className:"mt-6",children:[e(F,{htmlFor:"password",value:"Password",className:"sr-only"}),e(v,{id:"password",type:"password",name:"password",ref:a,value:n.password,onChange:m=>i("password",m.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e(N,{message:g.password,className:"mt-2"})]}),r("div",{className:"mt-6 flex justify-end",children:[e(D,{onClick:d,children:"Cancel"}),e(y,{className:"ml-3",disabled:x,children:"Delete Account"})]})]})})]})}export{A as default};
