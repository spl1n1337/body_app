import { l as linkRoad } from "../../../../chunks/stores2.js";
let link;
linkRoad.subscribe((value) => {
  link = value;
});
async function load({ fetch, locals, cookies }) {
  const token = cookies.get("access");
  const user = locals.user;
  const res = await fetch(`${link}/api/takes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
  const takes = await res.json();
  return { user, takes };
}
export {
  load
};
