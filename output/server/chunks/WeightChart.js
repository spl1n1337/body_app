import { c as create_ssr_component } from "./index3.js";
import "chart.js/auto";
import "chartjs-plugin-datalabels";
const WeightChart_svelte_svelte_type_style_lang = "";
const css = {
  code: "canvas.svelte-1jdf9df{width:100vw;position:relative;z-index:5}.canvas-container.svelte-1jdf9df{position:relative}.line-wrapper.svelte-1jdf9df{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between}.line.svelte-1jdf9df{width:286px;height:1px;border:1px dashed #DCDEE3;opacity:0.5}",
  map: null
};
const WeightChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { datapoints = [11, 22, 33, 44] } = $$props;
  if ($$props.datapoints === void 0 && $$bindings.datapoints && datapoints !== void 0)
    $$bindings.datapoints(datapoints);
  $$result.css.add(css);
  return `<div class="canvas-container svelte-1jdf9df"><canvas id="myChart" class="svelte-1jdf9df"></canvas>
	<div class="line-wrapper svelte-1jdf9df"><div class="line svelte-1jdf9df"></div>
		<div class="line svelte-1jdf9df"></div>
		<div class="line svelte-1jdf9df"></div>
		<div class="line svelte-1jdf9df"></div>
		<div class="line svelte-1jdf9df"></div></div>
</div>`;
});
export {
  WeightChart as W
};
