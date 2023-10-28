import{g as h,c as S,h as f,j as z,s as w,a as x}from"./index.517ce50b.js";import{d as C,g as y,a7 as b,J as c,F as _}from"./framework.4e1b6783.js";var s=C({name:"Space",props:{align:{type:String},direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:"small"},wrap:{type:Boolean},fill:{type:Boolean}},setup(e,{slots:n}){const a=h("space"),o=y(()=>{var t;return(t=e.align)!=null?t:e.direction==="horizontal"?"center":""}),v=y(()=>[a,{[`${a}-${e.direction}`]:e.direction,[`${a}-align-${o.value}`]:o.value,[`${a}-wrap`]:e.wrap,[`${a}-fill`]:e.fill}]);function m(t){if(z(t))return t;switch(t){case"mini":return 4;case"small":return 8;case"medium":return 16;case"large":return 24;default:return 8}}const u=t=>{const i={},r=`${m(f(e.size)?e.size[0]:e.size)}px`,l=`${m(f(e.size)?e.size[1]:e.size)}px`;return t?e.wrap?{marginBottom:l}:{}:(e.direction==="horizontal"&&(i.marginRight=r),(e.direction==="vertical"||e.wrap)&&(i.marginBottom=l),i)};return()=>{var t;const i=S((t=n.default)==null?void 0:t.call(n),!0).filter(r=>r.type!==b);return c("div",{class:v.value},[i.map((r,l)=>{var g,d;const $=n.split&&l>0;return c(_,{key:(g=r.key)!=null?g:`item-${l}`},[$&&c("div",{class:`${a}-item-split`,style:u(!1)},[(d=n.split)==null?void 0:d.call(n)]),c("div",{class:`${a}-item`,style:u(l===i.length-1)},[r])])})])}}});const N=Object.assign(s,{install:(e,n)=>{w(e,n);const a=x(n);e.component(a+s.name,s)}});export{N as S};
