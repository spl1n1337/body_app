/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const access = event.cookies.get("access");
    const refresh = event.cookies.get("refresh");
    console.log(access);
    console.log(refresh);
	return await resolve(event);
}