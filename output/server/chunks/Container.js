import { c as create_ssr_component, e as escape } from "./index3.js";
const Container_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-u44oqv{margin:0 auto;padding:20.5vw 7.18vw 22vw;position:fixed;top:0;bottom:0;left:0;right:0;overflow-y:scroll}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bg_color } = $$props;
  if ($$props.bg_color === void 0 && $$bindings.bg_color && bg_color !== void 0)
    $$bindings.bg_color(bg_color);
  $$result.css.add(css);
  return `<main class="${"container " + escape(bg_color, true) + " svelte-u44oqv"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Container as C
};
