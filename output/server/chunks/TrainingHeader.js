import { c as create_ssr_component, e as escape, n as null_to_empty } from "./index3.js";
/* empty css                                              */const css = {
  code: "header.svelte-t59qgw{padding:4.19vw 7.18vw;border-radius:0px 0px 20px 20px;position:fixed;top:0;left:0;right:0;z-index:3;height:20.5vw;display:flex;align-items:flex-end;justify-content:space-between}",
  map: null
};
const TrainingHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgcolor } = $$props;
  if ($$props.bgcolor === void 0 && $$bindings.bgcolor && bgcolor !== void 0)
    $$bindings.bgcolor(bgcolor);
  $$result.css.add(css);
  return `<header class="${escape(null_to_empty(bgcolor ? bgcolor : "bg-white"), true) + " svelte-t59qgw"}">${slots.default ? slots.default({}) : ``}
</header>`;
});
export {
  TrainingHeader as T
};
