import { linkRoad } from "$lib/stores.js";
/** @type {import('./$types').PageLoad} */
let link;

linkRoad.subscribe((value) => {
    link = value;
});

export async function load({ fetch, params }) {
  const training_index = params.training;

  const res = await fetch(`${link}/api/trainings/${training_index}`);
  const trainingData = await res.json();

  return { trainingData };
}

