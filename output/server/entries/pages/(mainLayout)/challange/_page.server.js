import { l as linkRoad } from "../../../../chunks/stores2.js";
let link;
linkRoad.subscribe((value) => {
  link = value;
});
async function load({ locals, cookies, fetch }) {
  const user = locals.user;
  const token = cookies.get("access");
  const res = await fetch(`${link}/api/challenges`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
  const challenges = await res.json();
  return { user, token, challenges };
}
export {
  load
};
