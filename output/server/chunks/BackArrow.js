import { c as create_ssr_component, b as add_attribute } from "./index3.js";
const backarrow = "/_app/immutable/assets/arrow-left.bd88c275.svg";
const BackArrow_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-5z6gs7.svelte-5z6gs7{width:12.3vw;height:12.3vw;background-color:var(--light-gray);padding:3.07vw;display:flex;justify-content:center;align-items:center;border-radius:20px}div.svelte-5z6gs7 img.svelte-5z6gs7{width:auto}",
  map: null
};
const BackArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonIcon } = $$props;
  let { backFunction } = $$props;
  if ($$props.buttonIcon === void 0 && $$bindings.buttonIcon && buttonIcon !== void 0)
    $$bindings.buttonIcon(buttonIcon);
  if ($$props.backFunction === void 0 && $$bindings.backFunction && backFunction !== void 0)
    $$bindings.backFunction(backFunction);
  $$result.css.add(css);
  return `
<div class="svelte-5z6gs7"><img${add_attribute("src", !buttonIcon ? backarrow : buttonIcon, 0)} alt="back arrow" class="svelte-5z6gs7">
</div>`;
});
export {
  BackArrow as B
};
