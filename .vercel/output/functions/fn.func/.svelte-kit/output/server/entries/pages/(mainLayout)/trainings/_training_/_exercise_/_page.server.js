async function load({ locals, cookies }) {
  const user = locals.user;
  const token = cookies.get("access");
  return { user, token };
}
export {
  load
};
