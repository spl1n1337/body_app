import{p as h}from"./parse.bee59afc.js";import{a as y}from"./singletons.e05c8b07.js";import{i as g}from"./navigation.b21568d4.js";const D=""+new URL("../assets/show.b31abfe8.svg",import.meta.url).href,F=""+new URL("../assets/hide.b89a8105.svg",import.meta.url).href;function w(t){return y.apply_action(t)}function E(t){const o=JSON.parse(t);return o.data&&(o.data=h(o.data)),o}function L(t){return HTMLElement.prototype.cloneNode.call(t)}function H(t,o=()=>{}){const s=async({action:a,result:r,reset:n})=>{r.type==="success"&&(n!==!1&&HTMLFormElement.prototype.reset.call(t),await g()),(location.origin+location.pathname===a.origin+a.pathname||r.type==="redirect"||r.type==="error")&&w(r)};async function c(a){var m,f,d;a.preventDefault();const r=new URL((m=a.submitter)!=null&&m.hasAttribute("formaction")?a.submitter.formAction:L(t).action),n=new FormData(t),l=(f=a.submitter)==null?void 0:f.getAttribute("name");l&&n.append(l,((d=a.submitter)==null?void 0:d.getAttribute("value"))??"");const u=new AbortController;let p=!1;const b=await o({action:r,cancel:()=>p=!0,controller:u,get data(){return n},formData:n,get form(){return t},formElement:t,submitter:a.submitter})??s;if(p)return;let i;try{const e=await fetch(r,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:n,signal:u.signal});i=E(await e.text()),i.type==="error"&&(i.status=e.status)}catch(e){if((e==null?void 0:e.name)==="AbortError")return;i={type:"error",error:e}}b({action:r,get data(){return n},formData:n,get form(){return t},formElement:t,update:e=>s({action:r,result:i,reset:e==null?void 0:e.reset}),result:i})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",c),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",c)}}}export{H as e,F as h,D as s};
