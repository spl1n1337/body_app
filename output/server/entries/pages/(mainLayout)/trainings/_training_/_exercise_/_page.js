import { l as linkRoad } from "../../../../../../chunks/stores2.js";
let link;
linkRoad.subscribe((value) => {
  link = value;
});
async function load({ fetch, params, data }) {
  const training_index = params.training;
  const dataInfo = data.token;
  const user = data.user;
  const res = await fetch(`${link}/api/trainings/${training_index}`);
  const trainingData = await res.json();
  return { trainingData, training_index, dataInfo, user };
}
export {
  load
};
