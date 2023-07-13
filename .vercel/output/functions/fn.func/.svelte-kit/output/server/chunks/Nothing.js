import { c as create_ssr_component, b as add_attribute } from "./index3.js";
const profile_icon = "/_app/immutable/assets/profile-icon.2fbb6e24.svg";
const star_icon = "/_app/immutable/assets/star-icon.0f7a5e29.svg";
const crossicon = "/_app/immutable/assets/cross-icon.e591f04e.svg";
const Nothing_svelte_svelte_type_style_lang = "";
const css = {
  code: ".big-black-button.svelte-1t333kk.svelte-1t333kk{margin-bottom:5.64vw}.profile-icon.svelte-1t333kk img.svelte-1t333kk,.star-icon.svelte-1t333kk img.svelte-1t333kk,.cross-icon.svelte-1t333kk img.svelte-1t333kk{width:auto}.profile-icon.svelte-1t333kk.svelte-1t333kk{position:fixed;top:31.28vw;left:50%;transform:translateX(-50%)}.star-icon.svelte-1t333kk.svelte-1t333kk{position:fixed;top:21.02vw;left:16.15vw;transform:rotate(-23.78deg)}.cross-icon.svelte-1t333kk.svelte-1t333kk{position:fixed;top:50.78vw;right:19.89vw;transform:rotate(19.25deg)}.nothing-text-block.svelte-1t333kk.svelte-1t333kk{position:fixed;top:72.3vw;padding:0 7.18vw}.nothing-title.svelte-1t333kk.svelte-1t333kk{text-align:center;margin-bottom:4.1vw}.nothing-descr.svelte-1t333kk.svelte-1t333kk{text-align:center;margin-bottom:22.56vw}@media(max-width: 375px){.nothing-descr.svelte-1t333kk.svelte-1t333kk{margin-bottom:7.5vw}}",
  map: null
};
const Nothing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="nothing-container"><div class="profile-icon svelte-1t333kk"><img${add_attribute("src", profile_icon, 0)} alt="qwe" class="svelte-1t333kk"></div>
    <div class="star-icon svelte-1t333kk"><img${add_attribute("src", star_icon, 0)} alt="qwe" class="svelte-1t333kk"></div>
    <div class="cross-icon svelte-1t333kk"><img${add_attribute("src", crossicon, 0)} alt="qwe" class="svelte-1t333kk"></div>
    <div class="nothing-text-block svelte-1t333kk"><div class="nothing-title text-20b svelte-1t333kk">Здесь пока ничего нет</div>
        <div class="nothing-descr text-16m c-dark-gray svelte-1t333kk">Для того, чтобы получить расширенный доступ к тренировкам и видеть свой прогресс, тебе необходимо пройти короткую регистрацию</div>
        
        <div class="big-black-button svelte-1t333kk"><div class="start-training-text text-16s">Войти</div></div></div>

</div>`;
});
export {
  Nothing as N,
  crossicon as c
};
