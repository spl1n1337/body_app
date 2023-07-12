import {linkRoad} from "$lib/stores.js"
/** @type {import('./$types').PageServersLoad} */

let link
linkRoad.subscribe((value) => {
    link = value;
});
export async function load({locals, cookies, fetch}) {
    const user = locals.user;
    const token = cookies.get("access");


    const res = await fetch(`${link}/api/challenges`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`,
        }
        });
    const challenges = await res.json();
    return {user, token, challenges}; // <---Передаем данные пользователя с сервера на страницу.
                   //  На всех страницах, где тебе нужны данные юзера, нужно добавить такой файл
};