<script>
    // import { trainingsInfo } from '$lib/stores.js';
    import { linkRoad } from "$lib/stores.js"
    import TrainingHeader from '$lib/components/TrainingHeader.svelte';
    import NavFooter from '$lib/components/NavFooter.svelte';
    import Container from '$lib/components/Container.svelte';
    import {goto} from '$app/navigation';
    import { onMount } from 'svelte';

    export let data;

    let trainingsInfo = data.trainingsData 

    console.log(trainingsInfo)


    let trainingsACtive = 1;
</script>


<TrainingHeader>
    <h1 class="trainings__heading text-20b">Тренировки</h1>
</TrainingHeader>


<Container>
    <div class="training-container">
        {#each trainingsInfo as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => goto(`/trainings/${item.id}`)} class="training-card {item.bg_color}">
            <div class="training__text-block">
                <div class="treaining__title text-16b">{item.name}</div>
                <div class="training__cta text-14s bg-l-gray">Начать</div>
            </div>
            <div class="training__img"><img src={$linkRoad}{item.preview} alt="qwe"></div>
        </div>
        {/each}
    </div>
</Container>

<NavFooter {trainingsACtive}/>


<style>
    :global(body) {
        overflow-y: auto;
    }
    .trainings__heading {
        width: 100%;
    }
    .training-card {
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        margin-bottom: 4.1vw;
    }
    .training__text-block {
        padding-top: 5.13vw;
        padding-left: 6.15vw;
        padding-bottom: 6.15vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 44%;
    }
    .treaining__title {
        margin-bottom: 20.5vw;
    }
    .training__cta {
        padding: 2.56vw 5.13vw;
        border-radius: 16px;
        width: min-content;
    }
    .training__img {
        width: 66%;
        display: flex;
        justify-content: flex-end;
    }
    .training__img img {
        width: auto;
        height: 100%;
    }
    @media (max-width: 389px) {
        .training-card {
            overflow: hidden;
        }
        .container {
            padding: 20.5vw 7.18vw 28vw;
        }
    }
</style>