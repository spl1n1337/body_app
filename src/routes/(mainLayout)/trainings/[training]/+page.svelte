<script>
    // /** @type {import('./$types').PageData} */
    export let data;
    import dumbbell from '$lib/icons/dumbbell.svg';
    import playIcon from '$lib/icons/vector-play.svg';
    import timer from '$lib/icons/timer.svg';
    import BackArrow from "$lib/components/BackArrow.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
	import Container from "$lib/components/Container.svelte";
    import NavFooter from '$lib/components/NavFooter.svelte'
    import {linkRoad, currentTraining} from '$lib/stores.js'
    import StartTraining from "$lib/components/StartTraining.svelte";
    import {goto} from '$app/navigation';


    let trainingsACtive = 1;

    let trainingInfo = data.trainingData;
    let pageIndex = data.training_index;
    const backFunction = (event) => {
    event.stopPropagation();
    history.back()
    };
    let current;
    currentTraining.set(trainingInfo.exercises)
    console.log($currentTraining)


    function passCurrentTraining () {
        currentTraining.set(trainingInfo.exercises)
    }

</script>

<TrainingHeader>
    <BackArrow {backFunction}/>
</TrainingHeader>


<Container>
    <div class="exercise__header text-b20">{trainingInfo.name}</div>
    <div class="exercise__wrapper">
        {#each trainingInfo.exercises as exercise}
            <div class="exercise__item">
                <div class="exercise__img">
                    <div class="play-icon"><img src="{playIcon}" alt="q"></div>
                    <img class="exercise__image" src="{$linkRoad+'/'+exercise.preview}" alt="{exercise.name}">
                </div>
                <div class="exercise__text">
                    <div class="exercise__title text-14b">{exercise.name}</div>
                    <div class="exercise__info">
                        {#if exercise.type == 'repeats'}
                        <img src="{dumbbell}" alt="icon" class="exercise__icon">
                        <div class="exercise__amount">{exercise.repeats}</div>
                        {/if}
                        {#if exercise.type == 'time'}
                        <img src="{timer}" alt="icon" class="exercise__icon">
                        <div class="exercise__amount">{exercise.time}</div>
                        {/if}
                        
                    </div>
                </div>
            </div>
        {/each}
    </div>
</Container>


<NavFooter {trainingsACtive}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <StartTraining backFunction={()=> goto(`${pageIndex}/exercise`)} on:click={passCurrentTraining()}/>
</NavFooter>



<style>
    .exercise__wrapper {
        margin-bottom: 12vw;
    }
    .exercise__header {
        margin-bottom: 4.1vw;
    }
    .exercise__item:not(:last-child) {
        margin-bottom: 3.07vw;
    }
    .exercise__item {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: stretch;
        padding: 4.1vw;
        background-color: var(--light-gray);
        border-radius: 20px;
    }
    .exercise__title {
        font-size: calc(14/390*100vw);
        margin-right: calc(65/390*100vw);
        line-height: 1.43em;
        margin-bottom: 3vw;
    }
    .exercise__text {
        width: 100%;
    }
    .exercise__img {
        object-fit: cover;
        flex: 0 0 29.5%;
        border-radius: 16px;
        overflow: hidden;
        margin-right: 5.12vw;
        position: relative;
    }
    .exercise__image {
        width: 23.03vw;
        height: 23.07vw;
        object-fit: cover;
    }
    .exercise__icon {
        width: auto;
        margin-right: calc(8/390*100vw);
        position: relative;
    }
    .exercise__info {
        display: flex;
    }
    .exercise__amount {
        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 1.5em;
        color: var(--dark-gray);
    }
    .play-icon img {
        width: auto;
    }
    .play-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.24);
backdrop-filter: blur(2px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 12px;
padding: 2vw;
display: flex;
justify-content: center;
align-items: center;
width: 8vw;
height: 8vw;
    }
</style>