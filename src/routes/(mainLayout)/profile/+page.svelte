<script>
    import buttonIcon from "$lib/icons/sett.svg";
    import hurt from "$lib/icons/hurt.svg";
    import user from "$lib/icons/user.jpg"
    import Container from "$lib/components/Container.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import Nothing from "$lib/components/Nothing.svelte"
    import BackArrow from "$lib/components/BackArrow.svelte";
    import TimeChart from "$lib/components/TimeChart.svelte";
    import {goto} from '$app/navigation';
	import { onMount } from "svelte";

    let backFunction = ()=> goto('/user-profile-edit');
    let padding = 'pb-0';


    export let data;
    onMount(()=> {
        console.log(!data.user)
    })
</script>

{#if data.user}
<TrainingHeader bgcolor={padding}>
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
{:else if !data.user}
<Nothing/>
{/if}


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
    :global(.pb-0) {
        padding-bottom: 0 !important;
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