import { l as linkRoad } from "../../../../chunks/stores2.js";
let link;
linkRoad.subscribe((value) => {
  link = value;
});
async function load({ fetch }) {
  const res = await fetch(`${link}/api/trainings`);
  const trainingsData = await res.json();
  return { trainingsData };
}
export {
  load
};
