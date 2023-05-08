<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import BackArrow from "$lib/components/BackArrow.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
	import Container from "$lib/components/Container.svelte";
    import { trainingsInfo } from '$lib/stores.js';
    import { exercises } from '$lib/stores.js';
    import NavFooter from '$lib/components/NavFooter.svelte'
    import StartTraining from "$lib/components/StartTraining.svelte";
    import {goto} from '$app/navigation';

    let trainingsACtive = 1;

    const backFunction = (event) => {
    event.stopPropagation();
    history.back()
    };

</script>

<TrainingHeader>
    <BackArrow {backFunction}/>
</TrainingHeader>


<Container>
    <div class="exercise__header text-b20">{$trainingsInfo[+data.training].name}</div>
    <div class="exercise__wrapper">
        {#each $exercises as exercise}
            <div class="exercise__item">
                <img class="exercise__img" src="{exercise.img}" alt="{exercise.name}">
                <div class="exercise__text">
                    <div class="exercise__title text-14b">{exercise.name}</div>
                    <div class="exercise__info">
                        <img src="{exercise.icon}" alt="icon" class="exercise__icon">
                        <div class="exercise__amount">{exercise.amount}</div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</Container>


<NavFooter {trainingsACtive}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <StartTraining backFunction={()=> goto('/trainings/0/exercise1')}/>
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
    }
    .exercise__icon {
        width: auto;
        margin-right: calc(8/390*100vw);
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
</style>