import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../../chunks/index3.js";
import { C as Container } from "../../../../chunks/Container.js";
import { T as TrainingHeader } from "../../../../chunks/TrainingHeader.js";
import { B as BackArrow } from "../../../../chunks/BackArrow.js";
const user = "/_app/immutable/assets/user.18fe0b56.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".modalexit.svelte-1am7lt6 .photo-dialog__title.svelte-1am7lt6{margin-bottom:8.2vw}.swiper.svelte-1am7lt6.svelte-1am7lt6{width:28px;height:4px;background:#E7EBF4;border-radius:20px;position:relative;left:50%;transform:translateX(-50%)}.delete-button.svelte-1am7lt6.svelte-1am7lt6{padding:2vw 0;text-align:center;width:100%;margin-top:2vw;margin-bottom:3vw}.cancel.svelte-1am7lt6.svelte-1am7lt6{border-radius:16px;padding:3vw 0;text-align:center;margin-bottom:4vw}.photo-dialog__title.svelte-1am7lt6.svelte-1am7lt6{text-align:center;padding:2vw 0}.photo-dialog.svelte-1am7lt6.svelte-1am7lt6{position:fixed;bottom:0;left:0;right:0;padding:1.5vw 7vw 4vw 7vw;background:#FFFFFF;border-radius:20px 20px 0px 0px;opacity:1}.photo-dialog__wrapper.svelte-1am7lt6.svelte-1am7lt6{padding-top:6vw}.modalphoto.svelte-1am7lt6.svelte-1am7lt6,.modalexit.svelte-1am7lt6.svelte-1am7lt6{position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;background:rgb(31 40 48 / 50%);z-index:6;visibility:hidden}.edit-btn-wrapper.svelte-1am7lt6.svelte-1am7lt6{position:fixed;bottom:22vw;left:7.18vw;right:7.18vw}.delete.svelte-1am7lt6.svelte-1am7lt6{text-align:center;margin-top:4.5vw}.exit.svelte-1am7lt6.svelte-1am7lt6{width:100%;text-align:center;padding:3vw 0;border-radius:16px\n    }form.svelte-1am7lt6 div.svelte-1am7lt6{display:flex;flex-direction:column}.name-container.svelte-1am7lt6.svelte-1am7lt6,.lastname-container.svelte-1am7lt6.svelte-1am7lt6,.email-container.svelte-1am7lt6.svelte-1am7lt6{position:relative}.lastname-container.svelte-1am7lt6.svelte-1am7lt6{margin:5.3vw 0}form.svelte-1am7lt6 div input.svelte-1am7lt6{border-bottom:1px solid #DCDEE3;padding-bottom:6px}form.svelte-1am7lt6 div input.svelte-1am7lt6:focus{border-bottom:1px solid #589BFF}.edit-form.svelte-1am7lt6.svelte-1am7lt6{background:#F7F8FC;border-radius:16px;padding:6vw;margin-bottom:20vw}.user-container.svelte-1am7lt6.svelte-1am7lt6{z-index:5;display:flex;flex-direction:column;align-items:center;width:100%;padding:6vw;border-radius:16px;margin-bottom:4.5vw}.user-icon.svelte-1am7lt6.svelte-1am7lt6{width:28.7vw;height:28.7vw;border-radius:100px;overflow:hidden;margin-bottom:2vw}.user-icon.svelte-1am7lt6 img.svelte-1am7lt6{width:auto;position:relative;left:50%;transform:translateX(-67%)}.footer__nav.svelte-1am7lt6.svelte-1am7lt6{position:fixed;bottom:0;left:0;right:0;background-color:var(--light-gray);display:flex;justify-content:space-between;padding:2.05vw 6.92vw 1vw;z-index:2}.footer__nav-item.svelte-1am7lt6.svelte-1am7lt6{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:0 0 20.5vw}header.aic{align-items:center}.title.svelte-1am7lt6.svelte-1am7lt6{margin-bottom:4.5vw}@media(max-width: 389px){.user-container.svelte-1am7lt6.svelte-1am7lt6{padding:2vw}.user-icon.svelte-1am7lt6.svelte-1am7lt6{width:25vw;height:25vw}.user-icon.svelte-1am7lt6 img.svelte-1am7lt6{transform:translate(-67%, -3%)}}.modalphoto._active, .modalexit._active{visibility:visible !important}",
  map: null
};
let bgcolor = "aic";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backFunction = () => history.back();
  $$result.css.add(css);
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, { bgcolor }, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction }, {}, {})}
    
    <div class="save text-16s c-blue">Сохранить</div>`;
    }
  })}

${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="text-20b title svelte-1am7lt6">Настройки</div>

    <div class="user-container bg-l-gray svelte-1am7lt6"><div class="user-icon svelte-1am7lt6"><img${add_attribute("src", user, 0)} alt="q" class="svelte-1am7lt6"></div>
        
        <div class="edit-photo text-14s c-blue">Редактировать фото </div></div>
    <form action="#" class="edit-form svelte-1am7lt6"><div class="name-container svelte-1am7lt6"><label class="text-12s c-dark-gray" for="weight">Имя</label>
            <input class="text-14s svelte-1am7lt6" type="text" name="weight"></div>

        <div class="lastname-container svelte-1am7lt6"><label class="text-12s c-dark-gray" for="height">Фамилия</label>
            <input class="text-14s svelte-1am7lt6" type="text" name="height"></div>

        <div class="email-container svelte-1am7lt6"><label class="text-12s c-dark-gray" for="age">Почта</label>
            <input class="text-14s svelte-1am7lt6" type="number" name="age"></div></form>


    <div class="edit-btn-wrapper svelte-1am7lt6">
        <div class="exit text-14s bg-l-gray svelte-1am7lt6">Выход</div>
        <div class="delete text-14s c-red svelte-1am7lt6">Удалить профиль</div></div>`;
    }
  })}



<div class="footer__nav svelte-1am7lt6"><a href="/trainings" class="footer__nav-item svelte-1am7lt6"><div class="footer__icon-container"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="none" viewBox="0 0 26 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.25 5.25H7a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h2.25c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19 5.25h-2.25A.75.75 0 0 0 16 6v12c0 .41.34.75.75.75H19c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19.75 7.5H22a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-2.25M6.25 16.5H4a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 4 7.5h2.25M10 12h6M22.75 12h1.5M1.75 12h1.5"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray">Тренировки</div></a>
    <a href="/profile_data" class="footer__nav-item svelte-1am7lt6"><div class="footer__icon-container"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12 9-9M18.37 5.63a9.02 9.02 0 1 0 1.75 2.49"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.18 8.82a4.5 4.5 0 1 0 1.31 2.93"></path></svg></div>
        <div class="footer__text text-12s c-dark-gray">Цели</div></a>
    <a href="/user-profile" class="footer__nav-item svelte-1am7lt6"><div class="footer__icon-container __active"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.98 18.7a6.75 6.75 0 0 1 12.04 0"></path></svg></div>
        <div class="footer__text text-12s c-blue">Профиль</div></a></div>



<div class="modalphoto svelte-1am7lt6"><div class="photo-dialog svelte-1am7lt6"><div class="swiper svelte-1am7lt6"></div>
        <div class="photo-dialog__wrapper svelte-1am7lt6"><div class="photo-dialog__title text-14s svelte-1am7lt6">Выбрать из галереи</div>
            <div class="delete-button text-14s c-red svelte-1am7lt6">Удалить</div>
            <div class="cancel text-14s bg-l-gray svelte-1am7lt6">Отменить</div></div></div></div>


<div class="modalexit svelte-1am7lt6"><div class="photo-dialog svelte-1am7lt6"><div class="swiper svelte-1am7lt6"></div>
        <div class="photo-dialog__wrapper svelte-1am7lt6"><div class="photo-dialog__title text-14s svelte-1am7lt6">Вы уверены, что хотите<br>выйти из профиля?</div>
            <div class="cancel text-14s bg-l-gray svelte-1am7lt6">Да</div>
            <div class="delete-button text-14s svelte-1am7lt6">Отмена</div></div></div>
</div>`;
});
export {
  Page as default
};
