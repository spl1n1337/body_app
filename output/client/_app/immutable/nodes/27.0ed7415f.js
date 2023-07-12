import{l as Pe}from"../chunks/stores.d58668a2.js";import{S as be,i as he,s as we,e as v,d as A,h as p,j as I,k as C,l as f,x as o,n as D,o as u,p as je,q as le,f as P,m as j,F as H,E as ue,V as Fe,A as _e,B as me,C as de,t as ve,b as pe,D as ge,G as Be,r as Ge,y as Le,J as Oe}from"../chunks/index.38a176c8.js";import{T as Ae}from"../chunks/TrainingHeader.6f0bc9ea.js";import{B as Ce}from"../chunks/BackArrow.305c4988.js";import{g as Ue}from"../chunks/navigation.b21568d4.js";const Je=""+new URL("../assets/chevron-right.98f9b069.svg",import.meta.url).href;let qe;Pe.subscribe(t=>{qe=t});async function ze({fetch:t,params:e,data:s}){const r=e.training,i=s.token,l=s.user;return{trainingData:await(await t(`${qe}/api/trainings/${r}`)).json(),training_index:r,dataInfo:i,user:l}}const vs=Object.freeze(Object.defineProperty({__proto__:null,load:ze},Symbol.toStringTag,{value:"Module"})),He=""+new URL("../assets/big-play.20ebd065.svg",import.meta.url).href;function We(t){let e,s=(t[1]||"00:10")+"",r,i;return{c(){e=v("div"),r=A(s),this.h()},l(l){e=p(l,"DIV",{class:!0});var n=I(e);r=C(n,s),n.forEach(f),this.h()},h(){o(e,"class",i="timer__button c-white text-16b "+t[0]+" svelte-1rl623r")},m(l,n){D(l,e,n),u(e,r)},p(l,[n]){n&2&&s!==(s=(l[1]||"00:10")+"")&&je(r,s),n&1&&i!==(i="timer__button c-white text-16b "+l[0]+" svelte-1rl623r")&&o(e,"class",i)},i:le,o:le,d(l){l&&f(e)}}}function Ye(t,e,s){let{bg_color:r="bg-green"}=e,{time:i}=e;return t.$$set=l=>{"bg_color"in l&&s(0,r=l.bg_color),"time"in l&&s(1,i=l.time)},[r,i]}class Ke extends be{constructor(e){super(),he(this,e,Ye,We,we,{bg_color:0,time:1})}}const Te=""+new URL("../assets/PauseCircle.b2b2464a.svg",import.meta.url).href,Ve=""+new URL("../assets/Play.57c35044.svg",import.meta.url).href,Qe=""+new URL("../assets/next-exercise.fe9a9187.jpg",import.meta.url).href;function Xe(t){let e,s,r,i,l,n,c,E,T,q,G,V,x;return{c(){e=v("div"),s=v("img"),i=P(),l=v("div"),n=v("div"),c=A("Далее"),E=P(),T=v("div"),q=A(t[1]),this.h()},l(b){e=p(b,"DIV",{class:!0});var w=I(e);s=p(w,"IMG",{class:!0,src:!0,alt:!0}),i=j(w),l=p(w,"DIV",{class:!0});var _=I(l);n=p(_,"DIV",{class:!0});var h=I(n);c=C(h,"Далее"),h.forEach(f),E=j(_),T=p(_,"DIV",{class:!0});var d=I(T);q=C(d,t[1]),d.forEach(f),_.forEach(f),w.forEach(f),this.h()},h(){o(s,"class","exercise__img svelte-5pswxx"),H(s.src,r=t[0])||o(s,"src",r),o(s,"alt","qwe"),o(n,"class","next-exercise svelte-5pswxx"),o(T,"class","exercise__name text-14b c-dark svelte-5pswxx"),o(l,"class","exercise__text svelte-5pswxx"),o(e,"class",G="exercise__item "+t[2]+" svelte-5pswxx")},m(b,w){D(b,e,w),u(e,s),u(e,i),u(e,l),u(l,n),u(n,c),u(l,E),u(l,T),u(T,q),V||(x=ue(e,"click",function(){Fe(t[3])&&t[3].apply(this,arguments)}),V=!0)},p(b,[w]){t=b,w&1&&!H(s.src,r=t[0])&&o(s,"src",r),w&2&&je(q,t[1]),w&4&&G!==(G="exercise__item "+t[2]+" svelte-5pswxx")&&o(e,"class",G)},i:le,o:le,d(b){b&&f(e),V=!1,x()}}}function Ze(t,e,s){let{nextExercise:r,nextExerciseTitle:i,disable:l,goNext:n}=e;return t.$$set=c=>{"nextExercise"in c&&s(0,r=c.nextExercise),"nextExerciseTitle"in c&&s(1,i=c.nextExerciseTitle),"disable"in c&&s(2,l=c.disable),"goNext"in c&&s(3,n=c.goNext)},[r,i,l,n]}class $e extends be{constructor(e){super(),he(this,e,Ze,Xe,we,{nextExercise:0,nextExerciseTitle:1,disable:2,goNext:3})}}function es(t){let e,s,r,i;return e=new Ce({props:{class:"bg-green",backFunction:t[16]}}),r=new Ke({props:{time:t[9][t[5]].type=="time"||t[7]=="start"||t[7]=="rest"?t[6]:`${t[6]} ${Ne(t[6])}`,bg_color:t[7]=="exercise"?"bg-red":"bg-green"}}),{c(){_e(e.$$.fragment),s=P(),_e(r.$$.fragment)},l(l){me(e.$$.fragment,l),s=j(l),me(r.$$.fragment,l)},m(l,n){de(e,l,n),D(l,s,n),de(r,l,n),i=!0},p(l,n){const c={};n[0]&224&&(c.time=l[9][l[5]].type=="time"||l[7]=="start"||l[7]=="rest"?l[6]:`${l[6]} ${Ne(l[6])}`),n[0]&128&&(c.bg_color=l[7]=="exercise"?"bg-red":"bg-green"),r.$set(c)},i(l){i||(ve(e.$$.fragment,l),ve(r.$$.fragment,l),i=!0)},o(l){pe(e.$$.fragment,l),pe(r.$$.fragment,l),i=!1},d(l){ge(e,l),l&&f(s),ge(r,l)}}}function Re(t){let e,s,r,i,l;return{c(){e=v("div"),s=v("img"),this.h()},l(n){e=p(n,"DIV",{class:!0});var c=I(e);s=p(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(f),this.h()},h(){H(s.src,r=He)||o(s,"src",r),o(s,"alt","q"),o(s,"class","svelte-1awbl7l"),o(e,"class","play-icon svelte-1awbl7l")},m(n,c){D(n,e,c),u(e,s),i||(l=ue(e,"click",t[19]),i=!0)},p:le,d(n){n&&f(e),i=!1,l()}}}function Se(t){let e,s;return{c(){e=v("img"),this.h()},l(r){e=p(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){H(e.src,s=t[8]+t[9][t[5]].preview)||o(e,"src",s),o(e,"alt","qwe"),o(e,"class","poster svelte-1awbl7l")},m(r,i){D(r,e,i)},p(r,i){i[0]&288&&!H(e.src,s=r[8]+r[9][r[5]].preview)&&o(e,"src",s)},d(r){r&&f(e)}}}function ss(t){let e;return{c(){e=A("Отдыхаем")},l(s){e=C(s,"Отдыхаем")},m(s,r){D(s,e,r)},d(s){s&&f(e)}}}function ts(t){let e,s,r;return{c(){e=A("Начинаем "),s=v("br"),r=A("тренировку")},l(i){e=C(i,"Начинаем "),s=p(i,"BR",{}),r=C(i,"тренировку")},m(i,l){D(i,e,l),D(i,s,l),D(i,r,l)},d(i){i&&f(e),i&&f(s),i&&f(r)}}}function rs(t){let e,s;return{c(){e=v("div"),s=A("Пауза"),this.h()},l(r){e=p(r,"DIV",{class:!0});var i=I(e);s=C(i,"Пауза"),i.forEach(f),this.h()},h(){o(e,"class","exercise__pause-text text-14s c-white svelte-1awbl7l")},m(r,i){D(r,e,i),u(e,s)},d(r){r&&f(e)}}}function ls(t){let e,s;return{c(){e=v("div"),s=A("Продолжить"),this.h()},l(r){e=p(r,"DIV",{class:!0});var i=I(e);s=C(i,"Продолжить"),i.forEach(f),this.h()},h(){o(e,"class","exercise__pause-text text-14s c-white svelte-1awbl7l")},m(r,i){D(r,e,i),u(e,s)},d(r){r&&f(e)}}}function is(t){let e;return{c(){e=A("Далее")},l(s){e=C(s,"Далее")},m(s,r){D(s,e,r)},d(s){s&&f(e)}}}function as(t){let e;return{c(){e=A("Отдых")},l(s){e=C(s,"Отдых")},m(s,r){D(s,e,r)},d(s){s&&f(e)}}}function ns(t){let e;return{c(){e=A("Старт")},l(s){e=C(s,"Старт")},m(s,r){D(s,e,r)},d(s){s&&f(e)}}}function cs(t){let e,s,r,i,l,n,c,E,T,q,G,V,x,b,w,_,h,d,F,X,U,R,S,W,Z,Y,$,L,O,te,K,ie,J,m,z;e=new Ae({props:{$$slots:{default:[es]},$$scope:{ctx:t}}}),r=new $e({props:{nextExercise:Qe,nextExerciseTitle:t[9][t[5]].name,disable:t[7]==="exercise"?"disable":"",goNext:t[11]}});let y=t[4]==!1&&t[7]=="exercise"&&t[9][t[5]].type=="time"&&Re(t),k=(t[7]=="rest"||t[7]=="start"||t[3])&&Se(t);function ye(a,g){if(a[7]==="start")return ts;if(a[7]==="rest")return ss}let ee=ye(t),N=ee&&ee(t);function ke(a,g){return a[4]==!1?ls:rs}let ae=ke(t),Q=ae(t);function Ie(a,g){if(a[7]==="start")return ns;if(a[7]==="exercise")return as;if(a[7]==="rest")return is}let se=Ie(t),M=se&&se(t);return{c(){_e(e.$$.fragment),s=P(),_e(r.$$.fragment),i=P(),l=v("div"),n=v("div"),c=v("video"),T=P(),y&&y.c(),q=P(),k&&k.c(),G=P(),V=v("div"),x=P(),b=v("div"),N&&N.c(),_=P(),h=v("div"),d=v("div"),F=v("div"),X=P(),U=v("div"),R=v("div"),S=v("img"),Z=P(),Q.c(),$=P(),L=v("div"),O=v("div"),M&&M.c(),te=P(),K=v("img"),this.h()},l(a){me(e.$$.fragment,a),s=j(a),me(r.$$.fragment,a),i=j(a),l=p(a,"DIV",{class:!0});var g=I(l);n=p(g,"DIV",{class:!0});var B=I(n);c=p(B,"VIDEO",{preload:!0,class:!0,src:!0});var re=I(c);re.forEach(f),T=j(B),y&&y.l(B),q=j(B),k&&k.l(B),G=j(B),V=p(B,"DIV",{class:!0}),I(V).forEach(f),x=j(B),b=p(B,"DIV",{class:!0});var Ee=I(b);N&&N.l(Ee),Ee.forEach(f),B.forEach(f),g.forEach(f),_=j(a),h=p(a,"DIV",{class:!0});var ne=I(h);d=p(ne,"DIV",{class:!0});var De=I(d);F=p(De,"DIV",{class:!0}),I(F).forEach(f),De.forEach(f),X=j(ne),U=p(ne,"DIV",{class:!0});var ce=I(U);R=p(ce,"DIV",{class:!0});var oe=I(R);S=p(oe,"IMG",{src:!0,alt:!0,class:!0}),Z=j(oe),Q.l(oe),oe.forEach(f),$=j(ce),L=p(ce,"DIV",{class:!0});var fe=I(L);O=p(fe,"DIV",{class:!0});var xe=I(O);M&&M.l(xe),xe.forEach(f),te=j(fe),K=p(fe,"IMG",{src:!0,alt:!0,class:!0}),fe.forEach(f),ce.forEach(f),ne.forEach(f),this.h()},h(){c.muted=!0,o(c,"preload","auto"),c.autoplay=!0,c.playsInline=!0,c.loop=!0,o(c,"class","exercise__video svelte-1awbl7l"),H(c.src,E=t[8]+t[9][t[5]].video)||o(c,"src",E),o(V,"class","overlay svelte-1awbl7l"),o(b,"class","exercise__title c-white svelte-1awbl7l"),o(n,"class","exercise__container svelte-1awbl7l"),o(l,"class",w="exercise__bg "+(t[7]==="exercise"?"disable":"")+" svelte-1awbl7l"),o(F,"class","progress-line svelte-1awbl7l"),o(d,"class","exercise__progressbar svelte-1awbl7l"),H(S.src,W=t[4]==!1?Ve:Te)||o(S,"src",W),o(S,"alt","qwe"),o(S,"class","exercise__pause__icon mr-4 svelte-1awbl7l"),o(R,"class",Y="exercise__pause bg-black "+(t[7]==="start"?"disable":"")+" "+(t[9][t[5]].type==="repeats"&&t[7]==="exercise"?"repeats":"")+" svelte-1awbl7l"),o(O,"class","exercise__pause-text text-14s c-white"),H(K.src,ie=Je)||o(K,"src",ie),o(K,"alt","qwe"),o(K,"class","exercise__pause__icon ml-8 svelte-1awbl7l"),o(L,"class","exercise__pause bg-blue svelte-1awbl7l"),o(U,"class","exercise__footer bg-white svelte-1awbl7l"),o(h,"class","exercise__footer__wrapper svelte-1awbl7l")},m(a,g){de(e,a,g),D(a,s,g),de(r,a,g),D(a,i,g),D(a,l,g),u(l,n),u(n,c),t[18](c),u(n,T),y&&y.m(n,null),u(n,q),k&&k.m(n,null),u(n,G),u(n,V),u(n,x),u(n,b),N&&N.m(b,null),D(a,_,g),D(a,h,g),u(h,d),u(d,F),u(h,X),u(h,U),u(U,R),u(R,S),u(R,Z),Q.m(R,null),u(U,$),u(U,L),u(L,O),M&&M.m(O,null),u(L,te),u(L,K),J=!0,m||(z=[ue(R,"click",t[20]),ue(L,"click",t[21])],m=!0)},p(a,g){const B={};g[0]&224|g[1]&2&&(B.$$scope={dirty:g,ctx:a}),e.$set(B);const re={};g[0]&32&&(re.nextExerciseTitle=a[9][a[5]].name),g[0]&128&&(re.disable=a[7]==="exercise"?"disable":""),r.$set(re),(!J||g[0]&288&&!H(c.src,E=a[8]+a[9][a[5]].video))&&o(c,"src",E),a[4]==!1&&a[7]=="exercise"&&a[9][a[5]].type=="time"?y?y.p(a,g):(y=Re(a),y.c(),y.m(n,q)):y&&(y.d(1),y=null),a[7]=="rest"||a[7]=="start"||a[3]?k?k.p(a,g):(k=Se(a),k.c(),k.m(n,G)):k&&(k.d(1),k=null),ee!==(ee=ye(a))&&(N&&N.d(1),N=ee&&ee(a),N&&(N.c(),N.m(b,null))),(!J||g[0]&128&&w!==(w="exercise__bg "+(a[7]==="exercise"?"disable":"")+" svelte-1awbl7l"))&&o(l,"class",w),(!J||g[0]&16&&!H(S.src,W=a[4]==!1?Ve:Te))&&o(S,"src",W),ae!==(ae=ke(a))&&(Q.d(1),Q=ae(a),Q&&(Q.c(),Q.m(R,null))),(!J||g[0]&160&&Y!==(Y="exercise__pause bg-black "+(a[7]==="start"?"disable":"")+" "+(a[9][a[5]].type==="repeats"&&a[7]==="exercise"?"repeats":"")+" svelte-1awbl7l"))&&o(R,"class",Y),se!==(se=Ie(a))&&(M&&M.d(1),M=se&&se(a),M&&(M.c(),M.m(O,null)))},i(a){J||(ve(e.$$.fragment,a),ve(r.$$.fragment,a),J=!0)},o(a){pe(e.$$.fragment,a),pe(r.$$.fragment,a),J=!1},d(a){ge(e,a),a&&f(s),ge(r,a),a&&f(i),a&&f(l),t[18](null),y&&y.d(),k&&k.d(),N&&N.d(),a&&f(_),a&&f(h),Q.d(),M&&M.d(),m=!1,Be(z)}}}function Ne(t){let e="повтор";return t==1||(t%10===1&&t%100!==11||t%10>=2&&t%10<=4&&!(t%100>=12&&t%100<=14)?e+="а":e+="ов"),e}function Me(){let t=new Date,e=t.getDate(),s=t.getMonth()+1,r=t.getFullYear()%100,i=t.getHours(),l=t.getMinutes(),n=t.getSeconds();return e<10&&(e="0"+e),s<10&&(s="0"+s),i<10&&(i="0"+i),l<10&&(l="0"+l),n<10&&(n="0"+n),e+"/"+s+"/"+r+" "+i+":"+l+":"+n}function os(t,e,s){let r;Ge(t,Pe,m=>s(8,r=m));let{data:i}=e,l={start:"",end:""},n=i.dataInfo,c,E=i.trainingData.exercises,T=!0,q=!0;const G=new Intl.DateTimeFormat("en",{minute:"2-digit",second:"2-digit"});let V=0,x=!1,b,w=E.length,_=0,h="00:10",d="start";async function F(){s(7,d="exercise"),E[_].type=="repeats"&&(clearInterval(b),s(4,x=!1),s(6,h=E[_].repeats),Y(c)),E[_].type=="time"&&(clearInterval(b),s(4,x=!1),s(6,h=E[_].time),await Y(c),c.play(),s(2,T=!1),S(h,X))}function X(){clearInterval(b),s(4,x=!1),s(6,h="00:30"),s(7,d="rest"),s(5,_++,_),S(30,F),Y(c,$)}function U(){clearInterval(b),c.pause(),s(2,T=!0),s(4,x=!1),s(6,h="00:10"),s(7,d="start"),S(10,F)}function R(){clearInterval(b),s(4,x=!1),Ue("/trainings/finish")}function S(m,z){x||(V=m,s(4,x=!0),E[_].type=="time"&&s(6,h=G.format(V*1e3)),b=setInterval(()=>{V>0?(V--,s(6,h=G.format(V*1e3))):d=="exercise"&&_==w-1&&V==0?i.user?O():R():(clearInterval(b),s(4,x=!1),z&&z())},1e3))}function W(){$(),clearInterval(b),s(4,x=!1)}function Z(){console.log("resume"),d=="exercise"&&c.play(),S(V)}async function Y(m,z){await new Promise(y=>{s(3,q=!0);const k=()=>{m!=null&&m!=null&&m.src===r+E[_].video&&m.readyState>=3?y():setTimeout(k,100)};k()}),m.play(),s(2,T=!1),s(3,q=!1),typeof z=="function"&&m.paused==!1&&z()}const $=()=>{c.pause()},L=()=>{d=="start"?history.back():d=="exercise"&&_==0?U():d=="rest"?(s(7,d="exercise"),W(),s(5,_--,_),F()):d=="exercise"&&_!=0&&(W(),s(5,_--,_),F())};Le(()=>{S(10,F),Y(c,$),l.start=Me(),console.log(i.user)});async function O(){l.end=Me(),console.log(JSON.stringify(l));try{const m=await fetch(`${r}/api/new_take`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(l)}),z=await m.json();if(console.log(z),m.ok){const y=await m.json();console.log(y),R()}else throw new Error("Произошла ошибка при отправке формы.")}catch{R()}}function te(m){Oe[m?"unshift":"push"](()=>{c=m,s(1,c)})}const K=()=>{E[_].type=="time"?(c.play(),s(2,T=!1),Z()):(s(2,T=!1),c.play())},ie=m=>{d!="start"&&(E[_].type==="repeats"&&m.preventDefault(),x?W():Z())},J=m=>{d=="exercise"&&_==w-1?i.user?O():R():d=="start"||d=="rest"?F():d=="exercise"&&_<w-1&&X()};return t.$$set=m=>{"data"in m&&s(0,i=m.data)},[i,c,T,q,x,_,h,d,r,E,w,F,X,R,W,Z,L,O,te,K,ie,J]}class ps extends be{constructor(e){super(),he(this,e,os,cs,we,{data:0},null,[-1,-1])}}export{ps as component,vs as universal};
