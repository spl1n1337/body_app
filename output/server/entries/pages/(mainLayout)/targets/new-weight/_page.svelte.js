import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, b as add_attribute, d as each } from "../../../../../chunks/index3.js";
import { C as Container } from "../../../../../chunks/Container.js";
import { T as TrainingHeader } from "../../../../../chunks/TrainingHeader.js";
import { B as BackArrow } from "../../../../../chunks/BackArrow.js";
import { l as linkRoad } from "../../../../../chunks/stores2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wheel-value.svelte-1dao6kw{position:fixed;top:112vw;left:50%;transform:translateX(-50%)}.triangle.svelte-1dao6kw{position:absolute;left:50%;top:8vw;transform:translateX(-50%);z-index:5}.picker.svelte-1dao6kw{width:0px;height:60px;border:1px solid #1F2830;position:absolute;top:9vw;left:50%;transform:translateX(-50%);z-index:5}.wheel-container.svelte-1dao6kw{position:fixed;top:84vw;left:15px;right:15px;overflow:hidden}.wheel-element{scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;overflow-x:scroll;padding:10vw 0;scroll-behavior:smooth}.wheel-wrapper.svelte-1dao6kw{scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;display:flex;align-items:flex-start;width:fit-content}.wheel-wrapper.svelte-1dao6kw::-webkit-scrollbar{display:none}.wheel-item.svelte-1dao6kw{height:4.1vw;border-left:1px solid #DCDEE3;width:14px}.wheel-item.svelte-1dao6kw:nth-of-type(5n){height:8.2vw}.wheel-element.svelte-1dao6kw::-webkit-scrollbar{display:none}.big-black-button._black.svelte-1dao6kw{margin-bottom:26.15vw !important}.reg-title.svelte-1dao6kw{margin-top:2.05vw;margin-bottom:4.615vw}.button-container.svelte-1dao6kw{display:flex;flex-direction:column;width:100%;padding:0 7.18vw;position:fixed;bottom:22px;left:50%;transform:translateX(-50%)}@media(max-width: 389px){.button-container.svelte-1dao6kw{bottom:0}.reg-title.svelte-1dao6kw{margin-top:0}.big-black-button._black.svelte-1dao6kw{margin-bottom:1vw}}.blue-params.svelte-1dao6kw{border-radius:16px;padding:4.1vw;display:flex;justify-content:space-around;margin-bottom:4.65vw}.blue-params-item.svelte-1dao6kw{display:flex;flex-direction:column;align-items:center;justify-content:center}.params-name.svelte-1dao6kw{opacity:0.5;margin-bottom:1vw}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_linkRoad;
  $$unsubscribe_linkRoad = subscribe(linkRoad, (value) => value);
  let { data } = $$props;
  let lastWeighing = data.user.params.weight.slice(-1)[0] || [];
  let backFunction = () => history.back();
  const items = Array.from({ length: 1201 });
  let wheelElement;
  let wheelWrapper;
  let x = 0;
  data.token;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_linkRoad();
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction }, {}, {})}`;
    }
  })}

${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="reg-title text-20b svelte-1dao6kw">Новое взвешивание</div>

    <div class="blue-params bg-blue svelte-1dao6kw"><div class="blue-params-item svelte-1dao6kw"><div class="params-name text-12s c-white svelte-1dao6kw">Предыдущий вес</div>
            <div class="params-value text-16s-u c-white">${escape(lastWeighing.weight ? lastWeighing.weight : "- -")}</div></div>
        <div class="blue-params-item svelte-1dao6kw"><div class="params-name text-12s c-white svelte-1dao6kw">Дата</div>
            <div class="params-value text-16s-u c-white">${escape(lastWeighing.timestamp ? lastWeighing.timestamp : "- -")}</div></div></div>

   <div class="wheel-container svelte-1dao6kw"><svg class="triangle svelte-1dao6kw" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29289 7.29289L0.707107 1.70711C0.0771421 1.07714 0.523308 0 1.41421 0H12.5858C13.4767 0 13.9229 1.07714 13.2929 1.70711L7.70711 7.29289C7.31658 7.68342 6.68342 7.68342 6.29289 7.29289Z" fill="#1F2830"></path></svg>
        

        
        
            <div class="wheel-element svelte-1dao6kw"${add_attribute("this", wheelElement, 0)}><div class="picker svelte-1dao6kw"></div>
            <div class="wheel-wrapper svelte-1dao6kw"${add_attribute("this", wheelWrapper, 0)}>${each(items, (item) => {
        return `<div class="wheel-item svelte-1dao6kw"></div>`;
      })}</div></div></div>

    <div class="wheel-value text-32b svelte-1dao6kw">${escape(x)}</div>`;
    }
  })}
     
     <div class="button-container svelte-1dao6kw">
        <div class="big-black-button _black svelte-1dao6kw"><div class="start-training-text text-16s">Сохранить</div></div>
    </div>`;
});
export {
  Page as default
};
