import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, e as escape, d as each, n as null_to_empty } from "../../../../chunks/index3.js";
import { N as Nothing } from "../../../../chunks/Nothing.js";
import { l as linkRoad } from "../../../../chunks/stores2.js";
const Loader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.loader-wrapper.svelte-19wf8z2.svelte-19wf8z2{--line-width:5px;--curtain-color:#f1faee;--outer-line-color:#c4e8ff;--middle-line-color:#589bff;--inner-line-color:#1f2830;width:100%;height:100%;z-index:1000}.loader.svelte-19wf8z2.svelte-19wf8z2{display:block;position:relative;top:50%;left:50%;transform:translate(-50%, -50%);width:150px;height:150px;margin:-75px 0 0 -75px;border:var(--line-width) solid transparent;border-top-color:var(--outer-line-color);border-radius:100%;-webkit-animation:svelte-19wf8z2-spin 2s linear infinite;animation:svelte-19wf8z2-spin 2s linear infinite;z-index:1001}.loader.svelte-19wf8z2.svelte-19wf8z2:before{content:"";position:absolute;top:4px;left:4px;right:4px;bottom:4px;border:var(--line-width) solid transparent;border-top-color:var(--inner-line-color);border-radius:100%;-webkit-animation:svelte-19wf8z2-spin 3s linear infinite;animation:svelte-19wf8z2-spin 3s linear infinite}.loader.svelte-19wf8z2.svelte-19wf8z2:after{content:"";position:absolute;top:14px;left:14px;right:14px;bottom:14px;border:var(--line-width) solid transparent;border-top-color:var(--middle-line-color);border-radius:100%;-webkit-animation:svelte-19wf8z2-spin 1.5s linear infinite;animation:svelte-19wf8z2-spin 1.5s linear infinite}@-webkit-keyframes svelte-19wf8z2-spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes svelte-19wf8z2-spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}.loader-wrapper.svelte-19wf8z2 .loader-section.svelte-19wf8z2{position:fixed;top:0;width:51%;height:100%;z-index:1000}.loader-wrapper.svelte-19wf8z2 .loader-section.section-left.svelte-19wf8z2{left:0\n}.loader-wrapper.svelte-19wf8z2 .loader-section.section-right.svelte-19wf8z2{right:0}.loaded.svelte-19wf8z2 .loader-wrapper .loader-section.section-left.svelte-19wf8z2{transform:translateX(-100%);transition:all 0.7s 0.3s cubic-bezier(0.645,0.045,0.355,1.000)}.loaded.svelte-19wf8z2 .loader-wrapper .loader-section.section-right.svelte-19wf8z2{transform:translateX(100%);transition:all 0.7s 0.3s cubic-bezier(0.645,0.045,0.355,1.000)}.loaded.svelte-19wf8z2 .loader.svelte-19wf8z2{transition:all 0.3s ease-out}.loaded.svelte-19wf8z2 .loader-wrapper.svelte-19wf8z2{transform:translateY(-100%);transition:all .3s 1s ease-out}.loaded.svelte-19wf8z2.svelte-19wf8z2{position:absolute;z-index:1000;top:50%;left:50%;transform:translate(-50%, 50%);display:flex;justify-content:center;align-items:center}',
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="loaded svelte-19wf8z2"><div class="loader-wrapper svelte-19wf8z2"><div class="loader svelte-19wf8z2"></div>
        <div class="loader-section section-left svelte-19wf8z2"></div>
        <div class="loader-section section-right svelte-19wf8z2"></div></div>
    
    
    
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page__wrapper.svelte-15cl8xr.svelte-15cl8xr{overflow-x:hidden;position:relative;height:100%}.challange.svelte-15cl8xr.svelte-15cl8xr{position:fixed;top:0;left:0;right:0;background-color:#fff;z-index:100}.container.svelte-15cl8xr.svelte-15cl8xr{padding:0 7.18vw}.challange__header.__unfollow.svelte-15cl8xr.svelte-15cl8xr{padding-top:8.2vw;display:flex;justify-content:space-between;align-items:flex-end;position:relative;flex-direction:row}.challange__header.__unfollow.svelte-15cl8xr .challange__title.svelte-15cl8xr{margin-bottom:0}.curr-date__wrapper.svelte-15cl8xr.svelte-15cl8xr{margin-top:4vw;position:relative;background-color:#fff}.dates.svelte-15cl8xr.svelte-15cl8xr{display:flex;overflow:hidden;position:absolute;left:50%;transform:translateX(-50%);background-color:#fff;padding-bottom:2vw}.date__item.svelte-15cl8xr.svelte-15cl8xr{color:var(--gray);text-align:center;font-family:'Unbounded', cursive;font-size:16px;font-weight:700;line-height:24px}.date__item.__curr.svelte-15cl8xr.svelte-15cl8xr{color:var(--blue)}.date__item.svelte-15cl8xr.svelte-15cl8xr:not(:last-child){margin-right:8px}.bg1.svelte-15cl8xr.svelte-15cl8xr,.bg2.svelte-15cl8xr.svelte-15cl8xr{width:32px;height:24px;flex-shrink:0;position:absolute;top:0;z-index:2}.bg1.svelte-15cl8xr.svelte-15cl8xr{left:0;background:linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)}.bg2.svelte-15cl8xr.svelte-15cl8xr{right:0;background:linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);transform:rotate(180deg)}.challange-card.svelte-15cl8xr.svelte-15cl8xr{padding:5.12vw 6.15vw;border-radius:20px;background:rgba(88, 155, 255, 0.08)}.challange-card.__done.svelte-15cl8xr.svelte-15cl8xr{background:var(--light-green, #EDFCF5)}.challange-card__wrapper.svelte-15cl8xr .container.svelte-15cl8xr{position:relative;top:32vw;padding-bottom:32vw}.challange-card.svelte-15cl8xr.svelte-15cl8xr:not(:first-child){margin-top:20px}.challange__title.svelte-15cl8xr.svelte-15cl8xr{width:80%}.user__box.svelte-15cl8xr.svelte-15cl8xr{margin-top:0.3vw;position:relative;display:grid;grid-template-columns:repeat(5, 32px)}.user__item.svelte-15cl8xr.svelte-15cl8xr{position:relative;border:2px solid #F2F7FF;background:#DFECFF;border-radius:100px;overflow:hidden;width:12.3vw;height:12.3vw;display:flex;justify-content:center;align-items:center}.user__item.svelte-15cl8xr img.svelte-15cl8xr,.user__item.svelte-15cl8xr .name-word.svelte-15cl8xr{width:10.25vw;height:10.25vw;border-radius:100px;background:#DFECFF;overflow:hidden;padding:4px;border:2px solid}.name-word.svelte-15cl8xr.svelte-15cl8xr{display:flex;justify-content:center;align-items:center}.user__item .done{border-color:var(--green) !important}.user__item .wait{border-color:var(--red) !important}.users__wrapper.svelte-15cl8xr.svelte-15cl8xr{margin-bottom:6.15vw}.load__button.svelte-15cl8xr.svelte-15cl8xr{position:relative;cursor:pointer;border-radius:16px;background:var(--dark);display:flex;padding:2.56vw 6.15vw;justify-content:center;align-items:center;align-self:stretch;color:var(--white, #FFF);text-align:center;font-family:'Inter', sans-serif;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.load__button.svelte-15cl8xr input.svelte-15cl8xr{position:absolute;left:0;top:0;height:100%;width:100%;cursor:pointer;opacity:0}.load__button.__done.svelte-15cl8xr.svelte-15cl8xr{background:rgba(24, 209, 131, 0.12);color:var(--green)}.load__button.__done.svelte-15cl8xr .load__button-icon.svelte-15cl8xr{margin-right:8px;display:flex;justify-content:center;align-items:center}.load__button.__more.svelte-15cl8xr.svelte-15cl8xr{background:rgba(88, 155, 255, 0.12);color:var(--blue);padding:10px 24px;margin-top:4vw}.overlay.svelte-15cl8xr.svelte-15cl8xr{position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.8);z-index:200;cursor:pointer;display:none}.overlay.active{display:block !important}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let challengesList;
  let $linkRoad, $$unsubscribe_linkRoad;
  $$unsubscribe_linkRoad = subscribe(linkRoad, (value) => $linkRoad = value);
  let { data } = $$props;
  console.log(data);
  data.token;
  let loader;
  let currentDate = /* @__PURE__ */ new Date();
  let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ];
  let currentMonth = months[currentDate.getMonth()];
  let currentDay = currentDate.getDate();
  let currentYear = currentDate.getFullYear();
  let daysInCurrentMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
  let daysArray = [];
  for (let i = 10; i > 0; i--) {
    let previousDay = currentDay - i;
    if (previousDay > 0) {
      daysArray.push(previousDay);
    } else {
      let daysInPreviousMonth = new Date(currentYear, currentDate.getMonth(), 0).getDate();
      daysArray.push(daysInPreviousMonth + previousDay);
    }
  }
  daysArray.push(currentDay);
  for (let i = 1; i <= 10; i++) {
    let nextDay = currentDay + i;
    if (nextDay <= daysInCurrentMonth) {
      daysArray.push(nextDay);
    } else {
      daysArray.push(nextDay - daysInCurrentMonth);
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  challengesList = data.challenges;
  $$unsubscribe_linkRoad();
  return `<div class="overlay svelte-15cl8xr"${add_attribute("this", loader, 0)}>${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}</div>


${!data.user ? `${validate_component(Nothing, "Nothing").$$render($$result, {}, {}, {})}` : `${data.user ? `<div class="page__wrapper svelte-15cl8xr"><div class="challange svelte-15cl8xr"><div class="container svelte-15cl8xr"><div class="challange__header __unfollow svelte-15cl8xr"><div class="challange__title text-20b svelte-15cl8xr">Вызовы</div>
                <div class="challange__subtitle text-16b c-gray">${escape(currentMonth)}</div></div></div>
        <div class="curr-date__wrapper svelte-15cl8xr"><div class="bg1 svelte-15cl8xr"></div>
            <div class="dates svelte-15cl8xr">${each(daysArray, (day) => {
    return `<div class="${"date__item " + escape(day == currentDay ? "__curr" : "", true) + " svelte-15cl8xr"}">${escape(day)}</div>`;
  })}</div>
            <div class="bg2 svelte-15cl8xr"></div></div></div>

    <div class="challange-card__wrapper svelte-15cl8xr"><div class="container svelte-15cl8xr">${each(challengesList, (challange) => {
    return `${challange.joined && challange.status !== "success" ? `
                
                <div class="challange-card svelte-15cl8xr"><div class="challange__title text-16b svelte-15cl8xr">${escape(challange.name)}</div>
                    <div class="users__wrapper svelte-15cl8xr"><div class="user__box svelte-15cl8xr">${challange.accepted_by.length ? `${each(challange.accepted_by, (accepted_by, i) => {
      return `<div class="user__item svelte-15cl8xr" style="${"z-index: " + escape(i + 1, true) + ";"}">${accepted_by.avatar ? `<img class="${escape(null_to_empty(accepted_by.status === "success" ? "done" : "wait"), true) + " svelte-15cl8xr"}"${add_attribute("src", $linkRoad + accepted_by.avatar, 0)} alt="q">` : `<div class="${"name-word " + escape(accepted_by.status === "success" ? "done" : "wait", true) + " svelte-15cl8xr"}">${escape(accepted_by.name.slice(0, 1))}</div>`}
                                </div>`;
    })}` : ``}
                        </div></div>
                    ${challange.status == "pending" ? `<div class="load__button svelte-15cl8xr"><div class="load__button-text">Видео обрабатывается</div>
                    </div>` : ``}
                    ${challange.status == "undone" ? `<div class="load__button svelte-15cl8xr"><input type="file" accept="video/*" class="svelte-15cl8xr">
                        <div class="load__button-text">Загрузить видео отчет</div>
                    </div>` : ``}
                    ${challange.status == "fail" ? `<div class="load__button fail svelte-15cl8xr"><input type="file" accept="video/*" class="svelte-15cl8xr">
                        <div class="load__button-text">Попробовать сново</div>
                    </div>` : ``}</div>
                ` : ``}   
                ${!challange.joined ? `
                <div class="challange-card __new svelte-15cl8xr"><div class="challange__title text-16b svelte-15cl8xr">${escape(challange.name)}</div>
                    
                    <div class="load__button __more svelte-15cl8xr">Подробнее
                    </div></div>
                ` : ``}
                ${challange.joined && challange.status == "success" ? `
                
                <div class="challange-card __done svelte-15cl8xr"><div class="challange__title text-16b svelte-15cl8xr">${escape(challange.name)}</div>
                    <div class="users__wrapper svelte-15cl8xr"><div class="user__box svelte-15cl8xr">${challange.accepted_by.length ? `${each(challange.accepted_by, (accepted_by, i) => {
      return `${i == 0 ? `<div class="user__item svelte-15cl8xr" style="${"z-index: " + escape(i + 1, true) + ";"}"><img class="${escape(null_to_empty(accepted_by.status === "success" ? "done" : "wait"), true) + " svelte-15cl8xr"}"${add_attribute("src", $linkRoad + accepted_by.avatar, 0)} alt="q"></div>` : ``}
                                    ${!!accepted_by.followed ? `<div class="user__item svelte-15cl8xr" style="${"z-index: " + escape(i + 1, true) + ";"}"><img class="${escape(null_to_empty(accepted_by.status === "success" ? "done" : "wait"), true) + " svelte-15cl8xr"}"${add_attribute("src", $linkRoad + accepted_by.avatar, 0)} alt="q"></div>` : ``}`;
    })}` : ``}
                        </div></div>
                    <div class="load__button __done svelte-15cl8xr"><div class="load__button-icon svelte-15cl8xr"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4375 8.125L8.85156 12.5L6.5625 10.3125" stroke="#18D183" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#18D183" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                        <div class="load__button-text">Задание выполнено</div>
                    </div></div>
                ` : ``}`;
  })}</div></div></div>` : ``}`}`;
});
export {
  Page as default
};
