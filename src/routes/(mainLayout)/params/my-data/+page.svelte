<script>
    import buttonIcon from "$lib/icons/edit.svg";
    import plus from "$lib/icons/plus.svg";
    import Container from "$lib/components/Container.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import BackArrow from "$lib/components/BackArrow.svelte";
    import {goto} from '$app/navigation';
    let backFunction =()=> goto('/profile_data');
    let backFunction1 =()=> goto('/params');


    const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const now = new Date();

    const weekday = weekdays[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    const dateString = `${day} ${month} ${year}, ${weekday}`;

</script>

<TrainingHeader>
    <BackArrow backFunction={()=>history.back()}/>
    <BackArrow backFunction={backFunction1} {buttonIcon}/>
</TrainingHeader>

<Container>

    <div class="reg-title text-20b">Мои параметры</div>

    <div class="blue-params bg-blue">
        <div class="blue-params-item">
            <div class="params-name text-12s c-white">Рост</div>
            <div class="params-value text-16s-u c-white">165</div>
        </div>
        <div class="blue-params-item">
            <div class="params-name text-12s c-white">Возраст</div>
            <div class="params-value text-16s-u c-white">32</div>
        </div>
        <div class="blue-params-item">
            <div class="params-name text-12s c-white">Вес</div>
            <div class="params-value text-16s-u c-white">50 кг</div>
        </div>
    </div>

    <div class="date-container">
        <div class="date text-12s c-dark-gray">{dateString}</div>
        <div class="time text-12s c-dark-gray">{timeString}</div>
    </div>

    <div class="params-container bg-l-gray">
        <div class="value-item">
            <div class="value-name text-12s c-dark-gray">Грудь</div>
            <div class="value-scrore text-16s">165</div>
        </div>
        <div class="value-item">
            <div class="value-name text-12s c-dark-gray">Талия</div>
            <div class="value-scrore text-16s">165</div>
        </div>
        <div class="value-item">
            <div class="value-name text-12s c-dark-gray">Бёдра</div>
            <div class="value-scrore text-16s">165</div>
        </div>
        <div class="value-item">
            <div class="value-name text-12s c-dark-gray">Рука</div>
            <div class="value-scrore text-16s">- -</div>
        </div>
        <div class="value-item">
            <div class="value-name text-12s c-dark-gray">Бедро</div>
            <div class="value-scrore text-16s">165</div>
        </div>
        <div class="value-item">
            <div class="value-name text-12s c-dark-gray">Голень</div>
            <div class="value-scrore text-16s">- -</div>
        </div>
    </div>

</Container>
     <!-- svelte-ignore a11y-click-events-have-key-events -->
     <div class="button-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="big-black-button _black" on:click={()=> goto('/params/sizes')}>
            <img src="{plus}" alt="q" class="button-icon">
            <div class="start-training-text text-16s">Добавить замеры тела</div>
        </div>
    </div>


<div class="footer__nav">
    <a href="/trainings" class="footer__nav-item">
        <div class="footer__icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="none" viewBox="0 0 26 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.25 5.25H7a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h2.25c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19 5.25h-2.25A.75.75 0 0 0 16 6v12c0 .41.34.75.75.75H19c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19.75 7.5H22a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-2.25M6.25 16.5H4a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 4 7.5h2.25M10 12h6M22.75 12h1.5M1.75 12h1.5"/>
            </svg>
        </div>
        <div class="footer__text text-12s c-dark-gray">Тренировки</div>
    </a>
    <a href="/targets" class="footer__nav-item">
        <div class="footer__icon-container __active">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12 9-9M18.37 5.63a9.02 9.02 0 1 0 1.75 2.49"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.18 8.82a4.5 4.5 0 1 0 1.31 2.93"/>
            </svg>
        </div>
        <div class="footer__text text-12s c-dark-gray c-blue">Цели</div>
    </a>
    <a href="/user-profile" class="footer__nav-item">
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
    .big-black-button._black {
        margin-bottom: 26.15vw !important;
    }
    .reg-title {
        margin-top: 2.05vw;
        margin-bottom: 4.615vw;
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .params-name {
        opacity: 0.5;
        margin-bottom: 1vw;
    }
    .date-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2vw;
    }
    .params-container {
        padding: 4.1vw 6.15vw;
        border-radius: 16px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 6.15vw;
        row-gap: 4.1vw;
    }
    .value-name {
        margin-bottom: 1.54vw;
    }
    .button-icon {
        width: auto;
        filter: invert(100%);
        margin-right: 2.56vw;
    }
</style>