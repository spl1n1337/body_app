function x(){}const ot=t=>t;function At(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return t()}function et(){return Object.create(null)}function v(t){t.forEach(ct)}function z(t){return typeof t=="function"}function Yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Zt(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function Mt(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function te(t){let e;return at(t,n=>e=n)(),e}function ee(t,e,n){t.$$.on_destroy.push(at(e,n))}function ne(t,e,n,i){if(t){const s=lt(t,e,n,i);return t[0](s)}}function lt(t,e,n,i){return t[1]&&i?At(n.ctx.slice(),t[1](i(e))):n.ctx}function ie(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)o[a]=e.dirty[a]|s[a];return o}return e.dirty|s}return e.dirty}function se(t,e,n,i,s,o){if(s){const r=lt(e,n,i,o);t.p(r,s)}}function re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function oe(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ce(t){return t??""}function ae(t,e,n){return t.set(n),e}function le(t){return t&&z(t.destroy)?t.destroy:x}const ut=typeof window<"u";let ft=ut?()=>window.performance.now():()=>Date.now(),Y=ut?t=>requestAnimationFrame(t):x;const N=new Set;function dt(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&Y(dt)}function _t(t){let e;return N.size===0&&Y(dt),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}const ue=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let I=!1;function St(){I=!0}function Ct(){I=!1}function jt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:jt(1,s,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const u=f+1;n[u]=c,s=Math.max(u,s)}const o=[],r=[];let a=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);a>=c;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);o.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<o.length&&r[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(r[c],f)}}function ht(t,e){t.appendChild(e)}function mt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Lt(t){const e=J("style");return Pt(mt(t),e),e.sheet}function Pt(t,e){return ht(t.head||t,e),e.sheet}function Ht(t,e){if(I){for(Dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function zt(t,e,n){t.insertBefore(e,n||null)}function Ot(t,e,n){I&&!n?Ht(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function fe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function J(t){return document.createElement(t)}function pt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Z(t){return document.createTextNode(t)}function de(){return Z(" ")}function _e(){return Z("")}function nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function he(t){return function(e){return e.preventDefault(),t.call(this,e)}}function me(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function pe(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Rt(t){return Array.from(t.childNodes)}function yt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function gt(t,e,n,i,s=!1){yt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function wt(t,e,n,i){return gt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||o.push(a.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ye(t,e,n){return wt(t,e,n,J)}function ge(t,e,n){return wt(t,e,n,pt)}function qt(t,e){return gt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Z(e),!0)}function we(t){return qt(t," ")}function it(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function be(t,e){const n=it(t,"HTML_TAG_START",0),i=it(t,"HTML_TAG_END",n);if(n===i)return new st(void 0,e);yt(t);const s=t.splice(n,i-n+1);M(s[0]),M(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new st(o,e)}function $e(t,e){e=""+e,t.data!==e&&(t.data=e)}function xe(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let q;function Bt(){if(q===void 0){q=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{q=!0}}return q}function ve(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=J("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Bt();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=nt(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=nt(i.contentWindow,"resize",e),e()}),ht(t,i),()=>{(s||o&&i.contentWindow)&&o(),M(i)}}function Ee(t,e,n){t.classList[n?"add":"remove"](e)}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ke(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Wt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=pt(n.nodeName):this.e=J(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)zt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}class st extends Wt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ot(this.t,this.n[n],e)}}function Te(t,e){return new t(e)}const W=new Map;let F=0;function Ft(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Gt(t,e){const n={stylesheet:Lt(e),rules:{}};return W.set(t,n),n}function $t(t,e,n,i,s,o,r,a=0){const c=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*o(p);l+=p*100+`%{${r(y,1-y)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Ft(f)}_${a}`,d=mt(t),{stylesheet:h,rules:_}=W.get(d)||Gt(d,t);_[u]||(_[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${s}ms 1 both`,F+=1,u}function U(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),F-=s,F||It())}function It(){Y(()=>{F||(W.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&M(e)}),W.clear())})}let P;function L(t){P=t}function S(){if(!P)throw new Error("Function called outside component initialization");return P}function Ne(t){S().$$.on_mount.push(t)}function Ae(t){S().$$.after_update.push(t)}function Me(t){S().$$.on_destroy.push(t)}function Se(){const t=S();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=bt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Ce(t,e){return S().$$.context.set(t,e),e}function je(t){return S().$$.context.get(t)}function De(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const T=[],rt=[];let A=[];const V=[],xt=Promise.resolve();let X=!1;function vt(){X||(X=!0,xt.then(Et))}function Le(){return vt(),xt}function H(t){A.push(t)}function Pe(t){V.push(t)}const Q=new Set;let k=0;function Et(){if(k!==0)return;const t=P;do{try{for(;k<T.length;){const e=T[k];k++,L(e),Jt(e.$$)}}catch(e){throw T.length=0,k=0,e}for(L(null),T.length=0,k=0;rt.length;)rt.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];Q.has(n)||(Q.add(n),n())}A.length=0}while(T.length);for(;V.length;)V.pop()();X=!1,Q.clear(),L(t)}function Jt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function Kt(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let D;function kt(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function G(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const B=new Set;let $;function He(){$={r:0,c:[],p:$}}function ze(){$.r||v($.c),$=$.p}function Tt(t,e){t&&t.i&&(B.delete(t),t.i(e))}function Qt(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),$.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Nt={duration:0};function Oe(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,a,c=0;function l(){r&&U(t,r)}function f(){const{delay:d=0,duration:h=300,easing:_=ot,tick:g=x,css:p}=s||Nt;p&&(r=$t(t,0,1,h,d,_,p,c++)),g(0,1);const y=ft()+d,C=y+h;a&&a.abort(),o=!0,H(()=>G(t,!0,"start")),a=_t(E=>{if(o){if(E>=C)return g(1,0),G(t,!0,"end"),l(),o=!1;if(E>=y){const j=_((E-y)/h);g(j,1-j)}}return o})}let u=!1;return{start(){u||(u=!0,U(t),z(s)?(s=s(i),kt().then(f)):f())},invalidate(){u=!1},end(){o&&(l(),o=!1)}}}function Re(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const a=$;a.r+=1;function c(){const{delay:l=0,duration:f=300,easing:u=ot,tick:d=x,css:h}=s||Nt;h&&(r=$t(t,1,0,f,l,u,h));const _=ft()+l,g=_+f;H(()=>G(t,!1,"start")),_t(p=>{if(o){if(p>=g)return d(0,1),G(t,!1,"end"),--a.r||v(a.c),!1;if(p>=_){const y=u((p-_)/f);d(1-y,y)}}return o})}return z(s)?kt().then(()=>{s=s(i),c()}):c(),{end(l){l&&s.tick&&s.tick(1,0),o&&(r&&U(t,r),o=!1)}}}function qe(t,e){t.d(1),e.delete(t.key)}function Be(t,e){Qt(t,1,1,()=>{e.delete(t.key)})}function We(t,e,n,i,s,o,r,a,c,l,f,u){let d=t.length,h=o.length,_=d;const g={};for(;_--;)g[t[_].key]=_;const p=[],y=new Map,C=new Map,E=[];for(_=h;_--;){const m=u(s,o,_),w=n(m);let b=r.get(w);b?i&&E.push(()=>b.p(m,e)):(b=l(w,m),b.c()),y.set(w,p[_]=b),w in g&&C.set(w,Math.abs(_-g[w]))}const j=new Set,tt=new Set;function K(m){Tt(m,1),m.m(a,f),r.set(m.key,m),f=m.first,h--}for(;d&&h;){const m=p[h-1],w=t[d-1],b=m.key,O=w.key;m===w?(f=m.first,d--,h--):y.has(O)?!r.has(b)||j.has(b)?K(m):tt.has(O)?d--:C.get(b)>C.get(O)?(tt.add(b),K(m)):(j.add(O),d--):(c(w,r),d--)}for(;d--;){const m=t[d];y.has(m.key)||c(m,r)}for(;h;)K(p[h-1]);return v(E),p}function Fe(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],a=e[o];if(a){for(const c in r)c in a||(i[c]=1);for(const c in a)s[c]||(n[c]=a[c],s[c]=1);t[o]=a}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ge(t){return typeof t=="object"&&t!==null?t:{}}function Ie(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Je(t){t&&t.c()}function Ke(t,e){t&&t.l(e)}function Ut(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||H(()=>{const r=t.$$.on_mount.map(ct).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),o.forEach(H)}function Vt(t,e){const n=t.$$;n.fragment!==null&&(Kt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(t,e){t.$$.dirty[0]===-1&&(T.push(t),vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qe(t,e,n,i,s,o,r,a=[-1]){const c=P;L(t);const l=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:s,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:et(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,d,...h)=>{const _=h.length?h[0]:d;return l.ctx&&s(l.ctx[u],l.ctx[u]=_)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](_),f&&Xt(t,u)),d}):[],l.update(),f=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){St();const u=Rt(e.target);l.fragment&&l.fragment.l(u),u.forEach(M)}else l.fragment&&l.fragment.c();e.intro&&Tt(t.$$.fragment),Ut(t,e.target,e.anchor,e.customElement),Ct(),Et()}L(c)}class Ue{$destroy(){Vt(this,1),this.$destroy=x}$on(e,n){if(!z(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as $,Je as A,Ke as B,Ut as C,Vt as D,nt as E,Zt as F,v as G,he as H,le as I,rt as J,xe as K,fe as L,_e as M,ze as N,Ae as O,He as P,Te as Q,st as R,Ue as S,ke as T,be as U,z as V,De as W,me as X,at as Y,Se as Z,Me as _,ie as a,Ee as a0,ae as a1,Le as a2,H as a3,ve as a4,te as a5,At as a6,Ce as a7,je as a8,oe as a9,ft as aa,_t as ab,We as ac,Be as ad,Fe as ae,Ge as af,Ie as ag,Pe as ah,Oe as ai,Re as aj,qe as ak,Qt as b,ne as c,Z as d,J as e,de as f,re as g,ye as h,Qe as i,Rt as j,qt as k,M as l,we as m,Ot as n,Ht as o,$e as p,x as q,ee as r,Yt as s,Tt as t,se as u,pt as v,ge as w,pe as x,Ne as y,ce as z};
