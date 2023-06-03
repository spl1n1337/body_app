/** @type {import('./$types').PageServersLoad} */
export async function load({locals, cookies}) {
    const user = locals.user;
    const token = cookies.get("access");
    return {user, token}; // <---Передаем данные пользователя с сервера на страницу.
                   //  На всех страницах, где тебе нужны данные юзера, нужно добавить такой файл
};
