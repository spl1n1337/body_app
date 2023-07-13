import { r as redirect } from "../../../../chunks/index.js";
import { l as linkRoad } from "../../../../chunks/stores2.js";
async function load({ locals }) {
  if (locals.user) {
    throw redirect(302, "/targets");
  }
  return {};
}
let link;
linkRoad.subscribe((value) => {
  link = value;
});
const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const payload = {
      username: email,
      password
    };
    const auth_resp = await fetch(`${link}/api/token/pair`, {
      method: "POST",
      body: JSON.stringify(payload)
    });
    const auth_json = await auth_resp.json();
    if (auth_resp.status === 200) {
      cookies.set("access", auth_json.access, { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 });
      cookies.set("refresh", auth_json.refresh, { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 30 });
      throw redirect(302, "/registration/user_registration");
    } else {
      console.log(auth_json);
    }
  }
};
export {
  actions,
  load
};
