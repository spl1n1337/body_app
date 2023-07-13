import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                                                               */import { C as Container } from "../../../../chunks/Container.js";
import { p as profileicon } from "../../../../chunks/frame.js";
import { p as plus } from "../../../../chunks/plus.js";
import { m as myparams, r as right } from "../../../../chunks/myparams.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".profile-icon.svelte-1fou2n1{border-radius:20px;width:12.3vw;height:12.3vw;overflow:hidden;margin-bottom:5.12vw}.profile-header.svelte-1fou2n1{flex-direction:column;align-items:flex-start;height:auto;padding:4.19vw 7.18vw;border-radius:0px 0px 20px 20px;position:fixed;top:0;left:0;right:0;z-index:5;display:flex;justify-content:space-between}.params-container.svelte-1fou2n1{background:rgba(255, 255, 255, 0.12);border-radius:20px;padding:4.1vw;width:100%;margin-bottom:3vw}.params-value.svelte-1fou2n1{display:flex;justify-content:space-between;align-items:center}.params-name.svelte-1fou2n1{opacity:0.5;margin-bottom:1vw}.params-plus.svelte-1fou2n1{border-radius:16px;overflow:hidden;padding:2.56vw}.my-params.svelte-1fou2n1{position:absolute;border-radius:16px;z-index:5;top:130vw;left:7.18vw;right:7.18vw;padding:4.1vw 5.12vw;display:flex;align-items:center}.my-params-icon.svelte-1fou2n1{width:auto}.my-params-text.svelte-1fou2n1{width:100%;margin-left:16px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data.user.params.weight);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="profile-header bg-blue svelte-1fou2n1"><div class="profile-icon svelte-1fou2n1"><img${add_attribute("src", profileicon, 0)} alt="qweqw"></div>

    <div class="params-container svelte-1fou2n1"><div class="params-name text-16s c-white svelte-1fou2n1">Вес <span class="params-date"></span></div>
        <div class="params-value svelte-1fou2n1"><div class="params-weight text-32s c-white">- -</div>
            
            <div class="params-plus bg-white svelte-1fou2n1"><img${add_attribute("src", plus, 0)} alt="plus"></div></div></div></div>


${validate_component(Container, "Container").$$render($$result, {}, {}, {})}


<div class="my-params bg-l-gray svelte-1fou2n1"><img${add_attribute("src", myparams, 0)} alt="" class="my-params-icon svelte-1fou2n1">
    <div class="my-params-text text-16s svelte-1fou2n1">Мои параметры</div>
    <img${add_attribute("src", right, 0)} alt="" class="my-params-icon svelte-1fou2n1">
</div>`;
});
export {
  Page as default
};
