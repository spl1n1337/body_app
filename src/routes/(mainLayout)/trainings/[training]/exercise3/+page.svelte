<script>
	import TrainingHeader from "$lib/components/TrainingHeader.svelte";
	import BackArrow from "$lib/components/BackArrow.svelte";
	import TrainingTimer from "$lib/components/TrainingTimer.svelte";
    import pause from "$lib/icons/PauseCircle.svg";
    import nextAr from "$lib/icons/chevron-right.svg";
    import blurPlay from "$lib/icons/blur_play.svg";
    import {goto} from '$app/navigation';
    let bg_color = 'bg-red';
    let time = '2 повтора';

    const backFunction = (event) => {
    event.stopPropagation();
    history.back()
    };
</script>

<TrainingHeader>
    <BackArrow {backFunction}/>
    <TrainingTimer {bg_color}{time}/>
</TrainingHeader>

<div class="exercise__bg"></div>

<div class="blur-play">
    <img src="{blurPlay}" alt="qwe">
</div>

<div class="exercise__footer__wrapper">
    <div class="exercise__progressbar">
        <div class="progress-line"></div>
    </div>
    <div class="exercise__footer bg-white">
        <div class="exercise__pause bg-black">
            <img src="{pause}" alt="qwe" class="exercise__pause__icon mr-4">
            <div class="exercise__pause-text text-14b c-white">Пауза</div>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={()=> goto('/trainings/0/exercise4')} class="exercise__pause bg-blue">
            <div class="exercise__pause-text text-14b c-white">Отдых</div>
            <img src="{nextAr}" alt="qwe" class="exercise__pause__icon ml-8">
        </div>
    </div>
</div>




<style>
    .blur-play {
        position: fixed;
        z-index: 3;
        top: 50%;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.24);
        backdrop-filter: blur(6px);
        border-radius: 20px;
        width: 22.56vw;
        height: 22.56vw;
        transform: translate(-50%, -50%);
    }
    .blur-play img {
        width: auto;
    }
    .exercise__item {
        position: fixed;
        z-index: 3;
        display: flex;
        bottom: 26vw;
        justify-content: space-between;
        padding: 4.1vw;
        background-color: var(--light-gray);
        border-radius: 20px;
        margin: 0 7.18vw;
    }

    .exercise__progressbar {
        height: 1.54vw;
        background: #DCE1F2;
    }
    .progress-line {
        width: 44vw;
        height: 100%;
        background: #227BFF;
        border-radius: 0px 100px 100px 0px;
    }
    .exercise__bg {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-image: url('$lib/TrainingsIcons/exercise1.jpg');
        /* background-position: center; */
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-position-y: 4vw;
    }
    .exercise__footer__wrapper {
        position: fixed;
        z-index: 3;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .exercise__footer {
        display: flex;
        justify-content: space-between;
        padding: 4.1vw 7.18vw;
    }
    .exercise__pause__icon {
        width: 5.13vw;
    }
    .exercise__pause {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        width: 40.2vw;
        padding: 3.07vw 0;
    }
    .mr-4 {
        margin-right: 1.02vw;
    }
    .ml-8 {
        margin-left: 2.04vw;
    }
</style>