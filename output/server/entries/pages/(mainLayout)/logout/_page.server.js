import { r as redirect } from "../../../../chunks/index.js";
async function load({ locals, cookies }) {
  cookies.delete("access");
  cookies.delete("refresh");
  locals.user = void 0;
  throw redirect(303, "/");
}
export {
  load
};
