import { c as create_ssr_component, b as add_attribute } from "../../../chunks/index3.js";
const hero = "/_app/immutable/assets/main.45bb18cc.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-pacrvw{position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh}.overlay.svelte-pacrvw{background-color:rgba(0, 0, 0, 0.5);width:100%;height:100%;position:absolute;z-index:2}img.svelte-pacrvw{position:relative}.main-title.svelte-pacrvw{position:fixed;top:6vw;left:50%;z-index:3;transform:translateX(-50%)}.main-descr.svelte-pacrvw{position:fixed;bottom:20vw;left:7vw;right:7vw;text-align:center;background:rgba(255, 255, 255, 0.12);backdrop-filter:blur(5px);border-radius:20px;padding:4vw 0;z-index:6}.main-vers.svelte-pacrvw{position:fixed;bottom:6vw;left:50%;transform:translateX(-50%);z-index:6;opacity:0.3}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="svelte-pacrvw"><div class="main-title text-32b c-white svelte-pacrvw">TopBody</div>
    <div class="main-vers text-20b c-white svelte-pacrvw">version 0.2</div>
    <div class="overlay svelte-pacrvw"></div>
    <img${add_attribute("src", hero, 0)} alt="q" class="main-img svelte-pacrvw">
    <a href="/trainings" class="main-descr text-16s c-white svelte-pacrvw">Начать тестирование</a>
</main>`;
});
export {
  Page as default
};
