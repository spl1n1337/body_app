import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../../../chunks/index3.js";
import { c as chest, w as waist, h as hips, a as arm, b as hip, l as leg, P as Picker } from "../../../../../chunks/Picker.js";
import { C as Container } from "../../../../../chunks/Container.js";
import { T as TrainingHeader } from "../../../../../chunks/TrainingHeader.js";
import { B as BackArrow } from "../../../../../chunks/BackArrow.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".big-black-button._black.svelte-1i9s3k6{margin-bottom:26.15vw !important}.reg-title.svelte-1i9s3k6{margin-top:2.05vw;margin-bottom:4.615vw}.button-container.svelte-1i9s3k6{display:flex;flex-direction:column;width:100%;padding:0 7.18vw;position:fixed;bottom:22px;left:50%;transform:translateX(-50%)}@media(max-width: 389px){.button-container.svelte-1i9s3k6{bottom:0}.reg-title.svelte-1i9s3k6{margin-top:0}.big-black-button._black.svelte-1i9s3k6{margin-bottom:1vw}}.footer__nav.svelte-1i9s3k6{position:fixed;bottom:0;left:0;right:0;background-color:var(--light-gray);display:flex;justify-content:space-between;padding:2.05vw 6.92vw 1vw;z-index:2}.footer__nav-item.svelte-1i9s3k6{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:0 0 20.5vw}.params-grid.svelte-1i9s3k6{display:grid;grid-template-columns:repeat(2, 1fr);gap:4.1vw}.params-grid-item.svelte-1i9s3k6{padding:4.1vw 0;border-radius:20px;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.item-icon.svelte-1i9s3k6{width:7.18vw}.item-title.svelte-1i9s3k6{margin:1.54vw 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backFunction = () => history.back();
  let isActive = false;
  function handleClick() {
    isActive = !isActive;
    console.log(isActive);
  }
  $$result.css.add(css);
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
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">Грудь</div>
            
            
            <div class="params-item-add text-14s c-blue svelte-1i9s3k6">Добавить</div></div>
        
        <div class="params-grid-item bg-l-gray svelte-1i9s3k6"><img${add_attribute("src", waist, 0)} alt="" class="item-icon svelte-1i9s3k6">
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">Талия</div>
            <div class="value text-14s svelte-1i9s3k6">68</div></div>
        
        <div class="params-grid-item bg-l-gray svelte-1i9s3k6"><img${add_attribute("src", hips, 0)} alt="" class="item-icon svelte-1i9s3k6">
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">Бёдра</div>
            <div class="value text-14s svelte-1i9s3k6">98</div></div>
        
        <div class="params-grid-item bg-l-gray svelte-1i9s3k6"><img${add_attribute("src", arm, 0)} alt="" class="item-icon svelte-1i9s3k6">
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">Рука</div>
            
            
            <div class="params-item-add text-14s c-blue svelte-1i9s3k6">Добавить</div></div>
        
        <div class="params-grid-item bg-l-gray svelte-1i9s3k6"><img${add_attribute("src", hip, 0)} alt="" class="item-icon svelte-1i9s3k6">
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">Бедро</div>
            <div class="value text-14s svelte-1i9s3k6">60</div></div>
        
        <div class="params-grid-item bg-l-gray svelte-1i9s3k6"><img${add_attribute("src", leg, 0)} alt="" class="item-icon svelte-1i9s3k6">
            <div class="item-title text-12s c-dark-gray svelte-1i9s3k6">Голень</div>
            <div class="value text-14s svelte-1i9s3k6">34</div></div></div>`;
    }
  })}
     
     <div class="button-container svelte-1i9s3k6">
        <div class="big-black-button _black svelte-1i9s3k6"><div class="start-training-text text-16s">Сохранить</div></div></div>


<div class="footer__nav svelte-1i9s3k6"><a href="/trainings" class="footer__nav-item svelte-1i9s3k6"><div class="footer__icon-container"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="none" viewBox="0 0 26 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.25 5.25H7a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h2.25c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19 5.25h-2.25A.75.75 0 0 0 16 6v12c0 .41.34.75.75.75H19c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19.75 7.5H22a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-2.25M6.25 16.5H4a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 4 7.5h2.25M10 12h6M22.75 12h1.5M1.75 12h1.5"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray svelte-1i9s3k6">Тренировки</div></a>
    <a href="/targets" class="footer__nav-item svelte-1i9s3k6"><div class="footer__icon-container __active"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12 9-9M18.37 5.63a9.02 9.02 0 1 0 1.75 2.49"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.18 8.82a4.5 4.5 0 1 0 1.31 2.93"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray c-blue svelte-1i9s3k6">Цели</div></a>
    <a href="/profile" class="footer__nav-item svelte-1i9s3k6"><div class="footer__icon-container"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.98 18.7a6.75 6.75 0 0 1 12.04 0"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray c-dark-gray svelte-1i9s3k6">Профиль</div></a></div>

${validate_component(Picker, "Picker").$$render($$result, { isActive, close: handleClick }, {}, {})}`;
});
export {
  Page as default
};
