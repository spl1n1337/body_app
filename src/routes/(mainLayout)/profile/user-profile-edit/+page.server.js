/** @type {import('./$types').PageLoad} */


export async function load({ locals, cookies }) {

    const token = cookies.get("access");
    const user = locals.user;

    return { user, token };
}

