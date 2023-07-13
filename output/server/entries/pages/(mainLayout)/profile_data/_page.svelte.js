import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                                                               */import { C as Container } from "../../../../chunks/Container.js";
import { p as profileicon } from "../../../../chunks/frame.js";
import { p as plus } from "../../../../chunks/plus.js";
import { m as myparams, r as right } from "../../../../chunks/myparams.js";
import { W as WeightChart } from "../../../../chunks/WeightChart.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{overflow:hidden}.footer__nav.svelte-1a21luz{position:fixed;bottom:0;left:0;right:0;background-color:var(--light-gray);display:flex;justify-content:space-between;padding:2.05vw 6.92vw 1vw;z-index:2}.footer__nav-item.svelte-1a21luz{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:0 0 20.5vw}.profile-icon.svelte-1a21luz{border-radius:20px;width:12.3vw;height:12.3vw;overflow:hidden;margin-bottom:5.12vw}.profile-header.svelte-1a21luz{flex-direction:column;align-items:flex-start;height:auto;padding:4.19vw 7.18vw;border-radius:0px 0px 20px 20px;position:fixed;top:0;left:0;right:0;z-index:5;display:flex;justify-content:space-between}.params-container.svelte-1a21luz{background:rgba(255, 255, 255, 0.12);border-radius:20px;padding:4.1vw;width:100%;margin-bottom:3vw}.params-value.svelte-1a21luz{display:flex;justify-content:space-between;align-items:center}.params-name.svelte-1a21luz{opacity:0.5;margin-bottom:1vw}.params-plus.svelte-1a21luz{border-radius:16px;overflow:hidden;padding:2.56vw}.nothing-data.svelte-1a21luz{position:absolute;left:7.18vw;right:7.18vw;top:61.53vw;padding:6.15vw;border-radius:20px;overflow:hidden;min-height:65.64vw;display:flex;flex-direction:column;justify-content:space-between;align-items:stretch}.my-params.svelte-1a21luz{position:absolute;border-radius:16px;z-index:5;top:130vw;left:7.18vw;right:7.18vw;padding:4.1vw 5.12vw;display:flex;align-items:center}.my-params-icon.svelte-1a21luz{width:auto}.my-params-text.svelte-1a21luz{width:100%;margin-left:16px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="profile-header bg-blue svelte-1a21luz"><div class="profile-icon svelte-1a21luz"><img${add_attribute("src", profileicon, 0)} alt="qweqw"></div>

    <div class="params-container svelte-1a21luz"><div class="params-name text-16s c-white svelte-1a21luz">Вес 20.02.23</div>
        <div class="params-value svelte-1a21luz"><div class="params-weight text-32s c-white">56.6</div>
            
            <div class="params-plus bg-white svelte-1a21luz"><img${add_attribute("src", plus, 0)} alt="plus"></div></div></div></div>


${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="nothing-data bg-l-gray svelte-1a21luz"><div class="nothing-title text-16s">Изменение веса</div>
        ${validate_component(WeightChart, "WeightChart").$$render($$result, {}, {}, {})}</div>`;
    }
  })}


<div class="my-params bg-l-gray svelte-1a21luz"><img${add_attribute("src", myparams, 0)} alt="" class="my-params-icon svelte-1a21luz">
    <div class="my-params-text text-16s svelte-1a21luz">Мои параметры</div>
    <img${add_attribute("src", right, 0)} alt="" class="my-params-icon svelte-1a21luz"></div>


<div class="footer__nav svelte-1a21luz"><a href="/trainings" class="footer__nav-item svelte-1a21luz"><div class="footer__icon-container"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="none" viewBox="0 0 26 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.25 5.25H7a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h2.25c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19 5.25h-2.25A.75.75 0 0 0 16 6v12c0 .41.34.75.75.75H19c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19.75 7.5H22a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-2.25M6.25 16.5H4a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 4 7.5h2.25M10 12h6M22.75 12h1.5M1.75 12h1.5"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray">Тренировки</div></a>
    <a href="/targets" class="footer__nav-item svelte-1a21luz"><div class="footer__icon-container __active"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12 9-9M18.37 5.63a9.02 9.02 0 1 0 1.75 2.49"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.18 8.82a4.5 4.5 0 1 0 1.31 2.93"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray c-blue">Цели</div></a>
    <a href="/user-profile" class="footer__nav-item svelte-1a21luz"><div class="footer__icon-container"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.98 18.7a6.75 6.75 0 0 1 12.04 0"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray c-dark-gray">Профиль</div></a>
</div>`;
});
export {
  Page as default
};
