import{i as b}from"./index.ef976c7e.js";import{h as x,g,j as _,B as O}from"./framework.3448e2cd.js";var w=Object.defineProperty,y=Object.defineProperties,P=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,L=(e,r)=>{for(var t in r||(r={}))E.call(r,t)&&d(e,t,r[t]);if(m)for(var t of m(r))j.call(r,t)&&d(e,t,r[t]);return e},k=(e,r)=>y(e,P(r));const f=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};let n=[],q=-1,l={};const h={matchHandlers:{},dispatch(e,r){return l=e,n.length<1?!1:(n.forEach(t=>{t.func(l,r)}),!0)},subscribe(e){n.length===0&&this.register();const r=(++q).toString();return n.push({token:r,func:e}),e(l,null),r},unsubscribe(e){n=n.filter(r=>r.token!==e),n.length===0&&this.unregister()},unregister(){Object.keys(a).forEach(e=>{const r=a[e];if(!r)return;const t=this.matchHandlers[r];t&&t.mql&&t.listener&&(t.mql.removeEventListener?t.mql.removeEventListener("change",t.listener):t.mql.removeListener(t.listener))})},register(){Object.keys(a).forEach(e=>{const r=a[e];if(!r)return;const t=({matches:u})=>{this.dispatch(k(L({},l),{[e]:u}),e)},s=window.matchMedia(r);s.addEventListener?s.addEventListener("change",t):s.addListener(t),this.matchHandlers[r]={mql:s,listener:t},t(s)})}};function v(e){return b(e)}function H(e,r,t=!1){const s=x({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),u=g(()=>{let i=r;if(v(e.value))for(let p=0;p<f.length;p++){const o=f[p];if((s.value[o]||o==="xs"&&t)&&e.value[o]!==void 0){i=e.value[o];break}}else i=e.value;return i});let c="";return _(()=>{c=h.subscribe(i=>{v(e.value)&&(s.value=i)})}),O(()=>{c&&h.unsubscribe(c)}),u}export{f as r,H as u};
