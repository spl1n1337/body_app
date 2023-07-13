import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index3.js";
import { c as crossicon, N as Nothing } from "../../../../chunks/Nothing.js";
import { C as Container } from "../../../../chunks/Container.js";
import { p as plus } from "../../../../chunks/plus.js";
import { m as myparams, r as right } from "../../../../chunks/myparams.js";
import { W as WeightChart } from "../../../../chunks/WeightChart.js";
const paramsicon1 = "/_app/immutable/assets/paramsicon.00d51aeb.svg";
const paramsicon2 = "/_app/immutable/assets/paramsicon2.12ffbd51.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{overflow:hidden}.profile-icon.svelte-481ssx{border-radius:20px;width:12.3vw;height:12.3vw;overflow:hidden;margin-bottom:5.12vw;background-color:var(--light-gray)}.profile-header.svelte-481ssx{flex-direction:column;align-items:flex-start;height:auto;padding:4.19vw 7.18vw;border-radius:0px 0px 20px 20px;position:fixed;top:0;left:0;right:0;z-index:5;display:flex;justify-content:space-between}.params-container.svelte-481ssx{background:rgba(255, 255, 255, 0.12);border-radius:20px;padding:4.1vw;width:100%;margin-bottom:3vw}.params-value.svelte-481ssx{display:flex;justify-content:space-between;align-items:center}.params-name.svelte-481ssx{opacity:0.5;margin-bottom:1vw}.params-plus.svelte-481ssx{border-radius:16px;overflow:hidden;padding:2.56vw}.nothing-data.svelte-481ssx{position:absolute;left:7.18vw;right:7.18vw;top:61.53vw;padding:6.15vw;border-radius:20px;overflow:hidden;min-height:65.64vw;display:flex;flex-direction:column;justify-content:space-between;align-items:stretch}.nothing-img.svelte-481ssx{width:auto;position:absolute}.nothing-img._1.svelte-481ssx{top:19.23vw;left:50%;transform:translateX(-50%)}.nothing-img._2.svelte-481ssx{top:13.3vw;right:10.26vw}.nothing-img._3.svelte-481ssx{top:31.2vw;left:14.8vw}.nothing-descr.svelte-481ssx{position:absolute;bottom:5.89vw;left:15.38vw;right:15.38vw;text-align:center}.my-params.svelte-481ssx{position:absolute;border-radius:16px;z-index:5;top:130vw;left:7.18vw;right:7.18vw;padding:4.1vw 5.12vw;display:flex;align-items:center}.my-params-icon.svelte-481ssx{width:auto}.my-params-text.svelte-481ssx{width:100%;margin-left:16px}.nothing-data.svelte-481ssx{position:absolute;left:7.18vw;right:7.18vw;top:61.53vw;padding:6.15vw;border-radius:20px;overflow:hidden;min-height:65.64vw}.nothing-img.svelte-481ssx{width:auto;position:absolute}.nothing-img._1.svelte-481ssx{top:19.23vw;left:50%;transform:translateX(-50%)}.nothing-img._2.svelte-481ssx{top:13.3vw;right:10.26vw}.nothing-img._3.svelte-481ssx{top:31.2vw;left:14.8vw}.nothing-descr.svelte-481ssx{position:absolute;bottom:5.89vw;left:15.38vw;right:15.38vw;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  let userWeightsData = data.user && data.user.params.weight.length ? data.user.params.weight : void 0;
  let userWeights = userWeightsData ? userWeightsData.slice(-4).map((item) => item.weight) : void 0;
  let lastTimeStamp = userWeightsData ? userWeightsData.slice(-1)[0].timestamp : void 0;
  let weightsCount = userWeightsData ? userWeightsData.length : 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${data.user ? `<div class="profile-header bg-blue svelte-481ssx"><div class="profile-icon svelte-481ssx">${!!data.user.avatar ? `<img${add_attribute("src", data.user.avatar, 0)} alt="qweqw">` : ``}</div>

    <div class="params-container svelte-481ssx"><div class="params-name text-16s c-white svelte-481ssx">Вес ${escape(lastTimeStamp ? lastTimeStamp : "")}</div>
        <div class="params-value svelte-481ssx"><div class="params-weight text-32s c-white">${escape(!userWeights || !userWeights.length ? "- -" : userWeights.slice(-1))}</div>
            
            <div class="params-plus bg-white svelte-481ssx"><img${add_attribute("src", plus, 0)} alt="plus"></div></div></div></div>


${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${weightsCount < 4 ? `<div class="nothing-data bg-l-gray svelte-481ssx"><img${add_attribute("src", paramsicon1, 0)} alt="q" class="nothing-img _1 svelte-481ssx">
        <img${add_attribute("src", paramsicon2, 0)} alt="q" class="nothing-img _2 svelte-481ssx">
        <img${add_attribute("src", crossicon, 0)} alt="" class="nothing-img _3 svelte-481ssx">

        <div class="nothing-title text-16s">Изменение веса</div>
        <div class="nothing-descr text-16m c-gray svelte-481ssx">Здесь будет ваш график изменений массы тела</div></div>` : `<div class="nothing-data bg-l-gray svelte-481ssx"><div class="nothing-title text-16s">Изменение веса</div>
        ${validate_component(WeightChart, "WeightChart").$$render($$result, { datapoints: userWeights }, {}, {})}</div>`}`;
    }
  })}


<div class="my-params bg-l-gray svelte-481ssx"><img${add_attribute("src", myparams, 0)} alt="" class="my-params-icon svelte-481ssx">
    <div class="my-params-text text-16s svelte-481ssx">Мои параметры</div>
    <img${add_attribute("src", right, 0)} alt="" class="my-params-icon svelte-481ssx"></div>` : `${validate_component(Nothing, "Nothing").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
