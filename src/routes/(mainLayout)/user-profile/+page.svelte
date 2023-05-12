<script>
    import buttonIcon from "$lib/icons/sett.svg";
    import hurt from "$lib/icons/hurt.svg";
    import user from "$lib/icons/user.jpg"
    import Container from "$lib/components/Container.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import BackArrow from "$lib/components/BackArrow.svelte";
    import TimeChart from "$lib/components/TimeChart.svelte";
    import {goto} from '$app/navigation';
    let backFunction = ()=> goto('/user-profile-edit');

</script>

<TrainingHeader>
    <BackArrow {backFunction} {buttonIcon}/>
</TrainingHeader>

<Container>

    <div class="user-container">
        <div class="user-icon"><img src="{user}" alt="q"></div>
        <div class="user-name text-20b">Оля Фролова</div>
        <div class="user-email text-16m c-dark-gray">olgafrolova@gmail.com</div>
    </div>

    <div class="blue-params bg-blue">
        <div class="blue-params-item text-14s c-white">
            <img class="hurt" src="{hurt}" alt="heart">
            Всего тренировок
        </div>
        <div class="blue-params-item text-20b c-white">
            18
        </div>
    </div>

    <div class="nothing-data bg-black">
        <div class="nothing-title text-14s c-white">Минут за тренировкой</div>
        <TimeChart/>
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


<style>
    .blue-params {
        position: fixed;
        top: 71vw;
        left: 7.18vw;
        right: 7.18vw;
    }
    .hurt {
        width: auto;
        margin-right: 3vw;
    }

    .user-container {
        position: fixed;
        top: 16.4vw;
        left: 50%;
        transform: translateX(-50%);
        z-index: 5;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .user-icon {
        width: 28.7vw;
        height: 28.7vw;
        border-radius: 100px;
        overflow: hidden;
        margin-bottom: 5.12vw;
    }
    .user-icon img {
        width: auto;
        position: relative;
        left: 50%;
        transform: translateX(-67%);
    }
    .user-name {
        margin-bottom: 1vw;
    }



    .big-black-button._black {
        margin-bottom: 26.15vw !important;
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
    .blue-params {
        border-radius: 16px;
        padding: 4.1vw;
        display: flex;
        justify-content: space-around;
        margin-bottom: 4.65vw;
    }
    .blue-params-item {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nothing-data {
        position: fixed;
        left: 7.18vw;
        right: 7.18vw;
        top: 94vw;
        padding: 6.15vw;
        padding-bottom: 10vw;
        border-radius: 20px;
        overflow: hidden;
        min-height: 74vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
    }
    .nothing-img {
        width: auto;
        position: absolute;
    }
    .nothing-img._1 {
        top: 19.23vw;
        left: 50%;
        transform: translateX(-50%);
    }
    .nothing-img._2 {
        top: 13.3vw;
        right: 10.26vw;
    }
    .nothing-img._3 {
        top: 31.2vw;
        left: 14.8vw;
    }
    .nothing-descr {
        position: absolute;
        bottom: 5.89vw;
        left: 15.38vw;
        right: 15.38vw;
        text-align: center;
    }
    .my-params {
        position: absolute;
        border-radius: 16px;
        z-index: 5;
        top: 130vw;
        left: 7.18vw;
        right: 7.18vw;
        padding: 4.1vw 5.12vw;
        display: flex;
        align-items: center;
    }
    .my-params-icon {
        width: auto;
    }
    .my-params-text {
        width: 100%;
        margin-left: 16px;
    }
    @media (max-width: 389px) {
        .button-container {
            bottom: 0;
        }
        .big-black-button._black {
            margin-bottom: 1vw;
        }
        .nothing-data {
            min-height: auto;
        }
        .nothing-title {
            margin-bottom: 20px;
        }
    }
</style>