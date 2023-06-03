/** @type {import('./$types').PageServersLoad} */
export async function load({locals}) {
    const user = locals.user;
    return {user}; // <---Передаем данные пользователя с сервера на страницу.
                   //  На всех страницах, где тебе нужны данные юзера, нужно добавить такой файл
};