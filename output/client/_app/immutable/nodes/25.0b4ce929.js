import{l as F}from"../chunks/stores.d58668a2.js";import{S as J,i as K,s as N,A as M,f as k,B as T,m as D,C as H,n as E,t as O,b as P,D as R,l as _,r as Q,y as U,e as u,d as z,h as m,j as h,k as V,x as c,o,q as W,L as X,F as x,E as Y}from"../chunks/index.38a176c8.js";import{T as Z}from"../chunks/TrainingHeader.6f0bc9ea.js";import"../chunks/paths.f249c62d.js";/* empty css                                                        */import{C as ee}from"../chunks/Container.08fd762d.js";import{g as te}from"../chunks/navigation.b21568d4.js";let G;F.subscribe(i=>{G=i});async function se({fetch:i}){return{trainingsData:await(await i(`${G}/api/trainings`)).json()}}const me=Object.freeze(Object.defineProperty({__proto__:null,load:se},Symbol.toStringTag,{value:"Module"}));function A(i,t,r){const e=i.slice();return e[4]=t[r],e}function ae(i){let t,r;return{c(){t=u("h1"),r=z("Тренировки"),this.h()},l(e){t=m(e,"H1",{class:!0});var s=h(t);r=V(s,"Тренировки"),s.forEach(_),this.h()},h(){c(t,"class","trainings__heading text-20b svelte-11d89zs")},m(e,s){E(e,t,s),o(t,r)},p:W,d(e){e&&_(t)}}}function B(i){let t,r,e,s=i[4].name+"",n,a,l,p,I,v,d,$,w,y,j;function L(){return i[3](i[4])}return{c(){t=u("div"),r=u("div"),e=u("div"),n=z(s),a=k(),l=u("div"),p=z("Начать"),I=k(),v=u("div"),d=u("img"),w=k(),this.h()},l(g){t=m(g,"DIV",{class:!0});var f=h(t);r=m(f,"DIV",{class:!0});var b=h(r);e=m(b,"DIV",{class:!0});var q=h(e);n=V(q,s),q.forEach(_),a=D(b),l=m(b,"DIV",{class:!0});var C=h(l);p=V(C,"Начать"),C.forEach(_),b.forEach(_),I=D(f),v=m(f,"DIV",{class:!0});var S=h(v);d=m(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(_),w=D(f),f.forEach(_),this.h()},h(){c(e,"class","treaining__title text-16b"),c(l,"class","training__cta text-14s bg-l-gray svelte-11d89zs"),c(r,"class","training__text-block svelte-11d89zs"),x(d.src,$=""+(i[0]+i[4].preview))||c(d,"src",$),c(d,"alt","qwe"),c(d,"class","svelte-11d89zs"),c(v,"class","training__img svelte-11d89zs"),c(t,"class","training-card "+i[4].bg_color+" svelte-11d89zs")},m(g,f){E(g,t,f),o(t,r),o(r,e),o(e,n),o(r,a),o(r,l),o(l,p),o(t,I),o(t,v),o(v,d),o(t,w),y||(j=Y(t,"click",L),y=!0)},p(g,f){i=g,f&1&&!x(d.src,$=""+(i[0]+i[4].preview))&&c(d,"src",$)},d(g){g&&_(t),y=!1,j()}}}function ne(i){let t,r=i[1],e=[];for(let s=0;s<r.length;s+=1)e[s]=B(A(i,r,s));return{c(){t=u("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=m(s,"DIV",{class:!0});var n=h(t);for(let a=0;a<e.length;a+=1)e[a].l(n);n.forEach(_),this.h()},h(){c(t,"class","training-container")},m(s,n){E(s,t,n);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(t,null)},p(s,n){if(n&3){r=s[1];let a;for(a=0;a<r.length;a+=1){const l=A(s,r,a);e[a]?e[a].p(l,n):(e[a]=B(l),e[a].c(),e[a].m(t,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=r.length}},d(s){s&&_(t),X(e,s)}}}function re(i){let t,r,e,s;return t=new Z({props:{$$slots:{default:[ae]},$$scope:{ctx:i}}}),e=new ee({props:{$$slots:{default:[ne]},$$scope:{ctx:i}}}),{c(){M(t.$$.fragment),r=k(),M(e.$$.fragment)},l(n){T(t.$$.fragment,n),r=D(n),T(e.$$.fragment,n)},m(n,a){H(t,n,a),E(n,r,a),H(e,n,a),s=!0},p(n,[a]){const l={};a&128&&(l.$$scope={dirty:a,ctx:n}),t.$set(l);const p={};a&129&&(p.$$scope={dirty:a,ctx:n}),e.$set(p)},i(n){s||(O(t.$$.fragment,n),O(e.$$.fragment,n),s=!0)},o(n){P(t.$$.fragment,n),P(e.$$.fragment,n),s=!1},d(n){R(t,n),n&&_(r),R(e,n)}}}function ie(i,t,r){let e;Q(i,F,l=>r(0,e=l));let{data:s}=t,n=s.trainingsData;U(()=>{console.log(s)});const a=l=>te(`/trainings/${l.id}`);return i.$$set=l=>{"data"in l&&r(2,s=l.data)},[e,n,s,a]}class ge extends J{constructor(t){super(),K(this,t,ie,re,N,{data:2})}}export{ge as component,me as universal};
