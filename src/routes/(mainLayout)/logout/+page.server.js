import { fail, redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export async function load({locals, cookies}) {

    cookies.delete('access');
    cookies.delete('refresh');
    locals.user = undefined;
    throw redirect(303, "/");
};
