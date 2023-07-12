import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "../../../../../chunks/index3.js";
import { b as buttonIcon } from "../../../../../chunks/edit.js";
import { p as plus } from "../../../../../chunks/plus.js";
import { C as Container } from "../../../../../chunks/Container.js";
import { T as TrainingHeader } from "../../../../../chunks/TrainingHeader.js";
import { B as BackArrow } from "../../../../../chunks/BackArrow.js";
import { g as goto } from "../../../../../chunks/navigation.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".big-black-button._black.svelte-j3nly0{margin-bottom:26.15vw !important}.reg-title.svelte-j3nly0{margin-top:2.05vw;margin-bottom:4.615vw}.button-container.svelte-j3nly0{display:flex;flex-direction:column;width:100%;padding:0 7.18vw;position:fixed;bottom:22px;left:50%;transform:translateX(-50%)}@media(max-width: 389px){.button-container.svelte-j3nly0{bottom:0}.reg-title.svelte-j3nly0{margin-top:0}.big-black-button._black.svelte-j3nly0{margin-bottom:1vw}}.footer__nav.svelte-j3nly0{position:fixed;bottom:0;left:0;right:0;background-color:var(--light-gray);display:flex;justify-content:space-between;padding:2.05vw 6.92vw 1vw;z-index:2}.footer__nav-item.svelte-j3nly0{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:0 0 20.5vw}.blue-params.svelte-j3nly0{border-radius:16px;padding:4.1vw;display:flex;justify-content:space-around;margin-bottom:4.65vw}.blue-params-item.svelte-j3nly0{display:flex;flex-direction:column;align-items:center;justify-content:center}.params-name.svelte-j3nly0{opacity:0.5;margin-bottom:1vw}.date-container.svelte-j3nly0{display:flex;justify-content:space-between;margin-bottom:2vw}.params-container.svelte-j3nly0{padding:4.1vw 6.15vw;border-radius:16px;display:grid;grid-template-columns:repeat(3, 1fr);column-gap:6.15vw;row-gap:4.1vw}.value-name.svelte-j3nly0{margin-bottom:1.54vw}.button-icon.svelte-j3nly0{width:auto;filter:invert(100%);margin-right:2.56vw}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backFunction1 = () => goto("/params");
  const weekdays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ];
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ];
  const now = /* @__PURE__ */ new Date();
  const weekday = weekdays[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeString = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  const dateString = `${day} ${month} ${year}, ${weekday}`;
  $$result.css.add(css);
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction: () => history.back() }, {}, {})}
    ${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction: backFunction1, buttonIcon }, {}, {})}`;
    }
  })}

${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="reg-title text-20b svelte-j3nly0">Мои параметры</div>

    <div class="blue-params bg-blue svelte-j3nly0"><div class="blue-params-item svelte-j3nly0"><div class="params-name text-12s c-white svelte-j3nly0">Рост</div>
            <div class="params-value text-16s-u c-white">165</div></div>
        <div class="blue-params-item svelte-j3nly0"><div class="params-name text-12s c-white svelte-j3nly0">Возраст</div>
            <div class="params-value text-16s-u c-white">32</div></div>
        <div class="blue-params-item svelte-j3nly0"><div class="params-name text-12s c-white svelte-j3nly0">Вес</div>
            <div class="params-value text-16s-u c-white">50 кг</div></div></div>

    <div class="date-container svelte-j3nly0"><div class="date text-12s c-dark-gray">${escape(dateString)}</div>
        <div class="time text-12s c-dark-gray">${escape(timeString)}</div></div>

    <div class="params-container bg-l-gray svelte-j3nly0"><div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Грудь</div>
            <div class="value-scrore text-16s">165</div></div>
        <div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Талия</div>
            <div class="value-scrore text-16s">165</div></div>
        <div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Бёдра</div>
            <div class="value-scrore text-16s">165</div></div>
        <div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Рука</div>
            <div class="value-scrore text-16s">- -</div></div>
        <div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Бедро</div>
            <div class="value-scrore text-16s">165</div></div>
        <div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Голень</div>
            <div class="value-scrore text-16s">- -</div></div></div>`;
    }
  })}
     
     <div class="button-container svelte-j3nly0">
        <div class="big-black-button _black svelte-j3nly0"><img${add_attribute("src", plus, 0)} alt="q" class="button-icon svelte-j3nly0">
            <div class="start-training-text text-16s">Добавить замеры тела</div></div></div>


<div class="footer__nav svelte-j3nly0"><a href="/trainings" class="footer__nav-item svelte-j3nly0"><div class="footer__icon-container"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="none" viewBox="0 0 26 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.25 5.25H7a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h2.25c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19 5.25h-2.25A.75.75 0 0 0 16 6v12c0 .41.34.75.75.75H19c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19.75 7.5H22a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-2.25M6.25 16.5H4a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 4 7.5h2.25M10 12h6M22.75 12h1.5M1.75 12h1.5"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray">Тренировки</div></a>
    <a href="/targets" class="footer__nav-item svelte-j3nly0"><div class="footer__icon-container __active"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12 9-9M18.37 5.63a9.02 9.02 0 1 0 1.75 2.49"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.18 8.82a4.5 4.5 0 1 0 1.31 2.93"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray c-blue">Цели</div></a>
    <a href="/user-profile" class="footer__nav-item svelte-j3nly0"><div class="footer__icon-container"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.98 18.7a6.75 6.75 0 0 1 12.04 0"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray c-dark-gray">Профиль</div></a>
</div>`;
});
export {
  Page as default
};
