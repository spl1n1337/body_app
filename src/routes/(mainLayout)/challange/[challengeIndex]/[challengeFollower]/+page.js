import { linkRoad } from "$lib/stores.js";
/** @type {import('./$types').PageLoad} */
let link;

linkRoad.subscribe((value) => {
    link = value;
});

export async function load({ fetch, params, data }) {
  const challengeIndex = params.challengeIndex;
  const challengeFollower = params.challengeFollower;
  const token = data.token;
  const user = data.user;

  const res = await fetch(`${link}/api/user_challenge/${challengeFollower}/${challengeIndex}`, {
    method: "GET",
    headers:{
            'Content-Type':'application/json',
                Authorization:`Bearer ${token}`},

});
  const challengeData = await res.json();

  return { challengeData, challengeIndex, token, user };
}

