/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, locals }) {
    return {};
};

import { redirect } from '@sveltejs/kit';
import { linkRoad } from '$lib/stores.js';
let link;

linkRoad.subscribe((value) => {
    link = value;
});

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        const payload = {
            username: email,
            password: password,
            } 
        const auth_resp = await fetch(`${link}/api/token/pair`, {
                method: "POST",
                body: JSON.stringify(payload)
                });
                const auth_json = await auth_resp.json();
                if (auth_resp.status === 200){
                    cookies.set("access", auth_json.access, {httpOnly: true, path: '/', maxAge: 60 * 60 * 24});
                    cookies.set("refresh", auth_json.refresh, {httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 30});
                    
                    throw redirect(302, '/targets');
                }
                else{
                    console.log(auth_json)
                }
            }     
    };