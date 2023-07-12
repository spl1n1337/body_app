import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute } from "../../../../../../chunks/index3.js";
import { T as TrainingHeader } from "../../../../../../chunks/TrainingHeader.js";
import { C as Cross } from "../../../../../../chunks/Cross.js";
import { C as Container } from "../../../../../../chunks/Container.js";
import { g as goto } from "../../../../../../chunks/navigation.js";
import { l as linkRoad } from "../../../../../../chunks/stores2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sex-container.svelte-18ohzyv.svelte-18ohzyv{flex-direction:row;margin-top:2.05vw;padding-left:4px}.sex-container.svelte-18ohzyv label.svelte-18ohzyv{display:flex;flex-direction:row-reverse;align-items:center}input[type='radio'].svelte-18ohzyv.svelte-18ohzyv{position:relative;border:1px solid var(--gray);width:20px;height:20px;background-color:none;border-radius:100px;padding:0;margin-right:12px}input[type='radio'].svelte-18ohzyv.svelte-18ohzyv:checked{border:1px solid #589BFF}input[type='radio'].svelte-18ohzyv.svelte-18ohzyv:checked::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:16px;height:16px;background-color:#589BFF;border-radius:100px}.sex-female.svelte-18ohzyv.svelte-18ohzyv{margin-right:24px}form.svelte-18ohzyv div.svelte-18ohzyv{display:flex;flex-direction:column}.name-container.svelte-18ohzyv.svelte-18ohzyv,.lastname-container.svelte-18ohzyv.svelte-18ohzyv,.email-container.svelte-18ohzyv.svelte-18ohzyv,.password-container.svelte-18ohzyv.svelte-18ohzyv{position:relative;margin-bottom:5.3vw}form.svelte-18ohzyv div input.svelte-18ohzyv{border-bottom:1px solid #DCDEE3;padding-bottom:6px}form.svelte-18ohzyv div input.svelte-18ohzyv:focus{border-bottom:1px solid #589BFF}.form-container.svelte-18ohzyv.svelte-18ohzyv{background:#F7F8FC;border-radius:16px;padding:5.13vw 6.15vw;margin-bottom:20vw}.big-black-button._black.svelte-18ohzyv.svelte-18ohzyv{margin-bottom:26.15vw !important}.reg-title.svelte-18ohzyv.svelte-18ohzyv{margin-top:2.05vw;margin-bottom:4.1vw}.button-container.svelte-18ohzyv.svelte-18ohzyv{display:flex;flex-direction:column;width:100%;padding:0 7.18vw;position:fixed;bottom:22px;left:50%;transform:translateX(-50%)}@media(max-width: 389px){.button-container.svelte-18ohzyv.svelte-18ohzyv{bottom:0}.reg-title.svelte-18ohzyv.svelte-18ohzyv{margin-top:0}.big-black-button._black.svelte-18ohzyv.svelte-18ohzyv{margin-bottom:1vw}}.name-container.svelte-18ohzyv.svelte-18ohzyv::after{content:'кг';font-family:'Inter';font-style:normal;font-weight:600;font-size:calc(14/390*100vw);line-height:1.43em;text-align:right;color:#A5AAB4;position:absolute;right:0;bottom:1.53vw}.lastname-container.svelte-18ohzyv.svelte-18ohzyv::after{content:'см';font-family:'Inter';font-style:normal;font-weight:600;font-size:calc(14/390*100vw);line-height:1.43em;text-align:right;color:#A5AAB4;position:absolute;right:0;bottom:1.53vw}.email-container.svelte-18ohzyv.svelte-18ohzyv::after{content:'год';font-family:'Inter';font-style:normal;font-weight:600;font-size:calc(14/390*100vw);line-height:1.43em;text-align:right;color:#A5AAB4;position:absolute;right:0;bottom:1.53vw}",
  map: null
};
let opacity = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_linkRoad;
  $$unsubscribe_linkRoad = subscribe(linkRoad, (value) => value);
  let { data } = $$props;
  data.token;
  let Goto = () => goto("./");
  let user = data.user;
  console.log(user);
  let inputWeight, inputHeight, inputAge, inputMale, inputFemale, form;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_linkRoad();
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Cross, "Cross").$$render($$result, { opacity, Goto }, {}, {})}`;
    }
  })}

${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div style="position:absolute; top: 50%;left:50%;font-size:30px;color:red;"></div>
    <div class="reg-title text-20b svelte-18ohzyv">Ваши параметры</div>
    <div class="form-container svelte-18ohzyv"><form class="svelte-18ohzyv"${add_attribute("this", form, 0)}><div class="name-container svelte-18ohzyv"><label class="text-12s c-dark-gray" for="weight">Вес</label>
                    
                    <input class="text-14s svelte-18ohzyv" type="number" name="weight" maxlength="6" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"${add_attribute(
        "placeholder",
        user.params.weight.length > 0 ? user.params.weight[user.params.weight.length - 1].weight : "",
        0
      )}${add_attribute("this", inputWeight, 0)}></div>
        
                <div class="lastname-container svelte-18ohzyv"><label class="text-12s c-dark-gray" for="height">Рост</label>
                    <input class="text-14s svelte-18ohzyv" type="number" name="height" maxlength="3" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"${add_attribute("placeholder", user ? user.height : "", 0)}${add_attribute("this", inputHeight, 0)}></div>

                <div class="email-container svelte-18ohzyv"><label class="text-12s c-dark-gray" for="age">Возраст</label>
                    <input class="text-14s svelte-18ohzyv" type="number" name="age" maxlength="3" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"${add_attribute("placeholder", user ? user.age : "", 0)}${add_attribute("this", inputAge, 0)}></div>
        
                <div class="password-container svelte-18ohzyv"><label class="text-12s c-dark-gray" for="password">Пол</label>
                    <div class="sex-container svelte-18ohzyv"><label class="text-14s sex-female svelte-18ohzyv" for="sex">Женский<input type="radio" name="sex" value="female" id="female" ${(!user.sex || user.sex == "female" ? true : "") ? "checked" : ""} class="svelte-18ohzyv"${add_attribute("this", inputFemale, 0)}></label>
                        <label class="text-14s sex-male svelte-18ohzyv" for="sex">Мужской<input type="radio" name="sex" value="male" id="male" ${(user.sex == "male" ? true : "") ? "checked" : ""} class="svelte-18ohzyv"${add_attribute("this", inputMale, 0)}></label></div></div></form></div>

    

    
    <div class="button-container svelte-18ohzyv">
        <div class="big-black-button _black svelte-18ohzyv"><div class="start-training-text text-16s">Сохранить</div></div></div>`;
    }
  })}`;
});
export {
  Page as default
};
