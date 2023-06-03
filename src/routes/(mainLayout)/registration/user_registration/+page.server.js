/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    return {};
};


import { fail, redirect } from '@sveltejs/kit';
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
        // const passwordConfirmation = data.get('passwordConfirmation');

        const payload = {
            name: data.get('name'),
            lastname: data.get('lastname'),
            email: email,
            password: password,
        }

        const register_resp = await fetch(`${link}/api/register`, 
        {
            method: 'POST',
            body: JSON.stringify(payload)
        })
        const register_json = await register_resp.json();
        if (register_resp.status === 200){
                
                console.log(`NEW USER CREATED. ID: ${register_json.id}`);
                const auth_resp = await fetch(`${link}/api/token/pair`, {
                    method: "POST",
                    body: JSON.stringify({
                        username: email,
                        password: password
                        })
                });
                const auth_json = await auth_resp.json();
                if (auth_resp.status === 200){
                    cookies.set("access", auth_json.access, {httpOnly: true, path: '/', maxAge: 60 * 60 * 24});
                    cookies.set("refresh", auth_json.refresh, {httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 30});
                    throw redirect(302, '/params');
                }
                else{
                    console.log(auth_json)
                }
            }
        else{
            console.log(register_json);
            return fail(422, {
                            error: register_json.detail
                    }
                )
            }
            
    }
};