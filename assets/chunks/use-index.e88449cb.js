import{i as f}from"./index.517ce50b.js";import{h as c,g as _,v as m,j as x,D as g}from"./framework.4e1b6783.js";const w=({itemRef:l,selector:i,index:u,parentClassName:r})=>{const o=c(-1),p=_(()=>{var e;return(e=u==null?void 0:u.value)!=null?e:o.value}),a=c(),t=()=>{var e,s,d;let n=(s=(e=l.value)==null?void 0:e.parentElement)!=null?s:void 0;if(r)for(;n&&!n.className.includes(r);)n=(d=n.parentElement)!=null?d:void 0;return n},v=()=>{if(f(u==null?void 0:u.value)&&a.value&&l.value){const e=Array.from(a.value.querySelectorAll(i)).indexOf(l.value);e!==o.value&&(o.value=e)}};return m(l,()=>{l.value&&!a.value&&(a.value=t())}),x(()=>{l.value&&(a.value=t()),v()}),g(()=>v()),{computedIndex:p}};export{w as u};
