import { c as create_ssr_component, g as get_store_value, f as assign, i as is_function, s as setContext, h as getContext, a as subscribe, e as escape, j as now, l as loop, b as add_attribute, d as each, t as tick, v as validate_component, n as null_to_empty, k as add_classes } from "../../../../../chunks/index3.js";
import { T as TrainingHeader } from "../../../../../chunks/TrainingHeader.js";
import { B as BackArrow } from "../../../../../chunks/BackArrow.js";
import { C as Container } from "../../../../../chunks/Container.js";
import dayjs from "dayjs";
import throttle from "just-throttle";
import { w as writable, r as readable, d as derived } from "../../../../../chunks/index2.js";
import { l as linkRoad } from "../../../../../chunks/stores2.js";
import { g as goto, i as invalidateAll } from "../../../../../chunks/navigation.js";
const DiscriptionChallange_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".card__wrapper.svelte-lx1tdv{border-radius:20px;background:var(--light-gray, #F7F8FC);padding:5.13vw}.card__title.svelte-lx1tdv{margin-bottom:3vw}.card__list.svelte-lx1tdv{margin-left:20px}.card__list-item.svelte-lx1tdv:not(:last-child){margin-bottom:12px}.accepr__challange.svelte-lx1tdv{border-radius:16px;background:var(--dark);display:flex;justify-content:center;align-items:center;padding:2.56vw 6.15vw;margin-top:6.15vw;cursor:pointer}",
  map: null
};
const DiscriptionChallange = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css$b);
  return `<div class="card__wrapper svelte-lx1tdv"><div class="card__title text-16b svelte-lx1tdv">Правила</div>
    <ul class="card__list svelte-lx1tdv"><li class="card__list-item text-14m svelte-lx1tdv">Задание выполняется на камеру для подтверждения выполнения условий.</li>
        <li class="card__list-item text-14m svelte-lx1tdv">Наш ИИ автоматически проверяет выполнение условий и удаляет видео. Никто не видит видео с вами.</li>
        <li class="card__list-item text-14m svelte-lx1tdv">Мы проверяем правильность выполнения упражнения, плохое выполнение не засчитываем.</li></ul>
    
    <div class="accepr__challange text-14s c-white svelte-lx1tdv">Принять вызов</div>
</div>`;
});
const PICKER_TYPES = ["days", "months", "years"];
const updateSelected = (value, property) => (state) => {
  const newState = { ...state, [property]: value };
  return { ...newState, selected: new Date(newState.year, newState.month, newState.day) };
};
const pipe = (...fns) => (val) => fns.reduce((accum, fn) => fn(accum), val);
const zeroDay = (date) => dayjs(date).startOf("day").toDate();
const get = ({ selected, start, end, startOfWeekIndex = 0, shouldEnlargeDay = false }) => {
  const { subscribe: subscribe2, set, update } = writable({
    open: false,
    hasChosen: false,
    selected,
    start: zeroDay(start),
    end: zeroDay(end),
    shouldEnlargeDay,
    enlargeDay: false,
    year: selected.getFullYear(),
    month: selected.getMonth(),
    day: selected.getDate(),
    activeView: "days",
    activeViewDirection: 1,
    startOfWeekIndex
  });
  return {
    set,
    subscribe: subscribe2,
    getState() {
      return get_store_value({ subscribe: subscribe2 });
    },
    enlargeDay(enlargeDay = true) {
      update((state) => ({ ...state, enlargeDay }));
    },
    getSelectableVector(date) {
      const { start: start2, end: end2 } = this.getState();
      if (date < start2)
        return -1;
      if (date > end2)
        return 1;
      return 0;
    },
    isSelectable(date, clamping = []) {
      const vector = this.getSelectableVector(date);
      if (vector === 0)
        return true;
      if (!clamping.length)
        return false;
      const clamped = this.clampValue(dayjs(date), clamping).toDate();
      return this.isSelectable(clamped);
    },
    clampValue(day, clampable) {
      const vector = this.getSelectableVector(day.toDate());
      if (vector === 0)
        return day;
      const boundaryKey = vector === 1 ? "end" : "start";
      const boundary = dayjs(this.getState()[boundaryKey]);
      return clampable.reduce((day2, type) => day2[type](boundary[type]()), day);
    },
    add(amount, unit, clampable = []) {
      update(({ month, year, day, ...state }) => {
        const d = this.clampValue(dayjs(new Date(year, month, day)).add(amount, unit), clampable);
        if (!this.isSelectable(d.toDate()))
          return { ...state, year, month, day };
        return {
          ...state,
          month: d.month(),
          year: d.year(),
          day: d.date(),
          selected: d.toDate()
        };
      });
    },
    setActiveView(newActiveView) {
      const newIndex = PICKER_TYPES.indexOf(newActiveView);
      if (newIndex === -1)
        return;
      update(({ activeView, ...state }) => ({
        ...state,
        activeViewDirection: PICKER_TYPES.indexOf(activeView) > newIndex ? -1 : 1,
        activeView: newActiveView
      }));
    },
    setYear(year) {
      update(updateSelected(year, "year"));
    },
    setMonth(month) {
      update(updateSelected(month, "month"));
    },
    setDay(day) {
      update(
        pipe(
          updateSelected(day.getDate(), "day"),
          updateSelected(day.getMonth(), "month"),
          updateSelected(day.getFullYear(), "year")
        )
      );
    },
    close(extraState) {
      update((state) => ({ ...state, ...extraState, open: false }));
    },
    selectDay() {
      this.close({ hasChosen: true });
    },
    getCalendarPage(month, year) {
      const { startOfWeekIndex: startOfWeekIndex2 } = this.getState();
      let last = { date: new Date(year, month, 1), outsider: false };
      const days = [];
      while (last.date.getMonth() === month) {
        days.push(last);
        const date = new Date(last.date);
        date.setDate(last.date.getDate() + 1);
        last = { date, outsider: false };
      }
      while (days[0].date.getDay() !== startOfWeekIndex2) {
        const date = new Date(days[0].date);
        date.setDate(days[0].date.getDate() - 1);
        days.unshift({
          date,
          outsider: true
        });
      }
      last.outsider = true;
      while (days.length < 42) {
        days.push(last);
        last = { date: new Date(last.date), outsider: true };
        last.date.setDate(last.date.getDate() + 1);
      }
      return days;
    }
  };
};
const datepickerStore = { get };
const storeContextKey = {};
const keyControlsContextKey = {};
const themeContextKey = {};
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function crossfade(_a) {
  var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
  const to_receive = /* @__PURE__ */ new Map();
  const to_send = /* @__PURE__ */ new Map();
  function crossfade2(from_node, node, params) {
    const { delay = 0, duration: duration2 = (d2) => Math.sqrt(d2) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
    const from = from_node.getBoundingClientRect();
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;
    const opacity = +style.opacity;
    return {
      delay,
      duration: is_function(duration2) ? duration2(d) : duration2,
      easing,
      css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
    };
  }
  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, node);
      return () => {
        if (counterparts.has(params.key)) {
          const other_node = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade2(other_node, node, params);
        }
        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }
  return [
    transition(to_send, to_receive, false),
    transition(to_receive, to_send, true)
  ];
}
const Crossfade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { key = {} } = $$props;
  let { duration: duration2 = (d) => Math.max(150, Math.sqrt(d * 150)) } = $$props;
  let { easing = cubicInOut } = $$props;
  const [send, receive] = crossfade({
    duration: duration2,
    easing,
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;
      return {
        duration: duration2,
        easing,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
      };
    }
  });
  const store = readable({ key, send, receive });
  setContext("crossfade", store);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0)
    $$bindings.easing(easing);
  return `${slots.default ? slots.default({ key, send, receive }) : ``}`;
});
const Popover_svelte_svelte_type_style_lang = "";
const light = {
  calendar: {
    width: "700px",
    maxWidth: "100vw",
    legend: {
      height: "45px"
    },
    shadow: "0px 10px 26px rgba(0, 0, 0, 0.25)",
    colors: {
      text: {
        primary: "#333",
        highlight: "#fff"
      },
      background: {
        primary: "#fff",
        highlight: "#eb7400",
        hover: "#eee"
      },
      border: "#eee"
    },
    font: {
      regular: "1.5em",
      large: "37em"
    },
    grid: {
      disabledOpacity: ".35",
      outsiderOpacity: ".6"
    }
  }
};
const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let { theme = {} } = $$props;
  let { appliedTheme } = $$props;
  let { prefix = "--sc-theme" } = $$props;
  let { defaultTheme = light } = $$props;
  const store = writable();
  setContext(themeContextKey, store);
  const getStyle = (obj) => Object.entries(obj).map(([k, v]) => `${prefix}-${k}: ${v}`).join(";");
  const getTheme = (defaults, overrides = {}, base = "") => Object.entries(defaults).reduce(
    (acc, [k, v]) => {
      if (typeof v === "object")
        return {
          ...acc,
          ...getTheme(v, overrides[k], [base, k].filter(Boolean).join("-"))
        };
      return {
        ...acc,
        [[base, k].filter(Boolean).join("-")]: overrides[k] || v
      };
    },
    {}
  );
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.appliedTheme === void 0 && $$bindings.appliedTheme && appliedTheme !== void 0)
    $$bindings.appliedTheme(appliedTheme);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.defaultTheme === void 0 && $$bindings.defaultTheme && defaultTheme !== void 0)
    $$bindings.defaultTheme(defaultTheme);
  appliedTheme = getTheme(defaultTheme, theme);
  style = getStyle(appliedTheme);
  {
    store.set(appliedTheme);
  }
  return `${slots.default ? slots.default({ appliedTheme, style }) : ``}`;
});
const KEY_CODES = {
  33: "pageUp",
  34: "pageDown",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  27: "escape",
  13: "enter",
  17: "control"
};
const KeyControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentCtx, $$unsubscribe_currentCtx;
  let { limit = 0 } = $$props;
  let { ctx = null } = $$props;
  const currentCtx = getContext(keyControlsContextKey);
  $$unsubscribe_currentCtx = subscribe(currentCtx, (value) => $currentCtx = value);
  const key = (evt) => {
    if (ctx && !ctx.includes($currentCtx))
      return;
    const mapping = $$props[KEY_CODES[evt.keyCode]];
    if (mapping)
      mapping();
  };
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.ctx === void 0 && $$bindings.ctx && ctx !== void 0)
    $$bindings.ctx(ctx);
  limit ? throttle(key, limit) : key;
  $$unsubscribe_currentCtx();
  return `

${slots.default ? slots.default({}) : ``}`;
});
const Grid_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".grid.svelte-jmgdr0{display:grid;background:var(--sc-theme-calendar-colors-border);row-gap:1px;column-gap:1px;height:100%}.grid.svelte-jmgdr0>*{font-size:var(--sc-theme-calendar-font-regular);text-decoration:none;color:var(--sc-theme-calendar-colors-text-primary);transition:all 180ms ease-out;background:var(--sc-theme-calendar-colors-background-primary);display:grid;text-align:center;align-items:center}@media(max-width: 720px){.grid.svelte-jmgdr0>*{font-size:calc(var(--sc-theme-calendar-font-regular) * 0.75)}}.grid.svelte-jmgdr0>*:hover{background:var(--sc-theme-calendar-colors-background-hover)}.grid.svelte-jmgdr0>*.selected{background:var(--sc-theme-calendar-colors-background-highlight);color:var(--sc-theme-calendar-colors-text-highlight);opacity:1}.grid.svelte-jmgdr0>*.outsider{opacity:var(--sc-theme-calendar-grid-outsiderOpacity)}.grid.svelte-jmgdr0>*.disabled{opacity:var(--sc-theme-calendar-grid-disabledOpacity)}.grid.svelte-jmgdr0>*.disabled:hover{background:var(--sc-theme-calendar-colors-background-primary);cursor:default}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { template = "repeat(4, 1fr) / repeat(3, 1fr)" } = $$props;
  if ($$props.template === void 0 && $$bindings.template && template !== void 0)
    $$bindings.template(template);
  $$result.css.add(css$a);
  return `<div class="grid svelte-jmgdr0" style="${"grid-template: " + escape(template, true) + ";"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const InfiniteGrid_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".grid.svelte-198r3wi.svelte-198r3wi{overflow:hidden;height:100%;display:grid}.grid.svelte-198r3wi>.svelte-198r3wi{position:absolute;top:0;left:0;right:0;bottom:0;transition-property:none !important}",
  map: null
};
const InfiniteGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let gridStyle;
  let $initialized, $$unsubscribe_initialized;
  let $dim, $$unsubscribe_dim;
  let $offset, $$unsubscribe_offset;
  let $visibleData, $$unsubscribe_visibleData;
  let { cellCount = 4 } = $$props;
  let { itemCount = 0 } = $$props;
  let { index = 0 } = $$props;
  let { vertical = true } = $$props;
  let { get: get2 } = $$props;
  let { stiffness = 0.065 } = $$props;
  let { damping = 0.9 } = $$props;
  let { useCache = true } = $$props;
  let { idKey = void 0 } = $$props;
  const move = (amount) => {
    index = Math.max(0, Math.min(itemCount - 1, index + amount));
  };
  const forceUpdate = writable(false);
  const triggerUpdate = async () => {
    await tick();
    forceUpdate.set(true);
    await tick();
    forceUpdate.set(false);
  };
  const getCached = (index2) => $visibleData.find(({ index: i }) => i === index2)?.data || get2(index2);
  let inRange = [-Infinity, Infinity];
  const initialized = writable(false);
  $$unsubscribe_initialized = subscribe(initialized, (value) => $initialized = value);
  const dim = writable({ w: 0, h: 0 });
  $$unsubscribe_dim = subscribe(dim, (value) => $dim = value);
  const offset = spring(0, { stiffness, damping });
  $$unsubscribe_offset = subscribe(offset, (value) => $offset = value);
  const visibleData = derived(
    [dim, offset, initialized, forceUpdate],
    ([{ w, h }, $o, $initialized2, $force]) => {
      if (!w || !h || !$initialized2)
        return [];
      if ($o < inRange[0] || $o > inRange[1])
        return $visibleData;
      const cellHeight = h / cellCount;
      const start = Math.max(-1, Math.floor(-1 * $o / cellHeight) - 1);
      const baseOffset = $o % cellHeight;
      return Array(cellCount + 2).fill(0).map((_, i) => {
        const index2 = i + start;
        const pos = baseOffset + (i - 1) * cellHeight;
        if (index2 < 0 || index2 >= itemCount)
          return void 0;
        const data = $force || !useCache ? get2(index2) : getCached(index2);
        return { data, pos, index: index2 };
      }).filter(Boolean);
    },
    []
  );
  $$unsubscribe_visibleData = subscribe(visibleData, (value) => $visibleData = value);
  const updateOffset = (o) => {
    inRange = [o, $offset].sort((a, b) => a - b);
    offset.set(o, { hard: !$initialized });
  };
  if ($$props.cellCount === void 0 && $$bindings.cellCount && cellCount !== void 0)
    $$bindings.cellCount(cellCount);
  if ($$props.itemCount === void 0 && $$bindings.itemCount && itemCount !== void 0)
    $$bindings.itemCount(itemCount);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.get === void 0 && $$bindings.get && get2 !== void 0)
    $$bindings.get(get2);
  if ($$props.stiffness === void 0 && $$bindings.stiffness && stiffness !== void 0)
    $$bindings.stiffness(stiffness);
  if ($$props.damping === void 0 && $$bindings.damping && damping !== void 0)
    $$bindings.damping(damping);
  if ($$props.useCache === void 0 && $$bindings.useCache && useCache !== void 0)
    $$bindings.useCache(useCache);
  if ($$props.idKey === void 0 && $$bindings.idKey && idKey !== void 0)
    $$bindings.idKey(idKey);
  if ($$props.move === void 0 && $$bindings.move && move !== void 0)
    $$bindings.move(move);
  if ($$props.triggerUpdate === void 0 && $$bindings.triggerUpdate && triggerUpdate !== void 0)
    $$bindings.triggerUpdate(triggerUpdate);
  if ($$props.visibleData === void 0 && $$bindings.visibleData && visibleData !== void 0)
    $$bindings.visibleData(visibleData);
  $$result.css.add(css$9);
  type = vertical ? "rows" : "columns";
  gridStyle = `grid-template-${type}: repeat(${cellCount}, 1fr);`;
  {
    {
      if ($dim.w && $dim.h) {
        updateOffset($dim.h / cellCount * index * -1);
        if (!$initialized)
          initialized.set(true);
      }
    }
  }
  $$unsubscribe_initialized();
  $$unsubscribe_dim();
  $$unsubscribe_offset();
  $$unsubscribe_visibleData();
  return `<div class="grid svelte-198r3wi"${add_attribute("style", gridStyle, 0)}>${each($visibleData, (obj) => {
    return `<div style="${"transform: translateY(" + escape(obj.pos, true) + "px)"}" class="svelte-198r3wi">${slots.default ? slots.default({ ...obj.data, index: obj.index }) : ``}
		</div>`;
  })}
</div>`;
});
const DayPicker_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".container.svelte-1unzsxu{display:grid;grid-template-rows:auto 1fr}.legend.svelte-1unzsxu{display:grid;grid-template:1fr / repeat(7, 1fr);height:var(--sc-theme-calendar-legend-height);z-index:2;background:var(--sc-theme-calendar-colors-background-primary);border-bottom:1px solid var(--sc-theme-calendar-colors-border);align-items:center}a.svelte-1unzsxu{font-size:1em}.stage.svelte-1unzsxu{display:grid;grid-row:2;grid-column:1}.selected-big.svelte-1unzsxu{color:var(--sc-theme-calendar-colors-background-highlight);background:var(--sc-theme-calendar-colors-background-hover);text-align:center;align-items:center;font-size:var(--sc-theme-calendar-font-large);z-index:2;opacity:1;line-height:0}@media(max-width: 720px){.selected-big.svelte-1unzsxu{font-size:calc(var(--sc-theme-calendar-font-large) * 0.7)}}",
  map: null
};
const duration = 450;
const DayPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalMonths;
  let monthIndex;
  let $store, $$unsubscribe_store;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  const legend = Array(7).fill(0).map((d, i) => dayjs().day(($store.startOfWeekIndex + i) % 7).format("ddd"));
  const add = (amount) => () => store.add(amount, "day");
  const select = (day) => () => {
    if (!store.isSelectable(day))
      return;
    store.setDay(day || $store.selected);
    if (!$store.shouldEnlargeDay)
      return store.selectDay();
    store.enlargeDay();
    setTimeout(
      () => {
        store.selectDay();
        store.enlargeDay(false);
      },
      duration + 60
    );
  };
  const KEY_MAPPINGS = {
    left: add(-1),
    right: add(1),
    up: add(-7),
    down: add(7),
    enter: select(),
    escape: () => store.close()
  };
  const calPagesBetweenDates = (a, b) => {
    const yearDelta = b.getFullYear() - a.getFullYear();
    const firstPartialYear = yearDelta ? 12 - a.getMonth() : b.getMonth() - a.getMonth() + 1;
    const fullYears = yearDelta > 1 ? (yearDelta - 1) * 12 : 0;
    const lastPartialYear = yearDelta ? b.getMonth() + 1 : 0;
    return firstPartialYear + fullYears + lastPartialYear;
  };
  const get2 = (index) => {
    const d = dayjs($store.start).add(index, "month");
    return {
      days: store.getCalendarPage(d.month(), d.year())
    };
  };
  $$result.css.add(css$8);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    totalMonths = calPagesBetweenDates($store.start, $store.end);
    monthIndex = calPagesBetweenDates($store.start, $store.selected) - 1;
    $$rendered = `${validate_component(KeyControls, "KeyControls").$$render($$result, Object.assign({}, KEY_MAPPINGS, { ctx: ["days"] }), {}, {})}

<div class="container svelte-1unzsxu"><div class="legend svelte-1unzsxu">${each(legend, (label) => {
      return `<span>${escape(label)}</span>`;
    })}</div>
	${validate_component(Crossfade, "Crossfade").$$render($$result, { duration }, {}, {
      default: ({ key, receive, send }) => {
        return `<div class="stage svelte-1unzsxu">${validate_component(InfiniteGrid, "InfiniteGrid").$$render(
          $$result,
          {
            cellCount: 1,
            itemCount: totalMonths,
            get: get2,
            index: monthIndex
          },
          {
            index: ($$value) => {
              monthIndex = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ days, index }) => {
              return `${validate_component(Grid, "Grid").$$render(
                $$result,
                {
                  template: "repeat(6, 1fr) / repeat(7, 1fr)"
                },
                {},
                {
                  default: () => {
                    return `${each(days, (day, i) => {
                      return `${!$store.enlargeDay || index !== monthIndex || !dayjs(day.date).isSame($store.selected) ? `<a href="#pickday" class="${[
                        "svelte-1unzsxu",
                        (!store.isSelectable(day.date) ? "disabled" : "") + " " + (index === monthIndex && dayjs(day.date).isSame($store.selected, "day") ? "selected" : "") + " " + (day.outsider ? "outsider" : "")
                      ].join(" ").trim()}">${escape(day.date.getDate())}
							</a>` : ``}`;
                    })}`;
                  }
                }
              )}`;
            }
          }
        )}</div>
		${$store.enlargeDay ? `<div class="stage selected-big svelte-1unzsxu">${escape(dayjs($store.selected).date())}</div>` : ``}`;
      }
    })}
</div>`;
  } while (!$$settled);
  $$unsubscribe_store();
  return $$rendered;
});
const ViewTransitionEffect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_store;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => value);
  $$unsubscribe_store();
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Arrow_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "i.svelte-1eiemu5{display:inline-block;width:23px;height:23px;border-style:solid;border-color:var(--sc-theme-calendar-colors-text-primary);border-width:0;border-bottom-width:3px;border-right-width:3px;transform-origin:center center}i.right.svelte-1eiemu5{transform:translateX(-6px) rotate(-45deg)}i.left.svelte-1eiemu5{transform:translateX(6px) rotate(135deg)}",
  map: null
};
const Arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dir = "left" } = $$props;
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  $$result.css.add(css$7);
  return `<i class="${escape(null_to_empty(dir), true) + " svelte-1eiemu5"}"></i>`;
});
const CalendarControls_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".controls.svelte-1ro74h8{display:grid;grid-template-columns:auto 1fr auto auto;align-items:center;text-align:center;z-index:2;border-bottom:1px solid var(--sc-theme-calendar-colors-border);font-size:1.5em;overflow:hidden}.controls.svelte-1ro74h8>*{height:80px;padding:0 17px;display:grid;align-items:center}.button.svelte-1ro74h8{padding:10px 18px;cursor:pointer;background:var(--sc-theme-calendar-colors-background-primary);transition:all 100ms linear}.button.svelte-1ro74h8:hover{background:var(--sc-theme-calendar-colors-background-hover)}.label.svelte-1ro74h8{font-weight:bold}",
  map: null
};
const CalendarControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visibleMonth;
  let label;
  let addMult;
  let $store, $$unsubscribe_store;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  const UNIT_BY_VIEW = {
    days: "month",
    months: "year",
    years: "year"
  };
  const add = (amount) => () => store.add(amount * addMult, UNIT_BY_VIEW[$store.activeView]);
  const VIEW_TRANSITIONS = ["days", "months", "years"];
  const updateActiveView = () => {
    const transitionIndex = VIEW_TRANSITIONS.indexOf($store.activeView) + 1;
    const newView = transitionIndex ? VIEW_TRANSITIONS[transitionIndex] : null;
    if (newView)
      store.setActiveView(newView);
  };
  const KEY_MAPPINGS = {
    pageDown: add(-1),
    pageUp: add(1),
    control: updateActiveView
  };
  $$result.css.add(css$6);
  visibleMonth = dayjs(new Date($store.year, $store.month, 1));
  label = `${$store.activeView === "days" ? visibleMonth.format("MMMM ") : ""}${$store.year}`;
  addMult = $store.activeView === "years" ? 10 : 1;
  $$unsubscribe_store();
  return `${validate_component(KeyControls, "KeyControls").$$render($$result, Object.assign({}, { ctx: ["days", "months", "years"] }, { limit: 180 }, KEY_MAPPINGS), {}, {})}
<div class="controls svelte-1ro74h8"><div class="button svelte-1ro74h8">${validate_component(Arrow, "Arrow").$$render($$result, { dir: "left" }, {}, {})}</div>
	<span class="button label svelte-1ro74h8">${escape(label)}</span>
	<div class="button svelte-1ro74h8">${validate_component(Arrow, "Arrow").$$render($$result, { dir: "right" }, {}, {})}</div>
</div>`;
});
const CrossfadeProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  const noop = () => false;
  const store = getContext("crossfade") || writable({ send: noop, receive: noop });
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  $$unsubscribe_store();
  return `${slots.default ? slots.default({
    key: $store.key,
    send: $store.send,
    receive: $store.receive
  }) : ``}`;
});
const MonthPicker_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "div.svelte-t161t{display:grid;height:100%}",
  map: null
};
const MonthPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yearIndex;
  let itemCount;
  let $store, $$unsubscribe_store;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  let grid;
  const get2 = (index) => ({
    months: Array(12).fill(0).map((d, i) => {
      const month = dayjs(new Date($store.start.getFullYear() + index, i, 1));
      return {
        year: $store.start.getFullYear() + index,
        label: month.format("MMM"),
        index: i,
        disabled: !store.isSelectable(month, ["date"])
      };
    })
  });
  const close = () => store.setActiveView("days");
  const add = (amount) => () => {
    store.add(amount, "month", ["date"]);
  };
  const KEY_MAPPINGS = {
    left: add(-1),
    right: add(1),
    up: add(-3),
    down: add(3),
    enter: close,
    escape: close
  };
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    yearIndex = $store.year - $store.start.getFullYear();
    itemCount = $store.end.getFullYear() - $store.start.getFullYear() + 1;
    $$rendered = `${validate_component(KeyControls, "KeyControls").$$render($$result, Object.assign({}, KEY_MAPPINGS, { ctx: ["months"] }), {}, {})}
<div class="svelte-t161t">${validate_component(InfiniteGrid, "InfiniteGrid").$$render(
      $$result,
      {
        cellCount: 1,
        itemCount,
        get: get2,
        index: yearIndex,
        this: grid
      },
      {
        index: ($$value) => {
          yearIndex = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          grid = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ months }) => {
          return `${validate_component(Grid, "Grid").$$render(
            $$result,
            {
              template: "repeat(4, 1fr) / repeat(3, 1fr)"
            },
            {},
            {
              default: () => {
                return `${each(months, (month, i) => {
                  return `<a href="#selectMonth"${add_classes(((month.disabled ? "disabled" : "") + " " + ($store.month === i && $store.year === month.year ? "selected" : "")).trim())}>${escape(month.label)}
				</a>`;
                })}`;
              }
            }
          )}`;
        }
      }
    )}
</div>`;
  } while (!$$settled);
  $$unsubscribe_store();
  return $$rendered;
});
const YearPicker_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-t161t{display:grid;height:100%}",
  map: null
};
const YearPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let KEY_MAPPINGS;
  let startYear;
  let endYear;
  let numPerPage;
  let itemCount;
  let yearIndex;
  let $store, $$unsubscribe_store;
  let { rowCount = 3 } = $$props;
  let { colCount = 3 } = $$props;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  const close = () => store.setActiveView("months");
  const add = (amount) => () => {
    const result = $store.year + amount;
    if (result < startYear || result > endYear)
      return;
    store.add(amount, "year", ["month", "date"]);
  };
  const get2 = (index) => {
    const firstYear = startYear + index * numPerPage;
    return {
      years: Array(numPerPage).fill(0).map((d, i) => ({
        number: firstYear + i,
        selectable: firstYear + i <= endYear
      }))
    };
  };
  if ($$props.rowCount === void 0 && $$bindings.rowCount && rowCount !== void 0)
    $$bindings.rowCount(rowCount);
  if ($$props.colCount === void 0 && $$bindings.colCount && colCount !== void 0)
    $$bindings.colCount(colCount);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    KEY_MAPPINGS = {
      up: add(-1 * colCount),
      down: add(colCount),
      left: add(-1),
      right: add(1),
      enter: close,
      escape: close
    };
    startYear = $store.start.getFullYear();
    endYear = $store.end.getFullYear();
    numPerPage = rowCount * colCount;
    itemCount = Math.ceil(endYear - startYear + 1) / numPerPage;
    yearIndex = Math.floor(($store.year - startYear) / numPerPage);
    $$rendered = `${validate_component(KeyControls, "KeyControls").$$render($$result, Object.assign({}, KEY_MAPPINGS, { ctx: ["years"] }), {}, {})}

<div class="svelte-t161t">${validate_component(InfiniteGrid, "InfiniteGrid").$$render(
      $$result,
      {
        cellCount: 1,
        itemCount,
        get: get2,
        index: yearIndex
      },
      {
        index: ($$value) => {
          yearIndex = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ years }) => {
          return `${validate_component(Grid, "Grid").$$render(
            $$result,
            {
              template: "repeat(" + rowCount + ", 1fr) / repeat(" + colCount + ", 1fr)"
            },
            {},
            {
              default: () => {
                return `${each(years, (year) => {
                  return `<a href="#year"${add_classes((($store.year === year.number ? "selected" : "") + " " + (!year.selectable ? "disabled" : "")).trim())}>${escape(year.number)}
				</a>`;
                })}`;
              }
            }
          )}`;
        }
      }
    )}
</div>`;
  } while (!$$settled);
  $$unsubscribe_store();
  return $$rendered;
});
const Calendar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".grid.svelte-126ec0f.svelte-126ec0f{display:grid;width:var(--sc-theme-calendar-width);max-width:var(--sc-theme-calendar-maxWidth);grid-template-rows:auto calc(\n				min(var(--sc-theme-calendar-maxWidth), var(--sc-theme-calendar-width)) * 6 / 7 +\n					var(--sc-theme-calendar-legend-height)\n			);font-family:Rajdhani, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,\n			sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';box-shadow:var(--sc-theme-calendar-shadow);background:var(--sc-theme-calendar-colors-background-primary);text-align:center;color:var(--sc-theme-calendar-colors-text-primary)}.contents.svelte-126ec0f.svelte-126ec0f{display:grid;overflow:hidden}.grid.svelte-126ec0f .contents.svelte-126ec0f>*{display:grid;grid-row:1;grid-column:1;height:100%;grid-template:1fr / 1fr}",
  map: null
};
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  $$result.css.add(css$3);
  $$unsubscribe_store();
  return `${validate_component(CrossfadeProvider, "CrossfadeProvider").$$render($$result, {}, {}, {
    default: ({ key, send, receive }) => {
      return `<div class="grid svelte-126ec0f">${validate_component(CalendarControls, "DatepickerControls").$$render($$result, {}, {}, {})}
		<div class="contents svelte-126ec0f">${$store.activeView === "days" ? `${validate_component(ViewTransitionEffect, "ViewTransitionEffect").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DayPicker, "DayPicker").$$render($$result, {}, {}, {})}`;
        }
      })}` : `${$store.activeView === "months" ? `${validate_component(ViewTransitionEffect, "ViewTransitionEffect").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(MonthPicker, "MonthPicker").$$render($$result, {}, {}, {})}`;
        }
      })}` : `${$store.activeView === "years" ? `${validate_component(ViewTransitionEffect, "ViewTransitionEffect").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(YearPicker, "YearPicker").$$render($$result, {}, {}, {})}`;
        }
      })}` : ``}`}`}</div></div>`;
    }
  })}`;
});
const calendar = {
  selected: /* @__PURE__ */ new Date(),
  start: dayjs().add(-100, "year").toDate(),
  end: dayjs().add(100, "year").toDate(),
  format: "MM/DD/YYYY"
};
const Datepicker_svelte_svelte_type_style_lang = "";
const CrossfadeBoundary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext("crossfade", null);
  return `${slots.default ? slots.default({}) : ``}`;
});
const InlineCalendar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-1g1k4nu{display:inline-block}",
  map: null
};
const InlineCalendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  let { selected = calendar.selected } = $$props;
  let { start = calendar.start } = $$props;
  let { end = calendar.end } = $$props;
  let { format = calendar.format } = $$props;
  let { formatted = "" } = $$props;
  let { theme = {} } = $$props;
  let { defaultTheme = void 0 } = $$props;
  let { startOfWeekIndex = 0 } = $$props;
  let { store = datepickerStore.get({ selected, start, end, startOfWeekIndex }) } = $$props;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  const focused = writable(false);
  setContext(storeContextKey, store);
  setContext(keyControlsContextKey, derived([store, focused], ([$s, $focused]) => $focused ? $s.activeView : void 0));
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.formatted === void 0 && $$bindings.formatted && formatted !== void 0)
    $$bindings.formatted(formatted);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.defaultTheme === void 0 && $$bindings.defaultTheme && defaultTheme !== void 0)
    $$bindings.defaultTheme(defaultTheme);
  if ($$props.startOfWeekIndex === void 0 && $$bindings.startOfWeekIndex && startOfWeekIndex !== void 0)
    $$bindings.startOfWeekIndex(startOfWeekIndex);
  if ($$props.store === void 0 && $$bindings.store && store !== void 0)
    $$bindings.store(store);
  $$result.css.add(css$2);
  selected = $store.selected;
  formatted = dayjs(selected).format(format);
  $$unsubscribe_store();
  return `${validate_component(CrossfadeBoundary, "CrossfadeBoundary").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Theme, "Theme").$$render($$result, { defaultTheme, theme }, {}, {
        default: ({ style }) => {
          return `<div${add_attribute("style", style, 0)} class="svelte-1g1k4nu">${validate_component(Calendar, "Calendar").$$render($$result, {}, {}, {})}</div>`;
        }
      })}`;
    }
  })}`;
});
const Swappable_svelte_svelte_type_style_lang = "";
const Scrollable_svelte_svelte_type_style_lang = "";
const CalendarChallange_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".controls.svelte-1ro74h8{color:var(--dark, #1F2830);font-family:Unbounded;font-size:calc(16 /390 * 100vw) !important;font-style:normal;font-weight:700;line-height:24px;grid-template-columns:70% 15% 15% !important;margin-bottom:5.12vw}.grid.svelte-126ec0f{background:var(--light-gray) !important}.grid.svelte-jmgdr0>*.outsider{color:#ACB9C1 !important;opacity:1 !important}.legend.svelte-1unzsxu{color:#ACB9C1;text-align:center;font-family:Inter;font-size:14px;font-style:normal;font-weight:500;line-height:20px;margin-bottom:3vw}.svelte-1unzsxu{font-size:calc(14/390*100vw) !important;color:var(--dark, #1F2830);text-align:center;font-family:Inter;font-style:normal;font-weight:500;line-height:20px}a.svelte-1unzsxu{border:1px solid transparent;width:9.23vw;height:9.23vw;border-radius:12px}",
  map: null
};
const CalendarChallange = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const theme = {
    "calendar": {
      "width": "75.34vw",
      "legend": {},
      // "height": "9.2vw"
      "shadow": "none",
      "colors": {
        "text": { "primary": "black", "highlight": "black" },
        "background": {
          "primary": "none",
          "highlight": "transparent",
          "hover": "none"
        },
        "border": "none"
      },
      "font": {
        "regular": "calc(14/390*100vw)",
        "large": "calc(16/390*100vw)"
      },
      "grid": {
        "disabledOpacity": ".35",
        "outsiderOpacity": ".6"
      }
    }
  };
  $$result.css.add(css$1);
  return `${validate_component(InlineCalendar, "InlineCalendar").$$render($$result, { theme }, {}, {})}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".user__item img.done{border-color:var(--green) !important}.user__item img.wait{border-color:var(--red) !important}.allow__users.svelte-o3l2b8.svelte-o3l2b8{padding:0 4.1vw;height:12.3vw;border-radius:20px;background:rgba(88, 155, 255, 0.08);display:flex;align-items:center;justify-content:center}.allow__users.svelte-o3l2b8 svg.svelte-o3l2b8{margin-right:2vw}.challange__title.svelte-o3l2b8.svelte-o3l2b8{margin-bottom:7vw;max-width:90%}.profile-icon.svelte-o3l2b8.svelte-o3l2b8{border-radius:20px;width:12.3vw;height:12.3vw;overflow:hidden;background-color:var(--light-gray)}.profile-icon.svelte-o3l2b8 .name-word.svelte-o3l2b8{width:100%;height:100%;display:flex;justify-content:center;align-items:center;color:var(--blue)}.challange__header.svelte-o3l2b8.svelte-o3l2b8{display:flex;flex-direction:column;justify-content:center;align-items:center}.challange__header-title.svelte-o3l2b8.svelte-o3l2b8{opacity:0.5}.calender-container.svelte-o3l2b8.svelte-o3l2b8{padding:5.13vw;border-radius:20px;background:var(--light-gray) !important}.unfollow__challange.svelte-o3l2b8.svelte-o3l2b8{border-radius:16px;background:rgba(88, 155, 255, 0.12);padding:2.56vw 6.15vw;display:flex;justify-content:center;align-items:center;margin-top:6.15vw}.description__title.svelte-o3l2b8.svelte-o3l2b8{margin-top:2.3vw;margin-bottom:3.07vw}.subscribed__users.svelte-o3l2b8.svelte-o3l2b8{padding:3.07vw;border-radius:20px;background:var(--light-gray)}.subscribed__user-info.svelte-o3l2b8.svelte-o3l2b8{display:flex;align-items:center}.subscribed__user-icon.svelte-o3l2b8.svelte-o3l2b8{margin-right:3vw;width:12.3vw;height:12.3vw;border-radius:100px;background:var(--light-gray);overflow:hidden}.subscribed__user-item.svelte-o3l2b8.svelte-o3l2b8{display:flex;justify-content:space-between;align-items:center}.subscribed__user-item.svelte-o3l2b8.svelte-o3l2b8:not(:last-child){margin-bottom:3.07vw}.subscribed__user-button.svelte-o3l2b8.svelte-o3l2b8{padding:2vw 4vw}.subscribed__user-button.__active.svelte-o3l2b8.svelte-o3l2b8{padding:2.05vw 4.1vw;border-radius:14px;background:rgba(88, 155, 255, 0.12);color:var(--blue);display:flex;justify-content:center;align-items:center;width:32.56vw;cursor:pointer}.subscribed__user-button.svelte-o3l2b8.svelte-o3l2b8{border-radius:14px;background:var(--blue);padding:2.05vw 4.1vw;color:#fff;display:flex;justify-content:center;align-items:center;width:32.56vw;cursor:pointer}.subscribed__user-icon.name-word.svelte-o3l2b8.svelte-o3l2b8{background:#DFECFF;display:flex;justify-content:center;align-items:center}.subscribed__user-icon.name-word.svelte-o3l2b8 div.svelte-o3l2b8{color:var(--blue);text-align:center;font-family:Unbounded;font-size:16px;font-style:normal;font-weight:600;line-height:24px}a.svelte-1unzsxu.this-day{border-color:var(--blue) !important}a.svelte-1unzsxu.success, a.svelte-1unzsxu.success.this{color:var(--green) !important;background:rgba(24, 209, 131, 0.08) !important;border-color:transparent !important}a.svelte-1unzsxu.undone, a.svelte-1unzsxu.undone.this{color:var(--red) !important;background:rgba(243, 69, 101, 0.08) !important;border-color:transparent !important}",
  map: null
};
function eventHandler(event) {
  event.preventDefault();
  event.stopPropagation();
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageInfo;
  let user;
  let $linkRoad, $$unsubscribe_linkRoad;
  $$unsubscribe_linkRoad = subscribe(linkRoad, (value) => $linkRoad = value);
  let { data } = $$props;
  console.log(data);
  let token = data.token;
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`
  };
  function subscribeChallenge(action, challengeID) {
    fetch(`${$linkRoad}/api/challenges/${challengeID}/${action}`, { method: "POST", headers }).then((response) => {
      if (response.ok) {
        console.log(response.ok);
        invalidateAll();
      }
    }).then(() => invalidateAll()).then(() => isFollow()).catch((error) => {
      console.error(error);
    });
  }
  let htmlElements;
  let events = [
    // События мыши
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mousemove",
    "mouseover",
    "mouseout",
    "contextmenu",
    // События сенсорного экрана
    "touchstart",
    "touchend",
    "touchmove",
    "touchcancel",
    // События клавиатуры
    "keydown",
    "keyup",
    "keypress",
    // События формы
    "focus",
    "blur",
    "change",
    "input",
    "submit",
    // События окна
    "resize",
    "scroll",
    // События драг-и-дропа
    "dragstart",
    "dragend",
    "dragenter",
    "dragleave",
    "dragover",
    "drop"
  ];
  let calenderLabel;
  let arrows;
  let monthIndex = (/* @__PURE__ */ new Date()).getMonth();
  const months = [
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
  let currentMonth = months[monthIndex];
  let yearNow;
  function getCurrCalenderPage(params) {
    filteredData = parseCalendarData(pageInfo, monthIndex + 1);
    setActiveDaysClasses();
    let pages = document.querySelectorAll(".grid .svelte-jmgdr0");
    setTimeout(
      () => {
        pages.forEach((page) => {
          if (!!page.parentNode) {
            let x = Number(page.parentNode.style.transform.substring(11, page.parentNode.style.transform.length - 3));
            if (x < 100 && x > -100) {
              console.log(page);
            }
          }
        });
      },
      1e3
    );
  }
  function parseCalendarData(pageInfo2, monthIndex2) {
    const newData = [];
    pageInfo2.calendar.forEach((item) => {
      const keys = Object.keys(item);
      if (keys.length > 0) {
        const date = keys[0];
        const [day, month, year] = date.split(".");
        if (parseInt(month) === monthIndex2 && yearNow - 2e3 == year) {
          const value = item[date];
          if (value !== null) {
            newData.push({ date, value });
          }
        }
      }
    });
    return newData;
  }
  const getCurrentDate = () => {
    var date = /* @__PURE__ */ new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear().toString().slice(-2);
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return day + "." + month + "." + year;
  };
  let today = getCurrentDate();
  console.log(today);
  let filteredData;
  function setActiveDaysClasses() {
    filteredData = parseCalendarData(pageInfo, monthIndex + 1);
    calendarDaysNodes.forEach((item) => {
      item.querySelectorAll("a.svelte-1unzsxu").forEach((node) => {
        node.classList.remove("undone");
        if (!node.classList.contains("outsider")) {
          const day = parseInt(node.textContent);
          const matchingData = filteredData.find((data2) => {
            const dataDay = parseInt(data2.date.split(".")[0]);
            return dataDay === day;
          });
          if (matchingData) {
            const { value } = matchingData;
            node.classList.add(value);
          }
        }
      });
    });
  }
  let calendarDaysNodes;
  function isFollow() {
    calendarDaysNodes = document.querySelectorAll(".grid.svelte-jmgdr0");
    arrows = document.querySelectorAll("div.button.svelte-1ro74h8");
    calenderLabel = document.querySelector(".button.label.svelte-1ro74h8");
    htmlElements = document.querySelectorAll(".svelte-198r3wi");
    console.log(htmlElements);
    events.forEach(function(event) {
      htmlElements[0].addEventListener(event, eventHandler);
    });
    yearNow = +calenderLabel.textContent.split(" ")[1];
    calenderLabel.textContent = currentMonth + " " + yearNow;
    arrows[0].addEventListener("click", (e) => {
      if (monthIndex != 0) {
        monthIndex--;
      } else {
        monthIndex = 11;
        yearNow--;
      }
      currentMonth = months[monthIndex];
      months.indexOf(currentMonth);
      calenderLabel.textContent = currentMonth + " " + yearNow;
      getCurrCalenderPage();
    });
    arrows[1].addEventListener("click", (e) => {
      if (monthIndex == 11) {
        monthIndex = 0;
        yearNow++;
      } else {
        monthIndex++;
      }
      currentMonth = months[monthIndex];
      months.indexOf(currentMonth);
      calenderLabel.textContent = currentMonth + " " + yearNow;
      getCurrCalenderPage();
    });
    console.log(pageInfo.calendar);
    filteredData = parseCalendarData(pageInfo, monthIndex + 1);
    console.log(filteredData);
    setActiveDaysClasses();
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  pageInfo = data.challengeData;
  user = data.user;
  $$unsubscribe_linkRoad();
  return `${validate_component(TrainingHeader, "TrainingHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BackArrow, "BackArrow").$$render(
        $$result,
        {
          backFunction: () => {
            goto("/challange");
          }
        },
        {},
        {}
      )}
            ${!pageInfo.joined ? `<div class="allow__users svelte-o3l2b8"><div class="allow__users__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="svelte-o3l2b8"><path stroke="#589BFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.0002 12.0001c2.3011 0 4.1666-1.8655 4.1666-4.1667 0-2.3012-1.8655-4.1667-4.1666-4.1667-2.3012 0-4.1667 1.8655-4.1667 4.1667 0 2.3012 1.8655 4.1667 4.1667 4.1667ZM19.1585 20.3333c0-3.225-3.2084-5.8333-7.1584-5.8333s-7.1583 2.6083-7.1583 5.8333"></path></svg></div>
                    <div class="allow__users__amount c-blue text-16b">${escape(pageInfo.accepted_by.length)}</div></div>` : `<div class="challange__header svelte-o3l2b8"><div class="challange__header-title text-14s svelte-o3l2b8">Результаты вызова</div>
                <div class="challange__header-name text-16b">Вы</div></div>

            <div class="profile-icon svelte-o3l2b8">${user.avatar ? `<img${add_attribute("src", user.avatar, 0)} alt="qweqw">` : `<div class="name-word svelte-o3l2b8">${escape(user.name.slice(0, 1))}</div>`}</div>`}`;
    }
  })}
${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="challange__title text-20b svelte-o3l2b8">${escape(pageInfo.name)}</div>
    ${!pageInfo.joined ? `${validate_component(DiscriptionChallange, "DiscriptionChallange").$$render(
        $$result,
        {
          onClick: () => {
            subscribeChallenge("accept", pageInfo.id);
          }
        },
        {},
        {}
      )}` : `${pageInfo.joined ? `<div class="calender-container svelte-o3l2b8">${validate_component(CalendarChallange, "CalendarChallange").$$render($$result, {}, {}, {})}
        
        <div class="unfollow__challange text-14b c-blue svelte-o3l2b8">Отказаться от вызова</div></div>` : ``}`}


    <div class="description__title text-16b svelte-o3l2b8">Список участников</div>
    ${pageInfo.accepted_by.length ? `<div class="subscribed__users svelte-o3l2b8">${each(pageInfo.accepted_by, (user2) => {
        return `
        <div class="subscribed__user-item svelte-o3l2b8"><div class="subscribed__user-info svelte-o3l2b8">${user2.avatar ? `<div class="subscribed__user-icon svelte-o3l2b8"><img${add_attribute("src", $linkRoad + user2.avatar, 0)} alt="">
                    </div>` : ``}
                ${!user2.avatar ? `<div class="subscribed__user-icon name-word svelte-o3l2b8"><div class="svelte-o3l2b8">${escape(user2.name.slice(0, 1))}</div>
                    </div>` : ``}
                <div class="subscribed__user-name text-16s">${escape(user2.name)}</div></div>
            ${!user2.followed ? `
                <div class="subscribed__user-button text-14s svelte-o3l2b8">Отслеживать</div>` : `
                <div class="subscribed__user-button text-14s __active svelte-o3l2b8">Отписаться</div>`}
        </div>`;
      })}
        </div>` : ``}`;
    }
  })}`;
});
export {
  Page as default
};
