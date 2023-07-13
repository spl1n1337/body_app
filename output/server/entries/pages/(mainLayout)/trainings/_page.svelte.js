import { c as create_ssr_component, a as subscribe, v as validate_component, d as each, e as escape } from "../../../../chunks/index3.js";
import { l as linkRoad } from "../../../../chunks/stores2.js";
import { T as TrainingHeader } from "../../../../chunks/TrainingHeader.js";
/* empty css                                                          */import { C as Container } from "../../../../chunks/Container.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{overflow-y:auto}.trainings__heading.svelte-11d89zs.svelte-11d89zs{width:100%}.training-card.svelte-11d89zs.svelte-11d89zs{border-radius:20px;display:flex;justify-content:space-between;align-items:stretch;margin-bottom:4.1vw;position:relative;width:100%;overflow:hidden;height:53.3vw}.training__text-block.svelte-11d89zs.svelte-11d89zs{padding-top:5.13vw;padding-left:6.15vw;padding-bottom:6.15vw;display:flex;flex-direction:column;justify-content:space-between;width:44%;position:relative;z-index:2}.training__cta.svelte-11d89zs.svelte-11d89zs{padding:2.56vw 5.13vw;border-radius:16px;width:min-content}.training__img.svelte-11d89zs.svelte-11d89zs{width:100%;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1}@media(max-width: 389px){.training-card.svelte-11d89zs.svelte-11d89zs{overflow:hidden}.container.svelte-11d89zs.svelte-11d89zs{padding:20.5vw 7.18vw 28vw}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $linkRoad, $$unsubscribe_linkRoad;
  $$unsubscribe_linkRoad = subscribe(linkRoad, (value) => $linkRoad = value);
  let { data } = $$props;
  let trainingsInfo = data.trainingsData;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_linkRoad();
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="trainings__heading text-20b svelte-11d89zs">Тренировки</h1>`;
    }
  })}


${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="training-container">${each(trainingsInfo, (item) => {
        return `
        <div class="${"training-card " + escape(item.bg_color, true) + " svelte-11d89zs"}"><div class="training__text-block svelte-11d89zs"><div class="treaining__title text-16b">${escape(item.name)}</div>
                <div class="training__cta text-14s bg-l-gray svelte-11d89zs">Начать</div></div>
            <div class="training__img svelte-11d89zs"><img src="${escape($linkRoad, true) + escape(item.preview, true)}" alt="qwe" class="svelte-11d89zs"></div>
        </div>`;
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
