import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { T as TrainingHeader } from "../../../../../chunks/TrainingHeader.js";
import { C as Cross } from "../../../../../chunks/Cross.js";
import { C as Container } from "../../../../../chunks/Container.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sex-container.svelte-t1t570.svelte-t1t570{flex-direction:row;margin-top:2.05vw;padding-left:4px}.sex-container.svelte-t1t570 label.svelte-t1t570{display:flex;flex-direction:row-reverse;align-items:center}input[type='radio'].svelte-t1t570.svelte-t1t570{outline:1px solid var(--gray);width:16px;height:16px;background-color:none;outline-offset:4px;border:none;border-radius:100px;padding:0;margin-right:12px}.sex-female.svelte-t1t570.svelte-t1t570{margin-right:24px}input[type='radio'].svelte-t1t570.svelte-t1t570:checked{outline:1px solid #589BFF;width:16px;height:16px;background-color:#589BFF;outline-offset:4px;border:none}form.svelte-t1t570 div.svelte-t1t570{display:flex;flex-direction:column}.name-container.svelte-t1t570.svelte-t1t570,.lastname-container.svelte-t1t570.svelte-t1t570,.email-container.svelte-t1t570.svelte-t1t570,.password-container.svelte-t1t570.svelte-t1t570{position:relative;margin-bottom:5.3vw}form.svelte-t1t570 div input.svelte-t1t570{border-bottom:1px solid #DCDEE3;padding-bottom:6px}form.svelte-t1t570 div input.svelte-t1t570:focus{border-bottom:1px solid #589BFF}.form-container.svelte-t1t570.svelte-t1t570{background:#F7F8FC;border-radius:16px;padding:5.13vw 6.15vw;margin-bottom:20vw}.big-black-button._black.svelte-t1t570.svelte-t1t570{margin-bottom:26.15vw !important}.reg-title.svelte-t1t570.svelte-t1t570{margin-top:2.05vw;margin-bottom:4.1vw}.button-container.svelte-t1t570.svelte-t1t570{display:flex;flex-direction:column;width:100%;padding:0 7.18vw;position:fixed;bottom:22px;left:50%;transform:translateX(-50%)}@media(max-width: 389px){.button-container.svelte-t1t570.svelte-t1t570{bottom:0}.reg-title.svelte-t1t570.svelte-t1t570{margin-top:0}.big-black-button._black.svelte-t1t570.svelte-t1t570{margin-bottom:1vw}}label.sex-male.svelte-t1t570.svelte-t1t570{flex-direction:row}label.sex-male.svelte-t1t570 input.svelte-t1t570{margin-right:0;margin-left:12px}.name-container.svelte-t1t570.svelte-t1t570::after{content:'кг';font-family:'Inter';font-style:normal;font-weight:600;font-size:calc(14/390*100vw);line-height:1.43em;text-align:right;color:#A5AAB4;position:absolute;right:0;bottom:1.53vw}.lastname-container.svelte-t1t570.svelte-t1t570::after{content:'см';font-family:'Inter';font-style:normal;font-weight:600;font-size:calc(14/390*100vw);line-height:1.43em;text-align:right;color:#A5AAB4;position:absolute;right:0;bottom:1.53vw}.email-container.svelte-t1t570.svelte-t1t570::after{content:'год';font-family:'Inter';font-style:normal;font-weight:600;font-size:calc(14/390*100vw);line-height:1.43em;text-align:right;color:#A5AAB4;position:absolute;right:0;bottom:1.53vw}.footer__nav.svelte-t1t570.svelte-t1t570{position:fixed;bottom:0;left:0;right:0;background-color:var(--light-gray);display:flex;justify-content:space-between;padding:2.05vw 6.92vw 1vw;z-index:2}.footer__nav-item.svelte-t1t570.svelte-t1t570{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:0 0 20.5vw}",
  map: null
};
let opacity = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let Goto = () => history.back();
  $$result.css.add(css);
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Cross, "Cross").$$render($$result, { opacity, Goto }, {}, {})}`;
    }
  })}

${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="reg-title text-20b svelte-t1t570">Ваши параметры PARAMS ADDING</div>
    <div class="form-container svelte-t1t570"><form class="svelte-t1t570"><div class="name-container svelte-t1t570"><label class="text-12s c-dark-gray" for="weight">Вес</label>
                    <input class="text-14s svelte-t1t570" type="text" name="weight"></div>
        
                <div class="lastname-container svelte-t1t570"><label class="text-12s c-dark-gray" for="height">Рост</label>
                    <input class="text-14s svelte-t1t570" type="text" name="height"></div>

                <div class="email-container svelte-t1t570"><label class="text-12s c-dark-gray" for="age">Возраст</label>
                    <input class="text-14s svelte-t1t570" type="number" name="age"></div>
        
                <div class="password-container svelte-t1t570"><label class="text-12s c-dark-gray" for="password">Пол</label>
                    <div class="sex-container svelte-t1t570"><label class="text-14s sex-female svelte-t1t570" for="sex">Женский<input type="radio" name="sex" value="female" id="female" checked class="svelte-t1t570"></label>
                        <label class="text-14s sex-male svelte-t1t570" for="sex">Мужской<input type="radio" name="sex" value="male" id="male" class="svelte-t1t570"></label></div></div></form></div>

    

    
    <div class="button-container svelte-t1t570">
        <div class="big-black-button _black svelte-t1t570"><div class="start-training-text text-16s">Сохранить</div></div></div>`;
    }
  })}

<div class="footer__nav svelte-t1t570"><a href="/trainings" class="footer__nav-item svelte-t1t570"><div class="footer__icon-container"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="none" viewBox="0 0 26 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.25 5.25H7a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h2.25c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19 5.25h-2.25A.75.75 0 0 0 16 6v12c0 .41.34.75.75.75H19c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19.75 7.5H22a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-2.25M6.25 16.5H4a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 4 7.5h2.25M10 12h6M22.75 12h1.5M1.75 12h1.5"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray">Тренировки</div></a>
    <a href="/profile_nodata" class="footer__nav-item svelte-t1t570"><div class="footer__icon-container __active"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12 9-9M18.37 5.63a9.02 9.02 0 1 0 1.75 2.49"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.18 8.82a4.5 4.5 0 1 0 1.31 2.93"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray c-blue">Цели</div></a>
    <a href="/user-data" class="footer__nav-item svelte-t1t570"><div class="footer__icon-container"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.98 18.7a6.75 6.75 0 0 1 12.04 0"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray c-dark-gray">Профиль</div></a>
</div>`;
});
export {
  Page as default
};
