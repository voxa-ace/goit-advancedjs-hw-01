import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as l}from"./assets/vendor-1e54b975.js";const a=document.querySelector(".feedback-form"),o="feedback-form-state",r=e=>{const t=e.currentTarget.elements,s=t.email.value,m=t.message.value,n={email:s,message:m};localStorage.setItem(o,JSON.stringify(n))},c=()=>{const e=localStorage.getItem(o);if(e){const{email:t,message:s}=JSON.parse(e);a.elements.email.value=t,a.elements.message.value=s}},i=e=>{e.preventDefault();const t=e.currentTarget.elements;console.log({email:t.email.value,message:t.message.value}),localStorage.removeItem(o),a.reset()};a.addEventListener("input",l(r),500);a.addEventListener("submit",i);document.addEventListener("DOMContentLoaded",c);
//# sourceMappingURL=commonHelpers3.js.map
