import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index3.js";
import { N as NavFooter } from "../../../chunks/NavFooter.js";
import { p as page } from "../../../chunks/stores.js";
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Unbounded:wght@700&display=swap');*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:root{--dark:#1f2830;--dark-gray:#a5aab4;--gray:#dcdee3;--light-gray:#f7f8fc;--white:#ffffff;--blue:#589bff;--l-blue:#c4e8ff;--red:#f34565;--green:#18d183;--pink:#ffcee5;--sand:#ffd9ad;--sat:env(safe-area-inset-top);--sar:env(safe-area-inset-right);--sab:env(safe-area-inset-bottom);--sal:env(safe-area-inset-left)}*{margin:0;padding:0;box-sizing:border-box}img{display:block;width:100%}body{font-family:'Inter', sans-serif;font-family:'Unbounded', cursive;color:var(--dark);position:relative;height:100vh;overflow-x:hidden}a{display:block;text-decoration:none;color:inherit}.bg-pink{background-color:var(--pink)}.bg-green{background-color:var(--green)}.bg-l-gray{background-color:var(--light-gray)}.bg-sand{background-color:var(--sand)}.bg-blue{background-color:var(--blue)}.bg-white{background-color:var(--white)}.bg-black{background-color:var(--dark)}.bg-dark-gray{background-color:var(--dark-gray)}.bg-red{background-color:var(--red)}.bg-l-blue{background-color:var(--l-blue)}.c-dark-gray{color:var(--dark-gray)}.c-gray{color:var(--gray)}.c-light-gray{color:var(--light-gray)}.c-white{color:var(--white)}.c-blue{color:var(--blue)}.c-red{color:var(--red)}.c-green{color:var(--green)}.c-black{color:var(--dark)}.text-32b{font-family:'Unbounded', cursive;font-size:calc(32 / 390 * 100vw);font-weight:700;line-height:1.25em}.text-32s{font-family:'Unbounded', cursive;font-size:calc(32 / 390 * 100vw);font-weight:600;line-height:1.25em}.text-20b{font-family:'Unbounded', cursive;font-size:calc(20 / 390 * 100vw);font-weight:700;line-height:1.4em}.text-16b{font-family:'Unbounded', cursive;font-size:calc(16 / 390 * 100vw);font-weight:700;line-height:1.5em}.text-16s{font-family:'Inter', sans-serif;font-size:calc(16 / 390 * 100vw);font-weight:600;line-height:1.5em}.text-16s-u{font-family:'Unbounded', cursive;font-size:calc(16 / 390 * 100vw);font-weight:600;line-height:1.5em}.text-16m{font-family:'Inter', sans-serif;font-size:calc(16 / 390 * 100vw);font-weight:500;line-height:1.5em}.text-14b{font-family:'Inter', sans-serif;font-size:calc(14 / 390 * 100vw);font-weight:700;line-height:1.43em}.text-14m{font-family:'Inter';font-weight:500;font-size:calc(14 / 390 * 100vw);line-height:1.43em}.text-14s{font-family:'Inter', sans-serif;font-size:calc(14 / 390 * 100vw);font-weight:600;line-height:1.43em}.text-12s{font-family:'Inter', sans-serif;font-size:calc(12 / 390 * 100vw);font-weight:600;line-height:1.5em}.footer__icon-container svg path{stroke:var(--dark-gray)}.footer__icon-container.__active svg path{stroke:var(--blue)}.big-black-button{width:100%;padding-top:16px;padding-bottom:16px;color:var(--white);background-color:var(--dark);display:flex;justify-content:center;align-items:center;border-radius:20px}input{all:unset}input, input:before, input:after{-webkit-user-select:initial;-khtml-user-select:initial;-moz-user-select:initial;-ms-user-select:initial;user-select:initial}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPath;
  let webManifestLink;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  currentPath = $page.url.pathname;
  webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : "";
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-9j5arz_START --><!-- HTML_TAG_START -->${webManifestLink}<!-- HTML_TAG_END --><!-- HEAD_svelte-9j5arz_END -->`, ""}

${slots.default ? slots.default({}) : ``}

${currentPath.includes("/registration") || currentPath == "/" || currentPath.includes("/finish") || currentPath.includes("/exercise") ? `` : `${validate_component(NavFooter, "NavFooter").$$render($$result, {}, {}, {})}`}`;
});
export {
  Layout as default
};
