import { linkRoad } from "$lib/stores.js";
/** @type {import('./$types').PageLoad} */
let link;

linkRoad.subscribe((value) => {
    link = value;
});

export async function load({ fetch, params, data }) {
  const training_index = params.training;
  const dataInfo = data.token;
  const user = data.user;

  const res = await fetch(`${link}/api/trainings/${training_index}`);
  const trainingData = await res.json();

  return { trainingData, training_index, dataInfo, user };
}

