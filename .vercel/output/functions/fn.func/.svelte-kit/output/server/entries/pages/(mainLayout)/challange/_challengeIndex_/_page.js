import { l as linkRoad } from "../../../../../chunks/stores2.js";
let link;
linkRoad.subscribe((value) => {
  link = value;
});
async function load({ fetch, params, data }) {
  const challengeIndex = params.challengeIndex;
  const token = data.token;
  const user = data.user;
  const res = await fetch(`${link}/api/challenges/${challengeIndex}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
  const challengeData = await res.json();
  return { challengeData, challengeIndex, token, user };
}
export {
  load
};
