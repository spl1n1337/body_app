<script>
    import BackArrow from "$lib/components/BackArrow.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import Container from "$lib/components/Container.svelte"
    import {goto} from '$app/navigation';
    import showicon from "$lib/icons/show.svg";
    import hideicon from "$lib/icons/hide.svg";
	import { enhance } from "$app/forms";
    import { onMount } from "svelte";
    import { linkRoad } from "$lib/stores.js"

    let form;
    let regErr = false;
    let clearErr = ()=> regErr = '';
    let show1 = false;
    let show2 = false;
    const backFunction = (event) => {
    event.stopPropagation();
    history.back()
    };
    async function handleFormSubmit() {
        clearErr();
        const formData = new FormData(form);

        const email = formData.get('email');
        const password = formData.get('password');
        const payload = {
            username: email,
            password: password,
        } 
        console.log(JSON.stringify(payload))
        try {
        const response = await fetch(`${$linkRoad}/api/token/pair`, {
            method: 'POST',
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            form.submit()
            // Успешный ответ от сервера
            // Вы можете выполнить дополнительные действия здесь, например, перенаправление на другую страницу
            console.log(response)
        } else {
            // Обработка ошибки
            const errorData = await response.json();
            regErr = true;
            console.error('Ошибка при отправке формы:', errorData.detail)
        }
        } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        }
    }
</script>

<TrainingHeader>
    <BackArrow {backFunction}/>
</TrainingHeader>




<Container>

    <div class="reg-title text-32b">Войти</div>
    <div class="reg-descr text-16m c-dark-gray">Введите почту и пароль для<br>авторизации</div>
    <div class="form-container">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <form use:enhance method="post" bind:this={form} on:click={()=>regErr = false}>

                <div class="email-container">
                    <label class="text-12s c-dark-gray" for="email">Почта</label>
                    <input class="text-14s {regErr ? 'error' : ""}" type="email" name="email" on:focus={()=>{clearErr()}}/>
                </div>
        
                <div class="password-container">
                    <label class="text-12s c-dark-gray" for="password">Пароль</label>
                    <input class="text-14s {regErr ? 'error' : ""}" type={show1 ? 'text' : 'password'} name="password" on:focus={()=>{clearErr()}}/>
                    <button class="hide-btn" on:click|preventDefault={()=> show1 = !show1}>
                        <img src="{!show1 ? showicon : hideicon}" alt="q">                  
                    </button>
                </div>

                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="button-container">
                    <div class="big-black-button _black" on:click={handleFormSubmit}>
                        <div class="start-training-text text-16s">Войти</div>
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div class="big-black-button __white" on:click={()=> goto('/registration/user_registration')}>
                        <div class="start-training-text c-black text-16s">Зарегистрироваться</div>
                    </div>
                </div>
            </form>
    </div>

    


</Container>




<style>
    .error {
        border-color: red;
    }
    .password-container {
        position: relative;
    }
    .hide-btn {
        all: unset;
        position: absolute;
        bottom: 1.5vw;
        right: 0;
    }
    .hide-btn img {
        width: auto;
    }

    form div {
        display: flex;
        flex-direction: column;
    }
    .email-container  {
        margin-bottom: 5.3vw;
    }
    form div input {
        border-bottom: 1px solid #DCDEE3;
        padding-bottom: 6px;
    }
    form div input:focus {
        border-bottom: 1px solid #589BFF;
    }
    .form-container {
        background: #F7F8FC;
        border-radius: 16px;
        padding: 5.13vw 6.15vw;
        margin-bottom: 2vw;
    }
    .big-black-button._black {
        margin-bottom: 4.1vw;
    }
    .reg-descr {
        margin-bottom: 4.15vw;
    }
    .reg-title {
        margin-top: 4.1vw;
        margin-bottom: 2vw;
    }
    .big-black-button.__white {
        background-color: var(--white);
        
    }
    .button-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 7.18vw;
        position: fixed;
        bottom: 22px;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 389px) {
        .button-container {
            bottom: 0;
        }
        .reg-title {
            margin-top: 0;
        }
        .big-black-button._black {
            margin-bottom: 1vw;
        }
    }
</style>