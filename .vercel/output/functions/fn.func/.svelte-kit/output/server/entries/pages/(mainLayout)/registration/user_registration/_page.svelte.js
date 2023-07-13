import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../../../chunks/index3.js";
import { s as showicon } from "../../../../../chunks/show.js";
import { B as BackArrow } from "../../../../../chunks/BackArrow.js";
import { T as TrainingHeader } from "../../../../../chunks/TrainingHeader.js";
import { C as Container } from "../../../../../chunks/Container.js";
import "devalue";
import "../../../../../chunks/stores2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.error.svelte-1qlaeo1.svelte-1qlaeo1{border-color:red}button.svelte-1qlaeo1.svelte-1qlaeo1{border:none}.password-container.svelte-1qlaeo1.svelte-1qlaeo1,.passwordconfirm-container.svelte-1qlaeo1.svelte-1qlaeo1{position:relative}.hide-btn.svelte-1qlaeo1.svelte-1qlaeo1{all:unset;position:absolute;bottom:1.5vw;right:0}.hide-btn.svelte-1qlaeo1 img.svelte-1qlaeo1{width:auto}form.svelte-1qlaeo1 div.svelte-1qlaeo1{display:flex;flex-direction:column}.name-contain.svelte-1qlaeo1.svelte-1qlaeo1,.lastname-container.svelte-1qlaeo1.svelte-1qlaeo1,.email-container.svelte-1qlaeo1.svelte-1qlaeo1,.password-container.svelte-1qlaeo1.svelte-1qlaeo1{margin-bottom:5.3vw}form.svelte-1qlaeo1 div input.svelte-1qlaeo1{border-bottom:1px solid #DCDEE3;padding-bottom:6px}form.svelte-1qlaeo1 div input.svelte-1qlaeo1:focus{border-bottom:1px solid #589BFF}.form-container.svelte-1qlaeo1.svelte-1qlaeo1{background:#F7F8FC;border-radius:16px;padding:5.13vw 6.15vw;margin-bottom:20vw}.big-black-button._black.svelte-1qlaeo1.svelte-1qlaeo1{margin-bottom:4.1vw}.reg-descr.svelte-1qlaeo1.svelte-1qlaeo1{margin-bottom:4.15vw}.reg-title.svelte-1qlaeo1.svelte-1qlaeo1{margin-top:4.1vw;margin-bottom:2vw}.big-black-button.__white.svelte-1qlaeo1.svelte-1qlaeo1{background-color:var(--white)}.button-container.svelte-1qlaeo1.svelte-1qlaeo1{display:flex;flex-direction:column;width:100%;padding:0 7.18vw;position:fixed;bottom:22px;left:50%;transform:translateX(-50%)}@media(max-width: 389px){.button-container.svelte-1qlaeo1.svelte-1qlaeo1{bottom:0}.reg-title.svelte-1qlaeo1.svelte-1qlaeo1{margin-top:0}.big-black-button._black.svelte-1qlaeo1.svelte-1qlaeo1{margin-bottom:1vw}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  const backFunction = (event) => {
    event.stopPropagation();
    history.back();
  };
  let forma;
  let errors = {
    names: false,
    email: false,
    passwords: false
  };
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  {
    {
      if (form?.error) {
        const email = forma.elements["email"];
        email.value = email.defaultValue;
        email.placeholder = "Почта уже используется";
        errors.email = true;
      }
    }
  }
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction }, {}, {})}`;
    }
  })}




${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="reg-title text-32b svelte-1qlaeo1">Регистрация</div>
    <div class="reg-descr text-16m c-dark-gray svelte-1qlaeo1">Введите свои персональыне данные, чтобы зарегистрироваться</div>
    <div class="form-container svelte-1qlaeo1">
            <form id="register" method="post" class="svelte-1qlaeo1"${add_attribute("this", forma, 0)}><div class="name-contain svelte-1qlaeo1"><label class="text-12s c-dark-gray" for="name">Имя</label>
                    <input class="${"text-14s " + escape("", true) + " svelte-1qlaeo1"}" type="text" name="name" required></div>
        
                <div class="lastname-container svelte-1qlaeo1"><label class="text-12s c-dark-gray" for="lastname">Фамилия</label>
                    <input class="${"text-14s " + escape("", true) + " svelte-1qlaeo1"}" type="text" name="lastname" required></div>

                <div class="email-container svelte-1qlaeo1"><label class="text-12s c-dark-gray" for="email">Почта</label>
                    <input class="${"text-14s " + escape(errors.email ? "error" : "", true) + " svelte-1qlaeo1"}" type="email" name="email" required></div>
        
                <div class="password-container svelte-1qlaeo1"><label class="text-12s c-dark-gray" for="password">Придумайте пароль</label>
                    <input class="${"text-14s " + escape("", true) + " svelte-1qlaeo1"}"${add_attribute("type", "password", 0)} name="password" required>
                    <button class="hide-btn svelte-1qlaeo1"><img${add_attribute("src", showicon, 0)} alt="q" class="svelte-1qlaeo1"></button></div>


                <div class="passwordconfirm-container svelte-1qlaeo1"><label class="text-12s c-dark-gray" for="passwordConfirmation">Повторите пароль</label>
                    <input class="${"text-14s " + escape("", true) + " svelte-1qlaeo1"}"${add_attribute("type", "password", 0)} name="passwordConfirmation" required>
                    <button class="hide-btn svelte-1qlaeo1"><img${add_attribute("src", showicon, 0)} alt="q" class="svelte-1qlaeo1"></button></div></form></div>


    <div class="button-container svelte-1qlaeo1">
        <div class="big-black-button _black svelte-1qlaeo1"><div class="start-training-text text-16s">Зарегистрироваться</div></div>
        
        <div class="big-black-button __white svelte-1qlaeo1"><div class="start-training-text c-black text-16s">Войти</div></div></div>`;
    }
  })}`;
});
export {
  Page as default
};
