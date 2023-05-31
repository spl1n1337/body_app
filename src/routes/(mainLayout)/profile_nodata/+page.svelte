<script>
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import Container from "$lib/components/Container.svelte";
    import profileicon from "$lib/icons/frame.png";
    import crossicon from "$lib/icons/cross-icon.svg";
    import paramsicon1 from "$lib/icons/paramsicon.svg";
    import paramsicon2 from "$lib/icons/paramsicon2.svg";
    import plus from "$lib/icons/plus.svg";
    import right from "$lib/icons/chevron-right-black.svg";
    import myparams from "$lib/icons/myparams.svg";
    import {goto} from '$app/navigation';
    
    let bgcolor = 'bg-blue params-header';
</script>


<div class="profile-header bg-blue">
    <div class="profile-icon">
        <img src="{profileicon}" alt="qweqw">
    </div>

    <div class="params-container">
        <div class="params-name text-16s c-white">Вес <span class="params-date"></span></div>
        <div class="params-value">
            <div class="params-weight text-32s c-white">- -</div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="params-plus bg-white" on:click={()=>goto('/new-weight')}>
                <img src="{plus}" alt="plus">
            </div>
        </div>
        
    </div>

</div>


<Container>
    <div class="nothing-data bg-l-gray">
        <img src="{paramsicon1}" alt="q" class="nothing-img _1">
        <img src="{paramsicon2}" alt="q" class="nothing-img _2">
        <img src="{crossicon}" alt="" class="nothing-img _3">

        <div class="nothing-title text-16s">Изменение веса</div>
        <div class="nothing-descr text-16m c-gray">Здесь будет ваш график изменений массы тела</div>
    </div>
</Container>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="my-params bg-l-gray" on:click={()=> goto('/params/my-data')}>
    <img src="{myparams}" alt="" class="my-params-icon">
    <div class="my-params-text text-16s">Мои параметры</div>
    <img src="{right}" alt="" class="my-params-icon">
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
    .profile-icon {
        border-radius: 20px;
        width: 12.3vw;
        height: 12.3vw;
        overflow: hidden;
        margin-bottom: 5.12vw;
    }
    .profile-header {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        padding: 4.19vw 7.18vw;
        border-radius: 0px 0px 20px 20px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 5;
        display: flex;
        justify-content: space-between;
    }
    .params-container {
        background: rgba(255, 255, 255, 0.12);
        border-radius: 20px;
        padding: 4.1vw;
        width: 100%;
        margin-bottom: 3vw;
    }
    .params-value {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .params-name {
        opacity: 0.5;
        margin-bottom: 1vw;
    }
    .params-plus {
        border-radius: 16px;
        overflow: hidden;
        padding: 2.56vw;
    }
    .nothing-data {
        position: absolute;
        left: 7.18vw;
        right: 7.18vw;
        top: 61.53vw;
        padding: 6.15vw;
        border-radius: 20px;
        overflow: hidden;
        min-height: 65.64vw;
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

</style>