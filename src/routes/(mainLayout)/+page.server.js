import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageServersLoad} */
export async function load({locals}) {
    const user = locals.user;
    if(user){
        throw redirect(307, '/trainings');
    }
    return {user}; // <---Передаем данные пользователя с сервера на страницу.
                   //  На всех страницах, где тебе нужны данные юзера, нужно добавить такой файл
};