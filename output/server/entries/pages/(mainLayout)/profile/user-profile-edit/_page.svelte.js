import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../../../chunks/index3.js";
import { C as Container } from "../../../../../chunks/Container.js";
import { T as TrainingHeader } from "../../../../../chunks/TrainingHeader.js";
import { B as BackArrow } from "../../../../../chunks/BackArrow.js";
import { g as goto } from "../../../../../chunks/navigation.js";
import { l as linkRoad } from "../../../../../chunks/stores2.js";
const Cropper_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".save-avatar.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{position:absolute;z-index:11;bottom:22vw;left:50%;transform:translateX(-50%)}.photo-dialog__title.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{margin-bottom:8.2vw}.swiper.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{width:28px;height:4px;background:#E7EBF4;border-radius:20px;position:relative;left:50%;transform:translateX(-50%)}.delete-button.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{padding:2vw 0;text-align:center;width:100%;margin:1vw 0}.cancel.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{border-radius:16px;padding:3vw 0;text-align:center;margin-bottom:1vw}.photo-dialog__title.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{text-align:center;padding:2vw 0}.photo-dialog.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{position:fixed;bottom:0;left:0;right:0;padding:1.5vw 7vw 4vw 7vw;background:#FFFFFF;border-radius:20px 20px 0px 0px;opacity:1}.photo-dialog__wrapper.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{padding-top:6vw}.modalphoto.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7,.modalexit.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;background:rgb(31 40 48 / 50%);z-index:100;visibility:hidden}.edit-btn-wrapper.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{position:fixed;bottom:22vw;left:7.18vw;right:7.18vw}.delete.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{text-align:center;margin-top:4.5vw}.exit.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{width:100%;text-align:center;padding:3vw 0;border-radius:16px\n    }form.svelte-q8vy7 div.svelte-q8vy7.svelte-q8vy7{display:flex;flex-direction:column}.name-container.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7,.lastname-container.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7,.email-container.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{position:relative}.lastname-container.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{margin:5.3vw 0}form.svelte-q8vy7 div.svelte-q8vy7 input.svelte-q8vy7{border-bottom:1px solid #DCDEE3;padding-bottom:6px}form.svelte-q8vy7 div.svelte-q8vy7 input.svelte-q8vy7:focus{border-bottom:1px solid #589BFF}.edit-form.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{background:#F7F8FC;border-radius:16px;padding:6vw;margin-bottom:20vw}.user-container.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{z-index:5;display:flex;flex-direction:column;align-items:center;width:100%;padding:6vw;border-radius:16px;margin-bottom:4.5vw}.user-icon.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{width:28.7vw;height:28.7vw;border-radius:100px;overflow:hidden;margin-bottom:2vw;background-color:#fff}header.aic{align-items:center}.title.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{margin-bottom:4.5vw}@media(max-width: 389px){.user-container.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{padding:2vw}.user-icon.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{width:25vw;height:25vw}}.modalphoto._active, .modalexit._active{visibility:visible !important}.prof-pic-wrapper.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{height:200px;width:200px;position:relative;border:solid;overflow:hidden}.prof-pic.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{position:absolute}.cropperArea{border-radius:100%;color:rgba(0, 0, 0, 0.9) !important}.grid.svelte-12kodkg:before{border:none !important}.grid.svelte-12kodkg:after{border:none !important}.prof-pic-wrapper.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{display:none}.cropper-box.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{z-index:10}.image{max-height:none !important}input.error.svelte-q8vy7.svelte-q8vy7.svelte-q8vy7{border-color:red}",
  map: null
};
let bgcolor = "aic";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_linkRoad;
  $$unsubscribe_linkRoad = subscribe(linkRoad, (value) => value);
  let { data } = $$props;
  data.token;
  let userData = data.user;
  let forma;
  let backFunction = () => goto("/profile");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_linkRoad();
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, { bgcolor }, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction }, {}, {})}
    
    <div class="save text-16s c-blue">Сохранить</div>`;
    }
  })}

${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="text-20b title svelte-q8vy7">Настройки</div>

    <div class="user-container bg-l-gray svelte-q8vy7"><div class="user-icon svelte-q8vy7">${`${userData.avatar ? `<img${add_attribute("src", userData.avatar, 0)} alt="q">` : ``}`}</div>
        
        <div class="edit-photo text-14s c-blue">Редактировать фото </div></div>
    <form action="#" class="edit-form svelte-q8vy7"${add_attribute("this", forma, 0)}><div class="name-container svelte-q8vy7"><label class="text-12s c-dark-gray" for="weight">Имя</label>
            <input class="${"text-14s " + escape("", true) + " svelte-q8vy7"}" type="text" name="name" maxlength="20"${add_attribute("placeholder", userData.name, 0)}></div>

        <div class="lastname-container svelte-q8vy7"><label class="text-12s c-dark-gray" for="height">Фамилия</label>
            <input class="${"text-14s " + escape("", true) + " svelte-q8vy7"}" type="text" name="lastname" maxlength="20"${add_attribute("placeholder", userData.lastname, 0)}></div>

        <div class="email-container svelte-q8vy7"><label class="text-12s c-dark-gray" for="email">Почта</label>
            <input class="${"text-14s " + escape("", true) + " svelte-q8vy7"}" type="email" name="email" maxlength="30"${add_attribute("placeholder", userData.email, 0)}></div></form>


    <div class="edit-btn-wrapper svelte-q8vy7">
        <div class="exit text-14s bg-l-gray svelte-q8vy7">Выход</div>
        
        <div class="delete text-14s c-red svelte-q8vy7">Удалить профиль</div></div>`;
    }
  })}


<div class="modalphoto svelte-q8vy7"><div class="photo-dialog svelte-q8vy7"><div class="swiper svelte-q8vy7"></div>
        <div class="photo-dialog__wrapper svelte-q8vy7"><div class="photo-dialog__title text-14s svelte-q8vy7">Изменить фотографию?</div>
            
            <div class="cancel text-14s bg-l-gray svelte-q8vy7">Выбрать из галерии</div>
            <input style="display:none" type="file" accept=".jpg, .jpeg, .png" class="svelte-q8vy7">
            
            <div class="delete-button text-14s c-red svelte-q8vy7">Удалить</div>
            
            <div class="cancel text-14s svelte-q8vy7">Отменить</div></div></div></div>

${``}






<div class="modalexit svelte-q8vy7"><div class="photo-dialog svelte-q8vy7"><div class="swiper svelte-q8vy7"></div>
        <div class="photo-dialog__wrapper svelte-q8vy7"><div class="photo-dialog__title text-14s svelte-q8vy7">Вы уверены, что хотите<br>выйти из профиля?</div>
            <div class="cancel text-14s bg-l-gray svelte-q8vy7">Да</div>
            <div class="delete-button text-14s svelte-q8vy7">Отмена</div></div></div>
</div>`;
});
export {
  Page as default
};
