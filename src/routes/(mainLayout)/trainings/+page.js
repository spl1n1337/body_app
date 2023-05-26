/** @type {import('./$types').PageLoad} */
import { linkRoad } from '$lib/stores.js';
let link;

linkRoad.subscribe((value) => {
    link = value;
});

export async function load({ fetch }) {
    const res = await fetch(`${link}/api/trainings`);
    const trainingsData = await res.json();

    return {trainingsData};
}