<script>
	import TrainingHeader from "$lib/components/TrainingHeader.svelte";
	import BackArrow from "$lib/components/BackArrow.svelte";
	import TrainingTimer from "$lib/components/TrainingTimer.svelte";
    import pause from "$lib/icons/PauseCircle.svg"
    import nextAr from "$lib/icons/chevron-right.svg"
    import nextExercise from "$lib/icons/next-exercise.jpg"
    import {goto} from '$app/navigation';
    let time = '00:05';


    const backFunction = (event) => {
    event.stopPropagation();
    history.back()
    };
</script>

<TrainingHeader>
    <BackArrow class='bg-green' {backFunction}/>
    <TrainingTimer {time}/>
</TrainingHeader>

<div class="exercise__bg">
    <div class="overlay"></div>
    <div class="exercise__title c-white">
        Начинаем <br>
        тренировку
    </div>
</div>




<div class="exercise__item">
    <img class="exercise__img" src="{nextExercise}" alt="qwe">
    <div class="exercise__text">
        <div class="next-exercise">Далее</div>
        <div class="exercise__name text-14b c-dark">Наклоны вперед в фитнес-резинке</div>
    </div>
</div>








<div class="exercise__footer__wrapper">
    <div class="exercise__progressbar">
        <div class="progress-line"></div>
    </div>
    <div class="exercise__footer bg-white">
        <div class="exercise__pause bg-black">
            <img src="{pause}" alt="qwe" class="exercise__pause__icon mr-4">
            <div class="exercise__pause-text text-14s c-white">Пауза</div>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={()=> goto('/trainings/0/exercise2')} class="exercise__pause bg-blue">
            <div class="exercise__pause-text text-14s c-white">Старт</div>
            <img src="{nextAr}" alt="qwe" class="exercise__pause__icon ml-8">
        </div>
    </div>
</div>




<style>
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
    .next-exercise {
        font-family: 'Unbounded';
        font-weight: 700;
        font-size: calc(20/390*100vw);
        line-height: 1.4em;
        color: #DCDEE3;
    }
    .exercise__text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .exercise__img {
        object-fit: cover;
        flex: 0 0 29.5%;
        border-radius: 16px;
        overflow: hidden;
        margin-right: 5.12vw;
    }
    .exercise__name {
        font-size: calc(14/390*100vw);
        margin-right: calc(65/390*100vw);
        line-height: 1.42em;
        margin-bottom: 3vw;
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
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-position-y: 4vw;
    }
    .overlay {
        position: absolute;
        z-index: 2;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
    }
    .exercise__title {
        font-family: 'Unbounded';
        font-weight: 700;
        font-size: calc(28/390*100vw);
        line-height: 1.285em;
        text-align: center;
        position: relative;
        z-index: 3;
        top: 71vw;
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