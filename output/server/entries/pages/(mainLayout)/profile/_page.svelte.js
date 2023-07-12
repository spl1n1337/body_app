import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape, d as each } from "../../../../chunks/index3.js";
import { C as Container } from "../../../../chunks/Container.js";
import { T as TrainingHeader } from "../../../../chunks/TrainingHeader.js";
import { N as Nothing } from "../../../../chunks/Nothing.js";
import { B as BackArrow } from "../../../../chunks/BackArrow.js";
import { g as goto } from "../../../../chunks/navigation.js";
const buttonIcon = "/_app/immutable/assets/sett.b04c7a79.svg";
const hurt = "/_app/immutable/assets/hurt.b57a87ec.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".takes-wrapper.svelte-50m4c4.svelte-50m4c4{display:flex;position:absolute;bottom:-20px;width:100%;padding:0 8px;align-items:flex-end;flex-direction:row-reverse;justify-content:flex-start}.take-container.svelte-50m4c4.svelte-50m4c4{width:calc(100% / 7);display:flex;justify-content:flex-end;flex-direction:column;align-items:flex-end}.take-line.svelte-50m4c4.svelte-50m4c4{width:4px;height:137px;border-radius:5px 5px 0 0;background:linear-gradient(180deg, #ffffff 1.46%, rgba(255, 255, 255, 0) 100%)}.blue-params.svelte-50m4c4.svelte-50m4c4{position:fixed;top:71vw;left:7.18vw;right:7.18vw}.hurt.svelte-50m4c4.svelte-50m4c4{width:auto;margin-right:3vw}.user-container.svelte-50m4c4.svelte-50m4c4{position:fixed;top:16.4vw;left:50%;transform:translateX(-50%);z-index:5;display:flex;flex-direction:column;align-items:center}.user-icon.svelte-50m4c4.svelte-50m4c4{width:28.7vw;height:28.7vw;border-radius:100px;overflow:hidden;margin-bottom:5.12vw;background-color:var(--light-gray)}.user-icon.svelte-50m4c4 img.svelte-50m4c4{width:100%;height:100%;object-fit:cover}.user-name.svelte-50m4c4.svelte-50m4c4{margin-bottom:1vw;white-space:nowrap}.blue-params.svelte-50m4c4.svelte-50m4c4{border-radius:16px;padding:4.1vw;display:flex;justify-content:space-around;margin-bottom:4.65vw}.blue-params-item.svelte-50m4c4.svelte-50m4c4{display:flex;align-items:center;justify-content:center}.nothing-data.svelte-50m4c4.svelte-50m4c4{position:fixed;left:7.18vw;right:7.18vw;top:94vw;padding:6.15vw;padding-bottom:10vw;border-radius:20px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;align-items:stretch}.pb-0{padding-bottom:0 !important}.nothing-title.svelte-50m4c4.svelte-50m4c4{margin-bottom:20px}canvas.svelte-50m4c4.svelte-50m4c4{width:100% !important;height:100% !important;position:relative;z-index:5;transform:translateY(6px)}.canvas-container.svelte-50m4c4.svelte-50m4c4{position:relative}.line-wrapper.svelte-50m4c4.svelte-50m4c4{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding-top:10px}.line.svelte-50m4c4.svelte-50m4c4{width:100%;height:1px;border:1px dashed #dcdee3;opacity:0.5;position:relative}.line._1.svelte-50m4c4.svelte-50m4c4::before{content:'20';color:white;position:absolute;transform:translateY(-110%);font-family:'Inter';font-style:normal;font-weight:400;font-size:11px;line-height:14px;color:#ffffff;opacity:0.32}.line._2.svelte-50m4c4.svelte-50m4c4::before{content:'40';color:white;position:absolute;transform:translateY(-110%);font-family:'Inter';font-style:normal;font-weight:400;font-size:11px;line-height:14px;color:#ffffff;opacity:0.32}.line._3.svelte-50m4c4.svelte-50m4c4::before{content:'60';color:white;position:absolute;transform:translateY(-110%);font-family:'Inter';font-style:normal;font-weight:400;font-size:11px;line-height:14px;color:#ffffff;opacity:0.32}.line._4.svelte-50m4c4.svelte-50m4c4::before{content:'80';color:white;position:absolute;transform:translateY(-110%);font-family:'Inter';font-style:normal;font-weight:400;font-size:11px;line-height:14px;color:#ffffff;opacity:0.32}.line._5.svelte-50m4c4.svelte-50m4c4::before{content:'100';color:white;position:absolute;transform:translateY(-110%);font-family:'Inter';font-style:normal;font-weight:400;font-size:11px;line-height:14px;color:#ffffff;opacity:0.32}.line._6.svelte-50m4c4.svelte-50m4c4::before{content:'120';color:white;position:absolute;transform:translateY(-110%);font-family:'Inter';font-style:normal;font-weight:400;font-size:11px;line-height:14px;color:#ffffff;opacity:0.32}.date-item.svelte-50m4c4.svelte-50m4c4{font-family:'Inter';font-style:normal;font-weight:400;font-size:11px;line-height:14px;color:#ffffff;opacity:0.32;padding-top:10px}",
  map: null
};
let padding = "pb-0";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let backFunction = () => goto("/profile/user-profile-edit");
  let TimeChart = data.takes;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${data.user ? `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, { bgcolor: padding }, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction, buttonIcon }, {}, {})}`;
    }
  })}

	${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="user-container svelte-50m4c4"><div class="user-icon svelte-50m4c4">${!!data.user.avatar ? `<img class="avatar-img svelte-50m4c4"${add_attribute("src", data.user.avatar, 0)} alt="q">` : ``}</div>
			<div class="user-name text-20b svelte-50m4c4">${escape(data.user.name + " " + data.user.lastname)}</div>
			<div class="user-email text-16m c-dark-gray">${escape(data.user.email)}</div></div>

		<div class="blue-params bg-blue svelte-50m4c4"><div class="blue-params-item text-14s c-white svelte-50m4c4"><img class="hurt svelte-50m4c4"${add_attribute("src", hurt, 0)} alt="heart">
				Всего тренировок
			</div>
			<div class="blue-params-item text-20b c-white svelte-50m4c4">${escape(+TimeChart.sum ? TimeChart.sum : 0)}</div></div>

		<div class="nothing-data bg-black svelte-50m4c4"><div class="nothing-title text-14s c-white svelte-50m4c4">Минут за тренировкой</div>
			
			<div class="canvas-container svelte-50m4c4"><canvas id="myChart" class="svelte-50m4c4"></canvas>
				<div class="line-wrapper svelte-50m4c4"><div class="line _6 svelte-50m4c4"></div>
					<div class="line _5 svelte-50m4c4"></div>
					<div class="line _4 svelte-50m4c4"></div>
					<div class="line _3 svelte-50m4c4"></div>
					<div class="line _2 svelte-50m4c4"></div>
					<div class="line _1 svelte-50m4c4"></div></div>
				
                <div class="takes-wrapper svelte-50m4c4">${each(TimeChart.takes.slice().reverse(), (line, index) => {
        return `<div class="take-container svelte-50m4c4"><div class="take-line svelte-50m4c4" style="${"height: " + escape(line.time * 1.47, true) + "px"}"></div>
                            <div class="date-item svelte-50m4c4">${escape(line.day)}</div>
                        </div>`;
      })}
                    </div></div></div>`;
    }
  })}` : `${!data.user ? `${validate_component(Nothing, "Nothing").$$render($$result, {}, {}, {})}` : ``}`}`;
});
export {
  Page as default
};
