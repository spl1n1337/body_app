import { c as create_ssr_component, b as add_attribute, a as subscribe, v as validate_component, e as escape, d as each } from "../../../../../chunks/index3.js";
import { c as currentTraining, l as linkRoad, d as dumbbell, t as timer } from "../../../../../chunks/stores2.js";
import { B as BackArrow } from "../../../../../chunks/BackArrow.js";
import { T as TrainingHeader } from "../../../../../chunks/TrainingHeader.js";
import { C as Container } from "../../../../../chunks/Container.js";
/* empty css                                                             */import { g as goto } from "../../../../../chunks/navigation.js";
const playIcon = "/_app/immutable/assets/vector-play.ae04c2c4.svg";
const start = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgBrVTBEYIwEDwY/1JCStAKxA60A6hArEAtwQqQCqQDSpASKIEO4p4kTgQCAdmZnUvC3c6SXEK0MDxzIqVMEHZgQO7IPM97dAQh9kLYgCVYkxsCXQPRrekskg0Smgiu6dRiUiiHs8C1YM5j31ivexKfYAoKGgbXrtuCbbEQ4QBGYKHmo/AdcmIVWfQyluwiWIF8gnfwqvZL/CNIaIka5FNkt4Iat8FsQQO6RwVZmt9ZEI5OCLq19nBc9eWtaByC+xQxJLWPvAW25CFBXZSq8RFCOY3AKojiEs4yDCV4s/2iTVBvdFs0IjcEZN603gvuCD4sVRt9TBgfFnm+vm2jFuIJYowKPP+8hUvjDYBakjbqt1ZAAAAAAElFTkSuQmCC";
const StartTraining_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".start-training-button.svelte-882h4s{position:fixed;bottom:calc(55px + var(--sab));width:100%;padding:4.1vw 7.18vw 3.07vw;background:linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)}.start-training-icon.svelte-882h4s{margin-right:2.56vw}",
  map: null
};
const StartTraining = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { backFunction } = $$props;
  if ($$props.backFunction === void 0 && $$bindings.backFunction && backFunction !== void 0)
    $$bindings.backFunction(backFunction);
  $$result.css.add(css$1);
  return `
<div class="start-training-button svelte-882h4s"><div class="big-black-button"><div class="start-training-icon svelte-882h4s"><img${add_attribute("src", start, 0)} alt="start"></div>
        <div class="start-training-text text-16s">Начать тренировку</div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".exercise__wrapper.svelte-y31qch.svelte-y31qch{margin-bottom:12vw}.exercise__header.svelte-y31qch.svelte-y31qch{margin-bottom:4.1vw}.exercise__item.svelte-y31qch.svelte-y31qch:not(:last-child){margin-bottom:3.07vw}.exercise__item.svelte-y31qch.svelte-y31qch{display:flex;width:100%;justify-content:space-between;align-items:stretch;padding:4.1vw;background-color:var(--light-gray);border-radius:20px}.exercise__title.svelte-y31qch.svelte-y31qch{font-size:calc(14/390*100vw);margin-right:calc(65/390*100vw);line-height:1.43em;margin-bottom:3vw}.exercise__text.svelte-y31qch.svelte-y31qch{width:100%}.exercise__img.svelte-y31qch.svelte-y31qch{object-fit:cover;flex:0 0 29.5%;border-radius:16px;overflow:hidden;margin-right:5.12vw;position:relative}.exercise__image.svelte-y31qch.svelte-y31qch{width:23.03vw;height:23.07vw;object-fit:cover}.exercise__icon.svelte-y31qch.svelte-y31qch{width:auto;margin-right:calc(8/390*100vw);position:relative}.exercise__info.svelte-y31qch.svelte-y31qch{display:flex}.exercise__amount.svelte-y31qch.svelte-y31qch{font-family:'Inter';font-weight:600;font-size:12px;line-height:1.5em;color:var(--dark-gray)}.play-icon.svelte-y31qch img.svelte-y31qch{width:auto}.play-icon.svelte-y31qch.svelte-y31qch{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:rgba(255, 255, 255, 0.24);backdrop-filter:blur(2px);border-radius:12px;padding:2vw;display:flex;justify-content:center;align-items:center;width:8vw;height:8vw}",
  map: null
};
function timeRedactor(minutes) {
  let totalSeconds = Math.floor(minutes * 60), formattedMinutes = Math.floor(totalSeconds / 60), formattedSeconds = totalSeconds % 60;
  if (formattedSeconds > 0) {
    return formattedMinutes.toString().padStart(2, "0") + ":" + formattedSeconds.toString().padStart(2, "0") + " мин";
  } else {
    return formattedMinutes.toString() + " сек";
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentTraining, $$unsubscribe_currentTraining;
  let $linkRoad, $$unsubscribe_linkRoad;
  $$unsubscribe_currentTraining = subscribe(currentTraining, (value) => $currentTraining = value);
  $$unsubscribe_linkRoad = subscribe(linkRoad, (value) => $linkRoad = value);
  let { data } = $$props;
  console.log(data);
  let trainingInfo = data.trainingData;
  let pageIndex = data.training_index;
  const backFunction = (event) => {
    event.stopPropagation();
    history.back();
  };
  currentTraining.set(trainingInfo.exercises);
  console.log($currentTraining);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_currentTraining();
  $$unsubscribe_linkRoad();
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render($$result, { backFunction }, {}, {})}`;
    }
  })}


${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="exercise__header text-b20 svelte-y31qch">${escape(trainingInfo.name)}</div>
    <div class="exercise__wrapper svelte-y31qch">${each($currentTraining, (exercise) => {
        return `
            <div class="exercise__item svelte-y31qch"><div class="exercise__img svelte-y31qch"><div class="play-icon svelte-y31qch"><img${add_attribute("src", playIcon, 0)} alt="q" class="svelte-y31qch"></div>
                    <img class="exercise__image svelte-y31qch"${add_attribute("src", $linkRoad + "/" + exercise.preview, 0)}${add_attribute("alt", exercise.name, 0)}></div>
                <div class="exercise__text svelte-y31qch"><div class="exercise__title text-14b svelte-y31qch">${escape(exercise.name)}</div>
                    <div class="exercise__info svelte-y31qch">${exercise.type == "repeats" ? `<img${add_attribute("src", dumbbell, 0)} alt="icon" class="exercise__icon svelte-y31qch">
                        <div class="exercise__amount svelte-y31qch">${escape(exercise.repeats)}</div>` : ``}
                        ${exercise.type == "time" ? `<img${add_attribute("src", timer, 0)} alt="icon" class="exercise__icon svelte-y31qch">
                        <div class="exercise__amount svelte-y31qch">${escape(timeRedactor(exercise.time))}</div>` : ``}
                        
                    </div></div>
            </div>`;
      })}</div>`;
    }
  })}



${validate_component(StartTraining, "StartTraining").$$render(
    $$result,
    {
      backFunction: () => goto(`${pageIndex}/exercise`)
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
