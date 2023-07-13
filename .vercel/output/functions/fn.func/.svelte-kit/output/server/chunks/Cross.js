import { c as create_ssr_component, e as escape, b as add_attribute } from "./index3.js";
const cross = "/_app/immutable/assets/cross.c4e1e52d.svg";
const Cross_svelte_svelte_type_style_lang = "";
const css = {
  code: ".cross.svelte-pgea01.svelte-pgea01{border-radius:20px;padding:3.07vw;width:fit-content;position:absolute;right:7.18vw}.cross.opacity{background:rgba(255, 255, 255, 0.1)}.cross.svelte-pgea01 img.svelte-pgea01{width:auto}.invert{filter:invert(100%)\n    }",
  map: null
};
const Cross = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { opacity } = $$props;
  let { Goto } = $$props;
  const backFunction = (event) => {
    event.stopPropagation();
    history.back();
  };
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.Goto === void 0 && $$bindings.Goto && Goto !== void 0)
    $$bindings.Goto(Goto);
  if ($$props.backFunction === void 0 && $$bindings.backFunction && backFunction !== void 0)
    $$bindings.backFunction(backFunction);
  $$result.css.add(css);
  return `
<div class="${"cross " + escape(opacity ? "opacity" : "bg-l-gray", true) + " svelte-pgea01"}"><img${add_attribute("src", cross, 0)} alt="qwe" class="${"cross-img " + escape(!opacity ? "invert" : "", true) + " svelte-pgea01"}">
</div>`;
});
export {
  Cross as C
};
