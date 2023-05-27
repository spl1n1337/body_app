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

   const formatter = new Intl.DateTimeFormat('en', {
       minute: '2-digit',
       second: '2-digit'
   });
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


// new methods
   let topButtonValue = '00:10';
//    State
   let state = 'start';
   function isExercise() {
        state = 'exercise';
        if(trainingProgramm[exerciseIndex].type == 'repeats') {
        clearInterval(interval);
        isTimerActive = false;
        topButtonValue = trainingProgramm[exerciseIndex].repeats;
        waitForVideoReadyState(videoElement, 'play');
        }
        if(trainingProgramm[exerciseIndex].type == 'time') {
        clearInterval(interval);
        isTimerActive = false;
        topButtonValue = trainingProgramm[exerciseIndex].time;
        waitForVideoReadyState(videoElement, 'play', startTimer(topButtonValue, isRest));
        }
   }
   function isRest() {
        clearInterval(interval);
        isTimerActive = false;
        topButtonValue = '00:30';
        state = 'rest';
        exerciseIndex++;
        startTimer(30, isExercise);
        waitForVideoReadyState(videoElement, 'pause');
   }
   function isStart() {
        clearInterval(interval);
        videoElement.pause();
        isTimerActive = false;
        topButtonValue = '00:10';
        state = 'start';
        exerciseIndex == 0;
        startTimer(10, isExercise);
   }
   function goToFinish() {
    clearInterval(interval);
    isTimerActive = false;
    goto('/trainings/finish')
   }

// new methods
   function startTimer(time, callback) {
       if (isTimerActive) {
           return;
       }
       currentTime = time;
       isTimerActive = true;
       if(trainingProgramm[exerciseIndex].type == 'time') {
        topButtonValue = formatter.format(currentTime * 1000);
       }

       interval = setInterval(() => {
           if(currentTime > 0){
               currentTime--;
               topButtonValue = formatter.format(currentTime * 1000);
           } else {
                if(state == 'exercise' && exerciseIndex == exercisesCount-1 && currentTime == 0) {
                    goToFinish();
                }else {
                    clearInterval(interval);
                    isTimerActive = false;
                    if(callback){callback()};
                }
               
           }
       }, 1000)
   }
   function stopTimer() {
       console.log('sttop');
        videoElement.pause();
       clearInterval(interval);
       isTimerActive = false;
   }
   function resumeTimer() {
       console.log('resume')
       if(state == 'exercise') {
        videoElement.play()
       }
        startTimer(currentTime);
   }
   function getRepeatsWord(count) {
        let word = 'повтор';
        if(count == 1) {
            return word;
        }
        if (count % 10 === 1 && count % 100 !== 11) {
            word += 'а';
        } else if (count % 10 >= 2 && count % 10 <= 4 && !(count % 100 >= 12 && count % 100 <= 14)) {
            word += 'а';
        } else {
            word += 'ов';
        }

        return word;
    }
    async function waitForVideoReadyState(videoElement, action, callback) {
        await new Promise((resolve) => {
            const checkReadyState = () => {
            if (videoElement != undefined && videoElement != null && videoElement.src === $linkRoad + trainingProgramm[exerciseIndex].video)  {
                if (videoElement.readyState >= 3) {
                resolve();
                if(action == 'play') {
                    videoElement.play();
                }else {
                    videoElement.pause()
                    console.log('video pause')
                }
                } else {
                setTimeout(checkReadyState, 100); // Проверяем состояние каждые 100 миллисекунд
                }
            } else {
                setTimeout(checkReadyState, 100); // Проверяем состояние каждые 100 миллисекунд
            }
            };
            checkReadyState();
        });

        // Вызываем колбэк после выполнения условий
        if (typeof callback === 'function') {
            callback();
        }
    }

    



    function handleVideoLoaded() {
        videoElement.play();
        videoElement.removeEventListener('loadeddata', handleVideoLoaded);
    }
    const backFunction = () => {
            if(state == 'start'){
                history.back()
            }else if(state == 'exercise' && exerciseIndex == 0){
                isStart();
            }else if(state == 'rest') {
                state = 'exercise';
                stopTimer()
                exerciseIndex--;
                setTimeout(isExercise, 1000)
            }
        };
    onMount(()=> {
        startTimer(10, isExercise);
        waitForVideoReadyState(videoElement, 'pause')
    })

</script>


<!-- svelte-ignore non-top-level-reactive-declaration -->
<TrainingHeader>
   <BackArrow class='bg-green' backFunction={backFunction}/>
   <TrainingTimer time={
    (trainingProgramm[exerciseIndex].type == 'time' || state == 'start' || state == 'rest') ? (topButtonValue) : (`${topButtonValue} ${getRepeatsWord(topButtonValue)}`)
    } 
    bg_color={
        state == 'exercise' ? 'bg-red' : 'bg-green'
    }/>
</TrainingHeader>

<NextExercise nextExercise={nextExercisePic} nextExerciseTitle={trainingProgramm[exerciseIndex].name} disable={(state === 'exercise') ? ('disable') : ('')}/>

<div class="exercise__bg {(state === 'exercise') ? ('disable') : ('')}">
   <!-- svelte-ignore a11y-media-has-caption -->
   <video 
       bind:this={videoElement}
       muted
       preload="auto"
       autoplay
       playsinline 
       loop 
       class="exercise__video"
       poster="{$linkRoad + trainingProgramm[exerciseIndex].preview}" 
       src="{$linkRoad + trainingProgramm[exerciseIndex].video}"
       >
   </video>
   <div class="poster"></div>
   <div class="overlay"></div>
   <div class="exercise__title c-white">
    {#if state === 'start'}
        Начинаем <br>тренировку
    {:else if state === 'rest'}
        Отдыхаем
    {/if}
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
           if(state == 'exercise' && exerciseIndex == exercisesCount-1) {
                goToFinish();
           }else {

           if(state == 'start' || state == 'rest') {
            isExercise();
           }else if(state == 'exercise' && exerciseIndex < exercisesCount-1) {
            isRest();
           }
           }
       }}>
            <div class="exercise__pause-text text-14s c-white">
                {#if state === 'start'}
                    Старт
                {:else if state === 'exercise'}
                    Отдых
                {:else if state === 'rest'}
                    Далее
                {/if}
            </div>
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
