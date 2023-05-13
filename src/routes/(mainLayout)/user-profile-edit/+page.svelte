<script>
    import hurt from "$lib/icons/hurt.svg";
    import user from "$lib/icons/user.jpg"
    import Container from "$lib/components/Container.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import BackArrow from "$lib/components/BackArrow.svelte";
    import {goto} from '$app/navigation';
    let backFunction = () => history.back();
    let bgcolor = 'aic';
</script>

<TrainingHeader {bgcolor}>
    <BackArrow {backFunction}/>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="save text-16s c-blue" on:click={backFunction}>Сохранить</div>
</TrainingHeader>

<Container>
    <div class="text-20b title">Настройки</div>

    <div class="user-container bg-l-gray">
        <div class="user-icon"><img src="{user}" alt="q"></div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edit-photo text-14s c-blue" on:click={()=> document.querySelector('.modalphoto').classList.add('_active')}>Редактировать фото </div>
    </div>
    <form action="#" class="edit-form">
        <div class="name-container">
            <label class="text-12s c-dark-gray" for="weight">Имя</label>
            <input class="text-14s" type="text" name="weight"  />
        </div>

        <div class="lastname-container">
            <label class="text-12s c-dark-gray" for="height">Фамилия</label>
            <input class="text-14s" type="text" name="height"  />
        </div>

        <div class="email-container">
            <label class="text-12s c-dark-gray" for="age">Почта</label>
            <input class="text-14s" type="number" name="age"/>
        </div>

    </form>


    <div class="edit-btn-wrapper">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="exit text-14s bg-l-gray" on:click={()=> document.querySelector('.modalexit').classList.add('_active')}>Выход</div>
        <div class="delete text-14s c-red">Удалить профиль</div>
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
    <a href="/profile_data" class="footer__nav-item">
        <div class="footer__icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12 9-9M18.37 5.63a9.02 9.02 0 1 0 1.75 2.49"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.18 8.82a4.5 4.5 0 1 0 1.31 2.93"/>
            </svg>
        </div>
        <div class="footer__text text-12s c-dark-gray">Цели</div>
    </a>
    <a href="/user-profile" class="footer__nav-item">
        <div class="footer__icon-container __active">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.98 18.7a6.75 6.75 0 0 1 12.04 0"/>
              </svg>
        </div>
        <div class="footer__text text-12s c-blue">Профиль</div>
    </a>
</div>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modalphoto" on:click={()=> document.querySelector('.modalphoto').classList.remove('_active')}>
    <div class="photo-dialog">
        <div class="swiper"></div>
        <div class="photo-dialog__wrapper">
            <div class="photo-dialog__title text-14s">Выбрать из галереи</div>
            <div class="delete-button text-14s c-red">Удалить</div>
            <div class="cancel text-14s bg-l-gray">Отменить</div>
        </div>

    </div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modalexit" on:click={()=> document.querySelector('.modalexit').classList.remove('_active')}>
    <div class="photo-dialog">
        <div class="swiper"></div>
        <div class="photo-dialog__wrapper">
            <div class="photo-dialog__title text-14s">Вы уверены, что хотите<br>выйти из профиля?</div>
            <div class="cancel text-14s bg-l-gray">Да</div>
            <div class="delete-button text-14s">Отмена</div>
            
        </div>

    </div>
</div>


<style>
    .modalexit .photo-dialog__title {
        margin-bottom: 8.2vw;
    }
    .swiper {
        width: 28px;
        height: 4px;
        background: #E7EBF4;
        border-radius: 20px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .delete-button {
        padding: 2vw 0;
        text-align: center;
        width: 100%;
        margin-top: 2vw;
        margin-bottom: 3vw;
    }
    .cancel {
        border-radius: 16px;
        padding: 3vw 0;
        text-align: center;
        margin-bottom: 4vw;
    }
    .photo-dialog__title {
        text-align: center;
        padding: 2vw 0;
    }
    .photo-dialog {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1.5vw 7vw 4vw 7vw;
        background: #FFFFFF;
        border-radius: 20px 20px 0px 0px;
        opacity: 1;
    }
    .photo-dialog__wrapper {
        padding-top: 6vw;
    }
    .modalphoto, .modalexit {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background: rgb(31 40 48 / 50%);
        z-index: 6;
        visibility: hidden;
    }
    .edit-btn-wrapper {
        position: fixed;
        bottom: 22vw;
        left: 7.18vw;
        right: 7.18vw;
    }
    .delete {
        text-align: center;
        margin-top: 4.5vw;
    }
    .exit {
        width: 100%;
        text-align: center;
        padding: 3vw 0;
        border-radius: 16px
    }
    form div {
        display: flex;
        flex-direction: column;
    }
    .name-container, .lastname-container, .email-container  {
        position: relative;
    }
    .lastname-container {
        margin: 5.3vw 0;
    }
    form div input {
        border-bottom: 1px solid #DCDEE3;
        padding-bottom: 6px;
    }
    form div input:focus {
        border-bottom: 1px solid #589BFF;
    }
    .edit-form {
        background: #F7F8FC;
        border-radius: 16px;
        padding: 6vw;
        margin-bottom: 20vw;
    }

    .user-container {
        z-index: 5;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 6vw;
        border-radius: 16px;
        margin-bottom: 4.5vw;
    }
    .user-icon {
        width: 28.7vw;
        height: 28.7vw;
        border-radius: 100px;
        overflow: hidden;
        margin-bottom: 2vw;
    }
    .user-icon img {
        width: auto;
        position: relative;
        left: 50%;
        transform: translateX(-67%);
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
    :global(header.aic) {
        align-items: center;
    }
    .title {
        margin-bottom: 4.5vw;
    }
    @media (max-width: 389px) {
        .user-container {
            padding: 2vw;
        }
        .user-icon {
            width: 25vw;
            height: 25vw;
        }
        .user-icon img {
            transform: translate(-67%, -3%);
        }
    }
    :global(.modalphoto._active, .modalexit._active) {
        visibility: visible !important;
    }
</style>