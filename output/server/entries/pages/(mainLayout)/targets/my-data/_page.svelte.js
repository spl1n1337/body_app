import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "../../../../../chunks/index3.js";
import { b as buttonIcon } from "../../../../../chunks/edit.js";
import { p as plus } from "../../../../../chunks/plus.js";
import { C as Container } from "../../../../../chunks/Container.js";
import { T as TrainingHeader } from "../../../../../chunks/TrainingHeader.js";
import { B as BackArrow } from "../../../../../chunks/BackArrow.js";
import { g as goto } from "../../../../../chunks/navigation.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".big-black-button._black.svelte-j3nly0{margin-bottom:26.15vw !important}.reg-title.svelte-j3nly0{margin-top:2.05vw;margin-bottom:4.615vw}.button-container.svelte-j3nly0{display:flex;flex-direction:column;width:100%;padding:0 7.18vw;position:fixed;bottom:22px;left:50%;transform:translateX(-50%)}@media(max-width: 389px){.button-container.svelte-j3nly0{bottom:0}.reg-title.svelte-j3nly0{margin-top:0}.big-black-button._black.svelte-j3nly0{margin-bottom:1vw}}.blue-params.svelte-j3nly0{border-radius:16px;padding:4.1vw;display:flex;justify-content:space-around;margin-bottom:4.65vw}.blue-params-item.svelte-j3nly0{display:flex;flex-direction:column;align-items:center;justify-content:center}.params-name.svelte-j3nly0{opacity:0.5;margin-bottom:1vw}.date-container.svelte-j3nly0{display:flex;justify-content:space-between;margin-bottom:2vw}.params-container.svelte-j3nly0{padding:4.1vw 6.15vw;border-radius:16px;display:grid;grid-template-columns:repeat(3, 1fr);column-gap:6.15vw;row-gap:4.1vw}.value-name.svelte-j3nly0{margin-bottom:1.54vw}.button-icon.svelte-j3nly0{width:auto;filter:invert(100%);margin-right:2.56vw}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paramsEdingGo = () => goto("./my-data/params");
  let { data } = $$props;
  let params = data.user.params;
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
  console.log(params);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction: () => goto("./") }, {}, {})}
    ${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction: paramsEdingGo, buttonIcon }, {}, {})}`;
    }
  })}

${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="reg-title text-20b svelte-j3nly0">Мои параметры</div>

    <div class="blue-params bg-blue svelte-j3nly0"><div class="blue-params-item svelte-j3nly0"><div class="params-name text-12s c-white svelte-j3nly0">Рост</div>
            <div class="params-value text-16s-u c-white">${escape(!data.user.height ? "- -" : data.user.height)}</div></div>
        <div class="blue-params-item svelte-j3nly0"><div class="params-name text-12s c-white svelte-j3nly0">Возраст</div>
            <div class="params-value text-16s-u c-white">${escape(!data.user.age ? "- -" : data.user.age)}</div></div>
        <div class="blue-params-item svelte-j3nly0"><div class="params-name text-12s c-white svelte-j3nly0">Вес</div>
            <div class="params-value text-16s-u c-white">${escape(params.weight.length ? params.weight[params.weight.length - 1].weight + " кг" : "- -")}</div></div></div>

    <div class="date-container svelte-j3nly0"><div class="date text-12s c-dark-gray">${escape(dateString)}</div>
        <div class="time text-12s c-dark-gray">${escape(timeString)}</div></div>

    <div class="params-container bg-l-gray svelte-j3nly0"><div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Грудь</div>
            <div class="value-scrore text-16s">${escape(params.chest ? params.chest : "- -")}</div></div>
        <div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Талия</div>
            <div class="value-scrore text-16s">${escape(params.waist ? params.waist : "- -")}</div></div>
        <div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Бёдра</div>
            <div class="value-scrore text-16s">${escape(params.hips ? params.hips : "- -")}</div></div>
        <div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Рука</div>
            <div class="value-scrore text-16s">${escape(params.arm ? params.arm : "- -")}</div></div>
        <div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Бедро</div>
            <div class="value-scrore text-16s">${escape(params.hip ? params.hip : "- -")}</div></div>
        <div class="value-item"><div class="value-name text-12s c-dark-gray svelte-j3nly0">Голень</div>
            <div class="value-scrore text-16s">${escape(params.leg ? params.leg : "- -")}</div></div></div>`;
    }
  })}
     
     <div class="button-container svelte-j3nly0">
        <div class="big-black-button _black svelte-j3nly0"><img${add_attribute("src", plus, 0)} alt="q" class="button-icon svelte-j3nly0">
            <div class="start-training-text text-16s">Добавить замеры тела</div></div>
    </div>`;
});
export {
  Page as default
};
