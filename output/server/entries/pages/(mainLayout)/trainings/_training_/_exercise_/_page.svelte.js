import { c as create_ssr_component, e as escape, b as add_attribute, a as subscribe, v as validate_component } from "../../../../../../chunks/index3.js";
import { T as TrainingHeader } from "../../../../../../chunks/TrainingHeader.js";
import { B as BackArrow } from "../../../../../../chunks/BackArrow.js";
import { g as goto } from "../../../../../../chunks/navigation.js";
import { l as linkRoad } from "../../../../../../chunks/stores2.js";
const nextAr = "/_app/immutable/assets/chevron-right.98f9b069.svg";
const playIcon = "/_app/immutable/assets/big-play.20ebd065.svg";
const TrainingTimer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".timer__button.svelte-1rl623r{padding:3.07vw 4vw;min-width:34.87vw;display:flex;justify-content:center;align-items:center;border-radius:20px}",
  map: null
};
const TrainingTimer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bg_color = "bg-green" } = $$props;
  let { time } = $$props;
  if ($$props.bg_color === void 0 && $$bindings.bg_color && bg_color !== void 0)
    $$bindings.bg_color(bg_color);
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  $$result.css.add(css$2);
  return `<div class="${"timer__button c-white text-16b " + escape(bg_color, true) + " svelte-1rl623r"}">${escape(time || "00:10")}
</div>`;
});
const pause = "/_app/immutable/assets/PauseCircle.b2b2464a.svg";
const play = "/_app/immutable/assets/Play.57c35044.svg";
const nextExercisePic = "/_app/immutable/assets/next-exercise.fe9a9187.jpg";
const NextExercise_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".exercise__item.svelte-5pswxx{position:fixed;z-index:3;display:flex;bottom:26vw;padding:4.1vw;background-color:var(--light-gray);border-radius:20px;left:7.18vw;right:7.18vw}.next-exercise.svelte-5pswxx{font-family:'Unbounded';font-weight:700;font-size:calc(20/390*100vw);line-height:1.4em;color:#DCDEE3}.exercise__text.svelte-5pswxx{display:flex;flex-direction:column;justify-content:space-around}.exercise__img.svelte-5pswxx{object-fit:cover;flex:0 0 29.5%;border-radius:16px;overflow:hidden;margin-right:5.12vw}.exercise__name.svelte-5pswxx{font-size:calc(14/390*100vw);margin-right:calc(65/390*100vw);line-height:1.42em;margin-bottom:3vw}.exercise__item.disable.svelte-5pswxx{display:none}",
  map: null
};
const NextExercise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nextExercise, nextExerciseTitle, disable, goNext } = $$props;
  if ($$props.nextExercise === void 0 && $$bindings.nextExercise && nextExercise !== void 0)
    $$bindings.nextExercise(nextExercise);
  if ($$props.nextExerciseTitle === void 0 && $$bindings.nextExerciseTitle && nextExerciseTitle !== void 0)
    $$bindings.nextExerciseTitle(nextExerciseTitle);
  if ($$props.disable === void 0 && $$bindings.disable && disable !== void 0)
    $$bindings.disable(disable);
  if ($$props.goNext === void 0 && $$bindings.goNext && goNext !== void 0)
    $$bindings.goNext(goNext);
  $$result.css.add(css$1);
  return `
<div class="${"exercise__item " + escape(disable, true) + " svelte-5pswxx"}"><img class="exercise__img svelte-5pswxx"${add_attribute("src", nextExercise, 0)} alt="qwe">
    <div class="exercise__text svelte-5pswxx"><div class="next-exercise svelte-5pswxx">Далее</div>
        <div class="exercise__name text-14b c-dark svelte-5pswxx">${escape(nextExerciseTitle)}</div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".poster.svelte-1awbl7l.svelte-1awbl7l{position:absolute;height:100%;object-fit:cover;top:0;left:0;right:0;bottom:0}.exercise__progressbar.svelte-1awbl7l.svelte-1awbl7l{height:1.54vw;background:#DCE1F2}.progress-line.svelte-1awbl7l.svelte-1awbl7l{width:44vw;height:100%;background:#227BFF;border-radius:0px 100px 100px 0px}.exercise__bg.svelte-1awbl7l.svelte-1awbl7l{position:absolute;height:100vh;width:100vw}.overlay.svelte-1awbl7l.svelte-1awbl7l{position:absolute;z-index:2;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.5);backdrop-filter:blur(4px)}.exercise__title.svelte-1awbl7l.svelte-1awbl7l{font-family:'Unbounded';font-weight:700;font-size:calc(28/390*100vw);line-height:1.285em;text-align:center;position:relative;z-index:3;top:71vw}.exercise__footer__wrapper.svelte-1awbl7l.svelte-1awbl7l{position:fixed;z-index:3;bottom:0;left:0;right:0}.exercise__footer.svelte-1awbl7l.svelte-1awbl7l{display:flex;justify-content:space-between;padding:4.1vw 7.18vw}.exercise__pause__icon.svelte-1awbl7l.svelte-1awbl7l{width:5.13vw}.exercise__pause.svelte-1awbl7l.svelte-1awbl7l{display:flex;justify-content:center;align-items:center;border-radius:16px;width:100%;padding:3.07vw 0}.exercise__pause.repeats.svelte-1awbl7l.svelte-1awbl7l{display:none}.exercise__pause.svelte-1awbl7l.svelte-1awbl7l:first-of-type{margin-right:4vw}.mr-4.svelte-1awbl7l.svelte-1awbl7l{margin-right:1.02vw}.ml-8.svelte-1awbl7l.svelte-1awbl7l{margin-left:2.04vw}.exercise__pause.disable.svelte-1awbl7l.svelte-1awbl7l{background-color:var(--gray)}.exercise__pause.disable.svelte-1awbl7l .exercise__pause-text.svelte-1awbl7l{color:var(--dark)}.exercise__pause.disable.svelte-1awbl7l .exercise__pause__icon.svelte-1awbl7l{filter:invert(1)}.exercise__bg.disable.svelte-1awbl7l .overlay.svelte-1awbl7l{display:none}.exercise__bg.disable.svelte-1awbl7l .exercise__title.svelte-1awbl7l{display:none}.exercise__video.svelte-1awbl7l.svelte-1awbl7l{position:absolute;width:100%;height:100%;object-fit:cover}.play-icon.svelte-1awbl7l img.svelte-1awbl7l{width:auto}.play-icon.svelte-1awbl7l.svelte-1awbl7l{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:rgba(255, 255, 255, 0.24);backdrop-filter:blur(6px);border-radius:20px;padding:6vw;display:flex;justify-content:center;align-items:center;width:22.5vw;height:22.5vw}.exercise__container.svelte-1awbl7l.svelte-1awbl7l{position:fixed;top:0;bottom:0;left:0;right:0}",
  map: null
};
function getRepeatsWord(count) {
  let word = "повтор";
  if (count == 1) {
    return word;
  }
  if (count % 10 === 1 && count % 100 !== 11) {
    word += "а";
  } else if (count % 10 >= 2 && count % 10 <= 4 && !(count % 100 >= 12 && count % 100 <= 14)) {
    word += "а";
  } else {
    word += "ов";
  }
  return word;
}
function getTimeNow() {
  let currentDate = /* @__PURE__ */ new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear() % 100;
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let formattedDateTime = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
  return formattedDateTime;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $linkRoad, $$unsubscribe_linkRoad;
  $$unsubscribe_linkRoad = subscribe(linkRoad, (value) => $linkRoad = value);
  let { data } = $$props;
  let takeTimes = { start: "", end: "" };
  let token = data.dataInfo;
  let videoElement;
  let trainingProgramm = data.trainingData.exercises;
  let videoLoading = true;
  const formatter = new Intl.DateTimeFormat("en", { minute: "2-digit", second: "2-digit" });
  let currentTime = 0;
  let isTimerActive = false;
  let interval;
  let exercisesCount = trainingProgramm.length;
  let exerciseIndex = 0;
  let topButtonValue = "00:10";
  let state = "start";
  async function isExercise() {
    state = "exercise";
    if (trainingProgramm[exerciseIndex].type == "repeats") {
      clearInterval(interval);
      isTimerActive = false;
      topButtonValue = trainingProgramm[exerciseIndex].repeats;
      waitForVideoReadyState(videoElement);
    }
    if (trainingProgramm[exerciseIndex].type == "time") {
      clearInterval(interval);
      isTimerActive = false;
      topButtonValue = trainingProgramm[exerciseIndex].time;
      await waitForVideoReadyState(videoElement);
      videoElement.play();
      startTimer(topButtonValue, isRest);
    }
  }
  function isRest() {
    clearInterval(interval);
    isTimerActive = false;
    topButtonValue = "00:30";
    state = "rest";
    exerciseIndex++;
    startTimer(30, isExercise);
    waitForVideoReadyState(videoElement, stop);
  }
  function isStart() {
    clearInterval(interval);
    videoElement.pause();
    isTimerActive = false;
    topButtonValue = "00:10";
    state = "start";
    startTimer(10, isExercise);
  }
  function goToFinish() {
    clearInterval(interval);
    isTimerActive = false;
    goto("/trainings/finish");
  }
  function startTimer(time, callback) {
    if (isTimerActive) {
      return;
    }
    currentTime = time;
    isTimerActive = true;
    if (trainingProgramm[exerciseIndex].type == "time") {
      topButtonValue = formatter.format(currentTime * 1e3);
    }
    interval = setInterval(
      () => {
        if (currentTime > 0) {
          currentTime--;
          topButtonValue = formatter.format(currentTime * 1e3);
        } else {
          if (state == "exercise" && exerciseIndex == exercisesCount - 1 && currentTime == 0) {
            data.user ? pushNewTake() : goToFinish();
          } else {
            clearInterval(interval);
            isTimerActive = false;
            if (callback) {
              callback();
            }
          }
        }
      },
      1e3
    );
  }
  function stopTimer() {
    stop();
    clearInterval(interval);
    isTimerActive = false;
  }
  async function waitForVideoReadyState(videoElement2, callback) {
    await new Promise((resolve) => {
      videoLoading = true;
      const checkReadyState = () => {
        if (videoElement2 != void 0 && videoElement2 != null && videoElement2.src === $linkRoad + trainingProgramm[exerciseIndex].video) {
          if (videoElement2.readyState >= 3) {
            resolve();
          } else {
            setTimeout(checkReadyState, 100);
          }
        } else {
          setTimeout(checkReadyState, 100);
        }
      };
      checkReadyState();
    });
    videoElement2.play();
    videoLoading = false;
    if (typeof callback === "function" && videoElement2.paused == false) {
      callback();
    }
  }
  const stop = () => {
    videoElement.pause();
  };
  const backFunction = () => {
    if (state == "start") {
      history.back();
    } else if (state == "exercise" && exerciseIndex == 0) {
      isStart();
    } else if (state == "rest") {
      state = "exercise";
      stopTimer();
      exerciseIndex--;
      isExercise();
    } else if (state == "exercise" && exerciseIndex != 0) {
      stopTimer();
      exerciseIndex--;
      isExercise();
    }
  };
  async function pushNewTake() {
    takeTimes.end = getTimeNow();
    console.log(JSON.stringify(takeTimes));
    try {
      const response = await fetch(`${$linkRoad}/api/new_take`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(takeTimes)
      });
      const data2 = await response.json();
      console.log(data2);
      if (response.ok) {
        const data3 = await response.json();
        console.log(data3);
        goToFinish();
      } else {
        throw new Error("Произошла ошибка при отправке формы.");
      }
    } catch (error) {
      goToFinish();
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_linkRoad();
  return `
${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render($$result, { class: "bg-green", backFunction }, {}, {})}
   ${validate_component(TrainingTimer, "TrainingTimer").$$render(
        $$result,
        {
          time: trainingProgramm[exerciseIndex].type == "time" || state == "start" || state == "rest" ? topButtonValue : `${topButtonValue} ${getRepeatsWord(topButtonValue)}`,
          bg_color: state == "exercise" ? "bg-red" : "bg-green"
        },
        {},
        {}
      )}`;
    }
  })}

${validate_component(NextExercise, "NextExercise").$$render(
    $$result,
    {
      nextExercise: nextExercisePic,
      nextExerciseTitle: trainingProgramm[exerciseIndex].name,
      disable: state === "exercise" ? "disable" : "",
      goNext: isExercise
    },
    {},
    {}
  )}

<div class="${"exercise__bg " + escape(state === "exercise" ? "disable" : "", true) + " svelte-1awbl7l"}"><div class="exercise__container svelte-1awbl7l">
        <video muted preload="auto" autoplay playsinline loop class="exercise__video svelte-1awbl7l"${add_attribute("src", $linkRoad + trainingProgramm[exerciseIndex].video, 0)}${add_attribute("this", videoElement, 0)}></video>
        ${isTimerActive == false && state == "exercise" && trainingProgramm[exerciseIndex].type == "time" ? `
        <div class="play-icon svelte-1awbl7l"><img${add_attribute("src", playIcon, 0)} alt="q" class="svelte-1awbl7l"></div>` : ``}
        ${state == "rest" || state == "start" || videoLoading ? `<img${add_attribute("src", $linkRoad + trainingProgramm[exerciseIndex].preview, 0)} alt="qwe" class="poster svelte-1awbl7l">` : ``}
        <div class="overlay svelte-1awbl7l"></div>
        <div class="exercise__title c-white svelte-1awbl7l">${state === "start" ? `Начинаем <br>тренировку` : `${state === "rest" ? `Отдыхаем` : ``}`}</div></div></div>

<div class="exercise__footer__wrapper svelte-1awbl7l"><div class="exercise__progressbar svelte-1awbl7l"><div class="progress-line svelte-1awbl7l"></div></div>
   <div class="exercise__footer bg-white svelte-1awbl7l">
       <div class="${"exercise__pause bg-black " + escape(state === "start" ? "disable" : "", true) + " " + escape(
    trainingProgramm[exerciseIndex].type === "repeats" && state === "exercise" ? "repeats" : "",
    true
  ) + " svelte-1awbl7l"}"><img${add_attribute("src", isTimerActive == false ? play : pause, 0)} alt="qwe" class="exercise__pause__icon mr-4 svelte-1awbl7l">
           ${isTimerActive == false ? `<div class="exercise__pause-text text-14s c-white svelte-1awbl7l">Продолжить</div>` : `<div class="exercise__pause-text text-14s c-white svelte-1awbl7l">Пауза</div>`}</div>
       
       <div class="exercise__pause bg-blue svelte-1awbl7l"><div class="exercise__pause-text text-14s c-white">${state === "start" ? `Старт` : `${state === "exercise" ? `Отдых` : `${state === "rest" ? `Далее` : ``}`}`}</div>
           <img${add_attribute("src", nextAr, 0)} alt="qwe" class="exercise__pause__icon ml-8 svelte-1awbl7l"></div></div>
</div>`;
});
export {
  Page as default
};
