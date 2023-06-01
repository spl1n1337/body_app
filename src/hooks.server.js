import { redirect } from '@sveltejs/kit';
import { linkRoad, user } from '$lib/stores.js';
let link;

linkRoad.subscribe((value) => {
    link = value;
});



/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {


    console.log("IM HOOK");
    const access = event.cookies.get("access");
    const refresh = event.cookies.get("refresh");
    if (!access && !refresh){return await resolve(event);}

    const resp =  await fetch(`${link}/api/user`, {
        method: "GET",
        headers:{
                'Content-Type':'application/json',
                    Authorization:`Bearer ${access}`},

    });
    if (resp.ok) {
        const user_json = await resp.json();
        event.locals.user = user_json;
        
    }
    else {
        if (resp.status === 401)
        {
            const refresh_reps = await fetch(`${link}/api/token/refresh`, {
                method: "POST",
                body: JSON.stringify({"refresh": refresh})
                });
        
            if (refresh_reps.ok){
                const refresh_json = await refresh_reps.json();
                event.cookies.set("access", refresh_json.access, {httpOnly: true, path: '/', maxAge: 60 * 60 * 24});
                console.log("TOKEN REFRESHED");
                throw redirect(303, '/profile_data');
                }
            else if (refresh_reps.status === 401){
                event.cookies.delete('access');
                event.cookies.delete('refresh');
                event.locals.user = undefined;
                throw redirect(302, '/');
            }

    }

    };

	return await resolve(event);
}