<script>
    import showicon from "$lib/icons/show.svg";
    import hideicon from "$lib/icons/hide.svg";
    import BackArrow from "$lib/components/BackArrow.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import Container from "$lib/components/Container.svelte"
    import nextWhite from "$lib/icons/chevron-right.svg";
    import nextBlack from "$lib/icons/chevron-right-black.svg"
    import vk from "$lib/icons/vk.svg";
    import mail from "$lib/icons/mail.svg";
    import {goto} from '$app/navigation';
    import { enhance } from '$app/forms';

    const backFunction = (event) => {
    event.stopPropagation();
    history.back()
    };
    let show1 = false;
    let show2 = false;
    export let form;

</script>

<TrainingHeader>
    <BackArrow {backFunction}/>
</TrainingHeader>




<Container>

    <div class="reg-title text-32b">Регистрация</div>
    <div class="reg-descr text-16m c-dark-gray">Введите свои персональыне данные, чтобы зарегистрироваться</div>
    <div class="form-container">
            <form id="register" use:enhance method="post">
                <div class="name-contain">
                    <label class="text-12s c-dark-gray" for="name">Имя</label>
                    <input class="text-14s" type="text" name="name"  required/>
                </div>
        
                <div class="lastname-container">
                    <label class="text-12s c-dark-gray" for="lastname">Фамилия</label>
                    <input class="text-14s" type="text" name="lastname"  required/>
                </div>

                <div class="email-container">
                    <label class="text-12s c-dark-gray" for="email">Почта</label>
                    <input class="text-14s" type="email" name="email" required/>
                </div>
        
                <div class="password-container">
                    <label class="text-12s c-dark-gray" for="password">Придумайте пароль</label>
                    <input class="text-14s" type={show1 ? 'text' : 'password'} name="password" required/>
                    <button class="hide-btn" on:click|preventDefault={()=> show1 = !show1}>
                        <img src="{!show1 ? showicon : hideicon}" alt="q">                  
                    </button>
                </div>


                <div class="passwordconfirm-container">
                    <label class="text-12s c-dark-gray" for="passwordConfirmation">Повторите пароль</label>
                    <input class="text-14s" type={show2 ? 'text' : 'password'} name="passwordConfirmation" required/>
                    <button class="hide-btn" on:click|preventDefault={()=> show2 = !show2}>
                        <img src="{!show2 ? showicon : hideicon}" alt="q">                  
                    </button>
                </div>
            </form>

            {#if form?.error}
            <div class="error">{form.error}</div>
            {/if}
    </div>



    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="button-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="big-black-button _black" on:click={(e) => document.querySelector('form').requestSubmit()}>
            <div class="start-training-text text-16s">Зарегистрироваться</div>
        </div>
        <div class="big-black-button __white" on:click={()=> goto('/registration')}>
            <div class="start-training-text c-black text-16s">Войти</div>
        </div>
    </div>
</Container>




<style>
    button{
        border: none;
    }

    .password-container, .passwordconfirm-container {
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
    .name-contain, .lastname-container, .email-container, .password-container  {
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
        margin-bottom: 20vw;
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