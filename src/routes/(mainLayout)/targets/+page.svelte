<script>
    import crossicon from "$lib/icons/cross-icon.svg";
    import paramsicon1 from "$lib/icons/paramsicon.svg";
    import paramsicon2 from "$lib/icons/paramsicon2.svg";
    import Nothing from "$lib/components/Nothing.svelte";
    import Container from "$lib/components/Container.svelte";
    import profileicon from "$lib/icons/frame.png";
    import plus from "$lib/icons/plus.svg";
    import right from "$lib/icons/chevron-right-black.svg";
    import myparams from "$lib/icons/myparams.svg";
    import WeightChart from "$lib/components/WeightChart.svelte";
    import {goto} from '$app/navigation';
    import { onMount } from 'svelte';


    export let data; // <---Данные пользоватлея здесь (смотри +page.server.js)
    let lastTimeStamp;
    let userWeightsData = data.user ? data.user.params.weight : null;
    let userWeights = (userWeightsData) ? (userWeightsData.slice(-4).map((item) => item.weight)) : null;
    if(userWeightsData) {
        lastTimeStamp = (function() {
        let x = userWeightsData.slice(-1)[0].timestamp.split(/[\/\s:]/)
        return `${x[1]}.${x[0]}.${x[2].slice(-2)}`
    })();
    }
    let weightsCount = userWeightsData ? userWeightsData.length : 0;
    onMount(async () => {
        console.log(data);
	});


    
</script>


{#if data.user}
<div class="profile-header bg-blue">
    <div class="profile-icon">
        <img src="{profileicon}" alt="qweqw">
    </div>

    <div class="params-container">
        <div class="params-name text-16s c-white">
            Вес {lastTimeStamp ? lastTimeStamp : ''}
        </div>
        <div class="params-value">
            <div class="params-weight text-32s c-white">
                {!userWeights ? '- -' : userWeights.slice(-1)}
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="params-plus bg-white" on:click={()=> goto('/targets/new-weight')}>
                <img src="{plus}" alt="plus">
            </div>
        </div>
        
    </div>

</div>


<Container>
    {#if weightsCount < 4}
    <div class="nothing-data bg-l-gray">
        <img src="{paramsicon1}" alt="q" class="nothing-img _1">
        <img src="{paramsicon2}" alt="q" class="nothing-img _2">
        <img src="{crossicon}" alt="" class="nothing-img _3">

        <div class="nothing-title text-16s">Изменение веса</div>
        <div class="nothing-descr text-16m c-gray">Здесь будет ваш график изменений массы тела</div>
    </div>
    {:else}
    <div class="nothing-data bg-l-gray">
        <div class="nothing-title text-16s">Изменение веса</div>
        <WeightChart datapoints={userWeights}/>
    </div>
    {/if}

    
</Container>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="my-params bg-l-gray" on:click={()=> goto('/params/my-data')}>
    <img src="{myparams}" alt="" class="my-params-icon">
    <div class="my-params-text text-16s">Мои параметры</div>
    <img src="{right}" alt="" class="my-params-icon">
</div>


{:else}
<Nothing/>
{/if}





<style>
    :global(body) {
        overflow: hidden;
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
</style>