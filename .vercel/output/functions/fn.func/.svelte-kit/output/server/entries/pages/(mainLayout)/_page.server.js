import { r as redirect } from "../../../chunks/index.js";
async function load({ locals }) {
  const user = locals.user;
  if (user) {
    throw redirect(307, "/trainings");
  }
  return { user };
}
export {
  load
};
