import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../../../../chunks/index3.js";
import { c as chest, w as waist, h as hips, a as arm, b as hip, l as leg, P as Picker } from "../../../../../../chunks/Picker.js";
import { g as goto } from "../../../../../../chunks/navigation.js";
import { C as Container } from "../../../../../../chunks/Container.js";
import { T as TrainingHeader } from "../../../../../../chunks/TrainingHeader.js";
import { B as BackArrow } from "../../../../../../chunks/BackArrow.js";
import { p as pickerOutput, l as linkRoad } from "../../../../../../chunks/stores2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".big-black-button._black.svelte-1i9s3k6{margin-bottom:26.15vw !important}.reg-title.svelte-1i9s3k6{margin-top:2.05vw;margin-bottom:4.615vw}.button-container.svelte-1i9s3k6{display:flex;flex-direction:column;width:100%;padding:0 7.18vw;position:fixed;bottom:22px;left:50%;transform:translateX(-50%)}@media(max-width: 389px){.button-container.svelte-1i9s3k6{bottom:0}.reg-title.svelte-1i9s3k6{margin-top:0}.big-black-button._black.svelte-1i9s3k6{margin-bottom:1vw}}.params-grid.svelte-1i9s3k6{display:grid;grid-template-columns:repeat(2, 1fr);gap:4.1vw}.params-grid-item.svelte-1i9s3k6{padding:4.1vw 0;border-radius:20px;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.item-icon.svelte-1i9s3k6{width:7.18vw}.item-title.svelte-1i9s3k6{margin:1.54vw 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pickerOutput, $$unsubscribe_pickerOutput;
  let $$unsubscribe_linkRoad;
  $$unsubscribe_pickerOutput = subscribe(pickerOutput, (value) => $pickerOutput = value);
  $$unsubscribe_linkRoad = subscribe(linkRoad, (value) => value);
  let { data } = $$props;
  data.token;
  let pickerName = { key: "0" };
  let isActive = false;
  let params = data.user.params;
  const contextParams = {
    chest: "Грудь",
    waist: "Талия",
    hips: "Бёдра",
    arm: "Рука",
    hip: "Бедро",
    leg: "Голень"
  };
  function backFunction() {
    pickerOutput.set({});
    goto("/targets/my-data");
  }
  function handleClick(key, value) {
    pickerName.key = value;
    isActive = !isActive;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_pickerOutput();
  $$unsubscribe_linkRoad();
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction }, {}, {})}`;
    }
  })}

${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="reg-title text-20b svelte-1i9s3k6">Ваши параметры</div>

    <div class="params-grid svelte-1i9s3k6">
        <div class="params-grid-item bg-l-gray svelte-1i9s3k6"><img${add_attribute("src", chest, 0)} alt="" class="item-icon svelte-1i9s3k6">
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">${escape(contextParams.chest)}</div>
            ${!params.chest && !$pickerOutput.chest ? `<div class="params-item-add text-14s c-blue svelte-1i9s3k6">Добавить</div>` : `<div class="value text-14s svelte-1i9s3k6">${escape($pickerOutput.chest ? $pickerOutput.chest : params.chest)}</div>`}</div>
        
        <div class="params-grid-item bg-l-gray svelte-1i9s3k6"><img${add_attribute("src", waist, 0)} alt="" class="item-icon svelte-1i9s3k6">
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">${escape(contextParams.waist)}</div>
            ${!params.waist && !$pickerOutput.waist ? `<div class="params-item-add text-14s c-blue svelte-1i9s3k6">Добавить</div>` : `<div class="value text-14s svelte-1i9s3k6">${escape($pickerOutput.waist ? $pickerOutput.waist : params.waist)}</div>`}</div>
        
        <div class="params-grid-item bg-l-gray svelte-1i9s3k6"><img${add_attribute("src", hips, 0)} alt="" class="item-icon svelte-1i9s3k6">
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">${escape(contextParams.hips)}</div>
            ${!params.hips && !$pickerOutput.hips ? `<div class="params-item-add text-14s c-blue svelte-1i9s3k6">Добавить</div>` : `<div class="value text-14s svelte-1i9s3k6">${escape($pickerOutput.hips ? $pickerOutput.hips : params.hips)}</div>`}</div>
        
        <div class="params-grid-item bg-l-gray svelte-1i9s3k6"><img${add_attribute("src", arm, 0)} alt="" class="item-icon svelte-1i9s3k6">
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">${escape(contextParams.arm)}</div>
            ${!params.arm && !$pickerOutput.arm ? `<div class="params-item-add text-14s c-blue svelte-1i9s3k6">Добавить</div>` : `<div class="value text-14s svelte-1i9s3k6">${escape($pickerOutput.arm ? $pickerOutput.arm : params.arm)}</div>`}</div>
        
        <div class="params-grid-item bg-l-gray svelte-1i9s3k6"><img${add_attribute("src", hip, 0)} alt="" class="item-icon svelte-1i9s3k6">
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">${escape(contextParams.hip)}</div>
            ${!params.hip && !$pickerOutput.hip ? `<div class="params-item-add text-14s c-blue svelte-1i9s3k6">Добавить</div>` : `<div class="value text-14s svelte-1i9s3k6">${escape($pickerOutput.hip ? $pickerOutput.hip : params.hip)}</div>`}</div>
        
        <div class="params-grid-item bg-l-gray svelte-1i9s3k6"><img${add_attribute("src", leg, 0)} alt="" class="item-icon svelte-1i9s3k6">
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">${escape(contextParams.leg)}</div>
            ${!params.leg && !$pickerOutput.leg ? `<div class="params-item-add text-14s c-blue svelte-1i9s3k6">Добавить</div>` : `<div class="value text-14s svelte-1i9s3k6">${escape($pickerOutput.leg ? $pickerOutput.leg : params.leg)}</div>`}</div></div>`;
    }
  })}
     
     <div class="button-container svelte-1i9s3k6">
        <div class="big-black-button _black svelte-1i9s3k6"><div class="start-training-text text-16s">Сохранить</div></div></div>


${validate_component(Picker, "Picker").$$render(
    $$result,
    {
      isActive,
      selectedCard: pickerName.key,
      close: handleClick
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
