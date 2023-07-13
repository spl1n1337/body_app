import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../../../chunks/index3.js";
import { C as Cross } from "../../../../../chunks/Cross.js";
import { g as goto } from "../../../../../chunks/navigation.js";
const finish__bg = "/_app/immutable/assets/finish__bg.3c145676.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".buttons-container.svelte-13fozhv.svelte-13fozhv{position:fixed;bottom:5.64vw;left:7.18vw;right:7.18vw}.big-black-button._gray.svelte-13fozhv.svelte-13fozhv{background-color:var(--light-gray);margin-bottom:5.64vw}.big-black-button._gray.svelte-13fozhv .start-training-text.svelte-13fozhv{color:var(--dark)}.finish-banner.svelte-13fozhv.svelte-13fozhv{background:rgba(255, 255, 255, 0.12);border-radius:20px;display:flex;justify-content:space-between;position:absolute;top:23.8vw;left:7.18vw;right:7.18vw}.finish-img.svelte-13fozhv img.svelte-13fozhv{width:auto}.finish-title.svelte-13fozhv.svelte-13fozhv{padding-top:6.15vw;padding-left:6.15vw}.finish-container.svelte-13fozhv.svelte-13fozhv{height:100vh;position:relative;overflow:hidden;padding:4.1vw 7.18vw;z-index:5}@media(max-width: 389px){.finish-banner.svelte-13fozhv.svelte-13fozhv{overflow:hidden}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let opacity = true, Goto = () => {
    goto("/trainings");
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="finish-container bg-blue svelte-13fozhv">${validate_component(Cross, "Cross").$$render($$result, { opacity, Goto }, {}, {})}

    <div class="finish-banner svelte-13fozhv"><div class="finish-title text-16b c-white svelte-13fozhv">Ты завершил 
            экспресс–
            тренировку!
        </div>
        <div class="finish-img svelte-13fozhv"><img${add_attribute("src", finish__bg, 0)} alt="qwe" class="svelte-13fozhv"></div></div>
    
   <div class="buttons-container svelte-13fozhv">${!data.user ? `
    <div class="big-black-button _gray svelte-13fozhv"><div class="start-training-text text-16s svelte-13fozhv">Зарегистрироваться</div></div>` : ``}
    
    <div class="big-black-button"><div class="start-training-text text-16s">Завершить тренировку</div></div></div>
</div>`;
});
export {
  Page as default
};
