<script>
     // /** @type {import('./$types').PageData} */
     export let data;

	import TrainingHeader from "$lib/components/TrainingHeader.svelte";
	import BackArrow from "$lib/components/BackArrow.svelte";
	import TrainingTimer from "$lib/components/TrainingTimer.svelte";
    import pause from "$lib/icons/PauseCircle.svg"
    import nextAr from "$lib/icons/chevron-right.svg"
    import nextExercisePic from "$lib/icons/next-exercise.jpg"
    import NextExercise from "$lib/components/NextExercise.svelte";
    import {goto} from '$app/navigation';
    import {currentTraining, linkRoad} from '$lib/stores.js';
    import { onMount } from "svelte";

    let videoElement;
    let disable;
    let trainingProgramm;
    let trainingInfo = data.trainingData;

    const formatter = new Intl.DateTimeFormat('en', {
        minute: '2-digit',
        second: '2-digit'
    });
    let state = 'start';
    let repeatsOrTime = 10;
    let countdownTimer;
    let currentTime = 0;
    let isTimerActive = false;
    let interval;
    currentTraining.subscribe(value => {
        trainingProgramm = value;
    })
    let exercisesCount = trainingProgramm.length;
    let exerciseIndex = 0;
    
    function startTimer(time) {
        if (isTimerActive) {
            return;
        }
        currentTime = time;
        isTimerActive = true;

        interval = setInterval(() => {
            if(currentTime > 0){
                currentTime--;;
                countdownTimer = formatter.format(currentTime * 1000);
                
            } else {
                if(state == 'start'){
                    state = 'exercise';
                }
                clearInterval(interval);
                isTimerActive = false;
            }
        }, 1000)
    }
    $: {
        if(state == 'exercise') {
            if(trainingProgramm[exerciseIndex].type == 'repeats') {
                repeatsOrTime = trainingProgramm[exerciseIndex].repeats;
                console.log(repeatsOrTime);
                videoElement.play();
            }
            if(trainingProgramm[exerciseIndex].type == 'time') {
                repeatsOrTime = trainingProgramm[exerciseIndex].time;
                startTimer(repeatsOrTime);
                videoElement.play();
            }
        }
    }
    function stopTimer() {
        console.log('sttop');
        videoElement.pause();
        clearInterval(interval);
        isTimerActive = false;
    }
    function resumeTimer() {
        console.log('resume')
        videoElement.play();
        if (isTimerActive) {
            // Таймер уже активен, ничего не делаем
            return;
        }

        isTimerActive = true;

        interval = setInterval(() => {
            if (currentTime > 0) {
            currentTime--;
            countdownTimer = formatter.format(currentTime * 1000);
            } else {
            if (state === 'start') {
                state = 'exercise';
                console.log(state);
            }
            clearInterval(interval);
            isTimerActive = false;
            }
        }, 1000);
    }

    const backFunction = (event) => {
    event.stopPropagation();
    history.back()
    };
    onMount(()=> {
        startTimer(10);
    })

    console.log(exercisesCount)
</script>


<TrainingHeader>
    <BackArrow class='bg-green' {backFunction}/>
    <TrainingTimer time={state == 'start' || trainingProgramm[exerciseIndex].type == 'time' ? countdownTimer : repeatsOrTime} bg_color={state == 'exercise' ? 'bg-red' : 'bg-green'}/>
</TrainingHeader>

<NextExercise nextExercise={nextExercisePic} nextExerciseTitle={trainingProgramm[exerciseIndex].name} disable={(state === 'exercise') ? ('disable') : ('')}/>

<div class="exercise__bg {(state === 'exercise') ? ('disable') : ('')}">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video 
        bind:this={videoElement}
        muted 
        preload="auto"
        playsinline 
        loop 
        class="exercise__video"
		poster="{$linkRoad + trainingProgramm[exerciseIndex].preview}" 
        src="{$linkRoad + trainingProgramm[exerciseIndex].video}"
        >
	</video>
    <div class="overlay"></div>
    <div class="exercise__title c-white">
        Начинаем <br>
        тренировку
    </div>
</div>

<div class="exercise__footer__wrapper">
    <div class="exercise__progressbar">
        <div class="progress-line"></div>
    </div>
    <div class="exercise__footer bg-white">

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="exercise__pause bg-black {state === 'start' ? 'disable' : ''} {trainingProgramm[exerciseIndex].type === 'repeats' && state === 'exercise' ? 'repeats' : ''}" 
        on:click={(e) => {
            if(state != 'start') {
                if (trainingProgramm[exerciseIndex].type === 'repeats') { e.preventDefault(); } 
                if (isTimerActive) 
                { stopTimer();} 
                else
                { resumeTimer();}
            }
        }}>
            <img src="{pause}" alt="qwe" class="exercise__pause__icon mr-4">
            <div class="exercise__pause-text text-14s c-white">Пауза</div>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="exercise__pause bg-blue"
        on:click={(e) => {
            if(state == 'start') {
                state = 'exercise';
            }
        }}>
            <div class="exercise__pause-text text-14s c-white">{state == 'start' ? 'Старт' : 'Отдых'}</div>
            <img src="{nextAr}" alt="qwe" class="exercise__pause__icon ml-8">
        </div>
    </div>
</div>




<style>
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
        width: 100%;
        padding: 3.07vw 0;
    }
    .exercise__pause.repeats {
        display: none;
    }
    .exercise__pause:first-of-type {
        margin-right: 4vw;
    }
    .mr-4 {
        margin-right: 1.02vw;
    }
    .ml-8 {
        margin-left: 2.04vw;
    }
    .exercise__pause.disable {
        background-color: var(--gray);
    }
    .exercise__pause.disable .exercise__pause-text {
        color: var(--dark);
    }
    .exercise__pause.disable .exercise__pause__icon {
        filter: invert(1);
    }
    .exercise__bg.disable .overlay {
        display: none;
    }
    .exercise__bg.disable .exercise__title {
        display: none;
    }
    .exercise__video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
