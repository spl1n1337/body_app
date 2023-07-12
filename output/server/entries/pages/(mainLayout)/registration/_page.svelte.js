import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../../chunks/index3.js";
import { B as BackArrow } from "../../../../chunks/BackArrow.js";
import { T as TrainingHeader } from "../../../../chunks/TrainingHeader.js";
import { C as Container } from "../../../../chunks/Container.js";
import { s as showicon } from "../../../../chunks/show.js";
import "devalue";
import { l as linkRoad } from "../../../../chunks/stores2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-tlsgor.svelte-tlsgor{border-color:red}.password-container.svelte-tlsgor.svelte-tlsgor{position:relative}.hide-btn.svelte-tlsgor.svelte-tlsgor{all:unset;position:absolute;bottom:1.5vw;right:0}.hide-btn.svelte-tlsgor img.svelte-tlsgor{width:auto}form.svelte-tlsgor div.svelte-tlsgor{display:flex;flex-direction:column}.email-container.svelte-tlsgor.svelte-tlsgor{margin-bottom:5.3vw}form.svelte-tlsgor div input.svelte-tlsgor{border-bottom:1px solid #DCDEE3;padding-bottom:6px}form.svelte-tlsgor div input.svelte-tlsgor:focus{border-bottom:1px solid #589BFF}.form-container.svelte-tlsgor.svelte-tlsgor{background:#F7F8FC;border-radius:16px;padding:5.13vw 6.15vw;margin-bottom:2vw}.big-black-button._black.svelte-tlsgor.svelte-tlsgor{margin-bottom:4.1vw}.reg-descr.svelte-tlsgor.svelte-tlsgor{margin-bottom:4.15vw}.reg-title.svelte-tlsgor.svelte-tlsgor{margin-top:4.1vw;margin-bottom:2vw}.big-black-button.__white.svelte-tlsgor.svelte-tlsgor{background-color:var(--white)}.button-container.svelte-tlsgor.svelte-tlsgor{display:flex;flex-direction:column;width:100%;padding:0 7.18vw;position:fixed;bottom:22px;left:50%;transform:translateX(-50%)}@media(max-width: 389px){.button-container.svelte-tlsgor.svelte-tlsgor{bottom:0}.reg-title.svelte-tlsgor.svelte-tlsgor{margin-top:0}.big-black-button._black.svelte-tlsgor.svelte-tlsgor{margin-bottom:1vw}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_linkRoad;
  $$unsubscribe_linkRoad = subscribe(linkRoad, (value) => value);
  let form;
  const backFunction = (event) => {
    event.stopPropagation();
    history.back();
  };
  $$result.css.add(css);
  $$unsubscribe_linkRoad();
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction }, {}, {})}`;
    }
  })}




${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="reg-title text-32b svelte-tlsgor">Войти</div>
    <div class="reg-descr text-16m c-dark-gray svelte-tlsgor">Введите почту и пароль для<br>авторизации</div>
    <div class="form-container svelte-tlsgor">
            <form method="post" class="svelte-tlsgor"${add_attribute("this", form, 0)}><div class="email-container svelte-tlsgor"><label class="text-12s c-dark-gray" for="email">Почта</label>
                    <input class="${"text-14s " + escape("", true) + " svelte-tlsgor"}" type="email" name="email"></div>
        
                <div class="password-container svelte-tlsgor"><label class="text-12s c-dark-gray" for="password">Пароль</label>
                    <input class="${"text-14s " + escape("", true) + " svelte-tlsgor"}"${add_attribute("type", "password", 0)} name="password">
                    <button class="hide-btn svelte-tlsgor"><img${add_attribute("src", showicon, 0)} alt="q" class="svelte-tlsgor"></button></div>

                    
                <div class="button-container svelte-tlsgor"><div class="big-black-button _black svelte-tlsgor"><div class="start-training-text text-16s svelte-tlsgor">Войти</div></div>
                    
                    <div class="big-black-button __white svelte-tlsgor"><div class="start-training-text c-black text-16s svelte-tlsgor">Зарегистрироваться</div></div></div></form></div>`;
    }
  })}`;
});
export {
  Page as default
};
