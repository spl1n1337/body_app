import { c as create_ssr_component, e as escape, d as each, b as add_attribute, v as validate_component } from "../../../../chunks/index3.js";
import { scaleLinear } from "d3-scale";
const points = [
  { x: 1979, y: 7.19 },
  { x: 1980, y: 7.83 },
  { x: 1981, y: 7.24 },
  { x: 1982, y: 7.44 },
  { x: 1983, y: 7.51 },
  { x: 1984, y: 7.1 },
  { x: 1985, y: 6.91 },
  { x: 1986, y: 7.53 },
  { x: 1987, y: 7.47 },
  { x: 1988, y: 7.48 },
  { x: 1989, y: 7.03 },
  { x: 1990, y: 6.23 },
  { x: 1991, y: 6.54 },
  { x: 1992, y: 7.54 },
  { x: 1993, y: 6.5 },
  { x: 1994, y: 7.18 },
  { x: 1995, y: 6.12 },
  { x: 1996, y: 7.87 },
  { x: 1997, y: 6.73 },
  { x: 1998, y: 6.55 },
  { x: 1999, y: 6.23 },
  { x: 2e3, y: 6.31 },
  { x: 2001, y: 6.74 },
  { x: 2002, y: 5.95 },
  { x: 2003, y: 6.13 },
  { x: 2004, y: 6.04 },
  { x: 2005, y: 5.56 },
  { x: 2006, y: 5.91 },
  { x: 2007, y: 4.29 },
  { x: 2008, y: 4.72 },
  { x: 2009, y: 5.38 },
  { x: 2010, y: 4.92 },
  { x: 2011, y: 4.61 },
  { x: 2012, y: 3.62 },
  { x: 2013, y: 5.35 },
  { x: 2014, y: 5.28 },
  { x: 2015, y: 4.63 },
  { x: 2016, y: 4.72 },
  { x: 2017, y: 4.82 },
  { x: 2018, y: 4.79 },
  { x: 2019, y: 4.36 },
  { x: 2020, y: 4 },
  { x: 2021, y: 4.92 }
];
const Graphic_svelte_svelte_type_style_lang = "";
const css = {
  code: ".chart.svelte-18zbabo.svelte-18zbabo,h2.svelte-18zbabo.svelte-18zbabo,p.svelte-18zbabo.svelte-18zbabo{width:100%;max-width:500px;margin-left:auto;margin-right:auto}svg.svelte-18zbabo.svelte-18zbabo{position:relative;width:100%;height:200px;overflow:visible}.tick.svelte-18zbabo.svelte-18zbabo{font-size:.725em;font-weight:200}.tick.svelte-18zbabo line.svelte-18zbabo{stroke:#aaa;stroke-dasharray:2}.tick.svelte-18zbabo text.svelte-18zbabo{fill:#666;text-anchor:start}.tick.tick-0.svelte-18zbabo line.svelte-18zbabo{stroke-dasharray:0}.x-axis.svelte-18zbabo .tick text.svelte-18zbabo{text-anchor:middle}.path-line.svelte-18zbabo.svelte-18zbabo{fill:none;stroke:rgb(0,100,100);stroke-linejoin:round;stroke-linecap:round;stroke-width:2}.path-area.svelte-18zbabo.svelte-18zbabo{fill:rgba(0,100,100,0.2)}",
  map: null
};
const Graphic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xScale;
  let yScale;
  let minX;
  let maxX;
  let path;
  let area;
  const yTicks = [0, 2, 4, 6, 8];
  const xTicks = [1980, 1990, 2e3, 2010];
  const padding = { top: 20, right: 15, bottom: 20, left: 25 };
  let width = 500;
  let height = 200;
  $$result.css.add(css);
  minX = points[0].x;
  maxX = points[points.length - 1].x;
  xScale = scaleLinear().domain([minX, maxX]).range([padding.left, width - padding.right]);
  yScale = scaleLinear().domain([Math.min.apply(null, yTicks), Math.max.apply(null, yTicks)]).range([height - padding.bottom, padding.top]);
  path = `M${points.map((p) => `${xScale(p.x)},${yScale(p.y)}`).join("L")}`;
  area = `${path}L${xScale(maxX)},${yScale(0)}L${xScale(minX)},${yScale(0)}Z`;
  return `<h2 class="svelte-18zbabo">Arctic sea ice minimum</h2>

<div class="chart svelte-18zbabo"><svg class="svelte-18zbabo"><g class="axis y-axis" transform="${"translate(0, " + escape(padding.top, true) + ")"}">${each(yTicks, (tick) => {
    return `<g class="${"tick tick-" + escape(tick, true) + " svelte-18zbabo"}" transform="${"translate(0, " + escape(yScale(tick) - padding.bottom, true) + ")"}"><line x2="100%" class="svelte-18zbabo"></line><text y="-4" class="svelte-18zbabo">${escape(tick)}${escape(tick === 8 ? " million sq km" : "")}</text></g>`;
  })}</g><g class="axis x-axis svelte-18zbabo">${each(xTicks, (tick) => {
    return `<g class="${"tick tick-" + escape(tick, true) + " svelte-18zbabo"}" transform="${"translate(" + escape(xScale(tick), true) + "," + escape(height, true) + ")"}"><line y1="${"-" + escape(height, true)}" y2="${"-" + escape(padding.bottom, true)}" x1="0" x2="0" class="svelte-18zbabo"></line><text y="-2" class="svelte-18zbabo">${escape(tick)}</text></g>`;
  })}</g><path class="path-area svelte-18zbabo"${add_attribute("d", area, 0)}></path><path class="path-line svelte-18zbabo"${add_attribute("d", path, 0)}></path></svg></div>

<p class="svelte-18zbabo">Average September extent. Source: <a href="https://climate.nasa.gov/vital-signs/arctic-sea-ice/">NSIDC/NASA</a></p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
