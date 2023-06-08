import { linkRoad } from "$lib/stores.js";
/** @type {import('./$types').PageLoad} */
let link;

linkRoad.subscribe((value) => {
    link = value;
});

export async function load({ fetch, locals, cookies }) {

    const token = cookies.get("access");
    const user = locals.user;
    const res = await fetch(`${link}/api/takes`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`,
        }
        });
    const takes = await res.json();

    return { user, takes };
}

