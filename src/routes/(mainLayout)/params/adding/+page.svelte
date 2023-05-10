<script>
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import Cross from "$lib/components/Cross.svelte";
    import Container from "$lib/components/Container.svelte";
    import {goto} from '$app/navigation';
    let opacity = false;
    let Goto=()=> history.back();

</script>

<TrainingHeader>
    <Cross {opacity}{Goto}/>
</TrainingHeader>

<Container>

    <div class="reg-title text-20b">Ваши параметры PARAMS ADDING</div>
    <div class="form-container">
            <form>
                <div class="name-container">
                    <label class="text-12s c-dark-gray" for="weight">Вес</label>
                    <input class="text-14s" type="text" name="weight"  />
                </div>
        
                <div class="lastname-container">
                    <label class="text-12s c-dark-gray" for="height">Рост</label>
                    <input class="text-14s" type="text" name="height"  />
                </div>

                <div class="email-container">
                    <label class="text-12s c-dark-gray" for="age">Возраст</label>
                    <input class="text-14s" type="number" name="age"/>
                </div>
        
                <div class="password-container">
                    <label class="text-12s c-dark-gray" for="password">Пол</label>
                    <div class="sex-container">
                        <label class="text-14s sex-female" for="sex">Женский<input type="radio" name="sex" value="female" id="female" checked></label>
                        <label class="text-14s sex-male" for="sex">Мужской<input type="radio" name="sex" value="male" id="male"></label>
                    </div>
                </div>

        
            </form>
    </div>

    

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="button-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="big-black-button _black" on:click={Goto}>
            <div class="start-training-text text-16s">Сохранить</div>
        </div>
    </div>
</Container>

<div class="footer__nav">
    <a href="/trainings" class="footer__nav-item">
        <div class="footer__icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="none" viewBox="0 0 26 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.25 5.25H7a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h2.25c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19 5.25h-2.25A.75.75 0 0 0 16 6v12c0 .41.34.75.75.75H19c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19.75 7.5H22a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-2.25M6.25 16.5H4a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 4 7.5h2.25M10 12h6M22.75 12h1.5M1.75 12h1.5"/>
            </svg>
        </div>
        <div class="footer__text text-12s c-dark-gray">Тренировки</div>
    </a>
    <a href="/profile_nodata" class="footer__nav-item">
        <div class="footer__icon-container __active">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12 9-9M18.37 5.63a9.02 9.02 0 1 0 1.75 2.49"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.18 8.82a4.5 4.5 0 1 0 1.31 2.93"/>
            </svg>
        </div>
        <div class="footer__text text-12s c-dark-gray c-blue">Цели</div>
    </a>
    <a href="/user-data" class="footer__nav-item">
        <div class="footer__icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.98 18.7a6.75 6.75 0 0 1 12.04 0"/>
              </svg>
        </div>
        <div class="footer__text text-12s c-dark-gray c-dark-gray">Профиль</div>
    </a>
</div>



<style>
    .sex-container {
        flex-direction: row;
        margin-top: 2.05vw;
        padding-left: 4px;
    }
    .sex-container label{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    input[type='radio'] {
        outline: 1px solid var(--gray);
        width: 16px;
        height: 16px;
        background-color: none;
        outline-offset: 4px;
        border: none;
        border-radius: 100px;
        padding: 0;
        margin-right: 12px;
    }
    .sex-female {
        margin-right: 24px;
    }
    input[type='radio']:checked {
        outline: 1px solid #589BFF;
        width: 16px;
        height: 16px;
        background-color: #589BFF;
        outline-offset: 4px;
        border: none;
    }
    form div {
        display: flex;
        flex-direction: column;
    }
    .name-container, .lastname-container, .email-container, .password-container  {
        position: relative;
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
        margin-bottom: 26.15vw !important;
    }
    .reg-title {
        margin-top: 2.05vw;
        margin-bottom: 4.1vw;
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
    label.sex-male {
        flex-direction: row;
    }
    label.sex-male input {
        margin-right: 0;
        margin-left: 12px;
    }
    .name-container::after {
        content: 'кг';
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: calc(14/390*100vw);
        line-height: 1.43em;
        text-align: right;
        color: #A5AAB4;
        position: absolute;
        right: 0;
        bottom: 1.53vw;
    }
    .lastname-container::after {
        content: 'см';
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: calc(14/390*100vw);
        line-height: 1.43em;
        text-align: right;
        color: #A5AAB4;
        position: absolute;
        right: 0;
        bottom: 1.53vw;
    }
    .email-container::after {
        content: 'год';
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: calc(14/390*100vw);
        line-height: 1.43em;
        text-align: right;
        color: #A5AAB4;
        position: absolute;
        right: 0;
        bottom: 1.53vw;
    }
    .footer__nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--light-gray);
        display: flex;
        justify-content: space-between;
        padding: 2.05vw 6.92vw 1vw;
        z-index: 2;
    }
    .footer__nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 0 0 20.5vw;
    }
</style>